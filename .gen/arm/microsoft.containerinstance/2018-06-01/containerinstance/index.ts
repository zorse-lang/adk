import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class containerGroups
	extends ArmResource<containerGroupsComponentInputs>
	implements containerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerInstance/containerGroups", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ContainerGroupProperties;
	readonly tags?: ResourceTags;
}
export interface AzureFileVolume {
	readonly readOnly?: boolean;
	readonly shareName: string;
	readonly storageAccountKey?: string;
	readonly storageAccountName: string;
}
export interface Container {
	readonly name: string;
	readonly properties: ContainerProperties;
}
export interface ContainerExec {
	readonly command?: string[];
}
export interface ContainerGroupDiagnostics {
	readonly logAnalytics?: LogAnalytics;
}
export interface ContainerGroupProperties {
	readonly containers: Container[];
	readonly diagnostics?: ContainerGroupDiagnostics;
	readonly imageRegistryCredentials?: ImageRegistryCredential[];
	readonly instanceView?: ContainerGroupPropertiesInstanceView;
	readonly ipAddress?: IpAddress;
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?: string;
	readonly restartPolicy?: "Always" | "Never" | "OnFailure";
}
export interface ContainerGroupPropertiesInstanceView {
	readonly events?: Event[];
	readonly state?: string;
}
export interface ContainerHttpGet {
	readonly path?: string;
	readonly port: number;
	readonly scheme?: "http" | "https";
}
export interface ContainerPort {
	readonly port: number;
	readonly protocol?: "TCP" | "UDP";
}
export interface ContainerProbe {
	readonly exec?: ContainerExec;
	readonly failureThreshold?: number;
	readonly httpGet?: ContainerHttpGet;
	readonly initialDelaySeconds?: number;
	readonly periodSeconds?: number;
	readonly successThreshold?: number;
	readonly timeoutSeconds?: number;
}
export interface ContainerProperties {
	readonly command?: string[];
	readonly environmentVariables?: EnvironmentVariable[];
	readonly image: string;
	readonly instanceView?: ContainerPropertiesInstanceView;
	readonly livenessProbe?: ContainerProbe;
	readonly ports?: ContainerPort[];
	readonly readinessProbe?: ContainerProbe;
	readonly resources: ResourceRequirements;
	readonly volumeMounts?: VolumeMount[];
}
export interface ContainerPropertiesInstanceView {
	readonly currentState?: ContainerState;
	readonly events?: Event[];
	readonly previousState?: ContainerState;
	readonly restartCount?: number;
}
export interface ContainerState {
	readonly detailStatus?: string;
	readonly exitCode?: number;
	readonly finishTime?: string;
	readonly startTime?: string;
	readonly state?: string;
}
export interface EnvironmentVariable {
	readonly name: string;
	readonly secureValue?: string;
	readonly value?: string;
}
export interface Event {
	readonly count?: number;
	readonly firstTimestamp?: string;
	readonly lastTimestamp?: string;
	readonly message?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface GitRepoVolume {
	readonly directory?: string;
	readonly repository: string;
	readonly revision?: string;
}
export interface ImageRegistryCredential {
	readonly password?: string;
	readonly server: string;
	readonly username: string;
}
export interface IpAddress {
	readonly dnsNameLabel?: string;
	readonly fqdn?: string;
	readonly ip?: string;
	readonly ports: Port[];
	readonly type: "Public";
}
export interface LogAnalytics {
	readonly workspaceId: string;
	readonly workspaceKey: string;
}
export interface Port {
	readonly port: number;
	readonly protocol?: "TCP" | "UDP";
}
export interface ResourceLimits {
	readonly cpu?: number;
	readonly memoryInGB?: number;
}
export interface ResourceRequests {
	readonly cpu: number;
	readonly memoryInGB: number;
}
export interface ResourceRequirements {
	readonly limits?: ResourceLimits;
	readonly requests: ResourceRequests;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SecretVolume {
	readonly [key: string]: string;
}
export interface Volume {
	readonly azureFile?: AzureFileVolume;
	readonly emptyDir?: any;
	readonly gitRepo?: GitRepoVolume;
	readonly name: string;
	readonly secret?: SecretVolume;
}
export interface VolumeMount {
	readonly mountPath: string;
	readonly name: string;
	readonly readOnly?: boolean;
}
export default {
	containerGroups: containerGroups,
};
