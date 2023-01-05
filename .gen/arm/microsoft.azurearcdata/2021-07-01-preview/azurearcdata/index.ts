import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataControllers
	extends ArmResource<dataControllersComponentInputs>
	implements dataControllersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataControllersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/dataControllers", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/dataControllers";
}
export interface dataControllersComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
export class postgresInstances
	extends ArmResource<postgresInstancesComponentInputs>
	implements postgresInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: postgresInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureArcData/postgresInstances", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/postgresInstances";
}
export interface postgresInstancesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
		super(entity, options.name, "Microsoft.AzureArcData/sqlManagedInstances", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/sqlManagedInstances";
}
export interface sqlManagedInstancesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
		super(entity, options.name, "Microsoft.AzureArcData/sqlServerInstances", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureArcData/sqlServerInstances";
}
export interface sqlServerInstancesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
export interface BasicLoginInformation {
	readonly password?: string;
	readonly username?: string;
}
export interface DataControllerProperties {
	readonly basicLoginInformation?: BasicLoginInformation;
	readonly infrastructure?: "alibaba" | "aws" | "azure" | "gcp" | "onpremises";
	readonly k8sRaw?: any;
	readonly lastUploadedDate?: string;
	readonly logAnalyticsWorkspaceConfig?: LogAnalyticsWorkspaceConfig;
	readonly onPremiseProperty?: OnPremiseProperty;
	readonly provisioningState?: string;
	readonly uploadServicePrincipal?: UploadServicePrincipal;
	readonly uploadWatermark?: UploadWatermark;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "CustomLocation";
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
export interface SqlManagedInstanceProperties {
	readonly admin?: string;
	readonly basicLoginInformation?: BasicLoginInformation;
	readonly dataControllerId?: string;
	readonly endTime?: string;
	readonly k8sRaw?: any;
	readonly lastUploadedDate?: string;
	readonly licenseType?: "BasePrice";
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
	readonly azureDefenderStatus?: string;
	readonly azureDefenderStatusLastUpdated?: string;
	readonly collation?: string;
	readonly containerResourceId: string;
	readonly createTime?: string;
	readonly currentVersion?: string;
	readonly edition?: string;
	readonly instanceName?: string;
	readonly licenseType?: string;
	readonly patchLevel?: string;
	readonly productId?: string;
	readonly provisioningState?: string;
	readonly status: string;
	readonly tcpDynamicPorts?: string;
	readonly tcpStaticPorts?: string;
	readonly vCore?: string;
	readonly version?: string;
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
	postgresInstances: postgresInstances,
	sqlManagedInstances: sqlManagedInstances,
	sqlServerInstances: sqlServerInstances,
};
