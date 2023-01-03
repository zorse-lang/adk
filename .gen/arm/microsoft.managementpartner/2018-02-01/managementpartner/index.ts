import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class partners extends ArmResource<partnersComponentInputs> implements partnersComponentOutputs {
	constructor(entity: ADKEntity, options: partnersComponentInputs) {
		super(entity, options.name, "Microsoft.ManagementPartner/partners", "2018-02-01", options);
	}
	public readonly apiVersion: "2018-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagementPartner/partners";
}
export interface partnersComponentOutputs {
	readonly apiVersion: "2018-02-01";
	readonly id: string;
	readonly type: "Microsoft.ManagementPartner/partners";
}
export interface partnersComponentInputs {
	readonly etag?: number | undefined;
	readonly name: string;
	readonly properties?: PartnerProperties | undefined;
}
export interface PartnerProperties {
	readonly createdTime?: string | undefined;
	readonly objectId?: string | undefined;
	readonly partnerId?: string | undefined;
	readonly partnerName?: string | undefined;
	readonly state?: ("Active" | "Deleted") | undefined;
	readonly tenantId?: string | undefined;
	readonly updatedTime?: string | undefined;
	readonly version?: number | undefined;
}
export default {
	partners: partners,
};
