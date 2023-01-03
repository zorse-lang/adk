import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class peerAsns extends ArmResource<peerAsnsComponentInputs> implements peerAsnsComponentOutputs {
	constructor(entity: ADKEntity, options: peerAsnsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerAsns", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerAsns";
}
export interface peerAsnsComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerAsns";
}
export interface peerAsnsComponentInputs {
	readonly name: string;
	readonly properties?: PeerAsnProperties | undefined;
}
export class peerings extends ArmResource<peeringsComponentInputs> implements peeringsComponentOutputs {
	constructor(entity: ADKEntity, options: peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerings", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerings";
}
export interface peeringsComponentOutputs {
	readonly apiVersion: "2020-04-01";
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
export class peerings_registeredAsns
	extends ArmResource<peerings_registeredAsnsComponentInputs>
	implements peerings_registeredAsnsComponentOutputs
{
	constructor(entity: ADKEntity, options: peerings_registeredAsnsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerings/registeredAsns", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerings/registeredAsns";
}
export interface peerings_registeredAsnsComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerings/registeredAsns";
}
export interface peerings_registeredAsnsComponentInputs {
	readonly name: string;
	readonly properties?: PeeringRegisteredAsnProperties | undefined;
}
export class peerings_registeredPrefixes
	extends ArmResource<peerings_registeredPrefixesComponentInputs>
	implements peerings_registeredPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: peerings_registeredPrefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerings/registeredPrefixes", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerings/registeredPrefixes";
}
export interface peerings_registeredPrefixesComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerings/registeredPrefixes";
}
export interface peerings_registeredPrefixesComponentInputs {
	readonly name: string;
	readonly properties?: PeeringRegisteredPrefixProperties | undefined;
}
export class peeringServices
	extends ArmResource<peeringServicesComponentInputs>
	implements peeringServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: peeringServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peeringServices", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peeringServices";
}
export interface peeringServicesComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peeringServices";
}
export interface peeringServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PeeringServiceProperties | undefined;
	readonly sku?: PeeringServiceSku | undefined;
	readonly tags?: PeeringServiceTags | undefined;
}
export class peeringServices_prefixes
	extends ArmResource<peeringServices_prefixesComponentInputs>
	implements peeringServices_prefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: peeringServices_prefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peeringServices/prefixes", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peeringServices/prefixes";
}
export interface peeringServices_prefixesComponentOutputs {
	readonly apiVersion: "2020-04-01";
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
export interface ContactDetail {
	readonly email?: string | undefined;
	readonly phone?: string | undefined;
	readonly role?: ("Escalation" | "Noc" | "Other" | "Policy" | "Service" | "Technical") | undefined;
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
	readonly errorMessage?: string | undefined;
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
	readonly errorMessage?: string | undefined;
	readonly peeringDBFacilityId?: number | undefined;
}
export interface PeerAsnProperties {
	readonly errorMessage?: string | undefined;
	readonly peerAsn?: number | undefined;
	readonly peerContactDetail?: ContactDetail[] | undefined;
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
	readonly directPeeringType?: ("Cdn" | "Edge" | "Internal" | "Ix" | "IxRs" | "Transit") | undefined;
	readonly peerAsn?: SubResource | undefined;
	readonly useForPeeringService?: boolean | undefined;
}
export interface PeeringPropertiesExchange {
	readonly connections?: ExchangeConnection[] | undefined;
	readonly peerAsn?: SubResource | undefined;
}
export interface PeeringRegisteredAsnProperties {
	readonly asn?: number | undefined;
	readonly peeringServicePrefixKey?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PeeringRegisteredPrefixProperties {
	readonly errorMessage?: string | undefined;
	readonly peeringServicePrefixKey?: string | undefined;
	readonly prefix?: string | undefined;
	readonly prefixValidationState?:
		| ("Failed" | "Invalid" | "None" | "Pending" | "Unknown" | "Verified" | "Warning")
		| undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PeeringServicePrefixEvent {
	readonly eventDescription?: string | undefined;
	readonly eventLevel?: string | undefined;
	readonly eventSummary?: string | undefined;
	readonly eventTimestamp?: string | undefined;
	readonly eventType?: string | undefined;
}
export interface PeeringServicePrefixProperties {
	readonly errorMessage?: string | undefined;
	readonly events?: PeeringServicePrefixEvent[] | undefined;
	readonly learnedType?: ("None" | "ViaServiceProvider" | "ViaSession") | undefined;
	readonly peeringServicePrefixKey?: string | undefined;
	readonly prefix?: string | undefined;
	readonly prefixValidationState?:
		| ("Failed" | "Invalid" | "None" | "Pending" | "Unknown" | "Verified" | "Warning")
		| undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PeeringServiceProperties {
	readonly peeringServiceLocation?: string | undefined;
	readonly peeringServiceProvider?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PeeringServiceSku {
	readonly name?: string | undefined;
}
export interface PeeringServiceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PeeringSku {
	readonly family?: ("Direct" | "Exchange") | undefined;
	readonly name?: string | undefined;
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
	"peerings/registeredAsns": peerings_registeredAsns,
	"peerings/registeredPrefixes": peerings_registeredPrefixes,
	peeringServices: peeringServices,
	"peeringServices/prefixes": peeringServices_prefixes,
};
