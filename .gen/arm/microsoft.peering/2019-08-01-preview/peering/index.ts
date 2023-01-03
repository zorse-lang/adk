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
	readonly properties?: PeerAsnProperties | undefined;
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
	readonly properties?: PeeringProperties | undefined;
	readonly sku: PeeringSku;
	readonly tags?: PeeringTags | undefined;
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
	readonly properties?: PeeringServiceProperties | undefined;
	readonly tags?: PeeringServiceTags | undefined;
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
	readonly properties?: PeeringServicePrefixProperties | undefined;
}
export interface BgpSession {
	readonly maxPrefixesAdvertisedV4?: number | undefined;
	readonly maxPrefixesAdvertisedV6?: number | undefined;
	readonly md5AuthenticationKey?: string | undefined;
	readonly microsoftSessionIPv4Address?: string | undefined;
	readonly microsoftSessionIPv6Address?: string | undefined;
	readonly peerSessionIPv4Address?: string | undefined;
	readonly peerSessionIPv6Address?: string | undefined;
	readonly sessionPrefixV4?: string | undefined;
	readonly sessionPrefixV6?: string | undefined;
	readonly sessionStateV4?:
		| (
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
				| "PendingUpdate"
		  )
		| undefined;
	readonly sessionStateV6?:
		| (
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
				| "PendingUpdate"
		  )
		| undefined;
}
export interface ContactInfo {
	readonly emails?: string[] | undefined;
	readonly phone?: string[] | undefined;
}
export interface DirectConnection {
	readonly bandwidthInMbps?: number | undefined;
	readonly bgpSession?: BgpSession | undefined;
	readonly connectionIdentifier?: string | undefined;
	readonly connectionState?:
		| (
				| "Active"
				| "Approved"
				| "None"
				| "PendingApproval"
				| "ProvisioningCompleted"
				| "ProvisioningFailed"
				| "ProvisioningStarted"
				| "Validating"
		  )
		| undefined;
	readonly peeringDBFacilityId?: number | undefined;
	readonly provisionedBandwidthInMbps?: number | undefined;
	readonly sessionAddressProvider?: ("Microsoft" | "Peer") | undefined;
	readonly useForPeeringService?: boolean | undefined;
}
export interface ExchangeConnection {
	readonly bgpSession?: BgpSession | undefined;
	readonly connectionIdentifier?: string | undefined;
	readonly connectionState?:
		| (
				| "Active"
				| "Approved"
				| "None"
				| "PendingApproval"
				| "ProvisioningCompleted"
				| "ProvisioningFailed"
				| "ProvisioningStarted"
				| "Validating"
		  )
		| undefined;
	readonly peeringDBFacilityId?: number | undefined;
}
export interface PeerAsnProperties {
	readonly peerAsn?: number | undefined;
	readonly peerContactInfo?: ContactInfo | undefined;
	readonly peerName?: string | undefined;
	readonly validationState?: ("Approved" | "Failed" | "None" | "Pending") | undefined;
}
export interface PeeringProperties {
	readonly direct?: PeeringPropertiesDirect | undefined;
	readonly exchange?: PeeringPropertiesExchange | undefined;
	readonly peeringLocation?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PeeringPropertiesDirect {
	readonly connections?: DirectConnection[] | undefined;
	readonly directPeeringType?: ("Cdn" | "Edge" | "Internal" | "Transit") | undefined;
	readonly peerAsn?: SubResource | undefined;
	readonly useForPeeringService?: boolean | undefined;
}
export interface PeeringPropertiesExchange {
	readonly connections?: ExchangeConnection[] | undefined;
	readonly peerAsn?: SubResource | undefined;
}
export interface PeeringServicePrefixProperties {
	readonly learnedType?: ("None" | "ViaPartner" | "ViaSession") | undefined;
	readonly prefix?: string | undefined;
	readonly prefixValidationState?: ("Failed" | "Invalid" | "None" | "Pending" | "Unknown" | "Verified") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PeeringServiceProperties {
	readonly peeringServiceLocation?: string | undefined;
	readonly peeringServiceProvider?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PeeringServiceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PeeringSku {
	readonly family?: ("Direct" | "Exchange") | undefined;
	readonly name?:
		| (
				| "Basic_Direct_Free"
				| "Basic_Exchange_Free"
				| "Premium_Direct_Free"
				| "Premium_Direct_Metered"
				| "Premium_Direct_Unlimited"
				| "Premium_Exchange_Metered"
		  )
		| undefined;
	readonly size?: ("Free" | "Metered" | "Unlimited") | undefined;
	readonly tier?: ("Basic" | "Premium") | undefined;
}
export interface PeeringTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export default {
	peerAsns: peerAsns,
	peerings: peerings,
	peeringServices: peeringServices,
	"peeringServices/prefixes": peeringServices_prefixes,
};
