import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class ManagementAssociations
	extends ArmResource<ManagementAssociationsComponentInputs>
	implements ManagementAssociationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ManagementAssociationsComponentInputs) {
		super(entity, options.name, "Microsoft.OperationsManagement/ManagementAssociations", "2015-11-01-preview", options);
	}
	public readonly apiVersion: "2015-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationsManagement/ManagementAssociations";
}
export interface ManagementAssociationsComponentOutputs {
	readonly apiVersion: "2015-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationsManagement/ManagementAssociations";
}
export interface ManagementAssociationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagementAssociationProperties;
}
export class ManagementConfigurations
	extends ArmResource<ManagementConfigurationsComponentInputs>
	implements ManagementConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ManagementConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.OperationsManagement/ManagementConfigurations",
			"2015-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationsManagement/ManagementConfigurations";
}
export interface ManagementConfigurationsComponentOutputs {
	readonly apiVersion: "2015-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationsManagement/ManagementConfigurations";
}
export interface ManagementConfigurationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagementConfigurationProperties;
}
export class solutions extends ArmResource<solutionsComponentInputs> implements solutionsComponentOutputs {
	constructor(entity: ADKEntity, options: solutionsComponentInputs) {
		super(entity, options.name, "Microsoft.OperationsManagement/solutions", "2015-11-01-preview", options);
	}
	public readonly apiVersion: "2015-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationsManagement/solutions";
}
export interface solutionsComponentOutputs {
	readonly apiVersion: "2015-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationsManagement/solutions";
}
export interface solutionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly plan?: SolutionPlan;
	readonly properties?: SolutionProperties;
	readonly tags?: SolutionTags;
}
export interface ArmTemplateParameter {
	readonly name?: string;
	readonly value?: string;
}
export interface ManagementAssociationProperties {
	readonly applicationId: string;
}
export interface ManagementConfigurationProperties {
	readonly applicationId?: string;
	readonly parameters: ArmTemplateParameter[];
	readonly parentResourceType: string;
	readonly provisioningState?: string;
	readonly template: any;
}
export interface SolutionPlan {
	readonly name?: string;
	readonly product?: string;
	readonly promotionCode?: string;
	readonly publisher?: string;
}
export interface SolutionProperties {
	readonly containedResources?: string[];
	readonly provisioningState?: string;
	readonly referencedResources?: string[];
	readonly workspaceResourceId: string;
}
export interface SolutionTags {
	readonly [key: string]: string;
}
export default {
	ManagementAssociations: ManagementAssociations,
	ManagementConfigurations: ManagementConfigurations,
	solutions: solutions,
};
