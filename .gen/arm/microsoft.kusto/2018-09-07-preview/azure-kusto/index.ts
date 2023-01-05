import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters", "2018-09-07-preview", options);
	}
	public readonly apiVersion: "2018-09-07-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2018-09-07-preview";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku: AzureSku;
	readonly tags?: TrackedResourceTags;
}
export class clusters_databases
	extends ArmResource<clusters_databasesComponentInputs>
	implements clusters_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases", "2018-09-07-preview", options);
	}
	public readonly apiVersion: "2018-09-07-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databasesComponentOutputs {
	readonly apiVersion: "2018-09-07-preview";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databasesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DatabaseProperties;
	readonly tags?: TrackedResourceTags;
}
export class clusters_databases_eventhubconnections
	extends ArmResource<clusters_databases_eventhubconnectionsComponentInputs>
	implements clusters_databases_eventhubconnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_eventhubconnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Kusto/clusters/databases/eventhubconnections",
			"2018-09-07-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-09-07-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/eventhubconnections";
}
export interface clusters_databases_eventhubconnectionsComponentOutputs {
	readonly apiVersion: "2018-09-07-preview";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/eventhubconnections";
}
export interface clusters_databases_eventhubconnectionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: EventHubConnectionProperties;
}
export function listPrincipals(resource: clusters_databases): DatabasePrincipalListResult {
	if (resource.apiVersion !== "2018-09-07-preview") {
		throw new Error(`listPrincipals is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters/databases") {
		throw new Error(`listPrincipals is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AzureSku {
	readonly capacity?: number;
	readonly name: "D13_v2" | "D14_v2" | "KC16" | "KC8" | "KS16" | "KS8" | "L16" | "L8";
	readonly tier: "Standard";
}
export interface ClusterProperties {
	readonly dataIngestionUri?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Running" | "Succeeded";
	readonly state?:
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Running"
		| "Starting"
		| "Stopped"
		| "Stopping"
		| "Unavailable";
	readonly trustedExternalTenants?: TrustedExternalTenant[];
	readonly uri?: string;
}
export interface DatabasePrincipal {
	readonly appId?: string;
	readonly email?: string;
	readonly fqn?: string;
	readonly name: string;
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewers" | "User" | "Viewer";
	readonly type: "App" | "Group" | "User";
}
export interface DatabasePrincipalListResult {
	readonly value?: DatabasePrincipal[];
}
export interface DatabaseProperties {
	readonly hotCachePeriodInDays?: number;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Running" | "Succeeded";
	readonly softDeletePeriodInDays: number;
	readonly statistics?: DatabaseStatistics;
}
export interface DatabaseStatistics {
	readonly size?: number;
}
export interface EventHubConnectionProperties {
	readonly consumerGroup: string;
	readonly dataFormat?: "CSV" | "JSON" | "MULTIJSON";
	readonly eventHubResourceId: string;
	readonly mappingRuleName?: string;
	readonly tableName?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TrustedExternalTenant {
	readonly value?: string;
}
export default {
	clusters: clusters,
	"clusters/databases": clusters_databases,
	"clusters/databases/eventhubconnections": clusters_databases_eventhubconnections,
};
