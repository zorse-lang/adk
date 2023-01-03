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
	readonly Code?: (Code | undefined) | undefined;
	readonly ConnectionArn?: (string | undefined) | undefined;
	readonly EnableIssues?: (boolean | undefined) | undefined;
	readonly IsPrivate?: (boolean | undefined) | undefined;
	readonly RepositoryAccessToken?: (string | undefined) | undefined;
	readonly RepositoryDescription?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Code {
	readonly S3: S3;
}
export interface S3 {
	readonly Bucket: string;
	readonly Key: string;
	readonly ObjectVersion?: (string | undefined) | undefined;
}
export default {
	GitHubRepository: GitHubRepository,
};
