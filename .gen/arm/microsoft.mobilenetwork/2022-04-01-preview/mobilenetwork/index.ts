import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class mobileNetworks extends ArmResource<mobileNetworksComponentInputs> implements mobileNetworksComponentOutputs {
	constructor(entity: ADKEntity, options: mobileNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/mobileNetworks", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/mobileNetworks";
}
export interface mobileNetworksComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/mobileNetworks";
}
export interface mobileNetworksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: MobileNetworkPropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mobileNetworks_dataNetworks
	extends ArmResource<mobileNetworks_dataNetworksComponentInputs>
	implements mobileNetworks_dataNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: mobileNetworks_dataNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/mobileNetworks/dataNetworks", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/mobileNetworks/dataNetworks";
}
export interface mobileNetworks_dataNetworksComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/mobileNetworks/dataNetworks";
}
export interface mobileNetworks_dataNetworksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DataNetworkPropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mobileNetworks_services
	extends ArmResource<mobileNetworks_servicesComponentInputs>
	implements mobileNetworks_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: mobileNetworks_servicesComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/mobileNetworks/services", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/mobileNetworks/services";
}
export interface mobileNetworks_servicesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/mobileNetworks/services";
}
export interface mobileNetworks_servicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServicePropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mobileNetworks_simPolicies
	extends ArmResource<mobileNetworks_simPoliciesComponentInputs>
	implements mobileNetworks_simPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: mobileNetworks_simPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/mobileNetworks/simPolicies", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/mobileNetworks/simPolicies";
}
export interface mobileNetworks_simPoliciesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/mobileNetworks/simPolicies";
}
export interface mobileNetworks_simPoliciesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SimPolicyPropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mobileNetworks_sites
	extends ArmResource<mobileNetworks_sitesComponentInputs>
	implements mobileNetworks_sitesComponentOutputs
{
	constructor(entity: ADKEntity, options: mobileNetworks_sitesComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/mobileNetworks/sites", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/mobileNetworks/sites";
}
export interface mobileNetworks_sitesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/mobileNetworks/sites";
}
export interface mobileNetworks_sitesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SitePropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mobileNetworks_slices
	extends ArmResource<mobileNetworks_slicesComponentInputs>
	implements mobileNetworks_slicesComponentOutputs
{
	constructor(entity: ADKEntity, options: mobileNetworks_slicesComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/mobileNetworks/slices", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/mobileNetworks/slices";
}
export interface mobileNetworks_slicesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/mobileNetworks/slices";
}
export interface mobileNetworks_slicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SlicePropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class packetCoreControlPlanes
	extends ArmResource<packetCoreControlPlanesComponentInputs>
	implements packetCoreControlPlanesComponentOutputs
{
	constructor(entity: ADKEntity, options: packetCoreControlPlanesComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/packetCoreControlPlanes", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/packetCoreControlPlanes";
}
export interface packetCoreControlPlanesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/packetCoreControlPlanes";
}
export interface packetCoreControlPlanesComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: PacketCoreControlPlanePropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class packetCoreControlPlanes_packetCoreDataPlanes
	extends ArmResource<packetCoreControlPlanes_packetCoreDataPlanesComponentInputs>
	implements packetCoreControlPlanes_packetCoreDataPlanesComponentOutputs
{
	constructor(entity: ADKEntity, options: packetCoreControlPlanes_packetCoreDataPlanesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes";
}
export interface packetCoreControlPlanes_packetCoreDataPlanesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes";
}
export interface packetCoreControlPlanes_packetCoreDataPlanesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: PacketCoreDataPlanePropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class packetCoreControlPlanes_packetCoreDataPlanes_attachedDataNetworks
	extends ArmResource<packetCoreControlPlanes_packetCoreDataPlanes_attachedDataNetworksComponentInputs>
	implements packetCoreControlPlanes_packetCoreDataPlanes_attachedDataNetworksComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: packetCoreControlPlanes_packetCoreDataPlanes_attachedDataNetworksComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks";
}
export interface packetCoreControlPlanes_packetCoreDataPlanes_attachedDataNetworksComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks";
}
export interface packetCoreControlPlanes_packetCoreDataPlanes_attachedDataNetworksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AttachedDataNetworkPropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class packetCoreControlPlaneVersions
	extends ArmResource<packetCoreControlPlaneVersionsComponentInputs>
	implements packetCoreControlPlaneVersionsComponentOutputs
{
	constructor(entity: ADKEntity, options: packetCoreControlPlaneVersionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MobileNetwork/packetCoreControlPlaneVersions",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/packetCoreControlPlaneVersions";
}
export interface packetCoreControlPlaneVersionsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/packetCoreControlPlaneVersions";
}
export interface packetCoreControlPlaneVersionsComponentInputs {
	readonly name: string;
	readonly properties?: PacketCoreControlPlaneVersionPropertiesFormat;
	readonly systemData?: SystemData;
}
export class simGroups extends ArmResource<simGroupsComponentInputs> implements simGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: simGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/simGroups", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/simGroups";
}
export interface simGroupsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/simGroups";
}
export interface simGroupsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: SimGroupPropertiesFormat;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class simGroups_sims extends ArmResource<simGroups_simsComponentInputs> implements simGroups_simsComponentOutputs {
	constructor(entity: ADKEntity, options: simGroups_simsComponentInputs) {
		super(entity, options.name, "Microsoft.MobileNetwork/simGroups/sims", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MobileNetwork/simGroups/sims";
}
export interface simGroups_simsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MobileNetwork/simGroups/sims";
}
export interface simGroups_simsComponentInputs {
	readonly name: string;
	readonly properties: SimPropertiesFormat;
	readonly systemData?: SystemData;
}
export function listSimIds(resource: mobileNetworks): SimIdListResult {
	if (resource.apiVersion !== "2022-04-01-preview") {
		throw new Error(`listSimIds is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MobileNetwork/mobileNetworks") {
		throw new Error(`listSimIds is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Ambr {
	readonly downlink: string;
	readonly uplink: string;
}
export interface AttachedDataNetworkPropertiesFormat {
	readonly dnsAddresses?: string[];
	readonly naptConfiguration?: NaptConfiguration;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly userEquipmentAddressPoolPrefix?: string[];
	readonly userEquipmentStaticAddressPoolPrefix?: string[];
	readonly userPlaneDataInterface: InterfaceProperties;
}
export interface AttachedDataNetworkResourceId {
	readonly id: string;
}
export interface AzureStackEdgeDeviceResourceId {
	readonly id: string;
}
export interface ConnectedClusterResourceId {
	readonly id: string;
}
export interface CustomLocationResourceId {
	readonly id: string;
}
export interface DataNetworkConfiguration {
	readonly "5qi"?: number;
	readonly additionalAllowedSessionTypes?: "IPv4" | "IPv6"[];
	readonly allocationAndRetentionPriorityLevel?: number;
	readonly allowedServices: ServiceResourceId[];
	readonly dataNetwork: DataNetworkResourceId;
	readonly defaultSessionType?: "IPv4" | "IPv6";
	readonly preemptionCapability?: "MayPreempt" | "NotPreempt";
	readonly preemptionVulnerability?: "NotPreemptable" | "Preemptable";
	readonly sessionAmbr: Ambr;
}
export interface DataNetworkPropertiesFormat {
	readonly description?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
}
export interface DataNetworkResourceId {
	readonly id: string;
}
export interface InterfaceProperties {
	readonly ipv4Address?: string;
	readonly ipv4Gateway?: string;
	readonly ipv4Subnet?: string;
	readonly name?: string;
}
export interface KeyVaultCertificate {
	readonly certificateUrl?: string;
}
export interface KeyVaultKey {
	readonly keyUrl?: string;
}
export interface LocalDiagnosticsAccessConfiguration {
	readonly httpsServerCertificate?: KeyVaultCertificate;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface MobileNetworkPropertiesFormat {
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly publicLandMobileNetworkIdentifier: PlmnId;
	readonly serviceKey?: string;
}
export interface MobileNetworkResourceId {
	readonly id: string;
}
export interface NaptConfiguration {
	readonly enabled?: "Disabled" | "Enabled";
	readonly pinholeLimits?: number;
	readonly pinholeTimeouts?: PinholeTimeouts;
	readonly portRange?: PortRange;
	readonly portReuseHoldTime?: PortReuseHoldTimes;
}
export interface PacketCoreControlPlanePropertiesFormat {
	readonly controlPlaneAccessInterface: InterfaceProperties;
	readonly coreNetworkTechnology?: "5GC" | "EPC";
	readonly interopSettings?: any;
	readonly localDiagnosticsAccess?: LocalDiagnosticsAccessConfiguration;
	readonly mobileNetwork: MobileNetworkResourceId;
	readonly platform?: PlatformConfiguration;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly sku:
		| "EdgeSite2GBPS"
		| "EdgeSite3GBPS"
		| "EdgeSite4GBPS"
		| "EvaluationPackage"
		| "FlagshipStarterPackage"
		| "LargePackage"
		| "MediumPackage";
	readonly version?: string;
}
export interface PacketCoreControlPlaneVersionPropertiesFormat {
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly recommendedVersion?: "NotRecommended" | "Recommended";
	readonly versionState?: "Active" | "Deprecated" | "Preview" | "Unknown" | "Validating" | "ValidationFailed";
}
export interface PacketCoreDataPlanePropertiesFormat {
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly userPlaneAccessInterface: InterfaceProperties;
}
export interface PccRuleConfiguration {
	readonly ruleName: string;
	readonly rulePrecedence: number;
	readonly ruleQosPolicy?: PccRuleQosPolicy;
	readonly serviceDataFlowTemplates: ServiceDataFlowTemplate[];
	readonly trafficControl?: "Blocked" | "Enabled";
}
export interface PccRuleQosPolicy {
	readonly "5qi"?: number;
	readonly allocationAndRetentionPriorityLevel?: number;
	readonly guaranteedBitRate?: Ambr;
	readonly maximumBitRate: Ambr;
	readonly preemptionCapability?: "MayPreempt" | "NotPreempt";
	readonly preemptionVulnerability?: "NotPreemptable" | "Preemptable";
}
export interface PinholeTimeouts {
	readonly icmp?: number;
	readonly tcp?: number;
	readonly udp?: number;
}
export interface PlatformConfiguration {
	readonly azureStackEdgeDevice?: AzureStackEdgeDeviceResourceId;
	readonly connectedCluster?: ConnectedClusterResourceId;
	readonly customLocation?: CustomLocationResourceId;
	readonly type: "AKS-HCI" | "BaseVM";
}
export interface PlmnId {
	readonly mcc: string;
	readonly mnc: string;
}
export interface PortRange {
	readonly maxPort?: number;
	readonly minPort?: number;
}
export interface PortReuseHoldTimes {
	readonly tcp?: number;
	readonly udp?: number;
}
export interface QosPolicy {
	readonly "5qi"?: number;
	readonly allocationAndRetentionPriorityLevel?: number;
	readonly maximumBitRate: Ambr;
	readonly preemptionCapability?: "MayPreempt" | "NotPreempt";
	readonly preemptionVulnerability?: "NotPreemptable" | "Preemptable";
}
export interface ServiceDataFlowTemplate {
	readonly direction: "Bidirectional" | "Downlink" | "Uplink";
	readonly ports?: string[];
	readonly protocol: string[];
	readonly remoteIpList: string[];
	readonly templateName: string;
}
export interface ServicePropertiesFormat {
	readonly pccRules: PccRuleConfiguration[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly servicePrecedence: number;
	readonly serviceQosPolicy?: QosPolicy;
}
export interface ServiceResourceId {
	readonly id: string;
}
export interface SimGroupPropertiesFormat {
	readonly encryptionKey?: KeyVaultKey;
	readonly mobileNetwork?: MobileNetworkResourceId;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
}
export interface SimIdListResult {
	readonly nextLink?: string;
	readonly value?: SubResource[];
}
export interface SimPolicyPropertiesFormat {
	readonly defaultSlice: SliceResourceId;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly registrationTimer?: number;
	readonly rfspIndex?: number;
	readonly sliceConfigurations: SliceConfiguration[];
	readonly ueAmbr: Ambr;
}
export interface SimPolicyResourceId {
	readonly id: string;
}
export interface SimPropertiesFormat {
	readonly authenticationKey?: string;
	readonly deviceType?: string;
	readonly integratedCircuitCardIdentifier?: string;
	readonly internationalMobileSubscriberIdentity: string;
	readonly operatorKeyCode?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly simPolicy?: SimPolicyResourceId;
	readonly simState?: "Disabled" | "Enabled" | "Invalid";
	readonly staticIpConfiguration?: SimStaticIpProperties[];
}
export interface SimStaticIpProperties {
	readonly attachedDataNetwork?: AttachedDataNetworkResourceId;
	readonly slice?: SliceResourceId;
	readonly staticIp?: SimStaticIpPropertiesStaticIp;
}
export interface SimStaticIpPropertiesStaticIp {
	readonly ipv4Address?: string;
}
export interface SitePropertiesFormat {
	readonly networkFunctions?: SubResource[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
}
export interface SliceConfiguration {
	readonly dataNetworkConfigurations: DataNetworkConfiguration[];
	readonly defaultDataNetwork: DataNetworkResourceId;
	readonly slice: SliceResourceId;
}
export interface SlicePropertiesFormat {
	readonly description?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly snssai: Snssai;
}
export interface SliceResourceId {
	readonly id: string;
}
export interface Snssai {
	readonly sd?: string;
	readonly sst: number;
}
export interface SubResource {
	readonly id: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	mobileNetworks: mobileNetworks,
	"mobileNetworks/dataNetworks": mobileNetworks_dataNetworks,
	"mobileNetworks/services": mobileNetworks_services,
	"mobileNetworks/simPolicies": mobileNetworks_simPolicies,
	"mobileNetworks/sites": mobileNetworks_sites,
	"mobileNetworks/slices": mobileNetworks_slices,
	packetCoreControlPlanes: packetCoreControlPlanes,
	"packetCoreControlPlanes/packetCoreDataPlanes": packetCoreControlPlanes_packetCoreDataPlanes,
	"packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks":
		packetCoreControlPlanes_packetCoreDataPlanes_attachedDataNetworks,
	packetCoreControlPlaneVersions: packetCoreControlPlaneVersions,
	simGroups: simGroups,
	"simGroups/sims": simGroups_sims,
};
