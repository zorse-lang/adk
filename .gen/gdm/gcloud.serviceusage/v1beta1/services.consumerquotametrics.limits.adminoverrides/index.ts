import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConsumerQuotaMetricsLimitsAdminOverrides
	extends GdmResource<ServicesConsumerQuotaMetricsLimitsAdminOverridesComponentInputs>
	implements ServicesConsumerQuotaMetricsLimitsAdminOverridesComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConsumerQuotaMetricsLimitsAdminOverridesComponentInputs) {
		super(entity, options.name, "serviceusage.v1beta1.ServicesConsumerQuotaMetricsLimitsAdminOverrides", options);
	}
}
export interface ServicesConsumerQuotaMetricsLimitsAdminOverridesComponentOutputs {}
export interface ServicesConsumerQuotaMetricsLimitsAdminOverridesComponentInputs {
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
	ServicesConsumerQuotaMetricsLimitsAdminOverrides: ServicesConsumerQuotaMetricsLimitsAdminOverrides,
};
