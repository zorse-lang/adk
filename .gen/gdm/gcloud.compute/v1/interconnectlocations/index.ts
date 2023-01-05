import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InterconnectLocations
	extends GdmResource<InterconnectLocationsComponentInputs>
	implements InterconnectLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: InterconnectLocationsComponentInputs) {
		super(entity, options.name, "compute.v1.InterconnectLocations", options);
	}
	public readonly address?: string;
	public readonly availabilityZone?: string;
	public readonly city?: string;
	public readonly continent?: string;
	public readonly creationTimestamp?: string;
	public readonly description?: string;
	public readonly facilityProvider?: string;
	public readonly facilityProviderFacilityId?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly peeringdbFacilityId?: string;
	public readonly regionInfos?: InterconnectLocationRegionInfo[];
	public readonly selfLink?: string;
	public readonly status?: string;
	public readonly supportsPzs?: boolean;
}
export interface InterconnectLocationsComponentOutputs {
	readonly address?: string;
	readonly availabilityZone?: string;
	readonly city?: string;
	readonly continent?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly facilityProvider?: string;
	readonly facilityProviderFacilityId?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly peeringdbFacilityId?: string;
	readonly regionInfos?: InterconnectLocationRegionInfo[];
	readonly selfLink?: string;
	readonly status?: string;
	readonly supportsPzs?: boolean;
}
export interface InterconnectLocationsComponentInputs {
	readonly name: string;
}
export interface InterconnectLocation {
	readonly address?: string;
	readonly availabilityZone?: string;
	readonly city?: string;
	readonly continent?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly facilityProvider?: string;
	readonly facilityProviderFacilityId?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly peeringdbFacilityId?: string;
	readonly regionInfos?: InterconnectLocationRegionInfo[];
	readonly selfLink?: string;
	readonly status?: string;
	readonly supportsPzs?: boolean;
}
export interface InterconnectLocationRegionInfo {
	readonly expectedRttMs?: string;
	readonly locationPresence?: string;
	readonly region?: string;
}
export default {
	InterconnectLocations: InterconnectLocations,
};
