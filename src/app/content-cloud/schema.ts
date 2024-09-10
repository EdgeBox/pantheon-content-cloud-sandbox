export type JSON = any;
export type Timestamp = Date;

export enum HeadlinesBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum BlockTypeOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum FileOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum DocumentMediaOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	mediaInLibrary_ASC = 'mediaInLibrary_ASC',
	mediaInLibrary_DESC = 'mediaInLibrary_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum RemoteVideoMediaOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	mediaInLibrary_ASC = 'mediaInLibrary_ASC',
	mediaInLibrary_DESC = 'mediaInLibrary_DESC',
	videoDuration_ASC = 'videoDuration_ASC',
	videoDuration_DESC = 'videoDuration_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum VideoMediaOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	mediaInLibrary_ASC = 'mediaInLibrary_ASC',
	mediaInLibrary_DESC = 'mediaInLibrary_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum AccountMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum AdminMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum EntityHierarchyMicrositeMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum FooterMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum MainMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum MainTestMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum NavigationCtasMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum ToolsMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum CategoryTermOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum CreditTypeTermOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum ImageTypeTermOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum RoleTermOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum TopicTermOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum VerticalTermOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum BasicBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum CtaBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum ImageMediaOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	mediaInLibrary_ASC = 'mediaInLibrary_ASC',
	mediaInLibrary_DESC = 'mediaInLibrary_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum AccordionBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum CardBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum ContentDetailBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum HeroBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	gradient_ASC = 'gradient_ASC',
	gradient_DESC = 'gradient_DESC',
	imageInlineBleed_ASC = 'imageInlineBleed_ASC',
	imageInlineBleed_DESC = 'imageInlineBleed_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum LogoListBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	moreLink_ASC = 'moreLink_ASC',
	moreLink_DESC = 'moreLink_DESC',
	static_ASC = 'static_ASC',
	static_DESC = 'static_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum QuoteBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum DocumentContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum EbookContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum LandingPageContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	minimalHeader_ASC = 'minimalHeader_ASC',
	minimalHeader_DESC = 'minimalHeader_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum PageContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum PersonContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum PressReleaseContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum SolutionContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum BlogContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum EventContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	eventCenterShow_ASC = 'eventCenterShow_ASC',
	eventCenterShow_DESC = 'eventCenterShow_DESC',
	resourceCenterShow_ASC = 'resourceCenterShow_ASC',
	resourceCenterShow_DESC = 'resourceCenterShow_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum ProductFeaturesTermOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum ParallaxBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum CaseStudyContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	resourceShow_ASC = 'resourceShow_ASC',
	resourceShow_DESC = 'resourceShow_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum CalloutsBlockOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum ArticleContentOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	status_ASC = 'status_ASC',
	status_DESC = 'status_DESC',
	promote_ASC = 'promote_ASC',
	promote_DESC = 'promote_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum MainNavMenuLinkOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	created_ASC = 'created_ASC',
	created_DESC = 'created_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum SharedContentUserDataOrder {
	sys_id_ASC = 'sys_id_ASC',
	sys_id_DESC = 'sys_id_DESC',
	sys_name_ASC = 'sys_name_ASC',
	sys_name_DESC = 'sys_name_DESC',
	sys_publishedAt_ASC = 'sys_publishedAt_ASC',
	sys_publishedAt_DESC = 'sys_publishedAt_DESC',
	sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
	sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
	bookmarked_ASC = 'bookmarked_ASC',
	bookmarked_DESC = 'bookmarked_DESC',
	readAt_ASC = 'readAt_ASC',
	readAt_DESC = 'readAt_DESC',
	sys_sharedUserData_bookmarked_ASC = 'sys_sharedUserData_bookmarked_ASC',
	sys_sharedUserData_bookmarked_DESC = 'sys_sharedUserData_bookmarked_DESC',
	sys_sharedUserData_readAt_ASC = 'sys_sharedUserData_readAt_ASC',
	sys_sharedUserData_readAt_DESC = 'sys_sharedUserData_readAt_DESC',
}

export enum SystemMimeTypeGroup {
	image = 'image',
	audio = 'audio',
	video = 'video',
	richtext = 'richtext',
	presentation = 'presentation',
	spreadsheet = 'spreadsheet',
	pdfdocument = 'pdfdocument',
	archive = 'archive',
	code = 'code',
	markup = 'markup',
	plaintext = 'plaintext',
	attachment = 'attachment',
	other = 'other',
}

export enum SystemImageFormat {
	jpeg = 'jpeg',
	png = 'png',
	webp = 'webp',
	gif = 'gif',
	avif = 'avif',
	svg = 'svg',
}

export enum SystemImageFit {
	scale_down = 'scale_down',
	contain = 'contain',
	cover = 'cover',
	crop = 'crop',
	pad = 'pad',
}

export enum SystemExternalEntryLinkType {
	Source = 'Source',
	Target = 'Target',
	Mapped = 'Mapped',
	Display = 'Display',
}

export enum SystemSearchIndexFormat {
	html = 'html',
	markdown = 'markdown',
	plain = 'plain',
	auto = 'auto',
}

export enum SystemContentTypeMachineName {
	MainNavMenuLink = 'MainNavMenuLink',
	ArticleContent = 'ArticleContent',
	CalloutsBlock = 'CalloutsBlock',
	CaseStudyContent = 'CaseStudyContent',
	ParallaxBlock = 'ParallaxBlock',
	ProductFeaturesTerm = 'ProductFeaturesTerm',
	EventContent = 'EventContent',
	BlogContent = 'BlogContent',
	SolutionContent = 'SolutionContent',
	PressReleaseContent = 'PressReleaseContent',
	PersonContent = 'PersonContent',
	PageContent = 'PageContent',
	LandingPageContent = 'LandingPageContent',
	EbookContent = 'EbookContent',
	DocumentContent = 'DocumentContent',
	QuoteBlock = 'QuoteBlock',
	LogoListBlock = 'LogoListBlock',
	HeroBlock = 'HeroBlock',
	ContentDetailBlock = 'ContentDetailBlock',
	CardBlock = 'CardBlock',
	AccordionBlock = 'AccordionBlock',
	ImageMedia = 'ImageMedia',
	CtaBlock = 'CtaBlock',
	BasicBlock = 'BasicBlock',
	VerticalTerm = 'VerticalTerm',
	TopicTerm = 'TopicTerm',
	RoleTerm = 'RoleTerm',
	ImageTypeTerm = 'ImageTypeTerm',
	CreditTypeTerm = 'CreditTypeTerm',
	CategoryTerm = 'CategoryTerm',
	ToolsMenuLink = 'ToolsMenuLink',
	NavigationCtasMenuLink = 'NavigationCtasMenuLink',
	MainTestMenuLink = 'MainTestMenuLink',
	MainMenuLink = 'MainMenuLink',
	FooterMenuLink = 'FooterMenuLink',
	EntityHierarchyMicrositeMenuLink = 'EntityHierarchyMicrositeMenuLink',
	AdminMenuLink = 'AdminMenuLink',
	AccountMenuLink = 'AccountMenuLink',
	VideoMedia = 'VideoMedia',
	RemoteVideoMedia = 'RemoteVideoMedia',
	DocumentMedia = 'DocumentMedia',
	File = 'File',
	BlockType = 'BlockType',
	HeadlinesBlock = 'HeadlinesBlock',
}

export interface HeadlinesBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	headlines?: string[] | null;
	sublines?: string[] | null;
	created?: Timestamp | null;
} /**
 * A block that provides a set of short headlines.
 */
export type HeadlinesBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: HeadlinesBlockProperties<API>;
		}
	: HeadlinesBlockProperties<API>);

export interface HeadlinesBlockFilter {
	AND?: HeadlinesBlockFilter[] | null;
	OR?: HeadlinesBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	headlines_exists?: boolean | null;
	sublines_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface HeadlinesBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: HeadlinesBlock<API>[];
}

export interface BlockTypeProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	uuid?: string | null;
	langcode?: string | null;
	status?: boolean | null;
	dependencies?: JSON | null;
	thirdPartySettings?: JSON | null;
	theme?: string | null;
	region?: string | null;
	provider?: string | null;
	plugin?: string | null;
	settings?: JSON | null;
	visibility?: JSON | null;
}
export type BlockType<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: BlockTypeProperties<API>;
		}
	: BlockTypeProperties<API>);

export interface BlockTypeFilter {
	AND?: BlockTypeFilter[] | null;
	OR?: BlockTypeFilter[] | null;
	sys?: SystemMetadataFilter | null;
	uuid_exists?: boolean | null;
	langcode_exists?: boolean | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	dependencies_exists?: boolean | null;
	thirdPartySettings_exists?: boolean | null;
	theme_exists?: boolean | null;
	region_exists?: boolean | null;
	provider_exists?: boolean | null;
	plugin_exists?: boolean | null;
	settings_exists?: boolean | null;
	visibility_exists?: boolean | null;
}

export interface BlockTypeCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: BlockType<API>[];
}

export interface FileProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemAssetEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	uri?: string | null;
	assetId?: string | null;
	assetName?: string | null;
	assetFileName?: string | null;
	assetSize?: number | null;
	assetImageWidth?: number | null;
	assetImageHeight?: number | null;
	assetImageGravity?: string | null;
	assetMimeType?: string | null;
	assetMimeTypeGroup?: string | null;
	assetDownloadUrl?: string | null;
	assetEmbedUrl?: string | null;
	assetImageUrl?: string | null;
}
export type File<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: FileProperties<API>;
		}
	: FileProperties<API>);

export interface FileFilter {
	AND?: FileFilter[] | null;
	OR?: FileFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	uri_exists?: boolean | null;
}

export interface FileCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: File<API>[];
}

export interface DocumentMediaProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	mediaDocument?: AnyEntry<API> | null;
	mediaInLibrary?: boolean | null;
} /**
 * A locally hosted document, such as a PDF.
 */
export type DocumentMedia<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: DocumentMediaProperties<API>;
		}
	: DocumentMediaProperties<API>);

export interface DocumentMediaFilter {
	AND?: DocumentMediaFilter[] | null;
	OR?: DocumentMediaFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	mediaDocument_exists?: boolean | null;
	/**
	 * mediaDocument_id equals the given value.
	 */
	mediaDocument_id?: string | null;
	/**
	 * mediaDocument_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaDocument_id_not?: string | null;
	/**
	 * mediaDocument_id is in the given list.
	 */
	mediaDocument_id_in?: string[] | null;
	/**
	 * mediaDocument_id is NOT in the given list.
	 */
	mediaDocument_id_not_in?: string[] | null;
	mediaInLibrary_exists?: boolean | null;
	/**
	 * mediaInLibrary equals the given value.
	 */
	mediaInLibrary?: boolean | null;
	/**
	 * mediaInLibrary does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaInLibrary_not?: boolean | null;
}

export interface DocumentMediaCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: DocumentMedia<API>[];
}

export interface RemoteVideoMediaProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	mediaInLibrary?: boolean | null;
	mediaOembedRemoteVideo?: string | null;
	/**
	 * Enter the duration of the video in minutes.
	 */
	videoDuration?: number | null;
} /**
 * A video hosted by a remote provider.
 */
export type RemoteVideoMedia<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: RemoteVideoMediaProperties<API>;
		}
	: RemoteVideoMediaProperties<API>);

export interface RemoteVideoMediaFilter {
	AND?: RemoteVideoMediaFilter[] | null;
	OR?: RemoteVideoMediaFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	mediaInLibrary_exists?: boolean | null;
	/**
	 * mediaInLibrary equals the given value.
	 */
	mediaInLibrary?: boolean | null;
	/**
	 * mediaInLibrary does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaInLibrary_not?: boolean | null;
	mediaOembedRemoteVideo_exists?: boolean | null;
	videoDuration_exists?: boolean | null;
	/**
	 * videoDuration equals the given value.
	 */
	videoDuration?: number | null;
	/**
	 * videoDuration does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	videoDuration_not?: number | null;
	/**
	 * videoDuration is greater than the given value.
	 */
	videoDuration_gt?: number | null;
	/**
	 * videoDuration is greater than or equal to the given value.
	 */
	videoDuration_gte?: number | null;
	/**
	 * videoDuration is less than the given value.
	 */
	videoDuration_lt?: number | null;
	/**
	 * videoDuration is less than or equal to the given value.
	 */
	videoDuration_lte?: number | null;
	/**
	 * videoDuration is in the given list.
	 */
	videoDuration_in?: number[] | null;
	/**
	 * videoDuration is NOT in the given list.
	 */
	videoDuration_not_in?: number[] | null;
}

export interface RemoteVideoMediaCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: RemoteVideoMedia<API>[];
}

export interface VideoMediaProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	mediaInLibrary?: boolean | null;
	mediaVideoFile?: AnyEntry<API> | null;
} /**
 * A locally hosted video file
 */
export type VideoMedia<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: VideoMediaProperties<API>;
		}
	: VideoMediaProperties<API>);

export interface VideoMediaFilter {
	AND?: VideoMediaFilter[] | null;
	OR?: VideoMediaFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	mediaInLibrary_exists?: boolean | null;
	/**
	 * mediaInLibrary equals the given value.
	 */
	mediaInLibrary?: boolean | null;
	/**
	 * mediaInLibrary does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaInLibrary_not?: boolean | null;
	mediaVideoFile_exists?: boolean | null;
	/**
	 * mediaVideoFile_id equals the given value.
	 */
	mediaVideoFile_id?: string | null;
	/**
	 * mediaVideoFile_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaVideoFile_id_not?: string | null;
	/**
	 * mediaVideoFile_id is in the given list.
	 */
	mediaVideoFile_id_in?: string[] | null;
	/**
	 * mediaVideoFile_id is NOT in the given list.
	 */
	mediaVideoFile_id_not_in?: string[] | null;
}

