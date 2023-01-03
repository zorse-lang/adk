import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts";
}
export interface accountsComponentInputs {
	readonly identity: Identity;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DefaultDtoTags | undefined;
}
export class accounts_shares
	extends ArmResource<accounts_sharesComponentInputs>
	implements accounts_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares";
}
export interface accounts_sharesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares";
}
export interface accounts_sharesComponentInputs {
	readonly name: string;
	readonly properties?: ShareProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class accounts_shares_dataSets_AdlsGen1File
	extends ArmResource<accounts_shares_dataSets_AdlsGen1FileComponentInputs>
	implements accounts_shares_dataSets_AdlsGen1FileComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_AdlsGen1FileComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen1FileComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen1FileComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen1File";
	readonly properties: AdlsGen1FileProperties;
}
export class accounts_shares_dataSets_AdlsGen1Folder
	extends ArmResource<accounts_shares_dataSets_AdlsGen1FolderComponentInputs>
	implements accounts_shares_dataSets_AdlsGen1FolderComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_AdlsGen1FolderComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen1FolderComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen1FolderComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen1Folder";
	readonly properties: AdlsGen1FolderProperties;
}
export class accounts_shares_dataSets_AdlsGen2File
	extends ArmResource<accounts_shares_dataSets_AdlsGen2FileComponentInputs>
	implements accounts_shares_dataSets_AdlsGen2FileComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_AdlsGen2FileComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen2FileComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen2FileComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen2File";
	readonly properties: AdlsGen2FileProperties;
}
export class accounts_shares_dataSets_AdlsGen2FileSystem
	extends ArmResource<accounts_shares_dataSets_AdlsGen2FileSystemComponentInputs>
	implements accounts_shares_dataSets_AdlsGen2FileSystemComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_AdlsGen2FileSystemComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen2FileSystemComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen2FileSystemComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen2FileSystem";
	readonly properties: AdlsGen2FileSystemProperties;
}
export class accounts_shares_dataSets_AdlsGen2Folder
	extends ArmResource<accounts_shares_dataSets_AdlsGen2FolderComponentInputs>
	implements accounts_shares_dataSets_AdlsGen2FolderComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_AdlsGen2FolderComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen2FolderComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_AdlsGen2FolderComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen2Folder";
	readonly properties: AdlsGen2FolderProperties;
}
export class accounts_shares_dataSets_Blob
	extends ArmResource<accounts_shares_dataSets_BlobComponentInputs>
	implements accounts_shares_dataSets_BlobComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_BlobComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_BlobComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_BlobComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Blob";
	readonly properties: BlobProperties;
}
export class accounts_shares_dataSets_BlobFolder
	extends ArmResource<accounts_shares_dataSets_BlobFolderComponentInputs>
	implements accounts_shares_dataSets_BlobFolderComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_BlobFolderComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_BlobFolderComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_BlobFolderComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "BlobFolder";
	readonly properties: BlobFolderProperties;
}
export class accounts_shares_dataSets_Container
	extends ArmResource<accounts_shares_dataSets_ContainerComponentInputs>
	implements accounts_shares_dataSets_ContainerComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_ContainerComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_ContainerComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_ContainerComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Container";
	readonly properties: BlobContainerProperties;
}
export class accounts_shares_dataSets_KustoCluster
	extends ArmResource<accounts_shares_dataSets_KustoClusterComponentInputs>
	implements accounts_shares_dataSets_KustoClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_KustoClusterComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_KustoClusterComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_KustoClusterComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "KustoCluster";
	readonly properties: KustoClusterDataSetProperties;
}
export class accounts_shares_dataSets_KustoDatabase
	extends ArmResource<accounts_shares_dataSets_KustoDatabaseComponentInputs>
	implements accounts_shares_dataSets_KustoDatabaseComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_KustoDatabaseComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_KustoDatabaseComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_KustoDatabaseComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "KustoDatabase";
	readonly properties: KustoDatabaseDataSetProperties;
}
export class accounts_shares_dataSets_SqlDBTable
	extends ArmResource<accounts_shares_dataSets_SqlDBTableComponentInputs>
	implements accounts_shares_dataSets_SqlDBTableComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_SqlDBTableComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_SqlDBTableComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_SqlDBTableComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SqlDBTable";
	readonly properties?: SqlDBTableProperties | undefined;
}
export class accounts_shares_dataSets_SqlDWTable
	extends ArmResource<accounts_shares_dataSets_SqlDWTableComponentInputs>
	implements accounts_shares_dataSets_SqlDWTableComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_SqlDWTableComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_SqlDWTableComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_SqlDWTableComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SqlDWTable";
	readonly properties?: SqlDWTableProperties | undefined;
}
export class accounts_shares_dataSets_SynapseWorkspaceSqlPoolTable
	extends ArmResource<accounts_shares_dataSets_SynapseWorkspaceSqlPoolTableComponentInputs>
	implements accounts_shares_dataSets_SynapseWorkspaceSqlPoolTableComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_dataSets_SynapseWorkspaceSqlPoolTableComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/dataSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_SynapseWorkspaceSqlPoolTableComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/dataSets";
}
export interface accounts_shares_dataSets_SynapseWorkspaceSqlPoolTableComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SynapseWorkspaceSqlPoolTable";
	readonly properties: SynapseWorkspaceSqlPoolTableDataSetProperties;
}
export class accounts_shares_invitations
	extends ArmResource<accounts_shares_invitationsComponentInputs>
	implements accounts_shares_invitationsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_invitationsComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/invitations", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/invitations";
}
export interface accounts_shares_invitationsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/invitations";
}
export interface accounts_shares_invitationsComponentInputs {
	readonly name: string;
	readonly properties?: InvitationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class accounts_shares_providerShareSubscriptions
	extends ArmResource<accounts_shares_providerShareSubscriptionsComponentInputs>
	implements accounts_shares_providerShareSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_providerShareSubscriptionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shares/providerShareSubscriptions",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/providerShareSubscriptions";
}
export interface accounts_shares_providerShareSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/providerShareSubscriptions";
}
export interface accounts_shares_providerShareSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: ProviderShareSubscriptionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class accounts_shares_synchronizationSettings_ScheduleBased
	extends ArmResource<accounts_shares_synchronizationSettings_ScheduleBasedComponentInputs>
	implements accounts_shares_synchronizationSettings_ScheduleBasedComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shares_synchronizationSettings_ScheduleBasedComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shares/synchronizationSettings", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shares/synchronizationSettings";
}
export interface accounts_shares_synchronizationSettings_ScheduleBasedComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shares/synchronizationSettings";
}
export interface accounts_shares_synchronizationSettings_ScheduleBasedComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ScheduleBased";
	readonly properties: ScheduledSynchronizationSettingProperties;
}
export class accounts_shareSubscriptions
	extends ArmResource<accounts_shareSubscriptionsComponentInputs>
	implements accounts_shareSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shareSubscriptions", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions";
}
export interface accounts_shareSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions";
}
export interface accounts_shareSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties: ShareSubscriptionProperties;
	readonly systemData?: SystemData | undefined;
}
export class accounts_shareSubscriptions_dataSetMappings_AdlsGen2File
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen2File";
	readonly properties: AdlsGen2FileDataSetMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystem
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystemComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystemComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystemComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystemComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystemComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen2FileSystem";
	readonly properties: AdlsGen2FileSystemDataSetMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_AdlsGen2Folder
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_AdlsGen2FolderComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_AdlsGen2FolderComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_AdlsGen2FolderComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_AdlsGen2FolderComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_AdlsGen2FolderComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AdlsGen2Folder";
	readonly properties: AdlsGen2FolderDataSetMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_Blob
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_BlobComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_BlobComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_BlobComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_BlobComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_BlobComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Blob";
	readonly properties: BlobMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_BlobFolder
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_BlobFolderComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_BlobFolderComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_BlobFolderComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_BlobFolderComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_BlobFolderComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "BlobFolder";
	readonly properties: BlobFolderMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_Container
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_ContainerComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_ContainerComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_ContainerComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_ContainerComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_ContainerComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Container";
	readonly properties: BlobContainerMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_KustoCluster
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_KustoClusterComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_KustoClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_KustoClusterComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_KustoClusterComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_KustoClusterComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "KustoCluster";
	readonly properties: KustoClusterDataSetMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_KustoDatabase
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_KustoDatabaseComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_KustoDatabaseComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_KustoDatabaseComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_KustoDatabaseComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_KustoDatabaseComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "KustoDatabase";
	readonly properties: KustoDatabaseDataSetMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_SqlDBTable
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_SqlDBTableComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_SqlDBTableComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_SqlDBTableComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_SqlDBTableComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_SqlDBTableComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SqlDBTable";
	readonly properties: SqlDBTableDataSetMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_SqlDWTable
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_SqlDWTableComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_SqlDWTableComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_dataSetMappings_SqlDWTableComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_SqlDWTableComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_SqlDWTableComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SqlDWTable";
	readonly properties: SqlDWTableDataSetMappingProperties;
}
export class accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTable
	extends ArmResource<accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTableComponentInputs>
	implements accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTableComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTableComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTableComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings";
}
export interface accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTableComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SynapseWorkspaceSqlPoolTable";
	readonly properties: SynapseWorkspaceSqlPoolTableDataSetMappingProperties;
}
export class accounts_shareSubscriptions_triggers_ScheduleBased
	extends ArmResource<accounts_shareSubscriptions_triggers_ScheduleBasedComponentInputs>
	implements accounts_shareSubscriptions_triggers_ScheduleBasedComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_shareSubscriptions_triggers_ScheduleBasedComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/accounts/shareSubscriptions/triggers", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/triggers";
}
export interface accounts_shareSubscriptions_triggers_ScheduleBasedComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/accounts/shareSubscriptions/triggers";
}
export interface accounts_shareSubscriptions_triggers_ScheduleBasedComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ScheduleBased";
	readonly properties: ScheduledTriggerProperties;
}
export class locations_consumerInvitations
	extends ArmResource<locations_consumerInvitationsComponentInputs>
	implements locations_consumerInvitationsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_consumerInvitationsComponentInputs) {
		super(entity, options.name, "Microsoft.DataShare/locations/consumerInvitations", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataShare/locations/consumerInvitations";
}
export interface locations_consumerInvitationsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.DataShare/locations/consumerInvitations";
}
export interface locations_consumerInvitationsComponentInputs {
	readonly name: string;
	readonly properties?: ConsumerInvitationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listSourceShareSynchronizationSettings(
	resource: accounts_shareSubscriptions,
): SourceShareSynchronizationSettingList {
	if (resource.apiVersion !== "2020-09-01") {
		throw new Error(`listSourceShareSynchronizationSettings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataShare/accounts/shareSubscriptions") {
		throw new Error(`listSourceShareSynchronizationSettings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSynchronizationDetails(
	resource: accounts_shares,
	input: ShareSynchronization,
): SynchronizationDetailsList {
	if (resource.apiVersion !== "2020-09-01") {
		throw new Error(`listSynchronizationDetails is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataShare/accounts/shares") {
		throw new Error(`listSynchronizationDetails is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSynchronizations(resource: accounts_shares): ShareSynchronizationList {
	if (resource.apiVersion !== "2020-09-01") {
		throw new Error(`listSynchronizations is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataShare/accounts/shares") {
		throw new Error(`listSynchronizations is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountProperties {
	readonly createdAt?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly userEmail?: string | undefined;
	readonly userName?: string | undefined;
}
export interface AdlsGen1FileProperties {
	readonly accountName: string;
	readonly dataSetId?: string | undefined;
	readonly fileName: string;
	readonly folderPath: string;
	readonly resourceGroup: string;
	readonly subscriptionId: string;
}
export interface AdlsGen1FolderProperties {
	readonly accountName: string;
	readonly dataSetId?: string | undefined;
	readonly folderPath: string;
	readonly resourceGroup: string;
	readonly subscriptionId: string;
}
export interface AdlsGen2FileDataSetMappingProperties {
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly filePath: string;
	readonly fileSystem: string;
	readonly outputType?: ("Csv" | "Parquet") | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface AdlsGen2FileProperties {
	readonly dataSetId?: string | undefined;
	readonly filePath: string;
	readonly fileSystem: string;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface AdlsGen2FileSystemDataSetMappingProperties {
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly fileSystem: string;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface AdlsGen2FileSystemProperties {
	readonly dataSetId?: string | undefined;
	readonly fileSystem: string;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface AdlsGen2FolderDataSetMappingProperties {
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly fileSystem: string;
	readonly folderPath: string;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface AdlsGen2FolderProperties {
	readonly dataSetId?: string | undefined;
	readonly fileSystem: string;
	readonly folderPath: string;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface BlobContainerMappingProperties {
	readonly containerName: string;
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface BlobContainerProperties {
	readonly containerName: string;
	readonly dataSetId?: string | undefined;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface BlobFolderMappingProperties {
	readonly containerName: string;
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly prefix: string;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface BlobFolderProperties {
	readonly containerName: string;
	readonly dataSetId?: string | undefined;
	readonly prefix: string;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface BlobMappingProperties {
	readonly containerName: string;
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly filePath: string;
	readonly outputType?: ("Csv" | "Parquet") | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface BlobProperties {
	readonly containerName: string;
	readonly dataSetId?: string | undefined;
	readonly filePath: string;
	readonly resourceGroup: string;
	readonly storageAccountName: string;
	readonly subscriptionId: string;
}
export interface ConsumerInvitationProperties {
	readonly dataSetCount?: number | undefined;
	readonly description?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly invitationId: string;
	readonly invitationStatus?: ("Accepted" | "Pending" | "Rejected" | "Withdrawn") | undefined;
	readonly location?: string | undefined;
	readonly providerEmail?: string | undefined;
	readonly providerName?: string | undefined;
	readonly providerTenantName?: string | undefined;
	readonly respondedAt?: string | undefined;
	readonly sentAt?: string | undefined;
	readonly shareName?: string | undefined;
	readonly termsOfUse?: string | undefined;
	readonly userEmail?: string | undefined;
	readonly userName?: string | undefined;
}
export interface DefaultDtoTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface InvitationProperties {
	readonly expirationDate?: string | undefined;
	readonly invitationId?: string | undefined;
	readonly invitationStatus?: ("Accepted" | "Pending" | "Rejected" | "Withdrawn") | undefined;
	readonly respondedAt?: string | undefined;
	readonly sentAt?: string | undefined;
	readonly targetActiveDirectoryId?: string | undefined;
	readonly targetEmail?: string | undefined;
	readonly targetObjectId?: string | undefined;
	readonly userEmail?: string | undefined;
	readonly userName?: string | undefined;
}
export interface KustoClusterDataSetMappingProperties {
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly kustoClusterResourceId: string;
	readonly location?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
}
export interface KustoClusterDataSetProperties {
	readonly dataSetId?: string | undefined;
	readonly kustoClusterResourceId: string;
	readonly location?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
}
export interface KustoDatabaseDataSetMappingProperties {
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly kustoClusterResourceId: string;
	readonly location?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
}
export interface KustoDatabaseDataSetProperties {
	readonly dataSetId?: string | undefined;
	readonly kustoDatabaseResourceId: string;
	readonly location?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
}
export interface ProviderShareSubscriptionProperties {
	readonly consumerEmail?: string | undefined;
	readonly consumerName?: string | undefined;
	readonly consumerTenantName?: string | undefined;
	readonly createdAt?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly providerEmail?: string | undefined;
	readonly providerName?: string | undefined;
	readonly sharedAt?: string | undefined;
	readonly shareSubscriptionObjectId?: string | undefined;
	readonly shareSubscriptionStatus?: ("Active" | "Revoked" | "Revoking" | "SourceDeleted") | undefined;
}
export interface ScheduledSourceShareSynchronizationSettingProperties {
	readonly recurrenceInterval?: ("Day" | "Hour") | undefined;
	readonly synchronizationTime?: string | undefined;
}
export interface ScheduledSynchronizationSettingProperties {
	readonly createdAt?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly recurrenceInterval: "Day" | "Hour";
	readonly synchronizationTime: string;
	readonly userName?: string | undefined;
}
export interface ScheduledTriggerProperties {
	readonly createdAt?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly recurrenceInterval: "Day" | "Hour";
	readonly synchronizationMode?: ("FullSync" | "Incremental") | undefined;
	readonly synchronizationTime: string;
	readonly triggerStatus?: ("Active" | "Inactive" | "SourceSynchronizationSettingDeleted") | undefined;
	readonly userName?: string | undefined;
}
export interface ShareProperties {
	readonly createdAt?: string | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly shareKind?: ("CopyBased" | "InPlace") | undefined;
	readonly terms?: string | undefined;
	readonly userEmail?: string | undefined;
	readonly userName?: string | undefined;
}
export interface ShareSubscriptionProperties {
	readonly createdAt?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly invitationId: string;
	readonly providerEmail?: string | undefined;
	readonly providerName?: string | undefined;
	readonly providerTenantName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly shareDescription?: string | undefined;
	readonly shareKind?: ("CopyBased" | "InPlace") | undefined;
	readonly shareName?: string | undefined;
	readonly shareSubscriptionStatus?: ("Active" | "Revoked" | "Revoking" | "SourceDeleted") | undefined;
	readonly shareTerms?: string | undefined;
	readonly sourceShareLocation: string;
	readonly userEmail?: string | undefined;
	readonly userName?: string | undefined;
}
export interface ShareSubscriptionSynchronization {
	readonly durationMs?: number | undefined;
	readonly endTime?: string | undefined;
	readonly message?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly synchronizationId: string;
	readonly synchronizationMode?: ("FullSync" | "Incremental") | undefined;
}
export interface ShareSubscriptionSynchronizationList {
	readonly nextLink?: string | undefined;
	readonly value: ShareSubscriptionSynchronization[];
}
export interface ShareSynchronization {
	readonly consumerEmail?: string | undefined;
	readonly consumerName?: string | undefined;
	readonly consumerTenantName?: string | undefined;
	readonly durationMs?: number | undefined;
	readonly endTime?: string | undefined;
	readonly message?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly synchronizationId?: string | undefined;
	readonly synchronizationMode?: ("FullSync" | "Incremental") | undefined;
}
export interface ShareSynchronizationList {
	readonly nextLink?: string | undefined;
	readonly value: ShareSynchronization[];
}
export interface SourceShareSynchronizationSetting {}
export interface SourceShareSynchronizationSettingList {
	readonly nextLink?: string | undefined;
	readonly value: SourceShareSynchronizationSetting[];
}
export interface SqlDBTableDataSetMappingProperties {
	readonly databaseName: string;
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly schemaName: string;
	readonly sqlServerResourceId: string;
	readonly tableName: string;
}
export interface SqlDBTableProperties {
	readonly databaseName: string;
	readonly dataSetId?: string | undefined;
	readonly schemaName: string;
	readonly sqlServerResourceId: string;
	readonly tableName: string;
}
export interface SqlDWTableDataSetMappingProperties {
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly dataWarehouseName: string;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly schemaName: string;
	readonly sqlServerResourceId: string;
	readonly tableName: string;
}
export interface SqlDWTableProperties {
	readonly dataSetId?: string | undefined;
	readonly dataWarehouseName: string;
	readonly schemaName: string;
	readonly sqlServerResourceId: string;
	readonly tableName: string;
}
export interface SynapseWorkspaceSqlPoolTableDataSetMappingProperties {
	readonly dataSetId: string;
	readonly dataSetMappingStatus?: ("Broken" | "Ok") | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly synapseWorkspaceSqlPoolTableResourceId: string;
}
export interface SynapseWorkspaceSqlPoolTableDataSetProperties {
	readonly dataSetId?: string | undefined;
	readonly synapseWorkspaceSqlPoolTableResourceId: string;
}
export interface SynchronizationDetails {
	readonly dataSetId?: string | undefined;
	readonly dataSetType?:
		| (
				| "AdlsGen1File"
				| "AdlsGen1Folder"
				| "AdlsGen2File"
				| "AdlsGen2FileSystem"
				| "AdlsGen2Folder"
				| "Blob"
				| "BlobFolder"
				| "Container"
				| "KustoCluster"
				| "KustoDatabase"
				| "SqlDBTable"
				| "SqlDWTable"
				| "SynapseWorkspaceSqlPoolTable"
		  )
		| undefined;
	readonly durationMs?: number | undefined;
	readonly endTime?: string | undefined;
	readonly filesRead?: number | undefined;
	readonly filesWritten?: number | undefined;
	readonly message?: string | undefined;
	readonly name?: string | undefined;
	readonly rowsCopied?: number | undefined;
	readonly rowsRead?: number | undefined;
	readonly sizeRead?: number | undefined;
	readonly sizeWritten?: number | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly vCore?: number | undefined;
}
export interface SynchronizationDetailsList {
	readonly nextLink?: string | undefined;
	readonly value: SynchronizationDetails[];
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export type accounts_shares_dataSets =
	| accounts_shares_dataSets_AdlsGen1File
	| accounts_shares_dataSets_AdlsGen1Folder
	| accounts_shares_dataSets_AdlsGen2File
	| accounts_shares_dataSets_AdlsGen2FileSystem
	| accounts_shares_dataSets_AdlsGen2Folder
	| accounts_shares_dataSets_Blob
	| accounts_shares_dataSets_BlobFolder
	| accounts_shares_dataSets_Container
	| accounts_shares_dataSets_KustoCluster
	| accounts_shares_dataSets_KustoDatabase
	| accounts_shares_dataSets_SqlDBTable
	| accounts_shares_dataSets_SqlDWTable
	| accounts_shares_dataSets_SynapseWorkspaceSqlPoolTable;
export type accounts_shares_synchronizationSettings = accounts_shares_synchronizationSettings_ScheduleBased;
export type accounts_shareSubscriptions_dataSetMappings =
	| accounts_shareSubscriptions_dataSetMappings_AdlsGen2File
	| accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystem
	| accounts_shareSubscriptions_dataSetMappings_AdlsGen2Folder
	| accounts_shareSubscriptions_dataSetMappings_Blob
	| accounts_shareSubscriptions_dataSetMappings_BlobFolder
	| accounts_shareSubscriptions_dataSetMappings_Container
	| accounts_shareSubscriptions_dataSetMappings_KustoCluster
	| accounts_shareSubscriptions_dataSetMappings_KustoDatabase
	| accounts_shareSubscriptions_dataSetMappings_SqlDBTable
	| accounts_shareSubscriptions_dataSetMappings_SqlDWTable
	| accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTable;
export type accounts_shareSubscriptions_triggers = accounts_shareSubscriptions_triggers_ScheduleBased;
export default {
	accounts: accounts,
	"accounts/shares": accounts_shares,
	"accounts/shares/dataSets/AdlsGen1File": accounts_shares_dataSets_AdlsGen1File,
	"accounts/shares/dataSets/AdlsGen1Folder": accounts_shares_dataSets_AdlsGen1Folder,
	"accounts/shares/dataSets/AdlsGen2File": accounts_shares_dataSets_AdlsGen2File,
	"accounts/shares/dataSets/AdlsGen2FileSystem": accounts_shares_dataSets_AdlsGen2FileSystem,
	"accounts/shares/dataSets/AdlsGen2Folder": accounts_shares_dataSets_AdlsGen2Folder,
	"accounts/shares/dataSets/Blob": accounts_shares_dataSets_Blob,
	"accounts/shares/dataSets/BlobFolder": accounts_shares_dataSets_BlobFolder,
	"accounts/shares/dataSets/Container": accounts_shares_dataSets_Container,
	"accounts/shares/dataSets/KustoCluster": accounts_shares_dataSets_KustoCluster,
	"accounts/shares/dataSets/KustoDatabase": accounts_shares_dataSets_KustoDatabase,
	"accounts/shares/dataSets/SqlDBTable": accounts_shares_dataSets_SqlDBTable,
	"accounts/shares/dataSets/SqlDWTable": accounts_shares_dataSets_SqlDWTable,
	"accounts/shares/dataSets/SynapseWorkspaceSqlPoolTable": accounts_shares_dataSets_SynapseWorkspaceSqlPoolTable,
	"accounts/shares/invitations": accounts_shares_invitations,
	"accounts/shares/providerShareSubscriptions": accounts_shares_providerShareSubscriptions,
	"accounts/shares/synchronizationSettings/ScheduleBased": accounts_shares_synchronizationSettings_ScheduleBased,
	"accounts/shareSubscriptions": accounts_shareSubscriptions,
	"accounts/shareSubscriptions/dataSetMappings/AdlsGen2File": accounts_shareSubscriptions_dataSetMappings_AdlsGen2File,
	"accounts/shareSubscriptions/dataSetMappings/AdlsGen2FileSystem":
		accounts_shareSubscriptions_dataSetMappings_AdlsGen2FileSystem,
	"accounts/shareSubscriptions/dataSetMappings/AdlsGen2Folder":
		accounts_shareSubscriptions_dataSetMappings_AdlsGen2Folder,
	"accounts/shareSubscriptions/dataSetMappings/Blob": accounts_shareSubscriptions_dataSetMappings_Blob,
	"accounts/shareSubscriptions/dataSetMappings/BlobFolder": accounts_shareSubscriptions_dataSetMappings_BlobFolder,
	"accounts/shareSubscriptions/dataSetMappings/Container": accounts_shareSubscriptions_dataSetMappings_Container,
	"accounts/shareSubscriptions/dataSetMappings/KustoCluster": accounts_shareSubscriptions_dataSetMappings_KustoCluster,
	"accounts/shareSubscriptions/dataSetMappings/KustoDatabase":
		accounts_shareSubscriptions_dataSetMappings_KustoDatabase,
	"accounts/shareSubscriptions/dataSetMappings/SqlDBTable": accounts_shareSubscriptions_dataSetMappings_SqlDBTable,
	"accounts/shareSubscriptions/dataSetMappings/SqlDWTable": accounts_shareSubscriptions_dataSetMappings_SqlDWTable,
	"accounts/shareSubscriptions/dataSetMappings/SynapseWorkspaceSqlPoolTable":
		accounts_shareSubscriptions_dataSetMappings_SynapseWorkspaceSqlPoolTable,
	"accounts/shareSubscriptions/triggers/ScheduleBased": accounts_shareSubscriptions_triggers_ScheduleBased,
	"locations/consumerInvitations": locations_consumerInvitations,
};
