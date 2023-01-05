import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class automationAccounts
	extends ArmResource<automationAccountsComponentInputs>
	implements automationAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts", "2021-06-22", options);
	}
	public readonly apiVersion: "2021-06-22";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts";
}
export interface automationAccountsComponentOutputs {
	readonly apiVersion: "2021-06-22";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts";
}
export interface automationAccountsComponentInputs {
	readonly etag?: string;
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties;
	readonly systemData?: SystemData;
	readonly tags?: AutomationAccountCreateOrUpdateParametersTags;
}
export class automationAccounts_hybridRunbookWorkerGroups
	extends ArmResource<automationAccounts_hybridRunbookWorkerGroupsComponentInputs>
	implements automationAccounts_hybridRunbookWorkerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_hybridRunbookWorkerGroupsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups",
			"2021-06-22",
			options,
		);
	}
	public readonly apiVersion: "2021-06-22";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups";
}
export interface automationAccounts_hybridRunbookWorkerGroupsComponentOutputs {
	readonly apiVersion: "2021-06-22";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups";
}
export interface automationAccounts_hybridRunbookWorkerGroupsComponentInputs {
	readonly credential?: RunAsCredentialAssociationProperty;
	readonly groupType?: "System" | "User";
	readonly hybridRunbookWorkers?: HybridRunbookWorkerLegacy[];
	readonly name: string;
	readonly systemData?: SystemData;
}
export class automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkers
	extends ArmResource<automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkersComponentInputs>
	implements automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkersComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkersComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers",
			"2021-06-22",
			options,
		);
	}
	public readonly apiVersion: "2021-06-22";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers";
}
export interface automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkersComponentOutputs {
	readonly apiVersion: "2021-06-22";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers";
}
export interface automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkersComponentInputs {
	readonly name: string;
	readonly properties: HybridRunbookWorkerCreateOrUpdateParametersOrHybridRunbookWorkerProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: automationAccounts): KeyListResult {
	if (resource.apiVersion !== "2021-06-22") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Automation/automationAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AutomationAccountCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties {
	readonly automationHybridServiceUrl?: string;
	readonly creationTime?: string;
	readonly description?: string;
	readonly disableLocalAuth?: boolean;
	readonly encryption?: EncryptionProperties;
	readonly lastModifiedBy?: string;
	readonly lastModifiedTime?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly publicNetworkAccess?: boolean;
	readonly sku?: Sku;
	readonly state?: "Ok" | "Suspended" | "Unavailable";
}
export interface ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface EncryptionProperties {
	readonly identity?: EncryptionPropertiesIdentity;
	readonly keySource?: "Microsoft.Automation";
	readonly keyVaultProperties?: KeyVaultProperties;
}
export interface EncryptionPropertiesIdentity {
	readonly userAssignedIdentity?: any;
}
export interface HybridRunbookWorkerCreateOrUpdateParametersOrHybridRunbookWorkerProperties {
	readonly ip?: string;
	readonly lastSeenDateTime?: string;
	readonly registeredDateTime?: string;
	readonly vmResourceId?: string;
	readonly workerName?: string;
	readonly workerType?: "HybridV1" | "HybridV2";
}
export interface HybridRunbookWorkerLegacy {
	readonly ip?: string;
	readonly lastSeenDateTime?: string;
	readonly name?: string;
	readonly registrationTime?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties;
}
export interface Key {
	readonly KeyName?: "Primary" | "Secondary";
	readonly Permissions?: "Full" | "Read";
	readonly Value?: string;
}
export interface KeyListResult {
	readonly keys?: Key[];
}
export interface KeyVaultProperties {
	readonly keyName?: string;
	readonly keyvaultUri?: string;
	readonly keyVersion?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface RunAsCredentialAssociationProperty {
	readonly name?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: "Basic" | "Free";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	automationAccounts: automationAccounts,
	"automationAccounts/hybridRunbookWorkerGroups": automationAccounts_hybridRunbookWorkerGroups,
	"automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers":
		automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkers,
};
