import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::Elasticsearch::Domain", options);
	}
	public readonly Arn: string;
	public readonly DomainEndpoint: string;
}
export interface DomainComponentOutputs {
	readonly Arn: string;
	readonly DomainEndpoint: string;
}
export interface DomainComponentInputs {
	readonly AccessPolicies?: (any | undefined) | undefined;
	readonly AdvancedOptions?: ({ [key: string]: string } | undefined) | undefined;
	readonly AdvancedSecurityOptions?: (AdvancedSecurityOptionsInput | undefined) | undefined;
	readonly CognitoOptions?: (CognitoOptions | undefined) | undefined;
	readonly DomainEndpointOptions?: (DomainEndpointOptions | undefined) | undefined;
	readonly DomainName?: (string | undefined) | undefined;
	readonly EBSOptions?: (EBSOptions | undefined) | undefined;
	readonly ElasticsearchClusterConfig?: (ElasticsearchClusterConfig | undefined) | undefined;
	readonly ElasticsearchVersion?: (string | undefined) | undefined;
	readonly EncryptionAtRestOptions?: (EncryptionAtRestOptions | undefined) | undefined;
	readonly LogPublishingOptions?: ({ [key: string]: LogPublishingOption } | undefined) | undefined;
	readonly NodeToNodeEncryptionOptions?: (NodeToNodeEncryptionOptions | undefined) | undefined;
	readonly SnapshotOptions?: (SnapshotOptions | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VPCOptions?: (VPCOptions | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AdvancedSecurityOptionsInput {
	readonly AnonymousAuthEnabled?: (boolean | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly InternalUserDatabaseEnabled?: (boolean | undefined) | undefined;
	readonly MasterUserOptions?: (MasterUserOptions | undefined) | undefined;
}
export interface CognitoOptions {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly IdentityPoolId?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly UserPoolId?: (string | undefined) | undefined;
}
export interface ColdStorageOptions {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface DomainEndpointOptions {
	readonly CustomEndpoint?: (string | undefined) | undefined;
	readonly CustomEndpointCertificateArn?: (string | undefined) | undefined;
	readonly CustomEndpointEnabled?: (boolean | undefined) | undefined;
	readonly EnforceHTTPS?: (boolean | undefined) | undefined;
	readonly TLSSecurityPolicy?: (string | undefined) | undefined;
}
export interface EBSOptions {
	readonly EBSEnabled?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly VolumeSize?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
}
export interface ElasticsearchClusterConfig {
	readonly ColdStorageOptions?: (ColdStorageOptions | undefined) | undefined;
	readonly DedicatedMasterCount?: (number | undefined) | undefined;
	readonly DedicatedMasterEnabled?: (boolean | undefined) | undefined;
	readonly DedicatedMasterType?: (string | undefined) | undefined;
	readonly InstanceCount?: (number | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly WarmCount?: (number | undefined) | undefined;
	readonly WarmEnabled?: (boolean | undefined) | undefined;
	readonly WarmType?: (string | undefined) | undefined;
	readonly ZoneAwarenessConfig?: (ZoneAwarenessConfig | undefined) | undefined;
	readonly ZoneAwarenessEnabled?: (boolean | undefined) | undefined;
}
export interface EncryptionAtRestOptions {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
}
export interface LogPublishingOption {
	readonly CloudWatchLogsLogGroupArn?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface MasterUserOptions {
	readonly MasterUserARN?: (string | undefined) | undefined;
	readonly MasterUserName?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
}
export interface NodeToNodeEncryptionOptions {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface SnapshotOptions {
	readonly AutomatedSnapshotStartHour?: (number | undefined) | undefined;
}
export interface VPCOptions {
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export interface ZoneAwarenessConfig {
	readonly AvailabilityZoneCount?: (number | undefined) | undefined;
}
export default {
	Domain: Domain,
};
