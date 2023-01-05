import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class aliases extends ArmResource<aliasesComponentInputs> implements aliasesComponentOutputs {
	constructor(entity: ADKEntity, options: aliasesComponentInputs) {
		super(entity, options.name, "Microsoft.Subscription/aliases", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Subscription/aliases";
}
export interface aliasesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Subscription/aliases";
}
export interface aliasesComponentInputs {
	readonly name: string;
	readonly properties: PutAliasRequestPropertiesOrPutAliasResponseProperties;
}
export interface PutAliasRequestPropertiesOrPutAliasResponseProperties {
	readonly billingScope?: string;
	readonly displayName?: string;
	readonly provisioningState?: "Accepted" | "Failed" | "Succeeded";
	readonly resellerId?: string;
	readonly subscriptionId?: string;
	readonly workload?: "DevTest" | "Production";
}
export default {
	aliases: aliases,
};