export interface VideoMediaCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: VideoMedia<API>[];
}

export interface AccountMenuLinkProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	created?: Timestamp | null;
} /**
 * Links related to the active user account
 */
export type AccountMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: AccountMenuLinkProperties<API>;
		}
	: AccountMenuLinkProperties<API>);

export interface AccountMenuLinkFilter {
	AND?: AccountMenuLinkFilter[] | null;
	OR?: AccountMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface AccountMenuLinkCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: AccountMenuLink<API>[];
}

export interface AdminMenuLinkProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	created?: Timestamp | null;
} /**
 * Administrative task links
 */
export type AdminMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: AdminMenuLinkProperties<API>;
		}
	: AdminMenuLinkProperties<API>);

export interface AdminMenuLinkFilter {
	AND?: AdminMenuLinkFilter[] | null;
	OR?: AdminMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface AdminMenuLinkCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: AdminMenuLink<API>[];
}

export interface EntityHierarchyMicrositeMenuLinkProperties<
	API extends 'rest' | 'graphql',
> extends Entry {
	created?: Timestamp | null;
} /**
 * Microsite menus
 */
export type EntityHierarchyMicrositeMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: EntityHierarchyMicrositeMenuLinkProperties<API>;
		}
	: EntityHierarchyMicrositeMenuLinkProperties<API>);

export interface EntityHierarchyMicrositeMenuLinkFilter {
	AND?: EntityHierarchyMicrositeMenuLinkFilter[] | null;
	OR?: EntityHierarchyMicrositeMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface EntityHierarchyMicrositeMenuLinkCollection<
	API extends 'rest' | 'graphql',
> extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: EntityHierarchyMicrositeMenuLink<API>[];
}

export interface FooterMenuLinkProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	created?: Timestamp | null;
} /**
 * Site information links
 */
export type FooterMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: FooterMenuLinkProperties<API>;
		}
	: FooterMenuLinkProperties<API>);

export interface FooterMenuLinkFilter {
	AND?: FooterMenuLinkFilter[] | null;
	OR?: FooterMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface FooterMenuLinkCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: FooterMenuLink<API>[];
}

export interface MainMenuLinkProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	created?: Timestamp | null;
} /**
 * Site section links
 */
export type MainMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: MainMenuLinkProperties<API>;
		}
	: MainMenuLinkProperties<API>);

export interface MainMenuLinkFilter {
	AND?: MainMenuLinkFilter[] | null;
	OR?: MainMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface MainMenuLinkCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: MainMenuLink<API>[];
}

export interface MainTestMenuLinkProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	created?: Timestamp | null;
}
export type MainTestMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: MainTestMenuLinkProperties<API>;
		}
	: MainTestMenuLinkProperties<API>);

export interface MainTestMenuLinkFilter {
	AND?: MainTestMenuLinkFilter[] | null;
	OR?: MainTestMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface MainTestMenuLinkCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: MainTestMenuLink<API>[];
}

export interface NavigationCtasMenuLinkProperties<
	API extends 'rest' | 'graphql',
> extends Entry {
	created?: Timestamp | null;
} /**
 * Menu for CTAs such as Contact, Dashboard Log In, and Start Free
 */
export type NavigationCtasMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: NavigationCtasMenuLinkProperties<API>;
		}
	: NavigationCtasMenuLinkProperties<API>);

export interface NavigationCtasMenuLinkFilter {
	AND?: NavigationCtasMenuLinkFilter[] | null;
	OR?: NavigationCtasMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface NavigationCtasMenuLinkCollection<
	API extends 'rest' | 'graphql',
> extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: NavigationCtasMenuLink<API>[];
}

export interface ToolsMenuLinkProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	created?: Timestamp | null;
} /**
 * User tool links, often added by modules
 */
export type ToolsMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ToolsMenuLinkProperties<API>;
		}
	: ToolsMenuLinkProperties<API>);

export interface ToolsMenuLinkFilter {
	AND?: ToolsMenuLinkFilter[] | null;
	OR?: ToolsMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface ToolsMenuLinkCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: ToolsMenuLink<API>[];
}

export interface CategoryTermProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemTagEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	created?: Timestamp | null;
	parent?: CategoryTerm<API> | null;
	tagId?: string | null;
	tagName?: string | null;
} /**
 * Terms used for high-level categorization.
 */
export type CategoryTerm<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CategoryTermProperties<API>;
		}
	: CategoryTermProperties<API>);

export interface CategoryTermFilter {
	AND?: CategoryTermFilter[] | null;
	OR?: CategoryTermFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
	parent_exists?: boolean | null;
	/**
	 * parent_id equals the given value.
	 */
	parent_id?: string | null;
	/**
	 * parent_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	parent_id_not?: string | null;
	/**
	 * parent_id is in the given list.
	 */
	parent_id_in?: string[] | null;
	/**
	 * parent_id is NOT in the given list.
	 */
	parent_id_not_in?: string[] | null;
}

export interface CategoryTermCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: CategoryTerm<API>[];
}

export interface CreditTypeTermProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemTagEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	created?: Timestamp | null;
	parent?: CreditTypeTerm<API> | null;
	tagId?: string | null;
	tagName?: string | null;
} /**
 * Desginations by which a person can be associated with a piece of content (author, editor, guest, host, etc)
 */
export type CreditTypeTerm<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CreditTypeTermProperties<API>;
		}
	: CreditTypeTermProperties<API>);

export interface CreditTypeTermFilter {
	AND?: CreditTypeTermFilter[] | null;
	OR?: CreditTypeTermFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
	parent_exists?: boolean | null;
	/**
	 * parent_id equals the given value.
	 */
	parent_id?: string | null;
	/**
	 * parent_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	parent_id_not?: string | null;
	/**
	 * parent_id is in the given list.
	 */
	parent_id_in?: string[] | null;
	/**
	 * parent_id is NOT in the given list.
	 */
	parent_id_not_in?: string[] | null;
}

export interface CreditTypeTermCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: CreditTypeTerm<API>[];
}

export interface ImageTypeTermProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemTagEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	created?: Timestamp | null;
	parent?: ImageTypeTerm<API> | null;
	tagId?: string | null;
	tagName?: string | null;
} /**
 * Used to classify images to improve media library experience.
 */
export type ImageTypeTerm<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ImageTypeTermProperties<API>;
		}
	: ImageTypeTermProperties<API>);

export interface ImageTypeTermFilter {
	AND?: ImageTypeTermFilter[] | null;
	OR?: ImageTypeTermFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
	parent_exists?: boolean | null;
	/**
	 * parent_id equals the given value.
	 */
	parent_id?: string | null;
	/**
	 * parent_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	parent_id_not?: string | null;
	/**
	 * parent_id is in the given list.
	 */
	parent_id_in?: string[] | null;
	/**
	 * parent_id is NOT in the given list.
	 */
	parent_id_not_in?: string[] | null;
}

export interface ImageTypeTermCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: ImageTypeTerm<API>[];
}

export interface RoleTermProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemTagEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	created?: Timestamp | null;
	parent?: RoleTerm<API> | null;
	tagId?: string | null;
	tagName?: string | null;
} /**
 * List of terms used to classify content by role/persona.
 */
export type RoleTerm<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: RoleTermProperties<API>;
		}
	: RoleTermProperties<API>);

export interface RoleTermFilter {
	AND?: RoleTermFilter[] | null;
	OR?: RoleTermFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
	parent_exists?: boolean | null;
	/**
	 * parent_id equals the given value.
	 */
	parent_id?: string | null;
	/**
	 * parent_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	parent_id_not?: string | null;
	/**
	 * parent_id is in the given list.
	 */
	parent_id_in?: string[] | null;
	/**
	 * parent_id is NOT in the given list.
	 */
	parent_id_not_in?: string[] | null;
}

export interface RoleTermCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: RoleTerm<API>[];
}

export interface TopicTermProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemTagEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	created?: Timestamp | null;
	parent?: TopicTerm<API> | null;
	tagId?: string | null;
	tagName?: string | null;
} /**
 * Use topics to group related content into categories. Displayed within the Resource Center.
 */
export type TopicTerm<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: TopicTermProperties<API>;
		}
	: TopicTermProperties<API>);

export interface TopicTermFilter {
	AND?: TopicTermFilter[] | null;
	OR?: TopicTermFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
	parent_exists?: boolean | null;
	/**
	 * parent_id equals the given value.
	 */
	parent_id?: string | null;
	/**
	 * parent_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	parent_id_not?: string | null;
	/**
	 * parent_id is in the given list.
	 */
	parent_id_in?: string[] | null;
	/**
	 * parent_id is NOT in the given list.
	 */
	parent_id_not_in?: string[] | null;
}

export interface TopicTermCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: TopicTerm<API>[];
}

export interface VerticalTermProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemTagEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	created?: Timestamp | null;
	parent?: VerticalTerm<API> | null;
	tagId?: string | null;
	tagName?: string | null;
} /**
 * Used to classify content by vertical.
 */
export type VerticalTerm<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: VerticalTermProperties<API>;
		}
	: VerticalTermProperties<API>);

export interface VerticalTermFilter {
	AND?: VerticalTermFilter[] | null;
	OR?: VerticalTermFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
	parent_exists?: boolean | null;
	/**
	 * parent_id equals the given value.
	 */
	parent_id?: string | null;
	/**
	 * parent_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	parent_id_not?: string | null;
	/**
	 * parent_id is in the given list.
	 */
	parent_id_in?: string[] | null;
	/**
	 * parent_id is NOT in the given list.
	 */
	parent_id_not_in?: string[] | null;
}

export interface VerticalTermCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: VerticalTerm<API>[];
}

export interface TextLongPropertyProperties<API extends 'rest' | 'graphql'> {
	value?: string | null;
	format?: string | null;
	embedded: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	processed?: string | null;
}
export type TextLongProperty<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: TextLongPropertyProperties<API>;
		}
	: TextLongPropertyProperties<API>);

export interface PathPropertyProperties<API extends 'rest' | 'graphql'> {
	alias?: string | null;
	langcode?: string | null;
}
export type PathProperty<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: PathPropertyProperties<API>;
		}
	: PathPropertyProperties<API>);

export interface TextWithSummaryPropertyProperties<
	API extends 'rest' | 'graphql',
> {
	value?: string | null;
	format?: string | null;
	summary?: string | null;
	embedded: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	processed?: string | null;
}
export type TextWithSummaryProperty<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: TextWithSummaryPropertyProperties<API>;
		}
	: TextWithSummaryPropertyProperties<API>);

export interface LinkPropertyProperties<API extends 'rest' | 'graphql'> {
	uri?: string | null;
	title?: string | null;
	options?: JSON | null;
	entity?: AnyEntry<API> | null;
}
export type LinkProperty<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: LinkPropertyProperties<API>;
		}
	: LinkPropertyProperties<API>);

export interface SmartdatePropertyProperties<API extends 'rest' | 'graphql'> {
	value?: number | null;
	endValue?: number | null;
	duration?: number | null;
	rrule?: number | null;
	rruleIndex?: number | null;
	timezone?: string | null;
}
export type SmartdateProperty<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SmartdatePropertyProperties<API>;
		}
	: SmartdatePropertyProperties<API>);

export interface TextPropertyProperties<API extends 'rest' | 'graphql'> {
	value?: string | null;
	format?: string | null;
}
export type TextProperty<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: TextPropertyProperties<API>;
		}
	: TextPropertyProperties<API>);

export interface BasicBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	body?: TextWithSummaryProperty<API> | null;
	created?: Timestamp | null;
} /**
 * A basic block contains a title and a body.
 */
export type BasicBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: BasicBlockProperties<API>;
		}
	: BasicBlockProperties<API>);

export interface BasicBlockFilter {
	AND?: BasicBlockFilter[] | null;
	OR?: BasicBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	body_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface BasicBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: BasicBlock<API>[];
}

export interface CtaBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	ctaBackgroundColor?: string | null;
	/**
	 * Call(s) to action. The first CTA will use the primary button style, and the second CTA will use the secondary button style.
	 */
	ctaButton?: LinkProperty<API>[] | null;
	ctaStyle?: string | null;
	/**
	 * The primary header text for the CTA.
	 */
	header?: string | null;
	/**
	 * Introductory decorative text describing the call to action.
	 */
	intro?: string | null;
	created?: Timestamp | null;
} /**
 * A call-to-action block with button and form support.
 */
export type CtaBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CtaBlockProperties<API>;
		}
	: CtaBlockProperties<API>);

export interface CtaBlockFilter {
	AND?: CtaBlockFilter[] | null;
	OR?: CtaBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	ctaBackgroundColor_exists?: boolean | null;
	ctaButton_exists?: boolean | null;
	ctaStyle_exists?: boolean | null;
	header_exists?: boolean | null;
	intro_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface CtaBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: CtaBlock<API>[];
}

export interface ImageMediaProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	mediaImage?: AnyEntry<API> | null;
	/**
	 * Optionally link an image to another page. This is currently only used for logos.
	 */
	mediaImageLink?: LinkProperty<API> | null;
	/**
	 * Select an image type that best describes the primary use of the image.
	 */
	mediaImageType?: ImageTypeTerm<API> | null;
	mediaInLibrary?: boolean | null;
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
} /**
 * Locally hosted images.
 */
export type ImageMedia<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ImageMediaProperties<API>;
		}
	: ImageMediaProperties<API>);

