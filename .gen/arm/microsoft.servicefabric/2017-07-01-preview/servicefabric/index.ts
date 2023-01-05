import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters", "2017-07-01-preview", options);
	}
	public readonly apiVersion: "2017-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2017-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly tags?: ResourceTags;
}
export class clusters_applications
	extends ArmResource<clusters_applicationsComponentInputs>
	implements clusters_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters/applications", "2017-07-01-preview", options);
	}
	public readonly apiVersion: "2017-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applications";
}
export interface clusters_applicationsComponentOutputs {
	readonly apiVersion: "2017-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applications";
}
export interface clusters_applicationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationResourceProperties;
}
export class clusters_applications_services
	extends ArmResource<clusters_applications_servicesComponentInputs>
	implements clusters_applications_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_applications_servicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceFabric/clusters/applications/services",
			"2017-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applications/services";
}
export interface clusters_applications_servicesComponentOutputs {
	readonly apiVersion: "2017-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applications/services";
}
export interface clusters_applications_servicesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServiceResourceProperties;
}
export class clusters_applicationTypes
	extends ArmResource<clusters_applicationTypesComponentInputs>
	implements clusters_applicationTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_applicationTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters/applicationTypes", "2017-07-01-preview", options);
	}
	public readonly apiVersion: "2017-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes";
}
export interface clusters_applicationTypesComponentOutputs {
	readonly apiVersion: "2017-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes";
}
export interface clusters_applicationTypesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationTypeResourceProperties;
}
export class clusters_applicationTypes_versions
	extends ArmResource<clusters_applicationTypes_versionsComponentInputs>
	implements clusters_applicationTypes_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_applicationTypes_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceFabric/clusters/applicationTypes/versions",
			"2017-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes/versions";
}
export interface clusters_applicationTypes_versionsComponentOutputs {
	readonly apiVersion: "2017-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes/versions";
}
export interface clusters_applicationTypes_versionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationTypeVersionResourceProperties;
}
export interface ApplicationMetricDescription {
	readonly MaximumCapacity?: number;
	readonly Name?: string;
	readonly ReservationCapacity?: number;
	readonly TotalApplicationCapacity?: number;
}
export interface ApplicationParameterList {
	readonly [key: string]: string;
}
export interface ApplicationResourceProperties {
	readonly maximumNodes?: number;
	readonly metrics?: ApplicationMetricDescription[];
	readonly minimumNodes?: number;
	readonly parameters?: ApplicationParameterList;
	readonly provisioningState?: string;
	readonly removeApplicationCapacity?: boolean;
	readonly typeName?: string;
	readonly typeVersion?: string;
	readonly upgradePolicy?: ApplicationUpgradePolicy;
}
export interface ApplicationTypeParameterList {
	readonly [key: string]: string;
}
export interface ApplicationTypeResourceProperties {
	readonly provisioningState?: string;
}
export interface ApplicationTypeVersionResourceProperties {
	readonly appPackageUrl: string;
	readonly defaultParameterList?: ApplicationTypeParameterList;
	readonly provisioningState?: string;
}
export interface ApplicationUpgradePolicy {
	readonly applicationHealthPolicy?: ArmApplicationHealthPolicy;
	readonly forceRestart?: boolean;
	readonly rollingUpgradeMonitoringPolicy?: ArmRollingUpgradeMonitoringPolicy;
	readonly upgradeReplicaSetCheckTimeout?: string;
}
export interface ArmApplicationHealthPolicy {
	readonly ConsiderWarningAsError?: boolean;
	readonly DefaultServiceTypeHealthPolicy?: ArmServiceTypeHealthPolicy;
	readonly MaxPercentUnhealthyDeployedApplications?: number;
	readonly ServiceTypeHealthPolicyMap?: ArmServiceTypeHealthPolicyMap;
}
export interface ArmRollingUpgradeMonitoringPolicy {
	readonly failureAction?: "Manual" | "Rollback";
	readonly healthCheckRetryTimeout?: string;
	readonly healthCheckStableDuration?: string;
	readonly healthCheckWaitDuration?: string;
	readonly upgradeDomainTimeout?: string;
	readonly upgradeTimeout?: string;
}
export interface ArmServiceTypeHealthPolicy {
	readonly maxPercentUnhealthyPartitionsPerService?: number;
	readonly maxPercentUnhealthyReplicasPerPartition?: number;
	readonly maxPercentUnhealthyServices?: number;
}
export interface ArmServiceTypeHealthPolicyMap {
	readonly [key: string]: ArmServiceTypeHealthPolicy;
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
	readonly addOnFeatures?: "BackupRestoreService" | "DnsService" | "RepairManager"[];
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
	readonly reliabilityLevel?: "Bronze" | "Gold" | "None" | "Platinum" | "Silver";
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
export interface PartitionSchemeDescription {}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ServiceCorrelationDescription {
	readonly Scheme: "Affinity" | "AlignedAffinity" | "Invalid" | "NonAlignedAffinity";
	readonly ServiceName: string;
}
export interface ServiceLoadMetricDescription {
	readonly DefaultLoad?: number;
	readonly Name: string;
	readonly PrimaryDefaultLoad?: number;
	readonly SecondaryDefaultLoad?: number;
	readonly Weight?: "High" | "Low" | "Medium" | "Zero";
}
export interface ServicePlacementPolicyDescription {}
export interface ServiceResourceProperties {
	readonly correlationScheme?: ServiceCorrelationDescription[];
	readonly defaultMoveCost?: "High" | "Low" | "Medium" | "Zero";
	readonly partitionDescription?: PartitionSchemeDescription;
	readonly placementConstraints?: string;
	readonly provisioningState?: string;
	readonly serviceLoadMetrics?: ServiceLoadMetricDescription[];
	readonly servicePlacementPolicies?: ServicePlacementPolicyDescription[];
	readonly serviceTypeName?: string;
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
	"clusters/applications": clusters_applications,
	"clusters/applications/services": clusters_applications_services,
	"clusters/applicationTypes": clusters_applicationTypes,
	"clusters/applicationTypes/versions": clusters_applicationTypes_versions,
};
