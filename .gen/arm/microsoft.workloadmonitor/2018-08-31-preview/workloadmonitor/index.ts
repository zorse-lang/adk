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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ComponentProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: MonitorInstanceProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: MonitorProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NotificationSettingProperties;
}
export interface Component {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ComponentProperties;
	readonly type?: string;
}
export interface ComponentProperties {
	readonly aggregateProperties?: ComponentPropertiesAggregateProperties;
	readonly children?: Component[];
	readonly componentName?: string;
	readonly componentTypeGroupCategory?: string;
	readonly componentTypeId?: string;
	readonly componentTypeName?: string;
	readonly healthState?: "Error" | "Success" | "Uninitialized" | "Unknown";
	readonly healthStateCategory?: "CustomGroup" | "Identity";
	readonly healthStateChangesEndTime?: string;
	readonly healthStateChangesStartTime?: string;
	readonly lastHealthStateChangeTime?: string;
	readonly solutionId?: string;
	readonly vmId?: string;
	readonly vmName?: string;
	readonly vmTags?: ComponentPropertiesVmTags;
	readonly workloadType?: "Apache" | "BaseOS" | "IIS" | "SQL";
	readonly workspaceId?: string;
}
export interface ComponentPropertiesAggregateProperties {
	readonly [key: string]: string;
}
export interface ComponentPropertiesVmTags {
	readonly [key: string]: string;
}
export interface HealthStateChange {
	readonly healthState?: "Error" | "Success" | "Uninitialized" | "Unknown";
	readonly healthStateChangeTime?: string;
}
export interface MonitorCriteria {
	readonly comparisonOperator?: "Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
	readonly healthState?: "Error" | "Success" | "Uninitialized" | "Unknown";
	readonly threshold?: number;
}
export interface MonitorInstance {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: MonitorInstanceProperties;
	readonly type?: string;
}
export interface MonitorInstanceProperties {
	readonly aggregateProperties?: MonitorInstancePropertiesAggregateProperties;
	readonly alertGeneration?: "Disabled" | "Enabled";
	readonly children?: MonitorInstance[];
	readonly componentId?: string;
	readonly componentName?: string;
	readonly componentTypeId?: string;
	readonly componentTypeName?: string;
	readonly healthState?: "Error" | "Success" | "Uninitialized" | "Unknown";
	readonly healthStateCategory?: "CustomGroup" | "Identity";
	readonly healthStateChanges?: HealthStateChange[];
	readonly healthStateChangesEndTime?: string;
	readonly healthStateChangesStartTime?: string;
	readonly lastHealthStateChangeTime?: string;
	readonly monitorCategory?: "AvailabilityHealth" | "Configuration" | "EntityHealth" | "PerformanceHealth";
	readonly monitorId?: string;
	readonly monitorName?: string;
	readonly monitorType?: "Aggregate" | "Dependency";
	readonly solutionId?: string;
	readonly workloadType?: "Apache" | "BaseOS" | "IIS" | "SQL";
	readonly workspaceId?: string;
}
export interface MonitorInstancePropertiesAggregateProperties {
	readonly [key: string]: string;
}
export interface MonitorProperties {
	readonly alertGeneration?: "Disabled" | "Enabled";
	readonly componentTypeDisplayName?: string;
	readonly componentTypeId?: string;
	readonly componentTypeName?: string;
	readonly criteria?: MonitorCriteria[];
	readonly description?: string;
	readonly documentationURL?: string;
	readonly frequency?: number;
	readonly lookbackDuration?: number;
	readonly monitorCategory?: "AvailabilityHealth" | "Configuration" | "EntityHealth" | "PerformanceHealth";
	readonly monitorDisplayName?: string;
	readonly monitorId?: string;
	readonly monitorName?: string;
	readonly monitorState?: "Disabled";
	readonly monitorType?: "Aggregate" | "Dependency";
	readonly parentMonitorDisplayName?: string;
	readonly parentMonitorName?: string;
	readonly signalName?: string;
	readonly signalType?: string;
}
export interface NotificationSettingProperties {
	readonly actionGroupResourceIds?: string[];
}
export default {
	components: components,
	monitorInstances: monitorInstances,
	monitors: monitors,
	notificationSettings: notificationSettings,
};
