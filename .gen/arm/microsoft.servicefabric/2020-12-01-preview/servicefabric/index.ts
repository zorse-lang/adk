import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters", "2020-12-01-preview", options);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters";
}
export interface clustersComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class clusters_applications
	extends ArmResource<clusters_applicationsComponentInputs>
	implements clusters_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters/applications", "2020-12-01-preview", options);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applications";
}
export interface clusters_applicationsComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applications";
}
export interface clusters_applicationsComponentInputs {
	readonly etag?: string;
	readonly identity?: ManagedIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
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
			"2020-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applications/services";
}
export interface clusters_applications_servicesComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applications/services";
}
export interface clusters_applications_servicesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServiceResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
}
export class clusters_applicationTypes
	extends ArmResource<clusters_applicationTypesComponentInputs>
	implements clusters_applicationTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_applicationTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/clusters/applicationTypes", "2020-12-01-preview", options);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes";
}
export interface clusters_applicationTypesComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes";
}
export interface clusters_applicationTypesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationTypeResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
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
			"2020-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes/versions";
}
export interface clusters_applicationTypes_versionsComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/clusters/applicationTypes/versions";
}
export interface clusters_applicationTypes_versionsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationTypeVersionResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
}
export function listUpgradableVersions(
	resource: clusters,
	input: UpgradableVersionsDescription,
): UpgradableVersionPathResult {
	if (resource.apiVersion !== "2020-12-01-preview") {
		throw new Error(`listUpgradableVersions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceFabric/clusters") {
		throw new Error(`listUpgradableVersions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
export interface ApplicationMetricDescription {
	readonly maximumCapacity?: number;
	readonly name?: string;
	readonly reservationCapacity?: number;
	readonly totalApplicationCapacity?: number;
}
export interface ApplicationParameterList {
	readonly [key: string]: string;
}
export interface ApplicationResourceProperties {
	readonly managedIdentities?: ApplicationUserAssignedIdentity[];
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
export interface ApplicationTypeVersionsCleanupPolicy {
	readonly maxUnusedVersionsToKeep: number;
}
export interface ApplicationUpgradePolicy {
	readonly applicationHealthPolicy?: ArmApplicationHealthPolicy;
	readonly forceRestart?: boolean;
	readonly recreateApplication?: boolean;
	readonly rollingUpgradeMonitoringPolicy?: ArmRollingUpgradeMonitoringPolicy;
	readonly upgradeMode?: "Invalid" | "Monitored" | "UnmonitoredAuto" | "UnmonitoredManual";
	readonly upgradeReplicaSetCheckTimeout?: string;
}
export interface ApplicationUserAssignedIdentity {
	readonly name: string;
	readonly principalId: string;
}
export interface ArmApplicationHealthPolicy {
	readonly considerWarningAsError?: boolean;
	readonly defaultServiceTypeHealthPolicy?: ArmServiceTypeHealthPolicy;
	readonly maxPercentUnhealthyDeployedApplications?: number;
	readonly serviceTypeHealthPolicyMap?: ArmServiceTypeHealthPolicyMap;
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
	readonly applicationHealthPolicies?: ApplicationHealthPolicyMap;
	readonly maxPercentUnhealthyApplications?: number;
}
export interface ClusterProperties {
	readonly addOnFeatures?: "BackupRestoreService" | "DnsService" | "RepairManager" | "ResourceMonitorService"[];
	readonly applicationTypeVersionsCleanupPolicy?: ApplicationTypeVersionsCleanupPolicy;
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
	readonly eventStoreServiceEnabled?: boolean;
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
	readonly protectedAccountKeyName2?: string;
	readonly queueEndpoint: string;
	readonly storageAccountName: string;
	readonly tableEndpoint: string;
}
export interface EndpointRangeDescription {
	readonly endPort: number;
	readonly startPort: number;
}
export interface ManagedIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentityMap;
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
export interface ProxyResourceTags {
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
export interface ServiceCorrelationDescription {
	readonly scheme: "Affinity" | "AlignedAffinity" | "Invalid" | "NonAlignedAffinity";
	readonly serviceName: string;
}
export interface ServiceLoadMetricDescription {
	readonly defaultLoad?: number;
	readonly name: string;
	readonly primaryDefaultLoad?: number;
	readonly secondaryDefaultLoad?: number;
	readonly weight?: "High" | "Low" | "Medium" | "Zero";
}
export interface ServicePlacementPolicyDescription {}
export interface ServiceResourceProperties {
	readonly correlationScheme?: ServiceCorrelationDescription[];
	readonly defaultMoveCost?: "High" | "Low" | "Medium" | "Zero";
	readonly partitionDescription?: PartitionSchemeDescription;
	readonly placementConstraints?: string;
	readonly provisioningState?: string;
	readonly serviceDnsName?: string;
	readonly serviceLoadMetrics?: ServiceLoadMetricDescription[];
	readonly servicePackageActivationMode?: "ExclusiveProcess" | "SharedProcess";
	readonly servicePlacementPolicies?: ServicePlacementPolicyDescription[];
	readonly serviceTypeName?: string;
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
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UpgradableVersionPathResult {
	readonly supportedPath?: string[];
}
export interface UpgradableVersionsDescription {
	readonly targetVersion: string;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserAssignedIdentityMap {
	readonly [key: string]: UserAssignedIdentity;
}
export default {
	clusters: clusters,
	"clusters/applications": clusters_applications,
	"clusters/applications/services": clusters_applications_services,
	"clusters/applicationTypes": clusters_applicationTypes,
	"clusters/applicationTypes/versions": clusters_applicationTypes_versions,
};
