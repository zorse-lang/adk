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
	readonly location?: string;
	readonly name: string;
	readonly properties: ApplicationResourceProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ServiceResourceProperties;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: NetworkResourceProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties: VolumeResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export interface ApplicationResourceProperties {
	readonly debugParams?: string;
	readonly description?: string;
	readonly diagnostics?: DiagnosticsDescription;
	readonly healthState?: "Error" | "Invalid" | "Ok" | "Unknown" | "Warning";
	readonly provisioningState?: string;
	readonly serviceNames?: string[];
	readonly services?: ServiceResourceDescription[];
	readonly status?: "Creating" | "Deleting" | "Failed" | "Invalid" | "Ready" | "Upgrading";
	readonly statusDetails?: string;
	readonly unhealthyEvaluation?: string;
}
export interface ContainerCodePackageProperties {
	readonly commands?: string[];
	readonly diagnostics?: DiagnosticsRef;
	readonly endpoints?: EndpointProperties[];
	readonly entrypoint?: string;
	readonly environmentVariables?: EnvironmentVariable[];
	readonly image: string;
	readonly imageRegistryCredential?: ImageRegistryCredential;
	readonly instanceView?: ContainerInstanceView;
	readonly labels?: ContainerLabel[];
	readonly name: string;
	readonly resources: ResourceRequirements;
	readonly settings?: Setting[];
	readonly volumeRefs?: ContainerVolume[];
}
export interface ContainerEvent {
	readonly count?: number;
	readonly firstTimestamp?: string;
	readonly lastTimestamp?: string;
	readonly message?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface ContainerInstanceView {
	readonly currentState?: ContainerState;
	readonly events?: ContainerEvent[];
	readonly previousState?: ContainerState;
	readonly restartCount?: number;
}
export interface ContainerLabel {
	readonly name: string;
	readonly value: string;
}
export interface ContainerState {
	readonly detailStatus?: string;
	readonly exitCode?: string;
	readonly finishTime?: string;
	readonly startTime?: string;
	readonly state?: string;
}
export interface ContainerVolume {
	readonly destinationPath: string;
	readonly name: string;
	readonly readOnly?: boolean;
}
export interface DiagnosticsDescription {
	readonly defaultSinkRefs?: string[];
	readonly enabled?: boolean;
	readonly sinks?: DiagnosticsSinkProperties[];
}
export interface DiagnosticsRef {
	readonly enabled?: boolean;
	readonly sinkRefs?: string[];
}
export interface DiagnosticsSinkProperties {
	readonly description?: string;
	readonly name?: string;
}
export interface EndpointProperties {
	readonly name: string;
	readonly port?: number;
}
export interface EnvironmentVariable {
	readonly name?: string;
	readonly value?: string;
}
export interface ImageRegistryCredential {
	readonly password?: string;
	readonly server: string;
	readonly username: string;
}
export interface IngressConfig {
	readonly layer4?: Layer4IngressConfig[];
	readonly publicIPAddress?: string;
	readonly qosLevel?: "Bronze";
}
export interface Layer4IngressConfig {
	readonly applicationName?: string;
	readonly endpointName?: string;
	readonly name?: string;
	readonly publicPort?: number;
	readonly serviceName?: string;
}
export interface NetworkRef {
	readonly name?: string;
}
export interface NetworkResourceProperties {
	readonly addressPrefix: string;
	readonly description?: string;
	readonly ingressConfig?: IngressConfig;
	readonly provisioningState?: string;
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
export interface ServiceResourceDescription {
	readonly id?: string;
	readonly name?: string;
	readonly properties: ServiceResourceProperties;
	readonly type?: string;
}
export interface ServiceResourceProperties {
	readonly codePackages: ContainerCodePackageProperties[];
	readonly description?: string;
	readonly diagnostics?: DiagnosticsRef;
	readonly healthState?: "Error" | "Invalid" | "Ok" | "Unknown" | "Warning";
	readonly networkRefs?: NetworkRef[];
	readonly osType: "Linux" | "Windows";
	readonly replicaCount?: number;
	readonly status?: "Active" | "Creating" | "Deleting" | "Failed" | "Unknown" | "Upgrading";
}
export interface Setting {
	readonly name?: string;
	readonly value?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VolumeProviderParametersAzureFile {
	readonly accountKey?: string;
	readonly accountName: string;
	readonly shareName: string;
}
export interface VolumeResourceProperties {
	readonly azureFileParameters?: VolumeProviderParametersAzureFile;
	readonly description?: string;
	readonly provider: "SFAzureFile";
	readonly provisioningState?: string;
}
export default {
	applications: applications,
	"applications/services": applications_services,
	networks: networks,
	volumes: volumes,
};
