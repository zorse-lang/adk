import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class associations extends ArmResource<associationsComponentInputs> implements associationsComponentOutputs {
	constructor(entity: ADKEntity, options: associationsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomProviders/associations", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CustomProviders/associations";
}
export interface associationsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CustomProviders/associations";
}
export interface associationsComponentInputs {
	readonly name: string;
	readonly properties?: AssociationProperties;
}
export class resourceProviders
	extends ArmResource<resourceProvidersComponentInputs>
	implements resourceProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: resourceProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.CustomProviders/resourceProviders", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CustomProviders/resourceProviders";
}
export interface resourceProvidersComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CustomProviders/resourceProviders";
}
export interface resourceProvidersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CustomRPManifestProperties;
	readonly tags?: ResourceTags;
}
export interface AssociationProperties {
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "Running" | "Succeeded";
	readonly targetResourceId?: string;
}
export interface CustomRPActionRouteDefinition {
	readonly endpoint: string;
	readonly name: string;
	readonly routingType?: "Proxy";
}
export interface CustomRPManifestProperties {
	readonly actions?: CustomRPActionRouteDefinition[];
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "Running" | "Succeeded";
	readonly resourceTypes?: CustomRPResourceTypeRouteDefinition[];
	readonly validations?: CustomRPValidations[];
}
export interface CustomRPResourceTypeRouteDefinition {
	readonly endpoint: string;
	readonly name: string;
	readonly routingType?: "Proxy" | "Proxy,Cache";
}
export interface CustomRPValidations {
	readonly specification: string;
	readonly validationType?: "Swagger";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	associations: associations,
	resourceProviders: resourceProviders,
};
