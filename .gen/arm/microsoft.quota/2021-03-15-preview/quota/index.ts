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
	readonly properties?: QuotaProperties | undefined;
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
	readonly properties?: UsagesProperties | undefined;
}
export interface LimitJsonObject {}
export interface QuotaProperties {
	readonly isQuotaApplicable?: boolean | undefined;
	readonly limit?: LimitJsonObject | undefined;
	readonly name?: ResourceName | undefined;
	readonly properties?: any | undefined;
	readonly quotaPeriod?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly unit?: string | undefined;
}
export interface ResourceName {
	readonly localizedValue?: string | undefined;
	readonly value?: string | undefined;
}
export interface UsagesObject {
	readonly usagesType?: ("Combined" | "Individual") | undefined;
	readonly value: number;
}
export interface UsagesProperties {
	readonly isQuotaApplicable?: boolean | undefined;
	readonly name?: ResourceName | undefined;
	readonly properties?: any | undefined;
	readonly quotaPeriod?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly unit?: string | undefined;
	readonly usages?: UsagesObject | undefined;
}
export default {
	quotas: quotas,
	usages: usages,
};
