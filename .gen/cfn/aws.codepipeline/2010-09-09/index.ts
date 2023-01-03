import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CustomActionType
	extends CfnResource<CustomActionTypeComponentInputs>
	implements CustomActionTypeComponentOutputs
{
	constructor(entity: ADKEntity, options: CustomActionTypeComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodePipeline::CustomActionType", options);
	}
}
export interface CustomActionTypeComponentOutputs {}
export interface CustomActionTypeComponentInputs {
	readonly Category: string;
	readonly InputArtifactDetails: ArtifactDetails;
	readonly OutputArtifactDetails: ArtifactDetails;
	readonly Provider: string;
	readonly Version: string;
	readonly ConfigurationProperties?: (ConfigurationProperties[] | undefined) | undefined;
	readonly Settings?: (Settings | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Pipeline extends CfnResource<PipelineComponentInputs> implements PipelineComponentOutputs {
	constructor(entity: ADKEntity, options: PipelineComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodePipeline::Pipeline", options);
	}
	public readonly Version: string;
}
export interface PipelineComponentOutputs {
	readonly Version: string;
}
export interface PipelineComponentInputs {
	readonly RoleArn: string;
	readonly Stages: StageDeclaration[];
	readonly ArtifactStore?: (ArtifactStore | undefined) | undefined;
	readonly ArtifactStores?: (ArtifactStoreMap[] | undefined) | undefined;
	readonly DisableInboundStageTransitions?: (StageTransition[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RestartExecutionOnUpdate?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Webhook extends CfnResource<WebhookComponentInputs> implements WebhookComponentOutputs {
	constructor(entity: ADKEntity, options: WebhookComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodePipeline::Webhook", options);
	}
	public readonly Url: string;
}
export interface WebhookComponentOutputs {
	readonly Url: string;
}
export interface WebhookComponentInputs {
	readonly Authentication: string;
	readonly AuthenticationConfiguration: WebhookAuthConfiguration;
	readonly Filters: WebhookFilterRule[];
	readonly TargetAction: string;
	readonly TargetPipeline: string;
	readonly TargetPipelineVersion: number;
	readonly Name?: (string | undefined) | undefined;
	readonly RegisterWithThirdParty?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ArtifactDetails {
	readonly MaximumCount: number;
	readonly MinimumCount: number;
}
export interface ConfigurationProperties {
	readonly Description?: (string | undefined) | undefined;
	readonly Key: boolean;
	readonly Name: string;
	readonly Queryable?: (boolean | undefined) | undefined;
	readonly Required: boolean;
	readonly Secret: boolean;
	readonly Type?: (string | undefined) | undefined;
}
export interface Settings {
	readonly EntityUrlTemplate?: (string | undefined) | undefined;
	readonly ExecutionUrlTemplate?: (string | undefined) | undefined;
	readonly RevisionUrlTemplate?: (string | undefined) | undefined;
	readonly ThirdPartyConfigurationUrl?: (string | undefined) | undefined;
}
export interface ActionDeclaration {
	readonly ActionTypeId: ActionTypeId;
	readonly Configuration?: (any | undefined) | undefined;
	readonly InputArtifacts?: (InputArtifact[] | undefined) | undefined;
	readonly Name: string;
	readonly Namespace?: (string | undefined) | undefined;
	readonly OutputArtifacts?: (OutputArtifact[] | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly RunOrder?: (number | undefined) | undefined;
}
export interface ActionTypeId {
	readonly Category: string;
	readonly Owner: string;
	readonly Provider: string;
	readonly Version: string;
}
export interface ArtifactStore {
	readonly EncryptionKey?: (EncryptionKey | undefined) | undefined;
	readonly Location: string;
	readonly Type: string;
}
export interface ArtifactStoreMap {
	readonly ArtifactStore: ArtifactStore;
	readonly Region: string;
}
export interface BlockerDeclaration {
	readonly Name: string;
	readonly Type: string;
}
export interface EncryptionKey {
	readonly Id: string;
	readonly Type: string;
}
export interface InputArtifact {
	readonly Name: string;
}
export interface OutputArtifact {
	readonly Name: string;
}
export interface StageDeclaration {
	readonly Actions: ActionDeclaration[];
	readonly Blockers?: (BlockerDeclaration[] | undefined) | undefined;
	readonly Name: string;
}
export interface StageTransition {
	readonly Reason: string;
	readonly StageName: string;
}
export interface WebhookAuthConfiguration {
	readonly AllowedIPRange?: (string | undefined) | undefined;
	readonly SecretToken?: (string | undefined) | undefined;
}
export interface WebhookFilterRule {
	readonly JsonPath: string;
	readonly MatchEquals?: (string | undefined) | undefined;
}
export default {
	CustomActionType: CustomActionType,
	Pipeline: Pipeline,
	Webhook: Webhook,
};
