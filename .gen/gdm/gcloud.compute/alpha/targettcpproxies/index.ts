import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetTcpProxies
	extends GdmResource<TargetTcpProxiesComponentInputs>
	implements TargetTcpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetTcpProxiesComponentInputs) {
		super(entity, options.name, "compute.alpha.TargetTcpProxies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TargetTcpProxiesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface TargetTcpProxiesComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly proxyBind?: boolean | undefined;
	readonly proxyHeader?: string | undefined;
	readonly requestId?: string | undefined;
	readonly service?: string | undefined;
	readonly type: string;
}
export interface TargetTcpProxy {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly proxyBind?: boolean | undefined;
	readonly proxyHeader?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly service?: string | undefined;
}
export default {
	TargetTcpProxies: TargetTcpProxies,
};
