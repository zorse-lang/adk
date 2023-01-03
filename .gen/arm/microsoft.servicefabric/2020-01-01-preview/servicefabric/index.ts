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
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: NodeTypeProperties | undefined;
	readonly tags?: ManagedProxyResourceTags | undefined;
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
export interface LoadBalancingRule {
	readonly backendPort: number;
	readonly frontendPort: number;
	readonly probeProtocol: "http" | "https" | "tcp";
	readonly probeRequestPath?: string | undefined;
	readonly protocol: "tcp" | "udp";
}
export interface ManagedClusterProperties {
	readonly addonFeatures?: ("BackupRestoreService" | "DnsService" | "ResourceMonitorService"[]) | undefined;
	readonly adminPassword?: string | undefined;
	readonly adminUserName: string;
	readonly azureActiveDirectory?: AzureActiveDirectory | undefined;
	readonly clientConnectionPort?: number | undefined;
	readonly clients?: ClientCertificate[] | undefined;
	readonly clusterCertificateThumbprint?: string | undefined;
	readonly clusterCodeVersion?: string | undefined;
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
	readonly dnsName: string;
	readonly fabricSettings?: SettingsSectionDescription[] | undefined;
	readonly fqdn?: string | undefined;
	readonly httpGatewayConnectionPort?: number | undefined;
	readonly loadBalancingRules?: LoadBalancingRule[] | undefined;
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
}
export interface ManagedProxyResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NodeTypeProperties {
	readonly applicationPorts?: EndpointRangeDescription | undefined;
	readonly capacities?: NodeTypePropertiesCapacities | undefined;
	readonly dataDiskSizeGB: number;
	readonly ephemeralPorts?: EndpointRangeDescription | undefined;
	readonly isPrimary: boolean;
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
	readonly vmSecrets?: VaultSecretGroup[] | undefined;
	readonly vmSize?: string | undefined;
}
export interface NodeTypePropertiesCapacities {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NodeTypePropertiesPlacementProperties {
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
export interface Sku {
	readonly name: "Basic" | "Standard";
}
export interface SubResource {
	readonly id?: string | undefined;
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
	"managedClusters/nodeTypes": managedClusters_nodeTypes,
};
