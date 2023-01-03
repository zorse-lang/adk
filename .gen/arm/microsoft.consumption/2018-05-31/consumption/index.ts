import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class pricesheets extends ArmResource<pricesheetsComponentInputs> implements pricesheetsComponentOutputs {
	constructor(entity: ADKEntity, options: pricesheetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/pricesheets", "2018-05-31", options);
	}
	public readonly apiVersion: "2018-05-31";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentOutputs {
	readonly apiVersion: "2018-05-31";
	readonly id: string;
	readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentInputs {
	readonly name: string;
	readonly properties?: PriceSheetModel | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface MeterDetails {
	readonly meterCategory?: string | undefined;
	readonly meterLocation?: string | undefined;
	readonly meterName?: string | undefined;
	readonly meterSubCategory?: string | undefined;
	readonly pretaxStandardRate?: number | undefined;
	readonly totalIncludedQuantity?: number | undefined;
	readonly unit?: string | undefined;
}
export interface PriceSheetModel {
	readonly nextLink?: string | undefined;
	readonly pricesheets?: PriceSheetProperties[] | undefined;
}
export interface PriceSheetProperties {
	readonly billingPeriodId?: string | undefined;
	readonly currencyCode?: string | undefined;
	readonly includedQuantity?: number | undefined;
	readonly meterDetails?: MeterDetails | undefined;
	readonly meterId?: string | undefined;
	readonly offerId?: string | undefined;
	readonly partNumber?: string | undefined;
	readonly unitOfMeasure?: string | undefined;
	readonly unitPrice?: number | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	pricesheets: pricesheets,
};
