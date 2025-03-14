/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
export interface SystemMetadata<Type extends string = string> {
	type: Type;
	id?: string | null;
	customId?: string | null;
	uuid?: string | null;
	entryCreatedAt?: string | null;
	entryVersion?: number | null;
	environment?: EnvironmentEntry | EntryLink<'Environment'> | null;
	firstPublishedAt?: string | null;
	isPublished?: boolean | null;
	locale?: LocaleEntry | EntryLink<'Locale'> | null;
	localizationVersion?: number | null;
	publishedAt?: string | null;
	space?: SpaceEntry | EntryLink<'Space'> | null;
	versionCreatedAt?: string | null;
	versionId?: string | null;
	name?: string | null;
	slug?: string | null;
	description?: string | null;
}

export enum ExternalEntryLinkType {
	Source = 'Source',
	Target = 'Target',
	Mapped = 'Mapped',
	Display = 'Display',
}

export interface ExternalEntryLinkEntry {
	sys: SystemMetadata<'ExternalEntryLink'>;

	linkType: ExternalEntryLinkType;

	spaceUuid?: string | null;
	environmentUuid?: string;
	siteUuid?: string | null;
	domain: string;

	externalTargetEntryId?: string | null;
	externalTargetVersionId?: string | null;

	authorName?: string | null;
	authorEmail?: string | null;
	publisherName?: string | null;
	publisherEmail?: string | null;

	publicMetadata?: Record<string, any> | null;
	privateMetadata?: Record<string, any> | null;

	canonicalUrl?: string | null;
	prettyUrl?: string | null;
	editUrl?: string | null;
	deleteUrl?: string | null;
	versionUrl?: string | null;
}

export type FeatureConfig = Record<string, any>;

export interface EntryLink<LinkType extends string = string> {
	sys: {
		id: string;
		type: 'Link';
		linkType: LinkType;
	};
}

export interface EntrySystemMetadata<Type extends string = string>
	extends SystemMetadata<Type> {
	id: string;
	entryCreatedAt: string;
	entryVersion: number;
	isPublished: boolean;
	versionCreatedAt: string;
	versionId: string;
}

export interface EntrySystemMetadataWithSpace<Type extends string = string>
	extends EntrySystemMetadata<Type> {
	environment: EnvironmentEntry;
	locale: LocaleEntry;
	space: SpaceEntry;
}

export interface Entry<Type extends string = string> {
	sys: EntrySystemMetadata<Type>;

	externalLinks?: ExternalEntryLinkEntry[];
}

export interface CollectionResponse<Type> {
	sys: SystemMetadata;
	items: Type[];
	limit: number;
	skip: number;
	total: number;
}

export type EntryResponse<Type> = Type & { sys: SystemMetadata };

export interface SpaceEntry extends Entry<'Space'> {
	id: string;
	uuid: string;

	isPublished: boolean;

	name: string;

	featureConfig: FeatureConfig;
}
export interface EnvironmentEntry extends Entry<'Environment'> {}
export interface LocaleEntry extends Entry<'Locale'> {
	id: string;
	code: string;
	fallbackCode?: string | null;

	isPublished: boolean;

	name: string;
}

export interface ContentTypePropertyEntry extends Entry<'ContentTypeProperty'> {
	customId: string;
	id: string;
	machineName: string;

	isPublished: boolean;

	type: string;
	isArray: boolean;
	isBig: boolean;
	isItemRequired: boolean;
	isLink: boolean;
	isLocalized: boolean;
	isParentLink: boolean;
	isRequired: boolean;

	allowedTypes?: string[] | null;

	name: string;
	description?: string | null;
}
export interface ContentTypeEntry extends Entry<'ContentType'> {
	customId: string;
	id: string;
	machineName: string;

	isPublished: boolean;

	isAsset: boolean;
	isIndependent: boolean;
	isInline: boolean;
	isTaxonomy: boolean;

	properties: ContentTypePropertyEntry[];

	name: string;
	description?: string | null;
}
export interface ContentEntry extends Entry<'Content'> {
	sys: EntrySystemMetadata<'Content'> & {
		contentType: EntryLink<'ContentType'> | ContentTypeEntry;
	};

	fields: Record<string, any>;

	tag?: TagEntry | null;
	asset?: AssetEntry | null;
}
export enum MimeTypeGroup {
	Image = 'image',
	Audio = 'audio',
	Video = 'video',
	RichText = 'richtext',
	Presentation = 'presentation',
	Spreadsheet = 'spreadsheet',
	PdfDocument = 'pdfdocument',
	Archive = 'archive',
	Code = 'code',
	Markup = 'markup',
	Plaintext = 'plaintext',
	Attachment = 'attachment',
	Other = 'other',
}
export interface AssetEntry extends Entry<'Asset'> {
	id: string;

