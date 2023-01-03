import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class DnsKeys extends GdmResource<DnsKeysComponentInputs> implements DnsKeysComponentOutputs {
	constructor(entity: ADKEntity, options: DnsKeysComponentInputs) {
		super(entity, options.name, "dns.v1alpha2.DnsKeys", options);
	}
	public readonly creationTime?: string | undefined;
	public readonly digests?: DnsKeyDigest[] | undefined;
	public readonly id?: string | undefined;
	public readonly keyTag?: number | undefined;
	public readonly publicKey?: string | undefined;
}
export interface DnsKeysComponentOutputs {
	readonly creationTime?: string | undefined;
	readonly digests?: DnsKeyDigest[] | undefined;
	readonly id?: string | undefined;
	readonly keyTag?: number | undefined;
	readonly publicKey?: string | undefined;
}
export interface DnsKeysComponentInputs {
	readonly algorithm?: string | undefined;
	readonly description?: string | undefined;
	readonly isActive?: boolean | undefined;
	readonly keyLength?: number | undefined;
	readonly kind?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface DnsKey {
	readonly algorithm?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly digests?: DnsKeyDigest[] | undefined;
	readonly id?: string | undefined;
	readonly isActive?: boolean | undefined;
	readonly keyLength?: number | undefined;
	readonly keyTag?: number | undefined;
	readonly kind?: string | undefined;
	readonly publicKey?: string | undefined;
	readonly type?: string | undefined;
}
export interface DnsKeyDigest {
	readonly digest?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	DnsKeys: DnsKeys,
};
