import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.EnterpriseKnowledgeGraph/services", "2018-12-03", options);
	}
	public readonly apiVersion: "2018-12-03";
	public readonly id: string;
	public readonly type: "Microsoft.EnterpriseKnowledgeGraph/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2018-12-03";
	readonly id: string;
	readonly type: "Microsoft.EnterpriseKnowledgeGraph/services";
}
export interface servicesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EnterpriseKnowledgeGraphProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface EnterpriseKnowledgeGraphProperties {
	readonly description?: string | undefined;
	readonly metadata?: any | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name: "F0" | "S1";
}
export default {
	services: services,
};
