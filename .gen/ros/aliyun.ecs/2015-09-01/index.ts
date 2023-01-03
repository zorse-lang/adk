import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AssignIpv6Addresses
	extends RosResource<AssignIpv6AddressesComponentInputs>
	implements AssignIpv6AddressesComponentOutputs
{
	constructor(entity: ADKEntity, options: AssignIpv6AddressesComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::AssignIpv6Addresses", options);
	}
	public readonly Ipv6AddressIds: any;
}
export interface AssignIpv6AddressesComponentOutputs {
	readonly Ipv6AddressIds: any;
}
export interface AssignIpv6AddressesComponentInputs {
	readonly NetworkInterfaceId: any | string;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Ipv6Addresses?: (any[] | any) | undefined;
	readonly LogicalId: string;
}
export class AssignPrivateIpAddresses
	extends RosResource<AssignPrivateIpAddressesComponentInputs>
	implements AssignPrivateIpAddressesComponentOutputs
{
	constructor(entity: ADKEntity, options: AssignPrivateIpAddressesComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::AssignPrivateIpAddresses", options);
	}
}
export interface AssignPrivateIpAddressesComponentOutputs {}
export interface AssignPrivateIpAddressesComponentInputs {
	readonly NetworkInterfaceId: any | string;
	readonly PrivateIpAddresses?: (any[] | any) | undefined;
	readonly SecondaryPrivateIpAddressCount?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class AutoProvisioningGroup
	extends RosResource<AutoProvisioningGroupComponentInputs>
	implements AutoProvisioningGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: AutoProvisioningGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::AutoProvisioningGroup", options);
	}
	public readonly AutoProvisioningGroupId: any;
}
export interface AutoProvisioningGroupComponentOutputs {
	readonly AutoProvisioningGroupId: any;
}
export interface AutoProvisioningGroupComponentInputs {
	readonly TotalTargetCapacity: string;
	readonly AutoProvisioningGroupName?: (any | string) | undefined;
	readonly AutoProvisioningGroupType?: (string | undefined) | undefined;
	readonly CheckExecutionStatus?: (boolean | undefined) | undefined;
	readonly DefaultTargetCapacityType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ExcessCapacityTerminationPolicy?: (string | undefined) | undefined;
	readonly LaunchConfiguration?: (LaunchConfiguration | undefined) | undefined;
	readonly LaunchTemplateConfig?: (LaunchTemplateConfig[] | undefined) | undefined;
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateVersion?: (string | undefined) | undefined;
	readonly MaxSpotPrice?: (number | undefined) | undefined;
	readonly PayAsYouGoAllocationStrategy?: (string | undefined) | undefined;
	readonly PayAsYouGoTargetCapacity?: (string | undefined) | undefined;
	readonly SpotAllocationStrategy?: (string | undefined) | undefined;
	readonly SpotInstanceInterruptionBehavior?: (string | undefined) | undefined;
	readonly SpotInstancePoolsToUseCount?: (number | undefined) | undefined;
	readonly SpotTargetCapacity?: (string | undefined) | undefined;
	readonly TerminateInstances?: (boolean | undefined) | undefined;
	readonly TerminateInstancesWithExpiration?: (boolean | undefined) | undefined;
	readonly ValidFrom?: (string | undefined) | undefined;
	readonly ValidUntil?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class AutoSnapshotPolicy
	extends RosResource<AutoSnapshotPolicyComponentInputs>
	implements AutoSnapshotPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: AutoSnapshotPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::AutoSnapshotPolicy", options);
	}
	public readonly AutoSnapshotPolicyId: any;
}
export interface AutoSnapshotPolicyComponentOutputs {
	readonly AutoSnapshotPolicyId: any;
}
export interface AutoSnapshotPolicyComponentInputs {
	readonly RepeatWeekdays: number[];
	readonly RetentionDays: number;
	readonly TimePoints: any[];
	readonly AutoSnapshotPolicyName?: (string | undefined) | undefined;
	readonly DiskIds?: (string[] | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Command extends RosResource<CommandComponentInputs> implements CommandComponentOutputs {
	constructor(entity: ADKEntity, options: CommandComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::Command", options);
	}
	public readonly CommandId: any;
}
export interface CommandComponentOutputs {
	readonly CommandId: any;
}
export interface CommandComponentInputs {
	readonly Type: string;
	readonly CommandContent?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EnableParameter?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly WorkingDir?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class CopyImage extends RosResource<CopyImageComponentInputs> implements CopyImageComponentOutputs {
	constructor(entity: ADKEntity, options: CopyImageComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::CopyImage", options);
	}
}
export interface CopyImageComponentOutputs {}
export interface CopyImageComponentInputs {
	readonly DestinationRegionId: any | string;
	readonly ImageId: any | string;
	readonly DestinationDescription?: (string | undefined) | undefined;
	readonly DestinationImageName?: (string | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly KMSKeyId?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SourceRegionId?: (any | string) | undefined;
	readonly Tag?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class CustomImage extends RosResource<CustomImageComponentInputs> implements CustomImageComponentOutputs {
	constructor(entity: ADKEntity, options: CustomImageComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::CustomImage", options);
	}
	public readonly ImageId: any;
}
export interface CustomImageComponentOutputs {
	readonly ImageId: any;
}
export interface CustomImageComponentInputs {
	readonly Architecture?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DiskDeviceMapping?: (DiskDeviceMapping[] | undefined) | undefined;
	readonly ImageFamily?: (string | undefined) | undefined;
	readonly ImageName?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly Platform?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly SourceRegionId?: (any | string) | undefined;
	readonly Tag?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DedicatedHost extends RosResource<DedicatedHostComponentInputs> implements DedicatedHostComponentOutputs {
	constructor(entity: ADKEntity, options: DedicatedHostComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::DedicatedHost", options);
	}
	public readonly OrderId: any;
	public readonly DedicatedHostIds: any;
}
export interface DedicatedHostComponentOutputs {
	readonly OrderId: any;
	readonly DedicatedHostIds: any;
}
export interface DedicatedHostComponentInputs {
	readonly DedicatedHostType: string;
	readonly ActionOnMaintenance?: (string | undefined) | undefined;
	readonly AutoPlacement?: (string | undefined) | undefined;
	readonly AutoReleaseTime?: (string | undefined) | undefined;
	readonly AutoRenew?: (string | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly DedicatedHostName?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly NetworkAttributesSlbUdpTimeout?: (number | undefined) | undefined;
	readonly NetworkAttributesUdpTimeout?: (number | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly Quantity?: (number | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DeploymentSet extends RosResource<DeploymentSetComponentInputs> implements DeploymentSetComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentSetComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::DeploymentSet", options);
	}
	public readonly DeploymentSetId: any;
}
export interface DeploymentSetComponentOutputs {
	readonly DeploymentSetId: any;
}
export interface DeploymentSetComponentInputs {
	readonly DeploymentSetName?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly OnUnableToRedeployFailedInstance?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Disk extends RosResource<DiskComponentInputs> implements DiskComponentOutputs {
	constructor(entity: ADKEntity, options: DiskComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::Disk", options);
	}
	public readonly Status: any;
	public readonly DiskId: any;
}
export interface DiskComponentOutputs {
	readonly Status: any;
	readonly DiskId: any;
}
export interface DiskComponentInputs {
	readonly ZoneId: string;
	readonly AutoSnapshotPolicyId?: (string | undefined) | undefined;
	readonly BurstingEnabled?: (boolean | undefined) | undefined;
	readonly DeleteAutoSnapshot?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DiskCategory?: (string | undefined) | undefined;
	readonly DiskName?: (string | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly KMSKeyId?: (string | undefined) | undefined;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly ProvisionedIops?: (number | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Size?: (number | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly StorageSetId?: (string | undefined) | undefined;
	readonly StorageSetPartitionNumber?: (number | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DiskAttachment extends RosResource<DiskAttachmentComponentInputs> implements DiskAttachmentComponentOutputs {
	constructor(entity: ADKEntity, options: DiskAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::DiskAttachment", options);
	}
	public readonly Status: any;
}
export interface DiskAttachmentComponentOutputs {
	readonly Status: any;
}
export interface DiskAttachmentComponentInputs {
	readonly DiskId: any | string;
	readonly InstanceId: string;
	readonly DeleteAutoSnapshot?: (boolean | undefined) | undefined;
	readonly DeleteWithInstance?: (boolean | undefined) | undefined;
	readonly Device?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class ForwardEntry extends RosResource<ForwardEntryComponentInputs> implements ForwardEntryComponentOutputs {
	constructor(entity: ADKEntity, options: ForwardEntryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::ForwardEntry", options);
	}
	public readonly ForwardEntryId: any;
}
export interface ForwardEntryComponentOutputs {
	readonly ForwardEntryId: any;
}
export interface ForwardEntryComponentInputs {
	readonly ExternalIp: string;
	readonly ExternalPort: string;
	readonly ForwardTableId: string;
	readonly InternalIp: string;
	readonly InternalPort: string;
	readonly IpProtocol: string;
	readonly ForwardEntryName?: (string | undefined) | undefined;
	readonly PortBreak?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class HpcCluster extends RosResource<HpcClusterComponentInputs> implements HpcClusterComponentOutputs {
	constructor(entity: ADKEntity, options: HpcClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::HpcCluster", options);
	}
	public readonly HpcClusterId: any;
}
export interface HpcClusterComponentOutputs {
	readonly HpcClusterId: any;
}
export interface HpcClusterComponentInputs {
	readonly Name: any | string;
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::Instance", options);
	}
	public readonly PrimaryNetworkInterfaceId: any;
	public readonly InnerIp: any;
	public readonly PrivateIp: any;
	public readonly InstanceId: any;
	public readonly PublicIp: any;
}
export interface InstanceComponentOutputs {
	readonly PrimaryNetworkInterfaceId: any;
	readonly InnerIp: any;
	readonly PrivateIp: any;
	readonly InstanceId: any;
	readonly PublicIp: any;
}
export interface InstanceComponentInputs {
	readonly ImageId: string;
	readonly InstanceType: string;
	readonly AllocatePublicIP?: (boolean | undefined) | undefined;
	readonly AutoRenew?: (string | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly DedicatedHostId?: (string | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly DeploymentSetId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DiskMappings?: (DiskMappings[] | undefined) | undefined;
	readonly HostName?: (any | string) | undefined;
	readonly HpcClusterId?: (string | undefined) | undefined;
	readonly InstanceChargeType?: (string | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly InternetChargeType?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthOut?: (number | undefined) | undefined;
	readonly IoOptimized?: (string | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly PasswordInherit?: (boolean | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityEnhancementStrategy?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (any | string[]) | undefined;
	readonly SpotDuration?: (number | undefined) | undefined;
	readonly SpotInterruptionBehavior?: (string | undefined) | undefined;
	readonly SpotPriceLimit?: (string | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly SystemDiskDescription?: (string | undefined) | undefined;
	readonly SystemDiskDiskName?: (string | undefined) | undefined;
	readonly SystemDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly SystemDiskSize?: (number | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (any | string) | undefined;
	readonly ZoneIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class InstanceClone extends RosResource<InstanceCloneComponentInputs> implements InstanceCloneComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceCloneComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::InstanceClone", options);
	}
	public readonly PrimaryNetworkInterfaceId: any;
	public readonly InnerIp: any;
	public readonly PrivateIp: any;
	public readonly InstanceId: any;
	public readonly PublicIp: any;
	public readonly SecurityGroupIds: any;
	public readonly HostName: any;
}
export interface InstanceCloneComponentOutputs {
	readonly PrimaryNetworkInterfaceId: any;
	readonly InnerIp: any;
	readonly PrivateIp: any;
	readonly InstanceId: any;
	readonly PublicIp: any;
	readonly SecurityGroupIds: any;
	readonly HostName: any;
}
export interface InstanceCloneComponentInputs {
	readonly SourceInstanceId: string;
	readonly BackendServerWeight?: (number | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DiskMappings?: (DiskMappings[] | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly InstanceChargeType?: (string | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthIn?: (number | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly LoadBalancerIdToAttach?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SpotPriceLimit?: (string | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly ZoneId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class InstanceGroup extends RosResource<InstanceGroupComponentInputs> implements InstanceGroupComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::InstanceGroup", options);
	}
	public readonly PublicIps: any;
	public readonly PrivateIps: any;
	public readonly HostNames: any;
	public readonly InnerIps: any;
	public readonly Ipv6AddressIds: any;
	public readonly OrderId: any;
	public readonly InstanceIds: any;
}
export interface InstanceGroupComponentOutputs {
	readonly PublicIps: any;
	readonly PrivateIps: any;
	readonly HostNames: any;
	readonly InnerIps: any;
	readonly Ipv6AddressIds: any;
	readonly OrderId: any;
	readonly InstanceIds: any;
}
export interface InstanceGroupComponentInputs {
	readonly ImageId: string;
	readonly InstanceType: string;
	readonly MaxAmount: number;
	readonly AllocatePublicIP?: (boolean | undefined) | undefined;
	readonly AutoReleaseTime?: (string | undefined) | undefined;
	readonly AutoRenew?: (string | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly DedicatedHostId?: (string | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly DeploymentSetId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DiskMappings?: (DiskMappings[] | undefined) | undefined;
	readonly EniMappings?: (EniMappings[] | undefined) | undefined;
	readonly HostName?: (string | undefined) | undefined;
	readonly HpcClusterId?: (string | undefined) | undefined;
	readonly InstanceChargeType?: (string | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly InternetChargeType?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthOut?: (number | undefined) | undefined;
	readonly IoOptimized?: (string | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Ipv6Addresses?: (any[] | any) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly LaunchTemplateVersion?: (string | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly PasswordInherit?: (boolean | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityEnhancementStrategy?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (any[] | undefined) | undefined;
	readonly SpotDuration?: (number | undefined) | undefined;
	readonly SpotInterruptionBehavior?: (string | undefined) | undefined;
	readonly SpotPriceLimit?: (string | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly SystemDiskAutoSnapshotPolicyId?: (string | undefined) | undefined;
	readonly SystemDiskBurstingEnabled?: (boolean | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly SystemDiskDescription?: (string | undefined) | undefined;
	readonly SystemDiskDiskName?: (string | undefined) | undefined;
	readonly SystemDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly SystemDiskProvisionedIops?: (number | undefined) | undefined;
	readonly SystemDiskSize?: (number | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly ZoneIds?: (any | string[]) | undefined;
	readonly LogicalId: string;
}
export class InstanceGroupClone
	extends RosResource<InstanceGroupCloneComponentInputs>
	implements InstanceGroupCloneComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceGroupCloneComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::InstanceGroupClone", options);
	}
	public readonly PublicIps: any;
	public readonly PrivateIps: any;
	public readonly HostNames: any;
	public readonly InnerIps: any;
	public readonly Ipv6AddressIds: any;
	public readonly ZoneIds: any;
	public readonly OrderId: any;
	public readonly InstanceIds: any;
}
export interface InstanceGroupCloneComponentOutputs {
	readonly PublicIps: any;
	readonly PrivateIps: any;
	readonly HostNames: any;
	readonly InnerIps: any;
	readonly Ipv6AddressIds: any;
	readonly ZoneIds: any;
	readonly OrderId: any;
	readonly InstanceIds: any;
}
export interface InstanceGroupCloneComponentInputs {
	readonly MaxAmount: number;
	readonly SourceInstanceId: string;
	readonly AutoReleaseTime?: (string | undefined) | undefined;
	readonly AutoRenew?: (string | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly BackendServerWeight?: (number | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly DeploymentSetId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DiskMappings?: (DiskMappings[] | undefined) | undefined;
	readonly EniMappings?: (EniMappings[] | undefined) | undefined;
	readonly HpcClusterId?: (string | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthIn?: (number | undefined) | undefined;
	readonly InternetMaxBandwidthOut?: (number | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Ipv6Addresses?: (any[] | any) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly LaunchTemplateVersion?: (string | undefined) | undefined;
	readonly LoadBalancerIdToAttach?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly PasswordInherit?: (boolean | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (any[] | undefined) | undefined;
	readonly SpotPriceLimit?: (string | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly SystemDiskAutoSnapshotPolicyId?: (string | undefined) | undefined;
	readonly SystemDiskBurstingEnabled?: (boolean | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly SystemDiskDescription?: (string | undefined) | undefined;
	readonly SystemDiskDiskName?: (string | undefined) | undefined;
	readonly SystemDiskProvisionedIops?: (number | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Invocation extends RosResource<InvocationComponentInputs> implements InvocationComponentOutputs {
	constructor(entity: ADKEntity, options: InvocationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::Invocation", options);
	}
	public readonly InvokeInstances: any;
	public readonly InvokeId: any;
}
export interface InvocationComponentOutputs {
	readonly InvokeInstances: any;
	readonly InvokeId: any;
}
export interface InvocationComponentInputs {
	readonly CommandId: string;
	readonly InstanceIds: any[];
	readonly Frequency?: (string | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: any } | undefined) | undefined;
	readonly Sync?: (boolean | undefined) | undefined;
	readonly Timed?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class JoinSecurityGroup
	extends RosResource<JoinSecurityGroupComponentInputs>
	implements JoinSecurityGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: JoinSecurityGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::JoinSecurityGroup", options);
	}
}
export interface JoinSecurityGroupComponentOutputs {}
export interface JoinSecurityGroupComponentInputs {
	readonly SecurityGroupId: string;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly InstanceIdList?: (any[] | undefined) | undefined;
	readonly NetworkInterfaceList?: (any[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class LaunchTemplate extends RosResource<LaunchTemplateComponentInputs> implements LaunchTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: LaunchTemplateComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::LaunchTemplate", options);
	}
	public readonly LatestVersionNumber: any;
	public readonly LaunchTemplateId: any;
	public readonly DefaultVersionNumber: any;
}
export interface LaunchTemplateComponentOutputs {
	readonly LatestVersionNumber: any;
	readonly LaunchTemplateId: any;
	readonly DefaultVersionNumber: any;
}
export interface LaunchTemplateComponentInputs {
	readonly LaunchTemplateName: any | string;
	readonly AutoReleaseTime?: (string | undefined) | undefined;
	readonly DeploymentSetId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DiskMappings?: (DiskMappings[] | undefined) | undefined;
	readonly HostName?: (string | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly ImageOwnerAlias?: (string | undefined) | undefined;
	readonly InstanceChargeType?: (string | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly InternetChargeType?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthOut?: (number | undefined) | undefined;
	readonly IoOptimized?: (string | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly NetworkInterfaces?: (NetworkInterfaces[] | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly PasswordInherit?: (boolean | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityEnhancementStrategy?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SpotDuration?: (number | undefined) | undefined;
	readonly SpotPriceLimit?: (string | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly SystemDiskDeleteWithInstance?: (boolean | undefined) | undefined;
	readonly SystemDiskDescription?: (string | undefined) | undefined;
	readonly SystemDiskDiskName?: (string | undefined) | undefined;
	readonly SystemDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly SystemDiskSize?: (number | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly TemplateResourceGroupId?: (string | undefined) | undefined;
	readonly TemplateTags?: (TemplateTags[] | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly VersionDescription?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class NetworkInterface
	extends RosResource<NetworkInterfaceComponentInputs>
	implements NetworkInterfaceComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInterfaceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::NetworkInterface", options);
	}
	public readonly PrivateIpAddress: any;
	public readonly SecondaryPrivateIpAddresses: any;
	public readonly MacAddress: any;
	public readonly NetworkInterfaceId: any;
}
export interface NetworkInterfaceComponentOutputs {
	readonly PrivateIpAddress: any;
	readonly SecondaryPrivateIpAddresses: any;
	readonly MacAddress: any;
	readonly NetworkInterfaceId: any;
}
export interface NetworkInterfaceComponentInputs {
	readonly VSwitchId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly NetworkInterfaceName?: (string | undefined) | undefined;
	readonly PrimaryIpAddress?: (string | undefined) | undefined;
	readonly PrivateIpAddresses?: (string[] | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecondaryPrivateIpAddressCount?: (number | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class NetworkInterfaceAttachment
	extends RosResource<NetworkInterfaceAttachmentComponentInputs>
	implements NetworkInterfaceAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInterfaceAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::NetworkInterfaceAttachment", options);
	}
}
export interface NetworkInterfaceAttachmentComponentOutputs {}
export interface NetworkInterfaceAttachmentComponentInputs {
	readonly InstanceId: any | string;
	readonly NetworkInterfaceId: any | string;
	readonly TrunkNetworkInstanceId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class NetworkInterfacePermission
	extends RosResource<NetworkInterfacePermissionComponentInputs>
	implements NetworkInterfacePermissionComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInterfacePermissionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::NetworkInterfacePermission", options);
	}
	public readonly NetworkInterfacePermissionId: any;
}
export interface NetworkInterfacePermissionComponentOutputs {
	readonly NetworkInterfacePermissionId: any;
}
export interface NetworkInterfacePermissionComponentInputs {
	readonly AccountId: string;
	readonly NetworkInterfaceId: string;
	readonly Permission: string;
	readonly LogicalId: string;
}
export class PrefixList extends RosResource<PrefixListComponentInputs> implements PrefixListComponentOutputs {
	constructor(entity: ADKEntity, options: PrefixListComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::PrefixList", options);
	}
	public readonly PrefixListId: any;
}
export interface PrefixListComponentOutputs {
	readonly PrefixListId: any;
}
export interface PrefixListComponentInputs {
	readonly AddressFamily: string;
	readonly MaxEntries: number;
	readonly PrefixListName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Entries?: (Entries[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Route extends RosResource<RouteComponentInputs> implements RouteComponentOutputs {
	constructor(entity: ADKEntity, options: RouteComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::Route", options);
	}
}
export interface RouteComponentOutputs {}
export interface RouteComponentInputs {
	readonly DestinationCidrBlock: string;
	readonly RouteTableId: string;
	readonly NextHopId?: (string | undefined) | undefined;
	readonly NextHopList?: (NextHopList[] | undefined) | undefined;
	readonly NextHopType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class RunCommand extends RosResource<RunCommandComponentInputs> implements RunCommandComponentOutputs {
	constructor(entity: ADKEntity, options: RunCommandComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::RunCommand", options);
	}
	public readonly CommandId: any;
	public readonly InvokeInstances: any;
	public readonly InvokeId: any;
}
export interface RunCommandComponentOutputs {
	readonly CommandId: any;
	readonly InvokeInstances: any;
	readonly InvokeId: any;
}
export interface RunCommandComponentInputs {
	readonly CommandContent: string;
	readonly InstanceIds: string[];
	readonly Type: string;
	readonly ContentEncoding?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EnableParameter?: (boolean | undefined) | undefined;
	readonly Frequency?: (string | undefined) | undefined;
	readonly KeepCommand?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: any } | undefined) | undefined;
	readonly Sync?: (boolean | undefined) | undefined;
	readonly Timed?: (boolean | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly WorkingDir?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SNatEntry extends RosResource<SNatEntryComponentInputs> implements SNatEntryComponentOutputs {
	constructor(entity: ADKEntity, options: SNatEntryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::SNatEntry", options);
	}
	public readonly SNatEntryId: any;
}
export interface SNatEntryComponentOutputs {
	readonly SNatEntryId: any;
}
export interface SNatEntryComponentInputs {
	readonly SNatIp: string;
	readonly SNatTableId: string;
	readonly SnatEntryName?: (string | undefined) | undefined;
	readonly SourceCIDR?: (string | undefined) | undefined;
	readonly SourceVSwitchId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SSHKeyPair extends RosResource<SSHKeyPairComponentInputs> implements SSHKeyPairComponentOutputs {
	constructor(entity: ADKEntity, options: SSHKeyPairComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::SSHKeyPair", options);
	}
	public readonly KeyPairFingerPrint: any;
	public readonly PrivateKeyBody: any;
}
export interface SSHKeyPairComponentOutputs {
	readonly KeyPairFingerPrint: any;
	readonly PrivateKeyBody: any;
}
export interface SSHKeyPairComponentInputs {
	readonly KeyPairName: any | string;
	readonly PublicKeyBody?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SSHKeyPairAttachment
	extends RosResource<SSHKeyPairAttachmentComponentInputs>
	implements SSHKeyPairAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: SSHKeyPairAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::SSHKeyPairAttachment", options);
	}
}
export interface SSHKeyPairAttachmentComponentOutputs {}
export interface SSHKeyPairAttachmentComponentInputs {
	readonly InstanceIds: any[];
	readonly KeyPairName: string;
	readonly LogicalId: string;
}
export class SecurityGroup extends RosResource<SecurityGroupComponentInputs> implements SecurityGroupComponentOutputs {
	constructor(entity: ADKEntity, options: SecurityGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::SecurityGroup", options);
	}
	public readonly SecurityGroupId: any;
}
export interface SecurityGroupComponentOutputs {
	readonly SecurityGroupId: any;
}
export interface SecurityGroupComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupEgress?: (SecurityGroupEgress[] | undefined) | undefined;
	readonly SecurityGroupIngress?: (SecurityGroupIngress[] | undefined) | undefined;
	readonly SecurityGroupName?: (any | string) | undefined;
	readonly SecurityGroupType?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityGroupClone
	extends RosResource<SecurityGroupCloneComponentInputs>
	implements SecurityGroupCloneComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityGroupCloneComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::SecurityGroupClone", options);
	}
	public readonly SecurityGroupId: any;
}
export interface SecurityGroupCloneComponentOutputs {
	readonly SecurityGroupId: any;
}
export interface SecurityGroupCloneComponentInputs {
	readonly SourceSecurityGroupId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly DestinationRegionId?: (string | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupName?: (string | undefined) | undefined;
	readonly SecurityGroupType?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityGroupEgress
	extends RosResource<SecurityGroupEgressComponentInputs>
	implements SecurityGroupEgressComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityGroupEgressComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::SecurityGroupEgress", options);
	}
}
export interface SecurityGroupEgressComponentOutputs {}
export interface SecurityGroupEgressComponentInputs {
	readonly IpProtocol: string;
	readonly PortRange: string;
	readonly Description?: (string | undefined) | undefined;
	readonly DestCidrIp?: (string | undefined) | undefined;
	readonly DestGroupId?: (string | undefined) | undefined;
	readonly DestGroupOwnerId?: (string | undefined) | undefined;
	readonly DestPrefixListId?: (string | undefined) | undefined;
	readonly Ipv6DestCidrIp?: (string | undefined) | undefined;
	readonly NicType?: (string | undefined) | undefined;
	readonly Policy?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityGroupIngress
	extends RosResource<SecurityGroupIngressComponentInputs>
	implements SecurityGroupIngressComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityGroupIngressComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::SecurityGroupIngress", options);
	}
}
export interface SecurityGroupIngressComponentOutputs {}
export interface SecurityGroupIngressComponentInputs {
	readonly IpProtocol: string;
	readonly PortRange: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Ipv6SourceCidrIp?: (string | undefined) | undefined;
	readonly NicType?: (string | undefined) | undefined;
	readonly Policy?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SourceCidrIp?: (string | undefined) | undefined;
	readonly SourceGroupId?: (string | undefined) | undefined;
	readonly SourceGroupOwnerId?: (string | undefined) | undefined;
	readonly SourcePortRange?: (string | undefined) | undefined;
	readonly SourcePrefixListId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Snapshot extends RosResource<SnapshotComponentInputs> implements SnapshotComponentOutputs {
	constructor(entity: ADKEntity, options: SnapshotComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::Snapshot", options);
	}
	public readonly SnapshotId: any;
}
export interface SnapshotComponentOutputs {
	readonly SnapshotId: any;
}
export interface SnapshotComponentInputs {
	readonly DiskId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly InstantAccess?: (boolean | undefined) | undefined;
	readonly InstantAccessRetentionDays?: (number | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SnapshotName?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class VPC extends RosResource<VPCComponentInputs> implements VPCComponentOutputs {
	constructor(entity: ADKEntity, options: VPCComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::VPC", options);
	}
	public readonly VRouterId: any;
	public readonly RouteTableId: any;
	public readonly VpcId: any;
}
export interface VPCComponentOutputs {
	readonly VRouterId: any;
	readonly RouteTableId: any;
	readonly VpcId: any;
}
export interface VPCComponentInputs {
	readonly CidrBlock?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EnableIpv6?: (boolean | undefined) | undefined;
	readonly Ipv6CidrBlock?: (string | undefined) | undefined;
	readonly Ipv6Isp?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecondaryCidrBlock?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly UserCidr?: (string | undefined) | undefined;
	readonly VpcName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class VSwitch extends RosResource<VSwitchComponentInputs> implements VSwitchComponentOutputs {
	constructor(entity: ADKEntity, options: VSwitchComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECS::VSwitch", options);
	}
	public readonly VSwitchId: any;
}
export interface VSwitchComponentOutputs {
	readonly VSwitchId: any;
}
export interface VSwitchComponentInputs {
	readonly CidrBlock: any | string;
	readonly VpcId: string;
	readonly ZoneId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Ipv6CidrBlock?: (any | number) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VpcIpv6CidrBlock?: (string | undefined) | undefined;
	readonly VSwitchName?: (string | undefined) | undefined;
	readonly ZoneType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DataDisk {
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly Category?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly Size?: (number | undefined) | undefined;
	readonly DeleteWithInstance?: (boolean | undefined) | undefined;
	readonly DiskName?: (string | undefined) | undefined;
	readonly InternetChargeType?: (string | undefined) | undefined;
}
export interface LaunchConfiguration {
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly IoOptimized?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SystemDiskSize?: (number | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly SystemDiskDescription?: (string | undefined) | undefined;
	readonly SecurityGroupId: string;
	readonly InternetChargeType?: (string | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly SystemDiskName?: (string | undefined) | undefined;
	readonly DataDisk?: (DataDisk[] | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthOut?: (number | undefined) | undefined;
	readonly SystemDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly ImageId: string;
	readonly InstanceDescription?: (string | undefined) | undefined;
	readonly Tag?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly HostName?: (string | undefined) | undefined;
	readonly CreditSpecification?: (string | undefined) | undefined;
	readonly SecurityEnhancementStrategy?: (string | undefined) | undefined;
	readonly PasswordInherit?: (boolean | undefined) | undefined;
}
export interface LaunchTemplateConfig {
	readonly WeightedCapacity?: (number | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly VSwitchId: string;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly MaxPrice?: (number | undefined) | undefined;
}
export interface Tag {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface DiskDeviceMapping {
	readonly DiskType?: (string | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly Device?: (string | undefined) | undefined;
	readonly Size?: (number | undefined) | undefined;
}
export interface DiskMappings {
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly Category?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Device?: (string | undefined) | undefined;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly Size: string;
	readonly DiskName?: (string | undefined) | undefined;
}
export interface EniMappings {
	readonly Description?: (string | undefined) | undefined;
	readonly SecurityGroupId: string;
	readonly VSwitchId: string;
	readonly NetworkInterfaceName?: (string | undefined) | undefined;
	readonly PrimaryIpAddress?: (string | undefined) | undefined;
}
export interface NetworkInterfaces {
	readonly Description?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly NetworkInterfaceName?: (string | undefined) | undefined;
	readonly PrimaryIpAddress?: (string | undefined) | undefined;
}
export interface TemplateTags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface Entries {
	readonly Description?: (string | undefined) | undefined;
	readonly Cidr: string;
}
export interface NextHopList {
	readonly NextHopType?: (string | undefined) | undefined;
	readonly NextHopId: string;
}
export interface SecurityGroupEgress {
	readonly Policy?: (string | undefined) | undefined;
	readonly PortRange: string;
	readonly Description?: (string | undefined) | undefined;
	readonly DestPrefixListId?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly DestGroupOwnerId?: (string | undefined) | undefined;
	readonly IpProtocol: string;
	readonly DestCidrIp?: (string | undefined) | undefined;
	readonly NicType?: (string | undefined) | undefined;
	readonly Ipv6DestCidrIp?: (string | undefined) | undefined;
	readonly DestGroupId?: (string | undefined) | undefined;
}
export interface SecurityGroupIngress {
	readonly SourceGroupId?: (string | undefined) | undefined;
	readonly Policy?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly SourcePortRange?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SourceGroupOwnerId?: (string | undefined) | undefined;
	readonly Ipv6SourceCidrIp?: (string | undefined) | undefined;
	readonly NicType?: (string | undefined) | undefined;
	readonly PortRange: string;
	readonly SourceCidrIp?: (string | undefined) | undefined;
	readonly IpProtocol: string;
	readonly SourcePrefixListId?: (string | undefined) | undefined;
}
export default {
	AssignIpv6Addresses: AssignIpv6Addresses,
	AssignPrivateIpAddresses: AssignPrivateIpAddresses,
	AutoProvisioningGroup: AutoProvisioningGroup,
	AutoSnapshotPolicy: AutoSnapshotPolicy,
	Command: Command,
	CopyImage: CopyImage,
	CustomImage: CustomImage,
	DedicatedHost: DedicatedHost,
	DeploymentSet: DeploymentSet,
	Disk: Disk,
	DiskAttachment: DiskAttachment,
	ForwardEntry: ForwardEntry,
	HpcCluster: HpcCluster,
	Instance: Instance,
	InstanceClone: InstanceClone,
	InstanceGroup: InstanceGroup,
	InstanceGroupClone: InstanceGroupClone,
	Invocation: Invocation,
	JoinSecurityGroup: JoinSecurityGroup,
	LaunchTemplate: LaunchTemplate,
	NetworkInterface: NetworkInterface,
	NetworkInterfaceAttachment: NetworkInterfaceAttachment,
	NetworkInterfacePermission: NetworkInterfacePermission,
	PrefixList: PrefixList,
	Route: Route,
	RunCommand: RunCommand,
	SNatEntry: SNatEntry,
	SSHKeyPair: SSHKeyPair,
	SSHKeyPairAttachment: SSHKeyPairAttachment,
	SecurityGroup: SecurityGroup,
	SecurityGroupClone: SecurityGroupClone,
	SecurityGroupEgress: SecurityGroupEgress,
	SecurityGroupIngress: SecurityGroupIngress,
	Snapshot: Snapshot,
	VPC: VPC,
	VSwitch: VSwitch,
};
