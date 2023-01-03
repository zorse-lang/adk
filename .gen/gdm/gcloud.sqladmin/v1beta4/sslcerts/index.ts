import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslCerts extends GdmResource<SslCertsComponentInputs> implements SslCertsComponentOutputs {
	constructor(entity: ADKEntity, options: SslCertsComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.SslCerts", options);
	}
}
export interface SslCertsComponentOutputs {}
export interface SslCertsComponentInputs {
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
export interface SslCert {
	readonly cert?: string | undefined;
	readonly certSerialNumber?: string | undefined;
	readonly commonName?: string | undefined;
	readonly createTime?: string | undefined;
	readonly expirationTime?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly sha1Fingerprint?: string | undefined;
}
export interface SslCertsInsertRequest {
	readonly commonName?: string | undefined;
}
export default {
	SslCerts: SslCerts,
};
