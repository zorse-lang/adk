import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class GlobalPublicDelegatedPrefixes
	extends GdmResource<GlobalPublicDelegatedPrefixesComponentInputs>
	implements GlobalPublicDelegatedPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: GlobalPublicDelegatedPrefixesComponentInputs) {
		super(entity, options.name, "compute.alpha.GlobalPublicDelegatedPrefixes", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly status?: string | undefined;
}
export interface GlobalPublicDelegatedPrefixesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: string | undefined;
}
export interface GlobalPublicDelegatedPrefixesComponentInputs {
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
	readonly selfLinkWithId?: string | undefined;
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
	GlobalPublicDelegatedPrefixes: GlobalPublicDelegatedPrefixes,
};
