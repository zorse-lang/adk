import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetVpnGateway
	extends GdmResource<TargetVpnGatewayComponentInputs>
	implements TargetVpnGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetVpnGatewayComponentInputs) {
		super(entity, options.name, "compute.alpha.targetVpnGateway", options);
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
export interface TargetVpnGatewayComponentOutputs {
	readonly creationTimestamp?: string;
	readonly forwardingRules?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly tunnels?: string[];
}
export interface TargetVpnGatewayComponentInputs {
	readonly description?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly network?: string;
}
export default {
	TargetVpnGateway: TargetVpnGateway,
};
