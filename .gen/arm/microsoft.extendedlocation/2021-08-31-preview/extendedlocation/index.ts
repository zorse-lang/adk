import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class customLocations
	extends ArmResource<customLocationsComponentInputs>
	implements customLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: customLocationsComponentInputs) {
		super(entity, options.name, "Microsoft.ExtendedLocation/customLocations", "2021-08-31-preview", options);
	}
	public readonly apiVersion: "2021-08-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ExtendedLocation/customLocations";
}
export interface customLocationsComponentOutputs {
	readonly apiVersion: "2021-08-31-preview";
	readonly id: string;
	readonly type: "Microsoft.ExtendedLocation/customLocations";
}
export interface customLocationsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CustomLocationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class customLocations_resourceSyncRules
	extends ArmResource<customLocations_resourceSyncRulesComponentInputs>
	implements customLocations_resourceSyncRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: customLocations_resourceSyncRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ExtendedLocation/customLocations/resourceSyncRules",
			"2021-08-31-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-08-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ExtendedLocation/customLocations/resourceSyncRules";
}
export interface customLocations_resourceSyncRulesComponentOutputs {
	readonly apiVersion: "2021-08-31-preview";
	readonly id: string;
	readonly type: "Microsoft.ExtendedLocation/customLocations/resourceSyncRules";
}
export interface customLocations_resourceSyncRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ResourceSyncRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface CustomLocationProperties {
	readonly authentication?: CustomLocationPropertiesAuthentication | undefined;
	readonly clusterExtensionIds?: string[] | undefined;
	readonly displayName?: string | undefined;
	readonly hostResourceId?: string | undefined;
	readonly hostType?: "Kubernetes" | undefined;
	readonly namespace?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface CustomLocationPropertiesAuthentication {
	readonly type?: string | undefined;
	readonly value?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface MatchExpressionsProperties {
	readonly key?: string | undefined;
	readonly operator?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface ResourceSyncRuleProperties {
	readonly priority?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly selector?: ResourceSyncRulePropertiesSelector | undefined;
	readonly targetResourceGroup?: string | undefined;
}
export interface ResourceSyncRulePropertiesSelector {
	readonly matchExpressions?: MatchExpressionsProperties[] | undefined;
	readonly matchLabels?: ResourceSyncRulePropertiesSelectorMatchLabels | undefined;
}
export interface ResourceSyncRulePropertiesSelectorMatchLabels {
	readonly "[ key: string ]"?: string | undefined;
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
	customLocations: customLocations,
	"customLocations/resourceSyncRules": customLocations_resourceSyncRules,
};
