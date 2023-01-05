import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class appliances extends ArmResource<appliancesComponentInputs> implements appliancesComponentOutputs {
	constructor(entity: ADKEntity, options: appliancesComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceConnector/appliances", "2021-10-31-preview", options);
	}
	public readonly apiVersion: "2021-10-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceConnector/appliances";
}
export interface appliancesComponentOutputs {
	readonly apiVersion: "2021-10-31-preview";
	readonly id: string;
	readonly type: "Microsoft.ResourceConnector/appliances";
}
export interface appliancesComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ApplianceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listClusterUserCredential(resource: appliances): ApplianceListCredentialResults {
	if (resource.apiVersion !== "2021-10-31-preview") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ResourceConnector/appliances") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplianceCredentialKubeconfig {
	readonly name?: "clusterUser";
	readonly value?: string;
}
export interface ApplianceListCredentialResults {
	readonly hybridConnectionConfig?: HybridConnectionConfig;
	readonly kubeconfigs?: ApplianceCredentialKubeconfig[];
}
export interface ApplianceProperties {
	readonly distro?: "AKSEdge";
	readonly infrastructureConfig?: AppliancePropertiesInfrastructureConfig;
	readonly provisioningState?: string;
	readonly publicKey?: string;
	readonly status?: "Connected" | "Running" | "Validating" | "WaitingForHeartbeat";
	readonly version?: string;
}
export interface AppliancePropertiesInfrastructureConfig {
	readonly provider?: "HCI" | "SCVMM" | "VMWare";
}
export interface HybridConnectionConfig {
	readonly expirationTime?: number;
	readonly hybridConnectionName?: string;
	readonly relay?: string;
	readonly token?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
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
export default {
	appliances: appliances,
};
