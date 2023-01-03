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
	readonly Format?: (string | undefined) | undefined;
	readonly FormatOptions?: (FormatOptions | undefined) | undefined;
	readonly PathOptions?: (PathOptions | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly DatabaseOutputs?: (DatabaseOutput[] | undefined) | undefined;
	readonly DataCatalogOutputs?: (DataCatalogOutput[] | undefined) | undefined;
	readonly DatasetName?: (string | undefined) | undefined;
	readonly EncryptionKeyArn?: (string | undefined) | undefined;
	readonly EncryptionMode?: (string | undefined) | undefined;
	readonly JobSample?: (JobSample | undefined) | undefined;
	readonly LogSubscription?: (string | undefined) | undefined;
	readonly MaxCapacity?: (number | undefined) | undefined;
	readonly MaxRetries?: (number | undefined) | undefined;
	readonly OutputLocation?: (OutputLocation | undefined) | undefined;
	readonly Outputs?: (Output[] | undefined) | undefined;
	readonly ProfileConfiguration?: (ProfileConfiguration | undefined) | undefined;
	readonly ProjectName?: (string | undefined) | undefined;
	readonly Recipe?: (Recipe | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly ValidationConfigurations?: (ValidationConfiguration[] | undefined) | undefined;
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
	readonly Sample?: (Sample | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly JobNames?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CsvOptions {
	readonly Delimiter?: (string | undefined) | undefined;
	readonly HeaderRow?: (boolean | undefined) | undefined;
}
export interface DataCatalogInputDefinition {
	readonly CatalogId?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly TableName?: (string | undefined) | undefined;
	readonly TempDirectory?: (S3Location | undefined) | undefined;
}
export interface DatabaseInputDefinition {
	readonly DatabaseTableName?: (string | undefined) | undefined;
	readonly GlueConnectionName: string;
	readonly QueryString?: (string | undefined) | undefined;
	readonly TempDirectory?: (S3Location | undefined) | undefined;
}
export interface DatasetParameter {
	readonly CreateColumn?: (boolean | undefined) | undefined;
	readonly DatetimeOptions?: (DatetimeOptions | undefined) | undefined;
	readonly Filter?: (FilterExpression | undefined) | undefined;
	readonly Name: string;
	readonly Type: string;
}
export interface DatetimeOptions {
	readonly Format: string;
	readonly LocaleCode?: (string | undefined) | undefined;
	readonly TimezoneOffset?: (string | undefined) | undefined;
}
export interface ExcelOptions {
	readonly HeaderRow?: (boolean | undefined) | undefined;
	readonly SheetIndexes?: (number[] | undefined) | undefined;
	readonly SheetNames?: (string[] | undefined) | undefined;
}
export interface FilesLimit {
	readonly MaxFiles: number;
	readonly Order?: (string | undefined) | undefined;
	readonly OrderedBy?: (string | undefined) | undefined;
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
	readonly Csv?: (CsvOptions | undefined) | undefined;
	readonly Excel?: (ExcelOptions | undefined) | undefined;
	readonly Json?: (JsonOptions | undefined) | undefined;
}
export interface Input {
	readonly DataCatalogInputDefinition?: (DataCatalogInputDefinition | undefined) | undefined;
	readonly DatabaseInputDefinition?: (DatabaseInputDefinition | undefined) | undefined;
	readonly Metadata?: (Metadata | undefined) | undefined;
	readonly S3InputDefinition?: (S3Location | undefined) | undefined;
}
export interface JsonOptions {
	readonly MultiLine?: (boolean | undefined) | undefined;
}
export interface Metadata {
	readonly SourceArn?: (string | undefined) | undefined;
}
export interface PathOptions {
	readonly FilesLimit?: (FilesLimit | undefined) | undefined;
	readonly LastModifiedDateCondition?: (FilterExpression | undefined) | undefined;
	readonly Parameters?: (PathParameter[] | undefined) | undefined;
}
export interface PathParameter {
	readonly DatasetParameter: DatasetParameter;
	readonly PathParameterName: string;
}
export interface S3Location {
	readonly Bucket: string;
	readonly Key?: (string | undefined) | undefined;
}
export interface AllowedStatistics {
	readonly Statistics: string[];
}
export interface ColumnSelector {
	readonly Name?: (string | undefined) | undefined;
	readonly Regex?: (string | undefined) | undefined;
}
export interface ColumnStatisticsConfiguration {
	readonly Selectors?: (ColumnSelector[] | undefined) | undefined;
	readonly Statistics: StatisticsConfiguration;
}
export interface CsvOutputOptions {
	readonly Delimiter?: (string | undefined) | undefined;
}
export interface DataCatalogOutput {
	readonly CatalogId?: (string | undefined) | undefined;
	readonly DatabaseName: string;
	readonly DatabaseOptions?: (DatabaseTableOutputOptions | undefined) | undefined;
	readonly Overwrite?: (boolean | undefined) | undefined;
	readonly S3Options?: (S3TableOutputOptions | undefined) | undefined;
	readonly TableName: string;
}
export interface DatabaseOutput {
	readonly DatabaseOptions: DatabaseTableOutputOptions;
	readonly DatabaseOutputMode?: (string | undefined) | undefined;
	readonly GlueConnectionName: string;
}
export interface DatabaseTableOutputOptions {
	readonly TableName: string;
	readonly TempDirectory?: (S3Location | undefined) | undefined;
}
export interface EntityDetectorConfiguration {
	readonly AllowedStatistics?: (AllowedStatistics | undefined) | undefined;
	readonly EntityTypes: string[];
}
export interface JobSample {
	readonly Mode?: (string | undefined) | undefined;
	readonly Size?: (number | undefined) | undefined;
}
export interface Output {
	readonly CompressionFormat?: (string | undefined) | undefined;
	readonly Format?: (string | undefined) | undefined;
	readonly FormatOptions?: (OutputFormatOptions | undefined) | undefined;
	readonly Location: S3Location;
	readonly MaxOutputFiles?: (number | undefined) | undefined;
	readonly Overwrite?: (boolean | undefined) | undefined;
	readonly PartitionColumns?: (string[] | undefined) | undefined;
}
export interface OutputFormatOptions {
	readonly Csv?: (CsvOutputOptions | undefined) | undefined;
}
export interface OutputLocation {
	readonly Bucket: string;
	readonly BucketOwner?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface ProfileConfiguration {
	readonly ColumnStatisticsConfigurations?: (ColumnStatisticsConfiguration[] | undefined) | undefined;
	readonly DatasetStatisticsConfiguration?: (StatisticsConfiguration | undefined) | undefined;
	readonly EntityDetectorConfiguration?: (EntityDetectorConfiguration | undefined) | undefined;
	readonly ProfileColumns?: (ColumnSelector[] | undefined) | undefined;
}
export interface Recipe {
	readonly Name: string;
	readonly Version?: (string | undefined) | undefined;
}
export interface S3TableOutputOptions {
	readonly Location: S3Location;
}
export interface StatisticOverride {
	readonly Parameters: { [key: string]: string };
	readonly Statistic: string;
}
export interface StatisticsConfiguration {
	readonly IncludedStatistics?: (string[] | undefined) | undefined;
	readonly Overrides?: (StatisticOverride[] | undefined) | undefined;
}
export interface ValidationConfiguration {
	readonly RulesetArn: string;
	readonly ValidationMode?: (string | undefined) | undefined;
}
export interface Sample {
	readonly Size?: (number | undefined) | undefined;
	readonly Type: string;
}
export interface Action {
	readonly Operation: string;
	readonly Parameters?: ({ [key: string]: string } | undefined) | undefined;
}
export interface ConditionExpression {
	readonly Condition: string;
	readonly TargetColumn: string;
	readonly Value?: (string | undefined) | undefined;
}
export interface RecipeParameters {
	readonly AggregateFunction?: (string | undefined) | undefined;
	readonly Base?: (string | undefined) | undefined;
	readonly CaseStatement?: (string | undefined) | undefined;
	readonly CategoryMap?: (string | undefined) | undefined;
	readonly CharsToRemove?: (string | undefined) | undefined;
	readonly CollapseConsecutiveWhitespace?: (string | undefined) | undefined;
	readonly ColumnDataType?: (string | undefined) | undefined;
	readonly ColumnRange?: (string | undefined) | undefined;
	readonly Count?: (string | undefined) | undefined;
	readonly CustomCharacters?: (string | undefined) | undefined;
	readonly CustomStopWords?: (string | undefined) | undefined;
	readonly CustomValue?: (string | undefined) | undefined;
	readonly DatasetsColumns?: (string | undefined) | undefined;
	readonly DateAddValue?: (string | undefined) | undefined;
	readonly DateTimeFormat?: (string | undefined) | undefined;
	readonly DateTimeParameters?: (string | undefined) | undefined;
	readonly DeleteOtherRows?: (string | undefined) | undefined;
	readonly Delimiter?: (string | undefined) | undefined;
	readonly EndPattern?: (string | undefined) | undefined;
	readonly EndPosition?: (string | undefined) | undefined;
	readonly EndValue?: (string | undefined) | undefined;
	readonly ExpandContractions?: (string | undefined) | undefined;
	readonly Exponent?: (string | undefined) | undefined;
	readonly FalseString?: (string | undefined) | undefined;
	readonly GroupByAggFunctionOptions?: (string | undefined) | undefined;
	readonly GroupByColumns?: (string | undefined) | undefined;
	readonly HiddenColumns?: (string | undefined) | undefined;
	readonly IgnoreCase?: (string | undefined) | undefined;
	readonly IncludeInSplit?: (string | undefined) | undefined;
	readonly Input?: (Input | undefined) | undefined;
	readonly Interval?: (string | undefined) | undefined;
	readonly IsText?: (string | undefined) | undefined;
	readonly JoinKeys?: (string | undefined) | undefined;
	readonly JoinType?: (string | undefined) | undefined;
	readonly LeftColumns?: (string | undefined) | undefined;
	readonly Limit?: (string | undefined) | undefined;
	readonly LowerBound?: (string | undefined) | undefined;
	readonly MapType?: (string | undefined) | undefined;
	readonly ModeType?: (string | undefined) | undefined;
	readonly MultiLine?: (boolean | undefined) | undefined;
	readonly NumRows?: (string | undefined) | undefined;
	readonly NumRowsAfter?: (string | undefined) | undefined;
	readonly NumRowsBefore?: (string | undefined) | undefined;
	readonly OrderByColumn?: (string | undefined) | undefined;
	readonly OrderByColumns?: (string | undefined) | undefined;
	readonly Other?: (string | undefined) | undefined;
	readonly Pattern?: (string | undefined) | undefined;
	readonly PatternOption1?: (string | undefined) | undefined;
	readonly PatternOption2?: (string | undefined) | undefined;
	readonly PatternOptions?: (string | undefined) | undefined;
	readonly Period?: (string | undefined) | undefined;
	readonly Position?: (string | undefined) | undefined;
	readonly RemoveAllPunctuation?: (string | undefined) | undefined;
	readonly RemoveAllQuotes?: (string | undefined) | undefined;
	readonly RemoveAllWhitespace?: (string | undefined) | undefined;
	readonly RemoveCustomCharacters?: (string | undefined) | undefined;
	readonly RemoveCustomValue?: (string | undefined) | undefined;
	readonly RemoveLeadingAndTrailingPunctuation?: (string | undefined) | undefined;
	readonly RemoveLeadingAndTrailingQuotes?: (string | undefined) | undefined;
	readonly RemoveLeadingAndTrailingWhitespace?: (string | undefined) | undefined;
	readonly RemoveLetters?: (string | undefined) | undefined;
	readonly RemoveNumbers?: (string | undefined) | undefined;
	readonly RemoveSourceColumn?: (string | undefined) | undefined;
	readonly RemoveSpecialCharacters?: (string | undefined) | undefined;
	readonly RightColumns?: (string | undefined) | undefined;
	readonly SampleSize?: (string | undefined) | undefined;
	readonly SampleType?: (string | undefined) | undefined;
	readonly SecondInput?: (string | undefined) | undefined;
	readonly SecondaryInputs?: (SecondaryInput[] | undefined) | undefined;
	readonly SheetIndexes?: (number[] | undefined) | undefined;
	readonly SheetNames?: (string[] | undefined) | undefined;
	readonly SourceColumn?: (string | undefined) | undefined;
	readonly SourceColumn1?: (string | undefined) | undefined;
	readonly SourceColumn2?: (string | undefined) | undefined;
	readonly SourceColumns?: (string | undefined) | undefined;
	readonly StartColumnIndex?: (string | undefined) | undefined;
	readonly StartPattern?: (string | undefined) | undefined;
	readonly StartPosition?: (string | undefined) | undefined;
	readonly StartValue?: (string | undefined) | undefined;
	readonly StemmingMode?: (string | undefined) | undefined;
	readonly StepCount?: (string | undefined) | undefined;
	readonly StepIndex?: (string | undefined) | undefined;
	readonly StopWordsMode?: (string | undefined) | undefined;
	readonly Strategy?: (string | undefined) | undefined;
	readonly TargetColumn?: (string | undefined) | undefined;
	readonly TargetColumnNames?: (string | undefined) | undefined;
	readonly TargetDateFormat?: (string | undefined) | undefined;
	readonly TargetIndex?: (string | undefined) | undefined;
	readonly TimeZone?: (string | undefined) | undefined;
	readonly TokenizerPattern?: (string | undefined) | undefined;
	readonly TrueString?: (string | undefined) | undefined;
	readonly UdfLang?: (string | undefined) | undefined;
	readonly Units?: (string | undefined) | undefined;
	readonly UnpivotColumn?: (string | undefined) | undefined;
	readonly UpperBound?: (string | undefined) | undefined;
	readonly UseNewDataFrame?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
	readonly Value1?: (string | undefined) | undefined;
	readonly Value2?: (string | undefined) | undefined;
	readonly ValueColumn?: (string | undefined) | undefined;
	readonly ViewFrame?: (string | undefined) | undefined;
}
export interface RecipeStep {
	readonly Action: Action;
	readonly ConditionExpressions?: (ConditionExpression[] | undefined) | undefined;
}
export interface SecondaryInput {
	readonly DataCatalogInputDefinition?: (DataCatalogInputDefinition | undefined) | undefined;
	readonly S3InputDefinition?: (S3Location | undefined) | undefined;
}
export interface Rule {
	readonly CheckExpression: string;
	readonly ColumnSelectors?: (ColumnSelector[] | undefined) | undefined;
	readonly Disabled?: (boolean | undefined) | undefined;
	readonly Name: string;
	readonly SubstitutionMap?: (SubstitutionValue[] | undefined) | undefined;
	readonly Threshold?: (Threshold | undefined) | undefined;
}
export interface SubstitutionValue {
	readonly Value: string;
	readonly ValueReference: string;
}
export interface Threshold {
	readonly Type?: (string | undefined) | undefined;
	readonly Unit?: (string | undefined) | undefined;
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
