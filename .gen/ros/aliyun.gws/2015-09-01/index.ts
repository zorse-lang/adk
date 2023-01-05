import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends RosResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GWS::Cluster", options);
	}
	public readonly ClusterId: any;
}
export interface ClusterComponentOutputs {
	readonly ClusterId: any;
}
export interface ClusterComponentInputs {
	readonly ClusterType: string;
	readonly VpcId: string;
	readonly Name?: any | string;
	readonly Policy?: Policy | undefined;
	readonly VSwitchId?: string | undefined;
	readonly LogicalId: string;
}
export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GWS::Instance", options);
	}
	public readonly MaxBandwidthOut: any;
	public readonly MaxBandwidthIn: any;
	public readonly InstanceId: any;
}
export interface InstanceComponentOutputs {
	readonly MaxBandwidthOut: any;
	readonly MaxBandwidthIn: any;
	readonly InstanceId: any;
}
export interface InstanceComponentInputs {
	readonly ClusterId: any | string;
	readonly ImageId: string;
	readonly InstanceType: string;
	readonly SystemDiskCategory: string;
	readonly SystemDiskSize: number;
	readonly WorkMode: string;
	readonly AllocatePublicAddress?: boolean | undefined;
	readonly AppList?: AppList[] | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly InstanceChargeType?: any | string;
	readonly InternetChargeType?: string | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly Name?: any | string;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly LogicalId: string;
}
export interface Policy {
	readonly LocalDrive: string;
	readonly UsbRedirect: string;
	readonly Clipboard: string;
	readonly Watermark: string;
}
export interface AppList {
	readonly AppArgs?: string | undefined;
	readonly AppPath?: string | undefined;
	readonly AppName?: string | undefined;
}
export default {
	Cluster: Cluster,
	Instance: Instance,
};
