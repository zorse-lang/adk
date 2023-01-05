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
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ZoneProperties;
	readonly tags?: ResourceTags;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RecordSetProperties;
}
export interface AaaaRecord {
	readonly ipv6Address?: string;
}
export interface ARecord {
	readonly ipv4Address?: string;
}
export interface CaaRecord {
	readonly flags?: number;
	readonly tag?: string;
	readonly value?: string;
}
export interface CnameRecord {
	readonly cname?: string;
}
export interface MxRecord {
	readonly exchange?: string;
	readonly preference?: number;
}
export interface NsRecord {
	readonly nsdname?: string;
}
export interface PtrRecord {
	readonly ptrdname?: string;
}
export interface RecordSetProperties {
	readonly AAAARecords?: AaaaRecord[];
	readonly ARecords?: ARecord[];
	readonly caaRecords?: CaaRecord[];
	readonly CNAMERecord?: CnameRecord;
	readonly fqdn?: string;
	readonly metadata?: RecordSetPropertiesMetadata;
	readonly MXRecords?: MxRecord[];
	readonly NSRecords?: NsRecord[];
	readonly provisioningState?: string;
	readonly PTRRecords?: PtrRecord[];
	readonly SOARecord?: SoaRecord;
	readonly SRVRecords?: SrvRecord[];
	readonly targetResource?: SubResource;
	readonly TTL?: number;
	readonly TXTRecords?: TxtRecord[];
}
export interface RecordSetPropertiesMetadata {
	readonly [key: string]: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SoaRecord {
	readonly email?: string;
	readonly expireTime?: number;
	readonly host?: string;
	readonly minimumTTL?: number;
	readonly refreshTime?: number;
	readonly retryTime?: number;
	readonly serialNumber?: number;
}
export interface SrvRecord {
	readonly port?: number;
	readonly priority?: number;
	readonly target?: string;
	readonly weight?: number;
}
export interface SubResource {
	readonly id?: string;
}
export interface TxtRecord {
	readonly value?: string[];
}
export interface ZoneProperties {
	readonly maxNumberOfRecordSets?: number;
	readonly maxNumberOfRecordsPerRecordSet?: number;
	readonly nameServers?: string[];
	readonly numberOfRecordSets?: number;
	readonly registrationVirtualNetworks?: SubResource[];
	readonly resolutionVirtualNetworks?: SubResource[];
	readonly zoneType?: "Private";
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
