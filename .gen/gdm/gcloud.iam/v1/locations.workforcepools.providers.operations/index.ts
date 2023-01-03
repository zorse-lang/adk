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
	LocationsWorkforcePoolsProvidersOperations: LocationsWorkforcePoolsProvidersOperations,
};
