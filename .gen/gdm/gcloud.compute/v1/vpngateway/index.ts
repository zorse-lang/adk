import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnGateway extends GdmResource<VpnGatewayComponentInputs> implements VpnGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: VpnGatewayComponentInputs) {
		super(entity, options.name, "compute.v1.vpnGateway", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface VpnGatewayComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface VpnGatewayComponentInputs {
	readonly description?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly stackType?: string | undefined;
	readonly vpnInterfaces?: VpnGatewayVpnGatewayInterface[] | undefined;
	readonly type: string;
}
export interface VpnGatewayVpnGatewayInterface {
	readonly id?: number | undefined;
	readonly interconnectAttachment?: string | undefined;
	readonly ipAddress?: string | undefined;
}
export default {
	VpnGateway: VpnGateway,
};
