import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetSslProxies
	extends GdmResource<TargetSslProxiesComponentInputs>
	implements TargetSslProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetSslProxiesComponentInputs) {
		super(entity, options.name, "compute.v1.TargetSslProxies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TargetSslProxiesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface TargetSslProxiesComponentInputs {
	readonly certificateMap?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly proxyHeader?: string | undefined;
	readonly requestId?: string | undefined;
	readonly service?: string | undefined;
	readonly sslCertificates?: string[] | undefined;
	readonly sslPolicy?: string | undefined;
	readonly type: string;
}
export interface TargetSslProxy {
	readonly certificateMap?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly proxyHeader?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly service?: string | undefined;
	readonly sslCertificates?: string[] | undefined;
	readonly sslPolicy?: string | undefined;
}
export default {
	TargetSslProxies: TargetSslProxies,
};
