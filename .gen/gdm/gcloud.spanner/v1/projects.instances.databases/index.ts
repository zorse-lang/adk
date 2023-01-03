import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesDatabases
	extends GdmResource<ProjectsInstancesDatabasesComponentInputs>
	implements ProjectsInstancesDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesDatabasesComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesDatabases", options);
	}
	public readonly createTime?: string | undefined;
	public readonly databaseDialect?: string | undefined;
	public readonly defaultLeader?: string | undefined;
	public readonly earliestVersionTime?: string | undefined;
	public readonly encryptionConfig?: EncryptionConfig | undefined;
	public readonly encryptionInfo?: EncryptionInfo[] | undefined;
	public readonly restoreInfo?: RestoreInfo | undefined;
	public readonly state?: string | undefined;
	public readonly versionRetentionPeriod?: string | undefined;
}
export interface ProjectsInstancesDatabasesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly databaseDialect?: string | undefined;
	readonly defaultLeader?: string | undefined;
	readonly earliestVersionTime?: string | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly encryptionInfo?: EncryptionInfo[] | undefined;
	readonly restoreInfo?: RestoreInfo | undefined;
	readonly state?: string | undefined;
	readonly versionRetentionPeriod?: string | undefined;
}
export interface ProjectsInstancesDatabasesComponentInputs {
	readonly createStatement: string;
	readonly extraStatements?: string[] | undefined;
	readonly name: string;
	readonly parent: string;
	readonly protoDescriptors?: string | undefined;
	readonly type: string;
}
export interface BackupInfo {
	readonly backup?: string | undefined;
	readonly createTime?: string | undefined;
	readonly sourceDatabase?: string | undefined;
	readonly versionTime?: string | undefined;
}
export interface CreateDatabaseRequest {
	readonly createStatement: string;
	readonly databaseDialect?: string | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly extraStatements?: string[] | undefined;
	readonly protoDescriptors?: string | undefined;
}
export interface Database {
	readonly createTime?: string | undefined;
	readonly databaseDialect?: string | undefined;
	readonly defaultLeader?: string | undefined;
	readonly earliestVersionTime?: string | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly encryptionInfo?: EncryptionInfo[] | undefined;
	readonly name: string;
	readonly restoreInfo?: RestoreInfo | undefined;
	readonly state?: string | undefined;
	readonly versionRetentionPeriod?: string | undefined;
}
export interface EncryptionConfig {
	readonly kmsKeyName?: string | undefined;
}
export interface EncryptionInfo {
	readonly encryptionStatus?: Status | undefined;
	readonly encryptionType?: string | undefined;
	readonly kmsKeyVersion?: string | undefined;
}
export interface RestoreInfo {
	readonly backupInfo?: BackupInfo | undefined;
	readonly sourceType?: string | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	ProjectsInstancesDatabases: ProjectsInstancesDatabases,
};
