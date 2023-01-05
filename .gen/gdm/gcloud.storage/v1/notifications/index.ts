import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Notifications extends GdmResource<NotificationsComponentInputs> implements NotificationsComponentOutputs {
	constructor(entity: ADKEntity, options: NotificationsComponentInputs) {
		super(entity, options.name, "storage.v1.Notifications", options);
	}
}
export interface NotificationsComponentOutputs {}
export interface NotificationsComponentInputs {
	readonly bucket: string;
	readonly custom_attributes?: { [P in string]: string };
	readonly etag?: string;
	readonly event_types?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly object_name_prefix?: string;
	readonly payload_format?: string;
	readonly selfLink?: string;
	readonly topic?: string;
	readonly userProject?: string;
	readonly name: string;
}
export interface Notification {
	readonly custom_attributes?: { [P in string]: string };
	readonly etag?: string;
	readonly event_types?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly object_name_prefix?: string;
	readonly payload_format?: string;
	readonly selfLink?: string;
	readonly topic?: string;
}
export default {
	Notifications: Notifications,
};
