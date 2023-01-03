import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Bucket extends RosResource<BucketComponentInputs> implements BucketComponentOutputs {
	constructor(entity: ADKEntity, options: BucketComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OSS::Bucket", options);
	}
	public readonly DomainName: any;
	public readonly InternalDomainName: any;
	public readonly Name: any;
}
export interface BucketComponentOutputs {
	readonly DomainName: any;
	readonly InternalDomainName: any;
	readonly Name: any;
}
export interface BucketComponentInputs {
	readonly BucketName: string;
	readonly AccessControl?: (string | undefined) | undefined;
	readonly CORSConfiguration?: (CORSConfiguration | undefined) | undefined;
	readonly DeletionForce?: (boolean | undefined) | undefined;
	readonly LifecycleConfiguration?: (LifecycleConfiguration | undefined) | undefined;
	readonly LoggingConfiguration?: (LoggingConfiguration | undefined) | undefined;
	readonly Policy?: ({ [key: string]: any } | undefined) | undefined;
	readonly RefererConfiguration?: (RefererConfiguration | undefined) | undefined;
	readonly ServerSideEncryptionConfiguration?: (ServerSideEncryptionConfiguration | undefined) | undefined;
	readonly StorageClass?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: any } | undefined) | undefined;
	readonly WebsiteConfiguration?: (WebsiteConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AbortMultipartUpload {
	readonly CreatedBeforeDate?: (string | undefined) | undefined;
	readonly Days?: (number | undefined) | undefined;
}
export interface CORSConfiguration {
	readonly CORSRule?: (CORSRule[] | undefined) | undefined;
}
export interface CORSRule {
	readonly AllowedMethod?: (string[] | undefined) | undefined;
	readonly MaxAgeSeconds?: (number | undefined) | undefined;
	readonly ExposeHeader?: (string[] | undefined) | undefined;
	readonly AllowedOrigin?: (string[] | undefined) | undefined;
	readonly AllowedHeader?: (string[] | undefined) | undefined;
}
export interface Expiration {
	readonly CreatedBeforeDate?: (string | undefined) | undefined;
	readonly Days?: (number | undefined) | undefined;
}
export interface LifecycleConfiguration {
	readonly Rule: Rule[];
}
export interface LoggingConfiguration {
	readonly TargetPrefix?: (string | undefined) | undefined;
	readonly TargetBucket?: (string | undefined) | undefined;
}
export interface RefererConfiguration {
	readonly RefererList?: (any[] | undefined) | undefined;
	readonly AllowEmptyReferer?: (boolean | undefined) | undefined;
}
export interface Rule {
	readonly Status?: (string | undefined) | undefined;
	readonly AbortMultipartUpload?: (AbortMultipartUpload | undefined) | undefined;
	readonly Expiration?: (Expiration | undefined) | undefined;
	readonly Prefix: string;
	readonly ID?: (string | undefined) | undefined;
}
export interface ServerSideEncryptionConfiguration {
	readonly SSEAlgorithm: string;
	readonly KMSMasterKeyID?: (string | undefined) | undefined;
}
export interface WebsiteConfiguration {
	readonly IndexDocument?: (string | undefined) | undefined;
	readonly ErrorDocument?: (string | undefined) | undefined;
}
export default {
	Bucket: Bucket,
};
