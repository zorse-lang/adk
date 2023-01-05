import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsOperations
	extends GdmResource<LocationsOperationsComponentInputs>
	implements LocationsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsOperationsComponentInputs) {
		super(entity, options.name, "logging.v2.LocationsOperations", options);
	}
}
export interface LocationsOperationsComponentOutputs {}
export interface LocationsOperationsComponentInputs {
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
	LocationsOperations: LocationsOperations,
};
