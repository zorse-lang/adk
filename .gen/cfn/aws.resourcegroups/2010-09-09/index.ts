import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Group extends CfnResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ResourceGroups::Group", options);
	}
	public readonly Arn: string;
}
export interface GroupComponentOutputs {
	readonly Arn: string;
}
export interface GroupComponentInputs {
	readonly Name: string;
	readonly Configuration?: (ConfigurationItem[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ResourceQuery?: (ResourceQuery | undefined) | undefined;
	readonly Resources?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ConfigurationItem {
	readonly Parameters?: (ConfigurationParameter[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface ConfigurationParameter {
	readonly Name?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface Query {
	readonly ResourceTypeFilters?: (string[] | undefined) | undefined;
	readonly StackIdentifier?: (string | undefined) | undefined;
	readonly TagFilters?: (TagFilter[] | undefined) | undefined;
}
export interface ResourceQuery {
	readonly Query?: (Query | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface TagFilter {
	readonly Key?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export default {
	Group: Group,
};
