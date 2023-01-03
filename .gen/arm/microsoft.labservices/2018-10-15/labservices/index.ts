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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LabAccountProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GalleryImageProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LabProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EnvironmentSettingProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EnvironmentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: UserProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly description?: string | undefined;
	readonly environmentState?: string | undefined;
	readonly id?: string | undefined;
	readonly latestOperationResult?: LatestOperationResult | undefined;
	readonly name?: string | undefined;
	readonly passwordLastReset?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly totalUsage?: string | undefined;
	readonly virtualMachineDetails?: VirtualMachineDetails | undefined;
}
export interface EnvironmentProperties {
	readonly claimedByUserName?: string | undefined;
	readonly claimedByUserObjectId?: string | undefined;
	readonly claimedByUserPrincipalId?: string | undefined;
	readonly isClaimed?: boolean | undefined;
	readonly lastKnownPowerState?: string | undefined;
	readonly latestOperationResult?: LatestOperationResult | undefined;
	readonly networkInterface?: NetworkInterface | undefined;
	readonly passwordLastReset?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceSets?: ResourceSet | undefined;
	readonly totalUsage?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface EnvironmentSettingProperties {
	readonly configurationState?: ("Completed" | "NotApplicable") | undefined;
	readonly description?: string | undefined;
	readonly lastChanged?: string | undefined;
	readonly lastPublished?: string | undefined;
	readonly latestOperationResult?: LatestOperationResult | undefined;
	readonly provisioningState?: string | undefined;
	readonly publishingState?: ("Draft" | "PublishFailed" | "Published" | "Publishing" | "Scaling") | undefined;
	readonly resourceSettings: ResourceSettings;
	readonly title?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface EnvironmentSize {
	readonly maxPrice?: number | undefined;
	readonly minMemory?: number | undefined;
	readonly minNumberOfCores?: number | undefined;
	readonly name?: ("Basic" | "Performance" | "Standard") | undefined;
	readonly vmSizes?: SizeInfo[] | undefined;
}
export interface GalleryImageProperties {
	readonly author?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly description?: string | undefined;
	readonly icon?: string | undefined;
	readonly imageReference?: GalleryImageReference | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly isOverride?: boolean | undefined;
	readonly isPlanAuthorized?: boolean | undefined;
	readonly latestOperationResult?: LatestOperationResult | undefined;
	readonly planId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface GalleryImageReference {
	readonly offer?: string | undefined;
	readonly osType?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface LabAccountProperties {
	readonly enabledRegionSelection?: boolean | undefined;
	readonly latestOperationResult?: LatestOperationResult | undefined;
	readonly provisioningState?: string | undefined;
	readonly sizeConfiguration?: SizeConfigurationProperties | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface LabDetails {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly usageQuota?: string | undefined;
}
export interface LabProperties {
	readonly createdByObjectId?: string | undefined;
	readonly createdByUserPrincipalName?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly invitationCode?: string | undefined;
	readonly latestOperationResult?: LatestOperationResult | undefined;
	readonly maxUsersInLab?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly usageQuota?: string | undefined;
	readonly userAccessMode?: ("Open" | "Restricted") | undefined;
	readonly userQuota?: number | undefined;
}
export interface LatestOperationResult {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly httpMethod?: string | undefined;
	readonly operationUrl?: string | undefined;
	readonly requestUri?: string | undefined;
	readonly status?: string | undefined;
}
export interface ListEnvironmentsPayload {
	readonly labId?: string | undefined;
}
export interface ListEnvironmentsResponse {
	readonly environments?: EnvironmentDetails[] | undefined;
}
export interface ListLabsResponse {
	readonly labs?: LabDetails[] | undefined;
}
export interface NetworkInterface {
	readonly privateIpAddress?: string | undefined;
	readonly rdpAuthority?: string | undefined;
	readonly sshAuthority?: string | undefined;
	readonly username?: string | undefined;
}
export interface ReferenceVm {
	readonly password?: string | undefined;
	readonly userName: string;
	readonly vmResourceId?: string | undefined;
	readonly vmStateDetails?: VmStateDetails | undefined;
}
export interface ResourceSet {
	readonly resourceSettingId?: string | undefined;
	readonly vmResourceId?: string | undefined;
}
export interface ResourceSettings {
	readonly cores?: number | undefined;
	readonly galleryImageResourceId?: string | undefined;
	readonly id?: string | undefined;
	readonly imageName?: string | undefined;
	readonly referenceVm: ReferenceVm;
	readonly size?: ("Basic" | "Performance" | "Standard") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SizeConfigurationProperties {
	readonly environmentSizes?: EnvironmentSize[] | undefined;
}
export interface SizeInfo {
	readonly computeSize?: string | undefined;
	readonly memory?: number | undefined;
	readonly numberOfCores?: number | undefined;
	readonly price?: number | undefined;
}
export interface UserProperties {
	readonly email?: string | undefined;
	readonly familyName?: string | undefined;
	readonly givenName?: string | undefined;
	readonly latestOperationResult?: LatestOperationResult | undefined;
	readonly provisioningState?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly totalUsage?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface VirtualMachineDetails {
	readonly lastKnownPowerState?: string | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly rdpAuthority?: string | undefined;
	readonly sshAuthority?: string | undefined;
	readonly userName?: string | undefined;
}
export interface VmStateDetails {
	readonly lastKnownPowerState?: string | undefined;
	readonly powerState?: string | undefined;
	readonly rdpAuthority?: string | undefined;
	readonly sshAuthority?: string | undefined;
}
export default {
	labaccounts: labaccounts,
	"labaccounts/galleryimages": labaccounts_galleryimages,
	"labaccounts/labs": labaccounts_labs,
	"labaccounts/labs/environmentsettings": labaccounts_labs_environmentsettings,
	"labaccounts/labs/environmentsettings/environments": labaccounts_labs_environmentsettings_environments,
	"labaccounts/labs/users": labaccounts_labs_users,
};
