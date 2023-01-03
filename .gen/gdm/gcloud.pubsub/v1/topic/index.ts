import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Topic extends GdmResource<TopicComponentInputs> implements TopicComponentOutputs {
	constructor(entity: ADKEntity, options: TopicComponentInputs) {
		super(entity, options.name, "pubsub.v1.topic", options);
	}
}
export interface TopicComponentOutputs {}
export interface TopicComponentInputs {
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
export default {
	Topic: Topic,
};
