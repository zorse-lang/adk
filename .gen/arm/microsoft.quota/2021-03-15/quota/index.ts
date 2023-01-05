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
	readonly properties?: QuotaProperties;
}
export interface QuotaProperties {
	readonly currentValue?: number;
	readonly isQuotaApplicable?: boolean;
	readonly limit?: number;
	readonly name?: ResourceName;
	readonly properties?: any;
	readonly quotaPeriod?: string;
	readonly resourceType?: "dedicated" | "lowPriority" | "serviceSpecific" | "shared" | "standard";
	readonly unit?: string;
}
export interface ResourceName {
	readonly localizedValue?: string;
	readonly value?: string;
}
export default {
	quotaLimits: quotaLimits,
};
