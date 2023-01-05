import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Certificate extends CfnResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::ACMPCA::Certificate", options);
	}
	public readonly Arn: string;
	public readonly Certificate: string;
}
export interface CertificateComponentOutputs {
	readonly Arn: string;
	readonly Certificate: string;
}
export interface CertificateComponentInputs {
	readonly CertificateAuthorityArn: string;
	readonly CertificateSigningRequest: string;
	readonly SigningAlgorithm: string;
	readonly Validity: Validity;
	readonly ApiPassthrough?: ApiPassthrough | undefined;
	readonly TemplateArn?: string | undefined;
	readonly ValidityNotBefore?: Validity | undefined;
	readonly LogicalId: string;
}
export class CertificateAuthority
	extends CfnResource<CertificateAuthorityComponentInputs>
	implements CertificateAuthorityComponentOutputs
{
	constructor(entity: ADKEntity, options: CertificateAuthorityComponentInputs) {
		super(entity, options.LogicalId, "AWS::ACMPCA::CertificateAuthority", options);
	}
	public readonly Arn: string;
	public readonly CertificateSigningRequest: string;
}
export interface CertificateAuthorityComponentOutputs {
	readonly Arn: string;
	readonly CertificateSigningRequest: string;
}
export interface CertificateAuthorityComponentInputs {
	readonly KeyAlgorithm: string;
	readonly SigningAlgorithm: string;
	readonly Subject: Subject;
	readonly Type: string;
	readonly CsrExtensions?: CsrExtensions | undefined;
	readonly KeyStorageSecurityStandard?: string | undefined;
	readonly RevocationConfiguration?: RevocationConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UsageMode?: string | undefined;
	readonly LogicalId: string;
}
export class CertificateAuthorityActivation
	extends CfnResource<CertificateAuthorityActivationComponentInputs>
	implements CertificateAuthorityActivationComponentOutputs
{
	constructor(entity: ADKEntity, options: CertificateAuthorityActivationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ACMPCA::CertificateAuthorityActivation", options);
	}
	public readonly CompleteCertificateChain: string;
}
export interface CertificateAuthorityActivationComponentOutputs {
	readonly CompleteCertificateChain: string;
}
export interface CertificateAuthorityActivationComponentInputs {
	readonly Certificate: string;
	readonly CertificateAuthorityArn: string;
	readonly CertificateChain?: string | undefined;
	readonly Status?: string | undefined;
	readonly LogicalId: string;
}
export class Permission extends CfnResource<PermissionComponentInputs> implements PermissionComponentOutputs {
	constructor(entity: ADKEntity, options: PermissionComponentInputs) {
		super(entity, options.LogicalId, "AWS::ACMPCA::Permission", options);
	}
}
export interface PermissionComponentOutputs {}
export interface PermissionComponentInputs {
	readonly Actions: string[];
	readonly CertificateAuthorityArn: string;
	readonly Principal: string;
	readonly SourceAccount?: string | undefined;
	readonly LogicalId: string;
}
export interface ApiPassthrough {
	readonly Extensions?: Extensions | undefined;
	readonly Subject?: Subject | undefined;
}
export interface CustomAttribute {
	readonly ObjectIdentifier: string;
	readonly Value: string;
}
export interface CustomExtension {
	readonly Critical?: boolean | undefined;
	readonly ObjectIdentifier: string;
	readonly Value: string;
}
export interface EdiPartyName {
	readonly NameAssigner: string;
	readonly PartyName: string;
}
export interface ExtendedKeyUsage {
	readonly ExtendedKeyUsageObjectIdentifier?: string | undefined;
	readonly ExtendedKeyUsageType?: string | undefined;
}
export interface Extensions {
	readonly CertificatePolicies?: PolicyInformation[] | undefined;
	readonly CustomExtensions?: CustomExtension[] | undefined;
	readonly ExtendedKeyUsage?: ExtendedKeyUsage[] | undefined;
	readonly KeyUsage?: KeyUsage | undefined;
	readonly SubjectAlternativeNames?: GeneralName[] | undefined;
}
export interface GeneralName {
	readonly DirectoryName?: Subject | undefined;
	readonly DnsName?: string | undefined;
	readonly EdiPartyName?: EdiPartyName | undefined;
	readonly IpAddress?: string | undefined;
	readonly OtherName?: OtherName | undefined;
	readonly RegisteredId?: string | undefined;
	readonly Rfc822Name?: string | undefined;
	readonly UniformResourceIdentifier?: string | undefined;
}
export interface KeyUsage {
	readonly CRLSign?: boolean | undefined;
	readonly DataEncipherment?: boolean | undefined;
	readonly DecipherOnly?: boolean | undefined;
	readonly DigitalSignature?: boolean | undefined;
	readonly EncipherOnly?: boolean | undefined;
	readonly KeyAgreement?: boolean | undefined;
	readonly KeyCertSign?: boolean | undefined;
	readonly KeyEncipherment?: boolean | undefined;
	readonly NonRepudiation?: boolean | undefined;
}
export interface OtherName {
	readonly TypeId: string;
	readonly Value: string;
}
export interface PolicyInformation {
	readonly CertPolicyId: string;
	readonly PolicyQualifiers?: PolicyQualifierInfo[] | undefined;
}
export interface PolicyQualifierInfo {
	readonly PolicyQualifierId: string;
	readonly Qualifier: Qualifier;
}
export interface Qualifier {
	readonly CpsUri: string;
}
export interface Subject {
	readonly CommonName?: string | undefined;
	readonly Country?: string | undefined;
	readonly CustomAttributes?: CustomAttribute[] | undefined;
	readonly DistinguishedNameQualifier?: string | undefined;
	readonly GenerationQualifier?: string | undefined;
	readonly GivenName?: string | undefined;
	readonly Initials?: string | undefined;
	readonly Locality?: string | undefined;
	readonly Organization?: string | undefined;
	readonly OrganizationalUnit?: string | undefined;
	readonly Pseudonym?: string | undefined;
	readonly SerialNumber?: string | undefined;
	readonly State?: string | undefined;
	readonly Surname?: string | undefined;
	readonly Title?: string | undefined;
}
export interface Validity {
	readonly Type: string;
	readonly Value: number;
}
export interface AccessDescription {
	readonly AccessLocation: GeneralName;
	readonly AccessMethod: AccessMethod;
}
export interface AccessMethod {
	readonly AccessMethodType?: string | undefined;
	readonly CustomObjectIdentifier?: string | undefined;
}
export interface CrlConfiguration {
	readonly CustomCname?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly ExpirationInDays?: number | undefined;
	readonly S3BucketName?: string | undefined;
	readonly S3ObjectAcl?: string | undefined;
}
export interface CsrExtensions {
	readonly KeyUsage?: KeyUsage | undefined;
	readonly SubjectInformationAccess?: AccessDescription[] | undefined;
}
export interface OcspConfiguration {
	readonly Enabled?: boolean | undefined;
	readonly OcspCustomCname?: string | undefined;
}
export interface RevocationConfiguration {
	readonly CrlConfiguration?: CrlConfiguration | undefined;
	readonly OcspConfiguration?: OcspConfiguration | undefined;
}
export default {
	Certificate: Certificate,
	CertificateAuthority: CertificateAuthority,
	CertificateAuthorityActivation: CertificateAuthorityActivation,
	Permission: Permission,
};
