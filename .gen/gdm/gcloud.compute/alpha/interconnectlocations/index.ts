import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InterconnectLocations
	extends GdmResource<InterconnectLocationsComponentInputs>
	implements InterconnectLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: InterconnectLocationsComponentInputs) {
		super(entity, options.name, "compute.alpha.InterconnectLocations", options);
	}
	public readonly address?: string | undefined;
	public readonly availabilityZone?: string | undefined;
	public readonly city?: string | undefined;
	public readonly continent?: string | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly description?: string | undefined;
	public readonly facilityProvider?: string | undefined;
	public readonly facilityProviderFacilityId?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly peeringdbFacilityId?: string | undefined;
	public readonly regionInfos?: InterconnectLocationRegionInfo[] | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly status?: string | undefined;
	public readonly supportsPzs?: boolean | undefined;
}
export interface InterconnectLocationsComponentOutputs {
	readonly address?: string | undefined;
	readonly availabilityZone?: string | undefined;
	readonly city?: string | undefined;
	readonly continent?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly facilityProvider?: string | undefined;
	readonly facilityProviderFacilityId?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly peeringdbFacilityId?: string | undefined;
	readonly regionInfos?: InterconnectLocationRegionInfo[] | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: string | undefined;
	readonly supportsPzs?: boolean | undefined;
}
export interface InterconnectLocationsComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface InterconnectLocation {
	readonly address?: string | undefined;
	readonly availabilityZone?: string | undefined;
	readonly city?: string | undefined;
	readonly continent?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly facilityProvider?: string | undefined;
	readonly facilityProviderFacilityId?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly peeringdbFacilityId?: string | undefined;
	readonly regionInfos?: InterconnectLocationRegionInfo[] | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: string | undefined;
	readonly supportsPzs?: boolean | undefined;
}
export interface InterconnectLocationRegionInfo {
	readonly expectedRttMs?: string | undefined;
	readonly locationPresence?: string | undefined;
	readonly region?: string | undefined;
}
export default {
	InterconnectLocations: InterconnectLocations,
};
