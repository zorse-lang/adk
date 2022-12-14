import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Firewall extends CfnResource<FirewallComponentInputs> implements FirewallComponentOutputs {
	constructor(entity: ADKEntity, options: FirewallComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkFirewall::Firewall", options);
	}
	public readonly EndpointIds: string[];
	public readonly FirewallArn: string;
	public readonly FirewallId: string;
}
export interface FirewallComponentOutputs {
	readonly EndpointIds: string[];
	readonly FirewallArn: string;
	readonly FirewallId: string;
}
export interface FirewallComponentInputs {
	readonly FirewallName: string;
	readonly FirewallPolicyArn: string;
	readonly SubnetMappings: SubnetMapping[];
	readonly VpcId: string;
	readonly DeleteProtection?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly FirewallPolicyChangeProtection?: boolean | undefined;
	readonly SubnetChangeProtection?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class FirewallPolicy extends CfnResource<FirewallPolicyComponentInputs> implements FirewallPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: FirewallPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkFirewall::FirewallPolicy", options);
	}
	public readonly FirewallPolicyArn: string;
	public readonly FirewallPolicyId: string;
}
export interface FirewallPolicyComponentOutputs {
	readonly FirewallPolicyArn: string;
	readonly FirewallPolicyId: string;
}
export interface FirewallPolicyComponentInputs {
	readonly FirewallPolicy: FirewallPolicy;
	readonly FirewallPolicyName: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LoggingConfiguration
	extends CfnResource<LoggingConfigurationComponentInputs>
	implements LoggingConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: LoggingConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkFirewall::LoggingConfiguration", options);
	}
}
export interface LoggingConfigurationComponentOutputs {}
export interface LoggingConfigurationComponentInputs {
	readonly FirewallArn: string;
	readonly LoggingConfiguration: LoggingConfiguration;
	readonly FirewallName?: string | undefined;
	readonly LogicalId: string;
}
export class RuleGroup extends CfnResource<RuleGroupComponentInputs> implements RuleGroupComponentOutputs {
	constructor(entity: ADKEntity, options: RuleGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkFirewall::RuleGroup", options);
	}
	public readonly RuleGroupArn: string;
	public readonly RuleGroupId: string;
}
export interface RuleGroupComponentOutputs {
	readonly RuleGroupArn: string;
	readonly RuleGroupId: string;
}
export interface RuleGroupComponentInputs {
	readonly Capacity: number;
	readonly RuleGroupName: string;
	readonly Type: string;
	readonly Description?: string | undefined;
	readonly RuleGroup?: RuleGroup | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface SubnetMapping {
	readonly SubnetId: string;
}
export interface ActionDefinition {
	readonly PublishMetricAction?: PublishMetricAction | undefined;
}
export interface CustomAction {
	readonly ActionDefinition: ActionDefinition;
	readonly ActionName: string;
}
export interface Dimension {
	readonly Value: string;
}
export interface FirewallPolicy {
	readonly StatefulDefaultActions?: string[] | undefined;
	readonly StatefulEngineOptions?: StatefulEngineOptions | undefined;
	readonly StatefulRuleGroupReferences?: StatefulRuleGroupReference[] | undefined;
	readonly StatelessCustomActions?: CustomAction[] | undefined;
	readonly StatelessDefaultActions: string[];
	readonly StatelessFragmentDefaultActions: string[];
	readonly StatelessRuleGroupReferences?: StatelessRuleGroupReference[] | undefined;
}
export interface PublishMetricAction {
	readonly Dimensions: Dimension[];
}
export interface StatefulEngineOptions {
	readonly RuleOrder?: string | undefined;
}
export interface StatefulRuleGroupOverride {
	readonly Action?: string | undefined;
}
export interface StatefulRuleGroupReference {
	readonly Override?: StatefulRuleGroupOverride | undefined;
	readonly Priority?: number | undefined;
	readonly ResourceArn: string;
}
export interface StatelessRuleGroupReference {
	readonly Priority: number;
	readonly ResourceArn: string;
}
export interface LogDestinationConfig {
	readonly LogDestination: { [key: string]: string };
	readonly LogDestinationType: string;
	readonly LogType: string;
}
export interface LoggingConfiguration {
	readonly LogDestinationConfigs: LogDestinationConfig[];
}
export interface Address {
	readonly AddressDefinition: string;
}
export interface Header {
	readonly Destination: string;
	readonly DestinationPort: string;
	readonly Direction: string;
	readonly Protocol: string;
	readonly Source: string;
	readonly SourcePort: string;
}
export interface IPSet {
	readonly Definition?: string[] | undefined;
}
export interface MatchAttributes {
	readonly DestinationPorts?: PortRange[] | undefined;
	readonly Destinations?: Address[] | undefined;
	readonly Protocols?: number[] | undefined;
	readonly SourcePorts?: PortRange[] | undefined;
	readonly Sources?: Address[] | undefined;
	readonly TCPFlags?: TCPFlagField[] | undefined;
}
export interface PortRange {
	readonly FromPort: number;
	readonly ToPort: number;
}
export interface PortSet {
	readonly Definition?: string[] | undefined;
}
export interface RuleDefinition {
	readonly Actions: string[];
	readonly MatchAttributes: MatchAttributes;
}
export interface RuleGroup {
	readonly RuleVariables?: RuleVariables | undefined;
	readonly RulesSource: RulesSource;
	readonly StatefulRuleOptions?: StatefulRuleOptions | undefined;
}
export interface RuleOption {
	readonly Keyword: string;
	readonly Settings?: string[] | undefined;
}
export interface RuleVariables {
	readonly IPSets?: { [key: string]: IPSet } | undefined;
	readonly PortSets?: { [key: string]: PortSet } | undefined;
}
export interface RulesSource {
	readonly RulesSourceList?: RulesSourceList | undefined;
	readonly RulesString?: string | undefined;
	readonly StatefulRules?: StatefulRule[] | undefined;
	readonly StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions | undefined;
}
export interface RulesSourceList {
	readonly GeneratedRulesType: string;
	readonly TargetTypes: string[];
	readonly Targets: string[];
}
export interface StatefulRule {
	readonly Action: string;
	readonly Header: Header;
	readonly RuleOptions: RuleOption[];
}
export interface StatefulRuleOptions {
	readonly RuleOrder?: string | undefined;
}
export interface StatelessRule {
	readonly Priority: number;
	readonly RuleDefinition: RuleDefinition;
}
export interface StatelessRulesAndCustomActions {
	readonly CustomActions?: CustomAction[] | undefined;
	readonly StatelessRules: StatelessRule[];
}
export interface TCPFlagField {
	readonly Flags: string[];
	readonly Masks?: string[] | undefined;
}
export default {
	Firewall: Firewall,
	FirewallPolicy: FirewallPolicy,
	LoggingConfiguration: LoggingConfiguration,
	RuleGroup: RuleGroup,
};
