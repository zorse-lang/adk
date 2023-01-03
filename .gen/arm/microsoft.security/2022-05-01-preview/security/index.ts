import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class securityConnectors
	extends ArmResource<securityConnectorsComponentInputs>
	implements securityConnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: securityConnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/securityConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/securityConnectors";
}
export interface securityConnectorsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/securityConnectors";
}
export interface securityConnectorsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityConnectorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export interface AwsOrganizationalData {}
export interface CloudOffering {
	readonly description?: string | undefined;
}
export interface CspmMonitorAwsOfferingNativeCloudConnection {
	readonly cloudRoleArn?: string | undefined;
}
export interface CspmMonitorGcpOfferingNativeCloudConnection {
	readonly serviceAccountEmailAddress?: string | undefined;
	readonly workloadIdentityProviderId?: string | undefined;
}
export interface DefenderFoDatabasesAwsOfferingArcAutoProvisioning {
	readonly cloudRoleArn?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly servicePrincipalSecretMetadata?:
		| DefenderFoDatabasesAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata
		| undefined;
}
export interface DefenderFoDatabasesAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata {
	readonly expiryDate?: string | undefined;
	readonly parameterNameInStore?: string | undefined;
	readonly parameterStoreRegion?: string | undefined;
}
export interface DefenderForContainersAwsOfferingCloudWatchToKinesis {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingContainerVulnerabilityAssessment {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingContainerVulnerabilityAssessmentTask {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingKinesisToS3 {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingKubernetesScubaReader {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingKubernetesService {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection {
	readonly serviceAccountEmailAddress?: string | undefined;
	readonly workloadIdentityProviderId?: string | undefined;
}
export interface DefenderForContainersGcpOfferingNativeCloudConnection {
	readonly serviceAccountEmailAddress?: string | undefined;
	readonly workloadIdentityProviderId?: string | undefined;
}
export interface DefenderForDatabasesGcpOfferingArcAutoProvisioning {
	readonly configuration?: DefenderForDatabasesGcpOfferingArcAutoProvisioningConfiguration | undefined;
	readonly enabled?: boolean | undefined;
}
export interface DefenderForDatabasesGcpOfferingArcAutoProvisioningConfiguration {
	readonly agentOnboardingServiceAccountNumericId?: string | undefined;
	readonly clientId?: string | undefined;
}
export interface DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioning {
	readonly serviceAccountEmailAddress?: string | undefined;
	readonly workloadIdentityProviderId?: string | undefined;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioning {
	readonly cloudRoleArn?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly servicePrincipalSecretMetadata?:
		| DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata
		| undefined;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata {
	readonly expiryDate?: string | undefined;
	readonly parameterNameInStore?: string | undefined;
	readonly parameterStoreRegion?: string | undefined;
}
export interface DefenderForServersAwsOfferingDefenderForServers {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForServersAwsOfferingMdeAutoProvisioning {
	readonly configuration?: any | undefined;
	readonly enabled?: boolean | undefined;
}
export interface DefenderForServersAwsOfferingSubPlan {
	readonly type?: ("P1" | "P2") | undefined;
}
export interface DefenderForServersAwsOfferingVaAutoProvisioning {
	readonly configuration?: DefenderForServersAwsOfferingVaAutoProvisioningConfiguration | undefined;
	readonly enabled?: boolean | undefined;
}
export interface DefenderForServersAwsOfferingVaAutoProvisioningConfiguration {
	readonly type?: ("Qualys" | "TVM") | undefined;
}
export interface DefenderForServersAwsOfferingVmScanners {
	readonly configuration?: DefenderForServersAwsOfferingVmScannersConfiguration | undefined;
	readonly enabled?: boolean | undefined;
}
export interface DefenderForServersAwsOfferingVmScannersConfiguration {
	readonly cloudRoleArn?: string | undefined;
	readonly exclusionTags?: any | undefined;
	readonly scanningMode?: "Default" | undefined;
}
export interface DefenderForServersGcpOfferingArcAutoProvisioning {
	readonly configuration?: DefenderForServersGcpOfferingArcAutoProvisioningConfiguration | undefined;
	readonly enabled?: boolean | undefined;
}
export interface DefenderForServersGcpOfferingArcAutoProvisioningConfiguration {
	readonly agentOnboardingServiceAccountNumericId?: string | undefined;
	readonly clientId?: string | undefined;
}
export interface DefenderForServersGcpOfferingDefenderForServers {
	readonly serviceAccountEmailAddress?: string | undefined;
	readonly workloadIdentityProviderId?: string | undefined;
}
export interface DefenderForServersGcpOfferingMdeAutoProvisioning {
	readonly configuration?: any | undefined;
	readonly enabled?: boolean | undefined;
}
export interface DefenderForServersGcpOfferingSubPlan {
	readonly type?: ("P1" | "P2") | undefined;
}
export interface DefenderForServersGcpOfferingVaAutoProvisioning {
	readonly configuration?: DefenderForServersGcpOfferingVaAutoProvisioningConfiguration | undefined;
	readonly enabled?: boolean | undefined;
}
export interface DefenderForServersGcpOfferingVaAutoProvisioningConfiguration {
	readonly type?: ("Qualys" | "TVM") | undefined;
}
export interface EnvironmentData {}
export interface GcpOrganizationalData {}
export interface GcpProjectDetails {
	readonly projectId?: string | undefined;
	readonly projectNumber?: string | undefined;
	readonly workloadIdentityPoolId?: string | undefined;
}
export interface InformationProtectionAwsOfferingInformationProtection {
	readonly cloudRoleArn?: string | undefined;
}
export interface SecurityConnectorProperties {
	readonly environmentData?: EnvironmentData | undefined;
	readonly environmentName?: ("AWS" | "Azure" | "AzureDevOps" | "GCP" | "Github") | undefined;
	readonly hierarchyIdentifier?: string | undefined;
	readonly hierarchyIdentifierTrialEndDate?: string | undefined;
	readonly offerings?: CloudOffering[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	securityConnectors: securityConnectors,
};
