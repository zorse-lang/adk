import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class LifecyclePolicy
	extends CfnResource<LifecyclePolicyComponentInputs>
	implements LifecyclePolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: LifecyclePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::DLM::LifecyclePolicy", options);
	}
	public readonly Arn: string;
}
export interface LifecyclePolicyComponentOutputs {
	readonly Arn: string;
}
export interface LifecyclePolicyComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly ExecutionRoleArn?: (string | undefined) | undefined;
	readonly PolicyDetails?: (PolicyDetails | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Action {
	readonly CrossRegionCopy: CrossRegionCopyAction[];
	readonly Name: string;
}
export interface ArchiveRetainRule {
	readonly RetentionArchiveTier: RetentionArchiveTier;
}
export interface ArchiveRule {
	readonly RetainRule: ArchiveRetainRule;
}
export interface CreateRule {
	readonly CronExpression?: (string | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly IntervalUnit?: (string | undefined) | undefined;
	readonly Location?: (string | undefined) | undefined;
	readonly Times?: (string[] | undefined) | undefined;
}
export interface CrossRegionCopyAction {
	readonly EncryptionConfiguration: EncryptionConfiguration;
	readonly RetainRule?: (CrossRegionCopyRetainRule | undefined) | undefined;
	readonly Target: string;
}
export interface CrossRegionCopyDeprecateRule {
	readonly Interval: number;
	readonly IntervalUnit: string;
}
export interface CrossRegionCopyRetainRule {
	readonly Interval: number;
	readonly IntervalUnit: string;
}
export interface CrossRegionCopyRule {
	readonly CmkArn?: (string | undefined) | undefined;
	readonly CopyTags?: (boolean | undefined) | undefined;
	readonly DeprecateRule?: (CrossRegionCopyDeprecateRule | undefined) | undefined;
	readonly Encrypted: boolean;
	readonly RetainRule?: (CrossRegionCopyRetainRule | undefined) | undefined;
	readonly Target?: (string | undefined) | undefined;
	readonly TargetRegion?: (string | undefined) | undefined;
}
export interface DeprecateRule {
	readonly Count?: (number | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly IntervalUnit?: (string | undefined) | undefined;
}
export interface EncryptionConfiguration {
	readonly CmkArn?: (string | undefined) | undefined;
	readonly Encrypted: boolean;
}
export interface EventParameters {
	readonly DescriptionRegex?: (string | undefined) | undefined;
	readonly EventType: string;
	readonly SnapshotOwner: string[];
}
export interface EventSource {
	readonly Parameters?: (EventParameters | undefined) | undefined;
	readonly Type: string;
}
export interface FastRestoreRule {
	readonly AvailabilityZones?: (string[] | undefined) | undefined;
	readonly Count?: (number | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly IntervalUnit?: (string | undefined) | undefined;
}
export interface Parameters {
	readonly ExcludeBootVolume?: (boolean | undefined) | undefined;
	readonly ExcludeDataVolumeTags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly NoReboot?: (boolean | undefined) | undefined;
}
export interface PolicyDetails {
	readonly Actions?: (Action[] | undefined) | undefined;
	readonly EventSource?: (EventSource | undefined) | undefined;
	readonly Parameters?: (Parameters | undefined) | undefined;
	readonly PolicyType?: (string | undefined) | undefined;
	readonly ResourceLocations?: (string[] | undefined) | undefined;
	readonly ResourceTypes?: (string[] | undefined) | undefined;
	readonly Schedules?: (Schedule[] | undefined) | undefined;
	readonly TargetTags?: ({ key: string; value: string }[] | undefined) | undefined;
}
export interface RetainRule {
	readonly Count?: (number | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly IntervalUnit?: (string | undefined) | undefined;
}
export interface RetentionArchiveTier {
	readonly Count?: (number | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly IntervalUnit?: (string | undefined) | undefined;
}
export interface Schedule {
	readonly ArchiveRule?: (ArchiveRule | undefined) | undefined;
	readonly CopyTags?: (boolean | undefined) | undefined;
	readonly CreateRule?: (CreateRule | undefined) | undefined;
	readonly CrossRegionCopyRules?: (CrossRegionCopyRule[] | undefined) | undefined;
	readonly DeprecateRule?: (DeprecateRule | undefined) | undefined;
	readonly FastRestoreRule?: (FastRestoreRule | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RetainRule?: (RetainRule | undefined) | undefined;
	readonly ShareRules?: (ShareRule[] | undefined) | undefined;
	readonly TagsToAdd?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VariableTags?: ({ key: string; value: string }[] | undefined) | undefined;
}
export interface ShareRule {
	readonly TargetAccounts?: (string[] | undefined) | undefined;
	readonly UnshareInterval?: (number | undefined) | undefined;
	readonly UnshareIntervalUnit?: (string | undefined) | undefined;
}
export default {
	LifecyclePolicy: LifecyclePolicy,
};
