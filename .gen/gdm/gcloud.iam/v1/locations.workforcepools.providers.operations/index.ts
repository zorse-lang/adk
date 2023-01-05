import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsWorkforcePoolsProvidersOperations
	extends GdmResource<LocationsWorkforcePoolsProvidersOperationsComponentInputs>
	implements LocationsWorkforcePoolsProvidersOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsWorkforcePoolsProvidersOperationsComponentInputs) {
		super(entity, options.name, "iam.v1.LocationsWorkforcePoolsProvidersOperations", options);
	}
}
export interface LocationsWorkforcePoolsProvidersOperationsComponentOutputs {}
export interface LocationsWorkforcePoolsProvidersOperationsComponentInputs {
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
	LocationsWorkforcePoolsProvidersOperations: LocationsWorkforcePoolsProvidersOperations,
};
