import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetVpnGateways
	extends GdmResource<TargetVpnGatewaysComponentInputs>
	implements TargetVpnGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetVpnGatewaysComponentInputs) {
		super(entity, options.name, "compute.v1.TargetVpnGateways", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly forwardingRules?: string[] | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
	public readonly tunnels?: string[] | undefined;
}
export interface TargetVpnGatewaysComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly forwardingRules?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly tunnels?: string[] | undefined;
}
export interface TargetVpnGatewaysComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface TargetVpnGateway {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly forwardingRules?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly tunnels?: string[] | undefined;
}
export default {
	TargetVpnGateways: TargetVpnGateways,
};
