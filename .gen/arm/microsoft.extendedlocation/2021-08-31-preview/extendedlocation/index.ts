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
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: CustomLocationProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ResourceSyncRuleProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface CustomLocationProperties {
	readonly authentication?: CustomLocationPropertiesAuthentication;
	readonly clusterExtensionIds?: string[];
	readonly displayName?: string;
	readonly hostResourceId?: string;
	readonly hostType?: "Kubernetes";
	readonly namespace?: string;
	readonly provisioningState?: string;
}
export interface CustomLocationPropertiesAuthentication {
	readonly type?: string;
	readonly value?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
}
export interface MatchExpressionsProperties {
	readonly key?: string;
	readonly operator?: string;
	readonly values?: string[];
}
export interface ResourceSyncRuleProperties {
	readonly priority?: number;
	readonly provisioningState?: string;
	readonly selector?: ResourceSyncRulePropertiesSelector;
	readonly targetResourceGroup?: string;
}
export interface ResourceSyncRulePropertiesSelector {
	readonly matchExpressions?: MatchExpressionsProperties[];
	readonly matchLabels?: ResourceSyncRulePropertiesSelectorMatchLabels;
}
export interface ResourceSyncRulePropertiesSelectorMatchLabels {
	readonly [key: string]: string;
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
	customLocations: customLocations,
	"customLocations/resourceSyncRules": customLocations_resourceSyncRules,
};
