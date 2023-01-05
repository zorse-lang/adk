import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Spring extends ArmResource<SpringComponentInputs> implements SpringComponentOutputs {
	constructor(entity: ADKEntity, options: SpringComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring";
}
export interface SpringComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring";
}
export interface SpringComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterResourceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class Spring_apiPortals
	extends ArmResource<Spring_apiPortalsComponentInputs>
	implements Spring_apiPortalsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apiPortalsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apiPortals", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apiPortals";
}
export interface Spring_apiPortalsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apiPortals";
}
export interface Spring_apiPortalsComponentInputs {
	readonly name: string;
	readonly properties?: ApiPortalProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
}
export class Spring_apiPortals_domains
	extends ArmResource<Spring_apiPortals_domainsComponentInputs>
	implements Spring_apiPortals_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apiPortals_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apiPortals/domains", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apiPortals/domains";
}
export interface Spring_apiPortals_domainsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apiPortals/domains";
}
export interface Spring_apiPortals_domainsComponentInputs {
	readonly name: string;
	readonly properties?: ApiPortalCustomDomainProperties;
	readonly systemData?: SystemData;
}
export class Spring_apps extends ArmResource<Spring_appsComponentInputs> implements Spring_appsComponentOutputs {
	constructor(entity: ADKEntity, options: Spring_appsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps";
}
export interface Spring_appsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps";
}
export interface Spring_appsComponentInputs {
	readonly identity?: ManagedIdentityProperties;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AppResourceProperties;
	readonly systemData?: SystemData;
}
export class Spring_apps_bindings
	extends ArmResource<Spring_apps_bindingsComponentInputs>
	implements Spring_apps_bindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_bindingsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/bindings", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/bindings";
}
export interface Spring_apps_bindingsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/bindings";
}
export interface Spring_apps_bindingsComponentInputs {
	readonly name: string;
	readonly properties?: BindingResourceProperties;
	readonly systemData?: SystemData;
}
export class Spring_apps_deployments
	extends ArmResource<Spring_apps_deploymentsComponentInputs>
	implements Spring_apps_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/deployments", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/deployments";
}
export interface Spring_apps_deploymentsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/deployments";
}
export interface Spring_apps_deploymentsComponentInputs {
	readonly name: string;
	readonly properties?: DeploymentResourceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
}
export class Spring_apps_domains
	extends ArmResource<Spring_apps_domainsComponentInputs>
	implements Spring_apps_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/domains", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/domains";
}
export interface Spring_apps_domainsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/domains";
}
export interface Spring_apps_domainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices
	extends ArmResource<Spring_buildServicesComponentInputs>
	implements Spring_buildServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices";
}
export interface Spring_buildServicesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices";
}
export interface Spring_buildServicesComponentInputs {
	readonly name: string;
	readonly properties?: BuildServiceProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices_agentPools
	extends ArmResource<Spring_buildServices_agentPoolsComponentInputs>
	implements Spring_buildServices_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices/agentPools", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/agentPools";
}
export interface Spring_buildServices_agentPoolsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/agentPools";
}
export interface Spring_buildServices_agentPoolsComponentInputs {
	readonly name: string;
	readonly properties?: BuildServiceAgentPoolProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices_builders
	extends ArmResource<Spring_buildServices_buildersComponentInputs>
	implements Spring_buildServices_buildersComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_buildersComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices/builders", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders";
}
export interface Spring_buildServices_buildersComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders";
}
export interface Spring_buildServices_buildersComponentInputs {
	readonly name: string;
	readonly properties?: BuilderProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices_builders_buildpackBindings
	extends ArmResource<Spring_buildServices_builders_buildpackBindingsComponentInputs>
	implements Spring_buildServices_builders_buildpackBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_builders_buildpackBindingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings";
}
export interface Spring_buildServices_builders_buildpackBindingsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings";
}
export interface Spring_buildServices_builders_buildpackBindingsComponentInputs {
	readonly name: string;
	readonly properties?: BuildpackBindingProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices_builds
	extends ArmResource<Spring_buildServices_buildsComponentInputs>
	implements Spring_buildServices_buildsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_buildsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices/builds", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds";
}
export interface Spring_buildServices_buildsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds";
}
export interface Spring_buildServices_buildsComponentInputs {
	readonly name: string;
	readonly properties?: BuildProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices_builds_results
	extends ArmResource<Spring_buildServices_builds_resultsComponentInputs>
	implements Spring_buildServices_builds_resultsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_builds_resultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AppPlatform/Spring/buildServices/builds/results",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds/results";
}
export interface Spring_buildServices_builds_resultsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds/results";
}
export interface Spring_buildServices_builds_resultsComponentInputs {
	readonly name: string;
	readonly properties?: BuildResultProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices_supportedBuildpacks
	extends ArmResource<Spring_buildServices_supportedBuildpacksComponentInputs>
	implements Spring_buildServices_supportedBuildpacksComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_supportedBuildpacksComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks";
}
export interface Spring_buildServices_supportedBuildpacksComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks";
}
export interface Spring_buildServices_supportedBuildpacksComponentInputs {
	readonly name: string;
	readonly properties?: SupportedBuildpackResourceProperties;
	readonly systemData?: SystemData;
}
export class Spring_buildServices_supportedStacks
	extends ArmResource<Spring_buildServices_supportedStacksComponentInputs>
	implements Spring_buildServices_supportedStacksComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_supportedStacksComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AppPlatform/Spring/buildServices/supportedStacks",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedStacks";
}
export interface Spring_buildServices_supportedStacksComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedStacks";
}
export interface Spring_buildServices_supportedStacksComponentInputs {
	readonly name: string;
	readonly properties?: SupportedStackResourceProperties;
	readonly systemData?: SystemData;
}
export class Spring_certificates
	extends ArmResource<Spring_certificatesComponentInputs>
	implements Spring_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/certificates", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/certificates";
}
export interface Spring_certificatesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/certificates";
}
export interface Spring_certificatesComponentInputs {
	readonly name: string;
	readonly properties?: CertificateProperties;
	readonly systemData?: SystemData;
}
export class Spring_configServers
	extends ArmResource<Spring_configServersComponentInputs>
	implements Spring_configServersComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_configServersComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/configServers", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/configServers";
}
export interface Spring_configServersComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/configServers";
}
export interface Spring_configServersComponentInputs {
	readonly name: string;
	readonly properties?: ConfigServerProperties;
	readonly systemData?: SystemData;
}
export class Spring_configurationServices
	extends ArmResource<Spring_configurationServicesComponentInputs>
	implements Spring_configurationServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_configurationServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/configurationServices", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/configurationServices";
}
export interface Spring_configurationServicesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/configurationServices";
}
export interface Spring_configurationServicesComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationServiceProperties;
	readonly systemData?: SystemData;
}
export class Spring_gateways
	extends ArmResource<Spring_gatewaysComponentInputs>
	implements Spring_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/gateways", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/gateways";
}
export interface Spring_gatewaysComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/gateways";
}
export interface Spring_gatewaysComponentInputs {
	readonly name: string;
	readonly properties?: GatewayProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
}
export class Spring_gateways_domains
	extends ArmResource<Spring_gateways_domainsComponentInputs>
	implements Spring_gateways_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_gateways_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/gateways/domains", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/gateways/domains";
}
export interface Spring_gateways_domainsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/gateways/domains";
}
export interface Spring_gateways_domainsComponentInputs {
	readonly name: string;
	readonly properties?: GatewayCustomDomainProperties;
	readonly systemData?: SystemData;
}
export class Spring_gateways_routeConfigs
	extends ArmResource<Spring_gateways_routeConfigsComponentInputs>
	implements Spring_gateways_routeConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_gateways_routeConfigsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/gateways/routeConfigs", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/gateways/routeConfigs";
}
export interface Spring_gateways_routeConfigsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/gateways/routeConfigs";
}
export interface Spring_gateways_routeConfigsComponentInputs {
	readonly name: string;
	readonly properties?: GatewayRouteConfigProperties;
	readonly systemData?: SystemData;
}
export class Spring_monitoringSettings
	extends ArmResource<Spring_monitoringSettingsComponentInputs>
	implements Spring_monitoringSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_monitoringSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/monitoringSettings", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/monitoringSettings";
}
export interface Spring_monitoringSettingsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/monitoringSettings";
}
export interface Spring_monitoringSettingsComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringSettingProperties;
	readonly systemData?: SystemData;
}
export class Spring_serviceRegistries
	extends ArmResource<Spring_serviceRegistriesComponentInputs>
	implements Spring_serviceRegistriesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_serviceRegistriesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/serviceRegistries", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/serviceRegistries";
}
export interface Spring_serviceRegistriesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/serviceRegistries";
}
export interface Spring_serviceRegistriesComponentInputs {
	readonly name: string;
	readonly properties?: ServiceRegistryProperties;
	readonly systemData?: SystemData;
}
export class Spring_storages
	extends ArmResource<Spring_storagesComponentInputs>
	implements Spring_storagesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_storagesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/storages", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/storages";
}
export interface Spring_storagesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/storages";
}
export interface Spring_storagesComponentInputs {
	readonly name: string;
	readonly properties?: StorageProperties;
	readonly systemData?: SystemData;
}
export function listTestKeys(resource: Spring): TestKeys {
	if (resource.apiVersion !== "2022-03-01-preview") {
		throw new Error(`listTestKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppPlatform/Spring") {
		throw new Error(`listTestKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AddonProfile {
	readonly [key: string]: any;
}
export interface ApiPortalCustomDomainProperties {
	readonly thumbprint?: string;
}
export interface ApiPortalInstance {
	readonly name?: string;
	readonly status?: string;
}
export interface ApiPortalProperties {
	readonly gatewayIds?: string[];
	readonly httpsOnly?: boolean;
	readonly instances?: ApiPortalInstance[];
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly public?: boolean;
	readonly resourceRequests?: ApiPortalResourceRequests;
	readonly sourceUrls?: string[];
	readonly ssoProperties?: SsoProperties;
	readonly url?: string;
}
export interface ApiPortalResourceRequests {
	readonly cpu?: string;
	readonly memory?: string;
}
export interface ApplicationInsightsAgentVersions {
	readonly java?: string;
}
export interface AppResourceProperties {
	readonly addonConfigs?: AppResourcePropertiesAddonConfigs;
	readonly customPersistentDisks?: CustomPersistentDiskResource[];
	readonly enableEndToEndTLS?: boolean;
	readonly fqdn?: string;
	readonly httpsOnly?: boolean;
	readonly loadedCertificates?: LoadedCertificate[];
	readonly persistentDisk?: PersistentDisk;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly public?: boolean;
	readonly temporaryDisk?: TemporaryDisk;
	readonly url?: string;
}
export interface AppResourcePropertiesAddonConfigs {
	readonly [key: string]: AddonProfile;
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
export interface BuilderProperties {
	readonly buildpackGroups?: BuildpacksGroupProperties[];
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly stack?: StackProperties;
}
export interface BuildpackBindingLaunchProperties {
	readonly properties?: BuildpackBindingLaunchProperties;
	readonly secrets?: BuildpackBindingLaunchPropertiesSecrets;
}
export interface BuildpackBindingLaunchPropertiesSecrets {
	readonly [key: string]: string;
}
export interface BuildpackBindingProperties {
	readonly bindingType?:
		| "ApacheSkyWalking"
		| "AppDynamics"
		| "ApplicationInsights"
		| "Dynatrace"
		| "ElasticAPM"
		| "NewRelic";
	readonly launchProperties?: BuildpackBindingLaunchProperties;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface BuildpackProperties {
	readonly id?: string;
}
export interface BuildpacksGroupProperties {
	readonly buildpacks?: BuildpackProperties[];
	readonly name?: string;
}
export interface BuildProperties {
	readonly agentPool?: string;
	readonly builder?: string;
	readonly env?: BuildPropertiesEnv;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly relativePath?: string;
	readonly triggeredBuildResult?: TriggeredBuildResult;
}
export interface BuildPropertiesEnv {
	readonly [key: string]: string;
}
export interface BuildResultProperties {
	readonly buildPodName?: string;
	readonly buildStages?: BuildStageProperties[];
	readonly name?: string;
	readonly provisioningState?: "Building" | "Deleting" | "Failed" | "Queuing" | "Succeeded";
}
export interface BuildServiceAgentPoolProperties {
	readonly poolSize?: BuildServiceAgentPoolSizeProperties;
	readonly provisioningState?: string;
}
export interface BuildServiceAgentPoolSizeProperties {
	readonly cpu?: string;
	readonly memory?: string;
	readonly name?: string;
}
export interface BuildServiceProperties {
	readonly kPackVersion?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceRequests?: BuildServicePropertiesResourceRequests;
}
export interface BuildServicePropertiesResourceRequests {
	readonly cpu?: string;
	readonly memory?: string;
}
export interface BuildStageProperties {
	readonly name?: string;
	readonly status?: "Failed" | "NotStarted" | "Running" | "Succeeded";
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
	readonly fqdn?: string;
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
	readonly zoneRedundant?: boolean;
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
export interface ConfigurationServiceGitProperty {
	readonly repositories?: ConfigurationServiceGitRepository[];
}
export interface ConfigurationServiceGitRepository {
	readonly hostKey?: string;
	readonly hostKeyAlgorithm?: string;
	readonly label: string;
	readonly name: string;
	readonly password?: string;
	readonly patterns: string[];
	readonly privateKey?: string;
	readonly searchPaths?: string[];
	readonly strictHostKeyChecking?: boolean;
	readonly uri: string;
	readonly username?: string;
}
export interface ConfigurationServiceInstance {
	readonly name?: string;
	readonly status?: string;
}
export interface ConfigurationServiceProperties {
	readonly instances?: ConfigurationServiceInstance[];
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceRequests?: ConfigurationServiceResourceRequests;
	readonly settings?: ConfigurationServiceSettings;
}
export interface ConfigurationServiceResourceRequests {
	readonly cpu?: string;
	readonly instanceCount?: number;
	readonly memory?: string;
}
export interface ConfigurationServiceSettings {
	readonly gitProperty?: ConfigurationServiceGitProperty;
}
export interface ContainerProbeSettings {
	readonly disableProbe?: boolean;
}
export interface CustomContainer {
	readonly args?: string[];
	readonly command?: string[];
	readonly containerImage?: string;
	readonly imageRegistryCredential?: ImageRegistryCredential;
	readonly languageFramework?: string;
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
	readonly zone?: string;
}
export interface DeploymentResourceProperties {
	readonly active?: boolean;
	readonly deploymentSettings?: DeploymentSettings;
	readonly instances?: DeploymentInstance[];
	readonly provisioningState?: "Creating" | "Failed" | "Succeeded" | "Updating";
	readonly source?: UserSourceInfo;
	readonly status?: "Running" | "Stopped";
}
export interface DeploymentSettings {
	readonly addonConfigs?: DeploymentSettingsAddonConfigs;
	readonly containerProbeSettings?: ContainerProbeSettings;
	readonly environmentVariables?: DeploymentSettingsEnvironmentVariables;
	readonly resourceRequests?: ResourceRequests;
}
export interface DeploymentSettingsAddonConfigs {
	readonly [key: string]: AddonProfile;
}
export interface DeploymentSettingsEnvironmentVariables {
	readonly [key: string]: string;
}
export interface Error {
	readonly code?: string;
	readonly message?: string;
}
export interface GatewayApiMetadataProperties {
	readonly description?: string;
	readonly documentation?: string;
	readonly serverUrl?: string;
	readonly title?: string;
	readonly version?: string;
}
export interface GatewayApiRoute {
	readonly description?: string;
	readonly filters?: string[];
	readonly order?: number;
	readonly predicates?: string[];
	readonly ssoEnabled?: boolean;
	readonly tags?: string[];
	readonly title?: string;
	readonly tokenRelay?: boolean;
	readonly uri?: string;
}
export interface GatewayCorsProperties {
	readonly allowCredentials?: boolean;
	readonly allowedHeaders?: string[];
	readonly allowedMethods?: string[];
	readonly allowedOrigins?: string[];
	readonly exposedHeaders?: string[];
	readonly maxAge?: number;
}
export interface GatewayCustomDomainProperties {
	readonly thumbprint?: string;
}
export interface GatewayInstance {
	readonly name?: string;
	readonly status?: string;
}
export interface GatewayOperatorProperties {
	readonly instances?: GatewayInstance[];
	readonly resourceRequests?: GatewayOperatorResourceRequests;
}
export interface GatewayOperatorResourceRequests {
	readonly cpu?: string;
	readonly instanceCount?: number;
	readonly memory?: string;
}
export interface GatewayProperties {
	readonly apiMetadataProperties?: GatewayApiMetadataProperties;
	readonly corsProperties?: GatewayCorsProperties;
	readonly httpsOnly?: boolean;
	readonly instances?: GatewayInstance[];
	readonly operatorProperties?: GatewayOperatorProperties;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly public?: boolean;
	readonly resourceRequests?: GatewayResourceRequests;
	readonly ssoProperties?: SsoProperties;
	readonly url?: string;
}
export interface GatewayResourceRequests {
	readonly cpu?: string;
	readonly memory?: string;
}
export interface GatewayRouteConfigProperties {
	readonly appResourceId?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routes?: GatewayApiRoute[];
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
	readonly userAssignedIdentities?: UserAssignedManagedIdentities;
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
export interface ServiceRegistryInstance {
	readonly name?: string;
	readonly status?: string;
}
export interface ServiceRegistryProperties {
	readonly instances?: ServiceRegistryInstance[];
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceRequests?: ServiceRegistryResourceRequests;
}
export interface ServiceRegistryResourceRequests {
	readonly cpu?: string;
	readonly instanceCount?: number;
	readonly memory?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly name?: string;
	readonly tier?: string;
}
export interface SsoProperties {
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly issuerUri?: string;
	readonly scope?: string[];
}
export interface StackProperties {
	readonly id?: string;
	readonly version?: string;
}
export interface StorageProperties {}
export interface SupportedBuildpackResourceProperties {
	readonly buildpackId?: string;
}
export interface SupportedStackResourceProperties {
	readonly stackId?: string;
	readonly version?: string;
}
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
export interface TriggeredBuildResult {
	readonly id?: string;
}
export interface UserAssignedManagedIdentities {
	readonly [key: string]: UserAssignedManagedIdentity;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserSourceInfo {
	readonly version?: string;
}
export default {
	Spring: Spring,
	"Spring/apiPortals": Spring_apiPortals,
	"Spring/apiPortals/domains": Spring_apiPortals_domains,
	"Spring/apps": Spring_apps,
	"Spring/apps/bindings": Spring_apps_bindings,
	"Spring/apps/deployments": Spring_apps_deployments,
	"Spring/apps/domains": Spring_apps_domains,
	"Spring/buildServices": Spring_buildServices,
	"Spring/buildServices/agentPools": Spring_buildServices_agentPools,
	"Spring/buildServices/builders": Spring_buildServices_builders,
	"Spring/buildServices/builders/buildpackBindings": Spring_buildServices_builders_buildpackBindings,
	"Spring/buildServices/builds": Spring_buildServices_builds,
	"Spring/buildServices/builds/results": Spring_buildServices_builds_results,
	"Spring/buildServices/supportedBuildpacks": Spring_buildServices_supportedBuildpacks,
	"Spring/buildServices/supportedStacks": Spring_buildServices_supportedStacks,
	"Spring/certificates": Spring_certificates,
	"Spring/configServers": Spring_configServers,
	"Spring/configurationServices": Spring_configurationServices,
	"Spring/gateways": Spring_gateways,
	"Spring/gateways/domains": Spring_gateways_domains,
	"Spring/gateways/routeConfigs": Spring_gateways_routeConfigs,
	"Spring/monitoringSettings": Spring_monitoringSettings,
	"Spring/serviceRegistries": Spring_serviceRegistries,
	"Spring/storages": Spring_storages,
};
