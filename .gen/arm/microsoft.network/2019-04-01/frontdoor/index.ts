import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class frontDoors extends ArmResource<frontDoorsComponentInputs> implements frontDoorsComponentOutputs {
	constructor(entity: ADKEntity, options: frontDoorsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/frontDoors", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/frontDoors";
}
export interface frontDoorsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/frontDoors";
}
export interface frontDoorsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FrontDoorProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class frontDoors_frontendEndpoints
	extends ArmResource<frontDoors_frontendEndpointsComponentInputs>
	implements frontDoors_frontendEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: frontDoors_frontendEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/frontDoors/frontendEndpoints", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/frontDoors/frontendEndpoints";
}
export interface frontDoors_frontendEndpointsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/frontDoors/frontendEndpoints";
}
export interface frontDoors_frontendEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: FrontendEndpointProperties | undefined;
}
export interface Backend {
	readonly address?: string | undefined;
	readonly backendHostHeader?: string | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly priority?: number | undefined;
	readonly weight?: number | undefined;
}
export interface BackendPool {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: BackendPoolProperties | undefined;
	readonly type?: string | undefined;
}
export interface BackendPoolProperties {
	readonly backends?: Backend[] | undefined;
	readonly healthProbeSettings?: SubResource | undefined;
	readonly loadBalancingSettings?: SubResource | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
}
export interface BackendPoolsSettings {
	readonly enforceCertificateNameCheck?: ("Disabled" | "Enabled") | undefined;
}
export interface CacheConfiguration {
	readonly dynamicCompression?: ("Disabled" | "Enabled") | undefined;
	readonly queryParameterStripDirective?: ("StripAll" | "StripNone") | undefined;
}
export interface CustomHttpsConfiguration {
	readonly certificateSource?: ("AzureKeyVault" | "FrontDoor") | undefined;
	readonly frontDoorCertificateSourceParameters?: FrontDoorCertificateSourceParameters | undefined;
	readonly keyVaultCertificateSourceParameters?: KeyVaultCertificateSourceParameters | undefined;
	readonly protocolType?: "ServerNameIndication" | undefined;
}
export interface FrontDoorCertificateSourceParameters {
	readonly certificateType?: "Dedicated" | undefined;
}
export interface FrontDoorProperties {
	readonly backendPools?: BackendPool[] | undefined;
	readonly backendPoolsSettings?: BackendPoolsSettings | undefined;
	readonly cname?: string | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly friendlyName?: string | undefined;
	readonly frontendEndpoints?: FrontendEndpoint[] | undefined;
	readonly healthProbeSettings?: HealthProbeSettingsModel[] | undefined;
	readonly loadBalancingSettings?: LoadBalancingSettingsModel[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
	readonly routingRules?: RoutingRule[] | undefined;
}
export interface FrontendEndpoint {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: FrontendEndpointProperties | undefined;
	readonly type?: string | undefined;
}
export interface FrontendEndpointProperties {
	readonly customHttpsConfiguration?: CustomHttpsConfiguration | undefined;
	readonly customHttpsProvisioningState?: ("Disabled" | "Disabling" | "Enabled" | "Enabling" | "Failed") | undefined;
	readonly customHttpsProvisioningSubstate?:
		| (
				| "CertificateDeleted"
				| "CertificateDeployed"
				| "DeletingCertificate"
				| "DeployingCertificate"
				| "DomainControlValidationRequestApproved"
				| "DomainControlValidationRequestRejected"
				| "DomainControlValidationRequestTimedOut"
				| "IssuingCertificate"
				| "PendingDomainControlValidationREquestApproval"
				| "SubmittingDomainControlValidationRequest"
		  )
		| undefined;
	readonly hostName?: string | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
	readonly sessionAffinityEnabledState?: ("Disabled" | "Enabled") | undefined;
	readonly sessionAffinityTtlSeconds?: number | undefined;
	readonly webApplicationFirewallPolicyLink?:
		| FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink
		| undefined;
}
export interface FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink {
	readonly id?: string | undefined;
}
export interface HealthProbeSettingsModel {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: HealthProbeSettingsProperties | undefined;
	readonly type?: string | undefined;
}
export interface HealthProbeSettingsProperties {
	readonly intervalInSeconds?: number | undefined;
	readonly path?: string | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
}
export interface KeyVaultCertificateSourceParameters {
	readonly secretName?: string | undefined;
	readonly secretVersion?: string | undefined;
	readonly vault?: KeyVaultCertificateSourceParametersVault | undefined;
}
export interface KeyVaultCertificateSourceParametersVault {
	readonly id?: string | undefined;
}
export interface LoadBalancingSettingsModel {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: LoadBalancingSettingsProperties | undefined;
	readonly type?: string | undefined;
}
export interface LoadBalancingSettingsProperties {
	readonly additionalLatencyMilliseconds?: number | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
	readonly sampleSize?: number | undefined;
	readonly successfulSamplesRequired?: number | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RouteConfiguration {}
export interface RoutingRule {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RoutingRuleProperties | undefined;
	readonly type?: string | undefined;
}
export interface RoutingRuleProperties {
	readonly acceptedProtocols?: ("Http" | "Https"[]) | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly frontendEndpoints?: SubResource[] | undefined;
	readonly patternsToMatch?: string[] | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
	readonly routeConfiguration?: RouteConfiguration | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export default {
	frontDoors: frontDoors,
	"frontDoors/frontendEndpoints": frontDoors_frontendEndpoints,
};
