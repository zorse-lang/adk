import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ManagedZoneOperations
	extends GdmResource<ManagedZoneOperationsComponentInputs>
	implements ManagedZoneOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ManagedZoneOperationsComponentInputs) {
		super(entity, options.name, "dns.v1alpha2.ManagedZoneOperations", options);
	}
	public readonly dnsKeyContext?: OperationDnsKeyContext | undefined;
	public readonly id?: string | undefined;
	public readonly startTime?: string | undefined;
	public readonly status?: string | undefined;
	public readonly user?: string | undefined;
	public readonly zoneContext?: OperationManagedZoneContext | undefined;
}
export interface ManagedZoneOperationsComponentOutputs {
	readonly dnsKeyContext?: OperationDnsKeyContext | undefined;
	readonly id?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly user?: string | undefined;
	readonly zoneContext?: OperationManagedZoneContext | undefined;
}
export interface ManagedZoneOperationsComponentInputs {
	readonly kind?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface DnsKey {
	readonly algorithm?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly digests?: DnsKeyDigest[] | undefined;
	readonly id?: string | undefined;
	readonly isActive?: boolean | undefined;
	readonly keyLength?: number | undefined;
	readonly keyTag?: number | undefined;
	readonly kind?: string | undefined;
	readonly publicKey?: string | undefined;
	readonly type?: string | undefined;
}
export interface DnsKeyDigest {
	readonly digest?: string | undefined;
	readonly type?: string | undefined;
}
export interface DnsKeySpec {
	readonly algorithm?: string | undefined;
	readonly keyLength?: number | undefined;
	readonly keyType?: string | undefined;
	readonly kind?: string | undefined;
}
export interface ManagedZone {
	readonly cloudLoggingConfig?: ManagedZoneCloudLoggingConfig | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly dnsName?: string | undefined;
	readonly dnssecConfig?: ManagedZoneDnsSecConfig | undefined;
	readonly forwardingConfig?: ManagedZoneForwardingConfig | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly nameServers?: string[] | undefined;
	readonly nameServerSet?: string | undefined;
	readonly peeringConfig?: ManagedZonePeeringConfig | undefined;
	readonly privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig | undefined;
	readonly reverseLookupConfig?: ManagedZoneReverseLookupConfig | undefined;
	readonly serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig | undefined;
	readonly visibility?: string | undefined;
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
export interface Operation {
	readonly dnsKeyContext?: OperationDnsKeyContext | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly type?: string | undefined;
	readonly user?: string | undefined;
	readonly zoneContext?: OperationManagedZoneContext | undefined;
}
export interface OperationDnsKeyContext {
	readonly newValue?: DnsKey | undefined;
	readonly oldValue?: DnsKey | undefined;
}
export interface OperationManagedZoneContext {
	readonly newValue?: ManagedZone | undefined;
	readonly oldValue?: ManagedZone | undefined;
}
export default {
	ManagedZoneOperations: ManagedZoneOperations,
};
