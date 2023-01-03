import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificateOrders
	extends ArmResource<certificateOrdersComponentInputs>
	implements certificateOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: certificateOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.CertificateRegistration/certificateOrders", "2018-02-01", options);
	}
	public readonly apiVersion: "2018-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders";
}
export interface certificateOrdersComponentOutputs {
	readonly apiVersion: "2018-02-01";
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
			"2018-02-01",
			options,
		);
	}
	public readonly apiVersion: "2018-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.CertificateRegistration/certificateOrders/certificates";
}
export interface certificateOrders_certificatesComponentOutputs {
	readonly apiVersion: "2018-02-01";
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
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	certificateOrders: certificateOrders,
	"certificateOrders/certificates": certificateOrders_certificates,
};
