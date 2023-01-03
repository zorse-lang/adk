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
	readonly AutoRenew?: (any | string) | undefined;
	readonly AutoRenewPeriod?: (any | number) | undefined;
	readonly HostName?: (any | string) | undefined;
	readonly InstanceName?: (any | string) | undefined;
	readonly InternetChargeType?: (any | string) | undefined;
	readonly IpType?: (any | string) | undefined;
	readonly KeyPairName?: (any | string) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly PaymentType?: (any | string) | undefined;
	readonly PrivateIpAddress?: (any | string) | undefined;
	readonly UniqueSuffix?: (any | boolean) | undefined;
	readonly UserData?: (any | string) | undefined;
	readonly VSwitchId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export default {
	Instance: Instance,
};
