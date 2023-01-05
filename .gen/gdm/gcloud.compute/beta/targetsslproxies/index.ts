import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetSslProxies
	extends GdmResource<TargetSslProxiesComponentInputs>
	implements TargetSslProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetSslProxiesComponentInputs) {
		super(entity, options.name, "compute.beta.TargetSslProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
}
export interface TargetSslProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
}
export interface TargetSslProxiesComponentInputs {
	readonly certificateMap?: string;
	readonly description?: string;
	readonly name: string;
	readonly proxyHeader?: string;
	readonly requestId?: string;
	readonly service?: string;
	readonly sslCertificates?: string[];
	readonly sslPolicy?: string;
}
export interface TargetSslProxy {
	readonly certificateMap?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly proxyHeader?: string;
	readonly selfLink?: string;
	readonly service?: string;
	readonly sslCertificates?: string[];
	readonly sslPolicy?: string;
}
export default {
	TargetSslProxies: TargetSslProxies,
};
