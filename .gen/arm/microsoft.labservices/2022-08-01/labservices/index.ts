import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class labPlans extends ArmResource<labPlansComponentInputs> implements labPlansComponentOutputs {
	constructor(entity: ADKEntity, options: labPlansComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labPlans", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labPlans";
}
export interface labPlansComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labPlans";
}
export interface labPlansComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties: LabPlanProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class labPlans_images
	extends ArmResource<labPlans_imagesComponentInputs>
	implements labPlans_imagesComponentOutputs
{
	constructor(entity: ADKEntity, options: labPlans_imagesComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labPlans/images", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labPlans/images";
}
export interface labPlans_imagesComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labPlans/images";
}
export interface labPlans_imagesComponentInputs {
	readonly name: string;
	readonly properties: ImageProperties;
	readonly systemData?: SystemData;
}
export class labs extends ArmResource<labsComponentInputs> implements labsComponentOutputs {
	constructor(entity: ADKEntity, options: labsComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs";
}
export interface labsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs";
}
export interface labsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: LabProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class labs_schedules extends ArmResource<labs_schedulesComponentInputs> implements labs_schedulesComponentOutputs {
	constructor(entity: ADKEntity, options: labs_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs/schedules", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs/schedules";
}
export interface labs_schedulesComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs/schedules";
}
export interface labs_schedulesComponentInputs {
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly systemData?: SystemData;
}
export class labs_users extends ArmResource<labs_usersComponentInputs> implements labs_usersComponentOutputs {
	constructor(entity: ADKEntity, options: labs_usersComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs/users", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs/users";
}
export interface labs_usersComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs/users";
}
export interface labs_usersComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
	readonly systemData?: SystemData;
}
export class labs_virtualMachines
	extends ArmResource<labs_virtualMachinesComponentInputs>
	implements labs_virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs/virtualMachines", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs/virtualMachines";
}
export interface labs_virtualMachinesComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs/virtualMachines";
}
export interface labs_virtualMachinesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualMachineProperties;
	readonly systemData?: SystemData;
}
export interface AutoShutdownProfile {
	readonly disconnectDelay?: string;
	readonly idleDelay?: string;
	readonly noConnectDelay?: string;
	readonly shutdownOnDisconnect?: "Disabled";
	readonly shutdownOnIdle?: "LowUsage" | "None";
	readonly shutdownWhenNotConnected?: "Disabled";
}
export interface ConnectionProfile {
	readonly clientRdpAccess?: "None" | "Private";
	readonly clientSshAccess?: "None" | "Private";
	readonly webRdpAccess?: "None" | "Private";
	readonly webSshAccess?: "None" | "Private";
}
export interface Credentials {
	readonly password?: string;
	readonly username: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface ImageProperties {
	readonly author?: string;
	readonly availableRegions?: string[];
	readonly description?: string;
	readonly displayName?: string;
	readonly enabledState?: "Disabled";
	readonly iconUrl?: string;
	readonly offer?: string;
	readonly osState?: "Generalized";
	readonly osType?: "Linux";
	readonly plan?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded";
	readonly publisher?: string;
	readonly sharedGalleryId?: string;
	readonly sku?: string;
	readonly termsStatus?: "Disabled";
	readonly version?: string;
}
export interface ImageReference {
	readonly exactVersion?: string;
	readonly id?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface LabNetworkProfile {
	readonly loadBalancerId?: string;
	readonly publicIpId?: string;
	readonly subnetId?: string;
}
export interface LabPlanNetworkProfile {
	readonly subnetId?: string;
}
export interface LabPlanProperties {
	readonly allowedRegions?: string[];
	readonly defaultAutoShutdownProfile?: AutoShutdownProfile;
	readonly defaultConnectionProfile?: ConnectionProfile;
	readonly defaultNetworkProfile?: LabPlanNetworkProfile;
	readonly linkedLmsInstance?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded";
	readonly sharedGalleryId?: string;
	readonly supportInfo?: SupportInfo;
}
export interface LabProperties {
	readonly autoShutdownProfile?: AutoShutdownProfile;
	readonly connectionProfile?: ConnectionProfile;
	readonly description?: string;
	readonly labPlanId?: string;
	readonly networkProfile?: LabNetworkProfile;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded";
	readonly rosterProfile?: RosterProfile;
	readonly securityProfile?: SecurityProfile;
	readonly state?: "Draft" | "Published" | "Publishing" | "Scaling";
	readonly title?: string;
	readonly virtualMachineProfile?: VirtualMachineProfile;
}
export interface RecurrencePattern {
	readonly expirationDate: string;
	readonly frequency: "Daily";
	readonly interval?: number;
	readonly weekDays?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
}
export interface RosterProfile {
	readonly activeDirectoryGroupId?: string;
	readonly lmsInstance?: string;
	readonly ltiClientId?: string;
	readonly ltiContextId?: string;
	readonly ltiRosterEndpoint?: string;
}
export interface ScheduleProperties {
	readonly notes?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded";
	readonly recurrencePattern?: RecurrencePattern;
	readonly startAt?: string;
	readonly stopAt?: string;
	readonly timeZoneId?: string;
}
export interface SecurityProfile {
	readonly openAccess?: "Disabled";
	readonly registrationCode?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium";
}
export interface SupportInfo {
	readonly email?: string;
	readonly instructions?: string;
	readonly phone?: string;
	readonly url?: string;
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
export interface UserProperties {
	readonly additionalUsageQuota?: string;
	readonly displayName?: string;
	readonly email: string;
	readonly invitationSent?: string;
	readonly invitationState?: "Failed" | "NotSent" | "Sending";
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded";
	readonly registrationState?: "NotRegistered";
	readonly totalUsage?: string;
}
export interface VirtualMachineAdditionalCapabilities {
	readonly installGpuDrivers?: "Disabled";
}
export interface VirtualMachineConnectionProfile {
	readonly adminUsername?: string;
	readonly nonAdminUsername?: string;
	readonly privateIpAddress?: string;
	readonly rdpAuthority?: string;
	readonly rdpInBrowserUrl?: string;
	readonly sshAuthority?: string;
	readonly sshInBrowserUrl?: string;
}
export interface VirtualMachineProfile {
	readonly additionalCapabilities?: VirtualMachineAdditionalCapabilities;
	readonly adminUser: Credentials;
	readonly createOption: "Image";
	readonly imageReference: ImageReference;
	readonly nonAdminUser?: Credentials;
	readonly osType?: "Linux";
	readonly sku: Sku;
	readonly usageQuota: string;
	readonly useSharedPassword?: "Disabled";
}
export interface VirtualMachineProperties {
	readonly claimedByUserId?: string;
	readonly connectionProfile?: VirtualMachineConnectionProfile;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded";
	readonly state?: "Redeploying" | "Reimaging" | "ResettingPassword" | "Running" | "Starting" | "Stopped";
	readonly vmType?: "Template";
}
export default {
	labPlans: labPlans,
	"labPlans/images": labPlans_images,
	labs: labs,
	"labs/schedules": labs_schedules,
	"labs/users": labs_users,
	"labs/virtualMachines": labs_virtualMachines,
};
