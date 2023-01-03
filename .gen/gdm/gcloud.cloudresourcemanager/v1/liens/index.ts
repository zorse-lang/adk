import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Liens extends GdmResource<LiensComponentInputs> implements LiensComponentOutputs {
	constructor(entity: ADKEntity, options: LiensComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Liens", options);
	}
}
export interface LiensComponentOutputs {}
export interface LiensComponentInputs {
	readonly createTime?: string | undefined;
	readonly name: string;
	readonly origin?: string | undefined;
	readonly parent?: string | undefined;
	readonly reason?: string | undefined;
	readonly restrictions?: string[] | undefined;
	readonly type: string;
}
export interface Lien {
	readonly createTime?: string | undefined;
	readonly name?: string | undefined;
	readonly origin?: string | undefined;
	readonly parent?: string | undefined;
	readonly reason?: string | undefined;
	readonly restrictions?: string[] | undefined;
}
export default {
	Liens: Liens,
};
