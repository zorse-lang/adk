import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Repository extends CfnResource<RepositoryComponentInputs> implements RepositoryComponentOutputs {
	constructor(entity: ADKEntity, options: RepositoryComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeCommit::Repository", options);
	}
	public readonly Arn: string;
	public readonly CloneUrlHttp: string;
	public readonly CloneUrlSsh: string;
	public readonly Name: string;
}
export interface RepositoryComponentOutputs {
	readonly Arn: string;
	readonly CloneUrlHttp: string;
	readonly CloneUrlSsh: string;
	readonly Name: string;
}
export interface RepositoryComponentInputs {
	readonly RepositoryName: string;
	readonly Code?: Code | undefined;
	readonly RepositoryDescription?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Triggers?: RepositoryTrigger[] | undefined;
	readonly LogicalId: string;
}
export interface Code {
	readonly BranchName?: string | undefined;
	readonly S3: S3;
}
export interface RepositoryTrigger {
	readonly Branches?: string[] | undefined;
	readonly CustomData?: string | undefined;
	readonly DestinationArn: string;
	readonly Events: string[];
	readonly Name: string;
}
export interface S3 {
	readonly Bucket: string;
	readonly Key: string;
	readonly ObjectVersion?: string | undefined;
}
export default {
	Repository: Repository,
};
