import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NodeGroups extends GdmResource<NodeGroupsComponentInputs> implements NodeGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: NodeGroupsComponentInputs) {
		super(entity, options.name, "compute.beta.NodeGroups", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly size?: number;
	public readonly zone?: string;
}
export interface NodeGroupsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly size?: number;
	readonly zone?: string;
}
export interface NodeGroupsComponentInputs {
	readonly autoscalingPolicy?: NodeGroupAutoscalingPolicy;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly initialNodeCount: number;
	readonly locationHint?: string;
	readonly maintenancePolicy?: string;
	readonly maintenanceWindow?: NodeGroupMaintenanceWindow;
	readonly name: string;
	readonly nodeTemplate?: string;
	readonly requestId?: string;
	readonly shareSettings?: ShareSettings;
	readonly status?: string;
}
export interface Duration {
	readonly nanos?: number;
	readonly seconds?: string;
}
export interface NodeGroup {
	readonly autoscalingPolicy?: NodeGroupAutoscalingPolicy;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly locationHint?: string;
	readonly maintenancePolicy?: string;
	readonly maintenanceWindow?: NodeGroupMaintenanceWindow;
	readonly name?: string;
	readonly nodeTemplate?: string;
	readonly selfLink?: string;
	readonly shareSettings?: ShareSettings;
	readonly size?: number;
	readonly status?: string;
	readonly zone?: string;
}
export interface NodeGroupAutoscalingPolicy {
	readonly maxNodes?: number;
	readonly minNodes?: number;
	readonly mode?: string;
}
export interface NodeGroupMaintenanceWindow {
	readonly maintenanceDuration?: Duration;
	readonly startTime?: string;
}
export interface ShareSettings {
	readonly projectMap?: { [P in string]: ShareSettingsProjectConfig };
	readonly projects?: string[];
	readonly shareType?: string;
}
export interface ShareSettingsProjectConfig {
	readonly projectId?: string;
}
export default {
	NodeGroups: NodeGroups,
};
