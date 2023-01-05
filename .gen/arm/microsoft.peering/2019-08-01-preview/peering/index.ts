import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class peerAsns extends ArmResource<peerAsnsComponentInputs> implements peerAsnsComponentOutputs {
	constructor(entity: ADKEntity, options: peerAsnsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerAsns", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerAsns";
}
export interface peerAsnsComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerAsns";
}
export interface peerAsnsComponentInputs {
	readonly name: string;
	readonly properties?: PeerAsnProperties;
}
export class peerings extends ArmResource<peeringsComponentInputs> implements peeringsComponentOutputs {
	constructor(entity: ADKEntity, options: peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerings", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerings";
}
export interface peeringsComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerings";
}
export interface peeringsComponentInputs {
	readonly kind: "Direct" | "Exchange";
	readonly location: string;
	readonly name: string;
	readonly properties?: PeeringProperties;
	readonly sku: PeeringSku;
	readonly tags?: PeeringTags;
}
export class peeringServices
	extends ArmResource<peeringServicesComponentInputs>
	implements peeringServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: peeringServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peeringServices", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peeringServices";
}
export interface peeringServicesComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Peering/peeringServices";
}
export interface peeringServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PeeringServiceProperties;
	readonly tags?: PeeringServiceTags;
}
export class peeringServices_prefixes
	extends ArmResource<peeringServices_prefixesComponentInputs>
	implements peeringServices_prefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: peeringServices_prefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peeringServices/prefixes", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peeringServices/prefixes";
}
export interface peeringServices_prefixesComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Peering/peeringServices/prefixes";
}
export interface peeringServices_prefixesComponentInputs {
	readonly name: string;
	readonly properties?: PeeringServicePrefixProperties;
}
export interface BgpSession {
	readonly maxPrefixesAdvertisedV4?: number;
	readonly maxPrefixesAdvertisedV6?: number;
	readonly md5AuthenticationKey?: string;
	readonly microsoftSessionIPv4Address?: string;
	readonly microsoftSessionIPv6Address?: string;
	readonly peerSessionIPv4Address?: string;
	readonly peerSessionIPv6Address?: string;
	readonly sessionPrefixV4?: string;
	readonly sessionPrefixV6?: string;
	readonly sessionStateV4?:
		| "Active"
		| "Connect"
		| "Established"
		| "Idle"
		| "None"
		| "OpenConfirm"
		| "OpenReceived"
		| "OpenSent"
		| "PendingAdd"
		| "PendingRemove"
		| "PendingUpdate";
	readonly sessionStateV6?:
		| "Active"
		| "Connect"
		| "Established"
		| "Idle"
		| "None"
		| "OpenConfirm"
		| "OpenReceived"
		| "OpenSent"
		| "PendingAdd"
		| "PendingRemove"
		| "PendingUpdate";
}
export interface ContactInfo {
	readonly emails?: string[];
	readonly phone?: string[];
}
export interface DirectConnection {
	readonly bandwidthInMbps?: number;
	readonly bgpSession?: BgpSession;
	readonly connectionIdentifier?: string;
	readonly connectionState?:
		| "Active"
		| "Approved"
		| "None"
		| "PendingApproval"
		| "ProvisioningCompleted"
		| "ProvisioningFailed"
		| "ProvisioningStarted"
		| "Validating";
	readonly peeringDBFacilityId?: number;
	readonly provisionedBandwidthInMbps?: number;
	readonly sessionAddressProvider?: "Microsoft" | "Peer";
	readonly useForPeeringService?: boolean;
}
export interface ExchangeConnection {
	readonly bgpSession?: BgpSession;
	readonly connectionIdentifier?: string;
	readonly connectionState?:
		| "Active"
		| "Approved"
		| "None"
		| "PendingApproval"
		| "ProvisioningCompleted"
		| "ProvisioningFailed"
		| "ProvisioningStarted"
		| "Validating";
	readonly peeringDBFacilityId?: number;
}
export interface PeerAsnProperties {
	readonly peerAsn?: number;
	readonly peerContactInfo?: ContactInfo;
	readonly peerName?: string;
	readonly validationState?: "Approved" | "Failed" | "None" | "Pending";
}
export interface PeeringProperties {
	readonly direct?: PeeringPropertiesDirect;
	readonly exchange?: PeeringPropertiesExchange;
	readonly peeringLocation?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PeeringPropertiesDirect {
	readonly connections?: DirectConnection[];
	readonly directPeeringType?: "Cdn" | "Edge" | "Internal" | "Transit";
	readonly peerAsn?: SubResource;
	readonly useForPeeringService?: boolean;
}
export interface PeeringPropertiesExchange {
	readonly connections?: ExchangeConnection[];
	readonly peerAsn?: SubResource;
}
export interface PeeringServicePrefixProperties {
	readonly learnedType?: "None" | "ViaPartner" | "ViaSession";
	readonly prefix?: string;
	readonly prefixValidationState?: "Failed" | "Invalid" | "None" | "Pending" | "Unknown" | "Verified";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PeeringServiceProperties {
	readonly peeringServiceLocation?: string;
	readonly peeringServiceProvider?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PeeringServiceTags {
	readonly [key: string]: string;
}
export interface PeeringSku {
	readonly family?: "Direct" | "Exchange";
	readonly name?:
		| "Basic_Direct_Free"
		| "Basic_Exchange_Free"
		| "Premium_Direct_Free"
		| "Premium_Direct_Metered"
		| "Premium_Direct_Unlimited"
		| "Premium_Exchange_Metered";
	readonly size?: "Free" | "Metered" | "Unlimited";
	readonly tier?: "Basic" | "Premium";
}
export interface PeeringTags {
	readonly [key: string]: string;
}
export interface SubResource {
	readonly id?: string;
}
export default {
	peerAsns: peerAsns,
	peerings: peerings,
	peeringServices: peeringServices,
	"peeringServices/prefixes": peeringServices_prefixes,
};
