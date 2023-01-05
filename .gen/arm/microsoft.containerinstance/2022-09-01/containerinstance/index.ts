import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class containerGroups
	extends ArmResource<containerGroupsComponentInputs>
	implements containerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerInstance/containerGroups", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentInputs {
	readonly identity?: ContainerGroupIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties: ContainerGroupPropertiesProperties;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
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
export interface ContainerGroupIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: ContainerGroupIdentityUserAssignedIdentities;
}
export interface ContainerGroupIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentities;
}
export interface ContainerGroupPropertiesInstanceView {
	readonly events?: Event[];
	readonly state?: string;
}
export interface ContainerGroupPropertiesProperties {
	readonly containers: Container[];
	readonly diagnostics?: ContainerGroupDiagnostics;
	readonly dnsConfig?: DnsConfiguration;
	readonly encryptionProperties?: EncryptionProperties;
	readonly extensions?: DeploymentExtensionSpec[];
	readonly imageRegistryCredentials?: ImageRegistryCredential[];
	readonly initContainers?: InitContainerDefinition[];
	readonly instanceView?: ContainerGroupPropertiesInstanceView;
	readonly ipAddress?: IpAddress;
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?: string;
	readonly restartPolicy?: "Always" | "Never" | "OnFailure";
}
export interface ContainerGroupSubnetId {
	readonly id: string;
	readonly name?: string;
}
export interface ContainerHttpGet {
	readonly httpHeaders?: HttpHeader[];
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
export interface DeploymentExtensionSpec {
	readonly name: string;
	readonly properties?: DeploymentExtensionSpecProperties;
}
export interface DeploymentExtensionSpecProperties {
	readonly extensionType: string;
	readonly protectedSettings?: any;
	readonly settings?: any;
	readonly version: string;
}
export interface DnsConfiguration {
	readonly nameServers: string[];
	readonly options?: string;
	readonly searchDomains?: string;
}
export interface EncryptionProperties {
	readonly identity?: string;
	readonly keyName: string;
	readonly keyVersion: string;
	readonly vaultBaseUrl: string;
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
export interface GpuResource {
	readonly count: number;
	readonly sku: "K80" | "P100" | "V100";
}
export interface HttpHeader {
	readonly name?: string;
	readonly value?: string;
}
export interface ImageRegistryCredential {
	readonly identity?: string;
	readonly identityUrl?: string;
	readonly password?: string;
	readonly server: string;
	readonly username?: string;
}
export interface InitContainerDefinition {
	readonly name: string;
	readonly properties: InitContainerPropertiesDefinition;
}
export interface InitContainerPropertiesDefinition {
	readonly command?: string[];
	readonly environmentVariables?: EnvironmentVariable[];
	readonly image?: string;
	readonly instanceView?: InitContainerPropertiesDefinitionInstanceView;
	readonly volumeMounts?: VolumeMount[];
}
export interface InitContainerPropertiesDefinitionInstanceView {
	readonly currentState?: ContainerState;
	readonly events?: Event[];
	readonly previousState?: ContainerState;
	readonly restartCount?: number;
}
export interface IpAddress {
	readonly autoGeneratedDomainNameLabelScope?:
		| "Noreuse"
		| "ResourceGroupReuse"
		| "SubscriptionReuse"
		| "TenantReuse"
		| "Unsecure";
	readonly dnsNameLabel?: string;
	readonly fqdn?: string;
	readonly ip?: string;
	readonly ports: Port[];
	readonly type: "Private" | "Public";
}
export interface LogAnalytics {
	readonly logType?: "ContainerInsights" | "ContainerInstanceLogs";
	readonly metadata?: LogAnalyticsMetadata;
	readonly workspaceId: string;
	readonly workspaceKey: string;
	readonly workspaceResourceId?: string;
}
export interface LogAnalyticsMetadata {
	readonly [key: string]: string;
}
export interface Port {
	readonly port: number;
	readonly protocol?: "TCP" | "UDP";
}
export interface ResourceLimits {
	readonly cpu?: number;
	readonly gpu?: GpuResource;
	readonly memoryInGB?: number;
}
export interface ResourceRequests {
	readonly cpu: number;
	readonly gpu?: GpuResource;
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
export interface UserAssignedIdentities {
	readonly clientId?: string;
	readonly principalId?: string;
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
