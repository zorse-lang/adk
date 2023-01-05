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
	readonly monthDays?: number[];
	readonly monthlyOccurrences?: AdvancedScheduleMonthlyOccurrence[];
	readonly weekDays?: string[];
}
export interface AdvancedScheduleMonthlyOccurrence {
	readonly day?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
	readonly occurrence?: number;
}
export interface AzureQueryProperties {
	readonly locations?: string[];
	readonly scope?: string[];
	readonly tagSettings?: TagSettingsProperties;
}
export interface ErrorResponse {
	readonly code?: string;
	readonly message?: string;
}
export interface JobCreatePropertiesOrJobProperties {
	readonly creationTime?: string;
	readonly endTime?: string;
	readonly exception?: string;
	readonly jobId?: string;
	readonly lastModifiedTime?: string;
	readonly lastStatusModifiedTime?: string;
	readonly parameters?: JobCreatePropertiesParameters;
	readonly provisioningState?: "Failed" | "Processing" | "Succeeded" | "Suspended";
	readonly runbook?: RunbookAssociationProperty;
	readonly runOn?: string;
	readonly startedBy?: string;
	readonly startTime?: string;
	readonly status?:
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
		| "Suspending";
	readonly statusDetails?: string;
}
export interface JobCreatePropertiesParameters {
	readonly [key: string]: string;
}
export interface LinuxProperties {
	readonly excludedPackageNameMasks?: string[];
	readonly includedPackageClassifications?: "Critical" | "Other" | "Security" | "Unclassified";
	readonly includedPackageNameMasks?: string[];
	readonly rebootSetting?: string;
}
export interface NonAzureQueryProperties {
	readonly functionAlias?: string;
	readonly workspaceId?: string;
}
export interface RunbookAssociationProperty {
	readonly name?: string;
}
export interface ScheduleProperties {
	readonly advancedSchedule?: AdvancedSchedule;
	readonly creationTime?: string;
	readonly description?: string;
	readonly expiryTime?: string;
	readonly expiryTimeOffsetMinutes?: number;
	readonly frequency?: "Day" | "Hour" | "Minute" | "Month" | "OneTime" | "Week";
	readonly interval?: number;
	readonly isEnabled?: boolean;
	readonly lastModifiedTime?: string;
	readonly nextRun?: string;
	readonly nextRunOffsetMinutes?: number;
	readonly startTime?: string;
	readonly startTimeOffsetMinutes?: number;
	readonly timeZone?: string;
}
export interface SoftwareUpdateConfigurationProperties {
	readonly createdBy?: string;
	readonly creationTime?: string;
	readonly error?: ErrorResponse;
	readonly lastModifiedBy?: string;
	readonly lastModifiedTime?: string;
	readonly provisioningState?: string;
	readonly scheduleInfo: ScheduleProperties;
	readonly tasks?: SoftwareUpdateConfigurationTasks;
	readonly updateConfiguration: UpdateConfiguration;
}
export interface SoftwareUpdateConfigurationTasks {
	readonly postTask?: TaskProperties;
	readonly preTask?: TaskProperties;
}
export interface SourceControlCreateOrUpdatePropertiesOrSourceControlProperties {
	readonly autoSync?: boolean;
	readonly branch?: string;
	readonly creationTime?: string;
	readonly description?: string;
	readonly folderPath?: string;
	readonly lastModifiedTime?: string;
	readonly publishRunbook?: boolean;
	readonly repoUrl?: string;
	readonly securityToken?: SourceControlSecurityTokenProperties;
	readonly sourceType?: "GitHub" | "VsoGit" | "VsoTfvc";
}
export interface SourceControlSecurityTokenProperties {
	readonly accessToken?: string;
	readonly refreshToken?: string;
	readonly tokenType?: "Oauth" | "PersonalAccessToken";
}
export interface SourceControlSyncJobCreatePropertiesOrSourceControlSyncJobByIdProperties {
	readonly commitId: string;
	readonly creationTime?: string;
	readonly endTime?: string;
	readonly exception?: string;
	readonly provisioningState?: "Completed" | "Failed" | "Running";
	readonly sourceControlSyncJobId?: string;
	readonly startTime?: string;
	readonly syncType?: "FullSync" | "PartialSync";
}
export interface TagSettingsProperties {
	readonly filterOperator?: "All";
	readonly tags?: TagSettingsPropertiesTags;
}
export interface TagSettingsPropertiesTags {
	readonly [key: string]: string[];
}
export interface TargetProperties {
	readonly azureQueries?: AzureQueryProperties[];
	readonly nonAzureQueries?: NonAzureQueryProperties[];
}
export interface TaskProperties {
	readonly parameters?: TaskPropertiesParameters;
	readonly source?: string;
}
export interface TaskPropertiesParameters {
	readonly [key: string]: string;
}
export interface UpdateConfiguration {
	readonly azureVirtualMachines?: string[];
	readonly duration?: string;
	readonly linux?: LinuxProperties;
	readonly nonAzureComputerNames?: string[];
	readonly operatingSystem: "Linux";
	readonly targets?: TargetProperties;
	readonly windows?: WindowsProperties;
}
export interface WindowsProperties {
	readonly excludedKbNumbers?: string[];
	readonly includedKbNumbers?: string[];
	readonly includedUpdateClassifications?:
		| "Critical"
		| "Definition"
		| "FeaturePack"
		| "Security"
		| "ServicePack"
		| "Tools"
		| "Unclassified"
		| "UpdateRollup"
		| "Updates";
	readonly rebootSetting?: string;
}
export default {
	"automationAccounts/jobs": automationAccounts_jobs,
	"automationAccounts/softwareUpdateConfigurations": automationAccounts_softwareUpdateConfigurations,
	"automationAccounts/sourceControls": automationAccounts_sourceControls,
	"automationAccounts/sourceControls/sourceControlSyncJobs": automationAccounts_sourceControls_sourceControlSyncJobs,
};
