import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroupManagers
	extends GdmResource<InstanceGroupManagersComponentInputs>
	implements InstanceGroupManagersComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceGroupManagersComponentInputs) {
		super(entity, options.name, "compute.v1.InstanceGroupManagers", options);
	}
	public readonly creationTimestamp?: string;
	public readonly currentActions?: InstanceGroupManagerActionsSummary;
	public readonly id?: string;
	public readonly instanceGroup?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: InstanceGroupManagerStatus;
	public readonly zone?: string;
}
export interface InstanceGroupManagersComponentOutputs {
	readonly creationTimestamp?: string;
	readonly currentActions?: InstanceGroupManagerActionsSummary;
	readonly id?: string;
	readonly instanceGroup?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: InstanceGroupManagerStatus;
	readonly zone?: string;
}
export interface InstanceGroupManagersComponentInputs {
	readonly autoHealingPolicies?: InstanceGroupManagerAutoHealingPolicy[];
	readonly baseInstanceName?: string;
	readonly description?: string;
	readonly distributionPolicy?: DistributionPolicy;
	readonly fingerprint?: string;
	readonly instanceTemplate?: string;
	readonly listManagedInstancesResults?: string;
	readonly name: string;
	readonly namedPorts?: NamedPort[];
	readonly requestId?: string;
	readonly statefulPolicy?: StatefulPolicy;
	readonly targetPools?: string[];
	readonly targetSize?: number;
	readonly updatePolicy?: InstanceGroupManagerUpdatePolicy;
	readonly versions?: InstanceGroupManagerVersion[];
}
export interface DistributionPolicy {
	readonly targetShape?: string;
	readonly zones?: DistributionPolicyZoneConfiguration[];
}
export interface DistributionPolicyZoneConfiguration {
	readonly zone?: string;
}
export interface FixedOrPercent {
	readonly calculated?: number;
	readonly fixed?: number;
	readonly percent?: number;
}
export interface InstanceGroupManager {
	readonly autoHealingPolicies?: InstanceGroupManagerAutoHealingPolicy[];
	readonly baseInstanceName?: string;
	readonly creationTimestamp?: string;
	readonly currentActions?: InstanceGroupManagerActionsSummary;
	readonly description?: string;
	readonly distributionPolicy?: DistributionPolicy;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly instanceGroup?: string;
	readonly instanceTemplate?: string;
	readonly kind?: string;
	readonly listManagedInstancesResults?: string;
	readonly name?: string;
	readonly namedPorts?: NamedPort[];
	readonly region?: string;
	readonly selfLink?: string;
	readonly statefulPolicy?: StatefulPolicy;
	readonly status?: InstanceGroupManagerStatus;
	readonly targetPools?: string[];
	readonly targetSize?: number;
	readonly updatePolicy?: InstanceGroupManagerUpdatePolicy;
	readonly versions?: InstanceGroupManagerVersion[];
	readonly zone?: string;
}
export interface InstanceGroupManagerActionsSummary {
	readonly abandoning?: number;
	readonly creating?: number;
	readonly creatingWithoutRetries?: number;
	readonly deleting?: number;
	readonly none?: number;
	readonly recreating?: number;
	readonly refreshing?: number;
	readonly restarting?: number;
	readonly resuming?: number;
	readonly starting?: number;
	readonly stopping?: number;
	readonly suspending?: number;
	readonly verifying?: number;
}
export interface InstanceGroupManagerAutoHealingPolicy {
	readonly healthCheck?: string;
	readonly initialDelaySec?: number;
}
export interface InstanceGroupManagerStatus {
	readonly autoscaler?: string;
	readonly isStable?: boolean;
	readonly stateful?: InstanceGroupManagerStatusStateful;
	readonly versionTarget?: InstanceGroupManagerStatusVersionTarget;
}
export interface InstanceGroupManagerStatusStateful {
	readonly hasStatefulConfig?: boolean;
	readonly perInstanceConfigs?: InstanceGroupManagerStatusStatefulPerInstanceConfigs;
}
export interface InstanceGroupManagerStatusStatefulPerInstanceConfigs {
	readonly allEffective?: boolean;
}
export interface InstanceGroupManagerStatusVersionTarget {
	readonly isReached?: boolean;
}
export interface InstanceGroupManagerUpdatePolicy {
	readonly instanceRedistributionType?: string;
	readonly maxSurge?: FixedOrPercent;
	readonly maxUnavailable?: FixedOrPercent;
	readonly minimalAction?: string;
	readonly mostDisruptiveAllowedAction?: string;
	readonly replacementMethod?: string;
	readonly type?: string;
}
export interface InstanceGroupManagerVersion {
	readonly instanceTemplate?: string;
	readonly name?: string;
	readonly targetSize?: FixedOrPercent;
}
export interface NamedPort {
	readonly name?: string;
	readonly port?: number;
}
export interface StatefulPolicy {
	readonly preservedState?: StatefulPolicyPreservedState;
}
export interface StatefulPolicyPreservedState {
	readonly disks?: { [P in string]: StatefulPolicyPreservedStateDiskDevice };
}
export interface StatefulPolicyPreservedStateDiskDevice {
	readonly autoDelete?: string;
}
export default {
	InstanceGroupManagers: InstanceGroupManagers,
};
