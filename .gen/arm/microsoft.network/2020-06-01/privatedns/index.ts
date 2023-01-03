import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateDnsZones
	extends ArmResource<privateDnsZonesComponentInputs>
	implements privateDnsZonesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZonesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones";
}
export interface privateDnsZonesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones";
}
export interface privateDnsZonesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateZoneProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class privateDnsZones_A
	extends ArmResource<privateDnsZones_AComponentInputs>
	implements privateDnsZones_AComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_AComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/A", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/A";
}
export interface privateDnsZones_AComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/A";
}
export interface privateDnsZones_AComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_AAAA
	extends ArmResource<privateDnsZones_AAAAComponentInputs>
	implements privateDnsZones_AAAAComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_AAAAComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/AAAA", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/AAAA";
}
export interface privateDnsZones_AAAAComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/AAAA";
}
export interface privateDnsZones_AAAAComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_CNAME
	extends ArmResource<privateDnsZones_CNAMEComponentInputs>
	implements privateDnsZones_CNAMEComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_CNAMEComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/CNAME", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/CNAME";
}
export interface privateDnsZones_CNAMEComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/CNAME";
}
export interface privateDnsZones_CNAMEComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_MX
	extends ArmResource<privateDnsZones_MXComponentInputs>
	implements privateDnsZones_MXComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_MXComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/MX", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/MX";
}
export interface privateDnsZones_MXComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/MX";
}
export interface privateDnsZones_MXComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_PTR
	extends ArmResource<privateDnsZones_PTRComponentInputs>
	implements privateDnsZones_PTRComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_PTRComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/PTR", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/PTR";
}
export interface privateDnsZones_PTRComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/PTR";
}
export interface privateDnsZones_PTRComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_SOA
	extends ArmResource<privateDnsZones_SOAComponentInputs>
	implements privateDnsZones_SOAComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_SOAComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/SOA", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/SOA";
}
export interface privateDnsZones_SOAComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/SOA";
}
export interface privateDnsZones_SOAComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_SRV
	extends ArmResource<privateDnsZones_SRVComponentInputs>
	implements privateDnsZones_SRVComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_SRVComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/SRV", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/SRV";
}
export interface privateDnsZones_SRVComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/SRV";
}
export interface privateDnsZones_SRVComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_TXT
	extends ArmResource<privateDnsZones_TXTComponentInputs>
	implements privateDnsZones_TXTComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_TXTComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/TXT", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/TXT";
}
export interface privateDnsZones_TXTComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/TXT";
}
export interface privateDnsZones_TXTComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RecordSetProperties | undefined;
}
export class privateDnsZones_virtualNetworkLinks
	extends ArmResource<privateDnsZones_virtualNetworkLinksComponentInputs>
	implements privateDnsZones_virtualNetworkLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: privateDnsZones_virtualNetworkLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateDnsZones/virtualNetworkLinks", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateDnsZones/virtualNetworkLinks";
}
export interface privateDnsZones_virtualNetworkLinksComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateDnsZones/virtualNetworkLinks";
}
export interface privateDnsZones_virtualNetworkLinksComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkLinkProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
export interface PrivateZoneProperties {
	readonly internalId?: string | undefined;
	readonly maxNumberOfRecordSets?: number | undefined;
	readonly maxNumberOfVirtualNetworkLinks?: number | undefined;
	readonly maxNumberOfVirtualNetworkLinksWithRegistration?: number | undefined;
	readonly numberOfRecordSets?: number | undefined;
	readonly numberOfVirtualNetworkLinks?: number | undefined;
	readonly numberOfVirtualNetworkLinksWithRegistration?: number | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PtrRecord {
	readonly ptrdname?: string | undefined;
}
export interface RecordSetProperties {
	readonly aaaaRecords?: AaaaRecord[] | undefined;
	readonly aRecords?: ARecord[] | undefined;
	readonly cnameRecord?: CnameRecord | undefined;
	readonly fqdn?: string | undefined;
	readonly isAutoRegistered?: boolean | undefined;
	readonly metadata?: RecordSetPropertiesMetadata | undefined;
	readonly mxRecords?: MxRecord[] | undefined;
	readonly ptrRecords?: PtrRecord[] | undefined;
	readonly soaRecord?: SoaRecord | undefined;
	readonly srvRecords?: SrvRecord[] | undefined;
	readonly ttl?: number | undefined;
	readonly txtRecords?: TxtRecord[] | undefined;
}
export interface RecordSetPropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SoaRecord {
	readonly email?: string | undefined;
	readonly expireTime?: number | undefined;
	readonly host?: string | undefined;
	readonly minimumTtl?: number | undefined;
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
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TxtRecord {
	readonly value?: string[] | undefined;
}
export interface VirtualNetworkLinkProperties {
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly registrationEnabled?: boolean | undefined;
	readonly virtualNetwork?: SubResource | undefined;
	readonly virtualNetworkLinkState?: ("Completed" | "InProgress") | undefined;
}
export default {
	privateDnsZones: privateDnsZones,
	"privateDnsZones/A": privateDnsZones_A,
	"privateDnsZones/AAAA": privateDnsZones_AAAA,
	"privateDnsZones/CNAME": privateDnsZones_CNAME,
	"privateDnsZones/MX": privateDnsZones_MX,
	"privateDnsZones/PTR": privateDnsZones_PTR,
	"privateDnsZones/SOA": privateDnsZones_SOA,
	"privateDnsZones/SRV": privateDnsZones_SRV,
	"privateDnsZones/TXT": privateDnsZones_TXT,
	"privateDnsZones/virtualNetworkLinks": privateDnsZones_virtualNetworkLinks,
};
