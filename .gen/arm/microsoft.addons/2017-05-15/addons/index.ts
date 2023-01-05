import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class supportProviders_supportPlanTypes
	extends ArmResource<supportProviders_supportPlanTypesComponentInputs>
	implements supportProviders_supportPlanTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: supportProviders_supportPlanTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Addons/supportProviders/supportPlanTypes", "2017-05-15", options);
	}
	public readonly apiVersion: "2017-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.Addons/supportProviders/supportPlanTypes";
}
export interface supportProviders_supportPlanTypesComponentOutputs {
	readonly apiVersion: "2017-05-15";
	readonly id: string;
	readonly type: "Microsoft.Addons/supportProviders/supportPlanTypes";
}
export interface supportProviders_supportPlanTypesComponentInputs {
	readonly name: string;
	readonly properties?: CanonicalSupportPlanProperties;
}
export interface CanonicalSupportPlanProperties {
	readonly provisioningState?:
		| "Cancelled"
		| "Cancelling"
		| "Downgrading"
		| "Failed"
		| "Purchasing"
		| "Succeeded"
		| "Upgrading";
}
export default {
	"supportProviders/supportPlanTypes": supportProviders_supportPlanTypes,
};
