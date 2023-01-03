import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NodeGroups extends GdmResource<NodeGroupsComponentInputs> implements NodeGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: NodeGroupsComponentInputs) {
		super(entity, options.name, "compute.alpha.NodeGroups", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly size?: number | undefined;
	public readonly zone?: string | undefined;
}
export interface NodeGroupsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly size?: number | undefined;
	readonly zone?: string | undefined;
}
export interface NodeGroupsComponentInputs {
	readonly autoscalingPolicy?: NodeGroupAutoscalingPolicy | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly initialNodeCount: number;
	readonly locationHint?: string | undefined;
	readonly maintenancePolicy?: string | undefined;
	readonly maintenanceWindow?: NodeGroupMaintenanceWindow | undefined;
	readonly name: string;
	readonly nodeTemplate?: string | undefined;
	readonly requestId?: string | undefined;
	readonly shareSettings?: ShareSettings | undefined;
	readonly status?: string | undefined;
	readonly type: string;
}
export interface Duration {
	readonly nanos?: number | undefined;
	readonly seconds?: string | undefined;
}
export interface NodeGroup {
	readonly autoscalingPolicy?: NodeGroupAutoscalingPolicy | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly locationHint?: string | undefined;
	readonly maintenancePolicy?: string | undefined;
	readonly maintenanceWindow?: NodeGroupMaintenanceWindow | undefined;
	readonly name?: string | undefined;
	readonly nodeTemplate?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly shareSettings?: ShareSettings | undefined;
	readonly size?: number | undefined;
	readonly status?: string | undefined;
	readonly zone?: string | undefined;
}
export interface NodeGroupAutoscalingPolicy {
	readonly maxNodes?: number | undefined;
	readonly minNodes?: number | undefined;
	readonly mode?: string | undefined;
}
export interface NodeGroupMaintenanceWindow {
	readonly duration?: string | undefined;
	readonly maintenanceDuration?: Duration | undefined;
	readonly startTime?: string | undefined;
}
export interface ShareSettings {
	readonly folderMap?: { [P in string]: ShareSettingsFolderConfig } | undefined;
	readonly projectMap?: { [P in string]: ShareSettingsProjectConfig } | undefined;
	readonly projects?: string[] | undefined;
	readonly shareType?: string | undefined;
}
export interface ShareSettingsFolderConfig {
	readonly folderId?: string | undefined;
}
export interface ShareSettingsProjectConfig {
	readonly projectId?: string | undefined;
}
export default {
	NodeGroups: NodeGroups,
};
