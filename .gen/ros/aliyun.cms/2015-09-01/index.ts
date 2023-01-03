import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Contact extends RosResource<ContactComponentInputs> implements ContactComponentOutputs {
	constructor(entity: ADKEntity, options: ContactComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::Contact", options);
	}
}
export interface ContactComponentOutputs {}
export interface ContactComponentInputs {
	readonly Channels: Channels;
	readonly ContactName: any | string;
	readonly Describe: string;
	readonly LogicalId: string;
}
export class ContactGroup extends RosResource<ContactGroupComponentInputs> implements ContactGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ContactGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::ContactGroup", options);
	}
}
export interface ContactGroupComponentOutputs {}
export interface ContactGroupComponentInputs {
	readonly ContactGroupName: any | string;
	readonly ContactNames: string[];
	readonly Describe: string;
	readonly LogicalId: string;
}
export class DynamicTagGroup
	extends RosResource<DynamicTagGroupComponentInputs>
	implements DynamicTagGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DynamicTagGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::DynamicTagGroup", options);
	}
	public readonly DynamicTagRuleId: any;
}
export interface DynamicTagGroupComponentOutputs {
	readonly DynamicTagRuleId: any;
}
export interface DynamicTagGroupComponentInputs {
	readonly ContactGroupList: string[];
	readonly TagKey: any | string;
	readonly EnableInstallAgent?: (boolean | undefined) | undefined;
	readonly EnableSubscribeEvent?: (boolean | undefined) | undefined;
	readonly MatchExpress?: (MatchExpress[] | undefined) | undefined;
	readonly MatchExpressFilterRelation?: (string | undefined) | undefined;
	readonly TemplateIdList?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class EventRule extends RosResource<EventRuleComponentInputs> implements EventRuleComponentOutputs {
	constructor(entity: ADKEntity, options: EventRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::EventRule", options);
	}
	public readonly Data: any;
}
export interface EventRuleComponentOutputs {
	readonly Data: any;
}
export interface EventRuleComponentInputs {
	readonly EventPattern: EventPattern[];
	readonly RuleName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EventType?: (string | undefined) | undefined;
	readonly GroupId?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class EventRuleTargets
	extends RosResource<EventRuleTargetsComponentInputs>
	implements EventRuleTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: EventRuleTargetsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::EventRuleTargets", options);
	}
}
export interface EventRuleTargetsComponentOutputs {}
export interface EventRuleTargetsComponentInputs {
	readonly RuleName: string;
	readonly ContactParameters?: (ContactParameters[] | undefined) | undefined;
	readonly FcParameters?: (FcParameters[] | undefined) | undefined;
	readonly MnsParameters?: (MnsParameters[] | undefined) | undefined;
	readonly SlsParameters?: (SlsParameters[] | undefined) | undefined;
	readonly WebhookParameters?: (WebhookParameters[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class GroupMetricRule
	extends RosResource<GroupMetricRuleComponentInputs>
	implements GroupMetricRuleComponentOutputs
{
	constructor(entity: ADKEntity, options: GroupMetricRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::GroupMetricRule", options);
	}
}
export interface GroupMetricRuleComponentOutputs {}
export interface GroupMetricRuleComponentInputs {
	readonly Category: string;
	readonly Escalations: Escalations;
	readonly GroupId: string;
	readonly MetricName: string;
	readonly Namespace: string;
	readonly RuleId: any | string;
	readonly RuleName: string;
	readonly Dimensions?: (string | undefined) | undefined;
	readonly EffectiveInterval?: (string | undefined) | undefined;
	readonly EmailSubject?: (string | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly NoEffectiveInterval?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly SilenceTime?: (number | undefined) | undefined;
	readonly Webhook?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class MetricRuleTargets
	extends RosResource<MetricRuleTargetsComponentInputs>
	implements MetricRuleTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: MetricRuleTargetsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::MetricRuleTargets", options);
	}
	public readonly Arns: any;
	public readonly Ids: any;
}
export interface MetricRuleTargetsComponentOutputs {
	readonly Arns: any;
	readonly Ids: any;
}
export interface MetricRuleTargetsComponentInputs {
	readonly RuleId: string;
	readonly Targets: Targets[];
	readonly LogicalId: string;
}
export class MetricRuleTemplate
	extends RosResource<MetricRuleTemplateComponentInputs>
	implements MetricRuleTemplateComponentOutputs
{
	constructor(entity: ADKEntity, options: MetricRuleTemplateComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::MetricRuleTemplate", options);
	}
	public readonly Id: any;
}
export interface MetricRuleTemplateComponentOutputs {
	readonly Id: any;
}
export interface MetricRuleTemplateComponentInputs {
	readonly Name: string;
	readonly AlertTemplates?: (AlertTemplates[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly RestVersion?: (number | undefined) | undefined;
	readonly TemplateId?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class MonitorGroup extends RosResource<MonitorGroupComponentInputs> implements MonitorGroupComponentOutputs {
	constructor(entity: ADKEntity, options: MonitorGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::MonitorGroup", options);
	}
	public readonly GroupId: any;
}
export interface MonitorGroupComponentOutputs {
	readonly GroupId: any;
}
export interface MonitorGroupComponentInputs {
	readonly GroupName: string;
	readonly ContactGroups?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class MonitorGroupInstances
	extends RosResource<MonitorGroupInstancesComponentInputs>
	implements MonitorGroupInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: MonitorGroupInstancesComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::MonitorGroupInstances", options);
	}
}
export interface MonitorGroupInstancesComponentOutputs {}
export interface MonitorGroupInstancesComponentInputs {
	readonly GroupId: any | string;
	readonly Instances: Instances[];
	readonly LogicalId: string;
}
export class MonitoringAgentProcess
	extends RosResource<MonitoringAgentProcessComponentInputs>
	implements MonitoringAgentProcessComponentOutputs
{
	constructor(entity: ADKEntity, options: MonitoringAgentProcessComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::MonitoringAgentProcess", options);
	}
	public readonly Id: any;
}
export interface MonitoringAgentProcessComponentOutputs {
	readonly Id: any;
}
export interface MonitoringAgentProcessComponentInputs {
	readonly InstanceId: string;
	readonly ProcessName?: (string | undefined) | undefined;
	readonly ProcessUser?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ResourceMetricRule
	extends RosResource<ResourceMetricRuleComponentInputs>
	implements ResourceMetricRuleComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceMetricRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::ResourceMetricRule", options);
	}
}
export interface ResourceMetricRuleComponentOutputs {}
export interface ResourceMetricRuleComponentInputs {
	readonly ContactGroups: string[];
	readonly Escalations: Escalations;
	readonly MetricName: string;
	readonly Namespace: string;
	readonly Resources: any;
	readonly CompositeExpression?: (CompositeExpression | undefined) | undefined;
	readonly DeletionForce?: (boolean | undefined) | undefined;
	readonly EffectiveInterval?: (string | undefined) | undefined;
	readonly EmailSubject?: (string | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly Labels?: (Labels[] | undefined) | undefined;
	readonly NoDataPolicy?: (string | undefined) | undefined;
	readonly NoEffectiveInterval?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly Prometheus?: (Prometheus | undefined) | undefined;
	readonly RuleId?: (any | string) | undefined;
	readonly RuleName?: (any | string) | undefined;
	readonly SilenceTime?: (number | undefined) | undefined;
	readonly Webhook?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SiteMonitor extends RosResource<SiteMonitorComponentInputs> implements SiteMonitorComponentOutputs {
	constructor(entity: ADKEntity, options: SiteMonitorComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CMS::SiteMonitor", options);
	}
	public readonly TaskId: any;
}
export interface SiteMonitorComponentOutputs {
	readonly TaskId: any;
}
export interface SiteMonitorComponentInputs {
	readonly Address: string;
	readonly TaskName: string;
	readonly TaskType: string;
	readonly AlertIds?: (string[] | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly IspCities?: (IspCities[] | undefined) | undefined;
	readonly OptionsJson?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Channels {
	readonly Mail?: (string | undefined) | undefined;
	readonly AliIM?: (string | undefined) | undefined;
	readonly DingWebHook?: (string | undefined) | undefined;
	readonly SMS?: (string | undefined) | undefined;
}
export interface MatchExpress {
	readonly TagValue: string;
	readonly TagValueMatchFunction: string;
}
export interface EventPattern {
	readonly NameList?: (any[] | undefined) | undefined;
	readonly LevelList?: (any[] | undefined) | undefined;
	readonly StatusList?: (any[] | undefined) | undefined;
	readonly EventTypeList?: (any[] | undefined) | undefined;
	readonly Product?: (string | undefined) | undefined;
}
export interface ContactParameters {
	readonly ContactGroupName?: (string | undefined) | undefined;
	readonly Level?: (string | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
}
export interface FcParameters {
	readonly FunctionName?: (string | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
}
export interface MnsParameters {
	readonly Region?: (string | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly Queue?: (string | undefined) | undefined;
}
export interface SlsParameters {
	readonly Project?: (string | undefined) | undefined;
	readonly LogStore?: (string | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
}
export interface WebhookParameters {
	readonly Id?: (string | undefined) | undefined;
	readonly Method?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface Critical {
	readonly ComparisonOperator: string;
	readonly Times: number;
	readonly Statistics: string;
	readonly Threshold: number;
}
export interface Escalations {
	readonly Critical?: (Critical | undefined) | undefined;
	readonly Info?: (Info | undefined) | undefined;
	readonly Warn?: (Warn | undefined) | undefined;
}
export interface Info {
	readonly ComparisonOperator: string;
	readonly Times: number;
	readonly Statistics: string;
	readonly Threshold: number;
}
export interface Warn {
	readonly ComparisonOperator: string;
	readonly Times: number;
	readonly Statistics: string;
	readonly Threshold: number;
}
export interface Targets {
	readonly Level?: (string | undefined) | undefined;
	readonly Id: string;
	readonly Arn: string;
}
export interface AlertTemplates {
	readonly MetricName: string;
	readonly Category: string;
	readonly Escalations?: (Escalations | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly Webhook?: (string | undefined) | undefined;
	readonly Namespace: string;
	readonly RuleName: string;
	readonly Selector?: (string | undefined) | undefined;
}
export interface Instances {
	readonly InstanceName: string;
	readonly Category: string;
	readonly InstanceId: string;
	readonly RegionId: string;
}
export interface Annotations {
	readonly Value?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface CompositeExpression {
	readonly Times: number;
	readonly ExpressionRaw?: (string | undefined) | undefined;
	readonly ExpressionListJoin?: (string | undefined) | undefined;
	readonly Level: string;
	readonly ExpressionList?: (ExpressionList[] | undefined) | undefined;
}
export interface ExpressionList {
	readonly MetricName: string;
	readonly ComparisonOperator: string;
	readonly Period: number;
	readonly Statistics: string;
	readonly Threshold: string;
}
export interface Labels {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface Prometheus {
	readonly Annotations?: (Annotations[] | undefined) | undefined;
	readonly PromQL: string;
	readonly Times: number;
	readonly Level: string;
}
export interface IspCities {
	readonly Isp: string;
	readonly City: string;
}
export default {
	Contact: Contact,
	ContactGroup: ContactGroup,
	DynamicTagGroup: DynamicTagGroup,
	EventRule: EventRule,
	EventRuleTargets: EventRuleTargets,
	GroupMetricRule: GroupMetricRule,
	MetricRuleTargets: MetricRuleTargets,
	MetricRuleTemplate: MetricRuleTemplate,
	MonitorGroup: MonitorGroup,
	MonitorGroupInstances: MonitorGroupInstances,
	MonitoringAgentProcess: MonitoringAgentProcess,
	ResourceMetricRule: ResourceMetricRule,
	SiteMonitor: SiteMonitor,
};
