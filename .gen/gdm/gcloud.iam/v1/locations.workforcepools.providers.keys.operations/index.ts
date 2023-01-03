import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsWorkforcePoolsProvidersKeysOperations
	extends GdmResource<LocationsWorkforcePoolsProvidersKeysOperationsComponentInputs>
	implements LocationsWorkforcePoolsProvidersKeysOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsWorkforcePoolsProvidersKeysOperationsComponentInputs) {
		super(entity, options.name, "iam.v1.LocationsWorkforcePoolsProvidersKeysOperations", options);
	}
}
export interface LocationsWorkforcePoolsProvidersKeysOperationsComponentOutputs {}
export interface LocationsWorkforcePoolsProvidersKeysOperationsComponentInputs {
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
	LocationsWorkforcePoolsProvidersKeysOperations: LocationsWorkforcePoolsProvidersKeysOperations,
};
