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
	readonly properties?: ClusterProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AzureActiveDirectory {
	readonly clientApplication?: string | undefined;
	readonly clusterApplication?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface CertificateDescription {
	readonly thumbprint: string;
	readonly thumbprintSecondary?: string | undefined;
	readonly x509StoreName?:
		| (
				| "AddressBook"
				| "AuthRoot"
				| "CertificateAuthority"
				| "Disallowed"
				| "My"
				| "Root"
				| "TrustedPeople"
				| "TrustedPublisher"
		  )
		| undefined;
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
	readonly maxPercentUnhealthyApplications?: number | undefined;
	readonly maxPercentUnhealthyNodes?: number | undefined;
}
export interface ClusterProperties {
	readonly availableClusterVersions?: ClusterVersionDetails[] | undefined;
	readonly azureActiveDirectory?: AzureActiveDirectory | undefined;
	readonly certificate?: CertificateDescription | undefined;
	readonly clientCertificateCommonNames?: ClientCertificateCommonName[] | undefined;
	readonly clientCertificateThumbprints?: ClientCertificateThumbprint[] | undefined;
	readonly clusterCodeVersion?: string | undefined;
	readonly clusterEndpoint?: string | undefined;
	readonly clusterId?: string | undefined;
	readonly clusterState?:
		| (
				| "AutoScale"
				| "BaselineUpgrade"
				| "Deploying"
				| "EnforcingClusterVersion"
				| "Ready"
				| "UpdatingInfrastructure"
				| "UpdatingUserCertificate"
				| "UpdatingUserConfiguration"
				| "UpgradeServiceUnreachable"
				| "WaitingForNodes"
		  )
		| undefined;
	readonly diagnosticsStorageAccountConfig?: DiagnosticsStorageAccountConfig | undefined;
	readonly fabricSettings?: SettingsSectionDescription[] | undefined;
	readonly managementEndpoint: string;
	readonly nodeTypes: NodeTypeDescription[];
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly reliabilityLevel?: ("Bronze" | "Gold" | "Platinum" | "Silver") | undefined;
	readonly reverseProxyCertificate?: CertificateDescription | undefined;
	readonly upgradeDescription?: ClusterUpgradePolicy | undefined;
	readonly upgradeMode?: ("Automatic" | "Manual") | undefined;
	readonly vmImage?: string | undefined;
}
export interface ClusterUpgradeDeltaHealthPolicy {
	readonly maxPercentDeltaUnhealthyApplications: number;
	readonly maxPercentDeltaUnhealthyNodes: number;
	readonly maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
}
export interface ClusterUpgradePolicy {
	readonly deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicy | undefined;
	readonly forceRestart?: boolean | undefined;
	readonly healthCheckRetryTimeout: string;
	readonly healthCheckStableDuration: string;
	readonly healthCheckWaitDuration: string;
	readonly healthPolicy: ClusterHealthPolicy;
	readonly overrideUserUpgradePolicy?: boolean | undefined;
	readonly upgradeDomainTimeout: string;
	readonly upgradeReplicaSetCheckTimeout: string;
	readonly upgradeTimeout: string;
}
export interface ClusterVersionDetails {
	readonly codeVersion?: string | undefined;
	readonly environment?: ("Linux" | "Windows") | undefined;
	readonly supportExpiryUtc?: string | undefined;
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
	readonly applicationPorts?: EndpointRangeDescription | undefined;
	readonly capacities?: NodeTypeDescriptionCapacities | undefined;
	readonly clientConnectionEndpointPort: number;
	readonly durabilityLevel?: ("Bronze" | "Gold" | "Silver") | undefined;
	readonly ephemeralPorts?: EndpointRangeDescription | undefined;
	readonly httpGatewayEndpointPort: number;
	readonly isPrimary: boolean;
	readonly name: string;
	readonly placementProperties?: NodeTypeDescriptionPlacementProperties | undefined;
	readonly reverseProxyEndpointPort?: number | undefined;
	readonly vmInstanceCount: number;
}
export interface NodeTypeDescriptionCapacities {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NodeTypeDescriptionPlacementProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
