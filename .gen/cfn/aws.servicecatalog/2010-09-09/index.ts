import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AcceptedPortfolioShare
	extends CfnResource<AcceptedPortfolioShareComponentInputs>
	implements AcceptedPortfolioShareComponentOutputs
{
	constructor(entity: ADKEntity, options: AcceptedPortfolioShareComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::AcceptedPortfolioShare", options);
	}
}
export interface AcceptedPortfolioShareComponentOutputs {}
export interface AcceptedPortfolioShareComponentInputs {
	readonly PortfolioId: string;
	readonly AcceptLanguage?: string | undefined;
	readonly LogicalId: string;
}
export class CloudFormationProduct
	extends CfnResource<CloudFormationProductComponentInputs>
	implements CloudFormationProductComponentOutputs
{
	constructor(entity: ADKEntity, options: CloudFormationProductComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::CloudFormationProduct", options);
	}
	public readonly ProductName: string;
	public readonly ProvisioningArtifactIds: string;
	public readonly ProvisioningArtifactNames: string;
}
export interface CloudFormationProductComponentOutputs {
	readonly ProductName: string;
	readonly ProvisioningArtifactIds: string;
	readonly ProvisioningArtifactNames: string;
}
export interface CloudFormationProductComponentInputs {
	readonly Name: string;
	readonly Owner: string;
	readonly ProvisioningArtifactParameters: ProvisioningArtifactProperties[];
	readonly AcceptLanguage?: string | undefined;
	readonly Description?: string | undefined;
	readonly Distributor?: string | undefined;
	readonly ReplaceProvisioningArtifacts?: boolean | undefined;
	readonly SupportDescription?: string | undefined;
	readonly SupportEmail?: string | undefined;
	readonly SupportUrl?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class CloudFormationProvisionedProduct
	extends CfnResource<CloudFormationProvisionedProductComponentInputs>
	implements CloudFormationProvisionedProductComponentOutputs
{
	constructor(entity: ADKEntity, options: CloudFormationProvisionedProductComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::CloudFormationProvisionedProduct", options);
	}
	public readonly CloudformationStackArn: string;
	public readonly Outputs: Map<string, string>;
	public readonly ProvisionedProductId: string;
	public readonly RecordId: string;
}
export interface CloudFormationProvisionedProductComponentOutputs {
	readonly CloudformationStackArn: string;
	readonly Outputs: Map<string, string>;
	readonly ProvisionedProductId: string;
	readonly RecordId: string;
}
export interface CloudFormationProvisionedProductComponentInputs {
	readonly AcceptLanguage?: string | undefined;
	readonly NotificationArns?: string[] | undefined;
	readonly PathId?: string | undefined;
	readonly PathName?: string | undefined;
	readonly ProductId?: string | undefined;
	readonly ProductName?: string | undefined;
	readonly ProvisionedProductName?: string | undefined;
	readonly ProvisioningArtifactId?: string | undefined;
	readonly ProvisioningArtifactName?: string | undefined;
	readonly ProvisioningParameters?: ProvisioningParameter[] | undefined;
	readonly ProvisioningPreferences?: ProvisioningPreferences | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LaunchNotificationConstraint
	extends CfnResource<LaunchNotificationConstraintComponentInputs>
	implements LaunchNotificationConstraintComponentOutputs
{
	constructor(entity: ADKEntity, options: LaunchNotificationConstraintComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::LaunchNotificationConstraint", options);
	}
}
export interface LaunchNotificationConstraintComponentOutputs {}
export interface LaunchNotificationConstraintComponentInputs {
	readonly NotificationArns: string[];
	readonly PortfolioId: string;
	readonly ProductId: string;
	readonly AcceptLanguage?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class LaunchRoleConstraint
	extends CfnResource<LaunchRoleConstraintComponentInputs>
	implements LaunchRoleConstraintComponentOutputs
{
	constructor(entity: ADKEntity, options: LaunchRoleConstraintComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::LaunchRoleConstraint", options);
	}
}
export interface LaunchRoleConstraintComponentOutputs {}
export interface LaunchRoleConstraintComponentInputs {
	readonly PortfolioId: string;
	readonly ProductId: string;
	readonly AcceptLanguage?: string | undefined;
	readonly Description?: string | undefined;
	readonly LocalRoleName?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly LogicalId: string;
}
export class LaunchTemplateConstraint
	extends CfnResource<LaunchTemplateConstraintComponentInputs>
	implements LaunchTemplateConstraintComponentOutputs
{
	constructor(entity: ADKEntity, options: LaunchTemplateConstraintComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::LaunchTemplateConstraint", options);
	}
}
export interface LaunchTemplateConstraintComponentOutputs {}
export interface LaunchTemplateConstraintComponentInputs {
	readonly PortfolioId: string;
	readonly ProductId: string;
	readonly Rules: string;
	readonly AcceptLanguage?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class Portfolio extends CfnResource<PortfolioComponentInputs> implements PortfolioComponentOutputs {
	constructor(entity: ADKEntity, options: PortfolioComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::Portfolio", options);
	}
	public readonly PortfolioName: string;
}
export interface PortfolioComponentOutputs {
	readonly PortfolioName: string;
}
export interface PortfolioComponentInputs {
	readonly DisplayName: string;
	readonly ProviderName: string;
	readonly AcceptLanguage?: string | undefined;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class PortfolioPrincipalAssociation
	extends CfnResource<PortfolioPrincipalAssociationComponentInputs>
	implements PortfolioPrincipalAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: PortfolioPrincipalAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::PortfolioPrincipalAssociation", options);
	}
}
export interface PortfolioPrincipalAssociationComponentOutputs {}
export interface PortfolioPrincipalAssociationComponentInputs {
	readonly PortfolioId: string;
	readonly PrincipalARN: string;
	readonly PrincipalType: string;
	readonly AcceptLanguage?: string | undefined;
	readonly LogicalId: string;
}
export class PortfolioProductAssociation
	extends CfnResource<PortfolioProductAssociationComponentInputs>
	implements PortfolioProductAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: PortfolioProductAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::PortfolioProductAssociation", options);
	}
}
export interface PortfolioProductAssociationComponentOutputs {}
export interface PortfolioProductAssociationComponentInputs {
	readonly PortfolioId: string;
	readonly ProductId: string;
	readonly AcceptLanguage?: string | undefined;
	readonly SourcePortfolioId?: string | undefined;
	readonly LogicalId: string;
}
export class PortfolioShare extends CfnResource<PortfolioShareComponentInputs> implements PortfolioShareComponentOutputs {
	constructor(entity: ADKEntity, options: PortfolioShareComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::PortfolioShare", options);
	}
}
export interface PortfolioShareComponentOutputs {}
export interface PortfolioShareComponentInputs {
	readonly AccountId: string;
	readonly PortfolioId: string;
	readonly AcceptLanguage?: string | undefined;
	readonly ShareTagOptions?: boolean | undefined;
	readonly LogicalId: string;
}
export class ResourceUpdateConstraint
	extends CfnResource<ResourceUpdateConstraintComponentInputs>
	implements ResourceUpdateConstraintComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceUpdateConstraintComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::ResourceUpdateConstraint", options);
	}
}
export interface ResourceUpdateConstraintComponentOutputs {}
export interface ResourceUpdateConstraintComponentInputs {
	readonly PortfolioId: string;
	readonly ProductId: string;
	readonly TagUpdateOnProvisionedProduct: string;
	readonly AcceptLanguage?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ServiceAction extends CfnResource<ServiceActionComponentInputs> implements ServiceActionComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceActionComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::ServiceAction", options);
	}
	public readonly Id: string;
}
export interface ServiceActionComponentOutputs {
	readonly Id: string;
}
export interface ServiceActionComponentInputs {
	readonly Definition: DefinitionParameter[];
	readonly DefinitionType: string;
	readonly Name: string;
	readonly AcceptLanguage?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ServiceActionAssociation
	extends CfnResource<ServiceActionAssociationComponentInputs>
	implements ServiceActionAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ServiceActionAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::ServiceActionAssociation", options);
	}
}
export interface ServiceActionAssociationComponentOutputs {}
export interface ServiceActionAssociationComponentInputs {
	readonly ProductId: string;
	readonly ProvisioningArtifactId: string;
	readonly ServiceActionId: string;
	readonly LogicalId: string;
}
export class StackSetConstraint
	extends CfnResource<StackSetConstraintComponentInputs>
	implements StackSetConstraintComponentOutputs
{
	constructor(entity: ADKEntity, options: StackSetConstraintComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::StackSetConstraint", options);
	}
}
export interface StackSetConstraintComponentOutputs {}
export interface StackSetConstraintComponentInputs {
	readonly AccountList: string[];
	readonly AdminRole: string;
	readonly Description: string;
	readonly ExecutionRole: string;
	readonly PortfolioId: string;
	readonly ProductId: string;
	readonly RegionList: string[];
	readonly StackInstanceControl: string;
	readonly AcceptLanguage?: string | undefined;
	readonly LogicalId: string;
}
export class TagOption extends CfnResource<TagOptionComponentInputs> implements TagOptionComponentOutputs {
	constructor(entity: ADKEntity, options: TagOptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::TagOption", options);
	}
}
export interface TagOptionComponentOutputs {}
export interface TagOptionComponentInputs {
	readonly Key: string;
	readonly Value: string;
	readonly Active?: boolean | undefined;
	readonly LogicalId: string;
}
export class TagOptionAssociation
	extends CfnResource<TagOptionAssociationComponentInputs>
	implements TagOptionAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: TagOptionAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceCatalog::TagOptionAssociation", options);
	}
}
export interface TagOptionAssociationComponentOutputs {}
export interface TagOptionAssociationComponentInputs {
	readonly ResourceId: string;
	readonly TagOptionId: string;
	readonly LogicalId: string;
}
export interface ProvisioningArtifactProperties {
	readonly Description?: string | undefined;
	readonly DisableTemplateValidation?: boolean | undefined;
	readonly Info: any;
	readonly Name?: string | undefined;
}
export interface ProvisioningParameter {
	readonly Key: string;
	readonly Value: string;
}
export interface ProvisioningPreferences {
	readonly StackSetAccounts?: string[] | undefined;
	readonly StackSetFailureToleranceCount?: number | undefined;
	readonly StackSetFailureTolerancePercentage?: number | undefined;
	readonly StackSetMaxConcurrencyCount?: number | undefined;
	readonly StackSetMaxConcurrencyPercentage?: number | undefined;
	readonly StackSetOperationType?: string | undefined;
	readonly StackSetRegions?: string[] | undefined;
}
export interface DefinitionParameter {
	readonly Key: string;
	readonly Value: string;
}
export default {
	AcceptedPortfolioShare: AcceptedPortfolioShare,
	CloudFormationProduct: CloudFormationProduct,
	CloudFormationProvisionedProduct: CloudFormationProvisionedProduct,
	LaunchNotificationConstraint: LaunchNotificationConstraint,
	LaunchRoleConstraint: LaunchRoleConstraint,
	LaunchTemplateConstraint: LaunchTemplateConstraint,
	Portfolio: Portfolio,
	PortfolioPrincipalAssociation: PortfolioPrincipalAssociation,
	PortfolioProductAssociation: PortfolioProductAssociation,
	PortfolioShare: PortfolioShare,
	ResourceUpdateConstraint: ResourceUpdateConstraint,
	ServiceAction: ServiceAction,
	ServiceActionAssociation: ServiceActionAssociation,
	StackSetConstraint: StackSetConstraint,
	TagOption: TagOption,
	TagOptionAssociation: TagOptionAssociation,
};
