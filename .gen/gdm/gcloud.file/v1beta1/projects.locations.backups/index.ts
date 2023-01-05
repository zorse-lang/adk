import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBackups
	extends GdmResource<ProjectsLocationsBackupsComponentInputs>
	implements ProjectsLocationsBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBackupsComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsBackups", options);
	}
	public readonly capacityGb?: string;
	public readonly createTime?: string;
	public readonly downloadBytes?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly sourceInstanceTier?: string;
	public readonly state?: string;
	public readonly storageBytes?: string;
}
export interface ProjectsLocationsBackupsComponentOutputs {
	readonly capacityGb?: string;
	readonly createTime?: string;
	readonly downloadBytes?: string;
	readonly satisfiesPzs?: boolean;
	readonly sourceInstanceTier?: string;
	readonly state?: string;
	readonly storageBytes?: string;
}
export interface ProjectsLocationsBackupsComponentInputs {
	readonly backupId: string;
	readonly description?: string;
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
	readonly sourceFileShare?: string;
	readonly sourceInstance?: string;
}
export interface Backup {
	readonly capacityGb?: string;
	readonly createTime?: string;
	readonly description?: string;
	readonly downloadBytes?: string;
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly satisfiesPzs?: boolean;
	readonly sourceFileShare?: string;
	readonly sourceInstance?: string;
	readonly sourceInstanceTier?: string;
	readonly state?: string;
	readonly storageBytes?: string;
}
export default {
	ProjectsLocationsBackups: ProjectsLocationsBackups,
};
