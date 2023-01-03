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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: DataControllerProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly infrastructure?: ("alibaba" | "aws" | "azure" | "gcp" | "onpremises") | undefined;
	readonly k8sRaw?: any | undefined;
	readonly lastUploadedDate?: string | undefined;
	readonly logAnalyticsWorkspaceConfig?: LogAnalyticsWorkspaceConfig | undefined;
	readonly onPremiseProperty?: OnPremiseProperty | undefined;
	readonly provisioningState?: string | undefined;
	readonly uploadServicePrincipal?: UploadServicePrincipal | undefined;
	readonly uploadWatermark?: UploadWatermark | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "CustomLocation" | undefined;
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
export interface SqlManagedInstanceProperties {
	readonly admin?: string | undefined;
	readonly basicLoginInformation?: BasicLoginInformation | undefined;
	readonly dataControllerId?: string | undefined;
	readonly endTime?: string | undefined;
	readonly k8sRaw?: any | undefined;
	readonly lastUploadedDate?: string | undefined;
	readonly licenseType?: "BasePrice" | undefined;
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
	readonly azureDefenderStatus?: string | undefined;
	readonly azureDefenderStatusLastUpdated?: string | undefined;
	readonly collation?: string | undefined;
	readonly containerResourceId: string;
	readonly createTime?: string | undefined;
	readonly currentVersion?: string | undefined;
	readonly edition?: string | undefined;
	readonly instanceName?: string | undefined;
	readonly licenseType?: string | undefined;
	readonly patchLevel?: string | undefined;
	readonly productId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status: string;
	readonly tcpDynamicPorts?: string | undefined;
	readonly tcpStaticPorts?: string | undefined;
	readonly vCore?: string | undefined;
	readonly version?: string | undefined;
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
	postgresInstances: postgresInstances,
	sqlManagedInstances: sqlManagedInstances,
	sqlServerInstances: sqlServerInstances,
};
