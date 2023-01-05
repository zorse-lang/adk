import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Connector extends CfnResource<ConnectorComponentInputs> implements ConnectorComponentOutputs {
	constructor(entity: ADKEntity, options: ConnectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppFlow::Connector", options);
	}
	public readonly ConnectorArn: string;
}
export interface ConnectorComponentOutputs {
	readonly ConnectorArn: string;
}
export interface ConnectorComponentInputs {
	readonly ConnectorProvisioningConfig: ConnectorProvisioningConfig;
	readonly ConnectorProvisioningType: string;
	readonly ConnectorLabel?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ConnectorProfile
	extends CfnResource<ConnectorProfileComponentInputs>
	implements ConnectorProfileComponentOutputs
{
	constructor(entity: ADKEntity, options: ConnectorProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppFlow::ConnectorProfile", options);
	}
	public readonly ConnectorProfileArn: string;
	public readonly CredentialsArn: string;
}
export interface ConnectorProfileComponentOutputs {
	readonly ConnectorProfileArn: string;
	readonly CredentialsArn: string;
}
export interface ConnectorProfileComponentInputs {
	readonly ConnectionMode: string;
	readonly ConnectorProfileName: string;
	readonly ConnectorType: string;
	readonly ConnectorLabel?: string | undefined;
	readonly ConnectorProfileConfig?: ConnectorProfileConfig | undefined;
	readonly KMSArn?: string | undefined;
	readonly LogicalId: string;
}
export class Flow extends CfnResource<FlowComponentInputs> implements FlowComponentOutputs {
	constructor(entity: ADKEntity, options: FlowComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppFlow::Flow", options);
	}
	public readonly FlowArn: string;
}
export interface FlowComponentOutputs {
	readonly FlowArn: string;
}
export interface FlowComponentInputs {
	readonly DestinationFlowConfigList: DestinationFlowConfig[];
	readonly FlowName: string;
	readonly SourceFlowConfig: SourceFlowConfig;
	readonly Tasks: Task[];
	readonly TriggerConfig: TriggerConfig;
	readonly Description?: string | undefined;
	readonly KMSArn?: string | undefined;
	readonly MetadataCatalogConfig?: MetadataCatalogConfig | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ConnectorProvisioningConfig {
	readonly Lambda?: LambdaConnectorProvisioningConfig | undefined;
}
export interface LambdaConnectorProvisioningConfig {
	readonly LambdaArn: string;
}
export interface AmplitudeConnectorProfileCredentials {
	readonly ApiKey: string;
	readonly SecretKey: string;
}
export interface ApiKeyCredentials {
	readonly ApiKey: string;
	readonly ApiSecretKey?: string | undefined;
}
export interface BasicAuthCredentials {
	readonly Password: string;
	readonly Username: string;
}
export interface ConnectorOAuthRequest {
	readonly AuthCode?: string | undefined;
	readonly RedirectUri?: string | undefined;
}
export interface ConnectorProfileConfig {
	readonly ConnectorProfileCredentials?: ConnectorProfileCredentials | undefined;
	readonly ConnectorProfileProperties?: ConnectorProfileProperties | undefined;
}
export interface ConnectorProfileCredentials {
	readonly Amplitude?: AmplitudeConnectorProfileCredentials | undefined;
	readonly CustomConnector?: CustomConnectorProfileCredentials | undefined;
	readonly Datadog?: DatadogConnectorProfileCredentials | undefined;
	readonly Dynatrace?: DynatraceConnectorProfileCredentials | undefined;
	readonly GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials | undefined;
	readonly InforNexus?: InforNexusConnectorProfileCredentials | undefined;
	readonly Marketo?: MarketoConnectorProfileCredentials | undefined;
	readonly Redshift?: RedshiftConnectorProfileCredentials | undefined;
	readonly SAPOData?: SAPODataConnectorProfileCredentials | undefined;
	readonly Salesforce?: SalesforceConnectorProfileCredentials | undefined;
	readonly ServiceNow?: ServiceNowConnectorProfileCredentials | undefined;
	readonly Singular?: SingularConnectorProfileCredentials | undefined;
	readonly Slack?: SlackConnectorProfileCredentials | undefined;
	readonly Snowflake?: SnowflakeConnectorProfileCredentials | undefined;
	readonly Trendmicro?: TrendmicroConnectorProfileCredentials | undefined;
	readonly Veeva?: VeevaConnectorProfileCredentials | undefined;
	readonly Zendesk?: ZendeskConnectorProfileCredentials | undefined;
}
export interface ConnectorProfileProperties {
	readonly CustomConnector?: CustomConnectorProfileProperties | undefined;
	readonly Datadog?: DatadogConnectorProfileProperties | undefined;
	readonly Dynatrace?: DynatraceConnectorProfileProperties | undefined;
	readonly InforNexus?: InforNexusConnectorProfileProperties | undefined;
	readonly Marketo?: MarketoConnectorProfileProperties | undefined;
	readonly Redshift?: RedshiftConnectorProfileProperties | undefined;
	readonly SAPOData?: SAPODataConnectorProfileProperties | undefined;
	readonly Salesforce?: SalesforceConnectorProfileProperties | undefined;
	readonly ServiceNow?: ServiceNowConnectorProfileProperties | undefined;
	readonly Slack?: SlackConnectorProfileProperties | undefined;
	readonly Snowflake?: SnowflakeConnectorProfileProperties | undefined;
	readonly Veeva?: VeevaConnectorProfileProperties | undefined;
	readonly Zendesk?: ZendeskConnectorProfileProperties | undefined;
}
export interface CustomAuthCredentials {
	readonly CredentialsMap?: { [key: string]: string } | undefined;
	readonly CustomAuthenticationType: string;
}
export interface CustomConnectorProfileCredentials {
	readonly ApiKey?: ApiKeyCredentials | undefined;
	readonly AuthenticationType: string;
	readonly Basic?: BasicAuthCredentials | undefined;
	readonly Custom?: CustomAuthCredentials | undefined;
	readonly Oauth2?: OAuth2Credentials | undefined;
}
export interface CustomConnectorProfileProperties {
	readonly OAuth2Properties?: OAuth2Properties | undefined;
	readonly ProfileProperties?: { [key: string]: string } | undefined;
}
export interface DatadogConnectorProfileCredentials {
	readonly ApiKey: string;
	readonly ApplicationKey: string;
}
export interface DatadogConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface DynatraceConnectorProfileCredentials {
	readonly ApiToken: string;
}
export interface DynatraceConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface GoogleAnalyticsConnectorProfileCredentials {
	readonly AccessToken?: string | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: ConnectorOAuthRequest | undefined;
	readonly RefreshToken?: string | undefined;
}
export interface InforNexusConnectorProfileCredentials {
	readonly AccessKeyId: string;
	readonly Datakey: string;
	readonly SecretAccessKey: string;
	readonly UserId: string;
}
export interface InforNexusConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface MarketoConnectorProfileCredentials {
	readonly AccessToken?: string | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: ConnectorOAuthRequest | undefined;
}
export interface MarketoConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface OAuth2Credentials {
	readonly AccessToken?: string | undefined;
	readonly ClientId?: string | undefined;
	readonly ClientSecret?: string | undefined;
	readonly OAuthRequest?: ConnectorOAuthRequest | undefined;
	readonly RefreshToken?: string | undefined;
}
export interface OAuth2Properties {
	readonly OAuth2GrantType?: string | undefined;
	readonly TokenUrl?: string | undefined;
	readonly TokenUrlCustomProperties?: { [key: string]: string } | undefined;
}
export interface OAuthCredentials {
	readonly AccessToken?: string | undefined;
	readonly ClientId?: string | undefined;
	readonly ClientSecret?: string | undefined;
	readonly ConnectorOAuthRequest?: ConnectorOAuthRequest | undefined;
	readonly RefreshToken?: string | undefined;
}
export interface OAuthProperties {
	readonly AuthCodeUrl?: string | undefined;
	readonly OAuthScopes?: string[] | undefined;
	readonly TokenUrl?: string | undefined;
}
export interface RedshiftConnectorProfileCredentials {
	readonly Password?: string | undefined;
	readonly Username?: string | undefined;
}
export interface RedshiftConnectorProfileProperties {
	readonly BucketName: string;
	readonly BucketPrefix?: string | undefined;
	readonly ClusterIdentifier?: string | undefined;
	readonly DataApiRoleArn?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly DatabaseUrl?: string | undefined;
	readonly IsRedshiftServerless?: boolean | undefined;
	readonly RoleArn: string;
	readonly WorkgroupName?: string | undefined;
}
export interface SAPODataConnectorProfileCredentials {
	readonly BasicAuthCredentials?: BasicAuthCredentials | undefined;
	readonly OAuthCredentials?: OAuthCredentials | undefined;
}
export interface SAPODataConnectorProfileProperties {
	readonly ApplicationHostUrl?: string | undefined;
	readonly ApplicationServicePath?: string | undefined;
	readonly ClientNumber?: string | undefined;
	readonly LogonLanguage?: string | undefined;
	readonly OAuthProperties?: OAuthProperties | undefined;
	readonly PortNumber?: number | undefined;
	readonly PrivateLinkServiceName?: string | undefined;
}
export interface SalesforceConnectorProfileCredentials {
	readonly AccessToken?: string | undefined;
	readonly ClientCredentialsArn?: string | undefined;
	readonly ConnectorOAuthRequest?: ConnectorOAuthRequest | undefined;
	readonly RefreshToken?: string | undefined;
}
export interface SalesforceConnectorProfileProperties {
	readonly InstanceUrl?: string | undefined;
	readonly isSandboxEnvironment?: boolean | undefined;
}
export interface ServiceNowConnectorProfileCredentials {
	readonly Password: string;
	readonly Username: string;
}
export interface ServiceNowConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface SingularConnectorProfileCredentials {
	readonly ApiKey: string;
}
export interface SlackConnectorProfileCredentials {
	readonly AccessToken?: string | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: ConnectorOAuthRequest | undefined;
}
export interface SlackConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface SnowflakeConnectorProfileCredentials {
	readonly Password: string;
	readonly Username: string;
}
export interface SnowflakeConnectorProfileProperties {
	readonly AccountName?: string | undefined;
	readonly BucketName: string;
	readonly BucketPrefix?: string | undefined;
	readonly PrivateLinkServiceName?: string | undefined;
	readonly Region?: string | undefined;
	readonly Stage: string;
	readonly Warehouse: string;
}
export interface TrendmicroConnectorProfileCredentials {
	readonly ApiSecretKey: string;
}
export interface VeevaConnectorProfileCredentials {
	readonly Password: string;
	readonly Username: string;
}
export interface VeevaConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface ZendeskConnectorProfileCredentials {
	readonly AccessToken?: string | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: ConnectorOAuthRequest | undefined;
}
export interface ZendeskConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface AggregationConfig {
	readonly AggregationType?: string | undefined;
	readonly TargetFileSize?: number | undefined;
}
export interface AmplitudeSourceProperties {
	readonly Object: string;
}
export interface ConnectorOperator {
	readonly Amplitude?: string | undefined;
	readonly CustomConnector?: string | undefined;
	readonly Datadog?: string | undefined;
	readonly Dynatrace?: string | undefined;
	readonly GoogleAnalytics?: string | undefined;
	readonly InforNexus?: string | undefined;
	readonly Marketo?: string | undefined;
	readonly S3?: string | undefined;
	readonly SAPOData?: string | undefined;
	readonly Salesforce?: string | undefined;
	readonly ServiceNow?: string | undefined;
	readonly Singular?: string | undefined;
	readonly Slack?: string | undefined;
	readonly Trendmicro?: string | undefined;
	readonly Veeva?: string | undefined;
	readonly Zendesk?: string | undefined;
}
export interface CustomConnectorDestinationProperties {
	readonly CustomProperties?: { [key: string]: string } | undefined;
	readonly EntityName: string;
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly IdFieldNames?: string[] | undefined;
	readonly WriteOperationType?: string | undefined;
}
export interface CustomConnectorSourceProperties {
	readonly CustomProperties?: { [key: string]: string } | undefined;
	readonly EntityName: string;
}
export interface DatadogSourceProperties {
	readonly Object: string;
}
export interface DestinationConnectorProperties {
	readonly CustomConnector?: CustomConnectorDestinationProperties | undefined;
	readonly EventBridge?: EventBridgeDestinationProperties | undefined;
	readonly LookoutMetrics?: LookoutMetricsDestinationProperties | undefined;
	readonly Marketo?: MarketoDestinationProperties | undefined;
	readonly Redshift?: RedshiftDestinationProperties | undefined;
	readonly S3?: S3DestinationProperties | undefined;
	readonly SAPOData?: SAPODataDestinationProperties | undefined;
	readonly Salesforce?: SalesforceDestinationProperties | undefined;
	readonly Snowflake?: SnowflakeDestinationProperties | undefined;
	readonly Upsolver?: UpsolverDestinationProperties | undefined;
	readonly Zendesk?: ZendeskDestinationProperties | undefined;
}
export interface DestinationFlowConfig {
	readonly ApiVersion?: string | undefined;
	readonly ConnectorProfileName?: string | undefined;
	readonly ConnectorType: string;
	readonly DestinationConnectorProperties: DestinationConnectorProperties;
}
export interface DynatraceSourceProperties {
	readonly Object: string;
}
export interface ErrorHandlingConfig {
	readonly BucketName?: string | undefined;
	readonly BucketPrefix?: string | undefined;
	readonly FailOnFirstError?: boolean | undefined;
}
export interface EventBridgeDestinationProperties {
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly Object: string;
}
export interface GlueDataCatalog {
	readonly DatabaseName: string;
	readonly RoleArn: string;
	readonly TablePrefix: string;
}
export interface GoogleAnalyticsSourceProperties {
	readonly Object: string;
}
export interface IncrementalPullConfig {
	readonly DatetimeTypeFieldName?: string | undefined;
}
export interface InforNexusSourceProperties {
	readonly Object: string;
}
export interface LookoutMetricsDestinationProperties {
	readonly Object?: string | undefined;
}
export interface MarketoDestinationProperties {
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly Object: string;
}
export interface MarketoSourceProperties {
	readonly Object: string;
}
export interface MetadataCatalogConfig {
	readonly GlueDataCatalog?: GlueDataCatalog | undefined;
}
export interface PrefixConfig {
	readonly PathPrefixHierarchy?: string[] | undefined;
	readonly PrefixFormat?: string | undefined;
	readonly PrefixType?: string | undefined;
}
export interface RedshiftDestinationProperties {
	readonly BucketPrefix?: string | undefined;
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly IntermediateBucketName: string;
	readonly Object: string;
}
export interface S3DestinationProperties {
	readonly BucketName: string;
	readonly BucketPrefix?: string | undefined;
	readonly S3OutputFormatConfig?: S3OutputFormatConfig | undefined;
}
export interface S3InputFormatConfig {
	readonly S3InputFileType?: string | undefined;
}
export interface S3OutputFormatConfig {
	readonly AggregationConfig?: AggregationConfig | undefined;
	readonly FileType?: string | undefined;
	readonly PrefixConfig?: PrefixConfig | undefined;
	readonly PreserveSourceDataTyping?: boolean | undefined;
}
export interface S3SourceProperties {
	readonly BucketName: string;
	readonly BucketPrefix: string;
	readonly S3InputFormatConfig?: S3InputFormatConfig | undefined;
}
export interface SAPODataDestinationProperties {
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly IdFieldNames?: string[] | undefined;
	readonly ObjectPath: string;
	readonly SuccessResponseHandlingConfig?: SuccessResponseHandlingConfig | undefined;
	readonly WriteOperationType?: string | undefined;
}
export interface SAPODataSourceProperties {
	readonly ObjectPath: string;
}
export interface SalesforceDestinationProperties {
	readonly DataTransferApi?: string | undefined;
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly IdFieldNames?: string[] | undefined;
	readonly Object: string;
	readonly WriteOperationType?: string | undefined;
}
export interface SalesforceSourceProperties {
	readonly DataTransferApi?: string | undefined;
	readonly EnableDynamicFieldUpdate?: boolean | undefined;
	readonly IncludeDeletedRecords?: boolean | undefined;
	readonly Object: string;
}
export interface ScheduledTriggerProperties {
	readonly DataPullMode?: string | undefined;
	readonly FirstExecutionFrom?: number | undefined;
	readonly FlowErrorDeactivationThreshold?: number | undefined;
	readonly ScheduleEndTime?: number | undefined;
	readonly ScheduleExpression: string;
	readonly ScheduleOffset?: number | undefined;
	readonly ScheduleStartTime?: number | undefined;
	readonly TimeZone?: string | undefined;
}
export interface ServiceNowSourceProperties {
	readonly Object: string;
}
export interface SingularSourceProperties {
	readonly Object: string;
}
export interface SlackSourceProperties {
	readonly Object: string;
}
export interface SnowflakeDestinationProperties {
	readonly BucketPrefix?: string | undefined;
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly IntermediateBucketName: string;
	readonly Object: string;
}
export interface SourceConnectorProperties {
	readonly Amplitude?: AmplitudeSourceProperties | undefined;
	readonly CustomConnector?: CustomConnectorSourceProperties | undefined;
	readonly Datadog?: DatadogSourceProperties | undefined;
	readonly Dynatrace?: DynatraceSourceProperties | undefined;
	readonly GoogleAnalytics?: GoogleAnalyticsSourceProperties | undefined;
	readonly InforNexus?: InforNexusSourceProperties | undefined;
	readonly Marketo?: MarketoSourceProperties | undefined;
	readonly S3?: S3SourceProperties | undefined;
	readonly SAPOData?: SAPODataSourceProperties | undefined;
	readonly Salesforce?: SalesforceSourceProperties | undefined;
	readonly ServiceNow?: ServiceNowSourceProperties | undefined;
	readonly Singular?: SingularSourceProperties | undefined;
	readonly Slack?: SlackSourceProperties | undefined;
	readonly Trendmicro?: TrendmicroSourceProperties | undefined;
	readonly Veeva?: VeevaSourceProperties | undefined;
	readonly Zendesk?: ZendeskSourceProperties | undefined;
}
export interface SourceFlowConfig {
	readonly ApiVersion?: string | undefined;
	readonly ConnectorProfileName?: string | undefined;
	readonly ConnectorType: string;
	readonly IncrementalPullConfig?: IncrementalPullConfig | undefined;
	readonly SourceConnectorProperties: SourceConnectorProperties;
}
export interface SuccessResponseHandlingConfig {
	readonly BucketName?: string | undefined;
	readonly BucketPrefix?: string | undefined;
}
export interface Task {
	readonly ConnectorOperator?: ConnectorOperator | undefined;
	readonly DestinationField?: string | undefined;
	readonly SourceFields: string[];
	readonly TaskProperties?: TaskPropertiesObject[] | undefined;
	readonly TaskType: string;
}
export interface TaskPropertiesObject {
	readonly Key: string;
	readonly Value: string;
}
export interface TrendmicroSourceProperties {
	readonly Object: string;
}
export interface TriggerConfig {
	readonly TriggerProperties?: ScheduledTriggerProperties | undefined;
	readonly TriggerType: string;
}
export interface UpsolverDestinationProperties {
	readonly BucketName: string;
	readonly BucketPrefix?: string | undefined;
	readonly S3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
export interface UpsolverS3OutputFormatConfig {
	readonly AggregationConfig?: AggregationConfig | undefined;
	readonly FileType?: string | undefined;
	readonly PrefixConfig: PrefixConfig;
}
export interface VeevaSourceProperties {
	readonly DocumentType?: string | undefined;
	readonly IncludeAllVersions?: boolean | undefined;
	readonly IncludeRenditions?: boolean | undefined;
	readonly IncludeSourceFiles?: boolean | undefined;
	readonly Object: string;
}
export interface ZendeskDestinationProperties {
	readonly ErrorHandlingConfig?: ErrorHandlingConfig | undefined;
	readonly IdFieldNames?: string[] | undefined;
	readonly Object: string;
	readonly WriteOperationType?: string | undefined;
}
export interface ZendeskSourceProperties {
	readonly Object: string;
}
export default {
	Connector: Connector,
	ConnectorProfile: ConnectorProfile,
	Flow: Flow,
};
