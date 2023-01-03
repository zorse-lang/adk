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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectorProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ExternalBillingAccountProperties | undefined;
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
	readonly properties?: ShowbackRuleProperties | undefined;
}
export interface ConnectorCollectionErrorInfo {
	readonly errorCode?: string | undefined;
	readonly errorInnerMessage?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorStartTime?: string | undefined;
}
export interface ConnectorCollectionInfo {
	readonly error?: ConnectorCollectionErrorInfo | undefined;
	readonly lastChecked?: string | undefined;
	readonly lastUpdated?: string | undefined;
	readonly sourceLastUpdated?: string | undefined;
}
export interface ConnectorProperties {
	readonly billingModel?: ("autoUpgrade" | "expired" | "premium" | "trial") | undefined;
	readonly collectionInfo?: ConnectorCollectionInfo | undefined;
	readonly createdOn?: string | undefined;
	readonly credentialsKey?: string | undefined;
	readonly credentialsSecret?: string | undefined;
	readonly daysTrialRemaining?: number | undefined;
	readonly defaultManagementGroupId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly externalBillingAccountId?: string | undefined;
	readonly modifiedOn?: string | undefined;
	readonly providerBillingAccountDisplayName?: string | undefined;
	readonly providerBillingAccountId?: string | undefined;
	readonly reportId?: string | undefined;
	readonly status?: ("active" | "error" | "expired" | "warning") | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface CostAllocationDetails {
	readonly policy?: ("Evenly" | "Fixed" | "Proportional") | undefined;
}
export interface CustomPriceDetails {
	readonly benefits?: ("AHUB" | "All" | "None" | "Reservations" | "Sum"[]) | undefined;
	readonly markups?: Markup[] | undefined;
	readonly pricesheet?: string | undefined;
}
export interface ExternalBillingAccountProperties {
	readonly collectionInfo?: ConnectorCollectionInfo | undefined;
	readonly connectorId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly providerBillingAccountId?: string | undefined;
}
export interface Markup {
	readonly percentage?: string | undefined;
}
export interface Scope {
	readonly childScope?: Scope | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ShowbackRuleProperties {
	readonly creationTime?: string | undefined;
	readonly deprecationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly modificationTime?: string | undefined;
	readonly scopes?: Scope[] | undefined;
	readonly status?: ("Active" | "NotActive") | undefined;
	readonly version?: number | undefined;
}
export default {
	cloudConnectors: cloudConnectors,
	externalBillingAccounts: externalBillingAccounts,
	externalSubscriptions: externalSubscriptions,
	showbackRules: showbackRules,
};
