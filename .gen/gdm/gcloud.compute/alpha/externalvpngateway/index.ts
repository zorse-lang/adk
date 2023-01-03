import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ExternalVpnGateway
	extends GdmResource<ExternalVpnGatewayComponentInputs>
	implements ExternalVpnGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: ExternalVpnGatewayComponentInputs) {
		super(entity, options.name, "compute.alpha.externalVpnGateway", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface ExternalVpnGatewayComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface ExternalVpnGatewayComponentInputs {
	readonly description?: string | undefined;
	readonly interfaces?: ExternalVpnGatewayInterface[] | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly redundancyType?: string | undefined;
	readonly type: string;
}
export interface ExternalVpnGatewayInterface {
	readonly id?: number | undefined;
	readonly ipAddress?: string | undefined;
}
export default {
	ExternalVpnGateway: ExternalVpnGateway,
};
