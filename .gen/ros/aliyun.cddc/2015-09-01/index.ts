import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class DedicatedHost extends RosResource<DedicatedHostComponentInputs> implements DedicatedHostComponentOutputs {
	constructor(entity: ADKEntity, options: DedicatedHostComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CDDC::DedicatedHost", options);
	}
	public readonly DiskAllocationRatio: any;
	public readonly DedicatedHostId: any;
	public readonly MemAllocationRatio: any;
	public readonly HostStorage: any;
	public readonly StorageUsed: any;
	public readonly OpenPermission: any;
	public readonly HostType: any;
	public readonly HostCpu: any;
	public readonly VpcId: any;
	public readonly EcsClassCode: any;
	public readonly CpuAllocationRatio: any;
	public readonly HostMem: any;
	public readonly MemoryUsed: any;
	public readonly IpAddress: any;
	public readonly CpuUsed: any;
}
export interface DedicatedHostComponentOutputs {
	readonly DiskAllocationRatio: any;
	readonly DedicatedHostId: any;
	readonly MemAllocationRatio: any;
	readonly HostStorage: any;
	readonly StorageUsed: any;
	readonly OpenPermission: any;
	readonly HostType: any;
	readonly HostCpu: any;
	readonly VpcId: any;
	readonly EcsClassCode: any;
	readonly CpuAllocationRatio: any;
	readonly HostMem: any;
	readonly MemoryUsed: any;
	readonly IpAddress: any;
	readonly CpuUsed: any;
}
export interface DedicatedHostComponentInputs {
	readonly DedicatedHostGroupId: any | string;
	readonly HostClass: any | string;
	readonly PaymentType: any | string;
	readonly VSwitchId: any | string;
	readonly ZoneId: any | string;
	readonly AutoRenew?: (any | string) | undefined;
	readonly HostName?: (any | string) | undefined;
	readonly ImageCategory?: (any | string) | undefined;
	readonly OsPassword?: (string | undefined) | undefined;
	readonly Period?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly UsedTime?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DedicatedHostGroup
	extends RosResource<DedicatedHostGroupComponentInputs>
	implements DedicatedHostGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DedicatedHostGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CDDC::DedicatedHostGroup", options);
	}
	public readonly DeployType: any;
	public readonly DiskUsedAmount: any;
	public readonly InstanceNumber: any;
	public readonly DedicatedHostGroupId: any;
	public readonly BastionInstanceId: any;
	public readonly MemAllocatedAmount: any;
	public readonly MemAllocateRation: any;
	public readonly DiskAllocatedAmount: any;
	public readonly MemUtility: any;
	public readonly CpuAllocateRation: any;
	public readonly Text: any;
	public readonly MemUsedAmount: any;
	public readonly DiskUtility: any;
	public readonly DiskAllocateRation: any;
	public readonly HostNumber: any;
	public readonly CpuAllocatedAmount: any;
}
export interface DedicatedHostGroupComponentOutputs {
	readonly DeployType: any;
	readonly DiskUsedAmount: any;
	readonly InstanceNumber: any;
	readonly DedicatedHostGroupId: any;
	readonly BastionInstanceId: any;
	readonly MemAllocatedAmount: any;
	readonly MemAllocateRation: any;
	readonly DiskAllocatedAmount: any;
	readonly MemUtility: any;
	readonly CpuAllocateRation: any;
	readonly Text: any;
	readonly MemUsedAmount: any;
	readonly DiskUtility: any;
	readonly DiskAllocateRation: any;
	readonly HostNumber: any;
	readonly CpuAllocatedAmount: any;
}
export interface DedicatedHostGroupComponentInputs {
	readonly Engine: any | string;
	readonly VpcId: any | string;
	readonly AllocationPolicy?: (any | string) | undefined;
	readonly CpuAllocationRatio?: (any | number) | undefined;
	readonly DedicatedHostGroupDesc?: (any | string) | undefined;
	readonly DiskAllocationRatio?: (any | number) | undefined;
	readonly HostReplacePolicy?: (any | string) | undefined;
	readonly MemAllocationRatio?: (any | number) | undefined;
	readonly OpenPermission?: (any | string) | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly TagKey?: (string | undefined) | undefined;
	readonly TagValue?: (string | undefined) | undefined;
}
export default {
	DedicatedHost: DedicatedHost,
	DedicatedHostGroup: DedicatedHostGroup,
};
