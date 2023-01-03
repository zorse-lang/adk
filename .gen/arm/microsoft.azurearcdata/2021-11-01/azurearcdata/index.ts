import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataControllers
	extends ArmResource<dataControllersComponentInputs>
	implements dataControllersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataControllersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/dataControllers", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/dataControllers";
}
export interface dataControllersComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.AzureArcData/dataControllers";
}
export interface dataControllersComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: DataControllerProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class sqlManagedInstances
	extends ArmResource<sqlManagedInstancesComponentInputs>
	implements sqlManagedInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlManagedInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/sqlManagedInstances", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/sqlManagedInstances";
}
export interface sqlManagedInstancesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.AzureArcData/sqlManagedInstances";
}
export interface sqlManagedInstancesComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: SqlManagedInstanceProperties;
	readonly sku?: SqlManagedInstanceSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class sqlServerInstances
	extends ArmResource<sqlServerInstancesComponentInputs>
	implements sqlServerInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlServerInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/sqlServerInstances", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/sqlServerInstances";
}
export interface sqlServerInstancesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.AzureArcData/sqlServerInstances";
}
export interface sqlServerInstancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlServerInstanceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface BasicLoginInformation {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface DataControllerProperties {
	readonly basicLoginInformation?: BasicLoginInformation | undefined;
	readonly clusterId?: string | undefined;
	readonly extensionId?: string | undefined;
	readonly infrastructure?: ("alibaba" | "aws" | "azure" | "gcp" | "onpremises") | undefined;
	readonly k8sRaw?: any | undefined;
	readonly lastUploadedDate?: string | undefined;
	readonly logAnalyticsWorkspaceConfig?: LogAnalyticsWorkspaceConfig | undefined;
	readonly logsDashboardCredential?: BasicLoginInformation | undefined;
	readonly metricsDashboardCredential?: BasicLoginInformation | undefined;
	readonly onPremiseProperty?: OnPremiseProperty | undefined;
	readonly provisioningState?: string | undefined;
	readonly uploadServicePrincipal?: UploadServicePrincipal | undefined;
	readonly uploadWatermark?: UploadWatermark | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "CustomLocation" | undefined;
}
export interface K8SResourceRequirements {
	readonly limits?: K8SResourceRequirementsLimits | undefined;
	readonly requests?: K8SResourceRequirementsRequests | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface K8SResourceRequirementsLimits {
	readonly "[ key: string ]"?: string | undefined;
}
export interface K8SResourceRequirementsRequests {
	readonly "[ key: string ]"?: string | undefined;
}
export interface K8SScheduling {
	readonly default?: K8SSchedulingOptions | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface K8SSchedulingOptions {
	readonly resources?: K8SResourceRequirements | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface LogAnalyticsWorkspaceConfig {
	readonly primaryKey?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export interface OnPremiseProperty {
	readonly id: string;
	readonly publicSigningKey: string;
	readonly signingCertificateThumbprint?: string | undefined;
}
export interface SqlManagedInstanceK8SRaw {
	readonly spec?: SqlManagedInstanceK8SSpec | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface SqlManagedInstanceK8SSpec {
	readonly replicas?: number | undefined;
	readonly scheduling?: K8SScheduling | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface SqlManagedInstanceProperties {
	readonly admin?: string | undefined;
	readonly basicLoginInformation?: BasicLoginInformation | undefined;
	readonly clusterId?: string | undefined;
	readonly dataControllerId?: string | undefined;
	readonly endTime?: string | undefined;
	readonly extensionId?: string | undefined;
	readonly k8sRaw?: SqlManagedInstanceK8SRaw | undefined;
	readonly lastUploadedDate?: string | undefined;
	readonly licenseType?: ("BasePrice" | "DisasterRecovery" | "LicenseIncluded") | undefined;
	readonly provisioningState?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface SqlManagedInstanceSku {
	readonly capacity?: number | undefined;
	readonly dev?: boolean | undefined;
	readonly family?: string | undefined;
	readonly name: "vCore";
	readonly size?: string | undefined;
	readonly tier?: "BusinessCritical" | undefined;
}
export interface SqlServerInstanceProperties {
	readonly azureDefenderStatus?: ("Protected" | "Unknown" | "Unprotected") | undefined;
	readonly azureDefenderStatusLastUpdated?: string | undefined;
	readonly collation?: string | undefined;
	readonly containerResourceId: string;
	readonly createTime?: string | undefined;
	readonly currentVersion?: string | undefined;
	readonly edition?: ("Developer" | "Enterprise" | "Evaluation" | "Express" | "Standard" | "Web") | undefined;
	readonly instanceName?: string | undefined;
	readonly licenseType?: ("Free" | "HADR" | "Paid" | "Undefined") | undefined;
	readonly patchLevel?: string | undefined;
	readonly productId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status: "Connected" | "Disconnected" | "Unknown";
	readonly tcpDynamicPorts?: string | undefined;
	readonly tcpStaticPorts?: string | undefined;
	readonly vCore?: string | undefined;
	readonly version?: ("SQL Server 2016" | "SQL Server 2017" | "SQL Server 2019") | undefined;
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
export interface UploadServicePrincipal {
	readonly authority?: string | undefined;
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface UploadWatermark {
	readonly logs?: string | undefined;
	readonly metrics?: string | undefined;
	readonly usages?: string | undefined;
}
export default {
	dataControllers: dataControllers,
	sqlManagedInstances: sqlManagedInstances,
	sqlServerInstances: sqlServerInstances,
};
