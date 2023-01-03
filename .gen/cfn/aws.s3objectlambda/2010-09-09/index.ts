import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoint extends CfnResource<AccessPointComponentInputs> implements AccessPointComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPointComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3ObjectLambda::AccessPoint", options);
	}
	public readonly Arn: string;
	public readonly CreationDate: string;
	public readonly PolicyStatusIsPublic: boolean;
	public readonly PublicAccessBlockConfigurationBlockPublicAcls: boolean;
	public readonly PublicAccessBlockConfigurationBlockPublicPolicy: boolean;
	public readonly PublicAccessBlockConfigurationIgnorePublicAcls: boolean;
	public readonly PublicAccessBlockConfigurationRestrictPublicBuckets: boolean;
}
export interface AccessPointComponentOutputs {
	readonly Arn: string;
	readonly CreationDate: string;
	readonly PolicyStatusIsPublic: boolean;
	readonly PublicAccessBlockConfigurationBlockPublicAcls: boolean;
	readonly PublicAccessBlockConfigurationBlockPublicPolicy: boolean;
	readonly PublicAccessBlockConfigurationIgnorePublicAcls: boolean;
	readonly PublicAccessBlockConfigurationRestrictPublicBuckets: boolean;
}
export interface AccessPointComponentInputs {
	readonly ObjectLambdaConfiguration: ObjectLambdaConfiguration;
	readonly Name?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class AccessPointPolicy
	extends CfnResource<AccessPointPolicyComponentInputs>
	implements AccessPointPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPointPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::S3ObjectLambda::AccessPointPolicy", options);
	}
}
export interface AccessPointPolicyComponentOutputs {}
export interface AccessPointPolicyComponentInputs {
	readonly ObjectLambdaAccessPoint: string;
	readonly PolicyDocument: any;
	readonly LogicalId: string;
}
export interface AwsLambda {
	readonly FunctionArn: string;
	readonly FunctionPayload?: (string | undefined) | undefined;
}
export interface ContentTransformation {
	readonly AwsLambda: AwsLambda;
}
export interface ObjectLambdaConfiguration {
	readonly AllowedFeatures?: (string[] | undefined) | undefined;
	readonly CloudWatchMetricsEnabled?: (boolean | undefined) | undefined;
	readonly SupportingAccessPoint: string;
	readonly TransformationConfigurations: TransformationConfiguration[];
}
export interface PolicyStatus {
	readonly IsPublic?: (boolean | undefined) | undefined;
}
export interface PublicAccessBlockConfiguration {
	readonly BlockPublicAcls?: (boolean | undefined) | undefined;
	readonly BlockPublicPolicy?: (boolean | undefined) | undefined;
	readonly IgnorePublicAcls?: (boolean | undefined) | undefined;
	readonly RestrictPublicBuckets?: (boolean | undefined) | undefined;
}
export interface TransformationConfiguration {
	readonly Actions: string[];
	readonly ContentTransformation: ContentTransformation;
}
export default {
	AccessPoint: AccessPoint,
	AccessPointPolicy: AccessPointPolicy,
};
