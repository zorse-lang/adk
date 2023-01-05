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
	readonly properties?: DocumentProcessorProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface DocumentProcessorProperties {
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
	readonly spoTenantId: string;
	readonly spoTenantUrl: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	documentProcessors: documentProcessors,
};
