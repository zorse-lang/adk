import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ProfilePermission
	extends CfnResource<ProfilePermissionComponentInputs>
	implements ProfilePermissionComponentOutputs
{
	constructor(entity: ADKEntity, options: ProfilePermissionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Signer::ProfilePermission", options);
	}
}
export interface ProfilePermissionComponentOutputs {}
export interface ProfilePermissionComponentInputs {
	readonly Action: string;
	readonly Principal: string;
	readonly ProfileName: string;
	readonly StatementId: string;
	readonly ProfileVersion?: string | undefined;
	readonly LogicalId: string;
}
export class SigningProfile extends CfnResource<SigningProfileComponentInputs> implements SigningProfileComponentOutputs {
	constructor(entity: ADKEntity, options: SigningProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::Signer::SigningProfile", options);
	}
	public readonly Arn: string;
	public readonly ProfileName: string;
	public readonly ProfileVersion: string;
	public readonly ProfileVersionArn: string;
}
export interface SigningProfileComponentOutputs {
	readonly Arn: string;
	readonly ProfileName: string;
	readonly ProfileVersion: string;
	readonly ProfileVersionArn: string;
}
export interface SigningProfileComponentInputs {
	readonly PlatformId: string;
	readonly SignatureValidityPeriod?: SignatureValidityPeriod | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface SignatureValidityPeriod {
	readonly Type?: string | undefined;
	readonly Value?: number | undefined;
}
export default {
	ProfilePermission: ProfilePermission,
	SigningProfile: SigningProfile,
};
