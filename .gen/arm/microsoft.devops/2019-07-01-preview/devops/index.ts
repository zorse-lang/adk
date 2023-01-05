import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class pipelines extends ArmResource<pipelinesComponentInputs> implements pipelinesComponentOutputs {
	constructor(entity: ADKEntity, options: pipelinesComponentInputs) {
		super(entity, options.name, "Microsoft.DevOps/pipelines", "2019-07-01-preview", options);
	}
	public readonly apiVersion: "2019-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevOps/pipelines";
}
export interface pipelinesComponentOutputs {
	readonly apiVersion: "2019-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevOps/pipelines";
}
export interface pipelinesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: PipelineProperties;
	readonly tags?: ResourceTags;
}
export interface Authorization {
	readonly authorizationType: "personalAccessToken";
	readonly parameters?: AuthorizationParameters;
}
export interface AuthorizationParameters {
	readonly [key: string]: string;
}
export interface BootstrapConfiguration {
	readonly repository?: CodeRepository;
	readonly template: PipelineTemplate;
}
export interface CodeRepository {
	readonly authorization?: Authorization;
	readonly defaultBranch: string;
	readonly id: string;
	readonly properties?: CodeRepositoryProperties;
	readonly repositoryType: "gitHub" | "vstsGit";
}
export interface CodeRepositoryProperties {
	readonly [key: string]: string;
}
export interface OrganizationReference {
	readonly id?: string;
	readonly name: string;
}
export interface PipelineProperties {
	readonly bootstrapConfiguration: BootstrapConfiguration;
	readonly organization: OrganizationReference;
	readonly pipelineId?: number;
	readonly project: ProjectReference;
}
export interface PipelineTemplate {
	readonly id: string;
	readonly parameters?: PipelineTemplateParameters;
}
export interface PipelineTemplateParameters {
	readonly [key: string]: string;
}
export interface ProjectReference {
	readonly id?: string;
	readonly name: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	pipelines: pipelines,
};
