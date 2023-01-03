import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ApiCache extends CfnResource<ApiCacheComponentInputs> implements ApiCacheComponentOutputs {
	constructor(entity: ADKEntity, options: ApiCacheComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::ApiCache", options);
	}
}
export interface ApiCacheComponentOutputs {}
export interface ApiCacheComponentInputs {
	readonly ApiCachingBehavior: string;
	readonly ApiId: string;
	readonly Ttl: number;
	readonly Type: string;
	readonly AtRestEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly TransitEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class ApiKey extends CfnResource<ApiKeyComponentInputs> implements ApiKeyComponentOutputs {
	constructor(entity: ADKEntity, options: ApiKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::ApiKey", options);
	}
	public readonly ApiKey: string;
	public readonly Arn: string;
}
export interface ApiKeyComponentOutputs {
	readonly ApiKey: string;
	readonly Arn: string;
}
export interface ApiKeyComponentInputs {
	readonly ApiId: string;
	readonly ApiKeyId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Expires?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class DataSource extends CfnResource<DataSourceComponentInputs> implements DataSourceComponentOutputs {
	constructor(entity: ADKEntity, options: DataSourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::DataSource", options);
	}
	public readonly DataSourceArn: string;
	public readonly Name: string;
}
export interface DataSourceComponentOutputs {
	readonly DataSourceArn: string;
	readonly Name: string;
}
export interface DataSourceComponentInputs {
	readonly ApiId: string;
	readonly Name: string;
	readonly Type: string;
	readonly Description?: (string | undefined) | undefined;
	readonly DynamoDBConfig?: (DynamoDBConfig | undefined) | undefined;
	readonly ElasticsearchConfig?: (ElasticsearchConfig | undefined) | undefined;
	readonly HttpConfig?: (HttpConfig | undefined) | undefined;
	readonly LambdaConfig?: (LambdaConfig | undefined) | undefined;
	readonly OpenSearchServiceConfig?: (OpenSearchServiceConfig | undefined) | undefined;
	readonly RelationalDatabaseConfig?: (RelationalDatabaseConfig | undefined) | undefined;
	readonly ServiceRoleArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DomainName extends CfnResource<DomainNameComponentInputs> implements DomainNameComponentOutputs {
	constructor(entity: ADKEntity, options: DomainNameComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::DomainName", options);
	}
	public readonly AppSyncDomainName: string;
	public readonly DomainName: string;
	public readonly HostedZoneId: string;
}
export interface DomainNameComponentOutputs {
	readonly AppSyncDomainName: string;
	readonly DomainName: string;
	readonly HostedZoneId: string;
}
export interface DomainNameComponentInputs {
	readonly CertificateArn: string;
	readonly DomainName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DomainNameApiAssociation
	extends CfnResource<DomainNameApiAssociationComponentInputs>
	implements DomainNameApiAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: DomainNameApiAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::DomainNameApiAssociation", options);
	}
	public readonly ApiAssociationIdentifier: string;
}
export interface DomainNameApiAssociationComponentOutputs {
	readonly ApiAssociationIdentifier: string;
}
export interface DomainNameApiAssociationComponentInputs {
	readonly ApiId: string;
	readonly DomainName: string;
	readonly LogicalId: string;
}
export class FunctionConfiguration
	extends CfnResource<FunctionConfigurationComponentInputs>
	implements FunctionConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: FunctionConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::FunctionConfiguration", options);
	}
	public readonly DataSourceName: string;
	public readonly FunctionArn: string;
	public readonly FunctionId: string;
	public readonly Name: string;
}
export interface FunctionConfigurationComponentOutputs {
	readonly DataSourceName: string;
	readonly FunctionArn: string;
	readonly FunctionId: string;
	readonly Name: string;
}
export interface FunctionConfigurationComponentInputs {
	readonly ApiId: string;
	readonly DataSourceName: string;
	readonly Name: string;
	readonly Code?: (string | undefined) | undefined;
	readonly CodeS3Location?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly FunctionVersion?: (string | undefined) | undefined;
	readonly MaxBatchSize?: (number | undefined) | undefined;
	readonly RequestMappingTemplate?: (string | undefined) | undefined;
	readonly RequestMappingTemplateS3Location?: (string | undefined) | undefined;
	readonly ResponseMappingTemplate?: (string | undefined) | undefined;
	readonly ResponseMappingTemplateS3Location?: (string | undefined) | undefined;
	readonly Runtime?: (AppSyncRuntime | undefined) | undefined;
	readonly SyncConfig?: (SyncConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class GraphQLApi extends CfnResource<GraphQLApiComponentInputs> implements GraphQLApiComponentOutputs {
	constructor(entity: ADKEntity, options: GraphQLApiComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::GraphQLApi", options);
	}
	public readonly ApiId: string;
	public readonly Arn: string;
	public readonly GraphQlUrl: string;
}
export interface GraphQLApiComponentOutputs {
	readonly ApiId: string;
	readonly Arn: string;
	readonly GraphQlUrl: string;
}
export interface GraphQLApiComponentInputs {
	readonly AuthenticationType: string;
	readonly Name: string;
	readonly AdditionalAuthenticationProviders?: (AdditionalAuthenticationProvider[] | undefined) | undefined;
	readonly LambdaAuthorizerConfig?: (LambdaAuthorizerConfig | undefined) | undefined;
	readonly LogConfig?: (LogConfig | undefined) | undefined;
	readonly OpenIDConnectConfig?: (OpenIDConnectConfig | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserPoolConfig?: (UserPoolConfig | undefined) | undefined;
	readonly XrayEnabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class GraphQLSchema extends CfnResource<GraphQLSchemaComponentInputs> implements GraphQLSchemaComponentOutputs {
	constructor(entity: ADKEntity, options: GraphQLSchemaComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::GraphQLSchema", options);
	}
}
export interface GraphQLSchemaComponentOutputs {}
export interface GraphQLSchemaComponentInputs {
	readonly ApiId: string;
	readonly Definition?: (string | undefined) | undefined;
	readonly DefinitionS3Location?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Resolver extends CfnResource<ResolverComponentInputs> implements ResolverComponentOutputs {
	constructor(entity: ADKEntity, options: ResolverComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppSync::Resolver", options);
	}
	public readonly FieldName: string;
	public readonly ResolverArn: string;
	public readonly TypeName: string;
}
export interface ResolverComponentOutputs {
	readonly FieldName: string;
	readonly ResolverArn: string;
	readonly TypeName: string;
}
export interface ResolverComponentInputs {
	readonly ApiId: string;
	readonly FieldName: string;
	readonly TypeName: string;
	readonly CachingConfig?: (CachingConfig | undefined) | undefined;
	readonly Code?: (string | undefined) | undefined;
	readonly CodeS3Location?: (string | undefined) | undefined;
	readonly DataSourceName?: (string | undefined) | undefined;
	readonly Kind?: (string | undefined) | undefined;
	readonly MaxBatchSize?: (number | undefined) | undefined;
	readonly PipelineConfig?: (PipelineConfig | undefined) | undefined;
	readonly RequestMappingTemplate?: (string | undefined) | undefined;
	readonly RequestMappingTemplateS3Location?: (string | undefined) | undefined;
	readonly ResponseMappingTemplate?: (string | undefined) | undefined;
	readonly ResponseMappingTemplateS3Location?: (string | undefined) | undefined;
	readonly Runtime?: (AppSyncRuntime | undefined) | undefined;
	readonly SyncConfig?: (SyncConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AuthorizationConfig {
	readonly AuthorizationType: string;
	readonly AwsIamConfig?: (AwsIamConfig | undefined) | undefined;
}
export interface AwsIamConfig {
	readonly SigningRegion?: (string | undefined) | undefined;
	readonly SigningServiceName?: (string | undefined) | undefined;
}
export interface DeltaSyncConfig {
	readonly BaseTableTTL: string;
	readonly DeltaSyncTableName: string;
	readonly DeltaSyncTableTTL: string;
}
export interface DynamoDBConfig {
	readonly AwsRegion: string;
	readonly DeltaSyncConfig?: (DeltaSyncConfig | undefined) | undefined;
	readonly TableName: string;
	readonly UseCallerCredentials?: (boolean | undefined) | undefined;
	readonly Versioned?: (boolean | undefined) | undefined;
}
export interface ElasticsearchConfig {
	readonly AwsRegion: string;
	readonly Endpoint: string;
}
export interface HttpConfig {
	readonly AuthorizationConfig?: (AuthorizationConfig | undefined) | undefined;
	readonly Endpoint: string;
}
export interface LambdaConfig {
	readonly LambdaFunctionArn: string;
}
export interface OpenSearchServiceConfig {
	readonly AwsRegion: string;
	readonly Endpoint: string;
}
export interface RdsHttpEndpointConfig {
	readonly AwsRegion: string;
	readonly AwsSecretStoreArn: string;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly DbClusterIdentifier: string;
	readonly Schema?: (string | undefined) | undefined;
}
export interface RelationalDatabaseConfig {
	readonly RdsHttpEndpointConfig?: (RdsHttpEndpointConfig | undefined) | undefined;
	readonly RelationalDatabaseSourceType: string;
}
export interface AppSyncRuntime {
	readonly Name: string;
	readonly RuntimeVersion: string;
}
export interface LambdaConflictHandlerConfig {
	readonly LambdaConflictHandlerArn?: (string | undefined) | undefined;
}
export interface SyncConfig {
	readonly ConflictDetection: string;
	readonly ConflictHandler?: (string | undefined) | undefined;
	readonly LambdaConflictHandlerConfig?: (LambdaConflictHandlerConfig | undefined) | undefined;
}
export interface AdditionalAuthenticationProvider {
	readonly AuthenticationType: string;
	readonly LambdaAuthorizerConfig?: (LambdaAuthorizerConfig | undefined) | undefined;
	readonly OpenIDConnectConfig?: (OpenIDConnectConfig | undefined) | undefined;
	readonly UserPoolConfig?: (CognitoUserPoolConfig | undefined) | undefined;
}
export interface CognitoUserPoolConfig {
	readonly AppIdClientRegex?: (string | undefined) | undefined;
	readonly AwsRegion?: (string | undefined) | undefined;
	readonly UserPoolId?: (string | undefined) | undefined;
}
export interface LambdaAuthorizerConfig {
	readonly AuthorizerResultTtlInSeconds?: (number | undefined) | undefined;
	readonly AuthorizerUri?: (string | undefined) | undefined;
	readonly IdentityValidationExpression?: (string | undefined) | undefined;
}
export interface LogConfig {
	readonly CloudWatchLogsRoleArn?: (string | undefined) | undefined;
	readonly ExcludeVerboseContent?: (boolean | undefined) | undefined;
	readonly FieldLogLevel?: (string | undefined) | undefined;
}
export interface OpenIDConnectConfig {
	readonly AuthTTL?: (number | undefined) | undefined;
	readonly ClientId?: (string | undefined) | undefined;
	readonly IatTTL?: (number | undefined) | undefined;
	readonly Issuer?: (string | undefined) | undefined;
}
export interface UserPoolConfig {
	readonly AppIdClientRegex?: (string | undefined) | undefined;
	readonly AwsRegion?: (string | undefined) | undefined;
	readonly DefaultAction?: (string | undefined) | undefined;
	readonly UserPoolId?: (string | undefined) | undefined;
}
export interface CachingConfig {
	readonly CachingKeys?: (string[] | undefined) | undefined;
	readonly Ttl: number;
}
export interface PipelineConfig {
	readonly Functions?: (string[] | undefined) | undefined;
}
export default {
	ApiCache: ApiCache,
	ApiKey: ApiKey,
	DataSource: DataSource,
	DomainName: DomainName,
	DomainNameApiAssociation: DomainNameApiAssociation,
	FunctionConfiguration: FunctionConfiguration,
	GraphQLApi: GraphQLApi,
	GraphQLSchema: GraphQLSchema,
	Resolver: Resolver,
};
