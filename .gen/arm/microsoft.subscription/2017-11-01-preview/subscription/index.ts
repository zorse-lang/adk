import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class subscriptionDefinitions
	extends ArmResource<subscriptionDefinitionsComponentInputs>
	implements subscriptionDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: subscriptionDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Subscription/subscriptionDefinitions", "2017-11-01-preview", options);
	}
	public readonly apiVersion: "2017-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Subscription/subscriptionDefinitions";
}
export interface subscriptionDefinitionsComponentOutputs {
	readonly apiVersion: "2017-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Subscription/subscriptionDefinitions";
}
export interface subscriptionDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionDefinitionProperties | undefined;
}
export class subscriptionOperations
	extends ArmResource<subscriptionOperationsComponentInputs>
	implements subscriptionOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: subscriptionOperationsComponentInputs) {
		super(entity, options.name, "Microsoft.Subscription/subscriptionOperations", "2017-11-01-preview", options);
	}
	public readonly apiVersion: "2017-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Subscription/subscriptionOperations";
}
export interface subscriptionOperationsComponentOutputs {
	readonly apiVersion: "2017-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Subscription/subscriptionOperations";
}
export interface subscriptionOperationsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionDefinitionProperties | undefined;
}
export interface SubscriptionDefinitionProperties {
	readonly etag?: string | undefined;
	readonly offerType?: string | undefined;
	readonly subscriptionDisplayName?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export default {
	subscriptionDefinitions: subscriptionDefinitions,
	subscriptionOperations: subscriptionOperations,
};
