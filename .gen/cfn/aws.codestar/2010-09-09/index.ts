import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class GitHubRepository
	extends CfnResource<GitHubRepositoryComponentInputs>
	implements GitHubRepositoryComponentOutputs
{
	constructor(entity: ADKEntity, options: GitHubRepositoryComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeStar::GitHubRepository", options);
	}
}
export interface GitHubRepositoryComponentOutputs {}
export interface GitHubRepositoryComponentInputs {
	readonly RepositoryName: string;
	readonly RepositoryOwner: string;
	readonly Code?: Code | undefined;
	readonly ConnectionArn?: string | undefined;
	readonly EnableIssues?: boolean | undefined;
	readonly IsPrivate?: boolean | undefined;
	readonly RepositoryAccessToken?: string | undefined;
	readonly RepositoryDescription?: string | undefined;
	readonly LogicalId: string;
}
export interface Code {
	readonly S3: S3;
}
export interface S3 {
	readonly Bucket: string;
	readonly Key: string;
	readonly ObjectVersion?: string | undefined;
}
export default {
	GitHubRepository: GitHubRepository,
};
