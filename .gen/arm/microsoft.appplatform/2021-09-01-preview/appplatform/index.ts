import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Spring extends ArmResource<SpringComponentInputs> implements SpringComponentOutputs {
	constructor(entity: ADKEntity, options: SpringComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring";
}
export interface SpringComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring";
}
export interface SpringComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterResourceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class Spring_apps extends ArmResource<Spring_appsComponentInputs> implements Spring_appsComponentOutputs {
	constructor(entity: ADKEntity, options: Spring_appsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps";
}
export interface Spring_appsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps";
}
export interface Spring_appsComponentInputs {
	readonly identity?: ManagedIdentityProperties;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AppResourceProperties;
}
export class Spring_apps_bindings
	extends ArmResource<Spring_apps_bindingsComponentInputs>
	implements Spring_apps_bindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_bindingsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/bindings", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/bindings";
}
export interface Spring_apps_bindingsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/bindings";
}
export interface Spring_apps_bindingsComponentInputs {
	readonly name: string;
	readonly properties?: BindingResourceProperties;
}
export class Spring_apps_deployments
	extends ArmResource<Spring_apps_deploymentsComponentInputs>
	implements Spring_apps_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/deployments", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/deployments";
}
export interface Spring_apps_deploymentsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/deployments";
}
export interface Spring_apps_deploymentsComponentInputs {
	readonly name: string;
	readonly properties?: DeploymentResourceProperties;
	readonly sku?: Sku;
}
export class Spring_apps_domains
	extends ArmResource<Spring_apps_domainsComponentInputs>
	implements Spring_apps_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/domains", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/domains";
}
export interface Spring_apps_domainsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/domains";
}
export interface Spring_apps_domainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainProperties;
}
export class Spring_certificates
	extends ArmResource<Spring_certificatesComponentInputs>
	implements Spring_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/certificates", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/certificates";
}
export interface Spring_certificatesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/certificates";
}
export interface Spring_certificatesComponentInputs {
	readonly name: string;
	readonly properties?: CertificateProperties;
}
export class Spring_configServers
	extends ArmResource<Spring_configServersComponentInputs>
	implements Spring_configServersComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_configServersComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/configServers", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/configServers";
}
export interface Spring_configServersComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/configServers";
}
export interface Spring_configServersComponentInputs {
	readonly name: string;
	readonly properties?: ConfigServerProperties;
}
export class Spring_monitoringSettings
	extends ArmResource<Spring_monitoringSettingsComponentInputs>
	implements Spring_monitoringSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_monitoringSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/monitoringSettings", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/monitoringSettings";
}
export interface Spring_monitoringSettingsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/monitoringSettings";
}
export interface Spring_monitoringSettingsComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringSettingProperties;
}
export class Spring_storages
	extends ArmResource<Spring_storagesComponentInputs>
	implements Spring_storagesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_storagesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/storages", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/storages";
}
export interface Spring_storagesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/storages";
}
export interface Spring_storagesComponentInputs {
	readonly name: string;
	readonly properties?: StorageProperties;
	readonly systemData?: SystemData;
}
export function listTestKeys(resource: Spring): TestKeys {
	if (resource.apiVersion !== "2021-09-01-preview") {
		throw new Error(`listTestKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppPlatform/Spring") {
		throw new Error(`listTestKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplicationInsightsAgentVersions {
	readonly java?: string;
}
export interface AppResourceProperties {
	readonly activeDeploymentName?: string;
	readonly createdTime?: string;
	readonly customPersistentDisks?: CustomPersistentDiskResource[];
	readonly enableEndToEndTLS?: boolean;
	readonly fqdn?: string;
	readonly httpsOnly?: boolean;
	readonly loadedCertificates?: LoadedCertificate[];
	readonly persistentDisk?: PersistentDisk;
	readonly provisioningState?: "Creating" | "Failed" | "Succeeded" | "Updating";
	readonly public?: boolean;
	readonly temporaryDisk?: TemporaryDisk;
	readonly url?: string;
}
export interface BindingResourceProperties {
	readonly bindingParameters?: BindingResourcePropertiesBindingParameters;
	readonly createdAt?: string;
	readonly generatedProperties?: string;
	readonly key?: string;
	readonly resourceId?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
	readonly updatedAt?: string;
}
export interface BindingResourcePropertiesBindingParameters {
	readonly [key: string]: any;
}
export interface CertificateProperties {
	readonly activateDate?: string;
	readonly dnsNames?: string[];
	readonly expirationDate?: string;
	readonly issuedDate?: string;
	readonly issuer?: string;
	readonly subjectName?: string;
	readonly thumbprint?: string;
}
export interface ClusterResourceProperties {
	readonly networkProfile?: NetworkProfile;
	readonly powerState?: "Running" | "Stopped";
	readonly provisioningState?:
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "MoveFailed"
		| "Moved"
		| "Moving"
		| "Starting"
		| "Stopping"
		| "Succeeded"
		| "Updating";
	readonly serviceId?: string;
	readonly version?: number;
}
export interface ConfigServerGitProperty {
	readonly hostKey?: string;
	readonly hostKeyAlgorithm?: string;
	readonly label?: string;
	readonly password?: string;
	readonly privateKey?: string;
	readonly repositories?: GitPatternRepository[];
	readonly searchPaths?: string[];
	readonly strictHostKeyChecking?: boolean;
	readonly uri: string;
	readonly username?: string;
}
export interface ConfigServerProperties {
	readonly configServer?: ConfigServerSettings;
	readonly error?: Error;
	readonly provisioningState?: "Deleted" | "Failed" | "NotAvailable" | "Succeeded" | "Updating";
}
export interface ConfigServerSettings {
	readonly gitProperty?: ConfigServerGitProperty;
}
export interface CustomContainer {
	readonly args?: string[];
	readonly command?: string[];
	readonly containerImage?: string;
	readonly imageRegistryCredential?: ImageRegistryCredential;
	readonly server?: string;
}
export interface CustomDomainProperties {
	readonly appName?: string;
	readonly certName?: string;
	readonly thumbprint?: string;
}
export interface CustomPersistentDiskProperties {
	readonly mountOptions?: string[];
	readonly mountPath: string;
	readonly readOnly?: boolean;
}
export interface CustomPersistentDiskResource {
	readonly customPersistentDiskProperties?: CustomPersistentDiskProperties;
	readonly storageId: string;
}
export interface DeploymentInstance {
	readonly discoveryStatus?: string;
	readonly name?: string;
	readonly reason?: string;
	readonly startTime?: string;
	readonly status?: string;
}
export interface DeploymentResourceProperties {
	readonly active?: boolean;
	readonly appName?: string;
	readonly createdTime?: string;
	readonly deploymentSettings?: DeploymentSettings;
	readonly instances?: DeploymentInstance[];
	readonly provisioningState?: "Creating" | "Failed" | "Succeeded" | "Updating";
	readonly source?: UserSourceInfo;
	readonly status?: "Allocating" | "Compiling" | "Failed" | "Running" | "Stopped" | "Unknown" | "Upgrading";
}
export interface DeploymentSettings {
	readonly containerProbeSettings?: DeploymentSettingsContainerProbeSettings;
	readonly cpu?: number;
	readonly environmentVariables?: DeploymentSettingsEnvironmentVariables;
	readonly jvmOptions?: string;
	readonly memoryInGB?: number;
	readonly netCoreMainEntryPath?: string;
	readonly resourceRequests?: ResourceRequests;
	readonly runtimeVersion?: "Java_11" | "Java_8" | "NetCore_31";
}
export interface DeploymentSettingsContainerProbeSettings {
	readonly disableProbe?: boolean;
}
export interface DeploymentSettingsEnvironmentVariables {
	readonly [key: string]: string;
}
export interface Error {
	readonly code?: string;
	readonly message?: string;
}
export interface GitPatternRepository {
	readonly hostKey?: string;
	readonly hostKeyAlgorithm?: string;
	readonly label?: string;
	readonly name: string;
	readonly password?: string;
	readonly pattern?: string[];
	readonly privateKey?: string;
	readonly searchPaths?: string[];
	readonly strictHostKeyChecking?: boolean;
	readonly uri: string;
	readonly username?: string;
}
export interface ImageRegistryCredential {
	readonly password?: string;
	readonly username?: string;
}
export interface LoadedCertificate {
	readonly loadTrustStore?: boolean;
	readonly resourceId: string;
}
export interface ManagedIdentityProperties {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
}
export interface MonitoringSettingProperties {
	readonly appInsightsAgentVersions?: ApplicationInsightsAgentVersions;
	readonly appInsightsInstrumentationKey?: string;
	readonly appInsightsSamplingRate?: number;
	readonly error?: Error;
	readonly provisioningState?: "Failed" | "NotAvailable" | "Succeeded" | "Updating";
	readonly traceEnabled?: boolean;
}
export interface NetworkProfile {
	readonly appNetworkResourceGroup?: string;
	readonly appSubnetId?: string;
	readonly outboundIPs?: NetworkProfileOutboundIPs;
	readonly requiredTraffics?: RequiredTraffic[];
	readonly serviceCidr?: string;
	readonly serviceRuntimeNetworkResourceGroup?: string;
	readonly serviceRuntimeSubnetId?: string;
}
export interface NetworkProfileOutboundIPs {
	readonly publicIPs?: string[];
}
export interface PersistentDisk {
	readonly mountPath?: string;
	readonly sizeInGB?: number;
	readonly usedInGB?: number;
}
export interface RequiredTraffic {
	readonly direction?: "Inbound" | "Outbound";
	readonly fqdns?: string[];
	readonly ips?: string[];
	readonly port?: number;
	readonly protocol?: string;
}
export interface ResourceRequests {
	readonly cpu?: string;
	readonly memory?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly name?: string;
	readonly tier?: string;
}
export interface StorageProperties {}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TemporaryDisk {
	readonly mountPath?: string;
	readonly sizeInGB?: number;
}
export interface TestKeys {
	readonly enabled?: boolean;
	readonly primaryKey?: string;
	readonly primaryTestEndpoint?: string;
	readonly secondaryKey?: string;
	readonly secondaryTestEndpoint?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserSourceInfo {
	readonly artifactSelector?: string;
	readonly customContainer?: CustomContainer;
	readonly relativePath?: string;
	readonly type?: "Container" | "Jar" | "NetCoreZip" | "Source";
	readonly version?: string;
}
export default {
	Spring: Spring,
	"Spring/apps": Spring_apps,
	"Spring/apps/bindings": Spring_apps_bindings,
	"Spring/apps/deployments": Spring_apps_deployments,
	"Spring/apps/domains": Spring_apps_domains,
	"Spring/certificates": Spring_certificates,
	"Spring/configServers": Spring_configServers,
	"Spring/monitoringSettings": Spring_monitoringSettings,
	"Spring/storages": Spring_storages,
};
