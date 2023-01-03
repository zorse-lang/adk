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
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ServiceResourceProperties | undefined;
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
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly debugParams?: string | undefined;
	readonly description?: string | undefined;
	readonly diagnostics?: DiagnosticsDescription | undefined;
	readonly healthState?: ("Error" | "Invalid" | "Ok" | "Unknown" | "Warning") | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceNames?: string[] | undefined;
	readonly services?: ServiceResourceDescription[] | undefined;
	readonly status?: ("Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading") | undefined;
	readonly statusDetails?: string | undefined;
	readonly unhealthyEvaluation?: string | undefined;
}
export interface ApplicationScopedVolume {
	readonly creationParameters: ApplicationScopedVolumeCreationParameters;
	readonly destinationPath: string;
	readonly name: string;
	readonly readOnly?: boolean | undefined;
}
export interface ApplicationScopedVolumeCreationParameters {
	readonly description?: string | undefined;
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
	readonly reliableCollectionsRefs?: ReliableCollectionsRef[] | undefined;
	readonly resources: ResourceRequirements;
	readonly settings?: Setting[] | undefined;
	readonly volumeRefs?: VolumeReference[] | undefined;
	readonly volumes?: ApplicationScopedVolume[] | undefined;
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
export interface EndpointRef {
	readonly name?: string | undefined;
}
export interface EnvironmentVariable {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface GatewayDestination {
	readonly applicationName: string;
	readonly endpointName: string;
	readonly serviceName: string;
}
export interface GatewayResourceProperties {
	readonly description?: string | undefined;
	readonly destinationNetwork: NetworkRef;
	readonly http?: HttpConfig[] | undefined;
	readonly ipAddress?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly sourceNetwork: NetworkRef;
	readonly status?: ("Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading") | undefined;
	readonly statusDetails?: string | undefined;
	readonly tcp?: TcpConfig[] | undefined;
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
	readonly type?: "exact" | undefined;
	readonly value?: string | undefined;
}
export interface HttpRouteMatchPath {
	readonly rewrite?: string | undefined;
	readonly type: "prefix";
	readonly value: string;
}
export interface HttpRouteMatchRule {
	readonly headers?: HttpRouteMatchHeader[] | undefined;
	readonly path: HttpRouteMatchPath;
}
export interface ImageRegistryCredential {
	readonly password?: string | undefined;
	readonly server: string;
	readonly username: string;
}
export interface NetworkRef {
	readonly endpointRefs?: EndpointRef[] | undefined;
	readonly name?: string | undefined;
}
export interface NetworkResourceProperties {
	readonly description?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading") | undefined;
	readonly statusDetails?: string | undefined;
}
export interface ReliableCollectionsRef {
	readonly doNotPersistState?: boolean | undefined;
	readonly name: string;
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
export interface SecretResourceProperties {
	readonly contentType?: string | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading") | undefined;
	readonly statusDetails?: string | undefined;
}
export interface SecretValue {
	readonly value?: string | undefined;
}
export interface SecretValueResourceProperties {
	readonly provisioningState?: string | undefined;
	readonly value?: string | undefined;
}
export interface ServiceResourceDescription {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: ServiceResourceProperties;
	readonly type?: string | undefined;
}
export interface ServiceResourceProperties {
	readonly autoScalingPolicies?: AutoScalingPolicy[] | undefined;
	readonly codePackages: ContainerCodePackageProperties[];
	readonly description?: string | undefined;
	readonly diagnostics?: DiagnosticsRef | undefined;
	readonly healthState?: ("Error" | "Invalid" | "Ok" | "Unknown" | "Warning") | undefined;
	readonly networkRefs?: NetworkRef[] | undefined;
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?: string | undefined;
	readonly replicaCount?: number | undefined;
	readonly status?: ("Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading") | undefined;
	readonly statusDetails?: string | undefined;
	readonly unhealthyEvaluation?: string | undefined;
}
export interface Setting {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface TcpConfig {
	readonly destination: GatewayDestination;
	readonly name: string;
	readonly port: number;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VolumeProviderParametersAzureFile {
	readonly accountKey?: string | undefined;
	readonly accountName: string;
	readonly shareName: string;
}
export interface VolumeReference {
	readonly destinationPath: string;
	readonly name: string;
	readonly readOnly?: boolean | undefined;
}
export interface VolumeResourceProperties {
	readonly azureFileParameters?: VolumeProviderParametersAzureFile | undefined;
	readonly description?: string | undefined;
	readonly provider: "SFAzureFile";
	readonly provisioningState?: string | undefined;
	readonly status?: ("Creating" | "Deleting" | "Failed" | "Ready" | "Unknown" | "Upgrading") | undefined;
	readonly statusDetails?: string | undefined;
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
