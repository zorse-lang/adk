import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResponsePolicyRules
	extends GdmResource<ResponsePolicyRulesComponentInputs>
	implements ResponsePolicyRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: ResponsePolicyRulesComponentInputs) {
		super(entity, options.name, "dns.v1beta2.ResponsePolicyRules", options);
	}
}
export interface ResponsePolicyRulesComponentOutputs {}
export interface ResponsePolicyRulesComponentInputs {
	readonly behavior?: string | undefined;
	readonly clientOperationId?: string | undefined;
	readonly dnsName?: string | undefined;
	readonly kind?: string | undefined;
	readonly localData?: ResponsePolicyRuleLocalData | undefined;
	readonly responsePolicy: string;
	readonly ruleName?: string | undefined;
	readonly type: string;
	readonly name: string;
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
export interface ResponsePolicyRule {
	readonly behavior?: string | undefined;
	readonly dnsName?: string | undefined;
	readonly kind?: string | undefined;
	readonly localData?: ResponsePolicyRuleLocalData | undefined;
	readonly ruleName?: string | undefined;
}
export interface ResponsePolicyRuleLocalData {
	readonly localDatas?: ResourceRecordSet[] | undefined;
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
	ResponsePolicyRules: ResponsePolicyRules,
};
