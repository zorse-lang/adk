import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ManagedZone extends GdmResource<ManagedZoneComponentInputs> implements ManagedZoneComponentOutputs {
	constructor(entity: ADKEntity, options: ManagedZoneComponentInputs) {
		super(entity, options.name, "dns.v1.managedZone", options);
	}
	public readonly creationTime?: string | undefined;
	public readonly id?: string | undefined;
	public readonly nameServers?: string[] | undefined;
}
export interface ManagedZoneComponentOutputs {
	readonly creationTime?: string | undefined;
	readonly id?: string | undefined;
	readonly nameServers?: string[] | undefined;
}
export interface ManagedZoneComponentInputs {
	readonly cloudLoggingConfig?: ManagedZoneCloudLoggingConfig | undefined;
	readonly description?: string | undefined;
	readonly dnsName?: string | undefined;
	readonly dnssecConfig?: ManagedZoneDnsSecConfig | undefined;
	readonly forwardingConfig?: ManagedZoneForwardingConfig | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly nameServerSet?: string | undefined;
	readonly peeringConfig?: ManagedZonePeeringConfig | undefined;
	readonly privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig | undefined;
	readonly reverseLookupConfig?: ManagedZoneReverseLookupConfig | undefined;
	readonly serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig | undefined;
	readonly visibility?: string | undefined;
	readonly type: string;
}
export interface DnsKeySpec {
	readonly algorithm?: string | undefined;
	readonly keyLength?: number | undefined;
	readonly keyType?: string | undefined;
	readonly kind?: string | undefined;
}
export interface ManagedZoneCloudLoggingConfig {
	readonly enableLogging?: boolean | undefined;
	readonly kind?: string | undefined;
}
export interface ManagedZoneDnsSecConfig {
	readonly defaultKeySpecs?: DnsKeySpec[] | undefined;
	readonly kind?: string | undefined;
	readonly nonExistence?: string | undefined;
	readonly state?: string | undefined;
}
export interface ManagedZoneForwardingConfig {
	readonly kind?: string | undefined;
	readonly targetNameServers?: ManagedZoneForwardingConfigNameServerTarget[] | undefined;
}
export interface ManagedZoneForwardingConfigNameServerTarget {
	readonly forwardingPath?: string | undefined;
	readonly ipv4Address?: string | undefined;
	readonly ipv6Address?: string | undefined;
	readonly kind?: string | undefined;
}
export interface ManagedZonePeeringConfig {
	readonly kind?: string | undefined;
	readonly targetNetwork?: ManagedZonePeeringConfigTargetNetwork | undefined;
}
export interface ManagedZonePeeringConfigTargetNetwork {
	readonly deactivateTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly networkUrl?: string | undefined;
}
export interface ManagedZonePrivateVisibilityConfig {
	readonly gkeClusters?: ManagedZonePrivateVisibilityConfigGKECluster[] | undefined;
	readonly kind?: string | undefined;
	readonly networks?: ManagedZonePrivateVisibilityConfigNetwork[] | undefined;
}
export interface ManagedZonePrivateVisibilityConfigGKECluster {
	readonly gkeClusterName?: string | undefined;
	readonly kind?: string | undefined;
}
export interface ManagedZonePrivateVisibilityConfigNetwork {
	readonly kind?: string | undefined;
	readonly networkUrl?: string | undefined;
}
export interface ManagedZoneReverseLookupConfig {
	readonly kind?: string | undefined;
}
export interface ManagedZoneServiceDirectoryConfig {
	readonly kind?: string | undefined;
	readonly namespace?: ManagedZoneServiceDirectoryConfigNamespace | undefined;
}
export interface ManagedZoneServiceDirectoryConfigNamespace {
	readonly deletionTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly namespaceUrl?: string | undefined;
}
export default {
	ManagedZone: ManagedZone,
};
