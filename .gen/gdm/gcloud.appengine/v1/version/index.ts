import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Version extends GdmResource<VersionComponentInputs> implements VersionComponentOutputs {
	constructor(entity: ADKEntity, options: VersionComponentInputs) {
		super(entity, options.name, "appengine.v1.version", options);
	}
}
export interface VersionComponentOutputs {}
export interface VersionComponentInputs {
	readonly apiConfig?: ApiConfigHandler;
	readonly appEngineApis?: boolean;
	readonly automaticScaling?: AutomaticScaling;
	readonly basicScaling?: BasicScaling;
	readonly betaSettings?: { [P in string]: string };
	readonly buildEnvVariables?: { [P in string]: string };
	readonly createdBy?: string;
	readonly createTime?: string;
	readonly defaultExpiration?: string;
	readonly deployment?: Deployment;
	readonly diskUsageBytes?: string;
	readonly endpointsApiService?: EndpointsApiService;
	readonly entrypoint?: Entrypoint;
	readonly env?: string;
	readonly envVariables?: { [P in string]: string };
	readonly errorHandlers?: ErrorHandler[];
	readonly handlers?: UrlMap[];
	readonly healthCheck?: HealthCheck;
	readonly id?: string;
	readonly inboundServices?: string[];
	readonly instanceClass?: string;
	readonly libraries?: Library[];
	readonly livenessCheck?: LivenessCheck;
	readonly manualScaling?: ManualScaling;
	readonly name: string;
	readonly network?: Network;
	readonly nobuildFilesRegex?: string;
	readonly readinessCheck?: ReadinessCheck;
	readonly resources?: Resources;
	readonly runtime?: string;
	readonly runtimeApiVersion?: string;
	readonly runtimeChannel?: string;
	readonly runtimeMainExecutablePath?: string;
	readonly serviceAccount?: string;
	readonly servingStatus?: string;
	readonly threadsafe?: boolean;
	readonly versionUrl?: string;
	readonly vm?: boolean;
	readonly vpcAccessConnector?: VpcAccessConnector;
	readonly zones?: string[];
}
export interface ApiConfigHandler {
	readonly authFailAction?: string;
	readonly login?: string;
	readonly script?: string;
	readonly securityLevel?: string;
	readonly url?: string;
}
export interface ApiEndpointHandler {
	readonly scriptPath?: string;
}
export interface AutomaticScaling {
	readonly coolDownPeriod?: string;
	readonly cpuUtilization?: CpuUtilization;
	readonly diskUtilization?: DiskUtilization;
	readonly maxConcurrentRequests?: number;
	readonly maxIdleInstances?: number;
	readonly maxPendingLatency?: string;
	readonly maxTotalInstances?: number;
	readonly minIdleInstances?: number;
	readonly minPendingLatency?: string;
	readonly minTotalInstances?: number;
	readonly networkUtilization?: NetworkUtilization;
	readonly requestUtilization?: RequestUtilization;
	readonly standardSchedulerSettings?: StandardSchedulerSettings;
}
export interface BasicScaling {
	readonly idleTimeout?: string;
	readonly maxInstances?: number;
}
export interface CloudBuildOptions {
	readonly appYamlPath?: string;
	readonly cloudBuildTimeout?: string;
}
export interface ContainerInfo {
	readonly image?: string;
}
export interface CpuUtilization {
	readonly aggregationWindowLength?: string;
	readonly targetUtilization?: number;
}
export interface Deployment {
	readonly cloudBuildOptions?: CloudBuildOptions;
	readonly container?: ContainerInfo;
	readonly files?: { [P in string]: FileInfo };
	readonly zip?: ZipInfo;
}
export interface DiskUtilization {
	readonly targetReadBytesPerSecond?: number;
	readonly targetReadOpsPerSecond?: number;
	readonly targetWriteBytesPerSecond?: number;
	readonly targetWriteOpsPerSecond?: number;
}
export interface EndpointsApiService {
	readonly configId?: string;
	readonly disableTraceSampling?: boolean;
	readonly name?: string;
	readonly rolloutStrategy?: string;
}
export interface Entrypoint {
	readonly shell?: string;
}
export interface ErrorHandler {
	readonly errorCode?: string;
	readonly mimeType?: string;
	readonly staticFile?: string;
}
export interface FileInfo {
	readonly mimeType?: string;
	readonly sha1Sum?: string;
	readonly sourceUrl?: string;
}
export interface HealthCheck {
	readonly checkInterval?: string;
	readonly disableHealthCheck?: boolean;
	readonly healthyThreshold?: number;
	readonly host?: string;
	readonly restartThreshold?: number;
	readonly timeout?: string;
	readonly unhealthyThreshold?: number;
}
export interface Library {
	readonly name?: string;
	readonly version?: string;
}
export interface LivenessCheck {
	readonly checkInterval?: string;
	readonly failureThreshold?: number;
	readonly host?: string;
	readonly initialDelay?: string;
	readonly path?: string;
	readonly successThreshold?: number;
	readonly timeout?: string;
}
export interface ManualScaling {
	readonly instances?: number;
}
export interface Network {
	readonly forwardedPorts?: string[];
	readonly instanceIpMode?: string;
	readonly instanceTag?: string;
	readonly name?: string;
	readonly sessionAffinity?: boolean;
	readonly subnetworkName?: string;
}
export interface NetworkUtilization {
	readonly targetReceivedBytesPerSecond?: number;
	readonly targetReceivedPacketsPerSecond?: number;
	readonly targetSentBytesPerSecond?: number;
	readonly targetSentPacketsPerSecond?: number;
}
export interface ReadinessCheck {
	readonly appStartTimeout?: string;
	readonly checkInterval?: string;
	readonly failureThreshold?: number;
	readonly host?: string;
	readonly path?: string;
	readonly successThreshold?: number;
	readonly timeout?: string;
}
export interface RequestUtilization {
	readonly targetConcurrentRequests?: number;
	readonly targetRequestCountPerSecond?: number;
}
export interface Resources {
	readonly cpu?: number;
	readonly diskGb?: number;
	readonly kmsKeyReference?: string;
	readonly memoryGb?: number;
	readonly volumes?: Volume[];
}
export interface ScriptHandler {
	readonly scriptPath?: string;
}
export interface StandardSchedulerSettings {
	readonly maxInstances?: number;
	readonly minInstances?: number;
	readonly targetCpuUtilization?: number;
	readonly targetThroughputUtilization?: number;
}
export interface StaticFilesHandler {
	readonly applicationReadable?: boolean;
	readonly expiration?: string;
	readonly httpHeaders?: { [P in string]: string };
	readonly mimeType?: string;
	readonly path?: string;
	readonly requireMatchingFile?: boolean;
	readonly uploadPathRegex?: string;
}
export interface UrlMap {
	readonly apiEndpoint?: ApiEndpointHandler;
	readonly authFailAction?: string;
	readonly login?: string;
	readonly redirectHttpResponseCode?: string;
	readonly script?: ScriptHandler;
	readonly securityLevel?: string;
	readonly staticFiles?: StaticFilesHandler;
	readonly urlRegex?: string;
}
export interface Volume {
	readonly name?: string;
	readonly sizeGb?: number;
	readonly volumeType?: string;
}
export interface VpcAccessConnector {
	readonly egressSetting?: string;
	readonly name?: string;
}
export interface ZipInfo {
	readonly filesCount?: number;
	readonly sourceUrl?: string;
}
export default {
	Version: Version,
};
