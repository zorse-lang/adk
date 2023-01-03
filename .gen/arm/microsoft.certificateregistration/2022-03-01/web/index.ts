import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificateOrders
	extends ArmResource<certificateOrdersComponentInputs>
	implements certificateOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.CertificateRegistration/certificateOrders", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceCertificateOrderProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
			"2022-03-01",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceCertificate | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class certificateOrders_detectors
	extends ArmResource<certificateOrders_detectorsComponentInputs>
	implements certificateOrders_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrders_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.CertificateRegistration/certificateOrders/detectors", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders/detectors";
}
export interface certificateOrders_detectorsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders/detectors";
}
export interface certificateOrders_detectorsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorResponseProperties | undefined;
}
export interface AppServiceCertificate {
	readonly keyVaultId?: string | undefined;
	readonly keyVaultSecretName?: string | undefined;
	readonly provisioningState?:
		| (
				| "AzureServiceUnauthorizedToAccessKeyVault"
				| "CertificateOrderFailed"
				| "ExternalPrivateKey"
				| "Initialized"
				| "KeyVaultDoesNotExist"
				| "KeyVaultSecretDoesNotExist"
				| "OperationNotPermittedOnKeyVault"
				| "Succeeded"
				| "Unknown"
				| "UnknownError"
		  )
		| undefined;
}
export interface AppServiceCertificateOrderProperties {
	readonly appServiceCertificateNotRenewableReasons?:
		| ("ExpirationNotInRenewalTimeRange" | "RegistrationStatusNotSupportedForRenewal" | "SubscriptionNotActive"[])
		| undefined;
	readonly autoRenew?: boolean | undefined;
	readonly certificates?: AppServiceCertificateOrderPropertiesCertificates | undefined;
	readonly contact?: CertificateOrderContact | undefined;
	readonly csr?: string | undefined;
	readonly distinguishedName?: string | undefined;
	readonly domainVerificationToken?: string | undefined;
	readonly expirationTime?: string | undefined;
	readonly intermediate?: CertificateDetails | undefined;
	readonly isPrivateKeyExternal?: boolean | undefined;
	readonly keySize?: number | undefined;
	readonly lastCertificateIssuanceTime?: string | undefined;
	readonly nextAutoRenewalTimeStamp?: string | undefined;
	readonly productType: "StandardDomainValidatedSsl";
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly root?: CertificateDetails | undefined;
	readonly serialNumber?: string | undefined;
	readonly signedCertificate?: CertificateDetails | undefined;
	readonly status?:
		| (
				| "Canceled"
				| "Denied"
				| "Expired"
				| "Issued"
				| "NotSubmitted"
				| "PendingRekey"
				| "Pendingissuance"
				| "Pendingrevocation"
				| "Revoked"
		  )
		| undefined;
	readonly validityInYears?: number | undefined;
}
export interface AppServiceCertificateOrderPropertiesCertificates {
	readonly "[ key: string ]"?: AppServiceCertificate | undefined;
}
export interface CertificateDetails {
	readonly issuer?: string | undefined;
	readonly notAfter?: string | undefined;
	readonly notBefore?: string | undefined;
	readonly rawData?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly signatureAlgorithm?: string | undefined;
	readonly subject?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly version?: number | undefined;
}
export interface CertificateOrderContact {
	readonly email?: string | undefined;
	readonly nameFirst?: string | undefined;
	readonly nameLast?: string | undefined;
	readonly phone?: string | undefined;
}
export interface DataProviderMetadata {
	readonly propertyBag?: KeyValuePairStringObject[] | undefined;
	readonly providerName?: string | undefined;
}
export interface DataTableResponseColumn {
	readonly columnName?: string | undefined;
	readonly columnType?: string | undefined;
	readonly dataType?: string | undefined;
}
export interface DataTableResponseObject {
	readonly columns?: DataTableResponseColumn[] | undefined;
	readonly rows?: string[][] | undefined;
	readonly tableName?: string | undefined;
}
export interface DetectorInfo {
	readonly analysisType?: string[] | undefined;
	readonly author?: string | undefined;
	readonly category?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly score?: number | undefined;
	readonly supportTopicList?: SupportTopic[] | undefined;
	readonly type?: ("Analysis" | "CategoryOverview") | undefined;
}
export interface DetectorResponseProperties {
	readonly dataProvidersMetadata?: DataProviderMetadata[] | undefined;
	readonly dataset?: DiagnosticData[] | undefined;
	readonly metadata?: DetectorInfo | undefined;
	readonly status?: Status | undefined;
	readonly suggestedUtterances?: QueryUtterancesResults | undefined;
}
export interface DiagnosticData {
	readonly renderingProperties?: Rendering | undefined;
	readonly table?: DataTableResponseObject | undefined;
}
export interface KeyValuePairStringObject {
	readonly key?: string | undefined;
	readonly value?: any | undefined;
}
export interface QueryUtterancesResult {
	readonly sampleUtterance?: SampleUtterance | undefined;
	readonly score?: number | undefined;
}
export interface QueryUtterancesResults {
	readonly query?: string | undefined;
	readonly results?: QueryUtterancesResult[] | undefined;
}
export interface Rendering {
	readonly description?: string | undefined;
	readonly title?: string | undefined;
	readonly type?:
		| (
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
				| "TimeSeries"
		  )
		| undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SampleUtterance {
	readonly links?: string[] | undefined;
	readonly qid?: string | undefined;
	readonly text?: string | undefined;
}
export interface Status {
	readonly message?: string | undefined;
	readonly statusId?: ("Critical" | "Info" | "None" | "Success") | undefined;
}
export interface SupportTopic {
	readonly id?: string | undefined;
	readonly pesId?: string | undefined;
}
export default {
	certificateOrders: certificateOrders,
	"certificateOrders/certificates": certificateOrders_certificates,
	"certificateOrders/detectors": certificateOrders_detectors,
};
