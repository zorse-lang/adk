import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ByteMatchSet extends CfnResource<ByteMatchSetComponentInputs> implements ByteMatchSetComponentOutputs {
	constructor(entity: ADKEntity, options: ByteMatchSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::ByteMatchSet", options);
	}
}
export interface ByteMatchSetComponentOutputs {}
export interface ByteMatchSetComponentInputs {
	readonly Name: string;
	readonly ByteMatchTuples?: (ByteMatchTuple[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class GeoMatchSet extends CfnResource<GeoMatchSetComponentInputs> implements GeoMatchSetComponentOutputs {
	constructor(entity: ADKEntity, options: GeoMatchSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::GeoMatchSet", options);
	}
}
export interface GeoMatchSetComponentOutputs {}
export interface GeoMatchSetComponentInputs {
	readonly Name: string;
	readonly GeoMatchConstraints?: (GeoMatchConstraint[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class IPSet extends CfnResource<IPSetComponentInputs> implements IPSetComponentOutputs {
	constructor(entity: ADKEntity, options: IPSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::IPSet", options);
	}
}
export interface IPSetComponentOutputs {}
export interface IPSetComponentInputs {
	readonly Name: string;
	readonly IPSetDescriptors?: (IPSetDescriptor[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class RateBasedRule extends CfnResource<RateBasedRuleComponentInputs> implements RateBasedRuleComponentOutputs {
	constructor(entity: ADKEntity, options: RateBasedRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::RateBasedRule", options);
	}
}
export interface RateBasedRuleComponentOutputs {}
export interface RateBasedRuleComponentInputs {
	readonly MetricName: string;
	readonly Name: string;
	readonly RateKey: string;
	readonly RateLimit: number;
	readonly MatchPredicates?: (Predicate[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class RegexPatternSet
	extends CfnResource<RegexPatternSetComponentInputs>
	implements RegexPatternSetComponentOutputs
{
	constructor(entity: ADKEntity, options: RegexPatternSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::RegexPatternSet", options);
	}
}
export interface RegexPatternSetComponentOutputs {}
export interface RegexPatternSetComponentInputs {
	readonly Name: string;
	readonly RegexPatternStrings: string[];
	readonly LogicalId: string;
}
export class Rule extends CfnResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::Rule", options);
	}
}
export interface RuleComponentOutputs {}
export interface RuleComponentInputs {
	readonly MetricName: string;
	readonly Name: string;
	readonly Predicates?: (Predicate[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SizeConstraintSet
	extends CfnResource<SizeConstraintSetComponentInputs>
	implements SizeConstraintSetComponentOutputs
{
	constructor(entity: ADKEntity, options: SizeConstraintSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::SizeConstraintSet", options);
	}
}
export interface SizeConstraintSetComponentOutputs {}
export interface SizeConstraintSetComponentInputs {
	readonly Name: string;
	readonly SizeConstraints?: (SizeConstraint[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SqlInjectionMatchSet
	extends CfnResource<SqlInjectionMatchSetComponentInputs>
	implements SqlInjectionMatchSetComponentOutputs
{
	constructor(entity: ADKEntity, options: SqlInjectionMatchSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::SqlInjectionMatchSet", options);
	}
}
export interface SqlInjectionMatchSetComponentOutputs {}
export interface SqlInjectionMatchSetComponentInputs {
	readonly Name: string;
	readonly SqlInjectionMatchTuples?: (SqlInjectionMatchTuple[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class WebACL extends CfnResource<WebACLComponentInputs> implements WebACLComponentOutputs {
	constructor(entity: ADKEntity, options: WebACLComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::WebACL", options);
	}
}
export interface WebACLComponentOutputs {}
export interface WebACLComponentInputs {
	readonly DefaultAction: Action;
	readonly MetricName: string;
	readonly Name: string;
	readonly Rules?: (Rule[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class WebACLAssociation
	extends CfnResource<WebACLAssociationComponentInputs>
	implements WebACLAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: WebACLAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::WebACLAssociation", options);
	}
}
export interface WebACLAssociationComponentOutputs {}
export interface WebACLAssociationComponentInputs {
	readonly ResourceArn: string;
	readonly WebACLId: string;
	readonly LogicalId: string;
}
export class XssMatchSet extends CfnResource<XssMatchSetComponentInputs> implements XssMatchSetComponentOutputs {
	constructor(entity: ADKEntity, options: XssMatchSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAFRegional::XssMatchSet", options);
	}
}
export interface XssMatchSetComponentOutputs {}
export interface XssMatchSetComponentInputs {
	readonly Name: string;
	readonly XssMatchTuples?: (XssMatchTuple[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ByteMatchTuple {
	readonly FieldToMatch: FieldToMatch;
	readonly PositionalConstraint: string;
	readonly TargetString?: (string | undefined) | undefined;
	readonly TargetStringBase64?: (string | undefined) | undefined;
	readonly TextTransformation: string;
}
export interface FieldToMatch {
	readonly Data?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface GeoMatchConstraint {
	readonly Type: string;
	readonly Value: string;
}
export interface IPSetDescriptor {
	readonly Type: string;
	readonly Value: string;
}
export interface Predicate {
	readonly DataId: string;
	readonly Negated: boolean;
	readonly Type: string;
}
export interface SizeConstraint {
	readonly ComparisonOperator: string;
	readonly FieldToMatch: FieldToMatch;
	readonly Size: number;
	readonly TextTransformation: string;
}
export interface SqlInjectionMatchTuple {
	readonly FieldToMatch: FieldToMatch;
	readonly TextTransformation: string;
}
export interface Action {
	readonly Type: string;
}
export interface Rule {
	readonly Action: Action;
	readonly Priority: number;
	readonly RuleId: string;
}
export interface XssMatchTuple {
	readonly FieldToMatch: FieldToMatch;
	readonly TextTransformation: string;
}
export default {
	ByteMatchSet: ByteMatchSet,
	GeoMatchSet: GeoMatchSet,
	IPSet: IPSet,
	RateBasedRule: RateBasedRule,
	RegexPatternSet: RegexPatternSet,
	Rule: Rule,
	SizeConstraintSet: SizeConstraintSet,
	SqlInjectionMatchSet: SqlInjectionMatchSet,
	WebACL: WebACL,
	WebACLAssociation: WebACLAssociation,
	XssMatchSet: XssMatchSet,
};
