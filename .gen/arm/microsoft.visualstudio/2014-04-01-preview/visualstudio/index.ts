import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class account extends ArmResource<accountComponentInputs> implements accountComponentOutputs {
	constructor(entity: ADKEntity, options: accountComponentInputs) {
		super(entity, options.name, "microsoft.visualstudio/account", "2014-04-01-preview", options);
	}
	public readonly apiVersion: "2014-04-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.visualstudio/account";
}
export interface accountComponentOutputs {
	readonly apiVersion: "2014-04-01-preview";
	readonly id: string;
	readonly type: "microsoft.visualstudio/account";
}
export interface accountComponentInputs {
	readonly accountName?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly operationType?: ("create" | "link" | "unknown") | undefined;
	readonly properties?: AccountResourceRequestProperties | undefined;
	readonly tags?: AccountResourceRequestTags | undefined;
}
export class account_extension
	extends ArmResource<account_extensionComponentInputs>
	implements account_extensionComponentOutputs
{
	constructor(entity: ADKEntity, options: account_extensionComponentInputs) {
		super(entity, options.name, "microsoft.visualstudio/account/extension", "2014-04-01-preview", options);
	}
	public readonly apiVersion: "2014-04-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.visualstudio/account/extension";
}
export interface account_extensionComponentOutputs {
	readonly apiVersion: "2014-04-01-preview";
	readonly id: string;
	readonly type: "microsoft.visualstudio/account/extension";
}
export interface account_extensionComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly plan?: ExtensionResourcePlan | undefined;
	readonly properties?: ExtensionResourceRequestProperties | undefined;
	readonly tags?: ExtensionResourceRequestTags | undefined;
}
export class account_project
	extends ArmResource<account_projectComponentInputs>
	implements account_projectComponentOutputs
{
	constructor(entity: ADKEntity, options: account_projectComponentInputs) {
		super(entity, options.name, "microsoft.visualstudio/account/project", "2014-04-01-preview", options);
	}
	public readonly apiVersion: "2014-04-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.visualstudio/account/project";
}
export interface account_projectComponentOutputs {
	readonly apiVersion: "2014-04-01-preview";
	readonly id: string;
	readonly type: "microsoft.visualstudio/account/project";
}
export interface account_projectComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectResourceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AccountResourceRequestProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AccountResourceRequestTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionResourcePlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
	readonly version?: string | undefined;
}
export interface ExtensionResourceRequestProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionResourceRequestTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ProjectResourceProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	account: account,
	"account/extension": account_extension,
	"account/project": account_project,
};
