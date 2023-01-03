import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsHmacKeys
	extends GdmResource<ProjectsHmacKeysComponentInputs>
	implements ProjectsHmacKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsHmacKeysComponentInputs) {
		super(entity, options.name, "storage.v1.ProjectsHmacKeys", options);
	}
}
export interface ProjectsHmacKeysComponentOutputs {}
export interface ProjectsHmacKeysComponentInputs {
	readonly accessId?: string | undefined;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly projectId?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serviceAccountEmail?: string | undefined;
	readonly state?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly updated?: string | undefined;
	readonly userProject?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface HmacKeyMetadata {
	readonly accessId?: string | undefined;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly projectId?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serviceAccountEmail?: string | undefined;
	readonly state?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly updated?: string | undefined;
}
export default {
	ProjectsHmacKeys: ProjectsHmacKeys,
};
