import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificateOrders
	extends ArmResource<certificateOrdersComponentInputs>
	implements certificateOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.CertificateRegistration/certificateOrders", "2019-08-01", options);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentOutputs {
	readonly apiVersion: "2019-08-01";
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
			"2019-08-01",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentOutputs {
	readonly apiVersion: "2019-08-01";
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
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	certificateOrders: certificateOrders,
	"certificateOrders/certificates": certificateOrders_certificates,
};
