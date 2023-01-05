import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ReplicationSet extends CfnResource<ReplicationSetComponentInputs> implements ReplicationSetComponentOutputs {
	constructor(entity: ADKEntity, options: ReplicationSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSMIncidents::ReplicationSet", options);
	}
	public readonly Arn: string;
}
export interface ReplicationSetComponentOutputs {
	readonly Arn: string;
}
export interface ReplicationSetComponentInputs {
	readonly Regions: ReplicationRegion[];
	readonly DeletionProtected?: boolean | undefined;
	readonly LogicalId: string;
}
export class ResponsePlan extends CfnResource<ResponsePlanComponentInputs> implements ResponsePlanComponentOutputs {
	constructor(entity: ADKEntity, options: ResponsePlanComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSMIncidents::ResponsePlan", options);
	}
	public readonly Arn: string;
}
export interface ResponsePlanComponentOutputs {
	readonly Arn: string;
}
export interface ResponsePlanComponentInputs {
	readonly IncidentTemplate: IncidentTemplate;
	readonly Name: string;
	readonly Actions?: Action[] | undefined;
	readonly ChatChannel?: ChatChannel | undefined;
	readonly DisplayName?: string | undefined;
	readonly Engagements?: string[] | undefined;
	readonly Integrations?: Integration[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface RegionConfiguration {
	readonly SseKmsKeyId: string;
}
export interface ReplicationRegion {
	readonly RegionConfiguration?: RegionConfiguration | undefined;
	readonly RegionName?: string | undefined;
}
export interface Action {
	readonly SsmAutomation?: SsmAutomation | undefined;
}
export interface ChatChannel {
	readonly ChatbotSns?: string[] | undefined;
}
export interface DynamicSsmParameter {
	readonly Key: string;
	readonly Value: DynamicSsmParameterValue;
}
export interface DynamicSsmParameterValue {
	readonly Variable?: string | undefined;
}
export interface IncidentTemplate {
	readonly DedupeString?: string | undefined;
	readonly Impact: number;
	readonly IncidentTags?: { key: string; value: string }[] | undefined;
	readonly NotificationTargets?: NotificationTargetItem[] | undefined;
	readonly Summary?: string | undefined;
	readonly Title: string;
}
export interface Integration {
	readonly PagerDutyConfiguration: PagerDutyConfiguration;
}
export interface NotificationTargetItem {
	readonly SnsTopicArn?: string | undefined;
}
export interface PagerDutyConfiguration {
	readonly Name: string;
	readonly PagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
	readonly SecretId: string;
}
export interface PagerDutyIncidentConfiguration {
	readonly ServiceId: string;
}
export interface SsmAutomation {
	readonly DocumentName: string;
	readonly DocumentVersion?: string | undefined;
	readonly DynamicParameters?: DynamicSsmParameter[] | undefined;
	readonly Parameters?: SsmParameter[] | undefined;
	readonly RoleArn: string;
	readonly TargetAccount?: string | undefined;
}
export interface SsmParameter {
	readonly Key: string;
	readonly Values: string[];
}
export default {
	ReplicationSet: ReplicationSet,
	ResponsePlan: ResponsePlan,
};
