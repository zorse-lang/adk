import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslCert extends GdmResource<SslCertComponentInputs> implements SslCertComponentOutputs {
	constructor(entity: ADKEntity, options: SslCertComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.sslCert", options);
	}
}
export interface SslCertComponentOutputs {}
export interface SslCertComponentInputs {
	readonly cert?: string | undefined;
	readonly certSerialNumber?: string | undefined;
	readonly commonName?: string | undefined;
	readonly createTime?: string | undefined;
	readonly expirationTime?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly sha1Fingerprint?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export default {
	SslCert: SslCert,
};
