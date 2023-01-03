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
	readonly certificateRawData?: CertificateRawData | undefined;
	readonly displayName?: string | undefined;
	readonly domainMappingsCount?: number | undefined;
	readonly domainNames?: string[] | undefined;
	readonly expireTime?: string | undefined;
	readonly id?: string | undefined;
	readonly managedCertificate?: ManagedCertificate | undefined;
	readonly name: string;
	readonly visibleDomainMappings?: string[] | undefined;
	readonly type: string;
}
export interface AuthorizedCertificate {
	readonly certificateRawData?: CertificateRawData | undefined;
	readonly displayName?: string | undefined;
	readonly domainMappingsCount?: number | undefined;
	readonly domainNames?: string[] | undefined;
	readonly expireTime?: string | undefined;
	readonly id?: string | undefined;
	readonly managedCertificate?: ManagedCertificate | undefined;
	readonly name?: string | undefined;
	readonly visibleDomainMappings?: string[] | undefined;
}
export interface CertificateRawData {
	readonly privateKey?: string | undefined;
	readonly publicCertificate?: string | undefined;
}
export interface ManagedCertificate {
	readonly lastRenewalTime?: string | undefined;
	readonly status?: string | undefined;
}
export default {
	AppsAuthorizedCertificates: AppsAuthorizedCertificates,
};
