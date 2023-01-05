import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslCertificates
	extends GdmResource<SslCertificatesComponentInputs>
	implements SslCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: SslCertificatesComponentInputs) {
		super(entity, options.name, "compute.alpha.SslCertificates", options);
	}
	public readonly creationTimestamp?: string;
	public readonly expireTime?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly subjectAlternativeNames?: string[];
}
export interface SslCertificatesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly expireTime?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly subjectAlternativeNames?: string[];
}
export interface SslCertificatesComponentInputs {
	readonly certificate?: string;
	readonly description?: string;
	readonly managed?: SslCertificateManagedSslCertificate;
	readonly name: string;
	readonly privateKey?: string;
	readonly requestId?: string;
	readonly selfManaged?: SslCertificateSelfManagedSslCertificate;
}
export interface SslCertificate {
	readonly certificate?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly expireTime?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly managed?: SslCertificateManagedSslCertificate;
	readonly name?: string;
	readonly privateKey?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly selfManaged?: SslCertificateSelfManagedSslCertificate;
	readonly subjectAlternativeNames?: string[];
	readonly type?: string;
}
export interface SslCertificateManagedSslCertificate {
	readonly domains?: string[];
	readonly domainStatus?: { [P in string]: string };
	readonly status?: string;
}
export interface SslCertificateSelfManagedSslCertificate {
	readonly certificate?: string;
	readonly privateKey?: string;
}
export default {
	SslCertificates: SslCertificates,
};
