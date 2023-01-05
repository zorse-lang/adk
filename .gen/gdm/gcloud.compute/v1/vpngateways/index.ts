import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnGateways extends GdmResource<VpnGatewaysComponentInputs> implements VpnGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: VpnGatewaysComponentInputs) {
		super(entity, options.name, "compute.v1.VpnGateways", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface VpnGatewaysComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface VpnGatewaysComponentInputs {
	readonly description?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly network?: string;
	readonly requestId?: string;
	readonly stackType?: string;
	readonly vpnInterfaces?: VpnGatewayVpnGatewayInterface[];
}
export interface VpnGateway {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly network?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly stackType?: string;
	readonly vpnInterfaces?: VpnGatewayVpnGatewayInterface[];
}
export interface VpnGatewayVpnGatewayInterface {
	readonly id?: number;
	readonly interconnectAttachment?: string;
	readonly ipAddress?: string;
}
export default {
	VpnGateways: VpnGateways,
};
