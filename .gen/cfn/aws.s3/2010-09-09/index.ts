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
	readonly BucketAccountId?: (string | undefined) | undefined;
	readonly Name?: string | undefined;
	readonly Policy?: (any | undefined) | undefined;
	readonly PolicyStatus?: (PolicyStatus | undefined) | undefined;
	readonly PublicAccessBlockConfiguration?: (PublicAccessBlockConfiguration | undefined) | undefined;
	readonly VpcConfiguration?: (VpcConfiguration | undefined) | undefined;
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
	readonly AccelerateConfiguration?: (AccelerateConfiguration | undefined) | undefined;
	readonly AccessControl?: (string | undefined) | undefined;
	readonly AnalyticsConfigurations?: (AnalyticsConfiguration[] | undefined) | undefined;
	readonly BucketEncryption?: (BucketEncryption | undefined) | undefined;
	readonly BucketName?: (string | undefined) | undefined;
	readonly CorsConfiguration?: (CorsConfiguration | undefined) | undefined;
	readonly IntelligentTieringConfigurations?: (IntelligentTieringConfiguration[] | undefined) | undefined;
	readonly InventoryConfigurations?: (InventoryConfiguration[] | undefined) | undefined;
	readonly LifecycleConfiguration?: (LifecycleConfiguration | undefined) | undefined;
	readonly LoggingConfiguration?: (LoggingConfiguration | undefined) | undefined;
	readonly MetricsConfigurations?: (MetricsConfiguration[] | undefined) | undefined;
	readonly NotificationConfiguration?: (NotificationConfiguration | undefined) | undefined;
	readonly ObjectLockConfiguration?: (ObjectLockConfiguration | undefined) | undefined;
	readonly ObjectLockEnabled?: (boolean | undefined) | undefined;
	readonly OwnershipControls?: (OwnershipControls | undefined) | undefined;
	readonly PublicAccessBlockConfiguration?: (PublicAccessBlockConfiguration | undefined) | undefined;
	readonly ReplicationConfiguration?: (ReplicationConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VersioningConfiguration?: (VersioningConfiguration | undefined) | undefined;
	readonly WebsiteConfiguration?: (WebsiteConfiguration | undefined) | undefined;
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
	readonly Name?: (string | undefined) | undefined;
	readonly PublicAccessBlockConfiguration?: (PublicAccessBlockConfiguration | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface PolicyStatus {
	readonly IsPublic?: (string | undefined) | undefined;
}
export interface PublicAccessBlockConfiguration {
	readonly BlockPublicAcls?: (boolean | undefined) | undefined;
	readonly BlockPublicPolicy?: (boolean | undefined) | undefined;
	readonly IgnorePublicAcls?: (boolean | undefined) | undefined;
	readonly RestrictPublicBuckets?: (boolean | undefined) | undefined;
}
export interface VpcConfiguration {
	readonly VpcId?: (string | undefined) | undefined;
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
	readonly Prefix?: (string | undefined) | undefined;
	readonly StorageClassAnalysis: StorageClassAnalysis;
	readonly TagFilters?: (TagFilter[] | undefined) | undefined;
}
export interface BucketEncryption {
	readonly ServerSideEncryptionConfiguration: ServerSideEncryptionRule[];
}
export interface CorsConfiguration {
	readonly CorsRules: CorsRule[];
}
export interface CorsRule {
	readonly AllowedHeaders?: (string[] | undefined) | undefined;
	readonly AllowedMethods: string[];
	readonly AllowedOrigins: string[];
	readonly ExposedHeaders?: (string[] | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly MaxAge?: (number | undefined) | undefined;
}
export interface DataExport {
	readonly Destination: Destination;
	readonly OutputSchemaVersion: string;
}
export interface DefaultRetention {
	readonly Days?: (number | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
	readonly Years?: (number | undefined) | undefined;
}
export interface DeleteMarkerReplication {
	readonly Status?: (string | undefined) | undefined;
}
export interface Destination {
	readonly BucketAccountId?: (string | undefined) | undefined;
	readonly BucketArn: string;
	readonly Format: string;
	readonly Prefix?: (string | undefined) | undefined;
}
export interface EncryptionConfiguration {
	readonly ReplicaKmsKeyID: string;
}
export interface EventBridgeConfiguration {
	readonly EventBridgeEnabled?: (boolean | undefined) | undefined;
}
export interface FilterRule {
	readonly Name: string;
	readonly Value: string;
}
export interface IntelligentTieringConfiguration {
	readonly Id: string;
	readonly Prefix?: (string | undefined) | undefined;
	readonly Status: string;
	readonly TagFilters?: (TagFilter[] | undefined) | undefined;
	readonly Tierings: Tiering[];
}
export interface InventoryConfiguration {
	readonly Destination: Destination;
	readonly Enabled: boolean;
	readonly Id: string;
	readonly IncludedObjectVersions: string;
	readonly OptionalFields?: (string[] | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly ScheduleFrequency: string;
}
export interface LambdaConfiguration {
	readonly Event: string;
	readonly Filter?: (NotificationFilter | undefined) | undefined;
	readonly Function: string;
}
export interface LifecycleConfiguration {
	readonly Rules: Rule[];
}
export interface LoggingConfiguration {
	readonly DestinationBucketName?: (string | undefined) | undefined;
	readonly LogFilePrefix?: (string | undefined) | undefined;
}
export interface Metrics {
	readonly EventThreshold?: (ReplicationTimeValue | undefined) | undefined;
	readonly Status: string;
}
export interface MetricsConfiguration {
	readonly AccessPointArn?: (string | undefined) | undefined;
	readonly Id: string;
	readonly Prefix?: (string | undefined) | undefined;
	readonly TagFilters?: (TagFilter[] | undefined) | undefined;
}
export interface NoncurrentVersionExpiration {
	readonly NewerNoncurrentVersions?: (number | undefined) | undefined;
	readonly NoncurrentDays: number;
}
export interface NoncurrentVersionTransition {
	readonly NewerNoncurrentVersions?: (number | undefined) | undefined;
	readonly StorageClass: string;
	readonly TransitionInDays: number;
}
export interface NotificationConfiguration {
	readonly EventBridgeConfiguration?: (EventBridgeConfiguration | undefined) | undefined;
	readonly LambdaConfigurations?: (LambdaConfiguration[] | undefined) | undefined;
	readonly QueueConfigurations?: (QueueConfiguration[] | undefined) | undefined;
	readonly TopicConfigurations?: (TopicConfiguration[] | undefined) | undefined;
}
export interface NotificationFilter {
	readonly S3Key: S3KeyFilter;
}
export interface ObjectLockConfiguration {
	readonly ObjectLockEnabled?: (string | undefined) | undefined;
	readonly Rule?: (ObjectLockRule | undefined) | undefined;
}
export interface ObjectLockRule {
	readonly DefaultRetention?: (DefaultRetention | undefined) | undefined;
}
export interface OwnershipControls {
	readonly Rules: OwnershipControlsRule[];
}
export interface OwnershipControlsRule {
	readonly ObjectOwnership?: (string | undefined) | undefined;
}
export interface QueueConfiguration {
	readonly Event: string;
	readonly Filter?: (NotificationFilter | undefined) | undefined;
	readonly Queue: string;
}
export interface RedirectAllRequestsTo {
	readonly HostName: string;
	readonly Protocol?: (string | undefined) | undefined;
}
export interface RedirectRule {
	readonly HostName?: (string | undefined) | undefined;
	readonly HttpRedirectCode?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly ReplaceKeyPrefixWith?: (string | undefined) | undefined;
	readonly ReplaceKeyWith?: (string | undefined) | undefined;
}
export interface ReplicaModifications {
	readonly Status: string;
}
export interface ReplicationConfiguration {
	readonly Role: string;
	readonly Rules: ReplicationRule[];
}
export interface ReplicationDestination {
	readonly AccessControlTranslation?: (AccessControlTranslation | undefined) | undefined;
	readonly Account?: (string | undefined) | undefined;
	readonly Bucket: string;
	readonly EncryptionConfiguration?: (EncryptionConfiguration | undefined) | undefined;
	readonly Metrics?: (Metrics | undefined) | undefined;
	readonly ReplicationTime?: (ReplicationTime | undefined) | undefined;
	readonly StorageClass?: (string | undefined) | undefined;
}
export interface ReplicationRule {
	readonly DeleteMarkerReplication?: (DeleteMarkerReplication | undefined) | undefined;
	readonly Destination: ReplicationDestination;
	readonly Filter?: (ReplicationRuleFilter | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SourceSelectionCriteria?: (SourceSelectionCriteria | undefined) | undefined;
	readonly Status: string;
}
export interface ReplicationRuleAndOperator {
	readonly Prefix?: (string | undefined) | undefined;
	readonly TagFilters?: (TagFilter[] | undefined) | undefined;
}
export interface ReplicationRuleFilter {
	readonly And?: (ReplicationRuleAndOperator | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly TagFilter?: (TagFilter | undefined) | undefined;
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
	readonly RoutingRuleCondition?: (RoutingRuleCondition | undefined) | undefined;
}
export interface RoutingRuleCondition {
	readonly HttpErrorCodeReturnedEquals?: (string | undefined) | undefined;
	readonly KeyPrefixEquals?: (string | undefined) | undefined;
}
export interface Rule {
	readonly AbortIncompleteMultipartUpload?: (AbortIncompleteMultipartUpload | undefined) | undefined;
	readonly ExpirationDate?: (Date | undefined) | undefined;
	readonly ExpirationInDays?: (number | undefined) | undefined;
	readonly ExpiredObjectDeleteMarker?: (boolean | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly NoncurrentVersionExpiration?: (NoncurrentVersionExpiration | undefined) | undefined;
	readonly NoncurrentVersionExpirationInDays?: (number | undefined) | undefined;
	readonly NoncurrentVersionTransition?: (NoncurrentVersionTransition | undefined) | undefined;
	readonly NoncurrentVersionTransitions?: (NoncurrentVersionTransition[] | undefined) | undefined;
	readonly ObjectSizeGreaterThan?: (number | undefined) | undefined;
	readonly ObjectSizeLessThan?: (number | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly Status: string;
	readonly TagFilters?: (TagFilter[] | undefined) | undefined;
	readonly Transition?: (Transition | undefined) | undefined;
	readonly Transitions?: (Transition[] | undefined) | undefined;
}
export interface S3KeyFilter {
	readonly Rules: FilterRule[];
}
export interface ServerSideEncryptionByDefault {
	readonly KMSMasterKeyID?: (string | undefined) | undefined;
	readonly SSEAlgorithm: string;
}
export interface ServerSideEncryptionRule {
	readonly BucketKeyEnabled?: (boolean | undefined) | undefined;
	readonly ServerSideEncryptionByDefault?: (ServerSideEncryptionByDefault | undefined) | undefined;
}
export interface SourceSelectionCriteria {
	readonly ReplicaModifications?: (ReplicaModifications | undefined) | undefined;
	readonly SseKmsEncryptedObjects?: (SseKmsEncryptedObjects | undefined) | undefined;
}
export interface SseKmsEncryptedObjects {
	readonly Status: string;
}
export interface StorageClassAnalysis {
	readonly DataExport?: (DataExport | undefined) | undefined;
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
	readonly Filter?: (NotificationFilter | undefined) | undefined;
	readonly Topic: string;
}
export interface Transition {
	readonly StorageClass: string;
	readonly TransitionDate?: (Date | undefined) | undefined;
	readonly TransitionInDays?: (number | undefined) | undefined;
}
export interface VersioningConfiguration {
	readonly Status: string;
}
export interface WebsiteConfiguration {
	readonly ErrorDocument?: (string | undefined) | undefined;
	readonly IndexDocument?: (string | undefined) | undefined;
	readonly RedirectAllRequestsTo?: (RedirectAllRequestsTo | undefined) | undefined;
	readonly RoutingRules?: (RoutingRule[] | undefined) | undefined;
}
export interface Region {
	readonly Bucket: string;
}
export interface AccountLevel {
	readonly ActivityMetrics?: (ActivityMetrics | undefined) | undefined;
	readonly AdvancedCostOptimizationMetrics?: (AdvancedCostOptimizationMetrics | undefined) | undefined;
	readonly AdvancedDataProtectionMetrics?: (AdvancedDataProtectionMetrics | undefined) | undefined;
	readonly BucketLevel: BucketLevel;
	readonly DetailedStatusCodesMetrics?: (DetailedStatusCodesMetrics | undefined) | undefined;
}
export interface ActivityMetrics {
	readonly IsEnabled?: (boolean | undefined) | undefined;
}
export interface AdvancedCostOptimizationMetrics {
	readonly IsEnabled?: (boolean | undefined) | undefined;
}
export interface AdvancedDataProtectionMetrics {
	readonly IsEnabled?: (boolean | undefined) | undefined;
}
export interface AwsOrg {
	readonly Arn: string;
}
export interface BucketLevel {
	readonly ActivityMetrics?: (ActivityMetrics | undefined) | undefined;
	readonly AdvancedCostOptimizationMetrics?: (AdvancedCostOptimizationMetrics | undefined) | undefined;
	readonly AdvancedDataProtectionMetrics?: (AdvancedDataProtectionMetrics | undefined) | undefined;
	readonly DetailedStatusCodesMetrics?: (DetailedStatusCodesMetrics | undefined) | undefined;
	readonly PrefixLevel?: (PrefixLevel | undefined) | undefined;
}
export interface BucketsAndRegions {
	readonly Buckets?: (string[] | undefined) | undefined;
	readonly Regions?: (string[] | undefined) | undefined;
}
export interface CloudWatchMetrics {
	readonly IsEnabled: boolean;
}
export interface DetailedStatusCodesMetrics {
	readonly IsEnabled?: (boolean | undefined) | undefined;
}
export interface Encryption {
	readonly SSEKMS?: (SSEKMS | undefined) | undefined;
	readonly SSES3?: (any | undefined) | undefined;
}
export interface PrefixLevel {
	readonly StorageMetrics: PrefixLevelStorageMetrics;
}
export interface PrefixLevelStorageMetrics {
	readonly IsEnabled?: (boolean | undefined) | undefined;
	readonly SelectionCriteria?: (SelectionCriteria | undefined) | undefined;
}
export interface S3BucketDestination {
	readonly AccountId: string;
	readonly Arn: string;
	readonly Encryption?: (Encryption | undefined) | undefined;
	readonly Format: string;
	readonly OutputSchemaVersion: string;
	readonly Prefix?: (string | undefined) | undefined;
}
export interface SSEKMS {
	readonly KeyId: string;
}
export interface SelectionCriteria {
	readonly Delimiter?: (string | undefined) | undefined;
	readonly MaxDepth?: (number | undefined) | undefined;
	readonly MinStorageBytesPercentage?: (number | undefined) | undefined;
}
export interface StorageLensConfiguration {
	readonly AccountLevel: AccountLevel;
	readonly AwsOrg?: (AwsOrg | undefined) | undefined;
	readonly DataExport?: (DataExport | undefined) | undefined;
	readonly Exclude?: (BucketsAndRegions | undefined) | undefined;
	readonly Id: string;
	readonly Include?: (BucketsAndRegions | undefined) | undefined;
	readonly IsEnabled: boolean;
	readonly StorageLensArn?: (string | undefined) | undefined;
}
export default {
	AccessPoint: AccessPoint,
	Bucket: Bucket,
	BucketPolicy: BucketPolicy,
	MultiRegionAccessPoint: MultiRegionAccessPoint,
	MultiRegionAccessPointPolicy: MultiRegionAccessPointPolicy,
	StorageLens: StorageLens,
};
