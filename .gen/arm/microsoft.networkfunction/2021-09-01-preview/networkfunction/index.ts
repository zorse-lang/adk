import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class azureTrafficCollectors
	extends ArmResource<azureTrafficCollectorsComponentInputs>
	implements azureTrafficCollectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: azureTrafficCollectorsComponentInputs) {
		super(entity, options.name, "Microsoft.NetworkFunction/azureTrafficCollectors", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors";
}
export interface azureTrafficCollectorsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors";
}
export interface azureTrafficCollectorsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AzureTrafficCollectorPropertiesFormat;
	readonly systemData?: TrackedResourceSystemData;
	readonly tags?: TrackedResourceTags;
}
export class azureTrafficCollectors_collectorPolicies
	extends ArmResource<azureTrafficCollectors_collectorPoliciesComponentInputs>
	implements azureTrafficCollectors_collectorPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: azureTrafficCollectors_collectorPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies";
}
export interface azureTrafficCollectors_collectorPoliciesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies";
}
export interface azureTrafficCollectors_collectorPoliciesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CollectorPolicyPropertiesFormat;
	readonly systemData?: CollectorPolicySystemData;
}
export interface AzureTrafficCollectorPropertiesFormat {
	readonly collectorPolicies?: CollectorPolicy[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualHub?: ResourceReference;
}
export interface CollectorPolicy {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: CollectorPolicyPropertiesFormat;
	readonly systemData?: CollectorPolicySystemData;
	readonly type?: string;
}
export interface CollectorPolicyPropertiesFormat {
	readonly emissionPolicies?: EmissionPoliciesPropertiesFormat[];
	readonly ingestionPolicy?: IngestionPolicyPropertiesFormat;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface CollectorPolicySystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface EmissionPoliciesPropertiesFormat {
	readonly emissionDestinations?: EmissionPolicyDestination[];
	readonly emissionType?: "IPFIX";
}
export interface EmissionPolicyDestination {
	readonly destinationType?: "AzureMonitor";
}
export interface IngestionPolicyPropertiesFormat {
	readonly ingestionSources?: IngestionSourcesPropertiesFormat[];
	readonly ingestionType?: "IPFIX";
}
export interface IngestionSourcesPropertiesFormat {
	readonly resourceId?: string;
	readonly sourceType?: "Resource";
}
export interface ResourceReference {
	readonly id?: string;
}
export interface TrackedResourceSystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	azureTrafficCollectors: azureTrafficCollectors,
	"azureTrafficCollectors/collectorPolicies": azureTrafficCollectors_collectorPolicies,
};
