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
	readonly BlockPublicPolicy?: (boolean | undefined) | undefined;
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
	readonly HostedRotationLambda?: (HostedRotationLambda | undefined) | undefined;
	readonly RotateImmediatelyOnUpdate?: (boolean | undefined) | undefined;
	readonly RotationLambdaARN?: (string | undefined) | undefined;
	readonly RotationRules?: (RotationRules | undefined) | undefined;
	readonly LogicalId: string;
}
export class Secret extends CfnResource<SecretComponentInputs> implements SecretComponentOutputs {
	constructor(entity: ADKEntity, options: SecretComponentInputs) {
		super(entity, options.LogicalId, "AWS::SecretsManager::Secret", options);
	}
}
export interface SecretComponentOutputs {}
export interface SecretComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly GenerateSecretString?: (GenerateSecretString | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ReplicaRegions?: (ReplicaRegion[] | undefined) | undefined;
	readonly SecretString?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly ExcludeCharacters?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly MasterSecretArn?: (string | undefined) | undefined;
	readonly MasterSecretKmsKeyArn?: (string | undefined) | undefined;
	readonly RotationLambdaName?: (string | undefined) | undefined;
	readonly RotationType: string;
	readonly SuperuserSecretArn?: (string | undefined) | undefined;
	readonly SuperuserSecretKmsKeyArn?: (string | undefined) | undefined;
	readonly VpcSecurityGroupIds?: (string | undefined) | undefined;
	readonly VpcSubnetIds?: (string | undefined) | undefined;
}
export interface RotationRules {
	readonly AutomaticallyAfterDays?: (number | undefined) | undefined;
	readonly Duration?: (string | undefined) | undefined;
	readonly ScheduleExpression?: (string | undefined) | undefined;
}
export interface GenerateSecretString {
	readonly ExcludeCharacters?: (string | undefined) | undefined;
	readonly ExcludeLowercase?: (boolean | undefined) | undefined;
	readonly ExcludeNumbers?: (boolean | undefined) | undefined;
	readonly ExcludePunctuation?: (boolean | undefined) | undefined;
	readonly ExcludeUppercase?: (boolean | undefined) | undefined;
	readonly GenerateStringKey?: (string | undefined) | undefined;
	readonly IncludeSpace?: (boolean | undefined) | undefined;
	readonly PasswordLength?: (number | undefined) | undefined;
	readonly RequireEachIncludedType?: (boolean | undefined) | undefined;
	readonly SecretStringTemplate?: (string | undefined) | undefined;
}
export interface ReplicaRegion {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly Region: string;
}
export default {
	ResourcePolicy: ResourcePolicy,
	RotationSchedule: RotationSchedule,
	Secret: Secret,
	SecretTargetAttachment: SecretTargetAttachment,
};
