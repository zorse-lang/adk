import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataPolicyManifests
	extends ArmResource<dataPolicyManifestsComponentInputs>
	implements dataPolicyManifestsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataPolicyManifestsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/dataPolicyManifests", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/dataPolicyManifests";
}
export interface dataPolicyManifestsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/dataPolicyManifests";
}
export interface dataPolicyManifestsComponentInputs {
	readonly name: string;
	readonly properties?: DataPolicyManifestProperties | undefined;
}
export class policyAssignments
	extends ArmResource<policyAssignmentsComponentInputs>
	implements policyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyAssignments", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties | undefined;
}
export class policyDefinitions
	extends ArmResource<policyDefinitionsComponentInputs>
	implements policyDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyDefinitions", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyDefinitionProperties | undefined;
}
export class policySetDefinitions
	extends ArmResource<policySetDefinitionsComponentInputs>
	implements policySetDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policySetDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policySetDefinitions", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policySetDefinitions";
}
export interface policySetDefinitionsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policySetDefinitions";
}
export interface policySetDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicySetDefinitionProperties | undefined;
}
export interface Alias {
	readonly defaultMetadata?: AliasPathMetadata | undefined;
	readonly defaultPath?: string | undefined;
	readonly defaultPattern?: AliasPattern | undefined;
	readonly name?: string | undefined;
	readonly paths?: AliasPath[] | undefined;
	readonly type?: ("Mask" | "NotSpecified") | undefined;
}
export interface AliasPath {
	readonly apiVersions?: string[] | undefined;
	readonly metadata?: AliasPathMetadata | undefined;
	readonly path?: string | undefined;
	readonly pattern?: AliasPattern | undefined;
}
export interface AliasPathMetadata {
	readonly attributes?: ("Modifiable" | "None") | undefined;
	readonly type?:
		| ("any" | "Array" | "Boolean" | "Integer" | "NotSpecified" | "Number" | "Object" | "String")
		| undefined;
}
export interface AliasPattern {
	readonly phrase?: string | undefined;
	readonly type?: "Extract" | undefined;
	readonly variable?: string | undefined;
}
export interface DataEffect {
	readonly detailsSchema?: any | undefined;
	readonly name?: string | undefined;
}
export interface DataManifestCustomResourceFunctionDefinition {
	readonly allowCustomProperties?: boolean | undefined;
	readonly defaultProperties?: string[] | undefined;
	readonly fullyQualifiedResourceType?: string | undefined;
	readonly name?: string | undefined;
}
export interface DataManifestResourceFunctionsDefinition {
	readonly custom?: DataManifestCustomResourceFunctionDefinition[] | undefined;
	readonly standard?: string[] | undefined;
}
export interface DataPolicyManifestProperties {
	readonly effects?: DataEffect[] | undefined;
	readonly fieldValues?: string[] | undefined;
	readonly isBuiltInOnly?: boolean | undefined;
	readonly namespaces?: string[] | undefined;
	readonly policyMode?: string | undefined;
	readonly resourceFunctions?: DataManifestResourceFunctionsDefinition | undefined;
	readonly resourceTypeAliases?: ResourceTypeAliases[] | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "None" | undefined;
}
export interface NonComplianceMessage {
	readonly message: string;
	readonly policyDefinitionReferenceId?: string | undefined;
}
export interface ParameterDefinitions {
	readonly "[ key: string ]"?: ParameterDefinitionsValue | undefined;
}
export interface ParameterDefinitionsValue {
	readonly allowedValues?: any[] | undefined;
	readonly defaultValue?: any | undefined;
	readonly metadata?: ParameterDefinitionsValueMetadata | undefined;
	readonly type?: ("Array" | "Boolean" | "DateTime" | "Float" | "Integer" | "Object" | "String") | undefined;
}
export interface ParameterDefinitionsValueMetadata {
	readonly assignPermissions?: boolean | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly strongType?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ParameterValues {
	readonly "[ key: string ]"?: ParameterValuesValue | undefined;
}
export interface ParameterValuesValue {
	readonly value?: any | undefined;
}
export interface PolicyAssignmentProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enforcementMode?: ("Default" | "DoNotEnforce") | undefined;
	readonly metadata?: any | undefined;
	readonly nonComplianceMessages?: NonComplianceMessage[] | undefined;
	readonly notScopes?: string[] | undefined;
	readonly parameters?: ParameterValues | undefined;
	readonly policyDefinitionId?: string | undefined;
	readonly scope?: string | undefined;
}
export interface PolicyDefinitionGroup {
	readonly additionalMetadataId?: string | undefined;
	readonly category?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
}
export interface PolicyDefinitionProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly metadata?: any | undefined;
	readonly mode?: string | undefined;
	readonly parameters?: ParameterDefinitions | undefined;
	readonly policyRule?: any | undefined;
	readonly policyType?: ("BuiltIn" | "Custom" | "NotSpecified" | "Static") | undefined;
}
export interface PolicyDefinitionReference {
	readonly groupNames?: string[] | undefined;
	readonly parameters?: ParameterValues | undefined;
	readonly policyDefinitionId: string;
	readonly policyDefinitionReferenceId?: string | undefined;
}
export interface PolicySetDefinitionProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly metadata?: any | undefined;
	readonly parameters?: ParameterDefinitions | undefined;
	readonly policyDefinitionGroups?: PolicyDefinitionGroup[] | undefined;
	readonly policyDefinitions: PolicyDefinitionReference[];
	readonly policyType?: ("BuiltIn" | "Custom" | "NotSpecified" | "Static") | undefined;
}
export interface ResourceTypeAliases {
	readonly aliases?: Alias[] | undefined;
	readonly resourceType?: string | undefined;
}
export default {
	dataPolicyManifests: dataPolicyManifests,
	policyAssignments: policyAssignments,
	policyDefinitions: policyDefinitions,
	policySetDefinitions: policySetDefinitions,
};
