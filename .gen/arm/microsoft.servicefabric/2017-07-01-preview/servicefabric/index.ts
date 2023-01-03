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
	readonly properties?: ClusterProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationResourceProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ServiceResourceProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationTypeResourceProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationTypeVersionResourceProperties | undefined;
}
export interface ApplicationMetricDescription {
	readonly MaximumCapacity?: number | undefined;
	readonly Name?: string | undefined;
	readonly ReservationCapacity?: number | undefined;
	readonly TotalApplicationCapacity?: number | undefined;
}
export interface ApplicationParameterList {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApplicationResourceProperties {
	readonly maximumNodes?: number | undefined;
	readonly metrics?: ApplicationMetricDescription[] | undefined;
	readonly minimumNodes?: number | undefined;
	readonly parameters?: ApplicationParameterList | undefined;
	readonly provisioningState?: string | undefined;
	readonly removeApplicationCapacity?: boolean | undefined;
	readonly typeName?: string | undefined;
	readonly typeVersion?: string | undefined;
	readonly upgradePolicy?: ApplicationUpgradePolicy | undefined;
}
export interface ApplicationTypeParameterList {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApplicationTypeResourceProperties {
	readonly provisioningState?: string | undefined;
}
export interface ApplicationTypeVersionResourceProperties {
	readonly appPackageUrl: string;
	readonly defaultParameterList?: ApplicationTypeParameterList | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationUpgradePolicy {
	readonly applicationHealthPolicy?: ArmApplicationHealthPolicy | undefined;
	readonly forceRestart?: boolean | undefined;
	readonly rollingUpgradeMonitoringPolicy?: ArmRollingUpgradeMonitoringPolicy | undefined;
	readonly upgradeReplicaSetCheckTimeout?: string | undefined;
}
export interface ArmApplicationHealthPolicy {
	readonly ConsiderWarningAsError?: boolean | undefined;
	readonly DefaultServiceTypeHealthPolicy?: ArmServiceTypeHealthPolicy | undefined;
	readonly MaxPercentUnhealthyDeployedApplications?: number | undefined;
	readonly ServiceTypeHealthPolicyMap?: ArmServiceTypeHealthPolicyMap | undefined;
}
export interface ArmRollingUpgradeMonitoringPolicy {
	readonly failureAction?: ("Manual" | "Rollback") | undefined;
	readonly healthCheckRetryTimeout?: string | undefined;
	readonly healthCheckStableDuration?: string | undefined;
	readonly healthCheckWaitDuration?: string | undefined;
	readonly upgradeDomainTimeout?: string | undefined;
	readonly upgradeTimeout?: string | undefined;
}
export interface ArmServiceTypeHealthPolicy {
	readonly maxPercentUnhealthyPartitionsPerService?: number | undefined;
	readonly maxPercentUnhealthyReplicasPerPartition?: number | undefined;
	readonly maxPercentUnhealthyServices?: number | undefined;
}
export interface ArmServiceTypeHealthPolicyMap {
	readonly "[ key: string ]"?: ArmServiceTypeHealthPolicy | undefined;
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
	readonly addOnFeatures?: ("BackupRestoreService" | "DnsService" | "RepairManager"[]) | undefined;
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
	readonly reliabilityLevel?: ("Bronze" | "Gold" | "None" | "Platinum" | "Silver") | undefined;
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
export interface PartitionSchemeDescription {}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServiceCorrelationDescription {
	readonly Scheme: "Affinity" | "AlignedAffinity" | "Invalid" | "NonAlignedAffinity";
	readonly ServiceName: string;
}
export interface ServiceLoadMetricDescription {
	readonly DefaultLoad?: number | undefined;
	readonly Name: string;
	readonly PrimaryDefaultLoad?: number | undefined;
	readonly SecondaryDefaultLoad?: number | undefined;
	readonly Weight?: ("High" | "Low" | "Medium" | "Zero") | undefined;
}
export interface ServicePlacementPolicyDescription {}
export interface ServiceResourceProperties {
	readonly correlationScheme?: ServiceCorrelationDescription[] | undefined;
	readonly defaultMoveCost?: ("High" | "Low" | "Medium" | "Zero") | undefined;
	readonly partitionDescription?: PartitionSchemeDescription | undefined;
	readonly placementConstraints?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceLoadMetrics?: ServiceLoadMetricDescription[] | undefined;
	readonly servicePlacementPolicies?: ServicePlacementPolicyDescription[] | undefined;
	readonly serviceTypeName?: string | undefined;
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
