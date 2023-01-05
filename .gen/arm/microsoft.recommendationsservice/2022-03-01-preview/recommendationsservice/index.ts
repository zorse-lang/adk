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
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ModelingResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ServiceEndpointResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface AccountResourceProperties {
	readonly configuration?: "Capacity" | "Free";
	readonly cors?: CorsRule[];
	readonly endpointAuthentications?: EndpointAuthentication[];
	readonly provisioningState?: string;
	readonly reportsConnectionString?: string;
}
export interface CorsRule {
	readonly allowedHeaders?: string[];
	readonly allowedMethods?: string[];
	readonly allowedOrigins: string[];
	readonly exposedHeaders?: string[];
	readonly maxAgeInSeconds?: number;
}
export interface EndpointAuthentication {
	readonly aadTenantID?: string;
	readonly principalID?: string;
	readonly principalType?: "Application" | "User";
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface ModelingInputData {
	readonly connectionString?: string;
}
export interface ModelingResourceProperties {
	readonly features?: "Basic" | "Premium" | "Standard";
	readonly frequency?: "High" | "Low" | "Medium";
	readonly inputData?: ModelingInputData;
	readonly provisioningState?: string;
	readonly size?: "Large" | "Medium" | "Small";
}
export interface ServiceEndpointResourceProperties {
	readonly pairedLocation?: string;
	readonly preAllocatedCapacity?: number;
	readonly provisioningState?: string;
	readonly url?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	accounts: accounts,
	"accounts/modeling": accounts_modeling,
	"accounts/serviceEndpoints": accounts_serviceEndpoints,
};
