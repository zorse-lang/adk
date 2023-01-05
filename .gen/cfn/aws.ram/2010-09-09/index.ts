import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourceShare extends CfnResource<ResourceShareComponentInputs> implements ResourceShareComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceShareComponentInputs) {
		super(entity, options.LogicalId, "AWS::RAM::ResourceShare", options);
	}
	public readonly Arn: string;
}
export interface ResourceShareComponentOutputs {
	readonly Arn: string;
}
export interface ResourceShareComponentInputs {
	readonly Name: string;
	readonly AllowExternalPrincipals?: boolean | undefined;
	readonly PermissionArns?: string[] | undefined;
	readonly Principals?: string[] | undefined;
	readonly ResourceArns?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export default {
	ResourceShare: ResourceShare,
};
