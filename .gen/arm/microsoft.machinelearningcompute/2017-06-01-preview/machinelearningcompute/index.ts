import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class operationalizationClusters
	extends ArmResource<operationalizationClustersComponentInputs>
	implements operationalizationClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: operationalizationClustersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningCompute/operationalizationClusters",
			"2017-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningCompute/operationalizationClusters";
}
export interface operationalizationClustersComponentOutputs {
	readonly apiVersion: "2017-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningCompute/operationalizationClusters";
}
export interface operationalizationClustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: OperationalizationClusterProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listKeys(resource: operationalizationClusters): OperationalizationClusterCredentials {
	if (resource.apiVersion !== "2017-06-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningCompute/operationalizationClusters") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AcsClusterProperties {
	readonly agentCount?: number | undefined;
	readonly agentVmSize?:
		| (
				| "Standard_A0"
				| "Standard_A1"
				| "Standard_A10"
				| "Standard_A11"
				| "Standard_A2"
				| "Standard_A3"
				| "Standard_A4"
				| "Standard_A5"
				| "Standard_A6"
				| "Standard_A7"
				| "Standard_A8"
				| "Standard_A9"
				| "Standard_D1"
				| "Standard_D11"
				| "Standard_D11_v2"
				| "Standard_D12"
				| "Standard_D12_v2"
				| "Standard_D13"
				| "Standard_D13_v2"
				| "Standard_D14"
				| "Standard_D14_v2"
				| "Standard_D1_v2"
				| "Standard_D2"
				| "Standard_D2_v2"
				| "Standard_D3"
				| "Standard_D3_v2"
				| "Standard_D4"
				| "Standard_D4_v2"
				| "Standard_D5_v2"
				| "Standard_DS1"
				| "Standard_DS11"
				| "Standard_DS12"
				| "Standard_DS13"
				| "Standard_DS14"
				| "Standard_DS2"
				| "Standard_DS3"
				| "Standard_DS4"
				| "Standard_G1"
				| "Standard_G2"
				| "Standard_G3"
				| "Standard_G4"
				| "Standard_G5"
				| "Standard_GS1"
				| "Standard_GS2"
				| "Standard_GS3"
				| "Standard_GS4"
				| "Standard_GS5"
		  )
		| undefined;
	readonly clusterFqdn?: string | undefined;
	readonly orchestratorProperties: KubernetesClusterProperties;
	readonly orchestratorType: "Kubernetes";
	readonly systemServices?: ("Batch" | "Scoring"[]) | undefined;
}
export interface AppInsightsCredentials {
	readonly apiKey?: string | undefined;
	readonly appId?: string | undefined;
}
export interface AutoScaleConfiguration {
	readonly maxReplicas?: number | undefined;
	readonly minReplicas?: number | undefined;
	readonly refreshPeriodInSeconds?: number | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly targetUtilization?: number | undefined;
}
export interface ContainerRegistryCredentials {
	readonly loginServer?: string | undefined;
	readonly password?: string | undefined;
	readonly password2?: string | undefined;
}
export interface ContainerRegistryProperties {
	readonly resourceId?: string | undefined;
}
export interface ContainerServiceCredentials {
	readonly acsKubeConfig?: string | undefined;
	readonly imagePullSecretName?: string | undefined;
	readonly servicePrincipalConfiguration?: ServicePrincipalProperties | undefined;
}
export interface GlobalServiceConfiguration {
	readonly autoScale?: AutoScaleConfiguration | undefined;
	readonly etag?: string | undefined;
	readonly serviceAuth?: ServiceAuthConfiguration | undefined;
	readonly ssl?: SslConfiguration | undefined;
	readonly "[ key: string ]"?: string | undefined;
}
export interface KubernetesClusterProperties {
	readonly servicePrincipal: ServicePrincipalProperties;
}
export interface OperationalizationClusterCredentials {
	readonly appInsights?: AppInsightsCredentials | undefined;
	readonly containerRegistry?: ContainerRegistryCredentials | undefined;
	readonly containerService?: ContainerServiceCredentials | undefined;
	readonly serviceAuthConfiguration?: ServiceAuthConfiguration | undefined;
	readonly sslConfiguration?: SslConfiguration | undefined;
	readonly storageAccount?: StorageAccountCredentials | undefined;
}
export interface OperationalizationClusterProperties {
	readonly appInsights?: AppInsightsCredentials | undefined;
	readonly clusterType: "ACS";
	readonly containerRegistry?: ContainerRegistryProperties | undefined;
	readonly containerService: AcsClusterProperties;
	readonly createdOn?: string | undefined;
	readonly description?: string | undefined;
	readonly globalServiceConfiguration?: GlobalServiceConfiguration | undefined;
	readonly modifiedOn?: string | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded" | "Unknown" | "Updating") | undefined;
	readonly storageAccount?: StorageAccountProperties | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServiceAuthConfiguration {
	readonly primaryAuthKeyHash: string;
	readonly secondaryAuthKeyHash: string;
}
export interface ServicePrincipalProperties {
	readonly clientId: string;
	readonly secret: string;
}
export interface SslConfiguration {
	readonly cert?: string | undefined;
	readonly key?: string | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface StorageAccountCredentials {
	readonly primaryKey?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface StorageAccountProperties {
	readonly resourceId?: string | undefined;
}
export default {
	operationalizationClusters: operationalizationClusters,
};
