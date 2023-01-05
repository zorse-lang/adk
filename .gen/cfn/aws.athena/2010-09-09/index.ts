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
	readonly Description?: string | undefined;
	readonly Parameters?: { [key: string]: string } | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly WorkGroup?: string | undefined;
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
	readonly Description?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly RecursiveDeleteOption?: boolean | undefined;
	readonly State?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly WorkGroupConfiguration?: WorkGroupConfiguration | undefined;
	readonly LogicalId: string;
}
export interface EncryptionConfiguration {
	readonly EncryptionOption: string;
	readonly KmsKey?: string | undefined;
}
export interface EngineVersion {
	readonly EffectiveEngineVersion?: string | undefined;
	readonly SelectedEngineVersion?: string | undefined;
}
export interface ResultConfiguration {
	readonly EncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly OutputLocation?: string | undefined;
}
export interface WorkGroupConfiguration {
	readonly BytesScannedCutoffPerQuery?: number | undefined;
	readonly EnforceWorkGroupConfiguration?: boolean | undefined;
	readonly EngineVersion?: EngineVersion | undefined;
	readonly PublishCloudWatchMetricsEnabled?: boolean | undefined;
	readonly RequesterPaysEnabled?: boolean | undefined;
	readonly ResultConfiguration?: ResultConfiguration | undefined;
}
export default {
	DataCatalog: DataCatalog,
	NamedQuery: NamedQuery,
	PreparedStatement: PreparedStatement,
	WorkGroup: WorkGroup,
};
