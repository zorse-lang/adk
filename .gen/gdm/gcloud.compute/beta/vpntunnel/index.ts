import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VpnTunnel extends GdmResource<VpnTunnelComponentInputs> implements VpnTunnelComponentOutputs {
	constructor(entity: ADKEntity, options: VpnTunnelComponentInputs) {
		super(entity, options.name, "compute.beta.vpnTunnel", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly detailedStatus?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
}
export interface VpnTunnelComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly detailedStatus?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
}
export interface VpnTunnelComponentInputs {
	readonly description?: string | undefined;
	readonly ikeVersion?: number | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly localTrafficSelector?: string[] | undefined;
	readonly name: string;
	readonly peerExternalGateway?: string | undefined;
	readonly peerExternalGatewayInterface?: number | undefined;
	readonly peerGcpGateway?: string | undefined;
	readonly peerIp?: string | undefined;
	readonly remoteTrafficSelector?: string[] | undefined;
	readonly router?: string | undefined;
	readonly sharedSecret?: string | undefined;
	readonly sharedSecretHash?: string | undefined;
	readonly targetVpnGateway?: string | undefined;
	readonly vpnGateway?: string | undefined;
	readonly vpnGatewayInterface?: number | undefined;
	readonly type: string;
}
export default {
	VpnTunnel: VpnTunnel,
};
