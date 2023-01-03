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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectedEnvironmentProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: CertificateProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: DaprComponentProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ConnectedEnvironmentStorageProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ContainerAppProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: AuthConfigProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ContainerAppProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: RevisionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: DiagnosticsProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: RevisionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ReplicaProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SourceControlProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ManagedEnvironmentProperties | undefined;
	readonly sku?: EnvironmentSkuProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: CertificateProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: DaprComponentProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedEnvironmentProperties | undefined;
	readonly sku?: EnvironmentSkuProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: DiagnosticsProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ManagedEnvironmentStorageProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly allowedAudiences?: string[] | undefined;
}
export interface AllowedPrincipals {
	readonly groups?: string[] | undefined;
	readonly identities?: string[] | undefined;
}
export interface Apple {
	readonly enabled?: boolean | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: AppleRegistration | undefined;
}
export interface AppleRegistration {
	readonly clientId?: string | undefined;
	readonly clientSecretSettingName?: string | undefined;
}
export interface AppLogsConfiguration {
	readonly destination?: string | undefined;
	readonly logAnalyticsConfiguration?: LogAnalyticsConfiguration | undefined;
}
export interface AppRegistration {
	readonly appId?: string | undefined;
	readonly appSecretSettingName?: string | undefined;
}
export interface AuthConfigProperties {
	readonly globalValidation?: GlobalValidation | undefined;
	readonly httpSettings?: HttpSettings | undefined;
	readonly identityProviders?: IdentityProviders | undefined;
	readonly login?: Login | undefined;
	readonly platform?: AuthPlatform | undefined;
}
export interface AuthPlatform {
	readonly enabled?: boolean | undefined;
	readonly runtimeVersion?: string | undefined;
}
export interface AzureActiveDirectory {
	readonly enabled?: boolean | undefined;
	readonly isAutoProvisioned?: boolean | undefined;
	readonly login?: AzureActiveDirectoryLogin | undefined;
	readonly registration?: AzureActiveDirectoryRegistration | undefined;
	readonly validation?: AzureActiveDirectoryValidation | undefined;
}
export interface AzureActiveDirectoryLogin {
	readonly disableWWWAuthenticate?: boolean | undefined;
	readonly loginParameters?: string[] | undefined;
}
export interface AzureActiveDirectoryRegistration {
	readonly clientId?: string | undefined;
	readonly clientSecretCertificateIssuer?: string | undefined;
	readonly clientSecretCertificateSubjectAlternativeName?: string | undefined;
	readonly clientSecretCertificateThumbprint?: string | undefined;
	readonly clientSecretSettingName?: string | undefined;
	readonly openIdIssuer?: string | undefined;
}
export interface AzureActiveDirectoryValidation {
	readonly allowedAudiences?: string[] | undefined;
	readonly defaultAuthorizationPolicy?: DefaultAuthorizationPolicy | undefined;
	readonly jwtClaimChecks?: JwtClaimChecks | undefined;
}
export interface AzureCredentials {
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface AzureFileProperties {
	readonly accessMode?: ("ReadOnly" | "ReadWrite") | undefined;
	readonly accountKey?: string | undefined;
	readonly accountName?: string | undefined;
	readonly shareName?: string | undefined;
}
export interface AzureStaticWebApps {
	readonly enabled?: boolean | undefined;
	readonly registration?: AzureStaticWebAppsRegistration | undefined;
}
export interface AzureStaticWebAppsRegistration {
	readonly clientId?: string | undefined;
}
export interface CertificateProperties {
	readonly expirationDate?: string | undefined;
	readonly issueDate?: string | undefined;
	readonly issuer?: string | undefined;
	readonly password?: string | undefined;
	readonly provisioningState?: ("Canceled" | "DeleteFailed" | "Failed" | "Pending" | "Succeeded") | undefined;
	readonly publicKeyHash?: string | undefined;
	readonly subjectAlternativeNames?: string[] | undefined;
	readonly subjectName?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly valid?: boolean | undefined;
	readonly value?: any | undefined;
}
export interface ClientRegistration {
	readonly clientId?: string | undefined;
	readonly clientSecretSettingName?: string | undefined;
}
export interface Configuration {
	readonly activeRevisionsMode?: ("Multiple" | "Single") | undefined;
	readonly dapr?: Dapr | undefined;
	readonly ingress?: Ingress | undefined;
	readonly maxInactiveRevisions?: number | undefined;
	readonly registries?: RegistryCredentials[] | undefined;
	readonly secrets?: Secret[] | undefined;
}
export interface ConnectedEnvironmentProperties {
	readonly customDomainConfiguration?: CustomDomainConfiguration | undefined;
	readonly daprAIConnectionString?: string | undefined;
	readonly defaultDomain?: string | undefined;
	readonly deploymentErrors?: string | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Failed"
				| "InfrastructureSetupComplete"
				| "InfrastructureSetupInProgress"
				| "InitializationInProgress"
				| "ScheduledForDelete"
				| "Succeeded"
				| "Waiting"
		  )
		| undefined;
	readonly staticIp?: string | undefined;
}
export interface ConnectedEnvironmentStorageProperties {
	readonly azureFile?: AzureFileProperties | undefined;
}
export interface Container {
	readonly args?: string[] | undefined;
	readonly command?: string[] | undefined;
	readonly env?: EnvironmentVar[] | undefined;
	readonly image?: string | undefined;
	readonly name?: string | undefined;
	readonly probes?: ContainerAppProbe[] | undefined;
	readonly resources?: ContainerResources | undefined;
	readonly volumeMounts?: VolumeMount[] | undefined;
}
export interface ContainerAppProbe {
	readonly failureThreshold?: number | undefined;
	readonly httpGet?: ContainerAppProbeHttpGet | undefined;
	readonly initialDelaySeconds?: number | undefined;
	readonly periodSeconds?: number | undefined;
	readonly successThreshold?: number | undefined;
	readonly tcpSocket?: ContainerAppProbeTcpSocket | undefined;
	readonly terminationGracePeriodSeconds?: number | undefined;
	readonly timeoutSeconds?: number | undefined;
	readonly type?: ("Liveness" | "Readiness" | "Startup") | undefined;
}
export interface ContainerAppProbeHttpGet {
	readonly host?: string | undefined;
	readonly httpHeaders?: ContainerAppProbeHttpGetHttpHeadersItem[] | undefined;
	readonly path?: string | undefined;
	readonly port: number;
	readonly scheme?: ("HTTP" | "HTTPS") | undefined;
}
export interface ContainerAppProbeHttpGetHttpHeadersItem {
	readonly name: string;
	readonly value: string;
}
export interface ContainerAppProbeTcpSocket {
	readonly host?: string | undefined;
	readonly port: number;
}
export interface ContainerAppProperties {
	readonly configuration?: Configuration | undefined;
	readonly customDomainVerificationId?: string | undefined;
	readonly environmentId?: string | undefined;
	readonly eventStreamEndpoint?: string | undefined;
	readonly latestRevisionFqdn?: string | undefined;
	readonly latestRevisionName?: string | undefined;
	readonly managedEnvironmentId?: string | undefined;
	readonly outboundIpAddresses?: string[] | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly template?: Template | undefined;
	readonly workloadProfileType?: string | undefined;
}
export interface ContainerAppSecret {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ContainerResources {
	readonly cpu?: number | undefined;
	readonly ephemeralStorage?: string | undefined;
	readonly memory?: string | undefined;
}
export interface CookieExpiration {
	readonly convention?: "FixedTime" | undefined;
	readonly timeToExpiration?: string | undefined;
}
export interface CustomDomain {
	readonly bindingType?: ("Disabled" | "SniEnabled") | undefined;
	readonly certificateId: string;
	readonly name: string;
}
export interface CustomDomainConfiguration {
	readonly certificatePassword?: string | undefined;
	readonly certificateValue?: any | undefined;
	readonly customDomainVerificationId?: string | undefined;
	readonly dnsSuffix?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly subjectName?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface CustomHostnameAnalysisResult {
	readonly alternateCNameRecords?: string[] | undefined;
	readonly alternateTxtRecords?: string[] | undefined;
	readonly aRecords?: string[] | undefined;
	readonly cNameRecords?: string[] | undefined;
	readonly conflictingContainerAppResourceId?: string | undefined;
	readonly conflictWithEnvironmentCustomDomain?: boolean | undefined;
	readonly customDomainVerificationFailureInfo?:
		| CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo
		| undefined;
	readonly customDomainVerificationTest?: ("Failed" | "Passed") | undefined;
	readonly hasConflictOnManagedEnvironment?: boolean | undefined;
	readonly hostName?: string | undefined;
	readonly isHostnameAlreadyVerified?: boolean | undefined;
	readonly txtRecords?: string[] | undefined;
}
export interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfo {
	readonly code?: string | undefined;
	readonly details?: CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface CustomHostnameAnalysisResultCustomDomainVerificationFailureInfoDetailsItem {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface CustomOpenIdConnectProvider {
	readonly enabled?: boolean | undefined;
	readonly login?: OpenIdConnectLogin | undefined;
	readonly registration?: OpenIdConnectRegistration | undefined;
}
export interface CustomScaleRule {
	readonly auth?: ScaleRuleAuth[] | undefined;
	readonly metadata?: CustomScaleRuleMetadata | undefined;
	readonly type?: string | undefined;
}
export interface CustomScaleRuleMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Dapr {
	readonly appId?: string | undefined;
	readonly appPort?: number | undefined;
	readonly appProtocol?: ("grpc" | "http") | undefined;
	readonly enableApiLogging?: boolean | undefined;
	readonly enabled?: boolean | undefined;
	readonly httpMaxRequestSize?: number | undefined;
	readonly httpReadBufferSize?: number | undefined;
	readonly logLevel?: ("debug" | "error" | "info" | "warn") | undefined;
}
export interface DaprComponentProperties {
	readonly componentType?: string | undefined;
	readonly ignoreErrors?: boolean | undefined;
	readonly initTimeout?: string | undefined;
	readonly metadata?: DaprMetadata[] | undefined;
	readonly scopes?: string[] | undefined;
	readonly secrets?: Secret[] | undefined;
	readonly secretStoreComponent?: string | undefined;
	readonly version?: string | undefined;
}
export interface DaprMetadata {
	readonly name?: string | undefined;
	readonly secretRef?: string | undefined;
	readonly value?: string | undefined;
}
export interface DaprSecret {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface DaprSecretsCollection {
	readonly value: DaprSecret[];
}
export interface DefaultAuthorizationPolicy {
	readonly allowedApplications?: string[] | undefined;
	readonly allowedPrincipals?: AllowedPrincipals | undefined;
}
export interface DiagnosticDataProviderMetadata {
	readonly propertyBag?: DiagnosticDataProviderMetadataPropertyBagItem[] | undefined;
	readonly providerName?: string | undefined;
}
export interface DiagnosticDataProviderMetadataPropertyBagItem {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface DiagnosticDataTableResponseColumn {
	readonly columnName?: string | undefined;
	readonly columnType?: string | undefined;
	readonly dataType?: string | undefined;
}
export interface DiagnosticDataTableResponseObject {
	readonly columns?: DiagnosticDataTableResponseColumn[] | undefined;
	readonly rows?: any[] | undefined;
	readonly tableName?: string | undefined;
}
export interface DiagnosticRendering {
	readonly description?: string | undefined;
	readonly isVisible?: boolean | undefined;
	readonly title?: string | undefined;
	readonly type?: number | undefined;
}
export interface DiagnosticsDataApiResponse {
	readonly renderingProperties?: DiagnosticRendering | undefined;
	readonly table?: DiagnosticDataTableResponseObject | undefined;
}
export interface DiagnosticsDefinition {
	readonly analysisTypes?: string[] | undefined;
	readonly author?: string | undefined;
	readonly category?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly score?: number | undefined;
	readonly supportTopicList?: DiagnosticSupportTopic[] | undefined;
	readonly type?: string | undefined;
}
export interface DiagnosticsProperties {
	readonly dataProviderMetadata?: DiagnosticDataProviderMetadata | undefined;
	readonly dataset?: DiagnosticsDataApiResponse[] | undefined;
	readonly metadata?: DiagnosticsDefinition | undefined;
	readonly status?: DiagnosticsStatus | undefined;
}
export interface DiagnosticsStatus {
	readonly message?: string | undefined;
	readonly statusId?: number | undefined;
}
export interface DiagnosticSupportTopic {
	readonly id?: string | undefined;
	readonly pesId?: string | undefined;
}
export interface EnvironmentSkuProperties {
	readonly name: "Consumption" | "Premium";
}
export interface EnvironmentVar {
	readonly name?: string | undefined;
	readonly secretRef?: string | undefined;
	readonly value?: string | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "CustomLocation" | undefined;
}
export interface Facebook {
	readonly enabled?: boolean | undefined;
	readonly graphApiVersion?: string | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: AppRegistration | undefined;
}
export interface ForwardProxy {
	readonly convention?: ("Custom" | "NoProxy") | undefined;
	readonly customHostHeaderName?: string | undefined;
	readonly customProtoHeaderName?: string | undefined;
}
export interface GitHub {
	readonly enabled?: boolean | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: ClientRegistration | undefined;
}
export interface GithubActionConfiguration {
	readonly azureCredentials?: AzureCredentials | undefined;
	readonly contextPath?: string | undefined;
	readonly image?: string | undefined;
	readonly os?: string | undefined;
	readonly publishType?: string | undefined;
	readonly registryInfo?: RegistryInfo | undefined;
	readonly runtimeStack?: string | undefined;
	readonly runtimeVersion?: string | undefined;
}
export interface GlobalValidation {
	readonly excludedPaths?: string[] | undefined;
	readonly redirectToProvider?: string | undefined;
	readonly unauthenticatedClientAction?: ("AllowAnonymous" | "RedirectToLoginPage" | "Return401") | undefined;
}
export interface Google {
	readonly enabled?: boolean | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: ClientRegistration | undefined;
	readonly validation?: AllowedAudiencesValidation | undefined;
}
export interface HttpScaleRule {
	readonly auth?: ScaleRuleAuth[] | undefined;
	readonly metadata?: HttpScaleRuleMetadata | undefined;
}
export interface HttpScaleRuleMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HttpSettings {
	readonly forwardProxy?: ForwardProxy | undefined;
	readonly requireHttps?: boolean | undefined;
	readonly routes?: HttpSettingsRoutes | undefined;
}
export interface HttpSettingsRoutes {
	readonly apiPrefix?: string | undefined;
}
export interface IdentityProviders {
	readonly apple?: Apple | undefined;
	readonly azureActiveDirectory?: AzureActiveDirectory | undefined;
	readonly azureStaticWebApps?: AzureStaticWebApps | undefined;
	readonly customOpenIdConnectProviders?: IdentityProvidersCustomOpenIdConnectProviders | undefined;
	readonly facebook?: Facebook | undefined;
	readonly gitHub?: GitHub | undefined;
	readonly google?: Google | undefined;
	readonly twitter?: Twitter | undefined;
}
export interface IdentityProvidersCustomOpenIdConnectProviders {
	readonly "[ key: string ]"?: CustomOpenIdConnectProvider | undefined;
}
export interface Ingress {
	readonly allowInsecure?: boolean | undefined;
	readonly customDomains?: CustomDomain[] | undefined;
	readonly exposedPort?: number | undefined;
	readonly external?: boolean | undefined;
	readonly fqdn?: string | undefined;
	readonly ipSecurityRestrictions?: IpSecurityRestrictionRule[] | undefined;
	readonly targetPort?: number | undefined;
	readonly traffic?: TrafficWeight[] | undefined;
	readonly transport?: ("auto" | "http" | "http2" | "tcp") | undefined;
}
export interface InitContainer {
	readonly args?: string[] | undefined;
	readonly command?: string[] | undefined;
	readonly env?: EnvironmentVar[] | undefined;
	readonly image?: string | undefined;
	readonly name?: string | undefined;
	readonly resources?: ContainerResources | undefined;
	readonly volumeMounts?: VolumeMount[] | undefined;
}
export interface IpSecurityRestrictionRule {
	readonly action: "Allow" | "Deny";
	readonly description?: string | undefined;
	readonly ipAddressRange: string;
	readonly name: string;
}
export interface JwtClaimChecks {
	readonly allowedClientApplications?: string[] | undefined;
	readonly allowedGroups?: string[] | undefined;
}
export interface LogAnalyticsConfiguration {
	readonly customerId?: string | undefined;
	readonly sharedKey?: string | undefined;
}
export interface Login {
	readonly allowedExternalRedirectUrls?: string[] | undefined;
	readonly cookieExpiration?: CookieExpiration | undefined;
	readonly nonce?: Nonce | undefined;
	readonly preserveUrlFragmentsForLogins?: boolean | undefined;
	readonly routes?: LoginRoutes | undefined;
}
export interface LoginRoutes {
	readonly logoutEndpoint?: string | undefined;
}
export interface LoginScopes {
	readonly scopes?: string[] | undefined;
}
export interface ManagedEnvironmentOutboundSettings {
	readonly outBoundType?: ("LoadBalancer" | "UserDefinedRouting") | undefined;
	readonly virtualNetworkApplianceIp?: string | undefined;
}
export interface ManagedEnvironmentProperties {
	readonly appLogsConfiguration?: AppLogsConfiguration | undefined;
	readonly customDomainConfiguration?: CustomDomainConfiguration | undefined;
	readonly daprAIConnectionString?: string | undefined;
	readonly daprAIInstrumentationKey?: string | undefined;
	readonly defaultDomain?: string | undefined;
	readonly deploymentErrors?: string | undefined;
	readonly eventStreamEndpoint?: string | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Failed"
				| "InfrastructureSetupComplete"
				| "InfrastructureSetupInProgress"
				| "InitializationInProgress"
				| "ScheduledForDelete"
				| "Succeeded"
				| "UpgradeFailed"
				| "UpgradeRequested"
				| "Waiting"
		  )
		| undefined;
	readonly staticIp?: string | undefined;
	readonly vnetConfiguration?: VnetConfiguration | undefined;
	readonly workloadProfiles?: WorkloadProfile[] | undefined;
	readonly zoneRedundant?: boolean | undefined;
}
export interface ManagedEnvironmentStorageProperties {
	readonly azureFile?: AzureFileProperties | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface Nonce {
	readonly nonceExpirationInterval?: string | undefined;
	readonly validateNonce?: boolean | undefined;
}
export interface OpenIdConnectClientCredential {
	readonly clientSecretSettingName?: string | undefined;
	readonly method?: "ClientSecretPost" | undefined;
}
export interface OpenIdConnectConfig {
	readonly authorizationEndpoint?: string | undefined;
	readonly certificationUri?: string | undefined;
	readonly issuer?: string | undefined;
	readonly tokenEndpoint?: string | undefined;
	readonly wellKnownOpenIdConfiguration?: string | undefined;
}
export interface OpenIdConnectLogin {
	readonly nameClaimType?: string | undefined;
	readonly scopes?: string[] | undefined;
}
export interface OpenIdConnectRegistration {
	readonly clientCredential?: OpenIdConnectClientCredential | undefined;
	readonly clientId?: string | undefined;
	readonly openIdConnectConfiguration?: OpenIdConnectConfig | undefined;
}
export interface QueueScaleRule {
	readonly auth?: ScaleRuleAuth[] | undefined;
	readonly queueLength?: number | undefined;
	readonly queueName?: string | undefined;
}
export interface RegistryCredentials {
	readonly identity?: string | undefined;
	readonly passwordSecretRef?: string | undefined;
	readonly server?: string | undefined;
	readonly username?: string | undefined;
}
export interface RegistryInfo {
	readonly registryPassword?: string | undefined;
	readonly registryUrl?: string | undefined;
	readonly registryUserName?: string | undefined;
}
export interface ReplicaContainer {
	readonly containerId?: string | undefined;
	readonly execEndpoint?: string | undefined;
	readonly logStreamEndpoint?: string | undefined;
	readonly name?: string | undefined;
	readonly ready?: boolean | undefined;
	readonly restartCount?: number | undefined;
	readonly started?: boolean | undefined;
}
export interface ReplicaProperties {
	readonly containers?: ReplicaContainer[] | undefined;
	readonly createdTime?: string | undefined;
}
export interface RevisionProperties {
	readonly active?: boolean | undefined;
	readonly createdTime?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly healthState?: ("Healthy" | "None" | "Unhealthy") | undefined;
	readonly lastActiveTime?: string | undefined;
	readonly provisioningError?: string | undefined;
	readonly provisioningState?:
		| ("Deprovisioned" | "Deprovisioning" | "Failed" | "Provisioned" | "Provisioning")
		| undefined;
	readonly replicas?: number | undefined;
	readonly template?: Template | undefined;
	readonly trafficWeight?: number | undefined;
}
export interface Scale {
	readonly maxReplicas?: number | undefined;
	readonly minReplicas?: number | undefined;
	readonly rules?: ScaleRule[] | undefined;
}
export interface ScaleRule {
	readonly azureQueue?: QueueScaleRule | undefined;
	readonly custom?: CustomScaleRule | undefined;
	readonly http?: HttpScaleRule | undefined;
	readonly name?: string | undefined;
	readonly tcp?: TcpScaleRule | undefined;
}
export interface ScaleRuleAuth {
	readonly secretRef?: string | undefined;
	readonly triggerParameter?: string | undefined;
}
export interface Secret {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface SecretsCollection {
	readonly value: ContainerAppSecret[];
}
export interface SourceControlProperties {
	readonly branch?: string | undefined;
	readonly githubActionConfiguration?: GithubActionConfiguration | undefined;
	readonly operationState?: ("Canceled" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly repoUrl?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TcpScaleRule {
	readonly auth?: ScaleRuleAuth[] | undefined;
	readonly metadata?: TcpScaleRuleMetadata | undefined;
}
export interface TcpScaleRuleMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Template {
	readonly containers?: Container[] | undefined;
	readonly initContainers?: InitContainer[] | undefined;
	readonly revisionSuffix?: string | undefined;
	readonly scale?: Scale | undefined;
	readonly volumes?: Volume[] | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrafficWeight {
	readonly label?: string | undefined;
	readonly latestRevision?: boolean | undefined;
	readonly revisionName?: string | undefined;
	readonly weight?: number | undefined;
}
export interface Twitter {
	readonly enabled?: boolean | undefined;
	readonly registration?: TwitterRegistration | undefined;
}
export interface TwitterRegistration {
	readonly consumerKey?: string | undefined;
	readonly consumerSecretSettingName?: string | undefined;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VnetConfiguration {
	readonly dockerBridgeCidr?: string | undefined;
	readonly infrastructureSubnetId?: string | undefined;
	readonly internal?: boolean | undefined;
	readonly outboundSettings?: ManagedEnvironmentOutboundSettings | undefined;
	readonly platformReservedCidr?: string | undefined;
	readonly platformReservedDnsIP?: string | undefined;
	readonly runtimeSubnetId?: string | undefined;
}
export interface Volume {
	readonly name?: string | undefined;
	readonly storageName?: string | undefined;
	readonly storageType?: ("AzureFile" | "EmptyDir") | undefined;
}
export interface VolumeMount {
	readonly mountPath?: string | undefined;
	readonly volumeName?: string | undefined;
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
