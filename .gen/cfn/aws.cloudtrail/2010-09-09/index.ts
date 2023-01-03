import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class EventDataStore extends CfnResource<EventDataStoreComponentInputs> implements EventDataStoreComponentOutputs {
	constructor(entity: ADKEntity, options: EventDataStoreComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudTrail::EventDataStore", options);
	}
	public readonly CreatedTimestamp: string;
	public readonly EventDataStoreArn: string;
	public readonly Status: string;
	public readonly UpdatedTimestamp: string;
}
export interface EventDataStoreComponentOutputs {
	readonly CreatedTimestamp: string;
	readonly EventDataStoreArn: string;
	readonly Status: string;
	readonly UpdatedTimestamp: string;
}
export interface EventDataStoreComponentInputs {
	readonly AdvancedEventSelectors?: (AdvancedEventSelector[] | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MultiRegionEnabled?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly OrganizationEnabled?: (boolean | undefined) | undefined;
	readonly RetentionPeriod?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TerminationProtectionEnabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class Trail extends CfnResource<TrailComponentInputs> implements TrailComponentOutputs {
	constructor(entity: ADKEntity, options: TrailComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudTrail::Trail", options);
	}
	public readonly Arn: string;
	public readonly SnsTopicArn: string;
}
export interface TrailComponentOutputs {
	readonly Arn: string;
	readonly SnsTopicArn: string;
}
export interface TrailComponentInputs {
	readonly IsLogging: boolean;
	readonly S3BucketName: string;
	readonly CloudWatchLogsLogGroupArn?: (string | undefined) | undefined;
	readonly CloudWatchLogsRoleArn?: (string | undefined) | undefined;
	readonly EnableLogFileValidation?: (boolean | undefined) | undefined;
	readonly EventSelectors?: (EventSelector[] | undefined) | undefined;
	readonly IncludeGlobalServiceEvents?: (boolean | undefined) | undefined;
	readonly InsightSelectors?: (InsightSelector[] | undefined) | undefined;
	readonly IsMultiRegionTrail?: (boolean | undefined) | undefined;
	readonly IsOrganizationTrail?: (boolean | undefined) | undefined;
	readonly KMSKeyId?: (string | undefined) | undefined;
	readonly S3KeyPrefix?: (string | undefined) | undefined;
	readonly SnsTopicName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TrailName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AdvancedEventSelector {
	readonly FieldSelectors: AdvancedFieldSelector[];
	readonly Name?: (string | undefined) | undefined;
}
export interface AdvancedFieldSelector {
	readonly EndsWith?: (string[] | undefined) | undefined;
	readonly Equals?: (string[] | undefined) | undefined;
	readonly Field: string;
	readonly NotEndsWith?: (string[] | undefined) | undefined;
	readonly NotEquals?: (string[] | undefined) | undefined;
	readonly NotStartsWith?: (string[] | undefined) | undefined;
	readonly StartsWith?: (string[] | undefined) | undefined;
}
export interface DataResource {
	readonly Type: string;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface EventSelector {
	readonly DataResources?: (DataResource[] | undefined) | undefined;
	readonly ExcludeManagementEventSources?: (string[] | undefined) | undefined;
	readonly IncludeManagementEvents?: (boolean | undefined) | undefined;
	readonly ReadWriteType?: (string | undefined) | undefined;
}
export interface InsightSelector {
	readonly InsightType?: (string | undefined) | undefined;
}
export default {
	EventDataStore: EventDataStore,
	Trail: Trail,
};
