import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstancesShares
	extends GdmResource<ProjectsLocationsInstancesSharesComponentInputs>
	implements ProjectsLocationsInstancesSharesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesSharesComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsInstancesShares", options);
	}
	public readonly createTime?: string;
	public readonly state?: string;
}
export interface ProjectsLocationsInstancesSharesComponentOutputs {
	readonly createTime?: string;
	readonly state?: string;
}
export interface ProjectsLocationsInstancesSharesComponentInputs {
	readonly capacityGb?: string;
	readonly description?: string;
	readonly labels?: { [P in string]: string };
	readonly mountName?: string;
	readonly name: string;
	readonly nfsExportOptions?: NfsExportOptions[];
	readonly parent: string;
	readonly shareId: string;
}
export interface NfsExportOptions {
	readonly accessMode?: string;
	readonly anonGid?: string;
	readonly anonUid?: string;
	readonly ipRanges?: string[];
	readonly squashMode?: string;
}
export interface Share {
	readonly capacityGb?: string;
	readonly createTime?: string;
	readonly description?: string;
	readonly labels?: { [P in string]: string };
	readonly mountName?: string;
	readonly name?: string;
	readonly nfsExportOptions?: NfsExportOptions[];
	readonly state?: string;
}
export default {
	ProjectsLocationsInstancesShares: ProjectsLocationsInstancesShares,
};
