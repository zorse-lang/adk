import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetGrpcProxies
	extends GdmResource<TargetGrpcProxiesComponentInputs>
	implements TargetGrpcProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetGrpcProxiesComponentInputs) {
		super(entity, options.name, "compute.beta.TargetGrpcProxies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface TargetGrpcProxiesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface TargetGrpcProxiesComponentInputs {
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly urlMap?: string | undefined;
	readonly validateForProxyless?: boolean | undefined;
	readonly type: string;
}
export interface TargetGrpcProxy {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly urlMap?: string | undefined;
	readonly validateForProxyless?: boolean | undefined;
}
export default {
	TargetGrpcProxies: TargetGrpcProxies,
};
