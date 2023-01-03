import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConsumerQuotaMetricsLimitsAdminQuotaPolicies
	extends GdmResource<ServicesConsumerQuotaMetricsLimitsAdminQuotaPoliciesComponentInputs>
	implements ServicesConsumerQuotaMetricsLimitsAdminQuotaPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConsumerQuotaMetricsLimitsAdminQuotaPoliciesComponentInputs) {
		super(entity, options.name, "serviceusage.v1beta1.ServicesConsumerQuotaMetricsLimitsAdminQuotaPolicies", options);
	}
}
export interface ServicesConsumerQuotaMetricsLimitsAdminQuotaPoliciesComponentOutputs {}
export interface ServicesConsumerQuotaMetricsLimitsAdminQuotaPoliciesComponentInputs {
	readonly container?: string | undefined;
	readonly dimensions?: { [P in string]: string } | undefined;
	readonly force?: boolean | undefined;
	readonly metric?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly policyValue?: string | undefined;
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
export default {
	ServicesConsumerQuotaMetricsLimitsAdminQuotaPolicies: ServicesConsumerQuotaMetricsLimitsAdminQuotaPolicies,
};
