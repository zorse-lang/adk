import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::LookoutVision::Project", options);
	}
	public readonly Arn: string;
}
export interface ProjectComponentOutputs {
	readonly Arn: string;
}
export interface ProjectComponentInputs {
	readonly ProjectName: string;
	readonly LogicalId: string;
}
export default {
	Project: Project,
};
