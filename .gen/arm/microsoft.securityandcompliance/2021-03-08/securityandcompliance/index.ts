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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload";
}
export interface privateLinkServicesForEDMUploadComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload";
}
export interface privateLinkServicesForEDMUploadComponentInputs {
	readonly etag?: string;
	readonly identity?: ServicesResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly systemData?: SystemData;
	readonly tags?: ServicesResourceTags;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateEndpointConnections";
}
export interface privateLinkServicesForEDMUpload_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateEndpointConnections";
}
export interface privateLinkServicesForEDMUpload_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateLinkResources";
}
export interface privateLinkServicesForEDMUpload_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateLinkResources";
}
export interface privateLinkServicesForEDMUpload_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter";
}
export interface privateLinkServicesForM365ComplianceCenterComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter";
}
export interface privateLinkServicesForM365ComplianceCenterComponentInputs {
	readonly etag?: string;
	readonly identity?: ServicesResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly systemData?: SystemData;
	readonly tags?: ServicesResourceTags;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365ComplianceCenter_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365ComplianceCenter_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateLinkResources";
}
export interface privateLinkServicesForM365ComplianceCenter_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateLinkResources";
}
export interface privateLinkServicesForM365ComplianceCenter_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter";
}
export interface privateLinkServicesForM365SecurityCenterComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter";
}
export interface privateLinkServicesForM365SecurityCenterComponentInputs {
	readonly etag?: string;
	readonly identity?: ServicesResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly systemData?: SystemData;
	readonly tags?: ServicesResourceTags;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365SecurityCenter_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateEndpointConnections";
}
export interface privateLinkServicesForM365SecurityCenter_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateLinkResources";
}
export interface privateLinkServicesForM365SecurityCenter_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateLinkResources";
}
export interface privateLinkServicesForM365SecurityCenter_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export class privateLinkServicesForMIPPolicySync
	extends ArmResource<privateLinkServicesForMIPPolicySyncComponentInputs>
	implements privateLinkServicesForMIPPolicySyncComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForMIPPolicySyncComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync",
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync";
}
export interface privateLinkServicesForMIPPolicySyncComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync";
}
export interface privateLinkServicesForMIPPolicySyncComponentInputs {
	readonly etag?: string;
	readonly identity?: ServicesResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly systemData?: SystemData;
	readonly tags?: ServicesResourceTags;
}
export class privateLinkServicesForMIPPolicySync_privateEndpointConnections
	extends ArmResource<privateLinkServicesForMIPPolicySync_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForMIPPolicySync_privateEndpointConnectionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: privateLinkServicesForMIPPolicySync_privateEndpointConnectionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/privateEndpointConnections",
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/privateEndpointConnections";
}
export interface privateLinkServicesForMIPPolicySync_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/privateEndpointConnections";
}
export interface privateLinkServicesForMIPPolicySync_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class privateLinkServicesForMIPPolicySync_privateLinkResources
	extends ArmResource<privateLinkServicesForMIPPolicySync_privateLinkResourcesComponentInputs>
	implements privateLinkServicesForMIPPolicySync_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForMIPPolicySync_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/privateLinkResources",
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/privateLinkResources";
}
export interface privateLinkServicesForMIPPolicySync_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/privateLinkResources";
}
export interface privateLinkServicesForMIPPolicySync_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI";
}
export interface privateLinkServicesForO365ManagementActivityAPIComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI";
}
export interface privateLinkServicesForO365ManagementActivityAPIComponentInputs {
	readonly etag?: string;
	readonly identity?: ServicesResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly systemData?: SystemData;
	readonly tags?: ServicesResourceTags;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateLinkResources";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateLinkResources";
}
export interface privateLinkServicesForO365ManagementActivityAPI_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell";
}
export interface privateLinkServicesForSCCPowershellComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell";
}
export interface privateLinkServicesForSCCPowershellComponentInputs {
	readonly etag?: string;
	readonly identity?: ServicesResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly systemData?: SystemData;
	readonly tags?: ServicesResourceTags;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateEndpointConnections";
}
export interface privateLinkServicesForSCCPowershell_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateEndpointConnections";
}
export interface privateLinkServicesForSCCPowershell_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
			"2021-03-08",
			options,
		);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateLinkResources";
}
export interface privateLinkServicesForSCCPowershell_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateLinkResources";
}
export interface privateLinkServicesForSCCPowershell_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface ServiceAccessPolicyEntry {
	readonly objectId: string;
}
export interface ServiceAuthenticationConfigurationInfo {
	readonly audience?: string;
	readonly authority?: string;
	readonly smartProxyEnabled?: boolean;
}
export interface ServiceCorsConfigurationInfo {
	readonly allowCredentials?: boolean;
	readonly headers?: string[];
	readonly maxAge?: number;
	readonly methods?: string[];
	readonly origins?: string[];
}
export interface ServiceCosmosDbConfigurationInfo {
	readonly keyVaultKeyUri?: string;
	readonly offerThroughput?: number;
}
export interface ServiceExportConfigurationInfo {
	readonly storageAccountName?: string;
}
export interface ServicesProperties {
	readonly accessPolicies?: ServiceAccessPolicyEntry[];
	readonly authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;
	readonly corsConfiguration?: ServiceCorsConfigurationInfo;
	readonly cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;
	readonly exportConfiguration?: ServiceExportConfigurationInfo;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Deprovisioned"
		| "Failed"
		| "Succeeded"
		| "Updating"
		| "Verifying";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface ServicesResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
}
export interface ServicesResourceTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
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
	privateLinkServicesForMIPPolicySync: privateLinkServicesForMIPPolicySync,
	"privateLinkServicesForMIPPolicySync/privateEndpointConnections":
		privateLinkServicesForMIPPolicySync_privateEndpointConnections,
	"privateLinkServicesForMIPPolicySync/privateLinkResources": privateLinkServicesForMIPPolicySync_privateLinkResources,
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
