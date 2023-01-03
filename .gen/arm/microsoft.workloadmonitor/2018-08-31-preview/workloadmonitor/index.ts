import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class components extends ArmResource<componentsComponentInputs> implements componentsComponentOutputs {
	constructor(entity: ADKEntity, options: componentsComponentInputs) {
		super(entity, options.name, "Microsoft.WorkloadMonitor/components", "2018-08-31-preview", options);
	}
	public readonly apiVersion: "2018-08-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.WorkloadMonitor/components";
}
export interface componentsComponentOutputs {
	readonly apiVersion: "2018-08-31-preview";
	readonly id: string;
	readonly type: "Microsoft.WorkloadMonitor/components";
}
export interface componentsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ComponentProperties | undefined;
}
export class monitorInstances
	extends ArmResource<monitorInstancesComponentInputs>
	implements monitorInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitorInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.WorkloadMonitor/monitorInstances", "2018-08-31-preview", options);
	}
	public readonly apiVersion: "2018-08-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.WorkloadMonitor/monitorInstances";
}
export interface monitorInstancesComponentOutputs {
	readonly apiVersion: "2018-08-31-preview";
	readonly id: string;
	readonly type: "Microsoft.WorkloadMonitor/monitorInstances";
}
export interface monitorInstancesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: MonitorInstanceProperties | undefined;
}
export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.WorkloadMonitor/monitors", "2018-08-31-preview", options);
	}
	public readonly apiVersion: "2018-08-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.WorkloadMonitor/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2018-08-31-preview";
	readonly id: string;
	readonly type: "Microsoft.WorkloadMonitor/monitors";
}
export interface monitorsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: MonitorProperties | undefined;
}
export class notificationSettings
	extends ArmResource<notificationSettingsComponentInputs>
	implements notificationSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: notificationSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.WorkloadMonitor/notificationSettings", "2018-08-31-preview", options);
	}
	public readonly apiVersion: "2018-08-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.WorkloadMonitor/notificationSettings";
}
export interface notificationSettingsComponentOutputs {
	readonly apiVersion: "2018-08-31-preview";
	readonly id: string;
	readonly type: "Microsoft.WorkloadMonitor/notificationSettings";
}
export interface notificationSettingsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NotificationSettingProperties | undefined;
}
export interface Component {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ComponentProperties | undefined;
	readonly type?: string | undefined;
}
export interface ComponentProperties {
	readonly aggregateProperties?: ComponentPropertiesAggregateProperties | undefined;
	readonly children?: Component[] | undefined;
	readonly componentName?: string | undefined;
	readonly componentTypeGroupCategory?: string | undefined;
	readonly componentTypeId?: string | undefined;
	readonly componentTypeName?: string | undefined;
	readonly healthState?: ("Error" | "Success" | "Uninitialized" | "Unknown") | undefined;
	readonly healthStateCategory?: ("CustomGroup" | "Identity") | undefined;
	readonly healthStateChangesEndTime?: string | undefined;
	readonly healthStateChangesStartTime?: string | undefined;
	readonly lastHealthStateChangeTime?: string | undefined;
	readonly solutionId?: string | undefined;
	readonly vmId?: string | undefined;
	readonly vmName?: string | undefined;
	readonly vmTags?: ComponentPropertiesVmTags | undefined;
	readonly workloadType?: ("Apache" | "BaseOS" | "IIS" | "SQL") | undefined;
	readonly workspaceId?: string | undefined;
}
export interface ComponentPropertiesAggregateProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ComponentPropertiesVmTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HealthStateChange {
	readonly healthState?: ("Error" | "Success" | "Uninitialized" | "Unknown") | undefined;
	readonly healthStateChangeTime?: string | undefined;
}
export interface MonitorCriteria {
	readonly comparisonOperator?:
		| ("Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual")
		| undefined;
	readonly healthState?: ("Error" | "Success" | "Uninitialized" | "Unknown") | undefined;
	readonly threshold?: number | undefined;
}
export interface MonitorInstance {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: MonitorInstanceProperties | undefined;
	readonly type?: string | undefined;
}
export interface MonitorInstanceProperties {
	readonly aggregateProperties?: MonitorInstancePropertiesAggregateProperties | undefined;
	readonly alertGeneration?: ("Disabled" | "Enabled") | undefined;
	readonly children?: MonitorInstance[] | undefined;
	readonly componentId?: string | undefined;
	readonly componentName?: string | undefined;
	readonly componentTypeId?: string | undefined;
	readonly componentTypeName?: string | undefined;
	readonly healthState?: ("Error" | "Success" | "Uninitialized" | "Unknown") | undefined;
	readonly healthStateCategory?: ("CustomGroup" | "Identity") | undefined;
	readonly healthStateChanges?: HealthStateChange[] | undefined;
	readonly healthStateChangesEndTime?: string | undefined;
	readonly healthStateChangesStartTime?: string | undefined;
	readonly lastHealthStateChangeTime?: string | undefined;
	readonly monitorCategory?:
		| ("AvailabilityHealth" | "Configuration" | "EntityHealth" | "PerformanceHealth")
		| undefined;
	readonly monitorId?: string | undefined;
	readonly monitorName?: string | undefined;
	readonly monitorType?: ("Aggregate" | "Dependency") | undefined;
	readonly solutionId?: string | undefined;
	readonly workloadType?: ("Apache" | "BaseOS" | "IIS" | "SQL") | undefined;
	readonly workspaceId?: string | undefined;
}
export interface MonitorInstancePropertiesAggregateProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MonitorProperties {
	readonly alertGeneration?: ("Disabled" | "Enabled") | undefined;
	readonly componentTypeDisplayName?: string | undefined;
	readonly componentTypeId?: string | undefined;
	readonly componentTypeName?: string | undefined;
	readonly criteria?: MonitorCriteria[] | undefined;
	readonly description?: string | undefined;
	readonly documentationURL?: string | undefined;
	readonly frequency?: number | undefined;
	readonly lookbackDuration?: number | undefined;
	readonly monitorCategory?:
		| ("AvailabilityHealth" | "Configuration" | "EntityHealth" | "PerformanceHealth")
		| undefined;
	readonly monitorDisplayName?: string | undefined;
	readonly monitorId?: string | undefined;
	readonly monitorName?: string | undefined;
	readonly monitorState?: "Disabled" | undefined;
	readonly monitorType?: ("Aggregate" | "Dependency") | undefined;
	readonly parentMonitorDisplayName?: string | undefined;
	readonly parentMonitorName?: string | undefined;
	readonly signalName?: string | undefined;
	readonly signalType?: string | undefined;
}
export interface NotificationSettingProperties {
	readonly actionGroupResourceIds?: string[] | undefined;
}
export default {
	components: components,
	monitorInstances: monitorInstances,
	monitors: monitors,
	notificationSettings: notificationSettings,
};
