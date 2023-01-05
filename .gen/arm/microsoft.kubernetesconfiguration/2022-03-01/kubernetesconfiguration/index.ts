import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class extensions extends ArmResource<extensionsComponentInputs> implements extensionsComponentOutputs {
	constructor(entity: ADKEntity, options: extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/extensions", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentInputs {
	readonly identity?: Identity;
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export class fluxConfigurations
	extends ArmResource<fluxConfigurationsComponentInputs>
	implements fluxConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: fluxConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/fluxConfigurations", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/fluxConfigurations";
}
export interface fluxConfigurationsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/fluxConfigurations";
}
export interface fluxConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: FluxConfigurationProperties;
	readonly systemData?: SystemData;
}
export class sourceControlConfigurations
	extends ArmResource<sourceControlConfigurationsComponentInputs>
	implements sourceControlConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sourceControlConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/sourceControlConfigurations", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: SourceControlConfigurationProperties;
	readonly systemData?: SystemData;
}
export interface BucketDefinition {
	readonly accessKey?: string;
	readonly bucketName?: string;
	readonly insecure?: boolean;
	readonly localAuthRef?: string;
	readonly syncIntervalInSeconds?: number;
	readonly timeoutInSeconds?: number;
	readonly url?: string;
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
	readonly aksAssignedIdentity?: ExtensionPropertiesAksAssignedIdentity;
	readonly autoUpgradeMinorVersion?: boolean;
	readonly configurationProtectedSettings?: ExtensionPropertiesConfigurationProtectedSettings;
	readonly configurationSettings?: ExtensionPropertiesConfigurationSettings;
	readonly customLocationSettings?: ExtensionPropertiesCustomLocationSettings;
	readonly errorInfo?: ErrorDetail;
	readonly extensionType?: string;
	readonly installedVersion?: string;
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
export interface FluxConfigurationProperties {
	readonly bucket?: BucketDefinition;
	readonly complianceState?: "Compliant" | "Non-Compliant" | "Pending" | "Suspended" | "Unknown";
	readonly configurationProtectedSettings?: FluxConfigurationPropertiesConfigurationProtectedSettings;
	readonly errorMessage?: string;
	readonly gitRepository?: GitRepositoryDefinition;
	readonly kustomizations?: FluxConfigurationPropertiesKustomizations;
	readonly namespace?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly repositoryPublicKey?: string;
	readonly scope?: "cluster" | "namespace";
	readonly sourceKind?: "Bucket" | "GitRepository";
	readonly sourceSyncedCommitId?: string;
	readonly sourceUpdatedAt?: string;
	readonly statuses?: ObjectStatusDefinition[];
	readonly statusUpdatedAt?: string;
	readonly suspend?: boolean;
}
export interface FluxConfigurationPropertiesConfigurationProtectedSettings {
	readonly [key: string]: string;
}
export interface FluxConfigurationPropertiesKustomizations {
	readonly [key: string]: KustomizationDefinition;
}
export interface GitRepositoryDefinition {
	readonly httpsCACert?: string;
	readonly httpsUser?: string;
	readonly localAuthRef?: string;
	readonly repositoryRef?: RepositoryRefDefinition;
	readonly sshKnownHosts?: string;
	readonly syncIntervalInSeconds?: number;
	readonly timeoutInSeconds?: number;
	readonly url?: string;
}
export interface HelmOperatorProperties {
	readonly chartValues?: string;
	readonly chartVersion?: string;
}
export interface HelmReleasePropertiesDefinition {
	readonly failureCount?: number;
	readonly helmChartRef?: ObjectReferenceDefinition;
	readonly installFailureCount?: number;
	readonly lastRevisionApplied?: number;
	readonly upgradeFailureCount?: number;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface KustomizationDefinition {
	readonly dependsOn?: string[];
	readonly force?: boolean;
	readonly name?: string;
	readonly path?: string;
	readonly prune?: boolean;
	readonly retryIntervalInSeconds?: number;
	readonly syncIntervalInSeconds?: number;
	readonly timeoutInSeconds?: number;
}
export interface ObjectReferenceDefinition {
	readonly name?: string;
	readonly namespace?: string;
}
export interface ObjectStatusConditionDefinition {
	readonly lastTransitionTime?: string;
	readonly message?: string;
	readonly reason?: string;
	readonly status?: string;
	readonly type?: string;
}
export interface ObjectStatusDefinition {
	readonly appliedBy?: ObjectReferenceDefinition;
	readonly complianceState?: "Compliant" | "Non-Compliant" | "Pending" | "Suspended" | "Unknown";
	readonly helmReleaseProperties?: HelmReleasePropertiesDefinition;
	readonly kind?: string;
	readonly name?: string;
	readonly namespace?: string;
	readonly statusConditions?: ObjectStatusConditionDefinition[];
}
export interface RepositoryRefDefinition {
	readonly branch?: string;
	readonly commit?: string;
	readonly semver?: string;
	readonly tag?: string;
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
	fluxConfigurations: fluxConfigurations,
	sourceControlConfigurations: sourceControlConfigurations,
};
