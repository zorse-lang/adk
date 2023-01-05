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
	readonly AccessControl?: string | undefined;
	readonly CORSConfiguration?: CORSConfiguration | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly LifecycleConfiguration?: LifecycleConfiguration | undefined;
	readonly LoggingConfiguration?: LoggingConfiguration | undefined;
	readonly Policy?: { [key: string]: any } | undefined;
	readonly RefererConfiguration?: RefererConfiguration | undefined;
	readonly ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
	readonly StorageClass?: string | undefined;
	readonly Tags?: { [key: string]: any } | undefined;
	readonly WebsiteConfiguration?: WebsiteConfiguration | undefined;
	readonly LogicalId: string;
}
export interface AbortMultipartUpload {
	readonly CreatedBeforeDate?: string | undefined;
	readonly Days?: number | undefined;
}
export interface CORSConfiguration {
	readonly CORSRule?: CORSRule[] | undefined;
}
export interface CORSRule {
	readonly AllowedMethod?: string[] | undefined;
	readonly MaxAgeSeconds?: number | undefined;
	readonly ExposeHeader?: string[] | undefined;
	readonly AllowedOrigin?: string[] | undefined;
	readonly AllowedHeader?: string[] | undefined;
}
export interface Expiration {
	readonly CreatedBeforeDate?: string | undefined;
	readonly Days?: number | undefined;
}
export interface LifecycleConfiguration {
	readonly Rule: Rule[];
}
export interface LoggingConfiguration {
	readonly TargetPrefix?: string | undefined;
	readonly TargetBucket?: string | undefined;
}
export interface RefererConfiguration {
	readonly RefererList?: any[] | undefined;
	readonly AllowEmptyReferer?: boolean | undefined;
}
export interface Rule {
	readonly Status?: string | undefined;
	readonly AbortMultipartUpload?: AbortMultipartUpload | undefined;
	readonly Expiration?: Expiration | undefined;
	readonly Prefix: string;
	readonly ID?: string | undefined;
}
export interface ServerSideEncryptionConfiguration {
	readonly SSEAlgorithm: string;
	readonly KMSMasterKeyID?: string | undefined;
}
export interface WebsiteConfiguration {
	readonly IndexDocument?: string | undefined;
	readonly ErrorDocument?: string | undefined;
}
export default {
	Bucket: Bucket,
};
