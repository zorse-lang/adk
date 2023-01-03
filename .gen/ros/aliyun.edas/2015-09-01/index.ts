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
	readonly BuildPackId?: (number | undefined) | undefined;
	readonly ComponentIds?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EcuInfo?: (string | undefined) | undefined;
	readonly HealthCheckURL?: (string | undefined) | undefined;
	readonly LogicalRegionId?: (string | undefined) | undefined;
	readonly PackageType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
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
	readonly LogicalRegionId?: (string | undefined) | undefined;
	readonly OversoldFactor?: (number | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
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
	readonly ApplicationDescription?: (string | undefined) | undefined;
	readonly Command?: (string | undefined) | undefined;
	readonly CommandArgs?: (CommandArgs[] | undefined) | undefined;
	readonly DeployAcrossNodes?: (boolean | undefined) | undefined;
	readonly DeployAcrossZones?: (boolean | undefined) | undefined;
	readonly EdasContainerVersion?: (string | undefined) | undefined;
	readonly EnableAhas?: (boolean | undefined) | undefined;
	readonly Envs?: (Envs[] | undefined) | undefined;
	readonly ImageUrl?: (string | undefined) | undefined;
	readonly InternetSlbId?: (string | undefined) | undefined;
	readonly InternetSlbPort?: (number | undefined) | undefined;
	readonly InternetSlbProtocol?: (string | undefined) | undefined;
	readonly InternetTargetPort?: (number | undefined) | undefined;
	readonly IntranetSlbId?: (string | undefined) | undefined;
	readonly IntranetSlbPort?: (number | undefined) | undefined;
	readonly IntranetSlbProtocol?: (string | undefined) | undefined;
	readonly IntranetTargetPort?: (number | undefined) | undefined;
	readonly IsMultilingualApp?: (boolean | undefined) | undefined;
	readonly JavaStartUpConfig?: (JavaStartUpConfig | undefined) | undefined;
	readonly JDK?: (string | undefined) | undefined;
	readonly LimitCpu?: (number | undefined) | undefined;
	readonly LimitMem?: (number | undefined) | undefined;
	readonly Liveness?: (Liveness | undefined) | undefined;
	readonly LocalVolume?: (LocalVolume[] | undefined) | undefined;
	readonly LogicalRegionId?: (string | undefined) | undefined;
	readonly MountDescs?: (MountDescs[] | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
	readonly NasId?: (string | undefined) | undefined;
	readonly PackageType?: (string | undefined) | undefined;
	readonly PackageUrl?: (string | undefined) | undefined;
	readonly PackageVersion?: (string | undefined) | undefined;
	readonly PostStart?: (PostStart | undefined) | undefined;
	readonly PreStop?: (PreStop | undefined) | undefined;
	readonly Readiness?: (Readiness | undefined) | undefined;
	readonly Replicas?: (number | undefined) | undefined;
	readonly RepoId?: (string | undefined) | undefined;
	readonly RequestsCpu?: (number | undefined) | undefined;
	readonly RequestsMem?: (number | undefined) | undefined;
	readonly RuntimeClassName?: (string | undefined) | undefined;
	readonly SlsConfigs?: (SlsConfigs[] | undefined) | undefined;
	readonly StorageType?: (string | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly UriEncoding?: (string | undefined) | undefined;
	readonly UseBodyEncoding?: (boolean | undefined) | undefined;
	readonly WebContainer?: (string | undefined) | undefined;
	readonly WebContainerConfig?: (WebContainerConfig | undefined) | undefined;
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
	readonly EnableAsm?: (string | undefined) | undefined;
	readonly NamespaceId?: (string | undefined) | undefined;
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
	readonly LoadBalancerId?: (any | string) | undefined;
	readonly Scheduler?: (string | undefined) | undefined;
	readonly Specification?: (string | undefined) | undefined;
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
	readonly DebugEnable?: (any | boolean) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CommandArgs {
	readonly Argument?: (string | undefined) | undefined;
}
export interface ConcGCThreads {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface CustomParams {
	readonly Original?: (string | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface Envs {
	readonly Value?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface Exec {
	readonly Command?: (string[] | undefined) | undefined;
}
export interface G1HeapRegionSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface GCLogFilePath {
	readonly Original?: (string | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface GCLogFileSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface HeapDumpOnOutOfMemoryError {
	readonly Original?: (boolean | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface HeapDumpPath {
	readonly Original?: (string | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface HttpGet {
	readonly Path?: (string | undefined) | undefined;
	readonly HttpHeaders?: (HttpHeaders[] | undefined) | undefined;
	readonly Scheme?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
}
export interface HttpGetHttpHeaders {
	readonly Value?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface HttpHeaders {
	readonly Value?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface InitialHeapSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface JavaStartUpConfig {
	readonly MaxHeapSize?: (MaxHeapSize | undefined) | undefined;
	readonly UseGCLogFileRotation?: (UseGCLogFileRotation | undefined) | undefined;
	readonly CustomParams?: (CustomParams | undefined) | undefined;
	readonly ParallelGCThreads?: (ParallelGCThreads | undefined) | undefined;
	readonly InitialHeapSize?: (InitialHeapSize | undefined) | undefined;
	readonly NacosUseEndpointParsingRule?: (NacosUseEndpointParsingRule | undefined) | undefined;
	readonly ThreadStackSize?: (ThreadStackSize | undefined) | undefined;
	readonly SurvivorRatio?: (SurvivorRatio | undefined) | undefined;
	readonly PermSize?: (PermSize | undefined) | undefined;
	readonly NewSize?: (NewSize | undefined) | undefined;
	readonly ConcGCThreads?: (ConcGCThreads | undefined) | undefined;
	readonly NewRatio?: (NewRatio | undefined) | undefined;
	readonly GCLogFileSize?: (GCLogFileSize | undefined) | undefined;
	readonly MaxNewSize?: (MaxNewSize | undefined) | undefined;
	readonly G1HeapRegionSize?: (G1HeapRegionSize | undefined) | undefined;
	readonly PrintGC?: (PrintGC | undefined) | undefined;
	readonly MaxDirectMemorySize?: (MaxDirectMemorySize | undefined) | undefined;
	readonly MaxPermSize?: (MaxPermSize | undefined) | undefined;
	readonly HeapDumpOnOutOfMemoryError?: (HeapDumpOnOutOfMemoryError | undefined) | undefined;
	readonly NacosUseCloudNamespaceParsing?: (NacosUseCloudNamespaceParsing | undefined) | undefined;
	readonly HeapDumpPath?: (HeapDumpPath | undefined) | undefined;
	readonly GCLogFilePath?: (GCLogFilePath | undefined) | undefined;
	readonly PrintGCDateStamps?: (PrintGCDateStamps | undefined) | undefined;
	readonly YoungGarbageCollector?: (YoungGarbageCollector | undefined) | undefined;
	readonly OldGarbageCollector?: (OldGarbageCollector | undefined) | undefined;
}
export interface Liveness {
	readonly TimeoutSeconds?: (number | undefined) | undefined;
	readonly Exec?: (Exec | undefined) | undefined;
	readonly InitialDelaySeconds?: (number | undefined) | undefined;
	readonly HttpGet?: (HttpGet | undefined) | undefined;
	readonly PeriodSeconds?: (number | undefined) | undefined;
	readonly TcpSocket?: (TcpSocket | undefined) | undefined;
	readonly FailureThreshold?: (number | undefined) | undefined;
	readonly SuccessThreshold?: (number | undefined) | undefined;
}
export interface LocalVolume {
	readonly MountPath?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly NodePath?: (string | undefined) | undefined;
}
export interface MaxDirectMemorySize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface MaxHeapSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface MaxNewSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface MaxPermSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface MountDescs {
	readonly MountPath?: (string | undefined) | undefined;
	readonly NasPath?: (string | undefined) | undefined;
}
export interface NacosUseCloudNamespaceParsing {
	readonly Original?: (boolean | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface NacosUseEndpointParsingRule {
	readonly Original?: (boolean | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface NewRatio {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface NewSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface OldGarbageCollector {
	readonly Original?: (string | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface ParallelGCThreads {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface PermSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface PostStart {
	readonly Exec?: (PostStartExec | undefined) | undefined;
	readonly HttpGet?: (PostStartHttpGet | undefined) | undefined;
}
export interface PostStartExec {
	readonly Command?: (string[] | undefined) | undefined;
}
export interface PostStartHttpGet {
	readonly Path?: (string | undefined) | undefined;
	readonly HttpHeaders?: (HttpGetHttpHeaders[] | undefined) | undefined;
	readonly Scheme?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
}
export interface PreStop {
	readonly Exec?: (PreStopExec | undefined) | undefined;
	readonly HttpGet?: (PreStopHttpGet | undefined) | undefined;
}
export interface PreStopExec {
	readonly Command?: (string[] | undefined) | undefined;
}
export interface PreStopHttpGet {
	readonly Path?: (string | undefined) | undefined;
	readonly HttpHeaders?: (PreStopHttpGetHttpHeaders[] | undefined) | undefined;
	readonly Scheme?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
}
export interface PreStopHttpGetHttpHeaders {
	readonly Value?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface PrintGC {
	readonly Original?: (boolean | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface PrintGCDateStamps {
	readonly Original?: (boolean | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface Readiness {
	readonly TimeoutSeconds?: (number | undefined) | undefined;
	readonly Exec?: (ReadinessExec | undefined) | undefined;
	readonly InitialDelaySeconds?: (number | undefined) | undefined;
	readonly HttpGet?: (ReadinessHttpGet | undefined) | undefined;
	readonly PeriodSeconds?: (number | undefined) | undefined;
	readonly TcpSocket?: (ReadinessTcpSocket | undefined) | undefined;
	readonly FailureThreshold?: (number | undefined) | undefined;
	readonly SuccessThreshold?: (number | undefined) | undefined;
}
export interface ReadinessExec {
	readonly Command?: (string[] | undefined) | undefined;
}
export interface ReadinessHttpGet {
	readonly Path?: (string | undefined) | undefined;
	readonly HttpHeaders?: (ReadinessHttpGetHttpHeaders[] | undefined) | undefined;
	readonly Scheme?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
}
export interface ReadinessHttpGetHttpHeaders {
	readonly Value?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface ReadinessTcpSocket {
	readonly Port?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
}
export interface SlsConfigs {
	readonly Type?: (string | undefined) | undefined;
	readonly LogDir?: (string | undefined) | undefined;
	readonly Logstore?: (string | undefined) | undefined;
}
export interface SurvivorRatio {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface TcpSocket {
	readonly Port?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
}
export interface ThreadStackSize {
	readonly Original?: (number | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface UseGCLogFileRotation {
	readonly Original?: (boolean | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface WebContainerConfig {
	readonly HttpPort?: (number | undefined) | undefined;
	readonly UriEncoding?: (string | undefined) | undefined;
	readonly ContextPath?: (string | undefined) | undefined;
	readonly ContextInputType?: (string | undefined) | undefined;
	readonly UseBodyEncoding?: (boolean | undefined) | undefined;
	readonly ServerXml?: (string | undefined) | undefined;
	readonly MaxThreads?: (number | undefined) | undefined;
	readonly UseAdvancedServerXml?: (boolean | undefined) | undefined;
	readonly UseDefaultConfig?: (boolean | undefined) | undefined;
}
export interface YoungGarbageCollector {
	readonly Original?: (string | undefined) | undefined;
	readonly Startup?: (string | undefined) | undefined;
}
export interface ServicePortInfos {
	readonly TargetPort: number;
	readonly LoadBalancerProtocol: string;
	readonly CertId?: (string | undefined) | undefined;
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
