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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: PythonPackageCreatePropertiesOrModuleProperties;
	readonly tags?: PythonPackageCreateParametersTags;
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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: RunbookCreateOrUpdatePropertiesOrRunbookProperties;
	readonly tags?: RunbookCreateOrUpdateParametersTags;
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
	readonly creationTime?: string;
	readonly endTime?: string;
	readonly exception?: string;
	readonly lastModifiedTime?: string;
	readonly lastStatusModifiedTime?: string;
	readonly logActivityTrace?: number;
	readonly name: string;
	readonly parameters?: TestJobCreateParameters;
	readonly runOn?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusDetails?: string;
}
export interface ContentHash {
	readonly algorithm: string;
	readonly value: string;
}
export interface ContentLink {
	readonly contentHash?: ContentHash;
	readonly uri?: string;
	readonly version?: string;
}
export interface ModuleErrorInfo {
	readonly code?: string;
	readonly message?: string;
}
export interface PythonPackageCreateParametersTags {
	readonly [key: string]: string;
}
export interface PythonPackageCreatePropertiesOrModuleProperties {
	readonly activityCount?: number;
	readonly contentLink: ContentLink;
	readonly creationTime?: string;
	readonly description?: string;
	readonly error?: ModuleErrorInfo;
	readonly isComposite?: boolean;
	readonly isGlobal?: boolean;
	readonly lastModifiedTime?: string;
	readonly provisioningState?:
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
		| "Succeeded";
	readonly sizeInBytes?: number;
	readonly version?: string;
}
export interface RunbookCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface RunbookCreateOrUpdatePropertiesOrRunbookProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly draft?: RunbookDraft;
	readonly jobCount?: number;
	readonly lastModifiedBy?: string;
	readonly lastModifiedTime?: string;
	readonly logActivityTrace?: number;
	readonly logProgress?: boolean;
	readonly logVerbose?: boolean;
	readonly outputTypes?: string[];
	readonly parameters?: RunbookPropertiesParameters;
	readonly provisioningState?: "Succeeded";
	readonly publishContentLink?: ContentLink;
	readonly runbookType:
		| "Graph"
		| "GraphPowerShell"
		| "GraphPowerShellWorkflow"
		| "PowerShell"
		| "PowerShellWorkflow"
		| "Python2"
		| "Python3"
		| "Script";
	readonly state?: "Edit" | "New" | "Published";
}
export interface RunbookDraft {
	readonly creationTime?: string;
	readonly draftContentLink?: ContentLink;
	readonly inEdit?: boolean;
	readonly lastModifiedTime?: string;
	readonly outputTypes?: string[];
	readonly parameters?: RunbookDraftParameters;
}
export interface RunbookDraftParameters {
	readonly [key: string]: RunbookParameter;
}
export interface RunbookParameter {
	readonly defaultValue?: string;
	readonly isMandatory?: boolean;
	readonly position?: number;
	readonly type?: string;
}
export interface RunbookPropertiesParameters {
	readonly [key: string]: RunbookParameter;
}
export interface TestJobCreateParameters {
	readonly [key: string]: string;
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
