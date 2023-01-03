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
	readonly properties?: ExtensionInstanceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SourceControlConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ComplianceStatus {
	readonly complianceState?: ("Compliant" | "Failed" | "Installed" | "Noncompliant" | "Pending") | undefined;
	readonly lastConfigApplied?: string | undefined;
	readonly message?: string | undefined;
	readonly messageLevel?: ("Error" | "Information" | "Warning") | undefined;
}
export interface ConfigurationIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "None" | undefined;
}
export interface ConfigurationProtectedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ConfigurationSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ErrorDefinition {
	readonly code: string;
	readonly message: string;
}
export interface ExtensionInstanceProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly configurationProtectedSettings?: ExtensionProtectedSettings | undefined;
	readonly configurationSettings?: ConfigurationSettings | undefined;
	readonly creationTime?: string | undefined;
	readonly errorInfo?: ErrorDefinition | undefined;
	readonly extensionType?: string | undefined;
	readonly identity?: ConfigurationIdentity | undefined;
	readonly installState?: ("Failed" | "Installed" | "Pending") | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly lastStatusTime?: string | undefined;
	readonly releaseTrain?: string | undefined;
	readonly scope?: Scope | undefined;
	readonly statuses?: ExtensionStatus[] | undefined;
	readonly version?: string | undefined;
}
export interface ExtensionProtectedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Information" | "Warning") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface HelmOperatorProperties {
	readonly chartValues?: string | undefined;
	readonly chartVersion?: string | undefined;
}
export interface Scope {
	readonly cluster?: ScopeCluster | undefined;
	readonly namespace?: ScopeNamespace | undefined;
}
export interface ScopeCluster {
	readonly releaseNamespace?: string | undefined;
}
export interface ScopeNamespace {
	readonly targetNamespace?: string | undefined;
}
export interface SourceControlConfigurationProperties {
	readonly complianceStatus?: ComplianceStatus | undefined;
	readonly configurationProtectedSettings?: ConfigurationProtectedSettings | undefined;
	readonly enableHelmOperator?: boolean | undefined;
	readonly helmOperatorProperties?: HelmOperatorProperties | undefined;
	readonly operatorInstanceName?: string | undefined;
	readonly operatorNamespace?: string | undefined;
	readonly operatorParams?: string | undefined;
	readonly operatorScope?: ("cluster" | "namespace") | undefined;
	readonly operatorType?: "Flux" | undefined;
	readonly provisioningState?: ("Accepted" | "Deleting" | "Failed" | "Running" | "Succeeded") | undefined;
	readonly repositoryPublicKey?: string | undefined;
	readonly repositoryUrl?: string | undefined;
	readonly sshKnownHostsContents?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: string | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: string | undefined;
}
export default {
	extensions: extensions,
	sourceControlConfigurations: sourceControlConfigurations,
};
