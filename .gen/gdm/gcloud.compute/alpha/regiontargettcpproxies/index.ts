import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionTargetTcpProxies
	extends GdmResource<RegionTargetTcpProxiesComponentInputs>
	implements RegionTargetTcpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionTargetTcpProxiesComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionTargetTcpProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface RegionTargetTcpProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface RegionTargetTcpProxiesComponentInputs {
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
	RegionTargetTcpProxies: RegionTargetTcpProxies,
};
