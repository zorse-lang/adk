import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class supportProviders_supportPlanTypes
	extends ArmResource<supportProviders_supportPlanTypesComponentInputs>
	implements supportProviders_supportPlanTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: supportProviders_supportPlanTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Addons/supportProviders/supportPlanTypes", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Addons/supportProviders/supportPlanTypes";
}
export interface supportProviders_supportPlanTypesComponentOutputs {
	readonly apiVersion: "2018-03-01";
	readonly id: string;
	readonly type: "Microsoft.Addons/supportProviders/supportPlanTypes";
}
export interface supportProviders_supportPlanTypesComponentInputs {
	readonly name: string;
	readonly properties?: CanonicalSupportPlanProperties | undefined;
}
export function listSupportPlanInfo(resource: ArmResource): CanonicalSupportPlanInfoDefinition[] {
	if (resource.apiVersion !== "2018-03-01") {
		throw new Error(`listSupportPlanInfo is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Addons/supportProviders") {
		throw new Error(`listSupportPlanInfo is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CanonicalSupportPlanInfoDefinition {
	readonly enabled?: boolean | undefined;
	readonly oneTimeCharge?: ("no" | "onEnabled" | "onReenabled") | undefined;
	readonly supportPlanType?: ("advanced" | "essential" | "standard") | undefined;
}
export interface CanonicalSupportPlanProperties {
	readonly provisioningState?:
		| ("Cancelled" | "Cancelling" | "Downgrading" | "Failed" | "Purchasing" | "Succeeded" | "Upgrading")
		| undefined;
}
export default {
	"supportProviders/supportPlanTypes": supportProviders_supportPlanTypes,
};
