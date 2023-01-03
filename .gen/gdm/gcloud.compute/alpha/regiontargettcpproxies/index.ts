import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionTargetTcpProxies
	extends GdmResource<RegionTargetTcpProxiesComponentInputs>
	implements RegionTargetTcpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionTargetTcpProxiesComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionTargetTcpProxies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface RegionTargetTcpProxiesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface RegionTargetTcpProxiesComponentInputs {
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
	RegionTargetTcpProxies: RegionTargetTcpProxies,
};
