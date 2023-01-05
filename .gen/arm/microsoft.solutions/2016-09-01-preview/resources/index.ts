import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applianceDefinitions
	extends ArmResource<applianceDefinitionsComponentInputs>
	implements applianceDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applianceDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applianceDefinitions", "2016-09-01-preview", options);
	}
	public readonly apiVersion: "2016-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applianceDefinitions";
}
export interface applianceDefinitionsComponentOutputs {
	readonly apiVersion: "2016-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applianceDefinitions";
}
export interface applianceDefinitionsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties: ApplianceDefinitionProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class appliances extends ArmResource<appliancesComponentInputs> implements appliancesComponentOutputs {
	constructor(entity: ADKEntity, options: appliancesComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/appliances", "2016-09-01-preview", options);
	}
	public readonly apiVersion: "2016-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/appliances";
}
export interface appliancesComponentOutputs {
	readonly apiVersion: "2016-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Solutions/appliances";
}
export interface appliancesComponentInputs {
	readonly identity?: Identity;
	readonly kind?: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: ApplianceProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export interface ApplianceArtifact {
	readonly name?: string;
	readonly type?: "Custom";
	readonly uri?: string;
}
export interface ApplianceDefinitionProperties {
	readonly artifacts?: ApplianceArtifact[];
	readonly authorizations: ApplianceProviderAuthorization[];
	readonly description?: string;
	readonly displayName?: string;
	readonly lockLevel: "CanNotDelete" | "None";
	readonly packageFileUri: string;
}
export interface ApplianceProperties {
	readonly applianceDefinitionId?: string;
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
export interface ApplianceProviderAuthorization {
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
	applianceDefinitions: applianceDefinitions,
	appliances: appliances,
};
