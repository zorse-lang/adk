import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Device extends RosResource<DeviceComponentInputs> implements DeviceComponentOutputs {
	constructor(entity: ADKEntity, options: DeviceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::IOT::Device", options);
	}
	public readonly IotId: any;
	public readonly ProductName: any;
	public readonly DeviceSecret: any;
	public readonly NodeType: any;
	public readonly IpAddress: any;
	public readonly NickName: any;
}
export interface DeviceComponentOutputs {
	readonly IotId: any;
	readonly ProductName: any;
	readonly DeviceSecret: any;
	readonly NodeType: any;
	readonly IpAddress: any;
	readonly NickName: any;
}
export interface DeviceComponentInputs {
	readonly ProductKey: any | string;
	readonly DevEui?: string | undefined;
	readonly DeviceName?: any | string;
	readonly IotInstanceId?: any | string;
	readonly Nickname?: string | undefined;
	readonly PinCode?: string | undefined;
	readonly LogicalId: string;
}
export class DeviceGroup extends RosResource<DeviceGroupComponentInputs> implements DeviceGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DeviceGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::IOT::DeviceGroup", options);
	}
	public readonly GroupId: any;
}
export interface DeviceGroupComponentOutputs {
	readonly GroupId: any;
}
export interface DeviceGroupComponentInputs {
	readonly GroupName: string;
	readonly GroupDesc?: string | undefined;
	readonly IotInstanceId?: any | string;
	readonly SuperGroupId?: string | undefined;
	readonly LogicalId: string;
}
export class Product extends RosResource<ProductComponentInputs> implements ProductComponentOutputs {
	constructor(entity: ADKEntity, options: ProductComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::IOT::Product", options);
	}
	public readonly ProductKey: any;
}
export interface ProductComponentOutputs {
	readonly ProductKey: any;
}
export interface ProductComponentInputs {
	readonly NodeType: number;
	readonly ProductName: string;
	readonly AliyunCommodityCode?: string | undefined;
	readonly AuthType?: string | undefined;
	readonly CategoryKey?: string | undefined;
	readonly DataFormat?: number | undefined;
	readonly Description?: string | undefined;
	readonly Id2?: boolean | undefined;
	readonly IotInstanceId?: any | string;
	readonly JoinPermissionId?: string | undefined;
	readonly NetType?: string | undefined;
	readonly ProtocolType?: string | undefined;
	readonly PublishAuto?: boolean | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly LogicalId: string;
}
export class ProductTopic extends RosResource<ProductTopicComponentInputs> implements ProductTopicComponentOutputs {
	constructor(entity: ADKEntity, options: ProductTopicComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::IOT::ProductTopic", options);
	}
	public readonly TopicId: any;
}
export interface ProductTopicComponentOutputs {
	readonly TopicId: any;
}
export interface ProductTopicComponentInputs {
	readonly Operation: string;
	readonly ProductKey: string;
	readonly TopicShortName: string;
	readonly Desc?: string | undefined;
	readonly IotInstanceId?: string | undefined;
	readonly LogicalId: string;
}
export class Rule extends RosResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::IOT::Rule", options);
	}
	public readonly ActionId: any;
	public readonly RuleId: any;
}
export interface RuleComponentOutputs {
	readonly ActionId: any;
	readonly RuleId: any;
}
export interface RuleComponentInputs {
	readonly Name: string;
	readonly DataType?: string | undefined;
	readonly IotInstanceId?: string | undefined;
	readonly ProductKey?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly RuleAction?: RuleAction[] | undefined;
	readonly RuleDesc?: string | undefined;
	readonly Select?: string | undefined;
	readonly ShortTopic?: string | undefined;
	readonly StartRule?: boolean | undefined;
	readonly TopicType?: number | undefined;
	readonly Where?: string | undefined;
	readonly LogicalId: string;
}
export class RuleAction extends RosResource<RuleActionComponentInputs> implements RuleActionComponentOutputs {
	constructor(entity: ADKEntity, options: RuleActionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::IOT::RuleAction", options);
	}
	public readonly ActionId: any;
}
export interface RuleActionComponentOutputs {
	readonly ActionId: any;
}
export interface RuleActionComponentInputs {
	readonly Configuration: string;
	readonly RuleId: number;
	readonly Type: string;
	readonly ErrorActionFlag?: boolean | undefined;
	readonly IotInstanceId?: string | undefined;
	readonly LogicalId: string;
}
export interface RuleAction {
	readonly ErrorActionFlag?: string | undefined;
	readonly Type: string;
	readonly Configuration: string;
}
export default {
	Device: Device,
	DeviceGroup: DeviceGroup,
	Product: Product,
	ProductTopic: ProductTopic,
	Rule: Rule,
	RuleAction: RuleAction,
};
