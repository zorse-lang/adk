import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Project extends RosResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::IMM::Project", options);
	}
}
export interface ProjectComponentOutputs {}
export interface ProjectComponentInputs {
	readonly Project: any | string;
	readonly ServiceRole?: string | undefined;
	readonly LogicalId: string;
}
export default {
	Project: Project,
};
