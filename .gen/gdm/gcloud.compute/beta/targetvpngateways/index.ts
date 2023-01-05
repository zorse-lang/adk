import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetVpnGateways
	extends GdmResource<TargetVpnGatewaysComponentInputs>
	implements TargetVpnGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetVpnGatewaysComponentInputs) {
		super(entity, options.name, "compute.beta.TargetVpnGateways", options);
	}
	public readonly creationTimestamp?: string;
	public readonly forwardingRules?: string[];
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: string;
	public readonly tunnels?: string[];
}
export interface TargetVpnGatewaysComponentOutputs {
	readonly creationTimestamp?: string;
	readonly forwardingRules?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly tunnels?: string[];
}
export interface TargetVpnGatewaysComponentInputs {
	readonly description?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly network?: string;
	readonly requestId?: string;
}
export interface TargetVpnGateway {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly forwardingRules?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly network?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly tunnels?: string[];
}
export default {
	TargetVpnGateways: TargetVpnGateways,
};
