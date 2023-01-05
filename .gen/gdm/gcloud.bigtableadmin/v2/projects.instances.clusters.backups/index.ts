import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesClustersBackups
	extends GdmResource<ProjectsInstancesClustersBackupsComponentInputs>
	implements ProjectsInstancesClustersBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesClustersBackupsComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesClustersBackups", options);
	}
	public readonly encryptionInfo?: EncryptionInfo;
	public readonly endTime?: string;
	public readonly sizeBytes?: string;
	public readonly sourceBackup?: string;
	public readonly startTime?: string;
	public readonly state?: string;
}
export interface ProjectsInstancesClustersBackupsComponentOutputs {
	readonly encryptionInfo?: EncryptionInfo;
	readonly endTime?: string;
	readonly sizeBytes?: string;
	readonly sourceBackup?: string;
	readonly startTime?: string;
	readonly state?: string;
}
export interface ProjectsInstancesClustersBackupsComponentInputs {
	readonly backupId: string;
	readonly expireTime: string;
	readonly name: string;
	readonly parent: string;
	readonly sourceTable: string;
}
export interface Backup {
	readonly encryptionInfo?: EncryptionInfo;
	readonly endTime?: string;
	readonly expireTime: string;
	readonly name?: string;
	readonly sizeBytes?: string;
	readonly sourceBackup?: string;
	readonly sourceTable: string;
	readonly startTime?: string;
	readonly state?: string;
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
	ProjectsInstancesClustersBackups: ProjectsInstancesClustersBackups,
};
