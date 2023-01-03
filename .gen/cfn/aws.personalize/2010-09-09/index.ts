import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Dataset extends CfnResource<DatasetComponentInputs> implements DatasetComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetComponentInputs) {
		super(entity, options.LogicalId, "AWS::Personalize::Dataset", options);
	}
	public readonly DatasetArn: string;
}
export interface DatasetComponentOutputs {
	readonly DatasetArn: string;
}
export interface DatasetComponentInputs {
	readonly DatasetGroupArn: string;
	readonly DatasetType: string;
	readonly Name: string;
	readonly SchemaArn: string;
	readonly DatasetImportJob?: (DatasetImportJob | undefined) | undefined;
	readonly LogicalId: string;
}
export class DatasetGroup extends CfnResource<DatasetGroupComponentInputs> implements DatasetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Personalize::DatasetGroup", options);
	}
	public readonly DatasetGroupArn: string;
}
export interface DatasetGroupComponentOutputs {
	readonly DatasetGroupArn: string;
}
export interface DatasetGroupComponentInputs {
	readonly Name: string;
	readonly Domain?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Schema extends CfnResource<SchemaComponentInputs> implements SchemaComponentOutputs {
	constructor(entity: ADKEntity, options: SchemaComponentInputs) {
		super(entity, options.LogicalId, "AWS::Personalize::Schema", options);
	}
	public readonly SchemaArn: string;
}
export interface SchemaComponentOutputs {
	readonly SchemaArn: string;
}
export interface SchemaComponentInputs {
	readonly Name: string;
	readonly Schema: string;
	readonly Domain?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Solution extends CfnResource<SolutionComponentInputs> implements SolutionComponentOutputs {
	constructor(entity: ADKEntity, options: SolutionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Personalize::Solution", options);
	}
	public readonly SolutionArn: string;
}
export interface SolutionComponentOutputs {
	readonly SolutionArn: string;
}
export interface SolutionComponentInputs {
	readonly DatasetGroupArn: string;
	readonly Name: string;
	readonly EventType?: (string | undefined) | undefined;
	readonly PerformAutoML?: (boolean | undefined) | undefined;
	readonly PerformHPO?: (boolean | undefined) | undefined;
	readonly RecipeArn?: (string | undefined) | undefined;
	readonly SolutionConfig?: (SolutionConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DataSource {
	readonly DataLocation?: (string | undefined) | undefined;
}
export interface DatasetImportJob {
	readonly DataSource?: (DataSource | undefined) | undefined;
	readonly DatasetArn?: (string | undefined) | undefined;
	readonly DatasetImportJobArn?: (string | undefined) | undefined;
	readonly JobName?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
}
export interface AlgorithmHyperParameterRanges {
	readonly CategoricalHyperParameterRanges?: (CategoricalHyperParameterRange[] | undefined) | undefined;
	readonly ContinuousHyperParameterRanges?: (ContinuousHyperParameterRange[] | undefined) | undefined;
	readonly IntegerHyperParameterRanges?: (IntegerHyperParameterRange[] | undefined) | undefined;
}
export interface AutoMLConfig {
	readonly MetricName?: (string | undefined) | undefined;
	readonly RecipeList?: (string[] | undefined) | undefined;
}
export interface CategoricalHyperParameterRange {
	readonly Name?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface ContinuousHyperParameterRange {
	readonly MaxValue?: (number | undefined) | undefined;
	readonly MinValue?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface HpoConfig {
	readonly AlgorithmHyperParameterRanges?: (AlgorithmHyperParameterRanges | undefined) | undefined;
	readonly HpoObjective?: (HpoObjective | undefined) | undefined;
	readonly HpoResourceConfig?: (HpoResourceConfig | undefined) | undefined;
}
export interface HpoObjective {
	readonly MetricName?: (string | undefined) | undefined;
	readonly MetricRegex?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface HpoResourceConfig {
	readonly MaxNumberOfTrainingJobs?: (string | undefined) | undefined;
	readonly MaxParallelTrainingJobs?: (string | undefined) | undefined;
}
export interface IntegerHyperParameterRange {
	readonly MaxValue?: (number | undefined) | undefined;
	readonly MinValue?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface SolutionConfig {
	readonly AlgorithmHyperParameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly AutoMLConfig?: (AutoMLConfig | undefined) | undefined;
	readonly EventValueThreshold?: (string | undefined) | undefined;
	readonly FeatureTransformationParameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly HpoConfig?: (HpoConfig | undefined) | undefined;
}
export default {
	Dataset: Dataset,
	DatasetGroup: DatasetGroup,
	Schema: Schema,
	Solution: Solution,
};
