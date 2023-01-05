import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConsumerQuotaMetricsLimits
	extends GdmResource<ServicesConsumerQuotaMetricsLimitsComponentInputs>
	implements ServicesConsumerQuotaMetricsLimitsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConsumerQuotaMetricsLimitsComponentInputs) {
		super(entity, options.name, "serviceusage.v1beta1.ServicesConsumerQuotaMetricsLimits", options);
	}
}
export interface ServicesConsumerQuotaMetricsLimitsComponentOutputs {}
export interface ServicesConsumerQuotaMetricsLimitsComponentInputs {
	readonly allowsAdminOverrides?: boolean;
	readonly allowsQuotaIncreaseRequest?: boolean;
	readonly isConcurrent?: boolean;
	readonly isPrecise?: boolean;
	readonly metric?: string;
	readonly name: string;
	readonly quotaBuckets?: QuotaBucket[];
	readonly supportedLocations?: string[];
	readonly unit?: string;
}
export interface AdminQuotaPolicy {
	readonly container?: string;
	readonly dimensions?: { [P in string]: string };
	readonly metric?: string;
	readonly name?: string;
	readonly policyValue?: string;
	readonly unit?: string;
}
export interface ConsumerQuotaLimit {
	readonly allowsAdminOverrides?: boolean;
	readonly allowsQuotaIncreaseRequest?: boolean;
	readonly isConcurrent?: boolean;
	readonly isPrecise?: boolean;
	readonly metric?: string;
	readonly name?: string;
	readonly quotaBuckets?: QuotaBucket[];
	readonly supportedLocations?: string[];
	readonly unit?: string;
}
export interface ProducerQuotaPolicy {
	readonly container?: string;
	readonly dimensions?: { [P in string]: string };
	readonly metric?: string;
	readonly name?: string;
	readonly policyValue?: string;
	readonly unit?: string;
}
export interface QuotaBucket {
	readonly adminOverride?: QuotaOverride;
	readonly adminQuotaPolicy?: AdminQuotaPolicy;
	readonly consumerOverride?: QuotaOverride;
	readonly defaultLimit?: string;
	readonly dimensions?: { [P in string]: string };
	readonly effectiveLimit?: string;
	readonly maxAdminOverride?: string;
	readonly producerOverride?: QuotaOverride;
	readonly producerQuotaPolicy?: ProducerQuotaPolicy;
}
export interface QuotaOverride {
	readonly adminOverrideAncestor?: string;
	readonly dimensions?: { [P in string]: string };
	readonly metric?: string;
	readonly name?: string;
	readonly overrideValue?: string;
	readonly unit?: string;
}
export default {
	ServicesConsumerQuotaMetricsLimits: ServicesConsumerQuotaMetricsLimits,
};
