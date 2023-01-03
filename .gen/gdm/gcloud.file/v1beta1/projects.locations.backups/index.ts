import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBackups
	extends GdmResource<ProjectsLocationsBackupsComponentInputs>
	implements ProjectsLocationsBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBackupsComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsBackups", options);
	}
	public readonly capacityGb?: string | undefined;
	public readonly createTime?: string | undefined;
	public readonly downloadBytes?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly sourceInstanceTier?: string | undefined;
	public readonly state?: string | undefined;
	public readonly storageBytes?: string | undefined;
}
export interface ProjectsLocationsBackupsComponentOutputs {
	readonly capacityGb?: string | undefined;
	readonly createTime?: string | undefined;
	readonly downloadBytes?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly sourceInstanceTier?: string | undefined;
	readonly state?: string | undefined;
	readonly storageBytes?: string | undefined;
}
export interface ProjectsLocationsBackupsComponentInputs {
	readonly backupId: string;
	readonly description?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly sourceFileShare?: string | undefined;
	readonly sourceInstance?: string | undefined;
	readonly type: string;
}
export interface Backup {
	readonly capacityGb?: string | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly downloadBytes?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly sourceFileShare?: string | undefined;
	readonly sourceInstance?: string | undefined;
	readonly sourceInstanceTier?: string | undefined;
	readonly state?: string | undefined;
	readonly storageBytes?: string | undefined;
}
export default {
	ProjectsLocationsBackups: ProjectsLocationsBackups,
};
