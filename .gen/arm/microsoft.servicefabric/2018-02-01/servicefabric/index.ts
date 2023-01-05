import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters", "2018-02-01", options);
	}
	public readonly apiVersion: "2018-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2018-02-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly tags?: ResourceTags;
}
export interface ApplicationDeltaHealthPolicy {
	readonly defaultServiceTypeDeltaHealthPolicy?: ServiceTypeDeltaHealthPolicy;
	readonly serviceTypeDeltaHealthPolicies?: ServiceTypeDeltaHealthPolicyMap;
}
export interface ApplicationDeltaHealthPolicyMap {
	readonly [key: string]: ApplicationDeltaHealthPolicy;
}
export interface ApplicationHealthPolicy {
	readonly defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicy;
	readonly serviceTypeHealthPolicies?: ServiceTypeHealthPolicyMap;
}
export interface ApplicationHealthPolicyMap {
	readonly [key: string]: ApplicationHealthPolicy;
}
export interface AzureActiveDirectory {
	readonly clientApplication?: string;
	readonly clusterApplication?: string;
	readonly tenantId?: string;
}
export interface CertificateDescription {
	readonly thumbprint: string;
	readonly thumbprintSecondary?: string;
	readonly x509StoreName?:
		| "AddressBook"
		| "AuthRoot"
		| "CertificateAuthority"
		| "Disallowed"
		| "My"
		| "Root"
		| "TrustedPeople"
		| "TrustedPublisher";
}
export interface ClientCertificateCommonName {
	readonly certificateCommonName: string;
	readonly certificateIssuerThumbprint: string;
	readonly isAdmin: boolean;
}
export interface ClientCertificateThumbprint {
	readonly certificateThumbprint: string;
	readonly isAdmin: boolean;
}
export interface ClusterHealthPolicy {
	readonly applicationHealthPolicies?: ApplicationHealthPolicyMap;
	readonly maxPercentUnhealthyApplications?: number;
}
export interface ClusterProperties {
	readonly addOnFeatures?: "BackupRestoreService" | "DnsService" | "RepairManager" | "ResourceMonitorService"[];
	readonly availableClusterVersions?: ClusterVersionDetails[];
	readonly azureActiveDirectory?: AzureActiveDirectory;
	readonly certificate?: CertificateDescription;
	readonly certificateCommonNames?: ServerCertificateCommonNames;
	readonly clientCertificateCommonNames?: ClientCertificateCommonName[];
	readonly clientCertificateThumbprints?: ClientCertificateThumbprint[];
	readonly clusterCodeVersion?: string;
	readonly clusterEndpoint?: string;
	readonly clusterId?: string;
	readonly clusterState?:
		| "AutoScale"
		| "BaselineUpgrade"
		| "Deploying"
		| "EnforcingClusterVersion"
		| "Ready"
		| "UpdatingInfrastructure"
		| "UpdatingUserCertificate"
		| "UpdatingUserConfiguration"
		| "UpgradeServiceUnreachable"
		| "WaitingForNodes";
	readonly diagnosticsStorageAccountConfig?: DiagnosticsStorageAccountConfig;
	readonly fabricSettings?: SettingsSectionDescription[];
	readonly managementEndpoint: string;
	readonly nodeTypes: NodeTypeDescription[];
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded" | "Updating";
	readonly reliabilityLevel?: "Bronze" | "Gold" | "None" | "Platinum" | "Silver";
	readonly reverseProxyCertificate?: CertificateDescription;
	readonly reverseProxyCertificateCommonNames?: ServerCertificateCommonNames;
	readonly upgradeDescription?: ClusterUpgradePolicy;
	readonly upgradeMode?: "Automatic" | "Manual";
	readonly vmImage?: string;
}
export interface ClusterUpgradeDeltaHealthPolicy {
	readonly applicationDeltaHealthPolicies?: ApplicationDeltaHealthPolicyMap;
	readonly maxPercentDeltaUnhealthyApplications: number;
	readonly maxPercentDeltaUnhealthyNodes: number;
	readonly maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
}
export interface ClusterUpgradePolicy {
	readonly deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicy;
	readonly forceRestart?: boolean;
	readonly healthCheckRetryTimeout: string;
	readonly healthCheckStableDuration: string;
	readonly healthCheckWaitDuration: string;
	readonly healthPolicy: ClusterHealthPolicy;
	readonly upgradeDomainTimeout: string;
	readonly upgradeReplicaSetCheckTimeout: string;
	readonly upgradeTimeout: string;
}
export interface ClusterVersionDetails {
	readonly codeVersion?: string;
	readonly environment?: "Linux" | "Windows";
	readonly supportExpiryUtc?: string;
}
export interface DiagnosticsStorageAccountConfig {
	readonly blobEndpoint: string;
	readonly protectedAccountKeyName: string;
	readonly queueEndpoint: string;
	readonly storageAccountName: string;
	readonly tableEndpoint: string;
}
export interface EndpointRangeDescription {
	readonly endPort: number;
	readonly startPort: number;
}
export interface NodeTypeDescription {
	readonly applicationPorts?: EndpointRangeDescription;
	readonly capacities?: NodeTypeDescriptionCapacities;
	readonly clientConnectionEndpointPort: number;
	readonly durabilityLevel?: "Bronze" | "Gold" | "Silver";
	readonly ephemeralPorts?: EndpointRangeDescription;
	readonly httpGatewayEndpointPort: number;
	readonly isPrimary: boolean;
	readonly name: string;
	readonly placementProperties?: NodeTypeDescriptionPlacementProperties;
	readonly reverseProxyEndpointPort?: number;
	readonly vmInstanceCount: number;
}
export interface NodeTypeDescriptionCapacities {
	readonly [key: string]: string;
}
export interface NodeTypeDescriptionPlacementProperties {
	readonly [key: string]: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ServerCertificateCommonName {
	readonly certificateCommonName: string;
	readonly certificateIssuerThumbprint: string;
}
export interface ServerCertificateCommonNames {
	readonly commonNames?: ServerCertificateCommonName[];
	readonly x509StoreName?:
		| "AddressBook"
		| "AuthRoot"
		| "CertificateAuthority"
		| "Disallowed"
		| "My"
		| "Root"
		| "TrustedPeople"
		| "TrustedPublisher";
}
export interface ServiceTypeDeltaHealthPolicy {
	readonly maxPercentDeltaUnhealthyServices?: number;
}
export interface ServiceTypeDeltaHealthPolicyMap {
	readonly [key: string]: ServiceTypeDeltaHealthPolicy;
}
export interface ServiceTypeHealthPolicy {
	readonly maxPercentUnhealthyServices?: number;
}
export interface ServiceTypeHealthPolicyMap {
	readonly [key: string]: ServiceTypeHealthPolicy;
}
export interface SettingsParameterDescription {
	readonly name: string;
	readonly value: string;
}
export interface SettingsSectionDescription {
	readonly name: string;
	readonly parameters: SettingsParameterDescription[];
}
export default {
	clusters: clusters,
};
