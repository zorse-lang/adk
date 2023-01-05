import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends RosResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::Application", options);
	}
	public readonly AppId: any;
	public readonly Port: any;
}
export interface ApplicationComponentOutputs {
	readonly AppId: any;
	readonly Port: any;
}
export interface ApplicationComponentInputs {
	readonly ApplicationName: string;
	readonly ClusterId: string;
	readonly BuildPackId?: number | undefined;
	readonly ComponentIds?: string | undefined;
	readonly Description?: string | undefined;
	readonly EcuInfo?: string | undefined;
	readonly HealthCheckURL?: string | undefined;
	readonly LogicalRegionId?: string | undefined;
	readonly PackageType?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly LogicalId: string;
}
export class Cluster extends RosResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::Cluster", options);
	}
	public readonly ClusterId: any;
	public readonly IaasProvider: any;
}
export interface ClusterComponentOutputs {
	readonly ClusterId: any;
	readonly IaasProvider: any;
}
export interface ClusterComponentInputs {
	readonly ClusterName: any | string;
	readonly ClusterType: any | number;
	readonly NetworkMode: number;
	readonly LogicalRegionId?: string | undefined;
	readonly OversoldFactor?: number | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly LogicalId: string;
}
export class ClusterMember extends RosResource<ClusterMemberComponentInputs> implements ClusterMemberComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterMemberComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::ClusterMember", options);
	}
	public readonly ClusterMemberIds: any;
}
export interface ClusterMemberComponentOutputs {
	readonly ClusterMemberIds: any;
}
export interface ClusterMemberComponentInputs {
	readonly ClusterId: any | string;
	readonly InstanceIds: any | string[];
	readonly Password: string;
	readonly LogicalId: string;
}
export class DeployGroup extends RosResource<DeployGroupComponentInputs> implements DeployGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DeployGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::DeployGroup", options);
	}
	public readonly Id: any;
}
export interface DeployGroupComponentOutputs {
	readonly Id: any;
}
export interface DeployGroupComponentInputs {
	readonly AppId: any | string;
	readonly GroupName: any | string;
	readonly LogicalId: string;
}
export class K8sApplication extends RosResource<K8sApplicationComponentInputs> implements K8sApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: K8sApplicationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::K8sApplication", options);
	}
	public readonly AppId: any;
	public readonly ChangeOrderId: any;
	public readonly CsClusterId: any;
}
export interface K8sApplicationComponentOutputs {
	readonly AppId: any;
	readonly ChangeOrderId: any;
	readonly CsClusterId: any;
}
export interface K8sApplicationComponentInputs {
	readonly AppName: any | string;
	readonly ClusterId: any | string;
	readonly ApplicationDescription?: string | undefined;
	readonly Command?: string | undefined;
	readonly CommandArgs?: CommandArgs[] | undefined;
	readonly DeployAcrossNodes?: boolean | undefined;
	readonly DeployAcrossZones?: boolean | undefined;
	readonly EdasContainerVersion?: string | undefined;
	readonly EnableAhas?: boolean | undefined;
	readonly Envs?: Envs[] | undefined;
	readonly ImageUrl?: string | undefined;
	readonly InternetSlbId?: string | undefined;
	readonly InternetSlbPort?: number | undefined;
	readonly InternetSlbProtocol?: string | undefined;
	readonly InternetTargetPort?: number | undefined;
	readonly IntranetSlbId?: string | undefined;
	readonly IntranetSlbPort?: number | undefined;
	readonly IntranetSlbProtocol?: string | undefined;
	readonly IntranetTargetPort?: number | undefined;
	readonly IsMultilingualApp?: boolean | undefined;
	readonly JavaStartUpConfig?: JavaStartUpConfig | undefined;
	readonly JDK?: string | undefined;
	readonly LimitCpu?: number | undefined;
	readonly LimitMem?: number | undefined;
	readonly Liveness?: Liveness | undefined;
	readonly LocalVolume?: LocalVolume[] | undefined;
	readonly LogicalRegionId?: string | undefined;
	readonly MountDescs?: MountDescs[] | undefined;
	readonly Namespace?: string | undefined;
	readonly NasId?: string | undefined;
	readonly PackageType?: string | undefined;
	readonly PackageUrl?: string | undefined;
	readonly PackageVersion?: string | undefined;
	readonly PostStart?: PostStart | undefined;
	readonly PreStop?: PreStop | undefined;
	readonly Readiness?: Readiness | undefined;
	readonly Replicas?: number | undefined;
	readonly RepoId?: string | undefined;
	readonly RequestsCpu?: number | undefined;
	readonly RequestsMem?: number | undefined;
	readonly RuntimeClassName?: string | undefined;
	readonly SlsConfigs?: SlsConfigs[] | undefined;
	readonly StorageType?: string | undefined;
	readonly Timeout?: number | undefined;
	readonly UriEncoding?: string | undefined;
	readonly UseBodyEncoding?: boolean | undefined;
	readonly WebContainer?: string | undefined;
	readonly WebContainerConfig?: WebContainerConfig | undefined;
	readonly LogicalId: string;
}
export class K8sCluster extends RosResource<K8sClusterComponentInputs> implements K8sClusterComponentOutputs {
	constructor(entity: ADKEntity, options: K8sClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::K8sCluster", options);
	}
	public readonly VpcId: any;
	public readonly NodeNum: any;
	public readonly ClusterId: any;
	public readonly ClusterName: any;
	public readonly SubNetCidr: any;
	public readonly NetworkMode: any;
	public readonly ClusterType: any;
	public readonly VswitchId: any;
}
export interface K8sClusterComponentOutputs {
	readonly VpcId: any;
	readonly NodeNum: any;
	readonly ClusterId: any;
	readonly ClusterName: any;
	readonly SubNetCidr: any;
	readonly NetworkMode: any;
	readonly ClusterType: any;
	readonly VswitchId: any;
}
export interface K8sClusterComponentInputs {
	readonly CsClusterId: any | string;
	readonly EnableAsm?: string | undefined;
	readonly NamespaceId?: string | undefined;
	readonly LogicalId: string;
}
export class K8sSlbBinding extends RosResource<K8sSlbBindingComponentInputs> implements K8sSlbBindingComponentOutputs {
	constructor(entity: ADKEntity, options: K8sSlbBindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::K8sSlbBinding", options);
	}
	public readonly LoadBalancerName: any;
	public readonly Address: any;
	public readonly ChangeOrderId: any;
}
export interface K8sSlbBindingComponentOutputs {
	readonly LoadBalancerName: any;
	readonly Address: any;
	readonly ChangeOrderId: any;
}
export interface K8sSlbBindingComponentInputs {
	readonly AppId: any | string;
	readonly ClusterId: string;
	readonly ServicePortInfos: ServicePortInfos[];
	readonly Type: string;
	readonly LoadBalancerId?: any | string;
	readonly Scheduler?: string | undefined;
	readonly Specification?: string | undefined;
	readonly LogicalId: string;
}
export class UserDefineRegion
	extends RosResource<UserDefineRegionComponentInputs>
	implements UserDefineRegionComponentOutputs
{
	constructor(entity: ADKEntity, options: UserDefineRegionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EDAS::UserDefineRegion", options);
	}
	public readonly UserId: any;
	public readonly Id: any;
	public readonly BelongRegion: any;
}
export interface UserDefineRegionComponentOutputs {
	readonly UserId: any;
	readonly Id: any;
	readonly BelongRegion: any;
}
export interface UserDefineRegionComponentInputs {
	readonly RegionName: any | string;
	readonly RegionTag: string;
	readonly DebugEnable?: any | boolean;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export interface CommandArgs {
	readonly Argument?: string | undefined;
}
export interface ConcGCThreads {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface CustomParams {
	readonly Original?: string | undefined;
	readonly Startup?: string | undefined;
}
export interface Envs {
	readonly Value?: string | undefined;
	readonly Name?: string | undefined;
}
export interface Exec {
	readonly Command?: string[] | undefined;
}
export interface G1HeapRegionSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface GCLogFilePath {
	readonly Original?: string | undefined;
	readonly Startup?: string | undefined;
}
export interface GCLogFileSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface HeapDumpOnOutOfMemoryError {
	readonly Original?: boolean | undefined;
	readonly Startup?: string | undefined;
}
export interface HeapDumpPath {
	readonly Original?: string | undefined;
	readonly Startup?: string | undefined;
}
export interface HttpGet {
	readonly Path?: string | undefined;
	readonly HttpHeaders?: HttpHeaders[] | undefined;
	readonly Scheme?: string | undefined;
	readonly Port?: string | undefined;
	readonly Host?: string | undefined;
}
export interface HttpGetHttpHeaders {
	readonly Value?: string | undefined;
	readonly Name?: string | undefined;
}
export interface HttpHeaders {
	readonly Value?: string | undefined;
	readonly Name?: string | undefined;
}
export interface InitialHeapSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface JavaStartUpConfig {
	readonly MaxHeapSize?: MaxHeapSize | undefined;
	readonly UseGCLogFileRotation?: UseGCLogFileRotation | undefined;
	readonly CustomParams?: CustomParams | undefined;
	readonly ParallelGCThreads?: ParallelGCThreads | undefined;
	readonly InitialHeapSize?: InitialHeapSize | undefined;
	readonly NacosUseEndpointParsingRule?: NacosUseEndpointParsingRule | undefined;
	readonly ThreadStackSize?: ThreadStackSize | undefined;
	readonly SurvivorRatio?: SurvivorRatio | undefined;
	readonly PermSize?: PermSize | undefined;
	readonly NewSize?: NewSize | undefined;
	readonly ConcGCThreads?: ConcGCThreads | undefined;
	readonly NewRatio?: NewRatio | undefined;
	readonly GCLogFileSize?: GCLogFileSize | undefined;
	readonly MaxNewSize?: MaxNewSize | undefined;
	readonly G1HeapRegionSize?: G1HeapRegionSize | undefined;
	readonly PrintGC?: PrintGC | undefined;
	readonly MaxDirectMemorySize?: MaxDirectMemorySize | undefined;
	readonly MaxPermSize?: MaxPermSize | undefined;
	readonly HeapDumpOnOutOfMemoryError?: HeapDumpOnOutOfMemoryError | undefined;
	readonly NacosUseCloudNamespaceParsing?: NacosUseCloudNamespaceParsing | undefined;
	readonly HeapDumpPath?: HeapDumpPath | undefined;
	readonly GCLogFilePath?: GCLogFilePath | undefined;
	readonly PrintGCDateStamps?: PrintGCDateStamps | undefined;
	readonly YoungGarbageCollector?: YoungGarbageCollector | undefined;
	readonly OldGarbageCollector?: OldGarbageCollector | undefined;
}
export interface Liveness {
	readonly TimeoutSeconds?: number | undefined;
	readonly Exec?: Exec | undefined;
	readonly InitialDelaySeconds?: number | undefined;
	readonly HttpGet?: HttpGet | undefined;
	readonly PeriodSeconds?: number | undefined;
	readonly TcpSocket?: TcpSocket | undefined;
	readonly FailureThreshold?: number | undefined;
	readonly SuccessThreshold?: number | undefined;
}
export interface LocalVolume {
	readonly MountPath?: string | undefined;
	readonly Type?: string | undefined;
	readonly NodePath?: string | undefined;
}
export interface MaxDirectMemorySize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface MaxHeapSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface MaxNewSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface MaxPermSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface MountDescs {
	readonly MountPath?: string | undefined;
	readonly NasPath?: string | undefined;
}
export interface NacosUseCloudNamespaceParsing {
	readonly Original?: boolean | undefined;
	readonly Startup?: string | undefined;
}
export interface NacosUseEndpointParsingRule {
	readonly Original?: boolean | undefined;
	readonly Startup?: string | undefined;
}
export interface NewRatio {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface NewSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface OldGarbageCollector {
	readonly Original?: string | undefined;
	readonly Startup?: string | undefined;
}
export interface ParallelGCThreads {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface PermSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface PostStart {
	readonly Exec?: PostStartExec | undefined;
	readonly HttpGet?: PostStartHttpGet | undefined;
}
export interface PostStartExec {
	readonly Command?: string[] | undefined;
}
export interface PostStartHttpGet {
	readonly Path?: string | undefined;
	readonly HttpHeaders?: HttpGetHttpHeaders[] | undefined;
	readonly Scheme?: string | undefined;
	readonly Port?: string | undefined;
	readonly Host?: string | undefined;
}
export interface PreStop {
	readonly Exec?: PreStopExec | undefined;
	readonly HttpGet?: PreStopHttpGet | undefined;
}
export interface PreStopExec {
	readonly Command?: string[] | undefined;
}
export interface PreStopHttpGet {
	readonly Path?: string | undefined;
	readonly HttpHeaders?: PreStopHttpGetHttpHeaders[] | undefined;
	readonly Scheme?: string | undefined;
	readonly Port?: string | undefined;
	readonly Host?: string | undefined;
}
export interface PreStopHttpGetHttpHeaders {
	readonly Value?: string | undefined;
	readonly Name?: string | undefined;
}
export interface PrintGC {
	readonly Original?: boolean | undefined;
	readonly Startup?: string | undefined;
}
export interface PrintGCDateStamps {
	readonly Original?: boolean | undefined;
	readonly Startup?: string | undefined;
}
export interface Readiness {
	readonly TimeoutSeconds?: number | undefined;
	readonly Exec?: ReadinessExec | undefined;
	readonly InitialDelaySeconds?: number | undefined;
	readonly HttpGet?: ReadinessHttpGet | undefined;
	readonly PeriodSeconds?: number | undefined;
	readonly TcpSocket?: ReadinessTcpSocket | undefined;
	readonly FailureThreshold?: number | undefined;
	readonly SuccessThreshold?: number | undefined;
}
export interface ReadinessExec {
	readonly Command?: string[] | undefined;
}
export interface ReadinessHttpGet {
	readonly Path?: string | undefined;
	readonly HttpHeaders?: ReadinessHttpGetHttpHeaders[] | undefined;
	readonly Scheme?: string | undefined;
	readonly Port?: string | undefined;
	readonly Host?: string | undefined;
}
export interface ReadinessHttpGetHttpHeaders {
	readonly Value?: string | undefined;
	readonly Name?: string | undefined;
}
export interface ReadinessTcpSocket {
	readonly Port?: string | undefined;
	readonly Host?: string | undefined;
}
export interface SlsConfigs {
	readonly Type?: string | undefined;
	readonly LogDir?: string | undefined;
	readonly Logstore?: string | undefined;
}
export interface SurvivorRatio {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface TcpSocket {
	readonly Port?: string | undefined;
	readonly Host?: string | undefined;
}
export interface ThreadStackSize {
	readonly Original?: number | undefined;
	readonly Startup?: string | undefined;
}
export interface UseGCLogFileRotation {
	readonly Original?: boolean | undefined;
	readonly Startup?: string | undefined;
}
export interface WebContainerConfig {
	readonly HttpPort?: number | undefined;
	readonly UriEncoding?: string | undefined;
	readonly ContextPath?: string | undefined;
	readonly ContextInputType?: string | undefined;
	readonly UseBodyEncoding?: boolean | undefined;
	readonly ServerXml?: string | undefined;
	readonly MaxThreads?: number | undefined;
	readonly UseAdvancedServerXml?: boolean | undefined;
	readonly UseDefaultConfig?: boolean | undefined;
}
export interface YoungGarbageCollector {
	readonly Original?: string | undefined;
	readonly Startup?: string | undefined;
}
export interface ServicePortInfos {
	readonly TargetPort: number;
	readonly LoadBalancerProtocol: string;
	readonly CertId?: string | undefined;
	readonly Port: number;
}
export default {
	Application: Application,
	Cluster: Cluster,
	ClusterMember: ClusterMember,
	DeployGroup: DeployGroup,
	K8sApplication: K8sApplication,
	K8sCluster: K8sCluster,
	K8sSlbBinding: K8sSlbBinding,
	UserDefineRegion: UserDefineRegion,
};
