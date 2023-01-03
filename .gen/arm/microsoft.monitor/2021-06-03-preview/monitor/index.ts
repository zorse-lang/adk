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
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitoringAccountResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface MonitoringAccountDefaultIngestionSettings {
	readonly dataCollectionEndpointResourceId?: string | undefined;
	readonly dataCollectionRuleResourceId?: string | undefined;
}
export interface MonitoringAccountMetrics {
	readonly internalId?: string | undefined;
	readonly prometheusQueryEndpoint?: string | undefined;
}
export interface MonitoringAccountResourceProperties {
	readonly accountId?: string | undefined;
	readonly defaultIngestionSettings?: MonitoringAccountDefaultIngestionSettings | undefined;
	readonly metrics?: MonitoringAccountMetrics | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
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
	accounts: accounts,
};