export interface ImageMediaFilter {
	AND?: ImageMediaFilter[] | null;
	OR?: ImageMediaFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	mediaImage_exists?: boolean | null;
	/**
	 * mediaImage_id equals the given value.
	 */
	mediaImage_id?: string | null;
	/**
	 * mediaImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaImage_id_not?: string | null;
	/**
	 * mediaImage_id is in the given list.
	 */
	mediaImage_id_in?: string[] | null;
	/**
	 * mediaImage_id is NOT in the given list.
	 */
	mediaImage_id_not_in?: string[] | null;
	mediaImageLink_exists?: boolean | null;
	mediaImageType_exists?: boolean | null;
	/**
	 * mediaImageType_id equals the given value.
	 */
	mediaImageType_id?: string | null;
	/**
	 * mediaImageType_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaImageType_id_not?: string | null;
	/**
	 * mediaImageType_id is in the given list.
	 */
	mediaImageType_id_in?: string[] | null;
	/**
	 * mediaImageType_id is NOT in the given list.
	 */
	mediaImageType_id_not_in?: string[] | null;
	mediaInLibrary_exists?: boolean | null;
	/**
	 * mediaInLibrary equals the given value.
	 */
	mediaInLibrary?: boolean | null;
	/**
	 * mediaInLibrary does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	mediaInLibrary_not?: boolean | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
}

export interface ImageMediaCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: ImageMedia<API>[];
}

export interface PanelParagraphProperties<API extends 'rest' | 'graphql'> {
	bodyFormatted?: TextLongProperty<API> | null;
	heading?: string | null;
	changed?: number | null;
} /**
 * A panel of content to be used within an accordion or set of tabs.
 */
export type PanelParagraph<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: PanelParagraphProperties<API>;
		}
	: PanelParagraphProperties<API>);

export interface AccordionBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	panels?: (PanelParagraph<API> | null)[] | null;
	created?: Timestamp | null;
} /**
 * A single panel or group of content panels. Useful when presenting a lot of content in a compact format (e.g. FAQs).
 */
export type AccordionBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: AccordionBlockProperties<API>;
		}
	: AccordionBlockProperties<API>);

export interface AccordionBlockFilter {
	AND?: AccordionBlockFilter[] | null;
	OR?: AccordionBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	panels_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface AccordionBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: AccordionBlock<API>[];
}

export interface CardBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	/**
	 * Additional or detailed information below the header.
	 */
	body?: string | null;
	/**
	 * Limit your link text to 25 characters.
	 */
	cardCta?: LinkProperty<API> | null;
	/**
	 * Select the call-to-action appearance.
	 */
	cardCtaStyle?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	cardImage?: ImageMedia<API> | null;
	cardStyle?: string | null;
	/**
	 * The primary header text for the card.
	 */
	header?: string | null;
	/**
	 * If the section you are adding the card to has a title of its own, select "h3", otherwise select "h2".
	 */
	headingLevel?: string | null;
	/**
	 * A brief (three or four words) title or phrase prior to the card header.
	 */
	kicker?: string | null;
	created?: Timestamp | null;
} /**
 * A card with an image and CTA.
 */
export type CardBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CardBlockProperties<API>;
		}
	: CardBlockProperties<API>);

export interface CardBlockFilter {
	AND?: CardBlockFilter[] | null;
	OR?: CardBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	body_exists?: boolean | null;
	cardCta_exists?: boolean | null;
	cardCtaStyle_exists?: boolean | null;
	cardImage_exists?: boolean | null;
	/**
	 * cardImage_id equals the given value.
	 */
	cardImage_id?: string | null;
	/**
	 * cardImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	cardImage_id_not?: string | null;
	/**
	 * cardImage_id is in the given list.
	 */
	cardImage_id_in?: string[] | null;
	/**
	 * cardImage_id is NOT in the given list.
	 */
	cardImage_id_not_in?: string[] | null;
	cardStyle_exists?: boolean | null;
	header_exists?: boolean | null;
	headingLevel_exists?: boolean | null;
	kicker_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface CardBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: CardBlock<API>[];
}

export interface ContentDetailBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	/**
	 * Additional or detailed information. Recommend using up to 200 characters.
	 */
	body?: TextWithSummaryProperty<API> | null;
	/**
	 * Select a background color for the content detail block.
	 */
	backgroundColor?: string | null;
	contentStyle?: string | null;
	/**
	 * Up to three CTAs styled as links.
	 */
	ctaLink?: LinkProperty<API>[] | null;
	/**
	 * The primary header text for the block.
	 */
	header?: string | null;
	imageInline?: ImageMedia<API> | null;
	/**
	 * Introductory decorative text. Recommend using up to 60 characters.
	 */
	intro?: string | null;
	/**
	 * A brief (three or four words) title or phrase prior to the primary header.
	 */
	kicker?: string | null;
	/**
	 * Select a background color for the content detail block.
	 */
	mediaBackgroundColor?: string | null;
	/**
	 * Select "before" to display the image or video media before the text. Select "after" to dispaly the image or video media after the text.
	 */
	mediaPosition?: string | null;
	textAlignment?: string | null;
	video?: RemoteVideoMedia<API> | null;
	created?: Timestamp | null;
} /**
 * A block with heading and body text, as well as image and video support.
 */
export type ContentDetailBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ContentDetailBlockProperties<API>;
		}
	: ContentDetailBlockProperties<API>);

export interface ContentDetailBlockFilter {
	AND?: ContentDetailBlockFilter[] | null;
	OR?: ContentDetailBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	body_exists?: boolean | null;
	backgroundColor_exists?: boolean | null;
	contentStyle_exists?: boolean | null;
	ctaLink_exists?: boolean | null;
	header_exists?: boolean | null;
	imageInline_exists?: boolean | null;
	/**
	 * imageInline_id equals the given value.
	 */
	imageInline_id?: string | null;
	/**
	 * imageInline_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	imageInline_id_not?: string | null;
	/**
	 * imageInline_id is in the given list.
	 */
	imageInline_id_in?: string[] | null;
	/**
	 * imageInline_id is NOT in the given list.
	 */
	imageInline_id_not_in?: string[] | null;
	intro_exists?: boolean | null;
	kicker_exists?: boolean | null;
	mediaBackgroundColor_exists?: boolean | null;
	mediaPosition_exists?: boolean | null;
	textAlignment_exists?: boolean | null;
	video_exists?: boolean | null;
	/**
	 * video_id equals the given value.
	 */
	video_id?: string | null;
	/**
	 * video_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	video_id_not?: string | null;
	/**
	 * video_id is in the given list.
	 */
	video_id_in?: string[] | null;
	/**
	 * video_id is NOT in the given list.
	 */
	video_id_not_in?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface ContentDetailBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: ContentDetailBlock<API>[];
}

export interface HeroBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	/**
	 * Additional or detailed information. Recommend using up to 200 characters.
	 */
	body?: TextWithSummaryProperty<API> | null;
	/**
	 * Select a background color for the hero.
	 */
	backgroundColor?: string | null;
	/**
	 * Call(s) to action. The first CTA will use the primary button style, and the second CTA will use the secondary button style.
	 */
	ctaButton?: LinkProperty<API>[] | null;
	/**
	 * Use of this gradient should be reserved for the homepage or very high-level section/landing pages.
	 */
	gradient?: boolean | null;
	/**
	 * The primary header text for the hero. Recommend using up to 45 characters.
	 */
	header?: string | null;
	/**
	 * Select which style hero to use.
	 */
	heroStyle?: string | null;
	imageBackground?: ImageMedia<API> | null;
	/**
	 * Upload images that are at least 1648px wide.
	 */
	imageForm?: ImageMedia<API> | null;
	imageInline?: ImageMedia<API> | null;
	/**
	 * Check this box if image should "bleed" to top.
	 */
	imageInlineBleed?: boolean | null;
	/**
	 * Introductory decorative text. Recommend using up to 60 characters.
	 */
	intro?: string | null;
	/**
	 * A brief (three or four words) title or phrase prior to the hero header.
	 */
	kicker?: string | null;
	/**
	 * Select a background color for the hero.
	 */
	mediaBackgroundColor?: string | null;
	/**
	 * Select "before" to display the image or video media before the text. Select "after" to dispaly the image or video media after the text.
	 */
	mediaPosition?: string | null;
	textAlignment?: string | null;
	video?: RemoteVideoMedia<API> | null;
	created?: Timestamp | null;
} /**
 * A hero with image, video, and CTA support.
 */
export type HeroBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: HeroBlockProperties<API>;
		}
	: HeroBlockProperties<API>);

export interface HeroBlockFilter {
	AND?: HeroBlockFilter[] | null;
	OR?: HeroBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	body_exists?: boolean | null;
	backgroundColor_exists?: boolean | null;
	ctaButton_exists?: boolean | null;
	gradient_exists?: boolean | null;
	/**
	 * gradient equals the given value.
	 */
	gradient?: boolean | null;
	/**
	 * gradient does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	gradient_not?: boolean | null;
	header_exists?: boolean | null;
	heroStyle_exists?: boolean | null;
	imageBackground_exists?: boolean | null;
	/**
	 * imageBackground_id equals the given value.
	 */
	imageBackground_id?: string | null;
	/**
	 * imageBackground_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	imageBackground_id_not?: string | null;
	/**
	 * imageBackground_id is in the given list.
	 */
	imageBackground_id_in?: string[] | null;
	/**
	 * imageBackground_id is NOT in the given list.
	 */
	imageBackground_id_not_in?: string[] | null;
	imageForm_exists?: boolean | null;
	/**
	 * imageForm_id equals the given value.
	 */
	imageForm_id?: string | null;
	/**
	 * imageForm_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	imageForm_id_not?: string | null;
	/**
	 * imageForm_id is in the given list.
	 */
	imageForm_id_in?: string[] | null;
	/**
	 * imageForm_id is NOT in the given list.
	 */
	imageForm_id_not_in?: string[] | null;
	imageInline_exists?: boolean | null;
	/**
	 * imageInline_id equals the given value.
	 */
	imageInline_id?: string | null;
	/**
	 * imageInline_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	imageInline_id_not?: string | null;
	/**
	 * imageInline_id is in the given list.
	 */
	imageInline_id_in?: string[] | null;
	/**
	 * imageInline_id is NOT in the given list.
	 */
	imageInline_id_not_in?: string[] | null;
	imageInlineBleed_exists?: boolean | null;
	/**
	 * imageInlineBleed equals the given value.
	 */
	imageInlineBleed?: boolean | null;
	/**
	 * imageInlineBleed does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	imageInlineBleed_not?: boolean | null;
	intro_exists?: boolean | null;
	kicker_exists?: boolean | null;
	mediaBackgroundColor_exists?: boolean | null;
	mediaPosition_exists?: boolean | null;
	textAlignment_exists?: boolean | null;
	video_exists?: boolean | null;
	/**
	 * video_id equals the given value.
	 */
	video_id?: string | null;
	/**
	 * video_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	video_id_not?: string | null;
	/**
	 * video_id is in the given list.
	 */
	video_id_in?: string[] | null;
	/**
	 * video_id is NOT in the given list.
	 */
	video_id_not_in?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface HeroBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: HeroBlock<API>[];
}

export interface LogoListBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	backgroundColor?: string | null;
	/**
	 * Optional header text that is displayed before the logo list.
	 */
	header?: string | null;
	logoListStyle?: string | null;
	/**
	 * Add up to five logos to make up the logo list. Search the media library prior to uploading new logo images.
	 */
	logos: API extends 'rest' ? ImageMedia<API>[] : ImageMediaCollection<API>;
	moreLink?: boolean | null;
	/**
	 * Toggling this field on will cause logos to be static instead of rotating
	 */
	static?: boolean | null;
	created?: Timestamp | null;
} /**
 * A list of logos that can optionally link to a specified target.
 */
export type LogoListBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: LogoListBlockProperties<API>;
		}
	: LogoListBlockProperties<API>);

export interface LogoListBlockFilter {
	AND?: LogoListBlockFilter[] | null;
	OR?: LogoListBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	backgroundColor_exists?: boolean | null;
	header_exists?: boolean | null;
	logoListStyle_exists?: boolean | null;
	logos_exists?: boolean | null;
	/**
	 * logos_id contains all given values.
	 */
	logos_id_contains_all?: string[] | null;
	/**
	 * logos_id contains some of the given values.
	 */
	logos_id_contains_some?: string[] | null;
	/**
	 * logos_id contains none of the given values.
	 */
	logos_id_contains_none?: string[] | null;
	moreLink_exists?: boolean | null;
	/**
	 * moreLink equals the given value.
	 */
	moreLink?: boolean | null;
	/**
	 * moreLink does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	moreLink_not?: boolean | null;
	static_exists?: boolean | null;
	/**
	 * static equals the given value.
	 */
	static?: boolean | null;
	/**
	 * static does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	static_not?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface LogoListBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: LogoListBlock<API>[];
}

export interface QuoteBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	/**
	 * The quote attribution. It is common, though not required, to include the first and last name, title of the individual being quoted, and the name of the company they are associated with.
	 */
	attribution?: string | null;
	backgroundColor?: string | null;
	quoteLogo?: ImageMedia<API> | null;
	/**
	 * The primary quote text.
	 */
	quoteText?: string | null;
	created?: Timestamp | null;
} /**
 * A block to display a quote.
 */
export type QuoteBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: QuoteBlockProperties<API>;
		}
	: QuoteBlockProperties<API>);

export interface QuoteBlockFilter {
	AND?: QuoteBlockFilter[] | null;
	OR?: QuoteBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	attribution_exists?: boolean | null;
	backgroundColor_exists?: boolean | null;
	quoteLogo_exists?: boolean | null;
	/**
	 * quoteLogo_id equals the given value.
	 */
	quoteLogo_id?: string | null;
	/**
	 * quoteLogo_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	quoteLogo_id_not?: string | null;
	/**
	 * quoteLogo_id is in the given list.
	 */
	quoteLogo_id_in?: string[] | null;
	/**
	 * quoteLogo_id is NOT in the given list.
	 */
	quoteLogo_id_not_in?: string[] | null;
	quoteText_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface QuoteBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: QuoteBlock<API>[];
}

