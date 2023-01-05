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
	readonly location?: string;
	readonly name: string;
	readonly properties?: any;
	readonly sku?: IntegrationAccountSku;
	readonly tags?: IntegrationAccountResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: IntegrationAccountAgreementProperties;
	readonly tags?: IntegrationAccountResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: IntegrationAccountCertificateProperties;
	readonly tags?: IntegrationAccountResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: IntegrationAccountMapProperties;
	readonly tags?: IntegrationAccountResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: IntegrationAccountPartnerProperties;
	readonly tags?: IntegrationAccountResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: IntegrationAccountSchemaProperties;
	readonly tags?: IntegrationAccountResourceTags;
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
	readonly AS2?: AS2AgreementContent;
	readonly Edifact?: EdifactAgreementContent;
	readonly X12?: X12AgreementContent;
}
export interface AS2AcknowledgementConnectionSettings {
	readonly ignoreCertificateNameMismatch?: boolean;
	readonly keepHttpConnectionAlive?: boolean;
	readonly supportHttpStatusCodeContinue?: boolean;
	readonly unfoldHttpHeaders?: boolean;
}
export interface AS2AgreementContent {
	readonly receiveAgreement?: AS2OneWayAgreement;
	readonly sendAgreement?: AS2OneWayAgreement;
}
export interface AS2EnvelopeSettings {
	readonly AutogenerateFileName?: boolean;
	readonly fileNameTemplate?: string;
	readonly messageContentType?: string;
	readonly SuspendMessageOnFileNameGenerationError?: boolean;
	readonly transmitFileNameInMimeHeader?: boolean;
}
export interface AS2ErrorSettings {
	readonly ResendIfMdnNotReceived?: boolean;
	readonly SuspendDuplicateMessage?: boolean;
}
export interface AS2MdnSettings {
	readonly dispositionNotificationTo?: string;
	readonly mdnText?: string;
	readonly micHashingAlgorithm?: "None" | "NotSpecified" | "SHA2256" | "SHA2384";
	readonly needMdn?: boolean;
	readonly receiptDeliveryUrl?: string;
	readonly sendInboundMdnToMessageBox?: boolean;
	readonly sendMdnAsynchronously?: boolean;
	readonly signMdn?: boolean;
	readonly signOutboundMdnIfOptional?: boolean;
}
export interface AS2MessageConnectionSettings {
	readonly ignoreCertificateNameMismatch?: boolean;
	readonly keepHttpConnectionAlive?: boolean;
	readonly supportHttpStatusCodeContinue?: boolean;
	readonly unfoldHttpHeaders?: boolean;
}
export interface AS2OneWayAgreement {
	readonly protocolSettings?: AS2ProtocolSettings;
	readonly receiverBusinessIdentity?: BusinessIdentity;
	readonly senderBusinessIdentity?: BusinessIdentity;
}
export interface AS2ProtocolSettings {
	readonly acknowledgementConnectionSettings?: AS2AcknowledgementConnectionSettings;
	readonly envelopeSettings?: AS2EnvelopeSettings;
	readonly errorSettings?: AS2ErrorSettings;
	readonly mdnSettings?: AS2MdnSettings;
	readonly messageConnectionSettings?: AS2MessageConnectionSettings;
	readonly securitySettings?: AS2SecuritySettings;
	readonly validationSettings?: AS2ValidationSettings;
}
export interface AS2SecuritySettings {
	readonly enableNrrForInboundDecodedMessages?: boolean;
	readonly enableNrrForInboundEncodedMessages?: boolean;
	readonly enableNrrForInboundMdn?: boolean;
	readonly enableNrrForOutboundDecodedMessages?: boolean;
	readonly enableNrrForOutboundEncodedMessages?: boolean;
	readonly enableNrrForOutboundMdn?: boolean;
	readonly encryptionCertificateName?: string;
	readonly overrideGroupSigningCertificate?: boolean;
	readonly signingCertificateName?: string;
}
export interface AS2ValidationSettings {
	readonly checkCertificateRevocationListOnReceive?: boolean;
	readonly checkCertificateRevocationListOnSend?: boolean;
	readonly checkDuplicateMessage?: boolean;
	readonly compressMessage?: boolean;
	readonly encryptionAlgorithm?: "AES128" | "AES192" | "AES256" | "DES3" | "None" | "NotSpecified";
	readonly encryptMessage?: boolean;
	readonly interchangeDuplicatesValidityDays?: number;
	readonly overrideMessageProperties?: boolean;
	readonly signMessage?: boolean;
}
export interface B2BPartnerContent {
	readonly businessIdentities?: BusinessIdentity[];
}
export interface BusinessIdentity {
	readonly Qualifier?: string;
	readonly Value?: string;
}
export interface CallbackUrl {
	readonly value?: string;
}
export interface EdifactAcknowledgementSettings {
	readonly acknowledgementControlNumberLowerBound?: number;
	readonly acknowledgementControlNumberPrefix?: string;
	readonly acknowledgementControlNumberSuffix?: string;
	readonly acknowledgementControlNumberUpperBound?: number;
	readonly batchFunctionalAcknowledgements?: boolean;
	readonly batchTechnicalAcknowledgements?: boolean;
	readonly needFunctionalAcknowledgement?: boolean;
	readonly needLoopForValidMessages?: boolean;
	readonly needTechnicalAcknowledgement?: boolean;
	readonly rolloverAcknowledgementControlNumber?: boolean;
	readonly sendSynchronousAcknowledgement?: boolean;
}
export interface EdifactAgreementContent {
	readonly receiveAgreement?: EdifactOneWayAgreement;
	readonly sendAgreement?: EdifactOneWayAgreement;
}
export interface EdifactDelimiterOverride {
	readonly componentSeparator?: number;
	readonly dataElementSeparator?: number;
	readonly decimalPointIndicator?: "Comma" | "Decimal";
	readonly messageAssociationAssignedCode?: string;
	readonly messageId?: string;
	readonly messageRelease?: string;
	readonly messageVersion?: string;
	readonly releaseIndicator?: number;
	readonly repetitionSeparator?: number;
	readonly segmentTerminator?: number;
	readonly segmentTerminatorSuffix?: "CR" | "CRLF" | "LF" | "None";
	readonly targetNamespace?: string;
}
export interface EdifactEnvelopeOverride {
	readonly applicationPassword?: string;
	readonly associationAssignedCode?: string;
	readonly controllingAgencyCode?: string;
	readonly functionalGroupId?: string;
	readonly groupHeaderMessageRelease?: string;
	readonly groupHeaderMessageVersion?: string;
	readonly messageAssociationAssignedCode?: string;
	readonly messageId?: string;
	readonly messageRelease?: string;
	readonly messageVersion?: string;
	readonly receiverApplicationId?: string;
	readonly receiverApplicationQualifier?: string;
	readonly senderApplicationId?: string;
	readonly senderApplicationQualifier?: string;
	readonly targetNamespace?: string;
}
export interface EdifactEnvelopeSettings {
	readonly applicationReferenceId?: string;
	readonly applyDelimiterStringAdvice?: boolean;
	readonly communicationAgreementId?: string;
	readonly createGroupingSegments?: boolean;
	readonly enableDefaultGroupHeaders?: boolean;
	readonly functionalGroupId?: string;
	readonly groupApplicationPassword?: string;
	readonly groupApplicationReceiverId?: string;
	readonly groupApplicationReceiverQualifier?: string;
	readonly groupApplicationSenderId?: string;
	readonly groupApplicationSenderQualifier?: string;
	readonly groupAssociationAssignedCode?: string;
	readonly groupControllingAgencyCode?: string;
	readonly groupControlNumberLowerBound?: number;
	readonly groupControlNumberPrefix?: string;
	readonly groupControlNumberSuffix?: string;
	readonly groupControlNumberUpperBound?: number;
	readonly groupMessageRelease?: string;
	readonly groupMessageVersion?: string;
	readonly interchangeControlNumberLowerBound?: number;
	readonly interchangeControlNumberPrefix?: string;
	readonly interchangeControlNumberSuffix?: string;
	readonly interchangeControlNumberUpperBound?: number;
	readonly isTestInterchange?: boolean;
	readonly overwriteExistingTransactionSetControlNumber?: boolean;
	readonly processingPriorityCode?: string;
	readonly receiverInternalIdentification?: string;
	readonly receiverInternalSubIdentification?: string;
	readonly receiverReverseRoutingAddress?: string;
	readonly recipientReferencePasswordQualifier?: string;
	readonly recipientReferencePasswordValue?: string;
	readonly rolloverGroupControlNumber?: boolean;
	readonly rolloverInterchangeControlNumber?: boolean;
	readonly rolloverTransactionSetControlNumber?: boolean;
	readonly senderInternalIdentification?: string;
	readonly senderInternalSubIdentification?: string;
	readonly senderReverseRoutingAddress?: string;
	readonly transactionSetControlNumberLowerBound?: number;
	readonly transactionSetControlNumberPrefix?: string;
	readonly transactionSetControlNumberSuffix?: string;
	readonly transactionSetControlNumberUpperBound?: number;
}
export interface EdifactFramingSettings {
	readonly characterEncoding?: string;
	readonly characterSet?:
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
		| "UNOX";
	readonly componentSeparator?: number;
	readonly dataElementSeparator?: number;
	readonly decimalPointIndicator?: "Comma" | "Decimal";
	readonly protocolVersion?: number;
	readonly releaseIndicator?: number;
	readonly repetitionSeparator?: number;
	readonly segmentTerminator?: number;
	readonly segmentTerminatorSuffix?: "CR" | "CRLF" | "LF" | "None";
	readonly serviceCodeListDirectoryVersion?: string;
}
export interface EdifactMessageFilter {
	readonly messageFilterType?: "Exclude" | "Include";
}
export interface EdifactMessageIdentifier {
	readonly messageId?: string;
}
export interface EdifactOneWayAgreement {
	readonly protocolSettings?: EdifactProtocolSettings;
	readonly receiverBusinessIdentity?: BusinessIdentity;
	readonly senderBusinessIdentity?: BusinessIdentity;
}
export interface EdifactProcessingSettings {
	readonly createEmptyXmlTagsForTrailingSeparators?: boolean;
	readonly maskSecurityInfo?: boolean;
	readonly preserveInterchange?: boolean;
	readonly suspendInterchangeOnError?: boolean;
	readonly useDotAsDecimalSeparator?: boolean;
}
export interface EdifactProtocolSettings {
	readonly acknowledgementSettings?: EdifactAcknowledgementSettings;
	readonly edifactDelimiterOverrides?: EdifactDelimiterOverride[];
	readonly envelopeOverrides?: EdifactEnvelopeOverride[];
	readonly envelopeSettings?: EdifactEnvelopeSettings;
	readonly framingSettings?: EdifactFramingSettings;
	readonly messageFilter?: EdifactMessageFilter;
	readonly messageFilterList?: EdifactMessageIdentifier[];
	readonly processingSettings?: EdifactProcessingSettings;
	readonly schemaReferences?: EdifactSchemaReference[];
	readonly validationOverrides?: EdifactValidationOverride[];
	readonly validationSettings?: EdifactValidationSettings;
}
export interface EdifactSchemaReference {
	readonly associationAssignedCode?: string;
	readonly messageId?: string;
	readonly messageRelease?: string;
	readonly messageVersion?: string;
	readonly schemaName?: string;
	readonly senderApplicationId?: string;
	readonly senderApplicationQualifier?: string;
}
export interface EdifactValidationOverride {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly enforceCharacterSet?: boolean;
	readonly messageId?: string;
	readonly trailingSeparatorPolicy?: "Mandatory" | "NotAllowed" | "NotSpecified";
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly validateEDITypes?: boolean;
	readonly validateXSDTypes?: boolean;
}
export interface EdifactValidationSettings {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly checkDuplicateGroupControlNumber?: boolean;
	readonly checkDuplicateInterchangeControlNumber?: boolean;
	readonly checkDuplicateTransactionSetControlNumber?: boolean;
	readonly interchangeControlNumberValidityDays?: number;
	readonly trailingSeparatorPolicy?: "Mandatory" | "NotAllowed" | "NotSpecified";
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly validateCharacterSet?: boolean;
	readonly validateEDITypes?: boolean;
	readonly validateXSDTypes?: boolean;
}
export interface IntegrationAccountAgreementProperties {
	readonly agreementType?: "AS2" | "Edifact" | "NotSpecified";
	readonly changedTime?: string;
	readonly content?: AgreementContent;
	readonly createdTime?: string;
	readonly guestIdentity?: BusinessIdentity;
	readonly guestPartner?: string;
	readonly hostIdentity?: BusinessIdentity;
	readonly hostPartner?: string;
	readonly metadata?: any;
}
export interface IntegrationAccountCertificateProperties {
	readonly changedTime?: string;
	readonly createdTime?: string;
	readonly key?: KeyVaultKeyReference;
	readonly metadata?: any;
	readonly publicCertificate?: string;
}
export interface IntegrationAccountContentHash {
	readonly algorithm?: string;
	readonly value?: string;
}
export interface IntegrationAccountContentLink {
	readonly contentHash?: IntegrationAccountContentHash;
	readonly contentSize?: number;
	readonly contentVersion?: string;
	readonly metadata?: any;
	readonly uri?: string;
}
export interface IntegrationAccountMapProperties {
	readonly changedTime?: string;
	readonly content?: any;
	readonly contentLink?: IntegrationAccountContentLink;
	readonly contentType?: string;
	readonly createdTime?: string;
	readonly mapType?: "NotSpecified";
	readonly metadata?: any;
}
export interface IntegrationAccountPartnerProperties {
	readonly changedTime?: string;
	readonly content?: PartnerContent;
	readonly createdTime?: string;
	readonly metadata?: any;
	readonly partnerType?: "B2B";
}
export interface IntegrationAccountResourceTags {
	readonly [key: string]: string;
}
export interface IntegrationAccountSchemaProperties {
	readonly changedTime?: string;
	readonly content?: any;
	readonly contentLink?: IntegrationAccountContentLink;
	readonly contentType?: string;
	readonly createdTime?: string;
	readonly metadata?: any;
	readonly schemaType?: "NotSpecified";
	readonly targetNamespace?: string;
}
export interface IntegrationAccountSku {
	readonly name?: "Basic" | "Free" | "NotSpecified" | "Premium" | "Shared";
}
export interface KeyVaultKeyReference {
	readonly keyName?: string;
	readonly keyVault?: KeyVaultKeyReferenceKeyVault;
	readonly keyVersion?: string;
}
export interface KeyVaultKeyReferenceKeyVault {
	readonly id?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface ListCallbackUrlParameters {
	readonly NotAfter?: string;
}
export interface PartnerContent {
	readonly b2b?: B2BPartnerContent;
}
export interface X12AcknowledgementSettings {
	readonly acknowledgementControlNumberLowerBound?: number;
	readonly acknowledgementControlNumberPrefix?: string;
	readonly acknowledgementControlNumberSuffix?: string;
	readonly acknowledgementControlNumberUpperBound?: number;
	readonly batchFunctionalAcknowledgements?: boolean;
	readonly batchImplementationAcknowledgements?: boolean;
	readonly batchTechnicalAcknowledgements?: boolean;
	readonly functionalAcknowledgementVersion?: string;
	readonly implementationAcknowledgementVersion?: string;
	readonly needFunctionalAcknowledgement?: boolean;
	readonly needImplementationAcknowledgement?: boolean;
	readonly needLoopForValidMessages?: boolean;
	readonly needTechnicalAcknowledgement?: boolean;
	readonly rolloverAcknowledgementControlNumber?: boolean;
	readonly sendSynchronousAcknowledgement?: boolean;
}
export interface X12AgreementContent {
	readonly receiveAgreement?: X12OneWayAgreement;
	readonly sendAgreement?: X12OneWayAgreement;
}
export interface X12DelimiterOverrides {
	readonly componentSeparator?: number;
	readonly dataElementSeparator?: number;
	readonly messageId?: string;
	readonly protocolVersion?: string;
	readonly replaceCharacter?: number;
	readonly replaceSeparatorsInPayload?: boolean;
	readonly segmentTerminator?: number;
	readonly segmentTerminatorSuffix?: "CR" | "CRLF" | "LF" | "None";
	readonly targetNamespace?: string;
}
export interface X12EnvelopeOverride {
	readonly dateFormat?: "CCYYMMDD" | "NotSpecified";
	readonly functionalIdentifierCode?: string;
	readonly headerVersion?: string;
	readonly messageId?: string;
	readonly protocolVersion?: string;
	readonly receiverApplicationId?: string;
	readonly responsibleAgencyCode?: number;
	readonly senderApplicationId?: string;
	readonly targetNamespace?: string;
	readonly timeFormat?: "HHMM" | "HHMMSS" | "HHMMSSd" | "HHMMSSdd";
}
export interface X12EnvelopeSettings {
	readonly controlStandardsId?: number;
	readonly controlVersionNumber?: string;
	readonly enableDefaultGroupHeaders?: boolean;
	readonly functionalGroupId?: string;
	readonly groupControlNumberLowerBound?: number;
	readonly groupControlNumberUpperBound?: number;
	readonly groupHeaderAgencyCode?: string;
	readonly groupHeaderDateFormat?: "CCYYMMDD" | "NotSpecified";
	readonly groupHeaderTimeFormat?: "HHMM" | "HHMMSS" | "HHMMSSd" | "HHMMSSdd";
	readonly groupHeaderVersion?: string;
	readonly interchangeControlNumberLowerBound?: number;
	readonly interchangeControlNumberUpperBound?: number;
	readonly overwriteExistingTransactionSetControlNumber?: boolean;
	readonly receiverApplicationId?: string;
	readonly rolloverGroupControlNumber?: boolean;
	readonly rolloverInterchangeControlNumber?: boolean;
	readonly rolloverTransactionSetControlNumber?: boolean;
	readonly senderApplicationId?: string;
	readonly transactionSetControlNumberLowerBound?: number;
	readonly transactionSetControlNumberPrefix?: string;
	readonly transactionSetControlNumberSuffix?: string;
	readonly transactionSetControlNumberUpperBound?: number;
	readonly usageIndicator?: "Information" | "NotSpecified" | "Production";
	readonly useControlStandardsIdAsRepetitionCharacter?: boolean;
}
export interface X12FramingSettings {
	readonly characterSet?: "Basic" | "Extended" | "NotSpecified";
	readonly componentSeparator?: number;
	readonly dataElementSeparator?: number;
	readonly replaceCharacter?: number;
	readonly replaceSeparatorsInPayload?: boolean;
	readonly segmentTerminator?: number;
	readonly segmentTerminatorSuffix?: "CR" | "CRLF" | "LF" | "None";
}
export interface X12MessageFilter {
	readonly messageFilterType?: "Exclude" | "Include";
}
export interface X12MessageIdentifier {
	readonly messageId?: string;
}
export interface X12OneWayAgreement {
	readonly protocolSettings?: X12ProtocolSettings;
	readonly receiverBusinessIdentity?: BusinessIdentity;
	readonly senderBusinessIdentity?: BusinessIdentity;
}
export interface X12ProcessingSettings {
	readonly convertImpliedDecimal?: boolean;
	readonly createEmptyXmlTagsForTrailingSeparators?: boolean;
	readonly maskSecurityInfo?: boolean;
	readonly preserveInterchange?: boolean;
	readonly suspendInterchangeOnError?: boolean;
	readonly useDotAsDecimalSeparator?: boolean;
}
export interface X12ProtocolSettings {
	readonly acknowledgementSettings?: X12AcknowledgementSettings;
	readonly envelopeOverrides?: X12EnvelopeOverride[];
	readonly envelopeSettings?: X12EnvelopeSettings;
	readonly framingSettings?: X12FramingSettings;
	readonly messageFilter?: X12MessageFilter;
	readonly messageFilterList?: X12MessageIdentifier[];
	readonly processingSettings?: X12ProcessingSettings;
	readonly schemaReferences?: X12SchemaReference[];
	readonly securitySettings?: X12SecuritySettings;
	readonly validationOverrides?: X12ValidationOverride[];
	readonly validationSettings?: X12ValidationSettings;
	readonly x12DelimiterOverrides?: X12DelimiterOverrides[];
}
export interface X12SchemaReference {
	readonly messageId?: string;
	readonly schemaName?: string;
	readonly schemaVersion?: string;
	readonly senderApplicationId?: string;
}
export interface X12SecuritySettings {
	readonly authorizationQualifier?: string;
	readonly authorizationValue?: string;
	readonly passwordValue?: string;
	readonly securityQualifier?: string;
}
export interface X12ValidationOverride {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly messageId?: string;
	readonly trailingSeparatorPolicy?: "Mandatory" | "NotAllowed" | "NotSpecified";
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly validateCharacterSet?: boolean;
	readonly validateEDITypes?: boolean;
	readonly validateXSDTypes?: boolean;
}
export interface X12ValidationSettings {
	readonly allowLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly checkDuplicateGroupControlNumber?: boolean;
	readonly checkDuplicateInterchangeControlNumber?: boolean;
	readonly checkDuplicateTransactionSetControlNumber?: boolean;
	readonly interchangeControlNumberValidityDays?: number;
	readonly trailingSeparatorPolicy?: "Mandatory" | "NotAllowed" | "NotSpecified";
	readonly trimLeadingAndTrailingSpacesAndZeroes?: boolean;
	readonly validateCharacterSet?: boolean;
	readonly validateEDITypes?: boolean;
	readonly validateXSDTypes?: boolean;
}
export default {
	integrationAccounts: integrationAccounts,
	"integrationAccounts/agreements": integrationAccounts_agreements,
	"integrationAccounts/certificates": integrationAccounts_certificates,
	"integrationAccounts/maps": integrationAccounts_maps,
	"integrationAccounts/partners": integrationAccounts_partners,
	"integrationAccounts/schemas": integrationAccounts_schemas,
};
