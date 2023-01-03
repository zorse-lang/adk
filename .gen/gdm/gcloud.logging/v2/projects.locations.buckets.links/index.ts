import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBucketsLinks
	extends GdmResource<ProjectsLocationsBucketsLinksComponentInputs>
	implements ProjectsLocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsLocationsBucketsLinks", options);
	}
	public readonly createTime?: string | undefined;
	public readonly lifecycleState?: string | undefined;
}
export interface ProjectsLocationsBucketsLinksComponentOutputs {
	readonly createTime?: string | undefined;
	readonly lifecycleState?: string | undefined;
}
export interface ProjectsLocationsBucketsLinksComponentInputs {
	readonly bigqueryDataset?: BigQueryDataset | undefined;
	readonly description?: string | undefined;
	readonly linkId: string;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface BigQueryDataset {
	readonly datasetId?: string | undefined;
}
export interface Link {
	readonly bigqueryDataset?: BigQueryDataset | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name?: string | undefined;
}
export default {
	ProjectsLocationsBucketsLinks: ProjectsLocationsBucketsLinks,
};
