import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBucketsLinks
	extends GdmResource<ProjectsLocationsBucketsLinksComponentInputs>
	implements ProjectsLocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsLocationsBucketsLinks", options);
	}
	public readonly createTime?: string;
	public readonly lifecycleState?: string;
}
export interface ProjectsLocationsBucketsLinksComponentOutputs {
	readonly createTime?: string;
	readonly lifecycleState?: string;
}
export interface ProjectsLocationsBucketsLinksComponentInputs {
	readonly bigqueryDataset?: BigQueryDataset;
	readonly description?: string;
	readonly linkId: string;
	readonly name: string;
	readonly parent: string;
}
export interface BigQueryDataset {
	readonly datasetId?: string;
}
export interface Link {
	readonly bigqueryDataset?: BigQueryDataset;
	readonly createTime?: string;
	readonly description?: string;
	readonly lifecycleState?: string;
	readonly name?: string;
}
export default {
	ProjectsLocationsBucketsLinks: ProjectsLocationsBucketsLinks,
};
