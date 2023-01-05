import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsTopics extends GdmResource<ProjectsTopicsComponentInputs> implements ProjectsTopicsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsTopicsComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsTopics", options);
	}
}
export interface ProjectsTopicsComponentOutputs {}
export interface ProjectsTopicsComponentInputs {
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly messageRetentionDuration?: string;
	readonly messageStoragePolicy?: MessageStoragePolicy;
	readonly name: string;
	readonly satisfiesPzs?: boolean;
	readonly schemaSettings?: SchemaSettings;
}
export interface MessageStoragePolicy {
	readonly allowedPersistenceRegions?: string[];
}
export interface SchemaSettings {
	readonly encoding?: string;
	readonly firstRevisionId?: string;
	readonly lastRevisionId?: string;
	readonly schema: string;
}
export interface Topic {
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly messageRetentionDuration?: string;
	readonly messageStoragePolicy?: MessageStoragePolicy;
	readonly name: string;
	readonly satisfiesPzs?: boolean;
	readonly schemaSettings?: SchemaSettings;
}
export default {
	ProjectsTopics: ProjectsTopics,
};
