import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class NotificationChannel
	extends CfnResource<NotificationChannelComponentInputs>
	implements NotificationChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: NotificationChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::FMS::NotificationChannel", options);
	}
}
export interface NotificationChannelComponentOutputs {}
export interface NotificationChannelComponentInputs {
	readonly SnsRoleName: string;
	readonly SnsTopicArn: string;
	readonly LogicalId: string;
}
export class Policy extends CfnResource<PolicyComponentInputs> implements PolicyComponentOutputs {
	constructor(entity: ADKEntity, options: PolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::FMS::Policy", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface PolicyComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface PolicyComponentInputs {
	readonly ExcludeResourceTags: boolean;
	readonly PolicyName: string;
	readonly RemediationEnabled: boolean;
	readonly ResourceType: string;
	readonly SecurityServicePolicyData: SecurityServicePolicyData;
	readonly DeleteAllPolicyResources?: boolean | undefined;
	readonly ExcludeMap?: IEMap | undefined;
	readonly IncludeMap?: IEMap | undefined;
	readonly ResourcesCleanUp?: boolean | undefined;
	readonly ResourceTags?: ResourceTag[] | undefined;
	readonly ResourceTypeList?: string[] | undefined;
	readonly Tags?: PolicyTag[] | undefined;
	readonly LogicalId: string;
}
export interface IEMap {
	readonly ACCOUNT?: string[] | undefined;
	readonly ORGUNIT?: string[] | undefined;
}
export interface NetworkFirewallPolicy {
	readonly FirewallDeploymentModel: string;
}
export interface PolicyOption {
	readonly NetworkFirewallPolicy?: NetworkFirewallPolicy | undefined;
	readonly ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy | undefined;
}
export interface PolicyTag {
	readonly Key: string;
	readonly Value: string;
}
export interface ResourceTag {
	readonly Key: string;
	readonly Value?: string | undefined;
}
export interface SecurityServicePolicyData {
	readonly ManagedServiceData?: string | undefined;
	readonly PolicyOption?: PolicyOption | undefined;
	readonly Type: string;
}
export interface ThirdPartyFirewallPolicy {
	readonly FirewallDeploymentModel: string;
}
export default {
	NotificationChannel: NotificationChannel,
	Policy: Policy,
};
