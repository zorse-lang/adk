import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Datasets extends GdmResource<DatasetsComponentInputs> implements DatasetsComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetsComponentInputs) {
		super(entity, options.name, "bigquery.v2.Datasets", options);
	}
	public readonly creationTime?: string | undefined;
	public readonly etag?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly lastModifiedTime?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly tags?: GcpTag[] | undefined;
}
export interface DatasetsComponentOutputs {
	readonly creationTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly tags?: GcpTag[] | undefined;
}
export interface DatasetsComponentInputs {
	readonly access?:
		| Array<{
				dataset?: DatasetAccessEntry;
				domain?: string;
				groupByEmail?: string;
				iamMember?: string;
				role?: string;
				routine?: RoutineReference;
				specialGroup?: string;
				userByEmail?: string;
				view?: TableReference;
		  }>
		| undefined;
	readonly datasetReference: DatasetReference;
	readonly defaultCollation?: string | undefined;
	readonly defaultEncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly defaultPartitionExpirationMs?: string | undefined;
	readonly defaultTableExpirationMs?: string | undefined;
	readonly description?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly linkedDatasetSource?: LinkedDatasetSource | undefined;
	readonly location?: string | undefined;
	readonly maxTimeTravelHours?: string | undefined;
	readonly storageBillingModel?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface Dataset {
	readonly access?:
		| Array<{
				dataset?: DatasetAccessEntry;
				domain?: string;
				groupByEmail?: string;
				iamMember?: string;
				role?: string;
				routine?: RoutineReference;
				specialGroup?: string;
				userByEmail?: string;
				view?: TableReference;
		  }>
		| undefined;
	readonly creationTime?: string | undefined;
	readonly datasetReference: DatasetReference;
	readonly defaultCollation?: string | undefined;
	readonly defaultEncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly defaultPartitionExpirationMs?: string | undefined;
	readonly defaultTableExpirationMs?: string | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly linkedDatasetSource?: LinkedDatasetSource | undefined;
	readonly location?: string | undefined;
	readonly maxTimeTravelHours?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly storageBillingModel?: string | undefined;
	readonly tags?: GcpTag[] | undefined;
	readonly type?: string | undefined;
}
export interface DatasetAccessEntry {
	readonly dataset?: DatasetReference | undefined;
	readonly targetTypes?: string[] | undefined;
}
export interface DatasetReference {
	readonly datasetId: string;
	readonly projectId?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string | undefined;
}
export interface GcpTag {
	readonly tagKey: string;
	readonly tagValue: string;
}
export interface LinkedDatasetSource {
	readonly sourceDataset?: DatasetReference | undefined;
}
export interface RoutineReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly routineId: string;
}
export interface TableReference {
	readonly datasetId: string;
	readonly projectId: string;
	readonly tableId: string;
}
export default {
	Datasets: Datasets,
};
