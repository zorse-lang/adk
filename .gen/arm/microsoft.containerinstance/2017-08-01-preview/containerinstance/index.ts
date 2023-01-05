import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class containerGroups
	extends ArmResource<containerGroupsComponentInputs>
	implements containerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerInstance/containerGroups", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerInstance/containerGroups";
}
export interface containerGroupsComponentInputs {
	readonly location: string;
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
export interface ContainerEvent {
	readonly count?: number;
	readonly firstTimestamp?: string;
	readonly lastTimestamp?: string;
	readonly message?: string;
	readonly type?: string;
}
export interface ContainerGroupProperties {
	readonly containers: Container[];
	readonly imageRegistryCredentials?: ImageRegistryCredential[];
	readonly ipAddress?: IpAddress;
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?: string;
	readonly restartPolicy?: "always";
	readonly state?: string;
	readonly volumes?: Volume[];
}
export interface ContainerPort {
	readonly port: number;
}
export interface ContainerProperties {
	readonly command?: string[];
	readonly environmentVariables?: EnvironmentVariable[];
	readonly image: string;
	readonly instanceView?: ContainerPropertiesInstanceView;
	readonly ports?: ContainerPort[];
	readonly resources: ResourceRequirements;
	readonly volumeMounts?: VolumeMount[];
}
export interface ContainerPropertiesInstanceView {
	readonly currentState?: ContainerState;
	readonly events?: ContainerEvent[];
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
	readonly value: string;
}
export interface ImageRegistryCredential {
	readonly password?: string;
	readonly server: string;
	readonly username: string;
}
export interface IpAddress {
	readonly ip?: string;
	readonly ports: Port[];
	readonly type: "Public";
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
export interface Volume {
	readonly azureFile: AzureFileVolume;
	readonly name: string;
}
export interface VolumeMount {
	readonly mountPath: string;
	readonly name: string;
	readonly readOnly?: boolean;
}
export default {
	containerGroups: containerGroups,
};
