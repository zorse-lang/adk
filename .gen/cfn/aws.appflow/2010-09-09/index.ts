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
	readonly ConnectorLabel?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
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
	readonly ConnectorLabel?: (string | undefined) | undefined;
	readonly ConnectorProfileConfig?: (ConnectorProfileConfig | undefined) | undefined;
	readonly KMSArn?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly KMSArn?: (string | undefined) | undefined;
	readonly MetadataCatalogConfig?: (MetadataCatalogConfig | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ConnectorProvisioningConfig {
	readonly Lambda?: (LambdaConnectorProvisioningConfig | undefined) | undefined;
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
	readonly ApiSecretKey?: (string | undefined) | undefined;
}
export interface BasicAuthCredentials {
	readonly Password: string;
	readonly Username: string;
}
export interface ConnectorOAuthRequest {
	readonly AuthCode?: (string | undefined) | undefined;
	readonly RedirectUri?: (string | undefined) | undefined;
}
export interface ConnectorProfileConfig {
	readonly ConnectorProfileCredentials?: (ConnectorProfileCredentials | undefined) | undefined;
	readonly ConnectorProfileProperties?: (ConnectorProfileProperties | undefined) | undefined;
}
export interface ConnectorProfileCredentials {
	readonly Amplitude?: (AmplitudeConnectorProfileCredentials | undefined) | undefined;
	readonly CustomConnector?: (CustomConnectorProfileCredentials | undefined) | undefined;
	readonly Datadog?: (DatadogConnectorProfileCredentials | undefined) | undefined;
	readonly Dynatrace?: (DynatraceConnectorProfileCredentials | undefined) | undefined;
	readonly GoogleAnalytics?: (GoogleAnalyticsConnectorProfileCredentials | undefined) | undefined;
	readonly InforNexus?: (InforNexusConnectorProfileCredentials | undefined) | undefined;
	readonly Marketo?: (MarketoConnectorProfileCredentials | undefined) | undefined;
	readonly Redshift?: (RedshiftConnectorProfileCredentials | undefined) | undefined;
	readonly SAPOData?: (SAPODataConnectorProfileCredentials | undefined) | undefined;
	readonly Salesforce?: (SalesforceConnectorProfileCredentials | undefined) | undefined;
	readonly ServiceNow?: (ServiceNowConnectorProfileCredentials | undefined) | undefined;
	readonly Singular?: (SingularConnectorProfileCredentials | undefined) | undefined;
	readonly Slack?: (SlackConnectorProfileCredentials | undefined) | undefined;
	readonly Snowflake?: (SnowflakeConnectorProfileCredentials | undefined) | undefined;
	readonly Trendmicro?: (TrendmicroConnectorProfileCredentials | undefined) | undefined;
	readonly Veeva?: (VeevaConnectorProfileCredentials | undefined) | undefined;
	readonly Zendesk?: (ZendeskConnectorProfileCredentials | undefined) | undefined;
}
export interface ConnectorProfileProperties {
	readonly CustomConnector?: (CustomConnectorProfileProperties | undefined) | undefined;
	readonly Datadog?: (DatadogConnectorProfileProperties | undefined) | undefined;
	readonly Dynatrace?: (DynatraceConnectorProfileProperties | undefined) | undefined;
	readonly InforNexus?: (InforNexusConnectorProfileProperties | undefined) | undefined;
	readonly Marketo?: (MarketoConnectorProfileProperties | undefined) | undefined;
	readonly Redshift?: (RedshiftConnectorProfileProperties | undefined) | undefined;
	readonly SAPOData?: (SAPODataConnectorProfileProperties | undefined) | undefined;
	readonly Salesforce?: (SalesforceConnectorProfileProperties | undefined) | undefined;
	readonly ServiceNow?: (ServiceNowConnectorProfileProperties | undefined) | undefined;
	readonly Slack?: (SlackConnectorProfileProperties | undefined) | undefined;
	readonly Snowflake?: (SnowflakeConnectorProfileProperties | undefined) | undefined;
	readonly Veeva?: (VeevaConnectorProfileProperties | undefined) | undefined;
	readonly Zendesk?: (ZendeskConnectorProfileProperties | undefined) | undefined;
}
export interface CustomAuthCredentials {
	readonly CredentialsMap?: ({ [key: string]: string } | undefined) | undefined;
	readonly CustomAuthenticationType: string;
}
export interface CustomConnectorProfileCredentials {
	readonly ApiKey?: (ApiKeyCredentials | undefined) | undefined;
	readonly AuthenticationType: string;
	readonly Basic?: (BasicAuthCredentials | undefined) | undefined;
	readonly Custom?: (CustomAuthCredentials | undefined) | undefined;
	readonly Oauth2?: (OAuth2Credentials | undefined) | undefined;
}
export interface CustomConnectorProfileProperties {
	readonly OAuth2Properties?: (OAuth2Properties | undefined) | undefined;
	readonly ProfileProperties?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly AccessToken?: (string | undefined) | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: (ConnectorOAuthRequest | undefined) | undefined;
	readonly RefreshToken?: (string | undefined) | undefined;
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
	readonly AccessToken?: (string | undefined) | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: (ConnectorOAuthRequest | undefined) | undefined;
}
export interface MarketoConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface OAuth2Credentials {
	readonly AccessToken?: (string | undefined) | undefined;
	readonly ClientId?: (string | undefined) | undefined;
	readonly ClientSecret?: (string | undefined) | undefined;
	readonly OAuthRequest?: (ConnectorOAuthRequest | undefined) | undefined;
	readonly RefreshToken?: (string | undefined) | undefined;
}
export interface OAuth2Properties {
	readonly OAuth2GrantType?: (string | undefined) | undefined;
	readonly TokenUrl?: (string | undefined) | undefined;
	readonly TokenUrlCustomProperties?: ({ [key: string]: string } | undefined) | undefined;
}
export interface OAuthCredentials {
	readonly AccessToken?: (string | undefined) | undefined;
	readonly ClientId?: (string | undefined) | undefined;
	readonly ClientSecret?: (string | undefined) | undefined;
	readonly ConnectorOAuthRequest?: (ConnectorOAuthRequest | undefined) | undefined;
	readonly RefreshToken?: (string | undefined) | undefined;
}
export interface OAuthProperties {
	readonly AuthCodeUrl?: (string | undefined) | undefined;
	readonly OAuthScopes?: (string[] | undefined) | undefined;
	readonly TokenUrl?: (string | undefined) | undefined;
}
export interface RedshiftConnectorProfileCredentials {
	readonly Password?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface RedshiftConnectorProfileProperties {
	readonly BucketName: string;
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly ClusterIdentifier?: (string | undefined) | undefined;
	readonly DataApiRoleArn?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly DatabaseUrl?: (string | undefined) | undefined;
	readonly IsRedshiftServerless?: (boolean | undefined) | undefined;
	readonly RoleArn: string;
	readonly WorkgroupName?: (string | undefined) | undefined;
}
export interface SAPODataConnectorProfileCredentials {
	readonly BasicAuthCredentials?: (BasicAuthCredentials | undefined) | undefined;
	readonly OAuthCredentials?: (OAuthCredentials | undefined) | undefined;
}
export interface SAPODataConnectorProfileProperties {
	readonly ApplicationHostUrl?: (string | undefined) | undefined;
	readonly ApplicationServicePath?: (string | undefined) | undefined;
	readonly ClientNumber?: (string | undefined) | undefined;
	readonly LogonLanguage?: (string | undefined) | undefined;
	readonly OAuthProperties?: (OAuthProperties | undefined) | undefined;
	readonly PortNumber?: (number | undefined) | undefined;
	readonly PrivateLinkServiceName?: (string | undefined) | undefined;
}
export interface SalesforceConnectorProfileCredentials {
	readonly AccessToken?: (string | undefined) | undefined;
	readonly ClientCredentialsArn?: (string | undefined) | undefined;
	readonly ConnectorOAuthRequest?: (ConnectorOAuthRequest | undefined) | undefined;
	readonly RefreshToken?: (string | undefined) | undefined;
}
export interface SalesforceConnectorProfileProperties {
	readonly InstanceUrl?: (string | undefined) | undefined;
	readonly isSandboxEnvironment?: (boolean | undefined) | undefined;
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
	readonly AccessToken?: (string | undefined) | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: (ConnectorOAuthRequest | undefined) | undefined;
}
export interface SlackConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface SnowflakeConnectorProfileCredentials {
	readonly Password: string;
	readonly Username: string;
}
export interface SnowflakeConnectorProfileProperties {
	readonly AccountName?: (string | undefined) | undefined;
	readonly BucketName: string;
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly PrivateLinkServiceName?: (string | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
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
	readonly AccessToken?: (string | undefined) | undefined;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly ConnectorOAuthRequest?: (ConnectorOAuthRequest | undefined) | undefined;
}
export interface ZendeskConnectorProfileProperties {
	readonly InstanceUrl: string;
}
export interface AggregationConfig {
	readonly AggregationType?: (string | undefined) | undefined;
	readonly TargetFileSize?: (number | undefined) | undefined;
}
export interface AmplitudeSourceProperties {
	readonly Object: string;
}
export interface ConnectorOperator {
	readonly Amplitude?: (string | undefined) | undefined;
	readonly CustomConnector?: (string | undefined) | undefined;
	readonly Datadog?: (string | undefined) | undefined;
	readonly Dynatrace?: (string | undefined) | undefined;
	readonly GoogleAnalytics?: (string | undefined) | undefined;
	readonly InforNexus?: (string | undefined) | undefined;
	readonly Marketo?: (string | undefined) | undefined;
	readonly S3?: (string | undefined) | undefined;
	readonly SAPOData?: (string | undefined) | undefined;
	readonly Salesforce?: (string | undefined) | undefined;
	readonly ServiceNow?: (string | undefined) | undefined;
	readonly Singular?: (string | undefined) | undefined;
	readonly Slack?: (string | undefined) | undefined;
	readonly Trendmicro?: (string | undefined) | undefined;
	readonly Veeva?: (string | undefined) | undefined;
	readonly Zendesk?: (string | undefined) | undefined;
}
export interface CustomConnectorDestinationProperties {
	readonly CustomProperties?: ({ [key: string]: string } | undefined) | undefined;
	readonly EntityName: string;
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
	readonly IdFieldNames?: (string[] | undefined) | undefined;
	readonly WriteOperationType?: (string | undefined) | undefined;
}
export interface CustomConnectorSourceProperties {
	readonly CustomProperties?: ({ [key: string]: string } | undefined) | undefined;
	readonly EntityName: string;
}
export interface DatadogSourceProperties {
	readonly Object: string;
}
export interface DestinationConnectorProperties {
	readonly CustomConnector?: (CustomConnectorDestinationProperties | undefined) | undefined;
	readonly EventBridge?: (EventBridgeDestinationProperties | undefined) | undefined;
	readonly LookoutMetrics?: (LookoutMetricsDestinationProperties | undefined) | undefined;
	readonly Marketo?: (MarketoDestinationProperties | undefined) | undefined;
	readonly Redshift?: (RedshiftDestinationProperties | undefined) | undefined;
	readonly S3?: (S3DestinationProperties | undefined) | undefined;
	readonly SAPOData?: (SAPODataDestinationProperties | undefined) | undefined;
	readonly Salesforce?: (SalesforceDestinationProperties | undefined) | undefined;
	readonly Snowflake?: (SnowflakeDestinationProperties | undefined) | undefined;
	readonly Upsolver?: (UpsolverDestinationProperties | undefined) | undefined;
	readonly Zendesk?: (ZendeskDestinationProperties | undefined) | undefined;
}
export interface DestinationFlowConfig {
	readonly ApiVersion?: (string | undefined) | undefined;
	readonly ConnectorProfileName?: (string | undefined) | undefined;
	readonly ConnectorType: string;
	readonly DestinationConnectorProperties: DestinationConnectorProperties;
}
export interface DynatraceSourceProperties {
	readonly Object: string;
}
export interface ErrorHandlingConfig {
	readonly BucketName?: (string | undefined) | undefined;
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly FailOnFirstError?: (boolean | undefined) | undefined;
}
export interface EventBridgeDestinationProperties {
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
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
	readonly DatetimeTypeFieldName?: (string | undefined) | undefined;
}
export interface InforNexusSourceProperties {
	readonly Object: string;
}
export interface LookoutMetricsDestinationProperties {
	readonly Object?: (string | undefined) | undefined;
}
export interface MarketoDestinationProperties {
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
	readonly Object: string;
}
export interface MarketoSourceProperties {
	readonly Object: string;
}
export interface MetadataCatalogConfig {
	readonly GlueDataCatalog?: (GlueDataCatalog | undefined) | undefined;
}
export interface PrefixConfig {
	readonly PathPrefixHierarchy?: (string[] | undefined) | undefined;
	readonly PrefixFormat?: (string | undefined) | undefined;
	readonly PrefixType?: (string | undefined) | undefined;
}
export interface RedshiftDestinationProperties {
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
	readonly IntermediateBucketName: string;
	readonly Object: string;
}
export interface S3DestinationProperties {
	readonly BucketName: string;
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly S3OutputFormatConfig?: (S3OutputFormatConfig | undefined) | undefined;
}
export interface S3InputFormatConfig {
	readonly S3InputFileType?: (string | undefined) | undefined;
}
export interface S3OutputFormatConfig {
	readonly AggregationConfig?: (AggregationConfig | undefined) | undefined;
	readonly FileType?: (string | undefined) | undefined;
	readonly PrefixConfig?: (PrefixConfig | undefined) | undefined;
	readonly PreserveSourceDataTyping?: (boolean | undefined) | undefined;
}
export interface S3SourceProperties {
	readonly BucketName: string;
	readonly BucketPrefix: string;
	readonly S3InputFormatConfig?: (S3InputFormatConfig | undefined) | undefined;
}
export interface SAPODataDestinationProperties {
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
	readonly IdFieldNames?: (string[] | undefined) | undefined;
	readonly ObjectPath: string;
	readonly SuccessResponseHandlingConfig?: (SuccessResponseHandlingConfig | undefined) | undefined;
	readonly WriteOperationType?: (string | undefined) | undefined;
}
export interface SAPODataSourceProperties {
	readonly ObjectPath: string;
}
export interface SalesforceDestinationProperties {
	readonly DataTransferApi?: (string | undefined) | undefined;
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
	readonly IdFieldNames?: (string[] | undefined) | undefined;
	readonly Object: string;
	readonly WriteOperationType?: (string | undefined) | undefined;
}
export interface SalesforceSourceProperties {
	readonly DataTransferApi?: (string | undefined) | undefined;
	readonly EnableDynamicFieldUpdate?: (boolean | undefined) | undefined;
	readonly IncludeDeletedRecords?: (boolean | undefined) | undefined;
	readonly Object: string;
}
export interface ScheduledTriggerProperties {
	readonly DataPullMode?: (string | undefined) | undefined;
	readonly FirstExecutionFrom?: (number | undefined) | undefined;
	readonly FlowErrorDeactivationThreshold?: (number | undefined) | undefined;
	readonly ScheduleEndTime?: (number | undefined) | undefined;
	readonly ScheduleExpression: string;
	readonly ScheduleOffset?: (number | undefined) | undefined;
	readonly ScheduleStartTime?: (number | undefined) | undefined;
	readonly TimeZone?: (string | undefined) | undefined;
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
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
	readonly IntermediateBucketName: string;
	readonly Object: string;
}
export interface SourceConnectorProperties {
	readonly Amplitude?: (AmplitudeSourceProperties | undefined) | undefined;
	readonly CustomConnector?: (CustomConnectorSourceProperties | undefined) | undefined;
	readonly Datadog?: (DatadogSourceProperties | undefined) | undefined;
	readonly Dynatrace?: (DynatraceSourceProperties | undefined) | undefined;
	readonly GoogleAnalytics?: (GoogleAnalyticsSourceProperties | undefined) | undefined;
	readonly InforNexus?: (InforNexusSourceProperties | undefined) | undefined;
	readonly Marketo?: (MarketoSourceProperties | undefined) | undefined;
	readonly S3?: (S3SourceProperties | undefined) | undefined;
	readonly SAPOData?: (SAPODataSourceProperties | undefined) | undefined;
	readonly Salesforce?: (SalesforceSourceProperties | undefined) | undefined;
	readonly ServiceNow?: (ServiceNowSourceProperties | undefined) | undefined;
	readonly Singular?: (SingularSourceProperties | undefined) | undefined;
	readonly Slack?: (SlackSourceProperties | undefined) | undefined;
	readonly Trendmicro?: (TrendmicroSourceProperties | undefined) | undefined;
	readonly Veeva?: (VeevaSourceProperties | undefined) | undefined;
	readonly Zendesk?: (ZendeskSourceProperties | undefined) | undefined;
}
export interface SourceFlowConfig {
	readonly ApiVersion?: (string | undefined) | undefined;
	readonly ConnectorProfileName?: (string | undefined) | undefined;
	readonly ConnectorType: string;
	readonly IncrementalPullConfig?: (IncrementalPullConfig | undefined) | undefined;
	readonly SourceConnectorProperties: SourceConnectorProperties;
}
export interface SuccessResponseHandlingConfig {
	readonly BucketName?: (string | undefined) | undefined;
	readonly BucketPrefix?: (string | undefined) | undefined;
}
export interface Task {
	readonly ConnectorOperator?: (ConnectorOperator | undefined) | undefined;
	readonly DestinationField?: (string | undefined) | undefined;
	readonly SourceFields: string[];
	readonly TaskProperties?: (TaskPropertiesObject[] | undefined) | undefined;
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
	readonly TriggerProperties?: (ScheduledTriggerProperties | undefined) | undefined;
	readonly TriggerType: string;
}
export interface UpsolverDestinationProperties {
	readonly BucketName: string;
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly S3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
export interface UpsolverS3OutputFormatConfig {
	readonly AggregationConfig?: (AggregationConfig | undefined) | undefined;
	readonly FileType?: (string | undefined) | undefined;
	readonly PrefixConfig: PrefixConfig;
}
export interface VeevaSourceProperties {
	readonly DocumentType?: (string | undefined) | undefined;
	readonly IncludeAllVersions?: (boolean | undefined) | undefined;
	readonly IncludeRenditions?: (boolean | undefined) | undefined;
	readonly IncludeSourceFiles?: (boolean | undefined) | undefined;
	readonly Object: string;
}
export interface ZendeskDestinationProperties {
	readonly ErrorHandlingConfig?: (ErrorHandlingConfig | undefined) | undefined;
	readonly IdFieldNames?: (string[] | undefined) | undefined;
	readonly Object: string;
	readonly WriteOperationType?: (string | undefined) | undefined;
}
export interface ZendeskSourceProperties {
	readonly Object: string;
}
export default {
	Connector: Connector,
	ConnectorProfile: ConnectorProfile,
	Flow: Flow,
};
