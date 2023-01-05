import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnGateway extends GdmResource<VpnGatewayComponentInputs> implements VpnGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: VpnGatewayComponentInputs) {
		super(entity, options.name, "compute.beta.vpnGateway", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface VpnGatewayComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface VpnGatewayComponentInputs {
	readonly description?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly network?: string;
	readonly stackType?: string;
	readonly vpnInterfaces?: VpnGatewayVpnGatewayInterface[];
}
export interface VpnGatewayVpnGatewayInterface {
	readonly id?: number;
	readonly interconnectAttachment?: string;
	readonly ipAddress?: string;
}
export default {
	VpnGateway: VpnGateway,
};
