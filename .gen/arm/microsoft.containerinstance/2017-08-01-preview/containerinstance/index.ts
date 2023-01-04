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
	readonly tags?: ResourceTags | undefined;
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
export interface ContainerEvent {
	readonly count?: number | undefined;
	readonly firstTimestamp?: string | undefined;
	readonly lastTimestamp?: string | undefined;
	readonly message?: string | undefined;
	readonly type?: string | undefined;
}
export interface ContainerGroupProperties {
	readonly containers: Container[];
	readonly imageRegistryCredentials?: ImageRegistryCredential[] | undefined;
	readonly ipAddress?: IpAddress | undefined;
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?: string | undefined;
	readonly restartPolicy?: "always" | undefined;
	readonly state?: string | undefined;
	readonly volumes?: Volume[] | undefined;
}
export interface ContainerPort {
	readonly port: number;
}
export interface ContainerProperties {
	readonly command?: string[] | undefined;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly image: string;
	readonly instanceView?: ContainerPropertiesInstanceView | undefined;
	readonly ports?: ContainerPort[] | undefined;
	readonly resources: ResourceRequirements;
	readonly volumeMounts?: VolumeMount[] | undefined;
}
export interface ContainerPropertiesInstanceView {
	readonly currentState?: ContainerState | undefined;
	readonly events?: ContainerEvent[] | undefined;
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
export interface EnvironmentVariable {
	readonly name: string;
	readonly value: string;
}
export interface ImageRegistryCredential {
	readonly password?: string | undefined;
	readonly server: string;
	readonly username: string;
}
export interface IpAddress {
	readonly ip?: string | undefined;
	readonly ports: Port[];
	readonly type: "Public";
}
export interface Port {
	readonly port: number;
	readonly protocol?: ("TCP" | "UDP") | undefined;
}
export interface ResourceLimits {
	readonly cpu?: number | undefined;
	readonly memoryInGB?: number | undefined;
}
export interface ResourceRequests {
	readonly cpu: number;
	readonly memoryInGB: number;
}
export interface ResourceRequirements {
	readonly limits?: ResourceLimits | undefined;
	readonly requests: ResourceRequests;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Volume {
	readonly azureFile: AzureFileVolume;
	readonly name: string;
}
export interface VolumeMount {
	readonly mountPath: string;
	readonly name: string;
	readonly readOnly?: boolean | undefined;
}
export default {
	containerGroups: containerGroups,
};