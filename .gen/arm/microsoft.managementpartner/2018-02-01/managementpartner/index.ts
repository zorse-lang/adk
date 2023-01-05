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
	readonly etag?: number;
	readonly name: string;
	readonly properties?: PartnerProperties;
}
export interface PartnerProperties {
	readonly createdTime?: string;
	readonly objectId?: string;
	readonly partnerId?: string;
	readonly partnerName?: string;
	readonly state?: "Active" | "Deleted";
	readonly tenantId?: string;
	readonly updatedTime?: string;
	readonly version?: number;
}
export default {
	partners: partners,
};
