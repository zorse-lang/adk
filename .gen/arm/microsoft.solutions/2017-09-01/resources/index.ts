import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationDefinitions
	extends ArmResource<applicationDefinitionsComponentInputs>
	implements applicationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applicationDefinitions", "2017-09-01", options);
	}
	public readonly apiVersion: "2017-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentOutputs {
	readonly apiVersion: "2017-09-01";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties: ApplicationDefinitionProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class applications extends ArmResource<applicationsComponentInputs> implements applicationsComponentOutputs {
	constructor(entity: ADKEntity, options: applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applications", "2017-09-01", options);
	}
	public readonly apiVersion: "2017-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2017-09-01";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentInputs {
	readonly identity?: Identity;
	readonly kind: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties: ApplicationProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export interface ApplicationArtifact {
	readonly name?: string;
	readonly type?: "Custom";
	readonly uri?: string;
}
export interface ApplicationDefinitionProperties {
	readonly artifacts?: ApplicationArtifact[];
	readonly authorizations: ApplicationProviderAuthorization[];
	readonly createUiDefinition?: any;
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled?: string;
	readonly lockLevel: "CanNotDelete" | "None";
	readonly mainTemplate?: any;
	readonly packageFileUri?: string;
}
export interface ApplicationProperties {
	readonly applicationDefinitionId?: string;
	readonly managedResourceGroupId: string;
	readonly outputs?: any;
	readonly parameters?: any;
	readonly provisioningState?:
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
		| "Updating";
	readonly uiDefinitionUri?: string;
}
export interface ApplicationProviderAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string;
	readonly publisher: string;
	readonly version: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly model?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: string;
}
export default {
	applicationDefinitions: applicationDefinitions,
	applications: applications,
};
