import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applications extends ArmResource<applicationsComponentInputs> implements applicationsComponentOutputs {
	constructor(entity: ADKEntity, options: applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/applications", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/applications";
}
export interface applicationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ApplicationResourceProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export class applications_services
	extends ArmResource<applications_servicesComponentInputs>
	implements applications_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: applications_servicesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/applications/services", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/applications/services";
}
export interface applications_servicesComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/applications/services";
}
export interface applications_servicesComponentInputs {
	readonly name: string;
	readonly properties?: ServiceResourceProperties | undefined;
}
export class networks extends ArmResource<networksComponentInputs> implements networksComponentOutputs {
	constructor(entity: ADKEntity, options: networksComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/networks", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/networks";
}
export interface networksComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/networks";
}
export interface networksComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: NetworkResourceProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export class volumes extends ArmResource<volumesComponentInputs> implements volumesComponentOutputs {
	constructor(entity: ADKEntity, options: volumesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/volumes", "2018-07-01-preview", options);
	}
	public readonly apiVersion: "2018-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/volumes";
}
export interface volumesComponentOutputs {
	readonly apiVersion: "2018-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/volumes";
}
export interface volumesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: VolumeResourceProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface ApplicationResourceProperties {
	readonly debugParams?: string | undefined;
	readonly description?: string | undefined;
	readonly diagnostics?: DiagnosticsDescription | undefined;
	readonly healthState?: ("Error" | "Invalid" | "Ok" | "Unknown" | "Warning") | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceNames?: string[] | undefined;
	readonly services?: ServiceResourceDescription[] | undefined;
	readonly status?: ("Creating" | "Deleting" | "Failed" | "Invalid" | "Ready" | "Upgrading") | undefined;
	readonly statusDetails?: string | undefined;
	readonly unhealthyEvaluation?: string | undefined;
}
export interface ContainerCodePackageProperties {
	readonly commands?: string[] | undefined;
	readonly diagnostics?: DiagnosticsRef | undefined;
	readonly endpoints?: EndpointProperties[] | undefined;
	readonly entrypoint?: string | undefined;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly image: string;
	readonly imageRegistryCredential?: ImageRegistryCredential | undefined;
	readonly instanceView?: ContainerInstanceView | undefined;
	readonly labels?: ContainerLabel[] | undefined;
	readonly name: string;
	readonly resources: ResourceRequirements;
	readonly settings?: Setting[] | undefined;
	readonly volumeRefs?: ContainerVolume[] | undefined;
}
export interface ContainerEvent {
	readonly count?: number | undefined;
	readonly firstTimestamp?: string | undefined;
	readonly lastTimestamp?: string | undefined;
	readonly message?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ContainerInstanceView {
	readonly currentState?: ContainerState | undefined;
	readonly events?: ContainerEvent[] | undefined;
	readonly previousState?: ContainerState | undefined;
	readonly restartCount?: number | undefined;
}
export interface ContainerLabel {
	readonly name: string;
	readonly value: string;
}
export interface ContainerState {
	readonly detailStatus?: string | undefined;
	readonly exitCode?: string | undefined;
	readonly finishTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly state?: string | undefined;
}
export interface ContainerVolume {
	readonly destinationPath: string;
	readonly name: string;
	readonly readOnly?: boolean | undefined;
}
export interface DiagnosticsDescription {
	readonly defaultSinkRefs?: string[] | undefined;
	readonly enabled?: boolean | undefined;
	readonly sinks?: DiagnosticsSinkProperties[] | undefined;
}
export interface DiagnosticsRef {
	readonly enabled?: boolean | undefined;
	readonly sinkRefs?: string[] | undefined;
}
export interface DiagnosticsSinkProperties {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
}
export interface EndpointProperties {
	readonly name: string;
	readonly port?: number | undefined;
}
export interface EnvironmentVariable {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ImageRegistryCredential {
	readonly password?: string | undefined;
	readonly server: string;
	readonly username: string;
}
export interface IngressConfig {
	readonly layer4?: Layer4IngressConfig[] | undefined;
	readonly publicIPAddress?: string | undefined;
	readonly qosLevel?: "Bronze" | undefined;
}
export interface Layer4IngressConfig {
	readonly applicationName?: string | undefined;
	readonly endpointName?: string | undefined;
	readonly name?: string | undefined;
	readonly publicPort?: number | undefined;
	readonly serviceName?: string | undefined;
}
export interface NetworkRef {
	readonly name?: string | undefined;
}
export interface NetworkResourceProperties {
	readonly addressPrefix: string;
	readonly description?: string | undefined;
	readonly ingressConfig?: IngressConfig | undefined;
	readonly provisioningState?: string | undefined;
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
export interface ServiceResourceDescription {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: ServiceResourceProperties;
	readonly type?: string | undefined;
}
export interface ServiceResourceProperties {
	readonly codePackages: ContainerCodePackageProperties[];
	readonly description?: string | undefined;
	readonly diagnostics?: DiagnosticsRef | undefined;
	readonly healthState?: ("Error" | "Invalid" | "Ok" | "Unknown" | "Warning") | undefined;
	readonly networkRefs?: NetworkRef[] | undefined;
	readonly osType: "Linux" | "Windows";
	readonly replicaCount?: number | undefined;
	readonly status?: ("Active" | "Creating" | "Deleting" | "Failed" | "Unknown" | "Upgrading") | undefined;
}
export interface Setting {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VolumeProviderParametersAzureFile {
	readonly accountKey?: string | undefined;
	readonly accountName: string;
	readonly shareName: string;
}
export interface VolumeResourceProperties {
	readonly azureFileParameters?: VolumeProviderParametersAzureFile | undefined;
	readonly description?: string | undefined;
	readonly provider: "SFAzureFile";
	readonly provisioningState?: string | undefined;
}
export default {
	applications: applications,
	"applications/services": applications_services,
	networks: networks,
	volumes: volumes,
};
