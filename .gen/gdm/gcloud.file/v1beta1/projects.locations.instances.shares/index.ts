import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstancesShares
	extends GdmResource<ProjectsLocationsInstancesSharesComponentInputs>
	implements ProjectsLocationsInstancesSharesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesSharesComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsInstancesShares", options);
	}
	public readonly createTime?: string | undefined;
	public readonly state?: string | undefined;
}
export interface ProjectsLocationsInstancesSharesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly state?: string | undefined;
}
export interface ProjectsLocationsInstancesSharesComponentInputs {
	readonly capacityGb?: string | undefined;
	readonly description?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mountName?: string | undefined;
	readonly name: string;
	readonly nfsExportOptions?: NfsExportOptions[] | undefined;
	readonly parent: string;
	readonly shareId: string;
	readonly type: string;
}
export interface NfsExportOptions {
	readonly accessMode?: string | undefined;
	readonly anonGid?: string | undefined;
	readonly anonUid?: string | undefined;
	readonly ipRanges?: string[] | undefined;
	readonly squashMode?: string | undefined;
}
export interface Share {
	readonly capacityGb?: string | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mountName?: string | undefined;
	readonly name?: string | undefined;
	readonly nfsExportOptions?: NfsExportOptions[] | undefined;
	readonly state?: string | undefined;
}
export default {
	ProjectsLocationsInstancesShares: ProjectsLocationsInstancesShares,
};
