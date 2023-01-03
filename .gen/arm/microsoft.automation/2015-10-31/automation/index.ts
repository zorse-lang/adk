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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties | undefined;
	readonly tags?: AutomationAccountCreateOrUpdateParametersTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DscCompilationJobCreatePropertiesOrDscCompilationJobProperties;
	readonly tags?: DscCompilationJobCreateParametersTags | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DscConfigurationCreateOrUpdatePropertiesOrDscConfigurationProperties;
	readonly tags?: DscConfigurationCreateOrUpdateParametersTags | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ModuleCreateOrUpdatePropertiesOrModuleProperties;
	readonly tags?: ModuleCreateOrUpdateParametersTags | undefined;
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
	readonly creationTime?: string | undefined;
	readonly incrementNodeConfigurationBuild?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
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
	readonly accountId?: string | undefined;
	readonly etag?: string | undefined;
	readonly extensionHandler?: DscNodeExtensionHandlerAssociationProperty[] | undefined;
	readonly ip?: string | undefined;
	readonly lastSeen?: string | undefined;
	readonly name: string;
	readonly nodeConfiguration?: DscNodeConfigurationAssociationProperty | undefined;
	readonly nodeId?: string | undefined;
	readonly registrationTime?: string | undefined;
	readonly status?: string | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WatcherProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly monthDays?: number[] | undefined;
	readonly monthlyOccurrences?: AdvancedScheduleMonthlyOccurrence[] | undefined;
	readonly weekDays?: string[] | undefined;
}
export interface AdvancedScheduleMonthlyOccurrence {
	readonly day?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday") | undefined;
	readonly occurrence?: number | undefined;
}
export interface AutomationAccountCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly sku?: Sku | undefined;
	readonly state?: ("Ok" | "Suspended" | "Unavailable") | undefined;
}
export interface CertificateCreateOrUpdatePropertiesOrCertificateProperties {
	readonly base64Value: string;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly expiryTime?: string | undefined;
	readonly isExportable?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface ConnectionCreateOrUpdatePropertiesFieldDefinitionValues {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ConnectionCreateOrUpdatePropertiesOrConnectionProperties {
	readonly connectionType: ConnectionTypeAssociationProperty;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly fieldDefinitionValues?: ConnectionCreateOrUpdatePropertiesFieldDefinitionValues | undefined;
	readonly lastModifiedTime?: string | undefined;
}
export interface ConnectionTypeAssociationProperty {
	readonly name?: string | undefined;
}
export interface ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions {
	readonly "[ key: string ]"?: FieldDefinition | undefined;
}
export interface ConnectionTypeCreateOrUpdatePropertiesOrConnectionTypeProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly fieldDefinitions: ConnectionTypeCreateOrUpdatePropertiesFieldDefinitions;
	readonly isGlobal?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
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
export interface ContentSource {
	readonly hash?: ContentHash | undefined;
	readonly type?: ("embeddedContent" | "uri") | undefined;
	readonly value?: string | undefined;
	readonly version?: string | undefined;
}
export interface CredentialCreateOrUpdatePropertiesOrCredentialProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly password: string;
	readonly userName: string;
}
export interface DscCompilationJobCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DscCompilationJobCreatePropertiesOrDscCompilationJobProperties {
	readonly configuration: DscConfigurationAssociationProperty;
	readonly creationTime?: string | undefined;
	readonly endTime?: string | undefined;
	readonly exception?: string | undefined;
	readonly incrementNodeConfigurationBuild?: boolean | undefined;
	readonly jobId?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly lastStatusModifiedTime?: string | undefined;
	readonly parameters?: DscCompilationJobCreatePropertiesParameters | undefined;
	readonly provisioningState?: ("Failed" | "Processing" | "Succeeded" | "Suspended") | undefined;
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
export interface DscCompilationJobCreatePropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DscConfigurationAssociationProperty {
	readonly name?: string | undefined;
}
export interface DscConfigurationCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DscConfigurationCreateOrUpdatePropertiesOrDscConfigurationProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly jobCount?: number | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly logProgress?: boolean | undefined;
	readonly logVerbose?: boolean | undefined;
	readonly nodeConfigurationCount?: number | undefined;
	readonly parameters?: DscConfigurationCreateOrUpdatePropertiesParameters | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
	readonly source: ContentSource;
	readonly state?: ("Edit" | "New" | "Published") | undefined;
}
export interface DscConfigurationCreateOrUpdatePropertiesParameters {
	readonly "[ key: string ]"?: DscConfigurationParameter | undefined;
}
export interface DscConfigurationParameter {
	readonly defaultValue?: string | undefined;
	readonly isMandatory?: boolean | undefined;
	readonly position?: number | undefined;
	readonly type?: string | undefined;
}
export interface DscNodeConfigurationAssociationProperty {
	readonly name?: string | undefined;
}
export interface DscNodeExtensionHandlerAssociationProperty {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface FieldDefinition {
	readonly isEncrypted?: boolean | undefined;
	readonly isOptional?: boolean | undefined;
	readonly type: string;
}
export interface JobCreatePropertiesOrJobProperties {
	readonly creationTime?: string | undefined;
	readonly endTime?: string | undefined;
	readonly exception?: string | undefined;
	readonly jobId?: string | undefined;
	readonly jobScheduleId?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly lastStatusModifiedTime?: string | undefined;
	readonly parameters?: JobCreatePropertiesParameters | undefined;
	readonly provisioningState?: ("Failed" | "Processing" | "Succeeded" | "Suspended") | undefined;
	readonly runbook: RunbookAssociationProperty;
	readonly runOn?: string | undefined;
	readonly schedule?: ScheduleAssociationProperty | undefined;
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
export interface JobScheduleCreatePropertiesOrJobScheduleProperties {
	readonly jobScheduleId?: string | undefined;
	readonly parameters?: JobScheduleCreatePropertiesParameters | undefined;
	readonly runbook: RunbookAssociationProperty;
	readonly runOn?: string | undefined;
	readonly schedule: ScheduleAssociationProperty;
}
export interface JobScheduleCreatePropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Key {
	readonly KeyName?: ("Primary" | "Secondary") | undefined;
	readonly Permissions?: ("Full" | "Read") | undefined;
	readonly Value?: string | undefined;
}
export interface KeyListResult {
	readonly keys?: Key[] | undefined;
}
export interface ModuleCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ModuleCreateOrUpdatePropertiesOrModuleProperties {
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
export interface ModuleErrorInfo {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface RunbookAssociationProperty {
	readonly name?: string | undefined;
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
export interface ScheduleAssociationProperty {
	readonly name?: string | undefined;
}
export interface ScheduleCreateOrUpdatePropertiesOrScheduleProperties {
	readonly advancedSchedule?: AdvancedSchedule | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly expiryTime?: string | undefined;
	readonly expiryTimeOffsetMinutes?: number | undefined;
	readonly frequency: "Day" | "Hour" | "Minute" | "Month" | "OneTime" | "Week";
	readonly interval?: any | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly nextRun?: string | undefined;
	readonly nextRunOffsetMinutes?: number | undefined;
	readonly startTime: string;
	readonly startTimeOffsetMinutes?: number | undefined;
	readonly timeZone?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: "Basic" | "Free";
}
export interface TestJobCreateParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VariableCreateOrUpdatePropertiesOrVariableProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly isEncrypted?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly value?: string | undefined;
}
export interface WatcherProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly executionFrequencyInSeconds?: number | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly scriptName?: string | undefined;
	readonly scriptParameters?: WatcherPropertiesScriptParameters | undefined;
	readonly scriptRunOn?: string | undefined;
	readonly status?: string | undefined;
}
export interface WatcherPropertiesScriptParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WebhookCreateOrUpdatePropertiesOrWebhookProperties {
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly expiryTime?: string | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly lastInvokedTime?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly parameters?: WebhookCreateOrUpdatePropertiesParameters | undefined;
	readonly runbook?: RunbookAssociationProperty | undefined;
	readonly runOn?: string | undefined;
	readonly uri?: string | undefined;
}
export interface WebhookCreateOrUpdatePropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
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
