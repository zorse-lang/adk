import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResponsePolicies
	extends GdmResource<ResponsePoliciesComponentInputs>
	implements ResponsePoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ResponsePoliciesComponentInputs) {
		super(entity, options.name, "dns.v1beta2.ResponsePolicies", options);
	}
	public readonly id?: string | undefined;
}
export interface ResponsePoliciesComponentOutputs {
	readonly id?: string | undefined;
}
export interface ResponsePoliciesComponentInputs {
	readonly clientOperationId?: string | undefined;
	readonly description?: string | undefined;
	readonly gkeClusters?: ResponsePolicyGKECluster[] | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly networks?: ResponsePolicyNetwork[] | undefined;
	readonly responsePolicyName?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface ResponsePolicy {
	readonly description?: string | undefined;
	readonly gkeClusters?: ResponsePolicyGKECluster[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly networks?: ResponsePolicyNetwork[] | undefined;
	readonly responsePolicyName?: string | undefined;
}
export interface ResponsePolicyGKECluster {
	readonly gkeClusterName?: string | undefined;
	readonly kind?: string | undefined;
}
export interface ResponsePolicyNetwork {
	readonly kind?: string | undefined;
	readonly networkUrl?: string | undefined;
}
export default {
	ResponsePolicies: ResponsePolicies,
};
