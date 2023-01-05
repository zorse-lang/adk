import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroup extends RosResource<InstanceGroupComponentInputs> implements InstanceGroupComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CloudPhone::InstanceGroup", options);
	}
	public readonly OrderId: any;
	public readonly InstanceIds: any;
	public readonly TradePrice: any;
}
export interface InstanceGroupComponentOutputs {
	readonly OrderId: any;
	readonly InstanceIds: any;
	readonly TradePrice: any;
}
export interface InstanceGroupComponentInputs {
	readonly ImageId: string;
	readonly InstanceType: string;
	readonly SecurityGroupId: string;
	readonly VSwitchId: string;
	readonly Amount?: number | undefined;
	readonly AutoPay?: boolean | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly ChargeType?: string | undefined;
	readonly Description?: string | undefined;
	readonly EipBandwidth?: number | undefined;
	readonly InstanceName?: string | undefined;
	readonly KeyPairName?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly Resolution?: string | undefined;
	readonly Tag?: { key: string; value: string }[] | undefined;
	readonly VncPassword?: string | undefined;
	readonly LogicalId: string;
}
export interface Tag {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	InstanceGroup: InstanceGroup,
};
