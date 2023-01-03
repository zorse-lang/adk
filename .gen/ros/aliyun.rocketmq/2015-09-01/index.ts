import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Group extends RosResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROCKETMQ::Group", options);
	}
}
export interface GroupComponentOutputs {}
export interface GroupComponentInputs {
	readonly GroupId: any | string;
	readonly InstanceId: any | string;
	readonly GroupType?: (any | string) | undefined;
	readonly Remark?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROCKETMQ::Instance", options);
	}
	public readonly HttpInternalEndpoint: any;
	public readonly InstanceId: any;
	public readonly TcpEndpoint: any;
	public readonly HttpInternetEndpoint: any;
	public readonly InstanceType: any;
	public readonly HttpInternetSecureEndpoint: any;
}
export interface InstanceComponentOutputs {
	readonly HttpInternalEndpoint: any;
	readonly InstanceId: any;
	readonly TcpEndpoint: any;
	readonly HttpInternetEndpoint: any;
	readonly InstanceType: any;
	readonly HttpInternetSecureEndpoint: any;
}
export interface InstanceComponentInputs {
	readonly InstanceName: any | string;
	readonly Remark?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Topic extends RosResource<TopicComponentInputs> implements TopicComponentOutputs {
	constructor(entity: ADKEntity, options: TopicComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROCKETMQ::Topic", options);
	}
}
export interface TopicComponentOutputs {}
export interface TopicComponentInputs {
	readonly InstanceId: any | string;
	readonly MessageType: any | number;
	readonly Topic: any | string;
	readonly Remark?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	Group: Group,
	Instance: Instance,
	Topic: Topic,
};
