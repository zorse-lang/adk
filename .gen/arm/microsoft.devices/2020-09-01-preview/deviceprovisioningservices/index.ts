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
	readonly etag?: string | undefined;
	readonly identity?: ArmIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: IotDpsPropertiesDescription;
	readonly sku: IotDpsSkuInfo;
	readonly tags?: ResourceTags | undefined;
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
	readonly certificate?: string | undefined;
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: CertificateProperties | undefined;
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
	readonly identityType?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly userAssignedIdentities?: ArmIdentityUserAssignedIdentities | undefined;
}
export interface ArmIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: ArmUserIdentity | undefined;
}
export interface ArmUserIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface CertificateProperties {
	readonly created?: string | undefined;
	readonly expiry?: string | undefined;
	readonly isVerified?: boolean | undefined;
	readonly subject?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly updated?: string | undefined;
}
export interface EncryptionKeyIdentity {
	readonly userAssignedIdentity?: string | undefined;
}
export interface EncryptionPropertiesDescription {
	readonly identity?: EncryptionKeyIdentity | undefined;
	readonly keySource?: string | undefined;
	readonly keyVaultProperties?: KeyVaultKeyProperties[] | undefined;
}
export interface IotDpsPropertiesDescription {
	readonly allocationPolicy?: ("GeoLatency" | "Hashed" | "Static") | undefined;
	readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[] | undefined;
	readonly deviceProvisioningHostName?: string | undefined;
	readonly encryption?: EncryptionPropertiesDescription | undefined;
	readonly idScope?: string | undefined;
	readonly iotHubs?: IotHubDefinitionDescription[] | undefined;
	readonly ipFilterRules?: IpFilterRule[] | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly serviceOperationsHostName?: string | undefined;
	readonly state?:
		| (
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
				| "Transitioning"
		  )
		| undefined;
}
export interface IotDpsSkuInfo {
	readonly capacity?: number | undefined;
	readonly name?: "S1" | undefined;
	readonly tier?: string | undefined;
}
export interface IotHubDefinitionDescription {
	readonly allocationWeight?: number | undefined;
	readonly applyAllocationPolicy?: boolean | undefined;
	readonly connectionString: string;
	readonly location: string;
	readonly name?: string | undefined;
}
export interface IpFilterRule {
	readonly action: "Accept";
	readonly filterName: string;
	readonly ipMask: string;
	readonly target?: ("all" | "deviceApi") | undefined;
}
export interface KeyVaultKeyProperties {
	readonly keyIdentifier?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
	readonly keyName: string;
	readonly primaryKey?: string | undefined;
	readonly rights:
		| "DeviceConnect"
		| "EnrollmentRead"
		| "EnrollmentWrite"
		| "RegistrationStatusRead"
		| "RegistrationStatusWrite"
		| "ServiceConfig";
	readonly secondaryKey?: string | undefined;
}
export interface SharedAccessSignatureAuthorizationRuleListResult {
	readonly nextLink?: string | undefined;
	readonly value?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[] | undefined;
}
export default {
	provisioningServices: provisioningServices,
	"provisioningServices/certificates": provisioningServices_certificates,
	"provisioningServices/privateEndpointConnections": provisioningServices_privateEndpointConnections,
};
