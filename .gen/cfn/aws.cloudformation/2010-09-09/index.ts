import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CustomResource extends CfnResource<CustomResourceComponentInputs> implements CustomResourceComponentOutputs {
	constructor(entity: ADKEntity, options: CustomResourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::CustomResource", options);
	}
}
export interface CustomResourceComponentOutputs {}
export interface CustomResourceComponentInputs {
	readonly ServiceToken: string;
	readonly LogicalId: string;
}
export class HookDefaultVersion
	extends CfnResource<HookDefaultVersionComponentInputs>
	implements HookDefaultVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: HookDefaultVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::HookDefaultVersion", options);
	}
	public readonly Arn: string;
}
export interface HookDefaultVersionComponentOutputs {
	readonly Arn: string;
}
export interface HookDefaultVersionComponentInputs {
	readonly TypeName?: string | undefined;
	readonly TypeVersionArn?: string | undefined;
	readonly VersionId?: string | undefined;
	readonly LogicalId: string;
}
export class HookTypeConfig extends CfnResource<HookTypeConfigComponentInputs> implements HookTypeConfigComponentOutputs {
	constructor(entity: ADKEntity, options: HookTypeConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::HookTypeConfig", options);
	}
	public readonly ConfigurationArn: string;
}
export interface HookTypeConfigComponentOutputs {
	readonly ConfigurationArn: string;
}
export interface HookTypeConfigComponentInputs {
	readonly Configuration: string;
	readonly ConfigurationAlias?: string | undefined;
	readonly TypeArn?: string | undefined;
	readonly TypeName?: string | undefined;
	readonly LogicalId: string;
}
export class HookVersion extends CfnResource<HookVersionComponentInputs> implements HookVersionComponentOutputs {
	constructor(entity: ADKEntity, options: HookVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::HookVersion", options);
	}
	public readonly Arn: string;
	public readonly IsDefaultVersion: boolean;
	public readonly TypeArn: string;
	public readonly VersionId: string;
	public readonly Visibility: string;
}
export interface HookVersionComponentOutputs {
	readonly Arn: string;
	readonly IsDefaultVersion: boolean;
	readonly TypeArn: string;
	readonly VersionId: string;
	readonly Visibility: string;
}
export interface HookVersionComponentInputs {
	readonly SchemaHandlerPackage: string;
	readonly TypeName: string;
	readonly ExecutionRoleArn?: string | undefined;
	readonly LoggingConfig?: LoggingConfig | undefined;
	readonly LogicalId: string;
}
export class Macro extends CfnResource<MacroComponentInputs> implements MacroComponentOutputs {
	constructor(entity: ADKEntity, options: MacroComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::Macro", options);
	}
}
export interface MacroComponentOutputs {}
export interface MacroComponentInputs {
	readonly FunctionName: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly LogGroupName?: string | undefined;
	readonly LogRoleARN?: string | undefined;
	readonly LogicalId: string;
}
export class ModuleDefaultVersion
	extends CfnResource<ModuleDefaultVersionComponentInputs>
	implements ModuleDefaultVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: ModuleDefaultVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::ModuleDefaultVersion", options);
	}
}
export interface ModuleDefaultVersionComponentOutputs {}
export interface ModuleDefaultVersionComponentInputs {
	readonly Arn?: string | undefined;
	readonly ModuleName?: string | undefined;
	readonly VersionId?: string | undefined;
	readonly LogicalId: string;
}
export class ModuleVersion extends CfnResource<ModuleVersionComponentInputs> implements ModuleVersionComponentOutputs {
	constructor(entity: ADKEntity, options: ModuleVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::ModuleVersion", options);
	}
	public readonly Arn: string;
	public readonly Description: string;
	public readonly DocumentationUrl: string;
	public readonly IsDefaultVersion: boolean;
	public readonly Schema: string;
	public readonly TimeCreated: string;
	public readonly VersionId: string;
	public readonly Visibility: string;
}
export interface ModuleVersionComponentOutputs {
	readonly Arn: string;
	readonly Description: string;
	readonly DocumentationUrl: string;
	readonly IsDefaultVersion: boolean;
	readonly Schema: string;
	readonly TimeCreated: string;
	readonly VersionId: string;
	readonly Visibility: string;
}
export interface ModuleVersionComponentInputs {
	readonly ModuleName: string;
	readonly ModulePackage: string;
	readonly LogicalId: string;
}
export class PublicTypeVersion
	extends CfnResource<PublicTypeVersionComponentInputs>
	implements PublicTypeVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: PublicTypeVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::PublicTypeVersion", options);
	}
	public readonly PublicTypeArn: string;
	public readonly PublisherId: string;
	public readonly TypeVersionArn: string;
}
export interface PublicTypeVersionComponentOutputs {
	readonly PublicTypeArn: string;
	readonly PublisherId: string;
	readonly TypeVersionArn: string;
}
export interface PublicTypeVersionComponentInputs {
	readonly Arn?: string | undefined;
	readonly LogDeliveryBucket?: string | undefined;
	readonly PublicVersionNumber?: string | undefined;
	readonly Type?: string | undefined;
	readonly TypeName?: string | undefined;
	readonly LogicalId: string;
}
export class Publisher extends CfnResource<PublisherComponentInputs> implements PublisherComponentOutputs {
	constructor(entity: ADKEntity, options: PublisherComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::Publisher", options);
	}
	public readonly IdentityProvider: string;
	public readonly PublisherId: string;
	public readonly PublisherProfile: string;
	public readonly PublisherStatus: string;
}
export interface PublisherComponentOutputs {
	readonly IdentityProvider: string;
	readonly PublisherId: string;
	readonly PublisherProfile: string;
	readonly PublisherStatus: string;
}
export interface PublisherComponentInputs {
	readonly AcceptTermsAndConditions: boolean;
	readonly ConnectionArn?: string | undefined;
	readonly LogicalId: string;
}
export class ResourceDefaultVersion
	extends CfnResource<ResourceDefaultVersionComponentInputs>
	implements ResourceDefaultVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceDefaultVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::ResourceDefaultVersion", options);
	}
	public readonly Arn: string;
}
export interface ResourceDefaultVersionComponentOutputs {
	readonly Arn: string;
}
export interface ResourceDefaultVersionComponentInputs {
	readonly TypeName?: string | undefined;
	readonly TypeVersionArn?: string | undefined;
	readonly VersionId?: string | undefined;
	readonly LogicalId: string;
}
export class ResourceVersion
	extends CfnResource<ResourceVersionComponentInputs>
	implements ResourceVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::ResourceVersion", options);
	}
	public readonly Arn: string;
	public readonly IsDefaultVersion: boolean;
	public readonly ProvisioningType: string;
	public readonly TypeArn: string;
	public readonly VersionId: string;
	public readonly Visibility: string;
}
export interface ResourceVersionComponentOutputs {
	readonly Arn: string;
	readonly IsDefaultVersion: boolean;
	readonly ProvisioningType: string;
	readonly TypeArn: string;
	readonly VersionId: string;
	readonly Visibility: string;
}
export interface ResourceVersionComponentInputs {
	readonly SchemaHandlerPackage: string;
	readonly TypeName: string;
	readonly ExecutionRoleArn?: string | undefined;
	readonly LoggingConfig?: LoggingConfig | undefined;
	readonly LogicalId: string;
}
export class Stack extends CfnResource<StackComponentInputs> implements StackComponentOutputs {
	constructor(entity: ADKEntity, options: StackComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::Stack", options);
	}
}
export interface StackComponentOutputs {}
export interface StackComponentInputs {
	readonly TemplateURL: string;
	readonly NotificationARNs?: string[] | undefined;
	readonly Parameters?: { [key: string]: string } | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TimeoutInMinutes?: number | undefined;
	readonly LogicalId: string;
}
export class StackSet extends CfnResource<StackSetComponentInputs> implements StackSetComponentOutputs {
	constructor(entity: ADKEntity, options: StackSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::StackSet", options);
	}
	public readonly StackSetId: string;
}
export interface StackSetComponentOutputs {
	readonly StackSetId: string;
}
export interface StackSetComponentInputs {
	readonly PermissionModel: string;
	readonly StackSetName: string;
	readonly AdministrationRoleARN?: string | undefined;
	readonly AutoDeployment?: AutoDeployment | undefined;
	readonly CallAs?: string | undefined;
	readonly Capabilities?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly ExecutionRoleName?: string | undefined;
	readonly ManagedExecution?: ManagedExecution | undefined;
	readonly OperationPreferences?: OperationPreferences | undefined;
	readonly Parameters?: Parameter[] | undefined;
	readonly StackInstancesGroup?: StackInstances[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TemplateBody?: string | undefined;
	readonly TemplateURL?: string | undefined;
	readonly LogicalId: string;
}
export class TypeActivation extends CfnResource<TypeActivationComponentInputs> implements TypeActivationComponentOutputs {
	constructor(entity: ADKEntity, options: TypeActivationComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::TypeActivation", options);
	}
	public readonly Arn: string;
}
export interface TypeActivationComponentOutputs {
	readonly Arn: string;
}
export interface TypeActivationComponentInputs {
	readonly AutoUpdate?: boolean | undefined;
	readonly ExecutionRoleArn?: string | undefined;
	readonly LoggingConfig?: LoggingConfig | undefined;
	readonly MajorVersion?: string | undefined;
	readonly PublicTypeArn?: string | undefined;
	readonly PublisherId?: string | undefined;
	readonly Type?: string | undefined;
	readonly TypeName?: string | undefined;
	readonly TypeNameAlias?: string | undefined;
	readonly VersionBump?: string | undefined;
	readonly LogicalId: string;
}
export class WaitCondition extends CfnResource<WaitConditionComponentInputs> implements WaitConditionComponentOutputs {
	constructor(entity: ADKEntity, options: WaitConditionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::WaitCondition", options);
	}
	public readonly Data: any;
}
export interface WaitConditionComponentOutputs {
	readonly Data: any;
}
export interface WaitConditionComponentInputs {
	readonly Count?: number | undefined;
	readonly Handle?: string | undefined;
	readonly Timeout?: string | undefined;
	readonly LogicalId: string;
}
export class WaitConditionHandle
	extends CfnResource<WaitConditionHandleComponentInputs>
	implements WaitConditionHandleComponentOutputs
{
	constructor(entity: ADKEntity, options: WaitConditionHandleComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudFormation::WaitConditionHandle", options);
	}
}
export interface WaitConditionHandleComponentOutputs {}
export interface WaitConditionHandleComponentInputs {
	readonly LogicalId: string;
}
export interface LoggingConfig {
	readonly LogGroupName?: string | undefined;
	readonly LogRoleArn?: string | undefined;
}
export interface AutoDeployment {
	readonly Enabled?: boolean | undefined;
	readonly RetainStacksOnAccountRemoval?: boolean | undefined;
}
export interface DeploymentTargets {
	readonly AccountFilterType?: string | undefined;
	readonly Accounts?: string[] | undefined;
	readonly OrganizationalUnitIds?: string[] | undefined;
}
export interface ManagedExecution {
	readonly Active?: boolean | undefined;
}
export interface OperationPreferences {
	readonly FailureToleranceCount?: number | undefined;
	readonly FailureTolerancePercentage?: number | undefined;
	readonly MaxConcurrentCount?: number | undefined;
	readonly MaxConcurrentPercentage?: number | undefined;
	readonly RegionConcurrencyType?: string | undefined;
	readonly RegionOrder?: string[] | undefined;
}
export interface Parameter {
	readonly ParameterKey: string;
	readonly ParameterValue: string;
}
export interface StackInstances {
	readonly DeploymentTargets: DeploymentTargets;
	readonly ParameterOverrides?: Parameter[] | undefined;
	readonly Regions: string[];
}
export default {
	CustomResource: CustomResource,
	HookDefaultVersion: HookDefaultVersion,
	HookTypeConfig: HookTypeConfig,
	HookVersion: HookVersion,
	Macro: Macro,
	ModuleDefaultVersion: ModuleDefaultVersion,
	ModuleVersion: ModuleVersion,
	PublicTypeVersion: PublicTypeVersion,
	Publisher: Publisher,
	ResourceDefaultVersion: ResourceDefaultVersion,
	ResourceVersion: ResourceVersion,
	Stack: Stack,
	StackSet: StackSet,
	TypeActivation: TypeActivation,
	WaitCondition: WaitCondition,
	WaitConditionHandle: WaitConditionHandle,
};
