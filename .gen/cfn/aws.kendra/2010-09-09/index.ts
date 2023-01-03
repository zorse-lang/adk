import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DataSource extends CfnResource<DataSourceComponentInputs> implements DataSourceComponentOutputs {
	constructor(entity: ADKEntity, options: DataSourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Kendra::DataSource", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface DataSourceComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface DataSourceComponentInputs {
	readonly IndexId: string;
	readonly Name: string;
	readonly Type: string;
	readonly CustomDocumentEnrichmentConfiguration?: (CustomDocumentEnrichmentConfiguration | undefined) | undefined;
	readonly DataSourceConfiguration?: (DataSourceConfiguration | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly Schedule?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Faq extends CfnResource<FaqComponentInputs> implements FaqComponentOutputs {
	constructor(entity: ADKEntity, options: FaqComponentInputs) {
		super(entity, options.LogicalId, "AWS::Kendra::Faq", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface FaqComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface FaqComponentInputs {
	readonly IndexId: string;
	readonly Name: string;
	readonly RoleArn: string;
	readonly S3Path: S3Path;
	readonly Description?: (string | undefined) | undefined;
	readonly FileFormat?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Index extends CfnResource<IndexComponentInputs> implements IndexComponentOutputs {
	constructor(entity: ADKEntity, options: IndexComponentInputs) {
		super(entity, options.LogicalId, "AWS::Kendra::Index", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface IndexComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface IndexComponentInputs {
	readonly Edition: string;
	readonly Name: string;
	readonly RoleArn: string;
	readonly CapacityUnits?: (CapacityUnitsConfiguration | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DocumentMetadataConfigurations?: (DocumentMetadataConfiguration[] | undefined) | undefined;
	readonly ServerSideEncryptionConfiguration?: (ServerSideEncryptionConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserContextPolicy?: (string | undefined) | undefined;
	readonly UserTokenConfigurations?: (UserTokenConfiguration[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AccessControlListConfiguration {
	readonly KeyPath?: (string | undefined) | undefined;
}
export interface AclConfiguration {
	readonly AllowedGroupsColumnName: string;
}
export interface ColumnConfiguration {
	readonly ChangeDetectingColumns: string[];
	readonly DocumentDataColumnName: string;
	readonly DocumentIdColumnName: string;
	readonly DocumentTitleColumnName?: (string | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
}
export interface ConfluenceAttachmentConfiguration {
	readonly AttachmentFieldMappings?: (ConfluenceAttachmentToIndexFieldMapping[] | undefined) | undefined;
	readonly CrawlAttachments?: (boolean | undefined) | undefined;
}
export interface ConfluenceAttachmentToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: (string | undefined) | undefined;
	readonly IndexFieldName: string;
}
export interface ConfluenceBlogConfiguration {
	readonly BlogFieldMappings?: (ConfluenceBlogToIndexFieldMapping[] | undefined) | undefined;
}
export interface ConfluenceBlogToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: (string | undefined) | undefined;
	readonly IndexFieldName: string;
}
export interface ConfluenceConfiguration {
	readonly AttachmentConfiguration?: (ConfluenceAttachmentConfiguration | undefined) | undefined;
	readonly BlogConfiguration?: (ConfluenceBlogConfiguration | undefined) | undefined;
	readonly ExclusionPatterns?: (string[] | undefined) | undefined;
	readonly InclusionPatterns?: (string[] | undefined) | undefined;
	readonly PageConfiguration?: (ConfluencePageConfiguration | undefined) | undefined;
	readonly SecretArn: string;
	readonly ServerUrl: string;
	readonly SpaceConfiguration?: (ConfluenceSpaceConfiguration | undefined) | undefined;
	readonly Version: string;
	readonly VpcConfiguration?: (DataSourceVpcConfiguration | undefined) | undefined;
}
export interface ConfluencePageConfiguration {
	readonly PageFieldMappings?: (ConfluencePageToIndexFieldMapping[] | undefined) | undefined;
}
export interface ConfluencePageToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: (string | undefined) | undefined;
	readonly IndexFieldName: string;
}
export interface ConfluenceSpaceConfiguration {
	readonly CrawlArchivedSpaces?: (boolean | undefined) | undefined;
	readonly CrawlPersonalSpaces?: (boolean | undefined) | undefined;
	readonly ExcludeSpaces?: (string[] | undefined) | undefined;
	readonly IncludeSpaces?: (string[] | undefined) | undefined;
	readonly SpaceFieldMappings?: (ConfluenceSpaceToIndexFieldMapping[] | undefined) | undefined;
}
export interface ConfluenceSpaceToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: (string | undefined) | undefined;
	readonly IndexFieldName: string;
}
export interface ConnectionConfiguration {
	readonly DatabaseHost: string;
	readonly DatabaseName: string;
	readonly DatabasePort: number;
	readonly SecretArn: string;
	readonly TableName: string;
}
export interface CustomDocumentEnrichmentConfiguration {
	readonly InlineConfigurations?: (InlineCustomDocumentEnrichmentConfiguration[] | undefined) | undefined;
	readonly PostExtractionHookConfiguration?: (HookConfiguration | undefined) | undefined;
	readonly PreExtractionHookConfiguration?: (HookConfiguration | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
}
export interface DataSourceConfiguration {
	readonly ConfluenceConfiguration?: (ConfluenceConfiguration | undefined) | undefined;
	readonly DatabaseConfiguration?: (DatabaseConfiguration | undefined) | undefined;
	readonly GoogleDriveConfiguration?: (GoogleDriveConfiguration | undefined) | undefined;
	readonly OneDriveConfiguration?: (OneDriveConfiguration | undefined) | undefined;
	readonly S3Configuration?: (S3DataSourceConfiguration | undefined) | undefined;
	readonly SalesforceConfiguration?: (SalesforceConfiguration | undefined) | undefined;
	readonly ServiceNowConfiguration?: (ServiceNowConfiguration | undefined) | undefined;
	readonly SharePointConfiguration?: (SharePointConfiguration | undefined) | undefined;
	readonly WebCrawlerConfiguration?: (WebCrawlerConfiguration | undefined) | undefined;
	readonly WorkDocsConfiguration?: (WorkDocsConfiguration | undefined) | undefined;
}
export interface DataSourceToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: (string | undefined) | undefined;
	readonly IndexFieldName: string;
}
export interface DataSourceVpcConfiguration {
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
}
export interface DatabaseConfiguration {
	readonly AclConfiguration?: (AclConfiguration | undefined) | undefined;
	readonly ColumnConfiguration: ColumnConfiguration;
	readonly ConnectionConfiguration: ConnectionConfiguration;
	readonly DatabaseEngineType: string;
	readonly SqlConfiguration?: (SqlConfiguration | undefined) | undefined;
	readonly VpcConfiguration?: (DataSourceVpcConfiguration | undefined) | undefined;
}
export interface DocumentAttributeCondition {
	readonly ConditionDocumentAttributeKey: string;
	readonly ConditionOnValue?: (DocumentAttributeValue | undefined) | undefined;
	readonly Operator: string;
}
export interface DocumentAttributeTarget {
	readonly TargetDocumentAttributeKey: string;
	readonly TargetDocumentAttributeValue?: (DocumentAttributeValue | undefined) | undefined;
	readonly TargetDocumentAttributeValueDeletion?: (boolean | undefined) | undefined;
}
export interface DocumentAttributeValue {
	readonly DateValue?: (string | undefined) | undefined;
	readonly LongValue?: (number | undefined) | undefined;
	readonly StringListValue?: (string[] | undefined) | undefined;
	readonly StringValue?: (string | undefined) | undefined;
}
export interface DocumentsMetadataConfiguration {
	readonly S3Prefix?: (string | undefined) | undefined;
}
export interface GoogleDriveConfiguration {
	readonly ExcludeMimeTypes?: (string[] | undefined) | undefined;
	readonly ExcludeSharedDrives?: (string[] | undefined) | undefined;
	readonly ExcludeUserAccounts?: (string[] | undefined) | undefined;
	readonly ExclusionPatterns?: (string[] | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly InclusionPatterns?: (string[] | undefined) | undefined;
	readonly SecretArn: string;
}
export interface HookConfiguration {
	readonly InvocationCondition?: (DocumentAttributeCondition | undefined) | undefined;
	readonly LambdaArn: string;
	readonly S3Bucket: string;
}
export interface InlineCustomDocumentEnrichmentConfiguration {
	readonly Condition?: (DocumentAttributeCondition | undefined) | undefined;
	readonly DocumentContentDeletion?: (boolean | undefined) | undefined;
	readonly Target?: (DocumentAttributeTarget | undefined) | undefined;
}
export interface OneDriveConfiguration {
	readonly DisableLocalGroups?: (boolean | undefined) | undefined;
	readonly ExclusionPatterns?: (string[] | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly InclusionPatterns?: (string[] | undefined) | undefined;
	readonly OneDriveUsers: OneDriveUsers;
	readonly SecretArn: string;
	readonly TenantDomain: string;
}
export interface OneDriveUsers {
	readonly OneDriveUserList?: (string[] | undefined) | undefined;
	readonly OneDriveUserS3Path?: (S3Path | undefined) | undefined;
}
export interface ProxyConfiguration {
	readonly Credentials?: (string | undefined) | undefined;
	readonly Host: string;
	readonly Port: number;
}
export interface S3DataSourceConfiguration {
	readonly AccessControlListConfiguration?: (AccessControlListConfiguration | undefined) | undefined;
	readonly BucketName: string;
	readonly DocumentsMetadataConfiguration?: (DocumentsMetadataConfiguration | undefined) | undefined;
	readonly ExclusionPatterns?: (string[] | undefined) | undefined;
	readonly InclusionPatterns?: (string[] | undefined) | undefined;
	readonly InclusionPrefixes?: (string[] | undefined) | undefined;
}
export interface S3Path {
	readonly Bucket: string;
	readonly Key: string;
}
export interface SalesforceChatterFeedConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly IncludeFilterTypes?: (string[] | undefined) | undefined;
}
export interface SalesforceConfiguration {
	readonly ChatterFeedConfiguration?: (SalesforceChatterFeedConfiguration | undefined) | undefined;
	readonly CrawlAttachments?: (boolean | undefined) | undefined;
	readonly ExcludeAttachmentFilePatterns?: (string[] | undefined) | undefined;
	readonly IncludeAttachmentFilePatterns?: (string[] | undefined) | undefined;
	readonly KnowledgeArticleConfiguration?: (SalesforceKnowledgeArticleConfiguration | undefined) | undefined;
	readonly SecretArn: string;
	readonly ServerUrl: string;
	readonly StandardObjectAttachmentConfiguration?:
		| (SalesforceStandardObjectAttachmentConfiguration | undefined)
		| undefined;
	readonly StandardObjectConfigurations?: (SalesforceStandardObjectConfiguration[] | undefined) | undefined;
}
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly Name: string;
}
export interface SalesforceKnowledgeArticleConfiguration {
	readonly CustomKnowledgeArticleTypeConfigurations?:
		| (SalesforceCustomKnowledgeArticleTypeConfiguration[] | undefined)
		| undefined;
	readonly IncludedStates: string[];
	readonly StandardKnowledgeArticleTypeConfiguration?:
		| (SalesforceStandardKnowledgeArticleTypeConfiguration | undefined)
		| undefined;
}
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
}
export interface SalesforceStandardObjectAttachmentConfiguration {
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
}
export interface SalesforceStandardObjectConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly Name: string;
}
export interface ServiceNowConfiguration {
	readonly AuthenticationType?: (string | undefined) | undefined;
	readonly HostUrl: string;
	readonly KnowledgeArticleConfiguration?: (ServiceNowKnowledgeArticleConfiguration | undefined) | undefined;
	readonly SecretArn: string;
	readonly ServiceCatalogConfiguration?: (ServiceNowServiceCatalogConfiguration | undefined) | undefined;
	readonly ServiceNowBuildVersion: string;
}
export interface ServiceNowKnowledgeArticleConfiguration {
	readonly CrawlAttachments?: (boolean | undefined) | undefined;
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly ExcludeAttachmentFilePatterns?: (string[] | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly FilterQuery?: (string | undefined) | undefined;
	readonly IncludeAttachmentFilePatterns?: (string[] | undefined) | undefined;
}
export interface ServiceNowServiceCatalogConfiguration {
	readonly CrawlAttachments?: (boolean | undefined) | undefined;
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly ExcludeAttachmentFilePatterns?: (string[] | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly IncludeAttachmentFilePatterns?: (string[] | undefined) | undefined;
}
export interface SharePointConfiguration {
	readonly CrawlAttachments?: (boolean | undefined) | undefined;
	readonly DisableLocalGroups?: (boolean | undefined) | undefined;
	readonly DocumentTitleFieldName?: (string | undefined) | undefined;
	readonly ExclusionPatterns?: (string[] | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly InclusionPatterns?: (string[] | undefined) | undefined;
	readonly SecretArn: string;
	readonly SharePointVersion: string;
	readonly SslCertificateS3Path?: (S3Path | undefined) | undefined;
	readonly Urls: string[];
	readonly UseChangeLog?: (boolean | undefined) | undefined;
	readonly VpcConfiguration?: (DataSourceVpcConfiguration | undefined) | undefined;
}
export interface SqlConfiguration {
	readonly QueryIdentifiersEnclosingOption?: (string | undefined) | undefined;
}
export interface WebCrawlerAuthenticationConfiguration {
	readonly BasicAuthentication?: (WebCrawlerBasicAuthentication[] | undefined) | undefined;
}
export interface WebCrawlerBasicAuthentication {
	readonly Credentials: string;
	readonly Host: string;
	readonly Port: number;
}
export interface WebCrawlerConfiguration {
	readonly AuthenticationConfiguration?: (WebCrawlerAuthenticationConfiguration | undefined) | undefined;
	readonly CrawlDepth?: (number | undefined) | undefined;
	readonly MaxContentSizePerPageInMegaBytes?: (number | undefined) | undefined;
	readonly MaxLinksPerPage?: (number | undefined) | undefined;
	readonly MaxUrlsPerMinuteCrawlRate?: (number | undefined) | undefined;
	readonly ProxyConfiguration?: (ProxyConfiguration | undefined) | undefined;
	readonly UrlExclusionPatterns?: (string[] | undefined) | undefined;
	readonly UrlInclusionPatterns?: (string[] | undefined) | undefined;
	readonly Urls: WebCrawlerUrls;
}
export interface WebCrawlerSeedUrlConfiguration {
	readonly SeedUrls: string[];
	readonly WebCrawlerMode?: (string | undefined) | undefined;
}
export interface WebCrawlerSiteMapsConfiguration {
	readonly SiteMaps: string[];
}
export interface WebCrawlerUrls {
	readonly SeedUrlConfiguration?: (WebCrawlerSeedUrlConfiguration | undefined) | undefined;
	readonly SiteMapsConfiguration?: (WebCrawlerSiteMapsConfiguration | undefined) | undefined;
}
export interface WorkDocsConfiguration {
	readonly CrawlComments?: (boolean | undefined) | undefined;
	readonly ExclusionPatterns?: (string[] | undefined) | undefined;
	readonly FieldMappings?: (DataSourceToIndexFieldMapping[] | undefined) | undefined;
	readonly InclusionPatterns?: (string[] | undefined) | undefined;
	readonly OrganizationId: string;
	readonly UseChangeLog?: (boolean | undefined) | undefined;
}
export interface CapacityUnitsConfiguration {
	readonly QueryCapacityUnits: number;
	readonly StorageCapacityUnits: number;
}
export interface DocumentMetadataConfiguration {
	readonly Name: string;
	readonly Relevance?: (Relevance | undefined) | undefined;
	readonly Search?: (Search | undefined) | undefined;
	readonly Type: string;
}
export interface JsonTokenTypeConfiguration {
	readonly GroupAttributeField: string;
	readonly UserNameAttributeField: string;
}
export interface JwtTokenTypeConfiguration {
	readonly ClaimRegex?: (string | undefined) | undefined;
	readonly GroupAttributeField?: (string | undefined) | undefined;
	readonly Issuer?: (string | undefined) | undefined;
	readonly KeyLocation: string;
	readonly SecretManagerArn?: (string | undefined) | undefined;
	readonly URL?: (string | undefined) | undefined;
	readonly UserNameAttributeField?: (string | undefined) | undefined;
}
export interface Relevance {
	readonly Duration?: (string | undefined) | undefined;
	readonly Freshness?: (boolean | undefined) | undefined;
	readonly Importance?: (number | undefined) | undefined;
	readonly RankOrder?: (string | undefined) | undefined;
	readonly ValueImportanceItems?: (ValueImportanceItem[] | undefined) | undefined;
}
export interface Search {
	readonly Displayable?: (boolean | undefined) | undefined;
	readonly Facetable?: (boolean | undefined) | undefined;
	readonly Searchable?: (boolean | undefined) | undefined;
	readonly Sortable?: (boolean | undefined) | undefined;
}
export interface ServerSideEncryptionConfiguration {
	readonly KmsKeyId?: (string | undefined) | undefined;
}
export interface UserTokenConfiguration {
	readonly JsonTokenTypeConfiguration?: (JsonTokenTypeConfiguration | undefined) | undefined;
	readonly JwtTokenTypeConfiguration?: (JwtTokenTypeConfiguration | undefined) | undefined;
}
export interface ValueImportanceItem {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (number | undefined) | undefined;
}
export default {
	DataSource: DataSource,
	Faq: Faq,
	Index: Index,
};
