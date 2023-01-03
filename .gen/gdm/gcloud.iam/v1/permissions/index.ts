import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Permissions extends GdmResource<PermissionsComponentInputs> implements PermissionsComponentOutputs {
	constructor(entity: ADKEntity, options: PermissionsComponentInputs) {
		super(entity, options.name, "iam.v1.Permissions", options);
	}
}
export interface PermissionsComponentOutputs {}
export interface PermissionsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Permissions: Permissions,
};
