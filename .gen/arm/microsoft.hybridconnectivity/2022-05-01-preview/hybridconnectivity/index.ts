import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class endpoints extends ArmResource<endpointsComponentInputs> implements endpointsComponentOutputs {
	constructor(entity: ADKEntity, options: endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridConnectivity/endpoints", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridConnectivity/endpoints";
}
export interface endpointsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridConnectivity/endpoints";
}
export interface endpointsComponentInputs {
	readonly name: string;
	readonly properties?: EndpointProperties;
	readonly systemData?: SystemData;
}
export function listCredentials(resource: endpoints): EndpointAccessResource {
	if (resource.apiVersion !== "2022-05-01-preview") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HybridConnectivity/endpoints") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listManagedProxyDetails(resource: endpoints, input: ManagedProxyRequest): ManagedProxyResource {
	if (resource.apiVersion !== "2022-05-01-preview") {
		throw new Error(`listManagedProxyDetails is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HybridConnectivity/endpoints") {
		throw new Error(`listManagedProxyDetails is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface EndpointAccessResource {
	readonly relay?: RelayNamespaceAccessProperties;
}
export interface EndpointProperties {
	readonly provisioningState?: string;
	readonly resourceId?: string;
	readonly type: "custom" | "default";
}
export interface ManagedProxyRequest {
	readonly hostname?: string;
	readonly service: string;
}
export interface ManagedProxyResource {
	readonly expiresOn: number;
	readonly proxy: string;
}
export interface RelayNamespaceAccessProperties {
	readonly accessKey?: string;
	readonly expiresOn?: number;
	readonly hybridConnectionName: string;
	readonly namespaceName: string;
	readonly namespaceNameSuffix: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	endpoints: endpoints,
};
