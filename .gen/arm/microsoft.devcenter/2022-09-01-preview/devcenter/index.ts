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
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: DevCenterProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: AttachedNetworkConnectionProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: CatalogProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: DevBoxDefinitionProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: EnvironmentTypeProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
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
	readonly properties?: GalleryProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: ImageProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: ImageVersionProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: NetworkProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: HealthCheckStatusDetailsProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: ProjectProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: AllowedEnvironmentTypeProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: AttachedNetworkConnectionProperties;
	readonly systemData?: SystemData;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: DevBoxDefinitionProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProjectEnvironmentTypeProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
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
	readonly properties?: PoolProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ScheduleProperties;
	readonly systemData?: SystemData;
}
export interface AllowedEnvironmentTypeProperties {
	readonly provisioningState?: string;
}
export interface AttachedNetworkConnectionProperties {
	readonly domainJoinType?: "AzureADJoin" | "HybridAzureADJoin";
	readonly healthCheckStatus?: "Failed" | "Passed" | "Pending" | "Running" | "Unknown" | "Warning";
	readonly networkConnectionId: string;
	readonly networkConnectionLocation?: string;
	readonly provisioningState?: string;
}
export interface CatalogProperties {
	readonly adoGit?: GitCatalog;
	readonly gitHub?: GitCatalog;
	readonly lastSyncTime?: string;
	readonly provisioningState?: string;
}
export interface DevBoxDefinitionProperties {
	readonly activeImageReference?: ImageReference;
	readonly imageReference?: ImageReference;
	readonly imageValidationErrorDetails?: ImageValidationErrorDetails;
	readonly imageValidationStatus?: "Failed" | "Pending" | "Succeeded" | "TimedOut" | "Unknown";
	readonly osStorageType?: string;
	readonly provisioningState?: string;
	readonly sku?: Sku;
}
export interface DevCenterProperties {
	readonly provisioningState?: string;
}
export interface EnvironmentRole {
	readonly description?: string;
	readonly roleName?: string;
}
export interface EnvironmentTypeProperties {
	readonly provisioningState?: string;
}
export interface GalleryProperties {
	readonly galleryResourceId: string;
	readonly provisioningState?: string;
}
export interface GitCatalog {
	readonly branch?: string;
	readonly path?: string;
	readonly secretIdentifier?: string;
	readonly uri?: string;
}
export interface HealthCheck {
	readonly additionalDetails?: string;
	readonly displayName?: string;
	readonly endDateTime?: string;
	readonly errorType?: string;
	readonly recommendedAction?: string;
	readonly startDateTime?: string;
	readonly status?: "Failed" | "Passed" | "Pending" | "Running" | "Unknown" | "Warning";
}
export interface HealthCheckStatusDetailsProperties {
	readonly endDateTime?: string;
	readonly healthChecks?: HealthCheck[];
	readonly startDateTime?: string;
}
export interface ImageProperties {
	readonly description?: string;
	readonly offer?: string;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly recommendedMachineConfiguration?: RecommendedMachineConfiguration;
	readonly sku?: string;
}
export interface ImageReference {
	readonly exactVersion?: string;
	readonly id?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly sku?: string;
}
export interface ImageValidationErrorDetails {
	readonly code?: string;
	readonly message?: string;
}
export interface ImageVersionProperties {
	readonly excludeFromLatest?: boolean;
	readonly name?: string;
	readonly osDiskImageSizeInGb?: number;
	readonly provisioningState?: string;
	readonly publishedDate?: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface NetworkProperties {
	readonly domainJoinType: "AzureADJoin" | "HybridAzureADJoin";
	readonly domainName?: string;
	readonly domainPassword?: string;
	readonly domainUsername?: string;
	readonly healthCheckStatus?: "Failed" | "Passed" | "Pending" | "Running" | "Unknown" | "Warning";
	readonly networkingResourceGroupName?: string;
	readonly organizationUnit?: string;
	readonly provisioningState?: string;
	readonly subnetId?: string;
}
export interface PoolProperties {
	readonly devBoxDefinitionName?: string;
	readonly licenseType?: "Windows_Client";
	readonly localAdministrator?: "Disabled" | "Enabled";
	readonly networkConnectionName?: string;
	readonly provisioningState?: string;
}
export interface ProjectEnvironmentTypeProperties {
	readonly creatorRoleAssignment?: ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment;
	readonly deploymentTargetId?: string;
	readonly provisioningState?: string;
	readonly status?: "Disabled" | "Enabled";
	readonly userRoleAssignments?: ProjectEnvironmentTypeUpdatePropertiesUserRoleAssignments;
}
export interface ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment {
	readonly roles?: ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentRoles;
}
export interface ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentRoles {
	readonly [key: string]: EnvironmentRole;
}
export interface ProjectEnvironmentTypeUpdatePropertiesUserRoleAssignments {
	readonly [key: string]: UserRoleAssignmentValue;
}
export interface ProjectProperties {
	readonly description?: string;
	readonly devCenterId?: string;
	readonly provisioningState?: string;
}
export interface RecommendedMachineConfiguration {
	readonly memory?: ResourceRange;
	readonly vCPUs?: ResourceRange;
}
export interface ResourceRange {
	readonly max?: number;
	readonly min?: number;
}
export interface ScheduleProperties {
	readonly frequency?: "Daily";
	readonly provisioningState?: string;
	readonly state?: "Disabled" | "Enabled";
	readonly time?: string;
	readonly timeZone?: string;
	readonly type?: "StopDevBox";
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Tags {
	readonly [key: string]: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserRoleAssignmentRoles {
	readonly [key: string]: EnvironmentRole;
}
export interface UserRoleAssignmentValue {
	readonly roles?: UserRoleAssignmentRoles;
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
