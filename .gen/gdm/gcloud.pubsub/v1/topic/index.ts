import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Topic extends GdmResource<TopicComponentInputs> implements TopicComponentOutputs {
	constructor(entity: ADKEntity, options: TopicComponentInputs) {
		super(entity, options.name, "pubsub.v1.topic", options);
	}
}
export interface TopicComponentOutputs {}
export interface TopicComponentInputs {
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
export default {
	Topic: Topic,
};