export interface DocumentContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	about?: TextLongProperty<API> | null;
	aboutImage?: ImageMedia<API> | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	documentType?: string | null;
	metaTags?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	/**
	 * Use this field to upload the gated asset.
	 */
	resourceAsset?: DocumentMedia<API> | null;
	resourceImage?: ImageMedia<API> | null;
	resourceLearnings?: TextLongProperty<API> | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	subtitle?: string | null;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	simpleSitemap?: JSON | null;
}
export type DocumentContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: DocumentContentProperties<API>;
		}
	: DocumentContentProperties<API>);

export interface DocumentContentFilter {
	AND?: DocumentContentFilter[] | null;
	OR?: DocumentContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	about_exists?: boolean | null;
	aboutImage_exists?: boolean | null;
	/**
	 * aboutImage_id equals the given value.
	 */
	aboutImage_id?: string | null;
	/**
	 * aboutImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	aboutImage_id_not?: string | null;
	/**
	 * aboutImage_id is in the given list.
	 */
	aboutImage_id_in?: string[] | null;
	/**
	 * aboutImage_id is NOT in the given list.
	 */
	aboutImage_id_not_in?: string[] | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	documentType_exists?: boolean | null;
	metaTags_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	resourceAsset_exists?: boolean | null;
	/**
	 * resourceAsset_id equals the given value.
	 */
	resourceAsset_id?: string | null;
	/**
	 * resourceAsset_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	resourceAsset_id_not?: string | null;
	/**
	 * resourceAsset_id is in the given list.
	 */
	resourceAsset_id_in?: string[] | null;
	/**
	 * resourceAsset_id is NOT in the given list.
	 */
	resourceAsset_id_not_in?: string[] | null;
	resourceImage_exists?: boolean | null;
	/**
	 * resourceImage_id equals the given value.
	 */
	resourceImage_id?: string | null;
	/**
	 * resourceImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	resourceImage_id_not?: string | null;
	/**
	 * resourceImage_id is in the given list.
	 */
	resourceImage_id_in?: string[] | null;
	/**
	 * resourceImage_id is NOT in the given list.
	 */
	resourceImage_id_not_in?: string[] | null;
	resourceLearnings_exists?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	subtitle_exists?: boolean | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface DocumentContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: DocumentContent<API>[];
}

export interface EbookContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	about?: TextLongProperty<API> | null;
	aboutImage?: ImageMedia<API> | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	metaTags?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	/**
	 * Use this field to upload the gated asset.
	 */
	resourceAsset?: DocumentMedia<API> | null;
	resourceImage?: ImageMedia<API> | null;
	resourceLearnings?: TextLongProperty<API> | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	subtitle?: string | null;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	simpleSitemap?: JSON | null;
}
export type EbookContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: EbookContentProperties<API>;
		}
	: EbookContentProperties<API>);

export interface EbookContentFilter {
	AND?: EbookContentFilter[] | null;
	OR?: EbookContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	about_exists?: boolean | null;
	aboutImage_exists?: boolean | null;
	/**
	 * aboutImage_id equals the given value.
	 */
	aboutImage_id?: string | null;
	/**
	 * aboutImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	aboutImage_id_not?: string | null;
	/**
	 * aboutImage_id is in the given list.
	 */
	aboutImage_id_in?: string[] | null;
	/**
	 * aboutImage_id is NOT in the given list.
	 */
	aboutImage_id_not_in?: string[] | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	metaTags_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	resourceAsset_exists?: boolean | null;
	/**
	 * resourceAsset_id equals the given value.
	 */
	resourceAsset_id?: string | null;
	/**
	 * resourceAsset_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	resourceAsset_id_not?: string | null;
	/**
	 * resourceAsset_id is in the given list.
	 */
	resourceAsset_id_in?: string[] | null;
	/**
	 * resourceAsset_id is NOT in the given list.
	 */
	resourceAsset_id_not_in?: string[] | null;
	resourceImage_exists?: boolean | null;
	/**
	 * resourceImage_id equals the given value.
	 */
	resourceImage_id?: string | null;
	/**
	 * resourceImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	resourceImage_id_not?: string | null;
	/**
	 * resourceImage_id is in the given list.
	 */
	resourceImage_id_in?: string[] | null;
	/**
	 * resourceImage_id is NOT in the given list.
	 */
	resourceImage_id_not_in?: string[] | null;
	resourceLearnings_exists?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	subtitle_exists?: boolean | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface EbookContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: EbookContent<API>[];
}

export interface LandingPageContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	metaTags?: string | null;
	/**
	 * Toggle this on to display a minimal header that only displays the site logo. Should generally only be used for pages that we're driving traffic to as part of a paid campaign.
	 */
	minimalHeader?: boolean | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	layoutBuilderLayout?: string[] | null;
	simpleSitemap?: JSON | null;
} /**
 * A special page with its own one-off layout and content.
 */
export type LandingPageContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: LandingPageContentProperties<API>;
		}
	: LandingPageContentProperties<API>);

export interface LandingPageContentFilter {
	AND?: LandingPageContentFilter[] | null;
	OR?: LandingPageContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	metaTags_exists?: boolean | null;
	minimalHeader_exists?: boolean | null;
	/**
	 * minimalHeader equals the given value.
	 */
	minimalHeader?: boolean | null;
	/**
	 * minimalHeader does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	minimalHeader_not?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	layoutBuilderLayout_exists?: boolean | null;
	simpleSitemap_exists?: boolean | null;
}

export interface LandingPageContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: LandingPageContent<API>[];
}

export interface PageContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	promote?: boolean | null;
	body?: TextWithSummaryProperty<API> | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	metaTags?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	simpleSitemap?: JSON | null;
} /**
 * Use <em>basic pages</em> for your static content, such as an 'About us' page.
 */
export type PageContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: PageContentProperties<API>;
		}
	: PageContentProperties<API>);

export interface PageContentFilter {
	AND?: PageContentFilter[] | null;
	OR?: PageContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	body_exists?: boolean | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	metaTags_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface PageContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: PageContent<API>[];
}

export interface PersonContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	promote?: boolean | null;
	body?: TextWithSummaryProperty<API> | null;
	linkedinLink?: LinkProperty<API> | null;
	personCompany?: string | null;
	personPhoto?: ImageMedia<API> | null;
	personPosition?: string | null;
	personType?: string[] | null;
	twitterLink?: LinkProperty<API> | null;
	simpleSitemap?: JSON | null;
}
export type PersonContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: PersonContentProperties<API>;
		}
	: PersonContentProperties<API>);

export interface PersonContentFilter {
	AND?: PersonContentFilter[] | null;
	OR?: PersonContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	body_exists?: boolean | null;
	linkedinLink_exists?: boolean | null;
	personCompany_exists?: boolean | null;
	personPhoto_exists?: boolean | null;
	/**
	 * personPhoto_id equals the given value.
	 */
	personPhoto_id?: string | null;
	/**
	 * personPhoto_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	personPhoto_id_not?: string | null;
	/**
	 * personPhoto_id is in the given list.
	 */
	personPhoto_id_in?: string[] | null;
	/**
	 * personPhoto_id is NOT in the given list.
	 */
	personPhoto_id_not_in?: string[] | null;
	personPosition_exists?: boolean | null;
	personType_exists?: boolean | null;
	twitterLink_exists?: boolean | null;
	simpleSitemap_exists?: boolean | null;
}

export interface PersonContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: PersonContent<API>[];
}

export interface PressReleaseContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	body?: TextWithSummaryProperty<API> | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	metaTags?: string | null;
	pressCtaBody?: string | null;
	pressCtaButtons?: LinkProperty<API>[] | null;
	pressCtaTitle?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	subtitle?: string | null;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	simpleSitemap?: JSON | null;
}
export type PressReleaseContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: PressReleaseContentProperties<API>;
		}
	: PressReleaseContentProperties<API>);

export interface PressReleaseContentFilter {
	AND?: PressReleaseContentFilter[] | null;
	OR?: PressReleaseContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	body_exists?: boolean | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	metaTags_exists?: boolean | null;
	pressCtaBody_exists?: boolean | null;
	pressCtaButtons_exists?: boolean | null;
	pressCtaTitle_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	subtitle_exists?: boolean | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface PressReleaseContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: PressReleaseContent<API>[];
}

export interface SolutionContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	metaTags?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	layoutBuilderLayout?: string[] | null;
	simpleSitemap?: JSON | null;
} /**
 * A piece of content representative of a Pantheon solution. This could be a product or service.
 */
export type SolutionContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SolutionContentProperties<API>;
		}
	: SolutionContentProperties<API>);

export interface SolutionContentFilter {
	AND?: SolutionContentFilter[] | null;
	OR?: SolutionContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	metaTags_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	layoutBuilderLayout_exists?: boolean | null;
	simpleSitemap_exists?: boolean | null;
}

export interface SolutionContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: SolutionContent<API>[];
}

export interface CalloutParagraphProperties<API extends 'rest' | 'graphql'> {
	body?: TextLongProperty<API> | null;
	calloutImage?: ImageMedia<API> | null;
	header?: string | null;
	/**
	 * Note: This field is only applicable for the card format and is a brief (three or four words) title or phrase on top of the card header.
	 */
	kicker?: string | null;
	link?: LinkProperty<API> | null;
	/**
	 * Note: This field is only applicable for the card format.
	 */
	linkSecondary?: LinkProperty<API> | null;
	changed?: number | null;
}
export type CalloutParagraph<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CalloutParagraphProperties<API>;
		}
	: CalloutParagraphProperties<API>);

export interface ListItemParagraphProperties<API extends 'rest' | 'graphql'> {
	imageTopText?: string | null;
	listImage?: AnyEntry<API> | null;
	listTitle?: TextProperty<API> | null;
	changed?: number | null;
} /**
 * This is an internal component to parallax_item. Use to build list items withing a parallax section.
 */
export type ListItemParagraph<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ListItemParagraphProperties<API>;
		}
	: ListItemParagraphProperties<API>);

export interface BlogContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	body?: TextWithSummaryProperty<API> | null;
	author?: PersonContent<API> | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	metaTags?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	simpleSitemap?: JSON | null;
}
export type BlogContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: BlogContentProperties<API>;
		}
	: BlogContentProperties<API>);

export interface BlogContentFilter {
	AND?: BlogContentFilter[] | null;
	OR?: BlogContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	body_exists?: boolean | null;
	author_exists?: boolean | null;
	/**
	 * author_id equals the given value.
	 */
	author_id?: string | null;
	/**
	 * author_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	author_id_not?: string | null;
	/**
	 * author_id is in the given list.
	 */
	author_id_in?: string[] | null;
	/**
	 * author_id is NOT in the given list.
	 */
	author_id_not_in?: string[] | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	metaTags_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface BlogContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: BlogContent<API>[];
}

export interface EventContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	about?: TextLongProperty<API> | null;
	aboutImage?: ImageMedia<API> | null;
	/**
	 * Use this field to upload the gated asset.
	 */
	asset?: RemoteVideoMedia<API> | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	eventCenterShow?: boolean | null;
	/**
	 * Enter the date and time of the event. By default the time entered is in PST and displayed in both PST and EST. If you need to enter times in a different timezone, select a supported alternative timezone from the "Time zone" dropdown, and enter the time in accordance with that timezone.
	 */
	eventDate?: SmartdateProperty<API> | null;
	eventDelivery?: string[] | null;
	eventType?: string | null;
	introImage?: ImageMedia<API> | null;
	learnings?: TextLongProperty<API> | null;
	metaTags?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	resourceCenterShow?: boolean | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	speakers: API extends 'rest'
		? PersonContent<API>[]
		: PersonContentCollection<API>;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	simpleSitemap?: JSON | null;
} /**
 * Use events to add webinars, roadshows, networking events, etc.
 */
export type EventContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: EventContentProperties<API>;
		}
	: EventContentProperties<API>);

export interface EventContentFilter {
	AND?: EventContentFilter[] | null;
	OR?: EventContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	about_exists?: boolean | null;
	aboutImage_exists?: boolean | null;
	/**
	 * aboutImage_id equals the given value.
	 */
	aboutImage_id?: string | null;
	/**
	 * aboutImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	aboutImage_id_not?: string | null;
	/**
	 * aboutImage_id is in the given list.
	 */
	aboutImage_id_in?: string[] | null;
	/**
	 * aboutImage_id is NOT in the given list.
	 */
	aboutImage_id_not_in?: string[] | null;
	asset_exists?: boolean | null;
	/**
	 * asset_id equals the given value.
	 */
	asset_id?: string | null;
	/**
	 * asset_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	asset_id_not?: string | null;
	/**
	 * asset_id is in the given list.
	 */
	asset_id_in?: string[] | null;
	/**
	 * asset_id is NOT in the given list.
	 */
	asset_id_not_in?: string[] | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	eventCenterShow_exists?: boolean | null;
	/**
	 * eventCenterShow equals the given value.
	 */
	eventCenterShow?: boolean | null;
	/**
	 * eventCenterShow does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	eventCenterShow_not?: boolean | null;
	eventDate_exists?: boolean | null;
	eventDelivery_exists?: boolean | null;
	eventType_exists?: boolean | null;
	introImage_exists?: boolean | null;
	/**
	 * introImage_id equals the given value.
	 */
	introImage_id?: string | null;
	/**
	 * introImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	introImage_id_not?: string | null;
	/**
	 * introImage_id is in the given list.
	 */
	introImage_id_in?: string[] | null;
	/**
	 * introImage_id is NOT in the given list.
	 */
	introImage_id_not_in?: string[] | null;
	learnings_exists?: boolean | null;
	metaTags_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	resourceCenterShow_exists?: boolean | null;
	/**
	 * resourceCenterShow equals the given value.
	 */
	resourceCenterShow?: boolean | null;
	/**
	 * resourceCenterShow does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	resourceCenterShow_not?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	speakers_exists?: boolean | null;
	/**
	 * speakers_id contains all given values.
	 */
	speakers_id_contains_all?: string[] | null;
	/**
	 * speakers_id contains some of the given values.
	 */
	speakers_id_contains_some?: string[] | null;
	/**
	 * speakers_id contains none of the given values.
	 */
	speakers_id_contains_none?: string[] | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface EventContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: EventContent<API>[];
}

