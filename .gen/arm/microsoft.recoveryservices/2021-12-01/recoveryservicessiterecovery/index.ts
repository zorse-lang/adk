import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_replicationAlertSettings
	extends ArmResource<vaults_replicationAlertSettingsComponentInputs>
	implements vaults_replicationAlertSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationAlertSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationAlertSettings", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationAlertSettings";
}
export interface vaults_replicationAlertSettingsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationAlertSettings";
}
export interface vaults_replicationAlertSettingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConfigureAlertRequestPropertiesOrAlertProperties;
}
export class vaults_replicationEvents
	extends ArmResource<vaults_replicationEventsComponentInputs>
	implements vaults_replicationEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationEventsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationEvents", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationEvents";
}
export interface vaults_replicationEventsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationEvents";
}
export interface vaults_replicationEventsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: EventProperties;
}
export class vaults_replicationFabrics
	extends ArmResource<vaults_replicationFabricsComponentInputs>
	implements vaults_replicationFabricsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationFabricsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationFabrics", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics";
}
export interface vaults_replicationFabricsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics";
}
export interface vaults_replicationFabricsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: FabricCreationInputPropertiesOrFabricProperties;
}
export class vaults_replicationFabrics_replicationLogicalNetworks
	extends ArmResource<vaults_replicationFabrics_replicationLogicalNetworksComponentInputs>
	implements vaults_replicationFabrics_replicationLogicalNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationFabrics_replicationLogicalNetworksComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks";
}
export interface vaults_replicationFabrics_replicationLogicalNetworksComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks";
}
export interface vaults_replicationFabrics_replicationLogicalNetworksComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: LogicalNetworkProperties;
}
export class vaults_replicationFabrics_replicationNetworks
	extends ArmResource<vaults_replicationFabrics_replicationNetworksComponentInputs>
	implements vaults_replicationFabrics_replicationNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationFabrics_replicationNetworksComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks";
}
export interface vaults_replicationFabrics_replicationNetworksComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks";
}
export interface vaults_replicationFabrics_replicationNetworksComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkProperties;
}
export class vaults_replicationFabrics_replicationNetworks_replicationNetworkMappings
	extends ArmResource<vaults_replicationFabrics_replicationNetworks_replicationNetworkMappingsComponentInputs>
	implements vaults_replicationFabrics_replicationNetworks_replicationNetworkMappingsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationNetworks_replicationNetworkMappingsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings";
}
export interface vaults_replicationFabrics_replicationNetworks_replicationNetworkMappingsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings";
}
export interface vaults_replicationFabrics_replicationNetworks_replicationNetworkMappingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: CreateNetworkMappingInputPropertiesOrNetworkMappingProperties;
}
export class vaults_replicationFabrics_replicationProtectionContainers
	extends ArmResource<vaults_replicationFabrics_replicationProtectionContainersComponentInputs>
	implements vaults_replicationFabrics_replicationProtectionContainersComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationFabrics_replicationProtectionContainersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers";
}
export interface vaults_replicationFabrics_replicationProtectionContainersComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers";
}
export interface vaults_replicationFabrics_replicationProtectionContainersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreateProtectionContainerInputPropertiesOrProtectionContainerProperties;
}
export class vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems
	extends ArmResource<vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItemsComponentInputs>
	implements vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItemsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItemsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItemsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItemsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: EnableMigrationInputPropertiesOrMigrationItemProperties;
}
export class vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems_migrationRecoveryPoints
	extends ArmResource<vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems_migrationRecoveryPointsComponentInputs>
	implements
		vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems_migrationRecoveryPointsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems_migrationRecoveryPointsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems_migrationRecoveryPointsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems_migrationRecoveryPointsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: MigrationRecoveryPointProperties;
}
export class vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItems
	extends ArmResource<vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItemsComponentInputs>
	implements vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItemsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItemsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItemsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItemsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectableItemProperties;
}
export class vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems
	extends ArmResource<vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItemsComponentInputs>
	implements vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItemsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItemsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItemsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItemsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: EnableProtectionInputPropertiesOrReplicationProtectedItemProperties;
}
export class vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPoints
	extends ArmResource<vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPointsComponentInputs>
	implements
		vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPointsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPointsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPointsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPointsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RecoveryPointProperties;
}
export class vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappings
	extends ArmResource<vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappingsComponentInputs>
	implements
		vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappingsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappingsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappingsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreateProtectionContainerMappingInputPropertiesOrProtectionContainerMappingProperties;
}
export class vaults_replicationFabrics_replicationRecoveryServicesProviders
	extends ArmResource<vaults_replicationFabrics_replicationRecoveryServicesProvidersComponentInputs>
	implements vaults_replicationFabrics_replicationRecoveryServicesProvidersComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationRecoveryServicesProvidersComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders";
}
export interface vaults_replicationFabrics_replicationRecoveryServicesProvidersComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders";
}
export interface vaults_replicationFabrics_replicationRecoveryServicesProvidersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: AddRecoveryServicesProviderInputPropertiesOrRecoveryServicesProviderProperties;
}
export class vaults_replicationFabrics_replicationStorageClassifications
	extends ArmResource<vaults_replicationFabrics_replicationStorageClassificationsComponentInputs>
	implements vaults_replicationFabrics_replicationStorageClassificationsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationFabrics_replicationStorageClassificationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications";
}
export interface vaults_replicationFabrics_replicationStorageClassificationsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications";
}
export interface vaults_replicationFabrics_replicationStorageClassificationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: StorageClassificationProperties;
}
export class vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappings
	extends ArmResource<vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappingsComponentInputs>
	implements
		vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappingsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappingsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings";
}
export interface vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappingsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings";
}
export interface vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: StorageMappingInputPropertiesOrStorageClassificationMappingProperties;
}
export class vaults_replicationFabrics_replicationvCenters
	extends ArmResource<vaults_replicationFabrics_replicationvCentersComponentInputs>
	implements vaults_replicationFabrics_replicationvCentersComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationFabrics_replicationvCentersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters";
}
export interface vaults_replicationFabrics_replicationvCentersComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters";
}
export interface vaults_replicationFabrics_replicationvCentersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AddVCenterRequestPropertiesOrVCenterProperties;
}
export class vaults_replicationJobs
	extends ArmResource<vaults_replicationJobsComponentInputs>
	implements vaults_replicationJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationJobsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationJobs", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationJobs";
}
export interface vaults_replicationJobsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationJobs";
}
export interface vaults_replicationJobsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: JobProperties;
}
export class vaults_replicationPolicies
	extends ArmResource<vaults_replicationPoliciesComponentInputs>
	implements vaults_replicationPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationPolicies", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationPolicies";
}
export interface vaults_replicationPoliciesComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationPolicies";
}
export interface vaults_replicationPoliciesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreatePolicyInputPropertiesOrPolicyProperties;
}
export class vaults_replicationProtectionIntents
	extends ArmResource<vaults_replicationProtectionIntentsComponentInputs>
	implements vaults_replicationProtectionIntentsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationProtectionIntentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/replicationProtectionIntents",
			"2021-12-01",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationProtectionIntents";
}
export interface vaults_replicationProtectionIntentsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationProtectionIntents";
}
export interface vaults_replicationProtectionIntentsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreateProtectionIntentPropertiesOrReplicationProtectionIntentProperties;
}
export class vaults_replicationRecoveryPlans
	extends ArmResource<vaults_replicationRecoveryPlansComponentInputs>
	implements vaults_replicationRecoveryPlansComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationRecoveryPlansComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans";
}
export interface vaults_replicationRecoveryPlansComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans";
}
export interface vaults_replicationRecoveryPlansComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties;
}
export class vaults_replicationVaultSettings
	extends ArmResource<vaults_replicationVaultSettingsComponentInputs>
	implements vaults_replicationVaultSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationVaultSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationVaultSettings", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationVaultSettings";
}
export interface vaults_replicationVaultSettingsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationVaultSettings";
}
export interface vaults_replicationVaultSettingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: VaultSettingCreationInputPropertiesOrVaultSettingProperties;
}
export interface A2AProtectedDiskDetails {
	readonly allowedDiskLevelOperation?: string[];
	readonly dataPendingAtSourceAgentInMB?: number;
	readonly dataPendingInStagingStorageAccountInMB?: number;
	readonly dekKeyVaultArmId?: string;
	readonly diskCapacityInBytes?: number;
	readonly diskName?: string;
	readonly diskState?: string;
	readonly diskType?: string;
	readonly diskUri?: string;
	readonly failoverDiskName?: string;
	readonly isDiskEncrypted?: boolean;
	readonly isDiskKeyEncrypted?: boolean;
	readonly kekKeyVaultArmId?: string;
	readonly keyIdentifier?: string;
	readonly monitoringJobType?: string;
	readonly monitoringPercentageCompletion?: number;
	readonly primaryDiskAzureStorageAccountId?: string;
	readonly primaryStagingAzureStorageAccountId?: string;
	readonly recoveryAzureStorageAccountId?: string;
	readonly recoveryDiskUri?: string;
	readonly resyncRequired?: boolean;
	readonly secretIdentifier?: string;
	readonly tfoDiskName?: string;
}
export interface A2AProtectedManagedDiskDetails {
	readonly allowedDiskLevelOperation?: string[];
	readonly dataPendingAtSourceAgentInMB?: number;
	readonly dataPendingInStagingStorageAccountInMB?: number;
	readonly dekKeyVaultArmId?: string;
	readonly diskCapacityInBytes?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskState?: string;
	readonly diskType?: string;
	readonly failoverDiskName?: string;
	readonly isDiskEncrypted?: boolean;
	readonly isDiskKeyEncrypted?: boolean;
	readonly kekKeyVaultArmId?: string;
	readonly keyIdentifier?: string;
	readonly monitoringJobType?: string;
	readonly monitoringPercentageCompletion?: number;
	readonly primaryDiskEncryptionSetId?: string;
	readonly primaryStagingAzureStorageAccountId?: string;
	readonly recoveryDiskEncryptionSetId?: string;
	readonly recoveryOrignalTargetDiskId?: string;
	readonly recoveryReplicaDiskAccountType?: string;
	readonly recoveryReplicaDiskId?: string;
	readonly recoveryResourceGroupId?: string;
	readonly recoveryTargetDiskAccountType?: string;
	readonly recoveryTargetDiskId?: string;
	readonly resyncRequired?: boolean;
	readonly secretIdentifier?: string;
	readonly tfoDiskName?: string;
}
export interface A2AProtectionIntentDiskInputDetails {
	readonly diskUri: string;
	readonly primaryStagingStorageAccountCustomInput?: StorageAccountCustomDetails;
	readonly recoveryAzureStorageAccountCustomInput?: StorageAccountCustomDetails;
}
export interface A2AProtectionIntentManagedDiskInputDetails {
	readonly diskEncryptionInfo?: DiskEncryptionInfo;
	readonly diskId: string;
	readonly primaryStagingStorageAccountCustomInput?: StorageAccountCustomDetails;
	readonly recoveryDiskEncryptionSetId?: string;
	readonly recoveryReplicaDiskAccountType?: string;
	readonly recoveryResourceGroupCustomInput?: RecoveryResourceGroupCustomDetails;
	readonly recoveryTargetDiskAccountType?: string;
}
export interface A2AUnprotectedDiskDetails {
	readonly diskAutoProtectionStatus?: "Disabled" | "Enabled";
	readonly diskLunId?: number;
}
export interface A2AVmDiskInputDetails {
	readonly diskUri: string;
	readonly primaryStagingAzureStorageAccountId: string;
	readonly recoveryAzureStorageAccountId: string;
}
export interface A2AVmManagedDiskInputDetails {
	readonly diskEncryptionInfo?: DiskEncryptionInfo;
	readonly diskId: string;
	readonly primaryStagingAzureStorageAccountId: string;
	readonly recoveryDiskEncryptionSetId?: string;
	readonly recoveryReplicaDiskAccountType?: string;
	readonly recoveryResourceGroupId: string;
	readonly recoveryTargetDiskAccountType?: string;
}
export interface A2AZoneDetails {
	readonly source?: string;
	readonly target?: string;
}
export interface AddRecoveryServicesProviderInputPropertiesOrRecoveryServicesProviderProperties {
	readonly allowedScenarios?: string[];
	readonly authenticationIdentityDetails?: IdentityProviderDetails;
	readonly authenticationIdentityInput: IdentityProviderInput;
	readonly biosId?: string;
	readonly connectionStatus?: string;
	readonly dataPlaneAuthenticationIdentityDetails?: IdentityProviderDetails;
	readonly dataPlaneAuthenticationIdentityInput?: IdentityProviderInput;
	readonly draIdentifier?: string;
	readonly fabricFriendlyName?: string;
	readonly fabricType?: string;
	readonly friendlyName?: string;
	readonly healthErrorDetails?: HealthError[];
	readonly lastHeartBeat?: string;
	readonly machineId?: string;
	readonly machineName: string;
	readonly protectedItemCount?: number;
	readonly providerVersion?: string;
	readonly providerVersionDetails?: VersionDetails;
	readonly providerVersionExpiryDate?: string;
	readonly providerVersionState?: string;
	readonly resourceAccessIdentityDetails?: IdentityProviderDetails;
	readonly resourceAccessIdentityInput: IdentityProviderInput;
	readonly serverVersion?: string;
}
export interface AddVCenterRequestPropertiesOrVCenterProperties {
	readonly discoveryStatus?: string;
	readonly fabricArmResourceName?: string;
	readonly friendlyName?: string;
	readonly healthErrors?: HealthError[];
	readonly infrastructureId?: string;
	readonly internalId?: string;
	readonly ipAddress?: string;
	readonly lastHeartbeat?: string;
	readonly port?: string;
	readonly processServerId?: string;
	readonly runAsAccountId?: string;
}
export interface AgentDetails {
	readonly agentId?: string;
	readonly biosId?: string;
	readonly disks?: AgentDiskDetails[];
	readonly fqdn?: string;
	readonly machineId?: string;
}
export interface AgentDiskDetails {
	readonly capacityInBytes?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly isOSDisk?: string;
	readonly lunId?: number;
}
export interface ASRTask {
	readonly allowedActions?: string[];
	readonly customDetails?: TaskTypeDetails;
	readonly endTime?: string;
	readonly errors?: JobErrorDetails[];
	readonly friendlyName?: string;
	readonly groupTaskCustomDetails?: GroupTaskDetails;
	readonly name?: string;
	readonly startTime?: string;
	readonly state?: string;
	readonly stateDescription?: string;
	readonly taskId?: string;
	readonly taskType?: string;
}
export interface AzureToAzureVmSyncedConfigDetails {
	readonly inputEndpoints?: InputEndpoint[];
	readonly tags?: AzureToAzureVmSyncedConfigDetailsTags;
}
export interface AzureToAzureVmSyncedConfigDetailsTags {
	readonly [key: string]: string;
}
export interface AzureVmDiskDetails {
	readonly customTargetDiskName?: string;
	readonly diskEncryptionSetId?: string;
	readonly diskId?: string;
	readonly lunId?: string;
	readonly maxSizeMB?: string;
	readonly targetDiskLocation?: string;
	readonly targetDiskName?: string;
	readonly vhdId?: string;
	readonly vhdName?: string;
	readonly vhdType?: string;
}
export interface ConfigurationSettings {}
export interface ConfigureAlertRequestPropertiesOrAlertProperties {
	readonly customEmailAddresses?: string[];
	readonly locale?: string;
	readonly sendToOwners?: string;
}
export interface CreateNetworkMappingInputPropertiesOrNetworkMappingProperties {
	readonly fabricSpecificDetails?: FabricSpecificCreateNetworkMappingInput;
	readonly fabricSpecificSettings?: NetworkMappingFabricSpecificSettings;
	readonly primaryFabricFriendlyName?: string;
	readonly primaryNetworkFriendlyName?: string;
	readonly primaryNetworkId?: string;
	readonly recoveryFabricArmId?: string;
	readonly recoveryFabricFriendlyName?: string;
	readonly recoveryFabricName?: string;
	readonly recoveryNetworkFriendlyName?: string;
	readonly recoveryNetworkId: string;
	readonly state?: string;
}
export interface CreatePolicyInputPropertiesOrPolicyProperties {
	readonly friendlyName?: string;
	readonly providerSpecificDetails?: PolicyProviderSpecificDetails;
	readonly providerSpecificInput?: PolicyProviderSpecificInput;
}
export interface CreateProtectionContainerInputPropertiesOrProtectionContainerProperties {
	readonly fabricFriendlyName?: string;
	readonly fabricSpecificDetails?: ProtectionContainerFabricSpecificDetails;
	readonly fabricType?: string;
	readonly friendlyName?: string;
	readonly pairingStatus?: string;
	readonly protectedItemCount?: number;
	readonly providerSpecificInput?: ReplicationProviderSpecificContainerCreationInput[];
	readonly role?: string;
}
export interface CreateProtectionContainerMappingInputPropertiesOrProtectionContainerMappingProperties {
	readonly health?: string;
	readonly healthErrorDetails?: HealthError[];
	readonly policyFriendlyName?: string;
	readonly policyId?: string;
	readonly providerSpecificDetails?: ProtectionContainerMappingProviderSpecificDetails;
	readonly providerSpecificInput?: ReplicationProviderSpecificContainerMappingInput;
	readonly sourceFabricFriendlyName?: string;
	readonly sourceProtectionContainerFriendlyName?: string;
	readonly state?: string;
	readonly targetFabricFriendlyName?: string;
	readonly targetProtectionContainerFriendlyName?: string;
	readonly targetProtectionContainerId?: string;
}
export interface CreateProtectionIntentPropertiesOrReplicationProtectionIntentProperties {
	readonly creationTimeUTC?: string;
	readonly friendlyName?: string;
	readonly isActive?: boolean;
	readonly jobId?: string;
	readonly jobState?: string;
	readonly providerSpecificDetails?: CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings;
}
export interface CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings {}
export interface CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties {
	readonly allowedOperations?: string[];
	readonly currentScenario?: CurrentScenarioDetails;
	readonly currentScenarioStatus?: string;
	readonly currentScenarioStatusDescription?: string;
	readonly failoverDeploymentModel?: "Classic" | "NotApplicable" | "ResourceManager";
	readonly friendlyName?: string;
	readonly groups: RecoveryPlanGroup[];
	readonly lastPlannedFailoverTime?: string;
	readonly lastTestFailoverTime?: string;
	readonly lastUnplannedFailoverTime?: string;
	readonly primaryFabricFriendlyName?: string;
	readonly primaryFabricId: string;
	readonly providerSpecificDetails?: RecoveryPlanProviderSpecificDetails[];
	readonly providerSpecificInput?: RecoveryPlanProviderSpecificInput[];
	readonly recoveryFabricFriendlyName?: string;
	readonly recoveryFabricId: string;
	readonly replicationProviders?: string[];
}
export interface CurrentJobDetails {
	readonly jobId?: string;
	readonly jobName?: string;
	readonly startTime?: string;
}
export interface CurrentScenarioDetails {
	readonly jobId?: string;
	readonly scenarioName?: string;
	readonly startTime?: string;
}
export interface DataStore {
	readonly capacity?: string;
	readonly freeSpace?: string;
	readonly symbolicName?: string;
	readonly type?: string;
	readonly uuid?: string;
}
export interface DiskDetails {
	readonly maxSizeMB?: number;
	readonly vhdId?: string;
	readonly vhdName?: string;
	readonly vhdType?: string;
}
export interface DiskEncryptionInfo {
	readonly diskEncryptionKeyInfo?: DiskEncryptionKeyInfo;
	readonly keyEncryptionKeyInfo?: KeyEncryptionKeyInfo;
}
export interface DiskEncryptionKeyInfo {
	readonly keyVaultResourceArmId?: string;
	readonly secretIdentifier?: string;
}
export interface DiskVolumeDetails {
	readonly label?: string;
	readonly name?: string;
}
export interface DraDetails {
	readonly biosId?: string;
	readonly forwardProtectedItemCount?: number;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly id?: string;
	readonly lastHeartbeatUtc?: string;
	readonly name?: string;
	readonly reverseProtectedItemCount?: number;
	readonly version?: string;
}
export interface EnableMigrationInputPropertiesOrMigrationItemProperties {
	readonly allowedOperations?: "DisableMigration" | "Migrate" | "StartResync" | "TestMigrate" | "TestMigrateCleanup"[];
	readonly currentJob?: CurrentJobDetails;
	readonly eventCorrelationId?: string;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly lastTestMigrationStatus?: string;
	readonly lastTestMigrationTime?: string;
	readonly machineName?: string;
	readonly migrationState?:
		| "DisableMigrationFailed"
		| "DisableMigrationInProgress"
		| "EnableMigrationFailed"
		| "EnableMigrationInProgress"
		| "InitialSeedingFailed"
		| "InitialSeedingInProgress"
		| "MigrationFailed"
		| "MigrationInProgress"
		| "MigrationSucceeded"
		| "None"
		| "Replicating";
	readonly migrationStateDescription?: string;
	readonly policyFriendlyName?: string;
	readonly policyId: string;
	readonly providerSpecificDetails: EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings;
	readonly testMigrateState?:
		| "None"
		| "TestMigrationCleanupInProgress"
		| "TestMigrationFailed"
		| "TestMigrationInProgress"
		| "TestMigrationSucceeded";
	readonly testMigrateStateDescription?: string;
}
export interface EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings {}
export interface EnableProtectionInputPropertiesOrReplicationProtectedItemProperties {
	readonly activeLocation?: string;
	readonly allowedOperations?: string[];
	readonly currentScenario?: CurrentScenarioDetails;
	readonly eventCorrelationId?: string;
	readonly failoverHealth?: string;
	readonly failoverRecoveryPointId?: string;
	readonly friendlyName?: string;
	readonly healthErrors?: HealthError[];
	readonly lastSuccessfulFailoverTime?: string;
	readonly lastSuccessfulTestFailoverTime?: string;
	readonly policyFriendlyName?: string;
	readonly policyId?: string;
	readonly primaryFabricFriendlyName?: string;
	readonly primaryFabricProvider?: string;
	readonly primaryProtectionContainerFriendlyName?: string;
	readonly protectableItemId?: string;
	readonly protectedItemType?: string;
	readonly protectionState?: string;
	readonly protectionStateDescription?: string;
	readonly providerSpecificDetails?: EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings;
	readonly recoveryContainerId?: string;
	readonly recoveryFabricFriendlyName?: string;
	readonly recoveryFabricId?: string;
	readonly recoveryProtectionContainerFriendlyName?: string;
	readonly recoveryServicesProviderId?: string;
	readonly replicationHealth?: string;
	readonly switchProviderState?: string;
	readonly switchProviderStateDescription?: string;
	readonly testFailoverState?: string;
	readonly testFailoverStateDescription?: string;
}
export interface EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings {}
export interface EncryptionDetails {
	readonly kekCertExpiryDate?: string;
	readonly kekCertThumbprint?: string;
	readonly kekState?: string;
}
export interface EventProperties {
	readonly affectedObjectCorrelationId?: string;
	readonly affectedObjectFriendlyName?: string;
	readonly description?: string;
	readonly eventCode?: string;
	readonly eventSpecificDetails?: EventSpecificDetails;
	readonly eventType?: string;
	readonly fabricId?: string;
	readonly healthErrors?: HealthError[];
	readonly providerSpecificDetails?: EventProviderSpecificDetails;
	readonly severity?: string;
	readonly timeOfOccurrence?: string;
}
export interface EventProviderSpecificDetails {}
export interface EventSpecificDetails {}
export interface ExtendedLocation {
	readonly name: string;
	readonly type: "EdgeZone";
}
export interface FabricCreationInputPropertiesOrFabricProperties {
	readonly bcdrState?: string;
	readonly customDetails?: FabricSpecificCreationInputOrFabricSpecificDetails;
	readonly encryptionDetails?: EncryptionDetails;
	readonly friendlyName?: string;
	readonly health?: string;
	readonly healthErrorDetails?: HealthError[];
	readonly internalIdentifier?: string;
	readonly rolloverEncryptionDetails?: EncryptionDetails;
}
export interface FabricSpecificCreateNetworkMappingInput {}
export interface FabricSpecificCreationInputOrFabricSpecificDetails {}
export interface FailoverReplicationProtectedItemDetails {
	readonly friendlyName?: string;
	readonly name?: string;
	readonly networkConnectionStatus?: string;
	readonly networkFriendlyName?: string;
	readonly recoveryPointId?: string;
	readonly recoveryPointTime?: string;
	readonly subnet?: string;
	readonly testVmFriendlyName?: string;
	readonly testVmName?: string;
}
export interface GroupTaskDetails {
	readonly childTasks?: ASRTask[];
}
export interface HealthError {
	readonly creationTimeUtc?: string;
	readonly customerResolvability?: "Allowed" | "NotAllowed";
	readonly entityId?: string;
	readonly errorCategory?: string;
	readonly errorCode?: string;
	readonly errorId?: string;
	readonly errorLevel?: string;
	readonly errorMessage?: string;
	readonly errorSource?: string;
	readonly errorType?: string;
	readonly innerHealthErrors?: InnerHealthError[];
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
	readonly recoveryProviderErrorMessage?: string;
	readonly summaryMessage?: string;
}
export interface HyperVHostDetails {
	readonly id?: string;
	readonly marsAgentVersion?: string;
	readonly name?: string;
}
export interface HyperVReplicaAzureDiskInputDetails {
	readonly diskEncryptionSetId?: string;
	readonly diskId?: string;
	readonly diskType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly logStorageAccountId?: string;
}
export interface HyperVReplicaAzureEnableProtectionInputSeedManagedDiskTags {
	readonly [key: string]: string;
}
export interface HyperVReplicaAzureEnableProtectionInputTargetManagedDiskTags {
	readonly [key: string]: string;
}
export interface HyperVReplicaAzureEnableProtectionInputTargetNicTags {
	readonly [key: string]: string;
}
export interface HyperVReplicaAzureEnableProtectionInputTargetVmTags {
	readonly [key: string]: string;
}
export interface HyperVReplicaAzureManagedDiskDetails {
	readonly diskEncryptionSetId?: string;
	readonly diskId?: string;
	readonly replicaDiskType?: string;
	readonly seedManagedDiskId?: string;
}
export interface IdentityProviderDetails {
	readonly aadAuthority?: string;
	readonly applicationId?: string;
	readonly audience?: string;
	readonly objectId?: string;
	readonly tenantId?: string;
}
export interface IdentityProviderInput {
	readonly aadAuthority: string;
	readonly applicationId: string;
	readonly audience: string;
	readonly objectId: string;
	readonly tenantId: string;
}
export interface InconsistentVmDetails {
	readonly cloudName?: string;
	readonly details?: string[];
	readonly errorIds?: string[];
	readonly vmName?: string;
}
export interface InitialReplicationDetails {
	readonly initialReplicationProgressPercentage?: string;
	readonly initialReplicationType?: string;
}
export interface InMageAgentDetails {
	readonly agentExpiryDate?: string;
	readonly agentUpdateStatus?: string;
	readonly agentVersion?: string;
	readonly postUpdateRebootStatus?: string;
}
export interface InMageAzureV2DiskInputDetails {
	readonly diskEncryptionSetId?: string;
	readonly diskId?: string;
	readonly diskType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly logStorageAccountId?: string;
}
export interface InMageAzureV2EnableProtectionInputSeedManagedDiskTags {
	readonly [key: string]: string;
}
export interface InMageAzureV2EnableProtectionInputTargetManagedDiskTags {
	readonly [key: string]: string;
}
export interface InMageAzureV2EnableProtectionInputTargetNicTags {
	readonly [key: string]: string;
}
export interface InMageAzureV2EnableProtectionInputTargetVmTags {
	readonly [key: string]: string;
}
export interface InMageAzureV2ManagedDiskDetails {
	readonly diskEncryptionSetId?: string;
	readonly diskId?: string;
	readonly replicaDiskType?: string;
	readonly seedManagedDiskId?: string;
	readonly targetDiskName?: string;
}
export interface InMageAzureV2ProtectedDiskDetails {
	readonly diskCapacityInBytes?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskResized?: string;
	readonly fileSystemCapacityInBytes?: number;
	readonly healthErrorCode?: string;
	readonly lastRpoCalculatedTime?: string;
	readonly progressHealth?: string;
	readonly progressStatus?: string;
	readonly protectionStage?: string;
	readonly psDataInMegaBytes?: number;
	readonly resyncDurationInSeconds?: number;
	readonly resyncLast15MinutesTransferredBytes?: number;
	readonly resyncLastDataTransferTimeUTC?: string;
	readonly resyncProcessedBytes?: number;
	readonly resyncProgressPercentage?: number;
	readonly resyncRequired?: string;
	readonly resyncStartTime?: string;
	readonly resyncTotalTransferredBytes?: number;
	readonly rpoInSeconds?: number;
	readonly secondsToTakeSwitchProvider?: number;
	readonly sourceDataInMegaBytes?: number;
	readonly targetDataInMegaBytes?: number;
}
export interface InMageAzureV2SwitchProviderBlockingErrorDetails {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly errorMessageParameters?: InMageAzureV2SwitchProviderBlockingErrorDetailsErrorMessageParameters;
	readonly errorTags?: InMageAzureV2SwitchProviderBlockingErrorDetailsErrorTags;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
}
export interface InMageAzureV2SwitchProviderBlockingErrorDetailsErrorMessageParameters {
	readonly [key: string]: string;
}
export interface InMageAzureV2SwitchProviderBlockingErrorDetailsErrorTags {
	readonly [key: string]: string;
}
export interface InMageAzureV2SwitchProviderDetails {
	readonly targetApplianceId?: string;
	readonly targetFabricId?: string;
	readonly targetResourceId?: string;
	readonly targetVaultId?: string;
}
export interface InMageDiskDetails {
	readonly diskConfiguration?: string;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskSizeInMB?: string;
	readonly diskType?: string;
	readonly volumeList?: DiskVolumeDetails[];
}
export interface InMageDiskExclusionInput {
	readonly diskSignatureOptions?: InMageDiskSignatureExclusionOptions[];
	readonly volumeOptions?: InMageVolumeExclusionOptions[];
}
export interface InMageDiskSignatureExclusionOptions {
	readonly diskSignature?: string;
}
export interface InMageFabricSwitchProviderBlockingErrorDetails {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly errorMessageParameters?: InMageFabricSwitchProviderBlockingErrorDetailsErrorMessageParameters;
	readonly errorTags?: InMageFabricSwitchProviderBlockingErrorDetailsErrorTags;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
}
export interface InMageFabricSwitchProviderBlockingErrorDetailsErrorMessageParameters {
	readonly [key: string]: string;
}
export interface InMageFabricSwitchProviderBlockingErrorDetailsErrorTags {
	readonly [key: string]: string;
}
export interface InMageProtectedDiskDetails {
	readonly diskCapacityInBytes?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskResized?: string;
	readonly fileSystemCapacityInBytes?: number;
	readonly healthErrorCode?: string;
	readonly lastRpoCalculatedTime?: string;
	readonly progressHealth?: string;
	readonly progressStatus?: string;
	readonly protectionStage?: string;
	readonly psDataInMB?: number;
	readonly resyncDurationInSeconds?: number;
	readonly resyncLast15MinutesTransferredBytes?: number;
	readonly resyncLastDataTransferTimeUTC?: string;
	readonly resyncProcessedBytes?: number;
	readonly resyncProgressPercentage?: number;
	readonly resyncRequired?: string;
	readonly resyncStartTime?: string;
	readonly resyncTotalTransferredBytes?: number;
	readonly rpoInSeconds?: number;
	readonly sourceDataInMB?: number;
	readonly targetDataInMB?: number;
}
export interface InMageRcmAgentUpgradeBlockingErrorDetails {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly errorMessageParameters?: InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters;
	readonly errorTags?: InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
}
export interface InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters {
	readonly [key: string]: string;
}
export interface InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags {
	readonly [key: string]: string;
}
export interface InMageRcmDiscoveredProtectedVmDetails {
	readonly createdTimestamp?: string;
	readonly datastores?: string[];
	readonly ipAddresses?: string[];
	readonly isDeleted?: boolean;
	readonly lastDiscoveryTimeInUtc?: string;
	readonly osName?: string;
	readonly powerStatus?: string;
	readonly updatedTimestamp?: string;
	readonly vCenterFqdn?: string;
	readonly vCenterId?: string;
	readonly vmFqdn?: string;
	readonly vmwareToolsStatus?: string;
}
export interface InMageRcmDiskInput {
	readonly diskEncryptionSetId?: string;
	readonly diskId: string;
	readonly diskType: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly logStorageAccountId: string;
}
export interface InMageRcmDisksDefaultInput {
	readonly diskEncryptionSetId?: string;
	readonly diskType: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly logStorageAccountId: string;
}
export interface InMageRcmFailbackDiscoveredProtectedVmDetails {
	readonly createdTimestamp?: string;
	readonly datastores?: string[];
	readonly ipAddresses?: string[];
	readonly isDeleted?: boolean;
	readonly lastDiscoveryTimeInUtc?: string;
	readonly osName?: string;
	readonly powerStatus?: string;
	readonly updatedTimestamp?: string;
	readonly vCenterFqdn?: string;
	readonly vCenterId?: string;
	readonly vmFqdn?: string;
	readonly vmwareToolsStatus?: string;
}
export interface InMageRcmFailbackMobilityAgentDetails {
	readonly agentVersionExpiryDate?: string;
	readonly driverVersion?: string;
	readonly driverVersionExpiryDate?: string;
	readonly isUpgradeable?: string;
	readonly lastHeartbeatUtc?: string;
	readonly latestUpgradableVersionWithoutReboot?: string;
	readonly latestVersion?: string;
	readonly reasonsBlockingUpgrade?:
		| "AgentNoHeartbeat"
		| "AlreadyOnLatestVersion"
		| "DistroIsNotReported"
		| "DistroNotSupportedForUpgrade"
		| "IncompatibleApplianceVersion"
		| "InvalidAgentVersion"
		| "InvalidDriverVersion"
		| "MissingUpgradePath"
		| "NotProtected"
		| "ProcessServerNoHeartbeat"
		| "RcmProxyNoHeartbeat"
		| "RebootRequired"
		| "Unknown"
		| "UnsupportedProtectionScenario"[];
	readonly version?: string;
}
export interface InMageRcmFailbackNicDetails {
	readonly adapterType?: string;
	readonly macAddress?: string;
	readonly networkName?: string;
	readonly sourceIpAddress?: string;
}
export interface InMageRcmFailbackProtectedDiskDetails {
	readonly capacityInBytes?: number;
	readonly dataPendingAtSourceAgentInMB?: number;
	readonly dataPendingInLogDataStoreInMB?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskUuid?: string;
	readonly irDetails?: InMageRcmFailbackSyncDetails;
	readonly isInitialReplicationComplete?: string;
	readonly isOSDisk?: string;
	readonly lastSyncTime?: string;
	readonly resyncDetails?: InMageRcmFailbackSyncDetails;
}
export interface InMageRcmFailbackSyncDetails {
	readonly last15MinutesTransferredBytes?: number;
	readonly lastDataTransferTimeUtc?: string;
	readonly lastRefreshTime?: string;
	readonly processedBytes?: number;
	readonly progressHealth?: "InProgress" | "NoProgress" | "None" | "Queued" | "SlowProgress";
	readonly progressPercentage?: number;
	readonly startTime?: string;
	readonly transferredBytes?: number;
}
export interface InMageRcmLastAgentUpgradeErrorDetails {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly errorMessageParameters?: InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters;
	readonly errorTags?: InMageRcmLastAgentUpgradeErrorDetailsErrorTags;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
}
export interface InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters {
	readonly [key: string]: string;
}
export interface InMageRcmLastAgentUpgradeErrorDetailsErrorTags {
	readonly [key: string]: string;
}
export interface InMageRcmMobilityAgentDetails {
	readonly agentVersionExpiryDate?: string;
	readonly driverVersion?: string;
	readonly driverVersionExpiryDate?: string;
	readonly isUpgradeable?: string;
	readonly lastHeartbeatUtc?: string;
	readonly latestAgentReleaseDate?: string;
	readonly latestUpgradableVersionWithoutReboot?: string;
	readonly latestVersion?: string;
	readonly reasonsBlockingUpgrade?:
		| "AgentNoHeartbeat"
		| "AlreadyOnLatestVersion"
		| "DistroIsNotReported"
		| "DistroNotSupportedForUpgrade"
		| "IncompatibleApplianceVersion"
		| "InvalidAgentVersion"
		| "InvalidDriverVersion"
		| "MissingUpgradePath"
		| "NotProtected"
		| "ProcessServerNoHeartbeat"
		| "RcmProxyNoHeartbeat"
		| "RebootRequired"
		| "Unknown"
		| "UnsupportedProtectionScenario"[];
	readonly version?: string;
}
export interface InMageRcmNicDetails {
	readonly isPrimaryNic?: string;
	readonly isSelectedForFailover?: string;
	readonly nicId?: string;
	readonly sourceIPAddress?: string;
	readonly sourceIPAddressType?: "Dynamic" | "Static";
	readonly sourceNetworkId?: string;
	readonly sourceSubnetName?: string;
	readonly targetIPAddress?: string;
	readonly targetIPAddressType?: "Dynamic" | "Static";
	readonly targetSubnetName?: string;
	readonly testIPAddress?: string;
	readonly testIPAddressType?: "Dynamic" | "Static";
	readonly testSubnetName?: string;
}
export interface InMageRcmProtectedDiskDetails {
	readonly capacityInBytes?: number;
	readonly dataPendingAtSourceAgentInMB?: number;
	readonly dataPendingInLogDataStoreInMB?: number;
	readonly diskEncryptionSetId?: string;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly irDetails?: InMageRcmSyncDetails;
	readonly isInitialReplicationComplete?: string;
	readonly isOSDisk?: string;
	readonly logStorageAccountId?: string;
	readonly resyncDetails?: InMageRcmSyncDetails;
	readonly seedManagedDiskId?: string;
	readonly targetManagedDiskId?: string;
}
export interface InMageRcmSyncDetails {
	readonly last15MinutesTransferredBytes?: number;
	readonly lastDataTransferTimeUtc?: string;
	readonly lastRefreshTime?: string;
	readonly processedBytes?: number;
	readonly progressHealth?: "InProgress" | "NoProgress" | "None" | "Queued" | "SlowProgress";
	readonly progressPercentage?: number;
	readonly startTime?: string;
	readonly transferredBytes?: number;
}
export interface InMageReplicationDetailsConsistencyPoints {
	readonly [key: string]: string;
}
export interface InMageVolumeExclusionOptions {
	readonly onlyExcludeIfSingleVolume?: string;
	readonly volumeLabel?: string;
}
export interface InnerHealthError {
	readonly creationTimeUtc?: string;
	readonly customerResolvability?: "Allowed" | "NotAllowed";
	readonly entityId?: string;
	readonly errorCategory?: string;
	readonly errorCode?: string;
	readonly errorId?: string;
	readonly errorLevel?: string;
	readonly errorMessage?: string;
	readonly errorSource?: string;
	readonly errorType?: string;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
	readonly recoveryProviderErrorMessage?: string;
	readonly summaryMessage?: string;
}
export interface InputEndpoint {
	readonly endpointName?: string;
	readonly privatePort?: number;
	readonly protocol?: string;
	readonly publicPort?: number;
}
export interface IPConfigDetails {
	readonly ipAddressType?: string;
	readonly isPrimary?: boolean;
	readonly isSeletedForFailover?: boolean;
	readonly name?: string;
	readonly recoveryIPAddressType?: string;
	readonly recoveryLBBackendAddressPoolIds?: string[];
	readonly recoveryPublicIPAddressId?: string;
	readonly recoveryStaticIPAddress?: string;
	readonly recoverySubnetName?: string;
	readonly staticIPAddress?: string;
	readonly subnetName?: string;
	readonly tfoLBBackendAddressPoolIds?: string[];
	readonly tfoPublicIPAddressId?: string;
	readonly tfoStaticIPAddress?: string;
	readonly tfoSubnetName?: string;
}
export interface JobDetails {
	readonly affectedObjectDetails?: JobDetailsAffectedObjectDetails;
}
export interface JobDetailsAffectedObjectDetails {
	readonly [key: string]: string;
}
export interface JobEntity {
	readonly jobFriendlyName?: string;
	readonly jobId?: string;
	readonly jobScenarioName?: string;
	readonly targetInstanceType?: string;
	readonly targetObjectId?: string;
	readonly targetObjectName?: string;
}
export interface JobErrorDetails {
	readonly creationTime?: string;
	readonly errorLevel?: string;
	readonly providerErrorDetails?: ProviderError;
	readonly serviceErrorDetails?: ServiceError;
	readonly taskId?: string;
}
export interface JobProperties {
	readonly activityId?: string;
	readonly allowedActions?: string[];
	readonly customDetails?: JobDetails;
	readonly endTime?: string;
	readonly errors?: JobErrorDetails[];
	readonly friendlyName?: string;
	readonly scenarioName?: string;
	readonly startTime?: string;
	readonly state?: string;
	readonly stateDescription?: string;
	readonly targetInstanceType?: string;
	readonly targetObjectId?: string;
	readonly targetObjectName?: string;
	readonly tasks?: ASRTask[];
}
export interface KeyEncryptionKeyInfo {
	readonly keyIdentifier?: string;
	readonly keyVaultResourceArmId?: string;
}
export interface LogicalNetworkProperties {
	readonly friendlyName?: string;
	readonly logicalNetworkDefinitionsStatus?: string;
	readonly logicalNetworkUsage?: string;
	readonly networkVirtualizationStatus?: string;
}
export interface MarsAgentDetails {
	readonly biosId?: string;
	readonly fabricObjectId?: string;
	readonly fqdn?: string;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly id?: string;
	readonly lastHeartbeatUtc?: string;
	readonly name?: string;
	readonly version?: string;
}
export interface MasterTargetServer {
	readonly agentExpiryDate?: string;
	readonly agentVersion?: string;
	readonly agentVersionDetails?: VersionDetails;
	readonly dataStores?: DataStore[];
	readonly diskCount?: number;
	readonly healthErrors?: HealthError[];
	readonly id?: string;
	readonly ipAddress?: string;
	readonly lastHeartbeat?: string;
	readonly marsAgentExpiryDate?: string;
	readonly marsAgentVersion?: string;
	readonly marsAgentVersionDetails?: VersionDetails;
	readonly name?: string;
	readonly osType?: string;
	readonly osVersion?: string;
	readonly retentionVolumes?: RetentionVolume[];
	readonly validationErrors?: HealthError[];
	readonly versionStatus?: string;
}
export interface MigrationRecoveryPointProperties {
	readonly recoveryPointTime?: string;
	readonly recoveryPointType?: "ApplicationConsistent" | "CrashConsistent" | "NotSpecified";
}
export interface MobilityServiceUpdate {
	readonly osType?: string;
	readonly rebootStatus?: string;
	readonly version?: string;
}
export interface NetworkMappingFabricSpecificSettings {}
export interface NetworkProperties {
	readonly fabricType?: string;
	readonly friendlyName?: string;
	readonly networkType?: string;
	readonly subnets?: Subnet[];
}
export interface OSDetails {
	readonly osEdition?: string;
	readonly oSMajorVersion?: string;
	readonly oSMinorVersion?: string;
	readonly osType?: string;
	readonly oSVersion?: string;
	readonly productType?: string;
}
export interface OSDiskDetails {
	readonly osType?: string;
	readonly osVhdId?: string;
	readonly vhdName?: string;
}
export interface PolicyProviderSpecificDetails {}
export interface PolicyProviderSpecificInput {}
export interface ProcessServer {
	readonly agentExpiryDate?: string;
	readonly agentVersion?: string;
	readonly agentVersionDetails?: VersionDetails;
	readonly availableMemoryInBytes?: number;
	readonly availableSpaceInBytes?: number;
	readonly cpuLoad?: string;
	readonly cpuLoadStatus?: string;
	readonly friendlyName?: string;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly hostId?: string;
	readonly id?: string;
	readonly ipAddress?: string;
	readonly lastHeartbeat?: string;
	readonly machineCount?: string;
	readonly marsCommunicationStatus?: string;
	readonly marsRegistrationStatus?: string;
	readonly memoryUsageStatus?: string;
	readonly mobilityServiceUpdates?: MobilityServiceUpdate[];
	readonly osType?: string;
	readonly osVersion?: string;
	readonly psServiceStatus?: string;
	readonly psStatsRefreshTime?: string;
	readonly replicationPairCount?: string;
	readonly spaceUsageStatus?: string;
	readonly sslCertExpiryDate?: string;
	readonly sslCertExpiryRemainingDays?: number;
	readonly systemLoad?: string;
	readonly systemLoadStatus?: string;
	readonly throughputInBytes?: number;
	readonly throughputInMBps?: number;
	readonly throughputStatus?: string;
	readonly throughputUploadPendingDataInBytes?: number;
	readonly totalMemoryInBytes?: number;
	readonly totalSpaceInBytes?: number;
	readonly versionStatus?: string;
}
export interface ProcessServerDetails {
	readonly availableMemoryInBytes?: number;
	readonly availableSpaceInBytes?: number;
	readonly biosId?: string;
	readonly diskUsageStatus?: "Critical" | "Healthy" | "Unknown" | "Warning";
	readonly fabricObjectId?: string;
	readonly fqdn?: string;
	readonly freeSpacePercentage?: number;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly historicHealth?: "Critical" | "None" | "Normal" | "Warning";
	readonly id?: string;
	readonly ipAddresses?: string[];
	readonly lastHeartbeatUtc?: string;
	readonly memoryUsagePercentage?: number;
	readonly memoryUsageStatus?: "Critical" | "Healthy" | "Unknown" | "Warning";
	readonly name?: string;
	readonly processorUsagePercentage?: number;
	readonly processorUsageStatus?: "Critical" | "Healthy" | "Unknown" | "Warning";
	readonly protectedItemCount?: number;
	readonly systemLoad?: number;
	readonly systemLoadStatus?: "Critical" | "Healthy" | "Unknown" | "Warning";
	readonly throughputInBytes?: number;
	readonly throughputStatus?: "Critical" | "Healthy" | "Unknown" | "Warning";
	readonly throughputUploadPendingDataInBytes?: number;
	readonly totalMemoryInBytes?: number;
	readonly totalSpaceInBytes?: number;
	readonly usedMemoryInBytes?: number;
	readonly usedSpaceInBytes?: number;
	readonly version?: string;
}
export interface ProtectableItemProperties {
	readonly customDetails?: ConfigurationSettings;
	readonly friendlyName?: string;
	readonly protectionReadinessErrors?: string[];
	readonly protectionStatus?: string;
	readonly recoveryServicesProviderId?: string;
	readonly replicationProtectedItemId?: string;
	readonly supportedReplicationProviders?: string[];
}
export interface ProtectionContainerFabricSpecificDetails {
	readonly instanceType?: string;
}
export interface ProtectionContainerMappingProviderSpecificDetails {}
export interface ProtectionProfileCustomDetails {}
export interface ProviderError {
	readonly errorCode?: number;
	readonly errorId?: string;
	readonly errorMessage?: string;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
}
export interface ProviderSpecificRecoveryPointDetails {}
export interface PushInstallerDetails {
	readonly biosId?: string;
	readonly fabricObjectId?: string;
	readonly fqdn?: string;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly id?: string;
	readonly lastHeartbeatUtc?: string;
	readonly name?: string;
	readonly version?: string;
}
export interface RcmProxyDetails {
	readonly biosId?: string;
	readonly clientAuthenticationType?: string;
	readonly fabricObjectId?: string;
	readonly fqdn?: string;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly id?: string;
	readonly lastHeartbeatUtc?: string;
	readonly name?: string;
	readonly version?: string;
}
export interface RecoveryAvailabilitySetCustomDetails {}
export interface RecoveryPlanAction {
	readonly actionName: string;
	readonly customDetails: RecoveryPlanActionDetails;
	readonly failoverDirections: "PrimaryToRecovery" | "RecoveryToPrimary"[];
	readonly failoverTypes:
		| "CancelFailover"
		| "ChangePit"
		| "Commit"
		| "CompleteMigration"
		| "DisableProtection"
		| "Failback"
		| "FinalizeFailback"
		| "PlannedFailover"
		| "RepairReplication"
		| "ReverseReplicate"
		| "SwitchProtection"
		| "TestFailover"
		| "TestFailoverCleanup"
		| "UnplannedFailover"[];
}
export interface RecoveryPlanActionDetails {}
export interface RecoveryPlanGroup {
	readonly endGroupActions?: RecoveryPlanAction[];
	readonly groupType: "Boot" | "Failover" | "Shutdown";
	readonly replicationProtectedItems?: RecoveryPlanProtectedItem[];
	readonly startGroupActions?: RecoveryPlanAction[];
}
export interface RecoveryPlanProtectedItem {
	readonly id?: string;
	readonly virtualMachineId?: string;
}
export interface RecoveryPlanProviderSpecificDetails {}
export interface RecoveryPlanProviderSpecificInput {}
export interface RecoveryPointProperties {
	readonly providerSpecificDetails?: ProviderSpecificRecoveryPointDetails;
	readonly recoveryPointTime?: string;
	readonly recoveryPointType?: string;
}
export interface RecoveryProximityPlacementGroupCustomDetails {}
export interface RecoveryResourceGroupCustomDetails {}
export interface RecoveryVirtualNetworkCustomDetails {}
export interface ReplicationAgentDetails {
	readonly biosId?: string;
	readonly fabricObjectId?: string;
	readonly fqdn?: string;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly id?: string;
	readonly lastHeartbeatUtc?: string;
	readonly name?: string;
	readonly version?: string;
}
export interface ReplicationProviderSpecificContainerCreationInput {}
export interface ReplicationProviderSpecificContainerMappingInput {}
export interface ReprotectAgentDetails {
	readonly accessibleDatastores?: string[];
	readonly biosId?: string;
	readonly fabricObjectId?: string;
	readonly fqdn?: string;
	readonly health?: "Critical" | "None" | "Normal" | "Warning";
	readonly healthErrors?: HealthError[];
	readonly id?: string;
	readonly lastDiscoveryInUtc?: string;
	readonly lastHeartbeatUtc?: string;
	readonly name?: string;
	readonly protectedItemCount?: number;
	readonly vcenterId?: string;
	readonly version?: string;
}
export interface RetentionVolume {
	readonly capacityInBytes?: number;
	readonly freeSpaceInBytes?: number;
	readonly thresholdPercentage?: number;
	readonly volumeName?: string;
}
export interface RunAsAccount {
	readonly accountId?: string;
	readonly accountName?: string;
}
export interface ServiceError {
	readonly activityId?: string;
	readonly code?: string;
	readonly message?: string;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
}
export interface StorageAccountCustomDetails {}
export interface StorageClassificationProperties {
	readonly friendlyName?: string;
}
export interface StorageMappingInputPropertiesOrStorageClassificationMappingProperties {
	readonly targetStorageClassificationId?: string;
}
export interface Subnet {
	readonly addressList?: string[];
	readonly friendlyName?: string;
	readonly name?: string;
}
export interface TaskTypeDetails {}
export interface VaultSettingCreationInputPropertiesOrVaultSettingProperties {
	readonly migrationSolutionId?: string;
	readonly vmwareToAzureProviderType?: string;
}
export interface VersionDetails {
	readonly expiryDate?: string;
	readonly status?: "Deprecated" | "NotSupported" | "SecurityUpdateRequired" | "Supported" | "UpdateRequired";
	readonly version?: string;
}
export interface VMNicDetails {
	readonly enableAcceleratedNetworkingOnRecovery?: boolean;
	readonly enableAcceleratedNetworkingOnTfo?: boolean;
	readonly ipConfigs?: IPConfigDetails[];
	readonly nicId?: string;
	readonly recoveryNetworkSecurityGroupId?: string;
	readonly recoveryNicName?: string;
	readonly recoveryNicResourceGroupName?: string;
	readonly recoveryVMNetworkId?: string;
	readonly replicaNicId?: string;
	readonly reuseExistingNic?: boolean;
	readonly selectionType?: string;
	readonly sourceNicArmId?: string;
	readonly targetNicName?: string;
	readonly tfoNetworkSecurityGroupId?: string;
	readonly tfoRecoveryNicName?: string;
	readonly tfoRecoveryNicResourceGroupName?: string;
	readonly tfoReuseExistingNic?: boolean;
	readonly tfoVMNetworkId?: string;
	readonly vMNetworkName?: string;
}
export interface VMwareCbtDiskInput {
	readonly diskEncryptionSetId?: string;
	readonly diskId: string;
	readonly diskType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly isOSDisk: string;
	readonly logStorageAccountId: string;
	readonly logStorageAccountSasSecretName: string;
}
export interface VMwareCbtEnableMigrationInputSeedDiskTags {
	readonly [key: string]: string;
}
export interface VMwareCbtEnableMigrationInputTargetDiskTags {
	readonly [key: string]: string;
}
export interface VMwareCbtEnableMigrationInputTargetNicTags {
	readonly [key: string]: string;
}
export interface VMwareCbtEnableMigrationInputTargetVmTags {
	readonly [key: string]: string;
}
export interface VMwareCbtNicDetails {
	readonly isPrimaryNic?: string;
	readonly isSelectedForMigration?: string;
	readonly nicId?: string;
	readonly sourceIPAddress?: string;
	readonly sourceIPAddressType?: "Dynamic" | "Static";
	readonly sourceNetworkId?: string;
	readonly targetIPAddress?: string;
	readonly targetIPAddressType?: "Dynamic" | "Static";
	readonly targetNicName?: string;
	readonly targetSubnetName?: string;
}
export interface VMwareCbtProtectedDiskDetails {
	readonly capacityInBytes?: number;
	readonly diskEncryptionSetId?: string;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskPath?: string;
	readonly diskType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly isOSDisk?: string;
	readonly logStorageAccountId?: string;
	readonly logStorageAccountSasSecretName?: string;
	readonly seedManagedDiskId?: string;
	readonly targetDiskName?: string;
	readonly targetManagedDiskId?: string;
}
export default {
	"vaults/replicationAlertSettings": vaults_replicationAlertSettings,
	"vaults/replicationEvents": vaults_replicationEvents,
	"vaults/replicationFabrics": vaults_replicationFabrics,
	"vaults/replicationFabrics/replicationLogicalNetworks": vaults_replicationFabrics_replicationLogicalNetworks,
	"vaults/replicationFabrics/replicationNetworks": vaults_replicationFabrics_replicationNetworks,
	"vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings":
		vaults_replicationFabrics_replicationNetworks_replicationNetworkMappings,
	"vaults/replicationFabrics/replicationProtectionContainers":
		vaults_replicationFabrics_replicationProtectionContainers,
	"vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems":
		vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems,
	"vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems/migrationRecoveryPoints":
		vaults_replicationFabrics_replicationProtectionContainers_replicationMigrationItems_migrationRecoveryPoints,
	"vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems":
		vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItems,
	"vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems":
		vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems,
	"vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints":
		vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPoints,
	"vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings":
		vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappings,
	"vaults/replicationFabrics/replicationRecoveryServicesProviders":
		vaults_replicationFabrics_replicationRecoveryServicesProviders,
	"vaults/replicationFabrics/replicationStorageClassifications":
		vaults_replicationFabrics_replicationStorageClassifications,
	"vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings":
		vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappings,
	"vaults/replicationFabrics/replicationvCenters": vaults_replicationFabrics_replicationvCenters,
	"vaults/replicationJobs": vaults_replicationJobs,
	"vaults/replicationPolicies": vaults_replicationPolicies,
	"vaults/replicationProtectionIntents": vaults_replicationProtectionIntents,
	"vaults/replicationRecoveryPlans": vaults_replicationRecoveryPlans,
	"vaults/replicationVaultSettings": vaults_replicationVaultSettings,
};
