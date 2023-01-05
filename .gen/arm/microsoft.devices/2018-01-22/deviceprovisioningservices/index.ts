import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class provisioningServices
	extends ArmResource<provisioningServicesComponentInputs>
	implements provisioningServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: provisioningServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/provisioningServices", "2018-01-22", options);
	}
	public readonly apiVersion: "2018-01-22";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/provisioningServices";
}
export interface provisioningServicesComponentOutputs {
	readonly apiVersion: "2018-01-22";
	readonly id: string;
	readonly type: "Microsoft.Devices/provisioningServices";
}
export interface provisioningServicesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: IotDpsPropertiesDescription;
	readonly sku: IotDpsSkuInfo;
	readonly tags?: ResourceTags;
}
export class provisioningServices_certificates
	extends ArmResource<provisioningServices_certificatesComponentInputs>
	implements provisioningServices_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: provisioningServices_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/provisioningServices/certificates", "2018-01-22", options);
	}
	public readonly apiVersion: "2018-01-22";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/provisioningServices/certificates";
}
export interface provisioningServices_certificatesComponentOutputs {
	readonly apiVersion: "2018-01-22";
	readonly id: string;
	readonly type: "Microsoft.Devices/provisioningServices/certificates";
}
export interface provisioningServices_certificatesComponentInputs {
	readonly certificate?: string;
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
}
export function listkeys(resource: provisioningServices): SharedAccessSignatureAuthorizationRuleListResult {
	if (resource.apiVersion !== "2018-01-22") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Devices/provisioningServices") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CertificateProperties {
	readonly created?: string;
	readonly expiry?: string;
	readonly isVerified?: boolean;
	readonly subject?: string;
	readonly thumbprint?: string;
	readonly updated?: string;
}
export interface IotDpsPropertiesDescription {
	readonly allocationPolicy?: "GeoLatency" | "Hashed" | "Static";
	readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
	readonly deviceProvisioningHostName?: string;
	readonly idScope?: string;
	readonly iotHubs?: IotHubDefinitionDescription[];
	readonly provisioningState?: string;
	readonly serviceOperationsHostName?: string;
	readonly state?:
		| "Activating"
		| "ActivationFailed"
		| "Active"
		| "Deleted"
		| "Deleting"
		| "DeletionFailed"
		| "FailingOver"
		| "FailoverFailed"
		| "Resuming"
		| "Suspended"
		| "Suspending"
		| "Transitioning";
}
export interface IotDpsSkuInfo {
	readonly capacity?: number;
	readonly name?: "S1";
	readonly tier?: string;
}
export interface IotHubDefinitionDescription {
	readonly allocationWeight?: number;
	readonly applyAllocationPolicy?: boolean;
	readonly connectionString: string;
	readonly location: string;
	readonly name?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
	readonly keyName: string;
	readonly primaryKey?: string;
	readonly rights:
		| "DeviceConnect"
		| "EnrollmentRead"
		| "EnrollmentWrite"
		| "RegistrationStatusRead"
		| "RegistrationStatusWrite"
		| "ServiceConfig";
	readonly secondaryKey?: string;
}
export interface SharedAccessSignatureAuthorizationRuleListResult {
	readonly nextLink?: string;
	readonly value?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
}
export default {
	provisioningServices: provisioningServices,
	"provisioningServices/certificates": provisioningServices_certificates,
};
