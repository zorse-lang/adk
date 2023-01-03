import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class endpoints extends ArmResource<endpointsComponentInputs> implements endpointsComponentOutputs {
	constructor(entity: ADKEntity, options: endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridConnectivity/endpoints", "2021-10-06-preview", options);
	}
	public readonly apiVersion: "2021-10-06-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridConnectivity/endpoints";
}
export interface endpointsComponentOutputs {
	readonly apiVersion: "2021-10-06-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridConnectivity/endpoints";
}
export interface endpointsComponentInputs {
	readonly name: string;
	readonly properties?: EndpointProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listCredentials(resource: endpoints): EndpointAccessResource {
	if (resource.apiVersion !== "2021-10-06-preview") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HybridConnectivity/endpoints") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface EndpointAccessResource {
	readonly relay?: RelayNamespaceAccessProperties | undefined;
}
export interface EndpointProperties {
	readonly provisioningState?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly type: "custom" | "default";
}
export interface RelayNamespaceAccessProperties {
	readonly accessKey?: string | undefined;
	readonly expiresOn?: number | undefined;
	readonly hybridConnectionName: string;
	readonly namespaceName: string;
	readonly namespaceNameSuffix: string;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	endpoints: endpoints,
};
