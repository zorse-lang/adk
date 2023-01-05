import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetGrpcProxies
	extends GdmResource<TargetGrpcProxiesComponentInputs>
	implements TargetGrpcProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetGrpcProxiesComponentInputs) {
		super(entity, options.name, "compute.beta.TargetGrpcProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface TargetGrpcProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface TargetGrpcProxiesComponentInputs {
	readonly description?: string;
	readonly fingerprint?: string;
	readonly name: string;
	readonly requestId?: string;
	readonly urlMap?: string;
	readonly validateForProxyless?: boolean;
}
export interface TargetGrpcProxy {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly urlMap?: string;
	readonly validateForProxyless?: boolean;
}
export default {
	TargetGrpcProxies: TargetGrpcProxies,
};
