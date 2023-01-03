import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AggregationAuthorization
	extends CfnResource<AggregationAuthorizationComponentInputs>
	implements AggregationAuthorizationComponentOutputs
{
	constructor(entity: ADKEntity, options: AggregationAuthorizationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::AggregationAuthorization", options);
	}
	public readonly AggregationAuthorizationArn: string;
}
export interface AggregationAuthorizationComponentOutputs {
	readonly AggregationAuthorizationArn: string;
}
export interface AggregationAuthorizationComponentInputs {
	readonly AuthorizedAccountId: string;
	readonly AuthorizedAwsRegion: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ConfigRule extends CfnResource<ConfigRuleComponentInputs> implements ConfigRuleComponentOutputs {
	constructor(entity: ADKEntity, options: ConfigRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::ConfigRule", options);
	}
	public readonly Arn: string;
	public readonly ComplianceType: string;
	public readonly ConfigRuleId: string;
}
export interface ConfigRuleComponentOutputs {
	readonly Arn: string;
	readonly ComplianceType: string;
	readonly ConfigRuleId: string;
}
export interface ConfigRuleComponentInputs {
	readonly Source: Source;
	readonly ConfigRuleName?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly InputParameters?: (any | undefined) | undefined;
	readonly MaximumExecutionFrequency?: (string | undefined) | undefined;
	readonly Scope?: (Scope | undefined) | undefined;
	readonly LogicalId: string;
}
export class ConfigurationAggregator
	extends CfnResource<ConfigurationAggregatorComponentInputs>
	implements ConfigurationAggregatorComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationAggregatorComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::ConfigurationAggregator", options);
	}
	public readonly ConfigurationAggregatorArn: string;
}
export interface ConfigurationAggregatorComponentOutputs {
	readonly ConfigurationAggregatorArn: string;
}
export interface ConfigurationAggregatorComponentInputs {
	readonly AccountAggregationSources?: (AccountAggregationSource[] | undefined) | undefined;
	readonly ConfigurationAggregatorName?: (string | undefined) | undefined;
	readonly OrganizationAggregationSource?: (OrganizationAggregationSource | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ConfigurationRecorder
	extends CfnResource<ConfigurationRecorderComponentInputs>
	implements ConfigurationRecorderComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationRecorderComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::ConfigurationRecorder", options);
	}
}
export interface ConfigurationRecorderComponentOutputs {}
export interface ConfigurationRecorderComponentInputs {
	readonly RoleARN: string;
	readonly Name?: (string | undefined) | undefined;
	readonly RecordingGroup?: (RecordingGroup | undefined) | undefined;
	readonly LogicalId: string;
}
export class ConformancePack
	extends CfnResource<ConformancePackComponentInputs>
	implements ConformancePackComponentOutputs
{
	constructor(entity: ADKEntity, options: ConformancePackComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::ConformancePack", options);
	}
}
export interface ConformancePackComponentOutputs {}
export interface ConformancePackComponentInputs {
	readonly ConformancePackName: string;
	readonly ConformancePackInputParameters?: (ConformancePackInputParameter[] | undefined) | undefined;
	readonly DeliveryS3Bucket?: (string | undefined) | undefined;
	readonly DeliveryS3KeyPrefix?: (string | undefined) | undefined;
	readonly TemplateBody?: (string | undefined) | undefined;
	readonly TemplateS3Uri?: (string | undefined) | undefined;
	readonly TemplateSSMDocumentDetails?: (TemplateSSMDocumentDetails | undefined) | undefined;
	readonly LogicalId: string;
}
export class DeliveryChannel
	extends CfnResource<DeliveryChannelComponentInputs>
	implements DeliveryChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: DeliveryChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::DeliveryChannel", options);
	}
}
export interface DeliveryChannelComponentOutputs {}
export interface DeliveryChannelComponentInputs {
	readonly S3BucketName: string;
	readonly ConfigSnapshotDeliveryProperties?: (ConfigSnapshotDeliveryProperties | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly S3KeyPrefix?: (string | undefined) | undefined;
	readonly S3KmsKeyArn?: (string | undefined) | undefined;
	readonly SnsTopicARN?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class OrganizationConfigRule
	extends CfnResource<OrganizationConfigRuleComponentInputs>
	implements OrganizationConfigRuleComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationConfigRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::OrganizationConfigRule", options);
	}
}
export interface OrganizationConfigRuleComponentOutputs {}
export interface OrganizationConfigRuleComponentInputs {
	readonly OrganizationConfigRuleName: string;
	readonly ExcludedAccounts?: (string[] | undefined) | undefined;
	readonly OrganizationCustomCodeRuleMetadata?: (OrganizationCustomCodeRuleMetadata | undefined) | undefined;
	readonly OrganizationCustomRuleMetadata?: (OrganizationCustomRuleMetadata | undefined) | undefined;
	readonly OrganizationManagedRuleMetadata?: (OrganizationManagedRuleMetadata | undefined) | undefined;
	readonly LogicalId: string;
}
export class OrganizationConformancePack
	extends CfnResource<OrganizationConformancePackComponentInputs>
	implements OrganizationConformancePackComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationConformancePackComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::OrganizationConformancePack", options);
	}
}
export interface OrganizationConformancePackComponentOutputs {}
export interface OrganizationConformancePackComponentInputs {
	readonly OrganizationConformancePackName: string;
	readonly ConformancePackInputParameters?: (ConformancePackInputParameter[] | undefined) | undefined;
	readonly DeliveryS3Bucket?: (string | undefined) | undefined;
	readonly DeliveryS3KeyPrefix?: (string | undefined) | undefined;
	readonly ExcludedAccounts?: (string[] | undefined) | undefined;
	readonly TemplateBody?: (string | undefined) | undefined;
	readonly TemplateS3Uri?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class RemediationConfiguration
	extends CfnResource<RemediationConfigurationComponentInputs>
	implements RemediationConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: RemediationConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::RemediationConfiguration", options);
	}
}
export interface RemediationConfigurationComponentOutputs {}
export interface RemediationConfigurationComponentInputs {
	readonly ConfigRuleName: string;
	readonly TargetId: string;
	readonly TargetType: string;
	readonly Automatic?: (boolean | undefined) | undefined;
	readonly ExecutionControls?: (ExecutionControls | undefined) | undefined;
	readonly MaximumAutomaticAttempts?: (number | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly ResourceType?: (string | undefined) | undefined;
	readonly RetryAttemptSeconds?: (number | undefined) | undefined;
	readonly TargetVersion?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class StoredQuery extends CfnResource<StoredQueryComponentInputs> implements StoredQueryComponentOutputs {
	constructor(entity: ADKEntity, options: StoredQueryComponentInputs) {
		super(entity, options.LogicalId, "AWS::Config::StoredQuery", options);
	}
	public readonly QueryArn: string;
	public readonly QueryId: string;
}
export interface StoredQueryComponentOutputs {
	readonly QueryArn: string;
	readonly QueryId: string;
}
export interface StoredQueryComponentInputs {
	readonly QueryExpression: string;
	readonly QueryName: string;
	readonly QueryDescription?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CustomPolicyDetails {
	readonly EnableDebugLogDelivery?: (boolean | undefined) | undefined;
	readonly PolicyRuntime?: (string | undefined) | undefined;
	readonly PolicyText?: (string | undefined) | undefined;
}
export interface Scope {
	readonly ComplianceResourceId?: (string | undefined) | undefined;
	readonly ComplianceResourceTypes?: (string[] | undefined) | undefined;
	readonly TagKey?: (string | undefined) | undefined;
	readonly TagValue?: (string | undefined) | undefined;
}
export interface Source {
	readonly CustomPolicyDetails?: (CustomPolicyDetails | undefined) | undefined;
	readonly Owner: string;
	readonly SourceDetails?: (SourceDetail[] | undefined) | undefined;
	readonly SourceIdentifier?: (string | undefined) | undefined;
}
export interface SourceDetail {
	readonly EventSource: string;
	readonly MaximumExecutionFrequency?: (string | undefined) | undefined;
	readonly MessageType: string;
}
export interface AccountAggregationSource {
	readonly AccountIds: string[];
	readonly AllAwsRegions?: (boolean | undefined) | undefined;
	readonly AwsRegions?: (string[] | undefined) | undefined;
}
export interface OrganizationAggregationSource {
	readonly AllAwsRegions?: (boolean | undefined) | undefined;
	readonly AwsRegions?: (string[] | undefined) | undefined;
	readonly RoleArn: string;
}
export interface RecordingGroup {
	readonly AllSupported?: (boolean | undefined) | undefined;
	readonly IncludeGlobalResourceTypes?: (boolean | undefined) | undefined;
	readonly ResourceTypes?: (string[] | undefined) | undefined;
}
export interface ConformancePackInputParameter {
	readonly ParameterName: string;
	readonly ParameterValue: string;
}
export interface TemplateSSMDocumentDetails {
	readonly DocumentName?: (string | undefined) | undefined;
	readonly DocumentVersion?: (string | undefined) | undefined;
}
export interface ConfigSnapshotDeliveryProperties {
	readonly DeliveryFrequency?: (string | undefined) | undefined;
}
export interface OrganizationCustomCodeRuleMetadata {
	readonly CodeText: string;
	readonly DebugLogDeliveryAccounts?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly InputParameters?: (string | undefined) | undefined;
	readonly MaximumExecutionFrequency?: (string | undefined) | undefined;
	readonly OrganizationConfigRuleTriggerTypes?: (string[] | undefined) | undefined;
	readonly ResourceIdScope?: (string | undefined) | undefined;
	readonly ResourceTypesScope?: (string[] | undefined) | undefined;
	readonly Runtime: string;
	readonly TagKeyScope?: (string | undefined) | undefined;
	readonly TagValueScope?: (string | undefined) | undefined;
}
export interface OrganizationCustomRuleMetadata {
	readonly Description?: (string | undefined) | undefined;
	readonly InputParameters?: (string | undefined) | undefined;
	readonly LambdaFunctionArn: string;
	readonly MaximumExecutionFrequency?: (string | undefined) | undefined;
	readonly OrganizationConfigRuleTriggerTypes: string[];
	readonly ResourceIdScope?: (string | undefined) | undefined;
	readonly ResourceTypesScope?: (string[] | undefined) | undefined;
	readonly TagKeyScope?: (string | undefined) | undefined;
	readonly TagValueScope?: (string | undefined) | undefined;
}
export interface OrganizationManagedRuleMetadata {
	readonly Description?: (string | undefined) | undefined;
	readonly InputParameters?: (string | undefined) | undefined;
	readonly MaximumExecutionFrequency?: (string | undefined) | undefined;
	readonly ResourceIdScope?: (string | undefined) | undefined;
	readonly ResourceTypesScope?: (string[] | undefined) | undefined;
	readonly RuleIdentifier: string;
	readonly TagKeyScope?: (string | undefined) | undefined;
	readonly TagValueScope?: (string | undefined) | undefined;
}
export interface ExecutionControls {
	readonly SsmControls?: (SsmControls | undefined) | undefined;
}
export interface RemediationParameterValue {
	readonly ResourceValue?: (ResourceValue | undefined) | undefined;
	readonly StaticValue?: (StaticValue | undefined) | undefined;
}
export interface ResourceValue {
	readonly Value?: (string | undefined) | undefined;
}
export interface SsmControls {
	readonly ConcurrentExecutionRatePercentage?: (number | undefined) | undefined;
	readonly ErrorPercentage?: (number | undefined) | undefined;
}
export interface StaticValue {
	readonly Values?: (string[] | undefined) | undefined;
}
export default {
	AggregationAuthorization: AggregationAuthorization,
	ConfigRule: ConfigRule,
	ConfigurationAggregator: ConfigurationAggregator,
	ConfigurationRecorder: ConfigurationRecorder,
	ConformancePack: ConformancePack,
	DeliveryChannel: DeliveryChannel,
	OrganizationConfigRule: OrganizationConfigRule,
	OrganizationConformancePack: OrganizationConformancePack,
	RemediationConfiguration: RemediationConfiguration,
	StoredQuery: StoredQuery,
};
