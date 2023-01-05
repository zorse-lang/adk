import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Liens extends GdmResource<LiensComponentInputs> implements LiensComponentOutputs {
	constructor(entity: ADKEntity, options: LiensComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Liens", options);
	}
}
export interface LiensComponentOutputs {}
export interface LiensComponentInputs {
	readonly createTime?: string;
	readonly name: string;
	readonly origin?: string;
	readonly parent?: string;
	readonly reason?: string;
	readonly restrictions?: string[];
}
export interface Lien {
	readonly createTime?: string;
	readonly name?: string;
	readonly origin?: string;
	readonly parent?: string;
	readonly reason?: string;
	readonly restrictions?: string[];
}
export default {
	Liens: Liens,
};
