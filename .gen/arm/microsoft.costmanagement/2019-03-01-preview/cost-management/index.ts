import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class cloudConnectors
	extends ArmResource<cloudConnectorsComponentInputs>
	implements cloudConnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: cloudConnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/cloudConnectors", "2019-03-01-preview", options);
	}
	public readonly apiVersion: "2019-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/cloudConnectors";
}
export interface cloudConnectorsComponentOutputs {
	readonly apiVersion: "2019-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/cloudConnectors";
}
export interface cloudConnectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ConnectorProperties;
}
export class externalBillingAccounts
	extends ArmResource<externalBillingAccountsComponentInputs>
	implements externalBillingAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: externalBillingAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/externalBillingAccounts", "2019-03-01-preview", options);
	}
	public readonly apiVersion: "2019-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/externalBillingAccounts";
}
export interface externalBillingAccountsComponentOutputs {
	readonly apiVersion: "2019-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/externalBillingAccounts";
}
export interface externalBillingAccountsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ExternalBillingAccountProperties;
}
export class externalSubscriptions
	extends ArmResource<externalSubscriptionsComponentInputs>
	implements externalSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: externalSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/externalSubscriptions", "2019-03-01-preview", options);
	}
	public readonly apiVersion: "2019-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/externalSubscriptions";
}
export interface externalSubscriptionsComponentOutputs {
	readonly apiVersion: "2019-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/externalSubscriptions";
}
export interface externalSubscriptionsComponentInputs {
	readonly name: string;
}
export class showbackRules extends ArmResource<showbackRulesComponentInputs> implements showbackRulesComponentOutputs {
	constructor(entity: ADKEntity, options: showbackRulesComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/showbackRules", "2019-03-01-preview", options);
	}
	public readonly apiVersion: "2019-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/showbackRules";
}
export interface showbackRulesComponentOutputs {
	readonly apiVersion: "2019-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/showbackRules";
}
export interface showbackRulesComponentInputs {
	readonly name: string;
	readonly properties?: ShowbackRuleProperties;
}
export interface ConnectorCollectionErrorInfo {
	readonly errorCode?: string;
	readonly errorInnerMessage?: string;
	readonly errorMessage?: string;
	readonly errorStartTime?: string;
}
export interface ConnectorCollectionInfo {
	readonly error?: ConnectorCollectionErrorInfo;
	readonly lastChecked?: string;
	readonly lastUpdated?: string;
	readonly sourceLastUpdated?: string;
}
export interface ConnectorProperties {
	readonly billingModel?: "autoUpgrade" | "expired" | "premium" | "trial";
	readonly collectionInfo?: ConnectorCollectionInfo;
	readonly createdOn?: string;
	readonly credentialsKey?: string;
	readonly credentialsSecret?: string;
	readonly daysTrialRemaining?: number;
	readonly defaultManagementGroupId?: string;
	readonly displayName?: string;
	readonly externalBillingAccountId?: string;
	readonly modifiedOn?: string;
	readonly providerBillingAccountDisplayName?: string;
	readonly providerBillingAccountId?: string;
	readonly reportId?: string;
	readonly status?: "active" | "error" | "expired" | "warning";
	readonly subscriptionId?: string;
}
export interface CostAllocationDetails {
	readonly policy?: "Evenly" | "Fixed" | "Proportional";
}
export interface CustomPriceDetails {
	readonly benefits?: "AHUB" | "All" | "None" | "Reservations" | "Sum"[];
	readonly markups?: Markup[];
	readonly pricesheet?: string;
}
export interface ExternalBillingAccountProperties {
	readonly collectionInfo?: ConnectorCollectionInfo;
	readonly connectorId?: string;
	readonly displayName?: string;
	readonly providerBillingAccountId?: string;
}
export interface Markup {
	readonly percentage?: string;
}
export interface Scope {
	readonly childScope?: Scope;
	readonly id?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface ShowbackRuleProperties {
	readonly creationTime?: string;
	readonly deprecationTime?: string;
	readonly description?: string;
	readonly modificationTime?: string;
	readonly scopes?: Scope[];
	readonly status?: "Active" | "NotActive";
	readonly version?: number;
}
export default {
	cloudConnectors: cloudConnectors,
	externalBillingAccounts: externalBillingAccounts,
	externalSubscriptions: externalSubscriptions,
	showbackRules: showbackRules,
};
