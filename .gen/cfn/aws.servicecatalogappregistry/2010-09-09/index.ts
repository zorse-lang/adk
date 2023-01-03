import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalogAppRegistry::Application", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface ApplicationComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface ApplicationComponentInputs {
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class AttributeGroup extends CfnResource<AttributeGroupComponentInputs> implements AttributeGroupComponentOutputs {
	constructor(entity: ADKEntity, options: AttributeGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalogAppRegistry::AttributeGroup", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface AttributeGroupComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface AttributeGroupComponentInputs {
	readonly Attributes: any;
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class AttributeGroupAssociation
	extends CfnResource<AttributeGroupAssociationComponentInputs>
	implements AttributeGroupAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: AttributeGroupAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation", options);
	}
	public readonly ApplicationArn: string;
	public readonly AttributeGroupArn: string;
	public readonly Id: string;
}
export interface AttributeGroupAssociationComponentOutputs {
	readonly ApplicationArn: string;
	readonly AttributeGroupArn: string;
	readonly Id: string;
}
export interface AttributeGroupAssociationComponentInputs {
	readonly Application: string;
	readonly AttributeGroup: string;
	readonly LogicalId: string;
}
export class ResourceAssociation
	extends CfnResource<ResourceAssociationComponentInputs>
	implements ResourceAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalogAppRegistry::ResourceAssociation", options);
	}
	public readonly ApplicationArn: string;
	public readonly Id: string;
	public readonly ResourceArn: string;
}
export interface ResourceAssociationComponentOutputs {
	readonly ApplicationArn: string;
	readonly Id: string;
	readonly ResourceArn: string;
}
export interface ResourceAssociationComponentInputs {
	readonly Application: string;
	readonly Resource: string;
	readonly ResourceType: string;
	readonly LogicalId: string;
}
export default {
	Application: Application,
	AttributeGroup: AttributeGroup,
	AttributeGroupAssociation: AttributeGroupAssociation,
	ResourceAssociation: ResourceAssociation,
};
