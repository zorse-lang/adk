import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Spring extends ArmResource<SpringComponentInputs> implements SpringComponentOutputs {
	constructor(entity: ADKEntity, options: SpringComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring";
}
export interface SpringComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring";
}
export interface SpringComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClusterResourceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class Spring_apiPortals
	extends ArmResource<Spring_apiPortalsComponentInputs>
	implements Spring_apiPortalsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apiPortalsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apiPortals", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apiPortals";
}
export interface Spring_apiPortalsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apiPortals";
}
export interface Spring_apiPortalsComponentInputs {
	readonly name: string;
	readonly properties?: ApiPortalProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_apiPortals_domains
	extends ArmResource<Spring_apiPortals_domainsComponentInputs>
	implements Spring_apiPortals_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apiPortals_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apiPortals/domains", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apiPortals/domains";
}
export interface Spring_apiPortals_domainsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apiPortals/domains";
}
export interface Spring_apiPortals_domainsComponentInputs {
	readonly name: string;
	readonly properties?: ApiPortalCustomDomainProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_apps extends ArmResource<Spring_appsComponentInputs> implements Spring_appsComponentOutputs {
	constructor(entity: ADKEntity, options: Spring_appsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps";
}
export interface Spring_appsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps";
}
export interface Spring_appsComponentInputs {
	readonly identity?: ManagedIdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AppResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_apps_bindings
	extends ArmResource<Spring_apps_bindingsComponentInputs>
	implements Spring_apps_bindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_bindingsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/bindings", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/bindings";
}
export interface Spring_apps_bindingsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/bindings";
}
export interface Spring_apps_bindingsComponentInputs {
	readonly name: string;
	readonly properties?: BindingResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_apps_deployments
	extends ArmResource<Spring_apps_deploymentsComponentInputs>
	implements Spring_apps_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/deployments", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/deployments";
}
export interface Spring_apps_deploymentsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/deployments";
}
export interface Spring_apps_deploymentsComponentInputs {
	readonly name: string;
	readonly properties?: DeploymentResourceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_apps_domains
	extends ArmResource<Spring_apps_domainsComponentInputs>
	implements Spring_apps_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_apps_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/apps/domains", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/apps/domains";
}
export interface Spring_apps_domainsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/apps/domains";
}
export interface Spring_apps_domainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_buildServices
	extends ArmResource<Spring_buildServicesComponentInputs>
	implements Spring_buildServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices";
}
export interface Spring_buildServicesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices";
}
export interface Spring_buildServicesComponentInputs {
	readonly name: string;
	readonly properties?: BuildServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_buildServices_agentPools
	extends ArmResource<Spring_buildServices_agentPoolsComponentInputs>
	implements Spring_buildServices_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices/agentPools", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/agentPools";
}
export interface Spring_buildServices_agentPoolsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/agentPools";
}
export interface Spring_buildServices_agentPoolsComponentInputs {
	readonly name: string;
	readonly properties?: BuildServiceAgentPoolProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_buildServices_builders
	extends ArmResource<Spring_buildServices_buildersComponentInputs>
	implements Spring_buildServices_buildersComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_buildersComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices/builders", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders";
}
export interface Spring_buildServices_buildersComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders";
}
export interface Spring_buildServices_buildersComponentInputs {
	readonly name: string;
	readonly properties?: BuilderProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings";
}
export interface Spring_buildServices_builders_buildpackBindingsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings";
}
export interface Spring_buildServices_builders_buildpackBindingsComponentInputs {
	readonly name: string;
	readonly properties?: BuildpackBindingProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_buildServices_builds
	extends ArmResource<Spring_buildServices_buildsComponentInputs>
	implements Spring_buildServices_buildsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_buildServices_buildsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/buildServices/builds", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds";
}
export interface Spring_buildServices_buildsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds";
}
export interface Spring_buildServices_buildsComponentInputs {
	readonly name: string;
	readonly properties?: BuildProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds/results";
}
export interface Spring_buildServices_builds_resultsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/builds/results";
}
export interface Spring_buildServices_builds_resultsComponentInputs {
	readonly name: string;
	readonly properties?: BuildResultProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks";
}
export interface Spring_buildServices_supportedBuildpacksComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedBuildpacks";
}
export interface Spring_buildServices_supportedBuildpacksComponentInputs {
	readonly name: string;
	readonly properties?: SupportedBuildpackResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedStacks";
}
export interface Spring_buildServices_supportedStacksComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/buildServices/supportedStacks";
}
export interface Spring_buildServices_supportedStacksComponentInputs {
	readonly name: string;
	readonly properties?: SupportedStackResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_certificates
	extends ArmResource<Spring_certificatesComponentInputs>
	implements Spring_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/certificates", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/certificates";
}
export interface Spring_certificatesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/certificates";
}
export interface Spring_certificatesComponentInputs {
	readonly name: string;
	readonly properties?: CertificateProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_configServers
	extends ArmResource<Spring_configServersComponentInputs>
	implements Spring_configServersComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_configServersComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/configServers", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/configServers";
}
export interface Spring_configServersComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/configServers";
}
export interface Spring_configServersComponentInputs {
	readonly name: string;
	readonly properties?: ConfigServerProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_configurationServices
	extends ArmResource<Spring_configurationServicesComponentInputs>
	implements Spring_configurationServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_configurationServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/configurationServices", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/configurationServices";
}
export interface Spring_configurationServicesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/configurationServices";
}
export interface Spring_configurationServicesComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_gateways
	extends ArmResource<Spring_gatewaysComponentInputs>
	implements Spring_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/gateways", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/gateways";
}
export interface Spring_gatewaysComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/gateways";
}
export interface Spring_gatewaysComponentInputs {
	readonly name: string;
	readonly properties?: GatewayProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_gateways_domains
	extends ArmResource<Spring_gateways_domainsComponentInputs>
	implements Spring_gateways_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_gateways_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/gateways/domains", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/gateways/domains";
}
export interface Spring_gateways_domainsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/gateways/domains";
}
export interface Spring_gateways_domainsComponentInputs {
	readonly name: string;
	readonly properties?: GatewayCustomDomainProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_gateways_routeConfigs
	extends ArmResource<Spring_gateways_routeConfigsComponentInputs>
	implements Spring_gateways_routeConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_gateways_routeConfigsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/gateways/routeConfigs", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/gateways/routeConfigs";
}
export interface Spring_gateways_routeConfigsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/gateways/routeConfigs";
}
export interface Spring_gateways_routeConfigsComponentInputs {
	readonly name: string;
	readonly properties?: GatewayRouteConfigProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_monitoringSettings
	extends ArmResource<Spring_monitoringSettingsComponentInputs>
	implements Spring_monitoringSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_monitoringSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/monitoringSettings", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/monitoringSettings";
}
export interface Spring_monitoringSettingsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/monitoringSettings";
}
export interface Spring_monitoringSettingsComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringSettingProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_serviceRegistries
	extends ArmResource<Spring_serviceRegistriesComponentInputs>
	implements Spring_serviceRegistriesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_serviceRegistriesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/serviceRegistries", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/serviceRegistries";
}
export interface Spring_serviceRegistriesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/serviceRegistries";
}
export interface Spring_serviceRegistriesComponentInputs {
	readonly name: string;
	readonly properties?: ServiceRegistryProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class Spring_storages
	extends ArmResource<Spring_storagesComponentInputs>
	implements Spring_storagesComponentOutputs
{
	constructor(entity: ADKEntity, options: Spring_storagesComponentInputs) {
		super(entity, options.name, "Microsoft.AppPlatform/Spring/storages", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppPlatform/Spring/storages";
}
export interface Spring_storagesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppPlatform/Spring/storages";
}
export interface Spring_storagesComponentInputs {
	readonly name: string;
	readonly properties?: StorageProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listTestKeys(resource: Spring): TestKeys {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listTestKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppPlatform/Spring") {
		throw new Error(`listTestKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AddonProfile {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ApiPortalCustomDomainProperties {
	readonly thumbprint?: string | undefined;
}
export interface ApiPortalInstance {
	readonly name?: string | undefined;
	readonly status?: string | undefined;
}
export interface ApiPortalProperties {
	readonly gatewayIds?: string[] | undefined;
	readonly httpsOnly?: boolean | undefined;
	readonly instances?: ApiPortalInstance[] | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly public?: boolean | undefined;
	readonly resourceRequests?: ApiPortalResourceRequests | undefined;
	readonly sourceUrls?: string[] | undefined;
	readonly ssoProperties?: SsoProperties | undefined;
	readonly url?: string | undefined;
}
export interface ApiPortalResourceRequests {
	readonly cpu?: string | undefined;
	readonly memory?: string | undefined;
}
export interface ApplicationInsightsAgentVersions {
	readonly java?: string | undefined;
}
export interface AppResourceProperties {
	readonly addonConfigs?: AppResourcePropertiesAddonConfigs | undefined;
	readonly customPersistentDisks?: CustomPersistentDiskResource[] | undefined;
	readonly enableEndToEndTLS?: boolean | undefined;
	readonly fqdn?: string | undefined;
	readonly httpsOnly?: boolean | undefined;
	readonly loadedCertificates?: LoadedCertificate[] | undefined;
	readonly persistentDisk?: PersistentDisk | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly public?: boolean | undefined;
	readonly temporaryDisk?: TemporaryDisk | undefined;
	readonly url?: string | undefined;
}
export interface AppResourcePropertiesAddonConfigs {
	readonly "[ key: string ]"?: AddonProfile | undefined;
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
export interface BuilderProperties {
	readonly buildpackGroups?: BuildpacksGroupProperties[] | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly stack?: StackProperties | undefined;
}
export interface BuildpackBindingLaunchProperties {
	readonly properties?: BuildpackBindingLaunchProperties | undefined;
	readonly secrets?: BuildpackBindingLaunchPropertiesSecrets | undefined;
}
export interface BuildpackBindingLaunchPropertiesSecrets {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BuildpackBindingProperties {
	readonly bindingType?:
		| ("ApacheSkyWalking" | "AppDynamics" | "ApplicationInsights" | "Dynatrace" | "ElasticAPM" | "NewRelic")
		| undefined;
	readonly launchProperties?: BuildpackBindingLaunchProperties | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface BuildpackProperties {
	readonly id?: string | undefined;
}
export interface BuildpacksGroupProperties {
	readonly buildpacks?: BuildpackProperties[] | undefined;
	readonly name?: string | undefined;
}
export interface BuildProperties {
	readonly agentPool?: string | undefined;
	readonly builder?: string | undefined;
	readonly env?: BuildPropertiesEnv | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly relativePath?: string | undefined;
	readonly triggeredBuildResult?: TriggeredBuildResult | undefined;
}
export interface BuildPropertiesEnv {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BuildResultProperties {
	readonly buildPodName?: string | undefined;
	readonly buildStages?: BuildStageProperties[] | undefined;
	readonly name?: string | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Queuing" | "Succeeded") | undefined;
}
export interface BuildServiceAgentPoolProperties {
	readonly poolSize?: BuildServiceAgentPoolSizeProperties | undefined;
	readonly provisioningState?: string | undefined;
}
export interface BuildServiceAgentPoolSizeProperties {
	readonly cpu?: string | undefined;
	readonly memory?: string | undefined;
	readonly name?: string | undefined;
}
export interface BuildServiceProperties {
	readonly kPackVersion?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceRequests?: BuildServicePropertiesResourceRequests | undefined;
}
export interface BuildServicePropertiesResourceRequests {
	readonly cpu?: string | undefined;
	readonly memory?: string | undefined;
}
export interface BuildStageProperties {
	readonly name?: string | undefined;
	readonly status?: ("Failed" | "NotStarted" | "Running" | "Succeeded") | undefined;
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
	readonly fqdn?: string | undefined;
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
	readonly zoneRedundant?: boolean | undefined;
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
export interface ConfigurationServiceGitProperty {
	readonly repositories?: ConfigurationServiceGitRepository[] | undefined;
}
export interface ConfigurationServiceGitRepository {
	readonly hostKey?: string | undefined;
	readonly hostKeyAlgorithm?: string | undefined;
	readonly label: string;
	readonly name: string;
	readonly password?: string | undefined;
	readonly patterns: string[];
	readonly privateKey?: string | undefined;
	readonly searchPaths?: string[] | undefined;
	readonly strictHostKeyChecking?: boolean | undefined;
	readonly uri: string;
	readonly username?: string | undefined;
}
export interface ConfigurationServiceInstance {
	readonly name?: string | undefined;
	readonly status?: string | undefined;
}
export interface ConfigurationServiceProperties {
	readonly instances?: ConfigurationServiceInstance[] | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceRequests?: ConfigurationServiceResourceRequests | undefined;
	readonly settings?: ConfigurationServiceSettings | undefined;
}
export interface ConfigurationServiceResourceRequests {
	readonly cpu?: string | undefined;
	readonly instanceCount?: number | undefined;
	readonly memory?: string | undefined;
}
export interface ConfigurationServiceSettings {
	readonly gitProperty?: ConfigurationServiceGitProperty | undefined;
}
export interface ContainerProbeSettings {
	readonly disableProbe?: boolean | undefined;
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
	readonly zone?: string | undefined;
}
export interface DeploymentResourceProperties {
	readonly active?: boolean | undefined;
	readonly deploymentSettings?: DeploymentSettings | undefined;
	readonly instances?: DeploymentInstance[] | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source?: UserSourceInfo | undefined;
	readonly status?: ("Running" | "Stopped") | undefined;
}
export interface DeploymentSettings {
	readonly addonConfigs?: DeploymentSettingsAddonConfigs | undefined;
	readonly containerProbeSettings?: ContainerProbeSettings | undefined;
	readonly environmentVariables?: DeploymentSettingsEnvironmentVariables | undefined;
	readonly resourceRequests?: ResourceRequests | undefined;
}
export interface DeploymentSettingsAddonConfigs {
	readonly "[ key: string ]"?: AddonProfile | undefined;
}
export interface DeploymentSettingsEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Error {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface GatewayApiMetadataProperties {
	readonly description?: string | undefined;
	readonly documentation?: string | undefined;
	readonly serverUrl?: string | undefined;
	readonly title?: string | undefined;
	readonly version?: string | undefined;
}
export interface GatewayApiRoute {
	readonly description?: string | undefined;
	readonly filters?: string[] | undefined;
	readonly order?: number | undefined;
	readonly predicates?: string[] | undefined;
	readonly ssoEnabled?: boolean | undefined;
	readonly tags?: string[] | undefined;
	readonly title?: string | undefined;
	readonly tokenRelay?: boolean | undefined;
	readonly uri?: string | undefined;
}
export interface GatewayCorsProperties {
	readonly allowCredentials?: boolean | undefined;
	readonly allowedHeaders?: string[] | undefined;
	readonly allowedMethods?: string[] | undefined;
	readonly allowedOrigins?: string[] | undefined;
	readonly exposedHeaders?: string[] | undefined;
	readonly maxAge?: number | undefined;
}
export interface GatewayCustomDomainProperties {
	readonly thumbprint?: string | undefined;
}
export interface GatewayInstance {
	readonly name?: string | undefined;
	readonly status?: string | undefined;
}
export interface GatewayOperatorProperties {
	readonly instances?: GatewayInstance[] | undefined;
	readonly resourceRequests?: GatewayOperatorResourceRequests | undefined;
}
export interface GatewayOperatorResourceRequests {
	readonly cpu?: string | undefined;
	readonly instanceCount?: number | undefined;
	readonly memory?: string | undefined;
}
export interface GatewayProperties {
	readonly apiMetadataProperties?: GatewayApiMetadataProperties | undefined;
	readonly corsProperties?: GatewayCorsProperties | undefined;
	readonly httpsOnly?: boolean | undefined;
	readonly instances?: GatewayInstance[] | undefined;
	readonly operatorProperties?: GatewayOperatorProperties | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly public?: boolean | undefined;
	readonly resourceRequests?: GatewayResourceRequests | undefined;
	readonly ssoProperties?: SsoProperties | undefined;
	readonly url?: string | undefined;
}
export interface GatewayResourceRequests {
	readonly cpu?: string | undefined;
	readonly memory?: string | undefined;
}
export interface GatewayRouteConfigProperties {
	readonly appResourceId?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routes?: GatewayApiRoute[] | undefined;
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
export interface ServiceRegistryInstance {
	readonly name?: string | undefined;
	readonly status?: string | undefined;
}
export interface ServiceRegistryProperties {
	readonly instances?: ServiceRegistryInstance[] | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceRequests?: ServiceRegistryResourceRequests | undefined;
}
export interface ServiceRegistryResourceRequests {
	readonly cpu?: string | undefined;
	readonly instanceCount?: number | undefined;
	readonly memory?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SsoProperties {
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly issuerUri?: string | undefined;
	readonly scope?: string[] | undefined;
}
export interface StackProperties {
	readonly id?: string | undefined;
	readonly version?: string | undefined;
}
export interface StorageProperties {}
export interface SupportedBuildpackResourceProperties {
	readonly buildpackId?: string | undefined;
}
export interface SupportedStackResourceProperties {
	readonly stackId?: string | undefined;
	readonly version?: string | undefined;
}
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
export interface TriggeredBuildResult {
	readonly id?: string | undefined;
}
export interface UserSourceInfo {
	readonly version?: string | undefined;
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
