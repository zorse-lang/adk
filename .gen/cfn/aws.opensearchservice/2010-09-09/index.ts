import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpenSearchService::Domain", options);
	}
	public readonly Arn: string;
	public readonly DomainEndpoint: string;
	public readonly DomainEndpoints: Map<string, string>;
	public readonly Id: string;
	public readonly ServiceSoftwareOptionsAutomatedUpdateDate: string;
	public readonly ServiceSoftwareOptionsCancellable: boolean;
	public readonly ServiceSoftwareOptionsCurrentVersion: string;
	public readonly ServiceSoftwareOptionsDescription: string;
	public readonly ServiceSoftwareOptionsNewVersion: string;
	public readonly ServiceSoftwareOptionsOptionalDeployment: boolean;
	public readonly ServiceSoftwareOptionsUpdateAvailable: boolean;
	public readonly ServiceSoftwareOptionsUpdateStatus: string;
}
export interface DomainComponentOutputs {
	readonly Arn: string;
	readonly DomainEndpoint: string;
	readonly DomainEndpoints: Map<string, string>;
	readonly Id: string;
	readonly ServiceSoftwareOptionsAutomatedUpdateDate: string;
	readonly ServiceSoftwareOptionsCancellable: boolean;
	readonly ServiceSoftwareOptionsCurrentVersion: string;
	readonly ServiceSoftwareOptionsDescription: string;
	readonly ServiceSoftwareOptionsNewVersion: string;
	readonly ServiceSoftwareOptionsOptionalDeployment: boolean;
	readonly ServiceSoftwareOptionsUpdateAvailable: boolean;
	readonly ServiceSoftwareOptionsUpdateStatus: string;
}
export interface DomainComponentInputs {
	readonly AccessPolicies?: any | undefined;
	readonly AdvancedOptions?: { [key: string]: string } | undefined;
	readonly AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;
	readonly ClusterConfig?: ClusterConfig | undefined;
	readonly CognitoOptions?: CognitoOptions | undefined;
	readonly DomainEndpointOptions?: DomainEndpointOptions | undefined;
	readonly DomainName?: string | undefined;
	readonly EBSOptions?: EBSOptions | undefined;
	readonly EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;
	readonly EngineVersion?: string | undefined;
	readonly LogPublishingOptions?: { [key: string]: LogPublishingOption } | undefined;
	readonly NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;
	readonly SnapshotOptions?: SnapshotOptions | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VPCOptions?: VPCOptions | undefined;
	readonly LogicalId: string;
}
export interface AdvancedSecurityOptionsInput {
	readonly Enabled?: boolean | undefined;
	readonly InternalUserDatabaseEnabled?: boolean | undefined;
	readonly MasterUserOptions?: MasterUserOptions | undefined;
}
export interface ClusterConfig {
	readonly DedicatedMasterCount?: number | undefined;
	readonly DedicatedMasterEnabled?: boolean | undefined;
	readonly DedicatedMasterType?: string | undefined;
	readonly InstanceCount?: number | undefined;
	readonly InstanceType?: string | undefined;
	readonly WarmCount?: number | undefined;
	readonly WarmEnabled?: boolean | undefined;
	readonly WarmType?: string | undefined;
	readonly ZoneAwarenessConfig?: ZoneAwarenessConfig | undefined;
	readonly ZoneAwarenessEnabled?: boolean | undefined;
}
export interface CognitoOptions {
	readonly Enabled?: boolean | undefined;
	readonly IdentityPoolId?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly UserPoolId?: string | undefined;
}
export interface DomainEndpointOptions {
	readonly CustomEndpoint?: string | undefined;
	readonly CustomEndpointCertificateArn?: string | undefined;
	readonly CustomEndpointEnabled?: boolean | undefined;
	readonly EnforceHTTPS?: boolean | undefined;
	readonly TLSSecurityPolicy?: string | undefined;
}
export interface EBSOptions {
	readonly EBSEnabled?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly Throughput?: number | undefined;
	readonly VolumeSize?: number | undefined;
	readonly VolumeType?: string | undefined;
}
export interface EncryptionAtRestOptions {
	readonly Enabled?: boolean | undefined;
	readonly KmsKeyId?: string | undefined;
}
export interface LogPublishingOption {
	readonly CloudWatchLogsLogGroupArn?: string | undefined;
	readonly Enabled?: boolean | undefined;
}
export interface MasterUserOptions {
	readonly MasterUserARN?: string | undefined;
	readonly MasterUserName?: string | undefined;
	readonly MasterUserPassword?: string | undefined;
}
export interface NodeToNodeEncryptionOptions {
	readonly Enabled?: boolean | undefined;
}
export interface ServiceSoftwareOptions {
	readonly AutomatedUpdateDate?: string | undefined;
	readonly Cancellable?: boolean | undefined;
	readonly CurrentVersion?: string | undefined;
	readonly Description?: string | undefined;
	readonly NewVersion?: string | undefined;
	readonly OptionalDeployment?: boolean | undefined;
	readonly UpdateAvailable?: boolean | undefined;
	readonly UpdateStatus?: string | undefined;
}
export interface SnapshotOptions {
	readonly AutomatedSnapshotStartHour?: number | undefined;
}
export interface VPCOptions {
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
}
export interface ZoneAwarenessConfig {
	readonly AvailabilityZoneCount?: number | undefined;
}
export default {
	Domain: Domain,
};
