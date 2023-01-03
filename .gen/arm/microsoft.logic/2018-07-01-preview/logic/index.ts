import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class integrationAccounts
	extends ArmResource<integrationAccountsComponentInputs>
	implements integrationAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts";
}
export interface integrationAccountsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts";
}
export interface integrationAccountsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: any | undefined;
	readonly sku?: IntegrationAccountSku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_agreements
	extends ArmResource<integrationAccounts_agreementsComponentInputs>
	implements integrationAccounts_agreementsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/agreements", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/agreements";
}
export interface integrationAccounts_agreementsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/agreements";
}
export interface integrationAccounts_agreementsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: IntegrationAccountAgreementProperties;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_assemblies
	extends ArmResource<integrationAccounts_assembliesComponentInputs>
	implements integrationAccounts_assembliesComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_assembliesComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/assemblies", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/assemblies";
}
export interface integrationAccounts_assembliesComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/assemblies";
}
export interface integrationAccounts_assembliesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: AssemblyProperties;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_batchConfigurations
	extends ArmResource<integrationAccounts_batchConfigurationsComponentInputs>
	implements integrationAccounts_batchConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_batchConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Logic/integrationAccounts/batchConfigurations",
			"2018-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/batchConfigurations";
}
export interface integrationAccounts_batchConfigurationsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/batchConfigurations";
}
export interface integrationAccounts_batchConfigurationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: BatchConfigurationProperties;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_certificates
	extends ArmResource<integrationAccounts_certificatesComponentInputs>
	implements integrationAccounts_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/certificates", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/certificates";
}
export interface integrationAccounts_certificatesComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/certificates";
}
export interface integrationAccounts_certificatesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: IntegrationAccountCertificateProperties;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_maps
	extends ArmResource<integrationAccounts_mapsComponentInputs>
	implements integrationAccounts_mapsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_mapsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/maps", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/maps";
}
export interface integrationAccounts_mapsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/maps";
}
export interface integrationAccounts_mapsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: IntegrationAccountMapProperties;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_partners
	extends ArmResource<integrationAccounts_partnersComponentInputs>
	implements integrationAccounts_partnersComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_partnersComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/partners", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/partners";
}
export interface integrationAccounts_partnersComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/partners";
}
export interface integrationAccounts_partnersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: IntegrationAccountPartnerProperties;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_schemas
	extends ArmResource<integrationAccounts_schemasComponentInputs>
	implements integrationAccounts_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/schemas", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/schemas";
}
export interface integrationAccounts_schemasComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/schemas";
}
export interface integrationAccounts_schemasComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: IntegrationAccountSchemaProperties;
	readonly tags?: ResourceTags | undefined;
}
export class integrationAccounts_sessions
	extends ArmResource<integrationAccounts_sessionsComponentInputs>
	implements integrationAccounts_sessionsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_sessionsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/sessions", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/sessions";
}
export interface integrationAccounts_sessionsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/sessions";
}
export interface integrationAccounts_sessionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: IntegrationAccountSessionProperties;
	readonly tags?: ResourceTags | undefined;
}
export class workflows extends ArmResource<workflowsComponentInputs> implements workflowsComponentOutputs {
	constructor(entity: ADKEntity, options: workflowsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows";
}
export interface workflowsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows";
}
export interface workflowsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkflowProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workflows_runs extends ArmResource<workflows_runsComponentInputs> implements workflows_runsComponentOutputs {
	constructor(entity: ADKEntity, options: workflows_runsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/runs", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs";
}
export interface workflows_runsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs";
}
export interface workflows_runsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowRunProperties | undefined;
}
export class workflows_runs_actions
	extends ArmResource<workflows_runs_actionsComponentInputs>
	implements workflows_runs_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_runs_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/runs/actions", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs/actions";
}
export interface workflows_runs_actionsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs/actions";
}
export interface workflows_runs_actionsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowRunActionProperties | undefined;
}
export class workflows_runs_actions_repetitions
	extends ArmResource<workflows_runs_actions_repetitionsComponentInputs>
	implements workflows_runs_actions_repetitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_runs_actions_repetitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/runs/actions/repetitions", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs/actions/repetitions";
}
export interface workflows_runs_actions_repetitionsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs/actions/repetitions";
}
export interface workflows_runs_actions_repetitionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkflowRunActionRepetitionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workflows_runs_actions_repetitions_requestHistories
	extends ArmResource<workflows_runs_actions_repetitions_requestHistoriesComponentInputs>
	implements workflows_runs_actions_repetitions_requestHistoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_runs_actions_repetitions_requestHistoriesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Logic/workflows/runs/actions/repetitions/requestHistories",
			"2018-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs/actions/repetitions/requestHistories";
}
export interface workflows_runs_actions_repetitions_requestHistoriesComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs/actions/repetitions/requestHistories";
}
export interface workflows_runs_actions_repetitions_requestHistoriesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RequestHistoryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workflows_runs_actions_requestHistories
	extends ArmResource<workflows_runs_actions_requestHistoriesComponentInputs>
	implements workflows_runs_actions_requestHistoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_runs_actions_requestHistoriesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Logic/workflows/runs/actions/requestHistories",
			"2018-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs/actions/requestHistories";
}
export interface workflows_runs_actions_requestHistoriesComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs/actions/requestHistories";
}
export interface workflows_runs_actions_requestHistoriesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RequestHistoryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workflows_runs_actions_scopeRepetitions
	extends ArmResource<workflows_runs_actions_scopeRepetitionsComponentInputs>
	implements workflows_runs_actions_scopeRepetitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_runs_actions_scopeRepetitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Logic/workflows/runs/actions/scopeRepetitions",
			"2018-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs/actions/scopeRepetitions";
}
export interface workflows_runs_actions_scopeRepetitionsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs/actions/scopeRepetitions";
}
export interface workflows_runs_actions_scopeRepetitionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkflowRunActionRepetitionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workflows_runs_operations
	extends ArmResource<workflows_runs_operationsComponentInputs>
	implements workflows_runs_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_runs_operationsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/runs/operations", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs/operations";
}
export interface workflows_runs_operationsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs/operations";
}
export interface workflows_runs_operationsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowRunProperties | undefined;
}
export class workflows_triggers
	extends ArmResource<workflows_triggersComponentInputs>
	implements workflows_triggersComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_triggersComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/triggers", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/triggers";
}
export interface workflows_triggersComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/triggers";
}
export interface workflows_triggersComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowTriggerProperties | undefined;
}
export class workflows_triggers_histories
	extends ArmResource<workflows_triggers_historiesComponentInputs>
	implements workflows_triggers_historiesComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_triggers_historiesComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/triggers/histories", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/triggers/histories";
}
export interface workflows_triggers_historiesComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/triggers/histories";
}
export interface workflows_triggers_historiesComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowTriggerHistoryProperties | undefined;
}
export class workflows_versions
	extends ArmResource<workflows_versionsComponentInputs>
	implements workflows_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/versions", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/versions";
}
export interface workflows_versionsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/versions";
}
export interface workflows_versionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkflowVersionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listCallbackUrl(resource: workflows, input: GetCallbackUrlParameters): WorkflowTriggerCallbackUrl {
	if (resource.apiVersion !== "2018-07-01-preview") {
		throw new Error(`listCallbackUrl is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logic/workflows") {
		throw new Error(`listCallbackUrl is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listContentCallbackUrl(resource: integrationAccounts_assemblies): WorkflowTriggerCallbackUrl {
	if (resource.apiVersion !== "2018-07-01-preview") {
		throw new Error(`listContentCallbackUrl is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logic/integrationAccounts/assemblies") {
		throw new Error(`listContentCallbackUrl is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listExpressionTraces(resource: workflows_runs_actions): ExpressionTraces {
	if (resource.apiVersion !== "2018-07-01-preview") {
		throw new Error(`listExpressionTraces is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logic/workflows/runs/actions") {
		throw new Error(`listExpressionTraces is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeyVaultKeys(
	resource: integrationAccounts,
	input: ListKeyVaultKeysDefinition,
): KeyVaultKeyCollection {
	if (resource.apiVersion !== "2018-07-01-preview") {
		throw new Error(`listKeyVaultKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logic/integrationAccounts") {
		throw new Error(`listKeyVaultKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSwagger(resource: workflows): any {
	if (resource.apiVersion !== "2018-07-01-preview") {
		throw new Error(`listSwagger is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logic/workflows") {
		throw new Error(`listSwagger is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AgreementContent {
	readonly aS2?: AS2AgreementContent | undefined;
	readonly edifact?: EdifactAgreementContent | undefined;
	readonly x12?: X12AgreementContent | undefined;
}
export interface AS2AcknowledgementConnectionSettings {
	readonly ignoreCertificateNameMismatch: boolean;
	readonly keepHttpConnectionAlive: boolean;
	readonly supportHttpStatusCodeContinue: boolean;
	readonly unfoldHttpHeaders: boolean;
}
export interface AS2AgreementContent {
	readonly receiveAgreement: AS2OneWayAgreement;
	readonly sendAgreement: AS2OneWayAgreement;
}
export interface AS2EnvelopeSettings {
	readonly autogenerateFileName: boolean;
	readonly fileNameTemplate: string;
	readonly messageContentType: string;
	readonly suspendMessageOnFileNameGenerationError: boolean;
	readonly transmitFileNameInMimeHeader: boolean;
}
export interface AS2ErrorSettings {
	readonly resendIfMDNNotReceived: boolean;
	readonly suspendDuplicateMessage: boolean;
}
export interface AS2MdnSettings {
	readonly dispositionNotificationTo?: string | undefined;
	readonly mdnText?: string | undefined;
	readonly micHashingAlgorithm: "MD5" | "None" | "NotSpecified" | "SHA1" | "SHA2256" | "SHA2384" | "SHA2512";
	readonly needMDN: boolean;
	readonly receiptDeliveryUrl?: string | undefined;
	readonly sendInboundMDNToMessageBox: boolean;
	readonly sendMDNAsynchronously: boolean;
	readonly signMDN: boolean;
	readonly signOutboundMDNIfOptional: boolean;
}
export interface AS2MessageConnectionSettings {
	readonly ignoreCertificateNameMismatch: boolean;
	readonly keepHttpConnectionAlive: boolean;
	readonly supportHttpStatusCodeContinue: boolean;
	readonly unfoldHttpHeaders: boolean;
}
export interface AS2OneWayAgreement {
	readonly protocolSettings: AS2ProtocolSettings;
	readonly receiverBusinessIdentity: BusinessIdentity;
	readonly senderBusinessIdentity: BusinessIdentity;
}
export interface AS2ProtocolSettings {
	readonly acknowledgementConnectionSettings: AS2AcknowledgementConnectionSettings;
	readonly envelopeSettings: AS2EnvelopeSettings;
	readonly errorSettings: AS2ErrorSettings;
	readonly mdnSettings: AS2MdnSettings;
	readonly messageConnectionSettings: AS2MessageConnectionSettings;
	readonly securitySettings: AS2SecuritySettings;
	readonly validationSettings: AS2ValidationSettings;
}
export interface AS2SecuritySettings {
	readonly enableNRRForInboundDecodedMessages: boolean;
	readonly enableNRRForInboundEncodedMessages: boolean;
	readonly enableNRRForInboundMDN: boolean;
	readonly enableNRRForOutboundDecodedMessages: boolean;
	readonly enableNRRForOutboundEncodedMessages: boolean;
	readonly enableNRRForOutboundMDN: boolean;
	readonly encryptionCertificateName?: string | undefined;
	readonly overrideGroupSigningCertificate: boolean;
	readonly sha2AlgorithmFormat?: string | undefined;
	readonly signingCertificateName?: string | undefined;
}
export interface AS2ValidationSettings {
	readonly checkCertificateRevocationListOnReceive: boolean;
	readonly checkCertificateRevocationListOnSend: boolean;
	readonly checkDuplicateMessage: boolean;
	readonly compressMessage: boolean;
	readonly encryptionAlgorithm: "AES128" | "AES192" | "AES256" | "DES3" | "None" | "NotSpecified" | "RC2";
	readonly encryptMessage: boolean;
	readonly interchangeDuplicatesValidityDays: number;
	readonly overrideMessageProperties: boolean;
	readonly signingAlgorithm?: ("Default" | "NotSpecified" | "SHA1" | "SHA2256" | "SHA2384" | "SHA2512") | undefined;
	readonly signMessage: boolean;
}
export interface AssemblyProperties {
	readonly assemblyCulture?: string | undefined;
	readonly assemblyName: string;
	readonly assemblyPublicKeyToken?: string | undefined;
	readonly assemblyVersion?: string | undefined;
	readonly changedTime?: string | undefined;
	readonly content?: any | undefined;
	readonly contentLink?: ContentLink | undefined;
	readonly contentType?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly metadata?: any | undefined;
}
export interface AzureResourceErrorInfo {
	readonly code: string;
	readonly details?: AzureResourceErrorInfo[] | undefined;
	readonly message: string;
}
export interface B2BPartnerContent {
	readonly businessIdentities?: BusinessIdentity[] | undefined;
}
export interface BatchConfigurationProperties {
	readonly batchGroupName: string;
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly metadata?: any | undefined;
	readonly releaseCriteria: BatchReleaseCriteria;
}
export interface BatchReleaseCriteria {
	readonly batchSize?: number | undefined;
	readonly messageCount?: number | undefined;
	readonly recurrence?: WorkflowTriggerRecurrence | undefined;
}
export interface BusinessIdentity {
	readonly qualifier: string;
	readonly value: string;
}
export interface CallbackUrl {
	readonly value?: string | undefined;
}
export interface ContentHash {
	readonly algorithm?: string | undefined;
	readonly value?: string | undefined;
}
export interface ContentLink {
	readonly contentHash?: ContentHash | undefined;
	readonly contentSize?: number | undefined;
	readonly contentVersion?: string | undefined;
	readonly metadata?: any | undefined;
	readonly uri?: string | undefined;
}
export interface Correlation {
	readonly clientTrackingId?: string | undefined;
}
export interface EdifactAcknowledgementSettings {
	readonly acknowledgementControlNumberLowerBound: number;
	readonly acknowledgementControlNumberPrefix?: string | undefined;
	readonly acknowledgementControlNumberSuffix?: string | undefined;
	readonly acknowledgementControlNumberUpperBound: number;
	readonly batchFunctionalAcknowledgements: boolean;
	readonly batchTechnicalAcknowledgements: boolean;
	readonly needFunctionalAcknowledgement: boolean;
	readonly needLoopForValidMessages: boolean;
	readonly needTechnicalAcknowledgement: boolean;
	readonly rolloverAcknowledgementControlNumber: boolean;
	readonly sendSynchronousAcknowledgement: boolean;
}
export interface EdifactAgreementContent {
	readonly receiveAgreement: EdifactOneWayAgreement;
	readonly sendAgreement: EdifactOneWayAgreement;
}
export interface EdifactDelimiterOverride {
	readonly componentSeparator: number;
	readonly dataElementSeparator: number;
	readonly decimalPointIndicator: "Comma" | "Decimal";
	readonly messageAssociationAssignedCode?: string | undefined;
	readonly messageId?: string | undefined;
	readonly messageRelease?: string | undefined;
	readonly messageVersion?: string | undefined;
	readonly releaseIndicator: number;
	readonly repetitionSeparator: number;
	readonly segmentTerminator: number;
	readonly segmentTerminatorSuffix: "CR" | "CRLF" | "LF" | "None";
	readonly targetNamespace?: string | undefined;
}
export interface EdifactEnvelopeOverride {
	readonly applicationPassword?: string | undefined;
	readonly associationAssignedCode?: string | undefined;
	readonly controllingAgencyCode?: string | undefined;
	readonly functionalGroupId?: string | undefined;
	readonly groupHeaderMessageRelease?: string | undefined;
	readonly groupHeaderMessageVersion?: string | undefined;
	readonly messageAssociationAssignedCode?: string | undefined;
	readonly messageId?: string | undefined;
	readonly messageRelease?: string | undefined;
	readonly messageVersion?: string | undefined;
	readonly receiverApplicationId?: string | undefined;
	readonly receiverApplicationQualifier?: string | undefined;
	readonly senderApplicationId?: string | undefined;
	readonly senderApplicationQualifier?: string | undefined;
	readonly targetNamespace?: string | undefined;
}
export interface EdifactEnvelopeSettings {
	readonly applicationReferenceId?: string | undefined;
	readonly applyDelimiterStringAdvice: boolean;
	readonly communicationAgreementId?: string | undefined;
	readonly createGroupingSegments: boolean;
	readonly enableDefaultGroupHeaders: boolean;
	readonly functionalGroupId?: string | undefined;
	readonly groupApplicationPassword?: string | undefined;
	readonly groupApplicationReceiverId?: string | undefined;
	readonly groupApplicationReceiverQualifier?: string | undefined;
	readonly groupApplicationSenderId?: string | undefined;
	readonly groupApplicationSenderQualifier?: string | undefined;
	readonly groupAssociationAssignedCode?: string | undefined;
	readonly groupControllingAgencyCode?: string | undefined;
	readonly groupControlNumberLowerBound: number;
	readonly groupControlNumberPrefix?: string | undefined;
	readonly groupControlNumberSuffix?: string | undefined;
	readonly groupControlNumberUpperBound: number;
	readonly groupMessageRelease?: string | undefined;
	readonly groupMessageVersion?: string | undefined;
	readonly interchangeControlNumberLowerBound: number;
	readonly interchangeControlNumberPrefix?: string | undefined;
	readonly interchangeControlNumberSuffix?: string | undefined;
	readonly interchangeControlNumberUpperBound: number;
	readonly isTestInterchange: boolean;
	readonly overwriteExistingTransactionSetControlNumber: boolean;
	readonly processingPriorityCode?: string | undefined;
	readonly receiverInternalIdentification?: string | undefined;
	readonly receiverInternalSubIdentification?: string | undefined;
	readonly receiverReverseRoutingAddress?: string | undefined;
	readonly recipientReferencePasswordQualifier?: string | undefined;
	readonly recipientReferencePasswordValue?: string | undefined;
	readonly rolloverGroupControlNumber: boolean;
	readonly rolloverInterchangeControlNumber: boolean;
	readonly rolloverTransactionSetControlNumber: boolean;
	readonly senderInternalIdentification?: string | undefined;
	readonly senderInternalSubIdentification?: string | undefined;
	readonly senderReverseRoutingAddress?: string | undefined;
	readonly transactionSetControlNumberLowerBound: number;
	readonly transactionSetControlNumberPrefix?: string | undefined;
	readonly transactionSetControlNumberSuffix?: string | undefined;
	readonly transactionSetControlNumberUpperBound: number;
}
export interface EdifactFramingSettings {
	readonly characterEncoding?: string | undefined;
	readonly characterSet:
		| "KECA"
		| "NotSpecified"
		| "UNOA"
		| "UNOB"
		| "UNOC"
		| "UNOD"
		| "UNOE"
		| "UNOF"
		| "UNOG"
		| "UNOH"
		| "UNOI"
		| "UNOJ"
		| "UNOK"
		| "UNOX"
		| "UNOY";
	readonly componentSeparator: number;
	readonly dataElementSeparator: number;
	readonly decimalPointIndicator: "Comma" | "Decimal";
	readonly protocolVersion: number;
	readonly releaseIndicator: number;
	readonly repetitionSeparator: number;
	readonly segmentTerminator: number;
	readonly segmentTerminatorSuffix: "CR" | "CRLF" | "LF" | "None";
	readonly serviceCodeListDirectoryVersion?: string | undefined;
}
export interface EdifactMessageFilter {
	readonly messageFilterType: "Exclude" | "Include" | "NotSpecified";
}
export interface EdifactMessageIdentifier {
	readonly messageId: string;
}
export interface EdifactOneWayAgreement {
	readonly protocolSettings: EdifactProtocolSettings;
	readonly receiverBusinessIdentity: BusinessIdentity;
	readonly senderBusinessIdentity: BusinessIdentity;
}
export interface EdifactProcessingSettings {
	readonly createEmptyXmlTagsForTrailingSeparators: boolean;
	readonly maskSecurityInfo: boolean;
	readonly preserveInterchange: boolean;
	readonly suspendInterchangeOnError: boolean;
	readonly useDotAsDecimalSeparator: boolean;
}
export interface EdifactProtocolSettings {
	readonly acknowledgementSettings: EdifactAcknowledgementSettings;
	readonly edifactDelimiterOverrides?: EdifactDelimiterOverride[] | undefined;
	readonly envelopeOverrides?: EdifactEnvelopeOverride[] | undefined;
	readonly envelopeSettings: EdifactEnvelopeSettings;
	readonly framingSettings: EdifactFramingSettings;
	readonly messageFilter: EdifactMessageFilter;
	readonly messageFilterList?: EdifactMessageIdentifier[] | undefined;
	readonly processingSettings: EdifactProcessingSettings;
	readonly schemaReferences: EdifactSchemaReference[];
	readonly validationOverrides?: EdifactValidationOverride[] | undefined;
	readonly validationSettings: EdifactValidationSettings;
}
export interface EdifactSchemaReference {
	readonly associationAssignedCode?: string | undefined;
	readonly messageId: string;
	readonly messageRelease: string;
	readonly messageVersion: string;
	readonly schemaName: string;
	readonly senderApplicationId?: string | undefined;
	readonly senderApplicationQualifier?: string | undefined;
}
export interface EdifactValidationOverride {
	readonly allowLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly enforceCharacterSet: boolean;
	readonly messageId: string;
	readonly trailingSeparatorPolicy: "Mandatory" | "NotAllowed" | "NotSpecified" | "Optional";
	readonly trimLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly validateEDITypes: boolean;
	readonly validateXSDTypes: boolean;
}
export interface EdifactValidationSettings {
	readonly allowLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly checkDuplicateGroupControlNumber: boolean;
	readonly checkDuplicateInterchangeControlNumber: boolean;
	readonly checkDuplicateTransactionSetControlNumber: boolean;
	readonly interchangeControlNumberValidityDays: number;
	readonly trailingSeparatorPolicy: "Mandatory" | "NotAllowed" | "NotSpecified" | "Optional";
	readonly trimLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly validateCharacterSet: boolean;
	readonly validateEDITypes: boolean;
	readonly validateXSDTypes: boolean;
}
export interface ErrorProperties {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ErrorResponse {
	readonly error?: ErrorProperties | undefined;
}
export interface Expression {
	readonly error?: AzureResourceErrorInfo | undefined;
	readonly subexpressions?: Expression[] | undefined;
	readonly text?: string | undefined;
	readonly value?: any | undefined;
}
export interface ExpressionRoot {
	readonly error?: AzureResourceErrorInfo | undefined;
	readonly path?: string | undefined;
	readonly subexpressions?: Expression[] | undefined;
	readonly text?: string | undefined;
	readonly value?: any | undefined;
}
export interface ExpressionTraces {
	readonly inputs?: ExpressionRoot[] | undefined;
}
export interface GetCallbackUrlParameters {
	readonly keyType?: ("NotSpecified" | "Primary" | "Secondary") | undefined;
	readonly notAfter?: string | undefined;
}
export interface IntegrationAccountAgreementProperties {
	readonly agreementType: "AS2" | "Edifact" | "NotSpecified";
	readonly changedTime?: string | undefined;
	readonly content: AgreementContent;
	readonly createdTime?: string | undefined;
	readonly guestIdentity: BusinessIdentity;
	readonly guestPartner: string;
	readonly hostIdentity: BusinessIdentity;
	readonly hostPartner: string;
	readonly metadata?: any | undefined;
}
export interface IntegrationAccountCertificateProperties {
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly key?: KeyVaultKeyReference | undefined;
	readonly metadata?: any | undefined;
	readonly publicCertificate?: string | undefined;
}
export interface IntegrationAccountMapProperties {
	readonly changedTime?: string | undefined;
	readonly content?: string | undefined;
	readonly contentLink?: ContentLink | undefined;
	readonly contentType?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly mapType: "Liquid" | "NotSpecified" | "Xslt" | "Xslt20" | "Xslt30";
	readonly metadata?: any | undefined;
	readonly parametersSchema?: IntegrationAccountMapPropertiesParametersSchema | undefined;
}
export interface IntegrationAccountMapPropertiesParametersSchema {
	readonly ref?: string | undefined;
}
export interface IntegrationAccountPartnerProperties {
	readonly changedTime?: string | undefined;
	readonly content: PartnerContent;
	readonly createdTime?: string | undefined;
	readonly metadata?: any | undefined;
	readonly partnerType: "B2B" | "NotSpecified";
}
export interface IntegrationAccountSchemaProperties {
	readonly changedTime?: string | undefined;
	readonly content?: string | undefined;
	readonly contentLink?: ContentLink | undefined;
	readonly contentType?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly documentName?: string | undefined;
	readonly fileName?: string | undefined;
	readonly metadata?: any | undefined;
	readonly schemaType: "NotSpecified" | "Xml";
	readonly targetNamespace?: string | undefined;
}
export interface IntegrationAccountSessionProperties {
	readonly changedTime?: string | undefined;
	readonly content?: any | undefined;
	readonly createdTime?: string | undefined;
}
export interface IntegrationAccountSku {
	readonly name: "Basic" | "Free" | "NotSpecified" | "Standard";
}
export interface KeyVaultKey {
	readonly attributes?: KeyVaultKeyAttributes | undefined;
	readonly kid?: string | undefined;
}
export interface KeyVaultKeyAttributes {
	readonly created?: number | undefined;
	readonly enabled?: boolean | undefined;
	readonly updated?: number | undefined;
}
export interface KeyVaultKeyCollection {
	readonly skipToken?: string | undefined;
	readonly value?: KeyVaultKey[] | undefined;
}
export interface KeyVaultKeyReference {
	readonly keyName: string;
	readonly keyVault: KeyVaultKeyReferenceKeyVault;
	readonly keyVersion?: string | undefined;
}
export interface KeyVaultKeyReferenceKeyVault {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface KeyVaultReference {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ListKeyVaultKeysDefinition {
	readonly keyVault: KeyVaultReference;
	readonly skipToken?: string | undefined;
}
export interface PartnerContent {
	readonly b2b?: B2BPartnerContent | undefined;
}
export interface RecurrenceSchedule {
	readonly hours?: number[] | undefined;
	readonly minutes?: number[] | undefined;
	readonly monthDays?: number[] | undefined;
	readonly monthlyOccurrences?: RecurrenceScheduleOccurrence[] | undefined;
	readonly weekDays?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
}
export interface RecurrenceScheduleOccurrence {
	readonly day?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday") | undefined;
	readonly occurrence?: number | undefined;
}
export interface RepetitionIndex {
	readonly itemIndex: number;
	readonly scopeName?: string | undefined;
}
export interface Request {
	readonly headers?: any | undefined;
	readonly method?: string | undefined;
	readonly uri?: string | undefined;
}
export interface RequestHistoryProperties {
	readonly endTime?: string | undefined;
	readonly request?: Request | undefined;
	readonly response?: Response | undefined;
	readonly startTime?: string | undefined;
}
export interface ResourceReference {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Response {
	readonly bodyLink?: ContentLink | undefined;
	readonly headers?: any | undefined;
	readonly statusCode?: number | undefined;
}
export interface RetryHistory {
	readonly clientRequestId?: string | undefined;
	readonly code?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: ErrorResponse | undefined;
	readonly serviceRequestId?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface RunActionCorrelation {
	readonly actionTrackingId?: string | undefined;
	readonly clientKeywords?: string[] | undefined;
	readonly clientTrackingId?: string | undefined;
}
export interface Sku {
	readonly name: "Basic" | "Free" | "NotSpecified" | "Premium" | "Shared" | "Standard";
	readonly plan?: ResourceReference | undefined;
}
export interface WorkflowOutputParameter {
	readonly description?: string | undefined;
	readonly error?: any | undefined;
	readonly metadata?: any | undefined;
	readonly type?:
		| ("Array" | "Bool" | "Float" | "Int" | "NotSpecified" | "Object" | "SecureObject" | "SecureString" | "String")
		| undefined;
	readonly value?: any | undefined;
}
export interface WorkflowParameter {
	readonly description?: string | undefined;
	readonly metadata?: any | undefined;
	readonly type?:
		| ("Array" | "Bool" | "Float" | "Int" | "NotSpecified" | "Object" | "SecureObject" | "SecureString" | "String")
		| undefined;
	readonly value?: any | undefined;
}
export interface WorkflowProperties {
	readonly accessEndpoint?: string | undefined;
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly definition?: any | undefined;
	readonly integrationAccount?: ResourceReference | undefined;
	readonly parameters?: WorkflowPropertiesParameters | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Completed"
				| "Created"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "Moving"
				| "NotSpecified"
				| "Ready"
				| "Registered"
				| "Registering"
				| "Running"
				| "Succeeded"
				| "Unregistered"
				| "Unregistering"
				| "Updating"
		  )
		| undefined;
	readonly sku?: Sku | undefined;
	readonly state?: ("Completed" | "Deleted" | "Disabled" | "Enabled" | "NotSpecified" | "Suspended") | undefined;
	readonly version?: string | undefined;
}
export interface WorkflowPropertiesParameters {
	readonly "[ key: string ]"?: WorkflowParameter | undefined;
}
export interface WorkflowRunActionProperties {
	readonly code?: string | undefined;
	readonly correlation?: Correlation | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly inputsLink?: ContentLink | undefined;
	readonly outputsLink?: ContentLink | undefined;
	readonly retryHistory?: RetryHistory[] | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "Ignored"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
				| "Waiting"
		  )
		| undefined;
	readonly trackedProperties?: any | undefined;
	readonly trackingId?: string | undefined;
}
export interface WorkflowRunActionRepetitionProperties {
	readonly code?: string | undefined;
	readonly correlation?: RunActionCorrelation | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly inputs?: any | undefined;
	readonly inputsLink?: ContentLink | undefined;
	readonly iterationCount?: number | undefined;
	readonly outputs?: any | undefined;
	readonly outputsLink?: ContentLink | undefined;
	readonly repetitionIndexes?: RepetitionIndex[] | undefined;
	readonly retryHistory?: RetryHistory[] | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "Ignored"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
				| "Waiting"
		  )
		| undefined;
	readonly trackedProperties?: any | undefined;
	readonly trackingId?: string | undefined;
}
export interface WorkflowRunProperties {
	readonly code?: string | undefined;
	readonly correlation?: Correlation | undefined;
	readonly correlationId?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly outputs?: WorkflowRunPropertiesOutputs | undefined;
	readonly response?: WorkflowRunTrigger | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "Ignored"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
				| "Waiting"
		  )
		| undefined;
	readonly trigger?: WorkflowRunTrigger | undefined;
	readonly waitEndTime?: string | undefined;
	readonly workflow?: ResourceReference | undefined;
}
export interface WorkflowRunPropertiesOutputs {
	readonly "[ key: string ]"?: WorkflowOutputParameter | undefined;
}
export interface WorkflowRunTrigger {
	readonly code?: string | undefined;
	readonly correlation?: Correlation | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly inputs?: any | undefined;
	readonly inputsLink?: ContentLink | undefined;
	readonly name?: string | undefined;
	readonly outputs?: any | undefined;
	readonly outputsLink?: ContentLink | undefined;
	readonly scheduledTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "Ignored"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
				| "Waiting"
		  )
		| undefined;
	readonly trackedProperties?: any | undefined;
	readonly trackingId?: string | undefined;
}
export interface WorkflowTriggerCallbackUrl {
	readonly basePath?: string | undefined;
	readonly method?: string | undefined;
	readonly queries?: WorkflowTriggerListCallbackUrlQueries | undefined;
	readonly relativePath?: string | undefined;
	readonly relativePathParameters?: string[] | undefined;
	readonly value?: string | undefined;
}
export interface WorkflowTriggerHistoryProperties {
	readonly code?: string | undefined;
	readonly correlation?: Correlation | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly fired?: boolean | undefined;
	readonly inputsLink?: ContentLink | undefined;
	readonly outputsLink?: ContentLink | undefined;
	readonly run?: ResourceReference | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "Ignored"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
				| "Waiting"
		  )
		| undefined;
	readonly trackingId?: string | undefined;
}
export interface WorkflowTriggerListCallbackUrlQueries {
	readonly "api-version"?: string | undefined;
	readonly se?: string | undefined;
	readonly sig?: string | undefined;
	readonly sp?: string | undefined;
	readonly sv?: string | undefined;
}
export interface WorkflowTriggerProperties {
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly lastExecutionTime?: string | undefined;
	readonly nextExecutionTime?: string | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Completed"
				| "Created"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "Moving"
				| "NotSpecified"
				| "Ready"
				| "Registered"
				| "Registering"
				| "Running"
				| "Succeeded"
				| "Unregistered"
				| "Unregistering"
				| "Updating"
		  )
		| undefined;
	readonly recurrence?: WorkflowTriggerRecurrence | undefined;
	readonly state?: ("Completed" | "Deleted" | "Disabled" | "Enabled" | "NotSpecified" | "Suspended") | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "Ignored"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
				| "Waiting"
		  )
		| undefined;
	readonly workflow?: ResourceReference | undefined;
}
export interface WorkflowTriggerRecurrence {
	readonly endTime?: string | undefined;
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month" | "NotSpecified" | "Second" | "Week" | "Year") | undefined;
	readonly interval?: number | undefined;
	readonly schedule?: RecurrenceSchedule | undefined;
	readonly startTime?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface WorkflowVersionProperties {
	readonly accessEndpoint?: string | undefined;
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly definition?: any | undefined;
	readonly integrationAccount?: ResourceReference | undefined;
	readonly parameters?: WorkflowVersionPropertiesParameters | undefined;
	readonly sku?: Sku | undefined;
	readonly state?: ("Completed" | "Deleted" | "Disabled" | "Enabled" | "NotSpecified" | "Suspended") | undefined;
	readonly version?: string | undefined;
}
export interface WorkflowVersionPropertiesParameters {
	readonly "[ key: string ]"?: WorkflowParameter | undefined;
}
export interface X12AcknowledgementSettings {
	readonly acknowledgementControlNumberLowerBound: number;
	readonly acknowledgementControlNumberPrefix?: string | undefined;
	readonly acknowledgementControlNumberSuffix?: string | undefined;
	readonly acknowledgementControlNumberUpperBound: number;
	readonly batchFunctionalAcknowledgements: boolean;
	readonly batchImplementationAcknowledgements: boolean;
	readonly batchTechnicalAcknowledgements: boolean;
	readonly functionalAcknowledgementVersion?: string | undefined;
	readonly implementationAcknowledgementVersion?: string | undefined;
	readonly needFunctionalAcknowledgement: boolean;
	readonly needImplementationAcknowledgement: boolean;
	readonly needLoopForValidMessages: boolean;
	readonly needTechnicalAcknowledgement: boolean;
	readonly rolloverAcknowledgementControlNumber: boolean;
	readonly sendSynchronousAcknowledgement: boolean;
}
export interface X12AgreementContent {
	readonly receiveAgreement: X12OneWayAgreement;
	readonly sendAgreement: X12OneWayAgreement;
}
export interface X12DelimiterOverrides {
	readonly componentSeparator: number;
	readonly dataElementSeparator: number;
	readonly messageId?: string | undefined;
	readonly protocolVersion?: string | undefined;
	readonly replaceCharacter: number;
	readonly replaceSeparatorsInPayload: boolean;
	readonly segmentTerminator: number;
	readonly segmentTerminatorSuffix: "CR" | "CRLF" | "LF" | "None";
	readonly targetNamespace?: string | undefined;
}
export interface X12EnvelopeOverride {
	readonly dateFormat: "CCYYMMDD" | "NotSpecified" | "YYMMDD";
	readonly functionalIdentifierCode?: string | undefined;
	readonly headerVersion: string;
	readonly messageId: string;
	readonly protocolVersion: string;
	readonly receiverApplicationId: string;
	readonly responsibleAgencyCode: string;
	readonly senderApplicationId: string;
	readonly targetNamespace: string;
	readonly timeFormat: "HHMM" | "HHMMSS" | "HHMMSSd" | "HHMMSSdd" | "NotSpecified";
}
export interface X12EnvelopeSettings {
	readonly controlStandardsId: number;
	readonly controlVersionNumber: string;
	readonly enableDefaultGroupHeaders: boolean;
	readonly functionalGroupId?: string | undefined;
	readonly groupControlNumberLowerBound: number;
	readonly groupControlNumberUpperBound: number;
	readonly groupHeaderAgencyCode: string;
	readonly groupHeaderDateFormat: "CCYYMMDD" | "NotSpecified" | "YYMMDD";
	readonly groupHeaderTimeFormat: "HHMM" | "HHMMSS" | "HHMMSSd" | "HHMMSSdd" | "NotSpecified";
	readonly groupHeaderVersion: string;
	readonly interchangeControlNumberLowerBound: number;
	readonly interchangeControlNumberUpperBound: number;
	readonly overwriteExistingTransactionSetControlNumber: boolean;
	readonly receiverApplicationId: string;
	readonly rolloverGroupControlNumber: boolean;
	readonly rolloverInterchangeControlNumber: boolean;
	readonly rolloverTransactionSetControlNumber: boolean;
	readonly senderApplicationId: string;
	readonly transactionSetControlNumberLowerBound: number;
	readonly transactionSetControlNumberPrefix?: string | undefined;
	readonly transactionSetControlNumberSuffix?: string | undefined;
	readonly transactionSetControlNumberUpperBound: number;
	readonly usageIndicator: "Information" | "NotSpecified" | "Production" | "Test";
	readonly useControlStandardsIdAsRepetitionCharacter: boolean;
}
export interface X12FramingSettings {
	readonly characterSet: "Basic" | "Extended" | "NotSpecified" | "UTF8";
	readonly componentSeparator: number;
	readonly dataElementSeparator: number;
	readonly replaceCharacter: number;
	readonly replaceSeparatorsInPayload: boolean;
	readonly segmentTerminator: number;
	readonly segmentTerminatorSuffix: "CR" | "CRLF" | "LF" | "None";
}
export interface X12MessageFilter {
	readonly messageFilterType: "Exclude" | "Include" | "NotSpecified";
}
export interface X12MessageIdentifier {
	readonly messageId: string;
}
export interface X12OneWayAgreement {
	readonly protocolSettings: X12ProtocolSettings;
	readonly receiverBusinessIdentity: BusinessIdentity;
	readonly senderBusinessIdentity: BusinessIdentity;
}
export interface X12ProcessingSettings {
	readonly convertImpliedDecimal: boolean;
	readonly createEmptyXmlTagsForTrailingSeparators: boolean;
	readonly maskSecurityInfo: boolean;
	readonly preserveInterchange: boolean;
	readonly suspendInterchangeOnError: boolean;
	readonly useDotAsDecimalSeparator: boolean;
}
export interface X12ProtocolSettings {
	readonly acknowledgementSettings: X12AcknowledgementSettings;
	readonly envelopeOverrides?: X12EnvelopeOverride[] | undefined;
	readonly envelopeSettings: X12EnvelopeSettings;
	readonly framingSettings: X12FramingSettings;
	readonly messageFilter: X12MessageFilter;
	readonly messageFilterList?: X12MessageIdentifier[] | undefined;
	readonly processingSettings: X12ProcessingSettings;
	readonly schemaReferences: X12SchemaReference[];
	readonly securitySettings: X12SecuritySettings;
	readonly validationOverrides?: X12ValidationOverride[] | undefined;
	readonly validationSettings: X12ValidationSettings;
	readonly x12DelimiterOverrides?: X12DelimiterOverrides[] | undefined;
}
export interface X12SchemaReference {
	readonly messageId: string;
	readonly schemaName: string;
	readonly schemaVersion: string;
	readonly senderApplicationId?: string | undefined;
}
export interface X12SecuritySettings {
	readonly authorizationQualifier: string;
	readonly authorizationValue?: string | undefined;
	readonly passwordValue?: string | undefined;
	readonly securityQualifier: string;
}
export interface X12ValidationOverride {
	readonly allowLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly messageId: string;
	readonly trailingSeparatorPolicy: "Mandatory" | "NotAllowed" | "NotSpecified" | "Optional";
	readonly trimLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly validateCharacterSet: boolean;
	readonly validateEDITypes: boolean;
	readonly validateXSDTypes: boolean;
}
export interface X12ValidationSettings {
	readonly allowLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly checkDuplicateGroupControlNumber: boolean;
	readonly checkDuplicateInterchangeControlNumber: boolean;
	readonly checkDuplicateTransactionSetControlNumber: boolean;
	readonly interchangeControlNumberValidityDays: number;
	readonly trailingSeparatorPolicy: "Mandatory" | "NotAllowed" | "NotSpecified" | "Optional";
	readonly trimLeadingAndTrailingSpacesAndZeroes: boolean;
	readonly validateCharacterSet: boolean;
	readonly validateEDITypes: boolean;
	readonly validateXSDTypes: boolean;
}
export default {
	integrationAccounts: integrationAccounts,
	"integrationAccounts/agreements": integrationAccounts_agreements,
	"integrationAccounts/assemblies": integrationAccounts_assemblies,
	"integrationAccounts/batchConfigurations": integrationAccounts_batchConfigurations,
	"integrationAccounts/certificates": integrationAccounts_certificates,
	"integrationAccounts/maps": integrationAccounts_maps,
	"integrationAccounts/partners": integrationAccounts_partners,
	"integrationAccounts/schemas": integrationAccounts_schemas,
	"integrationAccounts/sessions": integrationAccounts_sessions,
	workflows: workflows,
	"workflows/runs": workflows_runs,
	"workflows/runs/actions": workflows_runs_actions,
	"workflows/runs/actions/repetitions": workflows_runs_actions_repetitions,
	"workflows/runs/actions/repetitions/requestHistories": workflows_runs_actions_repetitions_requestHistories,
	"workflows/runs/actions/requestHistories": workflows_runs_actions_requestHistories,
	"workflows/runs/actions/scopeRepetitions": workflows_runs_actions_scopeRepetitions,
	"workflows/runs/operations": workflows_runs_operations,
	"workflows/triggers": workflows_triggers,
	"workflows/triggers/histories": workflows_triggers_histories,
	"workflows/versions": workflows_versions,
};
