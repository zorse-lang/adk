import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class profiles extends ArmResource<profilesComponentInputs> implements profilesComponentOutputs {
	constructor(entity: ADKEntity, options: profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles", "2017-04-02", options);
	}
	public readonly apiVersion: "2017-04-02";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentOutputs {
	readonly apiVersion: "2017-04-02";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProfileProperties;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags;
}
export class profiles_endpoints
	extends ArmResource<profiles_endpointsComponentInputs>
	implements profiles_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints", "2017-04-02", options);
	}
	public readonly apiVersion: "2017-04-02";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentOutputs {
	readonly apiVersion: "2017-04-02";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EndpointProperties;
	readonly tags?: TrackedResourceTags;
}
export class profiles_endpoints_customDomains
	extends ArmResource<profiles_endpoints_customDomainsComponentInputs>
	implements profiles_endpoints_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/customDomains", "2017-04-02", options);
	}
	public readonly apiVersion: "2017-04-02";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentOutputs {
	readonly apiVersion: "2017-04-02";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainPropertiesParametersOrCustomDomainProperties;
}
export class profiles_endpoints_origins
	extends ArmResource<profiles_endpoints_originsComponentInputs>
	implements profiles_endpoints_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/origins", "2017-04-02", options);
	}
	public readonly apiVersion: "2017-04-02";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentOutputs {
	readonly apiVersion: "2017-04-02";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: OriginProperties;
	readonly tags?: TrackedResourceTags;
}
export interface CustomDomainPropertiesParametersOrCustomDomainProperties {
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
	readonly hostName: string;
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting";
	readonly validationData?: string;
}
export interface DeepCreatedOrigin {
	readonly name: string;
	readonly properties?: DeepCreatedOriginProperties;
}
export interface DeepCreatedOriginProperties {
	readonly hostName: string;
	readonly httpPort?: number;
	readonly httpsPort?: number;
}
export interface EndpointProperties {
	readonly contentTypesToCompress?: string[];
	readonly geoFilters?: GeoFilter[];
	readonly hostName?: string;
	readonly isCompressionEnabled?: boolean;
	readonly isHttpAllowed?: boolean;
	readonly isHttpsAllowed?: boolean;
	readonly optimizationType?:
		| "DynamicSiteAcceleration"
		| "GeneralMediaStreaming"
		| "GeneralWebDelivery"
		| "LargeFileDownload"
		| "VideoOnDemandMediaStreaming";
	readonly originHostHeader?: string;
	readonly originPath?: string;
	readonly origins: DeepCreatedOrigin[];
	readonly probePath?: string;
	readonly provisioningState?: string;
	readonly queryStringCachingBehavior?: "BypassCaching" | "IgnoreQueryString" | "NotSet";
	readonly resourceState?: "Creating" | "Deleting" | "Running" | "Starting" | "Stopped" | "Stopping";
}
export interface GeoFilter {
	readonly action: "Allow";
	readonly countryCodes: string[];
	readonly relativePath: string;
}
export interface OriginProperties {
	readonly hostName: string;
	readonly httpPort?: number;
	readonly httpsPort?: number;
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting";
}
export interface ProfileProperties {
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting" | "Disabled";
}
export interface Sku {
	readonly name?: "Custom_Verizon" | "Premium_Verizon" | "Standard_Akamai" | "Standard_ChinaCdn" | "Standard_Verizon";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	profiles: profiles,
	"profiles/endpoints": profiles_endpoints,
	"profiles/endpoints/customDomains": profiles_endpoints_customDomains,
	"profiles/endpoints/origins": profiles_endpoints_origins,
};
