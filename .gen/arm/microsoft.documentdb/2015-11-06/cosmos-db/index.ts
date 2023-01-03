import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class databaseAccounts
	extends ArmResource<databaseAccountsComponentInputs>
	implements databaseAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts";
}
export interface databaseAccountsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts";
}
export interface databaseAccountsComponentInputs {
	readonly kind?: ("GlobalDocumentDB" | "MongoDB" | "Parse") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases
	extends ArmResource<databaseAccounts_apis_databasesComponentInputs>
	implements databaseAccounts_apis_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/databases", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases";
}
export interface databaseAccounts_apis_databasesComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases";
}
export interface databaseAccounts_apis_databasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases_collections
	extends ArmResource<databaseAccounts_apis_databases_collectionsComponentInputs>
	implements databaseAccounts_apis_databases_collectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databases_collectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/apis/databases/collections",
			"2015-11-06",
			options,
		);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections";
}
export interface databaseAccounts_apis_databases_collectionsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections";
}
export interface databaseAccounts_apis_databases_collectionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases_collections_settings
	extends ArmResource<databaseAccounts_apis_databases_collections_settingsComponentInputs>
	implements databaseAccounts_apis_databases_collections_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databases_collections_settingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings",
			"2015-11-06",
			options,
		);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings";
}
export interface databaseAccounts_apis_databases_collections_settingsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings";
}
export interface databaseAccounts_apis_databases_collections_settingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases_containers
	extends ArmResource<databaseAccounts_apis_databases_containersComponentInputs>
	implements databaseAccounts_apis_databases_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databases_containersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/apis/databases/containers",
			"2015-11-06",
			options,
		);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers";
}
export interface databaseAccounts_apis_databases_containersComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers";
}
export interface databaseAccounts_apis_databases_containersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SqlContainerCreateUpdatePropertiesOrSqlContainerProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases_containers_settings
	extends ArmResource<databaseAccounts_apis_databases_containers_settingsComponentInputs>
	implements databaseAccounts_apis_databases_containers_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databases_containers_settingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings",
			"2015-11-06",
			options,
		);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings";
}
export interface databaseAccounts_apis_databases_containers_settingsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings";
}
export interface databaseAccounts_apis_databases_containers_settingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases_graphs
	extends ArmResource<databaseAccounts_apis_databases_graphsComponentInputs>
	implements databaseAccounts_apis_databases_graphsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databases_graphsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs";
}
export interface databaseAccounts_apis_databases_graphsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs";
}
export interface databaseAccounts_apis_databases_graphsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: GremlinGraphCreateUpdatePropertiesOrGremlinGraphProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases_graphs_settings
	extends ArmResource<databaseAccounts_apis_databases_graphs_settingsComponentInputs>
	implements databaseAccounts_apis_databases_graphs_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databases_graphs_settingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings",
			"2015-11-06",
			options,
		);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings";
}
export interface databaseAccounts_apis_databases_graphs_settingsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings";
}
export interface databaseAccounts_apis_databases_graphs_settingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_databases_settings
	extends ArmResource<databaseAccounts_apis_databases_settingsComponentInputs>
	implements databaseAccounts_apis_databases_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_databases_settingsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/databases/settings", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/settings";
}
export interface databaseAccounts_apis_databases_settingsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/databases/settings";
}
export interface databaseAccounts_apis_databases_settingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_keyspaces
	extends ArmResource<databaseAccounts_apis_keyspacesComponentInputs>
	implements databaseAccounts_apis_keyspacesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_keyspacesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces";
}
export interface databaseAccounts_apis_keyspacesComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces";
}
export interface databaseAccounts_apis_keyspacesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_keyspaces_settings
	extends ArmResource<databaseAccounts_apis_keyspaces_settingsComponentInputs>
	implements databaseAccounts_apis_keyspaces_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_keyspaces_settingsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings";
}
export interface databaseAccounts_apis_keyspaces_settingsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings";
}
export interface databaseAccounts_apis_keyspaces_settingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_keyspaces_tables
	extends ArmResource<databaseAccounts_apis_keyspaces_tablesComponentInputs>
	implements databaseAccounts_apis_keyspaces_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_keyspaces_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables";
}
export interface databaseAccounts_apis_keyspaces_tablesComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables";
}
export interface databaseAccounts_apis_keyspaces_tablesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: CassandraTableCreateUpdatePropertiesOrCassandraTableProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_keyspaces_tables_settings
	extends ArmResource<databaseAccounts_apis_keyspaces_tables_settingsComponentInputs>
	implements databaseAccounts_apis_keyspaces_tables_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_keyspaces_tables_settingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings",
			"2015-11-06",
			options,
		);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings";
}
export interface databaseAccounts_apis_keyspaces_tables_settingsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings";
}
export interface databaseAccounts_apis_keyspaces_tables_settingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_tables
	extends ArmResource<databaseAccounts_apis_tablesComponentInputs>
	implements databaseAccounts_apis_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/tables", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/tables";
}
export interface databaseAccounts_apis_tablesComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/tables";
}
export interface databaseAccounts_apis_tablesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: TableCreateUpdatePropertiesOrTableProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_apis_tables_settings
	extends ArmResource<databaseAccounts_apis_tables_settingsComponentInputs>
	implements databaseAccounts_apis_tables_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_apis_tables_settingsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/apis/tables/settings", "2015-11-06", options);
	}
	public readonly apiVersion: "2015-11-06";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/tables/settings";
}
export interface databaseAccounts_apis_tables_settingsComponentOutputs {
	readonly apiVersion: "2015-11-06";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/apis/tables/settings";
}
export interface databaseAccounts_apis_tables_settingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags | undefined;
}
export function listConnectionStrings(resource: databaseAccounts): DatabaseAccountListConnectionStringsResult {
	if (resource.apiVersion !== "2015-11-06") {
		throw new Error(`listConnectionStrings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DocumentDB/databaseAccounts") {
		throw new Error(`listConnectionStrings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: databaseAccounts): DatabaseAccountListKeysResult {
	if (resource.apiVersion !== "2015-11-06") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DocumentDB/databaseAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Capability {
	readonly name?: string | undefined;
}
export interface CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceProperties {
	readonly id?: string | undefined;
	readonly options: CreateUpdateOptions;
	readonly resource: CassandraKeyspaceResource;
}
export interface CassandraKeyspaceResource {
	readonly id: string;
}
export interface CassandraPartitionKey {
	readonly name?: string | undefined;
}
export interface CassandraSchema {
	readonly clusterKeys?: ClusterKey[] | undefined;
	readonly columns?: Column[] | undefined;
	readonly partitionKeys?: CassandraPartitionKey[] | undefined;
}
export interface CassandraTableCreateUpdatePropertiesOrCassandraTableProperties {
	readonly defaultTtl?: number | undefined;
	readonly id?: string | undefined;
	readonly options: CreateUpdateOptions;
	readonly resource: CassandraTableResource;
	readonly schema?: CassandraSchema | undefined;
}
export interface CassandraTableResource {
	readonly defaultTtl?: number | undefined;
	readonly id: string;
	readonly schema?: CassandraSchema | undefined;
}
export interface ClusterKey {
	readonly name?: string | undefined;
	readonly orderBy?: string | undefined;
}
export interface Column {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ConflictResolutionPolicy {
	readonly conflictResolutionPath?: string | undefined;
	readonly conflictResolutionProcedure?: string | undefined;
	readonly mode?: ("Custom" | "LastWriterWins") | undefined;
}
export interface ConsistencyPolicy {
	readonly defaultConsistencyLevel: "BoundedStaleness" | "ConsistentPrefix" | "Eventual" | "Session";
	readonly maxIntervalInSeconds?: number | undefined;
	readonly maxStalenessPrefix?: number | undefined;
}
export interface ContainerPartitionKey {
	readonly kind?: ("Hash" | "Range") | undefined;
	readonly paths?: string[] | undefined;
}
export interface CreateUpdateOptions {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DatabaseAccountConnectionString {
	readonly connectionString?: string | undefined;
	readonly description?: string | undefined;
}
export interface DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountProperties {
	readonly capabilities?: Capability[] | undefined;
	readonly connectorOffer?: "Small" | undefined;
	readonly consistencyPolicy?: ConsistencyPolicy | undefined;
	readonly databaseAccountOfferType: "Standard";
	readonly documentEndpoint?: string | undefined;
	readonly enableAutomaticFailover?: boolean | undefined;
	readonly enableCassandraConnector?: boolean | undefined;
	readonly enableMultipleWriteLocations?: boolean | undefined;
	readonly failoverPolicies?: FailoverPolicy[] | undefined;
	readonly ipRangeFilter?: string | undefined;
	readonly isVirtualNetworkFilterEnabled?: boolean | undefined;
	readonly locations: Location[];
	readonly provisioningState?: string | undefined;
	readonly readLocations?: Location[] | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
	readonly writeLocations?: Location[] | undefined;
}
export interface DatabaseAccountListConnectionStringsResult {
	readonly connectionStrings?: DatabaseAccountConnectionString[] | undefined;
}
export interface DatabaseAccountListKeysResult {
	readonly primaryMasterKey?: string | undefined;
	readonly primaryReadonlyMasterKey?: string | undefined;
	readonly secondaryMasterKey?: string | undefined;
	readonly secondaryReadonlyMasterKey?: string | undefined;
}
export interface ExcludedPath {
	readonly path?: string | undefined;
}
export interface FailoverPolicy {
	readonly failoverPriority?: number | undefined;
	readonly id?: string | undefined;
	readonly locationName?: string | undefined;
}
export interface GremlinGraphCreateUpdatePropertiesOrGremlinGraphProperties {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: any | undefined;
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy | undefined;
	readonly defaultTtl?: number | undefined;
	readonly id?: string | undefined;
	readonly indexingPolicy?: IndexingPolicy | undefined;
	readonly options: CreateUpdateOptions;
	readonly partitionKey?: ContainerPartitionKey | undefined;
	readonly resource: GremlinGraphResource;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy | undefined;
}
export interface GremlinGraphResource {
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy | undefined;
	readonly defaultTtl?: number | undefined;
	readonly id: string;
	readonly indexingPolicy?: IndexingPolicy | undefined;
	readonly partitionKey?: ContainerPartitionKey | undefined;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy | undefined;
}
export interface IncludedPath {
	readonly indexes?: Indexes[] | undefined;
	readonly path?: string | undefined;
}
export interface Indexes {
	readonly dataType?: ("LineString" | "MultiPolygon" | "Number" | "Point" | "Polygon" | "String") | undefined;
	readonly kind?: ("Hash" | "Range" | "Spatial") | undefined;
	readonly precision?: number | undefined;
}
export interface IndexingPolicy {
	readonly automatic?: boolean | undefined;
	readonly excludedPaths?: ExcludedPath[] | undefined;
	readonly includedPaths?: IncludedPath[] | undefined;
	readonly indexingMode?: ("Consistent" | "Lazy" | "None") | undefined;
}
export interface Location {
	readonly documentEndpoint?: string | undefined;
	readonly failoverPriority?: number | undefined;
	readonly id?: string | undefined;
	readonly isZoneRedundant?: boolean | undefined;
	readonly locationName?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionProperties {
	readonly id?: string | undefined;
	readonly indexes?: MongoIndex[] | undefined;
	readonly options: CreateUpdateOptions;
	readonly resource: MongoDBCollectionResource;
	readonly shardKey?: ShardKeys | undefined;
}
export interface MongoDBCollectionResource {
	readonly id: string;
	readonly indexes?: MongoIndex[] | undefined;
	readonly shardKey?: ShardKeys | undefined;
}
export interface MongoIndex {
	readonly key?: MongoIndexKeys | undefined;
	readonly options?: MongoIndexOptions | undefined;
}
export interface MongoIndexKeys {
	readonly keys?: string[] | undefined;
}
export interface MongoIndexOptions {
	readonly expireAfterSeconds?: number | undefined;
	readonly unique?: boolean | undefined;
}
export interface ShardKeys {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SqlContainerCreateUpdatePropertiesOrSqlContainerProperties {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: any | undefined;
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy | undefined;
	readonly defaultTtl?: number | undefined;
	readonly id?: string | undefined;
	readonly indexingPolicy?: IndexingPolicy | undefined;
	readonly options: CreateUpdateOptions;
	readonly partitionKey?: ContainerPartitionKey | undefined;
	readonly resource: SqlContainerResource;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy | undefined;
}
export interface SqlContainerResource {
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy | undefined;
	readonly defaultTtl?: number | undefined;
	readonly id: string;
	readonly indexingPolicy?: IndexingPolicy | undefined;
	readonly partitionKey?: ContainerPartitionKey | undefined;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy | undefined;
}
export interface SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProperties {
	readonly _colls?: string | undefined;
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: any | undefined;
	readonly _users?: string | undefined;
	readonly id?: string | undefined;
	readonly options: CreateUpdateOptions;
	readonly resource: SqlDatabaseResource;
}
export interface SqlDatabaseResource {
	readonly id: string;
}
export interface TableCreateUpdatePropertiesOrTableProperties {
	readonly id?: string | undefined;
	readonly options: CreateUpdateOptions;
	readonly resource: TableResource;
}
export interface TableResource {
	readonly id: string;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ThroughputResource {
	readonly throughput: number;
}
export interface ThroughputUpdatePropertiesOrThroughputProperties {
	readonly resource: ThroughputResource;
	readonly throughput?: number | undefined;
}
export interface UniqueKey {
	readonly paths?: string[] | undefined;
}
export interface UniqueKeyPolicy {
	readonly uniqueKeys?: UniqueKey[] | undefined;
}
export interface VirtualNetworkRule {
	readonly id?: string | undefined;
	readonly ignoreMissingVNetServiceEndpoint?: boolean | undefined;
}
export default {
	databaseAccounts: databaseAccounts,
	"databaseAccounts/apis/databases": databaseAccounts_apis_databases,
	"databaseAccounts/apis/databases/collections": databaseAccounts_apis_databases_collections,
	"databaseAccounts/apis/databases/collections/settings": databaseAccounts_apis_databases_collections_settings,
	"databaseAccounts/apis/databases/containers": databaseAccounts_apis_databases_containers,
	"databaseAccounts/apis/databases/containers/settings": databaseAccounts_apis_databases_containers_settings,
	"databaseAccounts/apis/databases/graphs": databaseAccounts_apis_databases_graphs,
	"databaseAccounts/apis/databases/graphs/settings": databaseAccounts_apis_databases_graphs_settings,
	"databaseAccounts/apis/databases/settings": databaseAccounts_apis_databases_settings,
	"databaseAccounts/apis/keyspaces": databaseAccounts_apis_keyspaces,
	"databaseAccounts/apis/keyspaces/settings": databaseAccounts_apis_keyspaces_settings,
	"databaseAccounts/apis/keyspaces/tables": databaseAccounts_apis_keyspaces_tables,
	"databaseAccounts/apis/keyspaces/tables/settings": databaseAccounts_apis_keyspaces_tables_settings,
	"databaseAccounts/apis/tables": databaseAccounts_apis_tables,
	"databaseAccounts/apis/tables/settings": databaseAccounts_apis_tables_settings,
};
