import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Table extends GdmResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.name, "bigquery.v2.table", options);
	}
}
export interface TableComponentOutputs {}
export interface TableComponentInputs {
	readonly cloneDefinition?: CloneDefinition;
	readonly clustering?: Clustering;
	readonly creationTime?: string;
	readonly defaultCollation?: string;
	readonly description?: string;
	readonly encryptionConfiguration?: EncryptionConfiguration;
	readonly etag?: string;
	readonly expirationTime?: string;
	readonly externalDataConfiguration?: ExternalDataConfiguration;
	readonly friendlyName?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly lastModifiedTime?: string;
	readonly location?: string;
	readonly materializedView?: MaterializedViewDefinition;
	readonly maxStaleness?: string;
	readonly model?: ModelDefinition;
	readonly num_active_logical_bytes?: string;
	readonly num_active_physical_bytes?: string;
	readonly num_long_term_logical_bytes?: string;
	readonly num_long_term_physical_bytes?: string;
	readonly num_partitions?: string;
	readonly num_time_travel_physical_bytes?: string;
	readonly num_total_logical_bytes?: string;
	readonly num_total_physical_bytes?: string;
	readonly numBytes?: string;
	readonly numLongTermBytes?: string;
	readonly numPhysicalBytes?: string;
	readonly numRows?: string;
	readonly rangePartitioning?: RangePartitioning;
	readonly requirePartitionFilter?: boolean;
	readonly schema?: TableSchema;
	readonly selfLink?: string;
	readonly snapshotDefinition?: SnapshotDefinition;
	readonly streamingBuffer?: Streamingbuffer;
	readonly tableReference?: TableReference;
	readonly timePartitioning?: TimePartitioning;
	readonly view?: ViewDefinition;
	readonly name: string;
}
export interface AvroOptions {
	readonly useAvroLogicalTypes?: boolean;
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
export interface BqmlIterationResult {
	readonly durationMs?: string;
	readonly evalLoss?: number;
	readonly index?: number;
	readonly learnRate?: number;
	readonly trainingLoss?: number;
}
export interface BqmlTrainingRun {
	readonly iterationResults?: BqmlIterationResult[];
	readonly startTime?: string;
	readonly state?: string;
	readonly trainingOptions?: {
		earlyStop?: boolean;
		l1Reg?: number;
		l2Reg?: number;
		learnRate?: number;
		learnRateStrategy?: string;
		lineSearchInitLearnRate?: number;
		maxIteration?: string;
		minRelProgress?: number;
		warmStart?: boolean;
	};
}
export interface CloneDefinition {
	readonly baseTableReference?: TableReference;
	readonly cloneTime?: string;
}
export interface Clustering {
	readonly fields?: string[];
}
export interface CsvOptions {
	readonly allowJaggedRows?: boolean;
	readonly allowQuotedNewlines?: boolean;
	readonly encoding?: string;
	readonly fieldDelimiter?: string;
	readonly null_marker?: string;
	readonly preserveAsciiControlCharacters?: boolean;
	readonly quote?: string;
	readonly skipLeadingRows?: string;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string;
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
	readonly maxBadRecords?: number;
	readonly metadataCacheMode?: string;
	readonly objectMetadata?: string;
	readonly parquetOptions?: ParquetOptions;
	readonly referenceFileSchemaUri?: string;
	readonly schema?: TableSchema;
	readonly sourceFormat?: string;
	readonly sourceUris?: string[];
}
export interface GoogleSheetsOptions {
	readonly range?: string;
	readonly skipLeadingRows?: string;
}
export interface HivePartitioningOptions {
	readonly mode?: string;
	readonly requirePartitionFilter?: boolean;
	readonly sourceUriPrefix?: string;
}
export interface MaterializedViewDefinition {
	readonly allow_non_incremental_definition?: boolean;
	readonly enableRefresh?: boolean;
	readonly lastRefreshTime?: string;
	readonly maxStaleness?: string;
	readonly query?: string;
	readonly refreshIntervalMs?: string;
}
export interface ModelDefinition {
	readonly modelOptions?: { labels?: string[]; lossType?: string; modelType?: string };
	readonly trainingRuns?: BqmlTrainingRun[];
}
export interface ParquetOptions {
	readonly enableListInference?: boolean;
	readonly enumAsString?: boolean;
}
export interface RangePartitioning {
	readonly field?: string;
	readonly range?: { end?: string; interval?: string; start?: string };
}
export interface SnapshotDefinition {
	readonly baseTableReference?: TableReference;
	readonly snapshotTime?: string;
}
export interface Streamingbuffer {
	readonly estimatedBytes?: string;
	readonly estimatedRows?: string;
	readonly oldestEntryTime?: string;
}
export interface TableFieldSchema {
	readonly categories?: { names?: string[] };
	readonly collation?: string;
	readonly defaultValueExpression?: string;
	readonly description?: string;
	readonly fields?: TableFieldSchema[];
	readonly maxLength?: string;
	readonly mode?: string;
	readonly name?: string;
	readonly policyTags?: { names?: string[] };
	readonly precision?: string;
	readonly scale?: string;
	readonly type?: string;
}
export interface TableReference {
	readonly datasetId?: string;
	readonly projectId?: string;
	readonly tableId?: string;
}
export interface TableSchema {
	readonly fields?: TableFieldSchema[];
}
export interface TimePartitioning {
	readonly expirationMs?: string;
	readonly field?: string;
	readonly requirePartitionFilter?: boolean;
	readonly type?: string;
}
export interface UserDefinedFunctionResource {
	readonly inlineCode?: string;
	readonly resourceUri?: string;
}
export interface ViewDefinition {
	readonly query?: string;
	readonly useExplicitColumnNames?: boolean;
	readonly useLegacySql?: boolean;
	readonly userDefinedFunctionResources?: UserDefinedFunctionResource[];
}
export default {
	Table: Table,
};
