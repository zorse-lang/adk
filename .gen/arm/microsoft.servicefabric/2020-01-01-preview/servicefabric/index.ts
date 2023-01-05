import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedClusters", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class managedClusters_nodeTypes
	extends ArmResource<managedClusters_nodeTypesComponentInputs>
	implements managedClusters_nodeTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_nodeTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceFabric/managedClusters/nodeTypes", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceFabric/managedClusters/nodeTypes";
}
export interface managedClusters_nodeTypesComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceFabric/managedClusters/nodeTypes";
}
export interface managedClusters_nodeTypesComponentInputs {
	readonly name: string;
	readonly properties?: NodeTypeProperties;
	readonly tags?: ManagedProxyResourceTags;
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
	readonly probeProtocol: "http" | "https" | "tcp";
	readonly probeRequestPath?: string;
	readonly protocol: "tcp" | "udp";
}
export interface ManagedClusterProperties {
	readonly addonFeatures?: "BackupRestoreService" | "DnsService" | "ResourceMonitorService"[];
	readonly adminPassword?: string;
	readonly adminUserName: string;
	readonly azureActiveDirectory?: AzureActiveDirectory;
	readonly clientConnectionPort?: number;
	readonly clients?: ClientCertificate[];
	readonly clusterCertificateThumbprint?: string;
	readonly clusterCodeVersion?: string;
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
	readonly dnsName: string;
	readonly fabricSettings?: SettingsSectionDescription[];
	readonly fqdn?: string;
	readonly httpGatewayConnectionPort?: number;
	readonly loadBalancingRules?: LoadBalancingRule[];
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
}
export interface ManagedProxyResourceTags {
	readonly [key: string]: string;
}
export interface NodeTypeProperties {
	readonly applicationPorts?: EndpointRangeDescription;
	readonly capacities?: NodeTypePropertiesCapacities;
	readonly dataDiskSizeGB: number;
	readonly ephemeralPorts?: EndpointRangeDescription;
	readonly isPrimary: boolean;
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
	readonly vmSecrets?: VaultSecretGroup[];
	readonly vmSize?: string;
}
export interface NodeTypePropertiesCapacities {
	readonly [key: string]: string;
}
export interface NodeTypePropertiesPlacementProperties {
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
export interface Sku {
	readonly name: "Basic" | "Standard";
}
export interface SubResource {
	readonly id?: string;
}
export interface VaultCertificate {
	readonly certificateStore: string;
	readonly certificateUrl: string;
}
export interface VaultSecretGroup {
	readonly sourceVault: SubResource;
	readonly vaultCertificates: VaultCertificate[];
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
	"managedClusters/nodeTypes": managedClusters_nodeTypes,
};
