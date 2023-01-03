import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class GithubDotComWebhook
	extends GdmResource<GithubDotComWebhookComponentInputs>
	implements GithubDotComWebhookComponentOutputs
{
	constructor(entity: ADKEntity, options: GithubDotComWebhookComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.GithubDotComWebhook", options);
	}
}
export interface GithubDotComWebhookComponentOutputs {}
export interface GithubDotComWebhookComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	GithubDotComWebhook: GithubDotComWebhook,
};
