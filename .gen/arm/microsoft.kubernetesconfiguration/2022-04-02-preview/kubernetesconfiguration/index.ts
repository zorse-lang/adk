import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class extensions extends ArmResource<extensionsComponentInputs> implements extensionsComponentOutputs {
	constructor(entity: ADKEntity, options: extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/extensions", "2022-04-02-preview", options);
	}
	public readonly apiVersion: "2022-04-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentOutputs {
	readonly apiVersion: "2022-04-02-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/extensions";
}
export interface extensionsComponentInputs {
	readonly identity?: Identity;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export class privateLinkScopes
	extends ArmResource<privateLinkScopesComponentInputs>
	implements privateLinkScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopesComponentInputs) {
		super(entity, options.name, "Microsoft.KubernetesConfiguration/privateLinkScopes", "2022-04-02-preview", options);
	}
	public readonly apiVersion: "2022-04-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/privateLinkScopes";
}
export interface privateLinkScopesComponentOutputs {
	readonly apiVersion: "2022-04-02-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/privateLinkScopes";
}
export interface privateLinkScopesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: KubernetesConfigurationPrivateLinkScopeProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class privateLinkScopes_privateEndpointConnections
	extends ArmResource<privateLinkScopes_privateEndpointConnectionsComponentInputs>
	implements privateLinkScopes_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopes_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections",
			"2022-04-02-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections";
}
export interface privateLinkScopes_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-04-02-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections";
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
			"Microsoft.KubernetesConfiguration/privateLinkScopes/privateLinkResources",
			"2022-04-02-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/privateLinkScopes/privateLinkResources";
}
export interface privateLinkScopes_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-04-02-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/privateLinkScopes/privateLinkResources";
}
export interface privateLinkScopes_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
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
export interface ExtensionProperties {
	readonly aksAssignedIdentity?: ExtensionPropertiesAksAssignedIdentity;
	readonly autoUpgradeMinorVersion?: boolean;
	readonly configurationProtectedSettings?: ExtensionPropertiesConfigurationProtectedSettings;
	readonly configurationSettings?: ExtensionPropertiesConfigurationSettings;
	readonly customLocationSettings?: ExtensionPropertiesCustomLocationSettings;
	readonly errorInfo?: ErrorDetail;
	readonly extensionType?: string;
	readonly installedVersion?: string;
	readonly packageUri?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly releaseTrain?: string;
	readonly scope?: Scope;
	readonly statuses?: ExtensionStatus[];
	readonly version?: string;
}
export interface ExtensionPropertiesAksAssignedIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface ExtensionPropertiesConfigurationProtectedSettings {
	readonly [key: string]: string;
}
export interface ExtensionPropertiesConfigurationSettings {
	readonly [key: string]: string;
}
export interface ExtensionPropertiesCustomLocationSettings {
	readonly [key: string]: string;
}
export interface ExtensionStatus {
	readonly code?: string;
	readonly displayStatus?: string;
	readonly level?: "Error" | "Information" | "Warning";
	readonly message?: string;
	readonly time?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface KubernetesConfigurationPrivateLinkScopeProperties {
	readonly clusterResourceId: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly privateLinkScopeId?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string;
	readonly publisher: string;
	readonly version?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface Scope {
	readonly cluster?: ScopeCluster;
	readonly namespace?: ScopeNamespace;
}
export interface ScopeCluster {
	readonly releaseNamespace?: string;
}
export interface ScopeNamespace {
	readonly targetNamespace?: string;
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
	extensions: extensions,
	privateLinkScopes: privateLinkScopes,
	"privateLinkScopes/privateEndpointConnections": privateLinkScopes_privateEndpointConnections,
	"privateLinkScopes/privateLinkResources": privateLinkScopes_privateLinkResources,
};
