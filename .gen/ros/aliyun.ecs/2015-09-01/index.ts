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
	readonly Ipv6AddressCount?: number | undefined;
	readonly Ipv6Addresses?: any[] | any;
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
	readonly PrivateIpAddresses?: any[] | any;
	readonly SecondaryPrivateIpAddressCount?: number | undefined;
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
	readonly AutoProvisioningGroupName?: any | string;
	readonly AutoProvisioningGroupType?: string | undefined;
	readonly CheckExecutionStatus?: boolean | undefined;
	readonly DefaultTargetCapacityType?: string | undefined;
	readonly Description?: string | undefined;
	readonly ExcessCapacityTerminationPolicy?: string | undefined;
	readonly LaunchConfiguration?: LaunchConfiguration | undefined;
	readonly LaunchTemplateConfig?: LaunchTemplateConfig[] | undefined;
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateVersion?: string | undefined;
	readonly MaxSpotPrice?: number | undefined;
	readonly PayAsYouGoAllocationStrategy?: string | undefined;
	readonly PayAsYouGoTargetCapacity?: string | undefined;
	readonly SpotAllocationStrategy?: string | undefined;
	readonly SpotInstanceInterruptionBehavior?: string | undefined;
	readonly SpotInstancePoolsToUseCount?: number | undefined;
	readonly SpotTargetCapacity?: string | undefined;
	readonly TerminateInstances?: boolean | undefined;
	readonly TerminateInstancesWithExpiration?: boolean | undefined;
	readonly ValidFrom?: string | undefined;
	readonly ValidUntil?: string | undefined;
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
	readonly AutoSnapshotPolicyName?: string | undefined;
	readonly DiskIds?: string[] | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
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
	readonly CommandContent?: string | undefined;
	readonly Description?: string | undefined;
	readonly EnableParameter?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly Timeout?: number | undefined;
	readonly WorkingDir?: string | undefined;
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
	readonly DestinationDescription?: string | undefined;
	readonly DestinationImageName?: string | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly KMSKeyId?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SourceRegionId?: any | string;
	readonly Tag?: { key: string; value: string }[] | undefined;
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
	readonly Architecture?: string | undefined;
	readonly Description?: string | undefined;
	readonly DiskDeviceMapping?: DiskDeviceMapping[] | undefined;
	readonly ImageFamily?: string | undefined;
	readonly ImageName?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly Platform?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SnapshotId?: string | undefined;
	readonly SourceRegionId?: any | string;
	readonly Tag?: { key: string; value: string }[] | undefined;
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
	readonly ActionOnMaintenance?: string | undefined;
	readonly AutoPlacement?: string | undefined;
	readonly AutoReleaseTime?: string | undefined;
	readonly AutoRenew?: string | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly ChargeType?: string | undefined;
	readonly DedicatedHostName?: string | undefined;
	readonly Description?: string | undefined;
	readonly NetworkAttributesSlbUdpTimeout?: number | undefined;
	readonly NetworkAttributesUdpTimeout?: number | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly Quantity?: number | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly ZoneId?: string | undefined;
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
	readonly DeploymentSetName?: string | undefined;
	readonly Description?: string | undefined;
	readonly OnUnableToRedeployFailedInstance?: string | undefined;
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
	readonly AutoSnapshotPolicyId?: string | undefined;
	readonly BurstingEnabled?: boolean | undefined;
	readonly DeleteAutoSnapshot?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly DiskCategory?: string | undefined;
	readonly DiskName?: string | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly KMSKeyId?: string | undefined;
	readonly PerformanceLevel?: string | undefined;
	readonly ProvisionedIops?: number | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Size?: number | undefined;
	readonly SnapshotId?: string | undefined;
	readonly StorageSetId?: string | undefined;
	readonly StorageSetPartitionNumber?: number | undefined;
	readonly Tags?: Tags[] | undefined;
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
	readonly DeleteAutoSnapshot?: boolean | undefined;
	readonly DeleteWithInstance?: boolean | undefined;
	readonly Device?: any | string;
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
	readonly ForwardEntryName?: string | undefined;
	readonly PortBreak?: boolean | undefined;
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
	readonly Description?: string | undefined;
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
	readonly AllocatePublicIP?: boolean | undefined;
	readonly AutoRenew?: string | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly DedicatedHostId?: string | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly DeploymentSetId?: string | undefined;
	readonly Description?: string | undefined;
	readonly DiskMappings?: DiskMappings[] | undefined;
	readonly HostName?: any | string;
	readonly HpcClusterId?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InstanceName?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly IoOptimized?: string | undefined;
	readonly KeyPairName?: string | undefined;
	readonly Password?: string | undefined;
	readonly PasswordInherit?: boolean | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly RamRoleName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityEnhancementStrategy?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SecurityGroupIds?: any | string[];
	readonly SpotDuration?: number | undefined;
	readonly SpotInterruptionBehavior?: string | undefined;
	readonly SpotPriceLimit?: string | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly SystemDiskDescription?: string | undefined;
	readonly SystemDiskDiskName?: string | undefined;
	readonly SystemDiskPerformanceLevel?: string | undefined;
	readonly SystemDiskSize?: number | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly UserData?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: any | string;
	readonly ZoneIds?: string[] | undefined;
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
	readonly BackendServerWeight?: number | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly DiskMappings?: DiskMappings[] | undefined;
	readonly ImageId?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InstanceName?: string | undefined;
	readonly InternetMaxBandwidthIn?: number | undefined;
	readonly KeyPairName?: string | undefined;
	readonly LoadBalancerIdToAttach?: string | undefined;
	readonly Password?: string | undefined;
	readonly Period?: number | undefined;
	readonly RamRoleName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SpotPriceLimit?: string | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly ZoneId?: any | string;
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
	readonly AllocatePublicIP?: boolean | undefined;
	readonly AutoReleaseTime?: string | undefined;
	readonly AutoRenew?: string | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly DedicatedHostId?: string | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly DeploymentSetId?: string | undefined;
	readonly Description?: string | undefined;
	readonly DiskMappings?: DiskMappings[] | undefined;
	readonly EniMappings?: EniMappings[] | undefined;
	readonly HostName?: string | undefined;
	readonly HpcClusterId?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InstanceName?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly IoOptimized?: string | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly Ipv6Addresses?: any[] | any;
	readonly KeyPairName?: string | undefined;
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly LaunchTemplateVersion?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly Password?: string | undefined;
	readonly PasswordInherit?: boolean | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly RamRoleName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityEnhancementStrategy?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SecurityGroupIds?: any[] | undefined;
	readonly SpotDuration?: number | undefined;
	readonly SpotInterruptionBehavior?: string | undefined;
	readonly SpotPriceLimit?: string | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly SystemDiskAutoSnapshotPolicyId?: string | undefined;
	readonly SystemDiskBurstingEnabled?: boolean | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly SystemDiskDescription?: string | undefined;
	readonly SystemDiskDiskName?: string | undefined;
	readonly SystemDiskPerformanceLevel?: string | undefined;
	readonly SystemDiskProvisionedIops?: number | undefined;
	readonly SystemDiskSize?: number | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly UserData?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: string | undefined;
	readonly ZoneIds?: any | string[];
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
	readonly AutoReleaseTime?: string | undefined;
	readonly AutoRenew?: string | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly BackendServerWeight?: number | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly DeploymentSetId?: string | undefined;
	readonly Description?: string | undefined;
	readonly DiskMappings?: DiskMappings[] | undefined;
	readonly EniMappings?: EniMappings[] | undefined;
	readonly HpcClusterId?: string | undefined;
	readonly ImageId?: string | undefined;
	readonly InstanceName?: string | undefined;
	readonly InternetMaxBandwidthIn?: number | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly Ipv6Addresses?: any[] | any;
	readonly KeyPairName?: string | undefined;
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly LaunchTemplateVersion?: string | undefined;
	readonly LoadBalancerIdToAttach?: string | undefined;
	readonly Password?: string | undefined;
	readonly PasswordInherit?: boolean | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly RamRoleName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SecurityGroupIds?: any[] | undefined;
	readonly SpotPriceLimit?: string | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly SystemDiskAutoSnapshotPolicyId?: string | undefined;
	readonly SystemDiskBurstingEnabled?: boolean | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly SystemDiskDescription?: string | undefined;
	readonly SystemDiskDiskName?: string | undefined;
	readonly SystemDiskProvisionedIops?: number | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly ZoneId?: string | undefined;
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
	readonly Frequency?: string | undefined;
	readonly Parameters?: { [key: string]: any } | undefined;
	readonly Sync?: boolean | undefined;
	readonly Timed?: boolean | undefined;
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
	readonly InstanceId?: string | undefined;
	readonly InstanceIdList?: any[] | undefined;
	readonly NetworkInterfaceList?: any[] | undefined;
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
	readonly AutoReleaseTime?: string | undefined;
	readonly DeploymentSetId?: string | undefined;
	readonly Description?: string | undefined;
	readonly DiskMappings?: DiskMappings[] | undefined;
	readonly HostName?: string | undefined;
	readonly ImageId?: string | undefined;
	readonly ImageOwnerAlias?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InstanceName?: string | undefined;
	readonly InstanceType?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly IoOptimized?: string | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly KeyPairName?: string | undefined;
	readonly NetworkInterfaces?: NetworkInterfaces[] | undefined;
	readonly NetworkType?: string | undefined;
	readonly PasswordInherit?: boolean | undefined;
	readonly Period?: number | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly RamRoleName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityEnhancementStrategy?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SpotDuration?: number | undefined;
	readonly SpotPriceLimit?: string | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly SystemDiskDeleteWithInstance?: boolean | undefined;
	readonly SystemDiskDescription?: string | undefined;
	readonly SystemDiskDiskName?: string | undefined;
	readonly SystemDiskPerformanceLevel?: string | undefined;
	readonly SystemDiskSize?: number | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly TemplateResourceGroupId?: string | undefined;
	readonly TemplateTags?: TemplateTags[] | undefined;
	readonly UserData?: string | undefined;
	readonly VersionDescription?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly NetworkInterfaceName?: string | undefined;
	readonly PrimaryIpAddress?: string | undefined;
	readonly PrivateIpAddresses?: string[] | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecondaryPrivateIpAddressCount?: number | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly Tags?: Tags[] | undefined;
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
	readonly TrunkNetworkInstanceId?: any | string;
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
	readonly Description?: string | undefined;
	readonly Entries?: Entries[] | undefined;
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
	readonly NextHopId?: string | undefined;
	readonly NextHopList?: NextHopList[] | undefined;
	readonly NextHopType?: string | undefined;
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
	readonly ContentEncoding?: string | undefined;
	readonly Description?: string | undefined;
	readonly EnableParameter?: boolean | undefined;
	readonly Frequency?: string | undefined;
	readonly KeepCommand?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly Parameters?: { [key: string]: any } | undefined;
	readonly Sync?: boolean | undefined;
	readonly Timed?: boolean | undefined;
	readonly Timeout?: number | undefined;
	readonly WorkingDir?: string | undefined;
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
	readonly SnatEntryName?: string | undefined;
	readonly SourceCIDR?: string | undefined;
	readonly SourceVSwitchId?: string | undefined;
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
	readonly PublicKeyBody?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
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
	readonly Description?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityGroupEgress?: SecurityGroupEgress[] | undefined;
	readonly SecurityGroupIngress?: SecurityGroupIngress[] | undefined;
	readonly SecurityGroupName?: any | string;
	readonly SecurityGroupType?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VpcId?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly DestinationRegionId?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityGroupName?: string | undefined;
	readonly SecurityGroupType?: string | undefined;
	readonly VpcId?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly DestCidrIp?: string | undefined;
	readonly DestGroupId?: string | undefined;
	readonly DestGroupOwnerId?: string | undefined;
	readonly DestPrefixListId?: string | undefined;
	readonly Ipv6DestCidrIp?: string | undefined;
	readonly NicType?: string | undefined;
	readonly Policy?: string | undefined;
	readonly Priority?: number | undefined;
	readonly SecurityGroupId?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly Ipv6SourceCidrIp?: string | undefined;
	readonly NicType?: string | undefined;
	readonly Policy?: string | undefined;
	readonly Priority?: number | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SourceCidrIp?: string | undefined;
	readonly SourceGroupId?: string | undefined;
	readonly SourceGroupOwnerId?: string | undefined;
	readonly SourcePortRange?: string | undefined;
	readonly SourcePrefixListId?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly InstantAccess?: boolean | undefined;
	readonly InstantAccessRetentionDays?: number | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SnapshotName?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly Timeout?: number | undefined;
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
	readonly CidrBlock?: string | undefined;
	readonly Description?: string | undefined;
	readonly EnableIpv6?: boolean | undefined;
	readonly Ipv6CidrBlock?: string | undefined;
	readonly Ipv6Isp?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecondaryCidrBlock?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly UserCidr?: string | undefined;
	readonly VpcName?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly Ipv6CidrBlock?: any | number;
	readonly Tags?: Tags[] | undefined;
	readonly VpcIpv6CidrBlock?: string | undefined;
	readonly VSwitchName?: string | undefined;
	readonly ZoneType?: string | undefined;
	readonly LogicalId: string;
}
export interface DataDisk {
	readonly SnapshotId?: string | undefined;
	readonly Category?: string | undefined;
	readonly Description?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly PerformanceLevel?: string | undefined;
	readonly Size?: number | undefined;
	readonly DeleteWithInstance?: boolean | undefined;
	readonly DiskName?: string | undefined;
	readonly InternetChargeType?: string | undefined;
}
export interface LaunchConfiguration {
	readonly KeyPairName?: string | undefined;
	readonly IoOptimized?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SystemDiskSize?: number | undefined;
	readonly UserData?: string | undefined;
	readonly SystemDiskDescription?: string | undefined;
	readonly SecurityGroupId: string;
	readonly InternetChargeType?: string | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly InstanceName?: string | undefined;
	readonly SystemDiskName?: string | undefined;
	readonly DataDisk?: DataDisk[] | undefined;
	readonly RamRoleName?: string | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly SystemDiskPerformanceLevel?: string | undefined;
	readonly ImageId: string;
	readonly InstanceDescription?: string | undefined;
	readonly Tag?: { key: string; value: string }[] | undefined;
	readonly HostName?: string | undefined;
	readonly CreditSpecification?: string | undefined;
	readonly SecurityEnhancementStrategy?: string | undefined;
	readonly PasswordInherit?: boolean | undefined;
}
export interface LaunchTemplateConfig {
	readonly WeightedCapacity?: number | undefined;
	readonly Priority?: number | undefined;
	readonly VSwitchId: string;
	readonly InstanceType?: string | undefined;
	readonly MaxPrice?: number | undefined;
}
export interface Tag {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface DiskDeviceMapping {
	readonly DiskType?: string | undefined;
	readonly SnapshotId?: string | undefined;
	readonly Device?: string | undefined;
	readonly Size?: number | undefined;
}
export interface DiskMappings {
	readonly SnapshotId?: string | undefined;
	readonly Category?: string | undefined;
	readonly Description?: string | undefined;
	readonly Device?: string | undefined;
	readonly PerformanceLevel?: string | undefined;
	readonly Size: string;
	readonly DiskName?: string | undefined;
}
export interface EniMappings {
	readonly Description?: string | undefined;
	readonly SecurityGroupId: string;
	readonly VSwitchId: string;
	readonly NetworkInterfaceName?: string | undefined;
	readonly PrimaryIpAddress?: string | undefined;
}
export interface NetworkInterfaces {
	readonly Description?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly NetworkInterfaceName?: string | undefined;
	readonly PrimaryIpAddress?: string | undefined;
}
export interface TemplateTags {
	readonly Value?: string | undefined;
	readonly Key?: string | undefined;
}
export interface Entries {
	readonly Description?: string | undefined;
	readonly Cidr: string;
}
export interface NextHopList {
	readonly NextHopType?: string | undefined;
	readonly NextHopId: string;
}
export interface SecurityGroupEgress {
	readonly Policy?: string | undefined;
	readonly PortRange: string;
	readonly Description?: string | undefined;
	readonly DestPrefixListId?: string | undefined;
	readonly Priority?: number | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly DestGroupOwnerId?: string | undefined;
	readonly IpProtocol: string;
	readonly DestCidrIp?: string | undefined;
	readonly NicType?: string | undefined;
	readonly Ipv6DestCidrIp?: string | undefined;
	readonly DestGroupId?: string | undefined;
}
export interface SecurityGroupIngress {
	readonly SourceGroupId?: string | undefined;
	readonly Policy?: string | undefined;
	readonly Description?: string | undefined;
	readonly SourcePortRange?: string | undefined;
	readonly Priority?: number | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SourceGroupOwnerId?: string | undefined;
	readonly Ipv6SourceCidrIp?: string | undefined;
	readonly NicType?: string | undefined;
	readonly PortRange: string;
	readonly SourceCidrIp?: string | undefined;
	readonly IpProtocol: string;
	readonly SourcePrefixListId?: string | undefined;
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
