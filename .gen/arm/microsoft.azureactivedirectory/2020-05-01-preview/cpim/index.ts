import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class guestUsages extends ArmResource<guestUsagesComponentInputs> implements guestUsagesComponentOutputs {
	constructor(entity: ADKEntity, options: guestUsagesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureActiveDirectory/guestUsages", "2020-05-01-preview", options);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureActiveDirectory/guestUsages";
}
export interface guestUsagesComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureActiveDirectory/guestUsages";
}
export interface guestUsagesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GuestUsagesResourceProperties | undefined;
	readonly tags?: GuestUsagesResourceTags | undefined;
}
export interface GuestUsagesResourceProperties {
	readonly tenantId?: string | undefined;
}
export interface GuestUsagesResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	guestUsages: guestUsages,
};
