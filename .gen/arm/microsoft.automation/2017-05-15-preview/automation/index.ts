import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class automationAccounts_jobs
	extends ArmResource<automationAccounts_jobsComponentInputs>
	implements automationAccounts_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/jobs", "2017-05-15-preview", options);
	}
	public readonly apiVersion: "2017-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/jobs";
}
export interface automationAccounts_jobsComponentOutputs {
	readonly apiVersion: "2017-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/jobs";
}
export interface automationAccounts_jobsComponentInputs {
	readonly name: string;
	readonly properties: JobCreatePropertiesOrJobProperties;
}
export class automationAccounts_softwareUpdateConfigurations
	extends ArmResource<automationAccounts_softwareUpdateConfigurationsComponentInputs>
	implements automationAccounts_softwareUpdateConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_softwareUpdateConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Automation/automationAccounts/softwareUpdateConfigurations",
			"2017-05-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/softwareUpdateConfigurations";
}
export interface automationAccounts_softwareUpdateConfigurationsComponentOutputs {
	readonly apiVersion: "2017-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/softwareUpdateConfigurations";
}
export interface automationAccounts_softwareUpdateConfigurationsComponentInputs {
	readonly name: string;
	readonly properties: SoftwareUpdateConfigurationProperties;
}
export class automationAccounts_sourceControls
	extends ArmResource<automationAccounts_sourceControlsComponentInputs>
	implements automationAccounts_sourceControlsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_sourceControlsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Automation/automationAccounts/sourceControls",
			"2017-05-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/sourceControls";
}
export interface automationAccounts_sourceControlsComponentOutputs {
	readonly apiVersion: "2017-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/sourceControls";
}
export interface automationAccounts_sourceControlsComponentInputs {
	readonly name: string;
	readonly properties: SourceControlCreateOrUpdatePropertiesOrSourceControlProperties;
}
export class automationAccounts_sourceControls_sourceControlSyncJobs
	extends ArmResource<automationAccounts_sourceControls_sourceControlSyncJobsComponentInputs>
	implements automationAccounts_sourceControls_sourceControlSyncJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_sourceControls_sourceControlSyncJobsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs",
			"2017-05-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs";
}
export interface automationAccounts_sourceControls_sourceControlSyncJobsComponentOutputs {
	readonly apiVersion: "2017-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs";
}
export interface automationAccounts_sourceControls_sourceControlSyncJobsComponentInputs {
	readonly name: string;
	readonly properties: SourceControlSyncJobCreatePropertiesOrSourceControlSyncJobByIdProperties;
}
export interface AdvancedSchedule {
	readonly monthDays?: number[] | undefined;
	readonly monthlyOccurrences?: AdvancedScheduleMonthlyOccurrence[] | undefined;
	readonly weekDays?: string[] | undefined;
}
export interface AdvancedScheduleMonthlyOccurrence {
	readonly day?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday") | undefined;
	readonly occurrence?: number | undefined;
}
export interface AzureQueryProperties {
	readonly locations?: string[] | undefined;
	readonly scope?: string[] | undefined;
	readonly tagSettings?: TagSettingsProperties | undefined;
}
export interface ErrorResponse {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface JobCreatePropertiesOrJobProperties {
	readonly creationTime?: string | undefined;
	readonly endTime?: string | undefined;
	readonly exception?: string | undefined;
	readonly jobId?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly lastStatusModifiedTime?: string | undefined;
	readonly parameters?: JobCreatePropertiesParameters | undefined;
	readonly provisioningState?: ("Failed" | "Processing" | "Succeeded" | "Suspended") | undefined;
	readonly runbook?: RunbookAssociationProperty | undefined;
	readonly runOn?: string | undefined;
	readonly startedBy?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Activating"
				| "Blocked"
				| "Completed"
				| "Disconnected"
				| "Failed"
				| "New"
				| "Removing"
				| "Resuming"
				| "Running"
				| "Stopped"
				| "Stopping"
				| "Suspended"
				| "Suspending"
		  )
		| undefined;
	readonly statusDetails?: string | undefined;
}
export interface JobCreatePropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LinuxProperties {
	readonly excludedPackageNameMasks?: string[] | undefined;
	readonly includedPackageClassifications?: ("Critical" | "Other" | "Security" | "Unclassified") | undefined;
	readonly includedPackageNameMasks?: string[] | undefined;
	readonly rebootSetting?: string | undefined;
}
export interface NonAzureQueryProperties {
	readonly functionAlias?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export interface RunbookAssociationProperty {
	readonly name?: string | undefined;
}
export interface ScheduleProperties {
	readonly advancedSchedule?: AdvancedSchedule | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly expiryTime?: string | undefined;
	readonly expiryTimeOffsetMinutes?: number | undefined;
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month" | "OneTime" | "Week") | undefined;
	readonly interval?: number | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly nextRun?: string | undefined;
	readonly nextRunOffsetMinutes?: number | undefined;
	readonly startTime?: string | undefined;
	readonly startTimeOffsetMinutes?: number | undefined;
	readonly timeZone?: string | undefined;
}
export interface SoftwareUpdateConfigurationProperties {
	readonly createdBy?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly error?: ErrorResponse | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly scheduleInfo: ScheduleProperties;
	readonly tasks?: SoftwareUpdateConfigurationTasks | undefined;
	readonly updateConfiguration: UpdateConfiguration;
}
export interface SoftwareUpdateConfigurationTasks {
	readonly postTask?: TaskProperties | undefined;
	readonly preTask?: TaskProperties | undefined;
}
export interface SourceControlCreateOrUpdatePropertiesOrSourceControlProperties {
	readonly autoSync?: boolean | undefined;
	readonly branch?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly folderPath?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly publishRunbook?: boolean | undefined;
	readonly repoUrl?: string | undefined;
	readonly securityToken?: SourceControlSecurityTokenProperties | undefined;
	readonly sourceType?: ("GitHub" | "VsoGit" | "VsoTfvc") | undefined;
}
export interface SourceControlSecurityTokenProperties {
	readonly accessToken?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly tokenType?: ("Oauth" | "PersonalAccessToken") | undefined;
}
export interface SourceControlSyncJobCreatePropertiesOrSourceControlSyncJobByIdProperties {
	readonly commitId: string;
	readonly creationTime?: string | undefined;
	readonly endTime?: string | undefined;
	readonly exception?: string | undefined;
	readonly provisioningState?: ("Completed" | "Failed" | "Running") | undefined;
	readonly sourceControlSyncJobId?: string | undefined;
	readonly startTime?: string | undefined;
	readonly syncType?: ("FullSync" | "PartialSync") | undefined;
}
export interface TagSettingsProperties {
	readonly filterOperator?: "All" | undefined;
	readonly tags?: TagSettingsPropertiesTags | undefined;
}
export interface TagSettingsPropertiesTags {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface TargetProperties {
	readonly azureQueries?: AzureQueryProperties[] | undefined;
	readonly nonAzureQueries?: NonAzureQueryProperties[] | undefined;
}
export interface TaskProperties {
	readonly parameters?: TaskPropertiesParameters | undefined;
	readonly source?: string | undefined;
}
export interface TaskPropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UpdateConfiguration {
	readonly azureVirtualMachines?: string[] | undefined;
	readonly duration?: string | undefined;
	readonly linux?: LinuxProperties | undefined;
	readonly nonAzureComputerNames?: string[] | undefined;
	readonly operatingSystem: "Linux";
	readonly targets?: TargetProperties | undefined;
	readonly windows?: WindowsProperties | undefined;
}
export interface WindowsProperties {
	readonly excludedKbNumbers?: string[] | undefined;
	readonly includedKbNumbers?: string[] | undefined;
	readonly includedUpdateClassifications?:
		| (
				| "Critical"
				| "Definition"
				| "FeaturePack"
				| "Security"
				| "ServicePack"
				| "Tools"
				| "Unclassified"
				| "UpdateRollup"
				| "Updates"
		  )
		| undefined;
	readonly rebootSetting?: string | undefined;
}
export default {
	"automationAccounts/jobs": automationAccounts_jobs,
	"automationAccounts/softwareUpdateConfigurations": automationAccounts_softwareUpdateConfigurations,
	"automationAccounts/sourceControls": automationAccounts_sourceControls,
	"automationAccounts/sourceControls/sourceControlSyncJobs": automationAccounts_sourceControls_sourceControlSyncJobs,
};
