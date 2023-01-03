import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnGateways extends GdmResource<VpnGatewaysComponentInputs> implements VpnGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: VpnGatewaysComponentInputs) {
		super(entity, options.name, "compute.beta.VpnGateways", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface VpnGatewaysComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface VpnGatewaysComponentInputs {
	readonly description?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly requestId?: string | undefined;
	readonly stackType?: string | undefined;
	readonly vpnInterfaces?: VpnGatewayVpnGatewayInterface[] | undefined;
	readonly type: string;
}
export interface VpnGateway {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly stackType?: string | undefined;
	readonly vpnInterfaces?: VpnGatewayVpnGatewayInterface[] | undefined;
}
export interface VpnGatewayVpnGatewayInterface {
	readonly id?: number | undefined;
	readonly interconnectAttachment?: string | undefined;
	readonly ipAddress?: string | undefined;
}
export default {
	VpnGateways: VpnGateways,
};
