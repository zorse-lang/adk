import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applications extends ArmResource<applicationsComponentInputs> implements applicationsComponentOutputs {
	constructor(entity: ADKEntity, options: applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/applications", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/applications";
}
export interface applicationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ApplicationResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class applications_services
	extends ArmResource<applications_servicesComponentInputs>
	implements applications_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: applications_servicesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/applications/services", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/applications/services";
}
export interface applications_servicesComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/applications/services";
}
export interface applications_servicesComponentInputs {
	readonly name: string;
	readonly properties?: ServiceResourceProperties;
}
export class gateways extends ArmResource<gatewaysComponentInputs> implements gatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/gateways", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/gateways";
}
export interface gatewaysComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/gateways";
}
export interface gatewaysComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: GatewayResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class networks extends ArmResource<networksComponentInputs> implements networksComponentOutputs {
	constructor(entity: ADKEntity, options: networksComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/networks", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/networks";
}
export interface networksComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/networks";
}
export interface networksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: NetworkResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class secrets extends ArmResource<secretsComponentInputs> implements secretsComponentOutputs {
	constructor(entity: ADKEntity, options: secretsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/secrets", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/secrets";
}
export interface secretsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/secrets";
}
export interface secretsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SecretResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class secrets_values extends ArmResource<secrets_valuesComponentInputs> implements secrets_valuesComponentOutputs {
	constructor(entity: ADKEntity, options: secrets_valuesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/secrets/values", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/secrets/values";
}
export interface secrets_valuesComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/secrets/values";
}
export interface secrets_valuesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SecretValueResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class volumes extends ArmResource<volumesComponentInputs> implements volumesComponentOutputs {
	constructor(entity: ADKEntity, options: volumesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabricMesh/volumes", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabricMesh/volumes";
}
export interface volumesComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabricMesh/volumes";
}
export interface volumesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VolumeResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export function list_value(resource: secrets_values): SecretValue {
	if (resource.apiVersion !== "2018-09-01-preview") {
		throw new Error(`list_value is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceFabricMesh/secrets/values") {
		throw new Error(`list_value is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplicationResourceProperties {
	readonly debugParams?: string;
	readonly description?: string;
	readonly diagnostics?: DiagnosticsDescription;
	readonly healthState?: "Error" | "Invalid" | "Ok" | "Unknown" | "Warning";
	readonly provisioningState?: string;
	readonly serviceNames?: string[];
	readonly services?: ServiceResourceDescription[];
	readonly status?: "Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading";
	readonly statusDetails?: string;
	readonly unhealthyEvaluation?: string;
}
export interface ApplicationScopedVolume {
	readonly creationParameters: ApplicationScopedVolumeCreationParameters;
	readonly destinationPath: string;
	readonly name: string;
	readonly readOnly?: boolean;
}
export interface ApplicationScopedVolumeCreationParameters {
	readonly description?: string;
}
export interface AutoScalingMechanism {}
export interface AutoScalingMetric {}
export interface AutoScalingPolicy {
	readonly mechanism: AutoScalingMechanism;
	readonly name: string;
	readonly trigger: AutoScalingTrigger;
}
export interface AutoScalingTrigger {}
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
	readonly reliableCollectionsRefs?: ReliableCollectionsRef[];
	readonly resources: ResourceRequirements;
	readonly settings?: Setting[];
	readonly volumeRefs?: VolumeReference[];
	readonly volumes?: ApplicationScopedVolume[];
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
export interface EndpointRef {
	readonly name?: string;
}
export interface EnvironmentVariable {
	readonly name?: string;
	readonly value?: string;
}
export interface GatewayDestination {
	readonly applicationName: string;
	readonly endpointName: string;
	readonly serviceName: string;
}
export interface GatewayResourceProperties {
	readonly description?: string;
	readonly destinationNetwork: NetworkRef;
	readonly http?: HttpConfig[];
	readonly ipAddress?: string;
	readonly provisioningState?: string;
	readonly sourceNetwork: NetworkRef;
	readonly status?: "Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading";
	readonly statusDetails?: string;
	readonly tcp?: TcpConfig[];
}
export interface HttpConfig {
	readonly hosts: HttpHostConfig[];
	readonly name: string;
	readonly port: number;
}
export interface HttpHostConfig {
	readonly name: string;
	readonly routes: HttpRouteConfig[];
}
export interface HttpRouteConfig {
	readonly destination: GatewayDestination;
	readonly match: HttpRouteMatchRule;
	readonly name: string;
}
export interface HttpRouteMatchHeader {
	readonly name: string;
	readonly type?: "exact";
	readonly value?: string;
}
export interface HttpRouteMatchPath {
	readonly rewrite?: string;
	readonly type: "prefix";
	readonly value: string;
}
export interface HttpRouteMatchRule {
	readonly headers?: HttpRouteMatchHeader[];
	readonly path: HttpRouteMatchPath;
}
export interface ImageRegistryCredential {
	readonly password?: string;
	readonly server: string;
	readonly username: string;
}
export interface NetworkRef {
	readonly endpointRefs?: EndpointRef[];
	readonly name?: string;
}
export interface NetworkResourceProperties {
	readonly description?: string;
	readonly provisioningState?: string;
	readonly status?: "Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading";
	readonly statusDetails?: string;
}
export interface ReliableCollectionsRef {
	readonly doNotPersistState?: boolean;
	readonly name: string;
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
export interface SecretResourceProperties {
	readonly contentType?: string;
	readonly description?: string;
	readonly provisioningState?: string;
	readonly status?: "Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading";
	readonly statusDetails?: string;
}
export interface SecretValue {
	readonly value?: string;
}
export interface SecretValueResourceProperties {
	readonly provisioningState?: string;
	readonly value?: string;
}
export interface ServiceResourceDescription {
	readonly id?: string;
	readonly name?: string;
	readonly properties: ServiceResourceProperties;
	readonly type?: string;
}
export interface ServiceResourceProperties {
	readonly autoScalingPolicies?: AutoScalingPolicy[];
	readonly codePackages: ContainerCodePackageProperties[];
	readonly description?: string;
	readonly diagnostics?: DiagnosticsRef;
	readonly healthState?: "Error" | "Invalid" | "Ok" | "Unknown" | "Warning";
	readonly networkRefs?: NetworkRef[];
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?: string;
	readonly replicaCount?: number;
	readonly status?: "Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading";
	readonly statusDetails?: string;
	readonly unhealthyEvaluation?: string;
}
export interface Setting {
	readonly name?: string;
	readonly value?: string;
}
export interface TcpConfig {
	readonly destination: GatewayDestination;
	readonly name: string;
	readonly port: number;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VolumeProviderParametersAzureFile {
	readonly accountKey?: string;
	readonly accountName: string;
	readonly shareName: string;
}
export interface VolumeReference {
	readonly destinationPath: string;
	readonly name: string;
	readonly readOnly?: boolean;
}
export interface VolumeResourceProperties {
	readonly azureFileParameters?: VolumeProviderParametersAzureFile;
	readonly description?: string;
	readonly provider: "SFAzureFile";
	readonly provisioningState?: string;
	readonly status?: "Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading";
	readonly statusDetails?: string;
}
export default {
	applications: applications,
	"applications/services": applications_services,
	gateways: gateways,
	networks: networks,
	secrets: secrets,
	"secrets/values": secrets_values,
	volumes: volumes,
};
