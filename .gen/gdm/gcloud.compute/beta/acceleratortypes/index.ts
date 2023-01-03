import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AcceleratorTypes
	extends GdmResource<AcceleratorTypesComponentInputs>
	implements AcceleratorTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: AcceleratorTypesComponentInputs) {
		super(entity, options.name, "compute.beta.AcceleratorTypes", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly deprecated?: DeprecationStatus | undefined;
	public readonly description?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly maximumCardsPerInstance?: number | undefined;
	public readonly selfLink?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface AcceleratorTypesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly maximumCardsPerInstance?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface AcceleratorTypesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface AcceleratorType {
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly maximumCardsPerInstance?: number | undefined;
	readonly name?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface DeprecationStatus {
	readonly deleted?: string | undefined;
	readonly deprecated?: string | undefined;
	readonly obsolete?: string | undefined;
	readonly replacement?: string | undefined;
	readonly state?: string | undefined;
	readonly stateOverride?: RolloutPolicy | undefined;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string | undefined;
	readonly locationRolloutPolicies?: { [P in string]: string } | undefined;
}
export default {
	AcceleratorTypes: AcceleratorTypes,
};
