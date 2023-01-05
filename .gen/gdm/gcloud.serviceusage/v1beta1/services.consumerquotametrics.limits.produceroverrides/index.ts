import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConsumerQuotaMetricsLimitsProducerOverrides
	extends GdmResource<ServicesConsumerQuotaMetricsLimitsProducerOverridesComponentInputs>
	implements ServicesConsumerQuotaMetricsLimitsProducerOverridesComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConsumerQuotaMetricsLimitsProducerOverridesComponentInputs) {
		super(entity, options.name, "serviceusage.v1beta1.ServicesConsumerQuotaMetricsLimitsProducerOverrides", options);
	}
}
export interface ServicesConsumerQuotaMetricsLimitsProducerOverridesComponentOutputs {}
export interface ServicesConsumerQuotaMetricsLimitsProducerOverridesComponentInputs {
	readonly name: string;
}
export default {
	ServicesConsumerQuotaMetricsLimitsProducerOverrides: ServicesConsumerQuotaMetricsLimitsProducerOverrides,
};
