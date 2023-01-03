import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class machines extends ArmResource<machinesComponentInputs> implements machinesComponentOutputs {
	constructor(entity: ADKEntity, options: machinesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines", "2021-12-10-preview", options);
	}
	public readonly apiVersion: "2021-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentOutputs {
	readonly apiVersion: "2021-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class machines_extensions
	extends ArmResource<machines_extensionsComponentInputs>
	implements machines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: machines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines/extensions", "2021-12-10-preview", options);
	}
	public readonly apiVersion: "2021-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentOutputs {
	readonly apiVersion: "2021-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class privateLinkScopes
	extends ArmResource<privateLinkScopesComponentInputs>
	implements privateLinkScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/privateLinkScopes", "2021-12-10-preview", options);
	}
	public readonly apiVersion: "2021-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/privateLinkScopes";
}
export interface privateLinkScopesComponentOutputs {
	readonly apiVersion: "2021-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/privateLinkScopes";
}
export interface privateLinkScopesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: HybridComputePrivateLinkScopeProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: PrivateLinkScopesResourceTags | undefined;
}
export class privateLinkScopes_privateEndpointConnections
	extends ArmResource<privateLinkScopes_privateEndpointConnectionsComponentInputs>
	implements privateLinkScopes_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopes_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections",
			"2021-12-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections";
}
export interface privateLinkScopes_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections";
}
export interface privateLinkScopes_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkScopes_privateLinkResources
	extends ArmResource<privateLinkScopes_privateLinkResourcesComponentInputs>
	implements privateLinkScopes_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopes_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HybridCompute/privateLinkScopes/privateLinkResources",
			"2021-12-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateLinkResources";
}
export interface privateLinkScopes_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateLinkResources";
}
export interface privateLinkScopes_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AgentConfiguration {
	readonly incomingConnectionsPorts?: string[] | undefined;
	readonly proxyUrl?: string | undefined;
}
export interface CloudMetadata {
	readonly provider?: string | undefined;
}
export interface DetectedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface HybridComputePrivateLinkScopeProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnectionDataModel[] | undefined;
	readonly privateLinkScopeId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface LocationData {
	readonly city?: string | undefined;
	readonly countryOrRegion?: string | undefined;
	readonly district?: string | undefined;
	readonly name: string;
}
export interface MachineExtensionInstanceView {
	readonly name?: string | undefined;
	readonly status?: MachineExtensionInstanceViewStatus | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineExtensionInstanceViewStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Info" | "Warning") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly enableAutomaticUpgrade?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly instanceView?: MachineExtensionInstanceView | undefined;
	readonly protectedSettings?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineProperties {
	readonly adFqdn?: string | undefined;
	readonly agentConfiguration?: AgentConfiguration | undefined;
	readonly agentVersion?: string | undefined;
	readonly clientPublicKey?: string | undefined;
	readonly cloudMetadata?: CloudMetadata | undefined;
	readonly detectedProperties?: DetectedProperties | undefined;
	readonly displayName?: string | undefined;
	readonly dnsFqdn?: string | undefined;
	readonly domainName?: string | undefined;
	readonly errorDetails?: ErrorDetail[] | undefined;
	readonly extensions?: MachineExtensionInstanceView[] | undefined;
	readonly lastStatusChange?: string | undefined;
	readonly locationData?: LocationData | undefined;
	readonly machineFqdn?: string | undefined;
	readonly mssqlDiscovered?: string | undefined;
	readonly osName?: string | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly osSku?: string | undefined;
	readonly osType?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly parentClusterResourceId?: string | undefined;
	readonly privateLinkScopeResourceId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Connected" | "Disconnected" | "Error") | undefined;
	readonly vmId?: string | undefined;
	readonly vmUuid?: string | undefined;
}
export interface OSProfile {
	readonly computerName?: string | undefined;
	readonly linuxConfiguration?: OSProfileLinuxConfiguration | undefined;
	readonly windowsConfiguration?: OSProfileWindowsConfiguration | undefined;
}
export interface OSProfileLinuxConfiguration {
	readonly patchSettings?: PatchSettings | undefined;
}
export interface OSProfileWindowsConfiguration {
	readonly patchSettings?: PatchSettings | undefined;
}
export interface PatchSettings {
	readonly assessmentMode?: string | undefined;
	readonly patchMode?: string | undefined;
}
export interface PrivateEndpointConnectionDataModel {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkScopesResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: string;
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
export default {
	machines: machines,
	"machines/extensions": machines_extensions,
	privateLinkScopes: privateLinkScopes,
	"privateLinkScopes/privateEndpointConnections": privateLinkScopes_privateEndpointConnections,
	"privateLinkScopes/privateLinkResources": privateLinkScopes_privateLinkResources,
};
