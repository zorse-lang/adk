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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionContainer | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionContainer | undefined;
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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionPolicy | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AzureIaaSVMErrorInfo {
	readonly errorCode?: number | undefined;
	readonly errorString?: string | undefined;
	readonly errorTitle?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface AzureIaaSVMJobExtendedInfo {
	readonly dynamicErrorMessage?: string | undefined;
	readonly progressPercentage?: number | undefined;
	readonly propertyBag?: AzureIaaSVMJobExtendedInfoPropertyBag | undefined;
	readonly tasksList?: AzureIaaSVMJobTaskDetails[] | undefined;
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
export interface Job {
	readonly activityId?: string | undefined;
	readonly backupManagementType?: ("AzureBackupServer" | "AzureIaasVM" | "AzureSql" | "DPM" | "Invalid") | undefined;
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
	readonly kekDetails?: KEKDetails | undefined;
}
export interface MabContainerExtendedInfo {
	readonly backupItems?: string[] | undefined;
	readonly backupItemType?:
		| ("AzureSqlDb" | "DPMUnknown" | "Exchange" | "FileFolder" | "Invalid" | "SQLDB" | "Sharepoint")
		| undefined;
	readonly lastBackupStatus?: string | undefined;
	readonly lastRefreshedAt?: string | undefined;
	readonly policyName?: string | undefined;
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
	readonly retentionScheduleFormatType?: ("Daily" | "Invalid") | undefined;
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat | undefined;
	readonly retentionTimes?: string[] | undefined;
}
export interface ProtectedItem {
	readonly backupManagementType?: ("AzureBackupServer" | "AzureIaasVM" | "AzureSql" | "DPM" | "Invalid") | undefined;
	readonly lastRecoveryPoint?: string | undefined;
	readonly policyId?: string | undefined;
	readonly sourceResourceId?: string | undefined;
	readonly workloadType?:
		| ("AzureSqlDb" | "DPMUnknown" | "Exchange" | "FileFolder" | "Invalid" | "SQLDB" | "Sharepoint")
		| undefined;
}
export interface ProtectionContainer {
	readonly backupManagementType?: ("AzureBackupServer" | "AzureIaasVM" | "AzureSql" | "DPM" | "Invalid") | undefined;
	readonly containerType?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly healthStatus?: string | undefined;
	readonly registrationStatus?: string | undefined;
}
export interface ProtectionPolicy {
	readonly protectedItemsCount?: number | undefined;
}
export interface RecoveryPoint {}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RetentionDuration {
	readonly count?: number | undefined;
	readonly durationType?: ("Days" | "Invalid" | "Months" | "Weeks") | undefined;
}
export interface RetentionPolicy {}
export interface SchedulePolicy {}
export interface WeeklyRetentionFormat {
	readonly daysOfTheWeek?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
	readonly weeksOfTheMonth?: ("First" | "Fourth" | "Last" | "Second"[]) | undefined;
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
	readonly retentionScheduleFormatType?: ("Daily" | "Invalid") | undefined;
	readonly retentionScheduleWeekly?: WeeklyRetentionFormat | undefined;
	readonly retentionTimes?: string[] | undefined;
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
