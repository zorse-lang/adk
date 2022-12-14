import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations extends ArmResource<locationsComponentInputs> implements locationsComponentOutputs {
	constructor(entity: ADKEntity, options: locationsComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations";
}
export interface locationsComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations";
}
export interface locationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: LocationProperties;
	readonly tags?: ResourceTags;
}
export class locations_androidPolicies
	extends ArmResource<locations_androidPoliciesComponentInputs>
	implements locations_androidPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_androidPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/androidPolicies", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/androidPolicies";
}
export interface locations_androidPoliciesComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/androidPolicies";
}
export interface locations_androidPoliciesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AndroidMAMPolicyProperties;
	readonly tags?: ResourceTags;
}
export class locations_androidPolicies_apps
	extends ArmResource<locations_androidPolicies_appsComponentInputs>
	implements locations_androidPolicies_appsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_androidPolicies_appsComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/androidPolicies/apps", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/androidPolicies/apps";
}
export interface locations_androidPolicies_appsComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/androidPolicies/apps";
}
export interface locations_androidPolicies_appsComponentInputs {
	readonly name: string;
	readonly properties?: MAMPolicyAppOrGroupIdProperties;
}
export class locations_androidPolicies_groups
	extends ArmResource<locations_androidPolicies_groupsComponentInputs>
	implements locations_androidPolicies_groupsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_androidPolicies_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/androidPolicies/groups", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/androidPolicies/groups";
}
export interface locations_androidPolicies_groupsComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/androidPolicies/groups";
}
export interface locations_androidPolicies_groupsComponentInputs {
	readonly name: string;
	readonly properties?: MAMPolicyAppOrGroupIdProperties;
}
export class locations_flaggedUsers
	extends ArmResource<locations_flaggedUsersComponentInputs>
	implements locations_flaggedUsersComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_flaggedUsersComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/flaggedUsers", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/flaggedUsers";
}
export interface locations_flaggedUsersComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/flaggedUsers";
}
export interface locations_flaggedUsersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: FlaggedUserProperties;
	readonly tags?: ResourceTags;
}
export class locations_iosPolicies
	extends ArmResource<locations_iosPoliciesComponentInputs>
	implements locations_iosPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_iosPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/iosPolicies", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/iosPolicies";
}
export interface locations_iosPoliciesComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/iosPolicies";
}
export interface locations_iosPoliciesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: IOsmamPolicyProperties;
	readonly tags?: ResourceTags;
}
export class locations_iosPolicies_apps
	extends ArmResource<locations_iosPolicies_appsComponentInputs>
	implements locations_iosPolicies_appsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_iosPolicies_appsComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/iosPolicies/apps", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/iosPolicies/apps";
}
export interface locations_iosPolicies_appsComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/iosPolicies/apps";
}
export interface locations_iosPolicies_appsComponentInputs {
	readonly name: string;
	readonly properties?: MAMPolicyAppOrGroupIdProperties;
}
export class locations_iosPolicies_groups
	extends ArmResource<locations_iosPolicies_groupsComponentInputs>
	implements locations_iosPolicies_groupsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_iosPolicies_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/iosPolicies/groups", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/iosPolicies/groups";
}
export interface locations_iosPolicies_groupsComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/iosPolicies/groups";
}
export interface locations_iosPolicies_groupsComponentInputs {
	readonly name: string;
	readonly properties?: MAMPolicyAppOrGroupIdProperties;
}
export class locations_statuses
	extends ArmResource<locations_statusesComponentInputs>
	implements locations_statusesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_statusesComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/statuses", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/statuses";
}
export interface locations_statusesComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/statuses";
}
export interface locations_statusesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly nextlink?: string;
	readonly properties?: StatusesProperties;
	readonly tags?: ResourceTags;
}
export class locations_users_devices
	extends ArmResource<locations_users_devicesComponentInputs>
	implements locations_users_devicesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_users_devicesComponentInputs) {
		super(entity, options.name, "Microsoft.Intune/locations/users/devices", "2015-01-14-preview", options);
	}
	public readonly apiVersion: "2015-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Intune/locations/users/devices";
}
export interface locations_users_devicesComponentOutputs {
	readonly apiVersion: "2015-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.Intune/locations/users/devices";
}
export interface locations_users_devicesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DeviceProperties;
	readonly tags?: ResourceTags;
}
export interface AndroidMAMPolicyProperties {
	readonly accessRecheckOfflineTimeout?: string;
	readonly accessRecheckOnlineTimeout?: string;
	readonly appSharingFromLevel?: "allApps" | "none" | "policyManagedApps";
	readonly appSharingToLevel?: "allApps" | "none" | "policyManagedApps";
	readonly authentication?: "notRequired" | "required";
	readonly clipboardSharingLevel?: "allApps" | "blocked" | "policyManagedApps" | "policyManagedAppsWithPasteIn";
	readonly dataBackup?: "allow" | "block";
	readonly description?: string;
	readonly deviceCompliance?: "disable" | "enable";
	readonly fileEncryption?: "notRequired" | "required";
	readonly fileSharingSaveAs?: "allow" | "block";
	readonly friendlyName: string;
	readonly groupStatus?: "notTargeted" | "targeted";
	readonly lastModifiedTime?: string;
	readonly managedBrowser?: "notRequired" | "required";
	readonly numOfApps?: number;
	readonly offlineWipeTimeout?: string;
	readonly pin?: "notRequired" | "required";
	readonly pinNumRetry?: number;
	readonly screenCapture?: "allow" | "block";
}
export interface DeviceProperties {
	readonly deviceType: string;
	readonly friendlyName: string;
	readonly platform: string;
	readonly platformVersion: string;
	readonly userId: string;
}
export interface FlaggedUserProperties {
	readonly errorCount?: number;
	readonly friendlyName?: string;
}
export interface IOsmamPolicyProperties {
	readonly accessRecheckOfflineTimeout?: string;
	readonly accessRecheckOnlineTimeout?: string;
	readonly appSharingFromLevel?: "allApps" | "none" | "policyManagedApps";
	readonly appSharingToLevel?: "allApps" | "none" | "policyManagedApps";
	readonly authentication?: "notRequired" | "required";
	readonly clipboardSharingLevel?: "allApps" | "blocked" | "policyManagedApps" | "policyManagedAppsWithPasteIn";
	readonly dataBackup?: "allow" | "block";
	readonly description?: string;
	readonly deviceCompliance?: "disable" | "enable";
	readonly fileEncryptionLevel?:
		| "afterDeviceRestart"
		| "deviceLocked"
		| "deviceLockedExceptFilesOpen"
		| "useDeviceSettings";
	readonly fileSharingSaveAs?: "allow" | "block";
	readonly friendlyName: string;
	readonly groupStatus?: "notTargeted" | "targeted";
	readonly lastModifiedTime?: string;
	readonly managedBrowser?: "notRequired" | "required";
	readonly numOfApps?: number;
	readonly offlineWipeTimeout?: string;
	readonly pin?: "notRequired" | "required";
	readonly pinNumRetry?: number;
	readonly touchId?: "disable" | "enable";
}
export interface LocationProperties {
	readonly hostName: string;
}
export interface MAMPolicyAppOrGroupIdProperties {
	readonly url: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface StatusesProperties {
	readonly deployedPolicies?: number;
	readonly enrolledUsers?: number;
	readonly flaggedUsers?: number;
	readonly lastModifiedTime?: string;
	readonly policyAppliedUsers?: number;
	readonly status?: string;
	readonly wipeFailedApps?: number;
	readonly wipePendingApps?: number;
	readonly wipeSucceededApps?: number;
}
export default {
	locations: locations,
	"locations/androidPolicies": locations_androidPolicies,
	"locations/androidPolicies/apps": locations_androidPolicies_apps,
	"locations/androidPolicies/groups": locations_androidPolicies_groups,
	"locations/flaggedUsers": locations_flaggedUsers,
	"locations/iosPolicies": locations_iosPolicies,
	"locations/iosPolicies/apps": locations_iosPolicies_apps,
	"locations/iosPolicies/groups": locations_iosPolicies_groups,
	"locations/statuses": locations_statuses,
	"locations/users/devices": locations_users_devices,
};
