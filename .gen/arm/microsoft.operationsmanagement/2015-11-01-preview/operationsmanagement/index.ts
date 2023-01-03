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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ManagementAssociationProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ManagementConfigurationProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly plan?: SolutionPlan | undefined;
	readonly properties?: SolutionProperties | undefined;
	readonly tags?: SolutionTags | undefined;
}
export interface ArmTemplateParameter {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ManagementAssociationProperties {
	readonly applicationId: string;
}
export interface ManagementConfigurationProperties {
	readonly applicationId?: string | undefined;
	readonly parameters: ArmTemplateParameter[];
	readonly parentResourceType: string;
	readonly provisioningState?: string | undefined;
	readonly template: any;
}
export interface SolutionPlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
}
export interface SolutionProperties {
	readonly containedResources?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly referencedResources?: string[] | undefined;
	readonly workspaceResourceId: string;
}
export interface SolutionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	ManagementAssociations: ManagementAssociations,
	ManagementConfigurations: ManagementConfigurations,
	solutions: solutions,
};
