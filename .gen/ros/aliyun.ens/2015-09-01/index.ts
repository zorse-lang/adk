import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ENS::Instance", options);
	}
	public readonly InstanceId: any;
	public readonly PublicIps: any;
	public readonly PrivateIps: any;
}
export interface InstanceComponentOutputs {
	readonly InstanceId: any;
	readonly PublicIps: any;
	readonly PrivateIps: any;
}
export interface InstanceComponentInputs {
	readonly DataDiskSize: any | number;
	readonly EnsRegionId: any | string;
	readonly ImageId: any | string;
	readonly InstanceType: any | string;
	readonly Period: any | number;
	readonly Quantity: any | number;
	readonly SystemDiskSize: any | number;
	readonly AutoRenew?: any | string;
	readonly AutoRenewPeriod?: any | number;
	readonly HostName?: any | string;
	readonly InstanceName?: any | string;
	readonly InternetChargeType?: any | string;
	readonly IpType?: any | string;
	readonly KeyPairName?: any | string;
	readonly Password?: string | undefined;
	readonly PaymentType?: any | string;
	readonly PrivateIpAddress?: any | string;
	readonly UniqueSuffix?: any | boolean;
	readonly UserData?: any | string;
	readonly VSwitchId?: any | string;
	readonly LogicalId: string;
}
export default {
	Instance: Instance,
};
