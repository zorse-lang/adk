import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Campaign extends CfnResource<CampaignComponentInputs> implements CampaignComponentOutputs {
	constructor(entity: ADKEntity, options: CampaignComponentInputs) {
		super(entity, options.LogicalId, "AWS::ConnectCampaigns::Campaign", options);
	}
	public readonly Arn: string;
}
export interface CampaignComponentOutputs {
	readonly Arn: string;
}
export interface CampaignComponentInputs {
	readonly ConnectInstanceArn: string;
	readonly DialerConfig: DialerConfig;
	readonly Name: string;
	readonly OutboundCallConfig: OutboundCallConfig;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DialerConfig {
	readonly PredictiveDialerConfig?: (PredictiveDialerConfig | undefined) | undefined;
	readonly ProgressiveDialerConfig?: (ProgressiveDialerConfig | undefined) | undefined;
}
export interface OutboundCallConfig {
	readonly ConnectContactFlowArn: string;
	readonly ConnectQueueArn: string;
	readonly ConnectSourcePhoneNumber?: (string | undefined) | undefined;
}
export interface PredictiveDialerConfig {
	readonly BandwidthAllocation: number;
}
export interface ProgressiveDialerConfig {
	readonly BandwidthAllocation: number;
}
export default {
	Campaign: Campaign,
};
