import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dnszones extends ArmResource<dnszonesComponentInputs> implements dnszonesComponentOutputs {
	constructor(entity: ADKEntity, options: dnszonesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones";
}
export interface dnszonesComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones";
}
export interface dnszonesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ZoneProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class dnszones_A extends ArmResource<dnszones_AComponentInputs> implements dnszones_AComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_AComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/A", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/A";
}
export interface dnszones_AComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/A";
}
export interface dnszones_AComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_AAAA extends ArmResource<dnszones_AAAAComponentInputs> implements dnszones_AAAAComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_AAAAComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/AAAA", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/AAAA";
}
export interface dnszones_AAAAComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/AAAA";
}
export interface dnszones_AAAAComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_CNAME extends ArmResource<dnszones_CNAMEComponentInputs> implements dnszones_CNAMEComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_CNAMEComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/CNAME", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/CNAME";
}
export interface dnszones_CNAMEComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/CNAME";
}
export interface dnszones_CNAMEComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_MX extends ArmResource<dnszones_MXComponentInputs> implements dnszones_MXComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_MXComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/MX", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/MX";
}
export interface dnszones_MXComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/MX";
}
export interface dnszones_MXComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_NS extends ArmResource<dnszones_NSComponentInputs> implements dnszones_NSComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_NSComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/NS", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/NS";
}
export interface dnszones_NSComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/NS";
}
export interface dnszones_NSComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_PTR extends ArmResource<dnszones_PTRComponentInputs> implements dnszones_PTRComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_PTRComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/PTR", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/PTR";
}
export interface dnszones_PTRComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/PTR";
}
export interface dnszones_PTRComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_SOA extends ArmResource<dnszones_SOAComponentInputs> implements dnszones_SOAComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_SOAComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/SOA", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/SOA";
}
export interface dnszones_SOAComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/SOA";
}
export interface dnszones_SOAComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_SRV extends ArmResource<dnszones_SRVComponentInputs> implements dnszones_SRVComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_SRVComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/SRV", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/SRV";
}
export interface dnszones_SRVComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/SRV";
}
export interface dnszones_SRVComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnszones_TXT extends ArmResource<dnszones_TXTComponentInputs> implements dnszones_TXTComponentOutputs {
	constructor(entity: ADKEntity, options: dnszones_TXTComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnszones/TXT", "2015-05-04-preview", options);
	}
	public readonly apiVersion: "2015-05-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnszones/TXT";
}
export interface dnszones_TXTComponentOutputs {
	readonly apiVersion: "2015-05-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnszones/TXT";
}
export interface dnszones_TXTComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export interface AaaaRecord {
	readonly ipv6Address?: string | undefined;
}
export interface ARecord {
	readonly ipv4Address?: string | undefined;
}
export interface CnameRecord {
	readonly cname?: string | undefined;
}
export interface MxRecord {
	readonly exchange?: string | undefined;
	readonly preference?: number | undefined;
}
export interface NsRecord {
	readonly nsdname?: string | undefined;
}
export interface PtrRecord {
	readonly ptrdname?: string | undefined;
}
export interface RecordSetProperties {
	readonly AAAARecords?: AaaaRecord[] | undefined;
	readonly ARecords?: ARecord[] | undefined;
	readonly CNAMERecord?: CnameRecord | undefined;
	readonly fqdn?: string | undefined;
	readonly MXRecords?: MxRecord[] | undefined;
	readonly NSRecords?: NsRecord[] | undefined;
	readonly PTRRecords?: PtrRecord[] | undefined;
	readonly SOARecord?: SoaRecord | undefined;
	readonly SRVRecords?: SrvRecord[] | undefined;
	readonly TTL?: number | undefined;
	readonly TXTRecords?: TxtRecord[] | undefined;
}
export interface SoaRecord {
	readonly email?: string | undefined;
	readonly expireTime?: number | undefined;
	readonly host?: string | undefined;
	readonly minimumTTL?: number | undefined;
	readonly refreshTime?: number | undefined;
	readonly retryTime?: number | undefined;
	readonly serialNumber?: number | undefined;
}
export interface SrvRecord {
	readonly port?: number | undefined;
	readonly priority?: number | undefined;
	readonly target?: string | undefined;
	readonly weight?: number | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TxtRecord {
	readonly value?: string[] | undefined;
}
export interface ZoneProperties {
	readonly maxNumberOfRecordSets?: number | undefined;
	readonly maxNumberOfRecordsPerRecordSet?: number | undefined;
	readonly numberOfRecordSets?: number | undefined;
}
export default {
	dnszones: dnszones,
	"dnszones/A": dnszones_A,
	"dnszones/AAAA": dnszones_AAAA,
	"dnszones/CNAME": dnszones_CNAME,
	"dnszones/MX": dnszones_MX,
	"dnszones/NS": dnszones_NS,
	"dnszones/PTR": dnszones_PTR,
	"dnszones/SOA": dnszones_SOA,
	"dnszones/SRV": dnszones_SRV,
	"dnszones/TXT": dnszones_TXT,
};
