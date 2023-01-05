import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class FirewallDomainList
	extends CfnResource<FirewallDomainListComponentInputs>
	implements FirewallDomainListComponentOutputs
{
	constructor(entity: ADKEntity, options: FirewallDomainListComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::FirewallDomainList", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly CreatorRequestId: string;
	public readonly DomainCount: number;
	public readonly Id: string;
	public readonly ManagedOwnerName: string;
	public readonly ModificationTime: string;
	public readonly Status: string;
	public readonly StatusMessage: string;
}
export interface FirewallDomainListComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly CreatorRequestId: string;
	readonly DomainCount: number;
	readonly Id: string;
	readonly ManagedOwnerName: string;
	readonly ModificationTime: string;
	readonly Status: string;
	readonly StatusMessage: string;
}
export interface FirewallDomainListComponentInputs {
	readonly DomainFileUrl?: string | undefined;
	readonly Domains?: string[] | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class FirewallRuleGroup
	extends CfnResource<FirewallRuleGroupComponentInputs>
	implements FirewallRuleGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: FirewallRuleGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::FirewallRuleGroup", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly CreatorRequestId: string;
	public readonly Id: string;
	public readonly ModificationTime: string;
	public readonly OwnerId: string;
	public readonly RuleCount: number;
	public readonly ShareStatus: string;
	public readonly Status: string;
	public readonly StatusMessage: string;
}
export interface FirewallRuleGroupComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly CreatorRequestId: string;
	readonly Id: string;
	readonly ModificationTime: string;
	readonly OwnerId: string;
	readonly RuleCount: number;
	readonly ShareStatus: string;
	readonly Status: string;
	readonly StatusMessage: string;
}
export interface FirewallRuleGroupComponentInputs {
	readonly FirewallRules?: FirewallRule[] | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class FirewallRuleGroupAssociation
	extends CfnResource<FirewallRuleGroupAssociationComponentInputs>
	implements FirewallRuleGroupAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: FirewallRuleGroupAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::FirewallRuleGroupAssociation", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly CreatorRequestId: string;
	public readonly Id: string;
	public readonly ManagedOwnerName: string;
	public readonly ModificationTime: string;
	public readonly Status: string;
	public readonly StatusMessage: string;
}
export interface FirewallRuleGroupAssociationComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly CreatorRequestId: string;
	readonly Id: string;
	readonly ManagedOwnerName: string;
	readonly ModificationTime: string;
	readonly Status: string;
	readonly StatusMessage: string;
}
export interface FirewallRuleGroupAssociationComponentInputs {
	readonly FirewallRuleGroupId: string;
	readonly Priority: number;
	readonly VpcId: string;
	readonly MutationProtection?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ResolverConfig extends CfnResource<ResolverConfigComponentInputs> implements ResolverConfigComponentOutputs {
	constructor(entity: ADKEntity, options: ResolverConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::ResolverConfig", options);
	}
	public readonly AutodefinedReverse: string;
	public readonly Id: string;
	public readonly OwnerId: string;
}
export interface ResolverConfigComponentOutputs {
	readonly AutodefinedReverse: string;
	readonly Id: string;
	readonly OwnerId: string;
}
export interface ResolverConfigComponentInputs {
	readonly AutodefinedReverseFlag: string;
	readonly ResourceId: string;
	readonly LogicalId: string;
}
export class ResolverDNSSECConfig
	extends CfnResource<ResolverDNSSECConfigComponentInputs>
	implements ResolverDNSSECConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: ResolverDNSSECConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::ResolverDNSSECConfig", options);
	}
	public readonly Id: string;
	public readonly OwnerId: string;
	public readonly ValidationStatus: string;
}
export interface ResolverDNSSECConfigComponentOutputs {
	readonly Id: string;
	readonly OwnerId: string;
	readonly ValidationStatus: string;
}
export interface ResolverDNSSECConfigComponentInputs {
	readonly ResourceId?: string | undefined;
	readonly LogicalId: string;
}
export class ResolverEndpoint
	extends CfnResource<ResolverEndpointComponentInputs>
	implements ResolverEndpointComponentOutputs
{
	constructor(entity: ADKEntity, options: ResolverEndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::ResolverEndpoint", options);
	}
	public readonly Arn: string;
	public readonly Direction: string;
	public readonly HostVpcId: string;
	public readonly IpAddressCount: string;
	public readonly ResolverEndpointId: string;
}
export interface ResolverEndpointComponentOutputs {
	readonly Arn: string;
	readonly Direction: string;
	readonly HostVpcId: string;
	readonly IpAddressCount: string;
	readonly ResolverEndpointId: string;
}
export interface ResolverEndpointComponentInputs {
	readonly Direction: string;
	readonly IpAddresses: IpAddressRequest[];
	readonly SecurityGroupIds: string[];
	readonly Name?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ResolverQueryLoggingConfig
	extends CfnResource<ResolverQueryLoggingConfigComponentInputs>
	implements ResolverQueryLoggingConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: ResolverQueryLoggingConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::ResolverQueryLoggingConfig", options);
	}
	public readonly Arn: string;
	public readonly AssociationCount: number;
	public readonly CreationTime: string;
	public readonly CreatorRequestId: string;
	public readonly Id: string;
	public readonly OwnerId: string;
	public readonly ShareStatus: string;
	public readonly Status: string;
}
export interface ResolverQueryLoggingConfigComponentOutputs {
	readonly Arn: string;
	readonly AssociationCount: number;
	readonly CreationTime: string;
	readonly CreatorRequestId: string;
	readonly Id: string;
	readonly OwnerId: string;
	readonly ShareStatus: string;
	readonly Status: string;
}
export interface ResolverQueryLoggingConfigComponentInputs {
	readonly DestinationArn?: string | undefined;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export class ResolverQueryLoggingConfigAssociation
	extends CfnResource<ResolverQueryLoggingConfigAssociationComponentInputs>
	implements ResolverQueryLoggingConfigAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ResolverQueryLoggingConfigAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation", options);
	}
	public readonly CreationTime: string;
	public readonly Error: string;
	public readonly ErrorMessage: string;
	public readonly Id: string;
	public readonly Status: string;
}
export interface ResolverQueryLoggingConfigAssociationComponentOutputs {
	readonly CreationTime: string;
	readonly Error: string;
	readonly ErrorMessage: string;
	readonly Id: string;
	readonly Status: string;
}
export interface ResolverQueryLoggingConfigAssociationComponentInputs {
	readonly ResolverQueryLogConfigId?: string | undefined;
	readonly ResourceId?: string | undefined;
	readonly LogicalId: string;
}
export class ResolverRule extends CfnResource<ResolverRuleComponentInputs> implements ResolverRuleComponentOutputs {
	constructor(entity: ADKEntity, options: ResolverRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::ResolverRule", options);
	}
	public readonly Arn: string;
	public readonly DomainName: string;
	public readonly ResolverRuleId: string;
}
export interface ResolverRuleComponentOutputs {
	readonly Arn: string;
	readonly DomainName: string;
	readonly ResolverRuleId: string;
}
export interface ResolverRuleComponentInputs {
	readonly DomainName: string;
	readonly RuleType: string;
	readonly Name?: string;
	readonly ResolverEndpointId?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TargetIps?: Map<string, TargetAddress> | TargetAddress[];
	readonly LogicalId: string;
}
export class ResolverRuleAssociation
	extends CfnResource<ResolverRuleAssociationComponentInputs>
	implements ResolverRuleAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ResolverRuleAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53Resolver::ResolverRuleAssociation", options);
	}
	public readonly ResolverRuleAssociationId: string;
	public readonly ResolverRuleId: string;
	public readonly VpcId: string;
}
export interface ResolverRuleAssociationComponentOutputs {
	readonly ResolverRuleAssociationId: string;
	readonly ResolverRuleId: string;
	readonly VpcId: string;
}
export interface ResolverRuleAssociationComponentInputs {
	readonly ResolverRuleId: string;
	readonly VPCId: string;
	readonly Name?: string;
	readonly LogicalId: string;
}
export interface FirewallRule {
	readonly Action: string;
	readonly BlockOverrideDnsType?: string | undefined;
	readonly BlockOverrideDomain?: string | undefined;
	readonly BlockOverrideTtl?: number | undefined;
	readonly BlockResponse?: string | undefined;
	readonly FirewallDomainListId: string;
	readonly Priority: number;
}
export interface IpAddressRequest {
	readonly Ip?: string | undefined;
	readonly SubnetId: string;
}
export interface TargetAddress {
	readonly Ip: string;
	readonly Port?: string | undefined;
}
export default {
	FirewallDomainList: FirewallDomainList,
	FirewallRuleGroup: FirewallRuleGroup,
	FirewallRuleGroupAssociation: FirewallRuleGroupAssociation,
	ResolverConfig: ResolverConfig,
	ResolverDNSSECConfig: ResolverDNSSECConfig,
	ResolverEndpoint: ResolverEndpoint,
	ResolverQueryLoggingConfig: ResolverQueryLoggingConfig,
	ResolverQueryLoggingConfigAssociation: ResolverQueryLoggingConfigAssociation,
	ResolverRule: ResolverRule,
	ResolverRuleAssociation: ResolverRuleAssociation,
};
