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
	readonly displayName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name: string;
	readonly type: string;
}
export interface Location {
	readonly displayName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name?: string | undefined;
}
export default {
	BillingAccountsLocations: BillingAccountsLocations,
};
