import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Dataset extends CfnResource<DatasetComponentInputs> implements DatasetComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataBrew::Dataset", options);
	}
}
export interface DatasetComponentOutputs {}
export interface DatasetComponentInputs {
	readonly Input: Input;
	readonly Name: string;
	readonly Format?: string | undefined;
	readonly FormatOptions?: FormatOptions | undefined;
	readonly PathOptions?: PathOptions | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Job extends CfnResource<JobComponentInputs> implements JobComponentOutputs {
	constructor(entity: ADKEntity, options: JobComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataBrew::Job", options);
	}
}
export interface JobComponentOutputs {}
export interface JobComponentInputs {
	readonly Name: string;
	readonly RoleArn: string;
	readonly Type: string;
	readonly DatabaseOutputs?: DatabaseOutput[] | undefined;
	readonly DataCatalogOutputs?: DataCatalogOutput[] | undefined;
	readonly DatasetName?: string | undefined;
	readonly EncryptionKeyArn?: string | undefined;
	readonly EncryptionMode?: string | undefined;
	readonly JobSample?: JobSample | undefined;
	readonly LogSubscription?: string | undefined;
	readonly MaxCapacity?: number | undefined;
	readonly MaxRetries?: number | undefined;
	readonly OutputLocation?: OutputLocation | undefined;
	readonly Outputs?: Output[] | undefined;
	readonly ProfileConfiguration?: ProfileConfiguration | undefined;
	readonly ProjectName?: string | undefined;
	readonly Recipe?: Recipe | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Timeout?: number | undefined;
	readonly ValidationConfigurations?: ValidationConfiguration[] | undefined;
	readonly LogicalId: string;
}
export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataBrew::Project", options);
	}
}
export interface ProjectComponentOutputs {}
export interface ProjectComponentInputs {
	readonly DatasetName: string;
	readonly Name: string;
	readonly RecipeName: string;
	readonly RoleArn: string;
	readonly Sample?: Sample | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Recipe extends CfnResource<RecipeComponentInputs> implements RecipeComponentOutputs {
	constructor(entity: ADKEntity, options: RecipeComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataBrew::Recipe", options);
	}
}
export interface RecipeComponentOutputs {}
export interface RecipeComponentInputs {
	readonly Name: string;
	readonly Steps: RecipeStep[];
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Ruleset extends CfnResource<RulesetComponentInputs> implements RulesetComponentOutputs {
	constructor(entity: ADKEntity, options: RulesetComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataBrew::Ruleset", options);
	}
}
export interface RulesetComponentOutputs {}
export interface RulesetComponentInputs {
	readonly Name: string;
	readonly Rules: Rule[];
	readonly TargetArn: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Schedule extends CfnResource<ScheduleComponentInputs> implements ScheduleComponentOutputs {
	constructor(entity: ADKEntity, options: ScheduleComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataBrew::Schedule", options);
	}
}
export interface ScheduleComponentOutputs {}
export interface ScheduleComponentInputs {
	readonly CronExpression: string;
	readonly Name: string;
	readonly JobNames?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface CsvOptions {
	readonly Delimiter?: string | undefined;
	readonly HeaderRow?: boolean | undefined;
}
export interface DataCatalogInputDefinition {
	readonly CatalogId?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly TableName?: string | undefined;
	readonly TempDirectory?: S3Location | undefined;
}
export interface DatabaseInputDefinition {
	readonly DatabaseTableName?: string | undefined;
	readonly GlueConnectionName: string;
	readonly QueryString?: string | undefined;
	readonly TempDirectory?: S3Location | undefined;
}
export interface DatasetParameter {
	readonly CreateColumn?: boolean | undefined;
	readonly DatetimeOptions?: DatetimeOptions | undefined;
	readonly Filter?: FilterExpression | undefined;
	readonly Name: string;
	readonly Type: string;
}
export interface DatetimeOptions {
	readonly Format: string;
	readonly LocaleCode?: string | undefined;
	readonly TimezoneOffset?: string | undefined;
}
export interface ExcelOptions {
	readonly HeaderRow?: boolean | undefined;
	readonly SheetIndexes?: number[] | undefined;
	readonly SheetNames?: string[] | undefined;
}
export interface FilesLimit {
	readonly MaxFiles: number;
	readonly Order?: string | undefined;
	readonly OrderedBy?: string | undefined;
}
export interface FilterExpression {
	readonly Expression: string;
	readonly ValuesMap: FilterValue[];
}
export interface FilterValue {
	readonly Value: string;
	readonly ValueReference: string;
}
export interface FormatOptions {
	readonly Csv?: CsvOptions | undefined;
	readonly Excel?: ExcelOptions | undefined;
	readonly Json?: JsonOptions | undefined;
}
export interface Input {
	readonly DataCatalogInputDefinition?: DataCatalogInputDefinition | undefined;
	readonly DatabaseInputDefinition?: DatabaseInputDefinition | undefined;
	readonly Metadata?: Metadata | undefined;
	readonly S3InputDefinition?: S3Location | undefined;
}
export interface JsonOptions {
	readonly MultiLine?: boolean | undefined;
}
export interface Metadata {
	readonly SourceArn?: string | undefined;
}
export interface PathOptions {
	readonly FilesLimit?: FilesLimit | undefined;
	readonly LastModifiedDateCondition?: FilterExpression | undefined;
	readonly Parameters?: PathParameter[] | undefined;
}
export interface PathParameter {
	readonly DatasetParameter: DatasetParameter;
	readonly PathParameterName: string;
}
export interface S3Location {
	readonly Bucket: string;
	readonly Key?: string | undefined;
}
export interface AllowedStatistics {
	readonly Statistics: string[];
}
export interface ColumnSelector {
	readonly Name?: string | undefined;
	readonly Regex?: string | undefined;
}
export interface ColumnStatisticsConfiguration {
	readonly Selectors?: ColumnSelector[] | undefined;
	readonly Statistics: StatisticsConfiguration;
}
export interface CsvOutputOptions {
	readonly Delimiter?: string | undefined;
}
export interface DataCatalogOutput {
	readonly CatalogId?: string | undefined;
	readonly DatabaseName: string;
	readonly DatabaseOptions?: DatabaseTableOutputOptions | undefined;
	readonly Overwrite?: boolean | undefined;
	readonly S3Options?: S3TableOutputOptions | undefined;
	readonly TableName: string;
}
export interface DatabaseOutput {
	readonly DatabaseOptions: DatabaseTableOutputOptions;
	readonly DatabaseOutputMode?: string | undefined;
	readonly GlueConnectionName: string;
}
export interface DatabaseTableOutputOptions {
	readonly TableName: string;
	readonly TempDirectory?: S3Location | undefined;
}
export interface EntityDetectorConfiguration {
	readonly AllowedStatistics?: AllowedStatistics | undefined;
	readonly EntityTypes: string[];
}
export interface JobSample {
	readonly Mode?: string | undefined;
	readonly Size?: number | undefined;
}
export interface Output {
	readonly CompressionFormat?: string | undefined;
	readonly Format?: string | undefined;
	readonly FormatOptions?: OutputFormatOptions | undefined;
	readonly Location: S3Location;
	readonly MaxOutputFiles?: number | undefined;
	readonly Overwrite?: boolean | undefined;
	readonly PartitionColumns?: string[] | undefined;
}
export interface OutputFormatOptions {
	readonly Csv?: CsvOutputOptions | undefined;
}
export interface OutputLocation {
	readonly Bucket: string;
	readonly BucketOwner?: string | undefined;
	readonly Key?: string | undefined;
}
export interface ProfileConfiguration {
	readonly ColumnStatisticsConfigurations?: ColumnStatisticsConfiguration[] | undefined;
	readonly DatasetStatisticsConfiguration?: StatisticsConfiguration | undefined;
	readonly EntityDetectorConfiguration?: EntityDetectorConfiguration | undefined;
	readonly ProfileColumns?: ColumnSelector[] | undefined;
}
export interface Recipe {
	readonly Name: string;
	readonly Version?: string | undefined;
}
export interface S3TableOutputOptions {
	readonly Location: S3Location;
}
export interface StatisticOverride {
	readonly Parameters: { [key: string]: string };
	readonly Statistic: string;
}
export interface StatisticsConfiguration {
	readonly IncludedStatistics?: string[] | undefined;
	readonly Overrides?: StatisticOverride[] | undefined;
}
export interface ValidationConfiguration {
	readonly RulesetArn: string;
	readonly ValidationMode?: string | undefined;
}
export interface Sample {
	readonly Size?: number | undefined;
	readonly Type: string;
}
export interface Action {
	readonly Operation: string;
	readonly Parameters?: { [key: string]: string } | undefined;
}
export interface ConditionExpression {
	readonly Condition: string;
	readonly TargetColumn: string;
	readonly Value?: string | undefined;
}
export interface RecipeParameters {
	readonly AggregateFunction?: string | undefined;
	readonly Base?: string | undefined;
	readonly CaseStatement?: string | undefined;
	readonly CategoryMap?: string | undefined;
	readonly CharsToRemove?: string | undefined;
	readonly CollapseConsecutiveWhitespace?: string | undefined;
	readonly ColumnDataType?: string | undefined;
	readonly ColumnRange?: string | undefined;
	readonly Count?: string | undefined;
	readonly CustomCharacters?: string | undefined;
	readonly CustomStopWords?: string | undefined;
	readonly CustomValue?: string | undefined;
	readonly DatasetsColumns?: string | undefined;
	readonly DateAddValue?: string | undefined;
	readonly DateTimeFormat?: string | undefined;
	readonly DateTimeParameters?: string | undefined;
	readonly DeleteOtherRows?: string | undefined;
	readonly Delimiter?: string | undefined;
	readonly EndPattern?: string | undefined;
	readonly EndPosition?: string | undefined;
	readonly EndValue?: string | undefined;
	readonly ExpandContractions?: string | undefined;
	readonly Exponent?: string | undefined;
	readonly FalseString?: string | undefined;
	readonly GroupByAggFunctionOptions?: string | undefined;
	readonly GroupByColumns?: string | undefined;
	readonly HiddenColumns?: string | undefined;
	readonly IgnoreCase?: string | undefined;
	readonly IncludeInSplit?: string | undefined;
	readonly Input?: Input | undefined;
	readonly Interval?: string | undefined;
	readonly IsText?: string | undefined;
	readonly JoinKeys?: string | undefined;
	readonly JoinType?: string | undefined;
	readonly LeftColumns?: string | undefined;
	readonly Limit?: string | undefined;
	readonly LowerBound?: string | undefined;
	readonly MapType?: string | undefined;
	readonly ModeType?: string | undefined;
	readonly MultiLine?: boolean | undefined;
	readonly NumRows?: string | undefined;
	readonly NumRowsAfter?: string | undefined;
	readonly NumRowsBefore?: string | undefined;
	readonly OrderByColumn?: string | undefined;
	readonly OrderByColumns?: string | undefined;
	readonly Other?: string | undefined;
	readonly Pattern?: string | undefined;
	readonly PatternOption1?: string | undefined;
	readonly PatternOption2?: string | undefined;
	readonly PatternOptions?: string | undefined;
	readonly Period?: string | undefined;
	readonly Position?: string | undefined;
	readonly RemoveAllPunctuation?: string | undefined;
	readonly RemoveAllQuotes?: string | undefined;
	readonly RemoveAllWhitespace?: string | undefined;
	readonly RemoveCustomCharacters?: string | undefined;
	readonly RemoveCustomValue?: string | undefined;
	readonly RemoveLeadingAndTrailingPunctuation?: string | undefined;
	readonly RemoveLeadingAndTrailingQuotes?: string | undefined;
	readonly RemoveLeadingAndTrailingWhitespace?: string | undefined;
	readonly RemoveLetters?: string | undefined;
	readonly RemoveNumbers?: string | undefined;
	readonly RemoveSourceColumn?: string | undefined;
	readonly RemoveSpecialCharacters?: string | undefined;
	readonly RightColumns?: string | undefined;
	readonly SampleSize?: string | undefined;
	readonly SampleType?: string | undefined;
	readonly SecondInput?: string | undefined;
	readonly SecondaryInputs?: SecondaryInput[] | undefined;
	readonly SheetIndexes?: number[] | undefined;
	readonly SheetNames?: string[] | undefined;
	readonly SourceColumn?: string | undefined;
	readonly SourceColumn1?: string | undefined;
	readonly SourceColumn2?: string | undefined;
	readonly SourceColumns?: string | undefined;
	readonly StartColumnIndex?: string | undefined;
	readonly StartPattern?: string | undefined;
	readonly StartPosition?: string | undefined;
	readonly StartValue?: string | undefined;
	readonly StemmingMode?: string | undefined;
	readonly StepCount?: string | undefined;
	readonly StepIndex?: string | undefined;
	readonly StopWordsMode?: string | undefined;
	readonly Strategy?: string | undefined;
	readonly TargetColumn?: string | undefined;
	readonly TargetColumnNames?: string | undefined;
	readonly TargetDateFormat?: string | undefined;
	readonly TargetIndex?: string | undefined;
	readonly TimeZone?: string | undefined;
	readonly TokenizerPattern?: string | undefined;
	readonly TrueString?: string | undefined;
	readonly UdfLang?: string | undefined;
	readonly Units?: string | undefined;
	readonly UnpivotColumn?: string | undefined;
	readonly UpperBound?: string | undefined;
	readonly UseNewDataFrame?: string | undefined;
	readonly Value?: string | undefined;
	readonly Value1?: string | undefined;
	readonly Value2?: string | undefined;
	readonly ValueColumn?: string | undefined;
	readonly ViewFrame?: string | undefined;
}
export interface RecipeStep {
	readonly Action: Action;
	readonly ConditionExpressions?: ConditionExpression[] | undefined;
}
export interface SecondaryInput {
	readonly DataCatalogInputDefinition?: DataCatalogInputDefinition | undefined;
	readonly S3InputDefinition?: S3Location | undefined;
}
export interface Rule {
	readonly CheckExpression: string;
	readonly ColumnSelectors?: ColumnSelector[] | undefined;
	readonly Disabled?: boolean | undefined;
	readonly Name: string;
	readonly SubstitutionMap?: SubstitutionValue[] | undefined;
	readonly Threshold?: Threshold | undefined;
}
export interface SubstitutionValue {
	readonly Value: string;
	readonly ValueReference: string;
}
export interface Threshold {
	readonly Type?: string | undefined;
	readonly Unit?: string | undefined;
	readonly Value: number;
}
export default {
	Dataset: Dataset,
	Job: Job,
	Project: Project,
	Recipe: Recipe,
	Ruleset: Ruleset,
	Schedule: Schedule,
};
