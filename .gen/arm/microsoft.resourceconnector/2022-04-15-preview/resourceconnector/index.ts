import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class appliances extends ArmResource<appliancesComponentInputs> implements appliancesComponentOutputs {
	constructor(entity: ADKEntity, options: appliancesComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceConnector/appliances", "2022-04-15-preview", options);
	}
	public readonly apiVersion: "2022-04-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceConnector/appliances";
}
export interface appliancesComponentOutputs {
	readonly apiVersion: "2022-04-15-preview";
	readonly id: string;
	readonly type: "Microsoft.ResourceConnector/appliances";
}
export interface appliancesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ApplianceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listClusterCustomerUserCredential(
	resource: appliances,
): ApplianceListClusterCustomerUserCredentialResults {
	if (resource.apiVersion !== "2022-04-15-preview") {
		throw new Error(`listClusterCustomerUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ResourceConnector/appliances") {
		throw new Error(`listClusterCustomerUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterUserCredential(resource: appliances): ApplianceListCredentialResults {
	if (resource.apiVersion !== "2022-04-15-preview") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ResourceConnector/appliances") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplianceCredentialKubeconfig {
	readonly name?: ("clusterCustomerUser" | "clusterUser") | undefined;
	readonly value?: string | undefined;
}
export interface ApplianceListClusterCustomerUserCredentialResults {
	readonly kubeconfigs?: ApplianceCredentialKubeconfig[] | undefined;
	readonly sshKeys?: ApplianceListClusterCustomerUserCredentialResultsSshKeys | undefined;
}
export interface ApplianceListClusterCustomerUserCredentialResultsSshKeys {
	readonly "[ key: string ]"?: SSHKey | undefined;
}
export interface ApplianceListCredentialResults {
	readonly hybridConnectionConfig?: HybridConnectionConfig | undefined;
	readonly kubeconfigs?: ApplianceCredentialKubeconfig[] | undefined;
}
export interface ApplianceProperties {
	readonly distro?: "AKSEdge" | undefined;
	readonly infrastructureConfig?: AppliancePropertiesInfrastructureConfig | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicKey?: string | undefined;
	readonly status?:
		| (
				| "Connected"
				| "Connecting"
				| "None"
				| "Offline"
				| "PostUpgrade"
				| "PreUpgrade"
				| "PreparingForUpgrade"
				| "Running"
				| "UpdatingCAPI"
				| "UpdatingCloudOperator"
				| "UpdatingCluster"
				| "UpgradeClusterExtensionFailedToDelete"
				| "UpgradeComplete"
				| "UpgradeFailed"
				| "UpgradePrerequisitesCompleted"
				| "Validating"
				| "WaitingForCloudOperator"
				| "WaitingForHeartbeat"
		  )
		| undefined;
	readonly version?: string | undefined;
}
export interface AppliancePropertiesInfrastructureConfig {
	readonly provider?: ("HCI" | "KubeVirt" | "OpenStack" | "SCVMM" | "VMWare") | undefined;
}
export interface HybridConnectionConfig {
	readonly expirationTime?: number | undefined;
	readonly hybridConnectionName?: string | undefined;
	readonly relay?: string | undefined;
	readonly token?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface SSHKey {
	readonly privateKey?: string | undefined;
	readonly publicKey?: string | undefined;
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
export default {
	appliances: appliances,
};
