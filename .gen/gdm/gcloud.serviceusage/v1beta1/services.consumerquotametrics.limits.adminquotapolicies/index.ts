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
	readonly container?: string;
	readonly dimensions?: { [P in string]: string };
	readonly force?: boolean;
	readonly metric?: string;
	readonly name: string;
	readonly parent: string;
	readonly policyValue?: string;
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
export default {
	ServicesConsumerQuotaMetricsLimitsAdminQuotaPolicies: ServicesConsumerQuotaMetricsLimitsAdminQuotaPolicies,
};