	isPublished: boolean;

	fields: {
		hash: string;
		mimeType: string;
		mimeTypeGroup: MimeTypeGroup;
		size: number;
		customVersionId?: string | null;
		details?: {
			image?: {
				width: number;
				height: number;
			} | null;
		} | null;
		imageUrl?: string | null;
		downloadUrl?: string | null;
		embedUrl?: string | null;
		fileName: string;
	};

	name: string;
}
export interface TagEntry extends Entry<'Tag'> {
	id: string;

	isPublished: boolean;

	name: string;
}

type QueryParameters = Record<string, unknown>;

export interface CollectionRequest extends QueryParameters {
	skip?: number;
	limit?: number;
}

export type ContentTypeCollectionRequest = CollectionRequest;
export interface ContentTypeEntryRequest extends QueryParameters {
	machineName?: string;
	customId?: string;
	id?: string;
}

export interface ContentCollectionRequest extends CollectionRequest {
	locale?: string;
	include?: number;
	embed?: number;

	content_type?: string;
	order?: string[] | string;
}
export interface ContentEntryRequest extends QueryParameters {
	locale?: string;
	include?: number;

	customId?: string;
	id?: string;
	uuid?: string;
}

export interface LocaleCollectionRequest extends CollectionRequest {
	'sys.name'?: string;
}

export interface AssetCollectionRequest extends CollectionRequest {
	locale?: string;

	'sys.name'?: string;
}
export interface AssetEntryRequest extends QueryParameters {
	locale?: string;

	id?: string;
}

export interface TagCollectionRequest extends CollectionRequest {
	locale?: string;

	'sys.name'?: string;
}
export interface TagEntryRequest extends QueryParameters {
	locale?: string;

	id?: string;
}

export type RestInterfaceDataTypes =
	| 'space'
	| 'content_types'
	| 'locales'
	| 'entries'
	| 'assets'
	| 'tags';

export interface ImageSettings extends QueryParameters {
	/**
	 * E.g. 300 for 300 pixels.
	 */
	width?: number;
	/**
	 * E.g. 300 for 300 pixels.
	 */
	height?: number;
	/**
	 * E.g. #ffffff for white.
	 */
	background?: string;
	/**
	 * E.g. "auto" or "100,200" in pixels.
	 *
	 * "auto": use the Drupal focal point setting if available. Otherwise, check the image itself.
	 */
	gravity?: 'auto' | string;
	/**
	 * E.g. "webp" for optimized images.
	 */
	format?: 'jpeg' | 'png' | 'gif' | 'webp' | 'avif' | 'svg';
	/**
	 * E.g. "scale-down" to prevent upscaling.
	 */
	fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';
	/**
	 * E.g. 100 for highest quality or 0 for lowest.
	 *
	 * Only relevant for JPEG output.
	 */
	quality?: number;
}

function serializeQuery(queryParameters: QueryParameters) {
	return Object.entries(queryParameters)
		.map(
			([name, value]) =>
				`${encodeURIComponent(name)}=${encodeURIComponent(typeof value === 'string' ? value : value !== null && value !== undefined ? (Array.isArray(value) ? value.join(',') : value.toString()) : '')}`,
		)
		.join('&');
}

export function getImageUrl(originalUrl: string, settings: ImageSettings) {
	const query = serializeQuery(settings);
	return originalUrl.includes('?')
		? `${originalUrl}&${query}`
		: `${originalUrl}?${query}`;
}

// See https://stackoverflow.com/a/32480941
function convertBase(value: string, from_base: number, to_base: number) {
	const range =
		'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split(
			'',
		);
	const from_range = range.slice(0, from_base);
	const to_range = range.slice(0, to_base);

	let dec_value = value
		.split('')
		.reverse()
		.reduce(function (carry, digit, index) {
			if (from_range.indexOf(digit) === -1)
				throw new Error(
					'Invalid digit `' + digit + '` for base ' + from_base + '.',
				);
			return (carry += from_range.indexOf(digit) * Math.pow(from_base, index));
		}, 0);

	let new_value = '';
	while (dec_value > 0) {
		new_value = to_range[dec_value % to_base] + new_value;
		dec_value = (dec_value - (dec_value % to_base)) / to_base;
	}
	return new_value || '0';
}

export class ContentCloudRestClient {
	static getDomainKey(id: string) {
		return convertBase(id, 62, 36);
	}

