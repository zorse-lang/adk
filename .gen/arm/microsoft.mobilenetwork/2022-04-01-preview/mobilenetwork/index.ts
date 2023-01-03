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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: DataNetworkPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: SitePropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: PacketCoreControlPlanePropertiesFormat;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: PacketCoreControlPlaneVersionPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: SimGroupPropertiesFormat;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly dnsAddresses?: string[] | undefined;
	readonly naptConfiguration?: NaptConfiguration | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly userEquipmentAddressPoolPrefix?: string[] | undefined;
	readonly userEquipmentStaticAddressPoolPrefix?: string[] | undefined;
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
	readonly "5qi"?: number | undefined;
	readonly additionalAllowedSessionTypes?: ("IPv4" | "IPv6"[]) | undefined;
	readonly allocationAndRetentionPriorityLevel?: number | undefined;
	readonly allowedServices: ServiceResourceId[];
	readonly dataNetwork: DataNetworkResourceId;
	readonly defaultSessionType?: ("IPv4" | "IPv6") | undefined;
	readonly preemptionCapability?: ("MayPreempt" | "NotPreempt") | undefined;
	readonly preemptionVulnerability?: ("NotPreemptable" | "Preemptable") | undefined;
	readonly sessionAmbr: Ambr;
}
export interface DataNetworkPropertiesFormat {
	readonly description?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
}
export interface DataNetworkResourceId {
	readonly id: string;
}
export interface InterfaceProperties {
	readonly ipv4Address?: string | undefined;
	readonly ipv4Gateway?: string | undefined;
	readonly ipv4Subnet?: string | undefined;
	readonly name?: string | undefined;
}
export interface KeyVaultCertificate {
	readonly certificateUrl?: string | undefined;
}
export interface KeyVaultKey {
	readonly keyUrl?: string | undefined;
}
export interface LocalDiagnosticsAccessConfiguration {
	readonly httpsServerCertificate?: KeyVaultCertificate | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface MobileNetworkPropertiesFormat {
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly publicLandMobileNetworkIdentifier: PlmnId;
	readonly serviceKey?: string | undefined;
}
export interface MobileNetworkResourceId {
	readonly id: string;
}
export interface NaptConfiguration {
	readonly enabled?: ("Disabled" | "Enabled") | undefined;
	readonly pinholeLimits?: number | undefined;
	readonly pinholeTimeouts?: PinholeTimeouts | undefined;
	readonly portRange?: PortRange | undefined;
	readonly portReuseHoldTime?: PortReuseHoldTimes | undefined;
}
export interface PacketCoreControlPlanePropertiesFormat {
	readonly controlPlaneAccessInterface: InterfaceProperties;
	readonly coreNetworkTechnology?: ("5GC" | "EPC") | undefined;
	readonly interopSettings?: any | undefined;
	readonly localDiagnosticsAccess?: LocalDiagnosticsAccessConfiguration | undefined;
	readonly mobileNetwork: MobileNetworkResourceId;
	readonly platform?: PlatformConfiguration | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly sku:
		| "EdgeSite2GBPS"
		| "EdgeSite3GBPS"
		| "EdgeSite4GBPS"
		| "EvaluationPackage"
		| "FlagshipStarterPackage"
		| "LargePackage"
		| "MediumPackage";
	readonly version?: string | undefined;
}
export interface PacketCoreControlPlaneVersionPropertiesFormat {
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly recommendedVersion?: ("NotRecommended" | "Recommended") | undefined;
	readonly versionState?:
		| ("Active" | "Deprecated" | "Preview" | "Unknown" | "Validating" | "ValidationFailed")
		| undefined;
}
export interface PacketCoreDataPlanePropertiesFormat {
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly userPlaneAccessInterface: InterfaceProperties;
}
export interface PccRuleConfiguration {
	readonly ruleName: string;
	readonly rulePrecedence: number;
	readonly ruleQosPolicy?: PccRuleQosPolicy | undefined;
	readonly serviceDataFlowTemplates: ServiceDataFlowTemplate[];
	readonly trafficControl?: ("Blocked" | "Enabled") | undefined;
}
export interface PccRuleQosPolicy {
	readonly "5qi"?: number | undefined;
	readonly allocationAndRetentionPriorityLevel?: number | undefined;
	readonly guaranteedBitRate?: Ambr | undefined;
	readonly maximumBitRate: Ambr;
	readonly preemptionCapability?: ("MayPreempt" | "NotPreempt") | undefined;
	readonly preemptionVulnerability?: ("NotPreemptable" | "Preemptable") | undefined;
}
export interface PinholeTimeouts {
	readonly icmp?: number | undefined;
	readonly tcp?: number | undefined;
	readonly udp?: number | undefined;
}
export interface PlatformConfiguration {
	readonly azureStackEdgeDevice?: AzureStackEdgeDeviceResourceId | undefined;
	readonly connectedCluster?: ConnectedClusterResourceId | undefined;
	readonly customLocation?: CustomLocationResourceId | undefined;
	readonly type: "AKS-HCI" | "BaseVM";
}
export interface PlmnId {
	readonly mcc: string;
	readonly mnc: string;
}
export interface PortRange {
	readonly maxPort?: number | undefined;
	readonly minPort?: number | undefined;
}
export interface PortReuseHoldTimes {
	readonly tcp?: number | undefined;
	readonly udp?: number | undefined;
}
export interface QosPolicy {
	readonly "5qi"?: number | undefined;
	readonly allocationAndRetentionPriorityLevel?: number | undefined;
	readonly maximumBitRate: Ambr;
	readonly preemptionCapability?: ("MayPreempt" | "NotPreempt") | undefined;
	readonly preemptionVulnerability?: ("NotPreemptable" | "Preemptable") | undefined;
}
export interface ServiceDataFlowTemplate {
	readonly direction: "Bidirectional" | "Downlink" | "Uplink";
	readonly ports?: string[] | undefined;
	readonly protocol: string[];
	readonly remoteIpList: string[];
	readonly templateName: string;
}
export interface ServicePropertiesFormat {
	readonly pccRules: PccRuleConfiguration[];
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly servicePrecedence: number;
	readonly serviceQosPolicy?: QosPolicy | undefined;
}
export interface ServiceResourceId {
	readonly id: string;
}
export interface SimGroupPropertiesFormat {
	readonly encryptionKey?: KeyVaultKey | undefined;
	readonly mobileNetwork?: MobileNetworkResourceId | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
}
export interface SimIdListResult {
	readonly nextLink?: string | undefined;
	readonly value?: SubResource[] | undefined;
}
export interface SimPolicyPropertiesFormat {
	readonly defaultSlice: SliceResourceId;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly registrationTimer?: number | undefined;
	readonly rfspIndex?: number | undefined;
	readonly sliceConfigurations: SliceConfiguration[];
	readonly ueAmbr: Ambr;
}
export interface SimPolicyResourceId {
	readonly id: string;
}
export interface SimPropertiesFormat {
	readonly authenticationKey?: string | undefined;
	readonly deviceType?: string | undefined;
	readonly integratedCircuitCardIdentifier?: string | undefined;
	readonly internationalMobileSubscriberIdentity: string;
	readonly operatorKeyCode?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly simPolicy?: SimPolicyResourceId | undefined;
	readonly simState?: ("Disabled" | "Enabled" | "Invalid") | undefined;
	readonly staticIpConfiguration?: SimStaticIpProperties[] | undefined;
}
export interface SimStaticIpProperties {
	readonly attachedDataNetwork?: AttachedDataNetworkResourceId | undefined;
	readonly slice?: SliceResourceId | undefined;
	readonly staticIp?: SimStaticIpPropertiesStaticIp | undefined;
}
export interface SimStaticIpPropertiesStaticIp {
	readonly ipv4Address?: string | undefined;
}
export interface SitePropertiesFormat {
	readonly networkFunctions?: SubResource[] | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
}
export interface SliceConfiguration {
	readonly dataNetworkConfigurations: DataNetworkConfiguration[];
	readonly defaultDataNetwork: DataNetworkResourceId;
	readonly slice: SliceResourceId;
}
export interface SlicePropertiesFormat {
	readonly description?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly snssai: Snssai;
}
export interface SliceResourceId {
	readonly id: string;
}
export interface Snssai {
	readonly sd?: string | undefined;
	readonly sst: number;
}
export interface SubResource {
	readonly id: string;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
