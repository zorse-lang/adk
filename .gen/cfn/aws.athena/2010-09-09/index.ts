import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DataCatalog extends CfnResource<DataCatalogComponentInputs> implements DataCatalogComponentOutputs {
	constructor(entity: ADKEntity, options: DataCatalogComponentInputs) {
		super(entity, options.LogicalId, "AWS::Athena::DataCatalog", options);
	}
}
export interface DataCatalogComponentOutputs {}
export interface DataCatalogComponentInputs {
	readonly Name: string;
	readonly Type: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class NamedQuery extends CfnResource<NamedQueryComponentInputs> implements NamedQueryComponentOutputs {
	constructor(entity: ADKEntity, options: NamedQueryComponentInputs) {
		super(entity, options.LogicalId, "AWS::Athena::NamedQuery", options);
	}
	public readonly NamedQueryId: string;
}
export interface NamedQueryComponentOutputs {
	readonly NamedQueryId: string;
}
export interface NamedQueryComponentInputs {
	readonly Database: string;
	readonly QueryString: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly WorkGroup?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class PreparedStatement
	extends CfnResource<PreparedStatementComponentInputs>
	implements PreparedStatementComponentOutputs
{
	constructor(entity: ADKEntity, options: PreparedStatementComponentInputs) {
		super(entity, options.LogicalId, "AWS::Athena::PreparedStatement", options);
	}
}
export interface PreparedStatementComponentOutputs {}
export interface PreparedStatementComponentInputs {
	readonly QueryStatement: string;
	readonly StatementName: string;
	readonly WorkGroup: string;
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class WorkGroup extends CfnResource<WorkGroupComponentInputs> implements WorkGroupComponentOutputs {
	constructor(entity: ADKEntity, options: WorkGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Athena::WorkGroup", options);
	}
	public readonly CreationTime: string;
	public readonly WorkGroupConfigurationEngineVersionEffectiveEngineVersion: string;
}
export interface WorkGroupComponentOutputs {
	readonly CreationTime: string;
	readonly WorkGroupConfigurationEngineVersionEffectiveEngineVersion: string;
}
export interface WorkGroupComponentInputs {
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly RecursiveDeleteOption?: (boolean | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly WorkGroupConfiguration?: (WorkGroupConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export interface EncryptionConfiguration {
	readonly EncryptionOption: string;
	readonly KmsKey?: (string | undefined) | undefined;
}
export interface EngineVersion {
	readonly EffectiveEngineVersion?: (string | undefined) | undefined;
	readonly SelectedEngineVersion?: (string | undefined) | undefined;
}
export interface ResultConfiguration {
	readonly EncryptionConfiguration?: (EncryptionConfiguration | undefined) | undefined;
	readonly OutputLocation?: (string | undefined) | undefined;
}
export interface WorkGroupConfiguration {
	readonly BytesScannedCutoffPerQuery?: (number | undefined) | undefined;
	readonly EnforceWorkGroupConfiguration?: (boolean | undefined) | undefined;
	readonly EngineVersion?: (EngineVersion | undefined) | undefined;
	readonly PublishCloudWatchMetricsEnabled?: (boolean | undefined) | undefined;
	readonly RequesterPaysEnabled?: (boolean | undefined) | undefined;
	readonly ResultConfiguration?: (ResultConfiguration | undefined) | undefined;
}
export default {
	DataCatalog: DataCatalog,
	NamedQuery: NamedQuery,
	PreparedStatement: PreparedStatement,
	WorkGroup: WorkGroup,
};
