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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConfigureAlertRequestPropertiesOrAlertProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EventProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FabricCreationInputPropertiesOrFabricProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LogicalNetworkProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkProperties | undefined;
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
	readonly location?: string | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CreateProtectionContainerInputPropertiesOrProtectionContainerProperties | undefined;
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
	readonly location?: string | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MigrationRecoveryPointProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectableItemProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EnableProtectionInputPropertiesOrReplicationProtectedItemProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RecoveryPointProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?:
		| CreateProtectionContainerMappingInputPropertiesOrProtectionContainerMappingProperties
		| undefined;
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
	readonly location?: string | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StorageClassificationProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StorageMappingInputPropertiesOrStorageClassificationMappingProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AddVCenterRequestPropertiesOrVCenterProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: JobProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CreatePolicyInputPropertiesOrPolicyProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CreateProtectionIntentPropertiesOrReplicationProtectionIntentProperties | undefined;
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
	readonly location?: string | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: VaultSettingCreationInputPropertiesOrVaultSettingProperties;
}
export interface A2AProtectedDiskDetails {
	readonly allowedDiskLevelOperation?: string[] | undefined;
	readonly dataPendingAtSourceAgentInMB?: number | undefined;
	readonly dataPendingInStagingStorageAccountInMB?: number | undefined;
	readonly dekKeyVaultArmId?: string | undefined;
	readonly diskCapacityInBytes?: number | undefined;
	readonly diskName?: string | undefined;
	readonly diskState?: string | undefined;
	readonly diskType?: string | undefined;
	readonly diskUri?: string | undefined;
	readonly failoverDiskName?: string | undefined;
	readonly isDiskEncrypted?: boolean | undefined;
	readonly isDiskKeyEncrypted?: boolean | undefined;
	readonly kekKeyVaultArmId?: string | undefined;
	readonly keyIdentifier?: string | undefined;
	readonly monitoringJobType?: string | undefined;
	readonly monitoringPercentageCompletion?: number | undefined;
	readonly primaryDiskAzureStorageAccountId?: string | undefined;
	readonly primaryStagingAzureStorageAccountId?: string | undefined;
	readonly recoveryAzureStorageAccountId?: string | undefined;
	readonly recoveryDiskUri?: string | undefined;
	readonly resyncRequired?: boolean | undefined;
	readonly secretIdentifier?: string | undefined;
	readonly tfoDiskName?: string | undefined;
}
export interface A2AProtectedManagedDiskDetails {
	readonly allowedDiskLevelOperation?: string[] | undefined;
	readonly dataPendingAtSourceAgentInMB?: number | undefined;
	readonly dataPendingInStagingStorageAccountInMB?: number | undefined;
	readonly dekKeyVaultArmId?: string | undefined;
	readonly diskCapacityInBytes?: number | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskState?: string | undefined;
	readonly diskType?: string | undefined;
	readonly failoverDiskName?: string | undefined;
	readonly isDiskEncrypted?: boolean | undefined;
	readonly isDiskKeyEncrypted?: boolean | undefined;
	readonly kekKeyVaultArmId?: string | undefined;
	readonly keyIdentifier?: string | undefined;
	readonly monitoringJobType?: string | undefined;
	readonly monitoringPercentageCompletion?: number | undefined;
	readonly primaryDiskEncryptionSetId?: string | undefined;
	readonly primaryStagingAzureStorageAccountId?: string | undefined;
	readonly recoveryDiskEncryptionSetId?: string | undefined;
	readonly recoveryOrignalTargetDiskId?: string | undefined;
	readonly recoveryReplicaDiskAccountType?: string | undefined;
	readonly recoveryReplicaDiskId?: string | undefined;
	readonly recoveryResourceGroupId?: string | undefined;
	readonly recoveryTargetDiskAccountType?: string | undefined;
	readonly recoveryTargetDiskId?: string | undefined;
	readonly resyncRequired?: boolean | undefined;
	readonly secretIdentifier?: string | undefined;
	readonly tfoDiskName?: string | undefined;
}
export interface A2AProtectionIntentDiskInputDetails {
	readonly diskUri: string;
	readonly primaryStagingStorageAccountCustomInput?: StorageAccountCustomDetails | undefined;
	readonly recoveryAzureStorageAccountCustomInput?: StorageAccountCustomDetails | undefined;
}
export interface A2AProtectionIntentManagedDiskInputDetails {
	readonly diskEncryptionInfo?: DiskEncryptionInfo | undefined;
	readonly diskId: string;
	readonly primaryStagingStorageAccountCustomInput?: StorageAccountCustomDetails | undefined;
	readonly recoveryDiskEncryptionSetId?: string | undefined;
	readonly recoveryReplicaDiskAccountType?: string | undefined;
	readonly recoveryResourceGroupCustomInput?: RecoveryResourceGroupCustomDetails | undefined;
	readonly recoveryTargetDiskAccountType?: string | undefined;
}
export interface A2AUnprotectedDiskDetails {
	readonly diskAutoProtectionStatus?: ("Disabled" | "Enabled") | undefined;
	readonly diskLunId?: number | undefined;
}
export interface A2AVmDiskInputDetails {
	readonly diskUri: string;
	readonly primaryStagingAzureStorageAccountId: string;
	readonly recoveryAzureStorageAccountId: string;
}
export interface A2AVmManagedDiskInputDetails {
	readonly diskEncryptionInfo?: DiskEncryptionInfo | undefined;
	readonly diskId: string;
	readonly primaryStagingAzureStorageAccountId: string;
	readonly recoveryDiskEncryptionSetId?: string | undefined;
	readonly recoveryReplicaDiskAccountType?: string | undefined;
	readonly recoveryResourceGroupId: string;
	readonly recoveryTargetDiskAccountType?: string | undefined;
}
export interface A2AZoneDetails {
	readonly source?: string | undefined;
	readonly target?: string | undefined;
}
export interface AddRecoveryServicesProviderInputPropertiesOrRecoveryServicesProviderProperties {
	readonly allowedScenarios?: string[] | undefined;
	readonly authenticationIdentityDetails?: IdentityProviderDetails | undefined;
	readonly authenticationIdentityInput: IdentityProviderInput;
	readonly biosId?: string | undefined;
	readonly connectionStatus?: string | undefined;
	readonly dataPlaneAuthenticationIdentityDetails?: IdentityProviderDetails | undefined;
	readonly dataPlaneAuthenticationIdentityInput?: IdentityProviderInput | undefined;
	readonly draIdentifier?: string | undefined;
	readonly fabricFriendlyName?: string | undefined;
	readonly fabricType?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly healthErrorDetails?: HealthError[] | undefined;
	readonly lastHeartBeat?: string | undefined;
	readonly machineId?: string | undefined;
	readonly machineName: string;
	readonly protectedItemCount?: number | undefined;
	readonly providerVersion?: string | undefined;
	readonly providerVersionDetails?: VersionDetails | undefined;
	readonly providerVersionExpiryDate?: string | undefined;
	readonly providerVersionState?: string | undefined;
	readonly resourceAccessIdentityDetails?: IdentityProviderDetails | undefined;
	readonly resourceAccessIdentityInput: IdentityProviderInput;
	readonly serverVersion?: string | undefined;
}
export interface AddVCenterRequestPropertiesOrVCenterProperties {
	readonly discoveryStatus?: string | undefined;
	readonly fabricArmResourceName?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly infrastructureId?: string | undefined;
	readonly internalId?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly lastHeartbeat?: string | undefined;
	readonly port?: string | undefined;
	readonly processServerId?: string | undefined;
	readonly runAsAccountId?: string | undefined;
}
export interface AgentDetails {
	readonly agentId?: string | undefined;
	readonly biosId?: string | undefined;
	readonly disks?: AgentDiskDetails[] | undefined;
	readonly fqdn?: string | undefined;
	readonly machineId?: string | undefined;
}
export interface AgentDiskDetails {
	readonly capacityInBytes?: number | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly isOSDisk?: string | undefined;
	readonly lunId?: number | undefined;
}
export interface ASRTask {
	readonly allowedActions?: string[] | undefined;
	readonly customDetails?: TaskTypeDetails | undefined;
	readonly endTime?: string | undefined;
	readonly errors?: JobErrorDetails[] | undefined;
	readonly friendlyName?: string | undefined;
	readonly groupTaskCustomDetails?: GroupTaskDetails | undefined;
	readonly name?: string | undefined;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
	readonly stateDescription?: string | undefined;
	readonly taskId?: string | undefined;
	readonly taskType?: string | undefined;
}
export interface AzureToAzureVmSyncedConfigDetails {
	readonly inputEndpoints?: InputEndpoint[] | undefined;
	readonly tags?: AzureToAzureVmSyncedConfigDetailsTags | undefined;
}
export interface AzureToAzureVmSyncedConfigDetailsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AzureVmDiskDetails {
	readonly customTargetDiskName?: string | undefined;
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId?: string | undefined;
	readonly lunId?: string | undefined;
	readonly maxSizeMB?: string | undefined;
	readonly targetDiskLocation?: string | undefined;
	readonly targetDiskName?: string | undefined;
	readonly vhdId?: string | undefined;
	readonly vhdName?: string | undefined;
	readonly vhdType?: string | undefined;
}
export interface ConfigurationSettings {}
export interface ConfigureAlertRequestPropertiesOrAlertProperties {
	readonly customEmailAddresses?: string[] | undefined;
	readonly locale?: string | undefined;
	readonly sendToOwners?: string | undefined;
}
export interface CreateNetworkMappingInputPropertiesOrNetworkMappingProperties {
	readonly fabricSpecificDetails?: FabricSpecificCreateNetworkMappingInput | undefined;
	readonly fabricSpecificSettings?: NetworkMappingFabricSpecificSettings | undefined;
	readonly primaryFabricFriendlyName?: string | undefined;
	readonly primaryNetworkFriendlyName?: string | undefined;
	readonly primaryNetworkId?: string | undefined;
	readonly recoveryFabricArmId?: string | undefined;
	readonly recoveryFabricFriendlyName?: string | undefined;
	readonly recoveryFabricName?: string | undefined;
	readonly recoveryNetworkFriendlyName?: string | undefined;
	readonly recoveryNetworkId: string;
	readonly state?: string | undefined;
}
export interface CreatePolicyInputPropertiesOrPolicyProperties {
	readonly friendlyName?: string | undefined;
	readonly providerSpecificDetails?: PolicyProviderSpecificDetails | undefined;
	readonly providerSpecificInput?: PolicyProviderSpecificInput | undefined;
}
export interface CreateProtectionContainerInputPropertiesOrProtectionContainerProperties {
	readonly fabricFriendlyName?: string | undefined;
	readonly fabricSpecificDetails?: ProtectionContainerFabricSpecificDetails | undefined;
	readonly fabricType?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly pairingStatus?: string | undefined;
	readonly protectedItemCount?: number | undefined;
	readonly providerSpecificInput?: ReplicationProviderSpecificContainerCreationInput[] | undefined;
	readonly role?: string | undefined;
}
export interface CreateProtectionContainerMappingInputPropertiesOrProtectionContainerMappingProperties {
	readonly health?: string | undefined;
	readonly healthErrorDetails?: HealthError[] | undefined;
	readonly policyFriendlyName?: string | undefined;
	readonly policyId?: string | undefined;
	readonly providerSpecificDetails?: ProtectionContainerMappingProviderSpecificDetails | undefined;
	readonly providerSpecificInput?: ReplicationProviderSpecificContainerMappingInput | undefined;
	readonly sourceFabricFriendlyName?: string | undefined;
	readonly sourceProtectionContainerFriendlyName?: string | undefined;
	readonly state?: string | undefined;
	readonly targetFabricFriendlyName?: string | undefined;
	readonly targetProtectionContainerFriendlyName?: string | undefined;
	readonly targetProtectionContainerId?: string | undefined;
}
export interface CreateProtectionIntentPropertiesOrReplicationProtectionIntentProperties {
	readonly creationTimeUTC?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly isActive?: boolean | undefined;
	readonly jobId?: string | undefined;
	readonly jobState?: string | undefined;
	readonly providerSpecificDetails?:
		| CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings
		| undefined;
}
export interface CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings {}
export interface CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties {
	readonly allowedOperations?: string[] | undefined;
	readonly currentScenario?: CurrentScenarioDetails | undefined;
	readonly currentScenarioStatus?: string | undefined;
	readonly currentScenarioStatusDescription?: string | undefined;
	readonly failoverDeploymentModel?: ("Classic" | "NotApplicable" | "ResourceManager") | undefined;
	readonly friendlyName?: string | undefined;
	readonly groups: RecoveryPlanGroup[];
	readonly lastPlannedFailoverTime?: string | undefined;
	readonly lastTestFailoverTime?: string | undefined;
	readonly lastUnplannedFailoverTime?: string | undefined;
	readonly primaryFabricFriendlyName?: string | undefined;
	readonly primaryFabricId: string;
	readonly providerSpecificDetails?: RecoveryPlanProviderSpecificDetails[] | undefined;
	readonly providerSpecificInput?: RecoveryPlanProviderSpecificInput[] | undefined;
	readonly recoveryFabricFriendlyName?: string | undefined;
	readonly recoveryFabricId: string;
	readonly replicationProviders?: string[] | undefined;
}
export interface CurrentJobDetails {
	readonly jobId?: string | undefined;
	readonly jobName?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface CurrentScenarioDetails {
	readonly jobId?: string | undefined;
	readonly scenarioName?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface DataStore {
	readonly capacity?: string | undefined;
	readonly freeSpace?: string | undefined;
	readonly symbolicName?: string | undefined;
	readonly type?: string | undefined;
	readonly uuid?: string | undefined;
}
export interface DiskDetails {
	readonly maxSizeMB?: number | undefined;
	readonly vhdId?: string | undefined;
	readonly vhdName?: string | undefined;
	readonly vhdType?: string | undefined;
}
export interface DiskEncryptionInfo {
	readonly diskEncryptionKeyInfo?: DiskEncryptionKeyInfo | undefined;
	readonly keyEncryptionKeyInfo?: KeyEncryptionKeyInfo | undefined;
}
export interface DiskEncryptionKeyInfo {
	readonly keyVaultResourceArmId?: string | undefined;
	readonly secretIdentifier?: string | undefined;
}
export interface DiskVolumeDetails {
	readonly label?: string | undefined;
	readonly name?: string | undefined;
}
export interface DraDetails {
	readonly biosId?: string | undefined;
	readonly forwardProtectedItemCount?: number | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly id?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly name?: string | undefined;
	readonly reverseProtectedItemCount?: number | undefined;
	readonly version?: string | undefined;
}
export interface EnableMigrationInputPropertiesOrMigrationItemProperties {
	readonly allowedOperations?:
		| ("DisableMigration" | "Migrate" | "StartResync" | "TestMigrate" | "TestMigrateCleanup"[])
		| undefined;
	readonly currentJob?: CurrentJobDetails | undefined;
	readonly eventCorrelationId?: string | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly lastTestMigrationStatus?: string | undefined;
	readonly lastTestMigrationTime?: string | undefined;
	readonly machineName?: string | undefined;
	readonly migrationState?:
		| (
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
				| "Replicating"
		  )
		| undefined;
	readonly migrationStateDescription?: string | undefined;
	readonly policyFriendlyName?: string | undefined;
	readonly policyId: string;
	readonly providerSpecificDetails: EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings;
	readonly testMigrateState?:
		| (
				| "None"
				| "TestMigrationCleanupInProgress"
				| "TestMigrationFailed"
				| "TestMigrationInProgress"
				| "TestMigrationSucceeded"
		  )
		| undefined;
	readonly testMigrateStateDescription?: string | undefined;
}
export interface EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings {}
export interface EnableProtectionInputPropertiesOrReplicationProtectedItemProperties {
	readonly activeLocation?: string | undefined;
	readonly allowedOperations?: string[] | undefined;
	readonly currentScenario?: CurrentScenarioDetails | undefined;
	readonly eventCorrelationId?: string | undefined;
	readonly failoverHealth?: string | undefined;
	readonly failoverRecoveryPointId?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly lastSuccessfulFailoverTime?: string | undefined;
	readonly lastSuccessfulTestFailoverTime?: string | undefined;
	readonly policyFriendlyName?: string | undefined;
	readonly policyId?: string | undefined;
	readonly primaryFabricFriendlyName?: string | undefined;
	readonly primaryFabricProvider?: string | undefined;
	readonly primaryProtectionContainerFriendlyName?: string | undefined;
	readonly protectableItemId?: string | undefined;
	readonly protectedItemType?: string | undefined;
	readonly protectionState?: string | undefined;
	readonly protectionStateDescription?: string | undefined;
	readonly providerSpecificDetails?:
		| EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings
		| undefined;
	readonly recoveryContainerId?: string | undefined;
	readonly recoveryFabricFriendlyName?: string | undefined;
	readonly recoveryFabricId?: string | undefined;
	readonly recoveryProtectionContainerFriendlyName?: string | undefined;
	readonly recoveryServicesProviderId?: string | undefined;
	readonly replicationHealth?: string | undefined;
	readonly switchProviderState?: string | undefined;
	readonly switchProviderStateDescription?: string | undefined;
	readonly testFailoverState?: string | undefined;
	readonly testFailoverStateDescription?: string | undefined;
}
export interface EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings {}
export interface EncryptionDetails {
	readonly kekCertExpiryDate?: string | undefined;
	readonly kekCertThumbprint?: string | undefined;
	readonly kekState?: string | undefined;
}
export interface EventProperties {
	readonly affectedObjectCorrelationId?: string | undefined;
	readonly affectedObjectFriendlyName?: string | undefined;
	readonly description?: string | undefined;
	readonly eventCode?: string | undefined;
	readonly eventSpecificDetails?: EventSpecificDetails | undefined;
	readonly eventType?: string | undefined;
	readonly fabricId?: string | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly providerSpecificDetails?: EventProviderSpecificDetails | undefined;
	readonly severity?: string | undefined;
	readonly timeOfOccurrence?: string | undefined;
}
export interface EventProviderSpecificDetails {}
export interface EventSpecificDetails {}
export interface ExtendedLocation {
	readonly name: string;
	readonly type: "EdgeZone";
}
export interface FabricCreationInputPropertiesOrFabricProperties {
	readonly bcdrState?: string | undefined;
	readonly customDetails?: FabricSpecificCreationInputOrFabricSpecificDetails | undefined;
	readonly encryptionDetails?: EncryptionDetails | undefined;
	readonly friendlyName?: string | undefined;
	readonly health?: string | undefined;
	readonly healthErrorDetails?: HealthError[] | undefined;
	readonly internalIdentifier?: string | undefined;
	readonly rolloverEncryptionDetails?: EncryptionDetails | undefined;
}
export interface FabricSpecificCreateNetworkMappingInput {}
export interface FabricSpecificCreationInputOrFabricSpecificDetails {}
export interface FailoverReplicationProtectedItemDetails {
	readonly friendlyName?: string | undefined;
	readonly name?: string | undefined;
	readonly networkConnectionStatus?: string | undefined;
	readonly networkFriendlyName?: string | undefined;
	readonly recoveryPointId?: string | undefined;
	readonly recoveryPointTime?: string | undefined;
	readonly subnet?: string | undefined;
	readonly testVmFriendlyName?: string | undefined;
	readonly testVmName?: string | undefined;
}
export interface GroupTaskDetails {
	readonly childTasks?: ASRTask[] | undefined;
}
export interface HealthError {
	readonly creationTimeUtc?: string | undefined;
	readonly customerResolvability?: ("Allowed" | "NotAllowed") | undefined;
	readonly entityId?: string | undefined;
	readonly errorCategory?: string | undefined;
	readonly errorCode?: string | undefined;
	readonly errorId?: string | undefined;
	readonly errorLevel?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorSource?: string | undefined;
	readonly errorType?: string | undefined;
	readonly innerHealthErrors?: InnerHealthError[] | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
	readonly recoveryProviderErrorMessage?: string | undefined;
	readonly summaryMessage?: string | undefined;
}
export interface HyperVHostDetails {
	readonly id?: string | undefined;
	readonly marsAgentVersion?: string | undefined;
	readonly name?: string | undefined;
}
export interface HyperVReplicaAzureDiskInputDetails {
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId?: string | undefined;
	readonly diskType?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS") | undefined;
	readonly logStorageAccountId?: string | undefined;
}
export interface HyperVReplicaAzureEnableProtectionInputSeedManagedDiskTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HyperVReplicaAzureEnableProtectionInputTargetManagedDiskTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HyperVReplicaAzureEnableProtectionInputTargetNicTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HyperVReplicaAzureEnableProtectionInputTargetVmTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HyperVReplicaAzureManagedDiskDetails {
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId?: string | undefined;
	readonly replicaDiskType?: string | undefined;
	readonly seedManagedDiskId?: string | undefined;
}
export interface IdentityProviderDetails {
	readonly aadAuthority?: string | undefined;
	readonly applicationId?: string | undefined;
	readonly audience?: string | undefined;
	readonly objectId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface IdentityProviderInput {
	readonly aadAuthority: string;
	readonly applicationId: string;
	readonly audience: string;
	readonly objectId: string;
	readonly tenantId: string;
}
export interface InconsistentVmDetails {
	readonly cloudName?: string | undefined;
	readonly details?: string[] | undefined;
	readonly errorIds?: string[] | undefined;
	readonly vmName?: string | undefined;
}
export interface InitialReplicationDetails {
	readonly initialReplicationProgressPercentage?: string | undefined;
	readonly initialReplicationType?: string | undefined;
}
export interface InMageAgentDetails {
	readonly agentExpiryDate?: string | undefined;
	readonly agentUpdateStatus?: string | undefined;
	readonly agentVersion?: string | undefined;
	readonly postUpdateRebootStatus?: string | undefined;
}
export interface InMageAzureV2DiskInputDetails {
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId?: string | undefined;
	readonly diskType?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS") | undefined;
	readonly logStorageAccountId?: string | undefined;
}
export interface InMageAzureV2EnableProtectionInputSeedManagedDiskTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageAzureV2EnableProtectionInputTargetManagedDiskTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageAzureV2EnableProtectionInputTargetNicTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageAzureV2EnableProtectionInputTargetVmTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageAzureV2ManagedDiskDetails {
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId?: string | undefined;
	readonly replicaDiskType?: string | undefined;
	readonly seedManagedDiskId?: string | undefined;
	readonly targetDiskName?: string | undefined;
}
export interface InMageAzureV2ProtectedDiskDetails {
	readonly diskCapacityInBytes?: number | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskResized?: string | undefined;
	readonly fileSystemCapacityInBytes?: number | undefined;
	readonly healthErrorCode?: string | undefined;
	readonly lastRpoCalculatedTime?: string | undefined;
	readonly progressHealth?: string | undefined;
	readonly progressStatus?: string | undefined;
	readonly protectionStage?: string | undefined;
	readonly psDataInMegaBytes?: number | undefined;
	readonly resyncDurationInSeconds?: number | undefined;
	readonly resyncLast15MinutesTransferredBytes?: number | undefined;
	readonly resyncLastDataTransferTimeUTC?: string | undefined;
	readonly resyncProcessedBytes?: number | undefined;
	readonly resyncProgressPercentage?: number | undefined;
	readonly resyncRequired?: string | undefined;
	readonly resyncStartTime?: string | undefined;
	readonly resyncTotalTransferredBytes?: number | undefined;
	readonly rpoInSeconds?: number | undefined;
	readonly secondsToTakeSwitchProvider?: number | undefined;
	readonly sourceDataInMegaBytes?: number | undefined;
	readonly targetDataInMegaBytes?: number | undefined;
}
export interface InMageAzureV2SwitchProviderBlockingErrorDetails {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorMessageParameters?: InMageAzureV2SwitchProviderBlockingErrorDetailsErrorMessageParameters | undefined;
	readonly errorTags?: InMageAzureV2SwitchProviderBlockingErrorDetailsErrorTags | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
}
export interface InMageAzureV2SwitchProviderBlockingErrorDetailsErrorMessageParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageAzureV2SwitchProviderBlockingErrorDetailsErrorTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageAzureV2SwitchProviderDetails {
	readonly targetApplianceId?: string | undefined;
	readonly targetFabricId?: string | undefined;
	readonly targetResourceId?: string | undefined;
	readonly targetVaultId?: string | undefined;
}
export interface InMageDiskDetails {
	readonly diskConfiguration?: string | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskSizeInMB?: string | undefined;
	readonly diskType?: string | undefined;
	readonly volumeList?: DiskVolumeDetails[] | undefined;
}
export interface InMageDiskExclusionInput {
	readonly diskSignatureOptions?: InMageDiskSignatureExclusionOptions[] | undefined;
	readonly volumeOptions?: InMageVolumeExclusionOptions[] | undefined;
}
export interface InMageDiskSignatureExclusionOptions {
	readonly diskSignature?: string | undefined;
}
export interface InMageFabricSwitchProviderBlockingErrorDetails {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorMessageParameters?: InMageFabricSwitchProviderBlockingErrorDetailsErrorMessageParameters | undefined;
	readonly errorTags?: InMageFabricSwitchProviderBlockingErrorDetailsErrorTags | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
}
export interface InMageFabricSwitchProviderBlockingErrorDetailsErrorMessageParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageFabricSwitchProviderBlockingErrorDetailsErrorTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageProtectedDiskDetails {
	readonly diskCapacityInBytes?: number | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskResized?: string | undefined;
	readonly fileSystemCapacityInBytes?: number | undefined;
	readonly healthErrorCode?: string | undefined;
	readonly lastRpoCalculatedTime?: string | undefined;
	readonly progressHealth?: string | undefined;
	readonly progressStatus?: string | undefined;
	readonly protectionStage?: string | undefined;
	readonly psDataInMB?: number | undefined;
	readonly resyncDurationInSeconds?: number | undefined;
	readonly resyncLast15MinutesTransferredBytes?: number | undefined;
	readonly resyncLastDataTransferTimeUTC?: string | undefined;
	readonly resyncProcessedBytes?: number | undefined;
	readonly resyncProgressPercentage?: number | undefined;
	readonly resyncRequired?: string | undefined;
	readonly resyncStartTime?: string | undefined;
	readonly resyncTotalTransferredBytes?: number | undefined;
	readonly rpoInSeconds?: number | undefined;
	readonly sourceDataInMB?: number | undefined;
	readonly targetDataInMB?: number | undefined;
}
export interface InMageRcmAgentUpgradeBlockingErrorDetails {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorMessageParameters?: InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters | undefined;
	readonly errorTags?: InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
}
export interface InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageRcmDiscoveredProtectedVmDetails {
	readonly createdTimestamp?: string | undefined;
	readonly datastores?: string[] | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly isDeleted?: boolean | undefined;
	readonly lastDiscoveryTimeInUtc?: string | undefined;
	readonly osName?: string | undefined;
	readonly powerStatus?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
	readonly vCenterFqdn?: string | undefined;
	readonly vCenterId?: string | undefined;
	readonly vmFqdn?: string | undefined;
	readonly vmwareToolsStatus?: string | undefined;
}
export interface InMageRcmDiskInput {
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId: string;
	readonly diskType: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly logStorageAccountId: string;
}
export interface InMageRcmDisksDefaultInput {
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskType: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly logStorageAccountId: string;
}
export interface InMageRcmFailbackDiscoveredProtectedVmDetails {
	readonly createdTimestamp?: string | undefined;
	readonly datastores?: string[] | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly isDeleted?: boolean | undefined;
	readonly lastDiscoveryTimeInUtc?: string | undefined;
	readonly osName?: string | undefined;
	readonly powerStatus?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
	readonly vCenterFqdn?: string | undefined;
	readonly vCenterId?: string | undefined;
	readonly vmFqdn?: string | undefined;
	readonly vmwareToolsStatus?: string | undefined;
}
export interface InMageRcmFailbackMobilityAgentDetails {
	readonly agentVersionExpiryDate?: string | undefined;
	readonly driverVersion?: string | undefined;
	readonly driverVersionExpiryDate?: string | undefined;
	readonly isUpgradeable?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly latestUpgradableVersionWithoutReboot?: string | undefined;
	readonly latestVersion?: string | undefined;
	readonly reasonsBlockingUpgrade?:
		| (
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
				| "UnsupportedProtectionScenario"[]
		  )
		| undefined;
	readonly version?: string | undefined;
}
export interface InMageRcmFailbackNicDetails {
	readonly adapterType?: string | undefined;
	readonly macAddress?: string | undefined;
	readonly networkName?: string | undefined;
	readonly sourceIpAddress?: string | undefined;
}
export interface InMageRcmFailbackProtectedDiskDetails {
	readonly capacityInBytes?: number | undefined;
	readonly dataPendingAtSourceAgentInMB?: number | undefined;
	readonly dataPendingInLogDataStoreInMB?: number | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskUuid?: string | undefined;
	readonly irDetails?: InMageRcmFailbackSyncDetails | undefined;
	readonly isInitialReplicationComplete?: string | undefined;
	readonly isOSDisk?: string | undefined;
	readonly lastSyncTime?: string | undefined;
	readonly resyncDetails?: InMageRcmFailbackSyncDetails | undefined;
}
export interface InMageRcmFailbackSyncDetails {
	readonly last15MinutesTransferredBytes?: number | undefined;
	readonly lastDataTransferTimeUtc?: string | undefined;
	readonly lastRefreshTime?: string | undefined;
	readonly processedBytes?: number | undefined;
	readonly progressHealth?: ("InProgress" | "NoProgress" | "None" | "Queued" | "SlowProgress") | undefined;
	readonly progressPercentage?: number | undefined;
	readonly startTime?: string | undefined;
	readonly transferredBytes?: number | undefined;
}
export interface InMageRcmLastAgentUpgradeErrorDetails {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorMessageParameters?: InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters | undefined;
	readonly errorTags?: InMageRcmLastAgentUpgradeErrorDetailsErrorTags | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
}
export interface InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageRcmLastAgentUpgradeErrorDetailsErrorTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageRcmMobilityAgentDetails {
	readonly agentVersionExpiryDate?: string | undefined;
	readonly driverVersion?: string | undefined;
	readonly driverVersionExpiryDate?: string | undefined;
	readonly isUpgradeable?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly latestAgentReleaseDate?: string | undefined;
	readonly latestUpgradableVersionWithoutReboot?: string | undefined;
	readonly latestVersion?: string | undefined;
	readonly reasonsBlockingUpgrade?:
		| (
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
				| "UnsupportedProtectionScenario"[]
		  )
		| undefined;
	readonly version?: string | undefined;
}
export interface InMageRcmNicDetails {
	readonly isPrimaryNic?: string | undefined;
	readonly isSelectedForFailover?: string | undefined;
	readonly nicId?: string | undefined;
	readonly sourceIPAddress?: string | undefined;
	readonly sourceIPAddressType?: ("Dynamic" | "Static") | undefined;
	readonly sourceNetworkId?: string | undefined;
	readonly sourceSubnetName?: string | undefined;
	readonly targetIPAddress?: string | undefined;
	readonly targetIPAddressType?: ("Dynamic" | "Static") | undefined;
	readonly targetSubnetName?: string | undefined;
	readonly testIPAddress?: string | undefined;
	readonly testIPAddressType?: ("Dynamic" | "Static") | undefined;
	readonly testSubnetName?: string | undefined;
}
export interface InMageRcmProtectedDiskDetails {
	readonly capacityInBytes?: number | undefined;
	readonly dataPendingAtSourceAgentInMB?: number | undefined;
	readonly dataPendingInLogDataStoreInMB?: number | undefined;
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskType?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS") | undefined;
	readonly irDetails?: InMageRcmSyncDetails | undefined;
	readonly isInitialReplicationComplete?: string | undefined;
	readonly isOSDisk?: string | undefined;
	readonly logStorageAccountId?: string | undefined;
	readonly resyncDetails?: InMageRcmSyncDetails | undefined;
	readonly seedManagedDiskId?: string | undefined;
	readonly targetManagedDiskId?: string | undefined;
}
export interface InMageRcmSyncDetails {
	readonly last15MinutesTransferredBytes?: number | undefined;
	readonly lastDataTransferTimeUtc?: string | undefined;
	readonly lastRefreshTime?: string | undefined;
	readonly processedBytes?: number | undefined;
	readonly progressHealth?: ("InProgress" | "NoProgress" | "None" | "Queued" | "SlowProgress") | undefined;
	readonly progressPercentage?: number | undefined;
	readonly startTime?: string | undefined;
	readonly transferredBytes?: number | undefined;
}
export interface InMageReplicationDetailsConsistencyPoints {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InMageVolumeExclusionOptions {
	readonly onlyExcludeIfSingleVolume?: string | undefined;
	readonly volumeLabel?: string | undefined;
}
export interface InnerHealthError {
	readonly creationTimeUtc?: string | undefined;
	readonly customerResolvability?: ("Allowed" | "NotAllowed") | undefined;
	readonly entityId?: string | undefined;
	readonly errorCategory?: string | undefined;
	readonly errorCode?: string | undefined;
	readonly errorId?: string | undefined;
	readonly errorLevel?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorSource?: string | undefined;
	readonly errorType?: string | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
	readonly recoveryProviderErrorMessage?: string | undefined;
	readonly summaryMessage?: string | undefined;
}
export interface InputEndpoint {
	readonly endpointName?: string | undefined;
	readonly privatePort?: number | undefined;
	readonly protocol?: string | undefined;
	readonly publicPort?: number | undefined;
}
export interface IPConfigDetails {
	readonly ipAddressType?: string | undefined;
	readonly isPrimary?: boolean | undefined;
	readonly isSeletedForFailover?: boolean | undefined;
	readonly name?: string | undefined;
	readonly recoveryIPAddressType?: string | undefined;
	readonly recoveryLBBackendAddressPoolIds?: string[] | undefined;
	readonly recoveryPublicIPAddressId?: string | undefined;
	readonly recoveryStaticIPAddress?: string | undefined;
	readonly recoverySubnetName?: string | undefined;
	readonly staticIPAddress?: string | undefined;
	readonly subnetName?: string | undefined;
	readonly tfoLBBackendAddressPoolIds?: string[] | undefined;
	readonly tfoPublicIPAddressId?: string | undefined;
	readonly tfoStaticIPAddress?: string | undefined;
	readonly tfoSubnetName?: string | undefined;
}
export interface JobDetails {
	readonly affectedObjectDetails?: JobDetailsAffectedObjectDetails | undefined;
}
export interface JobDetailsAffectedObjectDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobEntity {
	readonly jobFriendlyName?: string | undefined;
	readonly jobId?: string | undefined;
	readonly jobScenarioName?: string | undefined;
	readonly targetInstanceType?: string | undefined;
	readonly targetObjectId?: string | undefined;
	readonly targetObjectName?: string | undefined;
}
export interface JobErrorDetails {
	readonly creationTime?: string | undefined;
	readonly errorLevel?: string | undefined;
	readonly providerErrorDetails?: ProviderError | undefined;
	readonly serviceErrorDetails?: ServiceError | undefined;
	readonly taskId?: string | undefined;
}
export interface JobProperties {
	readonly activityId?: string | undefined;
	readonly allowedActions?: string[] | undefined;
	readonly customDetails?: JobDetails | undefined;
	readonly endTime?: string | undefined;
	readonly errors?: JobErrorDetails[] | undefined;
	readonly friendlyName?: string | undefined;
	readonly scenarioName?: string | undefined;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
	readonly stateDescription?: string | undefined;
	readonly targetInstanceType?: string | undefined;
	readonly targetObjectId?: string | undefined;
	readonly targetObjectName?: string | undefined;
	readonly tasks?: ASRTask[] | undefined;
}
export interface KeyEncryptionKeyInfo {
	readonly keyIdentifier?: string | undefined;
	readonly keyVaultResourceArmId?: string | undefined;
}
export interface LogicalNetworkProperties {
	readonly friendlyName?: string | undefined;
	readonly logicalNetworkDefinitionsStatus?: string | undefined;
	readonly logicalNetworkUsage?: string | undefined;
	readonly networkVirtualizationStatus?: string | undefined;
}
export interface MarsAgentDetails {
	readonly biosId?: string | undefined;
	readonly fabricObjectId?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly id?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface MasterTargetServer {
	readonly agentExpiryDate?: string | undefined;
	readonly agentVersion?: string | undefined;
	readonly agentVersionDetails?: VersionDetails | undefined;
	readonly dataStores?: DataStore[] | undefined;
	readonly diskCount?: number | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly id?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly lastHeartbeat?: string | undefined;
	readonly marsAgentExpiryDate?: string | undefined;
	readonly marsAgentVersion?: string | undefined;
	readonly marsAgentVersionDetails?: VersionDetails | undefined;
	readonly name?: string | undefined;
	readonly osType?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly retentionVolumes?: RetentionVolume[] | undefined;
	readonly validationErrors?: HealthError[] | undefined;
	readonly versionStatus?: string | undefined;
}
export interface MigrationRecoveryPointProperties {
	readonly recoveryPointTime?: string | undefined;
	readonly recoveryPointType?: ("ApplicationConsistent" | "CrashConsistent" | "NotSpecified") | undefined;
}
export interface MobilityServiceUpdate {
	readonly osType?: string | undefined;
	readonly rebootStatus?: string | undefined;
	readonly version?: string | undefined;
}
export interface NetworkMappingFabricSpecificSettings {}
export interface NetworkProperties {
	readonly fabricType?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly networkType?: string | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface OSDetails {
	readonly osEdition?: string | undefined;
	readonly oSMajorVersion?: string | undefined;
	readonly oSMinorVersion?: string | undefined;
	readonly osType?: string | undefined;
	readonly oSVersion?: string | undefined;
	readonly productType?: string | undefined;
}
export interface OSDiskDetails {
	readonly osType?: string | undefined;
	readonly osVhdId?: string | undefined;
	readonly vhdName?: string | undefined;
}
export interface PolicyProviderSpecificDetails {}
export interface PolicyProviderSpecificInput {}
export interface ProcessServer {
	readonly agentExpiryDate?: string | undefined;
	readonly agentVersion?: string | undefined;
	readonly agentVersionDetails?: VersionDetails | undefined;
	readonly availableMemoryInBytes?: number | undefined;
	readonly availableSpaceInBytes?: number | undefined;
	readonly cpuLoad?: string | undefined;
	readonly cpuLoadStatus?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly hostId?: string | undefined;
	readonly id?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly lastHeartbeat?: string | undefined;
	readonly machineCount?: string | undefined;
	readonly marsCommunicationStatus?: string | undefined;
	readonly marsRegistrationStatus?: string | undefined;
	readonly memoryUsageStatus?: string | undefined;
	readonly mobilityServiceUpdates?: MobilityServiceUpdate[] | undefined;
	readonly osType?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly psServiceStatus?: string | undefined;
	readonly psStatsRefreshTime?: string | undefined;
	readonly replicationPairCount?: string | undefined;
	readonly spaceUsageStatus?: string | undefined;
	readonly sslCertExpiryDate?: string | undefined;
	readonly sslCertExpiryRemainingDays?: number | undefined;
	readonly systemLoad?: string | undefined;
	readonly systemLoadStatus?: string | undefined;
	readonly throughputInBytes?: number | undefined;
	readonly throughputInMBps?: number | undefined;
	readonly throughputStatus?: string | undefined;
	readonly throughputUploadPendingDataInBytes?: number | undefined;
	readonly totalMemoryInBytes?: number | undefined;
	readonly totalSpaceInBytes?: number | undefined;
	readonly versionStatus?: string | undefined;
}
export interface ProcessServerDetails {
	readonly availableMemoryInBytes?: number | undefined;
	readonly availableSpaceInBytes?: number | undefined;
	readonly biosId?: string | undefined;
	readonly diskUsageStatus?: ("Critical" | "Healthy" | "Unknown" | "Warning") | undefined;
	readonly fabricObjectId?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly freeSpacePercentage?: number | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly historicHealth?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly id?: string | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly memoryUsagePercentage?: number | undefined;
	readonly memoryUsageStatus?: ("Critical" | "Healthy" | "Unknown" | "Warning") | undefined;
	readonly name?: string | undefined;
	readonly processorUsagePercentage?: number | undefined;
	readonly processorUsageStatus?: ("Critical" | "Healthy" | "Unknown" | "Warning") | undefined;
	readonly protectedItemCount?: number | undefined;
	readonly systemLoad?: number | undefined;
	readonly systemLoadStatus?: ("Critical" | "Healthy" | "Unknown" | "Warning") | undefined;
	readonly throughputInBytes?: number | undefined;
	readonly throughputStatus?: ("Critical" | "Healthy" | "Unknown" | "Warning") | undefined;
	readonly throughputUploadPendingDataInBytes?: number | undefined;
	readonly totalMemoryInBytes?: number | undefined;
	readonly totalSpaceInBytes?: number | undefined;
	readonly usedMemoryInBytes?: number | undefined;
	readonly usedSpaceInBytes?: number | undefined;
	readonly version?: string | undefined;
}
export interface ProtectableItemProperties {
	readonly customDetails?: ConfigurationSettings | undefined;
	readonly friendlyName?: string | undefined;
	readonly protectionReadinessErrors?: string[] | undefined;
	readonly protectionStatus?: string | undefined;
	readonly recoveryServicesProviderId?: string | undefined;
	readonly replicationProtectedItemId?: string | undefined;
	readonly supportedReplicationProviders?: string[] | undefined;
}
export interface ProtectionContainerFabricSpecificDetails {
	readonly instanceType?: string | undefined;
}
export interface ProtectionContainerMappingProviderSpecificDetails {}
export interface ProtectionProfileCustomDetails {}
export interface ProviderError {
	readonly errorCode?: number | undefined;
	readonly errorId?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
}
export interface ProviderSpecificRecoveryPointDetails {}
export interface PushInstallerDetails {
	readonly biosId?: string | undefined;
	readonly fabricObjectId?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly id?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface RcmProxyDetails {
	readonly biosId?: string | undefined;
	readonly clientAuthenticationType?: string | undefined;
	readonly fabricObjectId?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly id?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly name?: string | undefined;
	readonly version?: string | undefined;
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
	readonly endGroupActions?: RecoveryPlanAction[] | undefined;
	readonly groupType: "Boot" | "Failover" | "Shutdown";
	readonly replicationProtectedItems?: RecoveryPlanProtectedItem[] | undefined;
	readonly startGroupActions?: RecoveryPlanAction[] | undefined;
}
export interface RecoveryPlanProtectedItem {
	readonly id?: string | undefined;
	readonly virtualMachineId?: string | undefined;
}
export interface RecoveryPlanProviderSpecificDetails {}
export interface RecoveryPlanProviderSpecificInput {}
export interface RecoveryPointProperties {
	readonly providerSpecificDetails?: ProviderSpecificRecoveryPointDetails | undefined;
	readonly recoveryPointTime?: string | undefined;
	readonly recoveryPointType?: string | undefined;
}
export interface RecoveryProximityPlacementGroupCustomDetails {}
export interface RecoveryResourceGroupCustomDetails {}
export interface RecoveryVirtualNetworkCustomDetails {}
export interface ReplicationAgentDetails {
	readonly biosId?: string | undefined;
	readonly fabricObjectId?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly id?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface ReplicationProviderSpecificContainerCreationInput {}
export interface ReplicationProviderSpecificContainerMappingInput {}
export interface ReprotectAgentDetails {
	readonly accessibleDatastores?: string[] | undefined;
	readonly biosId?: string | undefined;
	readonly fabricObjectId?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly health?: ("Critical" | "None" | "Normal" | "Warning") | undefined;
	readonly healthErrors?: HealthError[] | undefined;
	readonly id?: string | undefined;
	readonly lastDiscoveryInUtc?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly name?: string | undefined;
	readonly protectedItemCount?: number | undefined;
	readonly vcenterId?: string | undefined;
	readonly version?: string | undefined;
}
export interface RetentionVolume {
	readonly capacityInBytes?: number | undefined;
	readonly freeSpaceInBytes?: number | undefined;
	readonly thresholdPercentage?: number | undefined;
	readonly volumeName?: string | undefined;
}
export interface RunAsAccount {
	readonly accountId?: string | undefined;
	readonly accountName?: string | undefined;
}
export interface ServiceError {
	readonly activityId?: string | undefined;
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
}
export interface StorageAccountCustomDetails {}
export interface StorageClassificationProperties {
	readonly friendlyName?: string | undefined;
}
export interface StorageMappingInputPropertiesOrStorageClassificationMappingProperties {
	readonly targetStorageClassificationId?: string | undefined;
}
export interface Subnet {
	readonly addressList?: string[] | undefined;
	readonly friendlyName?: string | undefined;
	readonly name?: string | undefined;
}
export interface TaskTypeDetails {}
export interface VaultSettingCreationInputPropertiesOrVaultSettingProperties {
	readonly migrationSolutionId?: string | undefined;
	readonly vmwareToAzureProviderType?: string | undefined;
}
export interface VersionDetails {
	readonly expiryDate?: string | undefined;
	readonly status?:
		| ("Deprecated" | "NotSupported" | "SecurityUpdateRequired" | "Supported" | "UpdateRequired")
		| undefined;
	readonly version?: string | undefined;
}
export interface VMNicDetails {
	readonly enableAcceleratedNetworkingOnRecovery?: boolean | undefined;
	readonly enableAcceleratedNetworkingOnTfo?: boolean | undefined;
	readonly ipConfigs?: IPConfigDetails[] | undefined;
	readonly nicId?: string | undefined;
	readonly recoveryNetworkSecurityGroupId?: string | undefined;
	readonly recoveryNicName?: string | undefined;
	readonly recoveryNicResourceGroupName?: string | undefined;
	readonly recoveryVMNetworkId?: string | undefined;
	readonly replicaNicId?: string | undefined;
	readonly reuseExistingNic?: boolean | undefined;
	readonly selectionType?: string | undefined;
	readonly sourceNicArmId?: string | undefined;
	readonly targetNicName?: string | undefined;
	readonly tfoNetworkSecurityGroupId?: string | undefined;
	readonly tfoRecoveryNicName?: string | undefined;
	readonly tfoRecoveryNicResourceGroupName?: string | undefined;
	readonly tfoReuseExistingNic?: boolean | undefined;
	readonly tfoVMNetworkId?: string | undefined;
	readonly vMNetworkName?: string | undefined;
}
export interface VMwareCbtDiskInput {
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId: string;
	readonly diskType?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS") | undefined;
	readonly isOSDisk: string;
	readonly logStorageAccountId: string;
	readonly logStorageAccountSasSecretName: string;
}
export interface VMwareCbtEnableMigrationInputSeedDiskTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VMwareCbtEnableMigrationInputTargetDiskTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VMwareCbtEnableMigrationInputTargetNicTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VMwareCbtEnableMigrationInputTargetVmTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VMwareCbtNicDetails {
	readonly isPrimaryNic?: string | undefined;
	readonly isSelectedForMigration?: string | undefined;
	readonly nicId?: string | undefined;
	readonly sourceIPAddress?: string | undefined;
	readonly sourceIPAddressType?: ("Dynamic" | "Static") | undefined;
	readonly sourceNetworkId?: string | undefined;
	readonly targetIPAddress?: string | undefined;
	readonly targetIPAddressType?: ("Dynamic" | "Static") | undefined;
	readonly targetNicName?: string | undefined;
	readonly targetSubnetName?: string | undefined;
}
export interface VMwareCbtProtectedDiskDetails {
	readonly capacityInBytes?: number | undefined;
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskId?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskPath?: string | undefined;
	readonly diskType?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS") | undefined;
	readonly isOSDisk?: string | undefined;
	readonly logStorageAccountId?: string | undefined;
	readonly logStorageAccountSasSecretName?: string | undefined;
	readonly seedManagedDiskId?: string | undefined;
	readonly targetDiskName?: string | undefined;
	readonly targetManagedDiskId?: string | undefined;
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
