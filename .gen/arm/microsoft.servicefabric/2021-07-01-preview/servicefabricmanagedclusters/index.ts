import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedClusters", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class managedclusters_applications
	extends ArmResource<managedclusters_applicationsComponentInputs>
	implements managedclusters_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclusters_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedclusters/applications", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applications";
}
export interface managedclusters_applicationsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applications";
}
export interface managedclusters_applicationsComponentInputs {
	readonly identity?: ManagedIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ProxyResourceTags | undefined;
}
export class managedclusters_applications_services
	extends ArmResource<managedclusters_applications_servicesComponentInputs>
	implements managedclusters_applications_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclusters_applications_servicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceFabric/managedclusters/applications/services",
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applications/services";
}
export interface managedclusters_applications_servicesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applications/services";
}
export interface managedclusters_applications_servicesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ServiceResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ProxyResourceTags | undefined;
}
export class managedclusters_applicationTypes
	extends ArmResource<managedclusters_applicationTypesComponentInputs>
	implements managedclusters_applicationTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclusters_applicationTypesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceFabric/managedclusters/applicationTypes",
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes";
}
export interface managedclusters_applicationTypesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes";
}
export interface managedclusters_applicationTypesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationTypeResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ProxyResourceTags | undefined;
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
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes/versions";
}
export interface managedclusters_applicationTypes_versionsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedclusters/applicationTypes/versions";
}
export interface managedclusters_applicationTypes_versionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationTypeVersionResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ProxyResourceTags | undefined;
}
export class managedClusters_nodeTypes
	extends ArmResource<managedClusters_nodeTypesComponentInputs>
	implements managedClusters_nodeTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_nodeTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedClusters/nodeTypes", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedClusters/nodeTypes";
}
export interface managedClusters_nodeTypesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedClusters/nodeTypes";
}
export interface managedClusters_nodeTypesComponentInputs {
	readonly name: string;
	readonly properties?: NodeTypeProperties | undefined;
	readonly sku?: NodeTypeSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ManagedProxyResourceTags | undefined;
}
export interface ApplicationHealthPolicy {
	readonly considerWarningAsError: boolean;
	readonly defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicy | undefined;
	readonly maxPercentUnhealthyDeployedApplications: number;
	readonly serviceTypeHealthPolicyMap?: ServiceTypeHealthPolicyMap | undefined;
}
export interface ApplicationParameterList {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApplicationResourceProperties {
	readonly managedIdentities?: ApplicationUserAssignedIdentity[] | undefined;
	readonly parameters?: ApplicationParameterList | undefined;
	readonly provisioningState?: string | undefined;
	readonly upgradePolicy?: ApplicationUpgradePolicy | undefined;
	readonly version?: string | undefined;
}
export interface ApplicationTypeResourceProperties {
	readonly provisioningState?: string | undefined;
}
export interface ApplicationTypeVersionResourceProperties {
	readonly appPackageUrl: string;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationTypeVersionsCleanupPolicy {
	readonly maxUnusedVersionsToKeep: number;
}
export interface ApplicationUpgradePolicy {
	readonly applicationHealthPolicy?: ApplicationHealthPolicy | undefined;
	readonly forceRestart?: boolean | undefined;
	readonly instanceCloseDelayDuration?: number | undefined;
	readonly recreateApplication?: boolean | undefined;
	readonly rollingUpgradeMonitoringPolicy?: RollingUpgradeMonitoringPolicy | undefined;
	readonly upgradeMode?: ("Monitored" | "UnmonitoredAuto") | undefined;
	readonly upgradeReplicaSetCheckTimeout?: number | undefined;
}
export interface ApplicationUserAssignedIdentity {
	readonly name: string;
	readonly principalId: string;
}
export interface AzureActiveDirectory {
	readonly clientApplication?: string | undefined;
	readonly clusterApplication?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ClientCertificate {
	readonly commonName?: string | undefined;
	readonly isAdmin: boolean;
	readonly issuerThumbprint?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface EndpointRangeDescription {
	readonly endPort: number;
	readonly startPort: number;
}
export interface FrontendConfiguration {
	readonly ipAddressType?: ("IPv4" | "IPv6") | undefined;
	readonly loadBalancerBackendAddressPoolId?: string | undefined;
	readonly loadBalancerInboundNatPoolId?: string | undefined;
}
export interface IPTag {
	readonly ipTagType: string;
	readonly tag: string;
}
export interface LoadBalancingRule {
	readonly backendPort: number;
	readonly frontendPort: number;
	readonly probePort?: number | undefined;
	readonly probeProtocol: "http" | "https" | "tcp";
	readonly probeRequestPath?: string | undefined;
	readonly protocol: "tcp" | "udp";
}
export interface ManagedClusterProperties {
	readonly addonFeatures?: ("BackupRestoreService" | "DnsService" | "ResourceMonitorService"[]) | undefined;
	readonly adminPassword?: string | undefined;
	readonly adminUserName: string;
	readonly allowRdpAccess?: boolean | undefined;
	readonly applicationTypeVersionsCleanupPolicy?: ApplicationTypeVersionsCleanupPolicy | undefined;
	readonly azureActiveDirectory?: AzureActiveDirectory | undefined;
	readonly clientConnectionPort?: number | undefined;
	readonly clients?: ClientCertificate[] | undefined;
	readonly clusterCertificateThumbprints?: string[] | undefined;
	readonly clusterCodeVersion?: string | undefined;
	readonly clusterId?: string | undefined;
	readonly clusterState?:
		| ("BaselineUpgrade" | "Deploying" | "Ready" | "UpgradeFailed" | "Upgrading" | "WaitingForNodes")
		| undefined;
	readonly clusterUpgradeCadence?: ("Wave0" | "Wave1" | "Wave2") | undefined;
	readonly clusterUpgradeMode?: ("Automatic" | "Manual") | undefined;
	readonly dnsName: string;
	readonly enableAutoOSUpgrade?: boolean | undefined;
	readonly enableIpv6?: boolean | undefined;
	readonly fabricSettings?: SettingsSectionDescription[] | undefined;
	readonly fqdn?: string | undefined;
	readonly httpGatewayConnectionPort?: number | undefined;
	readonly ipTags?: IPTag[] | undefined;
	readonly ipv4Address?: string | undefined;
	readonly loadBalancingRules?: LoadBalancingRule[] | undefined;
	readonly networkSecurityRules?: NetworkSecurityRule[] | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Created"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "None"
				| "Other"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly subnetId?: string | undefined;
	readonly zonalResiliency?: boolean | undefined;
}
export interface ManagedIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: UserAssignedIdentityMap | undefined;
}
export interface ManagedProxyResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NetworkSecurityRule {
	readonly access: "allow" | "deny";
	readonly description?: string | undefined;
	readonly destinationAddressPrefixes?: string[] | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly direction: "inbound" | "outbound";
	readonly name: string;
	readonly priority: number;
	readonly protocol: "ah" | "esp" | "http" | "https" | "icmp" | "tcp" | "udp";
	readonly sourceAddressPrefixes?: string[] | undefined;
	readonly sourcePortRanges?: string[] | undefined;
}
export interface NodeTypeProperties {
	readonly applicationPorts?: EndpointRangeDescription | undefined;
	readonly capacities?: NodeTypePropertiesCapacities | undefined;
	readonly dataDiskSizeGB: number;
	readonly dataDiskType?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS") | undefined;
	readonly ephemeralPorts?: EndpointRangeDescription | undefined;
	readonly frontendConfigurations?: FrontendConfiguration[] | undefined;
	readonly isPrimary: boolean;
	readonly isStateless?: boolean | undefined;
	readonly multiplePlacementGroups?: boolean | undefined;
	readonly networkSecurityRules?: NetworkSecurityRule[] | undefined;
	readonly placementProperties?: NodeTypePropertiesPlacementProperties | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Created"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "None"
				| "Other"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly vmExtensions?: VmssExtension[] | undefined;
	readonly vmImageOffer?: string | undefined;
	readonly vmImagePublisher?: string | undefined;
	readonly vmImageSku?: string | undefined;
	readonly vmImageVersion?: string | undefined;
	readonly vmInstanceCount: number;
	readonly vmManagedIdentity?: VmManagedIdentity | undefined;
	readonly vmSecrets?: VaultSecretGroup[] | undefined;
	readonly vmSize?: string | undefined;
}
export interface NodeTypePropertiesCapacities {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NodeTypePropertiesPlacementProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NodeTypeSku {
	readonly capacity: number;
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface Partition {}
export interface ProxyResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly defaultLoad?: number | undefined;
	readonly name: string;
	readonly primaryDefaultLoad?: number | undefined;
	readonly secondaryDefaultLoad?: number | undefined;
	readonly weight?: ("High" | "Low" | "Medium" | "Zero") | undefined;
}
export interface ServicePlacementPolicy {}
export interface ServiceResourceProperties {
	readonly correlationScheme?: ServiceCorrelation[] | undefined;
	readonly defaultMoveCost?: ("High" | "Low" | "Medium" | "Zero") | undefined;
	readonly partitionDescription: Partition;
	readonly placementConstraints?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly scalingPolicies?: ScalingPolicy[] | undefined;
	readonly serviceLoadMetrics?: ServiceLoadMetric[] | undefined;
	readonly servicePackageActivationMode?: ("ExclusiveProcess" | "SharedProcess") | undefined;
	readonly servicePlacementPolicies?: ServicePlacementPolicy[] | undefined;
	readonly serviceTypeName: string;
}
export interface ServiceTypeHealthPolicy {
	readonly maxPercentUnhealthyPartitionsPerService: number;
}
export interface ServiceTypeHealthPolicyMap {
	readonly "[ key: string ]"?: ServiceTypeHealthPolicy | undefined;
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
	readonly id?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: string | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserAssignedIdentityMap {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
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
	readonly userAssignedIdentities?: string[] | undefined;
}
export interface VmssExtension {
	readonly name: string;
	readonly properties: VmssExtensionProperties;
}
export interface VmssExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly protectedSettings?: any | undefined;
	readonly provisionAfterExtensions?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher: string;
	readonly settings?: any | undefined;
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
