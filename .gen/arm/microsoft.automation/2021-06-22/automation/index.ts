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
	readonly etag?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: AutomationAccountCreateOrUpdateParametersTags | undefined;
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
	readonly credential?: RunAsCredentialAssociationProperty | undefined;
	readonly groupType?: ("System" | "User") | undefined;
	readonly hybridRunbookWorkers?: HybridRunbookWorkerLegacy[] | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly "[ key: string ]"?: string | undefined;
}
export interface AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties {
	readonly automationHybridServiceUrl?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly encryption?: EncryptionProperties | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly publicNetworkAccess?: boolean | undefined;
	readonly sku?: Sku | undefined;
	readonly state?: ("Ok" | "Suspended" | "Unavailable") | undefined;
}
export interface ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface EncryptionProperties {
	readonly identity?: EncryptionPropertiesIdentity | undefined;
	readonly keySource?: "Microsoft.Automation" | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
}
export interface EncryptionPropertiesIdentity {
	readonly userAssignedIdentity?: any | undefined;
}
export interface HybridRunbookWorkerCreateOrUpdateParametersOrHybridRunbookWorkerProperties {
	readonly ip?: string | undefined;
	readonly lastSeenDateTime?: string | undefined;
	readonly registeredDateTime?: string | undefined;
	readonly vmResourceId?: string | undefined;
	readonly workerName?: string | undefined;
	readonly workerType?: ("HybridV1" | "HybridV2") | undefined;
}
export interface HybridRunbookWorkerLegacy {
	readonly ip?: string | undefined;
	readonly lastSeenDateTime?: string | undefined;
	readonly name?: string | undefined;
	readonly registrationTime?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
}
export interface Key {
	readonly KeyName?: ("Primary" | "Secondary") | undefined;
	readonly Permissions?: ("Full" | "Read") | undefined;
	readonly Value?: string | undefined;
}
export interface KeyListResult {
	readonly keys?: Key[] | undefined;
}
export interface KeyVaultProperties {
	readonly keyName?: string | undefined;
	readonly keyvaultUri?: string | undefined;
	readonly keyVersion?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface RunAsCredentialAssociationProperty {
	readonly name?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: "Basic" | "Free";
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	automationAccounts: automationAccounts,
	"automationAccounts/hybridRunbookWorkerGroups": automationAccounts_hybridRunbookWorkerGroups,
	"automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers":
		automationAccounts_hybridRunbookWorkerGroups_hybridRunbookWorkers,
};
