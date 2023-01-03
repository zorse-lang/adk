import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Keyspace extends CfnResource<KeyspaceComponentInputs> implements KeyspaceComponentOutputs {
	constructor(entity: ADKEntity, options: KeyspaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cassandra::Keyspace", options);
	}
}
export interface KeyspaceComponentOutputs {}
export interface KeyspaceComponentInputs {
	readonly KeyspaceName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly BillingMode?: (BillingMode | undefined) | undefined;
	readonly ClusteringKeyColumns?: (ClusteringKeyColumn[] | undefined) | undefined;
	readonly DefaultTimeToLive?: (number | undefined) | undefined;
	readonly EncryptionSpecification?: (EncryptionSpecification | undefined) | undefined;
	readonly PointInTimeRecoveryEnabled?: (boolean | undefined) | undefined;
	readonly RegularColumns?: (Column[] | undefined) | undefined;
	readonly TableName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface BillingMode {
	readonly Mode: string;
	readonly ProvisionedThroughput?: (ProvisionedThroughput | undefined) | undefined;
}
export interface ClusteringKeyColumn {
	readonly Column: Column;
	readonly OrderBy?: (string | undefined) | undefined;
}
export interface Column {
	readonly ColumnName: string;
	readonly ColumnType: string;
}
export interface EncryptionSpecification {
	readonly EncryptionType: string;
	readonly KmsKeyIdentifier?: (string | undefined) | undefined;
}
export interface ProvisionedThroughput {
	readonly ReadCapacityUnits: number;
	readonly WriteCapacityUnits: number;
}
export default {
	Keyspace: Keyspace,
	Table: Table,
};
