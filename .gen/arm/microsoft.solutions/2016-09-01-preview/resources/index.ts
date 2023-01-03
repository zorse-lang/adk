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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties: ApplianceDefinitionProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly identity?: Identity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: ApplianceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ApplianceArtifact {
	readonly name?: string | undefined;
	readonly type?: "Custom" | undefined;
	readonly uri?: string | undefined;
}
export interface ApplianceDefinitionProperties {
	readonly artifacts?: ApplianceArtifact[] | undefined;
	readonly authorizations: ApplianceProviderAuthorization[];
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly lockLevel: "CanNotDelete" | "None";
	readonly packageFileUri: string;
}
export interface ApplianceProperties {
	readonly applianceDefinitionId?: string | undefined;
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
export interface ApplianceProviderAuthorization {
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
	applianceDefinitions: applianceDefinitions,
	appliances: appliances,
};
