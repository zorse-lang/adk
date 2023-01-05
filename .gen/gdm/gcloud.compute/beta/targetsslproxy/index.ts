import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetSslProxy extends GdmResource<TargetSslProxyComponentInputs> implements TargetSslProxyComponentOutputs {
	constructor(entity: ADKEntity, options: TargetSslProxyComponentInputs) {
		super(entity, options.name, "compute.beta.targetSslProxy", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
}
export interface TargetSslProxyComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
}
export interface TargetSslProxyComponentInputs {
	readonly certificateMap?: string;
	readonly description?: string;
	readonly name: string;
	readonly proxyHeader?: string;
	readonly service?: string;
	readonly sslCertificates?: string[];
	readonly sslPolicy?: string;
}
export default {
	TargetSslProxy: TargetSslProxy,
};
