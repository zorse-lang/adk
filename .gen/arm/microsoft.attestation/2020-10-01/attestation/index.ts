import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class attestationProviders
	extends ArmResource<attestationProvidersComponentInputs>
	implements attestationProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: attestationProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.Attestation/attestationProviders", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Attestation/attestationProviders";
}
export interface attestationProvidersComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Attestation/attestationProviders";
}
export interface attestationProvidersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AttestationServiceCreationSpecificParamsOrStatusResult;
	readonly systemData?: SystemData | undefined;
	readonly tags?: AttestationServiceCreationParamsTags | undefined;
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
			"2020-10-01",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Attestation/attestationProviders/privateEndpointConnections";
}
export interface attestationProviders_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Attestation/attestationProviders/privateEndpointConnections";
}
export interface attestationProviders_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export interface AttestationServiceCreationParamsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AttestationServiceCreationSpecificParamsOrStatusResult {
	readonly attestUri?: string | undefined;
	readonly policySigningCertificates?: JsonWebKeySet | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly status?: ("Error" | "NotReady" | "Ready") | undefined;
	readonly trustModel?: string | undefined;
}
export interface JsonWebKey {
	readonly alg?: string | undefined;
	readonly crv?: string | undefined;
	readonly d?: string | undefined;
	readonly dp?: string | undefined;
	readonly dq?: string | undefined;
	readonly e?: string | undefined;
	readonly k?: string | undefined;
	readonly kid?: string | undefined;
	readonly kty: string;
	readonly n?: string | undefined;
	readonly p?: string | undefined;
	readonly q?: string | undefined;
	readonly qi?: string | undefined;
	readonly use?: string | undefined;
	readonly x?: string | undefined;
	readonly x5c?: string[] | undefined;
	readonly y?: string | undefined;
}
export interface JsonWebKeySet {
	readonly keys?: JsonWebKey[] | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	attestationProviders: attestationProviders,
	"attestationProviders/privateEndpointConnections": attestationProviders_privateEndpointConnections,
};
