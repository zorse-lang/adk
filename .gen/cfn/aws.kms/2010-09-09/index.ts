import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Alias extends CfnResource<AliasComponentInputs> implements AliasComponentOutputs {
	constructor(entity: ADKEntity, options: AliasComponentInputs) {
		super(entity, options.LogicalId, "AWS::KMS::Alias", options);
	}
}
export interface AliasComponentOutputs {}
export interface AliasComponentInputs {
	readonly AliasName: string;
	readonly TargetKeyId: string;
	readonly LogicalId: string;
}
export class Key extends CfnResource<KeyComponentInputs> implements KeyComponentOutputs {
	constructor(entity: ADKEntity, options: KeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::KMS::Key", options);
	}
	public readonly Arn: string;
	public readonly KeyId: string;
}
export interface KeyComponentOutputs {
	readonly Arn: string;
	readonly KeyId: string;
}
export interface KeyComponentInputs {
	readonly KeyPolicy: any;
	readonly Description?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly EnableKeyRotation?: (boolean | undefined) | undefined;
	readonly KeySpec?: (string | undefined) | undefined;
	readonly KeyUsage?: (string | undefined) | undefined;
	readonly MultiRegion?: (boolean | undefined) | undefined;
	readonly PendingWindowInDays?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ReplicaKey extends CfnResource<ReplicaKeyComponentInputs> implements ReplicaKeyComponentOutputs {
	constructor(entity: ADKEntity, options: ReplicaKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::KMS::ReplicaKey", options);
	}
	public readonly Arn: string;
	public readonly KeyId: string;
}
export interface ReplicaKeyComponentOutputs {
	readonly Arn: string;
	readonly KeyId: string;
}
export interface ReplicaKeyComponentInputs {
	readonly KeyPolicy: any;
	readonly PrimaryKeyArn: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly PendingWindowInDays?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Alias: Alias,
	Key: Key,
	ReplicaKey: ReplicaKey,
};
