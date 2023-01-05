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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: BackupResourceVaultConfig;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectedItem;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectedItem;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: RecoveryPoint;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: Job;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectionPolicy;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectionPolicy;
	readonly tags?: ResourceTags;
}
export interface AzureFileshareProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string;
	readonly policyState?: string;
	readonly recoveryPointCount?: number;
	readonly resourceState?: string;
	readonly resourceStateSyncTime?: string;
}
export interface AzureIaaSVMErrorInfo {
	readonly errorCode?: number;
	readonly errorString?: string;
	readonly errorTitle?: string;
	readonly recommendations?: string[];
}
export interface AzureIaaSVMHealthDetails {
	readonly code?: number;
	readonly message?: string;
	readonly recommendations?: string[];
	readonly title?: string;
}
export interface AzureIaaSVMJobExtendedInfo {
	readonly dynamicErrorMessage?: string;
	readonly estimatedRemainingDuration?: string;
	readonly internalPropertyBag?: AzureIaaSVMJobExtendedInfoInternalPropertyBag;
	readonly progressPercentage?: number;
	readonly propertyBag?: AzureIaaSVMJobExtendedInfoPropertyBag;
	readonly tasksList?: AzureIaaSVMJobTaskDetails[];
}
export interface AzureIaaSVMJobExtendedInfoInternalPropertyBag {
	readonly [key: string]: string;
}
export interface AzureIaaSVMJobExtendedInfoPropertyBag {
	readonly [key: string]: string;
}
export interface AzureIaaSVMJobTaskDetails {
	readonly duration?: string;
	readonly endTime?: string;
	readonly instanceId?: string;
	readonly progressPercentage?: number;
	readonly startTime?: string;
	readonly status?: string;
	readonly taskExecutionDetails?: string;
	readonly taskId?: string;
}
export interface AzureIaaSVMProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string;
	readonly policyInconsistent?: boolean;
	readonly recoveryPointCount?: number;
}
export interface AzureSqlProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string;
	readonly policyState?: string;
	readonly recoveryPointCount?: number;
}
export interface AzureStorageErrorInfo {
	readonly errorCode?: number;
	readonly errorString?: string;
	readonly recommendations?: string[];
}
export interface AzureStorageJobExtendedInfo {
	readonly dynamicErrorMessage?: string;
	readonly propertyBag?: AzureStorageJobExtendedInfoPropertyBag;
	readonly tasksList?: AzureStorageJobTaskDetails[];
}
export interface AzureStorageJobExtendedInfoPropertyBag {
	readonly [key: string]: string;
}
export interface AzureStorageJobTaskDetails {
	readonly status?: string;
	readonly taskId?: string;
}
export interface AzureVmWorkloadProtectedItemExtendedInfo {
	readonly oldestRecoveryPoint?: string;
	readonly policyState?: string;
	readonly recoveryPointCount?: number;
}
export interface AzureWorkloadErrorInfo {
	readonly additionalDetails?: string;
	readonly errorCode?: number;
	readonly errorString?: string;
	readonly errorTitle?: string;
	readonly recommendations?: string[];
}
export interface AzureWorkloadJobExtendedInfo {
	readonly dynamicErrorMessage?: string;
	readonly propertyBag?: AzureWorkloadJobExtendedInfoPropertyBag;
	readonly tasksList?: AzureWorkloadJobTaskDetails[];
}
export interface AzureWorkloadJobExtendedInfoPropertyBag {
	readonly [key: string]: string;
}
export interface AzureWorkloadJobTaskDetails {
	readonly status?: string;
	readonly taskId?: string;
}
export interface AzureWorkloadSQLRecoveryPointExtendedInfo {
	readonly dataDirectoryPaths?: SQLDataDirectory[];
	readonly dataDirectoryTimeInUTC?: string;
}
export interface BackupResourceVaultConfig {
	readonly enhancedSecurityState?: "Disabled" | "Enabled" | "Invalid";
	readonly softDeleteFeatureState?: "Disabled" | "Enabled" | "Invalid";
	readonly storageModelType?: "GeoRedundant" | "Invalid" | "LocallyRedundant";
	readonly storageType?: "GeoRedundant" | "Invalid" | "LocallyRedundant";
	readonly storageTypeState?: "Invalid" | "Locked" | "Unlocked";
}
export interface BEKDetails {
	readonly secretData?: string;
	readonly secretUrl?: string;
	readonly secretVaultId?: string;
}
export interface DailyRetentionFormat {
	readonly daysOfTheMonth?: Day[];
}
export interface DailyRetentionSchedule {
	readonly retentionDuration?: RetentionDuration;
	readonly retentionTimes?: string[];
}
export interface Day {
	readonly date?: number;
	readonly isLast?: boolean;
}
export interface DiskExclusionProperties {
	readonly diskLunList?: number[];
	readonly isInclusionList?: boolean;
}
export interface DiskInformation {
	readonly lun?: number;
	readonly name?: string;
}
export interface DpmErrorInfo {
	readonly errorString?: string;
	readonly recommendations?: string[];
}
export interface DpmJobExtendedInfo {
	readonly dynamicErrorMessage?: string;
	readonly propertyBag?: DpmJobExtendedInfoPropertyBag;
	readonly tasksList?: DpmJobTaskDetails[];
}
export interface DpmJobExtendedInfoPropertyBag {
	readonly [key: string]: string;
}
export interface DpmJobTaskDetails {
	readonly duration?: string;
	readonly endTime?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly taskId?: string;
}
export interface DPMProtectedItemExtendedInfo {
	readonly diskStorageUsedInBytes?: string;
	readonly isCollocated?: boolean;
	readonly isPresentOnCloud?: boolean;
	readonly lastBackupStatus?: string;
	readonly lastRefreshedAt?: string;
	readonly oldestRecoveryPoint?: string;
	readonly onPremiseLatestRecoveryPoint?: string;
	readonly onPremiseOldestRecoveryPoint?: string;
	readonly onPremiseRecoveryPointCount?: number;
	readonly protectableObjectLoadPath?: DPMProtectedItemExtendedInfoProtectableObjectLoadPath;
	readonly protected?: boolean;
	readonly protectionGroupName?: string;
	readonly recoveryPointCount?: number;
	readonly totalDiskStorageSizeInBytes?: string;
}
export interface DPMProtectedItemExtendedInfoProtectableObjectLoadPath {
	readonly [key: string]: string;
}
export interface ErrorDetail {
	readonly code?: string;
	readonly message?: string;
	readonly recommendations?: string[];
}
export interface ExtendedProperties {
	readonly diskExclusionProperties?: DiskExclusionProperties;
}
export interface GenericProtectedItemSourceAssociations {
	readonly [key: string]: string;
}
export interface Job {
	readonly activityId?: string;
	readonly backupManagementType?:
		| "AzureBackupServer"
		| "AzureIaasVM"
		| "AzureSql"
		| "AzureStorage"
		| "AzureWorkload"
		| "DPM"
		| "DefaultBackup"
		| "Invalid"
		| "MAB";
	readonly endTime?: string;
	readonly entityFriendlyName?: string;
	readonly operation?: string;
	readonly startTime?: string;
	readonly status?: string;
}
export interface KEKDetails {
	readonly keyBackupData?: string;
	readonly keyUrl?: string;
	readonly keyVaultId?: string;
}
export interface KeyAndSecretDetails {
	readonly bekDetails?: BEKDetails;
	readonly encryptionMechanism?: string;
	readonly kekDetails?: KEKDetails;
}
export interface MabErrorInfo {
	readonly errorString?: string;
	readonly recommendations?: string[];
}
export interface MabFileFolderProtectedItemExtendedInfo {
	readonly lastRefreshedAt?: string;
	readonly oldestRecoveryPoint?: string;
	readonly recoveryPointCount?: number;
}
export interface MabJobExtendedInfo {
	readonly dynamicErrorMessage?: string;
	readonly propertyBag?: MabJobExtendedInfoPropertyBag;
	readonly tasksList?: MabJobTaskDetails[];
}
export interface MabJobExtendedInfoPropertyBag {
	readonly [key: string]: string;
}
export interface MabJobTaskDetails {
	readonly duration?: string;
	readonly endTime?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly taskId?: string;
}
export interface MonthlyRetentionSchedule {
	readonly retentionDuration?: RetentionDuration;
	readonly retentionScheduleDaily?: DailyRetentionFormat;
	readonly retentionScheduleFormatType?: "Daily" | "Invalid" | "Weekly";
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat;
	readonly retentionTimes?: string[];
}
export interface PointInTimeRange {
	readonly endTime?: string;
	readonly startTime?: string;
}
export interface ProtectedItem {
	readonly backupManagementType?:
		| "AzureBackupServer"
		| "AzureIaasVM"
		| "AzureSql"
		| "AzureStorage"
		| "AzureWorkload"
		| "DPM"
		| "DefaultBackup"
		| "Invalid"
		| "MAB";
	readonly backupSetName?: string;
	readonly containerName?: string;
	readonly createMode?: "Default" | "Invalid" | "Recover";
	readonly deferredDeleteTimeInUTC?: string;
	readonly deferredDeleteTimeRemaining?: string;
	readonly isDeferredDeleteScheduleUpcoming?: boolean;
	readonly isRehydrate?: boolean;
	readonly isScheduledForDeferredDelete?: boolean;
	readonly lastRecoveryPoint?: string;
	readonly policyId?: string;
	readonly sourceResourceId?: string;
	readonly workloadType?:
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
		| "VMwareVM";
}
export interface ProtectionPolicy {
	readonly protectedItemsCount?: number;
}
export interface RecoveryPoint {}
export interface RecoveryPointDiskConfiguration {
	readonly excludedDiskList?: DiskInformation[];
	readonly includedDiskList?: DiskInformation[];
	readonly numberOfDisksAttachedToVm?: number;
	readonly numberOfDisksIncludedInBackup?: number;
}
export interface RecoveryPointTierInformation {
	readonly status?: "Deleted" | "Disabled" | "Invalid";
	readonly type?: "HardenedRP" | "InstantRP";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RetentionDuration {
	readonly count?: number;
	readonly durationType?: "Days" | "Invalid" | "Months" | "Weeks" | "Years";
}
export interface RetentionPolicy {}
export interface SchedulePolicy {}
export interface Settings {
	readonly isCompression?: boolean;
	readonly issqlcompression?: boolean;
	readonly timeZone?: string;
}
export interface SQLDataDirectory {
	readonly logicalName?: string;
	readonly path?: string;
	readonly type?: "Data" | "Invalid" | "Log";
}
export interface SubProtectionPolicy {
	readonly policyType?: "CopyOnlyFull" | "Differential" | "Full" | "Invalid" | "Log";
	readonly retentionPolicy?: RetentionPolicy;
	readonly schedulePolicy?: SchedulePolicy;
}
export interface WeeklyRetentionFormat {
	readonly daysOfTheWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
	readonly weeksOfTheMonth?: "First" | "Fourth" | "Invalid" | "Last" | "Second"[];
}
export interface WeeklyRetentionSchedule {
	readonly daysOfTheWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
	readonly retentionDuration?: RetentionDuration;
	readonly retentionTimes?: string[];
}
export interface YearlyRetentionSchedule {
	readonly monthsOfYear?:
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
		| "October"[];
	readonly retentionDuration?: RetentionDuration;
	readonly retentionScheduleDaily?: DailyRetentionFormat;
	readonly retentionScheduleFormatType?: "Daily" | "Invalid" | "Weekly";
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat;
	readonly retentionTimes?: string[];
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
