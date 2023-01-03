import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Agreement extends CfnResource<AgreementComponentInputs> implements AgreementComponentOutputs {
	constructor(entity: ADKEntity, options: AgreementComponentInputs) {
		super(entity, options.LogicalId, "AWS::Transfer::Agreement", options);
	}
	public readonly AgreementId: string;
	public readonly Arn: string;
}
export interface AgreementComponentOutputs {
	readonly AgreementId: string;
	readonly Arn: string;
}
export interface AgreementComponentInputs {
	readonly AccessRole: string;
	readonly BaseDirectory: string;
	readonly LocalProfileId: string;
	readonly PartnerProfileId: string;
	readonly ServerId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Certificate extends CfnResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Transfer::Certificate", options);
	}
	public readonly Arn: string;
	public readonly CertificateId: string;
	public readonly NotAfterDate: string;
	public readonly NotBeforeDate: string;
	public readonly Serial: string;
	public readonly Status: string;
	public readonly Type: string;
}
export interface CertificateComponentOutputs {
	readonly Arn: string;
	readonly CertificateId: string;
	readonly NotAfterDate: string;
	readonly NotBeforeDate: string;
	readonly Serial: string;
	readonly Status: string;
	readonly Type: string;
}
export interface CertificateComponentInputs {
	readonly Certificate: string;
	readonly Usage: string;
	readonly ActiveDate?: (string | undefined) | undefined;
	readonly CertificateChain?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly InactiveDate?: (string | undefined) | undefined;
	readonly PrivateKey?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Connector extends CfnResource<ConnectorComponentInputs> implements ConnectorComponentOutputs {
	constructor(entity: ADKEntity, options: ConnectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::Transfer::Connector", options);
	}
	public readonly Arn: string;
	public readonly ConnectorId: string;
}
export interface ConnectorComponentOutputs {
	readonly Arn: string;
	readonly ConnectorId: string;
}
export interface ConnectorComponentInputs {
	readonly AccessRole: string;
	readonly As2Config: As2Config;
	readonly Url: string;
	readonly LoggingRole?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Profile extends CfnResource<ProfileComponentInputs> implements ProfileComponentOutputs {
	constructor(entity: ADKEntity, options: ProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::Transfer::Profile", options);
	}
	public readonly Arn: string;
	public readonly ProfileId: string;
}
export interface ProfileComponentOutputs {
	readonly Arn: string;
	readonly ProfileId: string;
}
export interface ProfileComponentInputs {
	readonly As2Id: string;
	readonly ProfileType: string;
	readonly CertificateIds?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Server extends CfnResource<ServerComponentInputs> implements ServerComponentOutputs {
	constructor(entity: ADKEntity, options: ServerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Transfer::Server", options);
	}
	public readonly Arn: string;
	public readonly ServerId: string;
}
export interface ServerComponentOutputs {
	readonly Arn: string;
	readonly ServerId: string;
}
export interface ServerComponentInputs {
	readonly Certificate?: (string | undefined) | undefined;
	readonly Domain?: (string | undefined) | undefined;
	readonly EndpointDetails?: (EndpointDetails | undefined) | undefined;
	readonly EndpointType?: (string | undefined) | undefined;
	readonly IdentityProviderDetails?: (IdentityProviderDetails | undefined) | undefined;
	readonly IdentityProviderType?: (string | undefined) | undefined;
	readonly LoggingRole?: (string | undefined) | undefined;
	readonly PostAuthenticationLoginBanner?: (string | undefined) | undefined;
	readonly PreAuthenticationLoginBanner?: (string | undefined) | undefined;
	readonly ProtocolDetails?: (ProtocolDetails | undefined) | undefined;
	readonly Protocols?: (string[] | undefined) | undefined;
	readonly SecurityPolicyName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly WorkflowDetails?: (WorkflowDetails | undefined) | undefined;
	readonly LogicalId: string;
}
export class User extends CfnResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "AWS::Transfer::User", options);
	}
	public readonly Arn: string;
	public readonly ServerId: string;
	public readonly UserName: string;
}
export interface UserComponentOutputs {
	readonly Arn: string;
	readonly ServerId: string;
	readonly UserName: string;
}
export interface UserComponentInputs {
	readonly Role: string;
	readonly ServerId: string;
	readonly UserName: string;
	readonly HomeDirectory?: (string | undefined) | undefined;
	readonly HomeDirectoryMappings?: (HomeDirectoryMapEntry[] | undefined) | undefined;
	readonly HomeDirectoryType?: (string | undefined) | undefined;
	readonly Policy?: (string | undefined) | undefined;
	readonly PosixProfile?: (PosixProfile | undefined) | undefined;
	readonly SshPublicKeys?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Workflow extends CfnResource<WorkflowComponentInputs> implements WorkflowComponentOutputs {
	constructor(entity: ADKEntity, options: WorkflowComponentInputs) {
		super(entity, options.LogicalId, "AWS::Transfer::Workflow", options);
	}
	public readonly Arn: string;
	public readonly WorkflowId: string;
}
export interface WorkflowComponentOutputs {
	readonly Arn: string;
	readonly WorkflowId: string;
}
export interface WorkflowComponentInputs {
	readonly Steps: WorkflowStep[];
	readonly Description?: (string | undefined) | undefined;
	readonly OnExceptionSteps?: (WorkflowStep[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface As2Config {
	readonly Compression?: (string | undefined) | undefined;
	readonly EncryptionAlgorithm?: (string | undefined) | undefined;
	readonly LocalProfileId?: (string | undefined) | undefined;
	readonly MdnResponse?: (string | undefined) | undefined;
	readonly MdnSigningAlgorithm?: (string | undefined) | undefined;
	readonly MessageSubject?: (string | undefined) | undefined;
	readonly PartnerProfileId?: (string | undefined) | undefined;
	readonly SigningAlgorithm?: (string | undefined) | undefined;
}
export interface EndpointDetails {
	readonly AddressAllocationIds?: (string[] | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly VpcEndpointId?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
}
export interface IdentityProviderDetails {
	readonly DirectoryId?: (string | undefined) | undefined;
	readonly Function?: (string | undefined) | undefined;
	readonly InvocationRole?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface ProtocolDetails {
	readonly As2Transports?: (string[] | undefined) | undefined;
	readonly PassiveIp?: (string | undefined) | undefined;
	readonly SetStatOption?: (string | undefined) | undefined;
	readonly TlsSessionResumptionMode?: (string | undefined) | undefined;
}
export interface WorkflowDetail {
	readonly ExecutionRole: string;
	readonly WorkflowId: string;
}
export interface WorkflowDetails {
	readonly OnPartialUpload?: (WorkflowDetail[] | undefined) | undefined;
	readonly OnUpload?: (WorkflowDetail[] | undefined) | undefined;
}
export interface HomeDirectoryMapEntry {
	readonly Entry: string;
	readonly Target: string;
}
export interface PosixProfile {
	readonly Gid: number;
	readonly SecondaryGids?: (number[] | undefined) | undefined;
	readonly Uid: number;
}
export interface CopyStepDetails {
	readonly DestinationFileLocation?: (InputFileLocation | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly OverwriteExisting?: (string | undefined) | undefined;
	readonly SourceFileLocation?: (string | undefined) | undefined;
}
export interface CustomStepDetails {
	readonly Name?: (string | undefined) | undefined;
	readonly SourceFileLocation?: (string | undefined) | undefined;
	readonly Target?: (string | undefined) | undefined;
	readonly TimeoutSeconds?: (number | undefined) | undefined;
}
export interface DeleteStepDetails {
	readonly Name?: (string | undefined) | undefined;
	readonly SourceFileLocation?: (string | undefined) | undefined;
}
export interface InputFileLocation {
	readonly S3FileLocation?: (S3InputFileLocation | undefined) | undefined;
}
export interface S3InputFileLocation {
	readonly Bucket?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface S3Tag {
	readonly Key: string;
	readonly Value: string;
}
export interface TagStepDetails {
	readonly Name?: (string | undefined) | undefined;
	readonly SourceFileLocation?: (string | undefined) | undefined;
	readonly Tags?: (S3Tag[] | undefined) | undefined;
}
export interface WorkflowStep {
	readonly CopyStepDetails?: (CopyStepDetails | undefined) | undefined;
	readonly CustomStepDetails?: (CustomStepDetails | undefined) | undefined;
	readonly DeleteStepDetails?: (DeleteStepDetails | undefined) | undefined;
	readonly TagStepDetails?: (TagStepDetails | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export default {
	Agreement: Agreement,
	Certificate: Certificate,
	Connector: Connector,
	Profile: Profile,
	Server: Server,
	User: User,
	Workflow: Workflow,
};
