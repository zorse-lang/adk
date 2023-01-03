import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DataIntegration
	extends CfnResource<DataIntegrationComponentInputs>
	implements DataIntegrationComponentOutputs
{
	constructor(entity: ADKEntity, options: DataIntegrationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppIntegrations::DataIntegration", options);
	}
	public readonly DataIntegrationArn: string;
	public readonly Id: string;
}
export interface DataIntegrationComponentOutputs {
	readonly DataIntegrationArn: string;
	readonly Id: string;
}
export interface DataIntegrationComponentInputs {
	readonly KmsKey: string;
	readonly Name: string;
	readonly ScheduleConfig: ScheduleConfig;
	readonly SourceURI: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class EventIntegration
	extends CfnResource<EventIntegrationComponentInputs>
	implements EventIntegrationComponentOutputs
{
	constructor(entity: ADKEntity, options: EventIntegrationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppIntegrations::EventIntegration", options);
	}
	public readonly Associations: Map<string, EventIntegrationAssociation>;
	public readonly EventIntegrationArn: string;
}
export interface EventIntegrationComponentOutputs {
	readonly Associations: Map<string, EventIntegrationAssociation>;
	readonly EventIntegrationArn: string;
}
export interface EventIntegrationComponentInputs {
	readonly EventBridgeBus: string;
	readonly EventFilter: EventFilter;
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ScheduleConfig {
	readonly FirstExecutionFrom: string;
	readonly Object: string;
	readonly ScheduleExpression: string;
}
export interface EventFilter {
	readonly Source: string;
}
export interface EventIntegrationAssociation {
	readonly ClientAssociationMetadata?: (Metadata[] | undefined) | undefined;
	readonly ClientId?: (string | undefined) | undefined;
	readonly EventBridgeRuleName?: (string | undefined) | undefined;
	readonly EventIntegrationAssociationArn?: (string | undefined) | undefined;
	readonly EventIntegrationAssociationId?: (string | undefined) | undefined;
}
export interface Metadata {
	readonly Key: string;
	readonly Value: string;
}
export default {
	DataIntegration: DataIntegration,
	EventIntegration: EventIntegration,
};
