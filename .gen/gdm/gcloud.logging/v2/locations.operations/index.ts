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
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name: string;
	readonly response?: { [P in string]: any } | undefined;
	readonly type: string;
}
export interface Operation {
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name?: string | undefined;
	readonly response?: { [P in string]: any } | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	LocationsOperations: LocationsOperations,
};
