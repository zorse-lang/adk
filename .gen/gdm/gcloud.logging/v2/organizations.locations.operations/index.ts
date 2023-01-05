import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLocationsOperations
	extends GdmResource<OrganizationsLocationsOperationsComponentInputs>
	implements OrganizationsLocationsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLocationsOperationsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLocationsOperations", options);
	}
}
export interface OrganizationsLocationsOperationsComponentOutputs {}
export interface OrganizationsLocationsOperationsComponentInputs {
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
	OrganizationsLocationsOperations: OrganizationsLocationsOperations,
};