	constructor(
		private readonly options: {
			baseUrl: string;
			accessToken?: string;
			spaceId?: string;
			environmentId?: string;
			fetch?: typeof fetch;
		},
	) {}

	protected get fetch() {
		return (
			this.options.fetch ??
			((...args: Parameters<typeof fetch>) => fetch(...args))
		);
	}

	get cacheId(): string {
		if (this.options.spaceId) {
			if (this.options.environmentId) {
				return `${this.options.spaceId}-${this.options.environmentId}`;
			}
			return this.options.spaceId;
		}
		if (this.options.environmentId) {
			return this.options.environmentId;
		}
		return 'default';
	}

	async get<ResponseBodyType extends object>(
		path: string,
		query?: string,
	): Promise<ResponseBodyType> {
		//console.debug(path, query)

		const response = await this.fetch(
			`${this.options.baseUrl}${path}${query ? `?${query}` : ''}`,
			{
				headers: {
					Accept: 'application/json',
					...(this.options.accessToken
						? {
								Authorization: `Bearer ${this.options.accessToken}`,
							}
						: {}),
				},
			},
		);

		if (!response.ok) {
			throw new Error(await response.text());
		}

		const responseBody = await response.json();

		responseBody.errors && console.log(responseBody.errors);

		//console.debug(responseBody)

		return responseBody;
	}

	async post<ResponseBodyType extends object, RequestBodyType extends object>(
		path: string,
		body: RequestBodyType,
	): Promise<ResponseBodyType> {
		const response = await this.fetch(`${this.options.baseUrl}${path}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				...(this.options.accessToken
					? {
							Authorization: `Bearer ${this.options.accessToken}`,
						}
					: {}),
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw new Error(await response.text());
		}

		const responseBody = await response.json();

		responseBody.errors && console.log(responseBody.errors);

		return responseBody;
	}

	async query<ResponseBodyType extends object>(
		type: RestInterfaceDataTypes,
		id?: string,
		queryParameters?: Record<string, unknown>,
	): Promise<ResponseBodyType> {
		return this.get<ResponseBodyType>(
			`/${type}${id ? `/${id}` : ''}`,
			queryParameters && serializeQuery(queryParameters),
		);
	}

	async contentTypeCollection(
		request?: ContentTypeCollectionRequest,
	): Promise<CollectionResponse<ContentTypeEntry>> {
		return this.query('content_types', undefined, request);
	}
	async contentTypeEntry(
		request?: ContentTypeEntryRequest,
	): Promise<ContentTypeEntry | null> {
		if (request?.id) {
			return this.query<ContentTypeEntry>('content_types', request.id);
		}
		const response = await this.query<CollectionResponse<ContentTypeEntry>>(
			'content_types',
			undefined,
			request,
		);

		return response?.items?.[0] ?? null;
	}

	async contentCollection<T extends CollectionResponse<ContentEntry>>(
		request?: ContentCollectionRequest,
	): Promise<T> {
		return this.query('entries', undefined, request);
	}
	async contentEntry(
		request?: ContentEntryRequest,
	): Promise<ContentEntry | null> {
		if (request?.id) {
			return this.query<ContentEntry>('entries', request.id, request);
		}
		const response = await this.query<CollectionResponse<ContentEntry>>(
			'entries',
			undefined,
			request,
		);

		return response?.items?.[0] ?? null;
	}

	async spaceEntry(): Promise<SpaceEntry> {
		return this.query('space');
	}

	async localeCollection(
		request?: LocaleCollectionRequest,
	): Promise<CollectionResponse<LocaleEntry>> {
		return this.query('locales', undefined, request);
	}

	async assetCollection(
		request?: AssetCollectionRequest,
	): Promise<CollectionResponse<AssetEntry>> {
		return this.query('assets', undefined, request);
	}
	async assetEntry(request?: AssetEntryRequest): Promise<AssetEntry | null> {
		if (request?.id) {
			return this.query<AssetEntry>('assets', request.id, request);
		}
		const response = await this.query<CollectionResponse<AssetEntry>>(
			'assets',
			undefined,
			request,
		);

		return response?.items?.[0] ?? null;
	}

	async tagCollection(
		request?: TagCollectionRequest,
	): Promise<CollectionResponse<TagEntry>> {
		return this.query('tags', undefined, request);
	}
	async tagEntry(request?: TagEntryRequest): Promise<TagEntry | null> {
		if (request?.id) {
			return this.query<TagEntry>('tags', request.id, request);
		}
		const response = await this.query<CollectionResponse<TagEntry>>(
			'tags',
			undefined,
			request,
		);

		return response?.items?.[0] ?? null;
	}
}
