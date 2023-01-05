import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class automationAccounts
	extends ArmResource<automationAccountsComponentInputs>
	implements automationAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts";
}
export interface automationAccountsComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts";
}
export interface automationAccountsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties;
	readonly tags?: AutomationAccountCreateOrUpdateParametersTags;
}
export class automationAccounts_certificates
	extends ArmResource<automationAccounts_certificatesComponentInputs>
	implements automationAccounts_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/certificates", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/certificates";
}
export interface automationAccounts_certificatesComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/certificates";
}
export interface automationAccounts_certificatesComponentInputs {
	readonly name: string;
	readonly properties: CertificateCreateOrUpdatePropertiesOrCertificateProperties;
}
export class automationAccounts_compilationjobs
	extends ArmResource<automationAccounts_compilationjobsComponentInputs>
	implements automationAccounts_compilationjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_compilationjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/compilationjobs", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/compilationjobs";
}
export interface automationAccounts_compilationjobsComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/compilationjobs";
}
export interface automationAccounts_compilationjobsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: DscCompilationJobCreatePropertiesOrDscCompilationJobProperties;
	readonly tags?: DscCompilationJobCreateParametersTags;
}
export class automationAccounts_configurations
	extends ArmResource<automationAccounts_configurationsComponentInputs>
	implements automationAccounts_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/configurations", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/configurations";
}
export interface automationAccounts_configurationsComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/configurations";
}
export interface automationAccounts_configurationsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: DscConfigurationCreateOrUpdatePropertiesOrDscConfigurationProperties;
	readonly tags?: DscConfigurationCreateOrUpdateParametersTags;
}
export class automationAccounts_connections
	extends ArmResource<automationAccounts_connectionsComponentInputs>
	implements automationAccounts_connectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/connections", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/connections";
}
export interface automationAccounts_connectionsComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/connections";
}
export interface automationAccounts_connectionsComponentInputs {
	readonly name: string;
	readonly properties: ConnectionCreateOrUpdatePropertiesOrConnectionProperties;
}
export class automationAccounts_connectionTypes
	extends ArmResource<automationAccounts_connectionTypesComponentInputs>
	implements automationAccounts_connectionTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_connectionTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/connectionTypes", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/connectionTypes";
}
export interface automationAccounts_connectionTypesComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/connectionTypes";
}
export interface automationAccounts_connectionTypesComponentInputs {
	readonly name: string;
	readonly properties: ConnectionTypeCreateOrUpdatePropertiesOrConnectionTypeProperties;
}
export class automationAccounts_credentials
	extends ArmResource<automationAccounts_credentialsComponentInputs>
	implements automationAccounts_credentialsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_credentialsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/credentials", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/credentials";
}
export interface automationAccounts_credentialsComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/credentials";
}
export interface automationAccounts_credentialsComponentInputs {
	readonly name: string;
	readonly properties: CredentialCreateOrUpdatePropertiesOrCredentialProperties;
}
export class automationAccounts_jobs
	extends ArmResource<automationAccounts_jobsComponentInputs>
	implements automationAccounts_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/jobs", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/jobs";
}
export interface automationAccounts_jobsComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/jobs";
}
export interface automationAccounts_jobsComponentInputs {
	readonly name: string;
	readonly properties: JobCreatePropertiesOrJobProperties;
}
export class automationAccounts_jobSchedules
	extends ArmResource<automationAccounts_jobSchedulesComponentInputs>
	implements automationAccounts_jobSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_jobSchedulesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/jobSchedules", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/jobSchedules";
}
export interface automationAccounts_jobSchedulesComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/jobSchedules";
}
export interface automationAccounts_jobSchedulesComponentInputs {
	readonly name: string;
	readonly properties: JobScheduleCreatePropertiesOrJobScheduleProperties;
}
export class automationAccounts_modules
	extends ArmResource<automationAccounts_modulesComponentInputs>
	implements automationAccounts_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/modules", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/modules";
}
export interface automationAccounts_modulesComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/modules";
}
export interface automationAccounts_modulesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: ModuleCreateOrUpdatePropertiesOrModuleProperties;
	readonly tags?: ModuleCreateOrUpdateParametersTags;
}
export class automationAccounts_nodeConfigurations
	extends ArmResource<automationAccounts_nodeConfigurationsComponentInputs>
	implements automationAccounts_nodeConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_nodeConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/nodeConfigurations", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/nodeConfigurations";
}
export interface automationAccounts_nodeConfigurationsComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/nodeConfigurations";
}
export interface automationAccounts_nodeConfigurationsComponentInputs {
	readonly configuration: DscConfigurationAssociationProperty;
	readonly creationTime?: string;
	readonly incrementNodeConfigurationBuild?: boolean;
	readonly lastModifiedTime?: string;
	readonly name: string;
	readonly source: ContentSource;
}
export class automationAccounts_nodes
	extends ArmResource<automationAccounts_nodesComponentInputs>
	implements automationAccounts_nodesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_nodesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/nodes", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/nodes";
}
export interface automationAccounts_nodesComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/nodes";
}
export interface automationAccounts_nodesComponentInputs {
	readonly accountId?: string;
	readonly etag?: string;
	readonly extensionHandler?: DscNodeExtensionHandlerAssociationProperty[];
	readonly ip?: string;
	readonly lastSeen?: string;
	readonly name: string;
	readonly nodeConfiguration?: DscNodeConfigurationAssociationProperty;
	readonly nodeId?: string;
	readonly registrationTime?: string;
	readonly status?: string;
}
export class automationAccounts_runbooks
	extends ArmResource<automationAccounts_runbooksComponentInputs>
	implements automationAccounts_runbooksComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_runbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/runbooks", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/runbooks";
}
export interface automationAccounts_runbooksComponentOutputs {
	readonly apiVersion: "2015-10-31";
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
		super(entity, options.name, "Microsoft.Automation/automationAccounts/runbooks/draft", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/runbooks/draft";
}
export interface automationAccounts_runbooks_draft_contentComponentOutputs {
	readonly apiVersion: "2015-10-31";
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
		super(entity, options.name, "Microsoft.Automation/automationAccounts/runbooks/draft", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/runbooks/draft";
}
export interface automationAccounts_runbooks_draft_testJobComponentOutputs {
	readonly apiVersion: "2015-10-31";
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
export class automationAccounts_schedules
	extends ArmResource<automationAccounts_schedulesComponentInputs>
	implements automationAccounts_schedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/schedules", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/schedules";
}
export interface automationAccounts_schedulesComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/schedules";
}
export interface automationAccounts_schedulesComponentInputs {
	readonly name: string;
	readonly properties: ScheduleCreateOrUpdatePropertiesOrScheduleProperties;
}
export class automationAccounts_variables
	extends ArmResource<automationAccounts_variablesComponentInputs>
	implements automationAccounts_variablesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_variablesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/variables", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/variables";
}
export interface automationAccounts_variablesComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/variables";
}
export interface automationAccounts_variablesComponentInputs {
	readonly name: string;
	readonly properties: VariableCreateOrUpdatePropertiesOrVariableProperties;
}
export class automationAccounts_watchers
	extends ArmResource<automationAccounts_watchersComponentInputs>
	implements automationAccounts_watchersComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_watchersComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/watchers", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/watchers";
}
export interface automationAccounts_watchersComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/watchers";
}
export interface automationAccounts_watchersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WatcherProperties;
	readonly tags?: TrackedResourceTags;
}
export class automationAccounts_webhooks
	extends ArmResource<automationAccounts_webhooksComponentInputs>
	implements automationAccounts_webhooksComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_webhooksComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/webhooks", "2015-10-31", options);
	}
	public readonly apiVersion: "2015-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/webhooks";
}
export interface automationAccounts_webhooksComponentOutputs {
	readonly apiVersion: "2015-10-31";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/webhooks";
}
export interface automationAccounts_webhooksComponentInputs {
	readonly name: string;
	readonly properties: WebhookCreateOrUpdatePropertiesOrWebhookProperties;
}
export function listKeys(resource: automationAccounts): KeyListResult {
	if (resource.apiVersion !== "2015-10-31") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Automation/automationAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
export interface AutomationAccountCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedTime?: string;
	readonly sku?: Sku;
	readonly state?: "Ok" | "Suspended" | "Unavailable";
}
export interface CertificateCreateOrUpdatePropertiesOrCertificateProperties {
	readonly base64Value: string;
	readonly creationTime?: string;
	readonly description?: string;
	readonly expiryTime?: string;
	readonly isExportable?: boolean;
	readonly lastModifiedTime?: string;
	readonly thumbprint?: string;
}
export interface ConnectionCreateOrUpdatePropertiesFieldDefinitionValues {
	readonly [key: string]: string;
}
export interface ConnectionCreateOrUpdatePropertiesOrConnectionProperties {
	readonly connectionType: ConnectionTypeAssociationProperty;
	readonly creationTime?: string;
	readonly description?: string;
	readonly fieldDefinitionValues?: ConnectionCreateOrUpdatePropertiesFieldDefinitionValues;
	readonly lastModifiedTime?: string;
}
export interface ConnectionTypeAssociationProperty {
	readonly name?: string;
}
export interface ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions {
	readonly [key: string]: FieldDefinition;
}
export interface ConnectionTypeCreateOrUpdatePropertiesOrConnectionTypeProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly fieldDefinitions: ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions;
	readonly isGlobal?: boolean;
	readonly lastModifiedTime?: string;
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
export interface ContentSource {
	readonly hash?: ContentHash;
	readonly type?: "embeddedContent" | "uri";
	readonly value?: string;
	readonly version?: string;
}
export interface CredentialCreateOrUpdatePropertiesOrCredentialProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly lastModifiedTime?: string;
	readonly password: string;
	readonly userName: string;
}
export interface DscCompilationJobCreateParametersTags {
	readonly [key: string]: string;
}
export interface DscCompilationJobCreatePropertiesOrDscCompilationJobProperties {
	readonly configuration: DscConfigurationAssociationProperty;
	readonly creationTime?: string;
	readonly endTime?: string;
	readonly exception?: string;
	readonly incrementNodeConfigurationBuild?: boolean;
	readonly jobId?: string;
	readonly lastModifiedTime?: string;
	readonly lastStatusModifiedTime?: string;
	readonly parameters?: DscCompilationJobCreatePropertiesParameters;
	readonly provisioningState?: "Failed" | "Processing" | "Succeeded" | "Suspended";
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
export interface DscCompilationJobCreatePropertiesParameters {
	readonly [key: string]: string;
}
export interface DscConfigurationAssociationProperty {
	readonly name?: string;
}
export interface DscConfigurationCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface DscConfigurationCreateOrUpdatePropertiesOrDscConfigurationProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly jobCount?: number;
	readonly lastModifiedTime?: string;
	readonly logProgress?: boolean;
	readonly logVerbose?: boolean;
	readonly nodeConfigurationCount?: number;
	readonly parameters?: DscConfigurationCreateOrUpdatePropertiesParameters;
	readonly provisioningState?: "Succeeded";
	readonly source: ContentSource;
	readonly state?: "Edit" | "New" | "Published";
}
export interface DscConfigurationCreateOrUpdatePropertiesParameters {
	readonly [key: string]: DscConfigurationParameter;
}
export interface DscConfigurationParameter {
	readonly defaultValue?: string;
	readonly isMandatory?: boolean;
	readonly position?: number;
	readonly type?: string;
}
export interface DscNodeConfigurationAssociationProperty {
	readonly name?: string;
}
export interface DscNodeExtensionHandlerAssociationProperty {
	readonly name?: string;
	readonly version?: string;
}
export interface FieldDefinition {
	readonly isEncrypted?: boolean;
	readonly isOptional?: boolean;
	readonly type: string;
}
export interface JobCreatePropertiesOrJobProperties {
	readonly creationTime?: string;
	readonly endTime?: string;
	readonly exception?: string;
	readonly jobId?: string;
	readonly jobScheduleId?: string;
	readonly lastModifiedTime?: string;
	readonly lastStatusModifiedTime?: string;
	readonly parameters?: JobCreatePropertiesParameters;
	readonly provisioningState?: "Failed" | "Processing" | "Succeeded" | "Suspended";
	readonly runbook: RunbookAssociationProperty;
	readonly runOn?: string;
	readonly schedule?: ScheduleAssociationProperty;
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
export interface JobScheduleCreatePropertiesOrJobScheduleProperties {
	readonly jobScheduleId?: string;
	readonly parameters?: JobScheduleCreatePropertiesParameters;
	readonly runbook: RunbookAssociationProperty;
	readonly runOn?: string;
	readonly schedule: ScheduleAssociationProperty;
}
export interface JobScheduleCreatePropertiesParameters {
	readonly [key: string]: string;
}
export interface Key {
	readonly KeyName?: "Primary" | "Secondary";
	readonly Permissions?: "Full" | "Read";
	readonly Value?: string;
}
export interface KeyListResult {
	readonly keys?: Key[];
}
export interface ModuleCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface ModuleCreateOrUpdatePropertiesOrModuleProperties {
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
export interface ModuleErrorInfo {
	readonly code?: string;
	readonly message?: string;
}
export interface RunbookAssociationProperty {
	readonly name?: string;
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
export interface ScheduleAssociationProperty {
	readonly name?: string;
}
export interface ScheduleCreateOrUpdatePropertiesOrScheduleProperties {
	readonly advancedSchedule?: AdvancedSchedule;
	readonly creationTime?: string;
	readonly description?: string;
	readonly expiryTime?: string;
	readonly expiryTimeOffsetMinutes?: number;
	readonly frequency: "Day" | "Hour" | "Minute" | "Month" | "OneTime" | "Week";
	readonly interval?: any;
	readonly isEnabled?: boolean;
	readonly lastModifiedTime?: string;
	readonly nextRun?: string;
	readonly nextRunOffsetMinutes?: number;
	readonly startTime: string;
	readonly startTimeOffsetMinutes?: number;
	readonly timeZone?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: "Basic" | "Free";
}
export interface TestJobCreateParameters {
	readonly [key: string]: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VariableCreateOrUpdatePropertiesOrVariableProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly isEncrypted?: boolean;
	readonly lastModifiedTime?: string;
	readonly value?: string;
}
export interface WatcherProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly executionFrequencyInSeconds?: number;
	readonly lastModifiedBy?: string;
	readonly lastModifiedTime?: string;
	readonly scriptName?: string;
	readonly scriptParameters?: WatcherPropertiesScriptParameters;
	readonly scriptRunOn?: string;
	readonly status?: string;
}
export interface WatcherPropertiesScriptParameters {
	readonly [key: string]: string;
}
export interface WebhookCreateOrUpdatePropertiesOrWebhookProperties {
	readonly creationTime?: string;
	readonly description?: string;
	readonly expiryTime?: string;
	readonly isEnabled?: boolean;
	readonly lastInvokedTime?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedTime?: string;
	readonly parameters?: WebhookCreateOrUpdatePropertiesParameters;
	readonly runbook?: RunbookAssociationProperty;
	readonly runOn?: string;
	readonly uri?: string;
}
export interface WebhookCreateOrUpdatePropertiesParameters {
	readonly [key: string]: string;
}
export type automationAccounts_runbooks_draft =
	| automationAccounts_runbooks_draft_content
	| automationAccounts_runbooks_draft_testJob;
export default {
	automationAccounts: automationAccounts,
	"automationAccounts/certificates": automationAccounts_certificates,
	"automationAccounts/compilationjobs": automationAccounts_compilationjobs,
	"automationAccounts/configurations": automationAccounts_configurations,
	"automationAccounts/connections": automationAccounts_connections,
	"automationAccounts/connectionTypes": automationAccounts_connectionTypes,
	"automationAccounts/credentials": automationAccounts_credentials,
	"automationAccounts/jobs": automationAccounts_jobs,
	"automationAccounts/jobSchedules": automationAccounts_jobSchedules,
	"automationAccounts/modules": automationAccounts_modules,
	"automationAccounts/nodeConfigurations": automationAccounts_nodeConfigurations,
	"automationAccounts/nodes": automationAccounts_nodes,
	"automationAccounts/runbooks": automationAccounts_runbooks,
	"automationAccounts/runbooks/draft/content": automationAccounts_runbooks_draft_content,
	"automationAccounts/runbooks/draft/testJob": automationAccounts_runbooks_draft_testJob,
	"automationAccounts/schedules": automationAccounts_schedules,
	"automationAccounts/variables": automationAccounts_variables,
	"automationAccounts/watchers": automationAccounts_watchers,
	"automationAccounts/webhooks": automationAccounts_webhooks,
};
