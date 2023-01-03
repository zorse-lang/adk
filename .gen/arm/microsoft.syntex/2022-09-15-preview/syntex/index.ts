import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class documentProcessors
	extends ArmResource<documentProcessorsComponentInputs>
	implements documentProcessorsComponentOutputs
{
	constructor(entity: ADKEntity, options: documentProcessorsComponentInputs) {
		super(entity, options.name, "Microsoft.Syntex/documentProcessors", "2022-09-15-preview", options);
	}
	public readonly apiVersion: "2022-09-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Syntex/documentProcessors";
}
export interface documentProcessorsComponentOutputs {
	readonly apiVersion: "2022-09-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Syntex/documentProcessors";
}
export interface documentProcessorsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DocumentProcessorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface DocumentProcessorProperties {
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
	readonly spoTenantId: string;
	readonly spoTenantUrl: string;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	documentProcessors: documentProcessors,
};
