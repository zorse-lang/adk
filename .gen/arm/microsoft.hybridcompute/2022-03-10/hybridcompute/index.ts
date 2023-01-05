import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class machines extends ArmResource<machinesComponentInputs> implements machinesComponentOutputs {
	constructor(entity: ADKEntity, options: machinesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines", "2022-03-10", options);
	}
	public readonly apiVersion: "2022-03-10";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentOutputs {
	readonly apiVersion: "2022-03-10";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class machines_extensions
	extends ArmResource<machines_extensionsComponentInputs>
	implements machines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: machines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines/extensions", "2022-03-10", options);
	}
	public readonly apiVersion: "2022-03-10";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentOutputs {
	readonly apiVersion: "2022-03-10";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineExtensionProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class privateLinkScopes
	extends ArmResource<privateLinkScopesComponentInputs>
	implements privateLinkScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/privateLinkScopes", "2022-03-10", options);
	}
	public readonly apiVersion: "2022-03-10";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/privateLinkScopes";
}
export interface privateLinkScopesComponentOutputs {
	readonly apiVersion: "2022-03-10";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/privateLinkScopes";
}
export interface privateLinkScopesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: HybridComputePrivateLinkScopeProperties;
	readonly systemData?: SystemData;
	readonly tags?: PrivateLinkScopesResourceTags;
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
			"2022-03-10",
			options,
		);
	}
	public readonly apiVersion: "2022-03-10";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections";
}
export interface privateLinkScopes_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-03-10";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections";
}
export interface privateLinkScopes_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
			"2022-03-10",
			options,
		);
	}
	public readonly apiVersion: "2022-03-10";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateLinkResources";
}
export interface privateLinkScopes_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-03-10";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/privateLinkScopes/privateLinkResources";
}
export interface privateLinkScopes_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export interface AgentConfiguration {
	readonly extensionsAllowList?: ConfigurationExtension[];
	readonly extensionsBlockList?: ConfigurationExtension[];
	readonly extensionsEnabled?: string;
	readonly guestConfigurationEnabled?: string;
	readonly incomingConnectionsPorts?: string[];
	readonly proxyBypass?: string[];
	readonly proxyUrl?: string;
}
export interface CloudMetadata {
	readonly provider?: string;
}
export interface ConfigurationExtension {
	readonly publisher?: string;
	readonly type?: string;
}
export interface DetectedProperties {
	readonly [key: string]: string;
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
	readonly target?: string;
}
export interface HybridComputePrivateLinkScopeProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnectionDataModel[];
	readonly privateLinkScopeId?: string;
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface LocationData {
	readonly city?: string;
	readonly countryOrRegion?: string;
	readonly district?: string;
	readonly name: string;
}
export interface MachineExtensionInstanceView {
	readonly name?: string;
	readonly status?: MachineExtensionInstanceViewStatus;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineExtensionInstanceViewStatus {
	readonly code?: string;
	readonly displayStatus?: string;
	readonly level?: "Error" | "Info" | "Warning";
	readonly message?: string;
	readonly time?: string;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly enableAutomaticUpgrade?: boolean;
	readonly forceUpdateTag?: string;
	readonly instanceView?: MachineExtensionInstanceView;
	readonly protectedSettings?: any;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineProperties {
	readonly adFqdn?: string;
	readonly agentConfiguration?: AgentConfiguration;
	readonly agentVersion?: string;
	readonly clientPublicKey?: string;
	readonly cloudMetadata?: CloudMetadata;
	readonly detectedProperties?: DetectedProperties;
	readonly displayName?: string;
	readonly dnsFqdn?: string;
	readonly domainName?: string;
	readonly errorDetails?: ErrorDetail[];
	readonly extensions?: MachineExtensionInstanceView[];
	readonly lastStatusChange?: string;
	readonly locationData?: LocationData;
	readonly machineFqdn?: string;
	readonly mssqlDiscovered?: string;
	readonly osName?: string;
	readonly osProfile?: OSProfile;
	readonly osSku?: string;
	readonly osType?: string;
	readonly osVersion?: string;
	readonly parentClusterResourceId?: string;
	readonly privateLinkScopeResourceId?: string;
	readonly provisioningState?: string;
	readonly serviceStatuses?: ServiceStatuses;
	readonly status?: "Connected" | "Disconnected" | "Error";
	readonly vmId?: string;
	readonly vmUuid?: string;
}
export interface OSProfile {
	readonly computerName?: string;
	readonly linuxConfiguration?: OSProfileLinuxConfiguration;
	readonly windowsConfiguration?: OSProfileWindowsConfiguration;
}
export interface OSProfileLinuxConfiguration {
	readonly patchSettings?: PatchSettings;
}
export interface OSProfileWindowsConfiguration {
	readonly patchSettings?: PatchSettings;
}
export interface PatchSettings {
	readonly assessmentMode?: "AutomaticByPlatform" | "ImageDefault";
	readonly patchMode?: "AutomaticByOS" | "AutomaticByPlatform" | "ImageDefault" | "Manual";
}
export interface PrivateEndpointConnectionDataModel {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: string;
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkScopesResourceTags {
	readonly [key: string]: string;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: string;
}
export interface ServiceStatus {
	readonly startupType?: string;
	readonly status?: string;
}
export interface ServiceStatuses {
	readonly extensionService?: ServiceStatus;
	readonly guestConfigurationService?: ServiceStatus;
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
export default {
	machines: machines,
	"machines/extensions": machines_extensions,
	privateLinkScopes: privateLinkScopes,
	"privateLinkScopes/privateEndpointConnections": privateLinkScopes_privateEndpointConnections,
	"privateLinkScopes/privateLinkResources": privateLinkScopes_privateLinkResources,
};
