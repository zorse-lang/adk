import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Version extends GdmResource<VersionComponentInputs> implements VersionComponentOutputs {
	constructor(entity: ADKEntity, options: VersionComponentInputs) {
		super(entity, options.name, "appengine.v1.version", options);
	}
}
export interface VersionComponentOutputs {}
export interface VersionComponentInputs {
	readonly apiConfig?: ApiConfigHandler | undefined;
	readonly appEngineApis?: boolean | undefined;
	readonly automaticScaling?: AutomaticScaling | undefined;
	readonly basicScaling?: BasicScaling | undefined;
	readonly betaSettings?: { [P in string]: string } | undefined;
	readonly buildEnvVariables?: { [P in string]: string } | undefined;
	readonly createdBy?: string | undefined;
	readonly createTime?: string | undefined;
	readonly defaultExpiration?: string | undefined;
	readonly deployment?: Deployment | undefined;
	readonly diskUsageBytes?: string | undefined;
	readonly endpointsApiService?: EndpointsApiService | undefined;
	readonly entrypoint?: Entrypoint | undefined;
	readonly env?: string | undefined;
	readonly envVariables?: { [P in string]: string } | undefined;
	readonly errorHandlers?: ErrorHandler[] | undefined;
	readonly handlers?: UrlMap[] | undefined;
	readonly healthCheck?: HealthCheck | undefined;
	readonly id?: string | undefined;
	readonly inboundServices?: string[] | undefined;
	readonly instanceClass?: string | undefined;
	readonly libraries?: Library[] | undefined;
	readonly livenessCheck?: LivenessCheck | undefined;
	readonly manualScaling?: ManualScaling | undefined;
	readonly name: string;
	readonly network?: Network | undefined;
	readonly nobuildFilesRegex?: string | undefined;
	readonly readinessCheck?: ReadinessCheck | undefined;
	readonly resources?: Resources | undefined;
	readonly runtime?: string | undefined;
	readonly runtimeApiVersion?: string | undefined;
	readonly runtimeChannel?: string | undefined;
	readonly runtimeMainExecutablePath?: string | undefined;
	readonly serviceAccount?: string | undefined;
	readonly servingStatus?: string | undefined;
	readonly threadsafe?: boolean | undefined;
	readonly versionUrl?: string | undefined;
	readonly vm?: boolean | undefined;
	readonly vpcAccessConnector?: VpcAccessConnector | undefined;
	readonly zones?: string[] | undefined;
	readonly type: string;
}
export interface ApiConfigHandler {
	readonly authFailAction?: string | undefined;
	readonly login?: string | undefined;
	readonly script?: string | undefined;
	readonly securityLevel?: string | undefined;
	readonly url?: string | undefined;
}
export interface ApiEndpointHandler {
	readonly scriptPath?: string | undefined;
}
export interface AutomaticScaling {
	readonly coolDownPeriod?: string | undefined;
	readonly cpuUtilization?: CpuUtilization | undefined;
	readonly diskUtilization?: DiskUtilization | undefined;
	readonly maxConcurrentRequests?: number | undefined;
	readonly maxIdleInstances?: number | undefined;
	readonly maxPendingLatency?: string | undefined;
	readonly maxTotalInstances?: number | undefined;
	readonly minIdleInstances?: number | undefined;
	readonly minPendingLatency?: string | undefined;
	readonly minTotalInstances?: number | undefined;
	readonly networkUtilization?: NetworkUtilization | undefined;
	readonly requestUtilization?: RequestUtilization | undefined;
	readonly standardSchedulerSettings?: StandardSchedulerSettings | undefined;
}
export interface BasicScaling {
	readonly idleTimeout?: string | undefined;
	readonly maxInstances?: number | undefined;
}
export interface CloudBuildOptions {
	readonly appYamlPath?: string | undefined;
	readonly cloudBuildTimeout?: string | undefined;
}
export interface ContainerInfo {
	readonly image?: string | undefined;
}
export interface CpuUtilization {
	readonly aggregationWindowLength?: string | undefined;
	readonly targetUtilization?: number | undefined;
}
export interface Deployment {
	readonly cloudBuildOptions?: CloudBuildOptions | undefined;
	readonly container?: ContainerInfo | undefined;
	readonly files?: { [P in string]: FileInfo } | undefined;
	readonly zip?: ZipInfo | undefined;
}
export interface DiskUtilization {
	readonly targetReadBytesPerSecond?: number | undefined;
	readonly targetReadOpsPerSecond?: number | undefined;
	readonly targetWriteBytesPerSecond?: number | undefined;
	readonly targetWriteOpsPerSecond?: number | undefined;
}
export interface EndpointsApiService {
	readonly configId?: string | undefined;
	readonly disableTraceSampling?: boolean | undefined;
	readonly name?: string | undefined;
	readonly rolloutStrategy?: string | undefined;
}
export interface Entrypoint {
	readonly shell?: string | undefined;
}
export interface ErrorHandler {
	readonly errorCode?: string | undefined;
	readonly mimeType?: string | undefined;
	readonly staticFile?: string | undefined;
}
export interface FileInfo {
	readonly mimeType?: string | undefined;
	readonly sha1Sum?: string | undefined;
	readonly sourceUrl?: string | undefined;
}
export interface HealthCheck {
	readonly checkInterval?: string | undefined;
	readonly disableHealthCheck?: boolean | undefined;
	readonly healthyThreshold?: number | undefined;
	readonly host?: string | undefined;
	readonly restartThreshold?: number | undefined;
	readonly timeout?: string | undefined;
	readonly unhealthyThreshold?: number | undefined;
}
export interface Library {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface LivenessCheck {
	readonly checkInterval?: string | undefined;
	readonly failureThreshold?: number | undefined;
	readonly host?: string | undefined;
	readonly initialDelay?: string | undefined;
	readonly path?: string | undefined;
	readonly successThreshold?: number | undefined;
	readonly timeout?: string | undefined;
}
export interface ManualScaling {
	readonly instances?: number | undefined;
}
export interface Network {
	readonly forwardedPorts?: string[] | undefined;
	readonly instanceIpMode?: string | undefined;
	readonly instanceTag?: string | undefined;
	readonly name?: string | undefined;
	readonly sessionAffinity?: boolean | undefined;
	readonly subnetworkName?: string | undefined;
}
export interface NetworkUtilization {
	readonly targetReceivedBytesPerSecond?: number | undefined;
	readonly targetReceivedPacketsPerSecond?: number | undefined;
	readonly targetSentBytesPerSecond?: number | undefined;
	readonly targetSentPacketsPerSecond?: number | undefined;
}
export interface ReadinessCheck {
	readonly appStartTimeout?: string | undefined;
	readonly checkInterval?: string | undefined;
	readonly failureThreshold?: number | undefined;
	readonly host?: string | undefined;
	readonly path?: string | undefined;
	readonly successThreshold?: number | undefined;
	readonly timeout?: string | undefined;
}
export interface RequestUtilization {
	readonly targetConcurrentRequests?: number | undefined;
	readonly targetRequestCountPerSecond?: number | undefined;
}
export interface Resources {
	readonly cpu?: number | undefined;
	readonly diskGb?: number | undefined;
	readonly kmsKeyReference?: string | undefined;
	readonly memoryGb?: number | undefined;
	readonly volumes?: Volume[] | undefined;
}
export interface ScriptHandler {
	readonly scriptPath?: string | undefined;
}
export interface StandardSchedulerSettings {
	readonly maxInstances?: number | undefined;
	readonly minInstances?: number | undefined;
	readonly targetCpuUtilization?: number | undefined;
	readonly targetThroughputUtilization?: number | undefined;
}
export interface StaticFilesHandler {
	readonly applicationReadable?: boolean | undefined;
	readonly expiration?: string | undefined;
	readonly httpHeaders?: { [P in string]: string } | undefined;
	readonly mimeType?: string | undefined;
	readonly path?: string | undefined;
	readonly requireMatchingFile?: boolean | undefined;
	readonly uploadPathRegex?: string | undefined;
}
export interface UrlMap {
	readonly apiEndpoint?: ApiEndpointHandler | undefined;
	readonly authFailAction?: string | undefined;
	readonly login?: string | undefined;
	readonly redirectHttpResponseCode?: string | undefined;
	readonly script?: ScriptHandler | undefined;
	readonly securityLevel?: string | undefined;
	readonly staticFiles?: StaticFilesHandler | undefined;
	readonly urlRegex?: string | undefined;
}
export interface Volume {
	readonly name?: string | undefined;
	readonly sizeGb?: number | undefined;
	readonly volumeType?: string | undefined;
}
export interface VpcAccessConnector {
	readonly egressSetting?: string | undefined;
	readonly name?: string | undefined;
}
export interface ZipInfo {
	readonly filesCount?: number | undefined;
	readonly sourceUrl?: string | undefined;
}
export default {
	Version: Version,
};
