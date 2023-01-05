import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class attestationProviders
	extends ArmResource<attestationProvidersComponentInputs>
	implements attestationProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: attestationProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.Attestation/attestationProviders", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Attestation/attestationProviders";
}
export interface attestationProvidersComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Attestation/attestationProviders";
}
export interface attestationProvidersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AttestationServiceCreationSpecificParamsOrStatusResult;
	readonly systemData?: SystemData;
	readonly tags?: AttestationServiceCreationParamsTags;
}
export class attestationProviders_privateEndpointConnections
	extends ArmResource<attestationProviders_privateEndpointConnectionsComponentInputs>
	implements attestationProviders_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: attestationProviders_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Attestation/attestationProviders/privateEndpointConnections",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Attestation/attestationProviders/privateEndpointConnections";
}
export interface attestationProviders_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Attestation/attestationProviders/privateEndpointConnections";
}
export interface attestationProviders_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export interface AttestationServiceCreationParamsTags {
	readonly [key: string]: string;
}
export interface AttestationServiceCreationSpecificParamsOrStatusResult {
	readonly attestUri?: string;
	readonly policySigningCertificates?: JsonWebKeySet;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly status?: "Error" | "NotReady" | "Ready";
	readonly trustModel?: string;
}
export interface JsonWebKey {
	readonly alg?: string;
	readonly crv?: string;
	readonly d?: string;
	readonly dp?: string;
	readonly dq?: string;
	readonly e?: string;
	readonly k?: string;
	readonly kid?: string;
	readonly kty: string;
	readonly n?: string;
	readonly p?: string;
	readonly q?: string;
	readonly qi?: string;
	readonly use?: string;
	readonly x?: string;
	readonly x5c?: string[];
	readonly y?: string;
}
export interface JsonWebKeySet {
	readonly keys?: JsonWebKey[];
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	attestationProviders: attestationProviders,
	"attestationProviders/privateEndpointConnections": attestationProviders_privateEndpointConnections,
};
