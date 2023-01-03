import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class profiles extends ArmResource<profilesComponentInputs> implements profilesComponentOutputs {
	constructor(entity: ADKEntity, options: profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles", "2015-06-01", options);
	}
	public readonly apiVersion: "2015-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentOutputs {
	readonly apiVersion: "2015-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProfilePropertiesCreateParametersOrProfileProperties | undefined;
	readonly tags?: ProfileCreateParametersTags | undefined;
}
export class profiles_endpoints
	extends ArmResource<profiles_endpointsComponentInputs>
	implements profiles_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints", "2015-06-01", options);
	}
	public readonly apiVersion: "2015-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentOutputs {
	readonly apiVersion: "2015-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EndpointPropertiesCreateParametersOrEndpointProperties | undefined;
	readonly tags?: EndpointCreateParametersTags | undefined;
}
export class profiles_endpoints_customDomains
	extends ArmResource<profiles_endpoints_customDomainsComponentInputs>
	implements profiles_endpoints_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/customDomains", "2015-06-01", options);
	}
	public readonly apiVersion: "2015-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentOutputs {
	readonly apiVersion: "2015-06-01";
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
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/origins", "2015-06-01", options);
	}
	public readonly apiVersion: "2015-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentOutputs {
	readonly apiVersion: "2015-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentInputs {
	readonly name: string;
	readonly properties?: OriginPropertiesParametersOrOriginProperties | undefined;
}
export interface CustomDomainPropertiesParametersOrCustomDomainProperties {
	readonly hostName: string;
	readonly provisioningState?: ("Creating" | "Failed") | undefined;
	readonly resourceState?: ("Active" | "Creating") | undefined;
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
export interface EndpointCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EndpointPropertiesCreateParametersOrEndpointProperties {
	readonly contentTypesToCompress?: string[] | undefined;
	readonly hostName?: string | undefined;
	readonly isCompressionEnabled?: boolean | undefined;
	readonly isHttpAllowed?: boolean | undefined;
	readonly isHttpsAllowed?: boolean | undefined;
	readonly originHostHeader?: string | undefined;
	readonly originPath?: string | undefined;
	readonly origins: DeepCreatedOrigin[];
	readonly provisioningState?: ("Creating" | "Failed") | undefined;
	readonly queryStringCachingBehavior?: ("BypassCaching" | "IgnoreQueryString" | "NotSet") | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Running" | "Starting" | "Stopped") | undefined;
}
export interface OriginPropertiesParametersOrOriginProperties {
	readonly hostName: string;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly provisioningState?: ("Creating" | "Failed") | undefined;
	readonly resourceState?: ("Active" | "Creating") | undefined;
}
export interface ProfileCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ProfilePropertiesCreateParametersOrProfileProperties {
	readonly provisioningState?: ("Creating" | "Failed") | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting") | undefined;
	readonly sku: Sku;
}
export interface Sku {
	readonly name?: "Premium" | undefined;
}
export default {
	profiles: profiles,
	"profiles/endpoints": profiles_endpoints,
	"profiles/endpoints/customDomains": profiles_endpoints_customDomains,
	"profiles/endpoints/origins": profiles_endpoints_origins,
};
