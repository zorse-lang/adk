import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class components_linkedStorageAccounts
	extends ArmResource<components_linkedStorageAccountsComponentInputs>
	implements components_linkedStorageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: components_linkedStorageAccountsComponentInputs) {
		super(entity, options.name, "microsoft.insights/components/linkedStorageAccounts", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/components/linkedStorageAccounts";
}
export interface components_linkedStorageAccountsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "microsoft.insights/components/linkedStorageAccounts";
}
export interface components_linkedStorageAccountsComponentInputs {
	readonly name: string;
	readonly properties?: LinkedStorageAccountsProperties;
}
export interface LinkedStorageAccountsProperties {
	readonly linkedStorageAccount?: string;
}
export default {
	"components/linkedStorageAccounts": components_linkedStorageAccounts,
};
