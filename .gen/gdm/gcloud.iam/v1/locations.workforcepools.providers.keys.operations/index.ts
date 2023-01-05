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
	LocationsWorkforcePoolsProvidersKeysOperations: LocationsWorkforcePoolsProvidersKeysOperations,
};
