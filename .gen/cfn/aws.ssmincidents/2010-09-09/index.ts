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
	readonly DeletionProtected?: (boolean | undefined) | undefined;
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
	readonly Actions?: (Action[] | undefined) | undefined;
	readonly ChatChannel?: (ChatChannel | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly Engagements?: (string[] | undefined) | undefined;
	readonly Integrations?: (Integration[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface RegionConfiguration {
	readonly SseKmsKeyId: string;
}
export interface ReplicationRegion {
	readonly RegionConfiguration?: (RegionConfiguration | undefined) | undefined;
	readonly RegionName?: (string | undefined) | undefined;
}
export interface Action {
	readonly SsmAutomation?: (SsmAutomation | undefined) | undefined;
}
export interface ChatChannel {
	readonly ChatbotSns?: (string[] | undefined) | undefined;
}
export interface DynamicSsmParameter {
	readonly Key: string;
	readonly Value: DynamicSsmParameterValue;
}
export interface DynamicSsmParameterValue {
	readonly Variable?: (string | undefined) | undefined;
}
export interface IncidentTemplate {
	readonly DedupeString?: (string | undefined) | undefined;
	readonly Impact: number;
	readonly IncidentTags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly NotificationTargets?: (NotificationTargetItem[] | undefined) | undefined;
	readonly Summary?: (string | undefined) | undefined;
	readonly Title: string;
}
export interface Integration {
	readonly PagerDutyConfiguration: PagerDutyConfiguration;
}
export interface NotificationTargetItem {
	readonly SnsTopicArn?: (string | undefined) | undefined;
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
	readonly DocumentVersion?: (string | undefined) | undefined;
	readonly DynamicParameters?: (DynamicSsmParameter[] | undefined) | undefined;
	readonly Parameters?: (SsmParameter[] | undefined) | undefined;
	readonly RoleArn: string;
	readonly TargetAccount?: (string | undefined) | undefined;
}
export interface SsmParameter {
	readonly Key: string;
	readonly Values: string[];
}
export default {
	ReplicationSet: ReplicationSet,
	ResponsePlan: ResponsePlan,
};
