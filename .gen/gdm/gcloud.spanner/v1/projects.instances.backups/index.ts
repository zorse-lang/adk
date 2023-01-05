import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesBackups
	extends GdmResource<ProjectsInstancesBackupsComponentInputs>
	implements ProjectsInstancesBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesBackupsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesBackups", options);
	}
	public readonly createTime?: string;
	public readonly databaseDialect?: string;
	public readonly encryptionInfo?: EncryptionInfo;
	public readonly maxExpireTime?: string;
	public readonly referencingBackups?: string[];
	public readonly referencingDatabases?: string[];
	public readonly sizeBytes?: string;
	public readonly state?: string;
}
export interface ProjectsInstancesBackupsComponentOutputs {
	readonly createTime?: string;
	readonly databaseDialect?: string;
	readonly encryptionInfo?: EncryptionInfo;
	readonly maxExpireTime?: string;
	readonly referencingBackups?: string[];
	readonly referencingDatabases?: string[];
	readonly sizeBytes?: string;
	readonly state?: string;
}
export interface ProjectsInstancesBackupsComponentInputs {
	readonly backupId: string;
	readonly database: string;
	readonly encryptionConfig_encryptionType: string;
	readonly encryptionConfig_kmsKeyName?: string;
	readonly expireTime: string;
	readonly name: string;
	readonly parent: string;
	readonly versionTime?: string;
}
export interface Backup {
	readonly createTime?: string;
	readonly database: string;
	readonly databaseDialect?: string;
	readonly encryptionInfo?: EncryptionInfo;
	readonly expireTime: string;
	readonly maxExpireTime?: string;
	readonly name?: string;
	readonly referencingBackups?: string[];
	readonly referencingDatabases?: string[];
	readonly sizeBytes?: string;
	readonly state?: string;
	readonly versionTime?: string;
}
export interface EncryptionInfo {
	readonly encryptionStatus?: Status;
	readonly encryptionType?: string;
	readonly kmsKeyVersion?: string;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	ProjectsInstancesBackups: ProjectsInstancesBackups,
};
