import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslCertificate extends GdmResource<SslCertificateComponentInputs> implements SslCertificateComponentOutputs {
	constructor(entity: ADKEntity, options: SslCertificateComponentInputs) {
		super(entity, options.name, "compute.alpha.sslCertificate", options);
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
export interface SslCertificateComponentOutputs {
	readonly creationTimestamp?: string;
	readonly expireTime?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly subjectAlternativeNames?: string[];
}
export interface SslCertificateComponentInputs {
	readonly certificate?: string;
	readonly description?: string;
	readonly managed?: SslCertificateManagedSslCertificate;
	readonly name: string;
	readonly privateKey?: string;
	readonly selfManaged?: SslCertificateSelfManagedSslCertificate;
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
	SslCertificate: SslCertificate,
};
