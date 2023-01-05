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
	readonly BillingMode?: string | undefined;
	readonly GlobalSecondaryIndexes?: GlobalSecondaryIndex[] | undefined;
	readonly LocalSecondaryIndexes?: LocalSecondaryIndex[] | undefined;
	readonly SSESpecification?: SSESpecification | undefined;
	readonly StreamSpecification?: StreamSpecification | undefined;
	readonly TableName?: string | undefined;
	readonly TimeToLiveSpecification?: TimeToLiveSpecification | undefined;
	readonly WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings | undefined;
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
	readonly AttributeDefinitions?: AttributeDefinition[] | undefined;
	readonly BillingMode?: string | undefined;
	readonly ContributorInsightsSpecification?: ContributorInsightsSpecification | undefined;
	readonly GlobalSecondaryIndexes?: GlobalSecondaryIndex[] | undefined;
	readonly ImportSourceSpecification?: ImportSourceSpecification | undefined;
	readonly KinesisStreamSpecification?: KinesisStreamSpecification | undefined;
	readonly LocalSecondaryIndexes?: LocalSecondaryIndex[] | undefined;
	readonly PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification | undefined;
	readonly ProvisionedThroughput?: ProvisionedThroughput | undefined;
	readonly SSESpecification?: SSESpecification | undefined;
	readonly StreamSpecification?: StreamSpecification | undefined;
	readonly TableClass?: string | undefined;
	readonly TableName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TimeToLiveSpecification?: TimeToLiveSpecification | undefined;
	readonly LogicalId: string;
}
export interface AttributeDefinition {
	readonly AttributeName: string;
	readonly AttributeType: string;
}
export interface CapacityAutoScalingSettings {
	readonly MaxCapacity: number;
	readonly MinCapacity: number;
	readonly SeedCapacity?: number | undefined;
	readonly TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfiguration;
}
export interface ContributorInsightsSpecification {
	readonly Enabled: boolean;
}
export interface GlobalSecondaryIndex {
	readonly IndexName: string;
	readonly KeySchema: KeySchema[];
	readonly Projection: Projection;
	readonly WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings | undefined;
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
	readonly PointInTimeRecoveryEnabled?: boolean | undefined;
}
export interface Projection {
	readonly NonKeyAttributes?: string[] | undefined;
	readonly ProjectionType?: string | undefined;
}
export interface ReadProvisionedThroughputSettings {
	readonly ReadCapacityAutoScalingSettings?: CapacityAutoScalingSettings | undefined;
	readonly ReadCapacityUnits?: number | undefined;
}
export interface ReplicaGlobalSecondaryIndexSpecification {
	readonly ContributorInsightsSpecification?: ContributorInsightsSpecification | undefined;
	readonly IndexName: string;
	readonly ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings | undefined;
}
export interface ReplicaSSESpecification {
	readonly KMSMasterKeyId: string;
}
export interface ReplicaSpecification {
	readonly ContributorInsightsSpecification?: ContributorInsightsSpecification | undefined;
	readonly GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexSpecification[] | undefined;
	readonly PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification | undefined;
	readonly ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings | undefined;
	readonly Region: string;
	readonly SSESpecification?: ReplicaSSESpecification | undefined;
	readonly TableClass?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface SSESpecification {
	readonly SSEEnabled: boolean;
	readonly SSEType?: string | undefined;
}
export interface StreamSpecification {
	readonly StreamViewType: string;
}
export interface TargetTrackingScalingPolicyConfiguration {
	readonly DisableScaleIn?: boolean | undefined;
	readonly ScaleInCooldown?: number | undefined;
	readonly ScaleOutCooldown?: number | undefined;
	readonly TargetValue: number;
}
export interface TimeToLiveSpecification {
	readonly AttributeName?: string | undefined;
	readonly Enabled: boolean;
}
export interface WriteProvisionedThroughputSettings {
	readonly WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettings | undefined;
}
export interface Csv {
	readonly Delimiter?: string | undefined;
	readonly HeaderList?: string[] | undefined;
}
export interface ImportSourceSpecification {
	readonly InputCompressionType?: string | undefined;
	readonly InputFormat: string;
	readonly InputFormatOptions?: InputFormatOptions | undefined;
	readonly S3BucketSource: S3BucketSource;
}
export interface InputFormatOptions {
	readonly Csv?: Csv | undefined;
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
	readonly S3BucketOwner?: string | undefined;
	readonly S3KeyPrefix?: string | undefined;
}
export default {
	GlobalTable: GlobalTable,
	Table: Table,
};
