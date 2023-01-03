import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class integrationAccounts
	extends ArmResource<integrationAccountsComponentInputs>
	implements integrationAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts";
}
export interface integrationAccountsComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts";
}
export interface integrationAccountsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: any | undefined;
	readonly sku?: IntegrationAccountSku | undefined;
	readonly tags?: IntegrationAccountResourceTags | undefined;
}
export class integrationAccounts_agreements
	extends ArmResource<integrationAccounts_agreementsComponentInputs>
	implements integrationAccounts_agreementsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/agreements", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/agreements";
}
export interface integrationAccounts_agreementsComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/agreements";
}
export interface integrationAccounts_agreementsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IntegrationAccountAgreementProperties | undefined;
	readonly tags?: IntegrationAccountResourceTags | undefined;
}
export class integrationAccounts_certificates
	extends ArmResource<integrationAccounts_certificatesComponentInputs>
	implements integrationAccounts_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/certificates", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/certificates";
}
export interface integrationAccounts_certificatesComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/certificates";
}
export interface integrationAccounts_certificatesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IntegrationAccountCertificateProperties | undefined;
	readonly tags?: IntegrationAccountResourceTags | undefined;
}
export class integrationAccounts_maps
	extends ArmResource<integrationAccounts_mapsComponentInputs>
	implements integrationAccounts_mapsComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_mapsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/maps", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/maps";
}
export interface integrationAccounts_mapsComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/maps";
}
export interface integrationAccounts_mapsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IntegrationAccountMapProperties | undefined;
	readonly tags?: IntegrationAccountResourceTags | undefined;
}
export class integrationAccounts_partners
	extends ArmResource<integrationAccounts_partnersComponentInputs>
	implements integrationAccounts_partnersComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_partnersComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/partners", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/partners";
}
export interface integrationAccounts_partnersComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/partners";
}
export interface integrationAccounts_partnersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IntegrationAccountPartnerProperties | undefined;
	readonly tags?: IntegrationAccountResourceTags | undefined;
}
export class integrationAccounts_schemas
	extends ArmResource<integrationAccounts_schemasComponentInputs>
	implements integrationAccounts_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: integrationAccounts_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/integrationAccounts/schemas", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/integrationAccounts/schemas";
}
export interface integrationAccounts_schemasComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/integrationAccounts/schemas";
}
export interface integrationAccounts_schemasComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IntegrationAccountSchemaProperties | undefined;
	readonly tags?: IntegrationAccountResourceTags | undefined;
}
export function listCallbackUrl(resource: integrationAccounts, input: ListCallbackUrlParameters): CallbackUrl {
	if (resource.apiVersion !== "2015-08-01-preview") {
		throw new Error(`listCallbackUrl is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logic/integrationAccounts") {
		throw new Error(`listCallbackUrl is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AgreementContent {
	readonly AS2?: AS2AgreementContent | undefined;
	readonly Edifact?: EdifactAgreementContent | undefined;
	readonly X12?: X12AgreementContent | undefined;
}
export interface AS2AcknowledgementConnectionSettings {
	readonly ignoreCertificateNameMismatch?: boolean | undefined;
	readonly keepHttpConnectionAlive?: boolean | undefined;
	readonly supportHttpStatusCodeContinue?: boolean | undefined;
	readonly unfoldHttpHeaders?: boolean | undefined;
}
export interface AS2AgreementContent {
	readonly receiveAgreement?: AS2OneWayAgreement | undefined;
	readonly sendAgreement?: AS2OneWayAgreement | undefined;
}
export interface AS2EnvelopeSettings {
	readonly AutogenerateFileName?: boolean | undefined;
	readonly fileNameTemplate?: string | undefined;
	readonly messageContentType?: string | undefined;
	readonly SuspendMessageOnFileNameGenerationError?: boolean | undefined;
	readonly transmitFileNameInMimeHeader?: boolean | undefined;
}
export interface AS2ErrorSettings {
	readonly ResendIfMdnNotReceived?: boolean | undefined;
	readonly SuspendDuplicateMessage?: boolean | undefined;
}
export interface AS2MdnSettings {
	readonly dispositionNotificationTo?: string | undefined;
	readonly mdnText?: string | undefined;
	readonly micHashingAlgorithm?: ("None" | "NotSpecified" | "SHA2256" | "SHA2384") | undefined;
	readonly needMdn?: boolean | undefined;
	readonly receiptDeliveryUrl?: string | undefined;
	readonly sendInboundMdnToMessageBox?: boolean | undefined;
	readonly sendMdnAsynchronously?: boolean | undefined;
	readonly signMdn?: boolean | undefined;
	readonly signOutboundMdnIfOptional?: boolean | undefined;
}
export interface AS2MessageConnectionSettings {
	readonly ignoreCertificateNameMismatch?: boolean | undefined;
	readonly keepHttpConnectionAlive?: boolean | undefined;
	readonly supportHttpStatusCodeContinue?: boolean | undefined;
	readonly unfoldHttpHeaders?: boolean | undefined;
}
export interface AS2OneWayAgreement {
	readonly protocolSettings?: AS2ProtocolSettings | undefined;
	readonly receiverBusinessIdentity?: BusinessIdentity | undefined;
	readonly senderBusinessIdentity?: BusinessIdentity | undefined;
}
export interface AS2ProtocolSettings {
	readonly acknowledgementConnectionSettings?: AS2AcknowledgementConnectionSettings | undefined;
	readonly envelopeSettings?: AS2EnvelopeSettings | undefined;
	readonly errorSettings?: AS2ErrorSettings | undefined;
	readonly mdnSettings?: AS2MdnSettings | undefined;
	readonly messageConnectionSettings?: AS2MessageConnectionSettings | undefined;
	readonly securitySettings?: AS2SecuritySettings | undefined;
	readonly validationSettings?: AS2ValidationSettings | undefined;
}
export interface AS2SecuritySettings {
	readonly enableNrrForInboundDecodedMessages?: boolean | undefined;
	readonly enableNrrForInboundEncodedMessages?: boolean | undefined;
	readonly enableNrrForInboundMdn?: boolean | undefined;
	readonly enableNrrForOutboundDecodedMessages?: boolean | undefined;
	readonly enableNrrForOutboundEncodedMessages?: boolean | undefined;
	readonly enableNrrForOutboundMdn?: boolean | undefined;
	readonly encryptionCertificateName?: string | undefined;
	readonly overrideGroupSigningCertificate?: boolean | undefined;
	readonly signingCertificateName?: string | undefined;
}
export interface AS2ValidationSettings {
	readonly checkCertificateRevocationListOnReceive?: boolean | undefined;
	readonly checkCertificateRevocationListOnSend?: boolean | undefined;
	readonly checkDuplicateMessage?: boolean | undefined;
	readonly compressMessage?: boolean | undefined;
	readonly encryptionAlgorithm?: ("AES128" | "AES192" | "AES256" | "DES3" | "None" | "NotSpecified") | undefined;
	readonly encryptMessage?: boolean | undefined;
	readonly interchangeDuplicatesValidityDays?: number | undefined;
	readonly overrideMessageProperties?: boolean | undefined;
	readonly signMessage?: boolean | undefined;
}
export interface B2BPartnerContent {
	readonly businessIdentities?: BusinessIdentity[] | undefined;
}
export interface BusinessIdentity {
	readonly Qualifier?: string | undefined;
	readonly Value?: string | undefined;
}
export interface CallbackUrl {
	readonly value?: string | undefined;
}
export interface EdifactAcknowledgementSettings {
	readonly acknowledgementControlNumberLowerBound?: number | undefined;
	readonly acknowledgementControlNumberPrefix?: string | undefined;
	readonly acknowledgementControlNumberSuffix?: string | undefined;
	readonly acknowledgementControlNumberUpperBound?: number | undefined;
	readonly batchFunctionalAcknowledgements?: boolean | undefined;
	readonly batchTechnicalAcknowledgements?: boolean | undefined;
	readonly needFunctionalAcknowledgement?: boolean | undefined;
	readonly needLoopForValidMessages?: boolean | undefined;
	readonly needTechnicalAcknowledgement?: boolean | undefined;
	readonly rolloverAcknowledgementControlNumber?: boolean | undefined;
	readonly sendSynchronousAcknowledgement?: boolean | undefined;
}
export interface EdifactAgreementContent {
	readonly receiveAgreement?: EdifactOneWayAgreement | undefined;
	readonly sendAgreement?: EdifactOneWayAgreement | undefined;
}
export interface EdifactDelimiterOverride {
	readonly componentSeparator?: number | undefined;
	readonly dataElementSeparator?: number | undefined;
	readonly decimalPointIndicator?: ("Comma" | "Decimal") | undefined;
	readonly messageAssociationAssignedCode?: string | undefined;
	readonly messageId?: string | undefined;
	readonly messageRelease?: string | undefined;
	readonly messageVersion?: string | undefined;
	readonly releaseIndicator?: number | undefined;
	readonly repetitionSeparator?: number | undefined;
	readonly segmentTerminator?: number | undefined;
	readonly segmentTerminatorSuffix?: ("CR" | "CRLF" | "LF" | "None") | undefined;
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
	readonly applyDelimiterStringAdvice?: boolean | undefined;
	readonly communicationAgreementId?: string | undefined;
	readonly createGroupingSegments?: boolean | undefined;
	readonly enableDefaultGroupHeaders?: boolean | undefined;
	readonly functionalGroupId?: string | undefined;
	readonly groupApplicationPassword?: string | undefined;
	readonly groupApplicationReceiverId?: string | undefined;
	readonly groupApplicationReceiverQualifier?: string | undefined;
	readonly groupApplicationSenderId?: string | undefined;
	readonly groupApplicationSenderQualifier?: string | undefined;
	readonly groupAssociationAssignedCode?: string | undefined;
	readonly groupControllingAgencyCode?: string | undefined;
	readonly groupControlNumberLowerBound?: number | undefined;
	readonly groupControlNumberPrefix?: string | undefined;
	readonly groupControlNumberSuffix?: string | undefined;
	readonly groupControlNumberUpperBound?: number | undefined;
	readonly groupMessageRelease?: string | undefined;
	readonly groupMessageVersion?: string | undefined;
	readonly interchangeControlNumberLowerBound?: number | undefined;
	readonly interchangeControlNumberPrefix?: string | undefined;
	readonly interchangeControlNumberSuffix?: string | undefined;
	readonly interchangeControlNumberUpperBound?: number | undefined;
	readonly isTestInterchange?: boolean | undefined;
	readonly overwriteExistingTransactionSetControlNumber?: boolean | undefined;
	readonly processingPriorityCode?: string | undefined;
	readonly receiverInternalIdentification?: string | undefined;
	readonly receiverInternalSubIdentification?: string | undefined;
	readonly receiverReverseRoutingAddress?: string | undefined;
	readonly recipientReferencePasswordQualifier?: string | undefined;
	readonly recipientReferencePasswordValue?: string | undefined;
	readonly rolloverGroupControlNumber?: boolean | undefined;
	readonly rolloverInterchangeControlNumber?: boolean | undefined;
	readonly rolloverTransactionSetControlNumber?: boolean | undefined;
	readonly senderInternalIdentification?: string | undefined;
	readonly senderInternalSubIdentification?: string | undefined;
	readonly senderReverseRoutingAddress?: string | undefined;
	readonly transactionSetControlNumberLowerBound?: number | undefined;
	readonly transactionSetControlNumberPrefix?: string | undefined;
	readonly transactionSetControlNumberSuffix?: string | undefined;
	readonly transactionSetControlNumberUpperBound?: number | undefined;
}
export interface EdifactFramingSettings {
	readonly characterEncoding?: string | undefined;
	readonly characterSet?:
		| (
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
		  )
		| undefined;
	readonly componentSeparator?: number | undefined;
	readonly dataElementSeparator?: number | undefined;
	readonly decimalPointIndicator?: ("Comma" | "Decimal") | undefined;
	readonly protocolVersion?: number | undefined;
	readonly releaseIndicator?: number | undefined;
	readonly repetitionSeparator?: number | undefined;
	readonly segmentTerminator?: number | undefined;
	readonly segmentTerminatorSuffix?: ("CR" | "CRLF" | "LF" | "None") | undefined;
	readonly serviceCodeListDirectoryVersion?: string | undefined;
}
export interface EdifactMessageFilter {
	readonly messageFilterType?: ("Exclude" | "Include") | undefined;
}
export interface EdifactMessageIdentifier {
	readonly messageId?: string | undefined;
}
export interface EdifactOneWayAgreement {
	readonly protocolSettings?: EdifactProtocolSettings | undefined;
	readonly receiverBusinessIdentity?: BusinessIdentity | undefined;
	readonly senderBusinessIdentity?: BusinessIdentity | undefined;
}
export interface EdifactProcessingSettings {
	readonly createEmptyXmlTagsForTrailingSeparators?: boolean | undefined;
	readonly maskSecurityInfo?: boolean | undefined;
	readonly preserveInterchange?: boolean | undefined;
	readonly suspendInterchangeOnError?: boolean | undefined;
	readonly useDotAsDecimalSeparator?: boolean | undefined;
}
export interface EdifactProtocolSettings {
	readonly acknowledgementSettings?: EdifactAcknowledgementSettings | undefined;
	readonly edifactDelimiterOverrides?: EdifactDelimiterOverride[] | undefined;
	readonly envelopeOverrides?: EdifactEnvelopeOverride[] | undefined;
	readonly envelopeSettings?: EdifactEnvelopeSettings | undefined;
	readonly framingSettings?: EdifactFramingSettings | undefined;
	readonly messageFilter?: EdifactMessageFilter | undefined;
	readonly messageFilterList?: EdifactMessageIdentifier[] | undefined;
	readonly processingSettings?: EdifactProcessingSettings | undefined;
	readonly schemaReferences?: EdifactSchemaReference[] | undefined;
	readonly validationOverrides?: EdifactValidationOverride[] | undefined;
	readonly validationSettings?: EdifactValidationSettings | undefined;
}
export interface EdifactSchemaReference {
	readonly associationAssignedCode?: string | undefined;
	readonly messageId?: string | undefined;
	readonly messageRelease?: string | undefined;
	readonly messageVersion?: string | undefined;
	readonly schemaName?: string | undefined;
	readonly senderApplicationId?: string | undefined;
	readonly senderApplicationQualifier?: string | undefined;
}
export interface EdifactValidationOverride {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly enforceCharacterSet?: boolean | undefined;
	readonly messageId?: string | undefined;
	readonly trailingSeparatorPolicy?: ("Mandatory" | "NotAllowed" | "NotSpecified") | undefined;
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly validateEDITypes?: boolean | undefined;
	readonly validateXSDTypes?: boolean | undefined;
}
export interface EdifactValidationSettings {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly checkDuplicateGroupControlNumber?: boolean | undefined;
	readonly checkDuplicateInterchangeControlNumber?: boolean | undefined;
	readonly checkDuplicateTransactionSetControlNumber?: boolean | undefined;
	readonly interchangeControlNumberValidityDays?: number | undefined;
	readonly trailingSeparatorPolicy?: ("Mandatory" | "NotAllowed" | "NotSpecified") | undefined;
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly validateCharacterSet?: boolean | undefined;
	readonly validateEDITypes?: boolean | undefined;
	readonly validateXSDTypes?: boolean | undefined;
}
export interface IntegrationAccountAgreementProperties {
	readonly agreementType?: ("AS2" | "Edifact" | "NotSpecified") | undefined;
	readonly changedTime?: string | undefined;
	readonly content?: AgreementContent | undefined;
	readonly createdTime?: string | undefined;
	readonly guestIdentity?: BusinessIdentity | undefined;
	readonly guestPartner?: string | undefined;
	readonly hostIdentity?: BusinessIdentity | undefined;
	readonly hostPartner?: string | undefined;
	readonly metadata?: any | undefined;
}
export interface IntegrationAccountCertificateProperties {
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly key?: KeyVaultKeyReference | undefined;
	readonly metadata?: any | undefined;
	readonly publicCertificate?: string | undefined;
}
export interface IntegrationAccountContentHash {
	readonly algorithm?: string | undefined;
	readonly value?: string | undefined;
}
export interface IntegrationAccountContentLink {
	readonly contentHash?: IntegrationAccountContentHash | undefined;
	readonly contentSize?: number | undefined;
	readonly contentVersion?: string | undefined;
	readonly metadata?: any | undefined;
	readonly uri?: string | undefined;
}
export interface IntegrationAccountMapProperties {
	readonly changedTime?: string | undefined;
	readonly content?: any | undefined;
	readonly contentLink?: IntegrationAccountContentLink | undefined;
	readonly contentType?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly mapType?: "NotSpecified" | undefined;
	readonly metadata?: any | undefined;
}
export interface IntegrationAccountPartnerProperties {
	readonly changedTime?: string | undefined;
	readonly content?: PartnerContent | undefined;
	readonly createdTime?: string | undefined;
	readonly metadata?: any | undefined;
	readonly partnerType?: "B2B" | undefined;
}
export interface IntegrationAccountResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface IntegrationAccountSchemaProperties {
	readonly changedTime?: string | undefined;
	readonly content?: any | undefined;
	readonly contentLink?: IntegrationAccountContentLink | undefined;
	readonly contentType?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly metadata?: any | undefined;
	readonly schemaType?: "NotSpecified" | undefined;
	readonly targetNamespace?: string | undefined;
}
export interface IntegrationAccountSku {
	readonly name?: ("Basic" | "Free" | "NotSpecified" | "Premium" | "Shared") | undefined;
}
export interface KeyVaultKeyReference {
	readonly keyName?: string | undefined;
	readonly keyVault?: KeyVaultKeyReferenceKeyVault | undefined;
	readonly keyVersion?: string | undefined;
}
export interface KeyVaultKeyReferenceKeyVault {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ListCallbackUrlParameters {
	readonly NotAfter?: string | undefined;
}
export interface PartnerContent {
	readonly b2b?: B2BPartnerContent | undefined;
}
export interface X12AcknowledgementSettings {
	readonly acknowledgementControlNumberLowerBound?: number | undefined;
	readonly acknowledgementControlNumberPrefix?: string | undefined;
	readonly acknowledgementControlNumberSuffix?: string | undefined;
	readonly acknowledgementControlNumberUpperBound?: number | undefined;
	readonly batchFunctionalAcknowledgements?: boolean | undefined;
	readonly batchImplementationAcknowledgements?: boolean | undefined;
	readonly batchTechnicalAcknowledgements?: boolean | undefined;
	readonly functionalAcknowledgementVersion?: string | undefined;
	readonly implementationAcknowledgementVersion?: string | undefined;
	readonly needFunctionalAcknowledgement?: boolean | undefined;
	readonly needImplementationAcknowledgement?: boolean | undefined;
	readonly needLoopForValidMessages?: boolean | undefined;
	readonly needTechnicalAcknowledgement?: boolean | undefined;
	readonly rolloverAcknowledgementControlNumber?: boolean | undefined;
	readonly sendSynchronousAcknowledgement?: boolean | undefined;
}
export interface X12AgreementContent {
	readonly receiveAgreement?: X12OneWayAgreement | undefined;
	readonly sendAgreement?: X12OneWayAgreement | undefined;
}
export interface X12DelimiterOverrides {
	readonly componentSeparator?: number | undefined;
	readonly dataElementSeparator?: number | undefined;
	readonly messageId?: string | undefined;
	readonly protocolVersion?: string | undefined;
	readonly replaceCharacter?: number | undefined;
	readonly replaceSeparatorsInPayload?: boolean | undefined;
	readonly segmentTerminator?: number | undefined;
	readonly segmentTerminatorSuffix?: ("CR" | "CRLF" | "LF" | "None") | undefined;
	readonly targetNamespace?: string | undefined;
}
export interface X12EnvelopeOverride {
	readonly dateFormat?: ("CCYYMMDD" | "NotSpecified") | undefined;
	readonly functionalIdentifierCode?: string | undefined;
	readonly headerVersion?: string | undefined;
	readonly messageId?: string | undefined;
	readonly protocolVersion?: string | undefined;
	readonly receiverApplicationId?: string | undefined;
	readonly responsibleAgencyCode?: number | undefined;
	readonly senderApplicationId?: string | undefined;
	readonly targetNamespace?: string | undefined;
	readonly timeFormat?: ("HHMM" | "HHMMSS" | "HHMMSSd" | "HHMMSSdd") | undefined;
}
export interface X12EnvelopeSettings {
	readonly controlStandardsId?: number | undefined;
	readonly controlVersionNumber?: string | undefined;
	readonly enableDefaultGroupHeaders?: boolean | undefined;
	readonly functionalGroupId?: string | undefined;
	readonly groupControlNumberLowerBound?: number | undefined;
	readonly groupControlNumberUpperBound?: number | undefined;
	readonly groupHeaderAgencyCode?: string | undefined;
	readonly groupHeaderDateFormat?: ("CCYYMMDD" | "NotSpecified") | undefined;
	readonly groupHeaderTimeFormat?: ("HHMM" | "HHMMSS" | "HHMMSSd" | "HHMMSSdd") | undefined;
	readonly groupHeaderVersion?: string | undefined;
	readonly interchangeControlNumberLowerBound?: number | undefined;
	readonly interchangeControlNumberUpperBound?: number | undefined;
	readonly overwriteExistingTransactionSetControlNumber?: boolean | undefined;
	readonly receiverApplicationId?: string | undefined;
	readonly rolloverGroupControlNumber?: boolean | undefined;
	readonly rolloverInterchangeControlNumber?: boolean | undefined;
	readonly rolloverTransactionSetControlNumber?: boolean | undefined;
	readonly senderApplicationId?: string | undefined;
	readonly transactionSetControlNumberLowerBound?: number | undefined;
	readonly transactionSetControlNumberPrefix?: string | undefined;
	readonly transactionSetControlNumberSuffix?: string | undefined;
	readonly transactionSetControlNumberUpperBound?: number | undefined;
	readonly usageIndicator?: ("Information" | "NotSpecified" | "Production") | undefined;
	readonly useControlStandardsIdAsRepetitionCharacter?: boolean | undefined;
}
export interface X12FramingSettings {
	readonly characterSet?: ("Basic" | "Extended" | "NotSpecified") | undefined;
	readonly componentSeparator?: number | undefined;
	readonly dataElementSeparator?: number | undefined;
	readonly replaceCharacter?: number | undefined;
	readonly replaceSeparatorsInPayload?: boolean | undefined;
	readonly segmentTerminator?: number | undefined;
	readonly segmentTerminatorSuffix?: ("CR" | "CRLF" | "LF" | "None") | undefined;
}
export interface X12MessageFilter {
	readonly messageFilterType?: ("Exclude" | "Include") | undefined;
}
export interface X12MessageIdentifier {
	readonly messageId?: string | undefined;
}
export interface X12OneWayAgreement {
	readonly protocolSettings?: X12ProtocolSettings | undefined;
	readonly receiverBusinessIdentity?: BusinessIdentity | undefined;
	readonly senderBusinessIdentity?: BusinessIdentity | undefined;
}
export interface X12ProcessingSettings {
	readonly convertImpliedDecimal?: boolean | undefined;
	readonly createEmptyXmlTagsForTrailingSeparators?: boolean | undefined;
	readonly maskSecurityInfo?: boolean | undefined;
	readonly preserveInterchange?: boolean | undefined;
	readonly suspendInterchangeOnError?: boolean | undefined;
	readonly useDotAsDecimalSeparator?: boolean | undefined;
}
export interface X12ProtocolSettings {
	readonly acknowledgementSettings?: X12AcknowledgementSettings | undefined;
	readonly envelopeOverrides?: X12EnvelopeOverride[] | undefined;
	readonly envelopeSettings?: X12EnvelopeSettings | undefined;
	readonly framingSettings?: X12FramingSettings | undefined;
	readonly messageFilter?: X12MessageFilter | undefined;
	readonly messageFilterList?: X12MessageIdentifier[] | undefined;
	readonly processingSettings?: X12ProcessingSettings | undefined;
	readonly schemaReferences?: X12SchemaReference[] | undefined;
	readonly securitySettings?: X12SecuritySettings | undefined;
	readonly validationOverrides?: X12ValidationOverride[] | undefined;
	readonly validationSettings?: X12ValidationSettings | undefined;
	readonly x12DelimiterOverrides?: X12DelimiterOverrides[] | undefined;
}
export interface X12SchemaReference {
	readonly messageId?: string | undefined;
	readonly schemaName?: string | undefined;
	readonly schemaVersion?: string | undefined;
	readonly senderApplicationId?: string | undefined;
}
export interface X12SecuritySettings {
	readonly authorizationQualifier?: string | undefined;
	readonly authorizationValue?: string | undefined;
	readonly passwordValue?: string | undefined;
	readonly securityQualifier?: string | undefined;
}
export interface X12ValidationOverride {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly messageId?: string | undefined;
	readonly trailingSeparatorPolicy?: ("Mandatory" | "NotAllowed" | "NotSpecified") | undefined;
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly validateCharacterSet?: boolean | undefined;
	readonly validateEDITypes?: boolean | undefined;
	readonly validateXSDTypes?: boolean | undefined;
}
export interface X12ValidationSettings {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly checkDuplicateGroupControlNumber?: boolean | undefined;
	readonly checkDuplicateInterchangeControlNumber?: boolean | undefined;
	readonly checkDuplicateTransactionSetControlNumber?: boolean | undefined;
	readonly interchangeControlNumberValidityDays?: number | undefined;
	readonly trailingSeparatorPolicy?: ("Mandatory" | "NotAllowed" | "NotSpecified") | undefined;
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean | undefined;
	readonly validateCharacterSet?: boolean | undefined;
	readonly validateEDITypes?: boolean | undefined;
	readonly validateXSDTypes?: boolean | undefined;
}
export default {
	integrationAccounts: integrationAccounts,
	"integrationAccounts/agreements": integrationAccounts_agreements,
	"integrationAccounts/certificates": integrationAccounts_certificates,
	"integrationAccounts/maps": integrationAccounts_maps,
	"integrationAccounts/partners": integrationAccounts_partners,
	"integrationAccounts/schemas": integrationAccounts_schemas,
};
