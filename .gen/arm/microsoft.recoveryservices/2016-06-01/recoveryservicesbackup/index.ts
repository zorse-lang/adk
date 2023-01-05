import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_backupFabrics_protectionContainers
	extends ArmResource<vaults_backupFabrics_protectionContainersComponentInputs>
	implements vaults_backupFabrics_protectionContainersComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupFabrics_protectionContainersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers",
			"2016-06-01",
			options,
		);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers";
}
export interface vaults_backupFabrics_protectionContainersComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers";
}
export interface vaults_backupFabrics_protectionContainersComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectionContainer;
	readonly tags?: ResourceTags;
}
export class vaults_backupFabrics_protectionContainers_operationResults
	extends ArmResource<vaults_backupFabrics_protectionContainers_operationResultsComponentInputs>
	implements vaults_backupFabrics_protectionContainers_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupFabrics_protectionContainers_operationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults",
			"2016-06-01",
			options,
		);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults";
}
export interface vaults_backupFabrics_protectionContainers_operationResultsComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults";
}
export interface vaults_backupFabrics_protectionContainers_operationResultsComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectionContainer;
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
			"2016-06-01",
			options,
		);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems";
}
export interface vaults_backupFabrics_protectionContainers_protectedItemsComponentOutputs {
	readonly apiVersion: "2016-06-01";
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
			"2016-06-01",
			options,
		);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/operationResults";
}
export interface vaults_backupFabrics_protectionContainers_protectedItems_operationResultsComponentOutputs {
	readonly apiVersion: "2016-06-01";
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
			"2016-06-01",
			options,
		);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints";
}
export interface vaults_backupFabrics_protectionContainers_protectedItems_recoveryPointsComponentOutputs {
	readonly apiVersion: "2016-06-01";
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
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupJobs", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupJobs";
}
export interface vaults_backupJobsComponentOutputs {
	readonly apiVersion: "2016-06-01";
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
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupPolicies", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupPolicies";
}
export interface vaults_backupPoliciesComponentOutputs {
	readonly apiVersion: "2016-06-01";
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
			"2016-06-01",
			options,
		);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupPolicies/operationResults";
}
export interface vaults_backupPolicies_operationResultsComponentOutputs {
	readonly apiVersion: "2016-06-01";
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
export interface AzureIaaSVMErrorInfo {
	readonly errorCode?: number;
	readonly errorString?: string;
	readonly errorTitle?: string;
	readonly recommendations?: string[];
}
export interface AzureIaaSVMJobExtendedInfo {
	readonly dynamicErrorMessage?: string;
	readonly progressPercentage?: number;
	readonly propertyBag?: AzureIaaSVMJobExtendedInfoPropertyBag;
	readonly tasksList?: AzureIaaSVMJobTaskDetails[];
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
export interface Job {
	readonly activityId?: string;
	readonly backupManagementType?: "AzureBackupServer" | "AzureIaasVM" | "AzureSql" | "DPM" | "Invalid";
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
	readonly kekDetails?: KEKDetails;
}
export interface MabContainerExtendedInfo {
	readonly backupItems?: string[];
	readonly backupItemType?:
		| "AzureSqlDb"
		| "DPMUnknown"
		| "Exchange"
		| "FileFolder"
		| "Invalid"
		| "SQLDB"
		| "Sharepoint";
	readonly lastBackupStatus?: string;
	readonly lastRefreshedAt?: string;
	readonly policyName?: string;
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
	readonly retentionScheduleFormatType?: "Daily" | "Invalid";
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat;
	readonly retentionTimes?: string[];
}
export interface ProtectedItem {
	readonly backupManagementType?: "AzureBackupServer" | "AzureIaasVM" | "AzureSql" | "DPM" | "Invalid";
	readonly lastRecoveryPoint?: string;
	readonly policyId?: string;
	readonly sourceResourceId?: string;
	readonly workloadType?: "AzureSqlDb" | "DPMUnknown" | "Exchange" | "FileFolder" | "Invalid" | "SQLDB" | "Sharepoint";
}
export interface ProtectionContainer {
	readonly backupManagementType?: "AzureBackupServer" | "AzureIaasVM" | "AzureSql" | "DPM" | "Invalid";
	readonly containerType?: string;
	readonly friendlyName?: string;
	readonly healthStatus?: string;
	readonly registrationStatus?: string;
}
export interface ProtectionPolicy {
	readonly protectedItemsCount?: number;
}
export interface RecoveryPoint {}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RetentionDuration {
	readonly count?: number;
	readonly durationType?: "Days" | "Invalid" | "Months" | "Weeks";
}
export interface RetentionPolicy {}
export interface SchedulePolicy {}
export interface WeeklyRetentionFormat {
	readonly daysOfTheWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
	readonly weeksOfTheMonth?: "First" | "Fourth" | "Last" | "Second"[];
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
	readonly retentionScheduleFormatType?: "Daily" | "Invalid";
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat;
	readonly retentionTimes?: string[];
}
export default {
	"vaults/backupFabrics/protectionContainers": vaults_backupFabrics_protectionContainers,
	"vaults/backupFabrics/protectionContainers/operationResults":
		vaults_backupFabrics_protectionContainers_operationResults,
	"vaults/backupFabrics/protectionContainers/protectedItems": vaults_backupFabrics_protectionContainers_protectedItems,
	"vaults/backupFabrics/protectionContainers/protectedItems/operationResults":
		vaults_backupFabrics_protectionContainers_protectedItems_operationResults,
	"vaults/backupFabrics/protectionContainers/protectedItems/recoveryPoints":
		vaults_backupFabrics_protectionContainers_protectedItems_recoveryPoints,
	"vaults/backupJobs": vaults_backupJobs,
	"vaults/backupPolicies": vaults_backupPolicies,
	"vaults/backupPolicies/operationResults": vaults_backupPolicies_operationResults,
};
