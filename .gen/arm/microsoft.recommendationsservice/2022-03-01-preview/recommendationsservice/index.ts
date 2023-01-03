import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.RecommendationsService/accounts", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RecommendationsService/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.RecommendationsService/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class accounts_modeling
	extends ArmResource<accounts_modelingComponentInputs>
	implements accounts_modelingComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_modelingComponentInputs) {
		super(entity, options.name, "Microsoft.RecommendationsService/accounts/modeling", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RecommendationsService/accounts/modeling";
}
export interface accounts_modelingComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.RecommendationsService/accounts/modeling";
}
export interface accounts_modelingComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ModelingResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class accounts_serviceEndpoints
	extends ArmResource<accounts_serviceEndpointsComponentInputs>
	implements accounts_serviceEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_serviceEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecommendationsService/accounts/serviceEndpoints",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RecommendationsService/accounts/serviceEndpoints";
}
export interface accounts_serviceEndpointsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.RecommendationsService/accounts/serviceEndpoints";
}
export interface accounts_serviceEndpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ServiceEndpointResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AccountResourceProperties {
	readonly configuration?: ("Capacity" | "Free") | undefined;
	readonly cors?: CorsRule[] | undefined;
	readonly endpointAuthentications?: EndpointAuthentication[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly reportsConnectionString?: string | undefined;
}
export interface CorsRule {
	readonly allowedHeaders?: string[] | undefined;
	readonly allowedMethods?: string[] | undefined;
	readonly allowedOrigins: string[];
	readonly exposedHeaders?: string[] | undefined;
	readonly maxAgeInSeconds?: number | undefined;
}
export interface EndpointAuthentication {
	readonly aadTenantID?: string | undefined;
	readonly principalID?: string | undefined;
	readonly principalType?: ("Application" | "User") | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface ModelingInputData {
	readonly connectionString?: string | undefined;
}
export interface ModelingResourceProperties {
	readonly features?: ("Basic" | "Premium" | "Standard") | undefined;
	readonly frequency?: ("High" | "Low" | "Medium") | undefined;
	readonly inputData?: ModelingInputData | undefined;
	readonly provisioningState?: string | undefined;
	readonly size?: ("Large" | "Medium" | "Small") | undefined;
}
export interface ServiceEndpointResourceProperties {
	readonly pairedLocation?: string | undefined;
	readonly preAllocatedCapacity?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly url?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	accounts: accounts,
	"accounts/modeling": accounts_modeling,
	"accounts/serviceEndpoints": accounts_serviceEndpoints,
};
