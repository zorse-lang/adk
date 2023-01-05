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
	readonly CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration | undefined;
	readonly DataSourceConfiguration?: DataSourceConfiguration | undefined;
	readonly Description?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly Schedule?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly FileFormat?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CapacityUnits?: CapacityUnitsConfiguration | undefined;
	readonly Description?: string | undefined;
	readonly DocumentMetadataConfigurations?: DocumentMetadataConfiguration[] | undefined;
	readonly ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UserContextPolicy?: string | undefined;
	readonly UserTokenConfigurations?: UserTokenConfiguration[] | undefined;
	readonly LogicalId: string;
}
export interface AccessControlListConfiguration {
	readonly KeyPath?: string | undefined;
}
export interface AclConfiguration {
	readonly AllowedGroupsColumnName: string;
}
export interface ColumnConfiguration {
	readonly ChangeDetectingColumns: string[];
	readonly DocumentDataColumnName: string;
	readonly DocumentIdColumnName: string;
	readonly DocumentTitleColumnName?: string | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
}
export interface ConfluenceAttachmentConfiguration {
	readonly AttachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[] | undefined;
	readonly CrawlAttachments?: boolean | undefined;
}
export interface ConfluenceAttachmentToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: string | undefined;
	readonly IndexFieldName: string;
}
export interface ConfluenceBlogConfiguration {
	readonly BlogFieldMappings?: ConfluenceBlogToIndexFieldMapping[] | undefined;
}
export interface ConfluenceBlogToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: string | undefined;
	readonly IndexFieldName: string;
}
export interface ConfluenceConfiguration {
	readonly AttachmentConfiguration?: ConfluenceAttachmentConfiguration | undefined;
	readonly BlogConfiguration?: ConfluenceBlogConfiguration | undefined;
	readonly ExclusionPatterns?: string[] | undefined;
	readonly InclusionPatterns?: string[] | undefined;
	readonly PageConfiguration?: ConfluencePageConfiguration | undefined;
	readonly SecretArn: string;
	readonly ServerUrl: string;
	readonly SpaceConfiguration?: ConfluenceSpaceConfiguration | undefined;
	readonly Version: string;
	readonly VpcConfiguration?: DataSourceVpcConfiguration | undefined;
}
export interface ConfluencePageConfiguration {
	readonly PageFieldMappings?: ConfluencePageToIndexFieldMapping[] | undefined;
}
export interface ConfluencePageToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: string | undefined;
	readonly IndexFieldName: string;
}
export interface ConfluenceSpaceConfiguration {
	readonly CrawlArchivedSpaces?: boolean | undefined;
	readonly CrawlPersonalSpaces?: boolean | undefined;
	readonly ExcludeSpaces?: string[] | undefined;
	readonly IncludeSpaces?: string[] | undefined;
	readonly SpaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[] | undefined;
}
export interface ConfluenceSpaceToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: string | undefined;
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
	readonly InlineConfigurations?: InlineCustomDocumentEnrichmentConfiguration[] | undefined;
	readonly PostExtractionHookConfiguration?: HookConfiguration | undefined;
	readonly PreExtractionHookConfiguration?: HookConfiguration | undefined;
	readonly RoleArn?: string | undefined;
}
export interface DataSourceConfiguration {
	readonly ConfluenceConfiguration?: ConfluenceConfiguration | undefined;
	readonly DatabaseConfiguration?: DatabaseConfiguration | undefined;
	readonly GoogleDriveConfiguration?: GoogleDriveConfiguration | undefined;
	readonly OneDriveConfiguration?: OneDriveConfiguration | undefined;
	readonly S3Configuration?: S3DataSourceConfiguration | undefined;
	readonly SalesforceConfiguration?: SalesforceConfiguration | undefined;
	readonly ServiceNowConfiguration?: ServiceNowConfiguration | undefined;
	readonly SharePointConfiguration?: SharePointConfiguration | undefined;
	readonly WebCrawlerConfiguration?: WebCrawlerConfiguration | undefined;
	readonly WorkDocsConfiguration?: WorkDocsConfiguration | undefined;
}
export interface DataSourceToIndexFieldMapping {
	readonly DataSourceFieldName: string;
	readonly DateFieldFormat?: string | undefined;
	readonly IndexFieldName: string;
}
export interface DataSourceVpcConfiguration {
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
}
export interface DatabaseConfiguration {
	readonly AclConfiguration?: AclConfiguration | undefined;
	readonly ColumnConfiguration: ColumnConfiguration;
	readonly ConnectionConfiguration: ConnectionConfiguration;
	readonly DatabaseEngineType: string;
	readonly SqlConfiguration?: SqlConfiguration | undefined;
	readonly VpcConfiguration?: DataSourceVpcConfiguration | undefined;
}
export interface DocumentAttributeCondition {
	readonly ConditionDocumentAttributeKey: string;
	readonly ConditionOnValue?: DocumentAttributeValue | undefined;
	readonly Operator: string;
}
export interface DocumentAttributeTarget {
	readonly TargetDocumentAttributeKey: string;
	readonly TargetDocumentAttributeValue?: DocumentAttributeValue | undefined;
	readonly TargetDocumentAttributeValueDeletion?: boolean | undefined;
}
export interface DocumentAttributeValue {
	readonly DateValue?: string | undefined;
	readonly LongValue?: number | undefined;
	readonly StringListValue?: string[] | undefined;
	readonly StringValue?: string | undefined;
}
export interface DocumentsMetadataConfiguration {
	readonly S3Prefix?: string | undefined;
}
export interface GoogleDriveConfiguration {
	readonly ExcludeMimeTypes?: string[] | undefined;
	readonly ExcludeSharedDrives?: string[] | undefined;
	readonly ExcludeUserAccounts?: string[] | undefined;
	readonly ExclusionPatterns?: string[] | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly InclusionPatterns?: string[] | undefined;
	readonly SecretArn: string;
}
export interface HookConfiguration {
	readonly InvocationCondition?: DocumentAttributeCondition | undefined;
	readonly LambdaArn: string;
	readonly S3Bucket: string;
}
export interface InlineCustomDocumentEnrichmentConfiguration {
	readonly Condition?: DocumentAttributeCondition | undefined;
	readonly DocumentContentDeletion?: boolean | undefined;
	readonly Target?: DocumentAttributeTarget | undefined;
}
export interface OneDriveConfiguration {
	readonly DisableLocalGroups?: boolean | undefined;
	readonly ExclusionPatterns?: string[] | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly InclusionPatterns?: string[] | undefined;
	readonly OneDriveUsers: OneDriveUsers;
	readonly SecretArn: string;
	readonly TenantDomain: string;
}
export interface OneDriveUsers {
	readonly OneDriveUserList?: string[] | undefined;
	readonly OneDriveUserS3Path?: S3Path | undefined;
}
export interface ProxyConfiguration {
	readonly Credentials?: string | undefined;
	readonly Host: string;
	readonly Port: number;
}
export interface S3DataSourceConfiguration {
	readonly AccessControlListConfiguration?: AccessControlListConfiguration | undefined;
	readonly BucketName: string;
	readonly DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration | undefined;
	readonly ExclusionPatterns?: string[] | undefined;
	readonly InclusionPatterns?: string[] | undefined;
	readonly InclusionPrefixes?: string[] | undefined;
}
export interface S3Path {
	readonly Bucket: string;
	readonly Key: string;
}
export interface SalesforceChatterFeedConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: string | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly IncludeFilterTypes?: string[] | undefined;
}
export interface SalesforceConfiguration {
	readonly ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration | undefined;
	readonly CrawlAttachments?: boolean | undefined;
	readonly ExcludeAttachmentFilePatterns?: string[] | undefined;
	readonly IncludeAttachmentFilePatterns?: string[] | undefined;
	readonly KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration | undefined;
	readonly SecretArn: string;
	readonly ServerUrl: string;
	readonly StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration | undefined;
	readonly StandardObjectConfigurations?: SalesforceStandardObjectConfiguration[] | undefined;
}
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: string | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly Name: string;
}
export interface SalesforceKnowledgeArticleConfiguration {
	readonly CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[] | undefined;
	readonly IncludedStates: string[];
	readonly StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration | undefined;
}
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: string | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
}
export interface SalesforceStandardObjectAttachmentConfiguration {
	readonly DocumentTitleFieldName?: string | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
}
export interface SalesforceStandardObjectConfiguration {
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: string | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly Name: string;
}
export interface ServiceNowConfiguration {
	readonly AuthenticationType?: string | undefined;
	readonly HostUrl: string;
	readonly KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration | undefined;
	readonly SecretArn: string;
	readonly ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration | undefined;
	readonly ServiceNowBuildVersion: string;
}
export interface ServiceNowKnowledgeArticleConfiguration {
	readonly CrawlAttachments?: boolean | undefined;
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: string | undefined;
	readonly ExcludeAttachmentFilePatterns?: string[] | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly FilterQuery?: string | undefined;
	readonly IncludeAttachmentFilePatterns?: string[] | undefined;
}
export interface ServiceNowServiceCatalogConfiguration {
	readonly CrawlAttachments?: boolean | undefined;
	readonly DocumentDataFieldName: string;
	readonly DocumentTitleFieldName?: string | undefined;
	readonly ExcludeAttachmentFilePatterns?: string[] | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly IncludeAttachmentFilePatterns?: string[] | undefined;
}
export interface SharePointConfiguration {
	readonly CrawlAttachments?: boolean | undefined;
	readonly DisableLocalGroups?: boolean | undefined;
	readonly DocumentTitleFieldName?: string | undefined;
	readonly ExclusionPatterns?: string[] | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly InclusionPatterns?: string[] | undefined;
	readonly SecretArn: string;
	readonly SharePointVersion: string;
	readonly SslCertificateS3Path?: S3Path | undefined;
	readonly Urls: string[];
	readonly UseChangeLog?: boolean | undefined;
	readonly VpcConfiguration?: DataSourceVpcConfiguration | undefined;
}
export interface SqlConfiguration {
	readonly QueryIdentifiersEnclosingOption?: string | undefined;
}
export interface WebCrawlerAuthenticationConfiguration {
	readonly BasicAuthentication?: WebCrawlerBasicAuthentication[] | undefined;
}
export interface WebCrawlerBasicAuthentication {
	readonly Credentials: string;
	readonly Host: string;
	readonly Port: number;
}
export interface WebCrawlerConfiguration {
	readonly AuthenticationConfiguration?: WebCrawlerAuthenticationConfiguration | undefined;
	readonly CrawlDepth?: number | undefined;
	readonly MaxContentSizePerPageInMegaBytes?: number | undefined;
	readonly MaxLinksPerPage?: number | undefined;
	readonly MaxUrlsPerMinuteCrawlRate?: number | undefined;
	readonly ProxyConfiguration?: ProxyConfiguration | undefined;
	readonly UrlExclusionPatterns?: string[] | undefined;
	readonly UrlInclusionPatterns?: string[] | undefined;
	readonly Urls: WebCrawlerUrls;
}
export interface WebCrawlerSeedUrlConfiguration {
	readonly SeedUrls: string[];
	readonly WebCrawlerMode?: string | undefined;
}
export interface WebCrawlerSiteMapsConfiguration {
	readonly SiteMaps: string[];
}
export interface WebCrawlerUrls {
	readonly SeedUrlConfiguration?: WebCrawlerSeedUrlConfiguration | undefined;
	readonly SiteMapsConfiguration?: WebCrawlerSiteMapsConfiguration | undefined;
}
export interface WorkDocsConfiguration {
	readonly CrawlComments?: boolean | undefined;
	readonly ExclusionPatterns?: string[] | undefined;
	readonly FieldMappings?: DataSourceToIndexFieldMapping[] | undefined;
	readonly InclusionPatterns?: string[] | undefined;
	readonly OrganizationId: string;
	readonly UseChangeLog?: boolean | undefined;
}
export interface CapacityUnitsConfiguration {
	readonly QueryCapacityUnits: number;
	readonly StorageCapacityUnits: number;
}
export interface DocumentMetadataConfiguration {
	readonly Name: string;
	readonly Relevance?: Relevance | undefined;
	readonly Search?: Search | undefined;
	readonly Type: string;
}
export interface JsonTokenTypeConfiguration {
	readonly GroupAttributeField: string;
	readonly UserNameAttributeField: string;
}
export interface JwtTokenTypeConfiguration {
	readonly ClaimRegex?: string | undefined;
	readonly GroupAttributeField?: string | undefined;
	readonly Issuer?: string | undefined;
	readonly KeyLocation: string;
	readonly SecretManagerArn?: string | undefined;
	readonly URL?: string | undefined;
	readonly UserNameAttributeField?: string | undefined;
}
export interface Relevance {
	readonly Duration?: string | undefined;
	readonly Freshness?: boolean | undefined;
	readonly Importance?: number | undefined;
	readonly RankOrder?: string | undefined;
	readonly ValueImportanceItems?: ValueImportanceItem[] | undefined;
}
export interface Search {
	readonly Displayable?: boolean | undefined;
	readonly Facetable?: boolean | undefined;
	readonly Searchable?: boolean | undefined;
	readonly Sortable?: boolean | undefined;
}
export interface ServerSideEncryptionConfiguration {
	readonly KmsKeyId?: string | undefined;
}
export interface UserTokenConfiguration {
	readonly JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration | undefined;
	readonly JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration | undefined;
}
export interface ValueImportanceItem {
	readonly Key?: string | undefined;
	readonly Value?: number | undefined;
}
export default {
	DataSource: DataSource,
	Faq: Faq,
	Index: Index,
};
