import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLogs
	extends GdmResource<OrganizationsLogsComponentInputs>
	implements OrganizationsLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLogsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLogs", options);
	}
}
export interface OrganizationsLogsComponentOutputs {}
export interface OrganizationsLogsComponentInputs {
	readonly name: string;
}
export default {
	OrganizationsLogs: OrganizationsLogs,
};
