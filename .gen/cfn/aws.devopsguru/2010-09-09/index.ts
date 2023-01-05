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
	readonly Filters?: NotificationFilterConfig | undefined;
	readonly Sns?: SnsChannelConfig | undefined;
}
export interface NotificationFilterConfig {
	readonly MessageTypes?: string[] | undefined;
	readonly Severities?: string[] | undefined;
}
export interface SnsChannelConfig {
	readonly TopicArn?: string | undefined;
}
export interface CloudFormationCollectionFilter {
	readonly StackNames?: string[] | undefined;
}
export interface ResourceCollectionFilter {
	readonly CloudFormation?: CloudFormationCollectionFilter | undefined;
	readonly Tags?: TagCollection[] | undefined;
}
export interface TagCollection {
	readonly AppBoundaryKey?: string | undefined;
	readonly TagValues?: string[] | undefined;
}
export default {
	NotificationChannel: NotificationChannel,
	ResourceCollection: ResourceCollection,
};
