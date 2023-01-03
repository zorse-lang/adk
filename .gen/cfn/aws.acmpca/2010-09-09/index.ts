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
	readonly ApiPassthrough?: (ApiPassthrough | undefined) | undefined;
	readonly TemplateArn?: (string | undefined) | undefined;
	readonly ValidityNotBefore?: (Validity | undefined) | undefined;
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
	readonly CsrExtensions?: (CsrExtensions | undefined) | undefined;
	readonly KeyStorageSecurityStandard?: (string | undefined) | undefined;
	readonly RevocationConfiguration?: (RevocationConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UsageMode?: (string | undefined) | undefined;
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
	readonly CertificateChain?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
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
	readonly SourceAccount?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ApiPassthrough {
	readonly Extensions?: (Extensions | undefined) | undefined;
	readonly Subject?: (Subject | undefined) | undefined;
}
export interface CustomAttribute {
	readonly ObjectIdentifier: string;
	readonly Value: string;
}
export interface CustomExtension {
	readonly Critical?: (boolean | undefined) | undefined;
	readonly ObjectIdentifier: string;
	readonly Value: string;
}
export interface EdiPartyName {
	readonly NameAssigner: string;
	readonly PartyName: string;
}
export interface ExtendedKeyUsage {
	readonly ExtendedKeyUsageObjectIdentifier?: (string | undefined) | undefined;
	readonly ExtendedKeyUsageType?: (string | undefined) | undefined;
}
export interface Extensions {
	readonly CertificatePolicies?: (PolicyInformation[] | undefined) | undefined;
	readonly CustomExtensions?: (CustomExtension[] | undefined) | undefined;
	readonly ExtendedKeyUsage?: (ExtendedKeyUsage[] | undefined) | undefined;
	readonly KeyUsage?: (KeyUsage | undefined) | undefined;
	readonly SubjectAlternativeNames?: (GeneralName[] | undefined) | undefined;
}
export interface GeneralName {
	readonly DirectoryName?: (Subject | undefined) | undefined;
	readonly DnsName?: (string | undefined) | undefined;
	readonly EdiPartyName?: (EdiPartyName | undefined) | undefined;
	readonly IpAddress?: (string | undefined) | undefined;
	readonly OtherName?: (OtherName | undefined) | undefined;
	readonly RegisteredId?: (string | undefined) | undefined;
	readonly Rfc822Name?: (string | undefined) | undefined;
	readonly UniformResourceIdentifier?: (string | undefined) | undefined;
}
export interface KeyUsage {
	readonly CRLSign?: (boolean | undefined) | undefined;
	readonly DataEncipherment?: (boolean | undefined) | undefined;
	readonly DecipherOnly?: (boolean | undefined) | undefined;
	readonly DigitalSignature?: (boolean | undefined) | undefined;
	readonly EncipherOnly?: (boolean | undefined) | undefined;
	readonly KeyAgreement?: (boolean | undefined) | undefined;
	readonly KeyCertSign?: (boolean | undefined) | undefined;
	readonly KeyEncipherment?: (boolean | undefined) | undefined;
	readonly NonRepudiation?: (boolean | undefined) | undefined;
}
export interface OtherName {
	readonly TypeId: string;
	readonly Value: string;
}
export interface PolicyInformation {
	readonly CertPolicyId: string;
	readonly PolicyQualifiers?: (PolicyQualifierInfo[] | undefined) | undefined;
}
export interface PolicyQualifierInfo {
	readonly PolicyQualifierId: string;
	readonly Qualifier: Qualifier;
}
export interface Qualifier {
	readonly CpsUri: string;
}
export interface Subject {
	readonly CommonName?: (string | undefined) | undefined;
	readonly Country?: (string | undefined) | undefined;
	readonly CustomAttributes?: (CustomAttribute[] | undefined) | undefined;
	readonly DistinguishedNameQualifier?: (string | undefined) | undefined;
	readonly GenerationQualifier?: (string | undefined) | undefined;
	readonly GivenName?: (string | undefined) | undefined;
	readonly Initials?: (string | undefined) | undefined;
	readonly Locality?: (string | undefined) | undefined;
	readonly Organization?: (string | undefined) | undefined;
	readonly OrganizationalUnit?: (string | undefined) | undefined;
	readonly Pseudonym?: (string | undefined) | undefined;
	readonly SerialNumber?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly Surname?: (string | undefined) | undefined;
	readonly Title?: (string | undefined) | undefined;
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
	readonly AccessMethodType?: (string | undefined) | undefined;
	readonly CustomObjectIdentifier?: (string | undefined) | undefined;
}
export interface CrlConfiguration {
	readonly CustomCname?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly ExpirationInDays?: (number | undefined) | undefined;
	readonly S3BucketName?: (string | undefined) | undefined;
	readonly S3ObjectAcl?: (string | undefined) | undefined;
}
export interface CsrExtensions {
	readonly KeyUsage?: (KeyUsage | undefined) | undefined;
	readonly SubjectInformationAccess?: (AccessDescription[] | undefined) | undefined;
}
export interface OcspConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly OcspCustomCname?: (string | undefined) | undefined;
}
export interface RevocationConfiguration {
	readonly CrlConfiguration?: (CrlConfiguration | undefined) | undefined;
	readonly OcspConfiguration?: (OcspConfiguration | undefined) | undefined;
}
export default {
	Certificate: Certificate,
	CertificateAuthority: CertificateAuthority,
	CertificateAuthorityActivation: CertificateAuthorityActivation,
	Permission: Permission,
};
