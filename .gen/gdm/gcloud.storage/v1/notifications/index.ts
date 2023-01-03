import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Notifications extends GdmResource<NotificationsComponentInputs> implements NotificationsComponentOutputs {
	constructor(entity: ADKEntity, options: NotificationsComponentInputs) {
		super(entity, options.name, "storage.v1.Notifications", options);
	}
}
export interface NotificationsComponentOutputs {}
export interface NotificationsComponentInputs {
	readonly bucket: string;
	readonly custom_attributes?: { [P in string]: string } | undefined;
	readonly etag?: string | undefined;
	readonly event_types?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly object_name_prefix?: string | undefined;
	readonly payload_format?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly topic?: string | undefined;
	readonly userProject?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface Notification {
	readonly custom_attributes?: { [P in string]: string } | undefined;
	readonly etag?: string | undefined;
	readonly event_types?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly object_name_prefix?: string | undefined;
	readonly payload_format?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly topic?: string | undefined;
}
export default {
	Notifications: Notifications,
};
