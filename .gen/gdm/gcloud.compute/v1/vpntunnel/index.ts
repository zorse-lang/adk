import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnTunnel extends GdmResource<VpnTunnelComponentInputs> implements VpnTunnelComponentOutputs {
	constructor(entity: ADKEntity, options: VpnTunnelComponentInputs) {
		super(entity, options.name, "compute.v1.vpnTunnel", options);
	}
	public readonly creationTimestamp?: string;
	public readonly detailedStatus?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: string;
}
export interface VpnTunnelComponentOutputs {
	readonly creationTimestamp?: string;
	readonly detailedStatus?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
}
export interface VpnTunnelComponentInputs {
	readonly description?: string;
	readonly ikeVersion?: number;
	readonly localTrafficSelector?: string[];
	readonly name: string;
	readonly peerExternalGateway?: string;
	readonly peerExternalGatewayInterface?: number;
	readonly peerGcpGateway?: string;
	readonly peerIp?: string;
	readonly remoteTrafficSelector?: string[];
	readonly router?: string;
	readonly sharedSecret?: string;
	readonly sharedSecretHash?: string;
	readonly targetVpnGateway?: string;
	readonly vpnGateway?: string;
	readonly vpnGatewayInterface?: number;
}
export default {
	VpnTunnel: VpnTunnel,
};
