import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class quotas extends ArmResource<quotasComponentInputs> implements quotasComponentOutputs {
	constructor(entity: ADKEntity, options: quotasComponentInputs) {
		super(entity, options.name, "Microsoft.Quota/quotas", "2021-03-15-preview", options);
	}
	public readonly apiVersion: "2021-03-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Quota/quotas";
}
export interface quotasComponentOutputs {
	readonly apiVersion: "2021-03-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Quota/quotas";
}
export interface quotasComponentInputs {
	readonly name: string;
	readonly properties?: QuotaProperties;
}
export class usages extends ArmResource<usagesComponentInputs> implements usagesComponentOutputs {
	constructor(entity: ADKEntity, options: usagesComponentInputs) {
		super(entity, options.name, "Microsoft.Quota/usages", "2021-03-15-preview", options);
	}
	public readonly apiVersion: "2021-03-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Quota/usages";
}
export interface usagesComponentOutputs {
	readonly apiVersion: "2021-03-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Quota/usages";
}
export interface usagesComponentInputs {
	readonly name: string;
	readonly properties?: UsagesProperties;
}
export interface LimitJsonObject {}
export interface QuotaProperties {
	readonly isQuotaApplicable?: boolean;
	readonly limit?: LimitJsonObject;
	readonly name?: ResourceName;
	readonly properties?: any;
	readonly quotaPeriod?: string;
	readonly resourceType?: string;
	readonly unit?: string;
}
export interface ResourceName {
	readonly localizedValue?: string;
	readonly value?: string;
}
export interface UsagesObject {
	readonly usagesType?: "Combined" | "Individual";
	readonly value: number;
}
export interface UsagesProperties {
	readonly isQuotaApplicable?: boolean;
	readonly name?: ResourceName;
	readonly properties?: any;
	readonly quotaPeriod?: string;
	readonly resourceType?: string;
	readonly unit?: string;
	readonly usages?: UsagesObject;
}
export default {
	quotas: quotas,
	usages: usages,
};
