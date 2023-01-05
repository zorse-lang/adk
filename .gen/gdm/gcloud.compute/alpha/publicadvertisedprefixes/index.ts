import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class PublicAdvertisedPrefixes
	extends GdmResource<PublicAdvertisedPrefixesComponentInputs>
	implements PublicAdvertisedPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: PublicAdvertisedPrefixesComponentInputs) {
		super(entity, options.name, "compute.alpha.PublicAdvertisedPrefixes", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly pdpScope?: string;
	public readonly publicDelegatedPrefixs?: PublicAdvertisedPrefixPublicDelegatedPrefix[];
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly sharedSecret?: string;
}
export interface PublicAdvertisedPrefixesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly pdpScope?: string;
	readonly publicDelegatedPrefixs?: PublicAdvertisedPrefixPublicDelegatedPrefix[];
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sharedSecret?: string;
}
export interface PublicAdvertisedPrefixesComponentInputs {
	readonly description?: string;
	readonly dnsVerificationIp?: string;
	readonly fingerprint?: string;
	readonly ipCidrRange?: string;
	readonly name: string;
	readonly requestId?: string;
	readonly status?: string;
}
export interface PublicAdvertisedPrefix {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly dnsVerificationIp?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly ipCidrRange?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly pdpScope?: string;
	readonly publicDelegatedPrefixs?: PublicAdvertisedPrefixPublicDelegatedPrefix[];
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sharedSecret?: string;
	readonly status?: string;
}
export interface PublicAdvertisedPrefixPublicDelegatedPrefix {
	readonly ipRange?: string;
	readonly name?: string;
	readonly project?: string;
	readonly region?: string;
	readonly status?: string;
}
export default {
	PublicAdvertisedPrefixes: PublicAdvertisedPrefixes,
};
