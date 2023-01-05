import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ExternalVpnGateway
	extends GdmResource<ExternalVpnGatewayComponentInputs>
	implements ExternalVpnGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: ExternalVpnGatewayComponentInputs) {
		super(entity, options.name, "compute.v1.externalVpnGateway", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
}
export interface ExternalVpnGatewayComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
}
export interface ExternalVpnGatewayComponentInputs {
	readonly description?: string;
	readonly interfaces?: ExternalVpnGatewayInterface[];
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly redundancyType?: string;
}
export interface ExternalVpnGatewayInterface {
	readonly id?: number;
	readonly ipAddress?: string;
}
export default {
	ExternalVpnGateway: ExternalVpnGateway,
};
