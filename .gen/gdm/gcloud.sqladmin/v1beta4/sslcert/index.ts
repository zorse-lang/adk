import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslCert extends GdmResource<SslCertComponentInputs> implements SslCertComponentOutputs {
	constructor(entity: ADKEntity, options: SslCertComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.sslCert", options);
	}
}
export interface SslCertComponentOutputs {}
export interface SslCertComponentInputs {
	readonly cert?: string;
	readonly certSerialNumber?: string;
	readonly commonName?: string;
	readonly createTime?: string;
	readonly expirationTime?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly sha1Fingerprint?: string;
	readonly name: string;
}
export default {
	SslCert: SslCert,
};
