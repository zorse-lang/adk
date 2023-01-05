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
	readonly DatasetImportJob?: DatasetImportJob | undefined;
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
	readonly Domain?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
	readonly RoleArn?: string | undefined;
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
	readonly Domain?: string | undefined;
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
	readonly EventType?: string | undefined;
	readonly PerformAutoML?: boolean | undefined;
	readonly PerformHPO?: boolean | undefined;
	readonly RecipeArn?: string | undefined;
	readonly SolutionConfig?: SolutionConfig | undefined;
	readonly LogicalId: string;
}
export interface DataSource {
	readonly DataLocation?: string | undefined;
}
export interface DatasetImportJob {
	readonly DataSource?: DataSource | undefined;
	readonly DatasetArn?: string | undefined;
	readonly DatasetImportJobArn?: string | undefined;
	readonly JobName?: string | undefined;
	readonly RoleArn?: string | undefined;
}
export interface AlgorithmHyperParameterRanges {
	readonly CategoricalHyperParameterRanges?: CategoricalHyperParameterRange[] | undefined;
	readonly ContinuousHyperParameterRanges?: ContinuousHyperParameterRange[] | undefined;
	readonly IntegerHyperParameterRanges?: IntegerHyperParameterRange[] | undefined;
}
export interface AutoMLConfig {
	readonly MetricName?: string | undefined;
	readonly RecipeList?: string[] | undefined;
}
export interface CategoricalHyperParameterRange {
	readonly Name?: string | undefined;
	readonly Values?: string[] | undefined;
}
export interface ContinuousHyperParameterRange {
	readonly MaxValue?: number | undefined;
	readonly MinValue?: number | undefined;
	readonly Name?: string | undefined;
}
export interface HpoConfig {
	readonly AlgorithmHyperParameterRanges?: AlgorithmHyperParameterRanges | undefined;
	readonly HpoObjective?: HpoObjective | undefined;
	readonly HpoResourceConfig?: HpoResourceConfig | undefined;
}
export interface HpoObjective {
	readonly MetricName?: string | undefined;
	readonly MetricRegex?: string | undefined;
	readonly Type?: string | undefined;
}
export interface HpoResourceConfig {
	readonly MaxNumberOfTrainingJobs?: string | undefined;
	readonly MaxParallelTrainingJobs?: string | undefined;
}
export interface IntegerHyperParameterRange {
	readonly MaxValue?: number | undefined;
	readonly MinValue?: number | undefined;
	readonly Name?: string | undefined;
}
export interface SolutionConfig {
	readonly AlgorithmHyperParameters?: { [key: string]: string } | undefined;
	readonly AutoMLConfig?: AutoMLConfig | undefined;
	readonly EventValueThreshold?: string | undefined;
	readonly FeatureTransformationParameters?: { [key: string]: string } | undefined;
	readonly HpoConfig?: HpoConfig | undefined;
}
export default {
	Dataset: Dataset,
	DatasetGroup: DatasetGroup,
	Schema: Schema,
	Solution: Solution,
};
