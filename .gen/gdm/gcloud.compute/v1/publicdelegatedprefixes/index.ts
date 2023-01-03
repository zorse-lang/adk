import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class PublicDelegatedPrefixes
	extends GdmResource<PublicDelegatedPrefixesComponentInputs>
	implements PublicDelegatedPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: PublicDelegatedPrefixesComponentInputs) {
		super(entity, options.name, "compute.v1.PublicDelegatedPrefixes", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
}
export interface PublicDelegatedPrefixesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
}
export interface PublicDelegatedPrefixesComponentInputs {
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly ipCidrRange?: string | undefined;
	readonly isLiveMigration?: boolean | undefined;
	readonly name: string;
	readonly parentPrefix?: string | undefined;
	readonly publicDelegatedSubPrefixs?: PublicDelegatedPrefixPublicDelegatedSubPrefix[] | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface PublicDelegatedPrefix {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly ipCidrRange?: string | undefined;
	readonly isLiveMigration?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly parentPrefix?: string | undefined;
	readonly publicDelegatedSubPrefixs?: PublicDelegatedPrefixPublicDelegatedSubPrefix[] | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
}
export interface PublicDelegatedPrefixPublicDelegatedSubPrefix {
	readonly delegateeProject?: string | undefined;
	readonly description?: string | undefined;
	readonly ipCidrRange?: string | undefined;
	readonly isAddress?: boolean | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly status?: string | undefined;
}
export default {
	PublicDelegatedPrefixes: PublicDelegatedPrefixes,
};
