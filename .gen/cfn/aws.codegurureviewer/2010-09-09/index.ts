import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class RepositoryAssociation
	extends CfnResource<RepositoryAssociationComponentInputs>
	implements RepositoryAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: RepositoryAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeGuruReviewer::RepositoryAssociation", options);
	}
	public readonly AssociationArn: string;
}
export interface RepositoryAssociationComponentOutputs {
	readonly AssociationArn: string;
}
export interface RepositoryAssociationComponentInputs {
	readonly Name: string;
	readonly Type: string;
	readonly BucketName?: string | undefined;
	readonly ConnectionArn?: string | undefined;
	readonly Owner?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export default {
	RepositoryAssociation: RepositoryAssociation,
};
