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
	readonly displayName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name: string;
	readonly type: string;
}
export interface Location {
	readonly displayName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name?: string | undefined;
}
export default {
	FoldersLocations: FoldersLocations,
};
