import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsAuthorizedCertificates
	extends GdmResource<AppsAuthorizedCertificatesComponentInputs>
	implements AppsAuthorizedCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: AppsAuthorizedCertificatesComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsAuthorizedCertificates", options);
	}
}
export interface AppsAuthorizedCertificatesComponentOutputs {}
export interface AppsAuthorizedCertificatesComponentInputs {
	readonly appsId: string;
	readonly certificateRawData?: CertificateRawData;
	readonly displayName?: string;
	readonly domainMappingsCount?: number;
	readonly domainNames?: string[];
	readonly expireTime?: string;
	readonly id?: string;
	readonly managedCertificate?: ManagedCertificate;
	readonly name: string;
	readonly visibleDomainMappings?: string[];
}
export interface AuthorizedCertificate {
	readonly certificateRawData?: CertificateRawData;
	readonly displayName?: string;
	readonly domainMappingsCount?: number;
	readonly domainNames?: string[];
	readonly expireTime?: string;
	readonly id?: string;
	readonly managedCertificate?: ManagedCertificate;
	readonly name?: string;
	readonly visibleDomainMappings?: string[];
}
export interface CertificateRawData {
	readonly privateKey?: string;
	readonly publicCertificate?: string;
}
export interface ManagedCertificate {
	readonly lastRenewalTime?: string;
	readonly status?: string;
}
export default {
	AppsAuthorizedCertificates: AppsAuthorizedCertificates,
};
