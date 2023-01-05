import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Dataset extends CfnResource<DatasetComponentInputs> implements DatasetComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetComponentInputs) {
		super(entity, options.LogicalId, "AWS::Forecast::Dataset", options);
	}
	public readonly Arn: string;
}
export interface DatasetComponentOutputs {
	readonly Arn: string;
}
export interface DatasetComponentInputs {
	readonly DatasetName: string;
	readonly DatasetType: string;
	readonly Domain: string;
	readonly Schema: Schema;
	readonly DataFrequency?: string | undefined;
	readonly EncryptionConfig?: EncryptionConfig | undefined;
	readonly Tags?: TagsItems[] | undefined;
	readonly LogicalId: string;
}
export class DatasetGroup extends CfnResource<DatasetGroupComponentInputs> implements DatasetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Forecast::DatasetGroup", options);
	}
	public readonly DatasetGroupArn: string;
}
export interface DatasetGroupComponentOutputs {
	readonly DatasetGroupArn: string;
}
export interface DatasetGroupComponentInputs {
	readonly DatasetGroupName: string;
	readonly Domain: string;
	readonly DatasetArns?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AttributesItems {
	readonly AttributeName?: string | undefined;
	readonly AttributeType?: string | undefined;
}
export interface EncryptionConfig {
	readonly KmsKeyArn?: string | undefined;
	readonly RoleArn?: string | undefined;
}
export interface Schema {
	readonly Attributes?: AttributesItems[] | undefined;
}
export interface TagsItems {
	readonly Key: string;
	readonly Value: string;
}
export default {
	Dataset: Dataset,
	DatasetGroup: DatasetGroup,
};
