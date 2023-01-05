import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoliciesServicePerimeters
	extends GdmResource<AccessPoliciesServicePerimetersComponentInputs>
	implements AccessPoliciesServicePerimetersComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPoliciesServicePerimetersComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1beta.AccessPoliciesServicePerimeters", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface AccessPoliciesServicePerimetersComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
export interface AccessPoliciesServicePerimetersComponentInputs {
	readonly description?: string;
	readonly dryRun?: boolean;
	readonly name: string;
	readonly parent: string;
	readonly perimeterType?: string;
	readonly spec?: ServicePerimeterConfig;
	readonly status?: ServicePerimeterConfig;
	readonly title?: string;
	readonly weakenedForTesting?: boolean;
}
export interface ServicePerimeter {
	readonly createTime?: string;
	readonly description?: string;
	readonly dryRun?: boolean;
	readonly name?: string;
	readonly perimeterType?: string;
	readonly spec?: ServicePerimeterConfig;
	readonly status?: ServicePerimeterConfig;
	readonly title?: string;
	readonly updateTime?: string;
	readonly weakenedForTesting?: boolean;
}
export interface ServicePerimeterConfig {
	readonly accessLevels?: string[];
	readonly resources?: string[];
	readonly restrictedServices?: string[];
	readonly unrestrictedServices?: string[];
	readonly vpcAccessibleServices?: VpcAccessibleServices;
}
export interface VpcAccessibleServices {
	readonly allowedServices?: string[];
	readonly enableRestriction?: boolean;
}
export default {
	AccessPoliciesServicePerimeters: AccessPoliciesServicePerimeters,
};
