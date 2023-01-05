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
	readonly Configuration?: ConfigurationItem[] | undefined;
	readonly Description?: string | undefined;
	readonly ResourceQuery?: ResourceQuery | undefined;
	readonly Resources?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ConfigurationItem {
	readonly Parameters?: ConfigurationParameter[] | undefined;
	readonly Type?: string | undefined;
}
export interface ConfigurationParameter {
	readonly Name?: string | undefined;
	readonly Values?: string[] | undefined;
}
export interface Query {
	readonly ResourceTypeFilters?: string[] | undefined;
	readonly StackIdentifier?: string | undefined;
	readonly TagFilters?: TagFilter[] | undefined;
}
export interface ResourceQuery {
	readonly Query?: Query | undefined;
	readonly Type?: string | undefined;
}
export interface TagFilter {
	readonly Key?: string | undefined;
	readonly Values?: string[] | undefined;
}
export default {
	Group: Group,
};
