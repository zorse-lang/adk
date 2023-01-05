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
	readonly properties?: ExtensionTypeProperties;
	readonly systemData?: SystemData;
}
export interface ClusterScopeSettings {
	readonly allowMultipleInstances?: boolean;
	readonly defaultReleaseNamespace?: string;
}
export interface ExtensionTypeProperties {
	readonly clusterTypes?: string[];
	readonly releaseTrains?: string[];
	readonly supportedScopes?: SupportedScopes;
}
export interface SupportedScopes {
	readonly clusterScopeSettings?: ClusterScopeSettings;
	readonly defaultScope?: string;
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
	extensionTypes: extensionTypes,
};
