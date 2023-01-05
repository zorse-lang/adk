import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesTables
	extends GdmResource<ProjectsInstancesTablesComponentInputs>
	implements ProjectsInstancesTablesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesTablesComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesTables", options);
	}
	public readonly clusterStates?: { [P in string]: ClusterState
	};
	public readonly restoreInfo?: RestoreInfo;
}
export interface ProjectsInstancesTablesComponentOutputs {
	readonly clusterStates?: { [P in string]: ClusterState };
	readonly restoreInfo?: RestoreInfo;
}
export interface ProjectsInstancesTablesComponentInputs {
	readonly columnFamilies?: { [P in string]: ColumnFamily };
	readonly deletionProtection?: boolean;
	readonly granularity?: string;
	readonly initialSplits?: Split[];
	readonly name: string;
	readonly parent: string;
	readonly stats?: TableStats;
	readonly table: Table;
	readonly tableId: string;
}
export interface BackupInfo {
	readonly backup?: string;
	readonly endTime?: string;
	readonly sourceBackup?: string;
	readonly sourceTable?: string;
	readonly startTime?: string;
}
export interface ClusterState {
	readonly encryptionInfo?: EncryptionInfo[];
	readonly replicationState?: string;
}
export interface ColumnFamily {
	readonly gcRule?: GcRule;
	readonly stats?: ColumnFamilyStats;
}
export interface ColumnFamilyStats {
	readonly averageCellsPerColumn?: number;
	readonly averageColumnsPerRow?: number;
	readonly logicalDataBytes?: string;
}
export interface CreateTableRequest {
	readonly initialSplits?: Split[];
	readonly table: Table;
	readonly tableId: string;
}
export interface EncryptionInfo {
	readonly encryptionStatus?: Status;
	readonly encryptionType?: string;
	readonly kmsKeyVersion?: string;
}
export interface GcRule {
	readonly intersection?: Intersection;
	readonly maxAge?: string;
	readonly maxNumVersions?: number;
	readonly union?: Union;
}
export interface Intersection {
	readonly rules?: GcRule[];
}
export interface RestoreInfo {
	readonly backupInfo?: BackupInfo;
	readonly sourceType?: string;
}
export interface Split {
	readonly key?: string;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export interface Table {
	readonly clusterStates?: { [P in string]: ClusterState };
	readonly columnFamilies?: { [P in string]: ColumnFamily };
	readonly deletionProtection?: boolean;
	readonly granularity?: string;
	readonly name?: string;
	readonly restoreInfo?: RestoreInfo;
	readonly stats?: TableStats;
}
export interface TableStats {
	readonly averageCellsPerColumn?: number;
	readonly averageColumnsPerRow?: number;
	readonly logicalDataBytes?: string;
	readonly rowCount?: string;
}
export interface Union {
	readonly rules?: GcRule[];
}
export default {
	ProjectsInstancesTables: ProjectsInstancesTables,
};
