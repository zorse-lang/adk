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
	readonly description?: string;
	readonly name: string;
	readonly parent: string;
	readonly perimeterType?: string;
	readonly spec?: ServicePerimeterConfig;
	readonly status?: ServicePerimeterConfig;
	readonly title?: string;
	readonly useExplicitDryRunSpec?: boolean;
}
export interface ApiOperation {
	readonly methodSelectors?: MethodSelector[];
	readonly serviceName?: string;
}
export interface EgressFrom {
	readonly identities?: string[];
	readonly identityType?: string;
}
export interface EgressPolicy {
	readonly egressFrom?: EgressFrom;
	readonly egressTo?: EgressTo;
}
export interface EgressTo {
	readonly externalResources?: string[];
	readonly operations?: ApiOperation[];
	readonly resources?: string[];
}
export interface IngressFrom {
	readonly identities?: string[];
	readonly identityType?: string;
	readonly sources?: IngressSource[];
}
export interface IngressPolicy {
	readonly ingressFrom?: IngressFrom;
	readonly ingressTo?: IngressTo;
}
export interface IngressSource {
	readonly accessLevel?: string;
	readonly resource?: string;
}
export interface IngressTo {
	readonly operations?: ApiOperation[];
	readonly resources?: string[];
}
export interface MethodSelector {
	readonly method?: string;
	readonly permission?: string;
}
export interface ServicePerimeter {
	readonly description?: string;
	readonly name?: string;
	readonly perimeterType?: string;
	readonly spec?: ServicePerimeterConfig;
	readonly status?: ServicePerimeterConfig;
	readonly title?: string;
	readonly useExplicitDryRunSpec?: boolean;
}
export interface ServicePerimeterConfig {
	readonly accessLevels?: string[];
	readonly egressPolicies?: EgressPolicy[];
	readonly ingressPolicies?: IngressPolicy[];
	readonly resources?: string[];
	readonly restrictedServices?: string[];
	readonly vpcAccessibleServices?: VpcAccessibleServices;
}
export interface VpcAccessibleServices {
	readonly allowedServices?: string[];
	readonly enableRestriction?: boolean;
}
export default {
	AccessPoliciesServicePerimeters: AccessPoliciesServicePerimeters,
};
