import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstances
	extends GdmResource<ProjectsInstancesComponentInputs>
	implements ProjectsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstances", options);
	}
	public readonly createTime?: string;
	public readonly state?: string;
	public readonly updateTime?: string;
}
export interface ProjectsInstancesComponentOutputs {
	readonly createTime?: string;
	readonly state?: string;
	readonly updateTime?: string;
}
export interface ProjectsInstancesComponentInputs {
	readonly config: string;
	readonly displayName: string;
	readonly endpointUris?: string[];
	readonly freeInstanceMetadata?: FreeInstanceMetadata;
	readonly instance: Instance;
	readonly instanceId: string;
	readonly instanceType?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly nodeCount?: number;
	readonly parent: string;
	readonly processingUnits?: number;
}
export interface CreateInstanceRequest {
	readonly instance: Instance;
	readonly instanceId: string;
}
export interface FreeInstanceMetadata {
	readonly expireBehavior?: string;
	readonly expireTime?: string;
	readonly upgradeTime?: string;
}
export interface Instance {
	readonly config: string;
	readonly createTime?: string;
	readonly displayName: string;
	readonly endpointUris?: string[];
	readonly freeInstanceMetadata?: FreeInstanceMetadata;
	readonly instanceType?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly nodeCount?: number;
	readonly processingUnits?: number;
	readonly state?: string;
	readonly updateTime?: string;
}
export default {
	ProjectsInstances: ProjectsInstances,
};
