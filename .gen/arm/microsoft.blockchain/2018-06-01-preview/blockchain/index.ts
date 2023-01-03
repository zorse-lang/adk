import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class blockchainMembers
	extends ArmResource<blockchainMembersComponentInputs>
	implements blockchainMembersComponentOutputs
{
	constructor(entity: ADKEntity, options: blockchainMembersComponentInputs) {
		super(entity, options.name, "Microsoft.Blockchain/blockchainMembers", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blockchain/blockchainMembers";
}
export interface blockchainMembersComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Blockchain/blockchainMembers";
}
export interface blockchainMembersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BlockchainMemberProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class blockchainMembers_transactionNodes
	extends ArmResource<blockchainMembers_transactionNodesComponentInputs>
	implements blockchainMembers_transactionNodesComponentOutputs
{
	constructor(entity: ADKEntity, options: blockchainMembers_transactionNodesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Blockchain/blockchainMembers/transactionNodes",
			"2018-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Blockchain/blockchainMembers/transactionNodes";
}
export interface blockchainMembers_transactionNodesComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Blockchain/blockchainMembers/transactionNodes";
}
export interface blockchainMembers_transactionNodesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TransactionNodeProperties | undefined;
}
export function listApiKeys(resource: blockchainMembers): ApiKeyCollection {
	if (resource.apiVersion !== "2018-06-01-preview") {
		throw new Error(`listApiKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Blockchain/blockchainMembers") {
		throw new Error(`listApiKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listConsortiums(resource: ArmResource): ConsortiumCollection {
	if (resource.apiVersion !== "2018-06-01-preview") {
		throw new Error(`listConsortiums is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Blockchain/locations") {
		throw new Error(`listConsortiums is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiKey {
	readonly keyName?: string | undefined;
	readonly value?: string | undefined;
}
export interface ApiKeyCollection {
	readonly keys?: ApiKey[] | undefined;
}
export interface BlockchainMemberNodesSku {
	readonly capacity?: number | undefined;
}
export interface BlockchainMemberProperties {
	readonly consortium?: string | undefined;
	readonly consortiumManagementAccountAddress?: string | undefined;
	readonly consortiumManagementAccountPassword?: string | undefined;
	readonly consortiumMemberDisplayName?: string | undefined;
	readonly consortiumRole?: string | undefined;
	readonly dns?: string | undefined;
	readonly firewallRules?: FirewallRule[] | undefined;
	readonly password?: string | undefined;
	readonly protocol?: ("Corda" | "NotSpecified" | "Parity" | "Quorum") | undefined;
	readonly provisioningState?:
		| ("Deleting" | "Failed" | "NotSpecified" | "Stale" | "Succeeded" | "Updating")
		| undefined;
	readonly publicKey?: string | undefined;
	readonly rootContractAddress?: string | undefined;
	readonly userName?: string | undefined;
	readonly validatorNodesSku?: BlockchainMemberNodesSku | undefined;
}
export interface Consortium {
	readonly name?: string | undefined;
	readonly protocol?: ("Corda" | "NotSpecified" | "Parity" | "Quorum") | undefined;
}
export interface ConsortiumCollection {
	readonly value?: Consortium[] | undefined;
}
export interface FirewallRule {
	readonly endIpAddress?: string | undefined;
	readonly ruleName?: string | undefined;
	readonly startIpAddress?: string | undefined;
}
export interface Sku {
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TransactionNodeProperties {
	readonly dns?: string | undefined;
	readonly firewallRules?: FirewallRule[] | undefined;
	readonly password?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "NotSpecified" | "Succeeded" | "Updating") | undefined;
	readonly publicKey?: string | undefined;
	readonly userName?: string | undefined;
}
export default {
	blockchainMembers: blockchainMembers,
	"blockchainMembers/transactionNodes": blockchainMembers_transactionNodes,
};
