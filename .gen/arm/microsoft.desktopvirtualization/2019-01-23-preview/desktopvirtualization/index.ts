import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGroups
	extends ArmResource<applicationGroupsComponentInputs>
	implements applicationGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/applicationGroups", "2019-01-23-preview", options);
	}
	public readonly apiVersion: "2019-01-23-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentOutputs {
	readonly apiVersion: "2019-01-23-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ApplicationGroupProperties;
	readonly tags?: TrackedResourceTags;
}
export class applicationGroups_applications
	extends ArmResource<applicationGroups_applicationsComponentInputs>
	implements applicationGroups_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGroups_applicationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DesktopVirtualization/applicationGroups/applications",
			"2019-01-23-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-01-23-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/applications";
}
export interface applicationGroups_applicationsComponentOutputs {
	readonly apiVersion: "2019-01-23-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups/applications";
}
export interface applicationGroups_applicationsComponentInputs {
	readonly name: string;
	readonly properties: ApplicationProperties;
}
export class applicationGroups_desktops
	extends ArmResource<applicationGroups_desktopsComponentInputs>
	implements applicationGroups_desktopsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGroups_desktopsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DesktopVirtualization/applicationGroups/desktops",
			"2019-01-23-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-01-23-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentOutputs {
	readonly apiVersion: "2019-01-23-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentInputs {
	readonly name: string;
	readonly properties?: DesktopProperties;
}
export class hostPools extends ArmResource<hostPoolsComponentInputs> implements hostPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: hostPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/hostPools", "2019-01-23-preview", options);
	}
	public readonly apiVersion: "2019-01-23-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentOutputs {
	readonly apiVersion: "2019-01-23-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: HostPoolProperties;
	readonly tags?: TrackedResourceTags;
}
export class hostPools_sessionHosts
	extends ArmResource<hostPools_sessionHostsComponentInputs>
	implements hostPools_sessionHostsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostPools_sessionHostsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DesktopVirtualization/hostPools/sessionHosts",
			"2019-01-23-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-01-23-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts";
}
export interface hostPools_sessionHostsComponentOutputs {
	readonly apiVersion: "2019-01-23-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts";
}
export interface hostPools_sessionHostsComponentInputs {
	readonly name: string;
	readonly properties?: SessionHostProperties;
}
export class hostPools_sessionHosts_userSessions
	extends ArmResource<hostPools_sessionHosts_userSessionsComponentInputs>
	implements hostPools_sessionHosts_userSessionsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostPools_sessionHosts_userSessionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions",
			"2019-01-23-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-01-23-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentOutputs {
	readonly apiVersion: "2019-01-23-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentInputs {
	readonly name: string;
	readonly properties?: UserSessionProperties;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/workspaces", "2019-01-23-preview", options);
	}
	public readonly apiVersion: "2019-01-23-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2019-01-23-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly tags?: TrackedResourceTags;
}
export interface ApplicationGroupProperties {
	readonly applicationGroupType: "Desktop" | "RemoteApp";
	readonly description?: string;
	readonly friendlyName?: string;
	readonly hostPoolArmPath: string;
	readonly workspaceArmPath?: string;
}
export interface ApplicationProperties {
	readonly commandLineArguments?: string;
	readonly commandLineSetting: "Allow" | "DoNotAllow" | "Require";
	readonly description?: string;
	readonly filePath?: string;
	readonly friendlyName?: string;
	readonly iconContent?: any;
	readonly iconHash?: string;
	readonly iconIndex?: number;
	readonly iconPath?: string;
	readonly showInPortal?: boolean;
}
export interface DesktopProperties {
	readonly description?: string;
	readonly friendlyName?: string;
	readonly iconContent?: any;
	readonly iconHash?: string;
}
export interface HostPoolProperties {
	readonly applicationGroupReferences?: string[];
	readonly customRdpProperty?: string;
	readonly description?: string;
	readonly friendlyName?: string;
	readonly hostPoolType: "Personal" | "Shared";
	readonly loadBalancerType: "BreadthFirst" | "DepthFirst" | "Persistent";
	readonly maxSessionLimit?: number;
	readonly personalDesktopAssignmentType?: "Automatic" | "Direct";
	readonly preferredAppGroupType: "Desktop" | "None" | "RailApplications";
	readonly registrationInfo?: RegistrationInfo;
	readonly ring?: number;
	readonly ssoContext?: string;
	readonly validationEnvironment?: boolean;
	readonly vmTemplate?: string;
}
export interface RegistrationInfo {
	readonly expirationTime?: string;
	readonly resetToken?: boolean;
	readonly token?: string;
}
export interface SessionHostProperties {
	readonly agentVersion?: string;
	readonly allowNewSession?: boolean;
	readonly assignedUser?: string;
	readonly lastHeartBeat?: string;
	readonly lastUpdateTime?: string;
	readonly osVersion?: string;
	readonly resourceId?: string;
	readonly sessions?: number;
	readonly status?: "Available" | "Disconnected" | "Shutdown" | "Unavailable" | "UpgradeFailed" | "Upgrading";
	readonly statusTimestamp?: string;
	readonly sxSStackVersion?: string;
	readonly updateErrorMessage?: string;
	readonly updateState?: "Failed" | "Initial" | "Pending" | "Started" | "Succeeded";
	readonly virtualMachineId?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserSessionProperties {
	readonly activeDirectoryUserName?: string;
	readonly applicationType?: "Desktop" | "RemoteApp";
	readonly createTime?: string;
	readonly sessionState?: "Active" | "Disconnected" | "LogOff" | "Pending" | "Unknown" | "UserProfileDiskMounted";
	readonly userPrincipalName?: string;
}
export interface WorkspaceProperties {
	readonly applicationGroupReferences?: string[];
	readonly description?: string;
	readonly friendlyName?: string;
}
export default {
	applicationGroups: applicationGroups,
	"applicationGroups/applications": applicationGroups_applications,
	"applicationGroups/desktops": applicationGroups_desktops,
	hostPools: hostPools,
	"hostPools/sessionHosts": hostPools_sessionHosts,
	"hostPools/sessionHosts/userSessions": hostPools_sessionHosts_userSessions,
	workspaces: workspaces,
};
