import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Ledger extends CfnResource<LedgerComponentInputs> implements LedgerComponentOutputs {
	constructor(entity: ADKEntity, options: LedgerComponentInputs) {
		super(entity, options.LogicalId, "AWS::QLDB::Ledger", options);
	}
}
export interface LedgerComponentOutputs {}
export interface LedgerComponentInputs {
	readonly PermissionsMode: string;
	readonly DeletionProtection?: boolean | undefined;
	readonly KmsKey?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Stream extends CfnResource<StreamComponentInputs> implements StreamComponentOutputs {
	constructor(entity: ADKEntity, options: StreamComponentInputs) {
		super(entity, options.LogicalId, "AWS::QLDB::Stream", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface StreamComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface StreamComponentInputs {
	readonly InclusiveStartTime: string;
	readonly KinesisConfiguration: KinesisConfiguration;
	readonly LedgerName: string;
	readonly RoleArn: string;
	readonly StreamName: string;
	readonly ExclusiveEndTime?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface KinesisConfiguration {
	readonly AggregationEnabled?: boolean | undefined;
	readonly StreamArn?: string | undefined;
}
export default {
	Ledger: Ledger,
	Stream: Stream,
};
