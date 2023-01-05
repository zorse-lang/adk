import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class securityConnectors
	extends ArmResource<securityConnectorsComponentInputs>
	implements securityConnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: securityConnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/securityConnectors", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/securityConnectors";
}
export interface securityConnectorsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/securityConnectors";
}
export interface securityConnectorsComponentInputs {
	readonly etag?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: SecurityConnectorProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
}
export interface AwsOrganizationalData {}
export interface CloudOffering {
	readonly description?: string;
}
export interface CspmMonitorAwsOfferingNativeCloudConnection {
	readonly cloudRoleArn?: string;
}
export interface CspmMonitorGcpOfferingNativeCloudConnection {
	readonly serviceAccountEmailAddress?: string;
	readonly workloadIdentityProviderId?: string;
}
export interface DefenderForContainersAwsOfferingCloudWatchToKinesis {
	readonly cloudRoleArn?: string;
}
export interface DefenderForContainersAwsOfferingKinesisToS3 {
	readonly cloudRoleArn?: string;
}
export interface DefenderForContainersAwsOfferingKubernetesScubaReader {
	readonly cloudRoleArn?: string;
}
export interface DefenderForContainersAwsOfferingKubernetesService {
	readonly cloudRoleArn?: string;
}
export interface DefenderForContainersGcpOfferingDataPipelineNativeCloudConnection {
	readonly serviceAccountEmailAddress?: string;
	readonly workloadIdentityProviderId?: string;
}
export interface DefenderForContainersGcpOfferingNativeCloudConnection {
	readonly serviceAccountEmailAddress?: string;
	readonly workloadIdentityProviderId?: string;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioning {
	readonly enabled?: boolean;
	readonly servicePrincipalSecretMetadata?: DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata {
	readonly expiryDate?: string;
	readonly parameterNameInStore?: string;
	readonly parameterStoreRegion?: string;
}
export interface DefenderForServersAwsOfferingDefenderForServers {
	readonly cloudRoleArn?: string;
}
export interface DefenderForServersAwsOfferingMdeAutoProvisioning {
	readonly configuration?: any;
	readonly enabled?: boolean;
}
export interface DefenderForServersAwsOfferingSubPlan {
	readonly type?: "P1" | "P2";
}
export interface DefenderForServersAwsOfferingVaAutoProvisioning {
	readonly configuration?: DefenderForServersAwsOfferingVaAutoProvisioningConfiguration;
	readonly enabled?: boolean;
}
export interface DefenderForServersAwsOfferingVaAutoProvisioningConfiguration {
	readonly type?: "Qualys" | "TVM";
}
export interface DefenderForServersGcpOfferingArcAutoProvisioning {
	readonly configuration?: DefenderForServersGcpOfferingArcAutoProvisioningConfiguration;
	readonly enabled?: boolean;
}
export interface DefenderForServersGcpOfferingArcAutoProvisioningConfiguration {
	readonly agentOnboardingServiceAccountNumericId?: string;
	readonly clientId?: string;
}
export interface DefenderForServersGcpOfferingDefenderForServers {
	readonly serviceAccountEmailAddress?: string;
	readonly workloadIdentityProviderId?: string;
}
export interface DefenderForServersGcpOfferingMdeAutoProvisioning {
	readonly configuration?: any;
	readonly enabled?: boolean;
}
export interface DefenderForServersGcpOfferingSubPlan {
	readonly type?: "P1" | "P2";
}
export interface DefenderForServersGcpOfferingVaAutoProvisioning {
	readonly configuration?: DefenderForServersGcpOfferingVaAutoProvisioningConfiguration;
	readonly enabled?: boolean;
}
export interface DefenderForServersGcpOfferingVaAutoProvisioningConfiguration {
	readonly type?: "Qualys" | "TVM";
}
export interface EnvironmentData {}
export interface GcpOrganizationalData {}
export interface GcpProjectDetails {
	readonly projectId?: string;
	readonly projectNumber?: string;
	readonly workloadIdentityPoolId?: string;
}
export interface InformationProtectionAwsOfferingInformationProtection {
	readonly cloudRoleArn?: string;
}
export interface SecurityConnectorProperties {
	readonly environmentData?: EnvironmentData;
	readonly environmentName?: "AWS" | "Azure" | "GCP" | "Github";
	readonly hierarchyIdentifier?: string;
	readonly offerings?: CloudOffering[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Tags {
	readonly [key: string]: string;
}
export default {
	securityConnectors: securityConnectors,
};
