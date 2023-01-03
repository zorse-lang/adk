import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsTopics extends GdmResource<ProjectsTopicsComponentInputs> implements ProjectsTopicsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsTopicsComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsTopics", options);
	}
}
export interface ProjectsTopicsComponentOutputs {}
export interface ProjectsTopicsComponentInputs {
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly messageRetentionDuration?: string | undefined;
	readonly messageStoragePolicy?: MessageStoragePolicy | undefined;
	readonly name: string;
	readonly satisfiesPzs?: boolean | undefined;
	readonly schemaSettings?: SchemaSettings | undefined;
	readonly type: string;
}
export interface MessageStoragePolicy {
	readonly allowedPersistenceRegions?: string[] | undefined;
}
export interface SchemaSettings {
	readonly encoding?: string | undefined;
	readonly firstRevisionId?: string | undefined;
	readonly lastRevisionId?: string | undefined;
	readonly schema: string;
}
export interface Topic {
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly messageRetentionDuration?: string | undefined;
	readonly messageStoragePolicy?: MessageStoragePolicy | undefined;
	readonly name: string;
	readonly satisfiesPzs?: boolean | undefined;
	readonly schemaSettings?: SchemaSettings | undefined;
}
export default {
	ProjectsTopics: ProjectsTopics,
};
