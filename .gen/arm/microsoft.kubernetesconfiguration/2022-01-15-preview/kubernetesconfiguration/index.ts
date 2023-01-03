import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class extensionTypes extends ArmResource<extensionTypesComponentInputs> implements extensionTypesComponentOutputs {
	constructor(entity: ADKEntity, options: extensionTypesComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/extensionTypes", "2022-01-15-preview", options);
	}
	public readonly apiVersion: "2022-01-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/extensionTypes";
}
export interface extensionTypesComponentOutputs {
	readonly apiVersion: "2022-01-15-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/extensionTypes";
}
export interface extensionTypesComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionTypeProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ClusterScopeSettings {
	readonly allowMultipleInstances?: boolean | undefined;
	readonly defaultReleaseNamespace?: string | undefined;
}
export interface ExtensionTypeProperties {
	readonly clusterTypes?: string[] | undefined;
	readonly releaseTrains?: string[] | undefined;
	readonly supportedScopes?: SupportedScopes | undefined;
}
export interface SupportedScopes {
	readonly clusterScopeSettings?: ClusterScopeSettings | undefined;
	readonly defaultScope?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	extensionTypes: extensionTypes,
};
