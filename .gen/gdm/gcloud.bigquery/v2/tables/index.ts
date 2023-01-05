import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Tables extends GdmResource<TablesComponentInputs> implements TablesComponentOutputs {
	constructor(entity: ADKEntity, options: TablesComponentInputs) {
		super(entity, options.name, "bigquery.v2.Tables", options);
	}
	public readonly cloneDefinition?: CloneDefinition;
	public readonly creationTime?: string;
	public readonly etag?: string;
	public readonly id?: string;
	public readonly lastModifiedTime?: string;
	public readonly location?: string;
	public readonly materializedViewStatus?: MaterializedViewStatus;
	public readonly numActiveLogicalBytes?: string;
	public readonly numActivePhysicalBytes?: string;
	public readonly numBytes?: string;
	public readonly numLongTermBytes?: string;
	public readonly numLongTermLogicalBytes?: string;
	public readonly numLongTermPhysicalBytes?: string;
	public readonly numPartitions?: string;
	public readonly numPhysicalBytes?: string;
	public readonly numRows?: string;
	public readonly numTimeTravelPhysicalBytes?: string;
	public readonly numTotalLogicalBytes?: string;
	public readonly numTotalPhysicalBytes?: string;
	public readonly selfLink?: string;
	public readonly snapshotDefinition?: SnapshotDefinition;
	public readonly streamingBuffer?: Streamingbuffer;
}
export interface TablesComponentOutputs {
	readonly cloneDefinition?: CloneDefinition;
	readonly creationTime?: string;
	readonly etag?: string;
	readonly id?: string;
	readonly lastModifiedTime?: string;
	readonly location?: string;
	readonly materializedViewStatus?: MaterializedViewStatus;
	readonly numActiveLogicalBytes?: string;
	readonly numActivePhysicalBytes?: string;
	readonly numBytes?: string;
	readonly numLongTermBytes?: string;
	readonly numLongTermLogicalBytes?: string;
	readonly numLongTermPhysicalBytes?: string;
	readonly numPartitions?: string;
	readonly numPhysicalBytes?: string;
	readonly numRows?: string;
	readonly numTimeTravelPhysicalBytes?: string;
	readonly numTotalLogicalBytes?: string;
	readonly numTotalPhysicalBytes?: string;
	readonly selfLink?: string;
	readonly snapshotDefinition?: SnapshotDefinition;
	readonly streamingBuffer?: Streamingbuffer;
}
export interface TablesComponentInputs {
	readonly clustering?: Clustering;
	readonly datasetId: string;
	readonly defaultCollation?: string;
	readonly description?: string;
	readonly encryptionConfiguration?: EncryptionConfiguration;
	readonly expirationTime?: string;
	readonly externalDataConfiguration?: ExternalDataConfiguration;
	readonly friendlyName?: string;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly materializedView?: MaterializedViewDefinition;
	readonly maxStaleness?: string;
	readonly rangePartitioning?: RangePartitioning;
	readonly requirePartitionFilter?: boolean;
	readonly schema?: TableSchema;
	readonly tableMetadataView?: string;
	readonly tableReference: TableReference;
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
export interface CloneDefinition {
	readonly baseTableReference: TableReference;
	readonly cloneTime: string;
}
export interface Clustering {
	readonly fields?: string[];
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
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string;
}
export interface ErrorProto {
	readonly debugInfo?: string;
	readonly location?: string;
	readonly message?: string;
	readonly reason?: string;
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
export interface MaterializedViewDefinition {
	readonly enableRefresh?: boolean;
	readonly lastRefreshTime?: string;
	readonly query: string;
	readonly refreshIntervalMs?: string;
}
export interface MaterializedViewStatus {
	readonly lastRefreshStatus?: ErrorProto;
	readonly refreshWatermark?: string;
}
export interface ParquetOptions {
	readonly enableListInference?: boolean;
	readonly enumAsString?: boolean;
}
export interface RangePartitioning {
	readonly field: string;
	readonly range?: { end?: string; interval?: string; start?: string };
}
export interface SnapshotDefinition {
	readonly baseTableReference: TableReference;
	readonly snapshotTime: string;
}
export interface Streamingbuffer {
	readonly estimatedBytes?: string;
	readonly estimatedRows?: string;
	readonly oldestEntryTime?: string;
}
export interface Table {
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
	readonly materializedViewStatus?: MaterializedViewStatus;
	readonly maxStaleness?: string;
	readonly numActiveLogicalBytes?: string;
	readonly numActivePhysicalBytes?: string;
	readonly numBytes?: string;
	readonly numLongTermBytes?: string;
	readonly numLongTermLogicalBytes?: string;
	readonly numLongTermPhysicalBytes?: string;
	readonly numPartitions?: string;
	readonly numPhysicalBytes?: string;
	readonly numRows?: string;
	readonly numTimeTravelPhysicalBytes?: string;
	readonly numTotalLogicalBytes?: string;
	readonly numTotalPhysicalBytes?: string;
	readonly rangePartitioning?: RangePartitioning;
	readonly requirePartitionFilter?: boolean;
	readonly schema?: TableSchema;
	readonly selfLink?: string;
	readonly snapshotDefinition?: SnapshotDefinition;
	readonly streamingBuffer?: Streamingbuffer;
	readonly tableReference: TableReference;
	readonly timePartitioning?: TimePartitioning;
	readonly type?: string;
	readonly view?: ViewDefinition;
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
export interface TimePartitioning {
	readonly expirationMs?: string;
	readonly field?: string;
	readonly requirePartitionFilter?: boolean;
	readonly type: string;
}
export interface UserDefinedFunctionResource {
	readonly inlineCode?: string;
	readonly resourceUri?: string;
}
export interface ViewDefinition {
	readonly query: string;
	readonly useExplicitColumnNames?: boolean;
	readonly useLegacySql?: boolean;
	readonly userDefinedFunctionResources?: UserDefinedFunctionResource[];
}
export default {
	Tables: Tables,
};
