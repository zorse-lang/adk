import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Skill extends CfnResource<SkillComponentInputs> implements SkillComponentOutputs {
	constructor(entity: ADKEntity, options: SkillComponentInputs) {
		super(entity, options.LogicalId, "Alexa::ASK::Skill", options);
	}
}
export interface SkillComponentOutputs {}
export interface SkillComponentInputs {
	readonly AuthenticationConfiguration: AuthenticationConfiguration;
	readonly SkillPackage: SkillPackage;
	readonly VendorId: string;
	readonly LogicalId: string;
}
export interface AuthenticationConfiguration {
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly RefreshToken: string;
}
export interface Overrides {
	readonly Manifest?: any | undefined;
}
export interface SkillPackage {
	readonly Overrides?: Overrides | undefined;
	readonly S3Bucket: string;
	readonly S3BucketRole?: string | undefined;
	readonly S3Key: string;
	readonly S3ObjectVersion?: string | undefined;
}
export default {
	Skill: Skill,
};
