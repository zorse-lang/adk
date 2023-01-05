import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Contact extends CfnResource<ContactComponentInputs> implements ContactComponentOutputs {
	constructor(entity: ADKEntity, options: ContactComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSMContacts::Contact", options);
	}
	public readonly Arn: string;
}
export interface ContactComponentOutputs {
	readonly Arn: string;
}
export interface ContactComponentInputs {
	readonly Alias: string;
	readonly DisplayName: string;
	readonly Plan: Stage[];
	readonly Type: string;
	readonly LogicalId: string;
}
export class ContactChannel extends CfnResource<ContactChannelComponentInputs> implements ContactChannelComponentOutputs {
	constructor(entity: ADKEntity, options: ContactChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSMContacts::ContactChannel", options);
	}
	public readonly Arn: string;
}
export interface ContactChannelComponentOutputs {
	readonly Arn: string;
}
export interface ContactChannelComponentInputs {
	readonly ChannelAddress: string;
	readonly ChannelName: string;
	readonly ChannelType: string;
	readonly ContactId: string;
	readonly DeferActivation?: boolean | undefined;
	readonly LogicalId: string;
}
export interface ChannelTargetInfo {
	readonly ChannelId: string;
	readonly RetryIntervalInMinutes: number;
}
export interface ContactTargetInfo {
	readonly ContactId: string;
	readonly IsEssential: boolean;
}
export interface Stage {
	readonly DurationInMinutes: number;
	readonly Targets?: Targets[] | undefined;
}
export interface Targets {
	readonly ChannelTargetInfo?: ChannelTargetInfo | undefined;
	readonly ContactTargetInfo?: ContactTargetInfo | undefined;
}
export default {
	Contact: Contact,
	ContactChannel: ContactChannel,
};
