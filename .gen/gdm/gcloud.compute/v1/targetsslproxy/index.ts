import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetSslProxy extends GdmResource<TargetSslProxyComponentInputs> implements TargetSslProxyComponentOutputs {
	constructor(entity: ADKEntity, options: TargetSslProxyComponentInputs) {
		super(entity, options.name, "compute.v1.targetSslProxy", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TargetSslProxyComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface TargetSslProxyComponentInputs {
	readonly certificateMap?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly proxyHeader?: string | undefined;
	readonly service?: string | undefined;
	readonly sslCertificates?: string[] | undefined;
	readonly sslPolicy?: string | undefined;
	readonly type: string;
}
export default {
	TargetSslProxy: TargetSslProxy,
};
