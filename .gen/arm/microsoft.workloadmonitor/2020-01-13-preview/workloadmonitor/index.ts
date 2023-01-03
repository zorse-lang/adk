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
	readonly properties?: HealthMonitorProperties | undefined;
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
	readonly properties?: HealthMonitorStateChangeProperties | undefined;
}
export interface HealthMonitorProperties {
	readonly currentMonitorState?: ("Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning") | undefined;
	readonly currentStateFirstObservedTimestamp?: string | undefined;
	readonly evaluationTimestamp?: string | undefined;
	readonly evidence?: any | undefined;
	readonly lastReportedTimestamp?: string | undefined;
	readonly monitorConfiguration?: any | undefined;
	readonly monitoredObject?: string | undefined;
	readonly monitorName?: string | undefined;
	readonly monitorType?: string | undefined;
	readonly parentMonitorName?: string | undefined;
	readonly previousMonitorState?: ("Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning") | undefined;
}
export interface HealthMonitorStateChangeProperties {
	readonly currentMonitorState?: ("Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning") | undefined;
	readonly currentStateFirstObservedTimestamp?: string | undefined;
	readonly evaluationTimestamp?: string | undefined;
	readonly evidence?: any | undefined;
	readonly monitorConfiguration?: any | undefined;
	readonly monitoredObject?: string | undefined;
	readonly monitorName?: string | undefined;
	readonly monitorType?: string | undefined;
	readonly previousMonitorState?: ("Critical" | "Disabled" | "Healthy" | "None" | "Unknown" | "Warning") | undefined;
}
export default {
	monitors: monitors,
	"monitors/history": monitors_history,
};
