import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class extensions extends ArmResource<extensionsComponentInputs> implements extensionsComponentOutputs {
	constructor(entity: ADKEntity, options: extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/extensions", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentInputs {
	readonly identity?: Identity;
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export class sourceControlConfigurations
	extends ArmResource<sourceControlConfigurationsComponentInputs>
	implements sourceControlConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sourceControlConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.KubernetesConfiguration/sourceControlConfigurations",
			"2021-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: SourceControlConfigurationProperties;
	readonly systemData?: SystemData;
}
export interface ComplianceStatus {
	readonly complianceState?: "Compliant" | "Failed" | "Installed" | "Noncompliant" | "Pending";
	readonly lastConfigApplied?: string;
	readonly message?: string;
	readonly messageLevel?: "Error" | "Information" | "Warning";
}
export interface ConfigurationProtectedSettings {
	readonly [key: string]: string;
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
export interface HelmOperatorProperties {
	readonly chartValues?: string;
	readonly chartVersion?: string;
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
export interface SourceControlConfigurationProperties {
	readonly complianceStatus?: ComplianceStatus;
	readonly configurationProtectedSettings?: ConfigurationProtectedSettings;
	readonly enableHelmOperator?: boolean;
	readonly helmOperatorProperties?: HelmOperatorProperties;
	readonly operatorInstanceName?: string;
	readonly operatorNamespace?: string;
	readonly operatorParams?: string;
	readonly operatorScope?: "cluster" | "namespace";
	readonly operatorType?: "Flux";
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "Running" | "Succeeded";
	readonly repositoryPublicKey?: string;
	readonly repositoryUrl?: string;
	readonly sshKnownHostsContents?: string;
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
	sourceControlConfigurations: sourceControlConfigurations,
};
