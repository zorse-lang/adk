import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CRL extends CfnResource<CRLComponentInputs> implements CRLComponentOutputs {
	constructor(entity: ADKEntity, options: CRLComponentInputs) {
		super(entity, options.LogicalId, "AWS::RolesAnywhere::CRL", options);
	}
	public readonly CrlId: string;
}
export interface CRLComponentOutputs {
	readonly CrlId: string;
}
export interface CRLComponentInputs {
	readonly CrlData?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TrustAnchorArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Profile extends CfnResource<ProfileComponentInputs> implements ProfileComponentOutputs {
	constructor(entity: ADKEntity, options: ProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::RolesAnywhere::Profile", options);
	}
	public readonly ProfileArn: string;
	public readonly ProfileId: string;
}
export interface ProfileComponentOutputs {
	readonly ProfileArn: string;
	readonly ProfileId: string;
}
export interface ProfileComponentInputs {
	readonly DurationSeconds?: (number | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly ManagedPolicyArns?: (string[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RequireInstanceProperties?: (boolean | undefined) | undefined;
	readonly RoleArns?: (string[] | undefined) | undefined;
	readonly SessionPolicy?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class TrustAnchor extends CfnResource<TrustAnchorComponentInputs> implements TrustAnchorComponentOutputs {
	constructor(entity: ADKEntity, options: TrustAnchorComponentInputs) {
		super(entity, options.LogicalId, "AWS::RolesAnywhere::TrustAnchor", options);
	}
	public readonly TrustAnchorArn: string;
	public readonly TrustAnchorId: string;
}
export interface TrustAnchorComponentOutputs {
	readonly TrustAnchorArn: string;
	readonly TrustAnchorId: string;
}
export interface TrustAnchorComponentInputs {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Source?: (Source | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Source {
	readonly SourceData?: (SourceData | undefined) | undefined;
	readonly SourceType?: (string | undefined) | undefined;
}
export interface SourceData {
	readonly AcmPcaArn?: (string | undefined) | undefined;
	readonly X509CertificateData?: (string | undefined) | undefined;
}
export default {
	CRL: CRL,
	Profile: Profile,
	TrustAnchor: TrustAnchor,
};
