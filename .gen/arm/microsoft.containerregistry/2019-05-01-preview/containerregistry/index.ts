import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries_scopeMaps
	extends ArmResource<registries_scopeMapsComponentInputs>
	implements registries_scopeMapsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_scopeMapsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/scopeMaps", "2019-05-01-preview", options);
	}
	public readonly apiVersion: "2019-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/scopeMaps";
}
export interface registries_scopeMapsComponentOutputs {
	readonly apiVersion: "2019-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/scopeMaps";
}
export interface registries_scopeMapsComponentInputs {
	readonly name: string;
	readonly properties?: ScopeMapProperties;
	readonly systemData?: SystemData;
}
export class registries_tokens
	extends ArmResource<registries_tokensComponentInputs>
	implements registries_tokensComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_tokensComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/tokens", "2019-05-01-preview", options);
	}
	public readonly apiVersion: "2019-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/tokens";
}
export interface registries_tokensComponentOutputs {
	readonly apiVersion: "2019-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/tokens";
}
export interface registries_tokensComponentInputs {
	readonly name: string;
	readonly properties?: TokenProperties;
	readonly systemData?: SystemData;
}
export interface ActiveDirectoryObject {
	readonly objectId?: string;
	readonly tenantId?: string;
}
export interface ScopeMapProperties {
	readonly actions: string[];
	readonly creationDate?: string;
	readonly description?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly type?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TokenCertificate {
	readonly encodedPemCertificate?: string;
	readonly expiry?: string;
	readonly name?: "certificate1" | "certificate2";
	readonly thumbprint?: string;
}
export interface TokenCredentialsProperties {
	readonly activeDirectoryObject?: ActiveDirectoryObject;
	readonly certificates?: TokenCertificate[];
	readonly passwords?: TokenPassword[];
}
export interface TokenPassword {
	readonly creationTime?: string;
	readonly expiry?: string;
	readonly name?: "password1" | "password2";
	readonly value?: string;
}
export interface TokenProperties {
	readonly creationDate?: string;
	readonly credentials?: TokenCredentialsProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly scopeMapId?: string;
	readonly status?: "disabled" | "enabled";
}
export default {
	"registries/scopeMaps": registries_scopeMaps,
	"registries/tokens": registries_tokens,
};
