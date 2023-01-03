import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CachePolicy extends CfnResource<CachePolicyComponentInputs> implements CachePolicyComponentOutputs {
	constructor(entity: ADKEntity, options: CachePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::CachePolicy", options);
	}
	public readonly Id: string;
	public readonly LastModifiedTime: string;
}
export interface CachePolicyComponentOutputs {
	readonly Id: string;
	readonly LastModifiedTime: string;
}
export interface CachePolicyComponentInputs {
	readonly CachePolicyConfig: CachePolicyConfig;
	readonly LogicalId: string;
}
export class CloudFrontOriginAccessIdentity
	extends CfnResource<CloudFrontOriginAccessIdentityComponentInputs>
	implements CloudFrontOriginAccessIdentityComponentOutputs
{
	constructor(entity: ADKEntity, options: CloudFrontOriginAccessIdentityComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::CloudFrontOriginAccessIdentity", options);
	}
	public readonly Id: string;
	public readonly S3CanonicalUserId: string;
}
export interface CloudFrontOriginAccessIdentityComponentOutputs {
	readonly Id: string;
	readonly S3CanonicalUserId: string;
}
export interface CloudFrontOriginAccessIdentityComponentInputs {
	readonly CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
	readonly LogicalId: string;
}
export class ContinuousDeploymentPolicy
	extends CfnResource<ContinuousDeploymentPolicyComponentInputs>
	implements ContinuousDeploymentPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: ContinuousDeploymentPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::ContinuousDeploymentPolicy", options);
	}
	public readonly Id: string;
	public readonly LastModifiedTime: string;
}
export interface ContinuousDeploymentPolicyComponentOutputs {
	readonly Id: string;
	readonly LastModifiedTime: string;
}
export interface ContinuousDeploymentPolicyComponentInputs {
	readonly ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
	readonly LogicalId: string;
}
export class Distribution extends CfnResource<DistributionComponentInputs> implements DistributionComponentOutputs {
	constructor(entity: ADKEntity, options: DistributionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::Distribution", options);
	}
	public readonly DomainName: string;
	public readonly Id: string;
}
export interface DistributionComponentOutputs {
	readonly DomainName: string;
	readonly Id: string;
}
export interface DistributionComponentInputs {
	readonly DistributionConfig: DistributionConfig;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class FunctionInstance extends CfnResource<FunctionComponentInputs> implements FunctionComponentOutputs {
	constructor(entity: ADKEntity, options: FunctionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::Function", options);
	}
	public readonly FunctionArn: string;
	public readonly FunctionMetadataFunctionArn: string;
	public readonly Stage: string;
}
export interface FunctionComponentOutputs {
	readonly FunctionArn: string;
	readonly FunctionMetadataFunctionArn: string;
	readonly Stage: string;
}
export interface FunctionComponentInputs {
	readonly Name: string;
	readonly AutoPublish?: (boolean | undefined) | undefined;
	readonly FunctionCode?: (string | undefined) | undefined;
	readonly FunctionConfig?: (FunctionConfig | undefined) | undefined;
	readonly FunctionMetadata?: (FunctionMetadata | undefined) | undefined;
	readonly LogicalId: string;
}
export class KeyGroup extends CfnResource<KeyGroupComponentInputs> implements KeyGroupComponentOutputs {
	constructor(entity: ADKEntity, options: KeyGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::KeyGroup", options);
	}
	public readonly Id: string;
	public readonly LastModifiedTime: string;
}
export interface KeyGroupComponentOutputs {
	readonly Id: string;
	readonly LastModifiedTime: string;
}
export interface KeyGroupComponentInputs {
	readonly KeyGroupConfig: KeyGroupConfig;
	readonly LogicalId: string;
}
export class MonitoringSubscription
	extends CfnResource<MonitoringSubscriptionComponentInputs>
	implements MonitoringSubscriptionComponentOutputs
{
	constructor(entity: ADKEntity, options: MonitoringSubscriptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::MonitoringSubscription", options);
	}
}
export interface MonitoringSubscriptionComponentOutputs {}
export interface MonitoringSubscriptionComponentInputs {
	readonly DistributionId: string;
	readonly MonitoringSubscription: MonitoringSubscription;
	readonly LogicalId: string;
}
export class OriginAccessControl
	extends CfnResource<OriginAccessControlComponentInputs>
	implements OriginAccessControlComponentOutputs
{
	constructor(entity: ADKEntity, options: OriginAccessControlComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::OriginAccessControl", options);
	}
	public readonly Id: string;
}
export interface OriginAccessControlComponentOutputs {
	readonly Id: string;
}
export interface OriginAccessControlComponentInputs {
	readonly OriginAccessControlConfig: OriginAccessControlConfig;
	readonly LogicalId: string;
}
export class OriginRequestPolicy
	extends CfnResource<OriginRequestPolicyComponentInputs>
	implements OriginRequestPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: OriginRequestPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::OriginRequestPolicy", options);
	}
	public readonly Id: string;
	public readonly LastModifiedTime: string;
}
export interface OriginRequestPolicyComponentOutputs {
	readonly Id: string;
	readonly LastModifiedTime: string;
}
export interface OriginRequestPolicyComponentInputs {
	readonly OriginRequestPolicyConfig: OriginRequestPolicyConfig;
	readonly LogicalId: string;
}
export class PublicKey extends CfnResource<PublicKeyComponentInputs> implements PublicKeyComponentOutputs {
	constructor(entity: ADKEntity, options: PublicKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::PublicKey", options);
	}
	public readonly CreatedTime: string;
	public readonly Id: string;
}
export interface PublicKeyComponentOutputs {
	readonly CreatedTime: string;
	readonly Id: string;
}
export interface PublicKeyComponentInputs {
	readonly PublicKeyConfig: PublicKeyConfig;
	readonly LogicalId: string;
}
export class RealtimeLogConfig
	extends CfnResource<RealtimeLogConfigComponentInputs>
	implements RealtimeLogConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: RealtimeLogConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::RealtimeLogConfig", options);
	}
	public readonly Arn: string;
}
export interface RealtimeLogConfigComponentOutputs {
	readonly Arn: string;
}
export interface RealtimeLogConfigComponentInputs {
	readonly EndPoints: EndPoint[];
	readonly Fields: string[];
	readonly Name: string;
	readonly SamplingRate: number;
	readonly LogicalId: string;
}
export class ResponseHeadersPolicy
	extends CfnResource<ResponseHeadersPolicyComponentInputs>
	implements ResponseHeadersPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: ResponseHeadersPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::ResponseHeadersPolicy", options);
	}
	public readonly Id: string;
	public readonly LastModifiedTime: string;
}
export interface ResponseHeadersPolicyComponentOutputs {
	readonly Id: string;
	readonly LastModifiedTime: string;
}
export interface ResponseHeadersPolicyComponentInputs {
	readonly ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
	readonly LogicalId: string;
}
export class StreamingDistribution
	extends CfnResource<StreamingDistributionComponentInputs>
	implements StreamingDistributionComponentOutputs
{
	constructor(entity: ADKEntity, options: StreamingDistributionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFront::StreamingDistribution", options);
	}
	public readonly DomainName: string;
}
export interface StreamingDistributionComponentOutputs {
	readonly DomainName: string;
}
export interface StreamingDistributionComponentInputs {
	readonly StreamingDistributionConfig: StreamingDistributionConfig;
	readonly Tags: { key: string; value: string }[];
	readonly LogicalId: string;
}
export interface CachePolicyConfig {
	readonly Comment?: (string | undefined) | undefined;
	readonly DefaultTTL: number;
	readonly MaxTTL: number;
	readonly MinTTL: number;
	readonly Name: string;
	readonly ParametersInCacheKeyAndForwardedToOrigin: ParametersInCacheKeyAndForwardedToOrigin;
}
export interface CookiesConfig {
	readonly CookieBehavior: string;
	readonly Cookies?: (string[] | undefined) | undefined;
}
export interface HeadersConfig {
	readonly HeaderBehavior: string;
	readonly Headers?: (string[] | undefined) | undefined;
}
export interface ParametersInCacheKeyAndForwardedToOrigin {
	readonly CookiesConfig: CookiesConfig;
	readonly EnableAcceptEncodingBrotli?: (boolean | undefined) | undefined;
	readonly EnableAcceptEncodingGzip: boolean;
	readonly HeadersConfig: HeadersConfig;
	readonly QueryStringsConfig: QueryStringsConfig;
}
export interface QueryStringsConfig {
	readonly QueryStringBehavior: string;
	readonly QueryStrings?: (string[] | undefined) | undefined;
}
export interface CloudFrontOriginAccessIdentityConfig {
	readonly Comment: string;
}
export interface ContinuousDeploymentPolicyConfig {
	readonly Enabled: boolean;
	readonly StagingDistributionDnsNames: string[];
	readonly TrafficConfig?: (TrafficConfig | undefined) | undefined;
}
export interface SessionStickinessConfig {
	readonly IdleTTL: number;
	readonly MaximumTTL: number;
}
export interface SingleHeaderConfig {
	readonly Header: string;
	readonly Value: string;
}
export interface SingleWeightConfig {
	readonly SessionStickinessConfig?: (SessionStickinessConfig | undefined) | undefined;
	readonly Weight: number;
}
export interface TrafficConfig {
	readonly SingleHeaderConfig?: (SingleHeaderConfig | undefined) | undefined;
	readonly SingleWeightConfig?: (SingleWeightConfig | undefined) | undefined;
	readonly Type: string;
}
export interface CacheBehavior {
	readonly AllowedMethods?: (string[] | undefined) | undefined;
	readonly CachePolicyId?: (string | undefined) | undefined;
	readonly CachedMethods?: (string[] | undefined) | undefined;
	readonly Compress?: (boolean | undefined) | undefined;
	readonly DefaultTTL?: (number | undefined) | undefined;
	readonly FieldLevelEncryptionId?: (string | undefined) | undefined;
	readonly ForwardedValues?: (ForwardedValues | undefined) | undefined;
	readonly FunctionAssociations?: (FunctionAssociation[] | undefined) | undefined;
	readonly LambdaFunctionAssociations?: (LambdaFunctionAssociation[] | undefined) | undefined;
	readonly MaxTTL?: (number | undefined) | undefined;
	readonly MinTTL?: (number | undefined) | undefined;
	readonly OriginRequestPolicyId?: (string | undefined) | undefined;
	readonly PathPattern: string;
	readonly RealtimeLogConfigArn?: (string | undefined) | undefined;
	readonly ResponseHeadersPolicyId?: (string | undefined) | undefined;
	readonly SmoothStreaming?: (boolean | undefined) | undefined;
	readonly TargetOriginId: string;
	readonly TrustedKeyGroups?: (string[] | undefined) | undefined;
	readonly TrustedSigners?: (string[] | undefined) | undefined;
	readonly ViewerProtocolPolicy: string;
}
export interface Cookies {
	readonly Forward: string;
	readonly WhitelistedNames?: (string[] | undefined) | undefined;
}
export interface CustomErrorResponse {
	readonly ErrorCachingMinTTL?: (number | undefined) | undefined;
	readonly ErrorCode: number;
	readonly ResponseCode?: (number | undefined) | undefined;
	readonly ResponsePagePath?: (string | undefined) | undefined;
}
export interface CustomOriginConfig {
	readonly HTTPPort?: (number | undefined) | undefined;
	readonly HTTPSPort?: (number | undefined) | undefined;
	readonly OriginKeepaliveTimeout?: (number | undefined) | undefined;
	readonly OriginProtocolPolicy: string;
	readonly OriginReadTimeout?: (number | undefined) | undefined;
	readonly OriginSSLProtocols?: (string[] | undefined) | undefined;
}
export interface DefaultCacheBehavior {
	readonly AllowedMethods?: (string[] | undefined) | undefined;
	readonly CachePolicyId?: (string | undefined) | undefined;
	readonly CachedMethods?: (string[] | undefined) | undefined;
	readonly Compress?: (boolean | undefined) | undefined;
	readonly DefaultTTL?: (number | undefined) | undefined;
	readonly FieldLevelEncryptionId?: (string | undefined) | undefined;
	readonly ForwardedValues?: (ForwardedValues | undefined) | undefined;
	readonly FunctionAssociations?: (FunctionAssociation[] | undefined) | undefined;
	readonly LambdaFunctionAssociations?: (LambdaFunctionAssociation[] | undefined) | undefined;
	readonly MaxTTL?: (number | undefined) | undefined;
	readonly MinTTL?: (number | undefined) | undefined;
	readonly OriginRequestPolicyId?: (string | undefined) | undefined;
	readonly RealtimeLogConfigArn?: (string | undefined) | undefined;
	readonly ResponseHeadersPolicyId?: (string | undefined) | undefined;
	readonly SmoothStreaming?: (boolean | undefined) | undefined;
	readonly TargetOriginId: string;
	readonly TrustedKeyGroups?: (string[] | undefined) | undefined;
	readonly TrustedSigners?: (string[] | undefined) | undefined;
	readonly ViewerProtocolPolicy: string;
}
export interface DistributionConfig {
	readonly Aliases?: (string[] | undefined) | undefined;
	readonly CNAMEs?: (string[] | undefined) | undefined;
	readonly CacheBehaviors?: (CacheBehavior[] | undefined) | undefined;
	readonly Comment?: (string | undefined) | undefined;
	readonly ContinuousDeploymentPolicyId?: (string | undefined) | undefined;
	readonly CustomErrorResponses?: (CustomErrorResponse[] | undefined) | undefined;
	readonly CustomOrigin?: (LegacyCustomOrigin | undefined) | undefined;
	readonly DefaultCacheBehavior: DefaultCacheBehavior;
	readonly DefaultRootObject?: (string | undefined) | undefined;
	readonly Enabled: boolean;
	readonly HttpVersion?: (string | undefined) | undefined;
	readonly IPV6Enabled?: (boolean | undefined) | undefined;
	readonly Logging?: (Logging | undefined) | undefined;
	readonly OriginGroups?: (OriginGroups | undefined) | undefined;
	readonly Origins?: (Origin[] | undefined) | undefined;
	readonly PriceClass?: (string | undefined) | undefined;
	readonly Restrictions?: (Restrictions | undefined) | undefined;
	readonly S3Origin?: (LegacyS3Origin | undefined) | undefined;
	readonly Staging?: (boolean | undefined) | undefined;
	readonly ViewerCertificate?: (ViewerCertificate | undefined) | undefined;
	readonly WebACLId?: (string | undefined) | undefined;
}
export interface ForwardedValues {
	readonly Cookies?: (Cookies | undefined) | undefined;
	readonly Headers?: (string[] | undefined) | undefined;
	readonly QueryString: boolean;
	readonly QueryStringCacheKeys?: (string[] | undefined) | undefined;
}
export interface FunctionAssociation {
	readonly EventType?: (string | undefined) | undefined;
	readonly FunctionARN?: (string | undefined) | undefined;
}
export interface GeoRestriction {
	readonly Locations?: (string[] | undefined) | undefined;
	readonly RestrictionType: string;
}
export interface LambdaFunctionAssociation {
	readonly EventType?: (string | undefined) | undefined;
	readonly IncludeBody?: (boolean | undefined) | undefined;
	readonly LambdaFunctionARN?: (string | undefined) | undefined;
}
export interface LegacyCustomOrigin {
	readonly DNSName: string;
	readonly HTTPPort?: (number | undefined) | undefined;
	readonly HTTPSPort?: (number | undefined) | undefined;
	readonly OriginProtocolPolicy: string;
	readonly OriginSSLProtocols: string[];
}
export interface LegacyS3Origin {
	readonly DNSName: string;
	readonly OriginAccessIdentity?: (string | undefined) | undefined;
}
export interface Logging {
	readonly Bucket: string;
	readonly IncludeCookies?: (boolean | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
}
export interface Origin {
	readonly ConnectionAttempts?: (number | undefined) | undefined;
	readonly ConnectionTimeout?: (number | undefined) | undefined;
	readonly CustomOriginConfig?: (CustomOriginConfig | undefined) | undefined;
	readonly DomainName: string;
	readonly Id: string;
	readonly OriginAccessControlId?: (string | undefined) | undefined;
	readonly OriginCustomHeaders?: (OriginCustomHeader[] | undefined) | undefined;
	readonly OriginPath?: (string | undefined) | undefined;
	readonly OriginShield?: (OriginShield | undefined) | undefined;
	readonly S3OriginConfig?: (S3OriginConfig | undefined) | undefined;
}
export interface OriginCustomHeader {
	readonly HeaderName: string;
	readonly HeaderValue: string;
}
export interface OriginGroup {
	readonly FailoverCriteria: OriginGroupFailoverCriteria;
	readonly Id: string;
	readonly Members: OriginGroupMembers;
}
export interface OriginGroupFailoverCriteria {
	readonly StatusCodes: StatusCodes;
}
export interface OriginGroupMember {
	readonly OriginId: string;
}
export interface OriginGroupMembers {
	readonly Items: OriginGroupMember[];
	readonly Quantity: number;
}
export interface OriginGroups {
	readonly Items?: (OriginGroup[] | undefined) | undefined;
	readonly Quantity: number;
}
export interface OriginShield {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly OriginShieldRegion?: (string | undefined) | undefined;
}
export interface Restrictions {
	readonly GeoRestriction: GeoRestriction;
}
export interface S3OriginConfig {
	readonly OriginAccessIdentity?: (string | undefined) | undefined;
}
export interface StatusCodes {
	readonly Items: number[];
	readonly Quantity: number;
}
export interface ViewerCertificate {
	readonly AcmCertificateArn?: (string | undefined) | undefined;
	readonly CloudFrontDefaultCertificate?: (boolean | undefined) | undefined;
	readonly IamCertificateId?: (string | undefined) | undefined;
	readonly MinimumProtocolVersion?: (string | undefined) | undefined;
	readonly SslSupportMethod?: (string | undefined) | undefined;
}
export interface FunctionConfig {
	readonly Comment: string;
	readonly Runtime: string;
}
export interface FunctionMetadata {
	readonly FunctionARN?: (string | undefined) | undefined;
}
export interface KeyGroupConfig {
	readonly Comment?: (string | undefined) | undefined;
	readonly Items: string[];
	readonly Name: string;
}
export interface MonitoringSubscription {
	readonly RealtimeMetricsSubscriptionConfig?: (RealtimeMetricsSubscriptionConfig | undefined) | undefined;
}
export interface RealtimeMetricsSubscriptionConfig {
	readonly RealtimeMetricsSubscriptionStatus: string;
}
export interface OriginAccessControlConfig {
	readonly Description?: (string | undefined) | undefined;
	readonly Name: string;
	readonly OriginAccessControlOriginType: string;
	readonly SigningBehavior: string;
	readonly SigningProtocol: string;
}
export interface OriginRequestPolicyConfig {
	readonly Comment?: (string | undefined) | undefined;
	readonly CookiesConfig: CookiesConfig;
	readonly HeadersConfig: HeadersConfig;
	readonly Name: string;
	readonly QueryStringsConfig: QueryStringsConfig;
}
export interface PublicKeyConfig {
	readonly CallerReference: string;
	readonly Comment?: (string | undefined) | undefined;
	readonly EncodedKey: string;
	readonly Name: string;
}
export interface EndPoint {
	readonly KinesisStreamConfig: KinesisStreamConfig;
	readonly StreamType: string;
}
export interface KinesisStreamConfig {
	readonly RoleArn: string;
	readonly StreamArn: string;
}
export interface AccessControlAllowHeaders {
	readonly Items: string[];
}
export interface AccessControlAllowMethods {
	readonly Items: string[];
}
export interface AccessControlAllowOrigins {
	readonly Items: string[];
}
export interface AccessControlExposeHeaders {
	readonly Items: string[];
}
export interface ContentSecurityPolicy {
	readonly ContentSecurityPolicy: string;
	readonly Override: boolean;
}
export interface ContentTypeOptions {
	readonly Override: boolean;
}
export interface CorsConfig {
	readonly AccessControlAllowCredentials: boolean;
	readonly AccessControlAllowHeaders: AccessControlAllowHeaders;
	readonly AccessControlAllowMethods: AccessControlAllowMethods;
	readonly AccessControlAllowOrigins: AccessControlAllowOrigins;
	readonly AccessControlExposeHeaders?: (AccessControlExposeHeaders | undefined) | undefined;
	readonly AccessControlMaxAgeSec?: (number | undefined) | undefined;
	readonly OriginOverride: boolean;
}
export interface CustomHeader {
	readonly Header: string;
	readonly Override: boolean;
	readonly Value: string;
}
export interface CustomHeadersConfig {
	readonly Items: CustomHeader[];
}
export interface FrameOptions {
	readonly FrameOption: string;
	readonly Override: boolean;
}
export interface ReferrerPolicy {
	readonly Override: boolean;
	readonly ReferrerPolicy: string;
}
export interface ResponseHeadersPolicyConfig {
	readonly Comment?: (string | undefined) | undefined;
	readonly CorsConfig?: (CorsConfig | undefined) | undefined;
	readonly CustomHeadersConfig?: (CustomHeadersConfig | undefined) | undefined;
	readonly Name: string;
	readonly SecurityHeadersConfig?: (SecurityHeadersConfig | undefined) | undefined;
	readonly ServerTimingHeadersConfig?: (ServerTimingHeadersConfig | undefined) | undefined;
}
export interface SecurityHeadersConfig {
	readonly ContentSecurityPolicy?: (ContentSecurityPolicy | undefined) | undefined;
	readonly ContentTypeOptions?: (ContentTypeOptions | undefined) | undefined;
	readonly FrameOptions?: (FrameOptions | undefined) | undefined;
	readonly ReferrerPolicy?: (ReferrerPolicy | undefined) | undefined;
	readonly StrictTransportSecurity?: (StrictTransportSecurity | undefined) | undefined;
	readonly XSSProtection?: (XSSProtection | undefined) | undefined;
}
export interface ServerTimingHeadersConfig {
	readonly Enabled: boolean;
	readonly SamplingRate?: (number | undefined) | undefined;
}
export interface StrictTransportSecurity {
	readonly AccessControlMaxAgeSec: number;
	readonly IncludeSubdomains?: (boolean | undefined) | undefined;
	readonly Override: boolean;
	readonly Preload?: (boolean | undefined) | undefined;
}
export interface XSSProtection {
	readonly ModeBlock?: (boolean | undefined) | undefined;
	readonly Override: boolean;
	readonly Protection: boolean;
	readonly ReportUri?: (string | undefined) | undefined;
}
export interface S3Origin {
	readonly DomainName: string;
	readonly OriginAccessIdentity: string;
}
export interface StreamingDistributionConfig {
	readonly Aliases?: (string[] | undefined) | undefined;
	readonly Comment: string;
	readonly Enabled: boolean;
	readonly Logging?: (Logging | undefined) | undefined;
	readonly PriceClass?: (string | undefined) | undefined;
	readonly S3Origin: S3Origin;
	readonly TrustedSigners: TrustedSigners;
}
export interface TrustedSigners {
	readonly AwsAccountNumbers?: (string[] | undefined) | undefined;
	readonly Enabled: boolean;
}
export default {
	CachePolicy: CachePolicy,
	CloudFrontOriginAccessIdentity: CloudFrontOriginAccessIdentity,
	ContinuousDeploymentPolicy: ContinuousDeploymentPolicy,
	Distribution: Distribution,
	Function: FunctionInstance,
	KeyGroup: KeyGroup,
	MonitoringSubscription: MonitoringSubscription,
	OriginAccessControl: OriginAccessControl,
	OriginRequestPolicy: OriginRequestPolicy,
	PublicKey: PublicKey,
	RealtimeLogConfig: RealtimeLogConfig,
	ResponseHeadersPolicy: ResponseHeadersPolicy,
	StreamingDistribution: StreamingDistribution,
};
