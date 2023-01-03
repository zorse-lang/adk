import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class blueprintAssignments
	extends ArmResource<blueprintAssignmentsComponentInputs>
	implements blueprintAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprintAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprintAssignments", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprintAssignments";
}
export interface blueprintAssignmentsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprintAssignments";
}
export interface blueprintAssignmentsComponentInputs {
	readonly identity: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: AssignmentProperties;
}
export class blueprintAssignments_assignmentOperations
	extends ArmResource<blueprintAssignments_assignmentOperationsComponentInputs>
	implements blueprintAssignments_assignmentOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprintAssignments_assignmentOperationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Blueprint/blueprintAssignments/assignmentOperations",
			"2018-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprintAssignments/assignmentOperations";
}
export interface blueprintAssignments_assignmentOperationsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprintAssignments/assignmentOperations";
}
export interface blueprintAssignments_assignmentOperationsComponentInputs {
	readonly name: string;
	readonly properties?: AssignmentOperationProperties | undefined;
}
export class blueprints extends ArmResource<blueprintsComponentInputs> implements blueprintsComponentOutputs {
	constructor(entity: ADKEntity, options: blueprintsComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints";
}
export interface blueprintsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
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
		super(entity, options.name, "Microsoft.Blueprint/blueprints/artifacts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_policyAssignmentComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
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
		super(entity, options.name, "Microsoft.Blueprint/blueprints/artifacts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_roleAssignmentComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
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
		super(entity, options.name, "Microsoft.Blueprint/blueprints/artifacts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/artifacts";
}
export interface blueprints_artifacts_templateComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
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
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions";
}
export interface blueprints_versionsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/versions";
}
export interface blueprints_versionsComponentInputs {
	readonly name: string;
	readonly properties: PublishedBlueprintProperties;
}
export class blueprints_versions_artifacts_policyAssignment
	extends ArmResource<blueprints_versions_artifacts_policyAssignmentComponentInputs>
	implements blueprints_versions_artifacts_policyAssignmentComponentOutputs
{
	constructor(entity: ADKEntity, options: blueprints_versions_artifacts_policyAssignmentComponentInputs) {
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions/artifacts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_policyAssignmentComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
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
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions/artifacts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_roleAssignmentComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
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
		super(entity, options.name, "Microsoft.Blueprint/blueprints/versions/artifacts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_templateComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Blueprint/blueprints/versions/artifacts";
}
export interface blueprints_versions_artifacts_templateComponentInputs {
	readonly name: string;
	readonly kind: "template";
	readonly properties?: TemplateArtifactProperties | undefined;
}
export interface AssignmentDeploymentJob {
	readonly action?: string | undefined;
	readonly history?: AssignmentDeploymentJobResult[] | undefined;
	readonly jobId?: string | undefined;
	readonly jobState?: string | undefined;
	readonly kind?: string | undefined;
	readonly requestUri?: string | undefined;
	readonly result?: AssignmentDeploymentJobResult | undefined;
}
export interface AssignmentDeploymentJobResult {
	readonly error?: AzureResourceManagerError | undefined;
	readonly resources?: AssignmentJobCreatedResource[] | undefined;
}
export interface AssignmentJobCreatedResource {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AssignmentJobCreatedResourceProperties | undefined;
	readonly type?: string | undefined;
}
export interface AssignmentJobCreatedResourceProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AssignmentLockSettings {
	readonly excludedActions?: string[] | undefined;
	readonly excludedPrincipals?: string[] | undefined;
	readonly mode?: ("AllResourcesDoNotDelete" | "AllResourcesReadOnly" | "None") | undefined;
}
export interface AssignmentOperationProperties {
	readonly assignmentState?: string | undefined;
	readonly blueprintVersion?: string | undefined;
	readonly deployments?: AssignmentDeploymentJob[] | undefined;
	readonly timeCreated?: string | undefined;
	readonly timeFinished?: string | undefined;
	readonly timeStarted?: string | undefined;
}
export interface AssignmentProperties {
	readonly blueprintId?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly locks?: AssignmentLockSettings | undefined;
	readonly parameters: AssignmentPropertiesParameters;
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
	readonly resourceGroups: AssignmentPropertiesResourceGroups;
	readonly scope?: string | undefined;
	readonly status?: AssignmentStatus | undefined;
}
export interface AssignmentPropertiesParameters {
	readonly "[ key: string ]"?: ParameterValue | undefined;
}
export interface AssignmentPropertiesResourceGroups {
	readonly "[ key: string ]"?: ResourceGroupValue | undefined;
}
export interface AssignmentStatus {
	readonly lastModified?: string | undefined;
	readonly managedResources?: string[] | undefined;
	readonly timeCreated?: string | undefined;
}
export interface AzureResourceManagerError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface BlueprintProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly layout?: any | undefined;
	readonly parameters?: SharedBlueprintPropertiesParameters | undefined;
	readonly resourceGroups?: SharedBlueprintPropertiesResourceGroups | undefined;
	readonly status?: BlueprintStatus | undefined;
	readonly targetScope?: ("managementGroup" | "subscription") | undefined;
	readonly versions?: any | undefined;
}
export interface BlueprintStatus {
	readonly lastModified?: string | undefined;
	readonly timeCreated?: string | undefined;
}
export interface KeyVaultReference {
	readonly id: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface ParameterDefinition {
	readonly allowedValues?: any[] | undefined;
	readonly defaultValue?: any | undefined;
	readonly metadata?: ParameterDefinitionMetadata | undefined;
	readonly type: "array" | "bool" | "int" | "object" | "secureObject" | "secureString" | "string";
}
export interface ParameterDefinitionMetadata {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly strongType?: string | undefined;
}
export interface ParameterValue {
	readonly reference?: SecretValueReference | undefined;
	readonly value?: any | undefined;
}
export interface PolicyAssignmentArtifactProperties {
	readonly dependsOn?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly parameters: PolicyAssignmentArtifactPropertiesParameters;
	readonly policyDefinitionId: string;
	readonly resourceGroup?: string | undefined;
}
export interface PolicyAssignmentArtifactPropertiesParameters {
	readonly "[ key: string ]"?: ParameterValue | undefined;
}
export interface PublishedBlueprintProperties {
	readonly blueprintName?: string | undefined;
	readonly changeNotes?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly parameters?: SharedBlueprintPropertiesParameters | undefined;
	readonly resourceGroups?: SharedBlueprintPropertiesResourceGroups | undefined;
	readonly status?: BlueprintStatus | undefined;
	readonly targetScope?: ("managementGroup" | "subscription") | undefined;
}
export interface ResourceGroupDefinition {
	readonly dependsOn?: string[] | undefined;
	readonly location?: string | undefined;
	readonly metadata?: ParameterDefinitionMetadata | undefined;
	readonly name?: string | undefined;
	readonly tags?: ResourceGroupDefinitionTags | undefined;
}
export interface ResourceGroupDefinitionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceGroupValue {
	readonly location?: string | undefined;
	readonly name?: string | undefined;
}
export interface RoleAssignmentArtifactProperties {
	readonly dependsOn?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly principalIds: any;
	readonly resourceGroup?: string | undefined;
	readonly roleDefinitionId: string;
}
export interface SecretValueReference {
	readonly keyVault: KeyVaultReference;
	readonly secretName: string;
	readonly secretVersion?: string | undefined;
}
export interface SharedBlueprintPropertiesParameters {
	readonly "[ key: string ]"?: ParameterDefinition | undefined;
}
export interface SharedBlueprintPropertiesResourceGroups {
	readonly "[ key: string ]"?: ResourceGroupDefinition | undefined;
}
export interface TemplateArtifactProperties {
	readonly dependsOn?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly parameters: TemplateArtifactPropertiesParameters;
	readonly resourceGroup?: string | undefined;
	readonly template: any;
}
export interface TemplateArtifactPropertiesParameters {
	readonly "[ key: string ]"?: ParameterValue | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
	"blueprintAssignments/assignmentOperations": blueprintAssignments_assignmentOperations,
	blueprints: blueprints,
	"blueprints/artifacts/policyAssignment": blueprints_artifacts_policyAssignment,
	"blueprints/artifacts/roleAssignment": blueprints_artifacts_roleAssignment,
	"blueprints/artifacts/template": blueprints_artifacts_template,
	"blueprints/versions": blueprints_versions,
	"blueprints/versions/artifacts/policyAssignment": blueprints_versions_artifacts_policyAssignment,
	"blueprints/versions/artifacts/roleAssignment": blueprints_versions_artifacts_roleAssignment,
	"blueprints/versions/artifacts/template": blueprints_versions_artifacts_template,
};
