import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ManagedZoneOperations
	extends GdmResource<ManagedZoneOperationsComponentInputs>
	implements ManagedZoneOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ManagedZoneOperationsComponentInputs) {
		super(entity, options.name, "dns.v1beta2.ManagedZoneOperations", options);
	}
	public readonly dnsKeyContext?: OperationDnsKeyContext;
	public readonly id?: string;
	public readonly startTime?: string;
	public readonly status?: string;
	public readonly user?: string;
	public readonly zoneContext?: OperationManagedZoneContext;
}
export interface ManagedZoneOperationsComponentOutputs {
	readonly dnsKeyContext?: OperationDnsKeyContext;
	readonly id?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly user?: string;
	readonly zoneContext?: OperationManagedZoneContext;
}
export interface ManagedZoneOperationsComponentInputs {
	readonly kind?: string;
	readonly name: string;
}
export interface DnsKey {
	readonly algorithm?: string;
	readonly creationTime?: string;
	readonly description?: string;
	readonly digests?: DnsKeyDigest[];
	readonly id?: string;
	readonly isActive?: boolean;
	readonly keyLength?: number;
	readonly keyTag?: number;
	readonly kind?: string;
	readonly publicKey?: string;
	readonly type?: string;
}
export interface DnsKeyDigest {
	readonly digest?: string;
	readonly type?: string;
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
	readonly port?: number;
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
export interface Operation {
	readonly dnsKeyContext?: OperationDnsKeyContext;
	readonly id?: string;
	readonly kind?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly type?: string;
	readonly user?: string;
	readonly zoneContext?: OperationManagedZoneContext;
}
export interface OperationDnsKeyContext {
	readonly newValue?: DnsKey;
	readonly oldValue?: DnsKey;
}
export interface OperationManagedZoneContext {
	readonly newValue?: ManagedZone;
	readonly oldValue?: ManagedZone;
}
export default {
	ManagedZoneOperations: ManagedZoneOperations,
};
