import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class provisioningServices
	extends ArmResource<provisioningServicesComponentInputs>
	implements provisioningServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: provisioningServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/provisioningServices", "2020-09-01-preview", options);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/provisioningServices";
}
export interface provisioningServicesComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Devices/provisioningServices";
}
export interface provisioningServicesComponentInputs {
	readonly etag?: string;
	readonly identity?: ArmIdentity;
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
		super(entity, options.name, "Microsoft.Devices/provisioningServices/certificates", "2020-09-01-preview", options);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/provisioningServices/certificates";
}
export interface provisioningServices_certificatesComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Devices/provisioningServices/certificates";
}
export interface provisioningServices_certificatesComponentInputs {
	readonly certificate?: string;
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
}
export class provisioningServices_privateEndpointConnections
	extends ArmResource<provisioningServices_privateEndpointConnectionsComponentInputs>
	implements provisioningServices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: provisioningServices_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Devices/provisioningServices/privateEndpointConnections",
			"2020-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/provisioningServices/privateEndpointConnections";
}
export interface provisioningServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Devices/provisioningServices/privateEndpointConnections";
}
export interface provisioningServices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties: PrivateEndpointConnectionProperties;
}
export function listkeys(resource: provisioningServices): SharedAccessSignatureAuthorizationRuleListResult {
	if (resource.apiVersion !== "2020-09-01-preview") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Devices/provisioningServices") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ArmIdentity {
	readonly identityType?: string;
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly userAssignedIdentities?: ArmIdentityUserAssignedIdentities;
}
export interface ArmIdentityUserAssignedIdentities {
	readonly [key: string]: ArmUserIdentity;
}
export interface ArmUserIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface CertificateProperties {
	readonly created?: string;
	readonly expiry?: string;
	readonly isVerified?: boolean;
	readonly subject?: string;
	readonly thumbprint?: string;
	readonly updated?: string;
}
export interface EncryptionKeyIdentity {
	readonly userAssignedIdentity?: string;
}
export interface EncryptionPropertiesDescription {
	readonly identity?: EncryptionKeyIdentity;
	readonly keySource?: string;
	readonly keyVaultProperties?: KeyVaultKeyProperties[];
}
export interface IotDpsPropertiesDescription {
	readonly allocationPolicy?: "GeoLatency" | "Hashed" | "Static";
	readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
	readonly deviceProvisioningHostName?: string;
	readonly encryption?: EncryptionPropertiesDescription;
	readonly idScope?: string;
	readonly iotHubs?: IotHubDefinitionDescription[];
	readonly ipFilterRules?: IpFilterRule[];
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
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
export interface IpFilterRule {
	readonly action: "Accept";
	readonly filterName: string;
	readonly ipMask: string;
	readonly target?: "all" | "deviceApi";
}
export interface KeyVaultKeyProperties {
	readonly keyIdentifier?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
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
	"provisioningServices/privateEndpointConnections": provisioningServices_privateEndpointConnections,
};
