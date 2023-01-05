import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoint extends CfnResource<AccessPointComponentInputs> implements AccessPointComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPointComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3::AccessPoint", options);
	}
	public readonly Alias: string;
	public readonly Arn: string;
	public readonly NetworkOrigin: string;
}
export interface AccessPointComponentOutputs {
	readonly Alias: string;
	readonly Arn: string;
	readonly NetworkOrigin: string;
}
export interface AccessPointComponentInputs {
	readonly Bucket: string;
	readonly BucketAccountId?: string | undefined;
	readonly Name?: string;
	readonly Policy?: any | undefined;
	readonly PolicyStatus?: PolicyStatus | undefined;
	readonly PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;
	readonly VpcConfiguration?: VpcConfiguration | undefined;
	readonly LogicalId: string;
}
export class Bucket extends CfnResource<BucketComponentInputs> implements BucketComponentOutputs {
	constructor(entity: ADKEntity, options: BucketComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3::Bucket", options);
	}
	public readonly Arn: string;
	public readonly DomainName: string;
	public readonly DualStackDomainName: string;
	public readonly RegionalDomainName: string;
	public readonly WebsiteUrl: string;
}
export interface BucketComponentOutputs {
	readonly Arn: string;
	readonly DomainName: string;
	readonly DualStackDomainName: string;
	readonly RegionalDomainName: string;
	readonly WebsiteUrl: string;
}
export interface BucketComponentInputs {
	readonly AccelerateConfiguration?: AccelerateConfiguration | undefined;
	readonly AccessControl?: string | undefined;
	readonly AnalyticsConfigurations?: AnalyticsConfiguration[] | undefined;
	readonly BucketEncryption?: BucketEncryption | undefined;
	readonly BucketName?: string | undefined;
	readonly CorsConfiguration?: CorsConfiguration | undefined;
	readonly IntelligentTieringConfigurations?: IntelligentTieringConfiguration[] | undefined;
	readonly InventoryConfigurations?: InventoryConfiguration[] | undefined;
	readonly LifecycleConfiguration?: LifecycleConfiguration | undefined;
	readonly LoggingConfiguration?: LoggingConfiguration | undefined;
	readonly MetricsConfigurations?: MetricsConfiguration[] | undefined;
	readonly NotificationConfiguration?: NotificationConfiguration | undefined;
	readonly ObjectLockConfiguration?: ObjectLockConfiguration | undefined;
	readonly ObjectLockEnabled?: boolean | undefined;
	readonly OwnershipControls?: OwnershipControls | undefined;
	readonly PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;
	readonly ReplicationConfiguration?: ReplicationConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VersioningConfiguration?: VersioningConfiguration | undefined;
	readonly WebsiteConfiguration?: WebsiteConfiguration | undefined;
	readonly LogicalId: string;
}
export class BucketPolicy extends CfnResource<BucketPolicyComponentInputs> implements BucketPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: BucketPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3::BucketPolicy", options);
	}
}
export interface BucketPolicyComponentOutputs {}
export interface BucketPolicyComponentInputs {
	readonly Bucket: string;
	readonly PolicyDocument: any;
	readonly LogicalId: string;
}
export class MultiRegionAccessPoint
	extends CfnResource<MultiRegionAccessPointComponentInputs>
	implements MultiRegionAccessPointComponentOutputs
{
	constructor(entity: ADKEntity, options: MultiRegionAccessPointComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3::MultiRegionAccessPoint", options);
	}
	public readonly Alias: string;
	public readonly CreatedAt: string;
}
export interface MultiRegionAccessPointComponentOutputs {
	readonly Alias: string;
	readonly CreatedAt: string;
}
export interface MultiRegionAccessPointComponentInputs {
	readonly Regions: Region[];
	readonly Name?: string | undefined;
	readonly PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;
	readonly LogicalId: string;
}
export class MultiRegionAccessPointPolicy
	extends CfnResource<MultiRegionAccessPointPolicyComponentInputs>
	implements MultiRegionAccessPointPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: MultiRegionAccessPointPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3::MultiRegionAccessPointPolicy", options);
	}
	public readonly PolicyStatusIsPublic: string;
}
export interface MultiRegionAccessPointPolicyComponentOutputs {
	readonly PolicyStatusIsPublic: string;
}
export interface MultiRegionAccessPointPolicyComponentInputs {
	readonly MrapName: string;
	readonly Policy: any;
	readonly LogicalId: string;
}
export class StorageLens extends CfnResource<StorageLensComponentInputs> implements StorageLensComponentOutputs {
	constructor(entity: ADKEntity, options: StorageLensComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3::StorageLens", options);
	}
	public readonly StorageLensConfigurationStorageLensArn: string;
}
export interface StorageLensComponentOutputs {
	readonly StorageLensConfigurationStorageLensArn: string;
}
export interface StorageLensComponentInputs {
	readonly StorageLensConfiguration: StorageLensConfiguration;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface PolicyStatus {
	readonly IsPublic?: string | undefined;
}
export interface PublicAccessBlockConfiguration {
	readonly BlockPublicAcls?: boolean | undefined;
	readonly BlockPublicPolicy?: boolean | undefined;
	readonly IgnorePublicAcls?: boolean | undefined;
	readonly RestrictPublicBuckets?: boolean | undefined;
}
export interface VpcConfiguration {
	readonly VpcId?: string | undefined;
}
export interface AbortIncompleteMultipartUpload {
	readonly DaysAfterInitiation: number;
}
export interface AccelerateConfiguration {
	readonly AccelerationStatus: string;
}
export interface AccessControlTranslation {
	readonly Owner: string;
}
export interface AnalyticsConfiguration {
	readonly Id: string;
	readonly Prefix?: string | undefined;
	readonly StorageClassAnalysis: StorageClassAnalysis;
	readonly TagFilters?: TagFilter[] | undefined;
}
export interface BucketEncryption {
	readonly ServerSideEncryptionConfiguration: ServerSideEncryptionRule[];
}
export interface CorsConfiguration {
	readonly CorsRules: CorsRule[];
}
export interface CorsRule {
	readonly AllowedHeaders?: string[] | undefined;
	readonly AllowedMethods: string[];
	readonly AllowedOrigins: string[];
	readonly ExposedHeaders?: string[] | undefined;
	readonly Id?: string | undefined;
	readonly MaxAge?: number | undefined;
}
export interface DataExport {
	readonly Destination: Destination;
	readonly OutputSchemaVersion: string;
}
export interface DefaultRetention {
	readonly Days?: number | undefined;
	readonly Mode?: string | undefined;
	readonly Years?: number | undefined;
}
export interface DeleteMarkerReplication {
	readonly Status?: string | undefined;
}
export interface Destination {
	readonly BucketAccountId?: string | undefined;
	readonly BucketArn: string;
	readonly Format: string;
	readonly Prefix?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly ReplicaKmsKeyID: string;
}
export interface EventBridgeConfiguration {
	readonly EventBridgeEnabled?: boolean | undefined;
}
export interface FilterRule {
	readonly Name: string;
	readonly Value: string;
}
export interface IntelligentTieringConfiguration {
	readonly Id: string;
	readonly Prefix?: string | undefined;
	readonly Status: string;
	readonly TagFilters?: TagFilter[] | undefined;
	readonly Tierings: Tiering[];
}
export interface InventoryConfiguration {
	readonly Destination: Destination;
	readonly Enabled: boolean;
	readonly Id: string;
	readonly IncludedObjectVersions: string;
	readonly OptionalFields?: string[] | undefined;
	readonly Prefix?: string | undefined;
	readonly ScheduleFrequency: string;
}
export interface LambdaConfiguration {
	readonly Event: string;
	readonly Filter?: NotificationFilter | undefined;
	readonly Function: string;
}
export interface LifecycleConfiguration {
	readonly Rules: Rule[];
}
export interface LoggingConfiguration {
	readonly DestinationBucketName?: string | undefined;
	readonly LogFilePrefix?: string | undefined;
}
export interface Metrics {
	readonly EventThreshold?: ReplicationTimeValue | undefined;
	readonly Status: string;
}
export interface MetricsConfiguration {
	readonly AccessPointArn?: string | undefined;
	readonly Id: string;
	readonly Prefix?: string | undefined;
	readonly TagFilters?: TagFilter[] | undefined;
}
export interface NoncurrentVersionExpiration {
	readonly NewerNoncurrentVersions?: number | undefined;
	readonly NoncurrentDays: number;
}
export interface NoncurrentVersionTransition {
	readonly NewerNoncurrentVersions?: number | undefined;
	readonly StorageClass: string;
	readonly TransitionInDays: number;
}
export interface NotificationConfiguration {
	readonly EventBridgeConfiguration?: EventBridgeConfiguration | undefined;
	readonly LambdaConfigurations?: LambdaConfiguration[] | undefined;
	readonly QueueConfigurations?: QueueConfiguration[] | undefined;
	readonly TopicConfigurations?: TopicConfiguration[] | undefined;
}
export interface NotificationFilter {
	readonly S3Key: S3KeyFilter;
}
export interface ObjectLockConfiguration {
	readonly ObjectLockEnabled?: string | undefined;
	readonly Rule?: ObjectLockRule | undefined;
}
export interface ObjectLockRule {
	readonly DefaultRetention?: DefaultRetention | undefined;
}
export interface OwnershipControls {
	readonly Rules: OwnershipControlsRule[];
}
export interface OwnershipControlsRule {
	readonly ObjectOwnership?: string | undefined;
}
export interface QueueConfiguration {
	readonly Event: string;
	readonly Filter?: NotificationFilter | undefined;
	readonly Queue: string;
}
export interface RedirectAllRequestsTo {
	readonly HostName: string;
	readonly Protocol?: string | undefined;
}
export interface RedirectRule {
	readonly HostName?: string | undefined;
	readonly HttpRedirectCode?: string | undefined;
	readonly Protocol?: string | undefined;
	readonly ReplaceKeyPrefixWith?: string | undefined;
	readonly ReplaceKeyWith?: string | undefined;
}
export interface ReplicaModifications {
	readonly Status: string;
}
export interface ReplicationConfiguration {
	readonly Role: string;
	readonly Rules: ReplicationRule[];
}
export interface ReplicationDestination {
	readonly AccessControlTranslation?: AccessControlTranslation | undefined;
	readonly Account?: string | undefined;
	readonly Bucket: string;
	readonly EncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly Metrics?: Metrics | undefined;
	readonly ReplicationTime?: ReplicationTime | undefined;
	readonly StorageClass?: string | undefined;
}
export interface ReplicationRule {
	readonly DeleteMarkerReplication?: DeleteMarkerReplication | undefined;
	readonly Destination: ReplicationDestination;
	readonly Filter?: ReplicationRuleFilter | undefined;
	readonly Id?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly Priority?: number | undefined;
	readonly SourceSelectionCriteria?: SourceSelectionCriteria | undefined;
	readonly Status: string;
}
export interface ReplicationRuleAndOperator {
	readonly Prefix?: string | undefined;
	readonly TagFilters?: TagFilter[] | undefined;
}
export interface ReplicationRuleFilter {
	readonly And?: ReplicationRuleAndOperator | undefined;
	readonly Prefix?: string | undefined;
	readonly TagFilter?: TagFilter | undefined;
}
export interface ReplicationTime {
	readonly Status: string;
	readonly Time: ReplicationTimeValue;
}
export interface ReplicationTimeValue {
	readonly Minutes: number;
}
export interface RoutingRule {
	readonly RedirectRule: RedirectRule;
	readonly RoutingRuleCondition?: RoutingRuleCondition | undefined;
}
export interface RoutingRuleCondition {
	readonly HttpErrorCodeReturnedEquals?: string | undefined;
	readonly KeyPrefixEquals?: string | undefined;
}
export interface Rule {
	readonly AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload | undefined;
	readonly ExpirationDate?: Date | undefined;
	readonly ExpirationInDays?: number | undefined;
	readonly ExpiredObjectDeleteMarker?: boolean | undefined;
	readonly Id?: string | undefined;
	readonly NoncurrentVersionExpiration?: NoncurrentVersionExpiration | undefined;
	readonly NoncurrentVersionExpirationInDays?: number | undefined;
	readonly NoncurrentVersionTransition?: NoncurrentVersionTransition | undefined;
	readonly NoncurrentVersionTransitions?: NoncurrentVersionTransition[] | undefined;
	readonly ObjectSizeGreaterThan?: number | undefined;
	readonly ObjectSizeLessThan?: number | undefined;
	readonly Prefix?: string | undefined;
	readonly Status: string;
	readonly TagFilters?: TagFilter[] | undefined;
	readonly Transition?: Transition | undefined;
	readonly Transitions?: Transition[] | undefined;
}
export interface S3KeyFilter {
	readonly Rules: FilterRule[];
}
export interface ServerSideEncryptionByDefault {
	readonly KMSMasterKeyID?: string | undefined;
	readonly SSEAlgorithm: string;
}
export interface ServerSideEncryptionRule {
	readonly BucketKeyEnabled?: boolean | undefined;
	readonly ServerSideEncryptionByDefault?: ServerSideEncryptionByDefault | undefined;
}
export interface SourceSelectionCriteria {
	readonly ReplicaModifications?: ReplicaModifications | undefined;
	readonly SseKmsEncryptedObjects?: SseKmsEncryptedObjects | undefined;
}
export interface SseKmsEncryptedObjects {
	readonly Status: string;
}
export interface StorageClassAnalysis {
	readonly DataExport?: DataExport | undefined;
}
export interface TagFilter {
	readonly Key: string;
	readonly Value: string;
}
export interface Tiering {
	readonly AccessTier: string;
	readonly Days: number;
}
export interface TopicConfiguration {
	readonly Event: string;
	readonly Filter?: NotificationFilter | undefined;
	readonly Topic: string;
}
export interface Transition {
	readonly StorageClass: string;
	readonly TransitionDate?: Date | undefined;
	readonly TransitionInDays?: number | undefined;
}
export interface VersioningConfiguration {
	readonly Status: string;
}
export interface WebsiteConfiguration {
	readonly ErrorDocument?: string | undefined;
	readonly IndexDocument?: string | undefined;
	readonly RedirectAllRequestsTo?: RedirectAllRequestsTo | undefined;
	readonly RoutingRules?: RoutingRule[] | undefined;
}
export interface Region {
	readonly Bucket: string;
}
export interface AccountLevel {
	readonly ActivityMetrics?: ActivityMetrics | undefined;
	readonly AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics | undefined;
	readonly AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics | undefined;
	readonly BucketLevel: BucketLevel;
	readonly DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics | undefined;
}
export interface ActivityMetrics {
	readonly IsEnabled?: boolean | undefined;
}
export interface AdvancedCostOptimizationMetrics {
	readonly IsEnabled?: boolean | undefined;
}
export interface AdvancedDataProtectionMetrics {
	readonly IsEnabled?: boolean | undefined;
}
export interface AwsOrg {
	readonly Arn: string;
}
export interface BucketLevel {
	readonly ActivityMetrics?: ActivityMetrics | undefined;
	readonly AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics | undefined;
	readonly AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics | undefined;
	readonly DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics | undefined;
	readonly PrefixLevel?: PrefixLevel | undefined;
}
export interface BucketsAndRegions {
	readonly Buckets?: string[] | undefined;
	readonly Regions?: string[] | undefined;
}
export interface CloudWatchMetrics {
	readonly IsEnabled: boolean;
}
export interface DetailedStatusCodesMetrics {
	readonly IsEnabled?: boolean | undefined;
}
export interface Encryption {
	readonly SSEKMS?: SSEKMS | undefined;
	readonly SSES3?: any | undefined;
}
export interface PrefixLevel {
	readonly StorageMetrics: PrefixLevelStorageMetrics;
}
export interface PrefixLevelStorageMetrics {
	readonly IsEnabled?: boolean | undefined;
	readonly SelectionCriteria?: SelectionCriteria | undefined;
}
export interface S3BucketDestination {
	readonly AccountId: string;
	readonly Arn: string;
	readonly Encryption?: Encryption | undefined;
	readonly Format: string;
	readonly OutputSchemaVersion: string;
	readonly Prefix?: string | undefined;
}
export interface SSEKMS {
	readonly KeyId: string;
}
export interface SelectionCriteria {
	readonly Delimiter?: string | undefined;
	readonly MaxDepth?: number | undefined;
	readonly MinStorageBytesPercentage?: number | undefined;
}
export interface StorageLensConfiguration {
	readonly AccountLevel: AccountLevel;
	readonly AwsOrg?: AwsOrg | undefined;
	readonly DataExport?: DataExport | undefined;
	readonly Exclude?: BucketsAndRegions | undefined;
	readonly Id: string;
	readonly Include?: BucketsAndRegions | undefined;
	readonly IsEnabled: boolean;
	readonly StorageLensArn?: string | undefined;
}
export default {
	AccessPoint: AccessPoint,
	Bucket: Bucket,
	BucketPolicy: BucketPolicy,
	MultiRegionAccessPoint: MultiRegionAccessPoint,
	MultiRegionAccessPointPolicy: MultiRegionAccessPointPolicy,
	StorageLens: StorageLens,
};
