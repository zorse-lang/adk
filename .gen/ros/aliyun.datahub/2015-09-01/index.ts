import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Project extends RosResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DATAHUB::Project", options);
	}
}
export interface ProjectComponentOutputs {}
export interface ProjectComponentInputs {
	readonly Comment: string;
	readonly ProjectName: any | string;
	readonly LogicalId: string;
}
export class Topic extends RosResource<TopicComponentInputs> implements TopicComponentOutputs {
	constructor(entity: ADKEntity, options: TopicComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DATAHUB::Topic", options);
	}
}
export interface TopicComponentOutputs {}
export interface TopicComponentInputs {
	readonly Comment: string;
	readonly ProjectName: any | string;
	readonly RecordType: string;
	readonly TopicName: any | string;
	readonly Lifecycle?: number | undefined;
	readonly RecordSchema?: string | undefined;
	readonly ShardCount?: number | undefined;
	readonly LogicalId: string;
}
export default {
	Project: Project,
	Topic: Topic,
};
