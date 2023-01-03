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
	readonly DeadLetterQueueUrl?: (string | undefined) | undefined;
	readonly DefaultEncryptionKey?: (string | undefined) | undefined;
	readonly DefaultExpirationDays?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly FlowDefinition?: (FlowDefinition | undefined) | undefined;
	readonly ObjectTypeName?: (string | undefined) | undefined;
	readonly ObjectTypeNames?: (ObjectTypeMapping[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Uri?: (string | undefined) | undefined;
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
	readonly AllowProfileCreation?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EncryptionKey?: (string | undefined) | undefined;
	readonly ExpirationDays?: (number | undefined) | undefined;
	readonly Fields?: (FieldMap[] | undefined) | undefined;
	readonly Keys?: (KeyMap[] | undefined) | undefined;
	readonly ObjectTypeName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TemplateId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ConnectorOperator {
	readonly Marketo?: (string | undefined) | undefined;
	readonly S3?: (string | undefined) | undefined;
	readonly Salesforce?: (string | undefined) | undefined;
	readonly ServiceNow?: (string | undefined) | undefined;
	readonly Zendesk?: (string | undefined) | undefined;
}
export interface FlowDefinition {
	readonly Description?: (string | undefined) | undefined;
	readonly FlowName: string;
	readonly KmsArn: string;
	readonly SourceFlowConfig: SourceFlowConfig;
	readonly Tasks: Task[];
	readonly TriggerConfig: TriggerConfig;
}
export interface IncrementalPullConfig {
	readonly DatetimeTypeFieldName?: (string | undefined) | undefined;
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
	readonly BucketPrefix?: (string | undefined) | undefined;
}
export interface SalesforceSourceProperties {
	readonly EnableDynamicFieldUpdate?: (boolean | undefined) | undefined;
	readonly IncludeDeletedRecords?: (boolean | undefined) | undefined;
	readonly Object: string;
}
export interface ScheduledTriggerProperties {
	readonly DataPullMode?: (string | undefined) | undefined;
	readonly FirstExecutionFrom?: (number | undefined) | undefined;
	readonly ScheduleEndTime?: (number | undefined) | undefined;
	readonly ScheduleExpression: string;
	readonly ScheduleOffset?: (number | undefined) | undefined;
	readonly ScheduleStartTime?: (number | undefined) | undefined;
	readonly Timezone?: (string | undefined) | undefined;
}
export interface ServiceNowSourceProperties {
	readonly Object: string;
}
export interface SourceConnectorProperties {
	readonly Marketo?: (MarketoSourceProperties | undefined) | undefined;
	readonly S3?: (S3SourceProperties | undefined) | undefined;
	readonly Salesforce?: (SalesforceSourceProperties | undefined) | undefined;
	readonly ServiceNow?: (ServiceNowSourceProperties | undefined) | undefined;
	readonly Zendesk?: (ZendeskSourceProperties | undefined) | undefined;
}
export interface SourceFlowConfig {
	readonly ConnectorProfileName?: (string | undefined) | undefined;
	readonly ConnectorType: string;
	readonly IncrementalPullConfig?: (IncrementalPullConfig | undefined) | undefined;
	readonly SourceConnectorProperties: SourceConnectorProperties;
}
export interface Task {
	readonly ConnectorOperator?: (ConnectorOperator | undefined) | undefined;
	readonly DestinationField?: (string | undefined) | undefined;
	readonly SourceFields: string[];
	readonly TaskProperties?: (TaskPropertiesMap[] | undefined) | undefined;
	readonly TaskType: string;
}
export interface TaskPropertiesMap {
	readonly OperatorPropertyKey: string;
	readonly Property: string;
}
export interface TriggerConfig {
	readonly TriggerProperties?: (TriggerProperties | undefined) | undefined;
	readonly TriggerType: string;
}
export interface TriggerProperties {
	readonly Scheduled?: (ScheduledTriggerProperties | undefined) | undefined;
}
export interface ZendeskSourceProperties {
	readonly Object: string;
}
export interface FieldMap {
	readonly Name?: (string | undefined) | undefined;
	readonly ObjectTypeField?: (ObjectTypeField | undefined) | undefined;
}
export interface KeyMap {
	readonly Name?: (string | undefined) | undefined;
	readonly ObjectTypeKeyList?: (ObjectTypeKey[] | undefined) | undefined;
}
export interface ObjectTypeField {
	readonly ContentType?: (string | undefined) | undefined;
	readonly Source?: (string | undefined) | undefined;
	readonly Target?: (string | undefined) | undefined;
}
export interface ObjectTypeKey {
	readonly FieldNames?: (string[] | undefined) | undefined;
	readonly StandardIdentifiers?: (string[] | undefined) | undefined;
}
export default {
	Domain: Domain,
	Integration: Integration,
	ObjectType: ObjectType,
};