export interface ProductFeaturesTermProperties<API extends 'rest' | 'graphql'>
	extends Entry,
		SystemTagEntry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	/**
	 * See <a href="https://live-pds-mktg-drupal.appa.pantheon.site/?path=/docs/components-icon--default">the icon component page in the Pantheon Design System</a> for a list of available icons.
	 */
	icon?: string | null;
	/**
	 * Select the page that best represents the product feature.
	 */
	page?: LandingPageContent<API> | null;
	created?: Timestamp | null;
	parent?: ProductFeaturesTerm<API> | null;
	tagId?: string | null;
	tagName?: string | null;
} /**
 * Names of product features and corresponding high-level metadata
 */
export type ProductFeaturesTerm<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ProductFeaturesTermProperties<API>;
		}
	: ProductFeaturesTermProperties<API>);

export interface ProductFeaturesTermFilter {
	AND?: ProductFeaturesTermFilter[] | null;
	OR?: ProductFeaturesTermFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	icon_exists?: boolean | null;
	page_exists?: boolean | null;
	/**
	 * page_id equals the given value.
	 */
	page_id?: string | null;
	/**
	 * page_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	page_id_not?: string | null;
	/**
	 * page_id is in the given list.
	 */
	page_id_in?: string[] | null;
	/**
	 * page_id is NOT in the given list.
	 */
	page_id_not_in?: string[] | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
	parent_exists?: boolean | null;
	/**
	 * parent_id equals the given value.
	 */
	parent_id?: string | null;
	/**
	 * parent_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	parent_id_not?: string | null;
	/**
	 * parent_id is in the given list.
	 */
	parent_id_in?: string[] | null;
	/**
	 * parent_id is NOT in the given list.
	 */
	parent_id_not_in?: string[] | null;
}

export interface ProductFeaturesTermCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: ProductFeaturesTerm<API>[];
}

export interface ParallaxItemParagraphProperties<
	API extends 'rest' | 'graphql',
> {
	cta?: LinkProperty<API> | null;
	description?: TextLongProperty<API> | null;
	headerText?: string | null;
	image?: AnyEntry<API> | null;
	imageText?: string | null;
	listItems?: (ListItemParagraph<API> | null)[] | null;
	mobileImage?: ImageMedia<API> | null;
	postText?: string | null;
	preText?: string | null;
	changed?: number | null;
} /**
 * Use it to add a parallax item. This can only with with Parallax Block Type.
 */
export type ParallaxItemParagraph<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ParallaxItemParagraphProperties<API>;
		}
	: ParallaxItemParagraphProperties<API>);

export interface CreditParagraphProperties<API extends 'rest' | 'graphql'> {
	/**
	 * How should this person be credited?
	 */
	creditType?: CreditTypeTerm<API> | null;
	/**
	 * The person to be credited
	 */
	person?: PersonContent<API> | null;
	changed?: number | null;
} /**
 * An association between a person an the parent piece of content with which they are credited in the creation of.
 */
export type CreditParagraph<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CreditParagraphProperties<API>;
		}
	: CreditParagraphProperties<API>);

export interface ParallaxBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	parallaxSection?: (ParallaxItemParagraph<API> | null)[] | null;
	created?: Timestamp | null;
} /**
 * Use this component to build a parallax story component
 */
export type ParallaxBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ParallaxBlockProperties<API>;
		}
	: ParallaxBlockProperties<API>);

export interface ParallaxBlockFilter {
	AND?: ParallaxBlockFilter[] | null;
	OR?: ParallaxBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	parallaxSection_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface ParallaxBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: ParallaxBlock<API>[];
}

export interface CaseStudyContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	body?: TextWithSummaryProperty<API> | null;
	approach?: TextLongProperty<API> | null;
	/**
	 * Select up to two categories that best describe this content.
	 */
	category: API extends 'rest'
		? CategoryTerm<API>[]
		: CategoryTermCollection<API>;
	/**
	 * Enter each challenge in its own field.
	 */
	challenge?: string[] | null;
	headlines?: string[] | null;
	introduction?: TextLongProperty<API> | null;
	/**
	 * Upload an image that is at least 732px in width and 240px in height.
	 */
	logo?: ImageMedia<API> | null;
	metaTags?: string | null;
	/**
	 * Select all of the Pantheon product features highlighted by this case study.
	 */
	productFeatures: API extends 'rest'
		? ProductFeaturesTerm<API>[]
		: ProductFeaturesTermCollection<API>;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	resourceShow?: boolean | null;
	/**
	 * Select up to two relevant roles/personas related to the content.
	 */
	role: API extends 'rest' ? RoleTerm<API>[] : RoleTermCollection<API>;
	/**
	 * Enter each strategic point in its own field.
	 */
	strategy?: string[] | null;
	sublines?: string[] | null;
	subtitle?: string | null;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	/**
	 * Select a vertical that best describes this content.
	 */
	vertical?: VerticalTerm<API> | null;
	simpleSitemap?: JSON | null;
}
export type CaseStudyContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CaseStudyContentProperties<API>;
		}
	: CaseStudyContentProperties<API>);

export interface CaseStudyContentFilter {
	AND?: CaseStudyContentFilter[] | null;
	OR?: CaseStudyContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	body_exists?: boolean | null;
	approach_exists?: boolean | null;
	category_exists?: boolean | null;
	/**
	 * category_id contains all given values.
	 */
	category_id_contains_all?: string[] | null;
	/**
	 * category_id contains some of the given values.
	 */
	category_id_contains_some?: string[] | null;
	/**
	 * category_id contains none of the given values.
	 */
	category_id_contains_none?: string[] | null;
	challenge_exists?: boolean | null;
	headlines_exists?: boolean | null;
	introduction_exists?: boolean | null;
	logo_exists?: boolean | null;
	/**
	 * logo_id equals the given value.
	 */
	logo_id?: string | null;
	/**
	 * logo_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	logo_id_not?: string | null;
	/**
	 * logo_id is in the given list.
	 */
	logo_id_in?: string[] | null;
	/**
	 * logo_id is NOT in the given list.
	 */
	logo_id_not_in?: string[] | null;
	metaTags_exists?: boolean | null;
	productFeatures_exists?: boolean | null;
	/**
	 * productFeatures_id contains all given values.
	 */
	productFeatures_id_contains_all?: string[] | null;
	/**
	 * productFeatures_id contains some of the given values.
	 */
	productFeatures_id_contains_some?: string[] | null;
	/**
	 * productFeatures_id contains none of the given values.
	 */
	productFeatures_id_contains_none?: string[] | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	resourceShow_exists?: boolean | null;
	/**
	 * resourceShow equals the given value.
	 */
	resourceShow?: boolean | null;
	/**
	 * resourceShow does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	resourceShow_not?: boolean | null;
	role_exists?: boolean | null;
	/**
	 * role_id contains all given values.
	 */
	role_id_contains_all?: string[] | null;
	/**
	 * role_id contains some of the given values.
	 */
	role_id_contains_some?: string[] | null;
	/**
	 * role_id contains none of the given values.
	 */
	role_id_contains_none?: string[] | null;
	strategy_exists?: boolean | null;
	sublines_exists?: boolean | null;
	subtitle_exists?: boolean | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	vertical_exists?: boolean | null;
	/**
	 * vertical_id equals the given value.
	 */
	vertical_id?: string | null;
	/**
	 * vertical_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	vertical_id_not?: string | null;
	/**
	 * vertical_id is in the given list.
	 */
	vertical_id_in?: string[] | null;
	/**
	 * vertical_id is NOT in the given list.
	 */
	vertical_id_not_in?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface CaseStudyContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: CaseStudyContent<API>[];
}

export interface CalloutsBlockProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	calloutMode?: string | null;
	callouts?: (CalloutParagraph<API> | null)[] | null;
	content: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	/**
	 * The first and second CTAs will use the primary and secondary button styles, respectively.
	 */
	ctaButton?: LinkProperty<API>[] | null;
	ctaPosition?: string | null;
	/**
	 * The primary header text for the list of callouts.
	 */
	header?: string | null;
	/**
	 * Introductory decorative text describing the callout list.
	 */
	intro?: string | null;
	created?: Timestamp | null;
} /**
 * A block used to add a series of callouts with different formatting options.
 */
export type CalloutsBlock<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: CalloutsBlockProperties<API>;
		}
	: CalloutsBlockProperties<API>);

export interface CalloutsBlockFilter {
	AND?: CalloutsBlockFilter[] | null;
	OR?: CalloutsBlockFilter[] | null;
	sys?: SystemMetadataFilter | null;
	calloutMode_exists?: boolean | null;
	callouts_exists?: boolean | null;
	content_exists?: boolean | null;
	/**
	 * content_id contains all given values.
	 */
	content_id_contains_all?: string[] | null;
	/**
	 * content_id contains some of the given values.
	 */
	content_id_contains_some?: string[] | null;
	/**
	 * content_id contains none of the given values.
	 */
	content_id_contains_none?: string[] | null;
	ctaButton_exists?: boolean | null;
	ctaPosition_exists?: boolean | null;
	header_exists?: boolean | null;
	intro_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface CalloutsBlockCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: CalloutsBlock<API>[];
}

export interface ArticleContentProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	menuItems: API extends 'rest' ? AnyEntry<API>[] : AnyEntryCollection<API>;
	status?: boolean | null;
	promote?: boolean | null;
	body?: TextWithSummaryProperty<API> | null;
	metaTags?: string | null;
	/**
	 * Use this field to override the CTA text (50-character max) used when referencing this page. By default the text will be "Read More."
	 */
	referenceCtaText?: string | null;
	/**
	 * A brief description (160-character max) used to describe this content wherever it is referenced.
	 */
	referenceDescShort?: string | null;
	/**
	 * Fill out this field if the content could benefit from a lengthier description on the search results page and search engines.
	 */
	referenceDescription?: string | null;
	/**
	 * Upload an image that is at least 764px in width and 452px in height.
	 */
	referenceThumbnail?: ImageMedia<API> | null;
	referenceTitle?: string | null;
	/**
	 * Use this field for manually curated related content to display in the sidebar. Not every article needs this field filed out.
	 */
	relatedContent: API extends 'rest'
		? AnyEntry<API>[]
		: AnyEntryCollection<API>;
	subtitle?: string | null;
	/**
	 * Select up to five topics that best describe this content.
	 */
	topics: API extends 'rest' ? TopicTerm<API>[] : TopicTermCollection<API>;
	simpleSitemap?: JSON | null;
} /**
 * Prose content written in a definitive and formal tone that de-centers specific author(s). Updated after publishing when valuable.
 */
export type ArticleContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: ArticleContentProperties<API>;
		}
	: ArticleContentProperties<API>);

export interface ArticleContentFilter {
	AND?: ArticleContentFilter[] | null;
	OR?: ArticleContentFilter[] | null;
	sys?: SystemMetadataFilter | null;
	menuItems_exists?: boolean | null;
	/**
	 * menuItems_id contains all given values.
	 */
	menuItems_id_contains_all?: string[] | null;
	/**
	 * menuItems_id contains some of the given values.
	 */
	menuItems_id_contains_some?: string[] | null;
	/**
	 * menuItems_id contains none of the given values.
	 */
	menuItems_id_contains_none?: string[] | null;
	status_exists?: boolean | null;
	/**
	 * status equals the given value.
	 */
	status?: boolean | null;
	/**
	 * status does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	status_not?: boolean | null;
	promote_exists?: boolean | null;
	/**
	 * promote equals the given value.
	 */
	promote?: boolean | null;
	/**
	 * promote does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	promote_not?: boolean | null;
	body_exists?: boolean | null;
	metaTags_exists?: boolean | null;
	referenceCtaText_exists?: boolean | null;
	referenceDescShort_exists?: boolean | null;
	referenceDescription_exists?: boolean | null;
	referenceThumbnail_exists?: boolean | null;
	/**
	 * referenceThumbnail_id equals the given value.
	 */
	referenceThumbnail_id?: string | null;
	/**
	 * referenceThumbnail_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	referenceThumbnail_id_not?: string | null;
	/**
	 * referenceThumbnail_id is in the given list.
	 */
	referenceThumbnail_id_in?: string[] | null;
	/**
	 * referenceThumbnail_id is NOT in the given list.
	 */
	referenceThumbnail_id_not_in?: string[] | null;
	referenceTitle_exists?: boolean | null;
	relatedContent_exists?: boolean | null;
	/**
	 * relatedContent_id contains all given values.
	 */
	relatedContent_id_contains_all?: string[] | null;
	/**
	 * relatedContent_id contains some of the given values.
	 */
	relatedContent_id_contains_some?: string[] | null;
	/**
	 * relatedContent_id contains none of the given values.
	 */
	relatedContent_id_contains_none?: string[] | null;
	subtitle_exists?: boolean | null;
	topics_exists?: boolean | null;
	/**
	 * topics_id contains all given values.
	 */
	topics_id_contains_all?: string[] | null;
	/**
	 * topics_id contains some of the given values.
	 */
	topics_id_contains_some?: string[] | null;
	/**
	 * topics_id contains none of the given values.
	 */
	topics_id_contains_none?: string[] | null;
	simpleSitemap_exists?: boolean | null;
}

export interface ArticleContentCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: ArticleContent<API>[];
}

