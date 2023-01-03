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
	readonly AllowExternalPrincipals?: (boolean | undefined) | undefined;
	readonly PermissionArns?: (string[] | undefined) | undefined;
	readonly Principals?: (string[] | undefined) | undefined;
	readonly ResourceArns?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	ResourceShare: ResourceShare,
};
