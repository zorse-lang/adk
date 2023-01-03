import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class cassandraClusters
	extends ArmResource<cassandraClustersComponentInputs>
	implements cassandraClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: cassandraClustersComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/cassandraClusters", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/cassandraClusters";
}
export interface cassandraClustersComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/cassandraClusters";
}
export interface cassandraClustersComponentInputs {
	readonly identity?: ManagedCassandraManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClusterResourceProperties | undefined;
	readonly tags?: Tags | undefined;
}
export class cassandraClusters_dataCenters
	extends ArmResource<cassandraClusters_dataCentersComponentInputs>
	implements cassandraClusters_dataCentersComponentOutputs
{
	constructor(entity: ADKEntity, options: cassandraClusters_dataCentersComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/cassandraClusters/dataCenters", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/cassandraClusters/dataCenters";
}
export interface cassandraClusters_dataCentersComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/cassandraClusters/dataCenters";
}
export interface cassandraClusters_dataCentersComponentInputs {
	readonly name: string;
	readonly properties?: DataCenterResourceProperties | undefined;
}
export class databaseAccounts
	extends ArmResource<databaseAccountsComponentInputs>
	implements databaseAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts";
}
export interface databaseAccountsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts";
}
export interface databaseAccountsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: ("GlobalDocumentDB" | "MongoDB" | "Parse") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountGetProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_cassandraKeyspaces
	extends ArmResource<databaseAccounts_cassandraKeyspacesComponentInputs>
	implements databaseAccounts_cassandraKeyspacesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_cassandraKeyspacesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces";
}
export interface databaseAccounts_cassandraKeyspacesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces";
}
export interface databaseAccounts_cassandraKeyspacesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_cassandraKeyspaces_tables
	extends ArmResource<databaseAccounts_cassandraKeyspaces_tablesComponentInputs>
	implements databaseAccounts_cassandraKeyspaces_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_cassandraKeyspaces_tablesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables";
}
export interface databaseAccounts_cassandraKeyspaces_tablesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables";
}
export interface databaseAccounts_cassandraKeyspaces_tablesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: CassandraTableCreateUpdatePropertiesOrCassandraTableGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_cassandraKeyspaces_tables_throughputSettings
	extends ArmResource<databaseAccounts_cassandraKeyspaces_tables_throughputSettingsComponentInputs>
	implements databaseAccounts_cassandraKeyspaces_tables_throughputSettingsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: databaseAccounts_cassandraKeyspaces_tables_throughputSettingsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings";
}
export interface databaseAccounts_cassandraKeyspaces_tables_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings";
}
export interface databaseAccounts_cassandraKeyspaces_tables_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_cassandraKeyspaces_throughputSettings
	extends ArmResource<databaseAccounts_cassandraKeyspaces_throughputSettingsComponentInputs>
	implements databaseAccounts_cassandraKeyspaces_throughputSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_cassandraKeyspaces_throughputSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings";
}
export interface databaseAccounts_cassandraKeyspaces_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings";
}
export interface databaseAccounts_cassandraKeyspaces_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_gremlinDatabases
	extends ArmResource<databaseAccounts_gremlinDatabasesComponentInputs>
	implements databaseAccounts_gremlinDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_gremlinDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases";
}
export interface databaseAccounts_gremlinDatabasesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases";
}
export interface databaseAccounts_gremlinDatabasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: GremlinDatabaseCreateUpdatePropertiesOrGremlinDatabaseGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_gremlinDatabases_graphs
	extends ArmResource<databaseAccounts_gremlinDatabases_graphsComponentInputs>
	implements databaseAccounts_gremlinDatabases_graphsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_gremlinDatabases_graphsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs";
}
export interface databaseAccounts_gremlinDatabases_graphsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs";
}
export interface databaseAccounts_gremlinDatabases_graphsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_gremlinDatabases_graphs_throughputSettings
	extends ArmResource<databaseAccounts_gremlinDatabases_graphs_throughputSettingsComponentInputs>
	implements databaseAccounts_gremlinDatabases_graphs_throughputSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_gremlinDatabases_graphs_throughputSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings";
}
export interface databaseAccounts_gremlinDatabases_graphs_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings";
}
export interface databaseAccounts_gremlinDatabases_graphs_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_gremlinDatabases_throughputSettings
	extends ArmResource<databaseAccounts_gremlinDatabases_throughputSettingsComponentInputs>
	implements databaseAccounts_gremlinDatabases_throughputSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_gremlinDatabases_throughputSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings";
}
export interface databaseAccounts_gremlinDatabases_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings";
}
export interface databaseAccounts_gremlinDatabases_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_mongodbDatabases
	extends ArmResource<databaseAccounts_mongodbDatabasesComponentInputs>
	implements databaseAccounts_mongodbDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_mongodbDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases";
}
export interface databaseAccounts_mongodbDatabasesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases";
}
export interface databaseAccounts_mongodbDatabasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: MongoDBDatabaseCreateUpdatePropertiesOrMongoDBDatabaseGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_mongodbDatabases_collections
	extends ArmResource<databaseAccounts_mongodbDatabases_collectionsComponentInputs>
	implements databaseAccounts_mongodbDatabases_collectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_mongodbDatabases_collectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections";
}
export interface databaseAccounts_mongodbDatabases_collectionsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections";
}
export interface databaseAccounts_mongodbDatabases_collectionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_mongodbDatabases_collections_throughputSettings
	extends ArmResource<databaseAccounts_mongodbDatabases_collections_throughputSettingsComponentInputs>
	implements databaseAccounts_mongodbDatabases_collections_throughputSettingsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: databaseAccounts_mongodbDatabases_collections_throughputSettingsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings";
}
export interface databaseAccounts_mongodbDatabases_collections_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings";
}
export interface databaseAccounts_mongodbDatabases_collections_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_mongodbDatabases_throughputSettings
	extends ArmResource<databaseAccounts_mongodbDatabases_throughputSettingsComponentInputs>
	implements databaseAccounts_mongodbDatabases_throughputSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_mongodbDatabases_throughputSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings";
}
export interface databaseAccounts_mongodbDatabases_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings";
}
export interface databaseAccounts_mongodbDatabases_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_mongodbRoleDefinitions
	extends ArmResource<databaseAccounts_mongodbRoleDefinitionsComponentInputs>
	implements databaseAccounts_mongodbRoleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_mongodbRoleDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions";
}
export interface databaseAccounts_mongodbRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions";
}
export interface databaseAccounts_mongodbRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: MongoRoleDefinitionResource | undefined;
}
export class databaseAccounts_mongodbUserDefinitions
	extends ArmResource<databaseAccounts_mongodbUserDefinitionsComponentInputs>
	implements databaseAccounts_mongodbUserDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_mongodbUserDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions";
}
export interface databaseAccounts_mongodbUserDefinitionsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions";
}
export interface databaseAccounts_mongodbUserDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: MongoUserDefinitionResource | undefined;
}
export class databaseAccounts_notebookWorkspaces
	extends ArmResource<databaseAccounts_notebookWorkspacesComponentInputs>
	implements databaseAccounts_notebookWorkspacesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_notebookWorkspacesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces";
}
export interface databaseAccounts_notebookWorkspacesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces";
}
export interface databaseAccounts_notebookWorkspacesComponentInputs {
	readonly name: string;
	readonly properties?: NotebookWorkspaceProperties | undefined;
}
export class databaseAccounts_privateEndpointConnections
	extends ArmResource<databaseAccounts_privateEndpointConnectionsComponentInputs>
	implements databaseAccounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections";
}
export interface databaseAccounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections";
}
export interface databaseAccounts_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class databaseAccounts_privateLinkResources
	extends ArmResource<databaseAccounts_privateLinkResourcesComponentInputs>
	implements databaseAccounts_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/privateLinkResources", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/privateLinkResources";
}
export interface databaseAccounts_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/privateLinkResources";
}
export interface databaseAccounts_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export class databaseAccounts_services
	extends ArmResource<databaseAccounts_servicesComponentInputs>
	implements databaseAccounts_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_servicesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/services", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/services";
}
export interface databaseAccounts_servicesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/services";
}
export interface databaseAccounts_servicesComponentInputs {
	readonly name: string;
	readonly properties?: ServiceResourceCreateUpdatePropertiesOrServiceResourceProperties | undefined;
}
export class databaseAccounts_sqlDatabases
	extends ArmResource<databaseAccounts_sqlDatabasesComponentInputs>
	implements databaseAccounts_sqlDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/sqlDatabases", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases";
}
export interface databaseAccounts_sqlDatabasesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases";
}
export interface databaseAccounts_sqlDatabasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_sqlDatabases_containers
	extends ArmResource<databaseAccounts_sqlDatabases_containersComponentInputs>
	implements databaseAccounts_sqlDatabases_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlDatabases_containersComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers";
}
export interface databaseAccounts_sqlDatabases_containersComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers";
}
export interface databaseAccounts_sqlDatabases_containersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SqlContainerCreateUpdatePropertiesOrSqlContainerGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_sqlDatabases_containers_storedProcedures
	extends ArmResource<databaseAccounts_sqlDatabases_containers_storedProceduresComponentInputs>
	implements databaseAccounts_sqlDatabases_containers_storedProceduresComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlDatabases_containers_storedProceduresComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures";
}
export interface databaseAccounts_sqlDatabases_containers_storedProceduresComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures";
}
export interface databaseAccounts_sqlDatabases_containers_storedProceduresComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SqlStoredProcedureCreateUpdatePropertiesOrSqlStoredProcedureGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_sqlDatabases_containers_throughputSettings
	extends ArmResource<databaseAccounts_sqlDatabases_containers_throughputSettingsComponentInputs>
	implements databaseAccounts_sqlDatabases_containers_throughputSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlDatabases_containers_throughputSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings";
}
export interface databaseAccounts_sqlDatabases_containers_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings";
}
export interface databaseAccounts_sqlDatabases_containers_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_sqlDatabases_containers_triggers
	extends ArmResource<databaseAccounts_sqlDatabases_containers_triggersComponentInputs>
	implements databaseAccounts_sqlDatabases_containers_triggersComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlDatabases_containers_triggersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers";
}
export interface databaseAccounts_sqlDatabases_containers_triggersComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers";
}
export interface databaseAccounts_sqlDatabases_containers_triggersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SqlTriggerCreateUpdatePropertiesOrSqlTriggerGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_sqlDatabases_containers_userDefinedFunctions
	extends ArmResource<databaseAccounts_sqlDatabases_containers_userDefinedFunctionsComponentInputs>
	implements databaseAccounts_sqlDatabases_containers_userDefinedFunctionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: databaseAccounts_sqlDatabases_containers_userDefinedFunctionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions";
}
export interface databaseAccounts_sqlDatabases_containers_userDefinedFunctionsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions";
}
export interface databaseAccounts_sqlDatabases_containers_userDefinedFunctionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SqlUserDefinedFunctionCreateUpdatePropertiesOrSqlUserDefinedFunctionGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_sqlDatabases_throughputSettings
	extends ArmResource<databaseAccounts_sqlDatabases_throughputSettingsComponentInputs>
	implements databaseAccounts_sqlDatabases_throughputSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlDatabases_throughputSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings";
}
export interface databaseAccounts_sqlDatabases_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings";
}
export interface databaseAccounts_sqlDatabases_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_sqlRoleAssignments
	extends ArmResource<databaseAccounts_sqlRoleAssignmentsComponentInputs>
	implements databaseAccounts_sqlRoleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlRoleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments";
}
export interface databaseAccounts_sqlRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments";
}
export interface databaseAccounts_sqlRoleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: SqlRoleAssignmentResource | undefined;
}
export class databaseAccounts_sqlRoleDefinitions
	extends ArmResource<databaseAccounts_sqlRoleDefinitionsComponentInputs>
	implements databaseAccounts_sqlRoleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_sqlRoleDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions";
}
export interface databaseAccounts_sqlRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions";
}
export interface databaseAccounts_sqlRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: SqlRoleDefinitionResource | undefined;
}
export class databaseAccounts_tables
	extends ArmResource<databaseAccounts_tablesComponentInputs>
	implements databaseAccounts_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/databaseAccounts/tables", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/tables";
}
export interface databaseAccounts_tablesComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/tables";
}
export interface databaseAccounts_tablesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: TableCreateUpdatePropertiesOrTableGetProperties;
	readonly tags?: Tags | undefined;
}
export class databaseAccounts_tables_throughputSettings
	extends ArmResource<databaseAccounts_tables_throughputSettingsComponentInputs>
	implements databaseAccounts_tables_throughputSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_tables_throughputSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings",
			"2022-08-15",
			options,
		);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings";
}
export interface databaseAccounts_tables_throughputSettingsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings";
}
export interface databaseAccounts_tables_throughputSettingsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties;
	readonly tags?: Tags | undefined;
}
export class locations extends ArmResource<locationsComponentInputs> implements locationsComponentOutputs {
	constructor(entity: ADKEntity, options: locationsComponentInputs) {
		super(entity, options.name, "Microsoft.DocumentDB/locations", "2022-08-15", options);
	}
	public readonly apiVersion: "2022-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/locations";
}
export interface locationsComponentOutputs {
	readonly apiVersion: "2022-08-15";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/locations";
}
export interface locationsComponentInputs {
	readonly name: string;
	readonly properties?: LocationProperties | undefined;
}
export function listConnectionInfo(
	resource: databaseAccounts_notebookWorkspaces,
): NotebookWorkspaceConnectionInfoResult {
	if (resource.apiVersion !== "2022-08-15") {
		throw new Error(`listConnectionInfo is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces") {
		throw new Error(`listConnectionInfo is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listConnectionStrings(resource: databaseAccounts): DatabaseAccountListConnectionStringsResult {
	if (resource.apiVersion !== "2022-08-15") {
		throw new Error(`listConnectionStrings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DocumentDB/databaseAccounts") {
		throw new Error(`listConnectionStrings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: databaseAccounts): DatabaseAccountListKeysResult {
	if (resource.apiVersion !== "2022-08-15") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DocumentDB/databaseAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountKeyMetadata {
	readonly generationTime?: string | undefined;
}
export interface AnalyticalStorageConfiguration {
	readonly schemaType?: ("FullFidelity" | "WellDefined") | undefined;
}
export interface ApiProperties {
	readonly serverVersion?: ("3.2" | "3.6" | "4.0" | "4.2") | undefined;
}
export interface AutoscaleSettings {
	readonly maxThroughput?: number | undefined;
}
export interface AutoscaleSettingsResource {
	readonly autoUpgradePolicy?: AutoUpgradePolicyResource | undefined;
	readonly maxThroughput: number;
	readonly targetMaxThroughput?: number | undefined;
}
export interface AutoUpgradePolicyResource {
	readonly throughputPolicy?: ThroughputPolicyResource | undefined;
}
export interface BackupPolicy {
	readonly migrationState?: BackupPolicyMigrationState | undefined;
}
export interface BackupPolicyMigrationState {
	readonly startTime?: string | undefined;
	readonly status?: ("Completed" | "Failed" | "InProgress" | "Invalid") | undefined;
	readonly targetType?: ("Continuous" | "Periodic") | undefined;
}
export interface Capability {
	readonly name?: string | undefined;
}
export interface Capacity {
	readonly totalThroughputLimit?: number | undefined;
}
export interface CassandraKeyspaceCreateUpdatePropertiesOrCassandraKeyspaceGetProperties {
	readonly options?: CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesOptions | undefined;
	readonly resource: CassandraKeyspaceResourceOrCassandraKeyspaceGetPropertiesResource;
}
export interface CassandraKeyspaceResourceOrCassandraKeyspaceGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
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
export interface CassandraTableCreateUpdatePropertiesOrCassandraTableGetProperties {
	readonly options?: CreateUpdateOptionsOrCassandraTableGetPropertiesOptions | undefined;
	readonly resource: CassandraTableResourceOrCassandraTableGetPropertiesResource;
}
export interface CassandraTableResourceOrCassandraTableGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly analyticalStorageTtl?: number | undefined;
	readonly defaultTtl?: number | undefined;
	readonly id: string;
	readonly schema?: CassandraSchema | undefined;
}
export interface Certificate {
	readonly pem?: string | undefined;
}
export interface ClusterKey {
	readonly name?: string | undefined;
	readonly orderBy?: string | undefined;
}
export interface ClusterResourceProperties {
	readonly authenticationMethod?: ("Cassandra" | "None") | undefined;
	readonly cassandraAuditLoggingEnabled?: boolean | undefined;
	readonly cassandraVersion?: string | undefined;
	readonly clientCertificates?: Certificate[] | undefined;
	readonly clusterNameOverride?: string | undefined;
	readonly deallocated?: boolean | undefined;
	readonly delegatedManagementSubnetId?: string | undefined;
	readonly externalGossipCertificates?: Certificate[] | undefined;
	readonly externalSeedNodes?: SeedNode[] | undefined;
	readonly gossipCertificates?: Certificate[] | undefined;
	readonly hoursBetweenBackups?: number | undefined;
	readonly initialCassandraAdminPassword?: string | undefined;
	readonly prometheusEndpoint?: SeedNode | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly repairEnabled?: boolean | undefined;
	readonly restoreFromBackupId?: string | undefined;
	readonly seedNodes?: SeedNode[] | undefined;
}
export interface Column {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface CompositePath {
	readonly order?: ("ascending" | "descending") | undefined;
	readonly path?: string | undefined;
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
	readonly kind?: ("Hash" | "MultiHash" | "Range") | undefined;
	readonly paths?: string[] | undefined;
	readonly systemKey?: boolean | undefined;
	readonly version?: number | undefined;
}
export interface CorsPolicy {
	readonly allowedHeaders?: string | undefined;
	readonly allowedMethods?: string | undefined;
	readonly allowedOrigins: string;
	readonly exposedHeaders?: string | undefined;
	readonly maxAgeInSeconds?: number | undefined;
}
export interface CreateUpdateOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrCassandraTableGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrGremlinDatabaseGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrGremlinGraphGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrMongoDBCollectionGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrMongoDBDatabaseGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrSqlContainerGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrSqlDatabaseGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface CreateUpdateOptionsOrTableGetPropertiesOptions {
	readonly autoscaleSettings?: AutoscaleSettings | undefined;
	readonly throughput?: number | undefined;
}
export interface DatabaseAccountConnectionString {
	readonly connectionString?: string | undefined;
	readonly description?: string | undefined;
}
export interface DatabaseAccountCreateUpdatePropertiesOrDatabaseAccountGetProperties {
	readonly analyticalStorageConfiguration?: AnalyticalStorageConfiguration | undefined;
	readonly apiProperties?: ApiProperties | undefined;
	readonly backupPolicy?: BackupPolicy | undefined;
	readonly capabilities?: Capability[] | undefined;
	readonly capacity?: Capacity | undefined;
	readonly connectorOffer?: "Small" | undefined;
	readonly consistencyPolicy?: ConsistencyPolicy | undefined;
	readonly cors?: CorsPolicy[] | undefined;
	readonly createMode?: ("Default" | "Restore") | undefined;
	readonly databaseAccountOfferType: "Standard";
	readonly defaultIdentity?: string | undefined;
	readonly disableKeyBasedMetadataWriteAccess?: boolean | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly documentEndpoint?: string | undefined;
	readonly enableAnalyticalStorage?: boolean | undefined;
	readonly enableAutomaticFailover?: boolean | undefined;
	readonly enableCassandraConnector?: boolean | undefined;
	readonly enableFreeTier?: boolean | undefined;
	readonly enableMultipleWriteLocations?: boolean | undefined;
	readonly enablePartitionMerge?: boolean | undefined;
	readonly failoverPolicies?: FailoverPolicy[] | undefined;
	readonly instanceId?: string | undefined;
	readonly ipRules?: IpAddressOrRange[] | undefined;
	readonly isVirtualNetworkFilterEnabled?: boolean | undefined;
	readonly keysMetadata?: DatabaseAccountKeysMetadata | undefined;
	readonly keyVaultKeyUri?: string | undefined;
	readonly locations: Location[];
	readonly networkAclBypass?: "AzureServices" | undefined;
	readonly networkAclBypassResourceIds?: string[] | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly readLocations?: Location[] | undefined;
	readonly restoreParameters?: RestoreParameters | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
	readonly writeLocations?: Location[] | undefined;
}
export interface DatabaseAccountKeysMetadata {
	readonly primaryMasterKey?: AccountKeyMetadata | undefined;
	readonly primaryReadonlyMasterKey?: AccountKeyMetadata | undefined;
	readonly secondaryMasterKey?: AccountKeyMetadata | undefined;
	readonly secondaryReadonlyMasterKey?: AccountKeyMetadata | undefined;
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
export interface DatabaseRestoreResource {
	readonly collectionNames?: string[] | undefined;
	readonly databaseName?: string | undefined;
}
export interface DataCenterResourceProperties {
	readonly availabilityZone?: boolean | undefined;
	readonly backupStorageCustomerKeyUri?: string | undefined;
	readonly base64EncodedCassandraYamlFragment?: string | undefined;
	readonly dataCenterLocation?: string | undefined;
	readonly delegatedSubnetId?: string | undefined;
	readonly diskCapacity?: number | undefined;
	readonly diskSku?: string | undefined;
	readonly managedDiskCustomerKeyUri?: string | undefined;
	readonly nodeCount?: number | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly seedNodes?: SeedNode[] | undefined;
	readonly sku?: string | undefined;
}
export interface ExcludedPath {
	readonly path?: string | undefined;
}
export interface FailoverPolicy {
	readonly failoverPriority?: number | undefined;
	readonly id?: string | undefined;
	readonly locationName?: string | undefined;
}
export interface GremlinDatabaseCreateUpdatePropertiesOrGremlinDatabaseGetProperties {
	readonly options?: CreateUpdateOptionsOrGremlinDatabaseGetPropertiesOptions | undefined;
	readonly resource: GremlinDatabaseResourceOrGremlinDatabaseGetPropertiesResource;
}
export interface GremlinDatabaseResourceOrGremlinDatabaseGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly id: string;
}
export interface GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetProperties {
	readonly options?: CreateUpdateOptionsOrGremlinGraphGetPropertiesOptions | undefined;
	readonly resource: GremlinGraphResourceOrGremlinGraphGetPropertiesResource;
}
export interface GremlinGraphResourceOrGremlinGraphGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly analyticalStorageTtl?: number | undefined;
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
	readonly compositeIndexes?: CompositePath[][] | undefined;
	readonly excludedPaths?: ExcludedPath[] | undefined;
	readonly includedPaths?: IncludedPath[] | undefined;
	readonly indexingMode?: ("consistent" | "lazy" | "none") | undefined;
	readonly spatialIndexes?: SpatialSpec[] | undefined;
}
export interface IpAddressOrRange {
	readonly ipAddressOrRange?: string | undefined;
}
export interface Location {
	readonly documentEndpoint?: string | undefined;
	readonly failoverPriority?: number | undefined;
	readonly id?: string | undefined;
	readonly isZoneRedundant?: boolean | undefined;
	readonly locationName?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface LocationProperties {
	readonly backupStorageRedundancies?: ("Geo" | "Local" | "Zone"[]) | undefined;
	readonly isResidencyRestricted?: boolean | undefined;
	readonly supportsAvailabilityZone?: boolean | undefined;
}
export interface ManagedCassandraManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
}
export interface MongoDBCollectionCreateUpdatePropertiesOrMongoDBCollectionGetProperties {
	readonly options?: CreateUpdateOptionsOrMongoDBCollectionGetPropertiesOptions | undefined;
	readonly resource: MongoDBCollectionResourceOrMongoDBCollectionGetPropertiesResource;
}
export interface MongoDBCollectionResourceOrMongoDBCollectionGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly analyticalStorageTtl?: number | undefined;
	readonly id: string;
	readonly indexes?: MongoIndex[] | undefined;
	readonly shardKey?: ShardKeys | undefined;
}
export interface MongoDBDatabaseCreateUpdatePropertiesOrMongoDBDatabaseGetProperties {
	readonly options?: CreateUpdateOptionsOrMongoDBDatabaseGetPropertiesOptions | undefined;
	readonly resource: MongoDBDatabaseResourceOrMongoDBDatabaseGetPropertiesResource;
}
export interface MongoDBDatabaseResourceOrMongoDBDatabaseGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly id: string;
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
export interface MongoRoleDefinitionResource {
	readonly databaseName?: string | undefined;
	readonly privileges?: Privilege[] | undefined;
	readonly roleName?: string | undefined;
	readonly roles?: Role[] | undefined;
	readonly type?: "BuiltInRole" | undefined;
}
export interface MongoUserDefinitionResource {
	readonly customData?: string | undefined;
	readonly databaseName?: string | undefined;
	readonly mechanisms?: string | undefined;
	readonly password?: string | undefined;
	readonly roles?: Role[] | undefined;
	readonly userName?: string | undefined;
}
export interface NotebookWorkspaceConnectionInfoResult {
	readonly authToken?: string | undefined;
	readonly notebookServerEndpoint?: string | undefined;
}
export interface NotebookWorkspaceProperties {
	readonly notebookServerEndpoint?: string | undefined;
	readonly status?: string | undefined;
}
export interface PeriodicModeProperties {
	readonly backupIntervalInMinutes?: number | undefined;
	readonly backupRetentionIntervalInHours?: number | undefined;
	readonly backupStorageRedundancy?: ("Geo" | "Local" | "Zone") | undefined;
}
export interface Permission {
	readonly dataActions?: string[] | undefined;
	readonly notDataActions?: string[] | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupId?: string | undefined;
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface Privilege {
	readonly actions?: string[] | undefined;
	readonly resource?: PrivilegeResource | undefined;
}
export interface PrivilegeResource {
	readonly collection?: string | undefined;
	readonly db?: string | undefined;
}
export interface RestoreParameters {
	readonly databasesToRestore?: DatabaseRestoreResource[] | undefined;
	readonly restoreMode?: "PointInTime" | undefined;
	readonly restoreSource?: string | undefined;
	readonly restoreTimestampInUtc?: string | undefined;
}
export interface Role {
	readonly db?: string | undefined;
	readonly role?: string | undefined;
}
export interface SeedNode {
	readonly ipAddress?: string | undefined;
}
export interface ServiceResourceCreateUpdatePropertiesOrServiceResourceProperties {
	readonly creationTime?: string | undefined;
	readonly instanceCount?: number | undefined;
	readonly instanceSize?: ("Cosmos.D16s" | "Cosmos.D4s" | "Cosmos.D8s") | undefined;
	readonly status?: ("Creating" | "Deleting" | "Error" | "Running" | "Stopped" | "Updating") | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ShardKeys {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SpatialSpec {
	readonly path?: string | undefined;
	readonly types?: ("LineString" | "MultiPolygon" | "Point" | "Polygon"[]) | undefined;
}
export interface SqlContainerCreateUpdatePropertiesOrSqlContainerGetProperties {
	readonly options?: CreateUpdateOptionsOrSqlContainerGetPropertiesOptions | undefined;
	readonly resource: SqlContainerResourceOrSqlContainerGetPropertiesResource;
}
export interface SqlContainerResourceOrSqlContainerGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly analyticalStorageTtl?: number | undefined;
	readonly conflictResolutionPolicy?: ConflictResolutionPolicy | undefined;
	readonly defaultTtl?: number | undefined;
	readonly id: string;
	readonly indexingPolicy?: IndexingPolicy | undefined;
	readonly partitionKey?: ContainerPartitionKey | undefined;
	readonly uniqueKeyPolicy?: UniqueKeyPolicy | undefined;
}
export interface SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseGetProperties {
	readonly options?: CreateUpdateOptionsOrSqlDatabaseGetPropertiesOptions | undefined;
	readonly resource: SqlDatabaseResourceOrSqlDatabaseGetPropertiesResource;
}
export interface SqlDatabaseResourceOrSqlDatabaseGetPropertiesResource {
	readonly _colls?: string | undefined;
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly _users?: string | undefined;
	readonly id: string;
}
export interface SqlRoleAssignmentResource {
	readonly principalId?: string | undefined;
	readonly roleDefinitionId?: string | undefined;
	readonly scope?: string | undefined;
}
export interface SqlRoleDefinitionResource {
	readonly assignableScopes?: string[] | undefined;
	readonly permissions?: Permission[] | undefined;
	readonly roleName?: string | undefined;
	readonly type?: "BuiltInRole" | undefined;
}
export interface SqlStoredProcedureCreateUpdatePropertiesOrSqlStoredProcedureGetProperties {
	readonly options?: CreateUpdateOptions | undefined;
	readonly resource: SqlStoredProcedureResourceOrSqlStoredProcedureGetPropertiesResource;
}
export interface SqlStoredProcedureResourceOrSqlStoredProcedureGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly body?: string | undefined;
	readonly id: string;
}
export interface SqlTriggerCreateUpdatePropertiesOrSqlTriggerGetProperties {
	readonly options?: CreateUpdateOptions | undefined;
	readonly resource: SqlTriggerResourceOrSqlTriggerGetPropertiesResource;
}
export interface SqlTriggerResourceOrSqlTriggerGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly body?: string | undefined;
	readonly id: string;
	readonly triggerOperation?: ("All" | "Create" | "Delete" | "Replace" | "Update") | undefined;
	readonly triggerType?: ("Post" | "Pre") | undefined;
}
export interface SqlUserDefinedFunctionCreateUpdatePropertiesOrSqlUserDefinedFunctionGetProperties {
	readonly options?: CreateUpdateOptions | undefined;
	readonly resource: SqlUserDefinedFunctionResourceOrSqlUserDefinedFunctionGetPropertiesResource;
}
export interface SqlUserDefinedFunctionResourceOrSqlUserDefinedFunctionGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly body?: string | undefined;
	readonly id: string;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TableCreateUpdatePropertiesOrTableGetProperties {
	readonly options?: CreateUpdateOptionsOrTableGetPropertiesOptions | undefined;
	readonly resource: TableResourceOrTableGetPropertiesResource;
}
export interface TableResourceOrTableGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly id: string;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ThroughputPolicyResource {
	readonly incrementPercent?: number | undefined;
	readonly isEnabled?: boolean | undefined;
}
export interface ThroughputSettingsResourceOrThroughputSettingsGetPropertiesResource {
	readonly _etag?: string | undefined;
	readonly _rid?: string | undefined;
	readonly _ts?: number | undefined;
	readonly autoscaleSettings?: AutoscaleSettingsResource | undefined;
	readonly minimumThroughput?: string | undefined;
	readonly offerReplacePending?: string | undefined;
	readonly throughput?: number | undefined;
}
export interface ThroughputSettingsUpdatePropertiesOrThroughputSettingsGetProperties {
	readonly resource: ThroughputSettingsResourceOrThroughputSettingsGetPropertiesResource;
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
	cassandraClusters: cassandraClusters,
	"cassandraClusters/dataCenters": cassandraClusters_dataCenters,
	databaseAccounts: databaseAccounts,
	"databaseAccounts/cassandraKeyspaces": databaseAccounts_cassandraKeyspaces,
	"databaseAccounts/cassandraKeyspaces/tables": databaseAccounts_cassandraKeyspaces_tables,
	"databaseAccounts/cassandraKeyspaces/tables/throughputSettings":
		databaseAccounts_cassandraKeyspaces_tables_throughputSettings,
	"databaseAccounts/cassandraKeyspaces/throughputSettings": databaseAccounts_cassandraKeyspaces_throughputSettings,
	"databaseAccounts/gremlinDatabases": databaseAccounts_gremlinDatabases,
	"databaseAccounts/gremlinDatabases/graphs": databaseAccounts_gremlinDatabases_graphs,
	"databaseAccounts/gremlinDatabases/graphs/throughputSettings":
		databaseAccounts_gremlinDatabases_graphs_throughputSettings,
	"databaseAccounts/gremlinDatabases/throughputSettings": databaseAccounts_gremlinDatabases_throughputSettings,
	"databaseAccounts/mongodbDatabases": databaseAccounts_mongodbDatabases,
	"databaseAccounts/mongodbDatabases/collections": databaseAccounts_mongodbDatabases_collections,
	"databaseAccounts/mongodbDatabases/collections/throughputSettings":
		databaseAccounts_mongodbDatabases_collections_throughputSettings,
	"databaseAccounts/mongodbDatabases/throughputSettings": databaseAccounts_mongodbDatabases_throughputSettings,
	"databaseAccounts/mongodbRoleDefinitions": databaseAccounts_mongodbRoleDefinitions,
	"databaseAccounts/mongodbUserDefinitions": databaseAccounts_mongodbUserDefinitions,
	"databaseAccounts/notebookWorkspaces": databaseAccounts_notebookWorkspaces,
	"databaseAccounts/privateEndpointConnections": databaseAccounts_privateEndpointConnections,
	"databaseAccounts/privateLinkResources": databaseAccounts_privateLinkResources,
	"databaseAccounts/services": databaseAccounts_services,
	"databaseAccounts/sqlDatabases": databaseAccounts_sqlDatabases,
	"databaseAccounts/sqlDatabases/containers": databaseAccounts_sqlDatabases_containers,
	"databaseAccounts/sqlDatabases/containers/storedProcedures":
		databaseAccounts_sqlDatabases_containers_storedProcedures,
	"databaseAccounts/sqlDatabases/containers/throughputSettings":
		databaseAccounts_sqlDatabases_containers_throughputSettings,
	"databaseAccounts/sqlDatabases/containers/triggers": databaseAccounts_sqlDatabases_containers_triggers,
	"databaseAccounts/sqlDatabases/containers/userDefinedFunctions":
		databaseAccounts_sqlDatabases_containers_userDefinedFunctions,
	"databaseAccounts/sqlDatabases/throughputSettings": databaseAccounts_sqlDatabases_throughputSettings,
	"databaseAccounts/sqlRoleAssignments": databaseAccounts_sqlRoleAssignments,
	"databaseAccounts/sqlRoleDefinitions": databaseAccounts_sqlRoleDefinitions,
	"databaseAccounts/tables": databaseAccounts_tables,
	"databaseAccounts/tables/throughputSettings": databaseAccounts_tables_throughputSettings,
	locations: locations,
};
