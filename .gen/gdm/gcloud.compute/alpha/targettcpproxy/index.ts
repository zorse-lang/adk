import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetTcpProxy extends GdmResource<TargetTcpProxyComponentInputs> implements TargetTcpProxyComponentOutputs {
	constructor(entity: ADKEntity, options: TargetTcpProxyComponentInputs) {
		super(entity, options.name, "compute.alpha.targetTcpProxy", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface TargetTcpProxyComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface TargetTcpProxyComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly proxyBind?: boolean;
	readonly proxyHeader?: string;
	readonly service?: string;
}
export default {
	TargetTcpProxy: TargetTcpProxy,
};
