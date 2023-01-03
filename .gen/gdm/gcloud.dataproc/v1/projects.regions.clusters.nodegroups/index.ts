import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsRegionsClustersNodeGroups
	extends GdmResource<ProjectsRegionsClustersNodeGroupsComponentInputs>
	implements ProjectsRegionsClustersNodeGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsRegionsClustersNodeGroupsComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsRegionsClustersNodeGroups", options);
	}
}
export interface ProjectsRegionsClustersNodeGroupsComponentOutputs {}
export interface ProjectsRegionsClustersNodeGroupsComponentInputs {
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly nodeGroupConfig?: InstanceGroupConfig | undefined;
	readonly nodeGroupId?: string | undefined;
	readonly parent: string;
	readonly requestId?: string | undefined;
	readonly roles: string[];
	readonly type: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number | undefined;
	readonly acceleratorTypeUri?: string | undefined;
}
export interface DiskConfig {
	readonly bootDiskSizeGb?: number | undefined;
	readonly bootDiskType?: string | undefined;
	readonly localSsdInterface?: string | undefined;
	readonly numLocalSsds?: number | undefined;
}
export interface InstanceGroupConfig {
	readonly accelerators?: AcceleratorConfig[] | undefined;
	readonly diskConfig?: DiskConfig | undefined;
	readonly imageUri?: string | undefined;
	readonly instanceNames?: string[] | undefined;
	readonly instanceReferences?: InstanceReference[] | undefined;
	readonly isPreemptible?: boolean | undefined;
	readonly machineTypeUri?: string | undefined;
	readonly managedGroupConfig?: ManagedGroupConfig | undefined;
	readonly minCpuPlatform?: string | undefined;
	readonly numInstances?: number | undefined;
	readonly preemptibility?: string | undefined;
}
export interface InstanceReference {
	readonly instanceId?: string | undefined;
	readonly instanceName?: string | undefined;
	readonly publicEciesKey?: string | undefined;
	readonly publicKey?: string | undefined;
}
export interface ManagedGroupConfig {
	readonly instanceGroupManagerName?: string | undefined;
	readonly instanceTemplateName?: string | undefined;
}
export interface NodeGroup {
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly nodeGroupConfig?: InstanceGroupConfig | undefined;
	readonly roles: string[];
}
export default {
	ProjectsRegionsClustersNodeGroups: ProjectsRegionsClustersNodeGroups,
};
