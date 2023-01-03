import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Connection extends CfnResource<ConnectionComponentInputs> implements ConnectionComponentOutputs {
	constructor(entity: ADKEntity, options: ConnectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeStarConnections::Connection", options);
	}
	public readonly ConnectionArn: string;
	public readonly ConnectionStatus: string;
	public readonly OwnerAccountId: string;
}
export interface ConnectionComponentOutputs {
	readonly ConnectionArn: string;
	readonly ConnectionStatus: string;
	readonly OwnerAccountId: string;
}
export interface ConnectionComponentInputs {
	readonly ConnectionName: string;
	readonly HostArn?: (string | undefined) | undefined;
	readonly ProviderType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Connection: Connection,
};
