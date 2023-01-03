import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ComponentType extends CfnResource<ComponentTypeComponentInputs> implements ComponentTypeComponentOutputs {
	constructor(entity: ADKEntity, options: ComponentTypeComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTTwinMaker::ComponentType", options);
	}
	public readonly Arn: string;
	public readonly CreationDateTime: string;
	public readonly IsAbstract: boolean;
	public readonly IsSchemaInitialized: boolean;
	public readonly StatusErrorCode: string;
	public readonly StatusErrorMessage: string;
	public readonly StatusState: string;
	public readonly UpdateDateTime: string;
}
export interface ComponentTypeComponentOutputs {
	readonly Arn: string;
	readonly CreationDateTime: string;
	readonly IsAbstract: boolean;
	readonly IsSchemaInitialized: boolean;
	readonly StatusErrorCode: string;
	readonly StatusErrorMessage: string;
	readonly StatusState: string;
	readonly UpdateDateTime: string;
}
export interface ComponentTypeComponentInputs {
	readonly ComponentTypeId: string;
	readonly WorkspaceId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly ExtendsFrom?: (string[] | undefined) | undefined;
	readonly Functions?: ({ [key: string]: FunctionInstance } | undefined) | undefined;
	readonly IsSingleton?: (boolean | undefined) | undefined;
	readonly PropertyDefinitions?: ({ [key: string]: PropertyDefinition } | undefined) | undefined;
	readonly PropertyGroups?: ({ [key: string]: PropertyGroup } | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class Entity extends CfnResource<EntityComponentInputs> implements EntityComponentOutputs {
	constructor(entity: ADKEntity, options: EntityComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTTwinMaker::Entity", options);
	}
	public readonly Arn: string;
	public readonly CreationDateTime: string;
	public readonly HasChildEntities: boolean;
	public readonly StatusErrorCode: string;
	public readonly StatusErrorMessage: string;
	public readonly StatusState: string;
	public readonly UpdateDateTime: string;
}
export interface EntityComponentOutputs {
	readonly Arn: string;
	readonly CreationDateTime: string;
	readonly HasChildEntities: boolean;
	readonly StatusErrorCode: string;
	readonly StatusErrorMessage: string;
	readonly StatusState: string;
	readonly UpdateDateTime: string;
}
export interface EntityComponentInputs {
	readonly EntityName: string;
	readonly WorkspaceId: string;
	readonly Components?: ({ [key: string]: Component } | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EntityId?: (string | undefined) | undefined;
	readonly ParentEntityId?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class Scene extends CfnResource<SceneComponentInputs> implements SceneComponentOutputs {
	constructor(entity: ADKEntity, options: SceneComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTTwinMaker::Scene", options);
	}
	public readonly Arn: string;
	public readonly CreationDateTime: string;
	public readonly UpdateDateTime: string;
}
export interface SceneComponentOutputs {
	readonly Arn: string;
	readonly CreationDateTime: string;
	readonly UpdateDateTime: string;
}
export interface SceneComponentInputs {
	readonly ContentLocation: string;
	readonly SceneId: string;
	readonly WorkspaceId: string;
	readonly Capabilities?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class Workspace extends CfnResource<WorkspaceComponentInputs> implements WorkspaceComponentOutputs {
	constructor(entity: ADKEntity, options: WorkspaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTTwinMaker::Workspace", options);
	}
	public readonly Arn: string;
	public readonly CreationDateTime: string;
	public readonly UpdateDateTime: string;
}
export interface WorkspaceComponentOutputs {
	readonly Arn: string;
	readonly CreationDateTime: string;
	readonly UpdateDateTime: string;
}
export interface WorkspaceComponentInputs {
	readonly Role: string;
	readonly S3Location: string;
	readonly WorkspaceId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DataConnector {
	readonly IsNative?: (boolean | undefined) | undefined;
	readonly Lambda?: (LambdaFunction | undefined) | undefined;
}
export interface DataType {
	readonly AllowedValues?: (DataValue[] | undefined) | undefined;
	readonly NestedType?: (DataType | undefined) | undefined;
	readonly Relationship?: (Relationship | undefined) | undefined;
	readonly Type: string;
	readonly UnitOfMeasure?: (string | undefined) | undefined;
}
export interface DataValue {
	readonly BooleanValue?: (boolean | undefined) | undefined;
	readonly DoubleValue?: (number | undefined) | undefined;
	readonly Expression?: (string | undefined) | undefined;
	readonly IntegerValue?: (number | undefined) | undefined;
	readonly ListValue?: (DataValue[] | undefined) | undefined;
	readonly LongValue?: (number | undefined) | undefined;
	readonly MapValue?: ({ [key: string]: DataValue } | undefined) | undefined;
	readonly RelationshipValue?: (RelationshipValue | undefined) | undefined;
	readonly StringValue?: (string | undefined) | undefined;
}
export interface Error {
	readonly Code?: (string | undefined) | undefined;
	readonly Message?: (string | undefined) | undefined;
}
export interface FunctionInstance {
	readonly ImplementedBy?: (DataConnector | undefined) | undefined;
	readonly RequiredProperties?: (string[] | undefined) | undefined;
	readonly Scope?: (string | undefined) | undefined;
}
export interface LambdaFunction {
	readonly Arn: string;
}
export interface PropertyDefinition {
	readonly Configurations?: ({ [key: string]: string } | undefined) | undefined;
	readonly DataType?: (DataType | undefined) | undefined;
	readonly DefaultValue?: (DataValue | undefined) | undefined;
	readonly IsExternalId?: (boolean | undefined) | undefined;
	readonly IsRequiredInEntity?: (boolean | undefined) | undefined;
	readonly IsStoredExternally?: (boolean | undefined) | undefined;
	readonly IsTimeSeries?: (boolean | undefined) | undefined;
}
export interface PropertyGroup {
	readonly GroupType?: (string | undefined) | undefined;
	readonly PropertyNames?: (string[] | undefined) | undefined;
}
export interface Relationship {
	readonly RelationshipType?: (string | undefined) | undefined;
	readonly TargetComponentTypeId?: (string | undefined) | undefined;
}
export interface RelationshipValue {
	readonly TargetComponentName?: (string | undefined) | undefined;
	readonly TargetEntityId?: (string | undefined) | undefined;
}
export interface Status {
	readonly Error?: (Error | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
}
export interface Component {
	readonly ComponentName?: (string | undefined) | undefined;
	readonly ComponentTypeId?: (string | undefined) | undefined;
	readonly DefinedIn?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Properties?: ({ [key: string]: Property } | undefined) | undefined;
	readonly PropertyGroups?: ({ [key: string]: PropertyGroup } | undefined) | undefined;
	readonly Status?: (Status | undefined) | undefined;
}
export interface Definition {
	readonly Configuration?: ({ [key: string]: string } | undefined) | undefined;
	readonly DataType?: (DataType | undefined) | undefined;
	readonly DefaultValue?: (DataValue | undefined) | undefined;
	readonly IsExternalId?: (boolean | undefined) | undefined;
	readonly IsFinal?: (boolean | undefined) | undefined;
	readonly IsImported?: (boolean | undefined) | undefined;
	readonly IsInherited?: (boolean | undefined) | undefined;
	readonly IsRequiredInEntity?: (boolean | undefined) | undefined;
	readonly IsStoredExternally?: (boolean | undefined) | undefined;
	readonly IsTimeSeries?: (boolean | undefined) | undefined;
}
export interface Property {
	readonly Definition?: (Definition | undefined) | undefined;
	readonly Value?: (DataValue | undefined) | undefined;
}
export default {
	ComponentType: ComponentType,
	Entity: Entity,
	Scene: Scene,
	Workspace: Workspace,
};
