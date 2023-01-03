import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourceRecordSets
	extends GdmResource<ResourceRecordSetsComponentInputs>
	implements ResourceRecordSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceRecordSetsComponentInputs) {
		super(entity, options.name, "dns.v1beta2.ResourceRecordSets", options);
	}
	public readonly id?: string | undefined;
	public readonly startTime?: string | undefined;
	public readonly status?: string | undefined;
}
export interface ResourceRecordSetsComponentOutputs {
	readonly id?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
}
export interface ResourceRecordSetsComponentInputs {
	readonly additions?: ResourceRecordSet[] | undefined;
	readonly clientOperationId?: string | undefined;
	readonly deletions?: ResourceRecordSet[] | undefined;
	readonly header?: ResponseHeader | undefined;
	readonly isServing?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly managedZone: string;
	readonly nextPageToken?: string | undefined;
	readonly rrsets?: ResourceRecordSet[] | undefined;
	readonly type: string;
	readonly name: string;
}
export interface Change {
	readonly additions?: ResourceRecordSet[] | undefined;
	readonly deletions?: ResourceRecordSet[] | undefined;
	readonly id?: string | undefined;
	readonly isServing?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
}
export interface ResourceRecordSet {
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly routingPolicy?: RRSetRoutingPolicy | undefined;
	readonly rrdatas?: string[] | undefined;
	readonly signatureRrdatas?: string[] | undefined;
	readonly ttl?: number | undefined;
	readonly type?: string | undefined;
}
export interface ResourceRecordSetsListResponse {
	readonly header?: ResponseHeader | undefined;
	readonly kind?: string | undefined;
	readonly nextPageToken?: string | undefined;
	readonly rrsets?: ResourceRecordSet[] | undefined;
}
export interface ResponseHeader {
	readonly operationId?: string | undefined;
}
export interface RRSetRoutingPolicy {
	readonly geo?: RRSetRoutingPolicyGeoPolicy | undefined;
	readonly geoPolicy?: RRSetRoutingPolicyGeoPolicy | undefined;
	readonly kind?: string | undefined;
	readonly primaryBackup?: RRSetRoutingPolicyPrimaryBackupPolicy | undefined;
	readonly wrr?: RRSetRoutingPolicyWrrPolicy | undefined;
	readonly wrrPolicy?: RRSetRoutingPolicyWrrPolicy | undefined;
}
export interface RRSetRoutingPolicyGeoPolicy {
	readonly enableFencing?: boolean | undefined;
	readonly items?: RRSetRoutingPolicyGeoPolicyGeoPolicyItem[] | undefined;
	readonly kind?: string | undefined;
}
export interface RRSetRoutingPolicyGeoPolicyGeoPolicyItem {
	readonly healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly rrdatas?: string[] | undefined;
	readonly signatureRrdatas?: string[] | undefined;
}
export interface RRSetRoutingPolicyHealthCheckTargets {
	readonly internalLoadBalancers?: RRSetRoutingPolicyLoadBalancerTarget[] | undefined;
}
export interface RRSetRoutingPolicyLoadBalancerTarget {
	readonly ipAddress?: string | undefined;
	readonly ipProtocol?: string | undefined;
	readonly kind?: string | undefined;
	readonly loadBalancerType?: string | undefined;
	readonly networkUrl?: string | undefined;
	readonly port?: string | undefined;
	readonly project?: string | undefined;
	readonly region?: string | undefined;
}
export interface RRSetRoutingPolicyPrimaryBackupPolicy {
	readonly backupGeoTargets?: RRSetRoutingPolicyGeoPolicy | undefined;
	readonly kind?: string | undefined;
	readonly primaryTargets?: RRSetRoutingPolicyHealthCheckTargets | undefined;
	readonly trickleTraffic?: number | undefined;
}
export interface RRSetRoutingPolicyWrrPolicy {
	readonly items?: RRSetRoutingPolicyWrrPolicyWrrPolicyItem[] | undefined;
	readonly kind?: string | undefined;
}
export interface RRSetRoutingPolicyWrrPolicyWrrPolicyItem {
	readonly healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets | undefined;
	readonly kind?: string | undefined;
	readonly rrdatas?: string[] | undefined;
	readonly signatureRrdatas?: string[] | undefined;
	readonly weight?: number | undefined;
}
export default {
	ResourceRecordSets: ResourceRecordSets,
};
