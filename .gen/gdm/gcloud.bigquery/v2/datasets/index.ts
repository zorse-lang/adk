import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Datasets extends GdmResource<DatasetsComponentInputs> implements DatasetsComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetsComponentInputs) {
		super(entity, options.name, "bigquery.v2.Datasets", options);
	}
	public readonly creationTime?: string;
	public readonly etag?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly lastModifiedTime?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly tags?: GcpTag[];
}
export interface DatasetsComponentOutputs {
	readonly creationTime?: string;
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly lastModifiedTime?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly tags?: GcpTag[];
}
export interface DatasetsComponentInputs {
	readonly access?: Array<{
		dataset?: DatasetAccessEntry;
		domain?: string;
		groupByEmail?: string;
		iamMember?: string;
		role?: string;
		routine?: RoutineReference;
		specialGroup?: string;
		userByEmail?: string;
		view?: TableReference;
	}>;
	readonly datasetReference: DatasetReference;
	readonly defaultCollation?: string;
	readonly defaultEncryptionConfiguration?: EncryptionConfiguration;
	readonly defaultPartitionExpirationMs?: string;
	readonly defaultTableExpirationMs?: string;
	readonly description?: string;
	readonly friendlyName?: string;
	readonly labels?: { [P in string]: string };
	readonly linkedDatasetSource?: LinkedDatasetSource;
	readonly location?: string;
	readonly maxTimeTravelHours?: string;
	readonly storageBillingModel?: string;
	readonly name: string;
}
export interface Dataset {
	readonly access?: Array<{
		dataset?: DatasetAccessEntry;
		domain?: string;
		groupByEmail?: string;
		iamMember?: string;
		role?: string;
		routine?: RoutineReference;
		specialGroup?: string;
		userByEmail?: string;
		view?: TableReference;
	}>;
	readonly creationTime?: string;
	readonly datasetReference: DatasetReference;
	readonly defaultCollation?: string;
	readonly defaultEncryptionConfiguration?: EncryptionConfiguration;
	readonly defaultPartitionExpirationMs?: string;
	readonly defaultTableExpirationMs?: string;
	readonly description?: string;
	readonly etag?: string;
	readonly friendlyName?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly lastModifiedTime?: string;
	readonly linkedDatasetSource?: LinkedDatasetSource;
	readonly location?: string;
	readonly maxTimeTravelHours?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly storageBillingModel?: string;
	readonly tags?: GcpTag[];
	readonly type?: string;
}
export interface DatasetAccessEntry {
	readonly dataset?: DatasetReference;
	readonly targetTypes?: string[];
}
export interface DatasetReference {
	readonly datasetId: string;
	readonly projectId?: string;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string;
}
export interface GcpTag {
	readonly tagKey: string;
	readonly tagValue: string;
}
export interface LinkedDatasetSource {
	readonly sourceDataset?: DatasetReference;
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
