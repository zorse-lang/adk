import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLocations
	extends GdmResource<FoldersLocationsComponentInputs>
	implements FoldersLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersLocationsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLocations", options);
	}
}
export interface FoldersLocationsComponentOutputs {}
export interface FoldersLocationsComponentInputs {
	readonly displayName?: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly metadata?: { [P in string]: any };
	readonly name: string;
}
export interface Location {
	readonly displayName?: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
}
export default {
	FoldersLocations: FoldersLocations,
};
