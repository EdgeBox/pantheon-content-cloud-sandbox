import jsonwebtoken from 'jsonwebtoken';

export enum ContentCloudPermission {
	// Frontend
	CONTENT_READ = 'permission:content:read', // Grants read access to tags and assets.
	CONTENT_TYPE_READ = 'permission:content-type:read', // Grants read access to tags and assets.

	ASSET_READ_FILE = 'permission:asset:read:file', // Can be scoped to include specific assets only.

	// User data, always scoped to the current user.
	USER_DATA_READ = 'permission:user-data:read',
	USER_DATA_WRITE = 'permission:user-data:write',

	// External content links
	EXTERNAL_LINK_READ = 'permission:external-link:read',
	EXTERNAL_LINK_WRITE = 'permission:external-link:write',

	// Grants preview access to all entities that are allowed to be read.
	PREVIEW = 'permission:preview',

	// Grants access to dev GraphQL + dev REST interfaces that have introspection enabled and a UI.
	DEVELOPER = 'permission:developer',

	// Grants read access to space and all related locales + environments.
	SPACE_READ = 'permission:space:read',
}

export interface ContentCloudJwtPayload {
	clientId: string;
	permissions: ContentCloudPermission[];
	spaceId: string;
	environmentIds: string[];

	// If the user is authenticated
	userId?: string;
	// By default, users cannot access any user data types. Include the ones a user
	// should have access to in here. You can also pass "*" to grant access to any
	// user data type available in the environment.
	userDataContentTypes?: string[];
}

export function generateAccessToken(
	properties: Omit<ContentCloudJwtPayload, 'clientId'>,
	ttlInSeconds = 3_600,
	clientSecret?: string,
) {
	if (!clientSecret) {
		clientSecret = process.env.CC_CLIENT_SECRET;
	}
	if (!clientSecret) {
		throw new Error(`Missing clientSecret to sign access token.`);
	}

	const [clientId, secret] = clientSecret.split('=');
	if (!clientId || !secret) {
		throw new Error(`clientSecret uses an unsupported format.`);
	}

	const payload: ContentCloudJwtPayload = {
		...properties,
		clientId,
	};

	const iat = Math.floor(Date.now() / 1_000);
	const settings = {
		iat,
		exp: iat + ttlInSeconds,
	};

	return jsonwebtoken.sign({ ...payload, ...settings }, secret);
}
