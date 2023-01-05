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
	readonly AcrRegistryInfo?: AcrRegistryInfo[] | undefined;
	readonly ActiveDeadlineSeconds?: number | undefined;
	readonly AutoMatchImageCache?: boolean | undefined;
	readonly Cpu?: number | undefined;
	readonly DnsConfig?: DnsConfig | undefined;
	readonly EipInstanceId?: string | undefined;
	readonly HostAliase?: HostAliase[] | undefined;
	readonly ImageRegistryCredential?: ImageRegistryCredential[] | undefined;
	readonly ImageSnapshotId?: string | undefined;
	readonly InitContainer?: InitContainer[] | undefined;
	readonly InstanceType?: string | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly Memory?: number | undefined;
	readonly RamRoleName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly RestartPolicy?: string | undefined;
	readonly SecurityContextSysctl?: SecurityContextSysctl[] | undefined;
	readonly SlsEnable?: boolean | undefined;
	readonly SpotPriceLimit?: number | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly Tag?: { key: string; value: string }[] | undefined;
	readonly TerminationGracePeriodSeconds?: number | undefined;
	readonly Volume?: Volume[] | undefined;
	readonly ZoneId?: any | string;
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
	readonly EipInstanceId?: string | undefined;
	readonly ImageRegistryCredential?: string[] | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly LogicalId: string;
}
export interface AcrRegistryInfo {
	readonly InstanceName?: string | undefined;
	readonly InstanceId: string;
	readonly RegionId?: string | undefined;
	readonly Domain?: string[] | undefined;
}
export interface ConfigFileVolumeConfigFileToPath {
	readonly Path: string;
	readonly Content?: string | undefined;
}
export interface Container {
	readonly ReadinessProbe?: ReadinessProbe | undefined;
	readonly LivenessProbe?: LivenessProbe | undefined;
	readonly Memory?: number | undefined;
	readonly Port?: Port[] | undefined;
	readonly Cpu?: number | undefined;
	readonly Image: string;
	readonly StdinOnce?: boolean | undefined;
	readonly Name: string;
	readonly Stdin?: boolean | undefined;
	readonly WorkingDir?: string | undefined;
	readonly ImagePullPolicy?: string | undefined;
	readonly Command?: string[] | undefined;
	readonly Arg?: string[] | undefined;
	readonly Tty?: boolean | undefined;
	readonly SecurityContext?: SecurityContext | undefined;
	readonly VolumeMount?: VolumeMount[] | undefined;
	readonly EnvironmentVar?: EnvironmentVar[] | undefined;
}
export interface DnsConfig {
	readonly NameServer?: string[] | undefined;
	readonly Search?: string[] | undefined;
	readonly Option?: Option[] | undefined;
}
export interface EnvironmentVar {
	readonly Value?: string | undefined;
	readonly Key?: string | undefined;
	readonly FieldRefFieldPath?: string | undefined;
}
export interface HostAliase {
	readonly Ip?: string | undefined;
	readonly Hostname?: string[] | undefined;
}
export interface ImageRegistryCredential {
	readonly UserName: string;
	readonly Server: string;
	readonly Password: string;
}
export interface InitContainer {
	readonly WorkingDir?: string | undefined;
	readonly ImagePullPolicy?: string | undefined;
	readonly Command?: string[] | undefined;
	readonly Memory?: number | undefined;
	readonly Port?: InitContainerPort[] | undefined;
	readonly Arg?: string[] | undefined;
	readonly SecurityContext?: InitContainerSecurityContext | undefined;
	readonly VolumeMount?: InitContainerVolumeMount[] | undefined;
	readonly Cpu?: number | undefined;
	readonly Image?: string | undefined;
	readonly EnvironmentVar?: InitContainerEnvironmentVar[] | undefined;
	readonly Name?: string | undefined;
}
export interface InitContainerEnvironmentVar {
	readonly Value?: string | undefined;
	readonly Key?: string | undefined;
	readonly FieldRefFieldPath?: string | undefined;
}
export interface InitContainerPort {
	readonly Port?: number | undefined;
	readonly Protocol?: string | undefined;
}
export interface InitContainerSecurityContext {
	readonly RunAsUser?: number | undefined;
	readonly ReadOnlyRootFilesystem?: boolean | undefined;
	readonly CapabilityAdd?: string[] | undefined;
}
export interface InitContainerVolumeMount {
	readonly ReadOnly?: boolean | undefined;
	readonly MountPath?: string | undefined;
	readonly Name?: number | undefined;
}
export interface LivenessProbe {
	readonly TimeoutSeconds?: number | undefined;
	readonly InitialDelaySeconds?: number | undefined;
	readonly PeriodSeconds?: number | undefined;
	readonly FailureThreshold?: number | undefined;
	readonly SuccessThreshold?: number | undefined;
	readonly ExecCommand?: string[] | undefined;
	readonly HttpGetPath?: string | undefined;
	readonly HttpGetPort?: number | undefined;
	readonly HttpGetScheme?: string | undefined;
	readonly TcpSocketPort?: number | undefined;
}
export interface Option {
	readonly Value?: string | undefined;
	readonly Name?: string | undefined;
}
export interface Port {
	readonly Port?: number | undefined;
	readonly Protocol?: string | undefined;
}
export interface ReadinessProbe {
	readonly TimeoutSeconds?: number | undefined;
	readonly InitialDelaySeconds?: number | undefined;
	readonly PeriodSeconds?: number | undefined;
	readonly FailureThreshold?: number | undefined;
	readonly SuccessThreshold?: number | undefined;
	readonly ExecCommand?: string[] | undefined;
	readonly HttpGetPath?: string | undefined;
	readonly HttpGetPort?: number | undefined;
	readonly HttpGetScheme?: string | undefined;
	readonly TcpSocketPort?: number | undefined;
}
export interface SecurityContext {
	readonly RunAsUser?: number | undefined;
	readonly ReadOnlyRootFilesystem?: boolean | undefined;
	readonly CapabilityAdd?: string[] | undefined;
}
export interface SecurityContextSysctl {
	readonly Value?: string | undefined;
	readonly Name?: string | undefined;
}
export interface Tag {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface Volume {
	readonly Type: string;
	readonly Name: string;
	readonly ConfigFileVolumeConfigFileToPath?: ConfigFileVolumeConfigFileToPath[] | undefined;
	readonly EmptyDirVolumeMedium?: string | undefined;
	readonly NFSVolumePath?: string | undefined;
	readonly NFSVolumeReadOnly?: boolean | undefined;
	readonly NFSVolumeServer?: string | undefined;
}
export interface VolumeMount {
	readonly ReadOnly?: boolean | undefined;
	readonly MountPath?: string | undefined;
	readonly Name?: string | undefined;
}
export default {
	ContainerGroup: ContainerGroup,
	ImageCache: ImageCache,
};
