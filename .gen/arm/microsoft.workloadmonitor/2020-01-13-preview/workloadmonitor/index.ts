import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.WorkloadMonitor/monitors", "2020-01-13-preview", options);
	}
	public readonly apiVersion: "2020-01-13-preview";
	public readonly id: string;
	public readonly type: "Microsoft.WorkloadMonitor/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2020-01-13-preview";
	readonly id: string;
	readonly type: "Microsoft.WorkloadMonitor/monitors";
}
export interface monitorsComponentInputs {
	readonly name: string;
	readonly properties?: HealthMonitorProperties;
}
export class monitors_history
	extends ArmResource<monitors_historyComponentInputs>
	implements monitors_historyComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_historyComponentInputs) {
		super(entity, options.name, "Microsoft.WorkloadMonitor/monitors/history", "2020-01-13-preview", options);
	}
	public readonly apiVersion: "2020-01-13-preview";
	public readonly id: string;
	public readonly type: "Microsoft.WorkloadMonitor/monitors/history";
}
export interface monitors_historyComponentOutputs {
	readonly apiVersion: "2020-01-13-preview";
	readonly id: string;
	readonly type: "Microsoft.WorkloadMonitor/monitors/history";
}
export interface monitors_historyComponentInputs {
	readonly name: string;
	readonly properties?: HealthMonitorStateChangeProperties;
}
export interface HealthMonitorProperties {
	readonly currentMonitorState?: "Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning";
	readonly currentStateFirstObservedTimestamp?: string;
	readonly evaluationTimestamp?: string;
	readonly evidence?: any;
	readonly lastReportedTimestamp?: string;
	readonly monitorConfiguration?: any;
	readonly monitoredObject?: string;
	readonly monitorName?: string;
	readonly monitorType?: string;
	readonly parentMonitorName?: string;
	readonly previousMonitorState?: "Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning";
}
export interface HealthMonitorStateChangeProperties {
	readonly currentMonitorState?: "Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning";
	readonly currentStateFirstObservedTimestamp?: string;
	readonly evaluationTimestamp?: string;
	readonly evidence?: any;
	readonly monitorConfiguration?: any;
	readonly monitoredObject?: string;
	readonly monitorName?: string;
	readonly monitorType?: string;
	readonly previousMonitorState?: "Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning";
}
export default {
	monitors: monitors,
	"monitors/history": monitors_history,
};
