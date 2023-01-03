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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClusterResourceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: ManagedIdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AppResourceProperties | undefined;
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
	readonly properties?: BindingResourceProperties | undefined;
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
	readonly properties?: DeploymentResourceProperties | undefined;
	readonly sku?: Sku | undefined;
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
	readonly properties?: CustomDomainProperties | undefined;
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
	readonly properties?: CertificateProperties | undefined;
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
	readonly properties?: ConfigServerProperties | undefined;
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
	readonly properties?: MonitoringSettingProperties | undefined;
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
	readonly properties?: StorageProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly java?: string | undefined;
}
export interface AppResourceProperties {
	readonly activeDeploymentName?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly customPersistentDisks?: CustomPersistentDiskResource[] | undefined;
	readonly enableEndToEndTLS?: boolean | undefined;
	readonly fqdn?: string | undefined;
	readonly httpsOnly?: boolean | undefined;
	readonly loadedCertificates?: LoadedCertificate[] | undefined;
	readonly persistentDisk?: PersistentDisk | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly public?: boolean | undefined;
	readonly temporaryDisk?: TemporaryDisk | undefined;
	readonly url?: string | undefined;
}
export interface BindingResourceProperties {
	readonly bindingParameters?: BindingResourcePropertiesBindingParameters | undefined;
	readonly createdAt?: string | undefined;
	readonly generatedProperties?: string | undefined;
	readonly key?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly updatedAt?: string | undefined;
}
export interface BindingResourcePropertiesBindingParameters {
	readonly "[ key: string ]"?: any | undefined;
}
export interface CertificateProperties {
	readonly activateDate?: string | undefined;
	readonly dnsNames?: string[] | undefined;
	readonly expirationDate?: string | undefined;
	readonly issuedDate?: string | undefined;
	readonly issuer?: string | undefined;
	readonly subjectName?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface ClusterResourceProperties {
	readonly networkProfile?: NetworkProfile | undefined;
	readonly powerState?: ("Running" | "Stopped") | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly serviceId?: string | undefined;
	readonly version?: number | undefined;
}
export interface ConfigServerGitProperty {
	readonly hostKey?: string | undefined;
	readonly hostKeyAlgorithm?: string | undefined;
	readonly label?: string | undefined;
	readonly password?: string | undefined;
	readonly privateKey?: string | undefined;
	readonly repositories?: GitPatternRepository[] | undefined;
	readonly searchPaths?: string[] | undefined;
	readonly strictHostKeyChecking?: boolean | undefined;
	readonly uri: string;
	readonly username?: string | undefined;
}
export interface ConfigServerProperties {
	readonly configServer?: ConfigServerSettings | undefined;
	readonly error?: Error | undefined;
	readonly provisioningState?: ("Deleted" | "Failed" | "NotAvailable" | "Succeeded" | "Updating") | undefined;
}
export interface ConfigServerSettings {
	readonly gitProperty?: ConfigServerGitProperty | undefined;
}
export interface CustomContainer {
	readonly args?: string[] | undefined;
	readonly command?: string[] | undefined;
	readonly containerImage?: string | undefined;
	readonly imageRegistryCredential?: ImageRegistryCredential | undefined;
	readonly server?: string | undefined;
}
export interface CustomDomainProperties {
	readonly appName?: string | undefined;
	readonly certName?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface CustomPersistentDiskProperties {
	readonly mountOptions?: string[] | undefined;
	readonly mountPath: string;
	readonly readOnly?: boolean | undefined;
}
export interface CustomPersistentDiskResource {
	readonly customPersistentDiskProperties?: CustomPersistentDiskProperties | undefined;
	readonly storageId: string;
}
export interface DeploymentInstance {
	readonly discoveryStatus?: string | undefined;
	readonly name?: string | undefined;
	readonly reason?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
}
export interface DeploymentResourceProperties {
	readonly active?: boolean | undefined;
	readonly appName?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly deploymentSettings?: DeploymentSettings | undefined;
	readonly instances?: DeploymentInstance[] | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source?: UserSourceInfo | undefined;
	readonly status?:
		| ("Allocating" | "Compiling" | "Failed" | "Running" | "Stopped" | "Unknown" | "Upgrading")
		| undefined;
}
export interface DeploymentSettings {
	readonly containerProbeSettings?: DeploymentSettingsContainerProbeSettings | undefined;
	readonly cpu?: number | undefined;
	readonly environmentVariables?: DeploymentSettingsEnvironmentVariables | undefined;
	readonly jvmOptions?: string | undefined;
	readonly memoryInGB?: number | undefined;
	readonly netCoreMainEntryPath?: string | undefined;
	readonly resourceRequests?: ResourceRequests | undefined;
	readonly runtimeVersion?: ("Java_11" | "Java_8" | "NetCore_31") | undefined;
}
export interface DeploymentSettingsContainerProbeSettings {
	readonly disableProbe?: boolean | undefined;
}
export interface DeploymentSettingsEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Error {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface GitPatternRepository {
	readonly hostKey?: string | undefined;
	readonly hostKeyAlgorithm?: string | undefined;
	readonly label?: string | undefined;
	readonly name: string;
	readonly password?: string | undefined;
	readonly pattern?: string[] | undefined;
	readonly privateKey?: string | undefined;
	readonly searchPaths?: string[] | undefined;
	readonly strictHostKeyChecking?: boolean | undefined;
	readonly uri: string;
	readonly username?: string | undefined;
}
export interface ImageRegistryCredential {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface LoadedCertificate {
	readonly loadTrustStore?: boolean | undefined;
	readonly resourceId: string;
}
export interface ManagedIdentityProperties {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned") | undefined;
}
export interface MonitoringSettingProperties {
	readonly appInsightsAgentVersions?: ApplicationInsightsAgentVersions | undefined;
	readonly appInsightsInstrumentationKey?: string | undefined;
	readonly appInsightsSamplingRate?: number | undefined;
	readonly error?: Error | undefined;
	readonly provisioningState?: ("Failed" | "NotAvailable" | "Succeeded" | "Updating") | undefined;
	readonly traceEnabled?: boolean | undefined;
}
export interface NetworkProfile {
	readonly appNetworkResourceGroup?: string | undefined;
	readonly appSubnetId?: string | undefined;
	readonly outboundIPs?: NetworkProfileOutboundIPs | undefined;
	readonly requiredTraffics?: RequiredTraffic[] | undefined;
	readonly serviceCidr?: string | undefined;
	readonly serviceRuntimeNetworkResourceGroup?: string | undefined;
	readonly serviceRuntimeSubnetId?: string | undefined;
}
export interface NetworkProfileOutboundIPs {
	readonly publicIPs?: string[] | undefined;
}
export interface PersistentDisk {
	readonly mountPath?: string | undefined;
	readonly sizeInGB?: number | undefined;
	readonly usedInGB?: number | undefined;
}
export interface RequiredTraffic {
	readonly direction?: ("Inbound" | "Outbound") | undefined;
	readonly fqdns?: string[] | undefined;
	readonly ips?: string[] | undefined;
	readonly port?: number | undefined;
	readonly protocol?: string | undefined;
}
export interface ResourceRequests {
	readonly cpu?: string | undefined;
	readonly memory?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface StorageProperties {}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TemporaryDisk {
	readonly mountPath?: string | undefined;
	readonly sizeInGB?: number | undefined;
}
export interface TestKeys {
	readonly enabled?: boolean | undefined;
	readonly primaryKey?: string | undefined;
	readonly primaryTestEndpoint?: string | undefined;
	readonly secondaryKey?: string | undefined;
	readonly secondaryTestEndpoint?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserSourceInfo {
	readonly artifactSelector?: string | undefined;
	readonly customContainer?: CustomContainer | undefined;
	readonly relativePath?: string | undefined;
	readonly type?: ("Container" | "Jar" | "NetCoreZip" | "Source") | undefined;
	readonly version?: string | undefined;
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
