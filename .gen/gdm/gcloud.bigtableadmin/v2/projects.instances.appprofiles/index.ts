import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesAppProfiles
	extends GdmResource<ProjectsInstancesAppProfilesComponentInputs>
	implements ProjectsInstancesAppProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesAppProfilesComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesAppProfiles", options);
	}
}
export interface ProjectsInstancesAppProfilesComponentOutputs {}
export interface ProjectsInstancesAppProfilesComponentInputs {
	readonly appProfileId: string;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly ignoreWarnings?: boolean | undefined;
	readonly multiClusterRoutingUseAny?: MultiClusterRoutingUseany | undefined;
	readonly name: string;
	readonly parent: string;
	readonly singleClusterRouting?: SingleClusterRouting | undefined;
	readonly type: string;
}
export interface AppProfile {
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly multiClusterRoutingUseAny?: MultiClusterRoutingUseany | undefined;
	readonly name?: string | undefined;
	readonly singleClusterRouting?: SingleClusterRouting | undefined;
}
export interface MultiClusterRoutingUseany {
	readonly clusterIds?: string[] | undefined;
}
export interface SingleClusterRouting {
	readonly allowTransactionalWrites?: boolean | undefined;
	readonly clusterId?: string | undefined;
}
export default {
	ProjectsInstancesAppProfiles: ProjectsInstancesAppProfiles,
};
