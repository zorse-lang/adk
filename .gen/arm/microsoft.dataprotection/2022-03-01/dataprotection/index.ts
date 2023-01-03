import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class backupVaults extends ArmResource<backupVaultsComponentInputs> implements backupVaultsComponentOutputs {
	constructor(entity: ADKEntity, options: backupVaultsComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults";
}
export interface backupVaultsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults";
}
export interface backupVaultsComponentInputs {
	readonly eTag?: string | undefined;
	readonly identity?: DppIdentityDetails | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: BackupVault;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DppTrackedResourceTags | undefined;
}
export class backupVaults_backupInstances
	extends ArmResource<backupVaults_backupInstancesComponentInputs>
	implements backupVaults_backupInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults/backupInstances", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupInstances";
}
export interface backupVaults_backupInstancesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupInstances";
}
export interface backupVaults_backupInstancesComponentInputs {
	readonly name: string;
	readonly properties?: BackupInstance | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-03-01",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/operationResults";
}
export interface backupVaults_backupInstances_operationResultsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/operationResults";
}
export interface backupVaults_backupInstances_operationResultsComponentInputs {
	readonly name: string;
	readonly properties?: BackupInstance | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-03-01",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints";
}
export interface backupVaults_backupInstances_recoveryPointsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupInstances/recoveryPoints";
}
export interface backupVaults_backupInstances_recoveryPointsComponentInputs {
	readonly name: string;
	readonly properties?: AzureBackupRecoveryPoint | undefined;
	readonly systemData?: SystemData | undefined;
}
export class backupVaults_backupJobs
	extends ArmResource<backupVaults_backupJobsComponentInputs>
	implements backupVaults_backupJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupJobsComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults/backupJobs", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupJobs";
}
export interface backupVaults_backupJobsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupJobs";
}
export interface backupVaults_backupJobsComponentInputs {
	readonly name: string;
	readonly properties?: AzureBackupJob | undefined;
	readonly systemData?: SystemData | undefined;
}
export class backupVaults_backupPolicies
	extends ArmResource<backupVaults_backupPoliciesComponentInputs>
	implements backupVaults_backupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_backupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults/backupPolicies", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/backupPolicies";
}
export interface backupVaults_backupPoliciesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/backupPolicies";
}
export interface backupVaults_backupPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BaseBackupPolicy | undefined;
	readonly systemData?: SystemData | undefined;
}
export class backupVaults_operationResults
	extends ArmResource<backupVaults_operationResultsComponentInputs>
	implements backupVaults_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: backupVaults_operationResultsComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/backupVaults/operationResults", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/backupVaults/operationResults";
}
export interface backupVaults_operationResultsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/backupVaults/operationResults";
}
export interface backupVaults_operationResultsComponentInputs {
	readonly eTag?: string | undefined;
	readonly identity?: DppIdentityDetails | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BackupVault | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DppTrackedResourceTags | undefined;
}
export class resourceGuards extends ArmResource<resourceGuardsComponentInputs> implements resourceGuardsComponentOutputs {
	constructor(entity: ADKEntity, options: resourceGuardsComponentInputs) {
		super(entity, options.name, "Microsoft.DataProtection/resourceGuards", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataProtection/resourceGuards";
}
export interface resourceGuardsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataProtection/resourceGuards";
}
export interface resourceGuardsComponentInputs {
	readonly eTag?: string | undefined;
	readonly identity?: DppIdentityDetails | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceGuard | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DppTrackedResourceTags | undefined;
}
export interface AdhocBasedTaggingCriteria {
	readonly tagInfo?: RetentionTag | undefined;
}
export interface AuthCredentials {}
export interface AzureBackupJob {
	readonly activityID: string;
	readonly backupInstanceFriendlyName: string;
	readonly backupInstanceId?: string | undefined;
	readonly dataSourceId: string;
	readonly dataSourceLocation: string;
	readonly dataSourceName: string;
	readonly dataSourceSetName?: string | undefined;
	readonly dataSourceType: string;
	readonly destinationDataStoreName?: string | undefined;
	readonly duration?: string | undefined;
	readonly endTime?: string | undefined;
	readonly errorDetails?: UserFacingError[] | undefined;
	readonly etag?: string | undefined;
	readonly extendedInfo?: JobExtendedInfo | undefined;
	readonly isUserTriggered: boolean;
	readonly operation: string;
	readonly operationCategory: string;
	readonly policyId?: string | undefined;
	readonly policyName?: string | undefined;
	readonly progressEnabled: boolean;
	readonly progressUrl?: string | undefined;
	readonly restoreType?: string | undefined;
	readonly sourceDataStoreName?: string | undefined;
	readonly sourceResourceGroup: string;
	readonly sourceSubscriptionID: string;
	readonly startTime: string;
	readonly status: string;
	readonly subscriptionId: string;
	readonly supportedActions: string[];
	readonly vaultName: string;
}
export interface AzureBackupRecoveryPoint {}
export interface BackupCriteria {}
export interface BackupInstance {
	readonly currentProtectionState?:
		| (
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
				| "UpdatingProtection"
		  )
		| undefined;
	readonly datasourceAuthCredentials?: AuthCredentials | undefined;
	readonly dataSourceInfo: Datasource;
	readonly dataSourceSetInfo?: DatasourceSet | undefined;
	readonly friendlyName?: string | undefined;
	readonly objectType: string;
	readonly policyInfo: PolicyInfo;
	readonly protectionErrorDetails?: UserFacingError | undefined;
	readonly protectionStatus?: ProtectionStatusDetails | undefined;
	readonly provisioningState?: string | undefined;
	readonly validationType?: ("DeepValidation" | "ShallowValidation") | undefined;
}
export interface BackupParameters {}
export interface BackupSchedule {
	readonly repeatingTimeIntervals: string[];
	readonly timeZone?: string | undefined;
}
export interface BackupVault {
	readonly provisioningState?: ("Failed" | "Provisioning" | "Succeeded" | "Unknown" | "Updating") | undefined;
	readonly resourceMoveDetails?: ResourceMoveDetails | undefined;
	readonly resourceMoveState?:
		| (
				| "CommitFailed"
				| "CommitTimedout"
				| "CriticalFailure"
				| "Failed"
				| "InProgress"
				| "MoveSucceeded"
				| "PartialSuccess"
				| "PrepareFailed"
				| "PrepareTimedout"
				| "Unknown"
		  )
		| undefined;
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
	readonly datasourceType?: string | undefined;
	readonly objectType?: string | undefined;
	readonly resourceID: string;
	readonly resourceLocation?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly resourceUri?: string | undefined;
}
export interface DatasourceSet {
	readonly datasourceType?: string | undefined;
	readonly objectType?: string | undefined;
	readonly resourceID: string;
	readonly resourceLocation?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly resourceUri?: string | undefined;
}
export interface DataStoreInfoBase {
	readonly dataStoreType: "ArchiveStore" | "OperationalStore" | "VaultStore";
	readonly objectType: string;
}
export interface DataStoreParameters {
	readonly dataStoreType: "ArchiveStore" | "OperationalStore" | "VaultStore";
}
export interface Day {
	readonly date?: number | undefined;
	readonly isLast?: boolean | undefined;
}
export interface DeleteOption {
	readonly duration: string;
}
export interface DppIdentityDetails {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
}
export interface DppTrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InnerError {
	readonly additionalInfo?: InnerErrorAdditionalInfo | undefined;
	readonly code?: string | undefined;
	readonly embeddedInnerError?: InnerError | undefined;
}
export interface InnerErrorAdditionalInfo {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobExtendedInfo {
	readonly additionalDetails?: JobExtendedInfoAdditionalDetails | undefined;
	readonly backupInstanceState?: string | undefined;
	readonly dataTransferredInBytes?: number | undefined;
	readonly recoveryDestination?: string | undefined;
	readonly sourceRecoverPoint?: RestoreJobRecoveryPointDetails | undefined;
	readonly subTasks?: JobSubTask[] | undefined;
	readonly targetRecoverPoint?: RestoreJobRecoveryPointDetails | undefined;
}
export interface JobExtendedInfoAdditionalDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobSubTask {
	readonly additionalDetails?: JobSubTaskAdditionalDetails | undefined;
	readonly taskId: number;
	readonly taskName: string;
	readonly taskProgress?: string | undefined;
	readonly taskStatus: string;
}
export interface JobSubTaskAdditionalDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PolicyInfo {
	readonly policyId: string;
	readonly policyParameters?: PolicyParameters | undefined;
	readonly policyVersion?: string | undefined;
}
export interface PolicyParameters {
	readonly dataStoreParametersList?: DataStoreParameters[] | undefined;
}
export interface ProtectionStatusDetails {
	readonly errorDetails?: UserFacingError | undefined;
	readonly status?:
		| (
				| "ConfiguringProtection"
				| "ConfiguringProtectionFailed"
				| "ProtectionConfigured"
				| "ProtectionStopped"
				| "SoftDeleted"
				| "SoftDeleting"
		  )
		| undefined;
}
export interface RecoveryPointDataStoreDetails {
	readonly creationTime?: string | undefined;
	readonly expiryTime?: string | undefined;
	readonly id?: string | undefined;
	readonly metaData?: string | undefined;
	readonly rehydrationExpiryTime?: string | undefined;
	readonly rehydrationStatus?:
		| ("COMPLETED" | "CREATE_IN_PROGRESS" | "DELETED" | "DELETE_IN_PROGRESS" | "FAILED")
		| undefined;
	readonly state?: string | undefined;
	readonly type?: string | undefined;
	readonly visible?: boolean | undefined;
}
export interface ResourceGuard {
	readonly allowAutoApprovals?: boolean | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Failed" | "Provisioning" | "Succeeded" | "Unknown" | "Updating") | undefined;
	readonly resourceGuardOperations?: ResourceGuardOperation[] | undefined;
	readonly vaultCriticalOperationExclusionList?: string[] | undefined;
}
export interface ResourceGuardOperation {
	readonly requestResourceType?: string | undefined;
	readonly vaultCriticalOperation?: string | undefined;
}
export interface ResourceMoveDetails {
	readonly completionTimeUtc?: string | undefined;
	readonly operationId?: string | undefined;
	readonly sourceResourcePath?: string | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly targetResourcePath?: string | undefined;
}
export interface RestoreJobRecoveryPointDetails {
	readonly recoveryPointID?: string | undefined;
	readonly recoveryPointTime?: string | undefined;
}
export interface RetentionTag {
	readonly eTag?: string | undefined;
	readonly id?: string | undefined;
	readonly tagName: string;
}
export interface SecretStoreResource {
	readonly secretStoreType: "AzureKeyVault" | "Invalid";
	readonly uri?: string | undefined;
	readonly value?: string | undefined;
}
export interface SourceLifeCycle {
	readonly deleteAfter: DeleteOption;
	readonly sourceDataStore: DataStoreInfoBase;
	readonly targetDataStoreCopySettings?: TargetCopySetting[] | undefined;
}
export interface StorageSetting {
	readonly datastoreType?: ("ArchiveStore" | "SnapshotStore" | "VaultStore") | undefined;
	readonly type?: ("GeoRedundant" | "LocallyRedundant") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TaggingCriteria {
	readonly criteria?: BackupCriteria[] | undefined;
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
	readonly code?: string | undefined;
	readonly details?: UserFacingError[] | undefined;
	readonly innerError?: InnerError | undefined;
	readonly isRetryable?: boolean | undefined;
	readonly isUserError?: boolean | undefined;
	readonly message?: string | undefined;
	readonly properties?: UserFacingErrorProperties | undefined;
	readonly recommendedAction?: string[] | undefined;
	readonly target?: string | undefined;
}
export interface UserFacingErrorProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	backupVaults: backupVaults,
	"backupVaults/backupInstances": backupVaults_backupInstances,
	"backupVaults/backupInstances/operationResults": backupVaults_backupInstances_operationResults,
	"backupVaults/backupInstances/recoveryPoints": backupVaults_backupInstances_recoveryPoints,
	"backupVaults/backupJobs": backupVaults_backupJobs,
	"backupVaults/backupPolicies": backupVaults_backupPolicies,
	"backupVaults/operationResults": backupVaults_operationResults,
	resourceGuards: resourceGuards,
};
