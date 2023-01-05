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
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly nodeGroupConfig?: InstanceGroupConfig;
	readonly nodeGroupId?: string;
	readonly parent: string;
	readonly requestId?: string;
	readonly roles: string[];
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number;
	readonly acceleratorTypeUri?: string;
}
export interface DiskConfig {
	readonly bootDiskSizeGb?: number;
	readonly bootDiskType?: string;
	readonly localSsdInterface?: string;
	readonly numLocalSsds?: number;
}
export interface InstanceGroupConfig {
	readonly accelerators?: AcceleratorConfig[];
	readonly diskConfig?: DiskConfig;
	readonly imageUri?: string;
	readonly instanceNames?: string[];
	readonly instanceReferences?: InstanceReference[];
	readonly isPreemptible?: boolean;
	readonly machineTypeUri?: string;
	readonly managedGroupConfig?: ManagedGroupConfig;
	readonly minCpuPlatform?: string;
	readonly numInstances?: number;
	readonly preemptibility?: string;
}
export interface InstanceReference {
	readonly instanceId?: string;
	readonly instanceName?: string;
	readonly publicEciesKey?: string;
	readonly publicKey?: string;
}
export interface ManagedGroupConfig {
	readonly instanceGroupManagerName?: string;
	readonly instanceTemplateName?: string;
}
export interface NodeGroup {
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly nodeGroupConfig?: InstanceGroupConfig;
	readonly roles: string[];
}
export default {
	ProjectsRegionsClustersNodeGroups: ProjectsRegionsClustersNodeGroups,
};
