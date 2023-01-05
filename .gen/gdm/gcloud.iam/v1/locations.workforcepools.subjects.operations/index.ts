import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsWorkforcePoolsSubjectsOperations
	extends GdmResource<LocationsWorkforcePoolsSubjectsOperationsComponentInputs>
	implements LocationsWorkforcePoolsSubjectsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsWorkforcePoolsSubjectsOperationsComponentInputs) {
		super(entity, options.name, "iam.v1.LocationsWorkforcePoolsSubjectsOperations", options);
	}
}
export interface LocationsWorkforcePoolsSubjectsOperationsComponentOutputs {}
export interface LocationsWorkforcePoolsSubjectsOperationsComponentInputs {
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
	LocationsWorkforcePoolsSubjectsOperations: LocationsWorkforcePoolsSubjectsOperations,
};
