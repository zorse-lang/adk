import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetVpnGateway
	extends GdmResource<TargetVpnGatewayComponentInputs>
	implements TargetVpnGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetVpnGatewayComponentInputs) {
		super(entity, options.name, "compute.alpha.targetVpnGateway", options);
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
export interface TargetVpnGatewayComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly forwardingRules?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly tunnels?: string[] | undefined;
}
export interface TargetVpnGatewayComponentInputs {
	readonly description?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly type: string;
}
export default {
	TargetVpnGateway: TargetVpnGateway,
};
