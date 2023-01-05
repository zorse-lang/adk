import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ExternalVpnGateways
	extends GdmResource<ExternalVpnGatewaysComponentInputs>
	implements ExternalVpnGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: ExternalVpnGatewaysComponentInputs) {
		super(entity, options.name, "compute.beta.ExternalVpnGateways", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
}
export interface ExternalVpnGatewaysComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
}
export interface ExternalVpnGatewaysComponentInputs {
	readonly description?: string;
	readonly interfaces?: ExternalVpnGatewayInterface[];
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly redundancyType?: string;
	readonly requestId?: string;
}
export interface ExternalVpnGateway {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly interfaces?: ExternalVpnGatewayInterface[];
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly redundancyType?: string;
	readonly selfLink?: string;
}
export interface ExternalVpnGatewayInterface {
	readonly id?: number;
	readonly ipAddress?: string;
}
export default {
	ExternalVpnGateways: ExternalVpnGateways,
};
