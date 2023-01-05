import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class backupVaults extends ArmResource<backupVaultsComponentInputs> implements backupVaultsComponentOutputs {
	constructor(entity: ADKEntity, options: backupVaultsComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults";
}
export interface backupVaultsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults";
}
export interface backupVaultsComponentInputs {
	readonly eTag?: string;
	readonly identity?: DppIdentityDetails;
	readonly location?: string;
	readonly name: string;
	readonly properties: BackupVault;
	readonly systemData?: SystemData;
	readonly tags?: DppTrackedResourceTags;
}
export class backupVaults_backupInstances
	extends ArmResource<backupVaults_backupInstancesComponentInputs>
	implements backupVaults_backupInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults/backupInstances", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupInstances";
}
export interface backupVaults_backupInstancesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupInstances";
}
export interface backupVaults_backupInstancesComponentInputs {
	readonly name: string;
	readonly properties?: BackupInstance;
	readonly systemData?: SystemData;
	readonly tags?: DppProxyResourceTags;
}
export class backupVaults_backupInstances_operationResults
	extends ArmResource<backupVaults_backupInstances_operationResultsComponentInputs>
	implements backupVaults_backupInstances_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupInstances_operationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataProtection/backupVaults/backupInstances/operationResults",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/operationResults";
}
export interface backupVaults_backupInstances_operationResultsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/operationResults";
}
export interface backupVaults_backupInstances_operationResultsComponentInputs {
	readonly name: string;
	readonly properties?: BackupInstance;
	readonly systemData?: SystemData;
	readonly tags?: DppProxyResourceTags;
}
export class backupVaults_backupInstances_recoveryPoints
	extends ArmResource<backupVaults_backupInstances_recoveryPointsComponentInputs>
	implements backupVaults_backupInstances_recoveryPointsComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupInstances_recoveryPointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints";
}
export interface backupVaults_backupInstances_recoveryPointsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints";
}
export interface backupVaults_backupInstances_recoveryPointsComponentInputs {
	readonly name: string;
	readonly properties?: AzureBackupRecoveryPoint;
	readonly systemData?: SystemData;
}
export class backupVaults_backupJobs
	extends ArmResource<backupVaults_backupJobsComponentInputs>
	implements backupVaults_backupJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupJobsComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults/backupJobs", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupJobs";
}
export interface backupVaults_backupJobsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupJobs";
}
export interface backupVaults_backupJobsComponentInputs {
	readonly name: string;
	readonly properties?: AzureBackupJob;
	readonly systemData?: SystemData;
}
export class backupVaults_backupPolicies
	extends ArmResource<backupVaults_backupPoliciesComponentInputs>
	implements backupVaults_backupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults/backupPolicies", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupPolicies";
}
export interface backupVaults_backupPoliciesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupPolicies";
}
export interface backupVaults_backupPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BaseBackupPolicy;
	readonly systemData?: SystemData;
}
export class backupVaults_backupResourceGuardProxies
	extends ArmResource<backupVaults_backupResourceGuardProxiesComponentInputs>
	implements backupVaults_backupResourceGuardProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupResourceGuardProxiesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataProtection/backupVaults/backupResourceGuardProxies",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupResourceGuardProxies";
}
export interface backupVaults_backupResourceGuardProxiesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupResourceGuardProxies";
}
export interface backupVaults_backupResourceGuardProxiesComponentInputs {
	readonly name: string;
	readonly properties?: ResourceGuardProxyBase;
	readonly systemData?: SystemData;
}
export class backupVaults_deletedBackupInstances
	extends ArmResource<backupVaults_deletedBackupInstancesComponentInputs>
	implements backupVaults_deletedBackupInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_deletedBackupInstancesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataProtection/backupVaults/deletedBackupInstances",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/deletedBackupInstances";
}
export interface backupVaults_deletedBackupInstancesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/deletedBackupInstances";
}
export interface backupVaults_deletedBackupInstancesComponentInputs {
	readonly name: string;
	readonly properties?: DeletedBackupInstance;
	readonly systemData?: SystemData;
}
export class backupVaults_operationResults
	extends ArmResource<backupVaults_operationResultsComponentInputs>
	implements backupVaults_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_operationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataProtection/backupVaults/operationResults",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/operationResults";
}
export interface backupVaults_operationResultsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/operationResults";
}
export interface backupVaults_operationResultsComponentInputs {
	readonly eTag?: string;
	readonly identity?: DppIdentityDetails;
	readonly location?: string;
	readonly name: string;
	readonly properties?: BackupVault;
	readonly systemData?: SystemData;
	readonly tags?: DppTrackedResourceTags;
}
export class resourceGuards extends ArmResource<resourceGuardsComponentInputs> implements resourceGuardsComponentOutputs {
	constructor(entity: ADKEntity, options: resourceGuardsComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/resourceGuards", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/resourceGuards";
}
export interface resourceGuardsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/resourceGuards";
}
export interface resourceGuardsComponentInputs {
	readonly eTag?: string;
	readonly identity?: DppIdentityDetails;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ResourceGuard;
	readonly systemData?: SystemData;
	readonly tags?: DppTrackedResourceTags;
}
export interface AdhocBasedTaggingCriteria {
	readonly tagInfo?: RetentionTag;
}
export interface AuthCredentials {}
export interface AzureBackupJob {
	readonly activityID: string;
	readonly backupInstanceFriendlyName: string;
	readonly backupInstanceId?: string;
	readonly dataSourceId: string;
	readonly dataSourceLocation: string;
	readonly dataSourceName: string;
	readonly dataSourceSetName?: string;
	readonly dataSourceType: string;
	readonly destinationDataStoreName?: string;
	readonly duration?: string;
	readonly endTime?: string;
	readonly errorDetails?: UserFacingError[];
	readonly etag?: string;
	readonly extendedInfo?: JobExtendedInfo;
	readonly isUserTriggered: boolean;
	readonly operation: string;
	readonly operationCategory: string;
	readonly policyId?: string;
	readonly policyName?: string;
	readonly progressEnabled: boolean;
	readonly progressUrl?: string;
	readonly restoreType?: string;
	readonly sourceDataStoreName?: string;
	readonly sourceResourceGroup: string;
	readonly sourceSubscriptionID: string;
	readonly startTime: string;
	readonly status: string;
	readonly subscriptionId: string;
	readonly supportedActions: string[];
	readonly vaultName: string;
}
export interface AzureBackupRecoveryPoint {}
export interface AzureMonitorAlertSettings {
	readonly alertsForAllJobFailures?: "Disabled" | "Enabled";
}
export interface BackupCriteria {}
export interface BackupInstance {
	readonly currentProtectionState?:
		| "BackupSchedulesSuspended"
		| "ConfiguringProtection"
		| "ConfiguringProtectionFailed"
		| "Invalid"
		| "NotProtected"
		| "ProtectionConfigured"
		| "ProtectionError"
		| "ProtectionStopped"
		| "RetentionSchedulesSuspended"
		| "SoftDeleted"
		| "SoftDeleting"
		| "UpdatingProtection";
	readonly datasourceAuthCredentials?: AuthCredentials;
	readonly dataSourceInfo: Datasource;
	readonly dataSourceSetInfo?: DatasourceSet;
	readonly friendlyName?: string;
	readonly objectType: string;
	readonly policyInfo: PolicyInfo;
	readonly protectionErrorDetails?: UserFacingError;
	readonly protectionStatus?: ProtectionStatusDetails;
	readonly provisioningState?: string;
	readonly validationType?: "DeepValidation" | "ShallowValidation";
}
export interface BackupParameters {}
export interface BackupSchedule {
	readonly repeatingTimeIntervals: string[];
	readonly timeZone?: string;
}
export interface BackupVault {
	readonly isVaultProtectedByResourceGuard?: boolean;
	readonly monitoringSettings?: MonitoringSettings;
	readonly provisioningState?: "Failed" | "Provisioning" | "Succeeded" | "Unknown" | "Updating";
	readonly resourceMoveDetails?: ResourceMoveDetails;
	readonly resourceMoveState?:
		| "CommitFailed"
		| "CommitTimedout"
		| "CriticalFailure"
		| "Failed"
		| "InProgress"
		| "MoveSucceeded"
		| "PartialSuccess"
		| "PrepareFailed"
		| "PrepareTimedout"
		| "Unknown";
	readonly securitySettings?: SecuritySettings;
	readonly storageSettings: StorageSetting[];
}
export interface BaseBackupPolicy {
	readonly datasourceTypes: string[];
}
export interface BasePolicyRule {
	readonly name: string;
}
export interface CopyOption {}
export interface Datasource {
	readonly datasourceType?: string;
	readonly objectType?: string;
	readonly resourceID: string;
	readonly resourceLocation?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
	readonly resourceUri?: string;
}
export interface DatasourceSet {
	readonly datasourceType?: string;
	readonly objectType?: string;
	readonly resourceID: string;
	readonly resourceLocation?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
	readonly resourceUri?: string;
}
export interface DataStoreInfoBase {
	readonly dataStoreType: "ArchiveStore" | "OperationalStore" | "VaultStore";
	readonly objectType: string;
}
export interface DataStoreParameters {
	readonly dataStoreType: "ArchiveStore" | "OperationalStore" | "VaultStore";
}
export interface Day {
	readonly date?: number;
	readonly isLast?: boolean;
}
export interface DeletedBackupInstance {
	readonly currentProtectionState?:
		| "BackupSchedulesSuspended"
		| "ConfiguringProtection"
		| "ConfiguringProtectionFailed"
		| "Invalid"
		| "NotProtected"
		| "ProtectionConfigured"
		| "ProtectionError"
		| "ProtectionStopped"
		| "RetentionSchedulesSuspended"
		| "SoftDeleted"
		| "SoftDeleting"
		| "UpdatingProtection";
	readonly datasourceAuthCredentials?: AuthCredentials;
	readonly dataSourceInfo: Datasource;
	readonly dataSourceSetInfo?: DatasourceSet;
	readonly deletionInfo?: DeletionInfo;
	readonly friendlyName?: string;
	readonly objectType: string;
	readonly policyInfo: PolicyInfo;
	readonly protectionErrorDetails?: UserFacingError;
	readonly protectionStatus?: ProtectionStatusDetails;
	readonly provisioningState?: string;
	readonly validationType?: "DeepValidation" | "ShallowValidation";
}
export interface DeleteOption {
	readonly duration: string;
}
export interface DeletionInfo {
	readonly billingEndDate?: string;
	readonly deleteActivityID?: string;
	readonly deletionTime?: string;
	readonly scheduledPurgeTime?: string;
}
export interface DppIdentityDetails {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
}
export interface DppProxyResourceTags {
	readonly [key: string]: string;
}
export interface DppTrackedResourceTags {
	readonly [key: string]: string;
}
export interface ImmutabilitySettings {
	readonly state?: "Disabled" | "Locked" | "Unlocked";
}
export interface InnerError {
	readonly additionalInfo?: InnerErrorAdditionalInfo;
	readonly code?: string;
	readonly embeddedInnerError?: InnerError;
}
export interface InnerErrorAdditionalInfo {
	readonly [key: string]: string;
}
export interface JobExtendedInfo {
	readonly additionalDetails?: JobExtendedInfoAdditionalDetails;
	readonly backupInstanceState?: string;
	readonly dataTransferredInBytes?: number;
	readonly recoveryDestination?: string;
	readonly sourceRecoverPoint?: RestoreJobRecoveryPointDetails;
	readonly subTasks?: JobSubTask[];
	readonly targetRecoverPoint?: RestoreJobRecoveryPointDetails;
}
export interface JobExtendedInfoAdditionalDetails {
	readonly [key: string]: string;
}
export interface JobSubTask {
	readonly additionalDetails?: JobSubTaskAdditionalDetails;
	readonly taskId: number;
	readonly taskName: string;
	readonly taskProgress?: string;
	readonly taskStatus: string;
}
export interface JobSubTaskAdditionalDetails {
	readonly [key: string]: string;
}
export interface MonitoringSettings {
	readonly azureMonitorAlertSettings?: AzureMonitorAlertSettings;
}
export interface PolicyInfo {
	readonly policyId: string;
	readonly policyParameters?: PolicyParameters;
	readonly policyVersion?: string;
}
export interface PolicyParameters {
	readonly dataStoreParametersList?: DataStoreParameters[];
}
export interface ProtectionStatusDetails {
	readonly errorDetails?: UserFacingError;
	readonly status?:
		| "ConfiguringProtection"
		| "ConfiguringProtectionFailed"
		| "ProtectionConfigured"
		| "ProtectionStopped"
		| "SoftDeleted"
		| "SoftDeleting";
}
export interface RecoveryPointDataStoreDetails {
	readonly creationTime?: string;
	readonly expiryTime?: string;
	readonly id?: string;
	readonly metaData?: string;
	readonly rehydrationExpiryTime?: string;
	readonly rehydrationStatus?: "COMPLETED" | "CREATE_IN_PROGRESS" | "DELETED" | "DELETE_IN_PROGRESS" | "FAILED";
	readonly state?: string;
	readonly type?: string;
	readonly visible?: boolean;
}
export interface ResourceGuard {
	readonly allowAutoApprovals?: boolean;
	readonly description?: string;
	readonly provisioningState?: "Failed" | "Provisioning" | "Succeeded" | "Unknown" | "Updating";
	readonly resourceGuardOperations?: ResourceGuardOperation[];
	readonly vaultCriticalOperationExclusionList?: string[];
}
export interface ResourceGuardOperation {
	readonly requestResourceType?: string;
	readonly vaultCriticalOperation?: string;
}
export interface ResourceGuardOperationDetail {
	readonly defaultResourceRequest?: string;
	readonly vaultCriticalOperation?: string;
}
export interface ResourceGuardProxyBase {
	readonly description?: string;
	readonly lastUpdatedTime?: string;
	readonly resourceGuardOperationDetails?: ResourceGuardOperationDetail[];
	readonly resourceGuardResourceId?: string;
}
export interface ResourceMoveDetails {
	readonly completionTimeUtc?: string;
	readonly operationId?: string;
	readonly sourceResourcePath?: string;
	readonly startTimeUtc?: string;
	readonly targetResourcePath?: string;
}
export interface RestoreJobRecoveryPointDetails {
	readonly recoveryPointID?: string;
	readonly recoveryPointTime?: string;
}
export interface RetentionTag {
	readonly eTag?: string;
	readonly id?: string;
	readonly tagName: string;
}
export interface SecretStoreResource {
	readonly secretStoreType: "AzureKeyVault" | "Invalid";
	readonly uri?: string;
	readonly value?: string;
}
export interface SecuritySettings {
	readonly immutabilitySettings?: ImmutabilitySettings;
	readonly softDeleteSettings?: SoftDeleteSettings;
}
export interface SoftDeleteSettings {
	readonly retentionDurationInDays?: number;
	readonly state?: "AlwaysOn" | "Off" | "On";
}
export interface SourceLifeCycle {
	readonly deleteAfter: DeleteOption;
	readonly sourceDataStore: DataStoreInfoBase;
	readonly targetDataStoreCopySettings?: TargetCopySetting[];
}
export interface StorageSetting {
	readonly datastoreType?: "ArchiveStore" | "SnapshotStore" | "VaultStore";
	readonly type?: "GeoRedundant" | "LocallyRedundant" | "ZoneRedundant";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TaggingCriteria {
	readonly criteria?: BackupCriteria[];
	readonly isDefault: boolean;
	readonly taggingPriority: number;
	readonly tagInfo: RetentionTag;
}
export interface TargetCopySetting {
	readonly copyAfter: CopyOption;
	readonly dataStore: DataStoreInfoBase;
}
export interface TriggerContext {}
export interface UserFacingError {
	readonly code?: string;
	readonly details?: UserFacingError[];
	readonly innerError?: InnerError;
	readonly isRetryable?: boolean;
	readonly isUserError?: boolean;
	readonly message?: string;
	readonly properties?: UserFacingErrorProperties;
	readonly recommendedAction?: string[];
	readonly target?: string;
}
export interface UserFacingErrorProperties {
	readonly [key: string]: string;
}
export default {
	backupVaults: backupVaults,
	"backupVaults/backupInstances": backupVaults_backupInstances,
	"backupVaults/backupInstances/operationResults": backupVaults_backupInstances_operationResults,
	"backupVaults/backupInstances/recoveryPoints": backupVaults_backupInstances_recoveryPoints,
	"backupVaults/backupJobs": backupVaults_backupJobs,
	"backupVaults/backupPolicies": backupVaults_backupPolicies,
	"backupVaults/backupResourceGuardProxies": backupVaults_backupResourceGuardProxies,
	"backupVaults/deletedBackupInstances": backupVaults_deletedBackupInstances,
	"backupVaults/operationResults": backupVaults_operationResults,
	resourceGuards: resourceGuards,
};
