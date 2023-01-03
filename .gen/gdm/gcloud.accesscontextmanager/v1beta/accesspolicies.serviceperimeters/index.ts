import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoliciesServicePerimeters
	extends GdmResource<AccessPoliciesServicePerimetersComponentInputs>
	implements AccessPoliciesServicePerimetersComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPoliciesServicePerimetersComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1beta.AccessPoliciesServicePerimeters", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface AccessPoliciesServicePerimetersComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface AccessPoliciesServicePerimetersComponentInputs {
	readonly description?: string | undefined;
	readonly dryRun?: boolean | undefined;
	readonly name: string;
	readonly parent: string;
	readonly perimeterType?: string | undefined;
	readonly spec?: ServicePerimeterConfig | undefined;
	readonly status?: ServicePerimeterConfig | undefined;
	readonly title?: string | undefined;
	readonly weakenedForTesting?: boolean | undefined;
	readonly type: string;
}
export interface ServicePerimeter {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly dryRun?: boolean | undefined;
	readonly name?: string | undefined;
	readonly perimeterType?: string | undefined;
	readonly spec?: ServicePerimeterConfig | undefined;
	readonly status?: ServicePerimeterConfig | undefined;
	readonly title?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly weakenedForTesting?: boolean | undefined;
}
export interface ServicePerimeterConfig {
	readonly accessLevels?: string[] | undefined;
	readonly resources?: string[] | undefined;
	readonly restrictedServices?: string[] | undefined;
	readonly unrestrictedServices?: string[] | undefined;
	readonly vpcAccessibleServices?: VpcAccessibleServices | undefined;
}
export interface VpcAccessibleServices {
	readonly allowedServices?: string[] | undefined;
	readonly enableRestriction?: boolean | undefined;
}
export default {
	AccessPoliciesServicePerimeters: AccessPoliciesServicePerimeters,
};
