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
	readonly description?: string;
	readonly etag?: string;
	readonly ignoreWarnings?: boolean;
	readonly multiClusterRoutingUseAny?: MultiClusterRoutingUseany;
	readonly name: string;
	readonly parent: string;
	readonly singleClusterRouting?: SingleClusterRouting;
}
export interface AppProfile {
	readonly description?: string;
	readonly etag?: string;
	readonly multiClusterRoutingUseAny?: MultiClusterRoutingUseany;
	readonly name?: string;
	readonly singleClusterRouting?: SingleClusterRouting;
}
export interface MultiClusterRoutingUseany {
	readonly clusterIds?: string[];
}
export interface SingleClusterRouting {
	readonly allowTransactionalWrites?: boolean;
	readonly clusterId?: string;
}
export default {
	ProjectsInstancesAppProfiles: ProjectsInstancesAppProfiles,
};
