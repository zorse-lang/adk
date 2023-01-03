import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Table extends GdmResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.name, "bigquery.v2.table", options);
	}
}
export interface TableComponentOutputs {}
export interface TableComponentInputs {
	readonly cloneDefinition?: CloneDefinition | undefined;
	readonly clustering?: Clustering | undefined;
	readonly creationTime?: string | undefined;
	readonly defaultCollation?: string | undefined;
	readonly description?: string | undefined;
	readonly encryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly etag?: string | undefined;
	readonly expirationTime?: string | undefined;
	readonly externalDataConfiguration?: ExternalDataConfiguration | undefined;
	readonly friendlyName?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly location?: string | undefined;
	readonly materializedView?: MaterializedViewDefinition | undefined;
	readonly maxStaleness?: string | undefined;
	readonly model?: ModelDefinition | undefined;
	readonly num_active_logical_bytes?: string | undefined;
	readonly num_active_physical_bytes?: string | undefined;
	readonly num_long_term_logical_bytes?: string | undefined;
	readonly num_long_term_physical_bytes?: string | undefined;
	readonly num_partitions?: string | undefined;
	readonly num_time_travel_physical_bytes?: string | undefined;
	readonly num_total_logical_bytes?: string | undefined;
	readonly num_total_physical_bytes?: string | undefined;
	readonly numBytes?: string | undefined;
	readonly numLongTermBytes?: string | undefined;
	readonly numPhysicalBytes?: string | undefined;
	readonly numRows?: string | undefined;
	readonly rangePartitioning?: RangePartitioning | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly schema?: TableSchema | undefined;
	readonly selfLink?: string | undefined;
	readonly snapshotDefinition?: SnapshotDefinition | undefined;
	readonly streamingBuffer?: Streamingbuffer | undefined;
	readonly tableReference?: TableReference | undefined;
	readonly timePartitioning?: TimePartitioning | undefined;
	readonly type: string;
	readonly view?: ViewDefinition | undefined;
	readonly name: string;
}
export interface AvroOptions {
	readonly useAvroLogicalTypes?: boolean | undefined;
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
export interface BqmlIterationResult {
	readonly durationMs?: string | undefined;
	readonly evalLoss?: number | undefined;
	readonly index?: number | undefined;
	readonly learnRate?: number | undefined;
	readonly trainingLoss?: number | undefined;
}
export interface BqmlTrainingRun {
	readonly iterationResults?: BqmlIterationResult[] | undefined;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
	readonly trainingOptions?:
		| {
				earlyStop?: boolean;
				l1Reg?: number;
				l2Reg?: number;
				learnRate?: number;
				learnRateStrategy?: string;
				lineSearchInitLearnRate?: number;
				maxIteration?: string;
				minRelProgress?: number;
				warmStart?: boolean;
		  }
		| undefined;
}
export interface CloneDefinition {
	readonly baseTableReference?: TableReference | undefined;
	readonly cloneTime?: string | undefined;
}
export interface Clustering {
	readonly fields?: string[] | undefined;
}
export interface CsvOptions {
	readonly allowJaggedRows?: boolean | undefined;
	readonly allowQuotedNewlines?: boolean | undefined;
	readonly encoding?: string | undefined;
	readonly fieldDelimiter?: string | undefined;
	readonly null_marker?: string | undefined;
	readonly preserveAsciiControlCharacters?: boolean | undefined;
	readonly quote?: string | undefined;
	readonly skipLeadingRows?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string | undefined;
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
	readonly maxBadRecords?: number | undefined;
	readonly metadataCacheMode?: string | undefined;
	readonly objectMetadata?: string | undefined;
	readonly parquetOptions?: ParquetOptions | undefined;
	readonly referenceFileSchemaUri?: string | undefined;
	readonly schema?: TableSchema | undefined;
	readonly sourceFormat?: string | undefined;
	readonly sourceUris?: string[] | undefined;
}
export interface GoogleSheetsOptions {
	readonly range?: string | undefined;
	readonly skipLeadingRows?: string | undefined;
}
export interface HivePartitioningOptions {
	readonly mode?: string | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly sourceUriPrefix?: string | undefined;
}
export interface MaterializedViewDefinition {
	readonly allow_non_incremental_definition?: boolean | undefined;
	readonly enableRefresh?: boolean | undefined;
	readonly lastRefreshTime?: string | undefined;
	readonly maxStaleness?: string | undefined;
	readonly query?: string | undefined;
	readonly refreshIntervalMs?: string | undefined;
}
export interface ModelDefinition {
	readonly modelOptions?: { labels?: string[]; lossType?: string; modelType?: string } | undefined;
	readonly trainingRuns?: BqmlTrainingRun[] | undefined;
}
export interface ParquetOptions {
	readonly enableListInference?: boolean | undefined;
	readonly enumAsString?: boolean | undefined;
}
export interface RangePartitioning {
	readonly field?: string | undefined;
	readonly range?: { end?: string; interval?: string; start?: string } | undefined;
}
export interface SnapshotDefinition {
	readonly baseTableReference?: TableReference | undefined;
	readonly snapshotTime?: string | undefined;
}
export interface Streamingbuffer {
	readonly estimatedBytes?: string | undefined;
	readonly estimatedRows?: string | undefined;
	readonly oldestEntryTime?: string | undefined;
}
export interface TableFieldSchema {
	readonly categories?: { names?: string[] } | undefined;
	readonly collation?: string | undefined;
	readonly defaultValueExpression?: string | undefined;
	readonly description?: string | undefined;
	readonly fields?: TableFieldSchema[] | undefined;
	readonly maxLength?: string | undefined;
	readonly mode?: string | undefined;
	readonly name?: string | undefined;
	readonly policyTags?: { names?: string[] } | undefined;
	readonly precision?: string | undefined;
	readonly scale?: string | undefined;
	readonly type?: string | undefined;
}
export interface TableReference {
	readonly datasetId?: string | undefined;
	readonly projectId?: string | undefined;
	readonly tableId?: string | undefined;
}
export interface TableSchema {
	readonly fields?: TableFieldSchema[] | undefined;
}
export interface TimePartitioning {
	readonly expirationMs?: string | undefined;
	readonly field?: string | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly type?: string | undefined;
}
export interface UserDefinedFunctionResource {
	readonly inlineCode?: string | undefined;
	readonly resourceUri?: string | undefined;
}
export interface ViewDefinition {
	readonly query?: string | undefined;
	readonly useExplicitColumnNames?: boolean | undefined;
	readonly useLegacySql?: boolean | undefined;
	readonly userDefinedFunctionResources?: UserDefinedFunctionResource[] | undefined;
}
export default {
	Table: Table,
};
