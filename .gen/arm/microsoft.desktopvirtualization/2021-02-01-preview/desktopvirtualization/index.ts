import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGroups
	extends ArmResource<applicationGroupsComponentInputs>
	implements applicationGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/applicationGroups", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan | undefined;
	readonly properties: ApplicationGroupProperties;
	readonly sku?: ResourceModelWithAllowedPropertySetSku | undefined;
	readonly tags?: ResourceModelWithAllowedPropertySetTags | undefined;
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/applications";
}
export interface applicationGroups_applicationsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentInputs {
	readonly name: string;
	readonly properties?: DesktopProperties | undefined;
}
export class hostPools extends ArmResource<hostPoolsComponentInputs> implements hostPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: hostPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/hostPools", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan | undefined;
	readonly properties: HostPoolProperties;
	readonly sku?: ResourceModelWithAllowedPropertySetSku | undefined;
	readonly tags?: ResourceModelWithAllowedPropertySetTags | undefined;
}
export class hostPools_msixPackages
	extends ArmResource<hostPools_msixPackagesComponentInputs>
	implements hostPools_msixPackagesComponentOutputs
{
	constructor(entity: ADKEntity, options: hostPools_msixPackagesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DesktopVirtualization/hostPools/msixPackages",
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/msixPackages";
}
export interface hostPools_msixPackagesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools/msixPackages";
}
export interface hostPools_msixPackagesComponentInputs {
	readonly name: string;
	readonly properties: MsixPackageProperties;
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts";
}
export interface hostPools_sessionHostsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentInputs {
	readonly name: string;
	readonly properties?: UserSessionProperties | undefined;
}
export class scalingPlans extends ArmResource<scalingPlansComponentInputs> implements scalingPlansComponentOutputs {
	constructor(entity: ADKEntity, options: scalingPlansComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/scalingPlans", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/scalingPlans";
}
export interface scalingPlansComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/scalingPlans";
}
export interface scalingPlansComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan | undefined;
	readonly properties?: ScalingPlanProperties | undefined;
	readonly sku?: ResourceModelWithAllowedPropertySetSku | undefined;
	readonly tags?: ResourceModelWithAllowedPropertySetTags | undefined;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/workspaces", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan | undefined;
	readonly properties?: WorkspaceProperties | undefined;
	readonly sku?: ResourceModelWithAllowedPropertySetSku | undefined;
	readonly tags?: ResourceModelWithAllowedPropertySetTags | undefined;
}
export interface ApplicationGroupProperties {
	readonly applicationGroupType: "Desktop" | "RemoteApp";
	readonly cloudPcResource?: boolean | undefined;
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostPoolArmPath: string;
	readonly migrationRequest?: MigrationRequestProperties | undefined;
	readonly objectId?: string | undefined;
	readonly workspaceArmPath?: string | undefined;
}
export interface ApplicationProperties {
	readonly applicationType?: ("InBuilt" | "MsixApplication") | undefined;
	readonly commandLineArguments?: string | undefined;
	readonly commandLineSetting: "Allow" | "DoNotAllow" | "Require";
	readonly description?: string | undefined;
	readonly filePath?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly iconContent?: any | undefined;
	readonly iconHash?: string | undefined;
	readonly iconIndex?: number | undefined;
	readonly iconPath?: string | undefined;
	readonly msixPackageApplicationId?: string | undefined;
	readonly msixPackageFamilyName?: string | undefined;
	readonly objectId?: string | undefined;
	readonly showInPortal?: boolean | undefined;
}
export interface DesktopProperties {
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly iconContent?: any | undefined;
	readonly iconHash?: string | undefined;
	readonly objectId?: string | undefined;
}
export interface HostPoolProperties {
	readonly applicationGroupReferences?: string[] | undefined;
	readonly cloudPcResource?: boolean | undefined;
	readonly customRdpProperty?: string | undefined;
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostPoolType: "BYODesktop" | "Personal" | "Pooled";
	readonly loadBalancerType: "BreadthFirst" | "DepthFirst" | "Persistent";
	readonly maxSessionLimit?: number | undefined;
	readonly migrationRequest?: MigrationRequestProperties | undefined;
	readonly objectId?: string | undefined;
	readonly personalDesktopAssignmentType?: ("Automatic" | "Direct") | undefined;
	readonly preferredAppGroupType: "Desktop" | "None" | "RailApplications";
	readonly registrationInfo?: RegistrationInfo | undefined;
	readonly ring?: number | undefined;
	readonly ssoadfsAuthority?: string | undefined;
	readonly ssoClientId?: string | undefined;
	readonly ssoClientSecretKeyVaultPath?: string | undefined;
	readonly ssoSecretType?: ("Certificate" | "CertificateInKeyVault" | "SharedKey" | "SharedKeyInKeyVault") | undefined;
	readonly startVMOnConnect?: boolean | undefined;
	readonly validationEnvironment?: boolean | undefined;
	readonly vmTemplate?: string | undefined;
}
export interface MigrationRequestProperties {
	readonly migrationPath?: string | undefined;
	readonly operation?: ("Complete" | "Hide" | "Revoke" | "Start" | "Unhide") | undefined;
}
export interface MsixPackageApplications {
	readonly appId?: string | undefined;
	readonly appUserModelID?: string | undefined;
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly iconImageName?: string | undefined;
	readonly rawIcon?: any | undefined;
	readonly rawPng?: any | undefined;
}
export interface MsixPackageDependencies {
	readonly dependencyName?: string | undefined;
	readonly minVersion?: string | undefined;
	readonly publisher?: string | undefined;
}
export interface MsixPackageProperties {
	readonly displayName?: string | undefined;
	readonly imagePath?: string | undefined;
	readonly isActive?: boolean | undefined;
	readonly isRegularRegistration?: boolean | undefined;
	readonly lastUpdated?: string | undefined;
	readonly packageApplications?: MsixPackageApplications[] | undefined;
	readonly packageDependencies?: MsixPackageDependencies[] | undefined;
	readonly packageFamilyName?: string | undefined;
	readonly packageName?: string | undefined;
	readonly packageRelativePath?: string | undefined;
	readonly version?: string | undefined;
}
export interface RegistrationInfo {
	readonly expirationTime?: string | undefined;
	readonly registrationTokenOperation?: ("Delete" | "None" | "Update") | undefined;
	readonly token?: string | undefined;
}
export interface ResourceModelWithAllowedPropertySetIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface ResourceModelWithAllowedPropertySetPlan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string | undefined;
	readonly publisher: string;
	readonly version?: string | undefined;
}
export interface ResourceModelWithAllowedPropertySetSku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium") | undefined;
}
export interface ResourceModelWithAllowedPropertySetTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ScalingHostPoolReference {
	readonly hostPoolArmPath?: string | undefined;
	readonly scalingPlanEnabled?: boolean | undefined;
}
export interface ScalingPlanProperties {
	readonly description?: string | undefined;
	readonly exclusionTag?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostPoolReferences?: ScalingHostPoolReference[] | undefined;
	readonly hostPoolType?: ("BYODesktop" | "Personal" | "Pooled") | undefined;
	readonly objectId?: string | undefined;
	readonly ring?: number | undefined;
	readonly schedules?: ScalingSchedule[] | undefined;
	readonly timeZone?: string | undefined;
}
export interface ScalingSchedule {
	readonly daysOfWeek?:
		| ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[])
		| undefined;
	readonly name?: string | undefined;
	readonly offPeakLoadBalancingAlgorithm?: ("BreadthFirst" | "DepthFirst") | undefined;
	readonly offPeakStartTime?: string | undefined;
	readonly peakLoadBalancingAlgorithm?: ("BreadthFirst" | "DepthFirst") | undefined;
	readonly peakStartTime?: string | undefined;
	readonly rampDownCapacityThresholdPct?: number | undefined;
	readonly rampDownForceLogoffUsers?: boolean | undefined;
	readonly rampDownLoadBalancingAlgorithm?: ("BreadthFirst" | "DepthFirst") | undefined;
	readonly rampDownMinimumHostsPct?: number | undefined;
	readonly rampDownNotificationMessage?: string | undefined;
	readonly rampDownStartTime?: string | undefined;
	readonly rampDownStopHostsWhen?: ("ZeroActiveSessions" | "ZeroSessions") | undefined;
	readonly rampDownWaitTimeMinutes?: number | undefined;
	readonly rampUpCapacityThresholdPct?: number | undefined;
	readonly rampUpLoadBalancingAlgorithm?: ("BreadthFirst" | "DepthFirst") | undefined;
	readonly rampUpMinimumHostsPct?: number | undefined;
	readonly rampUpStartTime?: string | undefined;
}
export interface SessionHostHealthCheckFailureDetails {
	readonly errorCode?: number | undefined;
	readonly lastHealthCheckDateTime?: string | undefined;
	readonly message?: string | undefined;
}
export interface SessionHostHealthCheckReport {
	readonly additionalFailureDetails?: SessionHostHealthCheckFailureDetails | undefined;
	readonly healthCheckName?:
		| (
				| "AppAttachHealthCheck"
				| "DomainJoinedCheck"
				| "DomainReachable"
				| "DomainTrustCheck"
				| "FSLogixHealthCheck"
				| "MetaDataServiceCheck"
				| "MonitoringAgentCheck"
				| "SupportedEncryptionCheck"
				| "SxSStackListenerCheck"
				| "UrlsAccessibleCheck"
				| "WebRTCRedirectorCheck"
		  )
		| undefined;
	readonly healthCheckResult?:
		| ("HealthCheckFailed" | "HealthCheckSucceeded" | "SessionHostShutdown" | "Unknown")
		| undefined;
}
export interface SessionHostProperties {
	readonly agentVersion?: string | undefined;
	readonly allowNewSession?: boolean | undefined;
	readonly assignedUser?: string | undefined;
	readonly lastHeartBeat?: string | undefined;
	readonly lastUpdateTime?: string | undefined;
	readonly objectId?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly sessionHostHealthCheckResults?: SessionHostHealthCheckReport[] | undefined;
	readonly sessions?: number | undefined;
	readonly status?:
		| (
				| "Available"
				| "Disconnected"
				| "DomainTrustRelationshipLost"
				| "FSLogixNotHealthy"
				| "NeedsAssistance"
				| "NoHeartbeat"
				| "NotJoinedToDomain"
				| "Shutdown"
				| "SxSStackListenerNotReady"
				| "Unavailable"
				| "UpgradeFailed"
				| "Upgrading"
		  )
		| undefined;
	readonly statusTimestamp?: string | undefined;
	readonly sxSStackVersion?: string | undefined;
	readonly updateErrorMessage?: string | undefined;
	readonly updateState?: ("Failed" | "Initial" | "Pending" | "Started" | "Succeeded") | undefined;
	readonly virtualMachineId?: string | undefined;
}
export interface UserSessionProperties {
	readonly activeDirectoryUserName?: string | undefined;
	readonly applicationType?: ("Desktop" | "RemoteApp") | undefined;
	readonly createTime?: string | undefined;
	readonly objectId?: string | undefined;
	readonly sessionState?:
		| ("Active" | "Disconnected" | "LogOff" | "Pending" | "Unknown" | "UserProfileDiskMounted")
		| undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface WorkspaceProperties {
	readonly applicationGroupReferences?: string[] | undefined;
	readonly cloudPcResource?: boolean | undefined;
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly objectId?: string | undefined;
}
export default {
	applicationGroups: applicationGroups,
	"applicationGroups/applications": applicationGroups_applications,
	"applicationGroups/desktops": applicationGroups_desktops,
	hostPools: hostPools,
	"hostPools/msixPackages": hostPools_msixPackages,
	"hostPools/sessionHosts": hostPools_sessionHosts,
	"hostPools/sessionHosts/userSessions": hostPools_sessionHosts_userSessions,
	scalingPlans: scalingPlans,
	workspaces: workspaces,
};
