import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class devcenters extends ArmResource<devcentersComponentInputs> implements devcentersComponentOutputs {
	constructor(entity: ADKEntity, options: devcentersComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/devcenters", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters";
}
export interface devcentersComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters";
}
export interface devcentersComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DevCenterProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class devcenters_attachednetworks
	extends ArmResource<devcenters_attachednetworksComponentInputs>
	implements devcenters_attachednetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: devcenters_attachednetworksComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/devcenters/attachednetworks", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters/attachednetworks";
}
export interface devcenters_attachednetworksComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters/attachednetworks";
}
export interface devcenters_attachednetworksComponentInputs {
	readonly name: string;
	readonly properties?: AttachedNetworkConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class devcenters_catalogs
	extends ArmResource<devcenters_catalogsComponentInputs>
	implements devcenters_catalogsComponentOutputs
{
	constructor(entity: ADKEntity, options: devcenters_catalogsComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/devcenters/catalogs", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters/catalogs";
}
export interface devcenters_catalogsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters/catalogs";
}
export interface devcenters_catalogsComponentInputs {
	readonly name: string;
	readonly properties?: CatalogProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class devcenters_devboxdefinitions
	extends ArmResource<devcenters_devboxdefinitionsComponentInputs>
	implements devcenters_devboxdefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: devcenters_devboxdefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/devcenters/devboxdefinitions", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters/devboxdefinitions";
}
export interface devcenters_devboxdefinitionsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters/devboxdefinitions";
}
export interface devcenters_devboxdefinitionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DevBoxDefinitionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class devcenters_environmentTypes
	extends ArmResource<devcenters_environmentTypesComponentInputs>
	implements devcenters_environmentTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: devcenters_environmentTypesComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/devcenters/environmentTypes", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters/environmentTypes";
}
export interface devcenters_environmentTypesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters/environmentTypes";
}
export interface devcenters_environmentTypesComponentInputs {
	readonly name: string;
	readonly properties?: EnvironmentTypeProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export class devcenters_galleries
	extends ArmResource<devcenters_galleriesComponentInputs>
	implements devcenters_galleriesComponentOutputs
{
	constructor(entity: ADKEntity, options: devcenters_galleriesComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/devcenters/galleries", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters/galleries";
}
export interface devcenters_galleriesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters/galleries";
}
export interface devcenters_galleriesComponentInputs {
	readonly name: string;
	readonly properties?: GalleryProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class devcenters_galleries_images
	extends ArmResource<devcenters_galleries_imagesComponentInputs>
	implements devcenters_galleries_imagesComponentOutputs
{
	constructor(entity: ADKEntity, options: devcenters_galleries_imagesComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/devcenters/galleries/images", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters/galleries/images";
}
export interface devcenters_galleries_imagesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters/galleries/images";
}
export interface devcenters_galleries_imagesComponentInputs {
	readonly name: string;
	readonly properties?: ImageProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class devcenters_galleries_images_versions
	extends ArmResource<devcenters_galleries_images_versionsComponentInputs>
	implements devcenters_galleries_images_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: devcenters_galleries_images_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DevCenter/devcenters/galleries/images/versions",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/devcenters/galleries/images/versions";
}
export interface devcenters_galleries_images_versionsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/devcenters/galleries/images/versions";
}
export interface devcenters_galleries_images_versionsComponentInputs {
	readonly name: string;
	readonly properties?: ImageVersionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkConnections
	extends ArmResource<networkConnectionsComponentInputs>
	implements networkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/networkConnections", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/networkConnections";
}
export interface networkConnectionsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/networkConnections";
}
export interface networkConnectionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: NetworkProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class networkConnections_healthChecks
	extends ArmResource<networkConnections_healthChecksComponentInputs>
	implements networkConnections_healthChecksComponentOutputs
{
	constructor(entity: ADKEntity, options: networkConnections_healthChecksComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/networkConnections/healthChecks", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/networkConnections/healthChecks";
}
export interface networkConnections_healthChecksComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/networkConnections/healthChecks";
}
export interface networkConnections_healthChecksComponentInputs {
	readonly name: string;
	readonly properties?: HealthCheckStatusDetailsProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class projects extends ArmResource<projectsComponentInputs> implements projectsComponentOutputs {
	constructor(entity: ADKEntity, options: projectsComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/projects", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/projects";
}
export interface projectsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/projects";
}
export interface projectsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProjectProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class projects_allowedEnvironmentTypes
	extends ArmResource<projects_allowedEnvironmentTypesComponentInputs>
	implements projects_allowedEnvironmentTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_allowedEnvironmentTypesComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/projects/allowedEnvironmentTypes", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/projects/allowedEnvironmentTypes";
}
export interface projects_allowedEnvironmentTypesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/projects/allowedEnvironmentTypes";
}
export interface projects_allowedEnvironmentTypesComponentInputs {
	readonly name: string;
	readonly properties?: AllowedEnvironmentTypeProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class projects_attachednetworks
	extends ArmResource<projects_attachednetworksComponentInputs>
	implements projects_attachednetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_attachednetworksComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/projects/attachednetworks", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/projects/attachednetworks";
}
export interface projects_attachednetworksComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/projects/attachednetworks";
}
export interface projects_attachednetworksComponentInputs {
	readonly name: string;
	readonly properties?: AttachedNetworkConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class projects_devboxdefinitions
	extends ArmResource<projects_devboxdefinitionsComponentInputs>
	implements projects_devboxdefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_devboxdefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/projects/devboxdefinitions", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/projects/devboxdefinitions";
}
export interface projects_devboxdefinitionsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/projects/devboxdefinitions";
}
export interface projects_devboxdefinitionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DevBoxDefinitionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class projects_environmentTypes
	extends ArmResource<projects_environmentTypesComponentInputs>
	implements projects_environmentTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_environmentTypesComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/projects/environmentTypes", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/projects/environmentTypes";
}
export interface projects_environmentTypesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/projects/environmentTypes";
}
export interface projects_environmentTypesComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectEnvironmentTypeProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export class projects_pools extends ArmResource<projects_poolsComponentInputs> implements projects_poolsComponentOutputs {
	constructor(entity: ADKEntity, options: projects_poolsComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/projects/pools", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/projects/pools";
}
export interface projects_poolsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/projects/pools";
}
export interface projects_poolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PoolProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class projects_pools_schedules
	extends ArmResource<projects_pools_schedulesComponentInputs>
	implements projects_pools_schedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_pools_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DevCenter/projects/pools/schedules", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevCenter/projects/pools/schedules";
}
export interface projects_pools_schedulesComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevCenter/projects/pools/schedules";
}
export interface projects_pools_schedulesComponentInputs {
	readonly name: string;
	readonly properties?: ScheduleProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AllowedEnvironmentTypeProperties {
	readonly provisioningState?: string | undefined;
}
export interface AttachedNetworkConnectionProperties {
	readonly domainJoinType?: ("AzureADJoin" | "HybridAzureADJoin") | undefined;
	readonly healthCheckStatus?: ("Failed" | "Passed" | "Pending" | "Running" | "Unknown" | "Warning") | undefined;
	readonly networkConnectionId: string;
	readonly networkConnectionLocation?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface CatalogProperties {
	readonly adoGit?: GitCatalog | undefined;
	readonly gitHub?: GitCatalog | undefined;
	readonly lastSyncTime?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface DevBoxDefinitionProperties {
	readonly activeImageReference?: ImageReference | undefined;
	readonly imageReference?: ImageReference | undefined;
	readonly imageValidationErrorDetails?: ImageValidationErrorDetails | undefined;
	readonly imageValidationStatus?: ("Failed" | "Pending" | "Succeeded" | "TimedOut" | "Unknown") | undefined;
	readonly osStorageType?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly sku?: Sku | undefined;
}
export interface DevCenterProperties {
	readonly provisioningState?: string | undefined;
}
export interface EnvironmentRole {
	readonly description?: string | undefined;
	readonly roleName?: string | undefined;
}
export interface EnvironmentTypeProperties {
	readonly provisioningState?: string | undefined;
}
export interface GalleryProperties {
	readonly galleryResourceId: string;
	readonly provisioningState?: string | undefined;
}
export interface GitCatalog {
	readonly branch?: string | undefined;
	readonly path?: string | undefined;
	readonly secretIdentifier?: string | undefined;
	readonly uri?: string | undefined;
}
export interface HealthCheck {
	readonly additionalDetails?: string | undefined;
	readonly displayName?: string | undefined;
	readonly endDateTime?: string | undefined;
	readonly errorType?: string | undefined;
	readonly recommendedAction?: string | undefined;
	readonly startDateTime?: string | undefined;
	readonly status?: ("Failed" | "Passed" | "Pending" | "Running" | "Unknown" | "Warning") | undefined;
}
export interface HealthCheckStatusDetailsProperties {
	readonly endDateTime?: string | undefined;
	readonly healthChecks?: HealthCheck[] | undefined;
	readonly startDateTime?: string | undefined;
}
export interface ImageProperties {
	readonly description?: string | undefined;
	readonly offer?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly recommendedMachineConfiguration?: RecommendedMachineConfiguration | undefined;
	readonly sku?: string | undefined;
}
export interface ImageReference {
	readonly exactVersion?: string | undefined;
	readonly id?: string | undefined;
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
}
export interface ImageValidationErrorDetails {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ImageVersionProperties {
	readonly excludeFromLatest?: boolean | undefined;
	readonly name?: string | undefined;
	readonly osDiskImageSizeInGb?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly publishedDate?: string | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface NetworkProperties {
	readonly domainJoinType: "AzureADJoin" | "HybridAzureADJoin";
	readonly domainName?: string | undefined;
	readonly domainPassword?: string | undefined;
	readonly domainUsername?: string | undefined;
	readonly healthCheckStatus?: ("Failed" | "Passed" | "Pending" | "Running" | "Unknown" | "Warning") | undefined;
	readonly networkingResourceGroupName?: string | undefined;
	readonly organizationUnit?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly subnetId?: string | undefined;
}
export interface PoolProperties {
	readonly devBoxDefinitionName?: string | undefined;
	readonly licenseType?: "Windows_Client" | undefined;
	readonly localAdministrator?: ("Disabled" | "Enabled") | undefined;
	readonly networkConnectionName?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ProjectEnvironmentTypeProperties {
	readonly creatorRoleAssignment?: ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment | undefined;
	readonly deploymentTargetId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly userRoleAssignments?: ProjectEnvironmentTypeUpdatePropertiesUserRoleAssignments | undefined;
}
export interface ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment {
	readonly roles?: ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentRoles | undefined;
}
export interface ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentRoles {
	readonly "[ key: string ]"?: EnvironmentRole | undefined;
}
export interface ProjectEnvironmentTypeUpdatePropertiesUserRoleAssignments {
	readonly "[ key: string ]"?: UserRoleAssignmentValue | undefined;
}
export interface ProjectProperties {
	readonly description?: string | undefined;
	readonly devCenterId?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface RecommendedMachineConfiguration {
	readonly memory?: ResourceRange | undefined;
	readonly vCPUs?: ResourceRange | undefined;
}
export interface ResourceRange {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface ScheduleProperties {
	readonly frequency?: "Daily" | undefined;
	readonly provisioningState?: string | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
	readonly time?: string | undefined;
	readonly timeZone?: string | undefined;
	readonly type?: "StopDevBox" | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserRoleAssignmentRoles {
	readonly "[ key: string ]"?: EnvironmentRole | undefined;
}
export interface UserRoleAssignmentValue {
	readonly roles?: UserRoleAssignmentRoles | undefined;
}
export default {
	devcenters: devcenters,
	"devcenters/attachednetworks": devcenters_attachednetworks,
	"devcenters/catalogs": devcenters_catalogs,
	"devcenters/devboxdefinitions": devcenters_devboxdefinitions,
	"devcenters/environmentTypes": devcenters_environmentTypes,
	"devcenters/galleries": devcenters_galleries,
	"devcenters/galleries/images": devcenters_galleries_images,
	"devcenters/galleries/images/versions": devcenters_galleries_images_versions,
	networkConnections: networkConnections,
	"networkConnections/healthChecks": networkConnections_healthChecks,
	projects: projects,
	"projects/allowedEnvironmentTypes": projects_allowedEnvironmentTypes,
	"projects/attachednetworks": projects_attachednetworks,
	"projects/devboxdefinitions": projects_devboxdefinitions,
	"projects/environmentTypes": projects_environmentTypes,
	"projects/pools": projects_pools,
	"projects/pools/schedules": projects_pools_schedules,
};
