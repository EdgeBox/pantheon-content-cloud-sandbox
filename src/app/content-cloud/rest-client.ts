import {
	RestContentTypes,
	RestContentUserDataTypes,
	RestSystemMetadata,
	SystemMetadataFilter,
} from './schema';

export interface RestReferenceResponse {
	sys: {
		type: 'Link';
		linkType: string;
		id: string;
		space?: RestReferenceResponse | null;
		contentType?: RestReferenceResponse | null;
		version?: number | null;
		firstPublishedAt?: number | null;
		publishedAt?: number | null;
		unpublishedAt?: number | null;
		isPublished?: boolean | null;
		locale?: string | null;
	};
}
export interface RestItemResponse {
	sys: {
		type: string;
		id?: string | null;
		linkType?: string | null;
		space?: RestReferenceResponse | null;
		contentType?: RestReferenceResponse | null;
		version?: number | null;
		firstPublishedAt?: string | null;
		publishedAt?: string | null;
		locale?: string | null;
	};
}
export interface RestListResponse<ItemType extends {} = RestItemResponse> {
	skip: number;
	limit: number;
	total: number;
	items: ItemType[];
	sys: {
		type: 'Array';
	};
}

export interface RestRequestOptions {
	skip?: number;
	limit?: number;

	include?: number;

	user_data_types?: (keyof RestContentUserDataTypes)[];
	//revision_type?: "latest" | "published";
}
export type RestSelectField<Properties extends string> =
	| `sys.${keyof RestSystemMetadata}`
	| `field.${Properties}`;
export type RestFilter<
	Properties extends string,
	Filters extends string,
> = Exclude<
	Filters,
	`${Properties}_contains` | `${Properties}_not_containing` | 'AND' | 'OR'
>;
export type TypedRestRequestOptions<TypeName extends keyof RestContentTypes> =
	RestRequestOptions & {
		content_type: TypeName;
		select?: RestSelectField<
			keyof RestContentTypes[TypeName]['Properties'] & string
		>[];
		order?: RestContentTypes[TypeName]['Order'][];
		filter?: Pick<
			RestContentTypes[TypeName]['Filter'],
			RestFilter<
				keyof RestContentTypes[TypeName]['Properties'] & string,
				keyof RestContentTypes[TypeName]['Filter'] & string
			>
		>;
	};

interface RestClientOptions {
	baseUrl: string;
	token: string;
	spaceId: string;
	environmentId?: string;
	fetch?: typeof fetch;
}

export class RestClient {
	constructor(protected readonly options: RestClientOptions) {
		if (!this.options.baseUrl) {
			throw new Error('baseUrl is required for RestClient.');
		}
		if (this.options.baseUrl.endsWith('/')) {
			throw new Error('baseUrl must not end with a slash.');
		}
		if (!this.options.token) {
			throw new Error('token is required for RestClient.');
		}
		if (!this.options.spaceId) {
			throw new Error('spaceId is required for RestClient.');
		}
	}

	protected get fetch() {
		return (
			this.options.fetch ??
			((...args: Parameters<typeof fetch>) => fetch(...args))
		);
	}

