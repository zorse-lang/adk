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
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties: DataControllerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly systemData?: SystemData;
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
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties: PostgresInstanceProperties;
	readonly sku?: PostgresInstanceSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties: SqlManagedInstanceProperties;
	readonly sku?: SqlManagedInstanceSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: SqlServerInstanceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface ActiveDirectoryConnectorDNSDetails {
	readonly domainName?: string;
	readonly nameserverIPAddresses: string[];
	readonly preferK8sDnsForPtrLookups?: boolean;
	readonly replicas?: number;
}
export interface ActiveDirectoryConnectorDomainDetails {
	readonly domainControllers: ActiveDirectoryDomainControllers;
	readonly netbiosDomainName?: string;
	readonly ouDistinguishedName?: string;
	readonly realm: string;
	readonly serviceAccountProvisioning?: "automatic" | "manual";
}
export interface ActiveDirectoryConnectorProperties {
	readonly domainServiceAccountLoginInformation?: BasicLoginInformation;
	readonly provisioningState?: string;
	readonly spec: ActiveDirectoryConnectorSpec;
	readonly status?: ActiveDirectoryConnectorStatus;
}
export interface ActiveDirectoryConnectorSpec {
	readonly activeDirectory: ActiveDirectoryConnectorDomainDetails;
	readonly dns: ActiveDirectoryConnectorDNSDetails;
}
export interface ActiveDirectoryConnectorStatus {
	readonly lastUpdateTime?: string;
	readonly observedGeneration?: number;
	readonly state?: string;
	readonly [key: string]: any;
}
export interface ActiveDirectoryDomainController {
	readonly hostname: string;
}
export interface ActiveDirectoryDomainControllers {
	readonly primaryDomainController?: ActiveDirectoryDomainController;
	readonly secondaryDomainControllers?: ActiveDirectoryDomainController[];
}
export interface ActiveDirectoryInformation {
	readonly keytabInformation?: KeytabInformation;
}
export interface BasicLoginInformation {
	readonly password?: string;
	readonly username?: string;
}
export interface DataControllerProperties {
	readonly basicLoginInformation?: BasicLoginInformation;
	readonly clusterId?: string;
	readonly extensionId?: string;
	readonly infrastructure?: "alibaba" | "aws" | "azure" | "gcp" | "onpremises";
	readonly k8sRaw?: any;
	readonly lastUploadedDate?: string;
	readonly logAnalyticsWorkspaceConfig?: LogAnalyticsWorkspaceConfig;
	readonly logsDashboardCredential?: BasicLoginInformation;
	readonly metricsDashboardCredential?: BasicLoginInformation;
	readonly onPremiseProperty?: OnPremiseProperty;
	readonly provisioningState?: string;
	readonly uploadServicePrincipal?: UploadServicePrincipal;
	readonly uploadWatermark?: UploadWatermark;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "CustomLocation";
}
export interface K8SResourceRequirements {
	readonly limits?: K8SResourceRequirementsLimits;
	readonly requests?: K8SResourceRequirementsRequests;
	readonly [key: string]: any;
}
export interface K8SResourceRequirementsLimits {
	readonly [key: string]: string;
}
export interface K8SResourceRequirementsRequests {
	readonly [key: string]: string;
}
export interface K8SScheduling {
	readonly default?: K8SSchedulingOptions;
	readonly [key: string]: any;
}
export interface K8SSchedulingOptions {
	readonly resources?: K8SResourceRequirements;
	readonly [key: string]: any;
}
export interface KeytabInformation {
	readonly keytab?: string;
}
export interface LogAnalyticsWorkspaceConfig {
	readonly primaryKey?: string;
	readonly workspaceId?: string;
}
export interface OnPremiseProperty {
	readonly id: string;
	readonly publicSigningKey: string;
	readonly signingCertificateThumbprint?: string;
}
export interface PostgresInstanceProperties {
	readonly admin?: string;
	readonly basicLoginInformation?: BasicLoginInformation;
	readonly dataControllerId?: string;
	readonly k8sRaw?: any;
	readonly lastUploadedDate?: string;
	readonly provisioningState?: string;
}
export interface PostgresInstanceSku {
	readonly capacity?: number;
	readonly dev?: boolean;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Hyperscale";
}
export interface SqlManagedInstanceK8SRaw {
	readonly spec?: SqlManagedInstanceK8SSpec;
	readonly [key: string]: any;
}
export interface SqlManagedInstanceK8SSpec {
	readonly replicas?: number;
	readonly scheduling?: K8SScheduling;
	readonly [key: string]: any;
}
export interface SqlManagedInstanceProperties {
	readonly activeDirectoryInformation?: ActiveDirectoryInformation;
	readonly admin?: string;
	readonly basicLoginInformation?: BasicLoginInformation;
	readonly clusterId?: string;
	readonly dataControllerId?: string;
	readonly endTime?: string;
	readonly extensionId?: string;
	readonly k8sRaw?: SqlManagedInstanceK8SRaw;
	readonly lastUploadedDate?: string;
	readonly licenseType?: "BasePrice" | "DisasterRecovery" | "LicenseIncluded";
	readonly provisioningState?: string;
	readonly startTime?: string;
}
export interface SqlManagedInstanceSku {
	readonly capacity?: number;
	readonly dev?: boolean;
	readonly family?: string;
	readonly name: "vCore";
	readonly size?: string;
	readonly tier?: "BusinessCritical";
}
export interface SqlServerInstanceProperties {
	readonly azureDefenderStatus?: "Protected" | "Unknown" | "Unprotected";
	readonly azureDefenderStatusLastUpdated?: string;
	readonly collation?: string;
	readonly containerResourceId: string;
	readonly createTime?: string;
	readonly currentVersion?: string;
	readonly edition?: "Developer" | "Enterprise" | "Evaluation" | "Express" | "Standard" | "Web";
	readonly hostType?:
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
		| "Virtual Machine";
	readonly instanceName?: string;
	readonly licenseType?: "Free" | "HADR" | "LicenseOnly" | "PAYG" | "Paid" | "ServerCAL" | "Undefined";
	readonly patchLevel?: string;
	readonly productId?: string;
	readonly provisioningState?: string;
	readonly status: "Connected" | "Disconnected" | "Registered" | "Unknown";
	readonly tcpDynamicPorts?: string;
	readonly tcpStaticPorts?: string;
	readonly vCore?: string;
	readonly version?:
		| "SQL Server 2012"
		| "SQL Server 2014"
		| "SQL Server 2016"
		| "SQL Server 2017"
		| "SQL Server 2019"
		| "SQL Server 2022"
		| "Unknown";
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
export interface UploadServicePrincipal {
	readonly authority?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly tenantId?: string;
}
export interface UploadWatermark {
	readonly logs?: string;
	readonly metrics?: string;
	readonly usages?: string;
}
export default {
	dataControllers: dataControllers,
	"dataControllers/activeDirectoryConnectors": dataControllers_activeDirectoryConnectors,
	postgresInstances: postgresInstances,
	sqlManagedInstances: sqlManagedInstances,
	sqlServerInstances: sqlServerInstances,
};
