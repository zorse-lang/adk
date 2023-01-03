import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class NotificationChannel
	extends CfnResource<NotificationChannelComponentInputs>
	implements NotificationChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: NotificationChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::DevOpsGuru::NotificationChannel", options);
	}
	public readonly Id: string;
}
export interface NotificationChannelComponentOutputs {
	readonly Id: string;
}
export interface NotificationChannelComponentInputs {
	readonly Config: NotificationChannelConfig;
	readonly LogicalId: string;
}
export class ResourceCollection
	extends CfnResource<ResourceCollectionComponentInputs>
	implements ResourceCollectionComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceCollectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::DevOpsGuru::ResourceCollection", options);
	}
	public readonly ResourceCollectionType: string;
}
export interface ResourceCollectionComponentOutputs {
	readonly ResourceCollectionType: string;
}
export interface ResourceCollectionComponentInputs {
	readonly ResourceCollectionFilter: ResourceCollectionFilter;
	readonly LogicalId: string;
}
export interface NotificationChannelConfig {
	readonly Filters?: (NotificationFilterConfig | undefined) | undefined;
	readonly Sns?: (SnsChannelConfig | undefined) | undefined;
}
export interface NotificationFilterConfig {
	readonly MessageTypes?: (string[] | undefined) | undefined;
	readonly Severities?: (string[] | undefined) | undefined;
}
export interface SnsChannelConfig {
	readonly TopicArn?: (string | undefined) | undefined;
}
export interface CloudFormationCollectionFilter {
	readonly StackNames?: (string[] | undefined) | undefined;
}
export interface ResourceCollectionFilter {
	readonly CloudFormation?: (CloudFormationCollectionFilter | undefined) | undefined;
	readonly Tags?: (TagCollection[] | undefined) | undefined;
}
export interface TagCollection {
	readonly AppBoundaryKey?: (string | undefined) | undefined;
	readonly TagValues?: (string[] | undefined) | undefined;
}
export default {
	NotificationChannel: NotificationChannel,
	ResourceCollection: ResourceCollection,
};
