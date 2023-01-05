import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class PublicDelegatedPrefixes
	extends GdmResource<PublicDelegatedPrefixesComponentInputs>
	implements PublicDelegatedPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: PublicDelegatedPrefixesComponentInputs) {
		super(entity, options.name, "compute.v1.PublicDelegatedPrefixes", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: string;
}
export interface PublicDelegatedPrefixesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
}
export interface PublicDelegatedPrefixesComponentInputs {
	readonly description?: string;
	readonly fingerprint?: string;
	readonly ipCidrRange?: string;
	readonly isLiveMigration?: boolean;
	readonly name: string;
	readonly parentPrefix?: string;
	readonly publicDelegatedSubPrefixs?: PublicDelegatedPrefixPublicDelegatedSubPrefix[];
	readonly requestId?: string;
}
export interface PublicDelegatedPrefix {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly ipCidrRange?: string;
	readonly isLiveMigration?: boolean;
	readonly kind?: string;
	readonly name?: string;
	readonly parentPrefix?: string;
	readonly publicDelegatedSubPrefixs?: PublicDelegatedPrefixPublicDelegatedSubPrefix[];
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
}
export interface PublicDelegatedPrefixPublicDelegatedSubPrefix {
	readonly delegateeProject?: string;
	readonly description?: string;
	readonly ipCidrRange?: string;
	readonly isAddress?: boolean;
	readonly name?: string;
	readonly region?: string;
	readonly status?: string;
}
export default {
	PublicDelegatedPrefixes: PublicDelegatedPrefixes,
};
