import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsWorkforcePoolsOperations
	extends GdmResource<LocationsWorkforcePoolsOperationsComponentInputs>
	implements LocationsWorkforcePoolsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsWorkforcePoolsOperationsComponentInputs) {
		super(entity, options.name, "iam.v1.LocationsWorkforcePoolsOperations", options);
	}
}
export interface LocationsWorkforcePoolsOperationsComponentOutputs {}
export interface LocationsWorkforcePoolsOperationsComponentInputs {
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
	LocationsWorkforcePoolsOperations: LocationsWorkforcePoolsOperations,
};
