import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionSslCertificates
	extends GdmResource<RegionSslCertificatesComponentInputs>
	implements RegionSslCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionSslCertificatesComponentInputs) {
		super(entity, options.name, "compute.v1.RegionSslCertificates", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly expireTime?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly subjectAlternativeNames?: string[] | undefined;
}
export interface RegionSslCertificatesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly subjectAlternativeNames?: string[] | undefined;
}
export interface RegionSslCertificatesComponentInputs {
	readonly certificate?: string | undefined;
	readonly description?: string | undefined;
	readonly managed?: SslCertificateManagedSslCertificate | undefined;
	readonly name: string;
	readonly privateKey?: string | undefined;
	readonly requestId?: string | undefined;
	readonly selfManaged?: SslCertificateSelfManagedSslCertificate | undefined;
	readonly type: string;
}
export interface SslCertificate {
	readonly certificate?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly managed?: SslCertificateManagedSslCertificate | undefined;
	readonly name?: string | undefined;
	readonly privateKey?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfManaged?: SslCertificateSelfManagedSslCertificate | undefined;
	readonly subjectAlternativeNames?: string[] | undefined;
	readonly type?: string | undefined;
}
export interface SslCertificateManagedSslCertificate {
	readonly domains?: string[] | undefined;
	readonly domainStatus?: { [P in string]: string } | undefined;
	readonly status?: string | undefined;
}
export interface SslCertificateSelfManagedSslCertificate {
	readonly certificate?: string | undefined;
	readonly privateKey?: string | undefined;
}
export default {
	RegionSslCertificates: RegionSslCertificates,
};
