import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class GlobalTable extends CfnResource<GlobalTableComponentInputs> implements GlobalTableComponentOutputs {
	constructor(entity: ADKEntity, options: GlobalTableComponentInputs) {
		super(entity, options.LogicalId, "AWS::DynamoDB::GlobalTable", options);
	}
	public readonly Arn: string;
	public readonly StreamArn: string;
	public readonly TableId: string;
}
export interface GlobalTableComponentOutputs {
	readonly Arn: string;
	readonly StreamArn: string;
	readonly TableId: string;
}
export interface GlobalTableComponentInputs {
	readonly AttributeDefinitions: AttributeDefinition[];
	readonly KeySchema: KeySchema[];
	readonly Replicas: ReplicaSpecification[];
	readonly BillingMode?: (string | undefined) | undefined;
	readonly GlobalSecondaryIndexes?: (GlobalSecondaryIndex[] | undefined) | undefined;
	readonly LocalSecondaryIndexes?: (LocalSecondaryIndex[] | undefined) | undefined;
	readonly SSESpecification?: (SSESpecification | undefined) | undefined;
	readonly StreamSpecification?: (StreamSpecification | undefined) | undefined;
	readonly TableName?: (string | undefined) | undefined;
	readonly TimeToLiveSpecification?: (TimeToLiveSpecification | undefined) | undefined;
	readonly WriteProvisionedThroughputSettings?: (WriteProvisionedThroughputSettings | undefined) | undefined;
	readonly LogicalId: string;
}
export class Table extends CfnResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.LogicalId, "AWS::DynamoDB::Table", options);
	}
	public readonly Arn: string;
	public readonly StreamArn: string;
}
export interface TableComponentOutputs {
	readonly Arn: string;
	readonly StreamArn: string;
}
export interface TableComponentInputs {
	readonly KeySchema: KeySchema[];
	readonly AttributeDefinitions?: (AttributeDefinition[] | undefined) | undefined;
	readonly BillingMode?: (string | undefined) | undefined;
	readonly ContributorInsightsSpecification?: (ContributorInsightsSpecification | undefined) | undefined;
	readonly GlobalSecondaryIndexes?: (GlobalSecondaryIndex[] | undefined) | undefined;
	readonly ImportSourceSpecification?: (ImportSourceSpecification | undefined) | undefined;
	readonly KinesisStreamSpecification?: (KinesisStreamSpecification | undefined) | undefined;
	readonly LocalSecondaryIndexes?: (LocalSecondaryIndex[] | undefined) | undefined;
	readonly PointInTimeRecoverySpecification?: (PointInTimeRecoverySpecification | undefined) | undefined;
	readonly ProvisionedThroughput?: (ProvisionedThroughput | undefined) | undefined;
	readonly SSESpecification?: (SSESpecification | undefined) | undefined;
	readonly StreamSpecification?: (StreamSpecification | undefined) | undefined;
	readonly TableClass?: (string | undefined) | undefined;
	readonly TableName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TimeToLiveSpecification?: (TimeToLiveSpecification | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AttributeDefinition {
	readonly AttributeName: string;
	readonly AttributeType: string;
}
export interface CapacityAutoScalingSettings {
	readonly MaxCapacity: number;
	readonly MinCapacity: number;
	readonly SeedCapacity?: (number | undefined) | undefined;
	readonly TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfiguration;
}
export interface ContributorInsightsSpecification {
	readonly Enabled: boolean;
}
export interface GlobalSecondaryIndex {
	readonly IndexName: string;
	readonly KeySchema: KeySchema[];
	readonly Projection: Projection;
	readonly WriteProvisionedThroughputSettings?: (WriteProvisionedThroughputSettings | undefined) | undefined;
}
export interface KeySchema {
	readonly AttributeName: string;
	readonly KeyType: string;
}
export interface LocalSecondaryIndex {
	readonly IndexName: string;
	readonly KeySchema: KeySchema[];
	readonly Projection: Projection;
}
export interface PointInTimeRecoverySpecification {
	readonly PointInTimeRecoveryEnabled?: (boolean | undefined) | undefined;
}
export interface Projection {
	readonly NonKeyAttributes?: (string[] | undefined) | undefined;
	readonly ProjectionType?: (string | undefined) | undefined;
}
export interface ReadProvisionedThroughputSettings {
	readonly ReadCapacityAutoScalingSettings?: (CapacityAutoScalingSettings | undefined) | undefined;
	readonly ReadCapacityUnits?: (number | undefined) | undefined;
}
export interface ReplicaGlobalSecondaryIndexSpecification {
	readonly ContributorInsightsSpecification?: (ContributorInsightsSpecification | undefined) | undefined;
	readonly IndexName: string;
	readonly ReadProvisionedThroughputSettings?: (ReadProvisionedThroughputSettings | undefined) | undefined;
}
export interface ReplicaSSESpecification {
	readonly KMSMasterKeyId: string;
}
export interface ReplicaSpecification {
	readonly ContributorInsightsSpecification?: (ContributorInsightsSpecification | undefined) | undefined;
	readonly GlobalSecondaryIndexes?: (ReplicaGlobalSecondaryIndexSpecification[] | undefined) | undefined;
	readonly PointInTimeRecoverySpecification?: (PointInTimeRecoverySpecification | undefined) | undefined;
	readonly ReadProvisionedThroughputSettings?: (ReadProvisionedThroughputSettings | undefined) | undefined;
	readonly Region: string;
	readonly SSESpecification?: (ReplicaSSESpecification | undefined) | undefined;
	readonly TableClass?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
}
export interface SSESpecification {
	readonly SSEEnabled: boolean;
	readonly SSEType?: (string | undefined) | undefined;
}
export interface StreamSpecification {
	readonly StreamViewType: string;
}
export interface TargetTrackingScalingPolicyConfiguration {
	readonly DisableScaleIn?: (boolean | undefined) | undefined;
	readonly ScaleInCooldown?: (number | undefined) | undefined;
	readonly ScaleOutCooldown?: (number | undefined) | undefined;
	readonly TargetValue: number;
}
export interface TimeToLiveSpecification {
	readonly AttributeName?: (string | undefined) | undefined;
	readonly Enabled: boolean;
}
export interface WriteProvisionedThroughputSettings {
	readonly WriteCapacityAutoScalingSettings?: (CapacityAutoScalingSettings | undefined) | undefined;
}
export interface Csv {
	readonly Delimiter?: (string | undefined) | undefined;
	readonly HeaderList?: (string[] | undefined) | undefined;
}
export interface ImportSourceSpecification {
	readonly InputCompressionType?: (string | undefined) | undefined;
	readonly InputFormat: string;
	readonly InputFormatOptions?: (InputFormatOptions | undefined) | undefined;
	readonly S3BucketSource: S3BucketSource;
}
export interface InputFormatOptions {
	readonly Csv?: (Csv | undefined) | undefined;
}
export interface KinesisStreamSpecification {
	readonly StreamArn: string;
}
export interface ProvisionedThroughput {
	readonly ReadCapacityUnits: number;
	readonly WriteCapacityUnits: number;
}
export interface S3BucketSource {
	readonly S3Bucket: string;
	readonly S3BucketOwner?: (string | undefined) | undefined;
	readonly S3KeyPrefix?: (string | undefined) | undefined;
}
export default {
	GlobalTable: GlobalTable,
	Table: Table,
};
