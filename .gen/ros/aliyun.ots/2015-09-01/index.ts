import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OTS::Instance", options);
	}
	public readonly VpcEndpoint: any;
	public readonly PublicEndpoint: any;
	public readonly PrivateEndpoint: any;
}
export interface InstanceComponentOutputs {
	readonly VpcEndpoint: any;
	readonly PublicEndpoint: any;
	readonly PrivateEndpoint: any;
}
export interface InstanceComponentInputs {
	readonly InstanceName: any | string;
	readonly ClusterType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Network?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SearchIndex extends RosResource<SearchIndexComponentInputs> implements SearchIndexComponentOutputs {
	constructor(entity: ADKEntity, options: SearchIndexComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OTS::SearchIndex", options);
	}
}
export interface SearchIndexComponentOutputs {}
export interface SearchIndexComponentInputs {
	readonly FieldSchemas: FieldSchemas[];
	readonly IndexName: any | string;
	readonly InstanceName: string;
	readonly TableName: string;
	readonly IndexSetting?: (IndexSetting | undefined) | undefined;
	readonly IndexSort?: (IndexSort | undefined) | undefined;
	readonly LogicalId: string;
}
export class Table extends RosResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OTS::Table", options);
	}
}
export interface TableComponentOutputs {}
export interface TableComponentInputs {
	readonly InstanceName: string;
	readonly PrimaryKey: PrimaryKey[];
	readonly TableName: any | string;
	readonly Columns?: (Columns[] | undefined) | undefined;
	readonly DeviationCellVersionInSec?: (number | undefined) | undefined;
	readonly MaxVersions?: (number | undefined) | undefined;
	readonly ReservedThroughput?: (ReservedThroughput | undefined) | undefined;
	readonly SecondaryIndices?: (SecondaryIndices[] | undefined) | undefined;
	readonly TimeToLive?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class VpcBinder extends RosResource<VpcBinderComponentInputs> implements VpcBinderComponentOutputs {
	constructor(entity: ADKEntity, options: VpcBinderComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OTS::VpcBinder", options);
	}
	public readonly Domains: any;
	public readonly Endpoints: any;
}
export interface VpcBinderComponentOutputs {
	readonly Domains: any;
	readonly Endpoints: any;
}
export interface VpcBinderComponentInputs {
	readonly InstanceName: string;
	readonly Vpcs: Vpcs[];
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface FieldSchemas {
	readonly IsArray?: (boolean | undefined) | undefined;
	readonly EnableSortAndAgg?: (boolean | undefined) | undefined;
	readonly Store?: (boolean | undefined) | undefined;
	readonly Index?: (boolean | undefined) | undefined;
	readonly Analyzer?: (string | undefined) | undefined;
	readonly SubFieldSchemas?: (SubFieldSchemas[] | undefined) | undefined;
	readonly FieldName: string;
	readonly FieldType: string;
}
export interface FieldSort {
	readonly SortMode?: (string | undefined) | undefined;
	readonly SortOrder?: (string | undefined) | undefined;
	readonly FieldName: string;
}
export interface GeoDistanceSort {
	readonly Points: any[];
	readonly SortMode?: (string | undefined) | undefined;
	readonly SortOrder?: (string | undefined) | undefined;
	readonly FieldName: string;
}
export interface IndexSetting {
	readonly RoutingFields?: (any[] | undefined) | undefined;
}
export interface IndexSort {
	readonly Sorters: Sorters[];
}
export interface PrimaryKeySort {
	readonly SortOrder?: (string | undefined) | undefined;
}
export interface ScoreSort {
	readonly SortOrder?: (string | undefined) | undefined;
}
export interface Sorters {
	readonly FieldSort?: (FieldSort | undefined) | undefined;
	readonly PrimaryKeySort?: (PrimaryKeySort | undefined) | undefined;
	readonly ScoreSort?: (ScoreSort | undefined) | undefined;
	readonly GeoDistanceSort?: (GeoDistanceSort | undefined) | undefined;
}
export interface SubFieldSchemas {
	readonly IsArray?: (boolean | undefined) | undefined;
	readonly EnableSortAndAgg?: (boolean | undefined) | undefined;
	readonly Store?: (boolean | undefined) | undefined;
	readonly Index?: (boolean | undefined) | undefined;
	readonly Analyzer?: (string | undefined) | undefined;
	readonly FieldName: string;
	readonly FieldType: string;
}
export interface Columns {
	readonly Type: string;
	readonly Name: string;
}
export interface PrimaryKey {
	readonly Type: string;
	readonly Name: string;
}
export interface ReservedThroughput {
	readonly Read: number;
	readonly Write: number;
}
export interface SecondaryIndices {
	readonly IndexName: string;
	readonly Columns: string[];
	readonly PrimaryKeys: string[];
	readonly IndexType?: (string | undefined) | undefined;
}
export interface Vpcs {
	readonly VpcId: string;
	readonly InstanceVpcName: string;
	readonly Network: string;
	readonly VirtualSwitchId: string;
}
export default {
	Instance: Instance,
	SearchIndex: SearchIndex,
	Table: Table,
	VpcBinder: VpcBinder,
};
