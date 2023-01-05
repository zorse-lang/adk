import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Changes extends GdmResource<ChangesComponentInputs> implements ChangesComponentOutputs {
	constructor(entity: ADKEntity, options: ChangesComponentInputs) {
		super(entity, options.name, "dns.v1.Changes", options);
	}
	public readonly id?: string;
	public readonly startTime?: string;
	public readonly status?: string;
}
export interface ChangesComponentOutputs {
	readonly id?: string;
	readonly startTime?: string;
	readonly status?: string;
}
export interface ChangesComponentInputs {
	readonly additions?: ResourceRecordSet[];
	readonly clientOperationId?: string;
	readonly deletions?: ResourceRecordSet[];
	readonly isServing?: boolean;
	readonly kind?: string;
	readonly managedZone: string;
	readonly name: string;
}
export interface Change {
	readonly additions?: ResourceRecordSet[];
	readonly deletions?: ResourceRecordSet[];
	readonly id?: string;
	readonly isServing?: boolean;
	readonly kind?: string;
	readonly startTime?: string;
	readonly status?: string;
}
export interface ResourceRecordSet {
	readonly kind?: string;
	readonly name?: string;
	readonly routingPolicy?: RRSetRoutingPolicy;
	readonly rrdatas?: string[];
	readonly signatureRrdatas?: string[];
	readonly ttl?: number;
	readonly type?: string;
}
export interface RRSetRoutingPolicy {
	readonly geo?: RRSetRoutingPolicyGeoPolicy;
	readonly kind?: string;
	readonly primaryBackup?: RRSetRoutingPolicyPrimaryBackupPolicy;
	readonly wrr?: RRSetRoutingPolicyWrrPolicy;
}
export interface RRSetRoutingPolicyGeoPolicy {
	readonly enableFencing?: boolean;
	readonly items?: RRSetRoutingPolicyGeoPolicyGeoPolicyItem[];
	readonly kind?: string;
}
export interface RRSetRoutingPolicyGeoPolicyGeoPolicyItem {
	readonly healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets;
	readonly kind?: string;
	readonly location?: string;
	readonly rrdatas?: string[];
	readonly signatureRrdatas?: string[];
}
export interface RRSetRoutingPolicyHealthCheckTargets {
	readonly internalLoadBalancers?: RRSetRoutingPolicyLoadBalancerTarget[];
}
export interface RRSetRoutingPolicyLoadBalancerTarget {
	readonly ipAddress?: string;
	readonly ipProtocol?: string;
	readonly kind?: string;
	readonly loadBalancerType?: string;
	readonly networkUrl?: string;
	readonly port?: string;
	readonly project?: string;
	readonly region?: string;
}
export interface RRSetRoutingPolicyPrimaryBackupPolicy {
	readonly backupGeoTargets?: RRSetRoutingPolicyGeoPolicy;
	readonly kind?: string;
	readonly primaryTargets?: RRSetRoutingPolicyHealthCheckTargets;
	readonly trickleTraffic?: number;
}
export interface RRSetRoutingPolicyWrrPolicy {
	readonly items?: RRSetRoutingPolicyWrrPolicyWrrPolicyItem[];
	readonly kind?: string;
}
export interface RRSetRoutingPolicyWrrPolicyWrrPolicyItem {
	readonly healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets;
	readonly kind?: string;
	readonly rrdatas?: string[];
	readonly signatureRrdatas?: string[];
	readonly weight?: number;
}
export default {
	Changes: Changes,
};
