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
	readonly accessId?: string;
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly projectId?: string;
	readonly selfLink?: string;
	readonly serviceAccountEmail?: string;
	readonly state?: string;
	readonly timeCreated?: string;
	readonly updated?: string;
	readonly userProject?: string;
	readonly name: string;
}
export interface HmacKeyMetadata {
	readonly accessId?: string;
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly projectId?: string;
	readonly selfLink?: string;
	readonly serviceAccountEmail?: string;
	readonly state?: string;
	readonly timeCreated?: string;
	readonly updated?: string;
}
export default {
	ProjectsHmacKeys: ProjectsHmacKeys,
};
