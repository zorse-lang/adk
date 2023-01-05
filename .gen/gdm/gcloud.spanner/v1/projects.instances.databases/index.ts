import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesDatabases
	extends GdmResource<ProjectsInstancesDatabasesComponentInputs>
	implements ProjectsInstancesDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesDatabasesComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesDatabases", options);
	}
	public readonly createTime?: string;
	public readonly databaseDialect?: string;
	public readonly defaultLeader?: string;
	public readonly earliestVersionTime?: string;
	public readonly encryptionConfig?: EncryptionConfig;
	public readonly encryptionInfo?: EncryptionInfo[];
	public readonly restoreInfo?: RestoreInfo;
	public readonly state?: string;
	public readonly versionRetentionPeriod?: string;
}
export interface ProjectsInstancesDatabasesComponentOutputs {
	readonly createTime?: string;
	readonly databaseDialect?: string;
	readonly defaultLeader?: string;
	readonly earliestVersionTime?: string;
	readonly encryptionConfig?: EncryptionConfig;
	readonly encryptionInfo?: EncryptionInfo[];
	readonly restoreInfo?: RestoreInfo;
	readonly state?: string;
	readonly versionRetentionPeriod?: string;
}
export interface ProjectsInstancesDatabasesComponentInputs {
	readonly createStatement: string;
	readonly extraStatements?: string[];
	readonly name: string;
	readonly parent: string;
	readonly protoDescriptors?: string;
}
export interface BackupInfo {
	readonly backup?: string;
	readonly createTime?: string;
	readonly sourceDatabase?: string;
	readonly versionTime?: string;
}
export interface CreateDatabaseRequest {
	readonly createStatement: string;
	readonly databaseDialect?: string;
	readonly encryptionConfig?: EncryptionConfig;
	readonly extraStatements?: string[];
	readonly protoDescriptors?: string;
}
export interface Database {
	readonly createTime?: string;
	readonly databaseDialect?: string;
	readonly defaultLeader?: string;
	readonly earliestVersionTime?: string;
	readonly encryptionConfig?: EncryptionConfig;
	readonly encryptionInfo?: EncryptionInfo[];
	readonly name: string;
	readonly restoreInfo?: RestoreInfo;
	readonly state?: string;
	readonly versionRetentionPeriod?: string;
}
export interface EncryptionConfig {
	readonly kmsKeyName?: string;
}
export interface EncryptionInfo {
	readonly encryptionStatus?: Status;
	readonly encryptionType?: string;
	readonly kmsKeyVersion?: string;
}
export interface RestoreInfo {
	readonly backupInfo?: BackupInfo;
	readonly sourceType?: string;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	ProjectsInstancesDatabases: ProjectsInstancesDatabases,
};
