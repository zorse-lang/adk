import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroupManager
	extends GdmResource<InstanceGroupManagerComponentInputs>
	implements InstanceGroupManagerComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceGroupManagerComponentInputs) {
		super(entity, options.name, "compute.alpha.instanceGroupManager", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly currentActions?: InstanceGroupManagerActionsSummary | undefined;
	public readonly id?: string | undefined;
	public readonly instanceGroup?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly status?: InstanceGroupManagerStatus | undefined;
	public readonly zone?: string | undefined;
}
export interface InstanceGroupManagerComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly currentActions?: InstanceGroupManagerActionsSummary | undefined;
	readonly id?: string | undefined;
	readonly instanceGroup?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: InstanceGroupManagerStatus | undefined;
	readonly zone?: string | undefined;
}
export interface InstanceGroupManagerComponentInputs {
	readonly allInstancesConfig?: InstanceGroupManagerAllInstancesConfig | undefined;
	readonly autoHealingPolicies?: InstanceGroupManagerAutoHealingPolicy[] | undefined;
	readonly baseInstanceName?: string | undefined;
	readonly description?: string | undefined;
	readonly distributionPolicy?: DistributionPolicy | undefined;
	readonly failoverAction?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly instanceLifecyclePolicy?: InstanceGroupManagerInstanceLifecyclePolicy | undefined;
	readonly instanceTemplate?: string | undefined;
	readonly listManagedInstancesResults?: string | undefined;
	readonly name: string;
	readonly namedPorts?: NamedPort[] | undefined;
	readonly serviceAccount?: string | undefined;
	readonly standbyPolicy?: InstanceGroupManagerStandbyPolicy | undefined;
	readonly statefulPolicy?: StatefulPolicy | undefined;
	readonly targetPools?: string[] | undefined;
	readonly targetSize?: number | undefined;
	readonly targetStoppedSize?: number | undefined;
	readonly targetSuspendedSize?: number | undefined;
	readonly updatePolicy?: InstanceGroupManagerUpdatePolicy | undefined;
	readonly versions?: InstanceGroupManagerVersion[] | undefined;
	readonly type: string;
}
export interface DistributionPolicy {
	readonly targetShape?: string | undefined;
	readonly zones?: DistributionPolicyZoneConfiguration[] | undefined;
}
export interface DistributionPolicyZoneConfiguration {
	readonly zone?: string | undefined;
}
export interface FixedOrPercent {
	readonly calculated?: number | undefined;
	readonly fixed?: number | undefined;
	readonly percent?: number | undefined;
}
export interface InstanceGroupManagerActionsSummary {
	readonly abandoning?: number | undefined;
	readonly creating?: number | undefined;
	readonly creatingAtomically?: number | undefined;
	readonly creatingWithoutRetries?: number | undefined;
	readonly deleting?: number | undefined;
	readonly none?: number | undefined;
	readonly queuing?: number | undefined;
	readonly recreating?: number | undefined;
	readonly refreshing?: number | undefined;
	readonly restarting?: number | undefined;
	readonly resuming?: number | undefined;
	readonly starting?: number | undefined;
	readonly stopping?: number | undefined;
	readonly suspending?: number | undefined;
	readonly verifying?: number | undefined;
}
export interface InstanceGroupManagerAllInstancesConfig {
	readonly properties?: InstancePropertiesPatch | undefined;
}
export interface InstanceGroupManagerAutoHealingPolicy {
	readonly autoHealingTriggers?: InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers | undefined;
	readonly healthCheck?: string | undefined;
	readonly initialDelaySec?: number | undefined;
	readonly maxUnavailable?: FixedOrPercent | undefined;
}
export interface InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers {
	readonly onHealthCheck?: string | undefined;
}
export interface InstanceGroupManagerInstanceLifecyclePolicy {
	readonly defaultActionOnFailure?: string | undefined;
	readonly forceUpdateOnRepair?: string | undefined;
	readonly metadataBasedReadinessSignal?:
		| InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal
		| undefined;
}
export interface InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal {
	readonly timeoutSec?: number | undefined;
}
export interface InstanceGroupManagerStandbyPolicy {
	readonly initialDelaySec?: number | undefined;
}
export interface InstanceGroupManagerStatus {
	readonly allInstancesConfig?: InstanceGroupManagerStatusAllInstancesConfig | undefined;
	readonly autoscaler?: string | undefined;
	readonly isStable?: boolean | undefined;
	readonly stateful?: InstanceGroupManagerStatusStateful | undefined;
	readonly versionTarget?: InstanceGroupManagerStatusVersionTarget | undefined;
}
export interface InstanceGroupManagerStatusAllInstancesConfig {
	readonly currentRevision?: string | undefined;
	readonly effective?: boolean | undefined;
}
export interface InstanceGroupManagerStatusStateful {
	readonly hasStatefulConfig?: boolean | undefined;
	readonly isStateful?: boolean | undefined;
	readonly perInstanceConfigs?: InstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined;
}
export interface InstanceGroupManagerStatusStatefulPerInstanceConfigs {
	readonly allEffective?: boolean | undefined;
}
export interface InstanceGroupManagerStatusVersionTarget {
	readonly isReached?: boolean | undefined;
}
export interface InstanceGroupManagerUpdatePolicy {
	readonly instanceRedistributionType?: string | undefined;
	readonly maxSurge?: FixedOrPercent | undefined;
	readonly maxUnavailable?: FixedOrPercent | undefined;
	readonly minimalAction?: string | undefined;
	readonly minReadySec?: number | undefined;
	readonly mostDisruptiveAllowedAction?: string | undefined;
	readonly replacementMethod?: string | undefined;
	readonly type?: string | undefined;
}
export interface InstanceGroupManagerVersion {
	readonly instanceTemplate?: string | undefined;
	readonly name?: string | undefined;
	readonly tag?: string | undefined;
	readonly targetSize?: FixedOrPercent | undefined;
}
export interface InstancePropertiesPatch {
	readonly labels?: { [P in string]: string } | undefined;
	readonly metadata?: { [P in string]: string } | undefined;
}
export interface NamedPort {
	readonly name?: string | undefined;
	readonly port?: number | undefined;
}
export interface StatefulPolicy {
	readonly preservedState?: StatefulPolicyPreservedState | undefined;
}
export interface StatefulPolicyPreservedState {
	readonly disks?: { [P in string]: StatefulPolicyPreservedStateDiskDevice } | undefined;
	readonly externalIPs?: { [P in string]: StatefulPolicyPreservedStateNetworkIp } | undefined;
	readonly internalIPs?: { [P in string]: StatefulPolicyPreservedStateNetworkIp } | undefined;
}
export interface StatefulPolicyPreservedStateDiskDevice {
	readonly autoDelete?: string | undefined;
}
export interface StatefulPolicyPreservedStateNetworkIp {
	readonly autoDelete?: string | undefined;
}
export default {
	InstanceGroupManager: InstanceGroupManager,
};
