import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ExternalVpnGateways
	extends GdmResource<ExternalVpnGatewaysComponentInputs>
	implements ExternalVpnGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: ExternalVpnGatewaysComponentInputs) {
		super(entity, options.name, "compute.v1.ExternalVpnGateways", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface ExternalVpnGatewaysComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface ExternalVpnGatewaysComponentInputs {
	readonly description?: string | undefined;
	readonly interfaces?: ExternalVpnGatewayInterface[] | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly redundancyType?: string | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface ExternalVpnGateway {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly interfaces?: ExternalVpnGatewayInterface[] | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly redundancyType?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface ExternalVpnGatewayInterface {
	readonly id?: number | undefined;
	readonly ipAddress?: string | undefined;
}
export default {
	ExternalVpnGateways: ExternalVpnGateways,
};
