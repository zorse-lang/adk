import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccountAuditConfiguration
	extends CfnResource<AccountAuditConfigurationComponentInputs>
	implements AccountAuditConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: AccountAuditConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::AccountAuditConfiguration", options);
	}
}
export interface AccountAuditConfigurationComponentOutputs {}
export interface AccountAuditConfigurationComponentInputs {
	readonly AccountId: string;
	readonly AuditCheckConfigurations: AuditCheckConfigurations;
	readonly RoleArn: string;
	readonly AuditNotificationTargetConfigurations?: (AuditNotificationTargetConfigurations | undefined) | undefined;
	readonly LogicalId: string;
}
export class Authorizer extends CfnResource<AuthorizerComponentInputs> implements AuthorizerComponentOutputs {
	constructor(entity: ADKEntity, options: AuthorizerComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::Authorizer", options);
	}
	public readonly Arn: string;
}
export interface AuthorizerComponentOutputs {
	readonly Arn: string;
}
export interface AuthorizerComponentInputs {
	readonly AuthorizerFunctionArn: string;
	readonly AuthorizerName?: (string | undefined) | undefined;
	readonly EnableCachingForHttp?: (boolean | undefined) | undefined;
	readonly SigningDisabled?: (boolean | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TokenKeyName?: (string | undefined) | undefined;
	readonly TokenSigningPublicKeys?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class CACertificate extends CfnResource<CACertificateComponentInputs> implements CACertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CACertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::CACertificate", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface CACertificateComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface CACertificateComponentInputs {
	readonly CACertificatePem: string;
	readonly Status: string;
	readonly AutoRegistrationStatus?: (string | undefined) | undefined;
	readonly CertificateMode?: (string | undefined) | undefined;
	readonly RegistrationConfig?: (RegistrationConfig | undefined) | undefined;
	readonly RemoveAutoRegistration?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VerificationCertificatePem?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Certificate extends CfnResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::Certificate", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface CertificateComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface CertificateComponentInputs {
	readonly Status: string;
	readonly CACertificatePem?: (string | undefined) | undefined;
	readonly CertificateMode?: (string | undefined) | undefined;
	readonly CertificatePem?: (string | undefined) | undefined;
	readonly CertificateSigningRequest?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class CustomMetric extends CfnResource<CustomMetricComponentInputs> implements CustomMetricComponentOutputs {
	constructor(entity: ADKEntity, options: CustomMetricComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::CustomMetric", options);
	}
	public readonly MetricArn: string;
}
export interface CustomMetricComponentOutputs {
	readonly MetricArn: string;
}
export interface CustomMetricComponentInputs {
	readonly MetricType: string;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly MetricName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Dimension extends CfnResource<DimensionComponentInputs> implements DimensionComponentOutputs {
	constructor(entity: ADKEntity, options: DimensionComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::Dimension", options);
	}
	public readonly Arn: string;
}
export interface DimensionComponentOutputs {
	readonly Arn: string;
}
export interface DimensionComponentInputs {
	readonly StringValues: string[];
	readonly Type: string;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DomainConfiguration
	extends CfnResource<DomainConfigurationComponentInputs>
	implements DomainConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: DomainConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::DomainConfiguration", options);
	}
	public readonly Arn: string;
	public readonly DomainType: string;
	public readonly ServerCertificates: Map<string, ServerCertificateSummary>;
}
export interface DomainConfigurationComponentOutputs {
	readonly Arn: string;
	readonly DomainType: string;
	readonly ServerCertificates: Map<string, ServerCertificateSummary>;
}
export interface DomainConfigurationComponentInputs {
	readonly AuthorizerConfig?: (AuthorizerConfig | undefined) | undefined;
	readonly DomainConfigurationName?: (string | undefined) | undefined;
	readonly DomainConfigurationStatus?: (string | undefined) | undefined;
	readonly DomainName?: (string | undefined) | undefined;
	readonly ServerCertificateArns?: (string[] | undefined) | undefined;
	readonly ServiceType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly ValidationCertificateArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class FleetMetric extends CfnResource<FleetMetricComponentInputs> implements FleetMetricComponentOutputs {
	constructor(entity: ADKEntity, options: FleetMetricComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::FleetMetric", options);
	}
	public readonly CreationDate: number;
	public readonly LastModifiedDate: number;
	public readonly MetricArn: string;
	public readonly Version: number;
}
export interface FleetMetricComponentOutputs {
	readonly CreationDate: number;
	readonly LastModifiedDate: number;
	readonly MetricArn: string;
	readonly Version: number;
}
export interface FleetMetricComponentInputs {
	readonly MetricName: string;
	readonly AggregationField?: (string | undefined) | undefined;
	readonly AggregationType?: (AggregationType | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly IndexName?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly QueryString?: (string | undefined) | undefined;
	readonly QueryVersion?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Unit?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class JobTemplate extends CfnResource<JobTemplateComponentInputs> implements JobTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: JobTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::JobTemplate", options);
	}
	public readonly Arn: string;
}
export interface JobTemplateComponentOutputs {
	readonly Arn: string;
}
export interface JobTemplateComponentInputs {
	readonly Description: string;
	readonly JobTemplateId: string;
	readonly AbortConfig?: (AbortConfig | undefined) | undefined;
	readonly Document?: (string | undefined) | undefined;
	readonly DocumentSource?: (string | undefined) | undefined;
	readonly JobArn?: (string | undefined) | undefined;
	readonly JobExecutionsRolloutConfig?: (JobExecutionsRolloutConfig | undefined) | undefined;
	readonly PresignedUrlConfig?: (PresignedUrlConfig | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TimeoutConfig?: (TimeoutConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class Logging extends CfnResource<LoggingComponentInputs> implements LoggingComponentOutputs {
	constructor(entity: ADKEntity, options: LoggingComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::Logging", options);
	}
}
export interface LoggingComponentOutputs {}
export interface LoggingComponentInputs {
	readonly AccountId: string;
	readonly DefaultLogLevel: string;
	readonly RoleArn: string;
	readonly LogicalId: string;
}
export class MitigationAction
	extends CfnResource<MitigationActionComponentInputs>
	implements MitigationActionComponentOutputs
{
	constructor(entity: ADKEntity, options: MitigationActionComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::MitigationAction", options);
	}
	public readonly MitigationActionArn: string;
	public readonly MitigationActionId: string;
}
export interface MitigationActionComponentOutputs {
	readonly MitigationActionArn: string;
	readonly MitigationActionId: string;
}
export interface MitigationActionComponentInputs {
	readonly ActionParams: ActionParams;
	readonly RoleArn: string;
	readonly ActionName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Policy extends CfnResource<PolicyComponentInputs> implements PolicyComponentOutputs {
	constructor(entity: ADKEntity, options: PolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::Policy", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface PolicyComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface PolicyComponentInputs {
	readonly PolicyDocument: any;
	readonly PolicyName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class PolicyPrincipalAttachment
	extends CfnResource<PolicyPrincipalAttachmentComponentInputs>
	implements PolicyPrincipalAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: PolicyPrincipalAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::PolicyPrincipalAttachment", options);
	}
}
export interface PolicyPrincipalAttachmentComponentOutputs {}
export interface PolicyPrincipalAttachmentComponentInputs {
	readonly PolicyName: string;
	readonly Principal: string;
	readonly LogicalId: string;
}
export class ProvisioningTemplate
	extends CfnResource<ProvisioningTemplateComponentInputs>
	implements ProvisioningTemplateComponentOutputs
{
	constructor(entity: ADKEntity, options: ProvisioningTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::ProvisioningTemplate", options);
	}
	public readonly TemplateArn: string;
}
export interface ProvisioningTemplateComponentOutputs {
	readonly TemplateArn: string;
}
export interface ProvisioningTemplateComponentInputs {
	readonly ProvisioningRoleArn: string;
	readonly TemplateBody: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly PreProvisioningHook?: (ProvisioningHook | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TemplateName?: (string | undefined) | undefined;
	readonly TemplateType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ResourceSpecificLogging
	extends CfnResource<ResourceSpecificLoggingComponentInputs>
	implements ResourceSpecificLoggingComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceSpecificLoggingComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::ResourceSpecificLogging", options);
	}
	public readonly TargetId: string;
}
export interface ResourceSpecificLoggingComponentOutputs {
	readonly TargetId: string;
}
export interface ResourceSpecificLoggingComponentInputs {
	readonly LogLevel: string;
	readonly TargetName: string;
	readonly TargetType: string;
	readonly LogicalId: string;
}
export class RoleAlias extends CfnResource<RoleAliasComponentInputs> implements RoleAliasComponentOutputs {
	constructor(entity: ADKEntity, options: RoleAliasComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::RoleAlias", options);
	}
	public readonly RoleAliasArn: string;
}
export interface RoleAliasComponentOutputs {
	readonly RoleAliasArn: string;
}
export interface RoleAliasComponentInputs {
	readonly RoleArn: string;
	readonly CredentialDurationSeconds?: (number | undefined) | undefined;
	readonly RoleAlias?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ScheduledAudit extends CfnResource<ScheduledAuditComponentInputs> implements ScheduledAuditComponentOutputs {
	constructor(entity: ADKEntity, options: ScheduledAuditComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::ScheduledAudit", options);
	}
	public readonly ScheduledAuditArn: string;
}
export interface ScheduledAuditComponentOutputs {
	readonly ScheduledAuditArn: string;
}
export interface ScheduledAuditComponentInputs {
	readonly Frequency: string;
	readonly TargetCheckNames: string[];
	readonly DayOfMonth?: (string | undefined) | undefined;
	readonly DayOfWeek?: (string | undefined) | undefined;
	readonly ScheduledAuditName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityProfile
	extends CfnResource<SecurityProfileComponentInputs>
	implements SecurityProfileComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::SecurityProfile", options);
	}
	public readonly SecurityProfileArn: string;
}
export interface SecurityProfileComponentOutputs {
	readonly SecurityProfileArn: string;
}
export interface SecurityProfileComponentInputs {
	readonly AdditionalMetricsToRetainV2?: (MetricToRetain[] | undefined) | undefined;
	readonly AlertTargets?: ({ [key: string]: AlertTarget } | undefined) | undefined;
	readonly Behaviors?: (Behavior[] | undefined) | undefined;
	readonly SecurityProfileDescription?: (string | undefined) | undefined;
	readonly SecurityProfileName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TargetArns?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Thing extends CfnResource<ThingComponentInputs> implements ThingComponentOutputs {
	constructor(entity: ADKEntity, options: ThingComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::Thing", options);
	}
}
export interface ThingComponentOutputs {}
export interface ThingComponentInputs {
	readonly AttributePayload?: (AttributePayload | undefined) | undefined;
	readonly ThingName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ThingPrincipalAttachment
	extends CfnResource<ThingPrincipalAttachmentComponentInputs>
	implements ThingPrincipalAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: ThingPrincipalAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::ThingPrincipalAttachment", options);
	}
}
export interface ThingPrincipalAttachmentComponentOutputs {}
export interface ThingPrincipalAttachmentComponentInputs {
	readonly Principal: string;
	readonly ThingName: string;
	readonly LogicalId: string;
}
export class TopicRule extends CfnResource<TopicRuleComponentInputs> implements TopicRuleComponentOutputs {
	constructor(entity: ADKEntity, options: TopicRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::TopicRule", options);
	}
	public readonly Arn: string;
}
export interface TopicRuleComponentOutputs {
	readonly Arn: string;
}
export interface TopicRuleComponentInputs {
	readonly TopicRulePayload: TopicRulePayload;
	readonly RuleName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class TopicRuleDestination
	extends CfnResource<TopicRuleDestinationComponentInputs>
	implements TopicRuleDestinationComponentOutputs
{
	constructor(entity: ADKEntity, options: TopicRuleDestinationComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT::TopicRuleDestination", options);
	}
	public readonly Arn: string;
	public readonly StatusReason: string;
}
export interface TopicRuleDestinationComponentOutputs {
	readonly Arn: string;
	readonly StatusReason: string;
}
export interface TopicRuleDestinationComponentInputs {
	readonly HttpUrlProperties?: (HttpUrlDestinationSummary | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly VpcProperties?: (VpcDestinationProperties | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AuditCheckConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface AuditCheckConfigurations {
	readonly AuthenticatedCognitoRoleOverlyPermissiveCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly CaCertificateExpiringCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly CaCertificateKeyQualityCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly ConflictingClientIdsCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly DeviceCertificateExpiringCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly DeviceCertificateKeyQualityCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly DeviceCertificateSharedCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly IntermediateCaRevokedForActiveDeviceCertificatesCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly IoTPolicyPotentialMisConfigurationCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly IotPolicyOverlyPermissiveCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly IotRoleAliasAllowsAccessToUnusedServicesCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly IotRoleAliasOverlyPermissiveCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly LoggingDisabledCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly RevokedCaCertificateStillActiveCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly RevokedDeviceCertificateStillActiveCheck?: (AuditCheckConfiguration | undefined) | undefined;
	readonly UnauthenticatedCognitoRoleOverlyPermissiveCheck?: (AuditCheckConfiguration | undefined) | undefined;
}
export interface AuditNotificationTarget {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly TargetArn?: (string | undefined) | undefined;
}
export interface AuditNotificationTargetConfigurations {
	readonly Sns?: (AuditNotificationTarget | undefined) | undefined;
}
export interface RegistrationConfig {
	readonly RoleArn?: (string | undefined) | undefined;
	readonly TemplateBody?: (string | undefined) | undefined;
	readonly TemplateName?: (string | undefined) | undefined;
}
export interface AuthorizerConfig {
	readonly AllowAuthorizerOverride?: (boolean | undefined) | undefined;
	readonly DefaultAuthorizerName?: (string | undefined) | undefined;
}
export interface ServerCertificateSummary {
	readonly ServerCertificateArn?: (string | undefined) | undefined;
	readonly ServerCertificateStatus?: (string | undefined) | undefined;
	readonly ServerCertificateStatusDetail?: (string | undefined) | undefined;
}
export interface AggregationType {
	readonly Name: string;
	readonly Values: string[];
}
export interface AbortConfig {
	readonly CriteriaList: AbortCriteria[];
}
export interface AbortCriteria {
	readonly Action: string;
	readonly FailureType: string;
	readonly MinNumberOfExecutedThings: number;
	readonly ThresholdPercentage: number;
}
export interface ExponentialRolloutRate {
	readonly BaseRatePerMinute: number;
	readonly IncrementFactor: number;
	readonly RateIncreaseCriteria: RateIncreaseCriteria;
}
export interface JobExecutionsRolloutConfig {
	readonly ExponentialRolloutRate?: (ExponentialRolloutRate | undefined) | undefined;
	readonly MaximumPerMinute?: (number | undefined) | undefined;
}
export interface PresignedUrlConfig {
	readonly ExpiresInSec?: (number | undefined) | undefined;
	readonly RoleArn: string;
}
export interface RateIncreaseCriteria {
	readonly NumberOfNotifiedThings?: (number | undefined) | undefined;
	readonly NumberOfSucceededThings?: (number | undefined) | undefined;
}
export interface TimeoutConfig {
	readonly InProgressTimeoutInMinutes: number;
}
export interface ActionParams {
	readonly AddThingsToThingGroupParams?: (AddThingsToThingGroupParams | undefined) | undefined;
	readonly EnableIoTLoggingParams?: (EnableIoTLoggingParams | undefined) | undefined;
	readonly PublishFindingToSnsParams?: (PublishFindingToSnsParams | undefined) | undefined;
	readonly ReplaceDefaultPolicyVersionParams?: (ReplaceDefaultPolicyVersionParams | undefined) | undefined;
	readonly UpdateCACertificateParams?: (UpdateCACertificateParams | undefined) | undefined;
	readonly UpdateDeviceCertificateParams?: (UpdateDeviceCertificateParams | undefined) | undefined;
}
export interface AddThingsToThingGroupParams {
	readonly OverrideDynamicGroups?: (boolean | undefined) | undefined;
	readonly ThingGroupNames: string[];
}
export interface EnableIoTLoggingParams {
	readonly LogLevel: string;
	readonly RoleArnForLogging: string;
}
export interface PublishFindingToSnsParams {
	readonly TopicArn: string;
}
export interface ReplaceDefaultPolicyVersionParams {
	readonly TemplateName: string;
}
export interface UpdateCACertificateParams {
	readonly Action: string;
}
export interface UpdateDeviceCertificateParams {
	readonly Action: string;
}
export interface ProvisioningHook {
	readonly PayloadVersion?: (string | undefined) | undefined;
	readonly TargetArn?: (string | undefined) | undefined;
}
export interface AlertTarget {
	readonly AlertTargetArn: string;
	readonly RoleArn: string;
}
export interface Behavior {
	readonly Criteria?: (BehaviorCriteria | undefined) | undefined;
	readonly Metric?: (string | undefined) | undefined;
	readonly MetricDimension?: (MetricDimension | undefined) | undefined;
	readonly Name: string;
	readonly SuppressAlerts?: (boolean | undefined) | undefined;
}
export interface BehaviorCriteria {
	readonly ComparisonOperator?: (string | undefined) | undefined;
	readonly ConsecutiveDatapointsToAlarm?: (number | undefined) | undefined;
	readonly ConsecutiveDatapointsToClear?: (number | undefined) | undefined;
	readonly DurationSeconds?: (number | undefined) | undefined;
	readonly MlDetectionConfig?: (MachineLearningDetectionConfig | undefined) | undefined;
	readonly StatisticalThreshold?: (StatisticalThreshold | undefined) | undefined;
	readonly Value?: (MetricValue | undefined) | undefined;
}
export interface MachineLearningDetectionConfig {
	readonly ConfidenceLevel?: (string | undefined) | undefined;
}
export interface MetricDimension {
	readonly DimensionName: string;
	readonly Operator?: (string | undefined) | undefined;
}
export interface MetricToRetain {
	readonly Metric: string;
	readonly MetricDimension?: (MetricDimension | undefined) | undefined;
}
export interface MetricValue {
	readonly Cidrs?: (string[] | undefined) | undefined;
	readonly Count?: (string | undefined) | undefined;
	readonly Number?: (number | undefined) | undefined;
	readonly Numbers?: (number[] | undefined) | undefined;
	readonly Ports?: (number[] | undefined) | undefined;
	readonly Strings?: (string[] | undefined) | undefined;
}
export interface StatisticalThreshold {
	readonly Statistic?: (string | undefined) | undefined;
}
export interface AttributePayload {
	readonly Attributes?: ({ [key: string]: string } | undefined) | undefined;
}
export interface Action {
	readonly CloudwatchAlarm?: (CloudwatchAlarmAction | undefined) | undefined;
	readonly CloudwatchLogs?: (CloudwatchLogsAction | undefined) | undefined;
	readonly CloudwatchMetric?: (CloudwatchMetricAction | undefined) | undefined;
	readonly DynamoDB?: (DynamoDBAction | undefined) | undefined;
	readonly DynamoDBv2?: (DynamoDBv2Action | undefined) | undefined;
	readonly Elasticsearch?: (ElasticsearchAction | undefined) | undefined;
	readonly Firehose?: (FirehoseAction | undefined) | undefined;
	readonly Http?: (HttpAction | undefined) | undefined;
	readonly IotAnalytics?: (IotAnalyticsAction | undefined) | undefined;
	readonly IotEvents?: (IotEventsAction | undefined) | undefined;
	readonly IotSiteWise?: (IotSiteWiseAction | undefined) | undefined;
	readonly Kafka?: (KafkaAction | undefined) | undefined;
	readonly Kinesis?: (KinesisAction | undefined) | undefined;
	readonly Lambda?: (LambdaAction | undefined) | undefined;
	readonly Location?: (LocationAction | undefined) | undefined;
	readonly OpenSearch?: (OpenSearchAction | undefined) | undefined;
	readonly Republish?: (RepublishAction | undefined) | undefined;
	readonly S3?: (S3Action | undefined) | undefined;
	readonly Sns?: (SnsAction | undefined) | undefined;
	readonly Sqs?: (SqsAction | undefined) | undefined;
	readonly StepFunctions?: (StepFunctionsAction | undefined) | undefined;
	readonly Timestream?: (TimestreamAction | undefined) | undefined;
}
export interface AssetPropertyTimestamp {
	readonly OffsetInNanos?: (string | undefined) | undefined;
	readonly TimeInSeconds: string;
}
export interface AssetPropertyValue {
	readonly Quality?: (string | undefined) | undefined;
	readonly Timestamp: AssetPropertyTimestamp;
	readonly Value: AssetPropertyVariant;
}
export interface AssetPropertyVariant {
	readonly BooleanValue?: (string | undefined) | undefined;
	readonly DoubleValue?: (string | undefined) | undefined;
	readonly IntegerValue?: (string | undefined) | undefined;
	readonly StringValue?: (string | undefined) | undefined;
}
export interface CloudwatchAlarmAction {
	readonly AlarmName: string;
	readonly RoleArn: string;
	readonly StateReason: string;
	readonly StateValue: string;
}
export interface CloudwatchLogsAction {
	readonly LogGroupName: string;
	readonly RoleArn: string;
}
export interface CloudwatchMetricAction {
	readonly MetricName: string;
	readonly MetricNamespace: string;
	readonly MetricTimestamp?: (string | undefined) | undefined;
	readonly MetricUnit: string;
	readonly MetricValue: string;
	readonly RoleArn: string;
}
export interface DynamoDBAction {
	readonly HashKeyField: string;
	readonly HashKeyType?: (string | undefined) | undefined;
	readonly HashKeyValue: string;
	readonly PayloadField?: (string | undefined) | undefined;
	readonly RangeKeyField?: (string | undefined) | undefined;
	readonly RangeKeyType?: (string | undefined) | undefined;
	readonly RangeKeyValue?: (string | undefined) | undefined;
	readonly RoleArn: string;
	readonly TableName: string;
}
export interface DynamoDBv2Action {
	readonly PutItem?: (PutItemInput | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
}
export interface ElasticsearchAction {
	readonly Endpoint: string;
	readonly Id: string;
	readonly Index: string;
	readonly RoleArn: string;
	readonly Type: string;
}
export interface FirehoseAction {
	readonly BatchMode?: (boolean | undefined) | undefined;
	readonly DeliveryStreamName: string;
	readonly RoleArn: string;
	readonly Separator?: (string | undefined) | undefined;
}
export interface HttpAction {
	readonly Auth?: (HttpAuthorization | undefined) | undefined;
	readonly ConfirmationUrl?: (string | undefined) | undefined;
	readonly Headers?: (HttpActionHeader[] | undefined) | undefined;
	readonly Url: string;
}
export interface HttpActionHeader {
	readonly Key: string;
	readonly Value: string;
}
export interface HttpAuthorization {
	readonly Sigv4?: (SigV4Authorization | undefined) | undefined;
}
export interface IotAnalyticsAction {
	readonly BatchMode?: (boolean | undefined) | undefined;
	readonly ChannelName: string;
	readonly RoleArn: string;
}
export interface IotEventsAction {
	readonly BatchMode?: (boolean | undefined) | undefined;
	readonly InputName: string;
	readonly MessageId?: (string | undefined) | undefined;
	readonly RoleArn: string;
}
export interface IotSiteWiseAction {
	readonly PutAssetPropertyValueEntries: PutAssetPropertyValueEntry[];
	readonly RoleArn: string;
}
export interface KafkaAction {
	readonly ClientProperties: { [key: string]: string };
	readonly DestinationArn: string;
	readonly Key?: (string | undefined) | undefined;
	readonly Partition?: (string | undefined) | undefined;
	readonly Topic: string;
}
export interface KinesisAction {
	readonly PartitionKey?: (string | undefined) | undefined;
	readonly RoleArn: string;
	readonly StreamName: string;
}
export interface LambdaAction {
	readonly FunctionArn?: (string | undefined) | undefined;
}
export interface LocationAction {
	readonly DeviceId: string;
	readonly Latitude: string;
	readonly Longitude: string;
	readonly RoleArn: string;
	readonly Timestamp?: (Date | undefined) | undefined;
	readonly TrackerName: string;
}
export interface OpenSearchAction {
	readonly Endpoint: string;
	readonly Id: string;
	readonly Index: string;
	readonly RoleArn: string;
	readonly Type: string;
}
export interface PutAssetPropertyValueEntry {
	readonly AssetId?: (string | undefined) | undefined;
	readonly EntryId?: (string | undefined) | undefined;
	readonly PropertyAlias?: (string | undefined) | undefined;
	readonly PropertyId?: (string | undefined) | undefined;
	readonly PropertyValues: AssetPropertyValue[];
}
export interface PutItemInput {
	readonly TableName: string;
}
export interface RepublishAction {
	readonly Headers?: (RepublishActionHeaders | undefined) | undefined;
	readonly Qos?: (number | undefined) | undefined;
	readonly RoleArn: string;
	readonly Topic: string;
}
export interface RepublishActionHeaders {
	readonly ContentType?: (string | undefined) | undefined;
	readonly CorrelationData?: (string | undefined) | undefined;
	readonly MessageExpiry?: (string | undefined) | undefined;
	readonly PayloadFormatIndicator?: (string | undefined) | undefined;
	readonly ResponseTopic?: (string | undefined) | undefined;
	readonly UserProperties?: (User[] | undefined) | undefined;
}
export interface S3Action {
	readonly BucketName: string;
	readonly CannedAcl?: (string | undefined) | undefined;
	readonly Key: string;
	readonly RoleArn: string;
}
export interface SigV4Authorization {
	readonly RoleArn: string;
	readonly ServiceName: string;
	readonly SigningRegion: string;
}
export interface SnsAction {
	readonly MessageFormat?: (string | undefined) | undefined;
	readonly RoleArn: string;
	readonly TargetArn: string;
}
export interface SqsAction {
	readonly QueueUrl: string;
	readonly RoleArn: string;
	readonly UseBase64?: (boolean | undefined) | undefined;
}
export interface StepFunctionsAction {
	readonly ExecutionNamePrefix?: (string | undefined) | undefined;
	readonly RoleArn: string;
	readonly StateMachineName: string;
}
export interface Timestamp {
	readonly Unit?: (string | undefined) | undefined;
	readonly Value: string;
}
export interface TimestreamAction {
	readonly DatabaseName: string;
	readonly Dimensions: TimestreamDimension[];
	readonly RoleArn: string;
	readonly TableName: string;
	readonly Timestamp?: (TimestreamTimestamp | undefined) | undefined;
}
export interface TimestreamDimension {
	readonly Name: string;
	readonly Value: string;
}
export interface TimestreamTimestamp {
	readonly Unit: string;
	readonly Value: string;
}
export interface TopicRulePayload {
	readonly Actions: Action[];
	readonly AwsIotSqlVersion?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ErrorAction?: (Action | undefined) | undefined;
	readonly RuleDisabled?: (boolean | undefined) | undefined;
	readonly Sql: string;
}
export interface User {
	readonly Key: string;
	readonly Value: string;
}
export interface HttpUrlDestinationSummary {
	readonly ConfirmationUrl?: (string | undefined) | undefined;
}
export interface VpcDestinationProperties {
	readonly RoleArn?: (string | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
}
export default {
	AccountAuditConfiguration: AccountAuditConfiguration,
	Authorizer: Authorizer,
	CACertificate: CACertificate,
	Certificate: Certificate,
	CustomMetric: CustomMetric,
	Dimension: Dimension,
	DomainConfiguration: DomainConfiguration,
	FleetMetric: FleetMetric,
	JobTemplate: JobTemplate,
	Logging: Logging,
	MitigationAction: MitigationAction,
	Policy: Policy,
	PolicyPrincipalAttachment: PolicyPrincipalAttachment,
	ProvisioningTemplate: ProvisioningTemplate,
	ResourceSpecificLogging: ResourceSpecificLogging,
	RoleAlias: RoleAlias,
	ScheduledAudit: ScheduledAudit,
	SecurityProfile: SecurityProfile,
	Thing: Thing,
	ThingPrincipalAttachment: ThingPrincipalAttachment,
	TopicRule: TopicRule,
	TopicRuleDestination: TopicRuleDestination,
};
