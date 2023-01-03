import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoliciesServicePerimeters
	extends GdmResource<AccessPoliciesServicePerimetersComponentInputs>
	implements AccessPoliciesServicePerimetersComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPoliciesServicePerimetersComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1.AccessPoliciesServicePerimeters", options);
	}
}
export interface AccessPoliciesServicePerimetersComponentOutputs {}
export interface AccessPoliciesServicePerimetersComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly perimeterType?: string | undefined;
	readonly spec?: ServicePerimeterConfig | undefined;
	readonly status?: ServicePerimeterConfig | undefined;
	readonly title?: string | undefined;
	readonly useExplicitDryRunSpec?: boolean | undefined;
	readonly type: string;
}
export interface ApiOperation {
	readonly methodSelectors?: MethodSelector[] | undefined;
	readonly serviceName?: string | undefined;
}
export interface EgressFrom {
	readonly identities?: string[] | undefined;
	readonly identityType?: string | undefined;
}
export interface EgressPolicy {
	readonly egressFrom?: EgressFrom | undefined;
	readonly egressTo?: EgressTo | undefined;
}
export interface EgressTo {
	readonly externalResources?: string[] | undefined;
	readonly operations?: ApiOperation[] | undefined;
	readonly resources?: string[] | undefined;
}
export interface IngressFrom {
	readonly identities?: string[] | undefined;
	readonly identityType?: string | undefined;
	readonly sources?: IngressSource[] | undefined;
}
export interface IngressPolicy {
	readonly ingressFrom?: IngressFrom | undefined;
	readonly ingressTo?: IngressTo | undefined;
}
export interface IngressSource {
	readonly accessLevel?: string | undefined;
	readonly resource?: string | undefined;
}
export interface IngressTo {
	readonly operations?: ApiOperation[] | undefined;
	readonly resources?: string[] | undefined;
}
export interface MethodSelector {
	readonly method?: string | undefined;
	readonly permission?: string | undefined;
}
export interface ServicePerimeter {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly perimeterType?: string | undefined;
	readonly spec?: ServicePerimeterConfig | undefined;
	readonly status?: ServicePerimeterConfig | undefined;
	readonly title?: string | undefined;
	readonly useExplicitDryRunSpec?: boolean | undefined;
}
export interface ServicePerimeterConfig {
	readonly accessLevels?: string[] | undefined;
	readonly egressPolicies?: EgressPolicy[] | undefined;
	readonly ingressPolicies?: IngressPolicy[] | undefined;
	readonly resources?: string[] | undefined;
	readonly restrictedServices?: string[] | undefined;
	readonly vpcAccessibleServices?: VpcAccessibleServices | undefined;
}
export interface VpcAccessibleServices {
	readonly allowedServices?: string[] | undefined;
	readonly enableRestriction?: boolean | undefined;
}
export default {
	AccessPoliciesServicePerimeters: AccessPoliciesServicePerimeters,
};
