import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectedEnvironments
	extends ArmResource<connectedEnvironmentsComponentInputs>
	implements connectedEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.App/connectedEnvironments", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/connectedEnvironments";
}
export interface connectedEnvironmentsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/connectedEnvironments";
}
export interface connectedEnvironmentsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectedEnvironmentProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class connectedEnvironments_certificates
	extends ArmResource<connectedEnvironments_certificatesComponentInputs>
	implements connectedEnvironments_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedEnvironments_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.App/connectedEnvironments/certificates", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/connectedEnvironments/certificates";
}
export interface connectedEnvironments_certificatesComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/connectedEnvironments/certificates";
}
export interface connectedEnvironments_certificatesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class connectedEnvironments_daprComponents
	extends ArmResource<connectedEnvironments_daprComponentsComponentInputs>
	implements connectedEnvironments_daprComponentsComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedEnvironments_daprComponentsComponentInputs) {
		super(entity, options.name, "Microsoft.App/connectedEnvironments/daprComponents", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/connectedEnvironments/daprComponents";
}
export interface connectedEnvironments_daprComponentsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/connectedEnvironments/daprComponents";
}
export interface connectedEnvironments_daprComponentsComponentInputs {
	readonly name: string;
	readonly properties?: DaprComponentProperties;
	readonly systemData?: SystemData;
}
export class connectedEnvironments_storages
	extends ArmResource<connectedEnvironments_storagesComponentInputs>
	implements connectedEnvironments_storagesComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedEnvironments_storagesComponentInputs) {
		super(entity, options.name, "Microsoft.App/connectedEnvironments/storages", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/connectedEnvironments/storages";
}
export interface connectedEnvironments_storagesComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/connectedEnvironments/storages";
}
export interface connectedEnvironments_storagesComponentInputs {
	readonly name: string;
	readonly properties?: ConnectedEnvironmentStorageProperties;
	readonly systemData?: SystemData;
}
export class containerApps extends ArmResource<containerAppsComponentInputs> implements containerAppsComponentOutputs {
	constructor(entity: ADKEntity, options: containerAppsComponentInputs) {
		super(entity, options.name, "Microsoft.App/containerApps", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps";
}
export interface containerAppsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps";
}
export interface containerAppsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ContainerAppProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class containerApps_authConfigs
	extends ArmResource<containerApps_authConfigsComponentInputs>
	implements containerApps_authConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerApps_authConfigsComponentInputs) {
		super(entity, options.name, "Microsoft.App/containerApps/authConfigs", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps/authConfigs";
}
export interface containerApps_authConfigsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps/authConfigs";
}
export interface containerApps_authConfigsComponentInputs {
	readonly name: string;
	readonly properties?: AuthConfigProperties;
	readonly systemData?: SystemData;
}
export class containerApps_detectorProperties
	extends ArmResource<containerApps_detectorPropertiesComponentInputs>
	implements containerApps_detectorPropertiesComponentOutputs
{
	constructor(entity: ADKEntity, options: containerApps_detectorPropertiesComponentInputs) {
		super(entity, options.name, "Microsoft.App/containerApps/detectorProperties", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps/detectorProperties";
}
export interface containerApps_detectorPropertiesComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps/detectorProperties";
}
export interface containerApps_detectorPropertiesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ContainerAppProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class containerApps_detectorProperties_revisions
	extends ArmResource<containerApps_detectorProperties_revisionsComponentInputs>
	implements containerApps_detectorProperties_revisionsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerApps_detectorProperties_revisionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.App/containerApps/detectorProperties/revisions",
			"2022-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps/detectorProperties/revisions";
}
export interface containerApps_detectorProperties_revisionsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps/detectorProperties/revisions";
}
export interface containerApps_detectorProperties_revisionsComponentInputs {
	readonly name: string;
	readonly properties?: RevisionProperties;
	readonly systemData?: SystemData;
}
export class containerApps_detectors
	extends ArmResource<containerApps_detectorsComponentInputs>
	implements containerApps_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerApps_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.App/containerApps/detectors", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps/detectors";
}
export interface containerApps_detectorsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps/detectors";
}
export interface containerApps_detectorsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticsProperties;
	readonly systemData?: SystemData;
}
export class containerApps_revisions
	extends ArmResource<containerApps_revisionsComponentInputs>
	implements containerApps_revisionsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerApps_revisionsComponentInputs) {
		super(entity, options.name, "Microsoft.App/containerApps/revisions", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps/revisions";
}
export interface containerApps_revisionsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps/revisions";
}
export interface containerApps_revisionsComponentInputs {
	readonly name: string;
	readonly properties?: RevisionProperties;
	readonly systemData?: SystemData;
}
export class containerApps_revisions_replicas
	extends ArmResource<containerApps_revisions_replicasComponentInputs>
	implements containerApps_revisions_replicasComponentOutputs
{
	constructor(entity: ADKEntity, options: containerApps_revisions_replicasComponentInputs) {
		super(entity, options.name, "Microsoft.App/containerApps/revisions/replicas", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps/revisions/replicas";
}
export interface containerApps_revisions_replicasComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps/revisions/replicas";
}
export interface containerApps_revisions_replicasComponentInputs {
	readonly name: string;
	readonly properties?: ReplicaProperties;
	readonly systemData?: SystemData;
}
export class containerApps_sourcecontrols
	extends ArmResource<containerApps_sourcecontrolsComponentInputs>
	implements containerApps_sourcecontrolsComponentOutputs
{
	constructor(entity: ADKEntity, options: containerApps_sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.App/containerApps/sourcecontrols", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/containerApps/sourcecontrols";
}
export interface containerApps_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/containerApps/sourcecontrols";
}
export interface containerApps_sourcecontrolsComponentInputs {
	readonly name: string;
	readonly properties?: SourceControlProperties;
	readonly systemData?: SystemData;
}
export class managedEnvironments
	extends ArmResource<managedEnvironmentsComponentInputs>
	implements managedEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.App/managedEnvironments", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/managedEnvironments";
}
export interface managedEnvironmentsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/managedEnvironments";
}
export interface managedEnvironmentsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedEnvironmentProperties;
	readonly sku?: EnvironmentSkuProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class managedEnvironments_certificates
	extends ArmResource<managedEnvironments_certificatesComponentInputs>
	implements managedEnvironments_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedEnvironments_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.App/managedEnvironments/certificates", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/managedEnvironments/certificates";
}
export interface managedEnvironments_certificatesComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/managedEnvironments/certificates";
}
export interface managedEnvironments_certificatesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class managedEnvironments_daprComponents
	extends ArmResource<managedEnvironments_daprComponentsComponentInputs>
	implements managedEnvironments_daprComponentsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedEnvironments_daprComponentsComponentInputs) {
		super(entity, options.name, "Microsoft.App/managedEnvironments/daprComponents", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/managedEnvironments/daprComponents";
}
export interface managedEnvironments_daprComponentsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/managedEnvironments/daprComponents";
}
export interface managedEnvironments_daprComponentsComponentInputs {
	readonly name: string;
	readonly properties?: DaprComponentProperties;
	readonly systemData?: SystemData;
}
export class managedEnvironments_detectorProperties
	extends ArmResource<managedEnvironments_detectorPropertiesComponentInputs>
	implements managedEnvironments_detectorPropertiesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedEnvironments_detectorPropertiesComponentInputs) {
		super(entity, options.name, "Microsoft.App/managedEnvironments/detectorProperties", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/managedEnvironments/detectorProperties";
}
export interface managedEnvironments_detectorPropertiesComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/managedEnvironments/detectorProperties";
}
export interface managedEnvironments_detectorPropertiesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagedEnvironmentProperties;
	readonly sku?: EnvironmentSkuProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class managedEnvironments_detectors
	extends ArmResource<managedEnvironments_detectorsComponentInputs>
	implements managedEnvironments_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedEnvironments_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.App/managedEnvironments/detectors", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/managedEnvironments/detectors";
}
export interface managedEnvironments_detectorsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/managedEnvironments/detectors";
}
export interface managedEnvironments_detectorsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticsProperties;
	readonly systemData?: SystemData;
}
export class managedEnvironments_storages
	extends ArmResource<managedEnvironments_storagesComponentInputs>
	implements managedEnvironments_storagesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedEnvironments_storagesComponentInputs) {
		super(entity, options.name, "Microsoft.App/managedEnvironments/storages", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.App/managedEnvironments/storages";
}
export interface managedEnvironments_storagesComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.App/managedEnvironments/storages";
}
export interface managedEnvironments_storagesComponentInputs {
	readonly name: string;
	readonly properties?: ManagedEnvironmentStorageProperties;
	readonly systemData?: SystemData;
}
export function listCustomHostNameAnalysis(resource: containerApps): CustomHostnameAnalysisResult {
	if (resource.apiVersion !== "2022-06-01-preview") {
		throw new Error(`listCustomHostNameAnalysis is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.App/containerApps") {
		throw new Error(`listCustomHostNameAnalysis is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: containerApps): SecretsCollection {
	if (resource.apiVersion !== "2022-06-01-preview") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.App/containerApps") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AllowedAudiencesValidation {
	readonly allowedAudiences?: string[];
}
export interface AllowedPrincipals {
	readonly groups?: string[];
	readonly identities?: string[];
}
export interface Apple {
	readonly enabled?: boolean;
	readonly login?: LoginScopes;
	readonly registration?: AppleRegistration;
}
export interface AppleRegistration {
	readonly clientId?: string;
	readonly clientSecretSettingName?: string;
}
export interface AppLogsConfiguration {
	readonly destination?: string;
	readonly logAnalyticsConfiguration?: LogAnalyticsConfiguration;
}
export interface AppRegistration {
	readonly appId?: string;
	readonly appSecretSettingName?: string;
}
export interface AuthConfigProperties {
	readonly globalValidation?: GlobalValidation;
	readonly httpSettings?: HttpSettings;
	readonly identityProviders?: IdentityProviders;
	readonly login?: Login;
	readonly platform?: AuthPlatform;
}
export interface AuthPlatform {
	readonly enabled?: boolean;
	readonly runtimeVersion?: string;
}
export interface AzureActiveDirectory {
	readonly enabled?: boolean;
	readonly isAutoProvisioned?: boolean;
	readonly login?: AzureActiveDirectoryLogin;
	readonly registration?: AzureActiveDirectoryRegistration;
	readonly validation?: AzureActiveDirectoryValidation;
}
export interface AzureActiveDirectoryLogin {
	readonly disableWWWAuthenticate?: boolean;
	readonly loginParameters?: string[];
}
export interface AzureActiveDirectoryRegistration {
	readonly clientId?: string;
	readonly clientSecretCertificateIssuer?: string;
	readonly clientSecretCertificateSubjectAlternativeName?: string;
	readonly clientSecretCertificateThumbprint?: string;
	readonly clientSecretSettingName?: string;
	readonly openIdIssuer?: string;
}
export interface AzureActiveDirectoryValidation {
	readonly allowedAudiences?: string[];
	readonly defaultAuthorizationPolicy?: DefaultAuthorizationPolicy;
	readonly jwtClaimChecks?: JwtClaimChecks;
}
export interface AzureCredentials {
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly subscriptionId?: string;
	readonly tenantId?: string;
}
export interface AzureFileProperties {
	readonly accessMode?: "ReadOnly" | "ReadWrite";
	readonly accountKey?: string;
	readonly accountName?: string;
	readonly shareName?: string;
}
export interface AzureStaticWebApps {
	readonly enabled?: boolean;
	readonly registration?: AzureStaticWebAppsRegistration;
}
export interface AzureStaticWebAppsRegistration {
	readonly clientId?: string;
}
export interface CertificateProperties {
	readonly expirationDate?: string;
	readonly issueDate?: string;
	readonly issuer?: string;
	readonly password?: string;
	readonly provisioningState?: "Canceled" | "DeleteFailed" | "Failed" | "Pending" | "Succeeded";
	readonly publicKeyHash?: string;
	readonly subjectAlternativeNames?: string[];
	readonly subjectName?: string;
	readonly thumbprint?: string;
	readonly valid?: boolean;
	readonly value?: any;
}
export interface ClientRegistration {
	readonly clientId?: string;
	readonly clientSecretSettingName?: string;
}
export interface Configuration {
	readonly activeRevisionsMode?: "Multiple" | "Single";
	readonly dapr?: Dapr;
	readonly ingress?: Ingress;
	readonly maxInactiveRevisions?: number;
	readonly registries?: RegistryCredentials[];
	readonly secrets?: Secret[];
}
export interface ConnectedEnvironmentProperties {
	readonly customDomainConfiguration?: CustomDomainConfiguration;
	readonly daprAIConnectionString?: string;
	readonly defaultDomain?: string;
	readonly deploymentErrors?: string;
	readonly provisioningState?:
		| "Canceled"
		| "Failed"
		| "InfrastructureSetupComplete"
		| "InfrastructureSetupInProgress"
		| "InitializationInProgress"
		| "ScheduledForDelete"
		| "Succeeded"
		| "Waiting";
	readonly staticIp?: string;
}
export interface ConnectedEnvironmentStorageProperties {
	readonly azureFile?: AzureFileProperties;
}
export interface Container {
	readonly args?: string[];
	readonly command?: string[];
	readonly env?: EnvironmentVar[];
	readonly image?: string;
	readonly name?: string;
	readonly probes?: ContainerAppProbe[];
	readonly resources?: ContainerResources;
	readonly volumeMounts?: VolumeMount[];
}
export interface ContainerAppProbe {
	readonly failureThreshold?: number;
	readonly httpGet?: ContainerAppProbeHttpGet;
	readonly initialDelaySeconds?: number;
	readonly periodSeconds?: number;
	readonly successThreshold?: number;
	readonly tcpSocket?: ContainerAppProbeTcpSocket;
	readonly terminationGracePeriodSeconds?: number;
	readonly timeoutSeconds?: number;
	readonly type?: "Liveness" | "Readiness" | "Startup";
}
export interface ContainerAppProbeHttpGet {
	readonly host?: string;
	readonly httpHeaders?: ContainerAppProbeHttpGetHttpHeadersItem[];
	readonly path?: string;
	readonly port: number;
	readonly scheme?: "HTTP" | "HTTPS";
}
export interface ContainerAppProbeHttpGetHttpHeadersItem {
	readonly name: string;
	readonly value: string;
}
export interface ContainerAppProbeTcpSocket {
	readonly host?: string;
	readonly port: number;
}
export interface ContainerAppProperties {
	readonly configuration?: Configuration;
	readonly customDomainVerificationId?: string;
	readonly environmentId?: string;
	readonly eventStreamEndpoint?: string;
	readonly latestRevisionFqdn?: string;
	readonly latestRevisionName?: string;
	readonly managedEnvironmentId?: string;
	readonly outboundIpAddresses?: string[];
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly template?: Template;
	readonly workloadProfileType?: string;
}
export interface ContainerAppSecret {
	readonly name?: string;
	readonly value?: string;
}
export interface ContainerResources {
	readonly cpu?: number;
	readonly ephemeralStorage?: string;
	readonly memory?: string;
}
export interface CookieExpiration {
	readonly convention?: "FixedTime";
	readonly timeToExpiration?: string;
}
export interface CustomDomain {
	readonly bindingType?: "Disabled" | "SniEnabled";
	readonly certificateId: string;
	readonly name: string;
}
export interface CustomDomainConfiguration {
	readonly certificatePassword?: string;
	readonly certificateValue?: any;
	readonly customDomainVerificationId?: string;
	readonly dnsSuffix?: string;
	readonly expirationDate?: string;
	readonly subjectName?: string;
	readonly thumbprint?: string;
}
export interface CustomHostnameAnalysisResult {
	readonly alternateCNameRecords?: string[];
	readonly alternateTxtRecords?: string[];
	readonly aRecords?: string[];
	readonly cNameRecords?: string[];
	readonly conflictingContainerAppResourceId?: string;
	readonly conflictWithEnvironmentCustomDomain?: boolean;
	readonly customDomainVerificationFailureInfo?: CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo;
	readonly customDomainVerificationTest?: "Failed" | "Passed";
	readonly hasConflictOnManagedEnvironment?: boolean;
	readonly hostName?: string;
	readonly isHostnameAlreadyVerified?: boolean;
	readonly txtRecords?: string[];
}
export interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo {
	readonly code?: string;
	readonly details?: CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem[];
	readonly message?: string;
	readonly target?: string;
}
export interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem {
	readonly code?: string;
	readonly message?: string;
	readonly target?: string;
}
export interface CustomOpenIdConnectProvider {
	readonly enabled?: boolean;
	readonly login?: OpenIdConnectLogin;
	readonly registration?: OpenIdConnectRegistration;
}
export interface CustomScaleRule {
	readonly auth?: ScaleRuleAuth[];
	readonly metadata?: CustomScaleRuleMetadata;
	readonly type?: string;
}
export interface CustomScaleRuleMetadata {
	readonly [key: string]: string;
}
export interface Dapr {
	readonly appId?: string;
	readonly appPort?: number;
	readonly appProtocol?: "grpc" | "http";
	readonly enableApiLogging?: boolean;
	readonly enabled?: boolean;
	readonly httpMaxRequestSize?: number;
	readonly httpReadBufferSize?: number;
	readonly logLevel?: "debug" | "error" | "info" | "warn";
}
export interface DaprComponentProperties {
	readonly componentType?: string;
	readonly ignoreErrors?: boolean;
	readonly initTimeout?: string;
	readonly metadata?: DaprMetadata[];
	readonly scopes?: string[];
	readonly secrets?: Secret[];
	readonly secretStoreComponent?: string;
	readonly version?: string;
}
export interface DaprMetadata {
	readonly name?: string;
	readonly secretRef?: string;
	readonly value?: string;
}
export interface DaprSecret {
	readonly name?: string;
	readonly value?: string;
}
export interface DaprSecretsCollection {
	readonly value: DaprSecret[];
}
export interface DefaultAuthorizationPolicy {
	readonly allowedApplications?: string[];
	readonly allowedPrincipals?: AllowedPrincipals;
}
export interface DiagnosticDataProviderMetadata {
	readonly propertyBag?: DiagnosticDataProviderMetadataPropertyBagItem[];
	readonly providerName?: string;
}
export interface DiagnosticDataProviderMetadataPropertyBagItem {
	readonly name?: string;
	readonly value?: string;
}
export interface DiagnosticDataTableResponseColumn {
	readonly columnName?: string;
	readonly columnType?: string;
	readonly dataType?: string;
}
export interface DiagnosticDataTableResponseObject {
	readonly columns?: DiagnosticDataTableResponseColumn[];
	readonly rows?: any[];
	readonly tableName?: string;
}
export interface DiagnosticRendering {
	readonly description?: string;
	readonly isVisible?: boolean;
	readonly title?: string;
	readonly type?: number;
}
export interface DiagnosticsDataApiResponse {
	readonly renderingProperties?: DiagnosticRendering;
	readonly table?: DiagnosticDataTableResponseObject;
}
export interface DiagnosticsDefinition {
	readonly analysisTypes?: string[];
	readonly author?: string;
	readonly category?: string;
	readonly description?: string;
	readonly id?: string;
	readonly name?: string;
	readonly score?: number;
	readonly supportTopicList?: DiagnosticSupportTopic[];
	readonly type?: string;
}
export interface DiagnosticsProperties {
	readonly dataProviderMetadata?: DiagnosticDataProviderMetadata;
	readonly dataset?: DiagnosticsDataApiResponse[];
	readonly metadata?: DiagnosticsDefinition;
	readonly status?: DiagnosticsStatus;
}
export interface DiagnosticsStatus {
	readonly message?: string;
	readonly statusId?: number;
}
export interface DiagnosticSupportTopic {
	readonly id?: string;
	readonly pesId?: string;
}
export interface EnvironmentSkuProperties {
	readonly name: "Consumption" | "Premium";
}
export interface EnvironmentVar {
	readonly name?: string;
	readonly secretRef?: string;
	readonly value?: string;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "CustomLocation";
}
export interface Facebook {
	readonly enabled?: boolean;
	readonly graphApiVersion?: string;
	readonly login?: LoginScopes;
	readonly registration?: AppRegistration;
}
export interface ForwardProxy {
	readonly convention?: "Custom" | "NoProxy";
	readonly customHostHeaderName?: string;
	readonly customProtoHeaderName?: string;
}
export interface GitHub {
	readonly enabled?: boolean;
	readonly login?: LoginScopes;
	readonly registration?: ClientRegistration;
}
export interface GithubActionConfiguration {
	readonly azureCredentials?: AzureCredentials;
	readonly contextPath?: string;
	readonly image?: string;
	readonly os?: string;
	readonly publishType?: string;
	readonly registryInfo?: RegistryInfo;
	readonly runtimeStack?: string;
	readonly runtimeVersion?: string;
}
export interface GlobalValidation {
	readonly excludedPaths?: string[];
	readonly redirectToProvider?: string;
	readonly unauthenticatedClientAction?: "AllowAnonymous" | "RedirectToLoginPage" | "Return401";
}
export interface Google {
	readonly enabled?: boolean;
	readonly login?: LoginScopes;
	readonly registration?: ClientRegistration;
	readonly validation?: AllowedAudiencesValidation;
}
export interface HttpScaleRule {
	readonly auth?: ScaleRuleAuth[];
	readonly metadata?: HttpScaleRuleMetadata;
}
export interface HttpScaleRuleMetadata {
	readonly [key: string]: string;
}
export interface HttpSettings {
	readonly forwardProxy?: ForwardProxy;
	readonly requireHttps?: boolean;
	readonly routes?: HttpSettingsRoutes;
}
export interface HttpSettingsRoutes {
	readonly apiPrefix?: string;
}
export interface IdentityProviders {
	readonly apple?: Apple;
	readonly azureActiveDirectory?: AzureActiveDirectory;
	readonly azureStaticWebApps?: AzureStaticWebApps;
	readonly customOpenIdConnectProviders?: IdentityProvidersCustomOpenIdConnectProviders;
	readonly facebook?: Facebook;
	readonly gitHub?: GitHub;
	readonly google?: Google;
	readonly twitter?: Twitter;
}
export interface IdentityProvidersCustomOpenIdConnectProviders {
	readonly [key: string]: CustomOpenIdConnectProvider;
}
export interface Ingress {
	readonly allowInsecure?: boolean;
	readonly customDomains?: CustomDomain[];
	readonly exposedPort?: number;
	readonly external?: boolean;
	readonly fqdn?: string;
	readonly ipSecurityRestrictions?: IpSecurityRestrictionRule[];
	readonly targetPort?: number;
	readonly traffic?: TrafficWeight[];
	readonly transport?: "auto" | "http" | "http2" | "tcp";
}
export interface InitContainer {
	readonly args?: string[];
	readonly command?: string[];
	readonly env?: EnvironmentVar[];
	readonly image?: string;
	readonly name?: string;
	readonly resources?: ContainerResources;
	readonly volumeMounts?: VolumeMount[];
}
export interface IpSecurityRestrictionRule {
	readonly action: "Allow" | "Deny";
	readonly description?: string;
	readonly ipAddressRange: string;
	readonly name: string;
}
export interface JwtClaimChecks {
	readonly allowedClientApplications?: string[];
	readonly allowedGroups?: string[];
}
export interface LogAnalyticsConfiguration {
	readonly customerId?: string;
	readonly sharedKey?: string;
}
export interface Login {
	readonly allowedExternalRedirectUrls?: string[];
	readonly cookieExpiration?: CookieExpiration;
	readonly nonce?: Nonce;
	readonly preserveUrlFragmentsForLogins?: boolean;
	readonly routes?: LoginRoutes;
}
export interface LoginRoutes {
	readonly logoutEndpoint?: string;
}
export interface LoginScopes {
	readonly scopes?: string[];
}
export interface ManagedEnvironmentOutboundSettings {
	readonly outBoundType?: "LoadBalancer" | "UserDefinedRouting";
	readonly virtualNetworkApplianceIp?: string;
}
export interface ManagedEnvironmentProperties {
	readonly appLogsConfiguration?: AppLogsConfiguration;
	readonly customDomainConfiguration?: CustomDomainConfiguration;
	readonly daprAIConnectionString?: string;
	readonly daprAIInstrumentationKey?: string;
	readonly defaultDomain?: string;
	readonly deploymentErrors?: string;
	readonly eventStreamEndpoint?: string;
	readonly provisioningState?:
		| "Canceled"
		| "Failed"
		| "InfrastructureSetupComplete"
		| "InfrastructureSetupInProgress"
		| "InitializationInProgress"
		| "ScheduledForDelete"
		| "Succeeded"
		| "UpgradeFailed"
		| "UpgradeRequested"
		| "Waiting";
	readonly staticIp?: string;
	readonly vnetConfiguration?: VnetConfiguration;
	readonly workloadProfiles?: WorkloadProfile[];
	readonly zoneRedundant?: boolean;
}
export interface ManagedEnvironmentStorageProperties {
	readonly azureFile?: AzureFileProperties;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface Nonce {
	readonly nonceExpirationInterval?: string;
	readonly validateNonce?: boolean;
}
export interface OpenIdConnectClientCredential {
	readonly clientSecretSettingName?: string;
	readonly method?: "ClientSecretPost";
}
export interface OpenIdConnectConfig {
	readonly authorizationEndpoint?: string;
	readonly certificationUri?: string;
	readonly issuer?: string;
	readonly tokenEndpoint?: string;
	readonly wellKnownOpenIdConfiguration?: string;
}
export interface OpenIdConnectLogin {
	readonly nameClaimType?: string;
	readonly scopes?: string[];
}
export interface OpenIdConnectRegistration {
	readonly clientCredential?: OpenIdConnectClientCredential;
	readonly clientId?: string;
	readonly openIdConnectConfiguration?: OpenIdConnectConfig;
}
export interface QueueScaleRule {
	readonly auth?: ScaleRuleAuth[];
	readonly queueLength?: number;
	readonly queueName?: string;
}
export interface RegistryCredentials {
	readonly identity?: string;
	readonly passwordSecretRef?: string;
	readonly server?: string;
	readonly username?: string;
}
export interface RegistryInfo {
	readonly registryPassword?: string;
	readonly registryUrl?: string;
	readonly registryUserName?: string;
}
export interface ReplicaContainer {
	readonly containerId?: string;
	readonly execEndpoint?: string;
	readonly logStreamEndpoint?: string;
	readonly name?: string;
	readonly ready?: boolean;
	readonly restartCount?: number;
	readonly started?: boolean;
}
export interface ReplicaProperties {
	readonly containers?: ReplicaContainer[];
	readonly createdTime?: string;
}
export interface RevisionProperties {
	readonly active?: boolean;
	readonly createdTime?: string;
	readonly fqdn?: string;
	readonly healthState?: "Healthy" | "None" | "Unhealthy";
	readonly lastActiveTime?: string;
	readonly provisioningError?: string;
	readonly provisioningState?: "Deprovisioned" | "Deprovisioning" | "Failed" | "Provisioned" | "Provisioning";
	readonly replicas?: number;
	readonly template?: Template;
	readonly trafficWeight?: number;
}
export interface Scale {
	readonly maxReplicas?: number;
	readonly minReplicas?: number;
	readonly rules?: ScaleRule[];
}
export interface ScaleRule {
	readonly azureQueue?: QueueScaleRule;
	readonly custom?: CustomScaleRule;
	readonly http?: HttpScaleRule;
	readonly name?: string;
	readonly tcp?: TcpScaleRule;
}
export interface ScaleRuleAuth {
	readonly secretRef?: string;
	readonly triggerParameter?: string;
}
export interface Secret {
	readonly name?: string;
	readonly value?: string;
}
export interface SecretsCollection {
	readonly value: ContainerAppSecret[];
}
export interface SourceControlProperties {
	readonly branch?: string;
	readonly githubActionConfiguration?: GithubActionConfiguration;
	readonly operationState?: "Canceled" | "Failed" | "InProgress" | "Succeeded";
	readonly repoUrl?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TcpScaleRule {
	readonly auth?: ScaleRuleAuth[];
	readonly metadata?: TcpScaleRuleMetadata;
}
export interface TcpScaleRuleMetadata {
	readonly [key: string]: string;
}
export interface Template {
	readonly containers?: Container[];
	readonly initContainers?: InitContainer[];
	readonly revisionSuffix?: string;
	readonly scale?: Scale;
	readonly volumes?: Volume[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TrafficWeight {
	readonly label?: string;
	readonly latestRevision?: boolean;
	readonly revisionName?: string;
	readonly weight?: number;
}
export interface Twitter {
	readonly enabled?: boolean;
	readonly registration?: TwitterRegistration;
}
export interface TwitterRegistration {
	readonly consumerKey?: string;
	readonly consumerSecretSettingName?: string;
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VnetConfiguration {
	readonly dockerBridgeCidr?: string;
	readonly infrastructureSubnetId?: string;
	readonly internal?: boolean;
	readonly outboundSettings?: ManagedEnvironmentOutboundSettings;
	readonly platformReservedCidr?: string;
	readonly platformReservedDnsIP?: string;
	readonly runtimeSubnetId?: string;
}
export interface Volume {
	readonly name?: string;
	readonly storageName?: string;
	readonly storageType?: "AzureFile" | "EmptyDir";
}
export interface VolumeMount {
	readonly mountPath?: string;
	readonly volumeName?: string;
}
export interface WorkloadProfile {
	readonly maximumCount: number;
	readonly minimumCount: number;
	readonly workloadProfileType: string;
}
export default {
	connectedEnvironments: connectedEnvironments,
	"connectedEnvironments/certificates": connectedEnvironments_certificates,
	"connectedEnvironments/daprComponents": connectedEnvironments_daprComponents,
	"connectedEnvironments/storages": connectedEnvironments_storages,
	containerApps: containerApps,
	"containerApps/authConfigs": containerApps_authConfigs,
	"containerApps/detectorProperties": containerApps_detectorProperties,
	"containerApps/detectorProperties/revisions": containerApps_detectorProperties_revisions,
	"containerApps/detectors": containerApps_detectors,
	"containerApps/revisions": containerApps_revisions,
	"containerApps/revisions/replicas": containerApps_revisions_replicas,
	"containerApps/sourcecontrols": containerApps_sourcecontrols,
	managedEnvironments: managedEnvironments,
	"managedEnvironments/certificates": managedEnvironments_certificates,
	"managedEnvironments/daprComponents": managedEnvironments_daprComponents,
	"managedEnvironments/detectorProperties": managedEnvironments_detectorProperties,
	"managedEnvironments/detectors": managedEnvironments_detectors,
	"managedEnvironments/storages": managedEnvironments_storages,
};
