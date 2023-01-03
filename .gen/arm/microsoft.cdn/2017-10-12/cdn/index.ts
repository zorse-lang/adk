import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class profiles extends ArmResource<profilesComponentInputs> implements profilesComponentOutputs {
	constructor(entity: ADKEntity, options: profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles", "2017-10-12", options);
	}
	public readonly apiVersion: "2017-10-12";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentOutputs {
	readonly apiVersion: "2017-10-12";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProfileProperties | undefined;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles_endpoints
	extends ArmResource<profiles_endpointsComponentInputs>
	implements profiles_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints", "2017-10-12", options);
	}
	public readonly apiVersion: "2017-10-12";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentOutputs {
	readonly apiVersion: "2017-10-12";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EndpointProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles_endpoints_customDomains
	extends ArmResource<profiles_endpoints_customDomainsComponentInputs>
	implements profiles_endpoints_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/customDomains", "2017-10-12", options);
	}
	public readonly apiVersion: "2017-10-12";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentOutputs {
	readonly apiVersion: "2017-10-12";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainPropertiesParametersOrCustomDomainProperties | undefined;
}
export class profiles_endpoints_origins
	extends ArmResource<profiles_endpoints_originsComponentInputs>
	implements profiles_endpoints_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/origins", "2017-10-12", options);
	}
	public readonly apiVersion: "2017-10-12";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentOutputs {
	readonly apiVersion: "2017-10-12";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: OriginProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface CacheExpirationActionParameters {
	readonly "@odata.type": "Microsoft.Azure.Cdn.Models.DeliveryRuleCacheExpirationActionParameters";
	readonly cacheBehavior: "BypassCache" | "Override" | "SetIfMissing";
	readonly cacheDuration?: string | undefined;
	readonly cacheType: "All";
}
export interface CustomDomainPropertiesParametersOrCustomDomainProperties {
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
	readonly hostName: string;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting") | undefined;
	readonly validationData?: string | undefined;
}
export interface DeepCreatedOrigin {
	readonly name: string;
	readonly properties?: DeepCreatedOriginProperties | undefined;
}
export interface DeepCreatedOriginProperties {
	readonly hostName: string;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
}
export interface DeliveryRule {
	readonly actions: DeliveryRuleAction[];
	readonly conditions?: DeliveryRuleCondition[] | undefined;
	readonly order: number;
}
export interface DeliveryRuleAction {}
export interface DeliveryRuleCondition {}
export interface EndpointProperties {
	readonly contentTypesToCompress?: string[] | undefined;
	readonly deliveryPolicy?: EndpointPropertiesUpdateParametersDeliveryPolicy | undefined;
	readonly geoFilters?: GeoFilter[] | undefined;
	readonly hostName?: string | undefined;
	readonly isCompressionEnabled?: boolean | undefined;
	readonly isHttpAllowed?: boolean | undefined;
	readonly isHttpsAllowed?: boolean | undefined;
	readonly optimizationType?:
		| (
				| "DynamicSiteAcceleration"
				| "GeneralMediaStreaming"
				| "GeneralWebDelivery"
				| "LargeFileDownload"
				| "VideoOnDemandMediaStreaming"
		  )
		| undefined;
	readonly originHostHeader?: string | undefined;
	readonly originPath?: string | undefined;
	readonly origins: DeepCreatedOrigin[];
	readonly probePath?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly queryStringCachingBehavior?: ("BypassCaching" | "IgnoreQueryString" | "NotSet") | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Running" | "Starting" | "Stopped" | "Stopping") | undefined;
}
export interface EndpointPropertiesUpdateParametersDeliveryPolicy {
	readonly description?: string | undefined;
	readonly rules: DeliveryRule[];
}
export interface GeoFilter {
	readonly action: "Allow";
	readonly countryCodes: string[];
	readonly relativePath: string;
}
export interface OriginProperties {
	readonly hostName: string;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting") | undefined;
}
export interface ProfileProperties {
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting" | "Disabled") | undefined;
}
export interface Sku {
	readonly name?:
		| (
				| "Custom_Verizon"
				| "Premium_ChinaCdn"
				| "Premium_Verizon"
				| "Standard_Akamai"
				| "Standard_ChinaCdn"
				| "Standard_Microsoft"
				| "Standard_Verizon"
		  )
		| undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UrlFileExtensionConditionParameters {
	readonly "@odata.type": "Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFileExtensionConditionParameters";
	readonly extensions: string[];
}
export interface UrlPathConditionParameters {
	readonly "@odata.type": "Microsoft.Azure.Cdn.Models.DeliveryRuleUrlPathConditionParameters";
	readonly matchType: "Literal" | "Wildcard";
	readonly path: string;
}
export default {
	profiles: profiles,
	"profiles/endpoints": profiles_endpoints,
	"profiles/endpoints/customDomains": profiles_endpoints_customDomains,
	"profiles/endpoints/origins": profiles_endpoints_origins,
};
