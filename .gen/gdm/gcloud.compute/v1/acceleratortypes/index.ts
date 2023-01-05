import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AcceleratorTypes
	extends GdmResource<AcceleratorTypesComponentInputs>
	implements AcceleratorTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: AcceleratorTypesComponentInputs) {
		super(entity, options.name, "compute.v1.AcceleratorTypes", options);
	}
	public readonly creationTimestamp?: string;
	public readonly deprecated?: DeprecationStatus;
	public readonly description?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly maximumCardsPerInstance?: number;
	public readonly selfLink?: string;
	public readonly zone?: string;
}
export interface AcceleratorTypesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly maximumCardsPerInstance?: number;
	readonly selfLink?: string;
	readonly zone?: string;
}
export interface AcceleratorTypesComponentInputs {
	readonly name: string;
}
export interface AcceleratorType {
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly maximumCardsPerInstance?: number;
	readonly name?: string;
	readonly selfLink?: string;
	readonly zone?: string;
}
export interface DeprecationStatus {
	readonly deleted?: string;
	readonly deprecated?: string;
	readonly obsolete?: string;
	readonly replacement?: string;
	readonly state?: string;
}
export default {
	AcceleratorTypes: AcceleratorTypes,
};
