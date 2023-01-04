import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters", "2019-01-21", options);
	}
	public readonly apiVersion: "2019-01-21";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2019-01-21";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku: AzureSku;
	readonly tags?: TrackedResourceTags | undefined;
}
export class clusters_databases
	extends ArmResource<clusters_databasesComponentInputs>
	implements clusters_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases", "2019-01-21", options);
	}
	public readonly apiVersion: "2019-01-21";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databasesComponentOutputs {
	readonly apiVersion: "2019-01-21";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
}
export class clusters_databases_dataConnections_EventGrid
	extends ArmResource<clusters_databases_dataConnections_EventGridComponentInputs>
	implements clusters_databases_dataConnections_EventGridComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_EventGridComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2019-01-21", options);
	}
	public readonly apiVersion: "2019-01-21";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventGridComponentOutputs {
	readonly apiVersion: "2019-01-21";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventGridComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly kind: "EventGrid";
	readonly properties?: EventGridConnectionProperties | undefined;
}
export class clusters_databases_dataConnections_EventHub
	extends ArmResource<clusters_databases_dataConnections_EventHubComponentInputs>
	implements clusters_databases_dataConnections_EventHubComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_EventHubComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2019-01-21", options);
	}
	public readonly apiVersion: "2019-01-21";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventHubComponentOutputs {
	readonly apiVersion: "2019-01-21";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventHubComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly kind: "EventHub";
	readonly properties?: EventHubConnectionProperties | undefined;
}
export function listPrincipals(resource: clusters_databases): DatabasePrincipalListResult {
	if (resource.apiVersion !== "2019-01-21") {
		throw new Error(`listPrincipals is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters/databases") {
		throw new Error(`listPrincipals is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AzureSku {
	readonly capacity?: number | undefined;
	readonly name:
		| "Dev(No SLA)_Standard_D11_v2"
		| "Standard_D11_v2"
		| "Standard_D12_v2"
		| "Standard_D13_v2"
		| "Standard_D14_v2"
		| "Standard_DS13_v2+1TB_PS"
		| "Standard_DS13_v2+2TB_PS"
		| "Standard_DS14_v2+3TB_PS"
		| "Standard_DS14_v2+4TB_PS"
		| "Standard_L16s"
		| "Standard_L4s"
		| "Standard_L8s";
	readonly tier: "Basic" | "Standard";
}
export interface ClusterProperties {
	readonly dataIngestionUri?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Running" | "Succeeded") | undefined;
	readonly state?:
		| (
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Running"
				| "Starting"
				| "Stopped"
				| "Stopping"
				| "Unavailable"
				| "Updating"
		  )
		| undefined;
	readonly trustedExternalTenants?: TrustedExternalTenant[] | undefined;
	readonly uri?: string | undefined;
}
export interface DatabasePrincipal {
	readonly appId?: string | undefined;
	readonly email?: string | undefined;
	readonly fqn?: string | undefined;
	readonly name: string;
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewers" | "User" | "Viewer";
	readonly type: "App" | "Group" | "User";
}
export interface DatabasePrincipalListResult {
	readonly value?: DatabasePrincipal[] | undefined;
}
export interface DatabaseProperties {
	readonly hotCachePeriod?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Running" | "Succeeded") | undefined;
	readonly softDeletePeriod?: string | undefined;
	readonly statistics?: DatabaseStatistics | undefined;
}
export interface DatabaseStatistics {
	readonly size?: number | undefined;
}
export interface EventGridConnectionProperties {
	readonly consumerGroup: string;
	readonly dataFormat:
		| "AVRO"
		| "CSV"
		| "JSON"
		| "MULTIJSON"
		| "PSV"
		| "RAW"
		| "SCSV"
		| "SINGLEJSON"
		| "SOHSV"
		| "TSV"
		| "TXT";
	readonly eventHubResourceId: string;
	readonly mappingRuleName?: string | undefined;
	readonly storageAccountResourceId: string;
	readonly tableName: string;
}
export interface EventHubConnectionProperties {
	readonly consumerGroup: string;
	readonly dataFormat?:
		| ("AVRO" | "CSV" | "JSON" | "MULTIJSON" | "PSV" | "RAW" | "SCSV" | "SINGLEJSON" | "SOHSV" | "TSV" | "TXT")
		| undefined;
	readonly eventHubResourceId: string;
	readonly mappingRuleName?: string | undefined;
	readonly tableName?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrustedExternalTenant {
	readonly value?: string | undefined;
}
export type clusters_databases_dataConnections =
	| clusters_databases_dataConnections_EventGrid
	| clusters_databases_dataConnections_EventHub;
export default {
	clusters: clusters,
	"clusters/databases": clusters_databases,
	"clusters/databases/dataConnections/EventGrid": clusters_databases_dataConnections_EventGrid,
	"clusters/databases/dataConnections/EventHub": clusters_databases_dataConnections_EventHub,
};