import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class sapMonitors extends ArmResource<sapMonitorsComponentInputs> implements sapMonitorsComponentOutputs {
	constructor(entity: ADKEntity, options: sapMonitorsComponentInputs) {
		super(entity, options.name, "Microsoft.HanaOnAzure/sapMonitors", "2020-02-07-preview", options);
	}
	public readonly apiVersion: "2020-02-07-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HanaOnAzure/sapMonitors";
}
export interface sapMonitorsComponentOutputs {
	readonly apiVersion: "2020-02-07-preview";
	readonly id: string;
	readonly type: "Microsoft.HanaOnAzure/sapMonitors";
}
export interface sapMonitorsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SapMonitorProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class sapMonitors_providerInstances
	extends ArmResource<sapMonitors_providerInstancesComponentInputs>
	implements sapMonitors_providerInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sapMonitors_providerInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.HanaOnAzure/sapMonitors/providerInstances", "2020-02-07-preview", options);
	}
	public readonly apiVersion: "2020-02-07-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HanaOnAzure/sapMonitors/providerInstances";
}
export interface sapMonitors_providerInstancesComponentOutputs {
	readonly apiVersion: "2020-02-07-preview";
	readonly id: string;
	readonly type: "Microsoft.HanaOnAzure/sapMonitors/providerInstances";
}
export interface sapMonitors_providerInstancesComponentInputs {
	readonly name: string;
	readonly properties?: ProviderInstanceProperties | undefined;
}
export interface ProviderInstanceProperties {
	readonly metadata?: string | undefined;
	readonly properties?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly type?: string | undefined;
}
export interface SapMonitorProperties {
	readonly enableCustomerAnalytics?: boolean | undefined;
	readonly logAnalyticsWorkspaceArmId?: string | undefined;
	readonly logAnalyticsWorkspaceId?: string | undefined;
	readonly logAnalyticsWorkspaceSharedKey?: string | undefined;
	readonly managedResourceGroupName?: string | undefined;
	readonly monitorSubnet?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly sapMonitorCollectorVersion?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	sapMonitors: sapMonitors,
	"sapMonitors/providerInstances": sapMonitors_providerInstances,
};
