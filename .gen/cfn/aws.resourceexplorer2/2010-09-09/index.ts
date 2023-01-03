import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DefaultViewAssociation
	extends CfnResource<DefaultViewAssociationComponentInputs>
	implements DefaultViewAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: DefaultViewAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ResourceExplorer2::DefaultViewAssociation", options);
	}
	public readonly AssociatedAwsPrincipal: string;
}
export interface DefaultViewAssociationComponentOutputs {
	readonly AssociatedAwsPrincipal: string;
}
export interface DefaultViewAssociationComponentInputs {
	readonly ViewArn: string;
	readonly LogicalId: string;
}
export class Index extends CfnResource<IndexComponentInputs> implements IndexComponentOutputs {
	constructor(entity: ADKEntity, options: IndexComponentInputs) {
		super(entity, options.LogicalId, "AWS::ResourceExplorer2::Index", options);
	}
	public readonly Arn: string;
	public readonly IndexState: string;
}
export interface IndexComponentOutputs {
	readonly Arn: string;
	readonly IndexState: string;
}
export interface IndexComponentInputs {
	readonly Type: string;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class View extends CfnResource<ViewComponentInputs> implements ViewComponentOutputs {
	constructor(entity: ADKEntity, options: ViewComponentInputs) {
		super(entity, options.LogicalId, "AWS::ResourceExplorer2::View", options);
	}
	public readonly ViewArn: string;
}
export interface ViewComponentOutputs {
	readonly ViewArn: string;
}
export interface ViewComponentInputs {
	readonly ViewName: string;
	readonly Filters?: (Filters | undefined) | undefined;
	readonly IncludedProperties?: (Included[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Filters {
	readonly FilterString: string;
}
export interface Included {
	readonly Name: string;
}
export default {
	DefaultViewAssociation: DefaultViewAssociation,
	Index: Index,
	View: View,
};
