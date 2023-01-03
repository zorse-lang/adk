import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesTables
	extends GdmResource<ProjectsInstancesTablesComponentInputs>
	implements ProjectsInstancesTablesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesTablesComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesTables", options);
	}
	public readonly clusterStates?: { [P in string]: ClusterState } | undefined;
	public readonly restoreInfo?: RestoreInfo | undefined;
}
export interface ProjectsInstancesTablesComponentOutputs {
	readonly clusterStates?: { [P in string]: ClusterState } | undefined;
	readonly restoreInfo?: RestoreInfo | undefined;
}
export interface ProjectsInstancesTablesComponentInputs {
	readonly columnFamilies?: { [P in string]: ColumnFamily } | undefined;
	readonly deletionProtection?: boolean | undefined;
	readonly granularity?: string | undefined;
	readonly initialSplits?: Split[] | undefined;
	readonly name: string;
	readonly parent: string;
	readonly stats?: TableStats | undefined;
	readonly table: Table;
	readonly tableId: string;
	readonly type: string;
}
export interface BackupInfo {
	readonly backup?: string | undefined;
	readonly endTime?: string | undefined;
	readonly sourceBackup?: string | undefined;
	readonly sourceTable?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface ClusterState {
	readonly encryptionInfo?: EncryptionInfo[] | undefined;
	readonly replicationState?: string | undefined;
}
export interface ColumnFamily {
	readonly gcRule?: GcRule | undefined;
	readonly stats?: ColumnFamilyStats | undefined;
}
export interface ColumnFamilyStats {
	readonly averageCellsPerColumn?: number | undefined;
	readonly averageColumnsPerRow?: number | undefined;
	readonly logicalDataBytes?: string | undefined;
}
export interface CreateTableRequest {
	readonly initialSplits?: Split[] | undefined;
	readonly table: Table;
	readonly tableId: string;
}
export interface EncryptionInfo {
	readonly encryptionStatus?: Status | undefined;
	readonly encryptionType?: string | undefined;
	readonly kmsKeyVersion?: string | undefined;
}
export interface GcRule {
	readonly intersection?: Intersection | undefined;
	readonly maxAge?: string | undefined;
	readonly maxNumVersions?: number | undefined;
	readonly union?: Union | undefined;
}
export interface Intersection {
	readonly rules?: GcRule[] | undefined;
}
export interface RestoreInfo {
	readonly backupInfo?: BackupInfo | undefined;
	readonly sourceType?: string | undefined;
}
export interface Split {
	readonly key?: string | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export interface Table {
	readonly clusterStates?: { [P in string]: ClusterState } | undefined;
	readonly columnFamilies?: { [P in string]: ColumnFamily } | undefined;
	readonly deletionProtection?: boolean | undefined;
	readonly granularity?: string | undefined;
	readonly name?: string | undefined;
	readonly restoreInfo?: RestoreInfo | undefined;
	readonly stats?: TableStats | undefined;
}
export interface TableStats {
	readonly averageCellsPerColumn?: number | undefined;
	readonly averageColumnsPerRow?: number | undefined;
	readonly logicalDataBytes?: string | undefined;
	readonly rowCount?: string | undefined;
}
export interface Union {
	readonly rules?: GcRule[] | undefined;
}
export default {
	ProjectsInstancesTables: ProjectsInstancesTables,
};