export interface MainNavMenuLinkProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	calloutContent?: string | null;
	calloutLink?: LinkProperty<API>[] | null;
	calloutTitle?: string | null;
	featuredContentBody?: string | null;
	featuredContentHeader?: string | null;
	featuredContentImage?: ImageMedia<API> | null;
	featuredContentLink?: LinkProperty<API> | null;
	featuredContentReference?: AnyEntry<API> | null;
	featuredMode?: string | null;
	icon?: ImageMedia<API> | null;
	subNavigationType?: string | null;
	created?: Timestamp | null;
}
export type MainNavMenuLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: MainNavMenuLinkProperties<API>;
		}
	: MainNavMenuLinkProperties<API>);

export interface MainNavMenuLinkFilter {
	AND?: MainNavMenuLinkFilter[] | null;
	OR?: MainNavMenuLinkFilter[] | null;
	sys?: SystemMetadataFilter | null;
	calloutContent_exists?: boolean | null;
	calloutLink_exists?: boolean | null;
	calloutTitle_exists?: boolean | null;
	featuredContentBody_exists?: boolean | null;
	featuredContentHeader_exists?: boolean | null;
	featuredContentImage_exists?: boolean | null;
	/**
	 * featuredContentImage_id equals the given value.
	 */
	featuredContentImage_id?: string | null;
	/**
	 * featuredContentImage_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	featuredContentImage_id_not?: string | null;
	/**
	 * featuredContentImage_id is in the given list.
	 */
	featuredContentImage_id_in?: string[] | null;
	/**
	 * featuredContentImage_id is NOT in the given list.
	 */
	featuredContentImage_id_not_in?: string[] | null;
	featuredContentLink_exists?: boolean | null;
	featuredContentReference_exists?: boolean | null;
	/**
	 * featuredContentReference_id equals the given value.
	 */
	featuredContentReference_id?: string | null;
	/**
	 * featuredContentReference_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	featuredContentReference_id_not?: string | null;
	/**
	 * featuredContentReference_id is in the given list.
	 */
	featuredContentReference_id_in?: string[] | null;
	/**
	 * featuredContentReference_id is NOT in the given list.
	 */
	featuredContentReference_id_not_in?: string[] | null;
	featuredMode_exists?: boolean | null;
	icon_exists?: boolean | null;
	/**
	 * icon_id equals the given value.
	 */
	icon_id?: string | null;
	/**
	 * icon_id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	icon_id_not?: string | null;
	/**
	 * icon_id is in the given list.
	 */
	icon_id_in?: string[] | null;
	/**
	 * icon_id is NOT in the given list.
	 */
	icon_id_not_in?: string[] | null;
	subNavigationType_exists?: boolean | null;
	created_exists?: boolean | null;
	/**
	 * created equals the given value.
	 */
	created?: Timestamp | null;
	/**
	 * created does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	created_not?: Timestamp | null;
	/**
	 * created is greater than the given value.
	 */
	created_gt?: Timestamp | null;
	/**
	 * created is greater than or equal to the given value.
	 */
	created_gte?: Timestamp | null;
	/**
	 * created is less than the given value.
	 */
	created_lt?: Timestamp | null;
	/**
	 * created is less than or equal to the given value.
	 */
	created_lte?: Timestamp | null;
	/**
	 * created is in the given list.
	 */
	created_in?: Timestamp[] | null;
	/**
	 * created is NOT in the given list.
	 */
	created_not_in?: Timestamp[] | null;
}

export interface MainNavMenuLinkCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: MainNavMenuLink<API>[];
}

export interface SharedContentUserDataProperties<API extends 'rest' | 'graphql'>
	extends Entry {
	bookmarked?: boolean | null;
	readAt?: Timestamp | null;
}
export type SharedContentUserData<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & SharedContentUserDataProperties<API>;

export interface SetSharedContentUserDataInputProperties<
	API extends 'rest' | 'graphql',
> {
	bookmarked?: boolean | null;
	readAt?: Timestamp | null;
}
export type SetSharedContentUserDataInput<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SetSharedContentUserDataInputProperties<API>;
		}
	: SetSharedContentUserDataInputProperties<API>);

export interface SharedContentUserDataFilter {
	bookmarked_exists?: boolean | null;
	/**
	 * bookmarked equals the given value.
	 */
	bookmarked?: boolean | null;
	/**
	 * bookmarked does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	bookmarked_not?: boolean | null;
	readAt_exists?: boolean | null;
	/**
	 * readAt equals the given value.
	 */
	readAt?: Timestamp | null;
	/**
	 * readAt does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	readAt_not?: Timestamp | null;
	/**
	 * readAt is greater than the given value.
	 */
	readAt_gt?: Timestamp | null;
	/**
	 * readAt is greater than or equal to the given value.
	 */
	readAt_gte?: Timestamp | null;
	/**
	 * readAt is less than the given value.
	 */
	readAt_lt?: Timestamp | null;
	/**
	 * readAt is less than or equal to the given value.
	 */
	readAt_lte?: Timestamp | null;
	/**
	 * readAt is in the given list.
	 */
	readAt_in?: Timestamp[] | null;
	/**
	 * readAt is NOT in the given list.
	 */
	readAt_not_in?: Timestamp[] | null;
}

export interface SharedContentUserDataCollection<API extends 'rest' | 'graphql'>
	extends EntryCollection<API>,
		Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: SharedContentUserData<API>[];
}

export interface SystemAssetImageDetailsProperties<
	API extends 'rest' | 'graphql',
> {
	width?: number | null;
	height?: number | null;
	gravity?: string | null;
}
export type SystemAssetImageDetails<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemAssetImageDetailsProperties<API>;
		}
	: SystemAssetImageDetailsProperties<API>);

export interface SystemAssetDetailsProperties<API extends 'rest' | 'graphql'> {
	image?: SystemAssetImageDetails<API> | null;
}
export type SystemAssetDetails<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemAssetDetailsProperties<API>;
		}
	: SystemAssetDetailsProperties<API>);

export interface SystemAssetProperties<API extends 'rest' | 'graphql'> {
	id: string;
	name: string;
	description?: string | null;
	uuid?: string | null;
	size?: number | null;
	mimeType?: string | null;
	mimeTypeGroup?: SystemMimeTypeGroup | null;
	downloadUrl?: string | null;
	embedUrl?: string | null;
	imageUrl?: string | null;
	customVersionId?: string | null;
	hash?: string | null;
}
export type SystemAsset<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemAssetProperties<API>;
		}
	: SystemAssetProperties<API>);

export interface SystemImageUrlInputProperties<API extends 'rest' | 'graphql'> {
	background?: string | null;
	gravity?: string | null;
	width?: number | null;
	height?: number | null;
	format?: SystemImageFormat | null;
	fit?: SystemImageFit | null;
	quality?: number | null;
}
export type SystemImageUrlInput<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemImageUrlInputProperties<API>;
		}
	: SystemImageUrlInputProperties<API>);

export interface SystemClientProperties<API extends 'rest' | 'graphql'> {
	id: string;
	spaceId: string;
	name: string;
	description?: string | null;
	secret: string;
}
export type SystemClient<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemClientProperties<API>;
		}
	: SystemClientProperties<API>);

export interface SystemExternalEntryLinkProperties<
	API extends 'rest' | 'graphql',
> {
	linkType: SystemExternalEntryLinkType;
	spaceUuid?: string | null;
	environmentUuid?: string | null;
	siteUuid?: string | null;
	domain: string;
	externalTargetEntryId?: string | null;
	externalTargetVersionId?: string | null;
	authorName?: string | null;
	authorEmail?: string | null;
	publisherName?: string | null;
	publisherEmail?: string | null;
	publicMetadata?: JSON | null;
	privateMetadata?: JSON | null;
	canonicalUrl?: string | null;
	versionUrl?: string | null;
	prettyUrl?: string | null;
	editUrl?: string | null;
	deleteUrl?: string | null;
}
export type SystemExternalEntryLink<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemExternalEntryLinkProperties<API>;
		}
	: SystemExternalEntryLinkProperties<API>);

export interface SystemContentProperties<API extends 'rest' | 'graphql'> {
	id?: string | null;
}
export type SystemContent<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemContentProperties<API>;
		}
	: SystemContentProperties<API>);

export interface Entry {}

export interface SystemTagEntry {
	tagId?: string | null;
	tagName?: string | null;
}

export interface SystemAssetEntry {
	assetId?: string | null;
	assetName?: string | null;
	assetFileName?: string | null;
	assetSize?: number | null;
	assetImageWidth?: number | null;
	assetImageHeight?: number | null;
	assetImageGravity?: string | null;
	assetMimeType?: string | null;
	assetDownloadUrl?: string | null;
	assetEmbedUrl?: string | null;
	assetImageUrl?: string | null;
}

export interface SystemLocaleProperties<API extends 'rest' | 'graphql'> {
	id: string;
	code: string;
	name: string;
	description?: string | null;
	default?: boolean | null;
	fallbackCode?: string | null;
}
export type SystemLocale<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemLocaleProperties<API>;
		}
	: SystemLocaleProperties<API>);

export interface SystemLocaleDraftProperties<API extends 'rest' | 'graphql'> {
	code: string;
	name: string;
	description?: string | null;
	fallbackCode?: string | null;
}
export type SystemLocaleDraft<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemLocaleDraftProperties<API>;
		}
	: SystemLocaleDraftProperties<API>);

export interface SystemSelfProperties<API extends 'rest' | 'graphql'> {
	spaceId?: string | null;
	userId?: string | null;
	clientId?: string | null;
	permissions?: string[] | null;
	locales?: string[] | null;
	locale?: string | null;
}
export type SystemSelf<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemSelfProperties<API>;
		}
	: SystemSelfProperties<API>);

export interface SystemSpaceProperties<API extends 'rest' | 'graphql'> {
	id: string;
	uuid: string;
	name?: string | null;
	description?: string | null;
	defaultLocale?: SystemLocale<API> | null;
	locales: SystemLocale<API>[];
	types: SystemContentType<API>[];
	content: SystemContent<API>[];
	graphql: string;
}
export type SystemSpace<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemSpaceProperties<API>;
		}
	: SystemSpaceProperties<API>);

export interface SystemTagProperties<API extends 'rest' | 'graphql'> {
	id: string;
	uuid?: string | null;
	name: string;
	description?: string | null;
}
export type SystemTag<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemTagProperties<API>;
		}
	: SystemTagProperties<API>);

export interface AddSystemTagInputProperties<API extends 'rest' | 'graphql'> {
	id?: string | null;
	spaceId: string;
	uuid?: string | null;
	name: string;
	description?: string | null;
}
export type AddSystemTagInput<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: AddSystemTagInputProperties<API>;
		}
	: AddSystemTagInputProperties<API>);

export interface SystemContentTypePropertyProperties<
	API extends 'rest' | 'graphql',
> {
	isArray: boolean;
	isRequired: boolean;
	isItemRequired?: boolean | null;
	isLocalized?: boolean | null;
	isLink?: boolean | null;
	type: string;
	allowedTypes?: string[] | null;
	name: string;
	description?: string | null;
	machineName: string;
	uniqueId: string;
	searchFormat?: SystemSearchIndexFormat | null;
}
export type SystemContentTypeProperty<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemContentTypePropertyProperties<API>;
		}
	: SystemContentTypePropertyProperties<API>);

export interface SystemContentTypeGraphqlProperties<
	API extends 'rest' | 'graphql',
> {
	types: JSON;
	unions: JSON;
	queries: JSON;
}
export type SystemContentTypeGraphql<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemContentTypeGraphqlProperties<API>;
		}
	: SystemContentTypeGraphqlProperties<API>);

export interface SystemContentTypeProperties<API extends 'rest' | 'graphql'> {
	id: string;
	name: string;
	description?: string | null;
	uniqueId: string;
	machineName: string;
	properties: SystemContentTypeProperty<API>[];
	isInline?: boolean | null;
	isIndependent?: boolean | null;
	isAsset?: boolean | null;
	isTag?: boolean | null;
	parent?: SystemContentType<API> | null;
	graphqlType: SystemContentTypeGraphql<API>;
}
export type SystemContentType<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: SystemContentTypeProperties<API>;
		}
	: SystemContentTypeProperties<API>);

export interface Collection<API extends 'rest' | 'graphql'> {
	skip: number;
	limit: number;
	total: number;
}

export interface AnyEntryCollection<API extends 'rest' | 'graphql'>
	extends Collection<API> {
	skip: number;
	limit: number;
	total: number;
	items: AnyEntry<API>[];
}

export interface EntryCollection<API extends 'rest' | 'graphql'>
	extends Collection<API> {
	items: Entry[];
	skip: number;
	limit: number;
	total: number;
}

export interface SystemContentTypeFilter {
	id_exists?: boolean | null;
	/**
	 * id equals the given value.
	 */
	id?: string | null;
	/**
	 * id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	id_not?: string | null;
	/**
	 * id is in the given list.
	 */
	id_in?: string[] | null;
	/**
	 * id is NOT in the given list.
	 */
	id_not_in?: string[] | null;
	machineName_exists?: boolean | null;
	/**
	 * machineName equals the given value.
	 */
	machineName?: string | null;
	/**
	 * machineName does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	machineName_not?: string | null;
	/**
	 * machineName is in the given list.
	 */
	machineName_in?: string[] | null;
	/**
	 * machineName is NOT in the given list.
	 */
	machineName_not_in?: string[] | null;
	uniqueId_exists?: boolean | null;
	/**
	 * uniqueId equals the given value.
	 */
	uniqueId?: string | null;
	/**
	 * uniqueId does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	uniqueId_not?: string | null;
	/**
	 * uniqueId is in the given list.
	 */
	uniqueId_in?: string[] | null;
	/**
	 * uniqueId is NOT in the given list.
	 */
	uniqueId_not_in?: string[] | null;
}

