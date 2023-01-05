import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsLocations
	extends GdmResource<BillingAccountsLocationsComponentInputs>
	implements BillingAccountsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsLocationsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsLocations", options);
	}
}
export interface BillingAccountsLocationsComponentOutputs {}
export interface BillingAccountsLocationsComponentInputs {
	readonly displayName?: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly metadata?: { [P in string]: any };
	readonly name: string;
}
export interface Location {
	readonly displayName?: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
}
export default {
	BillingAccountsLocations: BillingAccountsLocations,
};
