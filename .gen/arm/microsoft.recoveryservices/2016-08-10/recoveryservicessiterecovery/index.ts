import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_replicationAlertSettings
	extends ArmResource<vaults_replicationAlertSettingsComponentInputs>
	implements vaults_replicationAlertSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationAlertSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationAlertSettings", "2016-08-10", options);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationAlertSettings";
}
export interface vaults_replicationAlertSettingsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationEvents", "2016-08-10", options);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationEvents";
}
export interface vaults_replicationEventsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationFabrics", "2016-08-10", options);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics";
}
export interface vaults_replicationFabricsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationLogicalNetworks";
}
export interface vaults_replicationFabrics_replicationLogicalNetworksComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks";
}
export interface vaults_replicationFabrics_replicationNetworksComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings";
}
export interface vaults_replicationFabrics_replicationNetworks_replicationNetworkMappingsComponentOutputs {
	readonly apiVersion: "2016-08-10";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings";
}
export interface vaults_replicationFabrics_replicationNetworks_replicationNetworkMappingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreateNetworkMappingInputPropertiesOrNetworkMappingProperties;
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers";
}
export interface vaults_replicationFabrics_replicationProtectionContainersComponentOutputs {
	readonly apiVersion: "2016-08-10";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers";
}
export interface vaults_replicationFabrics_replicationProtectionContainersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreateProtectionContainerInputPropertiesOrProtectionContainerProperties;
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectableItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectableItemsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItemsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems/recoveryPoints";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectedItems_recoveryPointsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings";
}
export interface vaults_replicationFabrics_replicationProtectionContainers_replicationProtectionContainerMappingsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders";
}
export interface vaults_replicationFabrics_replicationRecoveryServicesProvidersComponentOutputs {
	readonly apiVersion: "2016-08-10";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders";
}
export interface vaults_replicationFabrics_replicationRecoveryServicesProvidersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RecoveryServicesProviderProperties;
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications";
}
export interface vaults_replicationFabrics_replicationStorageClassificationsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings";
}
export interface vaults_replicationFabrics_replicationStorageClassifications_replicationStorageClassificationMappingsComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
			"2016-08-10",
			options,
		);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters";
}
export interface vaults_replicationFabrics_replicationvCentersComponentOutputs {
	readonly apiVersion: "2016-08-10";
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
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationJobs", "2016-08-10", options);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationJobs";
}
export interface vaults_replicationJobsComponentOutputs {
	readonly apiVersion: "2016-08-10";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationJobs";
}
export interface vaults_replicationJobsComponentInputs {
	readonly endTime?: string;
	readonly error?: ARMException;
	readonly location?: string;
	readonly name: string;
	readonly properties?: JobProperties;
	readonly startTime?: string;
	readonly status?: string;
}
export class vaults_replicationPolicies
	extends ArmResource<vaults_replicationPoliciesComponentInputs>
	implements vaults_replicationPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationPolicies", "2016-08-10", options);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationPolicies";
}
export interface vaults_replicationPoliciesComponentOutputs {
	readonly apiVersion: "2016-08-10";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationPolicies";
}
export interface vaults_replicationPoliciesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreatePolicyInputPropertiesOrPolicyProperties;
}
export class vaults_replicationRecoveryPlans
	extends ArmResource<vaults_replicationRecoveryPlansComponentInputs>
	implements vaults_replicationRecoveryPlansComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_replicationRecoveryPlansComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans", "2016-08-10", options);
	}
	public readonly apiVersion: "2016-08-10";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans";
}
export interface vaults_replicationRecoveryPlansComponentOutputs {
	readonly apiVersion: "2016-08-10";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans";
}
export interface vaults_replicationRecoveryPlansComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties;
}
export interface A2AProtectedDiskDetails {
	readonly dataPendingAtSourceAgentInMB?: number;
	readonly dataPendingInStagingStorageAccountInMB?: number;
	readonly diskCapacityInBytes?: number;
	readonly diskName?: string;
	readonly diskType?: string;
	readonly diskUri?: string;
	readonly monitoringJobType?: string;
	readonly monitoringPercentageCompletion?: number;
	readonly primaryDiskAzureStorageAccountId?: string;
	readonly primaryStagingAzureStorageAccountId?: string;
	readonly recoveryAzureStorageAccountId?: string;
	readonly recoveryDiskUri?: string;
	readonly resyncRequired?: boolean;
}
export interface A2AProtectedManagedDiskDetails {
	readonly dataPendingAtSourceAgentInMB?: number;
	readonly dataPendingInStagingStorageAccountInMB?: number;
	readonly diskCapacityInBytes?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskType?: string;
	readonly monitoringJobType?: string;
	readonly monitoringPercentageCompletion?: number;
	readonly primaryStagingAzureStorageAccountId?: string;
	readonly recoveryAzureResourceGroupId?: string;
	readonly recoveryDiskId?: string;
	readonly resyncRequired?: boolean;
}
export interface A2AVmDiskInputDetails {
	readonly diskUri?: string;
	readonly primaryStagingAzureStorageAccountId?: string;
	readonly recoveryAzureStorageAccountId?: string;
}
export interface A2AVmManagedDiskInputDetails {
	readonly diskId?: string;
	readonly primaryStagingAzureStorageAccountId?: string;
	readonly recoveryResourceGroupId?: string;
}
export interface AddVCenterRequestPropertiesOrVCenterProperties {
	readonly discoveryStatus?: string;
	readonly fabricArmResourceName?: string;
	readonly friendlyName?: string;
	readonly infrastructureId?: string;
	readonly internalId?: string;
	readonly ipAddress?: string;
	readonly lastHeartbeat?: string;
	readonly port?: string;
	readonly processServerId?: string;
	readonly runAsAccountId?: string;
}
export interface ARMException {
	readonly code?: string;
	readonly details?: ARMExceptionDetails[];
	readonly innererror?: ARMInnerError;
	readonly message?: string;
	readonly target?: string;
}
export interface ARMExceptionDetails {
	readonly activityId?: string;
	readonly clientRequestId?: string;
	readonly code?: string;
	readonly message?: string;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
	readonly target?: string;
}
export interface ARMInnerError {
	readonly cloudId?: string;
	readonly containerId?: string;
	readonly fabricId?: string;
	readonly hVClusterId?: string;
	readonly hVHostId?: string;
	readonly liveId?: string;
	readonly methodStatus?: MethodCallStatus;
	readonly networkId?: string;
	readonly resourceId?: string;
	readonly resourceName?: string;
	readonly serializedSRSLogContext?: string;
	readonly source?: string;
	readonly subscriptionId?: string;
	readonly trace?: string;
	readonly vmId?: string;
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
	readonly roleAssignments?: RoleAssignment[];
	readonly tags?: AzureToAzureVmSyncedConfigDetailsTags;
}
export interface AzureToAzureVmSyncedConfigDetailsTags {
	readonly [key: string]: string;
}
export interface AzureVmDiskDetails {
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
	readonly recoveryNetworkId?: string;
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
	readonly PolicyId?: string;
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
export interface CreateRecoveryPlanInputPropertiesOrRecoveryPlanProperties {
	readonly allowedOperations?: string[];
	readonly currentScenario?: CurrentScenarioDetails;
	readonly currentScenarioStatus?: string;
	readonly currentScenarioStatusDescription?: string;
	readonly failoverDeploymentModel?: "Classic" | "NotApplicable";
	readonly friendlyName?: string;
	readonly groups: RecoveryPlanGroup[];
	readonly lastPlannedFailoverTime?: string;
	readonly lastTestFailoverTime?: string;
	readonly lastUnplannedFailoverTime?: string;
	readonly primaryFabricFriendlyName?: string;
	readonly primaryFabricId: string;
	readonly recoveryFabricFriendlyName?: string;
	readonly recoveryFabricId: string;
	readonly replicationProviders?: string[];
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
export interface DiskVolumeDetails {
	readonly label?: string;
	readonly name?: string;
}
export interface EnableProtectionInputPropertiesOrReplicationProtectedItemProperties {
	readonly activeLocation?: string;
	readonly allowedOperations?: string[];
	readonly currentScenario?: CurrentScenarioDetails;
	readonly failoverHealth?: string;
	readonly failoverHealthErrors?: HealthError[];
	readonly failoverRecoveryPointId?: string;
	readonly friendlyName?: string;
	readonly lastSuccessfulFailoverTime?: string;
	readonly lastSuccessfulTestFailoverTime?: string;
	readonly policyFriendlyName?: string;
	readonly policyId?: string;
	readonly primaryFabricFriendlyName?: string;
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
	readonly replicationHealthErrors?: HealthError[];
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
	readonly childErrors?: HealthError[];
	readonly creationTimeUtc?: string;
	readonly entityId?: string;
	readonly errorCode?: string;
	readonly errorLevel?: string;
	readonly errorMessage?: string;
	readonly errorSource?: string;
	readonly errorType?: string;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
	readonly recoveryProviderErrorMessage?: string;
}
export interface IdentityInformation {
	readonly aadAuthority?: string;
	readonly applicationId?: string;
	readonly audience?: string;
	readonly certificateThumbprint?: string;
	readonly identityProviderType?: "CustomerActiveDirectory";
	readonly objectId?: string;
	readonly tenantId?: string;
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
	readonly agentUpdateStatus?: string;
	readonly agentVersion?: string;
	readonly postUpdateRebootStatus?: string;
}
export interface InMageAzureV2ProtectedDiskDetails {
	readonly diskCapacityInBytes?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskResized?: string;
	readonly fileSystemCapacityInBytes?: number;
	readonly healthErrorCode?: string;
	readonly lastRpoCalculatedTime?: string;
	readonly protectionStage?: string;
	readonly psDataInMegaBytes?: number;
	readonly resyncDurationInSeconds?: number;
	readonly resyncProgressPercentage?: number;
	readonly resyncRequired?: string;
	readonly rpoInSeconds?: number;
	readonly sourceDataInMegaBytes?: number;
	readonly targetDataInMegaBytes?: number;
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
export interface InMageProtectedDiskDetails {
	readonly diskCapacityInBytes?: number;
	readonly diskId?: string;
	readonly diskName?: string;
	readonly diskResized?: string;
	readonly fileSystemCapacityInBytes?: number;
	readonly healthErrorCode?: string;
	readonly lastRpoCalculatedTime?: string;
	readonly protectionStage?: string;
	readonly psDataInMB?: number;
	readonly resyncDurationInSeconds?: number;
	readonly resyncProgressPercentage?: number;
	readonly resyncRequired?: string;
	readonly rpoInSeconds?: number;
	readonly sourceDataInMB?: number;
	readonly targetDataInMB?: number;
}
export interface InMageReplicationDetailsConsistencyPoints {
	readonly [key: string]: string;
}
export interface InMageVolumeExclusionOptions {
	readonly OnlyExcludeIfSingleVolume?: string;
	readonly volumeLabel?: string;
}
export interface InputEndpoint {
	readonly endpointName?: string;
	readonly privatePort?: number;
	readonly protocol?: string;
	readonly publicPort?: number;
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
export interface LogicalNetworkProperties {
	readonly friendlyName?: string;
	readonly logicalNetworkDefinitionsStatus?: string;
	readonly logicalNetworkUsage?: string;
	readonly networkVirtualizationStatus?: string;
}
export interface MasterTargetServer {
	readonly agentVersion?: string;
	readonly dataStores?: DataStore[];
	readonly diskCount?: number;
	readonly id?: string;
	readonly ipAddress?: string;
	readonly lastHeartbeat?: string;
	readonly name?: string;
	readonly osType?: string;
	readonly osVersion?: string;
	readonly retentionVolumes?: RetentionVolume[];
	readonly validationErrors?: HealthError[];
	readonly versionStatus?: string;
}
export interface MethodCallStatus {
	readonly containsGenericParameters?: string;
	readonly isVirtual?: string;
	readonly parameters?: string[];
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
	readonly agentVersion?: string;
	readonly availableMemoryInBytes?: number;
	readonly availableSpaceInBytes?: number;
	readonly cpuLoad?: string;
	readonly cpuLoadStatus?: string;
	readonly friendlyName?: string;
	readonly hostId?: string;
	readonly id?: string;
	readonly ipAddress?: string;
	readonly lastHeartbeat?: string;
	readonly machineCount?: string;
	readonly memoryUsageStatus?: string;
	readonly mobilityServiceUpdates?: MobilityServiceUpdate[];
	readonly osType?: string;
	readonly osVersion?: string;
	readonly psServiceStatus?: string;
	readonly replicationPairCount?: string;
	readonly spaceUsageStatus?: string;
	readonly sslCertExpiryDate?: string;
	readonly sslCertExpiryRemainingDays?: number;
	readonly systemLoad?: string;
	readonly systemLoadStatus?: string;
	readonly totalMemoryInBytes?: number;
	readonly totalSpaceInBytes?: number;
	readonly versionStatus?: string;
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
export interface ProtectionContainerMappingProviderSpecificDetails {
	readonly instanceType?: string;
}
export interface ProviderError {
	readonly errorCode?: number;
	readonly errorId?: string;
	readonly errorMessage?: string;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
}
export interface ProviderSpecificRecoveryPointDetails {
	readonly Type?: string;
}
export interface RecoveryPlanAction {
	readonly actionName: string;
	readonly customDetails: RecoveryPlanActionDetails;
	readonly failoverDirections: "PrimaryToRecovery"[];
	readonly failoverTypes:
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
		| "TestFailoverCleanup"[];
}
export interface RecoveryPlanActionDetails {}
export interface RecoveryPlanGroup {
	readonly endGroupActions?: RecoveryPlanAction[];
	readonly groupType: "Boot" | "Failover";
	readonly replicationProtectedItems?: RecoveryPlanProtectedItem[];
	readonly startGroupActions?: RecoveryPlanAction[];
}
export interface RecoveryPlanProtectedItem {
	readonly id?: string;
	readonly virtualMachineId?: string;
}
export interface RecoveryPointProperties {
	readonly providerSpecificDetails?: ProviderSpecificRecoveryPointDetails;
	readonly recoveryPointTime?: string;
	readonly recoveryPointType?: string;
}
export interface RecoveryServicesProviderProperties {
	readonly allowedScenarios?: string[];
	readonly connectionStatus?: string;
	readonly draIdentifier?: string;
	readonly fabricFriendlyName?: string;
	readonly fabricType?: string;
	readonly friendlyName?: string;
	readonly healthErrorDetails?: HealthError[];
	readonly identityDetails?: IdentityInformation;
	readonly lastHeartBeat?: string;
	readonly protectedItemCount?: number;
	readonly providerVersion?: string;
	readonly providerVersionExpiryDate?: string;
	readonly providerVersionState?: string;
	readonly serverVersion?: string;
}
export interface ReplicationProviderSpecificContainerCreationInput {}
export interface ReplicationProviderSpecificContainerMappingInput {
	readonly instanceType?: string;
}
export interface RetentionVolume {
	readonly capacityInBytes?: number;
	readonly freeSpaceInBytes?: number;
	readonly thresholdPercentage?: number;
	readonly volumeName?: string;
}
export interface RoleAssignment {
	readonly id?: string;
	readonly name?: string;
	readonly principalId?: string;
	readonly roleDefinitionId?: string;
	readonly scope?: string;
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
export interface VMNicDetails {
	readonly ipAddressType?: string;
	readonly nicId?: string;
	readonly primaryNicStaticIPAddress?: string;
	readonly recoveryNicIpAddressType?: string;
	readonly recoveryVMNetworkId?: string;
	readonly recoveryVMSubnetName?: string;
	readonly replicaNicId?: string;
	readonly replicaNicStaticIPAddress?: string;
	readonly selectionType?: string;
	readonly sourceNicArmId?: string;
	readonly vMNetworkName?: string;
	readonly vMSubnetName?: string;
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
	"vaults/replicationRecoveryPlans": vaults_replicationRecoveryPlans,
};
