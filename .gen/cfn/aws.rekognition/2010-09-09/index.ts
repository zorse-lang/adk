import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Collection extends CfnResource<CollectionComponentInputs> implements CollectionComponentOutputs {
	constructor(entity: ADKEntity, options: CollectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Rekognition::Collection", options);
	}
	public readonly Arn: string;
}
export interface CollectionComponentOutputs {
	readonly Arn: string;
}
export interface CollectionComponentInputs {
	readonly CollectionId: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::Rekognition::Project", options);
	}
	public readonly Arn: string;
}
export interface ProjectComponentOutputs {
	readonly Arn: string;
}
export interface ProjectComponentInputs {
	readonly ProjectName: string;
	readonly LogicalId: string;
}
export class StreamProcessor
	extends CfnResource<StreamProcessorComponentInputs>
	implements StreamProcessorComponentOutputs
{
	constructor(entity: ADKEntity, options: StreamProcessorComponentInputs) {
		super(entity, options.LogicalId, "AWS::Rekognition::StreamProcessor", options);
	}
	public readonly Arn: string;
	public readonly Status: string;
	public readonly StatusMessage: string;
}
export interface StreamProcessorComponentOutputs {
	readonly Arn: string;
	readonly Status: string;
	readonly StatusMessage: string;
}
export interface StreamProcessorComponentInputs {
	readonly KinesisVideoStream: KinesisVideoStream;
	readonly RoleArn: string;
	readonly BoundingBoxRegionsOfInterest?: (BoundingBox[] | undefined) | undefined;
	readonly ConnectedHomeSettings?: (ConnectedHomeSettings | undefined) | undefined;
	readonly DataSharingPreference?: (DataSharingPreference | undefined) | undefined;
	readonly FaceSearchSettings?: (FaceSearchSettings | undefined) | undefined;
	readonly KinesisDataStream?: (KinesisDataStream | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NotificationChannel?: (NotificationChannel | undefined) | undefined;
	readonly PolygonRegionsOfInterest?: (any | undefined) | undefined;
	readonly S3Destination?: (S3Destination | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface BoundingBox {
	readonly Height: number;
	readonly Left: number;
	readonly Top: number;
	readonly Width: number;
}
export interface ConnectedHomeSettings {
	readonly Labels: string[];
	readonly MinConfidence?: (number | undefined) | undefined;
}
export interface DataSharingPreference {
	readonly OptIn: boolean;
}
export interface FaceSearchSettings {
	readonly CollectionId: string;
	readonly FaceMatchThreshold?: (number | undefined) | undefined;
}
export interface KinesisDataStream {
	readonly Arn: string;
}
export interface KinesisVideoStream {
	readonly Arn: string;
}
export interface NotificationChannel {
	readonly Arn: string;
}
export interface S3Destination {
	readonly BucketName: string;
	readonly ObjectKeyPrefix?: (string | undefined) | undefined;
}
export default {
	Collection: Collection,
	Project: Project,
	StreamProcessor: StreamProcessor,
};
