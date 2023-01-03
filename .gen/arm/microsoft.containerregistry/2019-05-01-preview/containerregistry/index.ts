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
	readonly properties?: ScopeMapProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: TokenProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ActiveDirectoryObject {
	readonly objectId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ScopeMapProperties {
	readonly actions: string[];
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly type?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TokenCertificate {
	readonly encodedPemCertificate?: string | undefined;
	readonly expiry?: string | undefined;
	readonly name?: ("certificate1" | "certificate2") | undefined;
	readonly thumbprint?: string | undefined;
}
export interface TokenCredentialsProperties {
	readonly activeDirectoryObject?: ActiveDirectoryObject | undefined;
	readonly certificates?: TokenCertificate[] | undefined;
	readonly passwords?: TokenPassword[] | undefined;
}
export interface TokenPassword {
	readonly creationTime?: string | undefined;
	readonly expiry?: string | undefined;
	readonly name?: ("password1" | "password2") | undefined;
	readonly value?: string | undefined;
}
export interface TokenProperties {
	readonly creationDate?: string | undefined;
	readonly credentials?: TokenCredentialsProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scopeMapId?: string | undefined;
	readonly status?: ("disabled" | "enabled") | undefined;
}
export default {
	"registries/scopeMaps": registries_scopeMaps,
	"registries/tokens": registries_tokens,
};
