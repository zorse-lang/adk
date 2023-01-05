import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificateOrders
	extends ArmResource<certificateOrdersComponentInputs>
	implements certificateOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.CertificateRegistration/certificateOrders", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateOrderProperties;
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
			"2015-08-01",
			options,
		);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateOrderCertificateProperties;
	readonly tags?: ResourceTags;
}
export interface CertificateDetails {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: CertificateDetailsProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface CertificateDetailsProperties {
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
export interface CertificateOrderCertificate {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: CertificateOrderCertificateProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface CertificateOrderCertificateProperties {
	readonly keyVaultId?: string;
	readonly keyVaultSecretName?: string;
	readonly provisioningState?:
		| "AzureServiceUnauthorizedToAccessKeyVault"
		| "CertificateOrderFailed"
		| "Initialized"
		| "KeyVaultDoesNotExist"
		| "KeyVaultSecretDoesNotExist"
		| "OperationNotPermittedOnKeyVault"
		| "Succeeded"
		| "Unknown"
		| "UnknownError";
}
export interface CertificateOrderProperties {
	readonly autoRenew?: boolean;
	readonly certificates?: CertificateOrderPropertiesCertificates;
	readonly csr?: string;
	readonly distinguishedName?: string;
	readonly domainVerificationToken?: string;
	readonly expirationTime?: string;
	readonly intermediate?: CertificateDetails;
	readonly keySize?: number;
	readonly lastCertificateIssuanceTime?: string;
	readonly productType?: "StandardDomainValidatedSsl";
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
export interface CertificateOrderPropertiesCertificates {
	readonly [key: string]: CertificateOrderCertificate;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	certificateOrders: certificateOrders,
	"certificateOrders/certificates": certificateOrders_certificates,
};
