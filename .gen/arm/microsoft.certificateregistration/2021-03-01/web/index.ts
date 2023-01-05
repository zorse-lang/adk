import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificateOrders
	extends ArmResource<certificateOrdersComponentInputs>
	implements certificateOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.CertificateRegistration/certificateOrders", "2021-03-01", options);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceCertificateOrderProperties;
	readonly tags?: ResourceTags;
}
export class certificateOrders_certificates
	extends ArmResource<certificateOrders_certificatesComponentInputs>
	implements certificateOrders_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrders_certificatesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.CertificateRegistration/certificateOrders/certificates",
			"2021-03-01",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceCertificate;
	readonly tags?: ResourceTags;
}
export class certificateOrders_detectors
	extends ArmResource<certificateOrders_detectorsComponentInputs>
	implements certificateOrders_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrders_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.CertificateRegistration/certificateOrders/detectors", "2021-03-01", options);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders/detectors";
}
export interface certificateOrders_detectorsComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders/detectors";
}
export interface certificateOrders_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export interface AppServiceCertificate {
	readonly keyVaultId?: string;
	readonly keyVaultSecretName?: string;
	readonly provisioningState?:
		| "AzureServiceUnauthorizedToAccessKeyVault"
		| "CertificateOrderFailed"
		| "ExternalPrivateKey"
		| "Initialized"
		| "KeyVaultDoesNotExist"
		| "KeyVaultSecretDoesNotExist"
		| "OperationNotPermittedOnKeyVault"
		| "Succeeded"
		| "Unknown"
		| "UnknownError";
}
export interface AppServiceCertificateOrderProperties {
	readonly appServiceCertificateNotRenewableReasons?:
		| "ExpirationNotInRenewalTimeRange"
		| "RegistrationStatusNotSupportedForRenewal"
		| "SubscriptionNotActive"[];
	readonly autoRenew?: boolean;
	readonly certificates?: AppServiceCertificateOrderPropertiesCertificates;
	readonly contact?: CertificateOrderContact;
	readonly csr?: string;
	readonly distinguishedName?: string;
	readonly domainVerificationToken?: string;
	readonly expirationTime?: string;
	readonly intermediate?: CertificateDetails;
	readonly isPrivateKeyExternal?: boolean;
	readonly keySize?: number;
	readonly lastCertificateIssuanceTime?: string;
	readonly nextAutoRenewalTimeStamp?: string;
	readonly productType: "StandardDomainValidatedSsl";
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly root?: CertificateDetails;
	readonly serialNumber?: string;
	readonly signedCertificate?: CertificateDetails;
	readonly status?:
		| "Canceled"
		| "Denied"
		| "Expired"
		| "Issued"
		| "NotSubmitted"
		| "PendingRekey"
		| "Pendingissuance"
		| "Pendingrevocation"
		| "Revoked";
	readonly validityInYears?: number;
}
export interface AppServiceCertificateOrderPropertiesCertificates {
	readonly [key: string]: AppServiceCertificate;
}
export interface CertificateDetails {
	readonly issuer?: string;
	readonly notAfter?: string;
	readonly notBefore?: string;
	readonly rawData?: string;
	readonly serialNumber?: string;
	readonly signatureAlgorithm?: string;
	readonly subject?: string;
	readonly thumbprint?: string;
	readonly version?: number;
}
export interface CertificateOrderContact {
	readonly email?: string;
	readonly nameFirst?: string;
	readonly nameLast?: string;
	readonly phone?: string;
}
export interface DataProviderMetadata {
	readonly propertyBag?: KeyValuePairStringObject[];
	readonly providerName?: string;
}
export interface DataTableResponseColumn {
	readonly columnName?: string;
	readonly columnType?: string;
	readonly dataType?: string;
}
export interface DataTableResponseObject {
	readonly columns?: DataTableResponseColumn[];
	readonly rows?: string[][];
	readonly tableName?: string;
}
export interface DetectorInfo {
	readonly analysisType?: string[];
	readonly author?: string;
	readonly category?: string;
	readonly description?: string;
	readonly id?: string;
	readonly name?: string;
	readonly score?: number;
	readonly supportTopicList?: SupportTopic[];
	readonly type?: "Analysis" | "CategoryOverview";
}
export interface DetectorResponseProperties {
	readonly dataProvidersMetadata?: DataProviderMetadata[];
	readonly dataset?: DiagnosticData[];
	readonly metadata?: DetectorInfo;
	readonly status?: Status;
	readonly suggestedUtterances?: QueryUtterancesResults;
}
export interface DiagnosticData {
	readonly renderingProperties?: Rendering;
	readonly table?: DataTableResponseObject;
}
export interface KeyValuePairStringObject {
	readonly key?: string;
	readonly value?: any;
}
export interface QueryUtterancesResult {
	readonly sampleUtterance?: SampleUtterance;
	readonly score?: number;
}
export interface QueryUtterancesResults {
	readonly query?: string;
	readonly results?: QueryUtterancesResult[];
}
export interface Rendering {
	readonly description?: string;
	readonly title?: string;
	readonly type?:
		| "AppInsight"
		| "AppInsightEnablement"
		| "Card"
		| "ChangeAnalysisOnboarding"
		| "ChangeSets"
		| "ChangesView"
		| "DataSummary"
		| "DependencyGraph"
		| "Detector"
		| "DownTime"
		| "DropDown"
		| "DynamicInsight"
		| "Email"
		| "Form"
		| "Guage"
		| "Insights"
		| "Markdown"
		| "NoGraph"
		| "PieChart"
		| "SearchComponent"
		| "Solution"
		| "SummaryCard"
		| "Table"
		| "TimeSeries";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SampleUtterance {
	readonly links?: string[];
	readonly qid?: string;
	readonly text?: string;
}
export interface Status {
	readonly message?: string;
	readonly statusId?: "Critical" | "Info" | "None" | "Success";
}
export interface SupportTopic {
	readonly id?: string;
	readonly pesId?: string;
}
export default {
	certificateOrders: certificateOrders,
	"certificateOrders/certificates": certificateOrders_certificates,
	"certificateOrders/detectors": certificateOrders_detectors,
};
