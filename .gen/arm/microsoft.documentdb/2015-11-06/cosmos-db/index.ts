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
	readonly kind?: "GlobalDocumentDB" | "MongoDB" | "Parse";
	readonly location?: string;
	readonly name: string;
	readonly properties: DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: SqlContainerCreateUpdatePropertiesOrSqlContainerProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: GremlinGraphCreateUpdatePropertiesOrGremlinGraphProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: CassandraTableCreateUpdatePropertiesOrCassandraTableProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: TableCreateUpdatePropertiesOrTableProperties;
	readonly tags?: Tags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: ThroughputUpdatePropertiesOrThroughputProperties;
	readonly tags?: Tags;
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
	readonly name?: string;
}
export interface CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceProperties {
	readonly id?: string;
	readonly options: CreateUpdateOptions;
	readonly resource: CassandraKeyspaceResource;
}
export interface CassandraKeyspaceResource {
	readonly id: string;
}
export interface CassandraPartitionKey {
	readonly name?: string;
}
export interface CassandraSchema {
	readonly clusterKeys?: ClusterKey[];
	readonly columns?: Column[];
	readonly partitionKeys?: CassandraPartitionKey[];
}
export interface CassandraTableCreateUpdatePropertiesOrCassandraTableProperties {
	readonly defaultTtl?: number;
	readonly id?: string;
	readonly options: CreateUpdateOptions;
	readonly resource: CassandraTableResource;
	readonly schema?: CassandraSchema;
}
export interface CassandraTableResource {
	readonly defaultTtl?: number;
	readonly id: string;
	readonly schema?: CassandraSchema;
}
export interface ClusterKey {
	readonly name?: string;
	readonly orderBy?: string;
}
export interface Column {
	readonly name?: string;
	readonly type?: string;
}
export interface ConflictResolutionPolicy {
	readonly conflictResolutionPath?: string;
	readonly conflictResolutionProcedure?: string;
	readonly mode?: "Custom" | "LastWriterWins";
}
export interface ConsistencyPolicy {
	readonly defaultConsistencyLevel: "BoundedStaleness" | "ConsistentPrefix" | "Eventual" | "Session";
	readonly maxIntervalInSeconds?: number;
	readonly maxStalenessPrefix?: number;
}
export interface ContainerPartitionKey {
	readonly kind?: "Hash" | "Range";
	readonly paths?: string[];
}
export interface CreateUpdateOptions {
	readonly [key: string]: string;
}
export interface DatabaseAccountConnectionString {
	readonly connectionString?: string;
	readonly description?: string;
}
export interface DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountProperties {
	readonly capabilities?: Capability[];
	readonly connectorOffer?: "Small";
	readonly consistencyPolicy?: ConsistencyPolicy;
	readonly databaseAccountOfferType: "Standard";
	readonly documentEndpoint?: string;
	readonly enableAutomaticFailover?: boolean;
	readonly enableCassandraConnector?: boolean;
	readonly enableMultipleWriteLocations?: boolean;
	readonly failoverPolicies?: FailoverPolicy[];
	readonly ipRangeFilter?: string;
	readonly isVirtualNetworkFilterEnabled?: boolean;
	readonly locations: Location[];
	readonly provisioningState?: string;
	readonly readLocations?: Location[];
	readonly virtualNetworkRules?: VirtualNetworkRule[];
	readonly writeLocations?: Location[];
}
export interface DatabaseAccountListConnectionStringsResult {
	readonly connectionStrings?: DatabaseAccountConnectionString[];
}
export interface DatabaseAccountListKeysResult {
	readonly primaryMasterKey?: string;
	readonly primaryReadonlyMasterKey?: string;
	readonly secondaryMasterKey?: string;
	readonly secondaryReadonlyMasterKey?: string;
}
export interface ExcludedPath {
	readonly path?: string;
}
export interface FailoverPolicy {
	readonly failoverPriority?: number;
	readonly id?: string;
	readonly locationName?: string;
}
export interface GremlinGraphCreateUpdatePropertiesOrGremlinGraphProperties {
	readonly _etag?: string;
	readonly _rid?: string;
	readonly _ts?: any;
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy;
	readonly defaultTtl?: number;
	readonly id?: string;
	readonly indexingPolicy?: IndexingPolicy;
	readonly options: CreateUpdateOptions;
	readonly partitionKey?: ContainerPartitionKey;
	readonly resource: GremlinGraphResource;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy;
}
export interface GremlinGraphResource {
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy;
	readonly defaultTtl?: number;
	readonly id: string;
	readonly indexingPolicy?: IndexingPolicy;
	readonly partitionKey?: ContainerPartitionKey;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy;
}
export interface IncludedPath {
	readonly indexes?: Indexes[];
	readonly path?: string;
}
export interface Indexes {
	readonly dataType?: "LineString" | "MultiPolygon" | "Number" | "Point" | "Polygon" | "String";
	readonly kind?: "Hash" | "Range" | "Spatial";
	readonly precision?: number;
}
export interface IndexingPolicy {
	readonly automatic?: boolean;
	readonly excludedPaths?: ExcludedPath[];
	readonly includedPaths?: IncludedPath[];
	readonly indexingMode?: "Consistent" | "Lazy" | "None";
}
export interface Location {
	readonly documentEndpoint?: string;
	readonly failoverPriority?: number;
	readonly id?: string;
	readonly isZoneRedundant?: boolean;
	readonly locationName?: string;
	readonly provisioningState?: string;
}
export interface MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionProperties {
	readonly id?: string;
	readonly indexes?: MongoIndex[];
	readonly options: CreateUpdateOptions;
	readonly resource: MongoDBCollectionResource;
	readonly shardKey?: ShardKeys;
}
export interface MongoDBCollectionResource {
	readonly id: string;
	readonly indexes?: MongoIndex[];
	readonly shardKey?: ShardKeys;
}
export interface MongoIndex {
	readonly key?: MongoIndexKeys;
	readonly options?: MongoIndexOptions;
}
export interface MongoIndexKeys {
	readonly keys?: string[];
}
export interface MongoIndexOptions {
	readonly expireAfterSeconds?: number;
	readonly unique?: boolean;
}
export interface ShardKeys {
	readonly [key: string]: string;
}
export interface SqlContainerCreateUpdatePropertiesOrSqlContainerProperties {
	readonly _etag?: string;
	readonly _rid?: string;
	readonly _ts?: any;
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy;
	readonly defaultTtl?: number;
	readonly id?: string;
	readonly indexingPolicy?: IndexingPolicy;
	readonly options: CreateUpdateOptions;
	readonly partitionKey?: ContainerPartitionKey;
	readonly resource: SqlContainerResource;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy;
}
export interface SqlContainerResource {
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy;
	readonly defaultTtl?: number;
	readonly id: string;
	readonly indexingPolicy?: IndexingPolicy;
	readonly partitionKey?: ContainerPartitionKey;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy;
}
export interface SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProperties {
	readonly _colls?: string;
	readonly _etag?: string;
	readonly _rid?: string;
	readonly _ts?: any;
	readonly _users?: string;
	readonly id?: string;
	readonly options: CreateUpdateOptions;
	readonly resource: SqlDatabaseResource;
}
export interface SqlDatabaseResource {
	readonly id: string;
}
export interface TableCreateUpdatePropertiesOrTableProperties {
	readonly id?: string;
	readonly options: CreateUpdateOptions;
	readonly resource: TableResource;
}
export interface TableResource {
	readonly id: string;
}
export interface Tags {
	readonly [key: string]: string;
}
export interface ThroughputResource {
	readonly throughput: number;
}
export interface ThroughputUpdatePropertiesOrThroughputProperties {
	readonly resource: ThroughputResource;
	readonly throughput?: number;
}
export interface UniqueKey {
	readonly paths?: string[];
}
export interface UniqueKeyPolicy {
	readonly uniqueKeys?: UniqueKey[];
}
export interface VirtualNetworkRule {
	readonly id?: string;
	readonly ignoreMissingVNetServiceEndpoint?: boolean;
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
