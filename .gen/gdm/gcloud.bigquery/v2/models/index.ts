import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Models extends GdmResource<ModelsComponentInputs> implements ModelsComponentOutputs {
	constructor(entity: ADKEntity, options: ModelsComponentInputs) {
		super(entity, options.name, "bigquery.v2.Models", options);
	}
	public readonly creationTime?: string;
	public readonly defaultTrialId?: string;
	public readonly etag?: string;
	public readonly featureColumns?: StandardSqlField[];
	public readonly hparamSearchSpaces?: HparamSearchSpaces;
	public readonly hparamTrials?: HparamTuningTrial[];
	public readonly labelColumns?: StandardSqlField[];
	public readonly lastModifiedTime?: string;
	public readonly location?: string;
	public readonly modelType?: string;
	public readonly optimalTrialIds?: string[];
}
export interface ModelsComponentOutputs {
	readonly creationTime?: string;
	readonly defaultTrialId?: string;
	readonly etag?: string;
	readonly featureColumns?: StandardSqlField[];
	readonly hparamSearchSpaces?: HparamSearchSpaces;
	readonly hparamTrials?: HparamTuningTrial[];
	readonly labelColumns?: StandardSqlField[];
	readonly lastModifiedTime?: string;
	readonly location?: string;
	readonly modelType?: string;
	readonly optimalTrialIds?: string[];
}
export interface ModelsComponentInputs {
	readonly bestTrialId?: string;
	readonly description?: string;
	readonly encryptionConfiguration?: EncryptionConfiguration;
	readonly expirationTime?: string;
	readonly friendlyName?: string;
	readonly labels?: { [P in string]: string };
	readonly modelReference: ModelReference;
	readonly trainingRuns?: TrainingRun[];
	readonly name: string;
}
export interface AggregateClassificationMetrics {
	readonly accuracy?: number;
	readonly f1Score?: number;
	readonly logLoss?: number;
	readonly precision?: number;
	readonly recall?: number;
	readonly rocAuc?: number;
	readonly threshold?: number;
}
export interface ArimaCoefficients {
	readonly autoRegressiveCoefficients?: number[];
	readonly interceptCoefficient?: number;
	readonly movingAverageCoefficients?: number[];
}
export interface ArimaFittingMetrics {
	readonly aic?: number;
	readonly logLikelihood?: number;
	readonly variance?: number;
}
export interface ArimaForecastingMetrics {
	readonly arimaFittingMetrics?: ArimaFittingMetrics[];
	readonly arimaSingleModelForecastingMetrics?: ArimaSingleModelForecastingMetrics[];
	readonly hasDrift?: boolean[];
	readonly nonSeasonalOrder?: ArimaOrder[];
	readonly seasonalPeriods?: string[];
	readonly timeSeriesId?: string[];
}
export interface ArimaModelInfo {
	readonly arimaCoefficients?: ArimaCoefficients;
	readonly arimaFittingMetrics?: ArimaFittingMetrics;
	readonly hasDrift?: boolean;
	readonly hasHolidayEffect?: boolean;
	readonly hasSpikesAndDips?: boolean;
	readonly hasStepChanges?: boolean;
	readonly nonSeasonalOrder?: ArimaOrder;
	readonly seasonalPeriods?: string[];
	readonly timeSeriesId?: string;
	readonly timeSeriesIds?: string[];
}
export interface ArimaOrder {
	readonly d?: string;
	readonly p?: string;
	readonly q?: string;
}
export interface ArimaResult {
	readonly arimaModelInfo?: ArimaModelInfo[];
	readonly seasonalPeriods?: string[];
}
export interface ArimaSingleModelForecastingMetrics {
	readonly arimaFittingMetrics?: ArimaFittingMetrics;
	readonly hasDrift?: boolean;
	readonly hasHolidayEffect?: boolean;
	readonly hasSpikesAndDips?: boolean;
	readonly hasStepChanges?: boolean;
	readonly nonSeasonalOrder?: ArimaOrder;
	readonly seasonalPeriods?: string[];
	readonly timeSeriesId?: string;
	readonly timeSeriesIds?: string[];
}
export interface BinaryClassificationMetrics {
	readonly aggregateClassificationMetrics?: AggregateClassificationMetrics;
	readonly binaryConfusionMatrixList?: BinaryConfusionMatrix[];
	readonly negativeLabel?: string;
	readonly positiveLabel?: string;
}
export interface BinaryConfusionMatrix {
	readonly accuracy?: number;
	readonly f1Score?: number;
	readonly falseNegatives?: string;
	readonly falsePositives?: string;
	readonly positiveClassThreshold?: number;
	readonly precision?: number;
	readonly recall?: number;
	readonly trueNegatives?: string;
	readonly truePositives?: string;
}
export interface CategoricalValue {
	readonly categoryCounts?: CategoryCount[];
}
export interface CategoryCount {
	readonly category?: string;
	readonly count?: string;
}
export interface Cluster {
	readonly centroidId?: string;
	readonly count?: string;
	readonly featureValues?: FeatureValue[];
}
export interface ClusterInfo {
	readonly centroidId?: string;
	readonly clusterRadius?: number;
	readonly clusterSize?: string;
}
export interface ClusteringMetrics {
	readonly clusters?: Cluster[];
	readonly daviesBouldinIndex?: number;
	readonly meanSquaredDistance?: number;
}
export interface ConfusionMatrix {
	readonly confidenceThreshold?: number;
	readonly rows?: Row[];
}
export interface DataSplitResult {
	readonly evaluationTable?: TableReference;
	readonly testTable?: TableReference;
	readonly trainingTable?: TableReference;
}
export interface DimensionalityReductionMetrics {
	readonly totalExplainedVarianceRatio?: number;
}
export interface DoubleCandidates {
	readonly candidates?: number[];
}
export interface DoubleHparamSearchSpace {
	readonly candidates?: DoubleCandidates;
	readonly range?: DoubleRange;
}
export interface DoubleRange {
	readonly max?: number;
	readonly min?: number;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string;
}
export interface Entry {
	readonly itemCount?: string;
	readonly predictedLabel?: string;
}
export interface EvaluationMetrics {
	readonly arimaForecastingMetrics?: ArimaForecastingMetrics;
	readonly binaryClassificationMetrics?: BinaryClassificationMetrics;
	readonly clusteringMetrics?: ClusteringMetrics;
	readonly dimensionalityReductionMetrics?: DimensionalityReductionMetrics;
	readonly multiClassClassificationMetrics?: MultiClassClassificationMetrics;
	readonly rankingMetrics?: RankingMetrics;
	readonly regressionMetrics?: RegressionMetrics;
}
export interface Explanation {
	readonly attribution?: number;
	readonly featureName?: string;
}
export interface FeatureValue {
	readonly categoricalValue?: CategoricalValue;
	readonly featureColumn?: string;
	readonly numericalValue?: number;
}
export interface GlobalExplanation {
	readonly classLabel?: string;
	readonly explanations?: Explanation[];
}
export interface HparamSearchSpaces {
	readonly activationFn?: StringHparamSearchSpace;
	readonly batchSize?: IntHparamSearchSpace;
	readonly boosterType?: StringHparamSearchSpace;
	readonly colsampleBylevel?: DoubleHparamSearchSpace;
	readonly colsampleBynode?: DoubleHparamSearchSpace;
	readonly colsampleBytree?: DoubleHparamSearchSpace;
	readonly dartNormalizeType?: StringHparamSearchSpace;
	readonly dropout?: DoubleHparamSearchSpace;
	readonly hiddenUnits?: IntArrayHparamSearchSpace;
	readonly l1Reg?: DoubleHparamSearchSpace;
	readonly l2Reg?: DoubleHparamSearchSpace;
	readonly learnRate?: DoubleHparamSearchSpace;
	readonly maxTreeDepth?: IntHparamSearchSpace;
	readonly minSplitLoss?: DoubleHparamSearchSpace;
	readonly minTreeChildWeight?: IntHparamSearchSpace;
	readonly numClusters?: IntHparamSearchSpace;
	readonly numFactors?: IntHparamSearchSpace;
	readonly numParallelTree?: IntHparamSearchSpace;
	readonly optimizer?: StringHparamSearchSpace;
	readonly subsample?: DoubleHparamSearchSpace;
	readonly treeMethod?: StringHparamSearchSpace;
	readonly walsAlpha?: DoubleHparamSearchSpace;
}
export interface HparamTuningTrial {
	readonly endTimeMs?: string;
	readonly errorMessage?: string;
	readonly evalLoss?: number;
	readonly evaluationMetrics?: EvaluationMetrics;
	readonly hparams?: TrainingOptions;
	readonly hparamTuningEvaluationMetrics?: EvaluationMetrics;
	readonly startTimeMs?: string;
	readonly status?: string;
	readonly trainingLoss?: number;
	readonly trialId?: string;
}
export interface IntArray {
	readonly elements?: string[];
}
export interface IntArrayHparamSearchSpace {
	readonly candidates?: IntArray[];
}
export interface IntCandidates {
	readonly candidates?: string[];
}
export interface IntHparamSearchSpace {
	readonly candidates?: IntCandidates;
	readonly range?: IntRange;
}
export interface IntRange {
	readonly max?: string;
	readonly min?: string;
}
export interface IterationResult {
	readonly arimaResult?: ArimaResult;
	readonly clusterInfos?: ClusterInfo[];
	readonly durationMs?: string;
	readonly evalLoss?: number;
	readonly index?: number;
	readonly learnRate?: number;
	readonly principalComponentInfos?: PrincipalComponentInfo[];
	readonly trainingLoss?: number;
}
export interface Model {
	readonly bestTrialId?: string;
	readonly creationTime?: string;
	readonly defaultTrialId?: string;
	readonly description?: string;
	readonly encryptionConfiguration?: EncryptionConfiguration;
	readonly etag?: string;
	readonly expirationTime?: string;
	readonly featureColumns?: StandardSqlField[];
	readonly friendlyName?: string;
	readonly hparamSearchSpaces?: HparamSearchSpaces;
	readonly hparamTrials?: HparamTuningTrial[];
	readonly labelColumns?: StandardSqlField[];
	readonly labels?: { [P in string]: string };
	readonly lastModifiedTime?: string;
	readonly location?: string;
	readonly modelReference: ModelReference;
	readonly modelType?: string;
	readonly optimalTrialIds?: string[];
	readonly trainingRuns?: TrainingRun[];
}
export interface ModelReference {
	readonly datasetId: string;
	readonly modelId: string;
	readonly projectId: string;
}
export interface MultiClassClassificationMetrics {
	readonly aggregateClassificationMetrics?: AggregateClassificationMetrics;
	readonly confusionMatrixList?: ConfusionMatrix[];
}
export interface PrincipalComponentInfo {
	readonly cumulativeExplainedVarianceRatio?: number;
	readonly explainedVariance?: number;
	readonly explainedVarianceRatio?: number;
	readonly principalComponentId?: string;
}
export interface RankingMetrics {
	readonly averageRank?: number;
	readonly meanAveragePrecision?: number;
	readonly meanSquaredError?: number;
	readonly normalizedDiscountedCumulativeGain?: number;
}
export interface RegressionMetrics {
	readonly meanAbsoluteError?: number;
	readonly meanSquaredError?: number;
	readonly meanSquaredLogError?: number;
	readonly medianAbsoluteError?: number;
	readonly rSquared?: number;
}
export interface Row {
	readonly actualLabel?: string;
	readonly entries?: Entry[];
}
export interface StandardSqlDataType {
	readonly arrayElementType?: StandardSqlDataType;
	readonly structType?: StandardSqlStructType;
	readonly typeKind: string;
}
export interface StandardSqlField {
	readonly name?: string;
	readonly type?: StandardSqlDataType;
}
export interface StandardSqlStructType {
	readonly fields?: StandardSqlField[];
}
export interface StringHparamSearchSpace {
	readonly candidates?: string[];
}
export interface TableReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly tableId: string;
}
export interface TrainingOptions {
	readonly adjustStepChanges?: boolean;
	readonly autoArima?: boolean;
	readonly autoArimaMaxOrder?: string;
	readonly batchSize?: string;
	readonly boosterType?: string;
	readonly calculatePValues?: boolean;
	readonly cleanSpikesAndDips?: boolean;
	readonly colorSpace?: string;
	readonly colsampleBylevel?: number;
	readonly colsampleBynode?: number;
	readonly colsampleBytree?: number;
	readonly dartNormalizeType?: string;
	readonly dataFrequency?: string;
	readonly dataSplitColumn?: string;
	readonly dataSplitEvalFraction?: number;
	readonly dataSplitMethod?: string;
	readonly decomposeTimeSeries?: boolean;
	readonly distanceType?: string;
	readonly dropout?: number;
	readonly earlyStop?: boolean;
	readonly enableGlobalExplain?: boolean;
	readonly feedbackType?: string;
	readonly hiddenUnits?: string[];
	readonly holidayRegion?: string;
	readonly horizon?: string;
	readonly hparamTuningObjectives?: string[];
	readonly includeDrift?: boolean;
	readonly initialLearnRate?: number;
	readonly inputLabelColumns?: string[];
	readonly integratedGradientsNumSteps?: string;
	readonly itemColumn?: string;
	readonly kmeansInitializationColumn?: string;
	readonly kmeansInitializationMethod?: string;
	readonly l1Regularization?: number;
	readonly l2Regularization?: number;
	readonly labelClassWeights?: { [P in string]: number };
	readonly learnRate?: number;
	readonly learnRateStrategy?: string;
	readonly lossType?: string;
	readonly maxIterations?: string;
	readonly maxParallelTrials?: string;
	readonly maxTimeSeriesLength?: string;
	readonly maxTreeDepth?: string;
	readonly minRelativeProgress?: number;
	readonly minSplitLoss?: number;
	readonly minTimeSeriesLength?: string;
	readonly minTreeChildWeight?: string;
	readonly modelUri?: string;
	readonly nonSeasonalOrder?: ArimaOrder;
	readonly numClusters?: string;
	readonly numFactors?: string;
	readonly numParallelTree?: string;
	readonly numTrials?: string;
	readonly optimizationStrategy?: string;
	readonly preserveInputStructs?: boolean;
	readonly sampledShapleyNumPaths?: string;
	readonly subsample?: number;
	readonly timeSeriesDataColumn?: string;
	readonly timeSeriesIdColumn?: string;
	readonly timeSeriesIdColumns?: string[];
	readonly timeSeriesLengthFraction?: number;
	readonly timeSeriesTimestampColumn?: string;
	readonly treeMethod?: string;
	readonly trendSmoothingWindowSize?: string;
	readonly userColumn?: string;
	readonly walsAlpha?: number;
	readonly warmStart?: boolean;
}
export interface TrainingRun {
	readonly classLevelGlobalExplanations?: GlobalExplanation[];
	readonly dataSplitResult?: DataSplitResult;
	readonly evaluationMetrics?: EvaluationMetrics;
	readonly modelLevelGlobalExplanation?: GlobalExplanation;
	readonly results?: IterationResult[];
	readonly startTime?: string;
	readonly trainingOptions?: TrainingOptions;
	readonly trainingStartTime?: string;
	readonly vertexAiModelId?: string;
	readonly vertexAiModelVersion?: string;
}
export default {
	Models: Models,
};
