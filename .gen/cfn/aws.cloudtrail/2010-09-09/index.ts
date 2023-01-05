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
	readonly AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly MultiRegionEnabled?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly OrganizationEnabled?: boolean | undefined;
	readonly RetentionPeriod?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TerminationProtectionEnabled?: boolean | undefined;
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
	readonly CloudWatchLogsLogGroupArn?: string | undefined;
	readonly CloudWatchLogsRoleArn?: string | undefined;
	readonly EnableLogFileValidation?: boolean | undefined;
	readonly EventSelectors?: EventSelector[] | undefined;
	readonly IncludeGlobalServiceEvents?: boolean | undefined;
	readonly InsightSelectors?: InsightSelector[] | undefined;
	readonly IsMultiRegionTrail?: boolean | undefined;
	readonly IsOrganizationTrail?: boolean | undefined;
	readonly KMSKeyId?: string | undefined;
	readonly S3KeyPrefix?: string | undefined;
	readonly SnsTopicName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TrailName?: string | undefined;
	readonly LogicalId: string;
}
export interface AdvancedEventSelector {
	readonly FieldSelectors: AdvancedFieldSelector[];
	readonly Name?: string | undefined;
}
export interface AdvancedFieldSelector {
	readonly EndsWith?: string[] | undefined;
	readonly Equals?: string[] | undefined;
	readonly Field: string;
	readonly NotEndsWith?: string[] | undefined;
	readonly NotEquals?: string[] | undefined;
	readonly NotStartsWith?: string[] | undefined;
	readonly StartsWith?: string[] | undefined;
}
export interface DataResource {
	readonly Type: string;
	readonly Values?: string[] | undefined;
}
export interface EventSelector {
	readonly DataResources?: DataResource[] | undefined;
	readonly ExcludeManagementEventSources?: string[] | undefined;
	readonly IncludeManagementEvents?: boolean | undefined;
	readonly ReadWriteType?: string | undefined;
}
export interface InsightSelector {
	readonly InsightType?: string | undefined;
}
export default {
	EventDataStore: EventDataStore,
	Trail: Trail,
};
