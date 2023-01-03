import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetTcpProxy extends GdmResource<TargetTcpProxyComponentInputs> implements TargetTcpProxyComponentOutputs {
	constructor(entity: ADKEntity, options: TargetTcpProxyComponentInputs) {
		super(entity, options.name, "compute.beta.targetTcpProxy", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TargetTcpProxyComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface TargetTcpProxyComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly proxyBind?: boolean | undefined;
	readonly proxyHeader?: string | undefined;
	readonly service?: string | undefined;
	readonly type: string;
}
export default {
	TargetTcpProxy: TargetTcpProxy,
};
