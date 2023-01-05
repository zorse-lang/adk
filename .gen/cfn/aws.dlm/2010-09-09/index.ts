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
	readonly Description?: string | undefined;
	readonly ExecutionRoleArn?: string | undefined;
	readonly PolicyDetails?: PolicyDetails | undefined;
	readonly State?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CronExpression?: string | undefined;
	readonly Interval?: number | undefined;
	readonly IntervalUnit?: string | undefined;
	readonly Location?: string | undefined;
	readonly Times?: string[] | undefined;
}
export interface CrossRegionCopyAction {
	readonly EncryptionConfiguration: EncryptionConfiguration;
	readonly RetainRule?: CrossRegionCopyRetainRule | undefined;
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
	readonly CmkArn?: string | undefined;
	readonly CopyTags?: boolean | undefined;
	readonly DeprecateRule?: CrossRegionCopyDeprecateRule | undefined;
	readonly Encrypted: boolean;
	readonly RetainRule?: CrossRegionCopyRetainRule | undefined;
	readonly Target?: string | undefined;
	readonly TargetRegion?: string | undefined;
}
export interface DeprecateRule {
	readonly Count?: number | undefined;
	readonly Interval?: number | undefined;
	readonly IntervalUnit?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly CmkArn?: string | undefined;
	readonly Encrypted: boolean;
}
export interface EventParameters {
	readonly DescriptionRegex?: string | undefined;
	readonly EventType: string;
	readonly SnapshotOwner: string[];
}
export interface EventSource {
	readonly Parameters?: EventParameters | undefined;
	readonly Type: string;
}
export interface FastRestoreRule {
	readonly AvailabilityZones?: string[] | undefined;
	readonly Count?: number | undefined;
	readonly Interval?: number | undefined;
	readonly IntervalUnit?: string | undefined;
}
export interface Parameters {
	readonly ExcludeBootVolume?: boolean | undefined;
	readonly ExcludeDataVolumeTags?: { key: string; value: string }[] | undefined;
	readonly NoReboot?: boolean | undefined;
}
export interface PolicyDetails {
	readonly Actions?: Action[] | undefined;
	readonly EventSource?: EventSource | undefined;
	readonly Parameters?: Parameters | undefined;
	readonly PolicyType?: string | undefined;
	readonly ResourceLocations?: string[] | undefined;
	readonly ResourceTypes?: string[] | undefined;
	readonly Schedules?: Schedule[] | undefined;
	readonly TargetTags?: { key: string; value: string }[] | undefined;
}
export interface RetainRule {
	readonly Count?: number | undefined;
	readonly Interval?: number | undefined;
	readonly IntervalUnit?: string | undefined;
}
export interface RetentionArchiveTier {
	readonly Count?: number | undefined;
	readonly Interval?: number | undefined;
	readonly IntervalUnit?: string | undefined;
}
export interface Schedule {
	readonly ArchiveRule?: ArchiveRule | undefined;
	readonly CopyTags?: boolean | undefined;
	readonly CreateRule?: CreateRule | undefined;
	readonly CrossRegionCopyRules?: CrossRegionCopyRule[] | undefined;
	readonly DeprecateRule?: DeprecateRule | undefined;
	readonly FastRestoreRule?: FastRestoreRule | undefined;
	readonly Name?: string | undefined;
	readonly RetainRule?: RetainRule | undefined;
	readonly ShareRules?: ShareRule[] | undefined;
	readonly TagsToAdd?: { key: string; value: string }[] | undefined;
	readonly VariableTags?: { key: string; value: string }[] | undefined;
}
export interface ShareRule {
	readonly TargetAccounts?: string[] | undefined;
	readonly UnshareInterval?: number | undefined;
	readonly UnshareIntervalUnit?: string | undefined;
}
export default {
	LifecyclePolicy: LifecyclePolicy,
};
