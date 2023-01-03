import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class aliases extends ArmResource<aliasesComponentInputs> implements aliasesComponentOutputs {
	constructor(entity: ADKEntity, options: aliasesComponentInputs) {
		super(entity, options.name, "Microsoft.Subscription/aliases", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Subscription/aliases";
}
export interface aliasesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Subscription/aliases";
}
export interface aliasesComponentInputs {
	readonly name: string;
	readonly properties?: PutAliasRequestPropertiesOrPutAliasResponseProperties | undefined;
}
export interface PutAliasRequestPropertiesOrPutAliasResponseProperties {
	readonly billingScope: string;
	readonly displayName: string;
	readonly provisioningState?: ("Accepted" | "Failed" | "Succeeded") | undefined;
	readonly subscriptionId?: string | undefined;
	readonly workload: "DevTest" | "Production";
}
export default {
	aliases: aliases,
};
