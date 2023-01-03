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
	readonly identity?: Identity | undefined;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: ExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: KubernetesConfigurationPrivateLinkScopeProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
export interface ExtensionProperties {
	readonly aksAssignedIdentity?: ExtensionPropertiesAksAssignedIdentity | undefined;
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly configurationProtectedSettings?: ExtensionPropertiesConfigurationProtectedSettings | undefined;
	readonly configurationSettings?: ExtensionPropertiesConfigurationSettings | undefined;
	readonly customLocationSettings?: ExtensionPropertiesCustomLocationSettings | undefined;
	readonly errorInfo?: ErrorDetail | undefined;
	readonly extensionType?: string | undefined;
	readonly installedVersion?: string | undefined;
	readonly packageUri?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly releaseTrain?: string | undefined;
	readonly scope?: Scope | undefined;
	readonly statuses?: ExtensionStatus[] | undefined;
	readonly version?: string | undefined;
}
export interface ExtensionPropertiesAksAssignedIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface ExtensionPropertiesConfigurationProtectedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionPropertiesConfigurationSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionPropertiesCustomLocationSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Information" | "Warning") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface KubernetesConfigurationPrivateLinkScopeProperties {
	readonly clusterResourceId: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly privateLinkScopeId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string | undefined;
	readonly publisher: string;
	readonly version?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface Scope {
	readonly cluster?: ScopeCluster | undefined;
	readonly namespace?: ScopeNamespace | undefined;
}
export interface ScopeCluster {
	readonly releaseNamespace?: string | undefined;
}
export interface ScopeNamespace {
	readonly targetNamespace?: string | undefined;
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
	extensions: extensions,
	privateLinkScopes: privateLinkScopes,
	"privateLinkScopes/privateEndpointConnections": privateLinkScopes_privateEndpointConnections,
	"privateLinkScopes/privateLinkResources": privateLinkScopes_privateLinkResources,
};
