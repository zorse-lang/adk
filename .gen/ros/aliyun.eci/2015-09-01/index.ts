import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class ContainerGroup extends RosResource<ContainerGroupComponentInputs> implements ContainerGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ContainerGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECI::ContainerGroup", options);
	}
	public readonly InternetIp: any;
	public readonly EniInstanceId: any;
	public readonly ContainerGroupId: any;
	public readonly RegionId: any;
	public readonly IntranetIp: any;
	public readonly Ipv6Address: any;
}
export interface ContainerGroupComponentOutputs {
	readonly InternetIp: any;
	readonly EniInstanceId: any;
	readonly ContainerGroupId: any;
	readonly RegionId: any;
	readonly IntranetIp: any;
	readonly Ipv6Address: any;
}
export interface ContainerGroupComponentInputs {
	readonly Container: Container[];
	readonly ContainerGroupName: any | string;
	readonly SecurityGroupId: any | string;
	readonly VSwitchId: any | string;
	readonly AcrRegistryInfo?: (AcrRegistryInfo[] | undefined) | undefined;
	readonly ActiveDeadlineSeconds?: (number | undefined) | undefined;
	readonly AutoMatchImageCache?: (boolean | undefined) | undefined;
	readonly Cpu?: (number | undefined) | undefined;
	readonly DnsConfig?: (DnsConfig | undefined) | undefined;
	readonly EipInstanceId?: (string | undefined) | undefined;
	readonly HostAliase?: (HostAliase[] | undefined) | undefined;
	readonly ImageRegistryCredential?: (ImageRegistryCredential[] | undefined) | undefined;
	readonly ImageSnapshotId?: (string | undefined) | undefined;
	readonly InitContainer?: (InitContainer[] | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Memory?: (number | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly RestartPolicy?: (string | undefined) | undefined;
	readonly SecurityContextSysctl?: (SecurityContextSysctl[] | undefined) | undefined;
	readonly SlsEnable?: (boolean | undefined) | undefined;
	readonly SpotPriceLimit?: (number | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly Tag?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TerminationGracePeriodSeconds?: (number | undefined) | undefined;
	readonly Volume?: (Volume[] | undefined) | undefined;
	readonly ZoneId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class ImageCache extends RosResource<ImageCacheComponentInputs> implements ImageCacheComponentOutputs {
	constructor(entity: ADKEntity, options: ImageCacheComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECI::ImageCache", options);
	}
	public readonly ImageCacheId: any;
}
export interface ImageCacheComponentOutputs {
	readonly ImageCacheId: any;
}
export interface ImageCacheComponentInputs {
	readonly Image: string[];
	readonly ImageCacheName: string;
	readonly SecurityGroupId: string;
	readonly VSwitchId: string;
	readonly EipInstanceId?: (string | undefined) | undefined;
	readonly ImageRegistryCredential?: (string[] | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AcrRegistryInfo {
	readonly InstanceName?: (string | undefined) | undefined;
	readonly InstanceId: string;
	readonly RegionId?: (string | undefined) | undefined;
	readonly Domain?: (string[] | undefined) | undefined;
}
export interface ConfigFileVolumeConfigFileToPath {
	readonly Path: string;
	readonly Content?: (string | undefined) | undefined;
}
export interface Container {
	readonly ReadinessProbe?: (ReadinessProbe | undefined) | undefined;
	readonly LivenessProbe?: (LivenessProbe | undefined) | undefined;
	readonly Memory?: (number | undefined) | undefined;
	readonly Port?: (Port[] | undefined) | undefined;
	readonly Cpu?: (number | undefined) | undefined;
	readonly Image: string;
	readonly StdinOnce?: (boolean | undefined) | undefined;
	readonly Name: string;
	readonly Stdin?: (boolean | undefined) | undefined;
	readonly WorkingDir?: (string | undefined) | undefined;
	readonly ImagePullPolicy?: (string | undefined) | undefined;
	readonly Command?: (string[] | undefined) | undefined;
	readonly Arg?: (string[] | undefined) | undefined;
	readonly Tty?: (boolean | undefined) | undefined;
	readonly SecurityContext?: (SecurityContext | undefined) | undefined;
	readonly VolumeMount?: (VolumeMount[] | undefined) | undefined;
	readonly EnvironmentVar?: (EnvironmentVar[] | undefined) | undefined;
}
export interface DnsConfig {
	readonly NameServer?: (string[] | undefined) | undefined;
	readonly Search?: (string[] | undefined) | undefined;
	readonly Option?: (Option[] | undefined) | undefined;
}
export interface EnvironmentVar {
	readonly Value?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
	readonly FieldRefFieldPath?: (string | undefined) | undefined;
}
export interface HostAliase {
	readonly Ip?: (string | undefined) | undefined;
	readonly Hostname?: (string[] | undefined) | undefined;
}
export interface ImageRegistryCredential {
	readonly UserName: string;
	readonly Server: string;
	readonly Password: string;
}
export interface InitContainer {
	readonly WorkingDir?: (string | undefined) | undefined;
	readonly ImagePullPolicy?: (string | undefined) | undefined;
	readonly Command?: (string[] | undefined) | undefined;
	readonly Memory?: (number | undefined) | undefined;
	readonly Port?: (InitContainerPort[] | undefined) | undefined;
	readonly Arg?: (string[] | undefined) | undefined;
	readonly SecurityContext?: (InitContainerSecurityContext | undefined) | undefined;
	readonly VolumeMount?: (InitContainerVolumeMount[] | undefined) | undefined;
	readonly Cpu?: (number | undefined) | undefined;
	readonly Image?: (string | undefined) | undefined;
	readonly EnvironmentVar?: (InitContainerEnvironmentVar[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface InitContainerEnvironmentVar {
	readonly Value?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
	readonly FieldRefFieldPath?: (string | undefined) | undefined;
}
export interface InitContainerPort {
	readonly Port?: (number | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
}
export interface InitContainerSecurityContext {
	readonly RunAsUser?: (number | undefined) | undefined;
	readonly ReadOnlyRootFilesystem?: (boolean | undefined) | undefined;
	readonly CapabilityAdd?: (string[] | undefined) | undefined;
}
export interface InitContainerVolumeMount {
	readonly ReadOnly?: (boolean | undefined) | undefined;
	readonly MountPath?: (string | undefined) | undefined;
	readonly Name?: (number | undefined) | undefined;
}
export interface LivenessProbe {
	readonly TimeoutSeconds?: (number | undefined) | undefined;
	readonly InitialDelaySeconds?: (number | undefined) | undefined;
	readonly PeriodSeconds?: (number | undefined) | undefined;
	readonly FailureThreshold?: (number | undefined) | undefined;
	readonly SuccessThreshold?: (number | undefined) | undefined;
	readonly ExecCommand?: (string[] | undefined) | undefined;
	readonly HttpGetPath?: (string | undefined) | undefined;
	readonly HttpGetPort?: (number | undefined) | undefined;
	readonly HttpGetScheme?: (string | undefined) | undefined;
	readonly TcpSocketPort?: (number | undefined) | undefined;
}
export interface Option {
	readonly Value?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface Port {
	readonly Port?: (number | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
}
export interface ReadinessProbe {
	readonly TimeoutSeconds?: (number | undefined) | undefined;
	readonly InitialDelaySeconds?: (number | undefined) | undefined;
	readonly PeriodSeconds?: (number | undefined) | undefined;
	readonly FailureThreshold?: (number | undefined) | undefined;
	readonly SuccessThreshold?: (number | undefined) | undefined;
	readonly ExecCommand?: (string[] | undefined) | undefined;
	readonly HttpGetPath?: (string | undefined) | undefined;
	readonly HttpGetPort?: (number | undefined) | undefined;
	readonly HttpGetScheme?: (string | undefined) | undefined;
	readonly TcpSocketPort?: (number | undefined) | undefined;
}
export interface SecurityContext {
	readonly RunAsUser?: (number | undefined) | undefined;
	readonly ReadOnlyRootFilesystem?: (boolean | undefined) | undefined;
	readonly CapabilityAdd?: (string[] | undefined) | undefined;
}
export interface SecurityContextSysctl {
	readonly Value?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface Tag {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface Volume {
	readonly Type: string;
	readonly Name: string;
	readonly ConfigFileVolumeConfigFileToPath?: (ConfigFileVolumeConfigFileToPath[] | undefined) | undefined;
	readonly EmptyDirVolumeMedium?: (string | undefined) | undefined;
	readonly NFSVolumePath?: (string | undefined) | undefined;
	readonly NFSVolumeReadOnly?: (boolean | undefined) | undefined;
	readonly NFSVolumeServer?: (string | undefined) | undefined;
}
export interface VolumeMount {
	readonly ReadOnly?: (boolean | undefined) | undefined;
	readonly MountPath?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export default {
	ContainerGroup: ContainerGroup,
	ImageCache: ImageCache,
};