export interface SystemLocaleFilter {
	id_exists?: boolean | null;
	/**
	 * id equals the given value.
	 */
	id?: string | null;
	/**
	 * id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	id_not?: string | null;
	/**
	 * id is in the given list.
	 */
	id_in?: string[] | null;
	/**
	 * id is NOT in the given list.
	 */
	id_not_in?: string[] | null;
	code_exists?: boolean | null;
	/**
	 * code equals the given value.
	 */
	code?: string | null;
	/**
	 * code does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	code_not?: string | null;
	/**
	 * code is in the given list.
	 */
	code_in?: string[] | null;
	/**
	 * code is NOT in the given list.
	 */
	code_not_in?: string[] | null;
}

export interface SystemMetadataFilter {
	id_exists?: boolean | null;
	/**
	 * id equals the given value.
	 */
	id?: string | null;
	/**
	 * id does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	id_not?: string | null;
	/**
	 * id is in the given list.
	 */
	id_in?: string[] | null;
	/**
	 * id is NOT in the given list.
	 */
	id_not_in?: string[] | null;
	uuid_exists?: boolean | null;
	/**
	 * uuid equals the given value.
	 */
	uuid?: string | null;
	/**
	 * uuid does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	uuid_not?: string | null;
	/**
	 * uuid is in the given list.
	 */
	uuid_in?: string[] | null;
	/**
	 * uuid is NOT in the given list.
	 */
	uuid_not_in?: string[] | null;
	uniqueId_exists?: boolean | null;
	/**
	 * uniqueId equals the given value.
	 */
	uniqueId?: string | null;
	/**
	 * uniqueId does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	uniqueId_not?: string | null;
	/**
	 * uniqueId is in the given list.
	 */
	uniqueId_in?: string[] | null;
	/**
	 * uniqueId is NOT in the given list.
	 */
	uniqueId_not_in?: string[] | null;
	name_exists?: boolean | null;
	/**
	 * name equals the given value.
	 */
	name?: string | null;
	/**
	 * name does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	name_not?: string | null;
	/**
	 * name contains the given string.
	 */
	name_contains?: string | null;
	/**
	 * name does NOT contain the given string.
	 */
	name_not_containing?: string | null;
	/**
	 * name is in the given list.
	 */
	name_in?: string[] | null;
	/**
	 * name is NOT in the given list.
	 */
	name_not_in?: string[] | null;
	slug_exists?: boolean | null;
	isPublished_exists?: boolean | null;
	/**
	 * isPublished equals the given value.
	 */
	isPublished?: boolean | null;
	/**
	 * isPublished does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	isPublished_not?: boolean | null;
	firstPublishedAt_exists?: boolean | null;
	/**
	 * firstPublishedAt equals the given value.
	 */
	firstPublishedAt?: Timestamp | null;
	/**
	 * firstPublishedAt does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	firstPublishedAt_not?: Timestamp | null;
	/**
	 * firstPublishedAt is greater than the given value.
	 */
	firstPublishedAt_gt?: Timestamp | null;
	/**
	 * firstPublishedAt is greater than or equal to the given value.
	 */
	firstPublishedAt_gte?: Timestamp | null;
	/**
	 * firstPublishedAt is less than the given value.
	 */
	firstPublishedAt_lt?: Timestamp | null;
	/**
	 * firstPublishedAt is less than or equal to the given value.
	 */
	firstPublishedAt_lte?: Timestamp | null;
	/**
	 * firstPublishedAt is in the given list.
	 */
	firstPublishedAt_in?: Timestamp[] | null;
	/**
	 * firstPublishedAt is NOT in the given list.
	 */
	firstPublishedAt_not_in?: Timestamp[] | null;
	publishedAt_exists?: boolean | null;
	/**
	 * publishedAt equals the given value.
	 */
	publishedAt?: Timestamp | null;
	/**
	 * publishedAt does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	publishedAt_not?: Timestamp | null;
	/**
	 * publishedAt is greater than the given value.
	 */
	publishedAt_gt?: Timestamp | null;
	/**
	 * publishedAt is greater than or equal to the given value.
	 */
	publishedAt_gte?: Timestamp | null;
	/**
	 * publishedAt is less than the given value.
	 */
	publishedAt_lt?: Timestamp | null;
	/**
	 * publishedAt is less than or equal to the given value.
	 */
	publishedAt_lte?: Timestamp | null;
	/**
	 * publishedAt is in the given list.
	 */
	publishedAt_in?: Timestamp[] | null;
	/**
	 * publishedAt is NOT in the given list.
	 */
	publishedAt_not_in?: Timestamp[] | null;
	entryCreatedAt_exists?: boolean | null;
	/**
	 * entryCreatedAt equals the given value.
	 */
	entryCreatedAt?: Timestamp | null;
	/**
	 * entryCreatedAt does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	entryCreatedAt_not?: Timestamp | null;
	/**
	 * entryCreatedAt is greater than the given value.
	 */
	entryCreatedAt_gt?: Timestamp | null;
	/**
	 * entryCreatedAt is greater than or equal to the given value.
	 */
	entryCreatedAt_gte?: Timestamp | null;
	/**
	 * entryCreatedAt is less than the given value.
	 */
	entryCreatedAt_lt?: Timestamp | null;
	/**
	 * entryCreatedAt is less than or equal to the given value.
	 */
	entryCreatedAt_lte?: Timestamp | null;
	/**
	 * entryCreatedAt is in the given list.
	 */
	entryCreatedAt_in?: Timestamp[] | null;
	/**
	 * entryCreatedAt is NOT in the given list.
	 */
	entryCreatedAt_not_in?: Timestamp[] | null;
	versionCreatedAt_exists?: boolean | null;
	/**
	 * versionCreatedAt equals the given value.
	 */
	versionCreatedAt?: Timestamp | null;
	/**
	 * versionCreatedAt does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	versionCreatedAt_not?: Timestamp | null;
	/**
	 * versionCreatedAt is greater than the given value.
	 */
	versionCreatedAt_gt?: Timestamp | null;
	/**
	 * versionCreatedAt is greater than or equal to the given value.
	 */
	versionCreatedAt_gte?: Timestamp | null;
	/**
	 * versionCreatedAt is less than the given value.
	 */
	versionCreatedAt_lt?: Timestamp | null;
	/**
	 * versionCreatedAt is less than or equal to the given value.
	 */
	versionCreatedAt_lte?: Timestamp | null;
	/**
	 * versionCreatedAt is in the given list.
	 */
	versionCreatedAt_in?: Timestamp[] | null;
	/**
	 * versionCreatedAt is NOT in the given list.
	 */
	versionCreatedAt_not_in?: Timestamp[] | null;
	entryVersion_exists?: boolean | null;
	/**
	 * entryVersion equals the given value.
	 */
	entryVersion?: number | null;
	/**
	 * entryVersion does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	entryVersion_not?: number | null;
	/**
	 * entryVersion is greater than the given value.
	 */
	entryVersion_gt?: number | null;
	/**
	 * entryVersion is greater than or equal to the given value.
	 */
	entryVersion_gte?: number | null;
	/**
	 * entryVersion is less than the given value.
	 */
	entryVersion_lt?: number | null;
	/**
	 * entryVersion is less than or equal to the given value.
	 */
	entryVersion_lte?: number | null;
	/**
	 * entryVersion is in the given list.
	 */
	entryVersion_in?: number[] | null;
	/**
	 * entryVersion is NOT in the given list.
	 */
	entryVersion_not_in?: number[] | null;
	versionId_exists?: boolean | null;
	/**
	 * versionId equals the given value.
	 */
	versionId?: string | null;
	/**
	 * versionId does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	versionId_not?: string | null;
	/**
	 * versionId contains the given string.
	 */
	versionId_contains?: string | null;
	/**
	 * versionId does NOT contain the given string.
	 */
	versionId_not_containing?: string | null;
	/**
	 * versionId is in the given list.
	 */
	versionId_in?: string[] | null;
	/**
	 * versionId is NOT in the given list.
	 */
	versionId_not_in?: string[] | null;
	localizationVersion_exists?: boolean | null;
	/**
	 * localizationVersion equals the given value.
	 */
	localizationVersion?: number | null;
	/**
	 * localizationVersion does NOT equal the given value. This is true if the field is either missing or has a different value.
	 */
	localizationVersion_not?: number | null;
	/**
	 * localizationVersion is greater than the given value.
	 */
	localizationVersion_gt?: number | null;
	/**
	 * localizationVersion is greater than or equal to the given value.
	 */
	localizationVersion_gte?: number | null;
	/**
	 * localizationVersion is less than the given value.
	 */
	localizationVersion_lt?: number | null;
	/**
	 * localizationVersion is less than or equal to the given value.
	 */
	localizationVersion_lte?: number | null;
	/**
	 * localizationVersion is in the given list.
	 */
	localizationVersion_in?: number[] | null;
	/**
	 * localizationVersion is NOT in the given list.
	 */
	localizationVersion_not_in?: number[] | null;
	sharedUserData?: SharedContentUserDataFilter | null;
	assignedTagIds_in?: string[] | null;
	assignedTagNames_in?: string[] | null;
	type?: SystemContentTypeFilter | null;
	locale?: SystemLocaleFilter | null;
}

export interface SystemMetadata<API extends 'rest' | 'graphql'> {
	id?: string | null;
	versionId?: string | null;
	space: SystemSpace<API>;
	uuid?: string | null;
	name?: string | null;
	description?: string | null;
	slug?: string | null;
	uniqueId?: string | null;
	contentType?: SystemContentType<API> | null;
	locale?: SystemLocale<API> | null;
	isPublished?: boolean | null;
	entryCreatedAt?: Timestamp | null;
	revisionCreatedAt?: Timestamp | null;
	publishedAt?: Timestamp | null;
	firstPublishedAt?: Timestamp | null;
	entryVersion?: number | null;
	localizationVersion?: number | null;
	type: string;
	asset?: SystemAsset<API> | null;
	tag?: SystemTag<API> | null;
	externalLinks?: SystemExternalEntryLink<API> | null;
}

export interface EntryMetadata<API extends 'rest' | 'graphql'> {
	meta?: JSON | null;
	sharedUserData?: SharedContentUserData<API> | null;
}

export interface QueryProperties<API extends 'rest' | 'graphql'> {
	documentContent: DocumentContent<API>;
	documentContentCollection: API extends 'rest'
		? DocumentContent<API>[]
		: DocumentContentCollection<API>;
	ebookContent: EbookContent<API>;
	ebookContentCollection: API extends 'rest'
		? EbookContent<API>[]
		: EbookContentCollection<API>;
	landingPageContent: LandingPageContent<API>;
	landingPageContentCollection: API extends 'rest'
		? LandingPageContent<API>[]
		: LandingPageContentCollection<API>;
	pageContent: PageContent<API>;
	pageContentCollection: API extends 'rest'
		? PageContent<API>[]
		: PageContentCollection<API>;
	personContent: PersonContent<API>;
	personContentCollection: API extends 'rest'
		? PersonContent<API>[]
		: PersonContentCollection<API>;
	pressReleaseContent: PressReleaseContent<API>;
	pressReleaseContentCollection: API extends 'rest'
		? PressReleaseContent<API>[]
		: PressReleaseContentCollection<API>;
	solutionContent: SolutionContent<API>;
	solutionContentCollection: API extends 'rest'
		? SolutionContent<API>[]
		: SolutionContentCollection<API>;
	blogContent: BlogContent<API>;
	blogContentCollection: API extends 'rest'
		? BlogContent<API>[]
		: BlogContentCollection<API>;
	eventContent: EventContent<API>;
	eventContentCollection: API extends 'rest'
		? EventContent<API>[]
		: EventContentCollection<API>;
	caseStudyContent: CaseStudyContent<API>;
	caseStudyContentCollection: API extends 'rest'
		? CaseStudyContent<API>[]
		: CaseStudyContentCollection<API>;
	articleContent: ArticleContent<API>;
	articleContentCollection: API extends 'rest'
		? ArticleContent<API>[]
		: ArticleContentCollection<API>;
	systemSelf: SystemSelf<API>;
}
export type Query<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: QueryProperties<API>;
		}
	: QueryProperties<API>);

export interface MutationProperties<API extends 'rest' | 'graphql'> {
	setSharedContentUserData?: SharedContentUserData<API> | null;
}
export type Mutation<API extends 'rest' | 'graphql'> = {
	sys: SystemMetadata<API> & EntryMetadata<API>;
} & (API extends 'rest'
	? EntryMetadata<API> & {
			fields: MutationProperties<API>;
		}
	: MutationProperties<API>);

export type AnyEntry<API extends 'rest' | 'graphql'> =
	| MainNavMenuLink<API>
	| ArticleContent<API>
	| CalloutsBlock<API>
	| CaseStudyContent<API>
	| ParallaxBlock<API>
	| CreditParagraph<API>
	| ParallaxItemParagraph<API>
	| ProductFeaturesTerm<API>
	| EventContent<API>
	| BlogContent<API>
	| ListItemParagraph<API>
	| CalloutParagraph<API>
	| SolutionContent<API>
	| PressReleaseContent<API>
	| PersonContent<API>
	| PageContent<API>
	| LandingPageContent<API>
	| EbookContent<API>
	| DocumentContent<API>
	| QuoteBlock<API>
	| LogoListBlock<API>
	| HeroBlock<API>
	| ContentDetailBlock<API>
	| CardBlock<API>
	| AccordionBlock<API>
	| PanelParagraph<API>
	| ImageMedia<API>
	| CtaBlock<API>
	| BasicBlock<API>
	| TextProperty<API>
	| SmartdateProperty<API>
	| LinkProperty<API>
	| TextWithSummaryProperty<API>
	| PathProperty<API>
	| TextLongProperty<API>
	| VerticalTerm<API>
	| TopicTerm<API>
	| RoleTerm<API>
	| ImageTypeTerm<API>
	| CreditTypeTerm<API>
	| CategoryTerm<API>
	| ToolsMenuLink<API>
	| NavigationCtasMenuLink<API>
	| MainTestMenuLink<API>
	| MainMenuLink<API>
	| FooterMenuLink<API>
	| EntityHierarchyMicrositeMenuLink<API>
	| AdminMenuLink<API>
	| AccountMenuLink<API>
	| VideoMedia<API>
	| RemoteVideoMedia<API>
	| DocumentMedia<API>
	| File<API>
	| BlockType<API>
	| HeadlinesBlock<API>;
