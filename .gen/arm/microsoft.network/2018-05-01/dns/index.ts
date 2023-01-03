import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dnsZones extends ArmResource<dnsZonesComponentInputs> implements dnsZonesComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZonesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones";
}
export interface dnsZonesComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones";
}
export interface dnsZonesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ZoneProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class dnsZones_A extends ArmResource<dnsZones_AComponentInputs> implements dnsZones_AComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_AComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/A", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/A";
}
export interface dnsZones_AComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/A";
}
export interface dnsZones_AComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_AAAA extends ArmResource<dnsZones_AAAAComponentInputs> implements dnsZones_AAAAComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_AAAAComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/AAAA", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/AAAA";
}
export interface dnsZones_AAAAComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/AAAA";
}
export interface dnsZones_AAAAComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_CAA extends ArmResource<dnsZones_CAAComponentInputs> implements dnsZones_CAAComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_CAAComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/CAA", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/CAA";
}
export interface dnsZones_CAAComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/CAA";
}
export interface dnsZones_CAAComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_CNAME extends ArmResource<dnsZones_CNAMEComponentInputs> implements dnsZones_CNAMEComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_CNAMEComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/CNAME", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/CNAME";
}
export interface dnsZones_CNAMEComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/CNAME";
}
export interface dnsZones_CNAMEComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_MX extends ArmResource<dnsZones_MXComponentInputs> implements dnsZones_MXComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_MXComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/MX", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/MX";
}
export interface dnsZones_MXComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/MX";
}
export interface dnsZones_MXComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_NS extends ArmResource<dnsZones_NSComponentInputs> implements dnsZones_NSComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_NSComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/NS", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/NS";
}
export interface dnsZones_NSComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/NS";
}
export interface dnsZones_NSComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_PTR extends ArmResource<dnsZones_PTRComponentInputs> implements dnsZones_PTRComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_PTRComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/PTR", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/PTR";
}
export interface dnsZones_PTRComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/PTR";
}
export interface dnsZones_PTRComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_SOA extends ArmResource<dnsZones_SOAComponentInputs> implements dnsZones_SOAComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_SOAComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/SOA", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/SOA";
}
export interface dnsZones_SOAComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/SOA";
}
export interface dnsZones_SOAComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_SRV extends ArmResource<dnsZones_SRVComponentInputs> implements dnsZones_SRVComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_SRVComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/SRV", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/SRV";
}
export interface dnsZones_SRVComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/SRV";
}
export interface dnsZones_SRVComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class dnsZones_TXT extends ArmResource<dnsZones_TXTComponentInputs> implements dnsZones_TXTComponentOutputs {
	constructor(entity: ADKEntity, options: dnsZones_TXTComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsZones/TXT", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsZones/TXT";
}
export interface dnsZones_TXTComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsZones/TXT";
}
export interface dnsZones_TXTComponentInputs {
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
export interface CaaRecord {
	readonly flags?: number | undefined;
	readonly tag?: string | undefined;
	readonly value?: string | undefined;
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
	readonly caaRecords?: CaaRecord[] | undefined;
	readonly CNAMERecord?: CnameRecord | undefined;
	readonly fqdn?: string | undefined;
	readonly metadata?: RecordSetPropertiesMetadata | undefined;
	readonly MXRecords?: MxRecord[] | undefined;
	readonly NSRecords?: NsRecord[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly PTRRecords?: PtrRecord[] | undefined;
	readonly SOARecord?: SoaRecord | undefined;
	readonly SRVRecords?: SrvRecord[] | undefined;
	readonly targetResource?: SubResource | undefined;
	readonly TTL?: number | undefined;
	readonly TXTRecords?: TxtRecord[] | undefined;
}
export interface RecordSetPropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
export interface SubResource {
	readonly id?: string | undefined;
}
export interface TxtRecord {
	readonly value?: string[] | undefined;
}
export interface ZoneProperties {
	readonly maxNumberOfRecordSets?: number | undefined;
	readonly maxNumberOfRecordsPerRecordSet?: number | undefined;
	readonly nameServers?: string[] | undefined;
	readonly numberOfRecordSets?: number | undefined;
	readonly registrationVirtualNetworks?: SubResource[] | undefined;
	readonly resolutionVirtualNetworks?: SubResource[] | undefined;
	readonly zoneType?: "Private" | undefined;
}
export default {
	dnsZones: dnsZones,
	"dnsZones/A": dnsZones_A,
	"dnsZones/AAAA": dnsZones_AAAA,
	"dnsZones/CAA": dnsZones_CAA,
	"dnsZones/CNAME": dnsZones_CNAME,
	"dnsZones/MX": dnsZones_MX,
	"dnsZones/NS": dnsZones_NS,
	"dnsZones/PTR": dnsZones_PTR,
	"dnsZones/SOA": dnsZones_SOA,
	"dnsZones/SRV": dnsZones_SRV,
	"dnsZones/TXT": dnsZones_TXT,
};
