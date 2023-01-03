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
	readonly etag?: string | undefined;
	readonly identity?: ClusterIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClusterCreatePropertiesOrClusterGetProperties | undefined;
	readonly tags?: ClusterCreateParametersExtendedTags | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationProperties | undefined;
	readonly tags?: ApplicationTags | undefined;
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
	readonly destinationPort?: number | undefined;
	readonly location?: string | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly publicPort?: number | undefined;
}
export interface ApplicationGetHttpsEndpoint {
	readonly accessModes?: string[] | undefined;
	readonly destinationPort?: number | undefined;
	readonly disableGatewayAuth?: boolean | undefined;
	readonly location?: string | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly publicPort?: number | undefined;
	readonly subDomainSuffix?: string | undefined;
}
export interface ApplicationProperties {
	readonly applicationState?: string | undefined;
	readonly applicationType?: string | undefined;
	readonly computeProfile?: ComputeProfile | undefined;
	readonly createdDate?: string | undefined;
	readonly errors?: Errors[] | undefined;
	readonly httpsEndpoints?: ApplicationGetHttpsEndpoint[] | undefined;
	readonly installScriptActions?: RuntimeScriptAction[] | undefined;
	readonly marketplaceIdentifier?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly sshEndpoints?: ApplicationGetEndpoint[] | undefined;
	readonly uninstallScriptActions?: RuntimeScriptAction[] | undefined;
}
export interface ApplicationTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Autoscale {
	readonly capacity?: AutoscaleCapacity | undefined;
	readonly recurrence?: AutoscaleRecurrence | undefined;
}
export interface AutoscaleCapacity {
	readonly maxInstanceCount?: number | undefined;
	readonly minInstanceCount?: number | undefined;
}
export interface AutoscaleRecurrence {
	readonly schedule?: AutoscaleSchedule[] | undefined;
	readonly timeZone?: string | undefined;
}
export interface AutoscaleSchedule {
	readonly days?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
	readonly timeAndCapacity?: AutoscaleTimeAndCapacity | undefined;
}
export interface AutoscaleTimeAndCapacity {
	readonly maxInstanceCount?: number | undefined;
	readonly minInstanceCount?: number | undefined;
	readonly time?: string | undefined;
}
export interface ClientGroupInfo {
	readonly groupId?: string | undefined;
	readonly groupName?: string | undefined;
}
export interface ClusterCreateParametersExtendedTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ClusterCreatePropertiesOrClusterGetProperties {
	readonly clusterDefinition?: ClusterDefinition | undefined;
	readonly clusterHdpVersion?: string | undefined;
	readonly clusterId?: string | undefined;
	readonly clusterState?: string | undefined;
	readonly clusterVersion?: string | undefined;
	readonly computeIsolationProperties?: ComputeIsolationProperties | undefined;
	readonly computeProfile?: ComputeProfile | undefined;
	readonly connectivityEndpoints?: ConnectivityEndpoint[] | undefined;
	readonly createdDate?: string | undefined;
	readonly diskEncryptionProperties?: DiskEncryptionProperties | undefined;
	readonly encryptionInTransitProperties?: EncryptionInTransitProperties | undefined;
	readonly errors?: Errors[] | undefined;
	readonly excludedServicesConfig?: ExcludedServicesConfig | undefined;
	readonly kafkaRestProperties?: KafkaRestProperties | undefined;
	readonly minSupportedTlsVersion?: string | undefined;
	readonly networkProperties?: NetworkProperties | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly quotaInfo?: QuotaInfo | undefined;
	readonly securityProfile?: SecurityProfile | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly tier?: "Premium" | undefined;
}
export interface ClusterDefinition {
	readonly blueprint?: string | undefined;
	readonly componentVersion?: ClusterDefinitionComponentVersion | undefined;
	readonly configurations?: any | undefined;
	readonly kind?: string | undefined;
}
export interface ClusterDefinitionComponentVersion {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ClusterIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: ClusterIdentityUserAssignedIdentities | undefined;
}
export interface ClusterIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
}
export interface ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ComputeIsolationProperties {
	readonly enableComputeIsolation?: boolean | undefined;
	readonly hostSku?: string | undefined;
}
export interface ComputeProfile {
	readonly roles?: Role[] | undefined;
}
export interface ConnectivityEndpoint {
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly port?: number | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly protocol?: string | undefined;
}
export interface DataDisksGroups {
	readonly diskSizeGB?: number | undefined;
	readonly disksPerNode?: number | undefined;
	readonly storageAccountType?: string | undefined;
}
export interface DiskEncryptionProperties {
	readonly encryptionAlgorithm?: ("RSA-OAEP" | "RSA-OAEP-256" | "RSA1_5") | undefined;
	readonly encryptionAtHost?: boolean | undefined;
	readonly keyName?: string | undefined;
	readonly keyVersion?: string | undefined;
	readonly msiResourceId?: string | undefined;
	readonly vaultUri?: string | undefined;
}
export interface EncryptionInTransitProperties {
	readonly isEncryptionInTransitEnabled?: boolean | undefined;
}
export interface Errors {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ExcludedServicesConfig {
	readonly excludedServicesConfigId?: string | undefined;
	readonly excludedServicesList?: string | undefined;
}
export interface HardwareProfile {
	readonly vmSize?: string | undefined;
}
export interface HostInfo {
	readonly effectiveDiskEncryptionKeyUrl?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly name?: string | undefined;
}
export interface KafkaRestProperties {
	readonly clientGroupInfo?: ClientGroupInfo | undefined;
	readonly configurationOverride?: KafkaRestPropertiesConfigurationOverride | undefined;
}
export interface KafkaRestPropertiesConfigurationOverride {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LinuxOperatingSystemProfile {
	readonly password?: string | undefined;
	readonly sshProfile?: SshProfile | undefined;
	readonly username?: string | undefined;
}
export interface NetworkProperties {
	readonly privateLink?: ("Disabled" | "Enabled") | undefined;
	readonly resourceProviderConnection?: ("Inbound" | "Outbound") | undefined;
}
export interface OsProfile {
	readonly linuxOperatingSystemProfile?: LinuxOperatingSystemProfile | undefined;
}
export interface QuotaInfo {
	readonly coresUsed?: number | undefined;
}
export interface Role {
	readonly autoscale?: Autoscale | undefined;
	readonly dataDisksGroups?: DataDisksGroups[] | undefined;
	readonly encryptDataDisks?: boolean | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly minInstanceCount?: number | undefined;
	readonly name?: string | undefined;
	readonly osProfile?: OsProfile | undefined;
	readonly scriptActions?: ScriptAction[] | undefined;
	readonly targetInstanceCount?: number | undefined;
	readonly virtualNetworkProfile?: VirtualNetworkProfile | undefined;
	readonly VMGroupName?: string | undefined;
}
export interface RuntimeScriptAction {
	readonly applicationName?: string | undefined;
	readonly name: string;
	readonly parameters?: string | undefined;
	readonly roles: string[];
	readonly uri: string;
}
export interface ScriptAction {
	readonly name: string;
	readonly parameters: string;
	readonly uri: string;
}
export interface SecurityProfile {
	readonly aaddsResourceId?: string | undefined;
	readonly clusterUsersGroupDNs?: string[] | undefined;
	readonly directoryType?: "ActiveDirectory" | undefined;
	readonly domain?: string | undefined;
	readonly domainUsername?: string | undefined;
	readonly domainUserPassword?: string | undefined;
	readonly ldapsUrls?: string[] | undefined;
	readonly msiResourceId?: string | undefined;
	readonly organizationalUnitDN?: string | undefined;
}
export interface SshProfile {
	readonly publicKeys?: SshPublicKey[] | undefined;
}
export interface SshPublicKey {
	readonly certificateData?: string | undefined;
}
export interface StorageAccount {
	readonly container?: string | undefined;
	readonly fileshare?: string | undefined;
	readonly fileSystem?: string | undefined;
	readonly isDefault?: boolean | undefined;
	readonly key?: string | undefined;
	readonly msiResourceId?: string | undefined;
	readonly name?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly saskey?: string | undefined;
}
export interface StorageProfile {
	readonly storageaccounts?: StorageAccount[] | undefined;
}
export interface VirtualNetworkProfile {
	readonly id?: string | undefined;
	readonly subnet?: string | undefined;
}
export default {
	clusters: clusters,
	"clusters/applications": clusters_applications,
};