export type AnyIndependentEntry<API extends 'rest' | 'graphql'> =
	| HeadlinesBlock<API>
	| BlockType<API>
	| File<API>
	| DocumentMedia<API>
	| RemoteVideoMedia<API>
	| VideoMedia<API>
	| AccountMenuLink<API>
	| AdminMenuLink<API>
	| EntityHierarchyMicrositeMenuLink<API>
	| FooterMenuLink<API>
	| MainMenuLink<API>
	| MainTestMenuLink<API>
	| NavigationCtasMenuLink<API>
	| ToolsMenuLink<API>
	| CategoryTerm<API>
	| CreditTypeTerm<API>
	| ImageTypeTerm<API>
	| RoleTerm<API>
	| TopicTerm<API>
	| VerticalTerm<API>
	| BasicBlock<API>
	| CtaBlock<API>
	| ImageMedia<API>
	| AccordionBlock<API>
	| CardBlock<API>
	| ContentDetailBlock<API>
	| HeroBlock<API>
	| LogoListBlock<API>
	| QuoteBlock<API>
	| DocumentContent<API>
	| EbookContent<API>
	| LandingPageContent<API>
	| PageContent<API>
	| PersonContent<API>
	| PressReleaseContent<API>
	| SolutionContent<API>
	| BlogContent<API>
	| EventContent<API>
	| ProductFeaturesTerm<API>
	| ParallaxBlock<API>
	| CaseStudyContent<API>
	| CalloutsBlock<API>
	| ArticleContent<API>
	| MainNavMenuLink<API>;
export type AnyEntryUserData<API extends 'rest' | 'graphql'> =
	SharedContentUserData<API>;

export interface ContentTypeDefinition<
	API extends 'rest' | 'graphql',
	Properties extends {},
	Entry extends {},
	FilterType extends {},
	CollectionType extends EntryCollection<API> & Collection<API>,
	OrderType extends string,
> {
	Properties: Properties;
	Entry: Entry;
	Filter: FilterType;
	Collection: CollectionType;
	Order: OrderType;
}
export interface ContentTypes<API extends 'rest' | 'graphql'> {
	AccordionBlock: ContentTypeDefinition<
		API,
		AccordionBlockProperties<API>,
		AccordionBlock<API>,
		AccordionBlockFilter,
		AccordionBlockCollection<API>,
		AccordionBlockOrder
	>;
	AccountMenuLink: ContentTypeDefinition<
		API,
		AccountMenuLinkProperties<API>,
		AccountMenuLink<API>,
		AccountMenuLinkFilter,
		AccountMenuLinkCollection<API>,
		AccountMenuLinkOrder
	>;
	AdminMenuLink: ContentTypeDefinition<
		API,
		AdminMenuLinkProperties<API>,
		AdminMenuLink<API>,
		AdminMenuLinkFilter,
		AdminMenuLinkCollection<API>,
		AdminMenuLinkOrder
	>;
	ArticleContent: ContentTypeDefinition<
		API,
		ArticleContentProperties<API>,
		ArticleContent<API>,
		ArticleContentFilter,
		ArticleContentCollection<API>,
		ArticleContentOrder
	>;
	BasicBlock: ContentTypeDefinition<
		API,
		BasicBlockProperties<API>,
		BasicBlock<API>,
		BasicBlockFilter,
		BasicBlockCollection<API>,
		BasicBlockOrder
	>;
	BlockType: ContentTypeDefinition<
		API,
		BlockTypeProperties<API>,
		BlockType<API>,
		BlockTypeFilter,
		BlockTypeCollection<API>,
		BlockTypeOrder
	>;
	BlogContent: ContentTypeDefinition<
		API,
		BlogContentProperties<API>,
		BlogContent<API>,
		BlogContentFilter,
		BlogContentCollection<API>,
		BlogContentOrder
	>;
	CalloutsBlock: ContentTypeDefinition<
		API,
		CalloutsBlockProperties<API>,
		CalloutsBlock<API>,
		CalloutsBlockFilter,
		CalloutsBlockCollection<API>,
		CalloutsBlockOrder
	>;
	CardBlock: ContentTypeDefinition<
		API,
		CardBlockProperties<API>,
		CardBlock<API>,
		CardBlockFilter,
		CardBlockCollection<API>,
		CardBlockOrder
	>;
	CaseStudyContent: ContentTypeDefinition<
		API,
		CaseStudyContentProperties<API>,
		CaseStudyContent<API>,
		CaseStudyContentFilter,
		CaseStudyContentCollection<API>,
		CaseStudyContentOrder
	>;
	CategoryTerm: ContentTypeDefinition<
		API,
		CategoryTermProperties<API>,
		CategoryTerm<API>,
		CategoryTermFilter,
		CategoryTermCollection<API>,
		CategoryTermOrder
	>;
	ContentDetailBlock: ContentTypeDefinition<
		API,
		ContentDetailBlockProperties<API>,
		ContentDetailBlock<API>,
		ContentDetailBlockFilter,
		ContentDetailBlockCollection<API>,
		ContentDetailBlockOrder
	>;
	CreditTypeTerm: ContentTypeDefinition<
		API,
		CreditTypeTermProperties<API>,
		CreditTypeTerm<API>,
		CreditTypeTermFilter,
		CreditTypeTermCollection<API>,
		CreditTypeTermOrder
	>;
	CtaBlock: ContentTypeDefinition<
		API,
		CtaBlockProperties<API>,
		CtaBlock<API>,
		CtaBlockFilter,
		CtaBlockCollection<API>,
		CtaBlockOrder
	>;
	DocumentContent: ContentTypeDefinition<
		API,
		DocumentContentProperties<API>,
		DocumentContent<API>,
		DocumentContentFilter,
		DocumentContentCollection<API>,
		DocumentContentOrder
	>;
	DocumentMedia: ContentTypeDefinition<
		API,
		DocumentMediaProperties<API>,
		DocumentMedia<API>,
		DocumentMediaFilter,
		DocumentMediaCollection<API>,
		DocumentMediaOrder
	>;
	EbookContent: ContentTypeDefinition<
		API,
		EbookContentProperties<API>,
		EbookContent<API>,
		EbookContentFilter,
		EbookContentCollection<API>,
		EbookContentOrder
	>;
	EntityHierarchyMicrositeMenuLink: ContentTypeDefinition<
		API,
		EntityHierarchyMicrositeMenuLinkProperties<API>,
		EntityHierarchyMicrositeMenuLink<API>,
		EntityHierarchyMicrositeMenuLinkFilter,
		EntityHierarchyMicrositeMenuLinkCollection<API>,
		EntityHierarchyMicrositeMenuLinkOrder
	>;
	EventContent: ContentTypeDefinition<
		API,
		EventContentProperties<API>,
		EventContent<API>,
		EventContentFilter,
		EventContentCollection<API>,
		EventContentOrder
	>;
	File: ContentTypeDefinition<
		API,
		FileProperties<API>,
		File<API>,
		FileFilter,
		FileCollection<API>,
		FileOrder
	>;
	FooterMenuLink: ContentTypeDefinition<
		API,
		FooterMenuLinkProperties<API>,
		FooterMenuLink<API>,
		FooterMenuLinkFilter,
		FooterMenuLinkCollection<API>,
		FooterMenuLinkOrder
	>;
	HeadlinesBlock: ContentTypeDefinition<
		API,
		HeadlinesBlockProperties<API>,
		HeadlinesBlock<API>,
		HeadlinesBlockFilter,
		HeadlinesBlockCollection<API>,
		HeadlinesBlockOrder
	>;
	HeroBlock: ContentTypeDefinition<
		API,
		HeroBlockProperties<API>,
		HeroBlock<API>,
		HeroBlockFilter,
		HeroBlockCollection<API>,
		HeroBlockOrder
	>;
	ImageMedia: ContentTypeDefinition<
		API,
		ImageMediaProperties<API>,
		ImageMedia<API>,
		ImageMediaFilter,
		ImageMediaCollection<API>,
		ImageMediaOrder
	>;
	ImageTypeTerm: ContentTypeDefinition<
		API,
		ImageTypeTermProperties<API>,
		ImageTypeTerm<API>,
		ImageTypeTermFilter,
		ImageTypeTermCollection<API>,
		ImageTypeTermOrder
	>;
	LandingPageContent: ContentTypeDefinition<
		API,
		LandingPageContentProperties<API>,
		LandingPageContent<API>,
		LandingPageContentFilter,
		LandingPageContentCollection<API>,
		LandingPageContentOrder
	>;
	LogoListBlock: ContentTypeDefinition<
		API,
		LogoListBlockProperties<API>,
		LogoListBlock<API>,
		LogoListBlockFilter,
		LogoListBlockCollection<API>,
		LogoListBlockOrder
	>;
	MainMenuLink: ContentTypeDefinition<
		API,
		MainMenuLinkProperties<API>,
		MainMenuLink<API>,
		MainMenuLinkFilter,
		MainMenuLinkCollection<API>,
		MainMenuLinkOrder
	>;
	MainNavMenuLink: ContentTypeDefinition<
		API,
		MainNavMenuLinkProperties<API>,
		MainNavMenuLink<API>,
		MainNavMenuLinkFilter,
		MainNavMenuLinkCollection<API>,
		MainNavMenuLinkOrder
	>;
	MainTestMenuLink: ContentTypeDefinition<
		API,
		MainTestMenuLinkProperties<API>,
		MainTestMenuLink<API>,
		MainTestMenuLinkFilter,
		MainTestMenuLinkCollection<API>,
		MainTestMenuLinkOrder
	>;
	NavigationCtasMenuLink: ContentTypeDefinition<
		API,
		NavigationCtasMenuLinkProperties<API>,
		NavigationCtasMenuLink<API>,
		NavigationCtasMenuLinkFilter,
		NavigationCtasMenuLinkCollection<API>,
		NavigationCtasMenuLinkOrder
	>;
	PageContent: ContentTypeDefinition<
		API,
		PageContentProperties<API>,
		PageContent<API>,
		PageContentFilter,
		PageContentCollection<API>,
		PageContentOrder
	>;
	ParallaxBlock: ContentTypeDefinition<
		API,
		ParallaxBlockProperties<API>,
		ParallaxBlock<API>,
		ParallaxBlockFilter,
		ParallaxBlockCollection<API>,
		ParallaxBlockOrder
	>;
	PersonContent: ContentTypeDefinition<
		API,
		PersonContentProperties<API>,
		PersonContent<API>,
		PersonContentFilter,
		PersonContentCollection<API>,
		PersonContentOrder
	>;
	PressReleaseContent: ContentTypeDefinition<
		API,
		PressReleaseContentProperties<API>,
		PressReleaseContent<API>,
		PressReleaseContentFilter,
		PressReleaseContentCollection<API>,
		PressReleaseContentOrder
	>;
	ProductFeaturesTerm: ContentTypeDefinition<
		API,
		ProductFeaturesTermProperties<API>,
		ProductFeaturesTerm<API>,
		ProductFeaturesTermFilter,
		ProductFeaturesTermCollection<API>,
		ProductFeaturesTermOrder
	>;
	QuoteBlock: ContentTypeDefinition<
		API,
		QuoteBlockProperties<API>,
		QuoteBlock<API>,
		QuoteBlockFilter,
		QuoteBlockCollection<API>,
		QuoteBlockOrder
	>;
	RemoteVideoMedia: ContentTypeDefinition<
		API,
		RemoteVideoMediaProperties<API>,
		RemoteVideoMedia<API>,
		RemoteVideoMediaFilter,
		RemoteVideoMediaCollection<API>,
		RemoteVideoMediaOrder
	>;
	RoleTerm: ContentTypeDefinition<
		API,
		RoleTermProperties<API>,
		RoleTerm<API>,
		RoleTermFilter,
		RoleTermCollection<API>,
		RoleTermOrder
	>;
	SolutionContent: ContentTypeDefinition<
		API,
		SolutionContentProperties<API>,
		SolutionContent<API>,
		SolutionContentFilter,
		SolutionContentCollection<API>,
		SolutionContentOrder
	>;
	ToolsMenuLink: ContentTypeDefinition<
		API,
		ToolsMenuLinkProperties<API>,
		ToolsMenuLink<API>,
		ToolsMenuLinkFilter,
		ToolsMenuLinkCollection<API>,
		ToolsMenuLinkOrder
	>;
	TopicTerm: ContentTypeDefinition<
		API,
		TopicTermProperties<API>,
		TopicTerm<API>,
		TopicTermFilter,
		TopicTermCollection<API>,
		TopicTermOrder
	>;
	VerticalTerm: ContentTypeDefinition<
		API,
		VerticalTermProperties<API>,
		VerticalTerm<API>,
		VerticalTermFilter,
		VerticalTermCollection<API>,
		VerticalTermOrder
	>;
	VideoMedia: ContentTypeDefinition<
		API,
		VideoMediaProperties<API>,
		VideoMedia<API>,
		VideoMediaFilter,
		VideoMediaCollection<API>,
		VideoMediaOrder
	>;
}
export interface ContentUserDataTypes<API extends 'rest' | 'graphql'> {
	SharedContentUserData: ContentTypeDefinition<
		API,
		SharedContentUserDataProperties<API>,
		SharedContentUserData<API>,
		SharedContentUserDataFilter,
		SharedContentUserDataCollection<API>,
		SharedContentUserDataOrder
	>;
}
export type RestContentTypes = ContentTypes<'rest'>;
export type RestContentUserDataTypes = ContentUserDataTypes<'rest'>;
export type RestSystemMetadata = SystemMetadata<'rest'>;
