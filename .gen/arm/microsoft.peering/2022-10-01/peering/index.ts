import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class peerAsns extends ArmResource<peerAsnsComponentInputs> implements peerAsnsComponentOutputs {
	constructor(entity: ADKEntity, options: peerAsnsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerAsns", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerAsns";
}
export interface peerAsnsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerAsns";
}
export interface peerAsnsComponentInputs {
	readonly name: string;
	readonly properties?: PeerAsnProperties;
}
export class peerings extends ArmResource<peeringsComponentInputs> implements peeringsComponentOutputs {
	constructor(entity: ADKEntity, options: peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerings", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerings";
}
export interface peeringsComponentOutputs {
	readonly apiVersion: "2022-10-01";
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
export class peerings_registeredAsns
	extends ArmResource<peerings_registeredAsnsComponentInputs>
	implements peerings_registeredAsnsComponentOutputs
{
	constructor(entity: ADKEntity, options: peerings_registeredAsnsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerings/registeredAsns", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerings/registeredAsns";
}
export interface peerings_registeredAsnsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerings/registeredAsns";
}
export interface peerings_registeredAsnsComponentInputs {
	readonly name: string;
	readonly properties?: PeeringRegisteredAsnProperties;
}
export class peerings_registeredPrefixes
	extends ArmResource<peerings_registeredPrefixesComponentInputs>
	implements peerings_registeredPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: peerings_registeredPrefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peerings/registeredPrefixes", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peerings/registeredPrefixes";
}
export interface peerings_registeredPrefixesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peerings/registeredPrefixes";
}
export interface peerings_registeredPrefixesComponentInputs {
	readonly name: string;
	readonly properties?: PeeringRegisteredPrefixProperties;
}
export class peeringServices
	extends ArmResource<peeringServicesComponentInputs>
	implements peeringServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: peeringServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peeringServices", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peeringServices";
}
export interface peeringServicesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peeringServices";
}
export interface peeringServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PeeringServiceProperties;
	readonly sku?: PeeringServiceSku;
	readonly tags?: PeeringServiceTags;
}
export class peeringServices_connectionMonitorTests
	extends ArmResource<peeringServices_connectionMonitorTestsComponentInputs>
	implements peeringServices_connectionMonitorTestsComponentOutputs
{
	constructor(entity: ADKEntity, options: peeringServices_connectionMonitorTestsComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peeringServices/connectionMonitorTests", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peeringServices/connectionMonitorTests";
}
export interface peeringServices_connectionMonitorTestsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.Peering/peeringServices/connectionMonitorTests";
}
export interface peeringServices_connectionMonitorTestsComponentInputs {
	readonly name: string;
	readonly properties?: ConnectionMonitorTestProperties;
}
export class peeringServices_prefixes
	extends ArmResource<peeringServices_prefixesComponentInputs>
	implements peeringServices_prefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: peeringServices_prefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Peering/peeringServices/prefixes", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Peering/peeringServices/prefixes";
}
export interface peeringServices_prefixesComponentOutputs {
	readonly apiVersion: "2022-10-01";
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
export interface ConnectionMonitorTestProperties {
	readonly destination?: string;
	readonly destinationPort?: number;
	readonly isTestSuccessful?: boolean;
	readonly path?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sourceAgent?: string;
	readonly testFrequencyInSec?: number;
}
export interface ContactDetail {
	readonly email?: string;
	readonly phone?: string;
	readonly role?: "Escalation" | "Noc" | "Other" | "Policy" | "Service" | "Technical";
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
		| "TypeChangeInProgress"
		| "TypeChangeRequested"
		| "Validating";
	readonly errorMessage?: string;
	readonly microsoftTrackingId?: string;
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
		| "TypeChangeInProgress"
		| "TypeChangeRequested"
		| "Validating";
	readonly errorMessage?: string;
	readonly peeringDBFacilityId?: number;
}
export interface LogAnalyticsWorkspaceProperties {
	readonly connectedAgents?: string[];
	readonly key?: string;
	readonly workspaceID?: string;
}
export interface PeerAsnProperties {
	readonly errorMessage?: string;
	readonly peerAsn?: number;
	readonly peerContactDetail?: ContactDetail[];
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
	readonly directPeeringType?:
		| "Cdn"
		| "Edge"
		| "EdgeZoneForOperators"
		| "Internal"
		| "Ix"
		| "IxRs"
		| "Transit"
		| "Voice";
	readonly peerAsn?: SubResource;
	readonly useForPeeringService?: boolean;
}
export interface PeeringPropertiesExchange {
	readonly connections?: ExchangeConnection[];
	readonly peerAsn?: SubResource;
}
export interface PeeringRegisteredAsnProperties {
	readonly asn?: number;
	readonly peeringServicePrefixKey?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PeeringRegisteredPrefixProperties {
	readonly errorMessage?: string;
	readonly peeringServicePrefixKey?: string;
	readonly prefix?: string;
	readonly prefixValidationState?: "Failed" | "Invalid" | "None" | "Pending" | "Unknown" | "Verified" | "Warning";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PeeringServicePrefixEvent {
	readonly eventDescription?: string;
	readonly eventLevel?: string;
	readonly eventSummary?: string;
	readonly eventTimestamp?: string;
	readonly eventType?: string;
}
export interface PeeringServicePrefixProperties {
	readonly errorMessage?: string;
	readonly events?: PeeringServicePrefixEvent[];
	readonly learnedType?: "None" | "ViaServiceProvider" | "ViaSession";
	readonly peeringServicePrefixKey?: string;
	readonly prefix?: string;
	readonly prefixValidationState?: "Failed" | "Invalid" | "None" | "Pending" | "Unknown" | "Verified" | "Warning";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PeeringServiceProperties {
	readonly logAnalyticsWorkspaceProperties?: LogAnalyticsWorkspaceProperties;
	readonly peeringServiceLocation?: string;
	readonly peeringServiceProvider?: string;
	readonly providerBackupPeeringLocation?: string;
	readonly providerPrimaryPeeringLocation?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PeeringServiceSku {
	readonly name?: string;
}
export interface PeeringServiceTags {
	readonly [key: string]: string;
}
export interface PeeringSku {
	readonly family?: "Direct" | "Exchange";
	readonly name?: string;
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
	"peerings/registeredAsns": peerings_registeredAsns,
	"peerings/registeredPrefixes": peerings_registeredPrefixes,
	peeringServices: peeringServices,
	"peeringServices/connectionMonitorTests": peeringServices_connectionMonitorTests,
	"peeringServices/prefixes": peeringServices_prefixes,
};
