import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourcePolicy extends CfnResource<ResourcePolicyComponentInputs> implements ResourcePolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::SecretsManager::ResourcePolicy", options);
	}
}
export interface ResourcePolicyComponentOutputs {}
export interface ResourcePolicyComponentInputs {
	readonly ResourcePolicy: any;
	readonly SecretId: string;
	readonly BlockPublicPolicy?: boolean | undefined;
	readonly LogicalId: string;
}
export class RotationSchedule
	extends CfnResource<RotationScheduleComponentInputs>
	implements RotationScheduleComponentOutputs
{
	constructor(entity: ADKEntity, options: RotationScheduleComponentInputs) {
		super(entity, options.LogicalId, "AWS::SecretsManager::RotationSchedule", options);
	}
}
export interface RotationScheduleComponentOutputs {}
export interface RotationScheduleComponentInputs {
	readonly SecretId: string;
	readonly HostedRotationLambda?: HostedRotationLambda | undefined;
	readonly RotateImmediatelyOnUpdate?: boolean | undefined;
	readonly RotationLambdaARN?: string | undefined;
	readonly RotationRules?: RotationRules | undefined;
	readonly LogicalId: string;
}
export class Secret extends CfnResource<SecretComponentInputs> implements SecretComponentOutputs {
	constructor(entity: ADKEntity, options: SecretComponentInputs) {
		super(entity, options.LogicalId, "AWS::SecretsManager::Secret", options);
	}
}
export interface SecretComponentOutputs {}
export interface SecretComponentInputs {
	readonly Description?: string | undefined;
	readonly GenerateSecretString?: GenerateSecretString | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly Name?: string | undefined;
	readonly ReplicaRegions?: ReplicaRegion[] | undefined;
	readonly SecretString?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class SecretTargetAttachment
	extends CfnResource<SecretTargetAttachmentComponentInputs>
	implements SecretTargetAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: SecretTargetAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::SecretsManager::SecretTargetAttachment", options);
	}
}
export interface SecretTargetAttachmentComponentOutputs {}
export interface SecretTargetAttachmentComponentInputs {
	readonly SecretId: string;
	readonly TargetId: string;
	readonly TargetType: string;
	readonly LogicalId: string;
}
export interface HostedRotationLambda {
	readonly ExcludeCharacters?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
	readonly MasterSecretArn?: string | undefined;
	readonly MasterSecretKmsKeyArn?: string | undefined;
	readonly RotationLambdaName?: string | undefined;
	readonly RotationType: string;
	readonly SuperuserSecretArn?: string | undefined;
	readonly SuperuserSecretKmsKeyArn?: string | undefined;
	readonly VpcSecurityGroupIds?: string | undefined;
	readonly VpcSubnetIds?: string | undefined;
}
export interface RotationRules {
	readonly AutomaticallyAfterDays?: number | undefined;
	readonly Duration?: string | undefined;
	readonly ScheduleExpression?: string | undefined;
}
export interface GenerateSecretString {
	readonly ExcludeCharacters?: string | undefined;
	readonly ExcludeLowercase?: boolean | undefined;
	readonly ExcludeNumbers?: boolean | undefined;
	readonly ExcludePunctuation?: boolean | undefined;
	readonly ExcludeUppercase?: boolean | undefined;
	readonly GenerateStringKey?: string | undefined;
	readonly IncludeSpace?: boolean | undefined;
	readonly PasswordLength?: number | undefined;
	readonly RequireEachIncludedType?: boolean | undefined;
	readonly SecretStringTemplate?: string | undefined;
}
export interface ReplicaRegion {
	readonly KmsKeyId?: string | undefined;
	readonly Region: string;
}
export default {
	ResourcePolicy: ResourcePolicy,
	RotationSchedule: RotationSchedule,
	Secret: Secret,
	SecretTargetAttachment: SecretTargetAttachment,
};
