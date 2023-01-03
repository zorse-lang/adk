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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateOrderProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateOrderCertificateProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface CertificateDetails {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: CertificateDetailsProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface CertificateDetailsProperties {
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
export interface CertificateOrderCertificate {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: CertificateOrderCertificateProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface CertificateOrderCertificateProperties {
	readonly keyVaultId?: string | undefined;
	readonly keyVaultSecretName?: string | undefined;
	readonly provisioningState?:
		| (
				| "AzureServiceUnauthorizedToAccessKeyVault"
				| "CertificateOrderFailed"
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
export interface CertificateOrderProperties {
	readonly autoRenew?: boolean | undefined;
	readonly certificates?: CertificateOrderPropertiesCertificates | undefined;
	readonly csr?: string | undefined;
	readonly distinguishedName?: string | undefined;
	readonly domainVerificationToken?: string | undefined;
	readonly expirationTime?: string | undefined;
	readonly intermediate?: CertificateDetails | undefined;
	readonly keySize?: number | undefined;
	readonly lastCertificateIssuanceTime?: string | undefined;
	readonly productType?: "StandardDomainValidatedSsl" | undefined;
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
export interface CertificateOrderPropertiesCertificates {
	readonly "[ key: string ]"?: CertificateOrderCertificate | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	certificateOrders: certificateOrders,
	"certificateOrders/certificates": certificateOrders_certificates,
};
