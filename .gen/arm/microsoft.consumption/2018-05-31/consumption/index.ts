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
	readonly properties?: PriceSheetModel;
	readonly tags?: ResourceTags;
}
export interface MeterDetails {
	readonly meterCategory?: string;
	readonly meterLocation?: string;
	readonly meterName?: string;
	readonly meterSubCategory?: string;
	readonly pretaxStandardRate?: number;
	readonly totalIncludedQuantity?: number;
	readonly unit?: string;
}
export interface PriceSheetModel {
	readonly nextLink?: string;
	readonly pricesheets?: PriceSheetProperties[];
}
export interface PriceSheetProperties {
	readonly billingPeriodId?: string;
	readonly currencyCode?: string;
	readonly includedQuantity?: number;
	readonly meterDetails?: MeterDetails;
	readonly meterId?: string;
	readonly offerId?: string;
	readonly partNumber?: string;
	readonly unitOfMeasure?: string;
	readonly unitPrice?: number;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	pricesheets: pricesheets,
};
