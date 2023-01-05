import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Assistant extends CfnResource<AssistantComponentInputs> implements AssistantComponentOutputs {
	constructor(entity: ADKEntity, options: AssistantComponentInputs) {
		super(entity, options.LogicalId, "AWS::Wisdom::Assistant", options);
	}
	public readonly AssistantArn: string;
	public readonly AssistantId: string;
}
export interface AssistantComponentOutputs {
	readonly AssistantArn: string;
	readonly AssistantId: string;
}
export interface AssistantComponentInputs {
	readonly Name: string;
	readonly Type: string;
	readonly Description?: string | undefined;
	readonly ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class AssistantAssociation
	extends CfnResource<AssistantAssociationComponentInputs>
	implements AssistantAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: AssistantAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Wisdom::AssistantAssociation", options);
	}
	public readonly AssistantArn: string;
	public readonly AssistantAssociationArn: string;
	public readonly AssistantAssociationId: string;
}
export interface AssistantAssociationComponentOutputs {
	readonly AssistantArn: string;
	readonly AssistantAssociationArn: string;
	readonly AssistantAssociationId: string;
}
export interface AssistantAssociationComponentInputs {
	readonly AssistantId: string;
	readonly Association: AssociationData;
	readonly AssociationType: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class KnowledgeBase extends CfnResource<KnowledgeBaseComponentInputs> implements KnowledgeBaseComponentOutputs {
	constructor(entity: ADKEntity, options: KnowledgeBaseComponentInputs) {
		super(entity, options.LogicalId, "AWS::Wisdom::KnowledgeBase", options);
	}
	public readonly KnowledgeBaseArn: string;
	public readonly KnowledgeBaseId: string;
}
export interface KnowledgeBaseComponentOutputs {
	readonly KnowledgeBaseArn: string;
	readonly KnowledgeBaseId: string;
}
export interface KnowledgeBaseComponentInputs {
	readonly KnowledgeBaseType: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly RenderingConfiguration?: RenderingConfiguration | undefined;
	readonly ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
	readonly SourceConfiguration?: SourceConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ServerSideEncryptionConfiguration {
	readonly KmsKeyId?: string | undefined;
}
export interface AssociationData {
	readonly KnowledgeBaseId: string;
}
export interface AppIntegrationsConfiguration {
	readonly AppIntegrationArn: string;
	readonly ObjectFields: string[];
}
export interface RenderingConfiguration {
	readonly TemplateUri?: string | undefined;
}
export interface SourceConfiguration {
	readonly AppIntegrations: AppIntegrationsConfiguration;
}
export default {
	Assistant: Assistant,
	AssistantAssociation: AssistantAssociation,
	KnowledgeBase: KnowledgeBase,
};
