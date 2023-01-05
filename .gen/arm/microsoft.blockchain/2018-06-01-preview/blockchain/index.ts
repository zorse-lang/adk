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
	readonly location?: string;
	readonly name: string;
	readonly properties?: BlockchainMemberProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: TransactionNodeProperties;
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
	readonly keyName?: string;
	readonly value?: string;
}
export interface ApiKeyCollection {
	readonly keys?: ApiKey[];
}
export interface BlockchainMemberNodesSku {
	readonly capacity?: number;
}
export interface BlockchainMemberProperties {
	readonly consortium?: string;
	readonly consortiumManagementAccountAddress?: string;
	readonly consortiumManagementAccountPassword?: string;
	readonly consortiumMemberDisplayName?: string;
	readonly consortiumRole?: string;
	readonly dns?: string;
	readonly firewallRules?: FirewallRule[];
	readonly password?: string;
	readonly protocol?: "Corda" | "NotSpecified" | "Parity" | "Quorum";
	readonly provisioningState?: "Deleting" | "Failed" | "NotSpecified" | "Stale" | "Succeeded" | "Updating";
	readonly publicKey?: string;
	readonly rootContractAddress?: string;
	readonly userName?: string;
	readonly validatorNodesSku?: BlockchainMemberNodesSku;
}
export interface Consortium {
	readonly name?: string;
	readonly protocol?: "Corda" | "NotSpecified" | "Parity" | "Quorum";
}
export interface ConsortiumCollection {
	readonly value?: Consortium[];
}
export interface FirewallRule {
	readonly endIpAddress?: string;
	readonly ruleName?: string;
	readonly startIpAddress?: string;
}
export interface Sku {
	readonly name?: string;
	readonly tier?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TransactionNodeProperties {
	readonly dns?: string;
	readonly firewallRules?: FirewallRule[];
	readonly password?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "NotSpecified" | "Succeeded" | "Updating";
	readonly publicKey?: string;
	readonly userName?: string;
}
export default {
	blockchainMembers: blockchainMembers,
	"blockchainMembers/transactionNodes": blockchainMembers_transactionNodes,
};
