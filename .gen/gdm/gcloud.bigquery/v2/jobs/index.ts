import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Jobs extends GdmResource<JobsComponentInputs> implements JobsComponentOutputs {
	constructor(entity: ADKEntity, options: JobsComponentInputs) {
		super(entity, options.name, "bigquery.v2.Jobs", options);
	}
	public readonly etag?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly principal_subject?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly statistics?: JobStatistics | undefined;
	public readonly status?: JobStatus | undefined;
	public readonly user_email?: string | undefined;
}
export interface JobsComponentOutputs {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly principal_subject?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly statistics?: JobStatistics | undefined;
	readonly status?: JobStatus | undefined;
	readonly user_email?: string | undefined;
}
export interface JobsComponentInputs {
	readonly configuration: JobConfiguration;
	readonly jobReference?: JobReference | undefined;
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
export interface AvroOptions {
	readonly useAvroLogicalTypes?: boolean | undefined;
}
export interface BiEngineReason {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface BiEngineStatistics {
	readonly biEngineMode?: string | undefined;
	readonly biEngineReasons?: BiEngineReason[] | undefined;
}
export interface BigtableColumn {
	readonly encoding?: string | undefined;
	readonly fieldName?: string | undefined;
	readonly onlyReadLatest?: boolean | undefined;
	readonly qualifierEncoded?: string | undefined;
	readonly qualifierString?: string | undefined;
	readonly type?: string | undefined;
}
export interface BigtableColumnFamily {
	readonly columns?: BigtableColumn[] | undefined;
	readonly encoding?: string | undefined;
	readonly familyId?: string | undefined;
	readonly onlyReadLatest?: boolean | undefined;
	readonly type?: string | undefined;
}
export interface BigtableOptions {
	readonly columnFamilies?: BigtableColumnFamily[] | undefined;
	readonly ignoreUnspecifiedColumnFamilies?: boolean | undefined;
	readonly readRowkeyAsString?: boolean | undefined;
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
export interface Clustering {
	readonly fields?: string[] | undefined;
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
export interface ConnectionProperty {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface CopyJobStatistics {
	readonly copiedLogicalBytes?: string | undefined;
	readonly copiedRows?: string | undefined;
}
export interface CsvOptions {
	readonly allowJaggedRows?: boolean | undefined;
	readonly allowQuotedNewlines?: boolean | undefined;
	readonly encoding?: string | undefined;
	readonly fieldDelimiter?: string | undefined;
	readonly preserveAsciiControlCharacters?: boolean | undefined;
	readonly quote?: string | undefined;
	readonly skipLeadingRows?: string | undefined;
}
export interface DataMaskingStatistics {
	readonly dataMaskingApplied?: boolean | undefined;
}
export interface DatasetReference {
	readonly datasetId: string;
	readonly projectId?: string | undefined;
}
export interface DestinationTableProperties {
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
}
export interface DimensionalityReductionMetrics {
	readonly totalExplainedVarianceRatio?: number | undefined;
}
export interface DmlStats {
	readonly deletedRowCount?: string | undefined;
	readonly insertedRowCount?: string | undefined;
	readonly updatedRowCount?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string | undefined;
}
export interface Entry {
	readonly itemCount?: string | undefined;
	readonly predictedLabel?: string | undefined;
}
export interface ErrorProto {
	readonly debugInfo?: string | undefined;
	readonly location?: string | undefined;
	readonly message?: string | undefined;
	readonly reason?: string | undefined;
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
export interface ExplainQueryStage {
	readonly completedParallelInputs?: string | undefined;
	readonly computeMsAvg?: string | undefined;
	readonly computeMsMax?: string | undefined;
	readonly computeRatioAvg?: number | undefined;
	readonly computeRatioMax?: number | undefined;
	readonly endMs?: string | undefined;
	readonly id?: string | undefined;
	readonly inputStages?: string[] | undefined;
	readonly name?: string | undefined;
	readonly parallelInputs?: string | undefined;
	readonly readMsAvg?: string | undefined;
	readonly readMsMax?: string | undefined;
	readonly readRatioAvg?: number | undefined;
	readonly readRatioMax?: number | undefined;
	readonly recordsRead?: string | undefined;
	readonly recordsWritten?: string | undefined;
	readonly shuffleOutputBytes?: string | undefined;
	readonly shuffleOutputBytesSpilled?: string | undefined;
	readonly slotMs?: string | undefined;
	readonly startMs?: string | undefined;
	readonly status?: string | undefined;
	readonly steps?: ExplainQueryStep[] | undefined;
	readonly waitMsAvg?: string | undefined;
	readonly waitMsMax?: string | undefined;
	readonly waitRatioAvg?: number | undefined;
	readonly waitRatioMax?: number | undefined;
	readonly writeMsAvg?: string | undefined;
	readonly writeMsMax?: string | undefined;
	readonly writeRatioAvg?: number | undefined;
	readonly writeRatioMax?: number | undefined;
}
export interface ExplainQueryStep {
	readonly kind?: string | undefined;
	readonly substeps?: string[] | undefined;
}
export interface ExportDataStatistics {
	readonly fileCount?: string | undefined;
	readonly rowCount?: string | undefined;
}
export interface ExternalDataConfiguration {
	readonly autodetect?: boolean | undefined;
	readonly avroOptions?: AvroOptions | undefined;
	readonly bigtableOptions?: BigtableOptions | undefined;
	readonly compression?: string | undefined;
	readonly connectionId?: string | undefined;
	readonly csvOptions?: CsvOptions | undefined;
	readonly decimalTargetTypes?: string[] | undefined;
	readonly googleSheetsOptions?: GoogleSheetsOptions | undefined;
	readonly hivePartitioningOptions?: HivePartitioningOptions | undefined;
	readonly ignoreUnknownValues?: boolean | undefined;
	readonly jsonExtension?: string | undefined;
	readonly maxBadRecords?: number | undefined;
	readonly metadataCacheMode?: string | undefined;
	readonly objectMetadata?: string | undefined;
	readonly parquetOptions?: ParquetOptions | undefined;
	readonly referenceFileSchemaUri?: string | undefined;
	readonly schema?: TableSchema | undefined;
	readonly sourceFormat?: string | undefined;
	readonly sourceUris?: string[] | undefined;
}
export interface ExternalServiceCost {
	readonly bytesBilled?: string | undefined;
	readonly bytesProcessed?: string | undefined;
	readonly externalService?: string | undefined;
	readonly reservedSlotCount?: string | undefined;
	readonly slotMs?: string | undefined;
}
export interface FeatureValue {
	readonly categoricalValue?: CategoricalValue | undefined;
	readonly featureColumn?: string | undefined;
	readonly numericalValue?: number | undefined;
}
export interface FieldElementType {
	readonly type: string;
}
export interface GoogleSheetsOptions {
	readonly range?: string | undefined;
	readonly skipLeadingRows?: string | undefined;
}
export interface HivePartitioningOptions {
	readonly fields?: string[] | undefined;
	readonly mode?: string | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly sourceUriPrefix?: string | undefined;
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
export interface IndexUnusedReason {
	readonly baseTable?: TableReference | undefined;
	readonly code?: string | undefined;
	readonly indexName?: string | undefined;
	readonly message?: string | undefined;
}
export interface InputDataChange {
	readonly recordsReadDiffPercentage?: number | undefined;
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
export interface Job {
	readonly configuration: JobConfiguration;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly jobReference?: JobReference | undefined;
	readonly kind?: string | undefined;
	readonly principal_subject?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly statistics?: JobStatistics | undefined;
	readonly status?: JobStatus | undefined;
	readonly user_email?: string | undefined;
}
export interface JobConfiguration {
	readonly copy?: JobConfigurationTableCopy | undefined;
	readonly dryRun?: boolean | undefined;
	readonly extract?: JobConfigurationExtract | undefined;
	readonly jobTimeoutMs?: string | undefined;
	readonly jobType?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly load?: JobConfigurationLoad | undefined;
	readonly query?: JobConfigurationQuery | undefined;
}
export interface JobConfigurationExtract {
	readonly compression?: string | undefined;
	readonly destinationFormat?: string | undefined;
	readonly destinationUri?: string | undefined;
	readonly destinationUris?: string[] | undefined;
	readonly fieldDelimiter?: string | undefined;
	readonly modelExtractOptions?: ModelExtractOptions | undefined;
	readonly printHeader?: boolean | undefined;
	readonly sourceModel?: ModelReference | undefined;
	readonly sourceTable?: TableReference | undefined;
	readonly useAvroLogicalTypes?: boolean | undefined;
}
export interface JobConfigurationLoad {
	readonly allowJaggedRows?: boolean | undefined;
	readonly allowQuotedNewlines?: boolean | undefined;
	readonly autodetect?: boolean | undefined;
	readonly clustering?: Clustering | undefined;
	readonly connectionProperties?: ConnectionProperty[] | undefined;
	readonly createDisposition?: string | undefined;
	readonly createSession?: boolean | undefined;
	readonly decimalTargetTypes?: string[] | undefined;
	readonly destinationEncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly destinationTable?: TableReference | undefined;
	readonly destinationTableProperties?: DestinationTableProperties | undefined;
	readonly encoding?: string | undefined;
	readonly fieldDelimiter?: string | undefined;
	readonly hivePartitioningOptions?: HivePartitioningOptions | undefined;
	readonly ignoreUnknownValues?: boolean | undefined;
	readonly jsonExtension?: string | undefined;
	readonly maxBadRecords?: number | undefined;
	readonly nullMarker?: string | undefined;
	readonly parquetOptions?: ParquetOptions | undefined;
	readonly preserveAsciiControlCharacters?: boolean | undefined;
	readonly projectionFields?: string[] | undefined;
	readonly quote?: string | undefined;
	readonly rangePartitioning?: RangePartitioning | undefined;
	readonly referenceFileSchemaUri?: string | undefined;
	readonly schema?: TableSchema | undefined;
	readonly schemaInline?: string | undefined;
	readonly schemaInlineFormat?: string | undefined;
	readonly schemaUpdateOptions?: string[] | undefined;
	readonly skipLeadingRows?: number | undefined;
	readonly sourceFormat?: string | undefined;
	readonly sourceUris?: string[] | undefined;
	readonly thriftOptions?: ThriftOptions | undefined;
	readonly timePartitioning?: TimePartitioning | undefined;
	readonly useAvroLogicalTypes?: boolean | undefined;
	readonly writeDisposition?: string | undefined;
}
export interface JobConfigurationQuery {
	readonly allowLargeResults?: boolean | undefined;
	readonly clustering?: Clustering | undefined;
	readonly connectionProperties?: ConnectionProperty[] | undefined;
	readonly createDisposition?: string | undefined;
	readonly createSession?: boolean | undefined;
	readonly defaultDataset?: DatasetReference | undefined;
	readonly destinationEncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly destinationTable?: TableReference | undefined;
	readonly flattenResults?: boolean | undefined;
	readonly maximumBillingTier?: number | undefined;
	readonly maximumBytesBilled?: string | undefined;
	readonly parameterMode?: string | undefined;
	readonly preserveNulls?: boolean | undefined;
	readonly priority?: string | undefined;
	readonly query?: string | undefined;
	readonly queryParameters?: QueryParameter[] | undefined;
	readonly rangePartitioning?: RangePartitioning | undefined;
	readonly schemaUpdateOptions?: string[] | undefined;
	readonly scriptOptions?: ScriptOptions | undefined;
	readonly systemVariables?: SystemVariables | undefined;
	readonly tableDefinitions?: { [P in string]: ExternalDataConfiguration } | undefined;
	readonly timePartitioning?: TimePartitioning | undefined;
	readonly useLegacySql?: boolean | undefined;
	readonly useQueryCache?: boolean | undefined;
	readonly userDefinedFunctionResources?: UserDefinedFunctionResource[] | undefined;
	readonly writeDisposition?: string | undefined;
}
export interface JobConfigurationTableCopy {
	readonly createDisposition?: string | undefined;
	readonly destinationEncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly destinationExpirationTime?: string | undefined;
	readonly destinationTable?: TableReference | undefined;
	readonly operationType?: string | undefined;
	readonly sourceTable?: TableReference | undefined;
	readonly sourceTables?: TableReference[] | undefined;
	readonly writeDisposition?: string | undefined;
}
export interface JobReference {
	readonly jobId: string;
	readonly location?: string | undefined;
	readonly projectId: string;
}
export interface JobStatistics {
	readonly completionRatio?: number | undefined;
	readonly copy?: CopyJobStatistics | undefined;
	readonly creationTime?: string | undefined;
	readonly dataMaskingStatistics?: DataMaskingStatistics | undefined;
	readonly endTime?: string | undefined;
	readonly extract?: JobStatistics4 | undefined;
	readonly finalExecutionDurationMs?: string | undefined;
	readonly load?: JobStatistics3 | undefined;
	readonly numChildJobs?: string | undefined;
	readonly parentJobId?: string | undefined;
	readonly query?: JobStatistics2 | undefined;
	readonly quotaDeferments?: string[] | undefined;
	readonly reservation_id?: string | undefined;
	readonly reservationUsage?: Array<{ name?: string; slotMs?: string }> | undefined;
	readonly rowLevelSecurityStatistics?: RowLevelSecurityStatistics | undefined;
	readonly scriptStatistics?: ScriptStatistics | undefined;
	readonly sessionInfo?: SessionInfo | undefined;
	readonly startTime?: string | undefined;
	readonly totalBytesProcessed?: string | undefined;
	readonly totalSlotMs?: string | undefined;
	readonly transactionInfo?: TransactionInfo | undefined;
}
export interface JobStatistics2 {
	readonly biEngineStatistics?: BiEngineStatistics | undefined;
	readonly billingTier?: number | undefined;
	readonly cacheHit?: boolean | undefined;
	readonly dclTargetDataset?: DatasetReference | undefined;
	readonly dclTargetTable?: TableReference | undefined;
	readonly dclTargetView?: TableReference | undefined;
	readonly ddlAffectedRowAccessPolicyCount?: string | undefined;
	readonly ddlOperationPerformed?: string | undefined;
	readonly ddlTargetDataset?: DatasetReference | undefined;
	readonly ddlTargetRoutine?: RoutineReference | undefined;
	readonly ddlTargetRowAccessPolicy?: RowAccessPolicyReference | undefined;
	readonly ddlTargetTable?: TableReference | undefined;
	readonly dmlStats?: DmlStats | undefined;
	readonly estimatedBytesProcessed?: string | undefined;
	readonly exportDataStatistics?: ExportDataStatistics | undefined;
	readonly externalServiceCosts?: ExternalServiceCost[] | undefined;
	readonly loadQueryStatistics?: LoadQueryStatistics | undefined;
	readonly mlStatistics?: MlStatistics | undefined;
	readonly numDmlAffectedRows?: string | undefined;
	readonly performanceInsights?: PerformanceInsights | undefined;
	readonly queryPlan?: ExplainQueryStage[] | undefined;
	readonly referencedRoutines?: RoutineReference[] | undefined;
	readonly referencedTables?: TableReference[] | undefined;
	readonly reservationUsage?: Array<{ name?: string; slotMs?: string }> | undefined;
	readonly schema?: TableSchema | undefined;
	readonly searchStatistics?: SearchStatistics | undefined;
	readonly sparkStatistics?: SparkStatistics | undefined;
	readonly statementType?: string | undefined;
	readonly timeline?: QueryTimelineSample[] | undefined;
	readonly totalBytesBilled?: string | undefined;
	readonly totalBytesProcessed?: string | undefined;
	readonly totalBytesProcessedAccuracy?: string | undefined;
	readonly totalPartitionsProcessed?: string | undefined;
	readonly totalSlotMs?: string | undefined;
	readonly transferredBytes?: string | undefined;
	readonly undeclaredQueryParameters?: QueryParameter[] | undefined;
}
export interface JobStatistics3 {
	readonly badRecords?: string | undefined;
	readonly inputFileBytes?: string | undefined;
	readonly inputFiles?: string | undefined;
	readonly outputBytes?: string | undefined;
	readonly outputRows?: string | undefined;
	readonly timeline?: QueryTimelineSample[] | undefined;
}
export interface JobStatistics4 {
	readonly destinationUriFileCounts?: string[] | undefined;
	readonly inputBytes?: string | undefined;
	readonly timeline?: QueryTimelineSample[] | undefined;
}
export interface JobStatus {
	readonly errorResult?: ErrorProto | undefined;
	readonly errors?: ErrorProto[] | undefined;
	readonly state?: string | undefined;
}
export interface LoadQueryStatistics {
	readonly badRecords?: string | undefined;
	readonly bytesTransferred?: string | undefined;
	readonly inputFileBytes?: string | undefined;
	readonly inputFiles?: string | undefined;
	readonly outputBytes?: string | undefined;
	readonly outputRows?: string | undefined;
}
export interface LoggingInfo {
	readonly projectId?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface MlStatistics {
	readonly hparamTrials?: HparamTuningTrial[] | undefined;
	readonly iterationResults?: IterationResult[] | undefined;
	readonly maxIterations?: string | undefined;
	readonly modelType?: string | undefined;
	readonly trainingType?: string | undefined;
}
export interface ModelExtractOptions {
	readonly trialId?: string | undefined;
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
export interface ParquetOptions {
	readonly enableListInference?: boolean | undefined;
	readonly enumAsString?: boolean | undefined;
}
export interface PerformanceInsights {
	readonly avgPreviousExecutionMs?: string | undefined;
	readonly stagePerformanceChangeInsights?: StagePerformanceChangeInsight[] | undefined;
	readonly stagePerformanceStandaloneInsights?: StagePerformanceStandaloneInsight[] | undefined;
}
export interface PrincipalComponentInfo {
	readonly cumulativeExplainedVarianceRatio?: number | undefined;
	readonly explainedVariance?: number | undefined;
	readonly explainedVarianceRatio?: number | undefined;
	readonly principalComponentId?: string | undefined;
}
export interface QueryParameter {
	readonly name?: string | undefined;
	readonly parameterType: QueryParameterType;
	readonly parameterValue: QueryParameterValue;
}
export interface QueryParameterType {
	readonly arrayType?: QueryParameterType | undefined;
	readonly structTypes?: Array<{ description?: string; name?: string; type?: QueryParameterType }> | undefined;
	readonly type: string;
}
export interface QueryParameterValue {
	readonly arrayValues?: QueryParameterValue[] | undefined;
	readonly structValues?: { [P in string]: QueryParameterValue } | undefined;
	readonly value?: string | undefined;
}
export interface QueryTimelineSample {
	readonly activeUnits?: string | undefined;
	readonly completedUnits?: string | undefined;
	readonly elapsedMs?: string | undefined;
	readonly estimatedRunnableUnits?: string | undefined;
	readonly pendingUnits?: string | undefined;
	readonly totalSlotMs?: string | undefined;
}
export interface RangePartitioning {
	readonly field: string;
	readonly range?: { end?: string; interval?: string; start?: string } | undefined;
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
export interface RoutineReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly routineId: string;
}
export interface Row {
	readonly actualLabel?: string | undefined;
	readonly entries?: Entry[] | undefined;
}
export interface RowAccessPolicyReference {
	readonly datasetId: string;
	readonly policyId: string;
	readonly projectId: string;
	readonly tableId: string;
}
export interface RowLevelSecurityStatistics {
	readonly rowLevelSecurityApplied?: boolean | undefined;
}
export interface ScriptOptions {
	readonly keyResultStatement?: string | undefined;
	readonly statementByteBudget?: string | undefined;
	readonly statementTimeoutMs?: string | undefined;
}
export interface ScriptStackFrame {
	readonly endColumn?: number | undefined;
	readonly endLine?: number | undefined;
	readonly procedureId?: string | undefined;
	readonly startColumn?: number | undefined;
	readonly startLine?: number | undefined;
	readonly text?: string | undefined;
}
export interface ScriptStatistics {
	readonly evaluationKind?: string | undefined;
	readonly stackFrames?: ScriptStackFrame[] | undefined;
}
export interface SearchStatistics {
	readonly indexUnusedReasons?: IndexUnusedReason[] | undefined;
	readonly indexUsageMode?: string | undefined;
}
export interface SessionInfo {
	readonly sessionId?: string | undefined;
}
export interface SparkStatistics {
	readonly endpoints?: { [P in string]: string } | undefined;
	readonly loggingInfo?: LoggingInfo | undefined;
	readonly sparkJobId?: string | undefined;
	readonly sparkJobLocation?: string | undefined;
}
export interface StagePerformanceChangeInsight {
	readonly inputDataChange?: InputDataChange | undefined;
	readonly stageId?: string | undefined;
}
export interface StagePerformanceStandaloneInsight {
	readonly insufficientShuffleQuota?: boolean | undefined;
	readonly slotContention?: boolean | undefined;
	readonly stageId?: string | undefined;
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
export interface SystemVariables {
	readonly types?: { [P in string]: StandardSqlDataType } | undefined;
	readonly values?: { [P in string]: any } | undefined;
}
export interface TableFieldSchema {
	readonly collation?: string | undefined;
	readonly defaultValueExpression?: string | undefined;
	readonly description?: string | undefined;
	readonly fields?: TableFieldSchema[] | undefined;
	readonly maxLength?: string | undefined;
	readonly mode?: string | undefined;
	readonly name: string;
	readonly policyTags?: { names?: string[] } | undefined;
	readonly precision?: string | undefined;
	readonly rangeElementType?: FieldElementType | undefined;
	readonly roundingMode?: string | undefined;
	readonly scale?: string | undefined;
	readonly type: string;
}
export interface TableReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly tableId: string;
}
export interface TableSchema {
	readonly fields?: TableFieldSchema[] | undefined;
}
export interface ThriftOptions {
	readonly boundaryBytes?: string | undefined;
	readonly deserializationOption?: string | undefined;
	readonly framingOption?: string | undefined;
	readonly schemaIdlRootDir: string;
	readonly schemaIdlUri: string;
	readonly schemaStruct: string;
}
export interface TimePartitioning {
	readonly expirationMs?: string | undefined;
	readonly field?: string | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly type: string;
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
export interface TransactionInfo {
	readonly transactionId?: string | undefined;
}
export interface UserDefinedFunctionResource {
	readonly inlineCode?: string | undefined;
	readonly resourceUri?: string | undefined;
}
export default {
	Jobs: Jobs,
};
