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
	readonly adminOverrideAncestor?: string | undefined;
	readonly dimensions?: { [P in string]: string } | undefined;
	readonly force?: boolean | undefined;
	readonly forceOnly?: (string | string[]) | undefined;
	readonly metric?: string | undefined;
	readonly name: string;
	readonly overrideValue?: string | undefined;
	readonly parent: string;
	readonly unit?: string | undefined;
	readonly type: string;
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
	ServicesConsumerQuotaMetricsLimitsConsumerOverrides: ServicesConsumerQuotaMetricsLimitsConsumerOverrides,
};
