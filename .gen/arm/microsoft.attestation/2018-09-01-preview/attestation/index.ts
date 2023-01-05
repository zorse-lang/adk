import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class attestationProviders
	extends ArmResource<attestationProvidersComponentInputs>
	implements attestationProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: attestationProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.Attestation/attestationProviders", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Attestation/attestationProviders";
}
export interface attestationProvidersComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Attestation/attestationProviders";
}
export interface attestationProvidersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AttestationServiceCreationSpecificParamsOrStatusResult;
	readonly tags?: AttestationServiceCreationParamsTags;
}
export interface AttestationServiceCreationParamsTags {
	readonly [key: string]: string;
}
export interface AttestationServiceCreationSpecificParamsOrStatusResult {
	readonly attestationPolicy?: string;
	readonly attestUri?: string;
	readonly policySigningCertificates?: JsonWebKeySet;
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
export default {
	attestationProviders: attestationProviders,
};
