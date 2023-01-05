import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class extensions extends ArmResource<extensionsComponentInputs> implements extensionsComponentOutputs {
	constructor(entity: ADKEntity, options: extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/extensions", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionInstanceProperties;
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
			"2020-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
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
export interface ConfigurationIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None";
}
export interface ConfigurationProtectedSettings {
	readonly [key: string]: string;
}
export interface ConfigurationSettings {
	readonly [key: string]: string;
}
export interface ErrorDefinition {
	readonly code: string;
	readonly message: string;
}
export interface ExtensionInstanceProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly configurationProtectedSettings?: ExtensionProtectedSettings;
	readonly configurationSettings?: ConfigurationSettings;
	readonly creationTime?: string;
	readonly errorInfo?: ErrorDefinition;
	readonly extensionType?: string;
	readonly identity?: ConfigurationIdentity;
	readonly installState?: "Failed" | "Installed" | "Pending";
	readonly lastModifiedTime?: string;
	readonly lastStatusTime?: string;
	readonly releaseTrain?: string;
	readonly scope?: Scope;
	readonly statuses?: ExtensionStatus[];
	readonly version?: string;
}
export interface ExtensionProtectedSettings {
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
	readonly createdByType?: string;
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: string;
}
export default {
	extensions: extensions,
	sourceControlConfigurations: sourceControlConfigurations,
};
