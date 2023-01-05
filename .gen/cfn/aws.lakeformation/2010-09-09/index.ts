import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DataCellsFilter
	extends CfnResource<DataCellsFilterComponentInputs>
	implements DataCellsFilterComponentOutputs
{
	constructor(entity: ADKEntity, options: DataCellsFilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::LakeFormation::DataCellsFilter", options);
	}
}
export interface DataCellsFilterComponentOutputs {}
export interface DataCellsFilterComponentInputs {
	readonly DatabaseName: string;
	readonly Name: string;
	readonly TableCatalogId: string;
	readonly TableName: string;
	readonly ColumnNames?: string[] | undefined;
	readonly ColumnWildcard?: ColumnWildcard | undefined;
	readonly RowFilter?: RowFilter | undefined;
	readonly LogicalId: string;
}
export class DataLakeSettings
	extends CfnResource<DataLakeSettingsComponentInputs>
	implements DataLakeSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: DataLakeSettingsComponentInputs) {
		super(entity, options.LogicalId, "AWS::LakeFormation::DataLakeSettings", options);
	}
}
export interface DataLakeSettingsComponentOutputs {}
export interface DataLakeSettingsComponentInputs {
	readonly Admins?: DataLakePrincipal[] | undefined;
	readonly TrustedResourceOwners?: string[] | undefined;
	readonly LogicalId: string;
}
export class Permissions extends CfnResource<PermissionsComponentInputs> implements PermissionsComponentOutputs {
	constructor(entity: ADKEntity, options: PermissionsComponentInputs) {
		super(entity, options.LogicalId, "AWS::LakeFormation::Permissions", options);
	}
}
export interface PermissionsComponentOutputs {}
export interface PermissionsComponentInputs {
	readonly DataLakePrincipal: DataLakePrincipal;
	readonly Resource: Resource;
	readonly Permissions?: string[] | undefined;
	readonly PermissionsWithGrantOption?: string[] | undefined;
	readonly LogicalId: string;
}
export class PrincipalPermissions
	extends CfnResource<PrincipalPermissionsComponentInputs>
	implements PrincipalPermissionsComponentOutputs
{
	constructor(entity: ADKEntity, options: PrincipalPermissionsComponentInputs) {
		super(entity, options.LogicalId, "AWS::LakeFormation::PrincipalPermissions", options);
	}
	public readonly PrincipalIdentifier: string;
	public readonly ResourceIdentifier: string;
}
export interface PrincipalPermissionsComponentOutputs {
	readonly PrincipalIdentifier: string;
	readonly ResourceIdentifier: string;
}
export interface PrincipalPermissionsComponentInputs {
	readonly Permissions: string[];
	readonly PermissionsWithGrantOption: string[];
	readonly Principal: DataLakePrincipal;
	readonly Resource: Resource;
	readonly Catalog?: string | undefined;
	readonly LogicalId: string;
}
export class Resource extends CfnResource<ResourceComponentInputs> implements ResourceComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::LakeFormation::Resource", options);
	}
}
export interface ResourceComponentOutputs {}
export interface ResourceComponentInputs {
	readonly ResourceArn: string;
	readonly UseServiceLinkedRole: boolean;
	readonly RoleArn?: string | undefined;
	readonly LogicalId: string;
}
export class Tag extends CfnResource<TagComponentInputs> implements TagComponentOutputs {
	constructor(entity: ADKEntity, options: TagComponentInputs) {
		super(entity, options.LogicalId, "AWS::LakeFormation::Tag", options);
	}
}
export interface TagComponentOutputs {}
export interface TagComponentInputs {
	readonly TagKey: string;
	readonly TagValues: string[];
	readonly CatalogId?: string | undefined;
	readonly LogicalId: string;
}
export class TagAssociation extends CfnResource<TagAssociationComponentInputs> implements TagAssociationComponentOutputs {
	constructor(entity: ADKEntity, options: TagAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::LakeFormation::TagAssociation", options);
	}
	public readonly ResourceIdentifier: string;
	public readonly TagsIdentifier: string;
}
export interface TagAssociationComponentOutputs {
	readonly ResourceIdentifier: string;
	readonly TagsIdentifier: string;
}
export interface TagAssociationComponentInputs {
	readonly LFTags: LFTagPair[];
	readonly Resource: Resource;
	readonly LogicalId: string;
}
export interface ColumnWildcard {
	readonly ExcludedColumnNames?: string[] | undefined;
}
export interface RowFilter {
	readonly AllRowsWildcard?: any | undefined;
	readonly FilterExpression?: string | undefined;
}
export interface DataLakePrincipal {
	readonly DataLakePrincipalIdentifier?: string | undefined;
}
export interface DataLocationResource {
	readonly CatalogId?: string | undefined;
	readonly S3Resource?: string | undefined;
}
export interface DatabaseResource {
	readonly CatalogId?: string | undefined;
	readonly Name?: string | undefined;
}
export interface Resource {
	readonly DataLocationResource?: DataLocationResource | undefined;
	readonly DatabaseResource?: DatabaseResource | undefined;
	readonly TableResource?: TableResource | undefined;
	readonly TableWithColumnsResource?: TableWithColumnsResource | undefined;
}
export interface TableResource {
	readonly CatalogId?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Name?: string | undefined;
	readonly TableWildcard?: TableWildcard | undefined;
}
export interface TableWildcard {}
export interface TableWithColumnsResource {
	readonly CatalogId?: string | undefined;
	readonly ColumnNames?: string[] | undefined;
	readonly ColumnWildcard?: ColumnWildcard | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Name?: string | undefined;
}
export interface DataCellsFilterResource {
	readonly DatabaseName: string;
	readonly Name: string;
	readonly TableCatalogId: string;
	readonly TableName: string;
}
export interface LFTag {
	readonly TagKey?: string | undefined;
	readonly TagValues?: string[] | undefined;
}
export interface LFTagKeyResource {
	readonly CatalogId: string;
	readonly TagKey: string;
	readonly TagValues: string[];
}
export interface LFTagPolicyResource {
	readonly CatalogId: string;
	readonly Expression: LFTag[];
	readonly ResourceType: string;
}
export interface LFTagPair {
	readonly CatalogId: string;
	readonly TagKey: string;
	readonly TagValues: string[];
}
export default {
	DataCellsFilter: DataCellsFilter,
	DataLakeSettings: DataLakeSettings,
	Permissions: Permissions,
	PrincipalPermissions: PrincipalPermissions,
	Resource: Resource,
	Tag: Tag,
	TagAssociation: TagAssociation,
};
