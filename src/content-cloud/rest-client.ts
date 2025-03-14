/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContentCloudRestClient } from './content-cloud-rest-client';
import {
	AnyIndependentEntry,
	ContentTypes,
	ContentUserDataTypes,
} from './schema';

export interface RestListResponse<
	ItemType extends object = AnyIndependentEntry,
> {
	skip: number;
	limit: number;
	total: number;
	items: ItemType[];
	sys: {
		type: 'Array';
	};
}

type FilterExists = { exists: boolean };
type FilterIn<T> = { in: T[] };
export interface RestRequestOptions {
	skip?: number;
	limit?: number;

	content_type?: keyof ContentTypes;
	filter?: object;
	order?: string[];
	select?: string[];

	metadata?: {
		tags?: {
			sys?: {
				id?: FilterIn<string> | FilterExists;
				name?: FilterIn<string> | FilterExists;
				customId?: FilterIn<string> | FilterExists;
				uuid?: FilterIn<string> | FilterExists;
			};
		};
	};

	include?: number;
	embed?: number;

	user_data_types?: (keyof ContentUserDataTypes)[];

	query?: string;

	user_data_filter?: {
		[Type in keyof ContentUserDataTypes]: ContentUserDataTypes[Type]['Filter'];
	};
}
export type RestSelectOptions<Entry extends Record<string, any>> =
	Entry extends object
		? {
				[K0 in string & keyof Entry]: `${K0}${
					| ''
					| (Entry[K0] extends object
							? {
									[K1 in string & keyof Entry[K0]]: `.${K1}${
										| ''
										| (Entry[K0][K1] extends object
												? {
														[K2 in string & keyof Entry[K0][K1]]: `.${K2}`;
													}[string & keyof Entry[K0][K1]]
												: never)}`;
								}[string & keyof Entry[K0]]
							: never)}`;
			}[string & keyof Entry]
		: never;
type SelectedKeys<Entry, Select, Prefix extends string = ''> = {
	[K in string & keyof Entry]: Select extends
		| `${Prefix}${K}`
		| `${Prefix}${K}.${string}`
		? K
		: never;
}[string & keyof Entry];
export type RestSelect<
	Entry extends Record<string, any>,
	Select extends RestSelectOptions<Entry> & string,
> = {
	[K0 in SelectedKeys<Entry, Select>]: K0 extends Select
		? Entry[K0]
		: {
				[K1 in SelectedKeys<
					Entry[K0],
					Select,
					`${K0}.`
				>]: `${K0}.${K1}` extends Select
					? Entry[K0][K1]
					: Pick<
							Entry[K0][K1],
							SelectedKeys<Entry[K0][K1], Select, `${K0}.${K1}.`>
						>;
			};
};

export type TypedRestRequestOptions<
	TypeName extends keyof ContentTypes,
	Select extends RestSelectOptions<ContentTypes[TypeName]['Entry']> & string,
> = RestRequestOptions & {
	content_type: TypeName;
	select?: Select[];
	order?: ContentTypes[TypeName]['Order'][];
	filter?: ContentTypes[TypeName]['Filter'];
};

interface RestClientOptions {
	baseUrl?: string;
	accessToken?: string;
	spaceId?: string;
	environmentId?: string;
	apiVersion?: string;
	fetch?: typeof fetch;
}

function parseJwt(token: string) {
	const base64Url = token.split('.')[1]!;
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join(''),
	);

	return JSON.parse(jsonPayload);
}

const FILTER_NAMES = [
	'in',
	'nin',
	'contains',
	'not_containing',
	'all',
	'some',
	'none',
	'exists',
	'ne',
	'lt',
	'gt',
	'lte',
	'gte',
];
function flattenFilter(filter: Record<string, any>, prefix = '', root = true) {
	const result: Record<string, string> = {};

	// eslint-disable-next-line prefer-const
	for (let [key, value] of Object.entries(filter)) {
		if (value && typeof value === 'object') {
			if (Array.isArray(value)) {
				value = value.join(',');
			} else {
				Object.assign(result, flattenFilter(value, `${prefix}${key}.`, false));
				continue;
			}
		}

		if (!root && FILTER_NAMES.includes(key) && prefix !== 'fields.') {
			result[`${prefix.substring(0, prefix.length - 1)}[${key}]`] = value + '';
		} else {
			result[`${prefix}${key}`] = value + '';
		}
	}

	return result;
}

