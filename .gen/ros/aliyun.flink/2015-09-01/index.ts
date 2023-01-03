import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::Flink::Instance", options);
	}
	public readonly InstanceId: any;
	public readonly OrderId: any;
}
export interface InstanceComponentOutputs {
	readonly InstanceId: any;
	readonly OrderId: any;
}
export interface InstanceComponentInputs {
	readonly Bucket: string;
	readonly ChargeType: string;
	readonly InstanceName: string;
	readonly VpcId: string;
	readonly VSwitchIds: any[];
	readonly ZoneId: string;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly Duration?: (number | undefined) | undefined;
	readonly PricingCycle?: (string | undefined) | undefined;
	readonly PromotionCode?: (string | undefined) | undefined;
	readonly ResourceSpec?: (ResourceSpec | undefined) | undefined;
	readonly UsePromotionCode?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class Namespace extends RosResource<NamespaceComponentInputs> implements NamespaceComponentOutputs {
	constructor(entity: ADKEntity, options: NamespaceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::Flink::Namespace", options);
	}
}
export interface NamespaceComponentOutputs {}
export interface NamespaceComponentInputs {
	readonly InstanceId: any | string;
	readonly Namespace: any | string;
	readonly ResourceSpec?: (ResourceSpec | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ResourceSpec {
	readonly Cpu?: (number | undefined) | undefined;
	readonly MemoryGB?: (number | undefined) | undefined;
}
export default {
	Instance: Instance,
	Namespace: Namespace,
};
