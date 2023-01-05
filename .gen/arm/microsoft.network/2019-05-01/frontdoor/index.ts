import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class frontDoors extends ArmResource<frontDoorsComponentInputs> implements frontDoorsComponentOutputs {
	constructor(entity: ADKEntity, options: frontDoorsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/frontDoors", "2019-05-01", options);
	}
	public readonly apiVersion: "2019-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/frontDoors";
}
export interface frontDoorsComponentOutputs {
	readonly apiVersion: "2019-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/frontDoors";
}
export interface frontDoorsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: FrontDoorProperties;
	readonly tags?: ResourceTags;
}
export class frontDoors_frontendEndpoints
	extends ArmResource<frontDoors_frontendEndpointsComponentInputs>
	implements frontDoors_frontendEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: frontDoors_frontendEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/frontDoors/frontendEndpoints", "2019-05-01", options);
	}
	public readonly apiVersion: "2019-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/frontDoors/frontendEndpoints";
}
export interface frontDoors_frontendEndpointsComponentOutputs {
	readonly apiVersion: "2019-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/frontDoors/frontendEndpoints";
}
export interface frontDoors_frontendEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: FrontendEndpointProperties;
}
export interface Backend {
	readonly address?: string;
	readonly backendHostHeader?: string;
	readonly enabledState?: "Disabled" | "Enabled";
	readonly httpPort?: number;
	readonly httpsPort?: number;
	readonly priority?: number;
	readonly weight?: number;
}
export interface BackendPool {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: BackendPoolProperties;
	readonly type?: string;
}
export interface BackendPoolProperties {
	readonly backends?: Backend[];
	readonly healthProbeSettings?: SubResource;
	readonly loadBalancingSettings?: SubResource;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
}
export interface BackendPoolsSettings {
	readonly enforceCertificateNameCheck?: "Disabled" | "Enabled";
	readonly sendRecvTimeoutSeconds?: number;
}
export interface CacheConfiguration {
	readonly dynamicCompression?: "Disabled" | "Enabled";
	readonly queryParameterStripDirective?: "StripAll" | "StripNone";
}
export interface CustomHttpsConfiguration {
	readonly certificateSource: "AzureKeyVault" | "FrontDoor";
	readonly frontDoorCertificateSourceParameters?: FrontDoorCertificateSourceParameters;
	readonly keyVaultCertificateSourceParameters?: KeyVaultCertificateSourceParameters;
	readonly minimumTlsVersion: "1.0" | "1.2";
	readonly protocolType: "ServerNameIndication";
}
export interface FrontDoorCertificateSourceParameters {
	readonly certificateType?: "Dedicated";
}
export interface FrontDoorProperties {
	readonly backendPools?: BackendPool[];
	readonly backendPoolsSettings?: BackendPoolsSettings;
	readonly cname?: string;
	readonly enabledState?: "Disabled" | "Enabled";
	readonly friendlyName?: string;
	readonly frontendEndpoints?: FrontendEndpoint[];
	readonly healthProbeSettings?: HealthProbeSettingsModel[];
	readonly loadBalancingSettings?: LoadBalancingSettingsModel[];
	readonly provisioningState?: string;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
	readonly routingRules?: RoutingRule[];
}
export interface FrontendEndpoint {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: FrontendEndpointProperties;
	readonly type?: string;
}
export interface FrontendEndpointProperties {
	readonly customHttpsConfiguration?: CustomHttpsConfiguration;
	readonly customHttpsProvisioningState?: "Disabled" | "Disabling" | "Enabled" | "Enabling" | "Failed";
	readonly customHttpsProvisioningSubstate?:
		| "CertificateDeleted"
		| "CertificateDeployed"
		| "DeletingCertificate"
		| "DeployingCertificate"
		| "DomainControlValidationRequestApproved"
		| "DomainControlValidationRequestRejected"
		| "DomainControlValidationRequestTimedOut"
		| "IssuingCertificate"
		| "PendingDomainControlValidationREquestApproval"
		| "SubmittingDomainControlValidationRequest";
	readonly hostName?: string;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
	readonly sessionAffinityEnabledState?: "Disabled" | "Enabled";
	readonly sessionAffinityTtlSeconds?: number;
	readonly webApplicationFirewallPolicyLink?: FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink;
}
export interface FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink {
	readonly id?: string;
}
export interface HealthProbeSettingsModel {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: HealthProbeSettingsProperties;
	readonly type?: string;
}
export interface HealthProbeSettingsProperties {
	readonly enabledState?: "Disabled" | "Enabled";
	readonly healthProbeMethod?: "GET" | "HEAD";
	readonly intervalInSeconds?: number;
	readonly path?: string;
	readonly protocol?: "Http" | "Https";
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
}
export interface KeyVaultCertificateSourceParameters {
	readonly secretName?: string;
	readonly secretVersion?: string;
	readonly vault?: KeyVaultCertificateSourceParametersVault;
}
export interface KeyVaultCertificateSourceParametersVault {
	readonly id?: string;
}
export interface LoadBalancingSettingsModel {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: LoadBalancingSettingsProperties;
	readonly type?: string;
}
export interface LoadBalancingSettingsProperties {
	readonly additionalLatencyMilliseconds?: number;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
	readonly sampleSize?: number;
	readonly successfulSamplesRequired?: number;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RouteConfiguration {}
export interface RoutingRule {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RoutingRuleProperties;
	readonly type?: string;
}
export interface RoutingRuleProperties {
	readonly acceptedProtocols?: "Http" | "Https"[];
	readonly enabledState?: "Disabled" | "Enabled";
	readonly frontendEndpoints?: SubResource[];
	readonly patternsToMatch?: string[];
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
	readonly routeConfiguration?: RouteConfiguration;
}
export interface SubResource {
	readonly id?: string;
}
export default {
	frontDoors: frontDoors,
	"frontDoors/frontendEndpoints": frontDoors_frontendEndpoints,
};