export class RestClient {
	public readonly system: ContentCloudRestClient;

	protected readonly options: RestClientOptions;
	protected readonly token: Record<string, any>;

	public get spaceId(): string | undefined {
		return this.options.spaceId;
	}
	public get environmentId(): string | undefined {
		return this.options.environmentId;
	}
	public get baseUrl(): string {
		return this.options.baseUrl!;
	}

	constructor(options?: RestClientOptions) {
		this.options = { ...(options ?? {}) };

		if (!this.options.baseUrl) {
			if (typeof process === 'object') {
				this.options.baseUrl =
					process.env.CC_SATELLITE_BASE_URL ?? process.env.CC_BASE_URL;
			}
			if (!this.options.baseUrl) {
				throw Error('baseUrl is required.');
			}
		}

		if (this.options.baseUrl.endsWith('/')) {
			throw new Error('baseUrl must not end with a slash.');
		}

		if (!this.options.accessToken) {
			if (typeof process === 'object') {
				this.options.accessToken = process.env.CC_ACCESS_TOKEN;
			}
		}

		this.token = this.options.accessToken && parseJwt(this.options.accessToken);

		if (!this.options.spaceId) {
			if (this.token?.spaceId) {
				this.options.spaceId = this.token.spaceId;
			}
		}

		if (!this.options.environmentId) {
			if (this.token?.environmentIds?.length) {
				this.options.environmentId = this.token.environmentIds[0];
			}
		}

		this.system = new ContentCloudRestClient({
			baseUrl: this.options.baseUrl,
			accessToken: this.options.accessToken,
			spaceId: this.options.spaceId,
			environmentId: this.options.environmentId,
		});
	}

	async setContentUserData<
		TypeName extends keyof ContentUserDataTypes & string,
	>(
		contentId: string,
		type: TypeName,
		data: ContentUserDataTypes[TypeName]['Update'],
	): Promise<ContentUserDataTypes[TypeName]['Entry']> {
		return await this.system.post(
			`/entries/${contentId}/user_data/${type}`,
			data,
		);
	}

	async contentCollection<
		TypeName extends keyof ContentTypes & string,
		Select extends RestSelectOptions<ContentTypes[TypeName]['Entry']> &
			string = RestSelectOptions<ContentTypes[TypeName]['Entry']>,
	>(
		options: TypedRestRequestOptions<TypeName, Select>,
	): Promise<
		RestListResponse<RestSelect<ContentTypes[TypeName]['Entry'], Select>>
	>;
	async contentCollection(
		options?: RestRequestOptions,
	): Promise<RestListResponse>;
	async contentCollection(
		options?: RestRequestOptions & {
			content_type?: string;
			select?: string[];
			order?: string[];
			filter?: object;
		},
	) {
		const params: Record<string, any> = {};

		if (options?.content_type) {
			params.content_type = options.content_type;
		}

		if (typeof options?.skip === 'number') {
			params.skip = options.skip.toString();
		}

		if (typeof options?.limit === 'number') {
			params.limit = options.limit.toString();
		}

		if (typeof options?.include === 'number') {
			params.include = options.include.toString();
		}

		if (typeof options?.embed === 'number') {
			params.embed = options.embed.toString();
		}

		if (options?.select?.length) {
			params.select = options.select.join(',');
		}

		if (options?.order?.length) {
			params.order = options.order.join(',');
		}

		if (options?.metadata) {
			Object.assign(params, flattenFilter(options.metadata, 'metadata.'));
		}

		if (options?.query) {
			params.query = options.query;
		}

		if (options?.filter) {
			Object.assign(params, flattenFilter(options.filter));
		}

		if (options?.user_data_filter) {
			if (!options.user_data_types) {
				options.user_data_types = [];
			}

			for (const [name, filter] of Object.entries(options.user_data_filter) as [
				keyof ContentUserDataTypes,
				object,
			][]) {
				Object.assign(params, flattenFilter(filter, `user_data.${name}.`));
				if (!options.user_data_types.includes(name)) {
					options.user_data_types.push(name);
				}
			}
		}

		if (options?.user_data_types?.length) {
			params.user_data_types = options.user_data_types.join(',');
		}

		return await this.system.contentCollection<any>(params);
	}
}
