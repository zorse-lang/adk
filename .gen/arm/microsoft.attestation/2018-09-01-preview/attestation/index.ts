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
	readonly tags?: AttestationServiceCreationParamsTags | undefined;
}
export interface AttestationServiceCreationParamsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AttestationServiceCreationSpecificParamsOrStatusResult {
	readonly attestationPolicy?: string | undefined;
	readonly attestUri?: string | undefined;
	readonly policySigningCertificates?: JsonWebKeySet | undefined;
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
export default {
	attestationProviders: attestationProviders,
};
