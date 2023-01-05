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
	readonly Description?: string | undefined;
	readonly ExtendsFrom?: string[] | undefined;
	readonly Functions?: { [key: string]: FunctionInstance } | undefined;
	readonly IsSingleton?: boolean | undefined;
	readonly PropertyDefinitions?: { [key: string]: PropertyDefinition } | undefined;
	readonly PropertyGroups?: { [key: string]: PropertyGroup } | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
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
	readonly Components?: { [key: string]: Component } | undefined;
	readonly Description?: string | undefined;
	readonly EntityId?: string | undefined;
	readonly ParentEntityId?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
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
	readonly Capabilities?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
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
	readonly Description?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export interface DataConnector {
	readonly IsNative?: boolean | undefined;
	readonly Lambda?: LambdaFunction | undefined;
}
export interface DataType {
	readonly AllowedValues?: DataValue[] | undefined;
	readonly NestedType?: DataType | undefined;
	readonly Relationship?: Relationship | undefined;
	readonly Type: string;
	readonly UnitOfMeasure?: string | undefined;
}
export interface DataValue {
	readonly BooleanValue?: boolean | undefined;
	readonly DoubleValue?: number | undefined;
	readonly Expression?: string | undefined;
	readonly IntegerValue?: number | undefined;
	readonly ListValue?: DataValue[] | undefined;
	readonly LongValue?: number | undefined;
	readonly MapValue?: { [key: string]: DataValue } | undefined;
	readonly RelationshipValue?: RelationshipValue | undefined;
	readonly StringValue?: string | undefined;
}
export interface Error {
	readonly Code?: string | undefined;
	readonly Message?: string | undefined;
}
export interface FunctionInstance {
	readonly ImplementedBy?: DataConnector | undefined;
	readonly RequiredProperties?: string[] | undefined;
	readonly Scope?: string | undefined;
}
export interface LambdaFunction {
	readonly Arn: string;
}
export interface PropertyDefinition {
	readonly Configurations?: { [key: string]: string } | undefined;
	readonly DataType?: DataType | undefined;
	readonly DefaultValue?: DataValue | undefined;
	readonly IsExternalId?: boolean | undefined;
	readonly IsRequiredInEntity?: boolean | undefined;
	readonly IsStoredExternally?: boolean | undefined;
	readonly IsTimeSeries?: boolean | undefined;
}
export interface PropertyGroup {
	readonly GroupType?: string | undefined;
	readonly PropertyNames?: string[] | undefined;
}
export interface Relationship {
	readonly RelationshipType?: string | undefined;
	readonly TargetComponentTypeId?: string | undefined;
}
export interface RelationshipValue {
	readonly TargetComponentName?: string | undefined;
	readonly TargetEntityId?: string | undefined;
}
export interface Status {
	readonly Error?: Error | undefined;
	readonly State?: string | undefined;
}
export interface Component {
	readonly ComponentName?: string | undefined;
	readonly ComponentTypeId?: string | undefined;
	readonly DefinedIn?: string | undefined;
	readonly Description?: string | undefined;
	readonly Properties?: { [key: string]: Property } | undefined;
	readonly PropertyGroups?: { [key: string]: PropertyGroup } | undefined;
	readonly Status?: Status | undefined;
}
export interface Definition {
	readonly Configuration?: { [key: string]: string } | undefined;
	readonly DataType?: DataType | undefined;
	readonly DefaultValue?: DataValue | undefined;
	readonly IsExternalId?: boolean | undefined;
	readonly IsFinal?: boolean | undefined;
	readonly IsImported?: boolean | undefined;
	readonly IsInherited?: boolean | undefined;
	readonly IsRequiredInEntity?: boolean | undefined;
	readonly IsStoredExternally?: boolean | undefined;
	readonly IsTimeSeries?: boolean | undefined;
}
export interface Property {
	readonly Definition?: Definition | undefined;
	readonly Value?: DataValue | undefined;
}
export default {
	ComponentType: ComponentType,
	Entity: Entity,
	Scene: Scene,
	Workspace: Workspace,
};
