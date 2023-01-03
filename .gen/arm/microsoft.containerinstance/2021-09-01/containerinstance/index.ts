import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class containerGroups
	extends ArmResource<containerGroupsComponentInputs>
	implements containerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerInstance/containerGroups", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentInputs {
	readonly identity?: ContainerGroupIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ContainerGroupPropertiesProperties;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export interface AzureFileVolume {
	readonly readOnly?: boolean | undefined;
	readonly shareName: string;
	readonly storageAccountKey?: string | undefined;
	readonly storageAccountName: string;
}
export interface Container {
	readonly name: string;
	readonly properties: ContainerProperties;
}
export interface ContainerExec {
	readonly command?: string[] | undefined;
}
export interface ContainerGroupDiagnostics {
	readonly logAnalytics?: LogAnalytics | undefined;
}
export interface ContainerGroupIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: ContainerGroupIdentityUserAssignedIdentities | undefined;
}
export interface ContainerGroupIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentities | undefined;
}
export interface ContainerGroupPropertiesInstanceView {
	readonly events?: Event[] | undefined;
	readonly state?: string | undefined;
}
export interface ContainerGroupPropertiesProperties {
	readonly containers: Container[];
	readonly diagnostics?: ContainerGroupDiagnostics | undefined;
	readonly dnsConfig?: DnsConfiguration | undefined;
	readonly encryptionProperties?: EncryptionProperties | undefined;
	readonly imageRegistryCredentials?: ImageRegistryCredential[] | undefined;
	readonly initContainers?: InitContainerDefinition[] | undefined;
	readonly instanceView?: ContainerGroupPropertiesInstanceView | undefined;
	readonly ipAddress?: IpAddress | undefined;
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?: string | undefined;
	readonly restartPolicy?: ("Always" | "Never" | "OnFailure") | undefined;
}
export interface ContainerGroupSubnetId {
	readonly id: string;
	readonly name?: string | undefined;
}
export interface ContainerHttpGet {
	readonly httpHeaders?: HttpHeader[] | undefined;
	readonly path?: string | undefined;
	readonly port: number;
	readonly scheme?: ("http" | "https") | undefined;
}
export interface ContainerPort {
	readonly port: number;
	readonly protocol?: ("TCP" | "UDP") | undefined;
}
export interface ContainerProbe {
	readonly exec?: ContainerExec | undefined;
	readonly failureThreshold?: number | undefined;
	readonly httpGet?: ContainerHttpGet | undefined;
	readonly initialDelaySeconds?: number | undefined;
	readonly periodSeconds?: number | undefined;
	readonly successThreshold?: number | undefined;
	readonly timeoutSeconds?: number | undefined;
}
export interface ContainerProperties {
	readonly command?: string[] | undefined;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly image: string;
	readonly instanceView?: ContainerPropertiesInstanceView | undefined;
	readonly livenessProbe?: ContainerProbe | undefined;
	readonly ports?: ContainerPort[] | undefined;
	readonly readinessProbe?: ContainerProbe | undefined;
	readonly resources: ResourceRequirements;
	readonly volumeMounts?: VolumeMount[] | undefined;
}
export interface ContainerPropertiesInstanceView {
	readonly currentState?: ContainerState | undefined;
	readonly events?: Event[] | undefined;
	readonly previousState?: ContainerState | undefined;
	readonly restartCount?: number | undefined;
}
export interface ContainerState {
	readonly detailStatus?: string | undefined;
	readonly exitCode?: number | undefined;
	readonly finishTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
}
export interface DnsConfiguration {
	readonly nameServers: string[];
	readonly options?: string | undefined;
	readonly searchDomains?: string | undefined;
}
export interface EncryptionProperties {
	readonly keyName: string;
	readonly keyVersion: string;
	readonly vaultBaseUrl: string;
}
export interface EnvironmentVariable {
	readonly name: string;
	readonly secureValue?: string | undefined;
	readonly value?: string | undefined;
}
export interface Event {
	readonly count?: number | undefined;
	readonly firstTimestamp?: string | undefined;
	readonly lastTimestamp?: string | undefined;
	readonly message?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface GitRepoVolume {
	readonly directory?: string | undefined;
	readonly repository: string;
	readonly revision?: string | undefined;
}
export interface GpuResource {
	readonly count: number;
	readonly sku: "K80" | "P100" | "V100";
}
export interface HttpHeader {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ImageRegistryCredential {
	readonly identity?: string | undefined;
	readonly identityUrl?: string | undefined;
	readonly password?: string | undefined;
	readonly server: string;
	readonly username?: string | undefined;
}
export interface InitContainerDefinition {
	readonly name: string;
	readonly properties: InitContainerPropertiesDefinition;
}
export interface InitContainerPropertiesDefinition {
	readonly command?: string[] | undefined;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly image?: string | undefined;
	readonly instanceView?: InitContainerPropertiesDefinitionInstanceView | undefined;
	readonly volumeMounts?: VolumeMount[] | undefined;
}
export interface InitContainerPropertiesDefinitionInstanceView {
	readonly currentState?: ContainerState | undefined;
	readonly events?: Event[] | undefined;
	readonly previousState?: ContainerState | undefined;
	readonly restartCount?: number | undefined;
}
export interface IpAddress {
	readonly dnsNameLabel?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly ip?: string | undefined;
	readonly ports: Port[];
	readonly type: "Private" | "Public";
}
export interface LogAnalytics {
	readonly logType?: ("ContainerInsights" | "ContainerInstanceLogs") | undefined;
	readonly metadata?: LogAnalyticsMetadata | undefined;
	readonly workspaceId: string;
	readonly workspaceKey: string;
	readonly workspaceResourceId?: string | undefined;
}
export interface LogAnalyticsMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Port {
	readonly port: number;
	readonly protocol?: ("TCP" | "UDP") | undefined;
}
export interface ResourceLimits {
	readonly cpu?: number | undefined;
	readonly gpu?: GpuResource | undefined;
	readonly memoryInGB?: number | undefined;
}
export interface ResourceRequests {
	readonly cpu: number;
	readonly gpu?: GpuResource | undefined;
	readonly memoryInGB: number;
}
export interface ResourceRequirements {
	readonly limits?: ResourceLimits | undefined;
	readonly requests: ResourceRequests;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SecretVolume {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentities {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface Volume {
	readonly azureFile?: AzureFileVolume | undefined;
	readonly emptyDir?: any | undefined;
	readonly gitRepo?: GitRepoVolume | undefined;
	readonly name: string;
	readonly secret?: SecretVolume | undefined;
}
export interface VolumeMount {
	readonly mountPath: string;
	readonly name: string;
	readonly readOnly?: boolean | undefined;
}
export default {
	containerGroups: containerGroups,
};
