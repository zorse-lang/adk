import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLocationsBucketsViewsLogs
	extends GdmResource<OrganizationsLocationsBucketsViewsLogsComponentInputs>
	implements OrganizationsLocationsBucketsViewsLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLocationsBucketsViewsLogsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLocationsBucketsViewsLogs", options);
	}
}
export interface OrganizationsLocationsBucketsViewsLogsComponentOutputs {}
export interface OrganizationsLocationsBucketsViewsLogsComponentInputs {
	readonly name: string;
}
export default {
	OrganizationsLocationsBucketsViewsLogs: OrganizationsLocationsBucketsViewsLogs,
};
