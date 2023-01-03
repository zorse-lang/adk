import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class automationAccounts_python2Packages
	extends ArmResource<automationAccounts_python2PackagesComponentInputs>
	implements automationAccounts_python2PackagesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_python2PackagesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/python2Packages", "2018-06-30", options);
	}
	public readonly apiVersion: "2018-06-30";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/python2Packages";
}
export interface automationAccounts_python2PackagesComponentOutputs {
	readonly apiVersion: "2018-06-30";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/python2Packages";
}
export interface automationAccounts_python2PackagesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: PythonPackageCreatePropertiesOrModuleProperties;
	readonly tags?: PythonPackageCreateParametersTags | undefined;
}
export class automationAccounts_runbooks
	extends ArmResource<automationAccounts_runbooksComponentInputs>
	implements automationAccounts_runbooksComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_runbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/runbooks", "2018-06-30", options);
	}
	public readonly apiVersion: "2018-06-30";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/runbooks";
}
export interface automationAccounts_runbooksComponentOutputs {
	readonly apiVersion: "2018-06-30";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/runbooks";
}
export interface automationAccounts_runbooksComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: RunbookCreateOrUpdatePropertiesOrRunbookProperties;
	readonly tags?: RunbookCreateOrUpdateParametersTags | undefined;
}
export class automationAccounts_runbooks_draft_content
	extends ArmResource<automationAccounts_runbooks_draft_contentComponentInputs>
	implements automationAccounts_runbooks_draft_contentComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_runbooks_draft_contentComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/runbooks/draft", "2018-06-30", options);
	}
	public readonly apiVersion: "2018-06-30";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/runbooks/draft";
}
export interface automationAccounts_runbooks_draft_contentComponentOutputs {
	readonly apiVersion: "2018-06-30";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/runbooks/draft";
}
export interface automationAccounts_runbooks_draft_contentComponentInputs {
	readonly name: string;
}
export class automationAccounts_runbooks_draft_testJob
	extends ArmResource<automationAccounts_runbooks_draft_testJobComponentInputs>
	implements automationAccounts_runbooks_draft_testJobComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_runbooks_draft_testJobComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/runbooks/draft", "2018-06-30", options);
	}
	public readonly apiVersion: "2018-06-30";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/runbooks/draft";
}
export interface automationAccounts_runbooks_draft_testJobComponentOutputs {
	readonly apiVersion: "2018-06-30";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/runbooks/draft";
}
export interface automationAccounts_runbooks_draft_testJobComponentInputs {
	readonly creationTime?: string | undefined;
	readonly endTime?: string | undefined;
	readonly exception?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly lastStatusModifiedTime?: string | undefined;
	readonly logActivityTrace?: number | undefined;
	readonly name: string;
	readonly parameters?: TestJobCreateParameters | undefined;
	readonly runOn?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusDetails?: string | undefined;
}
export interface ContentHash {
	readonly algorithm: string;
	readonly value: string;
}
export interface ContentLink {
	readonly contentHash?: ContentHash | undefined;
	readonly uri?: string | undefined;
	readonly version?: string | undefined;
}
export interface ModuleErrorInfo {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface PythonPackageCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PythonPackageCreatePropertiesOrModuleProperties {
	readonly activityCount?: number | undefined;
	readonly contentLink: ContentLink;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly error?: ModuleErrorInfo | undefined;
	readonly isComposite?: boolean | undefined;
	readonly isGlobal?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly provisioningState?:
		| (
				| "ActivitiesStored"
				| "Cancelled"
				| "ConnectionTypeImported"
				| "ContentDownloaded"
				| "ContentRetrieved"
				| "ContentStored"
				| "ContentValidated"
				| "Created"
				| "Creating"
				| "Failed"
				| "ModuleDataStored"
				| "ModuleImportRunbookComplete"
				| "RunningImportModuleRunbook"
				| "StartingImportModuleRunbook"
				| "Succeeded"
		  )
		| undefined;
	readonly sizeInBytes?: number | undefined;
	readonly version?: string | undefined;
}
export interface RunbookCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RunbookCreateOrUpdatePropertiesOrRunbookProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly draft?: RunbookDraft | undefined;
	readonly jobCount?: number | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly logActivityTrace?: number | undefined;
	readonly logProgress?: boolean | undefined;
	readonly logVerbose?: boolean | undefined;
	readonly outputTypes?: string[] | undefined;
	readonly parameters?: RunbookPropertiesParameters | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
	readonly publishContentLink?: ContentLink | undefined;
	readonly runbookType:
		| "Graph"
		| "GraphPowerShell"
		| "GraphPowerShellWorkflow"
		| "PowerShell"
		| "PowerShellWorkflow"
		| "Python2"
		| "Python3"
		| "Script";
	readonly state?: ("Edit" | "New" | "Published") | undefined;
}
export interface RunbookDraft {
	readonly creationTime?: string | undefined;
	readonly draftContentLink?: ContentLink | undefined;
	readonly inEdit?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly outputTypes?: string[] | undefined;
	readonly parameters?: RunbookDraftParameters | undefined;
}
export interface RunbookDraftParameters {
	readonly "[ key: string ]"?: RunbookParameter | undefined;
}
export interface RunbookParameter {
	readonly defaultValue?: string | undefined;
	readonly isMandatory?: boolean | undefined;
	readonly position?: number | undefined;
	readonly type?: string | undefined;
}
export interface RunbookPropertiesParameters {
	readonly "[ key: string ]"?: RunbookParameter | undefined;
}
export interface TestJobCreateParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export type automationAccounts_runbooks_draft =
	| automationAccounts_runbooks_draft_content
	| automationAccounts_runbooks_draft_testJob;
export default {
	"automationAccounts/python2Packages": automationAccounts_python2Packages,
	"automationAccounts/runbooks": automationAccounts_runbooks,
	"automationAccounts/runbooks/draft/content": automationAccounts_runbooks_draft_content,
	"automationAccounts/runbooks/draft/testJob": automationAccounts_runbooks_draft_testJob,
};
