import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetTcpProxies
	extends GdmResource<TargetTcpProxiesComponentInputs>
	implements TargetTcpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetTcpProxiesComponentInputs) {
		super(entity, options.name, "compute.alpha.TargetTcpProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface TargetTcpProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface TargetTcpProxiesComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly proxyBind?: boolean;
	readonly proxyHeader?: string;
	readonly requestId?: string;
	readonly service?: string;
}
export interface TargetTcpProxy {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly proxyBind?: boolean;
	readonly proxyHeader?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly service?: string;
}
export default {
	TargetTcpProxies: TargetTcpProxies,
};
