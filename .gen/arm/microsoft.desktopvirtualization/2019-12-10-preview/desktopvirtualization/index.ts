import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGroups
	extends ArmResource<applicationGroupsComponentInputs>
	implements applicationGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/applicationGroups", "2019-12-10-preview", options);
	}
	public readonly apiVersion: "2019-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentOutputs {
	readonly apiVersion: "2019-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ApplicationGroupProperties;
	readonly tags?: TrackedResourceTags | undefined;
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
			"2019-12-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/applications";
}
export interface applicationGroups_applicationsComponentOutputs {
	readonly apiVersion: "2019-12-10-preview";
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
			"2019-12-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentOutputs {
	readonly apiVersion: "2019-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentInputs {
	readonly name: string;
	readonly properties?: DesktopProperties | undefined;
}
export class hostPools extends ArmResource<hostPoolsComponentInputs> implements hostPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: hostPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/hostPools", "2019-12-10-preview", options);
	}
	public readonly apiVersion: "2019-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentOutputs {
	readonly apiVersion: "2019-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: HostPoolProperties;
	readonly tags?: TrackedResourceTags | undefined;
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
			"2019-12-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts";
}
export interface hostPools_sessionHostsComponentOutputs {
	readonly apiVersion: "2019-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts";
}
export interface hostPools_sessionHostsComponentInputs {
	readonly name: string;
	readonly properties?: SessionHostProperties | undefined;
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
			"2019-12-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentOutputs {
	readonly apiVersion: "2019-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentInputs {
	readonly name: string;
	readonly properties?: UserSessionProperties | undefined;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/workspaces", "2019-12-10-preview", options);
	}
	public readonly apiVersion: "2019-12-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2019-12-10-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface ApplicationGroupProperties {
	readonly applicationGroupType: "Desktop" | "RemoteApp";
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostPoolArmPath: string;
	readonly workspaceArmPath?: string | undefined;
}
export interface ApplicationProperties {
	readonly commandLineArguments?: string | undefined;
	readonly commandLineSetting: "Allow" | "DoNotAllow" | "Require";
	readonly description?: string | undefined;
	readonly filePath?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly iconContent?: any | undefined;
	readonly iconHash?: string | undefined;
	readonly iconIndex?: number | undefined;
	readonly iconPath?: string | undefined;
	readonly showInPortal?: boolean | undefined;
}
export interface DesktopProperties {
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly iconContent?: any | undefined;
	readonly iconHash?: string | undefined;
}
export interface HostPoolProperties {
	readonly applicationGroupReferences?: string[] | undefined;
	readonly customRdpProperty?: string | undefined;
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostPoolType: "Personal" | "Pooled";
	readonly loadBalancerType: "BreadthFirst" | "DepthFirst" | "Persistent";
	readonly maxSessionLimit?: number | undefined;
	readonly personalDesktopAssignmentType?: ("Automatic" | "Direct") | undefined;
	readonly preferredAppGroupType: "Desktop" | "None" | "RailApplications";
	readonly registrationInfo?: RegistrationInfo | undefined;
	readonly ring?: number | undefined;
	readonly ssoContext?: string | undefined;
	readonly validationEnvironment?: boolean | undefined;
	readonly vmTemplate?: string | undefined;
}
export interface RegistrationInfo {
	readonly expirationTime?: string | undefined;
	readonly registrationTokenOperation?: ("Delete" | "None" | "Update") | undefined;
	readonly token?: string | undefined;
}
export interface SessionHostProperties {
	readonly agentVersion?: string | undefined;
	readonly allowNewSession?: boolean | undefined;
	readonly assignedUser?: string | undefined;
	readonly lastHeartBeat?: string | undefined;
	readonly lastUpdateTime?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly sessions?: number | undefined;
	readonly status?:
		| ("Available" | "Disconnected" | "Shutdown" | "Unavailable" | "UpgradeFailed" | "Upgrading")
		| undefined;
	readonly statusTimestamp?: string | undefined;
	readonly sxSStackVersion?: string | undefined;
	readonly updateErrorMessage?: string | undefined;
	readonly updateState?: ("Failed" | "Initial" | "Pending" | "Started" | "Succeeded") | undefined;
	readonly virtualMachineId?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserSessionProperties {
	readonly activeDirectoryUserName?: string | undefined;
	readonly applicationType?: ("Desktop" | "RemoteApp") | undefined;
	readonly createTime?: string | undefined;
	readonly sessionState?:
		| ("Active" | "Disconnected" | "LogOff" | "Pending" | "Unknown" | "UserProfileDiskMounted")
		| undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface WorkspaceProperties {
	readonly applicationGroupReferences?: string[] | undefined;
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
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
