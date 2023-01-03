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
	ServicesConsumerQuotaMetricsLimitsAdminOverrides: ServicesConsumerQuotaMetricsLimitsAdminOverrides,
};
