import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesClustersBackups
	extends GdmResource<ProjectsInstancesClustersBackupsComponentInputs>
	implements ProjectsInstancesClustersBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesClustersBackupsComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesClustersBackups", options);
	}
	public readonly encryptionInfo?: EncryptionInfo | undefined;
	public readonly endTime?: string | undefined;
	public readonly sizeBytes?: string | undefined;
	public readonly sourceBackup?: string | undefined;
	public readonly startTime?: string | undefined;
	public readonly state?: string | undefined;
}
export interface ProjectsInstancesClustersBackupsComponentOutputs {
	readonly encryptionInfo?: EncryptionInfo | undefined;
	readonly endTime?: string | undefined;
	readonly sizeBytes?: string | undefined;
	readonly sourceBackup?: string | undefined;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
}
export interface ProjectsInstancesClustersBackupsComponentInputs {
	readonly backupId: string;
	readonly expireTime: string;
	readonly name: string;
	readonly parent: string;
	readonly sourceTable: string;
	readonly type: string;
}
export interface Backup {
	readonly encryptionInfo?: EncryptionInfo | undefined;
	readonly endTime?: string | undefined;
	readonly expireTime: string;
	readonly name?: string | undefined;
	readonly sizeBytes?: string | undefined;
	readonly sourceBackup?: string | undefined;
	readonly sourceTable: string;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
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
	ProjectsInstancesClustersBackups: ProjectsInstancesClustersBackups,
};
