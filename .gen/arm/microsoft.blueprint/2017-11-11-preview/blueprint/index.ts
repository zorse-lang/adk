import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class blueprintAssignments
	extends ArmResource<blueprintAssignmentsComponentInputs>
	implements blueprintAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprintAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprintAssignments", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprintAssignments";
}
export interface blueprintAssignmentsComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprintAssignments";
}
export interface blueprintAssignmentsComponentInputs {
	readonly identity: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: AssignmentProperties;
}
export class blueprints extends ArmResource<blueprintsComponentInputs> implements blueprintsComponentOutputs {
	constructor(entity: ADKEntity, options: blueprintsComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints";
}
export interface blueprintsComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints";
}
export interface blueprintsComponentInputs {
	readonly name: string;
	readonly properties: BlueprintProperties;
}
export class blueprints_artifacts_policyAssignment
	extends ArmResource<blueprints_artifacts_policyAssignmentComponentInputs>
	implements blueprints_artifacts_policyAssignmentComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_artifacts_policyAssignmentComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/artifacts", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_policyAssignmentComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_policyAssignmentComponentInputs {
	readonly name: string;
	readonly kind: "policyAssignment";
	readonly properties: PolicyAssignmentArtifactProperties;
}
export class blueprints_artifacts_roleAssignment
	extends ArmResource<blueprints_artifacts_roleAssignmentComponentInputs>
	implements blueprints_artifacts_roleAssignmentComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_artifacts_roleAssignmentComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/artifacts", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_roleAssignmentComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_roleAssignmentComponentInputs {
	readonly name: string;
	readonly kind: "roleAssignment";
	readonly properties: RoleAssignmentArtifactProperties;
}
export class blueprints_artifacts_template
	extends ArmResource<blueprints_artifacts_templateComponentInputs>
	implements blueprints_artifacts_templateComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_artifacts_templateComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/artifacts", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_templateComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_templateComponentInputs {
	readonly name: string;
	readonly kind: "template";
	readonly properties: TemplateArtifactProperties;
}
export class blueprints_versions
	extends ArmResource<blueprints_versionsComponentInputs>
	implements blueprints_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions";
}
export interface blueprints_versionsComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/versions";
}
export interface blueprints_versionsComponentInputs {
	readonly name: string;
	readonly properties?: PublishedBlueprintProperties | undefined;
}
export class blueprints_versions_artifacts_policyAssignment
	extends ArmResource<blueprints_versions_artifacts_policyAssignmentComponentInputs>
	implements blueprints_versions_artifacts_policyAssignmentComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_versions_artifacts_policyAssignmentComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions/artifacts", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_policyAssignmentComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_policyAssignmentComponentInputs {
	readonly name: string;
	readonly kind: "policyAssignment";
	readonly properties?: PolicyAssignmentArtifactProperties | undefined;
}
export class blueprints_versions_artifacts_roleAssignment
	extends ArmResource<blueprints_versions_artifacts_roleAssignmentComponentInputs>
	implements blueprints_versions_artifacts_roleAssignmentComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_versions_artifacts_roleAssignmentComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions/artifacts", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_roleAssignmentComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_roleAssignmentComponentInputs {
	readonly name: string;
	readonly kind: "roleAssignment";
	readonly properties?: RoleAssignmentArtifactProperties | undefined;
}
export class blueprints_versions_artifacts_template
	extends ArmResource<blueprints_versions_artifacts_templateComponentInputs>
	implements blueprints_versions_artifacts_templateComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_versions_artifacts_templateComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions/artifacts", "2017-11-11-preview", options);
	}
	public readonly apiVersion: "2017-11-11-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_templateComponentOutputs {
	readonly apiVersion: "2017-11-11-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_templateComponentInputs {
	readonly name: string;
	readonly kind: "template";
	readonly properties?: TemplateArtifactProperties | undefined;
}
export interface AssignmentLockSettings {
	readonly mode?: ("AllResources" | "None") | undefined;
}
export interface AssignmentProperties {
	readonly blueprintId?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly locks?: AssignmentLockSettings | undefined;
	readonly parameters: ParameterValueCollection;
	readonly provisioningState?:
		| (
				| "canceled"
				| "cancelling"
				| "creating"
				| "deleting"
				| "deploying"
				| "failed"
				| "locking"
				| "succeeded"
				| "validating"
				| "waiting"
		  )
		| undefined;
	readonly resourceGroups: ResourceGroupValueCollection;
	readonly status?: AssignmentStatus | undefined;
}
export interface AssignmentStatus {
	readonly lastModified?: string | undefined;
	readonly timeCreated?: string | undefined;
}
export interface BlueprintProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly layout?: any | undefined;
	readonly parameters?: ParameterDefinitionCollection | undefined;
	readonly resourceGroups?: ResourceGroupDefinitionCollection | undefined;
	readonly status?: BlueprintStatus | undefined;
	readonly targetScope?: ("managementGroup" | "subscription") | undefined;
	readonly versions?: any | undefined;
}
export interface BlueprintStatus {
	readonly lastModified?: string | undefined;
	readonly timeCreated?: string | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "UserAssigned";
}
export interface ParameterDefinition {
	readonly allowedValues?: any[] | undefined;
	readonly defaultValue?: any | undefined;
	readonly metadata?: ParameterDefinitionMetadata | undefined;
	readonly type: "array" | "bool" | "int" | "object" | "secureObject" | "secureString" | "string";
}
export interface ParameterDefinitionCollection {
	readonly "[ key: string ]"?: ParameterDefinition | undefined;
}
export interface ParameterDefinitionMetadata {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly strongType?: string | undefined;
}
export interface ParameterValueBase {
	readonly description?: string | undefined;
}
export interface ParameterValueCollection {
	readonly "[ key: string ]"?: ParameterValueBase | undefined;
}
export interface PolicyAssignmentArtifactProperties {
	readonly dependsOn?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly parameters: ParameterValueCollection;
	readonly policyDefinitionId: string;
	readonly resourceGroup?: string | undefined;
}
export interface PublishedBlueprintProperties {
	readonly blueprintName?: string | undefined;
	readonly changeNotes?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly parameters?: ParameterDefinitionCollection | undefined;
	readonly resourceGroups?: ResourceGroupDefinitionCollection | undefined;
	readonly status?: BlueprintStatus | undefined;
	readonly targetScope?: ("managementGroup" | "subscription") | undefined;
}
export interface ResourceGroupDefinition {
	readonly dependsOn?: string[] | undefined;
	readonly location?: string | undefined;
	readonly metadata?: ParameterDefinitionMetadata | undefined;
	readonly name?: string | undefined;
}
export interface ResourceGroupDefinitionCollection {
	readonly "[ key: string ]"?: ResourceGroupDefinition | undefined;
}
export interface ResourceGroupValue {
	readonly location?: string | undefined;
	readonly name?: string | undefined;
}
export interface ResourceGroupValueCollection {
	readonly "[ key: string ]"?: ResourceGroupValue | undefined;
}
export interface RoleAssignmentArtifactProperties {
	readonly dependsOn?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly principalIds: any;
	readonly resourceGroup?: string | undefined;
	readonly roleDefinitionId: string;
}
export interface TemplateArtifactProperties {
	readonly dependsOn?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly parameters: ParameterValueCollection;
	readonly resourceGroup?: string | undefined;
	readonly template: any;
}
export type blueprints_artifacts =
	| blueprints_artifacts_policyAssignment
	| blueprints_artifacts_roleAssignment
	| blueprints_artifacts_template;
export type blueprints_versions_artifacts =
	| blueprints_versions_artifacts_policyAssignment
	| blueprints_versions_artifacts_roleAssignment
	| blueprints_versions_artifacts_template;
export default {
	blueprintAssignments: blueprintAssignments,
	blueprints: blueprints,
	"blueprints/artifacts/policyAssignment": blueprints_artifacts_policyAssignment,
	"blueprints/artifacts/roleAssignment": blueprints_artifacts_roleAssignment,
	"blueprints/artifacts/template": blueprints_artifacts_template,
	"blueprints/versions": blueprints_versions,
	"blueprints/versions/artifacts/policyAssignment": blueprints_versions_artifacts_policyAssignment,
	"blueprints/versions/artifacts/roleAssignment": blueprints_versions_artifacts_roleAssignment,
	"blueprints/versions/artifacts/template": blueprints_versions_artifacts_template,
};
