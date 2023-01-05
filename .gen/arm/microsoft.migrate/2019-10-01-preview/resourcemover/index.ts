import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class moveCollections
	extends ArmResource<moveCollectionsComponentInputs>
	implements moveCollectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: moveCollectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/moveCollections", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/moveCollections";
}
export interface moveCollectionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Migrate/moveCollections";
}
export interface moveCollectionsComponentInputs {
	readonly etag?: string;
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: MoveCollectionProperties;
	readonly tags?: MoveCollectionTags;
}
export class moveCollections_moveResources
	extends ArmResource<moveCollections_moveResourcesComponentInputs>
	implements moveCollections_moveResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: moveCollections_moveResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/moveCollections/moveResources", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/moveCollections/moveResources";
}
export interface moveCollections_moveResourcesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Migrate/moveCollections/moveResources";
}
export interface moveCollections_moveResourcesComponentInputs {
	readonly name: string;
	readonly properties?: MoveResourceProperties;
}
export interface AutomaticResolutionProperties {
	readonly moveResourceId?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "UserAssigned";
}
export interface JobStatus {
	readonly jobName?: "InitialSync";
	readonly jobProgress?: string;
}
export interface LBBackendAddressPoolResourceSettings {
	readonly name?: string;
}
export interface LBFrontendIPConfigurationResourceSettings {
	readonly name?: string;
	readonly privateIpAddress?: string;
	readonly privateIpAllocationMethod?: string;
	readonly subnet?: SubnetReference;
	readonly zones?: string;
}
export interface LoadBalancerBackendAddressPoolReference {
	readonly name?: string;
	readonly sourceArmResourceId: string;
}
export interface LoadBalancerNatRuleReference {
	readonly name?: string;
	readonly sourceArmResourceId: string;
}
export interface ManualResolutionProperties {
	readonly targetId?: string;
}
export interface MoveCollectionProperties {
	readonly errors?: MoveCollectionPropertiesErrors;
	readonly provisioningState?: "Creating" | "Failed" | "Succeeded" | "Updating";
	readonly sourceRegion: string;
	readonly targetRegion: string;
}
export interface MoveCollectionPropertiesErrors {
	readonly properties?: MoveResourceErrorBody;
}
export interface MoveCollectionTags {
	readonly [key: string]: string;
}
export interface MoveResourceDependency {
	readonly automaticResolution?: AutomaticResolutionProperties;
	readonly dependencyType?: "RequiredForMove" | "RequiredForPrepare";
	readonly id?: string;
	readonly isOptional?: string;
	readonly manualResolution?: ManualResolutionProperties;
	readonly resolutionStatus?: string;
	readonly resolutionType?: "Automatic" | "Manual";
}
export interface MoveResourceDependencyOverride {
	readonly id?: string;
	readonly targetId?: string;
}
export interface MoveResourceError {
	readonly properties?: MoveResourceErrorBody;
}
export interface MoveResourceErrorBody {
	readonly code?: string;
	readonly details?: MoveResourceErrorBody[];
	readonly message?: string;
	readonly target?: string;
}
export interface MoveResourceProperties {
	readonly dependsOn?: MoveResourceDependency[];
	readonly dependsOnOverrides?: MoveResourceDependencyOverride[];
	readonly errors?: MoveResourcePropertiesErrors;
	readonly existingTargetId?: string;
	readonly isResolveRequired?: boolean;
	readonly moveStatus?: MoveResourcePropertiesMoveStatus;
	readonly provisioningState?: "Creating" | "Failed" | "Succeeded" | "Updating";
	readonly resourceSettings?: ResourceSettings;
	readonly sourceId: string;
	readonly sourceResourceSettings?: ResourceSettings;
	readonly targetId?: string;
}
export interface MoveResourcePropertiesErrors {
	readonly properties?: MoveResourceErrorBody;
}
export interface MoveResourcePropertiesMoveStatus {
	readonly errors?: MoveResourceError;
	readonly jobStatus?: JobStatus;
	readonly moveState?:
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
		| "ResourceMoveCompleted";
}
export interface NicIpConfigurationResourceSettings {
	readonly loadBalancerBackendAddressPools?: LoadBalancerBackendAddressPoolReference[];
	readonly loadBalancerNatRules?: LoadBalancerNatRuleReference[];
	readonly name?: string;
	readonly primary?: boolean;
	readonly privateIpAddress?: string;
	readonly privateIpAllocationMethod?: string;
	readonly publicIp?: PublicIpReference;
	readonly subnet?: SubnetReference;
}
export interface NsgReference {
	readonly sourceArmResourceId: string;
}
export interface NsgSecurityRule {
	readonly access?: string;
	readonly description?: string;
	readonly destinationAddressPrefix?: string;
	readonly destinationPortRange?: string;
	readonly direction?: string;
	readonly name?: string;
	readonly priority?: number;
	readonly protocol?: string;
	readonly sourceAddressPrefix?: string;
	readonly sourcePortRange?: string;
}
export interface PublicIpReference {
	readonly sourceArmResourceId: string;
}
export interface ResourceSettings {
	readonly targetResourceName: string;
}
export interface SubnetReference {
	readonly name?: string;
	readonly sourceArmResourceId: string;
}
export interface SubnetResourceSettings {
	readonly addressPrefix?: string;
	readonly name?: string;
	readonly networkSecurityGroup?: NsgReference;
}
export default {
	moveCollections: moveCollections,
	"moveCollections/moveResources": moveCollections_moveResources,
};
