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
	readonly properties?: DataPolicyManifestProperties;
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
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties;
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
	readonly properties?: PolicyDefinitionProperties;
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
	readonly properties?: PolicySetDefinitionProperties;
}
export interface Alias {
	readonly defaultMetadata?: AliasPathMetadata;
	readonly defaultPath?: string;
	readonly defaultPattern?: AliasPattern;
	readonly name?: string;
	readonly paths?: AliasPath[];
	readonly type?: "Mask" | "NotSpecified";
}
export interface AliasPath {
	readonly apiVersions?: string[];
	readonly metadata?: AliasPathMetadata;
	readonly path?: string;
	readonly pattern?: AliasPattern;
}
export interface AliasPathMetadata {
	readonly attributes?: "Modifiable" | "None";
	readonly type?: "any" | "Array" | "Boolean" | "Integer" | "NotSpecified" | "Number" | "Object" | "String";
}
export interface AliasPattern {
	readonly phrase?: string;
	readonly type?: "Extract";
	readonly variable?: string;
}
export interface DataEffect {
	readonly detailsSchema?: any;
	readonly name?: string;
}
export interface DataManifestCustomResourceFunctionDefinition {
	readonly allowCustomProperties?: boolean;
	readonly defaultProperties?: string[];
	readonly fullyQualifiedResourceType?: string;
	readonly name?: string;
}
export interface DataManifestResourceFunctionsDefinition {
	readonly custom?: DataManifestCustomResourceFunctionDefinition[];
	readonly standard?: string[];
}
export interface DataPolicyManifestProperties {
	readonly effects?: DataEffect[];
	readonly fieldValues?: string[];
	readonly isBuiltInOnly?: boolean;
	readonly namespaces?: string[];
	readonly policyMode?: string;
	readonly resourceFunctions?: DataManifestResourceFunctionsDefinition;
	readonly resourceTypeAliases?: ResourceTypeAliases[];
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None";
}
export interface NonComplianceMessage {
	readonly message: string;
	readonly policyDefinitionReferenceId?: string;
}
export interface ParameterDefinitions {
	readonly [key: string]: ParameterDefinitionsValue;
}
export interface ParameterDefinitionsValue {
	readonly allowedValues?: any[];
	readonly defaultValue?: any;
	readonly metadata?: ParameterDefinitionsValueMetadata;
	readonly type?: "Array" | "Boolean" | "DateTime" | "Float" | "Integer" | "Object" | "String";
}
export interface ParameterDefinitionsValueMetadata {
	readonly assignPermissions?: boolean;
	readonly description?: string;
	readonly displayName?: string;
	readonly strongType?: string;
	readonly [key: string]: any;
}
export interface ParameterValues {
	readonly [key: string]: ParameterValuesValue;
}
export interface ParameterValuesValue {
	readonly value?: any;
}
export interface PolicyAssignmentProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly enforcementMode?: "Default" | "DoNotEnforce";
	readonly metadata?: any;
	readonly nonComplianceMessages?: NonComplianceMessage[];
	readonly notScopes?: string[];
	readonly parameters?: ParameterValues;
	readonly policyDefinitionId?: string;
	readonly scope?: string;
}
export interface PolicyDefinitionGroup {
	readonly additionalMetadataId?: string;
	readonly category?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly name: string;
}
export interface PolicyDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly mode?: string;
	readonly parameters?: ParameterDefinitions;
	readonly policyRule?: any;
	readonly policyType?: "BuiltIn" | "Custom" | "NotSpecified" | "Static";
}
export interface PolicyDefinitionReference {
	readonly groupNames?: string[];
	readonly parameters?: ParameterValues;
	readonly policyDefinitionId: string;
	readonly policyDefinitionReferenceId?: string;
}
export interface PolicySetDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly parameters?: ParameterDefinitions;
	readonly policyDefinitionGroups?: PolicyDefinitionGroup[];
	readonly policyDefinitions: PolicyDefinitionReference[];
	readonly policyType?: "BuiltIn" | "Custom" | "NotSpecified" | "Static";
}
export interface ResourceTypeAliases {
	readonly aliases?: Alias[];
	readonly resourceType?: string;
}
export default {
	dataPolicyManifests: dataPolicyManifests,
	policyAssignments: policyAssignments,
	policyDefinitions: policyDefinitions,
	policySetDefinitions: policySetDefinitions,
};
