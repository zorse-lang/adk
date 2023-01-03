import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeArtifact::Domain", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
	public readonly Owner: string;
}
export interface DomainComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
	readonly Owner: string;
}
export interface DomainComponentInputs {
	readonly DomainName: string;
	readonly EncryptionKey?: string | undefined;
	readonly PermissionsPolicyDocument?: (any | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Repository extends CfnResource<RepositoryComponentInputs> implements RepositoryComponentOutputs {
	constructor(entity: ADKEntity, options: RepositoryComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeArtifact::Repository", options);
	}
	public readonly Arn: string;
	public readonly DomainName: string;
	public readonly Name: string;
}
export interface RepositoryComponentOutputs {
	readonly Arn: string;
	readonly DomainName: string;
	readonly Name: string;
}
export interface RepositoryComponentInputs {
	readonly DomainName: string;
	readonly RepositoryName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly DomainOwner?: string | undefined;
	readonly ExternalConnections?: (string[] | undefined) | undefined;
	readonly PermissionsPolicyDocument?: (any | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Upstreams?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Domain: Domain,
	Repository: Repository,
};
