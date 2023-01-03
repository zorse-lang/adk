import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkServicesForEDMUpload
	extends ArmResource<privateLinkServicesForEDMUploadComponentInputs>
	implements privateLinkServicesForEDMUploadComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForEDMUploadComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload";
}
export interface privateLinkServicesForEDMUploadComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload";
}
export interface privateLinkServicesForEDMUploadComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServicesResourceIdentity | undefined;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ServicesResourceTags | undefined;
}
export class privateLinkServicesForEDMUpload_privateEndpointConnections
	extends ArmResource<privateLinkServicesForEDMUpload_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForEDMUpload_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForEDMUpload_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateEndpointConnections",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateEndpointConnections";
}
export interface privateLinkServicesForEDMUpload_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateEndpointConnections";
}
export interface privateLinkServicesForEDMUpload_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForEDMUpload_privateLinkResources
	extends ArmResource<privateLinkServicesForEDMUpload_privateLinkResourcesComponentInputs>
	implements privateLinkServicesForEDMUpload_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForEDMUpload_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateLinkResources",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateLinkResources";
}
export interface privateLinkServicesForEDMUpload_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateLinkResources";
}
export interface privateLinkServicesForEDMUpload_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForM365ComplianceCenter
	extends ArmResource<privateLinkServicesForM365ComplianceCenterComponentInputs>
	implements privateLinkServicesForM365ComplianceCenterComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForM365ComplianceCenterComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter";
}
export interface privateLinkServicesForM365ComplianceCenterComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter";
}
export interface privateLinkServicesForM365ComplianceCenterComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServicesResourceIdentity | undefined;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ServicesResourceTags | undefined;
}
export class privateLinkServicesForM365ComplianceCenter_privateEndpointConnections
	extends ArmResource<privateLinkServicesForM365ComplianceCenter_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForM365ComplianceCenter_privateEndpointConnectionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForM365ComplianceCenter_privateEndpointConnectionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateEndpointConnections",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365ComplianceCenter_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365ComplianceCenter_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForM365ComplianceCenter_privateLinkResources
	extends ArmResource<privateLinkServicesForM365ComplianceCenter_privateLinkResourcesComponentInputs>
	implements privateLinkServicesForM365ComplianceCenter_privateLinkResourcesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForM365ComplianceCenter_privateLinkResourcesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateLinkResources",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateLinkResources";
}
export interface privateLinkServicesForM365ComplianceCenter_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateLinkResources";
}
export interface privateLinkServicesForM365ComplianceCenter_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForM365SecurityCenter
	extends ArmResource<privateLinkServicesForM365SecurityCenterComponentInputs>
	implements privateLinkServicesForM365SecurityCenterComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForM365SecurityCenterComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter";
}
export interface privateLinkServicesForM365SecurityCenterComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter";
}
export interface privateLinkServicesForM365SecurityCenterComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServicesResourceIdentity | undefined;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ServicesResourceTags | undefined;
}
export class privateLinkServicesForM365SecurityCenter_privateEndpointConnections
	extends ArmResource<privateLinkServicesForM365SecurityCenter_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForM365SecurityCenter_privateEndpointConnectionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForM365SecurityCenter_privateEndpointConnectionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateEndpointConnections",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365SecurityCenter_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365SecurityCenter_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForM365SecurityCenter_privateLinkResources
	extends ArmResource<privateLinkServicesForM365SecurityCenter_privateLinkResourcesComponentInputs>
	implements privateLinkServicesForM365SecurityCenter_privateLinkResourcesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForM365SecurityCenter_privateLinkResourcesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateLinkResources",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateLinkResources";
}
export interface privateLinkServicesForM365SecurityCenter_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateLinkResources";
}
export interface privateLinkServicesForM365SecurityCenter_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForO365ManagementActivityAPI
	extends ArmResource<privateLinkServicesForO365ManagementActivityAPIComponentInputs>
	implements privateLinkServicesForO365ManagementActivityAPIComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForO365ManagementActivityAPIComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI";
}
export interface privateLinkServicesForO365ManagementActivityAPIComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI";
}
export interface privateLinkServicesForO365ManagementActivityAPIComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServicesResourceIdentity | undefined;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ServicesResourceTags | undefined;
}
export class privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnections
	extends ArmResource<privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnectionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnectionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForO365ManagementActivityAPI_privateLinkResources
	extends ArmResource<privateLinkServicesForO365ManagementActivityAPI_privateLinkResourcesComponentInputs>
	implements privateLinkServicesForO365ManagementActivityAPI_privateLinkResourcesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForO365ManagementActivityAPI_privateLinkResourcesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateLinkResources",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateLinkResources";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateLinkResources";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForSCCPowershell
	extends ArmResource<privateLinkServicesForSCCPowershellComponentInputs>
	implements privateLinkServicesForSCCPowershellComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForSCCPowershellComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell";
}
export interface privateLinkServicesForSCCPowershellComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell";
}
export interface privateLinkServicesForSCCPowershellComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServicesResourceIdentity | undefined;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ServicesResourceTags | undefined;
}
export class privateLinkServicesForSCCPowershell_privateEndpointConnections
	extends ArmResource<privateLinkServicesForSCCPowershell_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForSCCPowershell_privateEndpointConnectionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForSCCPowershell_privateEndpointConnectionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateEndpointConnections",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateEndpointConnections";
}
export interface privateLinkServicesForSCCPowershell_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateEndpointConnections";
}
export interface privateLinkServicesForSCCPowershell_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateLinkServicesForSCCPowershell_privateLinkResources
	extends ArmResource<privateLinkServicesForSCCPowershell_privateLinkResourcesComponentInputs>
	implements privateLinkServicesForSCCPowershell_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForSCCPowershell_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateLinkResources",
			"2021-01-11",
			options,
		);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateLinkResources";
}
export interface privateLinkServicesForSCCPowershell_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateLinkResources";
}
export interface privateLinkServicesForSCCPowershell_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface ServiceAccessPolicyEntry {
	readonly objectId: string;
}
export interface ServiceAuthenticationConfigurationInfo {
	readonly audience?: string | undefined;
	readonly authority?: string | undefined;
	readonly smartProxyEnabled?: boolean | undefined;
}
export interface ServiceCorsConfigurationInfo {
	readonly allowCredentials?: boolean | undefined;
	readonly headers?: string[] | undefined;
	readonly maxAge?: number | undefined;
	readonly methods?: string[] | undefined;
	readonly origins?: string[] | undefined;
}
export interface ServiceCosmosDbConfigurationInfo {
	readonly keyVaultKeyUri?: string | undefined;
	readonly offerThroughput?: number | undefined;
}
export interface ServiceExportConfigurationInfo {
	readonly storageAccountName?: string | undefined;
}
export interface ServicesProperties {
	readonly accessPolicies?: ServiceAccessPolicyEntry[] | undefined;
	readonly authenticationConfiguration?: ServiceAuthenticationConfigurationInfo | undefined;
	readonly corsConfiguration?: ServiceCorsConfigurationInfo | undefined;
	readonly cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo | undefined;
	readonly exportConfiguration?: ServiceExportConfigurationInfo | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleting"
				| "Deprovisioned"
				| "Failed"
				| "Succeeded"
				| "Updating"
				| "Verifying"
		  )
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface ServicesResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface ServicesResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
	privateLinkServicesForEDMUpload: privateLinkServicesForEDMUpload,
	"privateLinkServicesForEDMUpload/privateEndpointConnections":
		privateLinkServicesForEDMUpload_privateEndpointConnections,
	"privateLinkServicesForEDMUpload/privateLinkResources": privateLinkServicesForEDMUpload_privateLinkResources,
	privateLinkServicesForM365ComplianceCenter: privateLinkServicesForM365ComplianceCenter,
	"privateLinkServicesForM365ComplianceCenter/privateEndpointConnections":
		privateLinkServicesForM365ComplianceCenter_privateEndpointConnections,
	"privateLinkServicesForM365ComplianceCenter/privateLinkResources":
		privateLinkServicesForM365ComplianceCenter_privateLinkResources,
	privateLinkServicesForM365SecurityCenter: privateLinkServicesForM365SecurityCenter,
	"privateLinkServicesForM365SecurityCenter/privateEndpointConnections":
		privateLinkServicesForM365SecurityCenter_privateEndpointConnections,
	"privateLinkServicesForM365SecurityCenter/privateLinkResources":
		privateLinkServicesForM365SecurityCenter_privateLinkResources,
	privateLinkServicesForO365ManagementActivityAPI: privateLinkServicesForO365ManagementActivityAPI,
	"privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections":
		privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnections,
	"privateLinkServicesForO365ManagementActivityAPI/privateLinkResources":
		privateLinkServicesForO365ManagementActivityAPI_privateLinkResources,
	privateLinkServicesForSCCPowershell: privateLinkServicesForSCCPowershell,
	"privateLinkServicesForSCCPowershell/privateEndpointConnections":
		privateLinkServicesForSCCPowershell_privateEndpointConnections,
	"privateLinkServicesForSCCPowershell/privateLinkResources": privateLinkServicesForSCCPowershell_privateLinkResources,
};
