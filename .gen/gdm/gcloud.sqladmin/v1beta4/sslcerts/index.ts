import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslCerts extends GdmResource<SslCertsComponentInputs> implements SslCertsComponentOutputs {
	constructor(entity: ADKEntity, options: SslCertsComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.SslCerts", options);
	}
}
export interface SslCertsComponentOutputs {}
export interface SslCertsComponentInputs {
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
export interface SslCert {
	readonly cert?: string;
	readonly certSerialNumber?: string;
	readonly commonName?: string;
	readonly createTime?: string;
	readonly expirationTime?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly sha1Fingerprint?: string;
}
export interface SslCertsInsertRequest {
	readonly commonName?: string;
}
export default {
	SslCerts: SslCerts,
};
