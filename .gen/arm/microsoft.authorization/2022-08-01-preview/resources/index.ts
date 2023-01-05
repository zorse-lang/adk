import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class variables extends ArmResource<variablesComponentInputs> implements variablesComponentOutputs {
	constructor(entity: ADKEntity, options: variablesComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/variables", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/variables";
}
export interface variablesComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/variables";
}
export interface variablesComponentInputs {
	readonly name: string;
	readonly properties: PolicyVariableProperties;
	readonly systemData?: SystemData;
}
export class variables_values
	extends ArmResource<variables_valuesComponentInputs>
	implements variables_valuesComponentOutputs
{
	constructor(entity: ADKEntity, options: variables_valuesComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/variables/values", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/variables/values";
}
export interface variables_valuesComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/variables/values";
}
export interface variables_valuesComponentInputs {
	readonly name: string;
	readonly properties: PolicyVariableValueProperties;
	readonly systemData?: SystemData;
}
export interface PolicyVariableColumn {
	readonly columnName: string;
}
export interface PolicyVariableProperties {
	readonly columns: PolicyVariableColumn[];
}
export interface PolicyVariableValueColumnValue {
	readonly columnName: string;
	readonly columnValue: any;
}
export interface PolicyVariableValueProperties {
	readonly values: PolicyVariableValueColumnValue[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	variables: variables,
	"variables/values": variables_values,
};
