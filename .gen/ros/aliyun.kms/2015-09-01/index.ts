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
	readonly Description?: string | undefined;
	readonly Enable?: boolean | undefined;
	readonly EnableAutomaticRotation?: boolean | undefined;
	readonly KeySpec?: string | undefined;
	readonly KeyUsage?: string | undefined;
	readonly PendingWindowInDays?: number | undefined;
	readonly ProtectionLevel?: string | undefined;
	readonly RotationInterval?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly EncryptionKeyId?: string | undefined;
	readonly ForceDeleteWithoutRecovery?: boolean | undefined;
	readonly RecoveryWindowInDays?: number | undefined;
	readonly SecretDataType?: string | undefined;
	readonly VersionStages?: string[] | undefined;
	readonly LogicalId: string;
}
export default {
	Alias: Alias,
	Key: Key,
	Secret: Secret,
};