	protected async get<T>(path: string, format?: 'list' | 'item'): Promise<T> {
		const response = await this.fetch(`${this.options.baseUrl}${path}`, {
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${this.options.token}`,
			},
			cache: 'no-store',
		});

		if (!response.ok) {
			throw new Error(await response.text());
		}

		return response.json();
	}

	protected async post<T>(path: string, body: Object): Promise<T> {
		const response = await this.fetch(`${this.options.baseUrl}${path}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${this.options.token}`,
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw new Error(await response.text());
		}

		return await response.json();
	}

	async setContentUserData<
		TypeName extends keyof RestContentUserDataTypes & string,
	>(
		contentId: string,
		type: TypeName,
		data: RestContentUserDataTypes[TypeName]['Properties'],
	): Promise<RestContentUserDataTypes[TypeName]['Properties']> {
		if (!this.options.environmentId) {
			throw new Error('environmentId is required for setting user data.');
		}

		return await this.post(
			`/spaces/${this.options.spaceId}/${this.options.environmentId}/entries/${contentId}/user_data/${type}`,
			data,
		);
	}

	async contentCollection<TypeName extends keyof RestContentTypes & string>(
		options: TypedRestRequestOptions<TypeName> & { content_type: TypeName },
	): Promise<RestListResponse<RestContentTypes[TypeName]['Entry']>>;
	async contentCollection(
		options?: RestRequestOptions,
	): Promise<RestListResponse>;
	async contentCollection(
		options?: RestRequestOptions & {
			content_type?: string;
			select?: string[];
			order?: string[];
			filter?: {};
		},
	) {
		const params: [string, string][] = [];
		if (options) {
			if (options.content_type) {
				params.push(['content_type', options.content_type]);
			}
			if (options.user_data_types) {
				params.push(['user_data_types', options.user_data_types.join(',')]);
			}
			if (options.skip) {
				if (options.skip < 0) {
					throw new Error('skip must be greater than or equal to 0.');
				}
				params.push(['skip', options.skip.toString()]);
			}
			if (typeof options.limit === 'number') {
				if (options.limit < 0) {
					throw new Error('limit must be greater than or equal to 0.');
				}
				params.push(['limit', options.limit.toString()]);
			}
			if (options.include) {
				if (options.include < 0) {
					throw new Error('include must be greater than or equal to 0.');
				}
				params.push(['include', options.include.toString()]);
			}
			if (options.select) {
				params.push(['select', options.select.join(',')]);
			}
			if (options.order) {
				params.push(['order', options.order.join(',')]);
			}

			if (options.filter) {
				const nestOperator = (name: string): string => {
					const sameOperators = ['exists', 'in', 'lt', 'lte', 'gt', 'gte'].find(
						(c) => name.endsWith('_' + c),
					);
					if (sameOperators) {
						return (
							name.substring(0, name.length - sameOperators.length - 1) +
							'[' +
							sameOperators +
							']'
						);
					} else if (name.endsWith('_not')) {
						return name.replace(/_not$/, '[ne]');
					} else if (name.endsWith('_contains_all')) {
						return name.replace(/_contains_all$/, '[all]');
					} else if (name.endsWith('_contains_some')) {
						return name.replace(/_contains_some$/, '[some]');
					} else if (name.endsWith('_contains_none')) {
						return name.replace(/_contains_none$/, '[none]');
					} else if (name.endsWith('_not_in')) {
						return name.replace(/_not_in$/, '[nin]');
					} else if (name.endsWith('_contains')) {
						throw new Error(
							"The REST interfaces don't support the 'contains' filter.",
						);
					} else if (name.endsWith('_not_containing')) {
						throw new Error(
							"The REST interfaces don't support the 'not_containing' filter.",
						);
					}
					return name;
				};
				const addFilters = (
					prefix: 'fields' | 'sys' | string,
					filters: { [key: string]: any },
				) => {
					for (const [key, value] of Object.entries(filters)) {
						if (key === 'sys') {
							addFilters('sys', value);
							continue;
						}
						if (key === 'AND') {
							for (const filter of value) {
								addFilters('fields', filter);
							}
							continue;
						}
						if (key === 'OR') {
							throw new Error(
								"The REST interfaces don't support the 'OR' filter.",
							);
						}
						if (prefix === 'sys') {
							if (key === 'assignedTagIds_in') {
								params.push(
									...value.map((v: string) => ['assigned_tag_ids[]', v]),
								);
								continue;
							}
							if (key === 'assignedTagNames_in') {
								params.push(
									...value.map((v: string) => ['assigned_tag_names[]', v]),
								);
								continue;
							}
							if (key.endsWith('UserData')) {
								const typeNamePrefix = key.substring(
									0,
									key.length - 'UserData'.length,
								);
								const typeName = `${typeNamePrefix.charAt(0).toUpperCase()}${typeNamePrefix.substring(1)}ContentUserData`;
								addFilters(`user_data.${typeName}`, value);
								continue;
							}
						}
						if (typeof value == 'object' && value && !Array.isArray(value)) {
							throw new Error(
								"The REST interfaces don't support nested objects in filters.",
							);
						}

						params.push([
							`${prefix}.${nestOperator(key)}`,
							Array.isArray(value)
								? value.map((v) => v.toString()).join(',')
								: value.toString(),
						]);
					}
				};
				const filter = options.filter as {
					sys?: SystemMetadataFilter;
					[key: string]: any;
				};
				addFilters('fields', filter);
			}

			if (!this.options.environmentId) {
				throw new Error('environmentId is required for requesting content.');
			}
		}

		return this.get<RestListResponse<RestItemResponse>>(
			`/spaces/${this.options.spaceId}/${this.options.environmentId}/entries${
				params.length
					? '?' +
						params
							.map(([name, value]) => `${name}=${encodeURIComponent(value)}`)
							.join('&')
					: ''
			}`,
			'list',
		);
	}
}
