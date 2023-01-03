import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslCertificate extends GdmResource<SslCertificateComponentInputs> implements SslCertificateComponentOutputs {
	constructor(entity: ADKEntity, options: SslCertificateComponentInputs) {
		super(entity, options.name, "compute.beta.sslCertificate", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly expireTime?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly subjectAlternativeNames?: string[] | undefined;
}
export interface SslCertificateComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly subjectAlternativeNames?: string[] | undefined;
}
export interface SslCertificateComponentInputs {
	readonly certificate?: string | undefined;
	readonly description?: string | undefined;
	readonly managed?: SslCertificateManagedSslCertificate | undefined;
	readonly name: string;
	readonly privateKey?: string | undefined;
	readonly selfManaged?: SslCertificateSelfManagedSslCertificate | undefined;
	readonly type: string;
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
	SslCertificate: SslCertificate,
};
