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
	readonly ConfigurationProperties?: ConfigurationProperties[] | undefined;
	readonly Settings?: Settings | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ArtifactStore?: ArtifactStore | undefined;
	readonly ArtifactStores?: ArtifactStoreMap[] | undefined;
	readonly DisableInboundStageTransitions?: StageTransition[] | undefined;
	readonly Name?: string | undefined;
	readonly RestartExecutionOnUpdate?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Name?: string | undefined;
	readonly RegisterWithThirdParty?: boolean | undefined;
	readonly LogicalId: string;
}
export interface ArtifactDetails {
	readonly MaximumCount: number;
	readonly MinimumCount: number;
}
export interface ConfigurationProperties {
	readonly Description?: string | undefined;
	readonly Key: boolean;
	readonly Name: string;
	readonly Queryable?: boolean | undefined;
	readonly Required: boolean;
	readonly Secret: boolean;
	readonly Type?: string | undefined;
}
export interface Settings {
	readonly EntityUrlTemplate?: string | undefined;
	readonly ExecutionUrlTemplate?: string | undefined;
	readonly RevisionUrlTemplate?: string | undefined;
	readonly ThirdPartyConfigurationUrl?: string | undefined;
}
export interface ActionDeclaration {
	readonly ActionTypeId: ActionTypeId;
	readonly Configuration?: any | undefined;
	readonly InputArtifacts?: InputArtifact[] | undefined;
	readonly Name: string;
	readonly Namespace?: string | undefined;
	readonly OutputArtifacts?: OutputArtifact[] | undefined;
	readonly Region?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly RunOrder?: number | undefined;
}
export interface ActionTypeId {
	readonly Category: string;
	readonly Owner: string;
	readonly Provider: string;
	readonly Version: string;
}
export interface ArtifactStore {
	readonly EncryptionKey?: EncryptionKey | undefined;
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
	readonly Blockers?: BlockerDeclaration[] | undefined;
	readonly Name: string;
}
export interface StageTransition {
	readonly Reason: string;
	readonly StageName: string;
}
export interface WebhookAuthConfiguration {
	readonly AllowedIPRange?: string | undefined;
	readonly SecretToken?: string | undefined;
}
export interface WebhookFilterRule {
	readonly JsonPath: string;
	readonly MatchEquals?: string | undefined;
}
export default {
	CustomActionType: CustomActionType,
	Pipeline: Pipeline,
	Webhook: Webhook,
};
