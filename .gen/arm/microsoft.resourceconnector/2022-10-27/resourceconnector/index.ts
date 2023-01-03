import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class appliances extends ArmResource<appliancesComponentInputs> implements appliancesComponentOutputs {
	constructor(entity: ADKEntity, options: appliancesComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceConnector/appliances", "2022-10-27", options);
	}
	public readonly apiVersion: "2022-10-27";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceConnector/appliances";
}
export interface appliancesComponentOutputs {
	readonly apiVersion: "2022-10-27";
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
export function listClusterUserCredential(resource: appliances): ApplianceListCredentialResults {
	if (resource.apiVersion !== "2022-10-27") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ResourceConnector/appliances") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listkeys(resource: appliances): ApplianceListKeysResults {
	if (resource.apiVersion !== "2022-10-27") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ResourceConnector/appliances") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplianceCredentialKubeconfig {
	readonly name?: ("clusterCustomerUser" | "clusterUser") | undefined;
	readonly value?: string | undefined;
}
export interface ApplianceListCredentialResults {
	readonly hybridConnectionConfig?: HybridConnectionConfig | undefined;
	readonly kubeconfigs?: ApplianceCredentialKubeconfig[] | undefined;
}
export interface ApplianceListKeysResults {
	readonly artifactProfiles?: ApplianceListKeysResultsArtifactProfiles | undefined;
	readonly kubeconfigs?: ApplianceCredentialKubeconfig[] | undefined;
	readonly sshKeys?: ApplianceListKeysResultsSshKeys | undefined;
}
export interface ApplianceListKeysResultsArtifactProfiles {
	readonly "[ key: string ]"?: ArtifactProfile | undefined;
}
export interface ApplianceListKeysResultsSshKeys {
	readonly "[ key: string ]"?: SSHKey | undefined;
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
				| "ImageDeprovisioning"
				| "ImageDownloaded"
				| "ImageDownloading"
				| "ImagePending"
				| "ImageProvisioned"
				| "ImageProvisioning"
				| "ImageUnknown"
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
				| "UpgradingKVAIO"
				| "Validating"
				| "WaitingForCloudOperator"
				| "WaitingForHeartbeat"
				| "WaitingForKVAIO"
		  )
		| undefined;
	readonly version?: string | undefined;
}
export interface AppliancePropertiesInfrastructureConfig {
	readonly provider?: ("HCI" | "KubeVirt" | "OpenStack" | "SCVMM" | "VMWare") | undefined;
}
export interface ArtifactProfile {
	readonly endpoint?: string | undefined;
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
	readonly certificate?: string | undefined;
	readonly creationTimeStamp?: number | undefined;
	readonly expirationTimeStamp?: number | undefined;
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
