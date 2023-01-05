import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class SlackChannelConfiguration
	extends CfnResource<SlackChannelConfigurationComponentInputs>
	implements SlackChannelConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: SlackChannelConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Chatbot::SlackChannelConfiguration", options);
	}
	public readonly Arn: string;
}
export interface SlackChannelConfigurationComponentOutputs {
	readonly Arn: string;
}
export interface SlackChannelConfigurationComponentInputs {
	readonly ConfigurationName: string;
	readonly IamRoleArn: string;
	readonly SlackChannelId: string;
	readonly SlackWorkspaceId: string;
	readonly GuardrailPolicies?: string[] | undefined;
	readonly LoggingLevel?: string | undefined;
	readonly SnsTopicArns?: string[] | undefined;
	readonly UserRoleRequired?: boolean | undefined;
	readonly LogicalId: string;
}
export default {
	SlackChannelConfiguration: SlackChannelConfiguration,
};
