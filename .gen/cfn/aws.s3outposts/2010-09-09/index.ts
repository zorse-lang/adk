import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoint extends CfnResource<AccessPointComponentInputs> implements AccessPointComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPointComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3Outposts::AccessPoint", options);
	}
	public readonly Arn: string;
}
export interface AccessPointComponentOutputs {
	readonly Arn: string;
}
export interface AccessPointComponentInputs {
	readonly Bucket: string;
	readonly Name: string;
	readonly VpcConfiguration: VpcConfiguration;
	readonly Policy?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export class Bucket extends CfnResource<BucketComponentInputs> implements BucketComponentOutputs {
	constructor(entity: ADKEntity, options: BucketComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3Outposts::Bucket", options);
	}
	public readonly Arn: string;
}
export interface BucketComponentOutputs {
	readonly Arn: string;
}
export interface BucketComponentInputs {
	readonly BucketName: string;
	readonly OutpostId: string;
	readonly LifecycleConfiguration?: (LifecycleConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class BucketPolicy extends CfnResource<BucketPolicyComponentInputs> implements BucketPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: BucketPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3Outposts::BucketPolicy", options);
	}
}
export interface BucketPolicyComponentOutputs {}
export interface BucketPolicyComponentInputs {
	readonly Bucket: string;
	readonly PolicyDocument: any;
	readonly LogicalId: string;
}
export class Endpoint extends CfnResource<EndpointComponentInputs> implements EndpointComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3Outposts::Endpoint", options);
	}
	public readonly Arn: string;
	public readonly CidrBlock: string;
	public readonly CreationTime: string;
	public readonly Id: string;
	public readonly NetworkInterfaces: Map<string, NetworkInterface>;
	public readonly Status: string;
}
export interface EndpointComponentOutputs {
	readonly Arn: string;
	readonly CidrBlock: string;
	readonly CreationTime: string;
	readonly Id: string;
	readonly NetworkInterfaces: Map<string, NetworkInterface>;
	readonly Status: string;
}
export interface EndpointComponentInputs {
	readonly OutpostId: string;
	readonly SecurityGroupId: string;
	readonly SubnetId: string;
	readonly AccessType?: (string | undefined) | undefined;
	readonly CustomerOwnedIpv4Pool?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface VpcConfiguration {
	readonly VpcId?: (string | undefined) | undefined;
}
export interface AbortIncompleteMultipartUpload {
	readonly DaysAfterInitiation: number;
}
export interface Filter {
	readonly AndOperator?: (FilterAndOperator | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly Tag?: (FilterTag | undefined) | undefined;
}
export interface FilterAndOperator {
	readonly Prefix?: (string | undefined) | undefined;
	readonly Tags: FilterTag[];
}
export interface FilterTag {
	readonly Key: string;
	readonly Value: string;
}
export interface LifecycleConfiguration {
	readonly Rules: Rule[];
}
export interface Rule {
	readonly AbortIncompleteMultipartUpload?: (AbortIncompleteMultipartUpload | undefined) | undefined;
	readonly ExpirationDate?: (string | undefined) | undefined;
	readonly ExpirationInDays?: (number | undefined) | undefined;
	readonly Filter?: (Filter | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly Status: string;
}
export interface NetworkInterface {
	readonly NetworkInterfaceId: string;
}
export default {
	AccessPoint: AccessPoint,
	Bucket: Bucket,
	BucketPolicy: BucketPolicy,
	Endpoint: Endpoint,
};
