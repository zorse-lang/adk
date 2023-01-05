import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ByteMatchSet extends CfnResource<ByteMatchSetComponentInputs> implements ByteMatchSetComponentOutputs {
	constructor(entity: ADKEntity, options: ByteMatchSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAF::ByteMatchSet", options);
	}
}
export interface ByteMatchSetComponentOutputs {}
export interface ByteMatchSetComponentInputs {
	readonly Name: string;
	readonly ByteMatchTuples?: ByteMatchTuple[] | undefined;
	readonly LogicalId: string;
}
export class IPSet extends CfnResource<IPSetComponentInputs> implements IPSetComponentOutputs {
	constructor(entity: ADKEntity, options: IPSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAF::IPSet", options);
	}
}
export interface IPSetComponentOutputs {}
export interface IPSetComponentInputs {
	readonly Name: string;
	readonly IPSetDescriptors?: IPSetDescriptor[] | undefined;
	readonly LogicalId: string;
}
export class Rule extends CfnResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAF::Rule", options);
	}
}
export interface RuleComponentOutputs {}
export interface RuleComponentInputs {
	readonly MetricName: string;
	readonly Name: string;
	readonly Predicates?: Predicate[] | undefined;
	readonly LogicalId: string;
}
export class SizeConstraintSet
	extends CfnResource<SizeConstraintSetComponentInputs>
	implements SizeConstraintSetComponentOutputs
{
	constructor(entity: ADKEntity, options: SizeConstraintSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAF::SizeConstraintSet", options);
	}
}
export interface SizeConstraintSetComponentOutputs {}
export interface SizeConstraintSetComponentInputs {
	readonly Name: string;
	readonly SizeConstraints: SizeConstraint[];
	readonly LogicalId: string;
}
export class SqlInjectionMatchSet
	extends CfnResource<SqlInjectionMatchSetComponentInputs>
	implements SqlInjectionMatchSetComponentOutputs
{
	constructor(entity: ADKEntity, options: SqlInjectionMatchSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAF::SqlInjectionMatchSet", options);
	}
}
export interface SqlInjectionMatchSetComponentOutputs {}
export interface SqlInjectionMatchSetComponentInputs {
	readonly Name: string;
	readonly SqlInjectionMatchTuples?: SqlInjectionMatchTuple[] | undefined;
	readonly LogicalId: string;
}
export class WebACL extends CfnResource<WebACLComponentInputs> implements WebACLComponentOutputs {
	constructor(entity: ADKEntity, options: WebACLComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAF::WebACL", options);
	}
}
export interface WebACLComponentOutputs {}
export interface WebACLComponentInputs {
	readonly DefaultAction: WafAction;
	readonly MetricName: string;
	readonly Name: string;
	readonly Rules?: ActivatedRule[] | undefined;
	readonly LogicalId: string;
}
export class XssMatchSet extends CfnResource<XssMatchSetComponentInputs> implements XssMatchSetComponentOutputs {
	constructor(entity: ADKEntity, options: XssMatchSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::WAF::XssMatchSet", options);
	}
}
export interface XssMatchSetComponentOutputs {}
export interface XssMatchSetComponentInputs {
	readonly Name: string;
	readonly XssMatchTuples: XssMatchTuple[];
	readonly LogicalId: string;
}
export interface ByteMatchTuple {
	readonly FieldToMatch: FieldToMatch;
	readonly PositionalConstraint: string;
	readonly TargetString?: string | undefined;
	readonly TargetStringBase64?: string | undefined;
	readonly TextTransformation: string;
}
export interface FieldToMatch {
	readonly Data?: string | undefined;
	readonly Type: string;
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
export interface ActivatedRule {
	readonly Action?: WafAction | undefined;
	readonly Priority: number;
	readonly RuleId: string;
}
export interface WafAction {
	readonly Type: string;
}
export interface XssMatchTuple {
	readonly FieldToMatch: FieldToMatch;
	readonly TextTransformation: string;
}
export default {
	ByteMatchSet: ByteMatchSet,
	IPSet: IPSet,
	Rule: Rule,
	SizeConstraintSet: SizeConstraintSet,
	SqlInjectionMatchSet: SqlInjectionMatchSet,
	WebACL: WebACL,
	XssMatchSet: XssMatchSet,
};
