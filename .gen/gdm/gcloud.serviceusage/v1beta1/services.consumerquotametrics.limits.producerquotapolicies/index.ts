import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConsumerQuotaMetricsLimitsProducerQuotaPolicies
	extends GdmResource<ServicesConsumerQuotaMetricsLimitsProducerQuotaPoliciesComponentInputs>
	implements ServicesConsumerQuotaMetricsLimitsProducerQuotaPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConsumerQuotaMetricsLimitsProducerQuotaPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"serviceusage.v1beta1.ServicesConsumerQuotaMetricsLimitsProducerQuotaPolicies",
			options,
		);
	}
}
export interface ServicesConsumerQuotaMetricsLimitsProducerQuotaPoliciesComponentOutputs {}
export interface ServicesConsumerQuotaMetricsLimitsProducerQuotaPoliciesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ServicesConsumerQuotaMetricsLimitsProducerQuotaPolicies: ServicesConsumerQuotaMetricsLimitsProducerQuotaPolicies,
};
