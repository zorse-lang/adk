import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Keyspace extends CfnResource<KeyspaceComponentInputs> implements KeyspaceComponentOutputs {
	constructor(entity: ADKEntity, options: KeyspaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cassandra::Keyspace", options);
	}
}
export interface KeyspaceComponentOutputs {}
export interface KeyspaceComponentInputs {
	readonly KeyspaceName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Table extends CfnResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cassandra::Table", options);
	}
}
export interface TableComponentOutputs {}
export interface TableComponentInputs {
	readonly KeyspaceName: string;
	readonly PartitionKeyColumns: Column[];
	readonly BillingMode?: BillingMode | undefined;
	readonly ClusteringKeyColumns?: ClusteringKeyColumn[] | undefined;
	readonly DefaultTimeToLive?: number | undefined;
	readonly EncryptionSpecification?: EncryptionSpecification | undefined;
	readonly PointInTimeRecoveryEnabled?: boolean | undefined;
	readonly RegularColumns?: Column[] | undefined;
	readonly TableName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface BillingMode {
	readonly Mode: string;
	readonly ProvisionedThroughput?: ProvisionedThroughput | undefined;
}
export interface ClusteringKeyColumn {
	readonly Column: Column;
	readonly OrderBy?: string | undefined;
}
export interface Column {
	readonly ColumnName: string;
	readonly ColumnType: string;
}
export interface EncryptionSpecification {
	readonly EncryptionType: string;
	readonly KmsKeyIdentifier?: string | undefined;
}
export interface ProvisionedThroughput {
	readonly ReadCapacityUnits: number;
	readonly WriteCapacityUnits: number;
}
export default {
	Keyspace: Keyspace,
	Table: Table,
};
