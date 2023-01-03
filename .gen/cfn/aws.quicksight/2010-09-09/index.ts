import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Analysis extends CfnResource<AnalysisComponentInputs> implements AnalysisComponentOutputs {
	constructor(entity: ADKEntity, options: AnalysisComponentInputs) {
		super(entity, options.LogicalId, "AWS::QuickSight::Analysis", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly DataSetArns: string[];
	public readonly LastUpdatedTime: string;
	public readonly Sheets: Map<string, Sheet>;
	public readonly Status: string;
}
export interface AnalysisComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly DataSetArns: string[];
	readonly LastUpdatedTime: string;
	readonly Sheets: Map<string, Sheet>;
	readonly Status: string;
}
export interface AnalysisComponentInputs {
	readonly AnalysisId: string;
	readonly AwsAccountId: string;
	readonly SourceEntity: AnalysisSourceEntity;
	readonly Errors?: (AnalysisError[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Parameters?: (Parameters | undefined) | undefined;
	readonly Permissions?: (ResourcePermission[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly ThemeArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Dashboard extends CfnResource<DashboardComponentInputs> implements DashboardComponentOutputs {
	constructor(entity: ADKEntity, options: DashboardComponentInputs) {
		super(entity, options.LogicalId, "AWS::QuickSight::Dashboard", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastPublishedTime: string;
	public readonly LastUpdatedTime: string;
	public readonly VersionArn: string;
	public readonly VersionCreatedTime: string;
	public readonly VersionDataSetArns: string[];
	public readonly VersionErrors: Map<string, DashboardError>;
	public readonly VersionSheets: Map<string, Sheet>;
	public readonly VersionSourceEntityArn: string;
	public readonly VersionStatus: string;
	public readonly VersionThemeArn: string;
	public readonly VersionVersionNumber: number;
}
export interface DashboardComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastPublishedTime: string;
	readonly LastUpdatedTime: string;
	readonly VersionArn: string;
	readonly VersionCreatedTime: string;
	readonly VersionDataSetArns: string[];
	readonly VersionErrors: Map<string, DashboardError>;
	readonly VersionSheets: Map<string, Sheet>;
	readonly VersionSourceEntityArn: string;
	readonly VersionStatus: string;
	readonly VersionThemeArn: string;
	readonly VersionVersionNumber: number;
}
export interface DashboardComponentInputs {
	readonly AwsAccountId: string;
	readonly DashboardId: string;
	readonly SourceEntity: DashboardSourceEntity;
	readonly DashboardPublishOptions?: (DashboardPublishOptions | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Parameters?: (Parameters | undefined) | undefined;
	readonly Permissions?: (ResourcePermission[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly ThemeArn?: (string | undefined) | undefined;
	readonly VersionDescription?: string | undefined;
	readonly LogicalId: string;
}
export class DataSet extends CfnResource<DataSetComponentInputs> implements DataSetComponentOutputs {
	constructor(entity: ADKEntity, options: DataSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::QuickSight::DataSet", options);
	}
	public readonly Arn: string;
	public readonly ConsumedSpiceCapacityInBytes: number;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
	public readonly OutputColumns: Map<string, OutputColumn>;
}
export interface DataSetComponentOutputs {
	readonly Arn: string;
	readonly ConsumedSpiceCapacityInBytes: number;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
	readonly OutputColumns: Map<string, OutputColumn>;
}
export interface DataSetComponentInputs {
	readonly AwsAccountId?: (string | undefined) | undefined;
	readonly ColumnGroups?: (ColumnGroup[] | undefined) | undefined;
	readonly ColumnLevelPermissionRules?: (ColumnLevelPermissionRule[] | undefined) | undefined;
	readonly DataSetId?: (string | undefined) | undefined;
	readonly DataSetUsageConfiguration?: (DataSetUsageConfiguration | undefined) | undefined;
	readonly FieldFolders?: ({ [key: string]: FieldFolder } | undefined) | undefined;
	readonly ImportMode?: (string | undefined) | undefined;
	readonly IngestionWaitPolicy?: (IngestionWaitPolicy | undefined) | undefined;
	readonly LogicalTableMap?: ({ [key: string]: LogicalTable } | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Permissions?: (ResourcePermission[] | undefined) | undefined;
	readonly PhysicalTableMap?: ({ [key: string]: PhysicalTable } | undefined) | undefined;
	readonly RowLevelPermissionDataSet?: (RowLevelPermissionDataSet | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DataSource extends CfnResource<DataSourceComponentInputs> implements DataSourceComponentOutputs {
	constructor(entity: ADKEntity, options: DataSourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::QuickSight::DataSource", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
	public readonly Status: string;
}
export interface DataSourceComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
	readonly Status: string;
}
export interface DataSourceComponentInputs {
	readonly AlternateDataSourceParameters?: (DataSourceParameters[] | undefined) | undefined;
	readonly AwsAccountId?: (string | undefined) | undefined;
	readonly Credentials?: (DataSourceCredentials | undefined) | undefined;
	readonly DataSourceId?: (string | undefined) | undefined;
	readonly DataSourceParameters?: (DataSourceParameters | undefined) | undefined;
	readonly ErrorInfo?: (DataSourceErrorInfo | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Permissions?: (ResourcePermission[] | undefined) | undefined;
	readonly SslProperties?: (SslProperties | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly VpcConnectionProperties?: (VpcConnectionProperties | undefined) | undefined;
	readonly LogicalId: string;
}
export class Template extends CfnResource<TemplateComponentInputs> implements TemplateComponentOutputs {
	constructor(entity: ADKEntity, options: TemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::QuickSight::Template", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
	public readonly VersionCreatedTime: string;
	public readonly VersionDataSetConfigurations: Map<string, DataSetConfiguration>;
	public readonly VersionErrors: Map<string, TemplateError>;
	public readonly VersionSheets: Map<string, Sheet>;
	public readonly VersionSourceEntityArn: string;
	public readonly VersionStatus: string;
	public readonly VersionThemeArn: string;
	public readonly VersionVersionNumber: number;
}
export interface TemplateComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
	readonly VersionCreatedTime: string;
	readonly VersionDataSetConfigurations: Map<string, DataSetConfiguration>;
	readonly VersionErrors: Map<string, TemplateError>;
	readonly VersionSheets: Map<string, Sheet>;
	readonly VersionSourceEntityArn: string;
	readonly VersionStatus: string;
	readonly VersionThemeArn: string;
	readonly VersionVersionNumber: number;
}
export interface TemplateComponentInputs {
	readonly AwsAccountId: string;
	readonly SourceEntity: TemplateSourceEntity;
	readonly TemplateId: string;
	readonly Name?: (string | undefined) | undefined;
	readonly Permissions?: (ResourcePermission[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VersionDescription?: string | undefined;
	readonly LogicalId: string;
}
export class Theme extends CfnResource<ThemeComponentInputs> implements ThemeComponentOutputs {
	constructor(entity: ADKEntity, options: ThemeComponentInputs) {
		super(entity, options.LogicalId, "AWS::QuickSight::Theme", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
	public readonly Type: string;
	public readonly VersionArn: string;
	public readonly VersionBaseThemeId: string;
	public readonly VersionCreatedTime: string;
	public readonly VersionErrors: Map<string, ThemeError>;
	public readonly VersionStatus: string;
	public readonly VersionVersionNumber: number;
}
export interface ThemeComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
	readonly Type: string;
	readonly VersionArn: string;
	readonly VersionBaseThemeId: string;
	readonly VersionCreatedTime: string;
	readonly VersionErrors: Map<string, ThemeError>;
	readonly VersionStatus: string;
	readonly VersionVersionNumber: number;
}
export interface ThemeComponentInputs {
	readonly AwsAccountId: string;
	readonly ThemeId: string;
	readonly BaseThemeId?: (string | undefined) | undefined;
	readonly Configuration?: (ThemeConfiguration | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Permissions?: (ResourcePermission[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VersionDescription?: string | undefined;
	readonly LogicalId: string;
}
export interface AnalysisError {
	readonly Message?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface AnalysisSourceEntity {
	readonly SourceTemplate?: (AnalysisSourceTemplate | undefined) | undefined;
}
export interface AnalysisSourceTemplate {
	readonly Arn: string;
	readonly DataSetReferences: DataSetReference[];
}
export interface DataSetReference {
	readonly DataSetArn: string;
	readonly DataSetPlaceholder: string;
}
export interface DateTimeParameter {
	readonly Name: string;
	readonly Values: string[];
}
export interface DecimalParameter {
	readonly Name: string;
	readonly Values: number[];
}
export interface IntegerParameter {
	readonly Name: string;
	readonly Values: number[];
}
export interface Parameters {
	readonly DateTimeParameters?: (DateTimeParameter[] | undefined) | undefined;
	readonly DecimalParameters?: (DecimalParameter[] | undefined) | undefined;
	readonly IntegerParameters?: (IntegerParameter[] | undefined) | undefined;
	readonly StringParameters?: (StringParameter[] | undefined) | undefined;
}
export interface ResourcePermission {
	readonly Actions: string[];
	readonly Principal: string;
}
export interface Sheet {
	readonly Name?: (string | undefined) | undefined;
	readonly SheetId?: (string | undefined) | undefined;
}
export interface StringParameter {
	readonly Name: string;
	readonly Values: string[];
}
export interface AdHocFilteringOption {
	readonly AvailabilityStatus?: (string | undefined) | undefined;
}
export interface DashboardError {
	readonly Message?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface DashboardPublishOptions {
	readonly AdHocFilteringOption?: (AdHocFilteringOption | undefined) | undefined;
	readonly ExportToCSVOption?: (ExportToCSVOption | undefined) | undefined;
	readonly SheetControlsOption?: (SheetControlsOption | undefined) | undefined;
}
export interface DashboardSourceEntity {
	readonly SourceTemplate?: (DashboardSourceTemplate | undefined) | undefined;
}
export interface DashboardSourceTemplate {
	readonly Arn: string;
	readonly DataSetReferences: DataSetReference[];
}
export interface DashboardVersion {
	readonly Arn?: (string | undefined) | undefined;
	readonly CreatedTime?: (string | undefined) | undefined;
	readonly DataSetArns?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Errors?: (DashboardError[] | undefined) | undefined;
	readonly Sheets?: (Sheet[] | undefined) | undefined;
	readonly SourceEntityArn?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly ThemeArn?: (string | undefined) | undefined;
	readonly VersionNumber?: (number | undefined) | undefined;
}
export interface ExportToCSVOption {
	readonly AvailabilityStatus?: (string | undefined) | undefined;
}
export interface SheetControlsOption {
	readonly VisibilityState?: (string | undefined) | undefined;
}
export interface CalculatedColumn {
	readonly ColumnId: string;
	readonly ColumnName: string;
	readonly Expression: string;
}
export interface CastColumnTypeOperation {
	readonly ColumnName: string;
	readonly Format?: (string | undefined) | undefined;
	readonly NewColumnType: string;
}
export interface ColumnDescription {
	readonly Text?: (string | undefined) | undefined;
}
export interface ColumnGroup {
	readonly GeoSpatialColumnGroup?: (GeoSpatialColumnGroup | undefined) | undefined;
}
export interface ColumnLevelPermissionRule {
	readonly ColumnNames?: (string[] | undefined) | undefined;
	readonly Principals?: (string[] | undefined) | undefined;
}
export interface ColumnTag {
	readonly ColumnDescription?: (ColumnDescription | undefined) | undefined;
	readonly ColumnGeographicRole?: (string | undefined) | undefined;
}
export interface CreateColumnsOperation {
	readonly Columns: CalculatedColumn[];
}
export interface CustomSql {
	readonly Columns: InputColumn[];
	readonly DataSourceArn: string;
	readonly Name: string;
	readonly SqlQuery: string;
}
export interface DataSetUsageConfiguration {
	readonly DisableUseAsDirectQuerySource?: (boolean | undefined) | undefined;
	readonly DisableUseAsImportedSource?: (boolean | undefined) | undefined;
}
export interface FieldFolder {
	readonly Columns?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
}
export interface FilterOperation {
	readonly ConditionExpression: string;
}
export interface GeoSpatialColumnGroup {
	readonly Columns: string[];
	readonly CountryCode?: (string | undefined) | undefined;
	readonly Name: string;
}
export interface IngestionWaitPolicy {
	readonly IngestionWaitTimeInHours?: (number | undefined) | undefined;
	readonly WaitForSpiceIngestion?: (boolean | undefined) | undefined;
}
export interface InputColumn {
	readonly Name: string;
	readonly Type: string;
}
export interface JoinInstruction {
	readonly LeftJoinKeyProperties?: (JoinKeyProperties | undefined) | undefined;
	readonly LeftOperand: string;
	readonly OnClause: string;
	readonly RightJoinKeyProperties?: (JoinKeyProperties | undefined) | undefined;
	readonly RightOperand: string;
	readonly Type: string;
}
export interface JoinKeyProperties {
	readonly UniqueKey?: (boolean | undefined) | undefined;
}
export interface LogicalTable {
	readonly Alias: string;
	readonly DataTransforms?: (TransformOperation[] | undefined) | undefined;
	readonly Source: LogicalTableSource;
}
export interface LogicalTableSource {
	readonly DataSetArn?: (string | undefined) | undefined;
	readonly JoinInstruction?: (JoinInstruction | undefined) | undefined;
	readonly PhysicalTableId?: (string | undefined) | undefined;
}
export interface OutputColumn {
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface PhysicalTable {
	readonly CustomSql?: (CustomSql | undefined) | undefined;
	readonly RelationalTable?: (RelationalTable | undefined) | undefined;
	readonly S3Source?: (S3Source | undefined) | undefined;
}
export interface ProjectOperation {
	readonly ProjectedColumns: string[];
}
export interface RelationalTable {
	readonly Catalog?: (string | undefined) | undefined;
	readonly DataSourceArn: string;
	readonly InputColumns: InputColumn[];
	readonly Name: string;
	readonly Schema?: (string | undefined) | undefined;
}
export interface RenameColumnOperation {
	readonly ColumnName: string;
	readonly NewColumnName: string;
}
export interface RowLevelPermissionDataSet {
	readonly Arn: string;
	readonly FormatVersion?: (string | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
	readonly PermissionPolicy: string;
}
export interface S3Source {
	readonly DataSourceArn: string;
	readonly InputColumns: InputColumn[];
	readonly UploadSettings?: (UploadSettings | undefined) | undefined;
}
export interface TagColumnOperation {
	readonly ColumnName: string;
	readonly Tags: ColumnTag[];
}
export interface TransformOperation {
	readonly CastColumnTypeOperation?: (CastColumnTypeOperation | undefined) | undefined;
	readonly CreateColumnsOperation?: (CreateColumnsOperation | undefined) | undefined;
	readonly FilterOperation?: (FilterOperation | undefined) | undefined;
	readonly ProjectOperation?: (ProjectOperation | undefined) | undefined;
	readonly RenameColumnOperation?: (RenameColumnOperation | undefined) | undefined;
	readonly TagColumnOperation?: (TagColumnOperation | undefined) | undefined;
}
export interface UploadSettings {
	readonly ContainsHeader?: (boolean | undefined) | undefined;
	readonly Delimiter?: (string | undefined) | undefined;
	readonly Format?: (string | undefined) | undefined;
	readonly StartFromRow?: (number | undefined) | undefined;
	readonly TextQualifier?: (string | undefined) | undefined;
}
export interface AmazonElasticsearchParameters {
	readonly Domain: string;
}
export interface AmazonOpenSearchParameters {
	readonly Domain: string;
}
export interface AthenaParameters {
	readonly WorkGroup?: (string | undefined) | undefined;
}
export interface AuroraParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface AuroraPostgreSqlParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface CredentialPair {
	readonly AlternateDataSourceParameters?: (DataSourceParameters[] | undefined) | undefined;
	readonly Password: string;
	readonly Username: string;
}
export interface DataSourceCredentials {
	readonly CopySourceArn?: (string | undefined) | undefined;
	readonly CredentialPair?: (CredentialPair | undefined) | undefined;
	readonly SecretArn?: (string | undefined) | undefined;
}
export interface DataSourceErrorInfo {
	readonly Message?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface DataSourceParameters {
	readonly AmazonElasticsearchParameters?: (AmazonElasticsearchParameters | undefined) | undefined;
	readonly AmazonOpenSearchParameters?: (AmazonOpenSearchParameters | undefined) | undefined;
	readonly AthenaParameters?: (AthenaParameters | undefined) | undefined;
	readonly AuroraParameters?: (AuroraParameters | undefined) | undefined;
	readonly AuroraPostgreSqlParameters?: (AuroraPostgreSqlParameters | undefined) | undefined;
	readonly MariaDbParameters?: (MariaDbParameters | undefined) | undefined;
	readonly MySqlParameters?: (MySqlParameters | undefined) | undefined;
	readonly OracleParameters?: (OracleParameters | undefined) | undefined;
	readonly PostgreSqlParameters?: (PostgreSqlParameters | undefined) | undefined;
	readonly PrestoParameters?: (PrestoParameters | undefined) | undefined;
	readonly RdsParameters?: (RdsParameters | undefined) | undefined;
	readonly RedshiftParameters?: (RedshiftParameters | undefined) | undefined;
	readonly S3Parameters?: (S3Parameters | undefined) | undefined;
	readonly SnowflakeParameters?: (SnowflakeParameters | undefined) | undefined;
	readonly SparkParameters?: (SparkParameters | undefined) | undefined;
	readonly SqlServerParameters?: (SqlServerParameters | undefined) | undefined;
	readonly TeradataParameters?: (TeradataParameters | undefined) | undefined;
}
export interface ManifestFileLocation {
	readonly Bucket: string;
	readonly Key: string;
}
export interface MariaDbParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface MySqlParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface OracleParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface PostgreSqlParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface PrestoParameters {
	readonly Catalog: string;
	readonly Host: string;
	readonly Port: number;
}
export interface RdsParameters {
	readonly Database: string;
	readonly InstanceId: string;
}
export interface RedshiftParameters {
	readonly ClusterId?: (string | undefined) | undefined;
	readonly Database: string;
	readonly Host?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
}
export interface S3Parameters {
	readonly ManifestFileLocation: ManifestFileLocation;
}
export interface SnowflakeParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Warehouse: string;
}
export interface SparkParameters {
	readonly Host: string;
	readonly Port: number;
}
export interface SqlServerParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface SslProperties {
	readonly DisableSsl?: (boolean | undefined) | undefined;
}
export interface TeradataParameters {
	readonly Database: string;
	readonly Host: string;
	readonly Port: number;
}
export interface VpcConnectionProperties {
	readonly VpcConnectionArn: string;
}
export interface ColumnGroupColumnSchema {
	readonly Name?: (string | undefined) | undefined;
}
export interface ColumnGroupSchema {
	readonly ColumnGroupColumnSchemaList?: (ColumnGroupColumnSchema[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface ColumnSchema {
	readonly DataType?: (string | undefined) | undefined;
	readonly GeographicRole?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface DataSetConfiguration {
	readonly ColumnGroupSchemaList?: (ColumnGroupSchema[] | undefined) | undefined;
	readonly DataSetSchema?: (DataSetSchema | undefined) | undefined;
	readonly Placeholder?: (string | undefined) | undefined;
}
export interface DataSetSchema {
	readonly ColumnSchemaList?: (ColumnSchema[] | undefined) | undefined;
}
export interface TemplateError {
	readonly Message?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface TemplateSourceAnalysis {
	readonly Arn: string;
	readonly DataSetReferences: DataSetReference[];
}
export interface TemplateSourceEntity {
	readonly SourceAnalysis?: (TemplateSourceAnalysis | undefined) | undefined;
	readonly SourceTemplate?: (TemplateSourceTemplate | undefined) | undefined;
}
export interface TemplateSourceTemplate {
	readonly Arn: string;
}
export interface TemplateVersion {
	readonly CreatedTime?: (string | undefined) | undefined;
	readonly DataSetConfigurations?: (DataSetConfiguration[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Errors?: (TemplateError[] | undefined) | undefined;
	readonly Sheets?: (Sheet[] | undefined) | undefined;
	readonly SourceEntityArn?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly ThemeArn?: (string | undefined) | undefined;
	readonly VersionNumber?: (number | undefined) | undefined;
}
export interface BorderStyle {
	readonly Show?: (boolean | undefined) | undefined;
}
export interface DataColorPalette {
	readonly Colors?: (string[] | undefined) | undefined;
	readonly EmptyFillColor?: (string | undefined) | undefined;
	readonly MinMaxGradient?: (string[] | undefined) | undefined;
}
export interface Font {
	readonly FontFamily?: (string | undefined) | undefined;
}
export interface GutterStyle {
	readonly Show?: (boolean | undefined) | undefined;
}
export interface MarginStyle {
	readonly Show?: (boolean | undefined) | undefined;
}
export interface SheetStyle {
	readonly Tile?: (TileStyle | undefined) | undefined;
	readonly TileLayout?: (TileLayoutStyle | undefined) | undefined;
}
export interface ThemeConfiguration {
	readonly DataColorPalette?: (DataColorPalette | undefined) | undefined;
	readonly Sheet?: (SheetStyle | undefined) | undefined;
	readonly Typography?: (Typography | undefined) | undefined;
	readonly UIColorPalette?: (UIColorPalette | undefined) | undefined;
}
export interface ThemeError {
	readonly Message?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface ThemeVersion {
	readonly Arn?: (string | undefined) | undefined;
	readonly BaseThemeId?: (string | undefined) | undefined;
	readonly Configuration?: (ThemeConfiguration | undefined) | undefined;
	readonly CreatedTime?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Errors?: (ThemeError[] | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly VersionNumber?: (number | undefined) | undefined;
}
export interface TileLayoutStyle {
	readonly Gutter?: (GutterStyle | undefined) | undefined;
	readonly Margin?: (MarginStyle | undefined) | undefined;
}
export interface TileStyle {
	readonly Border?: (BorderStyle | undefined) | undefined;
}
export interface Typography {
	readonly FontFamilies?: (Font[] | undefined) | undefined;
}
export interface UIColorPalette {
	readonly Accent?: (string | undefined) | undefined;
	readonly AccentForeground?: (string | undefined) | undefined;
	readonly Danger?: (string | undefined) | undefined;
	readonly DangerForeground?: (string | undefined) | undefined;
	readonly Dimension?: (string | undefined) | undefined;
	readonly DimensionForeground?: (string | undefined) | undefined;
	readonly Measure?: (string | undefined) | undefined;
	readonly MeasureForeground?: (string | undefined) | undefined;
	readonly PrimaryBackground?: (string | undefined) | undefined;
	readonly PrimaryForeground?: (string | undefined) | undefined;
	readonly SecondaryBackground?: (string | undefined) | undefined;
	readonly SecondaryForeground?: (string | undefined) | undefined;
	readonly Success?: (string | undefined) | undefined;
	readonly SuccessForeground?: (string | undefined) | undefined;
	readonly Warning?: (string | undefined) | undefined;
	readonly WarningForeground?: (string | undefined) | undefined;
}
export default {
	Analysis: Analysis,
	Dashboard: Dashboard,
	DataSet: DataSet,
	DataSource: DataSource,
	Template: Template,
	Theme: Theme,
};
