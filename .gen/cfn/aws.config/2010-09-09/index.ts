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
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ConfigRuleName?: string | undefined;
	readonly Description?: string | undefined;
	readonly InputParameters?: any | undefined;
	readonly MaximumExecutionFrequency?: string | undefined;
	readonly Scope?: Scope | undefined;
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
	readonly AccountAggregationSources?: AccountAggregationSource[] | undefined;
	readonly ConfigurationAggregatorName?: string | undefined;
	readonly OrganizationAggregationSource?: OrganizationAggregationSource | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Name?: string | undefined;
	readonly RecordingGroup?: RecordingGroup | undefined;
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
	readonly ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;
	readonly DeliveryS3Bucket?: string | undefined;
	readonly DeliveryS3KeyPrefix?: string | undefined;
	readonly TemplateBody?: string | undefined;
	readonly TemplateS3Uri?: string | undefined;
	readonly TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails | undefined;
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
	readonly ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties | undefined;
	readonly Name?: string | undefined;
	readonly S3KeyPrefix?: string | undefined;
	readonly S3KmsKeyArn?: string | undefined;
	readonly SnsTopicARN?: string | undefined;
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
	readonly ExcludedAccounts?: string[] | undefined;
	readonly OrganizationCustomCodeRuleMetadata?: OrganizationCustomCodeRuleMetadata | undefined;
	readonly OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata | undefined;
	readonly OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata | undefined;
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
	readonly ConformancePackInputParameters?: ConformancePackInputParameter[] | undefined;
	readonly DeliveryS3Bucket?: string | undefined;
	readonly DeliveryS3KeyPrefix?: string | undefined;
	readonly ExcludedAccounts?: string[] | undefined;
	readonly TemplateBody?: string | undefined;
	readonly TemplateS3Uri?: string | undefined;
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
	readonly Automatic?: boolean | undefined;
	readonly ExecutionControls?: ExecutionControls | undefined;
	readonly MaximumAutomaticAttempts?: number | undefined;
	readonly Parameters?: any | undefined;
	readonly ResourceType?: string | undefined;
	readonly RetryAttemptSeconds?: number | undefined;
	readonly TargetVersion?: string | undefined;
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
	readonly QueryDescription?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface CustomPolicyDetails {
	readonly EnableDebugLogDelivery?: boolean | undefined;
	readonly PolicyRuntime?: string | undefined;
	readonly PolicyText?: string | undefined;
}
export interface Scope {
	readonly ComplianceResourceId?: string | undefined;
	readonly ComplianceResourceTypes?: string[] | undefined;
	readonly TagKey?: string | undefined;
	readonly TagValue?: string | undefined;
}
export interface Source {
	readonly CustomPolicyDetails?: CustomPolicyDetails | undefined;
	readonly Owner: string;
	readonly SourceDetails?: SourceDetail[] | undefined;
	readonly SourceIdentifier?: string | undefined;
}
export interface SourceDetail {
	readonly EventSource: string;
	readonly MaximumExecutionFrequency?: string | undefined;
	readonly MessageType: string;
}
export interface AccountAggregationSource {
	readonly AccountIds: string[];
	readonly AllAwsRegions?: boolean | undefined;
	readonly AwsRegions?: string[] | undefined;
}
export interface OrganizationAggregationSource {
	readonly AllAwsRegions?: boolean | undefined;
	readonly AwsRegions?: string[] | undefined;
	readonly RoleArn: string;
}
export interface RecordingGroup {
	readonly AllSupported?: boolean | undefined;
	readonly IncludeGlobalResourceTypes?: boolean | undefined;
	readonly ResourceTypes?: string[] | undefined;
}
export interface ConformancePackInputParameter {
	readonly ParameterName: string;
	readonly ParameterValue: string;
}
export interface TemplateSSMDocumentDetails {
	readonly DocumentName?: string | undefined;
	readonly DocumentVersion?: string | undefined;
}
export interface ConfigSnapshotDeliveryProperties {
	readonly DeliveryFrequency?: string | undefined;
}
export interface OrganizationCustomCodeRuleMetadata {
	readonly CodeText: string;
	readonly DebugLogDeliveryAccounts?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly InputParameters?: string | undefined;
	readonly MaximumExecutionFrequency?: string | undefined;
	readonly OrganizationConfigRuleTriggerTypes?: string[] | undefined;
	readonly ResourceIdScope?: string | undefined;
	readonly ResourceTypesScope?: string[] | undefined;
	readonly Runtime: string;
	readonly TagKeyScope?: string | undefined;
	readonly TagValueScope?: string | undefined;
}
export interface OrganizationCustomRuleMetadata {
	readonly Description?: string | undefined;
	readonly InputParameters?: string | undefined;
	readonly LambdaFunctionArn: string;
	readonly MaximumExecutionFrequency?: string | undefined;
	readonly OrganizationConfigRuleTriggerTypes: string[];
	readonly ResourceIdScope?: string | undefined;
	readonly ResourceTypesScope?: string[] | undefined;
	readonly TagKeyScope?: string | undefined;
	readonly TagValueScope?: string | undefined;
}
export interface OrganizationManagedRuleMetadata {
	readonly Description?: string | undefined;
	readonly InputParameters?: string | undefined;
	readonly MaximumExecutionFrequency?: string | undefined;
	readonly ResourceIdScope?: string | undefined;
	readonly ResourceTypesScope?: string[] | undefined;
	readonly RuleIdentifier: string;
	readonly TagKeyScope?: string | undefined;
	readonly TagValueScope?: string | undefined;
}
export interface ExecutionControls {
	readonly SsmControls?: SsmControls | undefined;
}
export interface RemediationParameterValue {
	readonly ResourceValue?: ResourceValue | undefined;
	readonly StaticValue?: StaticValue | undefined;
}
export interface ResourceValue {
	readonly Value?: string | undefined;
}
export interface SsmControls {
	readonly ConcurrentExecutionRatePercentage?: number | undefined;
	readonly ErrorPercentage?: number | undefined;
}
export interface StaticValue {
	readonly Values?: string[] | undefined;
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
