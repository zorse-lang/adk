import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataControllers
	extends ArmResource<dataControllersComponentInputs>
	implements dataControllersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataControllersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/dataControllers", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/dataControllers";
}
export interface dataControllersComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
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
export class dataControllers_activeDirectoryConnectors
	extends ArmResource<dataControllers_activeDirectoryConnectorsComponentInputs>
	implements dataControllers_activeDirectoryConnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataControllers_activeDirectoryConnectorsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors";
}
export interface dataControllers_activeDirectoryConnectorsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors";
}
export interface dataControllers_activeDirectoryConnectorsComponentInputs {
	readonly name: string;
	readonly properties: ActiveDirectoryConnectorProperties;
	readonly systemData?: SystemData | undefined;
}
export class postgresInstances
	extends ArmResource<postgresInstancesComponentInputs>
	implements postgresInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: postgresInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/postgresInstances", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/postgresInstances";
}
export interface postgresInstancesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureArcData/postgresInstances";
}
export interface postgresInstancesComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: PostgresInstanceProperties;
	readonly sku?: PostgresInstanceSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class sqlManagedInstances
	extends ArmResource<sqlManagedInstancesComponentInputs>
	implements sqlManagedInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlManagedInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/sqlManagedInstances", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/sqlManagedInstances";
}
export interface sqlManagedInstancesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
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
		super(entity, options.name, "Microsoft.AzureArcData/sqlServerInstances", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/sqlServerInstances";
}
export interface sqlServerInstancesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
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
export interface ActiveDirectoryConnectorDNSDetails {
	readonly domainName?: string | undefined;
	readonly nameserverIPAddresses: string[];
	readonly preferK8sDnsForPtrLookups?: boolean | undefined;
	readonly replicas?: number | undefined;
}
export interface ActiveDirectoryConnectorDomainDetails {
	readonly domainControllers: ActiveDirectoryDomainControllers;
	readonly netbiosDomainName?: string | undefined;
	readonly ouDistinguishedName?: string | undefined;
	readonly realm: string;
	readonly serviceAccountProvisioning?: ("automatic" | "manual") | undefined;
}
export interface ActiveDirectoryConnectorProperties {
	readonly domainServiceAccountLoginInformation?: BasicLoginInformation | undefined;
	readonly provisioningState?: string | undefined;
	readonly spec: ActiveDirectoryConnectorSpec;
	readonly status?: ActiveDirectoryConnectorStatus | undefined;
}
export interface ActiveDirectoryConnectorSpec {
	readonly activeDirectory: ActiveDirectoryConnectorDomainDetails;
	readonly dns: ActiveDirectoryConnectorDNSDetails;
}
export interface ActiveDirectoryConnectorStatus {
	readonly lastUpdateTime?: string | undefined;
	readonly observedGeneration?: number | undefined;
	readonly state?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ActiveDirectoryDomainController {
	readonly hostname: string;
}
export interface ActiveDirectoryDomainControllers {
	readonly primaryDomainController?: ActiveDirectoryDomainController | undefined;
	readonly secondaryDomainControllers?: ActiveDirectoryDomainController[] | undefined;
}
export interface ActiveDirectoryInformation {
	readonly keytabInformation?: KeytabInformation | undefined;
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
export interface KeytabInformation {
	readonly keytab?: string | undefined;
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
export interface PostgresInstanceProperties {
	readonly admin?: string | undefined;
	readonly basicLoginInformation?: BasicLoginInformation | undefined;
	readonly dataControllerId?: string | undefined;
	readonly k8sRaw?: any | undefined;
	readonly lastUploadedDate?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PostgresInstanceSku {
	readonly capacity?: number | undefined;
	readonly dev?: boolean | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: "Hyperscale" | undefined;
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
	readonly activeDirectoryInformation?: ActiveDirectoryInformation | undefined;
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
	readonly hostType?:
		| (
				| "AWS Kubernetes Service"
				| "AWS VMWare Virtual Machine"
				| "AWS Virtual Machine"
				| "Azure Kubernetes Service"
				| "Azure VMWare Virtual Machine"
				| "Azure Virtual Machine"
				| "Container"
				| "GCP Kubernetes Service"
				| "GCP VMWare Virtual Machine"
				| "GCP Virtual Machine"
				| "Other"
				| "Physical Server"
				| "Virtual Machine"
		  )
		| undefined;
	readonly instanceName?: string | undefined;
	readonly licenseType?: ("Free" | "HADR" | "LicenseOnly" | "PAYG" | "Paid" | "ServerCAL" | "Undefined") | undefined;
	readonly patchLevel?: string | undefined;
	readonly productId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status: "Connected" | "Disconnected" | "Registered" | "Unknown";
	readonly tcpDynamicPorts?: string | undefined;
	readonly tcpStaticPorts?: string | undefined;
	readonly vCore?: string | undefined;
	readonly version?:
		| (
				| "SQL Server 2012"
				| "SQL Server 2014"
				| "SQL Server 2016"
				| "SQL Server 2017"
				| "SQL Server 2019"
				| "SQL Server 2022"
				| "Unknown"
		  )
		| undefined;
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
	"dataControllers/activeDirectoryConnectors": dataControllers_activeDirectoryConnectors,
	postgresInstances: postgresInstances,
	sqlManagedInstances: sqlManagedInstances,
	sqlServerInstances: sqlServerInstances,
};
