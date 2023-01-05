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
	readonly AutoRenew?: boolean | undefined;
	readonly Duration?: number | undefined;
	readonly PricingCycle?: string | undefined;
	readonly PromotionCode?: string | undefined;
	readonly ResourceSpec?: ResourceSpec | undefined;
	readonly UsePromotionCode?: boolean | undefined;
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
	readonly ResourceSpec?: ResourceSpec | undefined;
	readonly LogicalId: string;
}
export interface ResourceSpec {
	readonly Cpu?: number | undefined;
	readonly MemoryGB?: number | undefined;
}
export default {
	Instance: Instance,
	Namespace: Namespace,
};
