import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Monitor/accounts", "2021-06-03-preview", options);
	}
	public readonly apiVersion: "2021-06-03-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Monitor/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2021-06-03-preview";
	readonly id: string;
	readonly type: "Microsoft.Monitor/accounts";
}
export interface accountsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitoringAccountResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface MonitoringAccountDefaultIngestionSettings {
	readonly dataCollectionEndpointResourceId?: string;
	readonly dataCollectionRuleResourceId?: string;
}
export interface MonitoringAccountMetrics {
	readonly internalId?: string;
	readonly prometheusQueryEndpoint?: string;
}
export interface MonitoringAccountResourceProperties {
	readonly accountId?: string;
	readonly defaultIngestionSettings?: MonitoringAccountDefaultIngestionSettings;
	readonly metrics?: MonitoringAccountMetrics;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded";
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
	accounts: accounts,
};
