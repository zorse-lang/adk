import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesBackups
	extends GdmResource<ProjectsInstancesBackupsComponentInputs>
	implements ProjectsInstancesBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesBackupsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesBackups", options);
	}
	public readonly createTime?: string | undefined;
	public readonly databaseDialect?: string | undefined;
	public readonly encryptionInfo?: EncryptionInfo | undefined;
	public readonly maxExpireTime?: string | undefined;
	public readonly referencingBackups?: string[] | undefined;
	public readonly referencingDatabases?: string[] | undefined;
	public readonly sizeBytes?: string | undefined;
	public readonly state?: string | undefined;
}
export interface ProjectsInstancesBackupsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly databaseDialect?: string | undefined;
	readonly encryptionInfo?: EncryptionInfo | undefined;
	readonly maxExpireTime?: string | undefined;
	readonly referencingBackups?: string[] | undefined;
	readonly referencingDatabases?: string[] | undefined;
	readonly sizeBytes?: string | undefined;
	readonly state?: string | undefined;
}
export interface ProjectsInstancesBackupsComponentInputs {
	readonly backupId: string;
	readonly database: string;
	readonly encryptionConfig_encryptionType: string;
	readonly encryptionConfig_kmsKeyName?: string | undefined;
	readonly expireTime: string;
	readonly name: string;
	readonly parent: string;
	readonly versionTime?: string | undefined;
	readonly type: string;
}
export interface Backup {
	readonly createTime?: string | undefined;
	readonly database: string;
	readonly databaseDialect?: string | undefined;
	readonly encryptionInfo?: EncryptionInfo | undefined;
	readonly expireTime: string;
	readonly maxExpireTime?: string | undefined;
	readonly name?: string | undefined;
	readonly referencingBackups?: string[] | undefined;
	readonly referencingDatabases?: string[] | undefined;
	readonly sizeBytes?: string | undefined;
	readonly state?: string | undefined;
	readonly versionTime?: string | undefined;
}
export interface EncryptionInfo {
	readonly encryptionStatus?: Status | undefined;
	readonly encryptionType?: string | undefined;
	readonly kmsKeyVersion?: string | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	ProjectsInstancesBackups: ProjectsInstancesBackups,
};
