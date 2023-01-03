import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Models extends GdmResource<ModelsComponentInputs> implements ModelsComponentOutputs {
	constructor(entity: ADKEntity, options: ModelsComponentInputs) {
		super(entity, options.name, "bigquery.v2.Models", options);
	}
	public readonly creationTime?: string | undefined;
	public readonly defaultTrialId?: string | undefined;
	public readonly etag?: string | undefined;
	public readonly featureColumns?: StandardSqlField[] | undefined;
	public readonly hparamSearchSpaces?: HparamSearchSpaces | undefined;
	public readonly hparamTrials?: HparamTuningTrial[] | undefined;
	public readonly labelColumns?: StandardSqlField[] | undefined;
	public readonly lastModifiedTime?: string | undefined;
	public readonly location?: string | undefined;
	public readonly modelType?: string | undefined;
	public readonly optimalTrialIds?: string[] | undefined;
}
export interface ModelsComponentOutputs {
	readonly creationTime?: string | undefined;
	readonly defaultTrialId?: string | undefined;
	readonly etag?: string | undefined;
	readonly featureColumns?: StandardSqlField[] | undefined;
	readonly hparamSearchSpaces?: HparamSearchSpaces | undefined;
	readonly hparamTrials?: HparamTuningTrial[] | undefined;
	readonly labelColumns?: StandardSqlField[] | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly location?: string | undefined;
	readonly modelType?: string | undefined;
	readonly optimalTrialIds?: string[] | undefined;
}
export interface ModelsComponentInputs {
	readonly bestTrialId?: string | undefined;
	readonly description?: string | undefined;
	readonly encryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly expirationTime?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly modelReference: ModelReference;
	readonly trainingRuns?: TrainingRun[] | undefined;
	readonly type: string;
	readonly name: string;
}
export interface AggregateClassificationMetrics {
	readonly accuracy?: number | undefined;
	readonly f1Score?: number | undefined;
	readonly logLoss?: number | undefined;
	readonly precision?: number | undefined;
	readonly recall?: number | undefined;
	readonly rocAuc?: number | undefined;
	readonly threshold?: number | undefined;
}
export interface ArimaCoefficients {
	readonly autoRegressiveCoefficients?: number[] | undefined;
	readonly interceptCoefficient?: number | undefined;
	readonly movingAverageCoefficients?: number[] | undefined;
}
export interface ArimaFittingMetrics {
	readonly aic?: number | undefined;
	readonly logLikelihood?: number | undefined;
	readonly variance?: number | undefined;
}
export interface ArimaForecastingMetrics {
	readonly arimaFittingMetrics?: ArimaFittingMetrics[] | undefined;
	readonly arimaSingleModelForecastingMetrics?: ArimaSingleModelForecastingMetrics[] | undefined;
	readonly hasDrift?: boolean[] | undefined;
	readonly nonSeasonalOrder?: ArimaOrder[] | undefined;
	readonly seasonalPeriods?: string[] | undefined;
	readonly timeSeriesId?: string[] | undefined;
}
export interface ArimaModelInfo {
	readonly arimaCoefficients?: ArimaCoefficients | undefined;
	readonly arimaFittingMetrics?: ArimaFittingMetrics | undefined;
	readonly hasDrift?: boolean | undefined;
	readonly hasHolidayEffect?: boolean | undefined;
	readonly hasSpikesAndDips?: boolean | undefined;
	readonly hasStepChanges?: boolean | undefined;
	readonly nonSeasonalOrder?: ArimaOrder | undefined;
	readonly seasonalPeriods?: string[] | undefined;
	readonly timeSeriesId?: string | undefined;
	readonly timeSeriesIds?: string[] | undefined;
}
export interface ArimaOrder {
	readonly d?: string | undefined;
	readonly p?: string | undefined;
	readonly q?: string | undefined;
}
export interface ArimaResult {
	readonly arimaModelInfo?: ArimaModelInfo[] | undefined;
	readonly seasonalPeriods?: string[] | undefined;
}
export interface ArimaSingleModelForecastingMetrics {
	readonly arimaFittingMetrics?: ArimaFittingMetrics | undefined;
	readonly hasDrift?: boolean | undefined;
	readonly hasHolidayEffect?: boolean | undefined;
	readonly hasSpikesAndDips?: boolean | undefined;
	readonly hasStepChanges?: boolean | undefined;
	readonly nonSeasonalOrder?: ArimaOrder | undefined;
	readonly seasonalPeriods?: string[] | undefined;
	readonly timeSeriesId?: string | undefined;
	readonly timeSeriesIds?: string[] | undefined;
}
export interface BinaryClassificationMetrics {
	readonly aggregateClassificationMetrics?: AggregateClassificationMetrics | undefined;
	readonly binaryConfusionMatrixList?: BinaryConfusionMatrix[] | undefined;
	readonly negativeLabel?: string | undefined;
	readonly positiveLabel?: string | undefined;
}
export interface BinaryConfusionMatrix {
	readonly accuracy?: number | undefined;
	readonly f1Score?: number | undefined;
	readonly falseNegatives?: string | undefined;
	readonly falsePositives?: string | undefined;
	readonly positiveClassThreshold?: number | undefined;
	readonly precision?: number | undefined;
	readonly recall?: number | undefined;
	readonly trueNegatives?: string | undefined;
	readonly truePositives?: string | undefined;
}
export interface CategoricalValue {
	readonly categoryCounts?: CategoryCount[] | undefined;
}
export interface CategoryCount {
	readonly category?: string | undefined;
	readonly count?: string | undefined;
}
export interface Cluster {
	readonly centroidId?: string | undefined;
	readonly count?: string | undefined;
	readonly featureValues?: FeatureValue[] | undefined;
}
export interface ClusterInfo {
	readonly centroidId?: string | undefined;
	readonly clusterRadius?: number | undefined;
	readonly clusterSize?: string | undefined;
}
export interface ClusteringMetrics {
	readonly clusters?: Cluster[] | undefined;
	readonly daviesBouldinIndex?: number | undefined;
	readonly meanSquaredDistance?: number | undefined;
}
export interface ConfusionMatrix {
	readonly confidenceThreshold?: number | undefined;
	readonly rows?: Row[] | undefined;
}
export interface DataSplitResult {
	readonly evaluationTable?: TableReference | undefined;
	readonly testTable?: TableReference | undefined;
	readonly trainingTable?: TableReference | undefined;
}
export interface DimensionalityReductionMetrics {
	readonly totalExplainedVarianceRatio?: number | undefined;
}
export interface DoubleCandidates {
	readonly candidates?: number[] | undefined;
}
export interface DoubleHparamSearchSpace {
	readonly candidates?: DoubleCandidates | undefined;
	readonly range?: DoubleRange | undefined;
}
export interface DoubleRange {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string | undefined;
}
export interface Entry {
	readonly itemCount?: string | undefined;
	readonly predictedLabel?: string | undefined;
}
export interface EvaluationMetrics {
	readonly arimaForecastingMetrics?: ArimaForecastingMetrics | undefined;
	readonly binaryClassificationMetrics?: BinaryClassificationMetrics | undefined;
	readonly clusteringMetrics?: ClusteringMetrics | undefined;
	readonly dimensionalityReductionMetrics?: DimensionalityReductionMetrics | undefined;
	readonly multiClassClassificationMetrics?: MultiClassClassificationMetrics | undefined;
	readonly rankingMetrics?: RankingMetrics | undefined;
	readonly regressionMetrics?: RegressionMetrics | undefined;
}
export interface Explanation {
	readonly attribution?: number | undefined;
	readonly featureName?: string | undefined;
}
export interface FeatureValue {
	readonly categoricalValue?: CategoricalValue | undefined;
	readonly featureColumn?: string | undefined;
	readonly numericalValue?: number | undefined;
}
export interface GlobalExplanation {
	readonly classLabel?: string | undefined;
	readonly explanations?: Explanation[] | undefined;
}
export interface HparamSearchSpaces {
	readonly activationFn?: StringHparamSearchSpace | undefined;
	readonly batchSize?: IntHparamSearchSpace | undefined;
	readonly boosterType?: StringHparamSearchSpace | undefined;
	readonly colsampleBylevel?: DoubleHparamSearchSpace | undefined;
	readonly colsampleBynode?: DoubleHparamSearchSpace | undefined;
	readonly colsampleBytree?: DoubleHparamSearchSpace | undefined;
	readonly dartNormalizeType?: StringHparamSearchSpace | undefined;
	readonly dropout?: DoubleHparamSearchSpace | undefined;
	readonly hiddenUnits?: IntArrayHparamSearchSpace | undefined;
	readonly l1Reg?: DoubleHparamSearchSpace | undefined;
	readonly l2Reg?: DoubleHparamSearchSpace | undefined;
	readonly learnRate?: DoubleHparamSearchSpace | undefined;
	readonly maxTreeDepth?: IntHparamSearchSpace | undefined;
	readonly minSplitLoss?: DoubleHparamSearchSpace | undefined;
	readonly minTreeChildWeight?: IntHparamSearchSpace | undefined;
	readonly numClusters?: IntHparamSearchSpace | undefined;
	readonly numFactors?: IntHparamSearchSpace | undefined;
	readonly numParallelTree?: IntHparamSearchSpace | undefined;
	readonly optimizer?: StringHparamSearchSpace | undefined;
	readonly subsample?: DoubleHparamSearchSpace | undefined;
	readonly treeMethod?: StringHparamSearchSpace | undefined;
	readonly walsAlpha?: DoubleHparamSearchSpace | undefined;
}
export interface HparamTuningTrial {
	readonly endTimeMs?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly evalLoss?: number | undefined;
	readonly evaluationMetrics?: EvaluationMetrics | undefined;
	readonly hparams?: TrainingOptions | undefined;
	readonly hparamTuningEvaluationMetrics?: EvaluationMetrics | undefined;
	readonly startTimeMs?: string | undefined;
	readonly status?: string | undefined;
	readonly trainingLoss?: number | undefined;
	readonly trialId?: string | undefined;
}
export interface IntArray {
	readonly elements?: string[] | undefined;
}
export interface IntArrayHparamSearchSpace {
	readonly candidates?: IntArray[] | undefined;
}
export interface IntCandidates {
	readonly candidates?: string[] | undefined;
}
export interface IntHparamSearchSpace {
	readonly candidates?: IntCandidates | undefined;
	readonly range?: IntRange | undefined;
}
export interface IntRange {
	readonly max?: string | undefined;
	readonly min?: string | undefined;
}
export interface IterationResult {
	readonly arimaResult?: ArimaResult | undefined;
	readonly clusterInfos?: ClusterInfo[] | undefined;
	readonly durationMs?: string | undefined;
	readonly evalLoss?: number | undefined;
	readonly index?: number | undefined;
	readonly learnRate?: number | undefined;
	readonly principalComponentInfos?: PrincipalComponentInfo[] | undefined;
	readonly trainingLoss?: number | undefined;
}
export interface Model {
	readonly bestTrialId?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly defaultTrialId?: string | undefined;
	readonly description?: string | undefined;
	readonly encryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly etag?: string | undefined;
	readonly expirationTime?: string | undefined;
	readonly featureColumns?: StandardSqlField[] | undefined;
	readonly friendlyName?: string | undefined;
	readonly hparamSearchSpaces?: HparamSearchSpaces | undefined;
	readonly hparamTrials?: HparamTuningTrial[] | undefined;
	readonly labelColumns?: StandardSqlField[] | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly location?: string | undefined;
	readonly modelReference: ModelReference;
	readonly modelType?: string | undefined;
	readonly optimalTrialIds?: string[] | undefined;
	readonly trainingRuns?: TrainingRun[] | undefined;
}
export interface ModelReference {
	readonly datasetId: string;
	readonly modelId: string;
	readonly projectId: string;
}
export interface MultiClassClassificationMetrics {
	readonly aggregateClassificationMetrics?: AggregateClassificationMetrics | undefined;
	readonly confusionMatrixList?: ConfusionMatrix[] | undefined;
}
export interface PrincipalComponentInfo {
	readonly cumulativeExplainedVarianceRatio?: number | undefined;
	readonly explainedVariance?: number | undefined;
	readonly explainedVarianceRatio?: number | undefined;
	readonly principalComponentId?: string | undefined;
}
export interface RankingMetrics {
	readonly averageRank?: number | undefined;
	readonly meanAveragePrecision?: number | undefined;
	readonly meanSquaredError?: number | undefined;
	readonly normalizedDiscountedCumulativeGain?: number | undefined;
}
export interface RegressionMetrics {
	readonly meanAbsoluteError?: number | undefined;
	readonly meanSquaredError?: number | undefined;
	readonly meanSquaredLogError?: number | undefined;
	readonly medianAbsoluteError?: number | undefined;
	readonly rSquared?: number | undefined;
}
export interface Row {
	readonly actualLabel?: string | undefined;
	readonly entries?: Entry[] | undefined;
}
export interface StandardSqlDataType {
	readonly arrayElementType?: StandardSqlDataType | undefined;
	readonly structType?: StandardSqlStructType | undefined;
	readonly typeKind: string;
}
export interface StandardSqlField {
	readonly name?: string | undefined;
	readonly type?: StandardSqlDataType | undefined;
}
export interface StandardSqlStructType {
	readonly fields?: StandardSqlField[] | undefined;
}
export interface StringHparamSearchSpace {
	readonly candidates?: string[] | undefined;
}
export interface TableReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly tableId: string;
}
export interface TrainingOptions {
	readonly adjustStepChanges?: boolean | undefined;
	readonly autoArima?: boolean | undefined;
	readonly autoArimaMaxOrder?: string | undefined;
	readonly batchSize?: string | undefined;
	readonly boosterType?: string | undefined;
	readonly calculatePValues?: boolean | undefined;
	readonly cleanSpikesAndDips?: boolean | undefined;
	readonly colorSpace?: string | undefined;
	readonly colsampleBylevel?: number | undefined;
	readonly colsampleBynode?: number | undefined;
	readonly colsampleBytree?: number | undefined;
	readonly dartNormalizeType?: string | undefined;
	readonly dataFrequency?: string | undefined;
	readonly dataSplitColumn?: string | undefined;
	readonly dataSplitEvalFraction?: number | undefined;
	readonly dataSplitMethod?: string | undefined;
	readonly decomposeTimeSeries?: boolean | undefined;
	readonly distanceType?: string | undefined;
	readonly dropout?: number | undefined;
	readonly earlyStop?: boolean | undefined;
	readonly enableGlobalExplain?: boolean | undefined;
	readonly feedbackType?: string | undefined;
	readonly hiddenUnits?: string[] | undefined;
	readonly holidayRegion?: string | undefined;
	readonly horizon?: string | undefined;
	readonly hparamTuningObjectives?: string[] | undefined;
	readonly includeDrift?: boolean | undefined;
	readonly initialLearnRate?: number | undefined;
	readonly inputLabelColumns?: string[] | undefined;
	readonly integratedGradientsNumSteps?: string | undefined;
	readonly itemColumn?: string | undefined;
	readonly kmeansInitializationColumn?: string | undefined;
	readonly kmeansInitializationMethod?: string | undefined;
	readonly l1Regularization?: number | undefined;
	readonly l2Regularization?: number | undefined;
	readonly labelClassWeights?: { [P in string]: number } | undefined;
	readonly learnRate?: number | undefined;
	readonly learnRateStrategy?: string | undefined;
	readonly lossType?: string | undefined;
	readonly maxIterations?: string | undefined;
	readonly maxParallelTrials?: string | undefined;
	readonly maxTimeSeriesLength?: string | undefined;
	readonly maxTreeDepth?: string | undefined;
	readonly minRelativeProgress?: number | undefined;
	readonly minSplitLoss?: number | undefined;
	readonly minTimeSeriesLength?: string | undefined;
	readonly minTreeChildWeight?: string | undefined;
	readonly modelUri?: string | undefined;
	readonly nonSeasonalOrder?: ArimaOrder | undefined;
	readonly numClusters?: string | undefined;
	readonly numFactors?: string | undefined;
	readonly numParallelTree?: string | undefined;
	readonly numTrials?: string | undefined;
	readonly optimizationStrategy?: string | undefined;
	readonly preserveInputStructs?: boolean | undefined;
	readonly sampledShapleyNumPaths?: string | undefined;
	readonly subsample?: number | undefined;
	readonly timeSeriesDataColumn?: string | undefined;
	readonly timeSeriesIdColumn?: string | undefined;
	readonly timeSeriesIdColumns?: string[] | undefined;
	readonly timeSeriesLengthFraction?: number | undefined;
	readonly timeSeriesTimestampColumn?: string | undefined;
	readonly treeMethod?: string | undefined;
	readonly trendSmoothingWindowSize?: string | undefined;
	readonly userColumn?: string | undefined;
	readonly walsAlpha?: number | undefined;
	readonly warmStart?: boolean | undefined;
}
export interface TrainingRun {
	readonly classLevelGlobalExplanations?: GlobalExplanation[] | undefined;
	readonly dataSplitResult?: DataSplitResult | undefined;
	readonly evaluationMetrics?: EvaluationMetrics | undefined;
	readonly modelLevelGlobalExplanation?: GlobalExplanation | undefined;
	readonly results?: IterationResult[] | undefined;
	readonly startTime?: string | undefined;
	readonly trainingOptions?: TrainingOptions | undefined;
	readonly trainingStartTime?: string | undefined;
	readonly vertexAiModelId?: string | undefined;
	readonly vertexAiModelVersion?: string | undefined;
}
export default {
	Models: Models,
};
