import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class XpnResourceId extends GdmResource<XpnResourceIdComponentInputs> implements XpnResourceIdComponentOutputs {
	constructor(entity: ADKEntity, options: XpnResourceIdComponentInputs) {
		super(entity, options.name, "compute.alpha.XpnResourceId", options);
	}
}
export interface XpnResourceIdComponentOutputs {}
export interface XpnResourceIdComponentInputs {
	readonly id?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export default {
	XpnResourceId: XpnResourceId,
};
