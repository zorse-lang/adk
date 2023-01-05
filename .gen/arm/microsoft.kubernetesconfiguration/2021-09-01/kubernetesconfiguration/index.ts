import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class extensions extends ArmResource<extensionsComponentInputs> implements extensionsComponentOutputs {
	constructor(entity: ADKEntity, options: extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/extensions", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentInputs {
	readonly identity?: Identity;
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
	readonly target?: string;
}
export interface ExtensionProperties {
	readonly aksAssignedIdentity?: ExtensionPropertiesAksAssignedIdentity;
	readonly autoUpgradeMinorVersion?: boolean;
	readonly configurationProtectedSettings?: ExtensionPropertiesConfigurationProtectedSettings;
	readonly configurationSettings?: ExtensionPropertiesConfigurationSettings;
	readonly customLocationSettings?: ExtensionPropertiesCustomLocationSettings;
	readonly errorInfo?: ErrorDetail;
	readonly extensionType?: string;
	readonly packageUri?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly releaseTrain?: string;
	readonly scope?: Scope;
	readonly statuses?: ExtensionStatus[];
	readonly version?: string;
}
export interface ExtensionPropertiesAksAssignedIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface ExtensionPropertiesConfigurationProtectedSettings {
	readonly [key: string]: string;
}
export interface ExtensionPropertiesConfigurationSettings {
	readonly [key: string]: string;
}
export interface ExtensionPropertiesCustomLocationSettings {
	readonly [key: string]: string;
}
export interface ExtensionStatus {
	readonly code?: string;
	readonly displayStatus?: string;
	readonly level?: "Error" | "Information" | "Warning";
	readonly message?: string;
	readonly time?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface Scope {
	readonly cluster?: ScopeCluster;
	readonly namespace?: ScopeNamespace;
}
export interface ScopeCluster {
	readonly releaseNamespace?: string;
}
export interface ScopeNamespace {
	readonly targetNamespace?: string;
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
	extensions: extensions,
};
