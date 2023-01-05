import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConsumerQuotaMetricsLimitsConsumerOverrides
	extends GdmResource<ServicesConsumerQuotaMetricsLimitsConsumerOverridesComponentInputs>
	implements ServicesConsumerQuotaMetricsLimitsConsumerOverridesComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConsumerQuotaMetricsLimitsConsumerOverridesComponentInputs) {
		super(entity, options.name, "serviceusage.v1beta1.ServicesConsumerQuotaMetricsLimitsConsumerOverrides", options);
	}
}
export interface ServicesConsumerQuotaMetricsLimitsConsumerOverridesComponentOutputs {}
export interface ServicesConsumerQuotaMetricsLimitsConsumerOverridesComponentInputs {
	readonly adminOverrideAncestor?: string;
	readonly dimensions?: { [P in string]: string };
	readonly force?: boolean;
	readonly forceOnly?: string | string[];
	readonly metric?: string;
	readonly name: string;
	readonly overrideValue?: string;
	readonly parent: string;
	readonly unit?: string;
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
	ServicesConsumerQuotaMetricsLimitsConsumerOverrides: ServicesConsumerQuotaMetricsLimitsConsumerOverrides,
};
