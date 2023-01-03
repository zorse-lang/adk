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
	readonly Amount?: (number | undefined) | undefined;
	readonly AutoPay?: (boolean | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EipBandwidth?: (number | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly Resolution?: (string | undefined) | undefined;
	readonly Tag?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VncPassword?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Tag {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	InstanceGroup: InstanceGroup,
};
