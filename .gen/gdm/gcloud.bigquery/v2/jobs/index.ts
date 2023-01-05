import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Jobs extends GdmResource<JobsComponentInputs> implements JobsComponentOutputs {
	constructor(entity: ADKEntity, options: JobsComponentInputs) {
		super(entity, options.name, "bigquery.v2.Jobs", options);
	}
	public readonly etag?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly principal_subject?: string;
	public readonly selfLink?: string;
	public readonly statistics?: JobStatistics;
	public readonly status?: JobStatus;
	public readonly user_email?: string;
}
export interface JobsComponentOutputs {
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly principal_subject?: string;
	readonly selfLink?: string;
	readonly statistics?: JobStatistics;
	readonly status?: JobStatus;
	readonly user_email?: string;
}
export interface JobsComponentInputs {
	readonly configuration: JobConfiguration;
	readonly jobReference?: JobReference;
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
export interface AvroOptions {
	readonly useAvroLogicalTypes?: boolean;
}
export interface BiEngineReason {
	readonly code?: string;
	readonly message?: string;
}
export interface BiEngineStatistics {
	readonly biEngineMode?: string;
	readonly biEngineReasons?: BiEngineReason[];
}
export interface BigtableColumn {
	readonly encoding?: string;
	readonly fieldName?: string;
	readonly onlyReadLatest?: boolean;
	readonly qualifierEncoded?: string;
	readonly qualifierString?: string;
	readonly type?: string;
}
export interface BigtableColumnFamily {
	readonly columns?: BigtableColumn[];
	readonly encoding?: string;
	readonly familyId?: string;
	readonly onlyReadLatest?: boolean;
	readonly type?: string;
}
export interface BigtableOptions {
	readonly columnFamilies?: BigtableColumnFamily[];
	readonly ignoreUnspecifiedColumnFamilies?: boolean;
	readonly readRowkeyAsString?: boolean;
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
export interface Clustering {
	readonly fields?: string[];
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
export interface ConnectionProperty {
	readonly key?: string;
	readonly value?: string;
}
export interface CopyJobStatistics {
	readonly copiedLogicalBytes?: string;
	readonly copiedRows?: string;
}
export interface CsvOptions {
	readonly allowJaggedRows?: boolean;
	readonly allowQuotedNewlines?: boolean;
	readonly encoding?: string;
	readonly fieldDelimiter?: string;
	readonly preserveAsciiControlCharacters?: boolean;
	readonly quote?: string;
	readonly skipLeadingRows?: string;
}
export interface DataMaskingStatistics {
	readonly dataMaskingApplied?: boolean;
}
export interface DatasetReference {
	readonly datasetId: string;
	readonly projectId?: string;
}
export interface DestinationTableProperties {
	readonly description?: string;
	readonly friendlyName?: string;
	readonly labels?: { [P in string]: string };
}
export interface DimensionalityReductionMetrics {
	readonly totalExplainedVarianceRatio?: number;
}
export interface DmlStats {
	readonly deletedRowCount?: string;
	readonly insertedRowCount?: string;
	readonly updatedRowCount?: string;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string;
}
export interface Entry {
	readonly itemCount?: string;
	readonly predictedLabel?: string;
}
export interface ErrorProto {
	readonly debugInfo?: string;
	readonly location?: string;
	readonly message?: string;
	readonly reason?: string;
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
export interface ExplainQueryStage {
	readonly completedParallelInputs?: string;
	readonly computeMsAvg?: string;
	readonly computeMsMax?: string;
	readonly computeRatioAvg?: number;
	readonly computeRatioMax?: number;
	readonly endMs?: string;
	readonly id?: string;
	readonly inputStages?: string[];
	readonly name?: string;
	readonly parallelInputs?: string;
	readonly readMsAvg?: string;
	readonly readMsMax?: string;
	readonly readRatioAvg?: number;
	readonly readRatioMax?: number;
	readonly recordsRead?: string;
	readonly recordsWritten?: string;
	readonly shuffleOutputBytes?: string;
	readonly shuffleOutputBytesSpilled?: string;
	readonly slotMs?: string;
	readonly startMs?: string;
	readonly status?: string;
	readonly steps?: ExplainQueryStep[];
	readonly waitMsAvg?: string;
	readonly waitMsMax?: string;
	readonly waitRatioAvg?: number;
	readonly waitRatioMax?: number;
	readonly writeMsAvg?: string;
	readonly writeMsMax?: string;
	readonly writeRatioAvg?: number;
	readonly writeRatioMax?: number;
}
export interface ExplainQueryStep {
	readonly kind?: string;
	readonly substeps?: string[];
}
export interface ExportDataStatistics {
	readonly fileCount?: string;
	readonly rowCount?: string;
}
export interface ExternalDataConfiguration {
	readonly autodetect?: boolean;
	readonly avroOptions?: AvroOptions;
	readonly bigtableOptions?: BigtableOptions;
	readonly compression?: string;
	readonly connectionId?: string;
	readonly csvOptions?: CsvOptions;
	readonly decimalTargetTypes?: string[];
	readonly googleSheetsOptions?: GoogleSheetsOptions;
	readonly hivePartitioningOptions?: HivePartitioningOptions;
	readonly ignoreUnknownValues?: boolean;
	readonly jsonExtension?: string;
	readonly maxBadRecords?: number;
	readonly metadataCacheMode?: string;
	readonly objectMetadata?: string;
	readonly parquetOptions?: ParquetOptions;
	readonly referenceFileSchemaUri?: string;
	readonly schema?: TableSchema;
	readonly sourceFormat?: string;
	readonly sourceUris?: string[];
}
export interface ExternalServiceCost {
	readonly bytesBilled?: string;
	readonly bytesProcessed?: string;
	readonly externalService?: string;
	readonly reservedSlotCount?: string;
	readonly slotMs?: string;
}
export interface FeatureValue {
	readonly categoricalValue?: CategoricalValue;
	readonly featureColumn?: string;
	readonly numericalValue?: number;
}
export interface FieldElementType {
	readonly type: string;
}
export interface GoogleSheetsOptions {
	readonly range?: string;
	readonly skipLeadingRows?: string;
}
export interface HivePartitioningOptions {
	readonly fields?: string[];
	readonly mode?: string;
	readonly requirePartitionFilter?: boolean;
	readonly sourceUriPrefix?: string;
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
export interface IndexUnusedReason {
	readonly baseTable?: TableReference;
	readonly code?: string;
	readonly indexName?: string;
	readonly message?: string;
}
export interface InputDataChange {
	readonly recordsReadDiffPercentage?: number;
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
export interface Job {
	readonly configuration: JobConfiguration;
	readonly etag?: string;
	readonly id?: string;
	readonly jobReference?: JobReference;
	readonly kind?: string;
	readonly principal_subject?: string;
	readonly selfLink?: string;
	readonly statistics?: JobStatistics;
	readonly status?: JobStatus;
	readonly user_email?: string;
}
export interface JobConfiguration {
	readonly copy?: JobConfigurationTableCopy;
	readonly dryRun?: boolean;
	readonly extract?: JobConfigurationExtract;
	readonly jobTimeoutMs?: string;
	readonly jobType?: string;
	readonly labels?: { [P in string]: string };
	readonly load?: JobConfigurationLoad;
	readonly query?: JobConfigurationQuery;
}
export interface JobConfigurationExtract {
	readonly compression?: string;
	readonly destinationFormat?: string;
	readonly destinationUri?: string;
	readonly destinationUris?: string[];
	readonly fieldDelimiter?: string;
	readonly modelExtractOptions?: ModelExtractOptions;
	readonly printHeader?: boolean;
	readonly sourceModel?: ModelReference;
	readonly sourceTable?: TableReference;
	readonly useAvroLogicalTypes?: boolean;
}
export interface JobConfigurationLoad {
	readonly allowJaggedRows?: boolean;
	readonly allowQuotedNewlines?: boolean;
	readonly autodetect?: boolean;
	readonly clustering?: Clustering;
	readonly connectionProperties?: ConnectionProperty[];
	readonly createDisposition?: string;
	readonly createSession?: boolean;
	readonly decimalTargetTypes?: string[];
	readonly destinationEncryptionConfiguration?: EncryptionConfiguration;
	readonly destinationTable?: TableReference;
	readonly destinationTableProperties?: DestinationTableProperties;
	readonly encoding?: string;
	readonly fieldDelimiter?: string;
	readonly hivePartitioningOptions?: HivePartitioningOptions;
	readonly ignoreUnknownValues?: boolean;
	readonly jsonExtension?: string;
	readonly maxBadRecords?: number;
	readonly nullMarker?: string;
	readonly parquetOptions?: ParquetOptions;
	readonly preserveAsciiControlCharacters?: boolean;
	readonly projectionFields?: string[];
	readonly quote?: string;
	readonly rangePartitioning?: RangePartitioning;
	readonly referenceFileSchemaUri?: string;
	readonly schema?: TableSchema;
	readonly schemaInline?: string;
	readonly schemaInlineFormat?: string;
	readonly schemaUpdateOptions?: string[];
	readonly skipLeadingRows?: number;
	readonly sourceFormat?: string;
	readonly sourceUris?: string[];
	readonly thriftOptions?: ThriftOptions;
	readonly timePartitioning?: TimePartitioning;
	readonly useAvroLogicalTypes?: boolean;
	readonly writeDisposition?: string;
}
export interface JobConfigurationQuery {
	readonly allowLargeResults?: boolean;
	readonly clustering?: Clustering;
	readonly connectionProperties?: ConnectionProperty[];
	readonly createDisposition?: string;
	readonly createSession?: boolean;
	readonly defaultDataset?: DatasetReference;
	readonly destinationEncryptionConfiguration?: EncryptionConfiguration;
	readonly destinationTable?: TableReference;
	readonly flattenResults?: boolean;
	readonly maximumBillingTier?: number;
	readonly maximumBytesBilled?: string;
	readonly parameterMode?: string;
	readonly preserveNulls?: boolean;
	readonly priority?: string;
	readonly query?: string;
	readonly queryParameters?: QueryParameter[];
	readonly rangePartitioning?: RangePartitioning;
	readonly schemaUpdateOptions?: string[];
	readonly scriptOptions?: ScriptOptions;
	readonly systemVariables?: SystemVariables;
	readonly tableDefinitions?: { [P in string]: ExternalDataConfiguration };
	readonly timePartitioning?: TimePartitioning;
	readonly useLegacySql?: boolean;
	readonly useQueryCache?: boolean;
	readonly userDefinedFunctionResources?: UserDefinedFunctionResource[];
	readonly writeDisposition?: string;
}
export interface JobConfigurationTableCopy {
	readonly createDisposition?: string;
	readonly destinationEncryptionConfiguration?: EncryptionConfiguration;
	readonly destinationExpirationTime?: string;
	readonly destinationTable?: TableReference;
	readonly operationType?: string;
	readonly sourceTable?: TableReference;
	readonly sourceTables?: TableReference[];
	readonly writeDisposition?: string;
}
export interface JobReference {
	readonly jobId: string;
	readonly location?: string;
	readonly projectId: string;
}
export interface JobStatistics {
	readonly completionRatio?: number;
	readonly copy?: CopyJobStatistics;
	readonly creationTime?: string;
	readonly dataMaskingStatistics?: DataMaskingStatistics;
	readonly endTime?: string;
	readonly extract?: JobStatistics4;
	readonly finalExecutionDurationMs?: string;
	readonly load?: JobStatistics3;
	readonly numChildJobs?: string;
	readonly parentJobId?: string;
	readonly query?: JobStatistics2;
	readonly quotaDeferments?: string[];
	readonly reservation_id?: string;
	readonly reservationUsage?: Array<{ name?: string; slotMs?: string }>;
	readonly rowLevelSecurityStatistics?: RowLevelSecurityStatistics;
	readonly scriptStatistics?: ScriptStatistics;
	readonly sessionInfo?: SessionInfo;
	readonly startTime?: string;
	readonly totalBytesProcessed?: string;
	readonly totalSlotMs?: string;
	readonly transactionInfo?: TransactionInfo;
}
export interface JobStatistics2 {
	readonly biEngineStatistics?: BiEngineStatistics;
	readonly billingTier?: number;
	readonly cacheHit?: boolean;
	readonly dclTargetDataset?: DatasetReference;
	readonly dclTargetTable?: TableReference;
	readonly dclTargetView?: TableReference;
	readonly ddlAffectedRowAccessPolicyCount?: string;
	readonly ddlOperationPerformed?: string;
	readonly ddlTargetDataset?: DatasetReference;
	readonly ddlTargetRoutine?: RoutineReference;
	readonly ddlTargetRowAccessPolicy?: RowAccessPolicyReference;
	readonly ddlTargetTable?: TableReference;
	readonly dmlStats?: DmlStats;
	readonly estimatedBytesProcessed?: string;
	readonly exportDataStatistics?: ExportDataStatistics;
	readonly externalServiceCosts?: ExternalServiceCost[];
	readonly loadQueryStatistics?: LoadQueryStatistics;
	readonly mlStatistics?: MlStatistics;
	readonly numDmlAffectedRows?: string;
	readonly performanceInsights?: PerformanceInsights;
	readonly queryPlan?: ExplainQueryStage[];
	readonly referencedRoutines?: RoutineReference[];
	readonly referencedTables?: TableReference[];
	readonly reservationUsage?: Array<{ name?: string; slotMs?: string }>;
	readonly schema?: TableSchema;
	readonly searchStatistics?: SearchStatistics;
	readonly sparkStatistics?: SparkStatistics;
	readonly statementType?: string;
	readonly timeline?: QueryTimelineSample[];
	readonly totalBytesBilled?: string;
	readonly totalBytesProcessed?: string;
	readonly totalBytesProcessedAccuracy?: string;
	readonly totalPartitionsProcessed?: string;
	readonly totalSlotMs?: string;
	readonly transferredBytes?: string;
	readonly undeclaredQueryParameters?: QueryParameter[];
}
export interface JobStatistics3 {
	readonly badRecords?: string;
	readonly inputFileBytes?: string;
	readonly inputFiles?: string;
	readonly outputBytes?: string;
	readonly outputRows?: string;
	readonly timeline?: QueryTimelineSample[];
}
export interface JobStatistics4 {
	readonly destinationUriFileCounts?: string[];
	readonly inputBytes?: string;
	readonly timeline?: QueryTimelineSample[];
}
export interface JobStatus {
	readonly errorResult?: ErrorProto;
	readonly errors?: ErrorProto[];
	readonly state?: string;
}
export interface LoadQueryStatistics {
	readonly badRecords?: string;
	readonly bytesTransferred?: string;
	readonly inputFileBytes?: string;
	readonly inputFiles?: string;
	readonly outputBytes?: string;
	readonly outputRows?: string;
}
export interface LoggingInfo {
	readonly projectId?: string;
	readonly resourceType?: string;
}
export interface MlStatistics {
	readonly hparamTrials?: HparamTuningTrial[];
	readonly iterationResults?: IterationResult[];
	readonly maxIterations?: string;
	readonly modelType?: string;
	readonly trainingType?: string;
}
export interface ModelExtractOptions {
	readonly trialId?: string;
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
export interface ParquetOptions {
	readonly enableListInference?: boolean;
	readonly enumAsString?: boolean;
}
export interface PerformanceInsights {
	readonly avgPreviousExecutionMs?: string;
	readonly stagePerformanceChangeInsights?: StagePerformanceChangeInsight[];
	readonly stagePerformanceStandaloneInsights?: StagePerformanceStandaloneInsight[];
}
export interface PrincipalComponentInfo {
	readonly cumulativeExplainedVarianceRatio?: number;
	readonly explainedVariance?: number;
	readonly explainedVarianceRatio?: number;
	readonly principalComponentId?: string;
}
export interface QueryParameter {
	readonly name?: string;
	readonly parameterType: QueryParameterType;
	readonly parameterValue: QueryParameterValue;
}
export interface QueryParameterType {
	readonly arrayType?: QueryParameterType;
	readonly structTypes?: Array<{ description?: string; name?: string; type?: QueryParameterType }>;
	readonly type: string;
}
export interface QueryParameterValue {
	readonly arrayValues?: QueryParameterValue[];
	readonly structValues?: { [P in string]: QueryParameterValue };
	readonly value?: string;
}
export interface QueryTimelineSample {
	readonly activeUnits?: string;
	readonly completedUnits?: string;
	readonly elapsedMs?: string;
	readonly estimatedRunnableUnits?: string;
	readonly pendingUnits?: string;
	readonly totalSlotMs?: string;
}
export interface RangePartitioning {
	readonly field: string;
	readonly range?: { end?: string; interval?: string; start?: string };
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
export interface RoutineReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly routineId: string;
}
export interface Row {
	readonly actualLabel?: string;
	readonly entries?: Entry[];
}
export interface RowAccessPolicyReference {
	readonly datasetId: string;
	readonly policyId: string;
	readonly projectId: string;
	readonly tableId: string;
}
export interface RowLevelSecurityStatistics {
	readonly rowLevelSecurityApplied?: boolean;
}
export interface ScriptOptions {
	readonly keyResultStatement?: string;
	readonly statementByteBudget?: string;
	readonly statementTimeoutMs?: string;
}
export interface ScriptStackFrame {
	readonly endColumn?: number;
	readonly endLine?: number;
	readonly procedureId?: string;
	readonly startColumn?: number;
	readonly startLine?: number;
	readonly text?: string;
}
export interface ScriptStatistics {
	readonly evaluationKind?: string;
	readonly stackFrames?: ScriptStackFrame[];
}
export interface SearchStatistics {
	readonly indexUnusedReasons?: IndexUnusedReason[];
	readonly indexUsageMode?: string;
}
export interface SessionInfo {
	readonly sessionId?: string;
}
export interface SparkStatistics {
	readonly endpoints?: { [P in string]: string };
	readonly loggingInfo?: LoggingInfo;
	readonly sparkJobId?: string;
	readonly sparkJobLocation?: string;
}
export interface StagePerformanceChangeInsight {
	readonly inputDataChange?: InputDataChange;
	readonly stageId?: string;
}
export interface StagePerformanceStandaloneInsight {
	readonly insufficientShuffleQuota?: boolean;
	readonly slotContention?: boolean;
	readonly stageId?: string;
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
export interface SystemVariables {
	readonly types?: { [P in string]: StandardSqlDataType };
	readonly values?: { [P in string]: any };
}
export interface TableFieldSchema {
	readonly collation?: string;
	readonly defaultValueExpression?: string;
	readonly description?: string;
	readonly fields?: TableFieldSchema[];
	readonly maxLength?: string;
	readonly mode?: string;
	readonly name: string;
	readonly policyTags?: { names?: string[] };
	readonly precision?: string;
	readonly rangeElementType?: FieldElementType;
	readonly roundingMode?: string;
	readonly scale?: string;
	readonly type: string;
}
export interface TableReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly tableId: string;
}
export interface TableSchema {
	readonly fields?: TableFieldSchema[];
}
export interface ThriftOptions {
	readonly boundaryBytes?: string;
	readonly deserializationOption?: string;
	readonly framingOption?: string;
	readonly schemaIdlRootDir: string;
	readonly schemaIdlUri: string;
	readonly schemaStruct: string;
}
export interface TimePartitioning {
	readonly expirationMs?: string;
	readonly field?: string;
	readonly requirePartitionFilter?: boolean;
	readonly type: string;
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
export interface TransactionInfo {
	readonly transactionId?: string;
}
export interface UserDefinedFunctionResource {
	readonly inlineCode?: string;
	readonly resourceUri?: string;
}
export default {
	Jobs: Jobs,
};
