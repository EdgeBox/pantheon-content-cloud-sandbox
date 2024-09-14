import { TextLongProperty, TextWithSummaryProperty } from './schema';

export function drupalHtml(
	field?: TextLongProperty<'rest'> | TextWithSummaryProperty<'rest'> | null,
	options?: {
		preferSummary?: boolean;
		defaultValue?: any;
		imageNotFoundUrl?: string;
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

			const assetUrl = urlMappings.get(localUrl);
			return `${attribute}="${assetUrl ?? options?.imageNotFoundUrl}"`;
		},
	);
}
