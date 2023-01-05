import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnTunnels extends GdmResource<VpnTunnelsComponentInputs> implements VpnTunnelsComponentOutputs {
	constructor(entity: ADKEntity, options: VpnTunnelsComponentInputs) {
		super(entity, options.name, "compute.v1.VpnTunnels", options);
	}
	public readonly creationTimestamp?: string;
	public readonly detailedStatus?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: string;
}
export interface VpnTunnelsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly detailedStatus?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
}
export interface VpnTunnelsComponentInputs {
	readonly description?: string;
	readonly ikeVersion?: number;
	readonly localTrafficSelector?: string[];
	readonly name: string;
	readonly peerExternalGateway?: string;
	readonly peerExternalGatewayInterface?: number;
	readonly peerGcpGateway?: string;
	readonly peerIp?: string;
	readonly remoteTrafficSelector?: string[];
	readonly requestId?: string;
	readonly router?: string;
	readonly sharedSecret?: string;
	readonly sharedSecretHash?: string;
	readonly targetVpnGateway?: string;
	readonly vpnGateway?: string;
	readonly vpnGatewayInterface?: number;
}
export interface VpnTunnel {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly detailedStatus?: string;
	readonly id?: string;
	readonly ikeVersion?: number;
	readonly kind?: string;
	readonly localTrafficSelector?: string[];
	readonly name?: string;
	readonly peerExternalGateway?: string;
	readonly peerExternalGatewayInterface?: number;
	readonly peerGcpGateway?: string;
	readonly peerIp?: string;
	readonly region?: string;
	readonly remoteTrafficSelector?: string[];
	readonly router?: string;
	readonly selfLink?: string;
	readonly sharedSecret?: string;
	readonly sharedSecretHash?: string;
	readonly status?: string;
	readonly targetVpnGateway?: string;
	readonly vpnGateway?: string;
	readonly vpnGatewayInterface?: number;
}
export default {
	VpnTunnels: VpnTunnels,
};
