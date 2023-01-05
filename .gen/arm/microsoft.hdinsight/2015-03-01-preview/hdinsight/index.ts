import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.HDInsight/clusters", "2015-03-01-preview", options);
	}
	public readonly apiVersion: "2015-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HDInsight/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2015-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HDInsight/clusters";
}
export interface clustersComponentInputs {
	readonly etag?: string;
	readonly identity?: ClusterIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterCreatePropertiesOrClusterGetProperties;
	readonly tags?: ClusterCreateParametersExtendedTags;
}
export class clusters_applications
	extends ArmResource<clusters_applicationsComponentInputs>
	implements clusters_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.HDInsight/clusters/applications", "2015-03-01-preview", options);
	}
	public readonly apiVersion: "2015-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HDInsight/clusters/applications";
}
export interface clusters_applicationsComponentOutputs {
	readonly apiVersion: "2015-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HDInsight/clusters/applications";
}
export interface clusters_applicationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ApplicationProperties;
	readonly tags?: ApplicationTags;
}
export function listHosts(resource: clusters): HostInfo[] {
	if (resource.apiVersion !== "2015-03-01-preview") {
		throw new Error(`listHosts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HDInsight/clusters") {
		throw new Error(`listHosts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplicationGetEndpoint {
	readonly destinationPort?: number;
	readonly location?: string;
	readonly privateIPAddress?: string;
	readonly publicPort?: number;
}
export interface ApplicationGetHttpsEndpoint {
	readonly accessModes?: string[];
	readonly destinationPort?: number;
	readonly disableGatewayAuth?: boolean;
	readonly location?: string;
	readonly privateIPAddress?: string;
	readonly publicPort?: number;
	readonly subDomainSuffix?: string;
}
export interface ApplicationProperties {
	readonly applicationState?: string;
	readonly applicationType?: string;
	readonly computeProfile?: ComputeProfile;
	readonly createdDate?: string;
	readonly errors?: Errors[];
	readonly httpsEndpoints?: ApplicationGetHttpsEndpoint[];
	readonly installScriptActions?: RuntimeScriptAction[];
	readonly marketplaceIdentifier?: string;
	readonly provisioningState?: string;
	readonly sshEndpoints?: ApplicationGetEndpoint[];
	readonly uninstallScriptActions?: RuntimeScriptAction[];
}
export interface ApplicationTags {
	readonly [key: string]: string;
}
export interface Autoscale {
	readonly capacity?: AutoscaleCapacity;
	readonly recurrence?: AutoscaleRecurrence;
}
export interface AutoscaleCapacity {
	readonly maxInstanceCount?: number;
	readonly minInstanceCount?: number;
}
export interface AutoscaleRecurrence {
	readonly schedule?: AutoscaleSchedule[];
	readonly timeZone?: string;
}
export interface AutoscaleSchedule {
	readonly days?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
	readonly timeAndCapacity?: AutoscaleTimeAndCapacity;
}
export interface AutoscaleTimeAndCapacity {
	readonly maxInstanceCount?: number;
	readonly minInstanceCount?: number;
	readonly time?: string;
}
export interface ClientGroupInfo {
	readonly groupId?: string;
	readonly groupName?: string;
}
export interface ClusterCreateParametersExtendedTags {
	readonly [key: string]: string;
}
export interface ClusterCreatePropertiesOrClusterGetProperties {
	readonly clusterDefinition?: ClusterDefinition;
	readonly clusterHdpVersion?: string;
	readonly clusterId?: string;
	readonly clusterState?: string;
	readonly clusterVersion?: string;
	readonly computeIsolationProperties?: ComputeIsolationProperties;
	readonly computeProfile?: ComputeProfile;
	readonly connectivityEndpoints?: ConnectivityEndpoint[];
	readonly createdDate?: string;
	readonly diskEncryptionProperties?: DiskEncryptionProperties;
	readonly encryptionInTransitProperties?: EncryptionInTransitProperties;
	readonly errors?: Errors[];
	readonly excludedServicesConfig?: ExcludedServicesConfig;
	readonly kafkaRestProperties?: KafkaRestProperties;
	readonly minSupportedTlsVersion?: string;
	readonly networkProperties?: NetworkProperties;
	readonly osType?: "Linux";
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly quotaInfo?: QuotaInfo;
	readonly securityProfile?: SecurityProfile;
	readonly storageProfile?: StorageProfile;
	readonly tier?: "Premium";
}
export interface ClusterDefinition {
	readonly blueprint?: string;
	readonly componentVersion?: ClusterDefinitionComponentVersion;
	readonly configurations?: any;
	readonly kind?: string;
}
export interface ClusterDefinitionComponentVersion {
	readonly [key: string]: string;
}
export interface ClusterIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: ClusterIdentityUserAssignedIdentities;
}
export interface ClusterIdentityUserAssignedIdentities {
	readonly [key: string]: ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties;
}
export interface ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
	readonly tenantId?: string;
}
export interface ComputeIsolationProperties {
	readonly enableComputeIsolation?: boolean;
	readonly hostSku?: string;
}
export interface ComputeProfile {
	readonly roles?: Role[];
}
export interface ConnectivityEndpoint {
	readonly location?: string;
	readonly name?: string;
	readonly port?: number;
	readonly privateIPAddress?: string;
	readonly protocol?: string;
}
export interface DataDisksGroups {
	readonly diskSizeGB?: number;
	readonly disksPerNode?: number;
	readonly storageAccountType?: string;
}
export interface DiskEncryptionProperties {
	readonly encryptionAlgorithm?: "RSA-OAEP" | "RSA-OAEP-256" | "RSA1_5";
	readonly encryptionAtHost?: boolean;
	readonly keyName?: string;
	readonly keyVersion?: string;
	readonly msiResourceId?: string;
	readonly vaultUri?: string;
}
export interface EncryptionInTransitProperties {
	readonly isEncryptionInTransitEnabled?: boolean;
}
export interface Errors {
	readonly code?: string;
	readonly message?: string;
}
export interface ExcludedServicesConfig {
	readonly excludedServicesConfigId?: string;
	readonly excludedServicesList?: string;
}
export interface HardwareProfile {
	readonly vmSize?: string;
}
export interface HostInfo {
	readonly effectiveDiskEncryptionKeyUrl?: string;
	readonly fqdn?: string;
	readonly name?: string;
}
export interface KafkaRestProperties {
	readonly clientGroupInfo?: ClientGroupInfo;
	readonly configurationOverride?: KafkaRestPropertiesConfigurationOverride;
}
export interface KafkaRestPropertiesConfigurationOverride {
	readonly [key: string]: string;
}
export interface LinuxOperatingSystemProfile {
	readonly password?: string;
	readonly sshProfile?: SshProfile;
	readonly username?: string;
}
export interface NetworkProperties {
	readonly privateLink?: "Disabled" | "Enabled";
	readonly resourceProviderConnection?: "Inbound" | "Outbound";
}
export interface OsProfile {
	readonly linuxOperatingSystemProfile?: LinuxOperatingSystemProfile;
}
export interface QuotaInfo {
	readonly coresUsed?: number;
}
export interface Role {
	readonly autoscale?: Autoscale;
	readonly dataDisksGroups?: DataDisksGroups[];
	readonly encryptDataDisks?: boolean;
	readonly hardwareProfile?: HardwareProfile;
	readonly minInstanceCount?: number;
	readonly name?: string;
	readonly osProfile?: OsProfile;
	readonly scriptActions?: ScriptAction[];
	readonly targetInstanceCount?: number;
	readonly virtualNetworkProfile?: VirtualNetworkProfile;
	readonly VMGroupName?: string;
}
export interface RuntimeScriptAction {
	readonly applicationName?: string;
	readonly name: string;
	readonly parameters?: string;
	readonly roles: string[];
	readonly uri: string;
}
export interface ScriptAction {
	readonly name: string;
	readonly parameters: string;
	readonly uri: string;
}
export interface SecurityProfile {
	readonly aaddsResourceId?: string;
	readonly clusterUsersGroupDNs?: string[];
	readonly directoryType?: "ActiveDirectory";
	readonly domain?: string;
	readonly domainUsername?: string;
	readonly domainUserPassword?: string;
	readonly ldapsUrls?: string[];
	readonly msiResourceId?: string;
	readonly organizationalUnitDN?: string;
}
export interface SshProfile {
	readonly publicKeys?: SshPublicKey[];
}
export interface SshPublicKey {
	readonly certificateData?: string;
}
export interface StorageAccount {
	readonly container?: string;
	readonly fileshare?: string;
	readonly fileSystem?: string;
	readonly isDefault?: boolean;
	readonly key?: string;
	readonly msiResourceId?: string;
	readonly name?: string;
	readonly resourceId?: string;
	readonly saskey?: string;
}
export interface StorageProfile {
	readonly storageaccounts?: StorageAccount[];
}
export interface VirtualNetworkProfile {
	readonly id?: string;
	readonly subnet?: string;
}
export default {
	clusters: clusters,
	"clusters/applications": clusters_applications,
};
