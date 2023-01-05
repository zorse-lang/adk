import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::CustomerProfiles::Domain", options);
	}
	public readonly CreatedAt: string;
	public readonly LastUpdatedAt: string;
}
export interface DomainComponentOutputs {
	readonly CreatedAt: string;
	readonly LastUpdatedAt: string;
}
export interface DomainComponentInputs {
	readonly DomainName: string;
	readonly DeadLetterQueueUrl?: string | undefined;
	readonly DefaultEncryptionKey?: string | undefined;
	readonly DefaultExpirationDays?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Integration extends CfnResource<IntegrationComponentInputs> implements IntegrationComponentOutputs {
	constructor(entity: ADKEntity, options: IntegrationComponentInputs) {
		super(entity, options.LogicalId, "AWS::CustomerProfiles::Integration", options);
	}
	public readonly CreatedAt: string;
	public readonly LastUpdatedAt: string;
}
export interface IntegrationComponentOutputs {
	readonly CreatedAt: string;
	readonly LastUpdatedAt: string;
}
export interface IntegrationComponentInputs {
	readonly DomainName: string;
	readonly FlowDefinition?: FlowDefinition | undefined;
	readonly ObjectTypeName?: string | undefined;
	readonly ObjectTypeNames?: ObjectTypeMapping[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Uri?: string | undefined;
	readonly LogicalId: string;
}
export class ObjectType extends CfnResource<ObjectTypeComponentInputs> implements ObjectTypeComponentOutputs {
	constructor(entity: ADKEntity, options: ObjectTypeComponentInputs) {
		super(entity, options.LogicalId, "AWS::CustomerProfiles::ObjectType", options);
	}
	public readonly CreatedAt: string;
	public readonly LastUpdatedAt: string;
}
export interface ObjectTypeComponentOutputs {
	readonly CreatedAt: string;
	readonly LastUpdatedAt: string;
}
export interface ObjectTypeComponentInputs {
	readonly DomainName: string;
	readonly AllowProfileCreation?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly EncryptionKey?: string | undefined;
	readonly ExpirationDays?: number | undefined;
	readonly Fields?: FieldMap[] | undefined;
	readonly Keys?: KeyMap[] | undefined;
	readonly ObjectTypeName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TemplateId?: string | undefined;
	readonly LogicalId: string;
}
export interface ConnectorOperator {
	readonly Marketo?: string | undefined;
	readonly S3?: string | undefined;
	readonly Salesforce?: string | undefined;
	readonly ServiceNow?: string | undefined;
	readonly Zendesk?: string | undefined;
}
export interface FlowDefinition {
	readonly Description?: string | undefined;
	readonly FlowName: string;
	readonly KmsArn: string;
	readonly SourceFlowConfig: SourceFlowConfig;
	readonly Tasks: Task[];
	readonly TriggerConfig: TriggerConfig;
}
export interface IncrementalPullConfig {
	readonly DatetimeTypeFieldName?: string | undefined;
}
export interface MarketoSourceProperties {
	readonly Object: string;
}
export interface ObjectTypeMapping {
	readonly Key: string;
	readonly Value: string;
}
export interface S3SourceProperties {
	readonly BucketName: string;
	readonly BucketPrefix?: string | undefined;
}
export interface SalesforceSourceProperties {
	readonly EnableDynamicFieldUpdate?: boolean | undefined;
	readonly IncludeDeletedRecords?: boolean | undefined;
	readonly Object: string;
}
export interface ScheduledTriggerProperties {
	readonly DataPullMode?: string | undefined;
	readonly FirstExecutionFrom?: number | undefined;
	readonly ScheduleEndTime?: number | undefined;
	readonly ScheduleExpression: string;
	readonly ScheduleOffset?: number | undefined;
	readonly ScheduleStartTime?: number | undefined;
	readonly Timezone?: string | undefined;
}
export interface ServiceNowSourceProperties {
	readonly Object: string;
}
export interface SourceConnectorProperties {
	readonly Marketo?: MarketoSourceProperties | undefined;
	readonly S3?: S3SourceProperties | undefined;
	readonly Salesforce?: SalesforceSourceProperties | undefined;
	readonly ServiceNow?: ServiceNowSourceProperties | undefined;
	readonly Zendesk?: ZendeskSourceProperties | undefined;
}
export interface SourceFlowConfig {
	readonly ConnectorProfileName?: string | undefined;
	readonly ConnectorType: string;
	readonly IncrementalPullConfig?: IncrementalPullConfig | undefined;
	readonly SourceConnectorProperties: SourceConnectorProperties;
}
export interface Task {
	readonly ConnectorOperator?: ConnectorOperator | undefined;
	readonly DestinationField?: string | undefined;
	readonly SourceFields: string[];
	readonly TaskProperties?: TaskPropertiesMap[] | undefined;
	readonly TaskType: string;
}
export interface TaskPropertiesMap {
	readonly OperatorPropertyKey: string;
	readonly Property: string;
}
export interface TriggerConfig {
	readonly TriggerProperties?: TriggerProperties | undefined;
	readonly TriggerType: string;
}
export interface TriggerProperties {
	readonly Scheduled?: ScheduledTriggerProperties | undefined;
}
export interface ZendeskSourceProperties {
	readonly Object: string;
}
export interface FieldMap {
	readonly Name?: string | undefined;
	readonly ObjectTypeField?: ObjectTypeField | undefined;
}
export interface KeyMap {
	readonly Name?: string | undefined;
	readonly ObjectTypeKeyList?: ObjectTypeKey[] | undefined;
}
export interface ObjectTypeField {
	readonly ContentType?: string | undefined;
	readonly Source?: string | undefined;
	readonly Target?: string | undefined;
}
export interface ObjectTypeKey {
	readonly FieldNames?: string[] | undefined;
	readonly StandardIdentifiers?: string[] | undefined;
}
export default {
	Domain: Domain,
	Integration: Integration,
	ObjectType: ObjectType,
};
