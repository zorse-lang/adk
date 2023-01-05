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
	readonly Description?: string | undefined;
	readonly Status?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ActiveDate?: string | undefined;
	readonly CertificateChain?: string | undefined;
	readonly Description?: string | undefined;
	readonly InactiveDate?: string | undefined;
	readonly PrivateKey?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly LoggingRole?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CertificateIds?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Certificate?: string | undefined;
	readonly Domain?: string | undefined;
	readonly EndpointDetails?: EndpointDetails | undefined;
	readonly EndpointType?: string | undefined;
	readonly IdentityProviderDetails?: IdentityProviderDetails | undefined;
	readonly IdentityProviderType?: string | undefined;
	readonly LoggingRole?: string | undefined;
	readonly PostAuthenticationLoginBanner?: string | undefined;
	readonly PreAuthenticationLoginBanner?: string | undefined;
	readonly ProtocolDetails?: ProtocolDetails | undefined;
	readonly Protocols?: string[] | undefined;
	readonly SecurityPolicyName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly WorkflowDetails?: WorkflowDetails | undefined;
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
	readonly HomeDirectory?: string | undefined;
	readonly HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;
	readonly HomeDirectoryType?: string | undefined;
	readonly Policy?: string | undefined;
	readonly PosixProfile?: PosixProfile | undefined;
	readonly SshPublicKeys?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly OnExceptionSteps?: WorkflowStep[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface As2Config {
	readonly Compression?: string | undefined;
	readonly EncryptionAlgorithm?: string | undefined;
	readonly LocalProfileId?: string | undefined;
	readonly MdnResponse?: string | undefined;
	readonly MdnSigningAlgorithm?: string | undefined;
	readonly MessageSubject?: string | undefined;
	readonly PartnerProfileId?: string | undefined;
	readonly SigningAlgorithm?: string | undefined;
}
export interface EndpointDetails {
	readonly AddressAllocationIds?: string[] | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
	readonly VpcEndpointId?: string | undefined;
	readonly VpcId?: string | undefined;
}
export interface IdentityProviderDetails {
	readonly DirectoryId?: string | undefined;
	readonly Function?: string | undefined;
	readonly InvocationRole?: string | undefined;
	readonly Url?: string | undefined;
}
export interface ProtocolDetails {
	readonly As2Transports?: string[] | undefined;
	readonly PassiveIp?: string | undefined;
	readonly SetStatOption?: string | undefined;
	readonly TlsSessionResumptionMode?: string | undefined;
}
export interface WorkflowDetail {
	readonly ExecutionRole: string;
	readonly WorkflowId: string;
}
export interface WorkflowDetails {
	readonly OnPartialUpload?: WorkflowDetail[] | undefined;
	readonly OnUpload?: WorkflowDetail[] | undefined;
}
export interface HomeDirectoryMapEntry {
	readonly Entry: string;
	readonly Target: string;
}
export interface PosixProfile {
	readonly Gid: number;
	readonly SecondaryGids?: number[] | undefined;
	readonly Uid: number;
}
export interface CopyStepDetails {
	readonly DestinationFileLocation?: InputFileLocation | undefined;
	readonly Name?: string | undefined;
	readonly OverwriteExisting?: string | undefined;
	readonly SourceFileLocation?: string | undefined;
}
export interface CustomStepDetails {
	readonly Name?: string | undefined;
	readonly SourceFileLocation?: string | undefined;
	readonly Target?: string | undefined;
	readonly TimeoutSeconds?: number | undefined;
}
export interface DeleteStepDetails {
	readonly Name?: string | undefined;
	readonly SourceFileLocation?: string | undefined;
}
export interface InputFileLocation {
	readonly S3FileLocation?: S3InputFileLocation | undefined;
}
export interface S3InputFileLocation {
	readonly Bucket?: string | undefined;
	readonly Key?: string | undefined;
}
export interface S3Tag {
	readonly Key: string;
	readonly Value: string;
}
export interface TagStepDetails {
	readonly Name?: string | undefined;
	readonly SourceFileLocation?: string | undefined;
	readonly Tags?: S3Tag[] | undefined;
}
export interface WorkflowStep {
	readonly CopyStepDetails?: CopyStepDetails | undefined;
	readonly CustomStepDetails?: CustomStepDetails | undefined;
	readonly DeleteStepDetails?: DeleteStepDetails | undefined;
	readonly TagStepDetails?: TagStepDetails | undefined;
	readonly Type?: string | undefined;
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
