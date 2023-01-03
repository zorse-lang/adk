import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class labPlans extends ArmResource<labPlansComponentInputs> implements labPlansComponentOutputs {
	constructor(entity: ADKEntity, options: labPlansComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labPlans", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labPlans";
}
export interface labPlansComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labPlans";
}
export interface labPlansComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: LabPlanProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class labPlans_images
	extends ArmResource<labPlans_imagesComponentInputs>
	implements labPlans_imagesComponentOutputs
{
	constructor(entity: ADKEntity, options: labPlans_imagesComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labPlans/images", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labPlans/images";
}
export interface labPlans_imagesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labPlans/images";
}
export interface labPlans_imagesComponentInputs {
	readonly name: string;
	readonly properties: ImageProperties;
	readonly systemData?: SystemData | undefined;
}
export class labs extends ArmResource<labsComponentInputs> implements labsComponentOutputs {
	constructor(entity: ADKEntity, options: labsComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs";
}
export interface labsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs";
}
export interface labsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: LabProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class labs_schedules extends ArmResource<labs_schedulesComponentInputs> implements labs_schedulesComponentOutputs {
	constructor(entity: ADKEntity, options: labs_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs/schedules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs/schedules";
}
export interface labs_schedulesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs/schedules";
}
export interface labs_schedulesComponentInputs {
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly systemData?: SystemData | undefined;
}
export class labs_users extends ArmResource<labs_usersComponentInputs> implements labs_usersComponentOutputs {
	constructor(entity: ADKEntity, options: labs_usersComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs/users", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs/users";
}
export interface labs_usersComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs/users";
}
export interface labs_usersComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
	readonly systemData?: SystemData | undefined;
}
export class labs_virtualMachines
	extends ArmResource<labs_virtualMachinesComponentInputs>
	implements labs_virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.LabServices/labs/virtualMachines", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LabServices/labs/virtualMachines";
}
export interface labs_virtualMachinesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.LabServices/labs/virtualMachines";
}
export interface labs_virtualMachinesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualMachineProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AutoShutdownProfile {
	readonly disconnectDelay?: string | undefined;
	readonly idleDelay?: string | undefined;
	readonly noConnectDelay?: string | undefined;
	readonly shutdownOnDisconnect?: "Disabled" | undefined;
	readonly shutdownOnIdle?: ("LowUsage" | "None") | undefined;
	readonly shutdownWhenNotConnected?: "Disabled" | undefined;
}
export interface ConnectionProfile {
	readonly clientRdpAccess?: ("None" | "Private") | undefined;
	readonly clientSshAccess?: ("None" | "Private") | undefined;
	readonly webRdpAccess?: ("None" | "Private") | undefined;
	readonly webSshAccess?: ("None" | "Private") | undefined;
}
export interface Credentials {
	readonly password?: string | undefined;
	readonly username: string;
}
export interface ImageProperties {
	readonly author?: string | undefined;
	readonly availableRegions?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabledState?: "Disabled" | undefined;
	readonly iconUrl?: string | undefined;
	readonly offer?: string | undefined;
	readonly osState?: "Generalized" | undefined;
	readonly osType?: "Linux" | undefined;
	readonly plan?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded") | undefined;
	readonly publisher?: string | undefined;
	readonly sharedGalleryId?: string | undefined;
	readonly sku?: string | undefined;
	readonly termsStatus?: "Disabled" | undefined;
	readonly version?: string | undefined;
}
export interface ImageReference {
	readonly exactVersion?: string | undefined;
	readonly id?: string | undefined;
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface LabNetworkProfile {
	readonly loadBalancerId?: string | undefined;
	readonly publicIpId?: string | undefined;
	readonly subnetId?: string | undefined;
}
export interface LabPlanNetworkProfile {
	readonly subnetId?: string | undefined;
}
export interface LabPlanProperties {
	readonly allowedRegions?: string[] | undefined;
	readonly defaultAutoShutdownProfile?: AutoShutdownProfile | undefined;
	readonly defaultConnectionProfile?: ConnectionProfile | undefined;
	readonly defaultNetworkProfile?: LabPlanNetworkProfile | undefined;
	readonly linkedLmsInstance?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded") | undefined;
	readonly sharedGalleryId?: string | undefined;
	readonly supportInfo?: SupportInfo | undefined;
}
export interface LabProperties {
	readonly autoShutdownProfile?: AutoShutdownProfile | undefined;
	readonly connectionProfile?: ConnectionProfile | undefined;
	readonly description?: string | undefined;
	readonly labPlanId?: string | undefined;
	readonly networkProfile?: LabNetworkProfile | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded") | undefined;
	readonly rosterProfile?: RosterProfile | undefined;
	readonly securityProfile?: SecurityProfile | undefined;
	readonly state?: ("Draft" | "Published" | "Publishing" | "Scaling") | undefined;
	readonly title?: string | undefined;
	readonly virtualMachineProfile?: VirtualMachineProfile | undefined;
}
export interface RecurrencePattern {
	readonly expirationDate: string;
	readonly frequency: "Daily";
	readonly interval?: number | undefined;
	readonly weekDays?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
}
export interface RosterProfile {
	readonly activeDirectoryGroupId?: string | undefined;
	readonly lmsInstance?: string | undefined;
	readonly ltiClientId?: string | undefined;
	readonly ltiContextId?: string | undefined;
	readonly ltiRosterEndpoint?: string | undefined;
}
export interface ScheduleProperties {
	readonly notes?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded") | undefined;
	readonly recurrencePattern?: RecurrencePattern | undefined;
	readonly startAt?: string | undefined;
	readonly stopAt?: string | undefined;
	readonly timeZoneId?: string | undefined;
}
export interface SecurityProfile {
	readonly openAccess?: "Disabled" | undefined;
	readonly registrationCode?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium") | undefined;
}
export interface SupportInfo {
	readonly email?: string | undefined;
	readonly instructions?: string | undefined;
	readonly phone?: string | undefined;
	readonly url?: string | undefined;
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
export interface UserProperties {
	readonly additionalUsageQuota?: string | undefined;
	readonly displayName?: string | undefined;
	readonly email: string;
	readonly invitationSent?: string | undefined;
	readonly invitationState?: ("Failed" | "NotSent" | "Sending") | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded") | undefined;
	readonly registrationState?: "NotRegistered" | undefined;
	readonly totalUsage?: string | undefined;
}
export interface VirtualMachineAdditionalCapabilities {
	readonly installGpuDrivers?: "Disabled" | undefined;
}
export interface VirtualMachineConnectionProfile {
	readonly adminUsername?: string | undefined;
	readonly nonAdminUsername?: string | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly rdpAuthority?: string | undefined;
	readonly rdpInBrowserUrl?: string | undefined;
	readonly sshAuthority?: string | undefined;
	readonly sshInBrowserUrl?: string | undefined;
}
export interface VirtualMachineProfile {
	readonly additionalCapabilities?: VirtualMachineAdditionalCapabilities | undefined;
	readonly adminUser: Credentials;
	readonly createOption: "Image";
	readonly imageReference: ImageReference;
	readonly nonAdminUser?: Credentials | undefined;
	readonly osType?: "Linux" | undefined;
	readonly sku: Sku;
	readonly usageQuota: string;
	readonly useSharedPassword?: "Disabled" | undefined;
}
export interface VirtualMachineProperties {
	readonly claimedByUserId?: string | undefined;
	readonly connectionProfile?: VirtualMachineConnectionProfile | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Locked" | "Succeeded") | undefined;
	readonly state?: ("Redeploying" | "Reimaging" | "ResettingPassword" | "Running" | "Starting" | "Stopped") | undefined;
	readonly vmType?: "Template" | undefined;
}
export default {
	labPlans: labPlans,
	"labPlans/images": labPlans_images,
	labs: labs,
	"labs/schedules": labs_schedules,
	"labs/users": labs_users,
	"labs/virtualMachines": labs_virtualMachines,
};
