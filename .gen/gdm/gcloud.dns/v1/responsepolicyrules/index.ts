import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResponsePolicyRules
	extends GdmResource<ResponsePolicyRulesComponentInputs>
	implements ResponsePolicyRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: ResponsePolicyRulesComponentInputs) {
		super(entity, options.name, "dns.v1.ResponsePolicyRules", options);
	}
}
export interface ResponsePolicyRulesComponentOutputs {}
export interface ResponsePolicyRulesComponentInputs {
	readonly behavior?: string;
	readonly clientOperationId?: string;
	readonly dnsName?: string;
	readonly kind?: string;
	readonly localData?: ResponsePolicyRuleLocalData;
	readonly responsePolicy: string;
	readonly ruleName?: string;
	readonly name: string;
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
export interface ResponsePolicyRule {
	readonly behavior?: string;
	readonly dnsName?: string;
	readonly kind?: string;
	readonly localData?: ResponsePolicyRuleLocalData;
	readonly ruleName?: string;
}
export interface ResponsePolicyRuleLocalData {
	readonly localDatas?: ResourceRecordSet[];
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
	ResponsePolicyRules: ResponsePolicyRules,
};
