import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsLocationsOperations
	extends GdmResource<BillingAccountsLocationsOperationsComponentInputs>
	implements BillingAccountsLocationsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsLocationsOperationsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsLocationsOperations", options);
	}
}
export interface BillingAccountsLocationsOperationsComponentOutputs {}
export interface BillingAccountsLocationsOperationsComponentInputs {
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name: string;
	readonly response?: { [P in string]: any };
}
export interface Operation {
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
	readonly response?: { [P in string]: any };
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	BillingAccountsLocationsOperations: BillingAccountsLocationsOperations,
};
