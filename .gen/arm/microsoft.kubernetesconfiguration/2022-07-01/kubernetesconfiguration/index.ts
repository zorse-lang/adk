import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class extensions extends ArmResource<extensionsComponentInputs> implements extensionsComponentOutputs {
	constructor(entity: ADKEntity, options: extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/extensions", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly name: string;
	readonly properties?: ExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class fluxConfigurations
	extends ArmResource<fluxConfigurationsComponentInputs>
	implements fluxConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: fluxConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/fluxConfigurations", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/fluxConfigurations";
}
export interface fluxConfigurationsComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/fluxConfigurations";
}
export interface fluxConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: FluxConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class sourceControlConfigurations
	extends ArmResource<sourceControlConfigurationsComponentInputs>
	implements sourceControlConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sourceControlConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/sourceControlConfigurations", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: SourceControlConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AzureBlobDefinition {
	readonly accountKey?: string | undefined;
	readonly containerName?: string | undefined;
	readonly localAuthRef?: string | undefined;
	readonly managedIdentity?: ManagedIdentityDefinition | undefined;
	readonly sasToken?: string | undefined;
	readonly servicePrincipal?: ServicePrincipalDefinition | undefined;
	readonly syncIntervalInSeconds?: number | undefined;
	readonly timeoutInSeconds?: number | undefined;
	readonly url?: string | undefined;
}
export interface BucketDefinition {
	readonly accessKey?: string | undefined;
	readonly bucketName?: string | undefined;
	readonly insecure?: boolean | undefined;
	readonly localAuthRef?: string | undefined;
	readonly syncIntervalInSeconds?: number | undefined;
	readonly timeoutInSeconds?: number | undefined;
	readonly url?: string | undefined;
}
export interface ComplianceStatus {
	readonly complianceState?: ("Compliant" | "Failed" | "Installed" | "Noncompliant" | "Pending") | undefined;
	readonly lastConfigApplied?: string | undefined;
	readonly message?: string | undefined;
	readonly messageLevel?: ("Error" | "Information" | "Warning") | undefined;
}
export interface ConfigurationProtectedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ExtensionProperties {
	readonly aksAssignedIdentity?: ExtensionPropertiesAksAssignedIdentity | undefined;
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly configurationProtectedSettings?: ExtensionPropertiesConfigurationProtectedSettings | undefined;
	readonly configurationSettings?: ExtensionPropertiesConfigurationSettings | undefined;
	readonly customLocationSettings?: ExtensionPropertiesCustomLocationSettings | undefined;
	readonly errorInfo?: ErrorDetail | undefined;
	readonly extensionType?: string | undefined;
	readonly installedVersion?: string | undefined;
	readonly packageUri?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly releaseTrain?: string | undefined;
	readonly scope?: Scope | undefined;
	readonly statuses?: ExtensionStatus[] | undefined;
	readonly version?: string | undefined;
}
export interface ExtensionPropertiesAksAssignedIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface ExtensionPropertiesConfigurationProtectedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionPropertiesConfigurationSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionPropertiesCustomLocationSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Information" | "Warning") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface FluxConfigurationProperties {
	readonly azureBlob?: AzureBlobDefinition | undefined;
	readonly bucket?: BucketDefinition | undefined;
	readonly complianceState?: ("Compliant" | "Non-Compliant" | "Pending" | "Suspended" | "Unknown") | undefined;
	readonly configurationProtectedSettings?: FluxConfigurationPropertiesConfigurationProtectedSettings | undefined;
	readonly errorMessage?: string | undefined;
	readonly gitRepository?: GitRepositoryDefinition | undefined;
	readonly kustomizations?: FluxConfigurationPropertiesKustomizations | undefined;
	readonly namespace?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly repositoryPublicKey?: string | undefined;
	readonly scope?: ("cluster" | "namespace") | undefined;
	readonly sourceKind?: ("AzureBlob" | "Bucket" | "GitRepository") | undefined;
	readonly sourceSyncedCommitId?: string | undefined;
	readonly sourceUpdatedAt?: string | undefined;
	readonly statuses?: ObjectStatusDefinition[] | undefined;
	readonly statusUpdatedAt?: string | undefined;
	readonly suspend?: boolean | undefined;
}
export interface FluxConfigurationPropertiesConfigurationProtectedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface FluxConfigurationPropertiesKustomizations {
	readonly "[ key: string ]"?: KustomizationDefinition | undefined;
}
export interface GitRepositoryDefinition {
	readonly httpsCACert?: string | undefined;
	readonly httpsUser?: string | undefined;
	readonly localAuthRef?: string | undefined;
	readonly repositoryRef?: RepositoryRefDefinition | undefined;
	readonly sshKnownHosts?: string | undefined;
	readonly syncIntervalInSeconds?: number | undefined;
	readonly timeoutInSeconds?: number | undefined;
	readonly url?: string | undefined;
}
export interface HelmOperatorProperties {
	readonly chartValues?: string | undefined;
	readonly chartVersion?: string | undefined;
}
export interface HelmReleasePropertiesDefinition {
	readonly failureCount?: number | undefined;
	readonly helmChartRef?: ObjectReferenceDefinition | undefined;
	readonly installFailureCount?: number | undefined;
	readonly lastRevisionApplied?: number | undefined;
	readonly upgradeFailureCount?: number | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface KustomizationDefinition {
	readonly dependsOn?: string[] | undefined;
	readonly force?: boolean | undefined;
	readonly name?: string | undefined;
	readonly path?: string | undefined;
	readonly prune?: boolean | undefined;
	readonly retryIntervalInSeconds?: number | undefined;
	readonly syncIntervalInSeconds?: number | undefined;
	readonly timeoutInSeconds?: number | undefined;
}
export interface ManagedIdentityDefinition {
	readonly clientId?: string | undefined;
}
export interface ObjectReferenceDefinition {
	readonly name?: string | undefined;
	readonly namespace?: string | undefined;
}
export interface ObjectStatusConditionDefinition {
	readonly lastTransitionTime?: string | undefined;
	readonly message?: string | undefined;
	readonly reason?: string | undefined;
	readonly status?: string | undefined;
	readonly type?: string | undefined;
}
export interface ObjectStatusDefinition {
	readonly appliedBy?: ObjectReferenceDefinition | undefined;
	readonly complianceState?: ("Compliant" | "Non-Compliant" | "Pending" | "Suspended" | "Unknown") | undefined;
	readonly helmReleaseProperties?: HelmReleasePropertiesDefinition | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly namespace?: string | undefined;
	readonly statusConditions?: ObjectStatusConditionDefinition[] | undefined;
}
export interface RepositoryRefDefinition {
	readonly branch?: string | undefined;
	readonly commit?: string | undefined;
	readonly semver?: string | undefined;
	readonly tag?: string | undefined;
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
export interface ServicePrincipalDefinition {
	readonly clientCertificate?: string | undefined;
	readonly clientCertificatePassword?: string | undefined;
	readonly clientCertificateSendChain?: boolean | undefined;
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly tenantId?: string | undefined;
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
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	extensions: extensions,
	fluxConfigurations: fluxConfigurations,
	sourceControlConfigurations: sourceControlConfigurations,
};
