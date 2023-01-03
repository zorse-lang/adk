import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Alias extends RosResource<AliasComponentInputs> implements AliasComponentOutputs {
	constructor(entity: ADKEntity, options: AliasComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::KMS::Alias", options);
	}
}
export interface AliasComponentOutputs {}
export interface AliasComponentInputs {
	readonly AliasName: string;
	readonly KeyId: string;
	readonly LogicalId: string;
}
export class Key extends RosResource<KeyComponentInputs> implements KeyComponentOutputs {
	constructor(entity: ADKEntity, options: KeyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::KMS::Key", options);
	}
	public readonly KeyId: any;
}
export interface KeyComponentOutputs {
	readonly KeyId: any;
}
export interface KeyComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly Enable?: (boolean | undefined) | undefined;
	readonly EnableAutomaticRotation?: (boolean | undefined) | undefined;
	readonly KeySpec?: (string | undefined) | undefined;
	readonly KeyUsage?: (string | undefined) | undefined;
	readonly PendingWindowInDays?: (number | undefined) | undefined;
	readonly ProtectionLevel?: (string | undefined) | undefined;
	readonly RotationInterval?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Secret extends RosResource<SecretComponentInputs> implements SecretComponentOutputs {
	constructor(entity: ADKEntity, options: SecretComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::KMS::Secret", options);
	}
	public readonly Arn: any;
}
export interface SecretComponentOutputs {
	readonly Arn: any;
}
export interface SecretComponentInputs {
	readonly SecretData: string;
	readonly SecretName: any | string;
	readonly VersionId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EncryptionKeyId?: (string | undefined) | undefined;
	readonly ForceDeleteWithoutRecovery?: (boolean | undefined) | undefined;
	readonly RecoveryWindowInDays?: (number | undefined) | undefined;
	readonly SecretDataType?: (string | undefined) | undefined;
	readonly VersionStages?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Alias: Alias,
	Key: Key,
	Secret: Secret,
};
