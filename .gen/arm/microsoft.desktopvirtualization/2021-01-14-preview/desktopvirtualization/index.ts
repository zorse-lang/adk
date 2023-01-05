import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGroups
	extends ArmResource<applicationGroupsComponentInputs>
	implements applicationGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/applicationGroups", "2021-01-14-preview", options);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups";
}
export interface applicationGroupsComponentInputs {
	readonly etag?: string;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity;
	readonly kind?: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan;
	readonly properties: ApplicationGroupProperties;
	readonly sku?: ResourceModelWithAllowedPropertySetSku;
	readonly tags?: ResourceModelWithAllowedPropertySetTags;
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
			"2021-01-14-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/applications";
}
export interface applicationGroups_applicationsComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
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
			"2021-01-14-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/applicationGroups/desktops";
}
export interface applicationGroups_desktopsComponentInputs {
	readonly name: string;
	readonly properties?: DesktopProperties;
}
export class hostPools extends ArmResource<hostPoolsComponentInputs> implements hostPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: hostPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/hostPools", "2021-01-14-preview", options);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools";
}
export interface hostPoolsComponentInputs {
	readonly etag?: string;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity;
	readonly kind?: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan;
	readonly properties: HostPoolProperties;
	readonly sku?: ResourceModelWithAllowedPropertySetSku;
	readonly tags?: ResourceModelWithAllowedPropertySetTags;
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
			"2021-01-14-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/msixPackages";
}
export interface hostPools_msixPackagesComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
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
			"2021-01-14-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts";
}
export interface hostPools_sessionHostsComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
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
			"2021-01-14-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions";
}
export interface hostPools_sessionHosts_userSessionsComponentInputs {
	readonly name: string;
	readonly properties?: UserSessionProperties;
}
export class scalingPlans extends ArmResource<scalingPlansComponentInputs> implements scalingPlansComponentOutputs {
	constructor(entity: ADKEntity, options: scalingPlansComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/scalingPlans", "2021-01-14-preview", options);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/scalingPlans";
}
export interface scalingPlansComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/scalingPlans";
}
export interface scalingPlansComponentInputs {
	readonly etag?: string;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity;
	readonly kind?: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan;
	readonly properties?: ScalingPlanProperties;
	readonly sku?: ResourceModelWithAllowedPropertySetSku;
	readonly tags?: ResourceModelWithAllowedPropertySetTags;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.DesktopVirtualization/workspaces", "2021-01-14-preview", options);
	}
	public readonly apiVersion: "2021-01-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-01-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DesktopVirtualization/workspaces";
}
export interface workspacesComponentInputs {
	readonly etag?: string;
	readonly identity?: ResourceModelWithAllowedPropertySetIdentity;
	readonly kind?: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly plan?: ResourceModelWithAllowedPropertySetPlan;
	readonly properties?: WorkspaceProperties;
	readonly sku?: ResourceModelWithAllowedPropertySetSku;
	readonly tags?: ResourceModelWithAllowedPropertySetTags;
}
export interface ApplicationGroupProperties {
	readonly applicationGroupType: "Desktop" | "RemoteApp";
	readonly cloudPcResource?: boolean;
	readonly description?: string;
	readonly friendlyName?: string;
	readonly hostPoolArmPath: string;
	readonly migrationRequest?: MigrationRequestProperties;
	readonly objectId?: string;
	readonly workspaceArmPath?: string;
}
export interface ApplicationProperties {
	readonly applicationType?: "InBuilt" | "MsixApplication";
	readonly commandLineArguments?: string;
	readonly commandLineSetting: "Allow" | "DoNotAllow" | "Require";
	readonly description?: string;
	readonly filePath?: string;
	readonly friendlyName?: string;
	readonly iconContent?: any;
	readonly iconHash?: string;
	readonly iconIndex?: number;
	readonly iconPath?: string;
	readonly msixPackageApplicationId?: string;
	readonly msixPackageFamilyName?: string;
	readonly objectId?: string;
	readonly showInPortal?: boolean;
}
export interface DesktopProperties {
	readonly description?: string;
	readonly friendlyName?: string;
	readonly iconContent?: any;
	readonly iconHash?: string;
	readonly objectId?: string;
}
export interface HostPoolProperties {
	readonly applicationGroupReferences?: string[];
	readonly cloudPcResource?: boolean;
	readonly customRdpProperty?: string;
	readonly description?: string;
	readonly friendlyName?: string;
	readonly hostPoolType: "BYODesktop" | "Personal" | "Pooled";
	readonly loadBalancerType: "BreadthFirst" | "DepthFirst" | "Persistent";
	readonly maxSessionLimit?: number;
	readonly migrationRequest?: MigrationRequestProperties;
	readonly objectId?: string;
	readonly personalDesktopAssignmentType?: "Automatic" | "Direct";
	readonly preferredAppGroupType: "Desktop" | "None" | "RailApplications";
	readonly registrationInfo?: RegistrationInfo;
	readonly ring?: number;
	readonly ssoadfsAuthority?: string;
	readonly ssoClientId?: string;
	readonly ssoClientSecretKeyVaultPath?: string;
	readonly ssoSecretType?: "Certificate" | "CertificateInKeyVault" | "SharedKey" | "SharedKeyInKeyVault";
	readonly startVMOnConnect?: boolean;
	readonly validationEnvironment?: boolean;
	readonly vmTemplate?: string;
}
export interface MigrationRequestProperties {
	readonly migrationPath?: string;
	readonly operation?: "Complete" | "Hide" | "Revoke" | "Start" | "Unhide";
}
export interface MsixPackageApplications {
	readonly appId?: string;
	readonly appUserModelID?: string;
	readonly description?: string;
	readonly friendlyName?: string;
	readonly iconImageName?: string;
	readonly rawIcon?: any;
	readonly rawPng?: any;
}
export interface MsixPackageDependencies {
	readonly dependencyName?: string;
	readonly minVersion?: string;
	readonly publisher?: string;
}
export interface MsixPackageProperties {
	readonly displayName?: string;
	readonly imagePath?: string;
	readonly isActive?: boolean;
	readonly isRegularRegistration?: boolean;
	readonly lastUpdated?: string;
	readonly packageApplications?: MsixPackageApplications[];
	readonly packageDependencies?: MsixPackageDependencies[];
	readonly packageFamilyName?: string;
	readonly packageName?: string;
	readonly packageRelativePath?: string;
	readonly version?: string;
}
export interface RegistrationInfo {
	readonly expirationTime?: string;
	readonly registrationTokenOperation?: "Delete" | "None" | "Update";
	readonly token?: string;
}
export interface ResourceModelWithAllowedPropertySetIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface ResourceModelWithAllowedPropertySetPlan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string;
	readonly publisher: string;
	readonly version?: string;
}
export interface ResourceModelWithAllowedPropertySetSku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium";
}
export interface ResourceModelWithAllowedPropertySetTags {
	readonly [key: string]: string;
}
export interface ScalingHostPoolReference {
	readonly hostPoolArmPath?: string;
	readonly scalingPlanEnabled?: boolean;
}
export interface ScalingPlanProperties {
	readonly description?: string;
	readonly exclusionTag?: string;
	readonly friendlyName?: string;
	readonly hostPoolReferences?: ScalingHostPoolReference[];
	readonly hostPoolType?: "BYODesktop" | "Personal" | "Pooled";
	readonly objectId?: string;
	readonly ring?: number;
	readonly schedules?: ScalingSchedule[];
	readonly timeZone?: string;
}
export interface ScalingSchedule {
	readonly daysOfWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[];
	readonly name?: string;
	readonly offPeakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
	readonly offPeakStartTime?: string;
	readonly peakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
	readonly peakStartTime?: string;
	readonly rampDownCapacityThresholdPct?: number;
	readonly rampDownForceLogoffUsers?: boolean;
	readonly rampDownLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
	readonly rampDownMinimumHostsPct?: number;
	readonly rampDownNotificationMessage?: string;
	readonly rampDownStartTime?: string;
	readonly rampDownStopHostsWhen?: "ZeroActiveSessions" | "ZeroSessions";
	readonly rampDownWaitTimeMinutes?: number;
	readonly rampUpCapacityThresholdPct?: number;
	readonly rampUpLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
	readonly rampUpMinimumHostsPct?: number;
	readonly rampUpStartTime?: string;
}
export interface SessionHostHealthCheckFailureDetails {
	readonly errorCode?: number;
	readonly lastHealthCheckDateTime?: string;
	readonly message?: string;
}
export interface SessionHostHealthCheckReport {
	readonly additionalFailureDetails?: SessionHostHealthCheckFailureDetails;
	readonly healthCheckName?:
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
		| "WebRTCRedirectorCheck";
	readonly healthCheckResult?: "HealthCheckFailed" | "HealthCheckSucceeded" | "SessionHostShutdown" | "Unknown";
}
export interface SessionHostProperties {
	readonly agentVersion?: string;
	readonly allowNewSession?: boolean;
	readonly assignedUser?: string;
	readonly lastHeartBeat?: string;
	readonly lastUpdateTime?: string;
	readonly objectId?: string;
	readonly osVersion?: string;
	readonly resourceId?: string;
	readonly sessionHostHealthCheckResults?: SessionHostHealthCheckReport[];
	readonly sessions?: number;
	readonly status?:
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
		| "Upgrading";
	readonly statusTimestamp?: string;
	readonly sxSStackVersion?: string;
	readonly updateErrorMessage?: string;
	readonly updateState?: "Failed" | "Initial" | "Pending" | "Started" | "Succeeded";
	readonly virtualMachineId?: string;
}
export interface UserSessionProperties {
	readonly activeDirectoryUserName?: string;
	readonly applicationType?: "Desktop" | "RemoteApp";
	readonly createTime?: string;
	readonly objectId?: string;
	readonly sessionState?: "Active" | "Disconnected" | "LogOff" | "Pending" | "Unknown" | "UserProfileDiskMounted";
	readonly userPrincipalName?: string;
}
export interface WorkspaceProperties {
	readonly applicationGroupReferences?: string[];
	readonly cloudPcResource?: boolean;
	readonly description?: string;
	readonly friendlyName?: string;
	readonly objectId?: string;
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
