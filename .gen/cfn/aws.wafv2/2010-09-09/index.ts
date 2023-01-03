import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class IPSet extends CfnResource<IPSetComponentInputs> implements IPSetComponentOutputs {
	constructor(entity: ADKEntity, options: IPSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFv2::IPSet", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface IPSetComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface IPSetComponentInputs {
	readonly Addresses: string[];
	readonly IPAddressVersion: string;
	readonly Scope: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class LoggingConfiguration
	extends CfnResource<LoggingConfigurationComponentInputs>
	implements LoggingConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: LoggingConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFv2::LoggingConfiguration", options);
	}
	public readonly ManagedByFirewallManager: boolean;
}
export interface LoggingConfigurationComponentOutputs {
	readonly ManagedByFirewallManager: boolean;
}
export interface LoggingConfigurationComponentInputs {
	readonly LogDestinationConfigs: string[];
	readonly ResourceArn: string;
	readonly LoggingFilter?: (LoggingFilter | undefined) | undefined;
	readonly RedactedFields?: (FieldToMatch[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class RegexPatternSet
	extends CfnResource<RegexPatternSetComponentInputs>
	implements RegexPatternSetComponentOutputs
{
	constructor(entity: ADKEntity, options: RegexPatternSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFv2::RegexPatternSet", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface RegexPatternSetComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface RegexPatternSetComponentInputs {
	readonly RegularExpressionList: string[];
	readonly Scope: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class RuleGroup extends CfnResource<RuleGroupComponentInputs> implements RuleGroupComponentOutputs {
	constructor(entity: ADKEntity, options: RuleGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFv2::RuleGroup", options);
	}
	public readonly Arn: string;
	public readonly AvailableLabels: Map<string, LabelSummary>;
	public readonly ConsumedLabels: Map<string, LabelSummary>;
	public readonly Id: string;
	public readonly LabelNamespace: string;
}
export interface RuleGroupComponentOutputs {
	readonly Arn: string;
	readonly AvailableLabels: Map<string, LabelSummary>;
	readonly ConsumedLabels: Map<string, LabelSummary>;
	readonly Id: string;
	readonly LabelNamespace: string;
}
export interface RuleGroupComponentInputs {
	readonly Capacity: number;
	readonly Scope: string;
	readonly VisibilityConfig: VisibilityConfig;
	readonly CustomResponseBodies?: ({ [key: string]: CustomResponseBody } | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Rules?: (Rule[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class WebACL extends CfnResource<WebACLComponentInputs> implements WebACLComponentOutputs {
	constructor(entity: ADKEntity, options: WebACLComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFv2::WebACL", options);
	}
	public readonly Arn: string;
	public readonly Capacity: number;
	public readonly Id: string;
	public readonly LabelNamespace: string;
}
export interface WebACLComponentOutputs {
	readonly Arn: string;
	readonly Capacity: number;
	readonly Id: string;
	readonly LabelNamespace: string;
}
export interface WebACLComponentInputs {
	readonly DefaultAction: DefaultAction;
	readonly Scope: string;
	readonly VisibilityConfig: VisibilityConfig;
	readonly CaptchaConfig?: (CaptchaConfig | undefined) | undefined;
	readonly CustomResponseBodies?: ({ [key: string]: CustomResponseBody } | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Rules?: (Rule[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class WebACLAssociation
	extends CfnResource<WebACLAssociationComponentInputs>
	implements WebACLAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: WebACLAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFv2::WebACLAssociation", options);
	}
}
export interface WebACLAssociationComponentOutputs {}
export interface WebACLAssociationComponentInputs {
	readonly ResourceArn: string;
	readonly WebACLArn: string;
	readonly LogicalId: string;
}
export interface ActionCondition {
	readonly Action: string;
}
export interface Condition {
	readonly ActionCondition?: (ActionCondition | undefined) | undefined;
	readonly LabelNameCondition?: (LabelNameCondition | undefined) | undefined;
}
export interface FieldToMatch {
	readonly JsonBody?: (JsonBody | undefined) | undefined;
	readonly Method?: (any | undefined) | undefined;
	readonly QueryString?: (any | undefined) | undefined;
	readonly SingleHeader?: (SingleHeader | undefined) | undefined;
	readonly UriPath?: (any | undefined) | undefined;
}
export interface Filter {
	readonly Behavior: string;
	readonly Conditions: Condition[];
	readonly Requirement: string;
}
export interface JsonBody {
	readonly InvalidFallbackBehavior?: (string | undefined) | undefined;
	readonly MatchPattern: MatchPattern;
	readonly MatchScope: string;
}
export interface LabelNameCondition {
	readonly LabelName: string;
}
export interface LoggingFilter {
	readonly DefaultBehavior: string;
	readonly Filters: Filter[];
}
export interface MatchPattern {
	readonly All?: (any | undefined) | undefined;
	readonly IncludedPaths?: (string[] | undefined) | undefined;
}
export interface SingleHeader {
	readonly Name: string;
}
export interface Allow {
	readonly CustomRequestHandling?: (CustomRequestHandling | undefined) | undefined;
}
export interface AndStatement {
	readonly Statements: Statement[];
}
export interface Block {
	readonly CustomResponse?: (CustomResponse | undefined) | undefined;
}
export interface Body {
	readonly OversizeHandling?: (string | undefined) | undefined;
}
export interface ByteMatchStatement {
	readonly FieldToMatch: FieldToMatch;
	readonly PositionalConstraint: string;
	readonly SearchString?: (string | undefined) | undefined;
	readonly SearchStringBase64?: (string | undefined) | undefined;
	readonly TextTransformations: TextTransformation[];
}
export interface Captcha {
	readonly CustomRequestHandling?: (CustomRequestHandling | undefined) | undefined;
}
export interface CaptchaConfig {
	readonly ImmunityTimeProperty?: (ImmunityTime | undefined) | undefined;
}
export interface CookieMatchPattern {
	readonly All?: (any | undefined) | undefined;
	readonly ExcludedCookies?: (string[] | undefined) | undefined;
	readonly IncludedCookies?: (string[] | undefined) | undefined;
}
export interface Cookies {
	readonly MatchPattern: CookieMatchPattern;
	readonly MatchScope: string;
	readonly OversizeHandling: string;
}
export interface Count {
	readonly CustomRequestHandling?: (CustomRequestHandling | undefined) | undefined;
}
export interface CustomHTTPHeader {
	readonly Name: string;
	readonly Value: string;
}
export interface CustomRequestHandling {
	readonly InsertHeaders: CustomHTTPHeader[];
}
export interface CustomResponse {
	readonly CustomResponseBodyKey?: (string | undefined) | undefined;
	readonly ResponseCode: number;
	readonly ResponseHeaders?: (CustomHTTPHeader[] | undefined) | undefined;
}
export interface CustomResponseBody {
	readonly Content: string;
	readonly ContentType: string;
}
export interface ForwardedIPConfiguration {
	readonly FallbackBehavior: string;
	readonly HeaderName: string;
}
export interface GeoMatchStatement {
	readonly CountryCodes?: (string[] | undefined) | undefined;
	readonly ForwardedIPConfig?: (ForwardedIPConfiguration | undefined) | undefined;
}
export interface HeaderMatchPattern {
	readonly All?: (any | undefined) | undefined;
	readonly ExcludedHeaders?: (string[] | undefined) | undefined;
	readonly IncludedHeaders?: (string[] | undefined) | undefined;
}
export interface Headers {
	readonly MatchPattern: HeaderMatchPattern;
	readonly MatchScope: string;
	readonly OversizeHandling: string;
}
export interface IPSetForwardedIPConfiguration {
	readonly FallbackBehavior: string;
	readonly HeaderName: string;
	readonly Position: string;
}
export interface IPSetReferenceStatement {
	readonly Arn: string;
	readonly IPSetForwardedIPConfig?: (IPSetForwardedIPConfiguration | undefined) | undefined;
}
export interface ImmunityTime {
	readonly ImmunityTime: number;
}
export interface JsonMatchPattern {
	readonly All?: (any | undefined) | undefined;
	readonly IncludedPaths?: (string[] | undefined) | undefined;
}
export interface LabelOptions {
	readonly Name: string;
}
export interface LabelMatchStatement {
	readonly Key: string;
	readonly Scope: string;
}
export interface LabelSummary {
	readonly Name?: (string | undefined) | undefined;
}
export interface NotStatement {
	readonly Statement: Statement;
}
export interface OrStatement {
	readonly Statements: Statement[];
}
export interface RateBasedStatement {
	readonly AggregateKeyType: string;
	readonly ForwardedIPConfig?: (ForwardedIPConfiguration | undefined) | undefined;
	readonly Limit: number;
	readonly ScopeDownStatement?: (Statement | undefined) | undefined;
}
export interface RegexMatchStatement {
	readonly FieldToMatch: FieldToMatch;
	readonly RegexString: string;
	readonly TextTransformations: TextTransformation[];
}
export interface RegexPatternSetReferenceStatement {
	readonly Arn: string;
	readonly FieldToMatch: FieldToMatch;
	readonly TextTransformations: TextTransformation[];
}
export interface Rule {
	readonly Action?: (RuleAction | undefined) | undefined;
	readonly CaptchaConfig?: (CaptchaConfig | undefined) | undefined;
	readonly Name: string;
	readonly Priority: number;
	readonly RuleLabels?: LabelOptions[] | undefined;
	readonly Statement: Statement;
	readonly VisibilityConfig: VisibilityConfig;
}
export interface RuleAction {
	readonly Allow?: (Allow | undefined) | undefined;
	readonly Block?: (Block | undefined) | undefined;
	readonly Captcha?: (Captcha | undefined) | undefined;
	readonly Count?: (Count | undefined) | undefined;
}
export interface SingleQueryArgument {
	readonly Name: string;
}
export interface SizeConstraintStatement {
	readonly ComparisonOperator: string;
	readonly FieldToMatch: FieldToMatch;
	readonly Size: number;
	readonly TextTransformations: TextTransformation[];
}
export interface SqliMatchStatement {
	readonly FieldToMatch: FieldToMatch;
	readonly SensitivityLevel?: (string | undefined) | undefined;
	readonly TextTransformations: TextTransformation[];
}
export interface Statement {
	readonly AndStatement?: (AndStatement | undefined) | undefined;
	readonly ByteMatchStatement?: (ByteMatchStatement | undefined) | undefined;
	readonly GeoMatchStatement?: (GeoMatchStatement | undefined) | undefined;
	readonly IPSetReferenceStatement?: (IPSetReferenceStatement | undefined) | undefined;
	readonly LabelMatchStatement?: (LabelMatchStatement | undefined) | undefined;
	readonly NotStatement?: (NotStatement | undefined) | undefined;
	readonly OrStatement?: (OrStatement | undefined) | undefined;
	readonly RateBasedStatement?: (RateBasedStatement | undefined) | undefined;
	readonly RegexMatchStatement?: (RegexMatchStatement | undefined) | undefined;
	readonly RegexPatternSetReferenceStatement?: (RegexPatternSetReferenceStatement | undefined) | undefined;
	readonly SizeConstraintStatement?: (SizeConstraintStatement | undefined) | undefined;
	readonly SqliMatchStatement?: (SqliMatchStatement | undefined) | undefined;
	readonly XssMatchStatement?: (XssMatchStatement | undefined) | undefined;
}
export interface TextTransformation {
	readonly Priority: number;
	readonly Type: string;
}
export interface VisibilityConfig {
	readonly CloudWatchMetricsEnabled: boolean;
	readonly MetricName: string;
	readonly SampledRequestsEnabled: boolean;
}
export interface XssMatchStatement {
	readonly FieldToMatch: FieldToMatch;
	readonly TextTransformations: TextTransformation[];
}
export interface AllowAction {
	readonly CustomRequestHandling?: (CustomRequestHandling | undefined) | undefined;
}
export interface BlockAction {
	readonly CustomResponse?: (CustomResponse | undefined) | undefined;
}
export interface CaptchaAction {
	readonly CustomRequestHandling?: (CustomRequestHandling | undefined) | undefined;
}
export interface CountAction {
	readonly CustomRequestHandling?: (CustomRequestHandling | undefined) | undefined;
}
export interface DefaultAction {
	readonly Allow?: (AllowAction | undefined) | undefined;
	readonly Block?: (BlockAction | undefined) | undefined;
}
export interface ExcludedRule {
	readonly Name: string;
}
export interface FieldIdentifier {
	readonly Identifier: string;
}
export interface ManagedRuleGroupConfig {
	readonly LoginPath?: (string | undefined) | undefined;
	readonly PasswordField?: (FieldIdentifier | undefined) | undefined;
	readonly PayloadType?: (string | undefined) | undefined;
	readonly UsernameField?: (FieldIdentifier | undefined) | undefined;
}
export interface ManagedRuleGroupStatement {
	readonly ExcludedRules?: (ExcludedRule[] | undefined) | undefined;
	readonly ManagedRuleGroupConfigs?: (ManagedRuleGroupConfig[] | undefined) | undefined;
	readonly Name: string;
	readonly ScopeDownStatement?: (Statement | undefined) | undefined;
	readonly VendorName: string;
	readonly Version?: (string | undefined) | undefined;
}
export interface OverrideAction {
	readonly Count?: (any | undefined) | undefined;
	readonly None?: (any | undefined) | undefined;
}
export interface RuleGroupReferenceStatement {
	readonly Arn: string;
	readonly ExcludedRules?: (ExcludedRule[] | undefined) | undefined;
}
export default {
	IPSet: IPSet,
	LoggingConfiguration: LoggingConfiguration,
	RegexPatternSet: RegexPatternSet,
	RuleGroup: RuleGroup,
	WebACL: WebACL,
	WebACLAssociation: WebACLAssociation,
};
