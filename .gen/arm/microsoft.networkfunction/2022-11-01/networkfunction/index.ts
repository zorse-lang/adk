import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class azureTrafficCollectors
	extends ArmResource<azureTrafficCollectorsComponentInputs>
	implements azureTrafficCollectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: azureTrafficCollectorsComponentInputs) {
		super(entity, options.name, "Microsoft.NetworkFunction/azureTrafficCollectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors";
}
export interface azureTrafficCollectorsComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors";
}
export interface azureTrafficCollectorsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AzureTrafficCollectorPropertiesFormat | undefined;
	readonly systemData?: TrackedResourceSystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
			"2022-11-01",
			options,
		);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies";
}
export interface azureTrafficCollectors_collectorPoliciesComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies";
}
export interface azureTrafficCollectors_collectorPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CollectorPolicyPropertiesFormat | undefined;
	readonly systemData?: TrackedResourceSystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AzureTrafficCollectorPropertiesFormat {
	readonly collectorPolicies?: ResourceReference[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualHub?: ResourceReference | undefined;
}
export interface CollectorPolicyPropertiesFormat {
	readonly emissionPolicies?: EmissionPoliciesPropertiesFormat[] | undefined;
	readonly ingestionPolicy?: IngestionPolicyPropertiesFormat | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface EmissionPoliciesPropertiesFormat {
	readonly emissionDestinations?: EmissionPolicyDestination[] | undefined;
	readonly emissionType?: "IPFIX" | undefined;
}
export interface EmissionPolicyDestination {
	readonly destinationType?: "AzureMonitor" | undefined;
}
export interface IngestionPolicyPropertiesFormat {
	readonly ingestionSources?: IngestionSourcesPropertiesFormat[] | undefined;
	readonly ingestionType?: "IPFIX" | undefined;
}
export interface IngestionSourcesPropertiesFormat {
	readonly resourceId?: string | undefined;
	readonly sourceType?: "Resource" | undefined;
}
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface TrackedResourceSystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	azureTrafficCollectors: azureTrafficCollectors,
	"azureTrafficCollectors/collectorPolicies": azureTrafficCollectors_collectorPolicies,
};
