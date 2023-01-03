import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class moveCollections
	extends ArmResource<moveCollectionsComponentInputs>
	implements moveCollectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: moveCollectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/moveCollections", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/moveCollections";
}
export interface moveCollectionsComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/moveCollections";
}
export interface moveCollectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MoveCollectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: MoveCollectionTags | undefined;
}
export class moveCollections_moveResources
	extends ArmResource<moveCollections_moveResourcesComponentInputs>
	implements moveCollections_moveResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: moveCollections_moveResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/moveCollections/moveResources", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/moveCollections/moveResources";
}
export interface moveCollections_moveResourcesComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/moveCollections/moveResources";
}
export interface moveCollections_moveResourcesComponentInputs {
	readonly name: string;
	readonly properties?: MoveResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AutomaticResolutionProperties {
	readonly moveResourceId?: string | undefined;
}
export interface AvailabilitySetResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "UserAssigned") | undefined;
}
export interface JobStatus {
	readonly jobName?: "InitialSync" | undefined;
	readonly jobProgress?: string | undefined;
}
export interface LBBackendAddressPoolResourceSettings {
	readonly name?: string | undefined;
}
export interface LBFrontendIPConfigurationResourceSettings {
	readonly name?: string | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly privateIpAllocationMethod?: string | undefined;
	readonly subnet?: SubnetReference | undefined;
	readonly zones?: string | undefined;
}
export interface LoadBalancerBackendAddressPoolReference {
	readonly name?: string | undefined;
	readonly sourceArmResourceId: string;
}
export interface LoadBalancerNatRuleReference {
	readonly name?: string | undefined;
	readonly sourceArmResourceId: string;
}
export interface LoadBalancerResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManualResolutionProperties {
	readonly targetId?: string | undefined;
}
export interface MoveCollectionProperties {
	readonly errors?: MoveCollectionPropertiesErrors | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourceRegion: string;
	readonly targetRegion: string;
}
export interface MoveCollectionPropertiesErrors {
	readonly properties?: MoveResourceErrorBody | undefined;
}
export interface MoveCollectionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MoveResourceDependency {
	readonly automaticResolution?: AutomaticResolutionProperties | undefined;
	readonly dependencyType?: ("RequiredForMove" | "RequiredForPrepare") | undefined;
	readonly id?: string | undefined;
	readonly isOptional?: string | undefined;
	readonly manualResolution?: ManualResolutionProperties | undefined;
	readonly resolutionStatus?: string | undefined;
	readonly resolutionType?: ("Automatic" | "Manual") | undefined;
}
export interface MoveResourceDependencyOverride {
	readonly id?: string | undefined;
	readonly targetId?: string | undefined;
}
export interface MoveResourceError {
	readonly properties?: MoveResourceErrorBody | undefined;
}
export interface MoveResourceErrorBody {
	readonly code?: string | undefined;
	readonly details?: MoveResourceErrorBody[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface MoveResourceProperties {
	readonly dependsOn?: MoveResourceDependency[] | undefined;
	readonly dependsOnOverrides?: MoveResourceDependencyOverride[] | undefined;
	readonly errors?: MoveResourcePropertiesErrors | undefined;
	readonly existingTargetId?: string | undefined;
	readonly isResolveRequired?: boolean | undefined;
	readonly moveStatus?: MoveResourcePropertiesMoveStatus | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceSettings?: ResourceSettings | undefined;
	readonly sourceId: string;
	readonly sourceResourceSettings?: ResourceSettings | undefined;
	readonly targetId?: string | undefined;
}
export interface MoveResourcePropertiesErrors {
	readonly properties?: MoveResourceErrorBody | undefined;
}
export interface MoveResourcePropertiesMoveStatus {
	readonly errors?: MoveResourceError | undefined;
	readonly jobStatus?: JobStatus | undefined;
	readonly moveState?:
		| (
				| "AssignmentPending"
				| "CommitFailed"
				| "CommitInProgress"
				| "CommitPending"
				| "Committed"
				| "DeleteSourcePending"
				| "DiscardFailed"
				| "DiscardInProgress"
				| "MoveFailed"
				| "MoveInProgress"
				| "MovePending"
				| "PrepareFailed"
				| "PrepareInProgress"
				| "PreparePending"
				| "ResourceMoveCompleted"
		  )
		| undefined;
}
export interface NetworkInterfaceResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NetworkSecurityGroupResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NicIpConfigurationResourceSettings {
	readonly loadBalancerBackendAddressPools?: LoadBalancerBackendAddressPoolReference[] | undefined;
	readonly loadBalancerNatRules?: LoadBalancerNatRuleReference[] | undefined;
	readonly name?: string | undefined;
	readonly primary?: boolean | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly privateIpAllocationMethod?: string | undefined;
	readonly publicIp?: PublicIpReference | undefined;
	readonly subnet?: SubnetReference | undefined;
}
export interface NsgReference {
	readonly sourceArmResourceId: string;
}
export interface NsgSecurityRule {
	readonly access?: string | undefined;
	readonly description?: string | undefined;
	readonly destinationAddressPrefix?: string | undefined;
	readonly destinationPortRange?: string | undefined;
	readonly direction?: string | undefined;
	readonly name?: string | undefined;
	readonly priority?: number | undefined;
	readonly protocol?: string | undefined;
	readonly sourceAddressPrefix?: string | undefined;
	readonly sourcePortRange?: string | undefined;
}
export interface PublicIPAddressResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PublicIpReference {
	readonly sourceArmResourceId: string;
}
export interface ResourceSettings {
	readonly targetResourceName: string;
}
export interface SqlDatabaseResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SqlElasticPoolResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SubnetReference {
	readonly name?: string | undefined;
	readonly sourceArmResourceId: string;
}
export interface SubnetResourceSettings {
	readonly addressPrefix?: string | undefined;
	readonly name?: string | undefined;
	readonly networkSecurityGroup?: NsgReference | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface VirtualMachineResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkResourceSettingsTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	moveCollections: moveCollections,
	"moveCollections/moveResources": moveCollections_moveResources,
};
