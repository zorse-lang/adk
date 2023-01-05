import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class labaccounts extends ArmResource<labaccountsComponentInputs> implements labaccountsComponentOutputs {
	constructor(entity: ADKEntity, options: labaccountsComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labaccounts", "2018-10-15", options);
	}
	public readonly apiVersion: "2018-10-15";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labaccounts";
}
export interface labaccountsComponentOutputs {
	readonly apiVersion: "2018-10-15";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labaccounts";
}
export interface labaccountsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: LabAccountProperties;
	readonly tags?: ResourceTags;
}
export class labaccounts_galleryimages
	extends ArmResource<labaccounts_galleryimagesComponentInputs>
	implements labaccounts_galleryimagesComponentOutputs
{
	constructor(entity: ADKEntity, options: labaccounts_galleryimagesComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labaccounts/galleryimages", "2018-10-15", options);
	}
	public readonly apiVersion: "2018-10-15";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labaccounts/galleryimages";
}
export interface labaccounts_galleryimagesComponentOutputs {
	readonly apiVersion: "2018-10-15";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labaccounts/galleryimages";
}
export interface labaccounts_galleryimagesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: GalleryImageProperties;
	readonly tags?: ResourceTags;
}
export class labaccounts_labs
	extends ArmResource<labaccounts_labsComponentInputs>
	implements labaccounts_labsComponentOutputs
{
	constructor(entity: ADKEntity, options: labaccounts_labsComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labaccounts/labs", "2018-10-15", options);
	}
	public readonly apiVersion: "2018-10-15";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labaccounts/labs";
}
export interface labaccounts_labsComponentOutputs {
	readonly apiVersion: "2018-10-15";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labaccounts/labs";
}
export interface labaccounts_labsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: LabProperties;
	readonly tags?: ResourceTags;
}
export class labaccounts_labs_environmentsettings
	extends ArmResource<labaccounts_labs_environmentsettingsComponentInputs>
	implements labaccounts_labs_environmentsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: labaccounts_labs_environmentsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labaccounts/labs/environmentsettings", "2018-10-15", options);
	}
	public readonly apiVersion: "2018-10-15";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labaccounts/labs/environmentsettings";
}
export interface labaccounts_labs_environmentsettingsComponentOutputs {
	readonly apiVersion: "2018-10-15";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labaccounts/labs/environmentsettings";
}
export interface labaccounts_labs_environmentsettingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: EnvironmentSettingProperties;
	readonly tags?: ResourceTags;
}
export class labaccounts_labs_environmentsettings_environments
	extends ArmResource<labaccounts_labs_environmentsettings_environmentsComponentInputs>
	implements labaccounts_labs_environmentsettings_environmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: labaccounts_labs_environmentsettings_environmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.LabServices/labaccounts/labs/environmentsettings/environments",
			"2018-10-15",
			options,
		);
	}
	public readonly apiVersion: "2018-10-15";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labaccounts/labs/environmentsettings/environments";
}
export interface labaccounts_labs_environmentsettings_environmentsComponentOutputs {
	readonly apiVersion: "2018-10-15";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labaccounts/labs/environmentsettings/environments";
}
export interface labaccounts_labs_environmentsettings_environmentsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: EnvironmentProperties;
	readonly tags?: ResourceTags;
}
export class labaccounts_labs_users
	extends ArmResource<labaccounts_labs_usersComponentInputs>
	implements labaccounts_labs_usersComponentOutputs
{
	constructor(entity: ADKEntity, options: labaccounts_labs_usersComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labaccounts/labs/users", "2018-10-15", options);
	}
	public readonly apiVersion: "2018-10-15";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labaccounts/labs/users";
}
export interface labaccounts_labs_usersComponentOutputs {
	readonly apiVersion: "2018-10-15";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labaccounts/labs/users";
}
export interface labaccounts_labs_usersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: UserProperties;
	readonly tags?: ResourceTags;
}
export function listEnvironments(resource: ArmResource, input: ListEnvironmentsPayload): ListEnvironmentsResponse {
	if (resource.apiVersion !== "2018-10-15") {
		throw new Error(`listEnvironments is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.LabServices/users") {
		throw new Error(`listEnvironments is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLabs(resource: ArmResource): ListLabsResponse {
	if (resource.apiVersion !== "2018-10-15") {
		throw new Error(`listLabs is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.LabServices/users") {
		throw new Error(`listLabs is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface EnvironmentDetails {
	readonly description?: string;
	readonly environmentState?: string;
	readonly id?: string;
	readonly latestOperationResult?: LatestOperationResult;
	readonly name?: string;
	readonly passwordLastReset?: string;
	readonly provisioningState?: string;
	readonly totalUsage?: string;
	readonly virtualMachineDetails?: VirtualMachineDetails;
}
export interface EnvironmentProperties {
	readonly claimedByUserName?: string;
	readonly claimedByUserObjectId?: string;
	readonly claimedByUserPrincipalId?: string;
	readonly isClaimed?: boolean;
	readonly lastKnownPowerState?: string;
	readonly latestOperationResult?: LatestOperationResult;
	readonly networkInterface?: NetworkInterface;
	readonly passwordLastReset?: string;
	readonly provisioningState?: string;
	readonly resourceSets?: ResourceSet;
	readonly totalUsage?: string;
	readonly uniqueIdentifier?: string;
}
export interface EnvironmentSettingProperties {
	readonly configurationState?: "Completed" | "NotApplicable";
	readonly description?: string;
	readonly lastChanged?: string;
	readonly lastPublished?: string;
	readonly latestOperationResult?: LatestOperationResult;
	readonly provisioningState?: string;
	readonly publishingState?: "Draft" | "PublishFailed" | "Published" | "Publishing" | "Scaling";
	readonly resourceSettings: ResourceSettings;
	readonly title?: string;
	readonly uniqueIdentifier?: string;
}
export interface EnvironmentSize {
	readonly maxPrice?: number;
	readonly minMemory?: number;
	readonly minNumberOfCores?: number;
	readonly name?: "Basic" | "Performance" | "Standard";
	readonly vmSizes?: SizeInfo[];
}
export interface GalleryImageProperties {
	readonly author?: string;
	readonly createdDate?: string;
	readonly description?: string;
	readonly icon?: string;
	readonly imageReference?: GalleryImageReference;
	readonly isEnabled?: boolean;
	readonly isOverride?: boolean;
	readonly isPlanAuthorized?: boolean;
	readonly latestOperationResult?: LatestOperationResult;
	readonly planId?: string;
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
}
export interface GalleryImageReference {
	readonly offer?: string;
	readonly osType?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface LabAccountProperties {
	readonly enabledRegionSelection?: boolean;
	readonly latestOperationResult?: LatestOperationResult;
	readonly provisioningState?: string;
	readonly sizeConfiguration?: SizeConfigurationProperties;
	readonly uniqueIdentifier?: string;
}
export interface LabDetails {
	readonly id?: string;
	readonly name?: string;
	readonly provisioningState?: string;
	readonly usageQuota?: string;
}
export interface LabProperties {
	readonly createdByObjectId?: string;
	readonly createdByUserPrincipalName?: string;
	readonly createdDate?: string;
	readonly invitationCode?: string;
	readonly latestOperationResult?: LatestOperationResult;
	readonly maxUsersInLab?: number;
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
	readonly usageQuota?: string;
	readonly userAccessMode?: "Open" | "Restricted";
	readonly userQuota?: number;
}
export interface LatestOperationResult {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly httpMethod?: string;
	readonly operationUrl?: string;
	readonly requestUri?: string;
	readonly status?: string;
}
export interface ListEnvironmentsPayload {
	readonly labId?: string;
}
export interface ListEnvironmentsResponse {
	readonly environments?: EnvironmentDetails[];
}
export interface ListLabsResponse {
	readonly labs?: LabDetails[];
}
export interface NetworkInterface {
	readonly privateIpAddress?: string;
	readonly rdpAuthority?: string;
	readonly sshAuthority?: string;
	readonly username?: string;
}
export interface ReferenceVm {
	readonly password?: string;
	readonly userName: string;
	readonly vmResourceId?: string;
	readonly vmStateDetails?: VmStateDetails;
}
export interface ResourceSet {
	readonly resourceSettingId?: string;
	readonly vmResourceId?: string;
}
export interface ResourceSettings {
	readonly cores?: number;
	readonly galleryImageResourceId?: string;
	readonly id?: string;
	readonly imageName?: string;
	readonly referenceVm: ReferenceVm;
	readonly size?: "Basic" | "Performance" | "Standard";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SizeConfigurationProperties {
	readonly environmentSizes?: EnvironmentSize[];
}
export interface SizeInfo {
	readonly computeSize?: string;
	readonly memory?: number;
	readonly numberOfCores?: number;
	readonly price?: number;
}
export interface UserProperties {
	readonly email?: string;
	readonly familyName?: string;
	readonly givenName?: string;
	readonly latestOperationResult?: LatestOperationResult;
	readonly provisioningState?: string;
	readonly tenantId?: string;
	readonly totalUsage?: string;
	readonly uniqueIdentifier?: string;
}
export interface VirtualMachineDetails {
	readonly lastKnownPowerState?: string;
	readonly privateIpAddress?: string;
	readonly provisioningState?: string;
	readonly rdpAuthority?: string;
	readonly sshAuthority?: string;
	readonly userName?: string;
}
export interface VmStateDetails {
	readonly lastKnownPowerState?: string;
	readonly powerState?: string;
	readonly rdpAuthority?: string;
	readonly sshAuthority?: string;
}
export default {
	labaccounts: labaccounts,
	"labaccounts/galleryimages": labaccounts_galleryimages,
	"labaccounts/labs": labaccounts_labs,
	"labaccounts/labs/environmentsettings": labaccounts_labs_environmentsettings,
	"labaccounts/labs/environmentsettings/environments": labaccounts_labs_environmentsettings_environments,
	"labaccounts/labs/users": labaccounts_labs_users,
};
