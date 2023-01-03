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
	readonly allowsAdminOverrides?: boolean | undefined;
	readonly allowsQuotaIncreaseRequest?: boolean | undefined;
	readonly isConcurrent?: boolean | undefined;
	readonly isPrecise?: boolean | undefined;
	readonly metric?: string | undefined;
	readonly name: string;
	readonly quotaBuckets?: QuotaBucket[] | undefined;
	readonly supportedLocations?: string[] | undefined;
	readonly unit?: string | undefined;
	readonly type: string;
}
export interface AdminQuotaPolicy {
	readonly container?: string | undefined;
	readonly dimensions?: { [P in string]: string } | undefined;
	readonly metric?: string | undefined;
	readonly name?: string | undefined;
	readonly policyValue?: string | undefined;
	readonly unit?: string | undefined;
}
export interface ConsumerQuotaLimit {
	readonly allowsAdminOverrides?: boolean | undefined;
	readonly allowsQuotaIncreaseRequest?: boolean | undefined;
	readonly isConcurrent?: boolean | undefined;
	readonly isPrecise?: boolean | undefined;
	readonly metric?: string | undefined;
	readonly name?: string | undefined;
	readonly quotaBuckets?: QuotaBucket[] | undefined;
	readonly supportedLocations?: string[] | undefined;
	readonly unit?: string | undefined;
}
export interface ProducerQuotaPolicy {
	readonly container?: string | undefined;
	readonly dimensions?: { [P in string]: string } | undefined;
	readonly metric?: string | undefined;
	readonly name?: string | undefined;
	readonly policyValue?: string | undefined;
	readonly unit?: string | undefined;
}
export interface QuotaBucket {
	readonly adminOverride?: QuotaOverride | undefined;
	readonly adminQuotaPolicy?: AdminQuotaPolicy | undefined;
	readonly consumerOverride?: QuotaOverride | undefined;
	readonly defaultLimit?: string | undefined;
	readonly dimensions?: { [P in string]: string } | undefined;
	readonly effectiveLimit?: string | undefined;
	readonly maxAdminOverride?: string | undefined;
	readonly producerOverride?: QuotaOverride | undefined;
	readonly producerQuotaPolicy?: ProducerQuotaPolicy | undefined;
}
export interface QuotaOverride {
	readonly adminOverrideAncestor?: string | undefined;
	readonly dimensions?: { [P in string]: string } | undefined;
	readonly metric?: string | undefined;
	readonly name?: string | undefined;
	readonly overrideValue?: string | undefined;
	readonly unit?: string | undefined;
}
export default {
	ServicesConsumerQuotaMetricsLimits: ServicesConsumerQuotaMetricsLimits,
};
