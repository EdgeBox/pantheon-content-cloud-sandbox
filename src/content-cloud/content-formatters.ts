import {
	File,
	ImageMedia,
	TextLongProperty,
	TextWithSummaryProperty,
} from './schema';

export function formatDrupalHtml(
	field?: TextLongProperty<'rest'> | TextWithSummaryProperty<'rest'> | null,
	options?: {
		preferSummary?: boolean;
		defaultValue?: any;
		imageNotFoundUrl?: string;
		imageSize?:
			| {
					width?: number;
					height?: number;
			  }
			| 'original';
	},
) {
	const content =
		(options?.preferSummary
			? (field as TextWithSummaryProperty<'rest'> | undefined)?.fields
					.summary || null
			: null) ??
		field?.fields.processed ??
		field?.fields.value;
	if (!content) {
		return options && Object.hasOwn(options, 'defaultValue')
			? options.defaultValue
			: '';
	}

	const urlMappings: Map<string, string> = new Map<string, string>();
	for (const embed of field?.fields.embedded ?? []) {
		const media = embed as ImageMedia<'rest'> | undefined;
		const image = media?.fields.mediaImage as File<'rest'> | undefined;
		const internalUrl = image?.fields.uri;
		let externalUrl = (image as any)?.asset.embedUrl;

		if (internalUrl && externalUrl) {
			const imageSize = options?.imageSize;
			if (imageSize === 'original') {
				externalUrl = externalUrl
					.replace(/image_height=\d+/, '')
					.replace(/image_width=\d+/, '');
			} else if (imageSize?.width) {
				externalUrl = externalUrl.replace(
					/image_width=\d+/,
					`image_width=${imageSize.width}`,
				);
				if (imageSize?.height) {
					externalUrl = externalUrl.replace(
						/image_height=\d+/,
						`image_height=${imageSize.height}`,
					);
				} else {
					externalUrl = externalUrl.replace(/image_height=\d+/, '');
				}
			} else if (imageSize?.height) {
				externalUrl = externalUrl
					.replace(/image_height=\d+/, `image_height=${imageSize.height}`)
					.replace(/image_width=\d+/, '');
			}
			urlMappings.set(internalUrl.replace(/^[a-z-0-9]+:\/\//, ''), externalUrl);
		}
	}

	return content.replace(
		/(srcset|src)="([^"]+)(\?[^"]*)?"/g,
		(match, attribute, localUrl) => {
			if (
				localUrl.startsWith('http://') ||
				localUrl.startsWith('https://') ||
				localUrl.startsWith('//')
			) {
				return match;
			}

			const path = decodeURIComponent(localUrl.split('?')[0]);
			const existing = [...urlMappings.keys()].find((c) => path.endsWith(c));

			const assetUrl = existing && urlMappings.get(existing);

			//console.log(path, existing, assetUrl, urlMappings);

			return `${attribute}="${assetUrl ?? options?.imageNotFoundUrl ?? ''}"`;
		},
	);
}
