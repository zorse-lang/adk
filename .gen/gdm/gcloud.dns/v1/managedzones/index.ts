import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ManagedZones extends GdmResource<ManagedZonesComponentInputs> implements ManagedZonesComponentOutputs {
	constructor(entity: ADKEntity, options: ManagedZonesComponentInputs) {
		super(entity, options.name, "dns.v1.ManagedZones", options);
	}
	public readonly creationTime?: string;
	public readonly id?: string;
	public readonly nameServers?: string[];
}
export interface ManagedZonesComponentOutputs {
	readonly creationTime?: string;
	readonly id?: string;
	readonly nameServers?: string[];
}
export interface ManagedZonesComponentInputs {
	readonly clientOperationId?: string;
	readonly cloudLoggingConfig?: ManagedZoneCloudLoggingConfig;
	readonly description?: string;
	readonly dnsName?: string;
	readonly dnssecConfig?: ManagedZoneDnsSecConfig;
	readonly forwardingConfig?: ManagedZoneForwardingConfig;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly nameServerSet?: string;
	readonly peeringConfig?: ManagedZonePeeringConfig;
	readonly privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;
	readonly reverseLookupConfig?: ManagedZoneReverseLookupConfig;
	readonly serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;
	readonly visibility?: string;
}
export interface DnsKeySpec {
	readonly algorithm?: string;
	readonly keyLength?: number;
	readonly keyType?: string;
	readonly kind?: string;
}
export interface ManagedZone {
	readonly cloudLoggingConfig?: ManagedZoneCloudLoggingConfig;
	readonly creationTime?: string;
	readonly description?: string;
	readonly dnsName?: string;
	readonly dnssecConfig?: ManagedZoneDnsSecConfig;
	readonly forwardingConfig?: ManagedZoneForwardingConfig;
	readonly id?: string;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly nameServers?: string[];
	readonly nameServerSet?: string;
	readonly peeringConfig?: ManagedZonePeeringConfig;
	readonly privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;
	readonly reverseLookupConfig?: ManagedZoneReverseLookupConfig;
	readonly serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;
	readonly visibility?: string;
}
export interface ManagedZoneCloudLoggingConfig {
	readonly enableLogging?: boolean;
	readonly kind?: string;
}
export interface ManagedZoneDnsSecConfig {
	readonly defaultKeySpecs?: DnsKeySpec[];
	readonly kind?: string;
	readonly nonExistence?: string;
	readonly state?: string;
}
export interface ManagedZoneForwardingConfig {
	readonly kind?: string;
	readonly targetNameServers?: ManagedZoneForwardingConfigNameServerTarget[];
}
export interface ManagedZoneForwardingConfigNameServerTarget {
	readonly forwardingPath?: string;
	readonly ipv4Address?: string;
	readonly ipv6Address?: string;
	readonly kind?: string;
}
export interface ManagedZonePeeringConfig {
	readonly kind?: string;
	readonly targetNetwork?: ManagedZonePeeringConfigTargetNetwork;
}
export interface ManagedZonePeeringConfigTargetNetwork {
	readonly deactivateTime?: string;
	readonly kind?: string;
	readonly networkUrl?: string;
}
export interface ManagedZonePrivateVisibilityConfig {
	readonly gkeClusters?: ManagedZonePrivateVisibilityConfigGKECluster[];
	readonly kind?: string;
	readonly networks?: ManagedZonePrivateVisibilityConfigNetwork[];
}
export interface ManagedZonePrivateVisibilityConfigGKECluster {
	readonly gkeClusterName?: string;
	readonly kind?: string;
}
export interface ManagedZonePrivateVisibilityConfigNetwork {
	readonly kind?: string;
	readonly networkUrl?: string;
}
export interface ManagedZoneReverseLookupConfig {
	readonly kind?: string;
}
export interface ManagedZoneServiceDirectoryConfig {
	readonly kind?: string;
	readonly namespace?: ManagedZoneServiceDirectoryConfigNamespace;
}
export interface ManagedZoneServiceDirectoryConfigNamespace {
	readonly deletionTime?: string;
	readonly kind?: string;
	readonly namespaceUrl?: string;
}
export default {
	ManagedZones: ManagedZones,
};
