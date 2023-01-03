import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnTunnels extends GdmResource<VpnTunnelsComponentInputs> implements VpnTunnelsComponentOutputs {
	constructor(entity: ADKEntity, options: VpnTunnelsComponentInputs) {
		super(entity, options.name, "compute.v1.VpnTunnels", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly detailedStatus?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
}
export interface VpnTunnelsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly detailedStatus?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
}
export interface VpnTunnelsComponentInputs {
	readonly description?: string | undefined;
	readonly ikeVersion?: number | undefined;
	readonly localTrafficSelector?: string[] | undefined;
	readonly name: string;
	readonly peerExternalGateway?: string | undefined;
	readonly peerExternalGatewayInterface?: number | undefined;
	readonly peerGcpGateway?: string | undefined;
	readonly peerIp?: string | undefined;
	readonly remoteTrafficSelector?: string[] | undefined;
	readonly requestId?: string | undefined;
	readonly router?: string | undefined;
	readonly sharedSecret?: string | undefined;
	readonly sharedSecretHash?: string | undefined;
	readonly targetVpnGateway?: string | undefined;
	readonly vpnGateway?: string | undefined;
	readonly vpnGatewayInterface?: number | undefined;
	readonly type: string;
}
export interface VpnTunnel {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly detailedStatus?: string | undefined;
	readonly id?: string | undefined;
	readonly ikeVersion?: number | undefined;
	readonly kind?: string | undefined;
	readonly localTrafficSelector?: string[] | undefined;
	readonly name?: string | undefined;
	readonly peerExternalGateway?: string | undefined;
	readonly peerExternalGatewayInterface?: number | undefined;
	readonly peerGcpGateway?: string | undefined;
	readonly peerIp?: string | undefined;
	readonly region?: string | undefined;
	readonly remoteTrafficSelector?: string[] | undefined;
	readonly router?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly sharedSecret?: string | undefined;
	readonly sharedSecretHash?: string | undefined;
	readonly status?: string | undefined;
	readonly targetVpnGateway?: string | undefined;
	readonly vpnGateway?: string | undefined;
	readonly vpnGatewayInterface?: number | undefined;
}
export default {
	VpnTunnels: VpnTunnels,
};
