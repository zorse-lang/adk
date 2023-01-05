import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResponsePolicies
	extends GdmResource<ResponsePoliciesComponentInputs>
	implements ResponsePoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ResponsePoliciesComponentInputs) {
		super(entity, options.name, "dns.v1alpha2.ResponsePolicies", options);
	}
	public readonly id?: string;
}
export interface ResponsePoliciesComponentOutputs {
	readonly id?: string;
}
export interface ResponsePoliciesComponentInputs {
	readonly clientOperationId?: string;
	readonly description?: string;
	readonly gkeClusters?: ResponsePolicyGKECluster[];
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly networks?: ResponsePolicyNetwork[];
	readonly responsePolicyName?: string;
	readonly name: string;
}
export interface ResponsePolicy {
	readonly description?: string;
	readonly gkeClusters?: ResponsePolicyGKECluster[];
	readonly id?: string;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly networks?: ResponsePolicyNetwork[];
	readonly responsePolicyName?: string;
}
export interface ResponsePolicyGKECluster {
	readonly gkeClusterName?: string;
	readonly kind?: string;
}
export interface ResponsePolicyNetwork {
	readonly kind?: string;
	readonly networkUrl?: string;
}
export default {
	ResponsePolicies: ResponsePolicies,
};
