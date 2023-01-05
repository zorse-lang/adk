import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class DnsKeys extends GdmResource<DnsKeysComponentInputs> implements DnsKeysComponentOutputs {
	constructor(entity: ADKEntity, options: DnsKeysComponentInputs) {
		super(entity, options.name, "dns.v1.DnsKeys", options);
	}
	public readonly creationTime?: string;
	public readonly digests?: DnsKeyDigest[];
	public readonly id?: string;
	public readonly keyTag?: number;
	public readonly publicKey?: string;
}
export interface DnsKeysComponentOutputs {
	readonly creationTime?: string;
	readonly digests?: DnsKeyDigest[];
	readonly id?: string;
	readonly keyTag?: number;
	readonly publicKey?: string;
}
export interface DnsKeysComponentInputs {
	readonly algorithm?: string;
	readonly description?: string;
	readonly isActive?: boolean;
	readonly keyLength?: number;
	readonly kind?: string;
	readonly name: string;
}
export interface DnsKey {
	readonly algorithm?: string;
	readonly creationTime?: string;
	readonly description?: string;
	readonly digests?: DnsKeyDigest[];
	readonly id?: string;
	readonly isActive?: boolean;
	readonly keyLength?: number;
	readonly keyTag?: number;
	readonly kind?: string;
	readonly publicKey?: string;
	readonly type?: string;
}
export interface DnsKeyDigest {
	readonly digest?: string;
	readonly type?: string;
}
export default {
	DnsKeys: DnsKeys,
};
