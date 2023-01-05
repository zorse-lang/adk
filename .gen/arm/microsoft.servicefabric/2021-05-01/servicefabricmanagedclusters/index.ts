import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedClusters", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class managedclusters_applications
	extends ArmResource<managedclusters_applicationsComponentInputs>
	implements managedclusters_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclusters_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedclusters/applications", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applications";
}
export interface managedclusters_applicationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applications";
}
export interface managedclusters_applicationsComponentInputs {
	readonly identity?: ManagedIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
}
export class managedclusters_applications_services
	extends ArmResource<managedclusters_applications_servicesComponentInputs>
	implements managedclusters_applications_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclusters_applications_servicesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedclusters/applications/services", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applications/services";
}
export interface managedclusters_applications_servicesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applications/services";
}
export interface managedclusters_applications_servicesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServiceResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
}
export class managedclusters_applicationTypes
	extends ArmResource<managedclusters_applicationTypesComponentInputs>
	implements managedclusters_applicationTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclusters_applicationTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedclusters/applicationTypes", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes";
}
export interface managedclusters_applicationTypesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes";
}
export interface managedclusters_applicationTypesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationTypeResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
}
export class managedclusters_applicationTypes_versions
	extends ArmResource<managedclusters_applicationTypes_versionsComponentInputs>
	implements managedclusters_applicationTypes_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclusters_applicationTypes_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceFabric/managedclusters/applicationTypes/versions",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes/versions";
}
export interface managedclusters_applicationTypes_versionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes/versions";
}
export interface managedclusters_applicationTypes_versionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationTypeVersionResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ProxyResourceTags;
}
export class managedClusters_nodeTypes
	extends ArmResource<managedClusters_nodeTypesComponentInputs>
	implements managedClusters_nodeTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_nodeTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedClusters/nodeTypes", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedClusters/nodeTypes";
}
export interface managedClusters_nodeTypesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedClusters/nodeTypes";
}
export interface managedClusters_nodeTypesComponentInputs {
	readonly name: string;
	readonly properties?: NodeTypeProperties;
	readonly systemData?: SystemData;
	readonly tags?: ManagedProxyResourceTags;
}
export interface ApplicationHealthPolicy {
	readonly considerWarningAsError: boolean;
	readonly defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicy;
	readonly maxPercentUnhealthyDeployedApplications: number;
	readonly serviceTypeHealthPolicyMap?: ServiceTypeHealthPolicyMap;
}
export interface ApplicationParameterList {
	readonly [key: string]: string;
}
export interface ApplicationResourceProperties {
	readonly managedIdentities?: ApplicationUserAssignedIdentity[];
	readonly parameters?: ApplicationParameterList;
	readonly provisioningState?: string;
	readonly upgradePolicy?: ApplicationUpgradePolicy;
	readonly version?: string;
}
export interface ApplicationTypeResourceProperties {
	readonly provisioningState?: string;
}
export interface ApplicationTypeVersionResourceProperties {
	readonly appPackageUrl: string;
	readonly provisioningState?: string;
}
export interface ApplicationTypeVersionsCleanupPolicy {
	readonly maxUnusedVersionsToKeep: number;
}
export interface ApplicationUpgradePolicy {
	readonly applicationHealthPolicy?: ApplicationHealthPolicy;
	readonly forceRestart?: boolean;
	readonly instanceCloseDelayDuration?: number;
	readonly recreateApplication?: boolean;
	readonly rollingUpgradeMonitoringPolicy?: RollingUpgradeMonitoringPolicy;
	readonly upgradeMode?: "Monitored" | "UnmonitoredAuto";
	readonly upgradeReplicaSetCheckTimeout?: number;
}
export interface ApplicationUserAssignedIdentity {
	readonly name: string;
	readonly principalId: string;
}
export interface AzureActiveDirectory {
	readonly clientApplication?: string;
	readonly clusterApplication?: string;
	readonly tenantId?: string;
}
export interface ClientCertificate {
	readonly commonName?: string;
	readonly isAdmin: boolean;
	readonly issuerThumbprint?: string;
	readonly thumbprint?: string;
}
export interface EndpointRangeDescription {
	readonly endPort: number;
	readonly startPort: number;
}
export interface LoadBalancingRule {
	readonly backendPort: number;
	readonly frontendPort: number;
	readonly probePort?: number;
	readonly probeProtocol: "http" | "https" | "tcp";
	readonly probeRequestPath?: string;
	readonly protocol: "tcp" | "udp";
}
export interface ManagedClusterProperties {
	readonly addonFeatures?: "BackupRestoreService" | "DnsService" | "ResourceMonitorService"[];
	readonly adminPassword?: string;
	readonly adminUserName: string;
	readonly allowRdpAccess?: boolean;
	readonly applicationTypeVersionsCleanupPolicy?: ApplicationTypeVersionsCleanupPolicy;
	readonly azureActiveDirectory?: AzureActiveDirectory;
	readonly clientConnectionPort?: number;
	readonly clients?: ClientCertificate[];
	readonly clusterCertificateThumbprints?: string[];
	readonly clusterCodeVersion?: string;
	readonly clusterId?: string;
	readonly clusterState?: "BaselineUpgrade" | "Deploying" | "Ready" | "UpgradeFailed" | "Upgrading" | "WaitingForNodes";
	readonly clusterUpgradeCadence?: "Wave0" | "Wave1" | "Wave2";
	readonly clusterUpgradeMode?: "Automatic" | "Manual";
	readonly dnsName: string;
	readonly enableAutoOSUpgrade?: boolean;
	readonly fabricSettings?: SettingsSectionDescription[];
	readonly fqdn?: string;
	readonly httpGatewayConnectionPort?: number;
	readonly ipv4Address?: string;
	readonly loadBalancingRules?: LoadBalancingRule[];
	readonly networkSecurityRules?: NetworkSecurityRule[];
	readonly provisioningState?:
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "None"
		| "Other"
		| "Succeeded"
		| "Updating";
	readonly zonalResiliency?: boolean;
}
export interface ManagedIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentityMap;
}
export interface ManagedProxyResourceTags {
	readonly [key: string]: string;
}
export interface NetworkSecurityRule {
	readonly access: "allow" | "deny";
	readonly description?: string;
	readonly destinationAddressPrefixes?: string[];
	readonly destinationPortRanges?: string[];
	readonly direction: "inbound" | "outbound";
	readonly name: string;
	readonly priority: number;
	readonly protocol: "ah" | "esp" | "http" | "https" | "icmp" | "tcp" | "udp";
	readonly sourceAddressPrefixes?: string[];
	readonly sourcePortRanges?: string[];
}
export interface NodeTypeProperties {
	readonly applicationPorts?: EndpointRangeDescription;
	readonly capacities?: NodeTypePropertiesCapacities;
	readonly dataDiskSizeGB: number;
	readonly dataDiskType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS";
	readonly ephemeralPorts?: EndpointRangeDescription;
	readonly isPrimary: boolean;
	readonly isStateless?: boolean;
	readonly multiplePlacementGroups?: boolean;
	readonly placementProperties?: NodeTypePropertiesPlacementProperties;
	readonly provisioningState?:
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "None"
		| "Other"
		| "Succeeded"
		| "Updating";
	readonly vmExtensions?: VmssExtension[];
	readonly vmImageOffer?: string;
	readonly vmImagePublisher?: string;
	readonly vmImageSku?: string;
	readonly vmImageVersion?: string;
	readonly vmInstanceCount: number;
	readonly vmManagedIdentity?: VmManagedIdentity;
	readonly vmSecrets?: VaultSecretGroup[];
	readonly vmSize?: string;
}
export interface NodeTypePropertiesCapacities {
	readonly [key: string]: string;
}
export interface NodeTypePropertiesPlacementProperties {
	readonly [key: string]: string;
}
export interface Partition {}
export interface ProxyResourceTags {
	readonly [key: string]: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RollingUpgradeMonitoringPolicy {
	readonly failureAction: "Manual" | "Rollback";
	readonly healthCheckRetryTimeout: string;
	readonly healthCheckStableDuration: string;
	readonly healthCheckWaitDuration: string;
	readonly upgradeDomainTimeout: string;
	readonly upgradeTimeout: string;
}
export interface ScalingMechanism {}
export interface ScalingPolicy {
	readonly scalingMechanism: ScalingMechanism;
	readonly scalingTrigger: ScalingTrigger;
}
export interface ScalingTrigger {}
export interface ServiceCorrelation {
	readonly scheme: "AlignedAffinity" | "NonAlignedAffinity";
	readonly serviceName: string;
}
export interface ServiceLoadMetric {
	readonly defaultLoad?: number;
	readonly name: string;
	readonly primaryDefaultLoad?: number;
	readonly secondaryDefaultLoad?: number;
	readonly weight?: "High" | "Low" | "Medium" | "Zero";
}
export interface ServicePlacementPolicy {}
export interface ServiceResourceProperties {
	readonly correlationScheme?: ServiceCorrelation[];
	readonly defaultMoveCost?: "High" | "Low" | "Medium" | "Zero";
	readonly partitionDescription: Partition;
	readonly placementConstraints?: string;
	readonly provisioningState?: string;
	readonly scalingPolicies?: ScalingPolicy[];
	readonly serviceLoadMetrics?: ServiceLoadMetric[];
	readonly servicePackageActivationMode?: "ExclusiveProcess" | "SharedProcess";
	readonly servicePlacementPolicies?: ServicePlacementPolicy[];
	readonly serviceTypeName: string;
}
export interface ServiceTypeHealthPolicy {
	readonly maxPercentUnhealthyPartitionsPerService: number;
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
export interface Sku {
	readonly name: "Basic" | "Standard";
}
export interface SubResource {
	readonly id?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: string;
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: string;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserAssignedIdentityMap {
	readonly [key: string]: UserAssignedIdentity;
}
export interface VaultCertificate {
	readonly certificateStore: string;
	readonly certificateUrl: string;
}
export interface VaultSecretGroup {
	readonly sourceVault: SubResource;
	readonly vaultCertificates: VaultCertificate[];
}
export interface VmManagedIdentity {
	readonly userAssignedIdentities?: string[];
}
export interface VmssExtension {
	readonly name: string;
	readonly properties: VmssExtensionProperties;
}
export interface VmssExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly protectedSettings?: any;
	readonly provisionAfterExtensions?: string[];
	readonly provisioningState?: string;
	readonly publisher: string;
	readonly settings?: any;
	readonly type: string;
	readonly typeHandlerVersion: string;
}
export default {
	managedClusters: managedClusters,
	"managedclusters/applications": managedclusters_applications,
	"managedclusters/applications/services": managedclusters_applications_services,
	"managedclusters/applicationTypes": managedclusters_applicationTypes,
	"managedclusters/applicationTypes/versions": managedclusters_applicationTypes_versions,
	"managedClusters/nodeTypes": managedClusters_nodeTypes,
};
