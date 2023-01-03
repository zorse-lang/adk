import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_backupconfig
	extends ArmResource<vaults_backupconfigComponentInputs>
	implements vaults_backupconfigComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupconfigComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupconfig", "2019-05-13", options);
	}
	public readonly apiVersion: "2019-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupconfig";
}
export interface vaults_backupconfigComponentOutputs {
	readonly apiVersion: "2019-05-13";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupconfig";
}
export interface vaults_backupconfigComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BackupResourceVaultConfig | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupFabrics_protectionContainers_protectedItems
	extends ArmResource<vaults_backupFabrics_protectionContainers_protectedItemsComponentInputs>
	implements vaults_backupFabrics_protectionContainers_protectedItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupFabrics_protectionContainers_protectedItemsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems",
			"2019-05-13",
			options,
		);
	}
	public readonly apiVersion: "2019-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems";
}
export interface vaults_backupFabrics_protectionContainers_protectedItemsComponentOutputs {
	readonly apiVersion: "2019-05-13";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems";
}
export interface vaults_backupFabrics_protectionContainers_protectedItemsComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectedItem | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupFabrics_protectionContainers_protectedItems_operationResults
	extends ArmResource<vaults_backupFabrics_protectionContainers_protectedItems_operationResultsComponentInputs>
	implements vaults_backupFabrics_protectionContainers_protectedItems_operationResultsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_backupFabrics_protectionContainers_protectedItems_operationResultsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults",
			"2019-05-13",
			options,
		);
	}
	public readonly apiVersion: "2019-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults";
}
export interface vaults_backupFabrics_protectionContainers_protectedItems_operationResultsComponentOutputs {
	readonly apiVersion: "2019-05-13";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults";
}
export interface vaults_backupFabrics_protectionContainers_protectedItems_operationResultsComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectedItem | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupFabrics_protectionContainers_protectedItems_recoveryPoints
	extends ArmResource<vaults_backupFabrics_protectionContainers_protectedItems_recoveryPointsComponentInputs>
	implements vaults_backupFabrics_protectionContainers_protectedItems_recoveryPointsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: vaults_backupFabrics_protectionContainers_protectedItems_recoveryPointsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints",
			"2019-05-13",
			options,
		);
	}
	public readonly apiVersion: "2019-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints";
}
export interface vaults_backupFabrics_protectionContainers_protectedItems_recoveryPointsComponentOutputs {
	readonly apiVersion: "2019-05-13";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints";
}
export interface vaults_backupFabrics_protectionContainers_protectedItems_recoveryPointsComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RecoveryPoint | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupJobs
	extends ArmResource<vaults_backupJobsComponentInputs>
	implements vaults_backupJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupJobsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupJobs", "2019-05-13", options);
	}
	public readonly apiVersion: "2019-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupJobs";
}
export interface vaults_backupJobsComponentOutputs {
	readonly apiVersion: "2019-05-13";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupJobs";
}
export interface vaults_backupJobsComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: Job | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupPolicies
	extends ArmResource<vaults_backupPoliciesComponentInputs>
	implements vaults_backupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupPolicies", "2019-05-13", options);
	}
	public readonly apiVersion: "2019-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupPolicies";
}
export interface vaults_backupPoliciesComponentOutputs {
	readonly apiVersion: "2019-05-13";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupPolicies";
}
export interface vaults_backupPoliciesComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionPolicy | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupPolicies_operationResults
	extends ArmResource<vaults_backupPolicies_operationResultsComponentInputs>
	implements vaults_backupPolicies_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupPolicies_operationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupPolicies/operationResults",
			"2019-05-13",
			options,
		);
	}
	public readonly apiVersion: "2019-05-13";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupPolicies/operationResults";
}
export interface vaults_backupPolicies_operationResultsComponentOutputs {
	readonly apiVersion: "2019-05-13";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupPolicies/operationResults";
}
export interface vaults_backupPolicies_operationResultsComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionPolicy | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AzureFileshareProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string | undefined;
	readonly policyState?: string | undefined;
	readonly recoveryPointCount?: number | undefined;
	readonly resourceState?: string | undefined;
	readonly resourceStateSyncTime?: string | undefined;
}
export interface AzureIaaSVMErrorInfo {
	readonly errorCode?: number | undefined;
	readonly errorString?: string | undefined;
	readonly errorTitle?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface AzureIaaSVMHealthDetails {
	readonly code?: number | undefined;
	readonly message?: string | undefined;
	readonly recommendations?: string[] | undefined;
	readonly title?: string | undefined;
}
export interface AzureIaaSVMJobExtendedInfo {
	readonly dynamicErrorMessage?: string | undefined;
	readonly estimatedRemainingDuration?: string | undefined;
	readonly internalPropertyBag?: AzureIaaSVMJobExtendedInfoInternalPropertyBag | undefined;
	readonly progressPercentage?: number | undefined;
	readonly propertyBag?: AzureIaaSVMJobExtendedInfoPropertyBag | undefined;
	readonly tasksList?: AzureIaaSVMJobTaskDetails[] | undefined;
}
export interface AzureIaaSVMJobExtendedInfoInternalPropertyBag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AzureIaaSVMJobExtendedInfoPropertyBag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AzureIaaSVMJobTaskDetails {
	readonly duration?: string | undefined;
	readonly endTime?: string | undefined;
	readonly instanceId?: string | undefined;
	readonly progressPercentage?: number | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly taskExecutionDetails?: string | undefined;
	readonly taskId?: string | undefined;
}
export interface AzureIaaSVMProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string | undefined;
	readonly policyInconsistent?: boolean | undefined;
	readonly recoveryPointCount?: number | undefined;
}
export interface AzureSqlProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string | undefined;
	readonly policyState?: string | undefined;
	readonly recoveryPointCount?: number | undefined;
}
export interface AzureStorageErrorInfo {
	readonly errorCode?: number | undefined;
	readonly errorString?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface AzureStorageJobExtendedInfo {
	readonly dynamicErrorMessage?: string | undefined;
	readonly propertyBag?: AzureStorageJobExtendedInfoPropertyBag | undefined;
	readonly tasksList?: AzureStorageJobTaskDetails[] | undefined;
}
export interface AzureStorageJobExtendedInfoPropertyBag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AzureStorageJobTaskDetails {
	readonly status?: string | undefined;
	readonly taskId?: string | undefined;
}
export interface AzureVmWorkloadProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string | undefined;
	readonly policyState?: string | undefined;
	readonly recoveryPointCount?: number | undefined;
}
export interface AzureWorkloadErrorInfo {
	readonly additionalDetails?: string | undefined;
	readonly errorCode?: number | undefined;
	readonly errorString?: string | undefined;
	readonly errorTitle?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface AzureWorkloadJobExtendedInfo {
	readonly dynamicErrorMessage?: string | undefined;
	readonly propertyBag?: AzureWorkloadJobExtendedInfoPropertyBag | undefined;
	readonly tasksList?: AzureWorkloadJobTaskDetails[] | undefined;
}
export interface AzureWorkloadJobExtendedInfoPropertyBag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AzureWorkloadJobTaskDetails {
	readonly status?: string | undefined;
	readonly taskId?: string | undefined;
}
export interface AzureWorkloadSQLRecoveryPointExtendedInfo {
	readonly dataDirectoryPaths?: SQLDataDirectory[] | undefined;
	readonly dataDirectoryTimeInUTC?: string | undefined;
}
export interface BackupResourceVaultConfig {
	readonly enhancedSecurityState?: ("Disabled" | "Enabled" | "Invalid") | undefined;
	readonly softDeleteFeatureState?: ("Disabled" | "Enabled" | "Invalid") | undefined;
	readonly storageModelType?: ("GeoRedundant" | "Invalid" | "LocallyRedundant") | undefined;
	readonly storageType?: ("GeoRedundant" | "Invalid" | "LocallyRedundant") | undefined;
	readonly storageTypeState?: ("Invalid" | "Locked" | "Unlocked") | undefined;
}
export interface BEKDetails {
	readonly secretData?: string | undefined;
	readonly secretUrl?: string | undefined;
	readonly secretVaultId?: string | undefined;
}
export interface DailyRetentionFormat {
	readonly daysOfTheMonth?: Day[] | undefined;
}
export interface DailyRetentionSchedule {
	readonly retentionDuration?: RetentionDuration | undefined;
	readonly retentionTimes?: string[] | undefined;
}
export interface Day {
	readonly date?: number | undefined;
	readonly isLast?: boolean | undefined;
}
export interface DiskExclusionProperties {
	readonly diskLunList?: number[] | undefined;
	readonly isInclusionList?: boolean | undefined;
}
export interface DiskInformation {
	readonly lun?: number | undefined;
	readonly name?: string | undefined;
}
export interface DpmErrorInfo {
	readonly errorString?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface DpmJobExtendedInfo {
	readonly dynamicErrorMessage?: string | undefined;
	readonly propertyBag?: DpmJobExtendedInfoPropertyBag | undefined;
	readonly tasksList?: DpmJobTaskDetails[] | undefined;
}
export interface DpmJobExtendedInfoPropertyBag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DpmJobTaskDetails {
	readonly duration?: string | undefined;
	readonly endTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly taskId?: string | undefined;
}
export interface DPMProtectedItemExtendedInfo {
	readonly diskStorageUsedInBytes?: string | undefined;
	readonly isCollocated?: boolean | undefined;
	readonly isPresentOnCloud?: boolean | undefined;
	readonly lastBackupStatus?: string | undefined;
	readonly lastRefreshedAt?: string | undefined;
	readonly oldestRecoveryPoint?: string | undefined;
	readonly onPremiseLatestRecoveryPoint?: string | undefined;
	readonly onPremiseOldestRecoveryPoint?: string | undefined;
	readonly onPremiseRecoveryPointCount?: number | undefined;
	readonly protectableObjectLoadPath?: DPMProtectedItemExtendedInfoProtectableObjectLoadPath | undefined;
	readonly protected?: boolean | undefined;
	readonly protectionGroupName?: string | undefined;
	readonly recoveryPointCount?: number | undefined;
	readonly totalDiskStorageSizeInBytes?: string | undefined;
}
export interface DPMProtectedItemExtendedInfoProtectableObjectLoadPath {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ErrorDetail {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface ExtendedProperties {
	readonly diskExclusionProperties?: DiskExclusionProperties | undefined;
}
export interface GenericProtectedItemSourceAssociations {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Job {
	readonly activityId?: string | undefined;
	readonly backupManagementType?:
		| (
				| "AzureBackupServer"
				| "AzureIaasVM"
				| "AzureSql"
				| "AzureStorage"
				| "AzureWorkload"
				| "DPM"
				| "DefaultBackup"
				| "Invalid"
				| "MAB"
		  )
		| undefined;
	readonly endTime?: string | undefined;
	readonly entityFriendlyName?: string | undefined;
	readonly operation?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
}
export interface KEKDetails {
	readonly keyBackupData?: string | undefined;
	readonly keyUrl?: string | undefined;
	readonly keyVaultId?: string | undefined;
}
export interface KeyAndSecretDetails {
	readonly bekDetails?: BEKDetails | undefined;
	readonly encryptionMechanism?: string | undefined;
	readonly kekDetails?: KEKDetails | undefined;
}
export interface MabErrorInfo {
	readonly errorString?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface MabFileFolderProtectedItemExtendedInfo {
	readonly lastRefreshedAt?: string | undefined;
	readonly oldestRecoveryPoint?: string | undefined;
	readonly recoveryPointCount?: number | undefined;
}
export interface MabJobExtendedInfo {
	readonly dynamicErrorMessage?: string | undefined;
	readonly propertyBag?: MabJobExtendedInfoPropertyBag | undefined;
	readonly tasksList?: MabJobTaskDetails[] | undefined;
}
export interface MabJobExtendedInfoPropertyBag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MabJobTaskDetails {
	readonly duration?: string | undefined;
	readonly endTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly taskId?: string | undefined;
}
export interface MonthlyRetentionSchedule {
	readonly retentionDuration?: RetentionDuration | undefined;
	readonly retentionScheduleDaily?: DailyRetentionFormat | undefined;
	readonly retentionScheduleFormatType?: ("Daily" | "Invalid" | "Weekly") | undefined;
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat | undefined;
	readonly retentionTimes?: string[] | undefined;
}
export interface PointInTimeRange {
	readonly endTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface ProtectedItem {
	readonly backupManagementType?:
		| (
				| "AzureBackupServer"
				| "AzureIaasVM"
				| "AzureSql"
				| "AzureStorage"
				| "AzureWorkload"
				| "DPM"
				| "DefaultBackup"
				| "Invalid"
				| "MAB"
		  )
		| undefined;
	readonly backupSetName?: string | undefined;
	readonly containerName?: string | undefined;
	readonly createMode?: ("Default" | "Invalid" | "Recover") | undefined;
	readonly deferredDeleteTimeInUTC?: string | undefined;
	readonly deferredDeleteTimeRemaining?: string | undefined;
	readonly isDeferredDeleteScheduleUpcoming?: boolean | undefined;
	readonly isRehydrate?: boolean | undefined;
	readonly isScheduledForDeferredDelete?: boolean | undefined;
	readonly lastRecoveryPoint?: string | undefined;
	readonly policyId?: string | undefined;
	readonly sourceResourceId?: string | undefined;
	readonly workloadType?:
		| (
				| "AzureFileShare"
				| "AzureSqlDb"
				| "Client"
				| "Exchange"
				| "FileFolder"
				| "GenericDataSource"
				| "Invalid"
				| "SAPAseDatabase"
				| "SAPHanaDatabase"
				| "SQLDB"
				| "SQLDataBase"
				| "Sharepoint"
				| "SystemState"
				| "VM"
				| "VMwareVM"
		  )
		| undefined;
}
export interface ProtectionPolicy {
	readonly protectedItemsCount?: number | undefined;
}
export interface RecoveryPoint {}
export interface RecoveryPointDiskConfiguration {
	readonly excludedDiskList?: DiskInformation[] | undefined;
	readonly includedDiskList?: DiskInformation[] | undefined;
	readonly numberOfDisksAttachedToVm?: number | undefined;
	readonly numberOfDisksIncludedInBackup?: number | undefined;
}
export interface RecoveryPointTierInformation {
	readonly status?: ("Deleted" | "Disabled" | "Invalid") | undefined;
	readonly type?: ("HardenedRP" | "InstantRP") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RetentionDuration {
	readonly count?: number | undefined;
	readonly durationType?: ("Days" | "Invalid" | "Months" | "Weeks" | "Years") | undefined;
}
export interface RetentionPolicy {}
export interface SchedulePolicy {}
export interface Settings {
	readonly isCompression?: boolean | undefined;
	readonly issqlcompression?: boolean | undefined;
	readonly timeZone?: string | undefined;
}
export interface SQLDataDirectory {
	readonly logicalName?: string | undefined;
	readonly path?: string | undefined;
	readonly type?: ("Data" | "Invalid" | "Log") | undefined;
}
export interface SubProtectionPolicy {
	readonly policyType?: ("CopyOnlyFull" | "Differential" | "Full" | "Invalid" | "Log") | undefined;
	readonly retentionPolicy?: RetentionPolicy | undefined;
	readonly schedulePolicy?: SchedulePolicy | undefined;
}
export interface WeeklyRetentionFormat {
	readonly daysOfTheWeek?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
	readonly weeksOfTheMonth?: ("First" | "Fourth" | "Invalid" | "Last" | "Second"[]) | undefined;
}
export interface WeeklyRetentionSchedule {
	readonly daysOfTheWeek?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
	readonly retentionDuration?: RetentionDuration | undefined;
	readonly retentionTimes?: string[] | undefined;
}
export interface YearlyRetentionSchedule {
	readonly monthsOfYear?:
		| (
				| "April"
				| "August"
				| "December"
				| "February"
				| "Invalid"
				| "January"
				| "July"
				| "June"
				| "March"
				| "May"
				| "November"
				| "October"[]
		  )
		| undefined;
	readonly retentionDuration?: RetentionDuration | undefined;
	readonly retentionScheduleDaily?: DailyRetentionFormat | undefined;
	readonly retentionScheduleFormatType?: ("Daily" | "Invalid" | "Weekly") | undefined;
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat | undefined;
	readonly retentionTimes?: string[] | undefined;
}
export default {
	"vaults/backupconfig": vaults_backupconfig,
	"vaults/backupFabrics/protectionContainers/protectedItems": vaults_backupFabrics_protectionContainers_protectedItems,
	"vaults/backupFabrics/protectionContainers/protectedItems/operationResults":
		vaults_backupFabrics_protectionContainers_protectedItems_operationResults,
	"vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints":
		vaults_backupFabrics_protectionContainers_protectedItems_recoveryPoints,
	"vaults/backupJobs": vaults_backupJobs,
	"vaults/backupPolicies": vaults_backupPolicies,
	"vaults/backupPolicies/operationResults": vaults_backupPolicies_operationResults,
};
