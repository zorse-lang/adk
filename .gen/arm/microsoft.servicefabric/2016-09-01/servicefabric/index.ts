import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly tags?: ResourceTags;
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
	readonly maxPercentUnhealthyApplications?: number;
	readonly maxPercentUnhealthyNodes?: number;
}
export interface ClusterProperties {
	readonly availableClusterVersions?: ClusterVersionDetails[];
	readonly azureActiveDirectory?: AzureActiveDirectory;
	readonly certificate?: CertificateDescription;
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
	readonly reliabilityLevel?: "Bronze" | "Gold" | "Platinum" | "Silver";
	readonly reverseProxyCertificate?: CertificateDescription;
	readonly upgradeDescription?: ClusterUpgradePolicy;
	readonly upgradeMode?: "Automatic" | "Manual";
	readonly vmImage?: string;
}
export interface ClusterUpgradeDeltaHealthPolicy {
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
	readonly overrideUserUpgradePolicy?: boolean;
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
