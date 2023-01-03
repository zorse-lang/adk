import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstances
	extends GdmResource<ProjectsInstancesComponentInputs>
	implements ProjectsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstances", options);
	}
	public readonly createTime?: string | undefined;
	public readonly state?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ProjectsInstancesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly state?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface ProjectsInstancesComponentInputs {
	readonly config: string;
	readonly displayName: string;
	readonly endpointUris?: string[] | undefined;
	readonly freeInstanceMetadata?: FreeInstanceMetadata | undefined;
	readonly instance: Instance;
	readonly instanceId: string;
	readonly instanceType?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly nodeCount?: number | undefined;
	readonly parent: string;
	readonly processingUnits?: number | undefined;
	readonly type: string;
}
export interface CreateInstanceRequest {
	readonly instance: Instance;
	readonly instanceId: string;
}
export interface FreeInstanceMetadata {
	readonly expireBehavior?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly upgradeTime?: string | undefined;
}
export interface Instance {
	readonly config: string;
	readonly createTime?: string | undefined;
	readonly displayName: string;
	readonly endpointUris?: string[] | undefined;
	readonly freeInstanceMetadata?: FreeInstanceMetadata | undefined;
	readonly instanceType?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly nodeCount?: number | undefined;
	readonly processingUnits?: number | undefined;
	readonly state?: string | undefined;
	readonly updateTime?: string | undefined;
}
export default {
	ProjectsInstances: ProjectsInstances,
};
