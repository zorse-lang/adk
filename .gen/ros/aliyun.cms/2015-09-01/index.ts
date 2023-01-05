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
	readonly EnableInstallAgent?: boolean | undefined;
	readonly EnableSubscribeEvent?: boolean | undefined;
	readonly MatchExpress?: MatchExpress[] | undefined;
	readonly MatchExpressFilterRelation?: string | undefined;
	readonly TemplateIdList?: string[] | undefined;
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
	readonly Description?: string | undefined;
	readonly EventType?: string | undefined;
	readonly GroupId?: string | undefined;
	readonly State?: string | undefined;
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
	readonly ContactParameters?: ContactParameters[] | undefined;
	readonly FcParameters?: FcParameters[] | undefined;
	readonly MnsParameters?: MnsParameters[] | undefined;
	readonly SlsParameters?: SlsParameters[] | undefined;
	readonly WebhookParameters?: WebhookParameters[] | undefined;
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
	readonly Dimensions?: string | undefined;
	readonly EffectiveInterval?: string | undefined;
	readonly EmailSubject?: string | undefined;
	readonly Interval?: number | undefined;
	readonly NoEffectiveInterval?: string | undefined;
	readonly Period?: number | undefined;
	readonly SilenceTime?: number | undefined;
	readonly Webhook?: string | undefined;
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
	readonly AlertTemplates?: AlertTemplates[] | undefined;
	readonly Description?: string | undefined;
	readonly RestVersion?: number | undefined;
	readonly TemplateId?: number | undefined;
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
	readonly ContactGroups?: string | undefined;
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
	readonly ProcessName?: string | undefined;
	readonly ProcessUser?: string | undefined;
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
	readonly CompositeExpression?: CompositeExpression | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly EffectiveInterval?: string | undefined;
	readonly EmailSubject?: string | undefined;
	readonly Interval?: number | undefined;
	readonly Labels?: Labels[] | undefined;
	readonly NoDataPolicy?: string | undefined;
	readonly NoEffectiveInterval?: string | undefined;
	readonly Period?: number | undefined;
	readonly Prometheus?: Prometheus | undefined;
	readonly RuleId?: any | string;
	readonly RuleName?: any | string;
	readonly SilenceTime?: number | undefined;
	readonly Webhook?: string | undefined;
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
	readonly AlertIds?: string[] | undefined;
	readonly Interval?: number | undefined;
	readonly IspCities?: IspCities[] | undefined;
	readonly OptionsJson?: string | undefined;
	readonly LogicalId: string;
}
export interface Channels {
	readonly Mail?: string | undefined;
	readonly AliIM?: string | undefined;
	readonly DingWebHook?: string | undefined;
	readonly SMS?: string | undefined;
}
export interface MatchExpress {
	readonly TagValue: string;
	readonly TagValueMatchFunction: string;
}
export interface EventPattern {
	readonly NameList?: any[] | undefined;
	readonly LevelList?: any[] | undefined;
	readonly StatusList?: any[] | undefined;
	readonly EventTypeList?: any[] | undefined;
	readonly Product?: string | undefined;
}
export interface ContactParameters {
	readonly ContactGroupName?: string | undefined;
	readonly Level?: string | undefined;
	readonly Id?: string | undefined;
}
export interface FcParameters {
	readonly FunctionName?: string | undefined;
	readonly ServiceName?: string | undefined;
	readonly Region?: string | undefined;
	readonly Id?: string | undefined;
}
export interface MnsParameters {
	readonly Region?: string | undefined;
	readonly Id?: string | undefined;
	readonly Queue?: string | undefined;
}
export interface SlsParameters {
	readonly Project?: string | undefined;
	readonly LogStore?: string | undefined;
	readonly Region?: string | undefined;
	readonly Id?: string | undefined;
}
export interface WebhookParameters {
	readonly Id?: string | undefined;
	readonly Method?: string | undefined;
	readonly Protocol?: string | undefined;
	readonly Url?: string | undefined;
}
export interface Critical {
	readonly ComparisonOperator: string;
	readonly Times: number;
	readonly Statistics: string;
	readonly Threshold: number;
}
export interface Escalations {
	readonly Critical?: Critical | undefined;
	readonly Info?: Info | undefined;
	readonly Warn?: Warn | undefined;
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
	readonly Level?: string | undefined;
	readonly Id: string;
	readonly Arn: string;
}
export interface AlertTemplates {
	readonly MetricName: string;
	readonly Category: string;
	readonly Escalations?: Escalations | undefined;
	readonly Period?: number | undefined;
	readonly Webhook?: string | undefined;
	readonly Namespace: string;
	readonly RuleName: string;
	readonly Selector?: string | undefined;
}
export interface Instances {
	readonly InstanceName: string;
	readonly Category: string;
	readonly InstanceId: string;
	readonly RegionId: string;
}
export interface Annotations {
	readonly Value?: string | undefined;
	readonly Key?: string | undefined;
}
export interface CompositeExpression {
	readonly Times: number;
	readonly ExpressionRaw?: string | undefined;
	readonly ExpressionListJoin?: string | undefined;
	readonly Level: string;
	readonly ExpressionList?: ExpressionList[] | undefined;
}
export interface ExpressionList {
	readonly MetricName: string;
	readonly ComparisonOperator: string;
	readonly Period: number;
	readonly Statistics: string;
	readonly Threshold: string;
}
export interface Labels {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface Prometheus {
	readonly Annotations?: Annotations[] | undefined;
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
