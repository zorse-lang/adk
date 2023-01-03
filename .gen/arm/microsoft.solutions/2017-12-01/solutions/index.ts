import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationDefinitions
	extends ArmResource<applicationDefinitionsComponentInputs>
	implements applicationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applicationDefinitions", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties: ApplicationDefinitionProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class applications extends ArmResource<applicationsComponentInputs> implements applicationsComponentOutputs {
	constructor(entity: ADKEntity, options: applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applications", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly kind: string;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties: ApplicationProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ApplicationArtifact {
	readonly name?: string | undefined;
	readonly type?: "Custom" | undefined;
	readonly uri?: string | undefined;
}
export interface ApplicationDefinitionProperties {
	readonly artifacts?: ApplicationArtifact[] | undefined;
	readonly authorizations: ApplicationProviderAuthorization[];
	readonly createUiDefinition?: any | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled?: string | undefined;
	readonly lockLevel: "CanNotDelete" | "None";
	readonly mainTemplate?: any | undefined;
	readonly packageFileUri?: string | undefined;
}
export interface ApplicationProperties {
	readonly applicationDefinitionId?: string | undefined;
	readonly managedResourceGroupId: string;
	readonly outputs?: any | undefined;
	readonly parameters?: any | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Created"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "Ready"
				| "Running"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly uiDefinitionUri?: string | undefined;
}
export interface ApplicationProviderAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string | undefined;
	readonly publisher: string;
	readonly version: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly model?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export default {
	applicationDefinitions: applicationDefinitions,
	applications: applications,
};
