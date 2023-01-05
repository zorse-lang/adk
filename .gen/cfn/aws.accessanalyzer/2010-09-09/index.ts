import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Analyzer extends CfnResource<AnalyzerComponentInputs> implements AnalyzerComponentOutputs {
	constructor(entity: ADKEntity, options: AnalyzerComponentInputs) {
		super(entity, options.LogicalId, "AWS::AccessAnalyzer::Analyzer", options);
	}
	public readonly Arn: string;
}
export interface AnalyzerComponentOutputs {
	readonly Arn: string;
}
export interface AnalyzerComponentInputs {
	readonly Type: string;
	readonly AnalyzerName?: string | undefined;
	readonly ArchiveRules?: ArchiveRule[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ArchiveRule {
	readonly Filter: Filter[];
	readonly RuleName: string;
}
export interface Filter {
	readonly Contains?: string[] | undefined;
	readonly Eq?: string[] | undefined;
	readonly Exists?: boolean | undefined;
	readonly Neq?: string[] | undefined;
	readonly Property: string;
}
export default {
	Analyzer: Analyzer,
};
