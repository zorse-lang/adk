import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class quotaLimits extends ArmResource<quotaLimitsComponentInputs> implements quotaLimitsComponentOutputs {
	constructor(entity: ADKEntity, options: quotaLimitsComponentInputs) {
		super(entity, options.name, "Microsoft.Quota/quotaLimits", "2021-03-15", options);
	}
	public readonly apiVersion: "2021-03-15";
	public readonly id: string;
	public readonly type: "Microsoft.Quota/quotaLimits";
}
export interface quotaLimitsComponentOutputs {
	readonly apiVersion: "2021-03-15";
	readonly id: string;
	readonly type: "Microsoft.Quota/quotaLimits";
}
export interface quotaLimitsComponentInputs {
	readonly name: string;
	readonly properties?: QuotaProperties | undefined;
}
export interface QuotaProperties {
	readonly currentValue?: number | undefined;
	readonly isQuotaApplicable?: boolean | undefined;
	readonly limit?: number | undefined;
	readonly name?: ResourceName | undefined;
	readonly properties?: any | undefined;
	readonly quotaPeriod?: string | undefined;
	readonly resourceType?: ("dedicated" | "lowPriority" | "serviceSpecific" | "shared" | "standard") | undefined;
	readonly unit?: string | undefined;
}
export interface ResourceName {
	readonly localizedValue?: string | undefined;
	readonly value?: string | undefined;
}
export default {
	quotaLimits: quotaLimits,
};
