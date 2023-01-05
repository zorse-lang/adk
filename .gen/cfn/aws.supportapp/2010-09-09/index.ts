import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccountAlias extends CfnResource<AccountAliasComponentInputs> implements AccountAliasComponentOutputs {
	constructor(entity: ADKEntity, options: AccountAliasComponentInputs) {
		super(entity, options.LogicalId, "AWS::SupportApp::AccountAlias", options);
	}
	public readonly AccountAliasResourceId: string;
}
export interface AccountAliasComponentOutputs {
	readonly AccountAliasResourceId: string;
}
export interface AccountAliasComponentInputs {
	readonly AccountAlias: string;
	readonly LogicalId: string;
}
export class SlackChannelConfiguration
	extends CfnResource<SlackChannelConfigurationComponentInputs>
	implements SlackChannelConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: SlackChannelConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::SupportApp::SlackChannelConfiguration", options);
	}
}
export interface SlackChannelConfigurationComponentOutputs {}
export interface SlackChannelConfigurationComponentInputs {
	readonly ChannelId: string;
	readonly ChannelRoleArn: string;
	readonly NotifyOnCaseSeverity: string;
	readonly TeamId: string;
	readonly ChannelName?: string | undefined;
	readonly NotifyOnAddCorrespondenceToCase?: boolean | undefined;
	readonly NotifyOnCreateOrReopenCase?: boolean | undefined;
	readonly NotifyOnResolveCase?: boolean | undefined;
	readonly LogicalId: string;
}
export class SlackWorkspaceConfiguration
	extends CfnResource<SlackWorkspaceConfigurationComponentInputs>
	implements SlackWorkspaceConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: SlackWorkspaceConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::SupportApp::SlackWorkspaceConfiguration", options);
	}
}
export interface SlackWorkspaceConfigurationComponentOutputs {}
export interface SlackWorkspaceConfigurationComponentInputs {
	readonly TeamId: string;
	readonly VersionId?: string | undefined;
	readonly LogicalId: string;
}
export default {
	AccountAlias: AccountAlias,
	SlackChannelConfiguration: SlackChannelConfiguration,
	SlackWorkspaceConfiguration: SlackWorkspaceConfiguration,
};
