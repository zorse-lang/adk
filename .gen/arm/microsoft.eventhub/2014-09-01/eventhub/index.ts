import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces", "2014-09-01", options);
	}
	public readonly apiVersion: "2014-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2014-09-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: NamespaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: NamespaceCreateOrUpdateParametersTags | undefined;
}
export class namespaces_AuthorizationRules
	extends ArmResource<namespaces_AuthorizationRulesComponentInputs>
	implements namespaces_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_AuthorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/AuthorizationRules", "2014-09-01", options);
	}
	public readonly apiVersion: "2014-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2014-09-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties | undefined;
}
export class namespaces_eventhubs
	extends ArmResource<namespaces_eventhubsComponentInputs>
	implements namespaces_eventhubsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs", "2014-09-01", options);
	}
	public readonly apiVersion: "2014-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs";
}
export interface namespaces_eventhubsComponentOutputs {
	readonly apiVersion: "2014-09-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs";
}
export interface namespaces_eventhubsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EventHubProperties | undefined;
}
export class namespaces_eventhubs_authorizationRules
	extends ArmResource<namespaces_eventhubs_authorizationRulesComponentInputs>
	implements namespaces_eventhubs_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubs_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs/authorizationRules", "2014-09-01", options);
	}
	public readonly apiVersion: "2014-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/authorizationRules";
}
export interface namespaces_eventhubs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2014-09-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs/authorizationRules";
}
export interface namespaces_eventhubs_authorizationRulesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties | undefined;
}
export class namespaces_eventhubs_consumergroups
	extends ArmResource<namespaces_eventhubs_consumergroupsComponentInputs>
	implements namespaces_eventhubs_consumergroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubs_consumergroupsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs/consumergroups", "2014-09-01", options);
	}
	public readonly apiVersion: "2014-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentOutputs {
	readonly apiVersion: "2014-09-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ConsumerGroupProperties | undefined;
}
export interface ConsumerGroupProperties {
	readonly createdAt?: string | undefined;
	readonly eventHubPath?: string | undefined;
	readonly updatedAt?: string | undefined;
	readonly userMetadata?: string | undefined;
}
export interface EventHubProperties {
	readonly createdAt?: string | undefined;
	readonly messageRetentionInDays?: number | undefined;
	readonly partitionCount?: number | undefined;
	readonly partitionIds?: string[] | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface NamespaceCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NamespaceProperties {
	readonly createdAt?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly metricId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly status?:
		| (
				| "Activating"
				| "Active"
				| "Created"
				| "Creating"
				| "Disabled"
				| "Disabling"
				| "Enabling"
				| "Failed"
				| "Removed"
				| "Removing"
				| "SoftDeleted"
				| "SoftDeleting"
		  )
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface SharedAccessAuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage"[];
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: ("Basic" | "Standard") | undefined;
	readonly tier: "Basic" | "Premium" | "Standard";
}
export default {
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/eventhubs": namespaces_eventhubs,
	"namespaces/eventhubs/authorizationRules": namespaces_eventhubs_authorizationRules,
	"namespaces/eventhubs/consumergroups": namespaces_eventhubs_consumergroups,
};
