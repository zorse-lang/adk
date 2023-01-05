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
	readonly Errors?: AnalysisError[] | undefined;
	readonly Name?: string | undefined;
	readonly Parameters?: Parameters | undefined;
	readonly Permissions?: ResourcePermission[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly ThemeArn?: string | undefined;
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
	readonly DashboardPublishOptions?: DashboardPublishOptions | undefined;
	readonly Name?: string | undefined;
	readonly Parameters?: Parameters | undefined;
	readonly Permissions?: ResourcePermission[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly ThemeArn?: string | undefined;
	readonly VersionDescription?: string;
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
	readonly AwsAccountId?: string | undefined;
	readonly ColumnGroups?: ColumnGroup[] | undefined;
	readonly ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined;
	readonly DataSetId?: string | undefined;
	readonly DataSetUsageConfiguration?: DataSetUsageConfiguration | undefined;
	readonly FieldFolders?: { [key: string]: FieldFolder } | undefined;
	readonly ImportMode?: string | undefined;
	readonly IngestionWaitPolicy?: IngestionWaitPolicy | undefined;
	readonly LogicalTableMap?: { [key: string]: LogicalTable } | undefined;
	readonly Name?: string | undefined;
	readonly Permissions?: ResourcePermission[] | undefined;
	readonly PhysicalTableMap?: { [key: string]: PhysicalTable } | undefined;
	readonly RowLevelPermissionDataSet?: RowLevelPermissionDataSet | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly AlternateDataSourceParameters?: DataSourceParameters[] | undefined;
	readonly AwsAccountId?: string | undefined;
	readonly Credentials?: DataSourceCredentials | undefined;
	readonly DataSourceId?: string | undefined;
	readonly DataSourceParameters?: DataSourceParameters | undefined;
	readonly ErrorInfo?: DataSourceErrorInfo | undefined;
	readonly Name?: string | undefined;
	readonly Permissions?: ResourcePermission[] | undefined;
	readonly SslProperties?: SslProperties | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Type?: string | undefined;
	readonly VpcConnectionProperties?: VpcConnectionProperties | undefined;
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
	readonly Name?: string | undefined;
	readonly Permissions?: ResourcePermission[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VersionDescription?: string;
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
	readonly BaseThemeId?: string | undefined;
	readonly Configuration?: ThemeConfiguration | undefined;
	readonly Name?: string | undefined;
	readonly Permissions?: ResourcePermission[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VersionDescription?: string;
	readonly LogicalId: string;
}
export interface AnalysisError {
	readonly Message?: string | undefined;
	readonly Type?: string | undefined;
}
export interface AnalysisSourceEntity {
	readonly SourceTemplate?: AnalysisSourceTemplate | undefined;
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
	readonly DateTimeParameters?: DateTimeParameter[] | undefined;
	readonly DecimalParameters?: DecimalParameter[] | undefined;
	readonly IntegerParameters?: IntegerParameter[] | undefined;
	readonly StringParameters?: StringParameter[] | undefined;
}
export interface ResourcePermission {
	readonly Actions: string[];
	readonly Principal: string;
}
export interface Sheet {
	readonly Name?: string | undefined;
	readonly SheetId?: string | undefined;
}
export interface StringParameter {
	readonly Name: string;
	readonly Values: string[];
}
export interface AdHocFilteringOption {
	readonly AvailabilityStatus?: string | undefined;
}
export interface DashboardError {
	readonly Message?: string | undefined;
	readonly Type?: string | undefined;
}
export interface DashboardPublishOptions {
	readonly AdHocFilteringOption?: AdHocFilteringOption | undefined;
	readonly ExportToCSVOption?: ExportToCSVOption | undefined;
	readonly SheetControlsOption?: SheetControlsOption | undefined;
}
export interface DashboardSourceEntity {
	readonly SourceTemplate?: DashboardSourceTemplate | undefined;
}
export interface DashboardSourceTemplate {
	readonly Arn: string;
	readonly DataSetReferences: DataSetReference[];
}
export interface DashboardVersion {
	readonly Arn?: string | undefined;
	readonly CreatedTime?: string | undefined;
	readonly DataSetArns?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly Errors?: DashboardError[] | undefined;
	readonly Sheets?: Sheet[] | undefined;
	readonly SourceEntityArn?: string | undefined;
	readonly Status?: string | undefined;
	readonly ThemeArn?: string | undefined;
	readonly VersionNumber?: number | undefined;
}
export interface ExportToCSVOption {
	readonly AvailabilityStatus?: string | undefined;
}
export interface SheetControlsOption {
	readonly VisibilityState?: string | undefined;
}
export interface CalculatedColumn {
	readonly ColumnId: string;
	readonly ColumnName: string;
	readonly Expression: string;
}
export interface CastColumnTypeOperation {
	readonly ColumnName: string;
	readonly Format?: string | undefined;
	readonly NewColumnType: string;
}
export interface ColumnDescription {
	readonly Text?: string | undefined;
}
export interface ColumnGroup {
	readonly GeoSpatialColumnGroup?: GeoSpatialColumnGroup | undefined;
}
export interface ColumnLevelPermissionRule {
	readonly ColumnNames?: string[] | undefined;
	readonly Principals?: string[] | undefined;
}
export interface ColumnTag {
	readonly ColumnDescription?: ColumnDescription | undefined;
	readonly ColumnGeographicRole?: string | undefined;
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
	readonly DisableUseAsDirectQuerySource?: boolean | undefined;
	readonly DisableUseAsImportedSource?: boolean | undefined;
}
export interface FieldFolder {
	readonly Columns?: string[] | undefined;
	readonly Description?: string | undefined;
}
export interface FilterOperation {
	readonly ConditionExpression: string;
}
export interface GeoSpatialColumnGroup {
	readonly Columns: string[];
	readonly CountryCode?: string | undefined;
	readonly Name: string;
}
export interface IngestionWaitPolicy {
	readonly IngestionWaitTimeInHours?: number | undefined;
	readonly WaitForSpiceIngestion?: boolean | undefined;
}
export interface InputColumn {
	readonly Name: string;
	readonly Type: string;
}
export interface JoinInstruction {
	readonly LeftJoinKeyProperties?: JoinKeyProperties | undefined;
	readonly LeftOperand: string;
	readonly OnClause: string;
	readonly RightJoinKeyProperties?: JoinKeyProperties | undefined;
	readonly RightOperand: string;
	readonly Type: string;
}
export interface JoinKeyProperties {
	readonly UniqueKey?: boolean | undefined;
}
export interface LogicalTable {
	readonly Alias: string;
	readonly DataTransforms?: TransformOperation[] | undefined;
	readonly Source: LogicalTableSource;
}
export interface LogicalTableSource {
	readonly DataSetArn?: string | undefined;
	readonly JoinInstruction?: JoinInstruction | undefined;
	readonly PhysicalTableId?: string | undefined;
}
export interface OutputColumn {
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly Type?: string | undefined;
}
export interface PhysicalTable {
	readonly CustomSql?: CustomSql | undefined;
	readonly RelationalTable?: RelationalTable | undefined;
	readonly S3Source?: S3Source | undefined;
}
export interface ProjectOperation {
	readonly ProjectedColumns: string[];
}
export interface RelationalTable {
	readonly Catalog?: string | undefined;
	readonly DataSourceArn: string;
	readonly InputColumns: InputColumn[];
	readonly Name: string;
	readonly Schema?: string | undefined;
}
export interface RenameColumnOperation {
	readonly ColumnName: string;
	readonly NewColumnName: string;
}
export interface RowLevelPermissionDataSet {
	readonly Arn: string;
	readonly FormatVersion?: string | undefined;
	readonly Namespace?: string | undefined;
	readonly PermissionPolicy: string;
}
export interface S3Source {
	readonly DataSourceArn: string;
	readonly InputColumns: InputColumn[];
	readonly UploadSettings?: UploadSettings | undefined;
}
export interface TagColumnOperation {
	readonly ColumnName: string;
	readonly Tags: ColumnTag[];
}
export interface TransformOperation {
	readonly CastColumnTypeOperation?: CastColumnTypeOperation | undefined;
	readonly CreateColumnsOperation?: CreateColumnsOperation | undefined;
	readonly FilterOperation?: FilterOperation | undefined;
	readonly ProjectOperation?: ProjectOperation | undefined;
	readonly RenameColumnOperation?: RenameColumnOperation | undefined;
	readonly TagColumnOperation?: TagColumnOperation | undefined;
}
export interface UploadSettings {
	readonly ContainsHeader?: boolean | undefined;
	readonly Delimiter?: string | undefined;
	readonly Format?: string | undefined;
	readonly StartFromRow?: number | undefined;
	readonly TextQualifier?: string | undefined;
}
export interface AmazonElasticsearchParameters {
	readonly Domain: string;
}
export interface AmazonOpenSearchParameters {
	readonly Domain: string;
}
export interface AthenaParameters {
	readonly WorkGroup?: string | undefined;
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
	readonly AlternateDataSourceParameters?: DataSourceParameters[] | undefined;
	readonly Password: string;
	readonly Username: string;
}
export interface DataSourceCredentials {
	readonly CopySourceArn?: string | undefined;
	readonly CredentialPair?: CredentialPair | undefined;
	readonly SecretArn?: string | undefined;
}
export interface DataSourceErrorInfo {
	readonly Message?: string | undefined;
	readonly Type?: string | undefined;
}
export interface DataSourceParameters {
	readonly AmazonElasticsearchParameters?: AmazonElasticsearchParameters | undefined;
	readonly AmazonOpenSearchParameters?: AmazonOpenSearchParameters | undefined;
	readonly AthenaParameters?: AthenaParameters | undefined;
	readonly AuroraParameters?: AuroraParameters | undefined;
	readonly AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters | undefined;
	readonly MariaDbParameters?: MariaDbParameters | undefined;
	readonly MySqlParameters?: MySqlParameters | undefined;
	readonly OracleParameters?: OracleParameters | undefined;
	readonly PostgreSqlParameters?: PostgreSqlParameters | undefined;
	readonly PrestoParameters?: PrestoParameters | undefined;
	readonly RdsParameters?: RdsParameters | undefined;
	readonly RedshiftParameters?: RedshiftParameters | undefined;
	readonly S3Parameters?: S3Parameters | undefined;
	readonly SnowflakeParameters?: SnowflakeParameters | undefined;
	readonly SparkParameters?: SparkParameters | undefined;
	readonly SqlServerParameters?: SqlServerParameters | undefined;
	readonly TeradataParameters?: TeradataParameters | undefined;
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
	readonly ClusterId?: string | undefined;
	readonly Database: string;
	readonly Host?: string | undefined;
	readonly Port?: number | undefined;
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
	readonly DisableSsl?: boolean | undefined;
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
	readonly Name?: string | undefined;
}
export interface ColumnGroupSchema {
	readonly ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[] | undefined;
	readonly Name?: string | undefined;
}
export interface ColumnSchema {
	readonly DataType?: string | undefined;
	readonly GeographicRole?: string | undefined;
	readonly Name?: string | undefined;
}
export interface DataSetConfiguration {
	readonly ColumnGroupSchemaList?: ColumnGroupSchema[] | undefined;
	readonly DataSetSchema?: DataSetSchema | undefined;
	readonly Placeholder?: string | undefined;
}
export interface DataSetSchema {
	readonly ColumnSchemaList?: ColumnSchema[] | undefined;
}
export interface TemplateError {
	readonly Message?: string | undefined;
	readonly Type?: string | undefined;
}
export interface TemplateSourceAnalysis {
	readonly Arn: string;
	readonly DataSetReferences: DataSetReference[];
}
export interface TemplateSourceEntity {
	readonly SourceAnalysis?: TemplateSourceAnalysis | undefined;
	readonly SourceTemplate?: TemplateSourceTemplate | undefined;
}
export interface TemplateSourceTemplate {
	readonly Arn: string;
}
export interface TemplateVersion {
	readonly CreatedTime?: string | undefined;
	readonly DataSetConfigurations?: DataSetConfiguration[] | undefined;
	readonly Description?: string | undefined;
	readonly Errors?: TemplateError[] | undefined;
	readonly Sheets?: Sheet[] | undefined;
	readonly SourceEntityArn?: string | undefined;
	readonly Status?: string | undefined;
	readonly ThemeArn?: string | undefined;
	readonly VersionNumber?: number | undefined;
}
export interface BorderStyle {
	readonly Show?: boolean | undefined;
}
export interface DataColorPalette {
	readonly Colors?: string[] | undefined;
	readonly EmptyFillColor?: string | undefined;
	readonly MinMaxGradient?: string[] | undefined;
}
export interface Font {
	readonly FontFamily?: string | undefined;
}
export interface GutterStyle {
	readonly Show?: boolean | undefined;
}
export interface MarginStyle {
	readonly Show?: boolean | undefined;
}
export interface SheetStyle {
	readonly Tile?: TileStyle | undefined;
	readonly TileLayout?: TileLayoutStyle | undefined;
}
export interface ThemeConfiguration {
	readonly DataColorPalette?: DataColorPalette | undefined;
	readonly Sheet?: SheetStyle | undefined;
	readonly Typography?: Typography | undefined;
	readonly UIColorPalette?: UIColorPalette | undefined;
}
export interface ThemeError {
	readonly Message?: string | undefined;
	readonly Type?: string | undefined;
}
export interface ThemeVersion {
	readonly Arn?: string | undefined;
	readonly BaseThemeId?: string | undefined;
	readonly Configuration?: ThemeConfiguration | undefined;
	readonly CreatedTime?: string | undefined;
	readonly Description?: string | undefined;
	readonly Errors?: ThemeError[] | undefined;
	readonly Status?: string | undefined;
	readonly VersionNumber?: number | undefined;
}
export interface TileLayoutStyle {
	readonly Gutter?: GutterStyle | undefined;
	readonly Margin?: MarginStyle | undefined;
}
export interface TileStyle {
	readonly Border?: BorderStyle | undefined;
}
export interface Typography {
	readonly FontFamilies?: Font[] | undefined;
}
export interface UIColorPalette {
	readonly Accent?: string | undefined;
	readonly AccentForeground?: string | undefined;
	readonly Danger?: string | undefined;
	readonly DangerForeground?: string | undefined;
	readonly Dimension?: string | undefined;
	readonly DimensionForeground?: string | undefined;
	readonly Measure?: string | undefined;
	readonly MeasureForeground?: string | undefined;
	readonly PrimaryBackground?: string | undefined;
	readonly PrimaryForeground?: string | undefined;
	readonly SecondaryBackground?: string | undefined;
	readonly SecondaryForeground?: string | undefined;
	readonly Success?: string | undefined;
	readonly SuccessForeground?: string | undefined;
	readonly Warning?: string | undefined;
	readonly WarningForeground?: string | undefined;
}
export default {
	Analysis: Analysis,
	Dashboard: Dashboard,
	DataSet: DataSet,
	DataSource: DataSource,
	Template: Template,
	Theme: Theme,
};
