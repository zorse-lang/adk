import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class PublicAdvertisedPrefixes
	extends GdmResource<PublicAdvertisedPrefixesComponentInputs>
	implements PublicAdvertisedPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: PublicAdvertisedPrefixesComponentInputs) {
		super(entity, options.name, "compute.beta.PublicAdvertisedPrefixes", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly publicDelegatedPrefixs?: PublicAdvertisedPrefixPublicDelegatedPrefix[] | undefined;
	public readonly selfLink?: string | undefined;
	public readonly sharedSecret?: string | undefined;
}
export interface PublicAdvertisedPrefixesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly publicDelegatedPrefixs?: PublicAdvertisedPrefixPublicDelegatedPrefix[] | undefined;
	readonly selfLink?: string | undefined;
	readonly sharedSecret?: string | undefined;
}
export interface PublicAdvertisedPrefixesComponentInputs {
	readonly description?: string | undefined;
	readonly dnsVerificationIp?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly ipCidrRange?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly status?: string | undefined;
	readonly type: string;
}
export interface PublicAdvertisedPrefix {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly dnsVerificationIp?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly ipCidrRange?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly publicDelegatedPrefixs?: PublicAdvertisedPrefixPublicDelegatedPrefix[] | undefined;
	readonly selfLink?: string | undefined;
	readonly sharedSecret?: string | undefined;
	readonly status?: string | undefined;
}
export interface PublicAdvertisedPrefixPublicDelegatedPrefix {
	readonly ipRange?: string | undefined;
	readonly name?: string | undefined;
	readonly project?: string | undefined;
	readonly region?: string | undefined;
	readonly status?: string | undefined;
}
export default {
	PublicAdvertisedPrefixes: PublicAdvertisedPrefixes,
};
