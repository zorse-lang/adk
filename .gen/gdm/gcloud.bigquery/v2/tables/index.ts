import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Tables extends GdmResource<TablesComponentInputs> implements TablesComponentOutputs {
	constructor(entity: ADKEntity, options: TablesComponentInputs) {
		super(entity, options.name, "bigquery.v2.Tables", options);
	}
	public readonly cloneDefinition?: CloneDefinition | undefined;
	public readonly creationTime?: string | undefined;
	public readonly etag?: string | undefined;
	public readonly id?: string | undefined;
	public readonly lastModifiedTime?: string | undefined;
	public readonly location?: string | undefined;
	public readonly materializedViewStatus?: MaterializedViewStatus | undefined;
	public readonly numActiveLogicalBytes?: string | undefined;
	public readonly numActivePhysicalBytes?: string | undefined;
	public readonly numBytes?: string | undefined;
	public readonly numLongTermBytes?: string | undefined;
	public readonly numLongTermLogicalBytes?: string | undefined;
	public readonly numLongTermPhysicalBytes?: string | undefined;
	public readonly numPartitions?: string | undefined;
	public readonly numPhysicalBytes?: string | undefined;
	public readonly numRows?: string | undefined;
	public readonly numTimeTravelPhysicalBytes?: string | undefined;
	public readonly numTotalLogicalBytes?: string | undefined;
	public readonly numTotalPhysicalBytes?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly snapshotDefinition?: SnapshotDefinition | undefined;
	public readonly streamingBuffer?: Streamingbuffer | undefined;
}
export interface TablesComponentOutputs {
	readonly cloneDefinition?: CloneDefinition | undefined;
	readonly creationTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly location?: string | undefined;
	readonly materializedViewStatus?: MaterializedViewStatus | undefined;
	readonly numActiveLogicalBytes?: string | undefined;
	readonly numActivePhysicalBytes?: string | undefined;
	readonly numBytes?: string | undefined;
	readonly numLongTermBytes?: string | undefined;
	readonly numLongTermLogicalBytes?: string | undefined;
	readonly numLongTermPhysicalBytes?: string | undefined;
	readonly numPartitions?: string | undefined;
	readonly numPhysicalBytes?: string | undefined;
	readonly numRows?: string | undefined;
	readonly numTimeTravelPhysicalBytes?: string | undefined;
	readonly numTotalLogicalBytes?: string | undefined;
	readonly numTotalPhysicalBytes?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly snapshotDefinition?: SnapshotDefinition | undefined;
	readonly streamingBuffer?: Streamingbuffer | undefined;
}
export interface TablesComponentInputs {
	readonly clustering?: Clustering | undefined;
	readonly datasetId: string;
	readonly defaultCollation?: string | undefined;
	readonly description?: string | undefined;
	readonly encryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly expirationTime?: string | undefined;
	readonly externalDataConfiguration?: ExternalDataConfiguration | undefined;
	readonly friendlyName?: string | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly materializedView?: MaterializedViewDefinition | undefined;
	readonly maxStaleness?: string | undefined;
	readonly rangePartitioning?: RangePartitioning | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly schema?: TableSchema | undefined;
	readonly tableMetadataView?: string | undefined;
	readonly tableReference: TableReference;
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
export interface CloneDefinition {
	readonly baseTableReference: TableReference;
	readonly cloneTime: string;
}
export interface Clustering {
	readonly fields?: string[] | undefined;
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
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string | undefined;
}
export interface ErrorProto {
	readonly debugInfo?: string | undefined;
	readonly location?: string | undefined;
	readonly message?: string | undefined;
	readonly reason?: string | undefined;
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
export interface MaterializedViewDefinition {
	readonly enableRefresh?: boolean | undefined;
	readonly lastRefreshTime?: string | undefined;
	readonly query: string;
	readonly refreshIntervalMs?: string | undefined;
}
export interface MaterializedViewStatus {
	readonly lastRefreshStatus?: ErrorProto | undefined;
	readonly refreshWatermark?: string | undefined;
}
export interface ParquetOptions {
	readonly enableListInference?: boolean | undefined;
	readonly enumAsString?: boolean | undefined;
}
export interface RangePartitioning {
	readonly field: string;
	readonly range?: { end?: string; interval?: string; start?: string } | undefined;
}
export interface SnapshotDefinition {
	readonly baseTableReference: TableReference;
	readonly snapshotTime: string;
}
export interface Streamingbuffer {
	readonly estimatedBytes?: string | undefined;
	readonly estimatedRows?: string | undefined;
	readonly oldestEntryTime?: string | undefined;
}
export interface Table {
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
	readonly materializedViewStatus?: MaterializedViewStatus | undefined;
	readonly maxStaleness?: string | undefined;
	readonly numActiveLogicalBytes?: string | undefined;
	readonly numActivePhysicalBytes?: string | undefined;
	readonly numBytes?: string | undefined;
	readonly numLongTermBytes?: string | undefined;
	readonly numLongTermLogicalBytes?: string | undefined;
	readonly numLongTermPhysicalBytes?: string | undefined;
	readonly numPartitions?: string | undefined;
	readonly numPhysicalBytes?: string | undefined;
	readonly numRows?: string | undefined;
	readonly numTimeTravelPhysicalBytes?: string | undefined;
	readonly numTotalLogicalBytes?: string | undefined;
	readonly numTotalPhysicalBytes?: string | undefined;
	readonly rangePartitioning?: RangePartitioning | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly schema?: TableSchema | undefined;
	readonly selfLink?: string | undefined;
	readonly snapshotDefinition?: SnapshotDefinition | undefined;
	readonly streamingBuffer?: Streamingbuffer | undefined;
	readonly tableReference: TableReference;
	readonly timePartitioning?: TimePartitioning | undefined;
	readonly type?: string | undefined;
	readonly view?: ViewDefinition | undefined;
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
export interface TimePartitioning {
	readonly expirationMs?: string | undefined;
	readonly field?: string | undefined;
	readonly requirePartitionFilter?: boolean | undefined;
	readonly type: string;
}
export interface UserDefinedFunctionResource {
	readonly inlineCode?: string | undefined;
	readonly resourceUri?: string | undefined;
}
export interface ViewDefinition {
	readonly query: string;
	readonly useExplicitColumnNames?: boolean | undefined;
	readonly useLegacySql?: boolean | undefined;
	readonly userDefinedFunctionResources?: UserDefinedFunctionResource[] | undefined;
}
export default {
	Tables: Tables,
};
