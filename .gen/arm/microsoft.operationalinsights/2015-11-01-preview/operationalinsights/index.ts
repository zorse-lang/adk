import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces", "2015-11-01-preview", options);
	}
	public readonly apiVersion: "2015-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2015-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly tags?: ResourceTags;
}
export class workspaces_dataSources
	extends ArmResource<workspaces_dataSourcesComponentInputs>
	implements workspaces_dataSourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataSourcesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/dataSources", "2015-11-01-preview", options);
	}
	public readonly apiVersion: "2015-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/dataSources";
}
export interface workspaces_dataSourcesComponentOutputs {
	readonly apiVersion: "2015-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/dataSources";
}
export interface workspaces_dataSourcesComponentInputs {
	readonly eTag?: string;
	readonly kind:
		| "AzureActivityLog"
		| "ChangeTrackingCustomRegistry"
		| "ChangeTrackingDefaultPath"
		| "ChangeTrackingDefaultRegistry"
		| "ChangeTrackingPath"
		| "CustomLog"
		| "CustomLogCollection"
		| "GenericDataSource"
		| "IISLogs"
		| "LinuxPerformanceCollection"
		| "LinuxPerformanceObject"
		| "LinuxSyslog"
		| "LinuxSyslogCollection"
		| "WindowsEvent"
		| "WindowsPerformanceCounter";
	readonly name: string;
	readonly properties: any;
	readonly tags?: ProxyResourceTags;
}
export class workspaces_linkedServices
	extends ArmResource<workspaces_linkedServicesComponentInputs>
	implements workspaces_linkedServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_linkedServicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.OperationalInsights/workspaces/linkedServices",
			"2015-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentOutputs {
	readonly apiVersion: "2015-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentInputs {
	readonly name: string;
	readonly properties: LinkedServiceProperties;
}
export interface LinkedServiceProperties {
	readonly resourceId: string;
}
export interface ProxyResourceTags {
	readonly [key: string]: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name: "CapacityReservation" | "Free" | "PerGB2018" | "PerNode" | "Premium" | "Standalone" | "Standard";
}
export interface WorkspaceProperties {
	readonly customerId?: string;
	readonly portalUrl?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "ProvisioningAccount" | "Succeeded";
	readonly retentionInDays?: number;
	readonly sku?: Sku;
	readonly source?: string;
}
export default {
	workspaces: workspaces,
	"workspaces/dataSources": workspaces_dataSources,
	"workspaces/linkedServices": workspaces_linkedServices,
};
