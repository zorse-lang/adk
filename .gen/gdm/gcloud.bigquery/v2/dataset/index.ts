import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Dataset extends GdmResource<DatasetComponentInputs> implements DatasetComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetComponentInputs) {
		super(entity, options.name, "bigquery.v2.dataset", options);
	}
}
export interface DatasetComponentOutputs {}
export interface DatasetComponentInputs {
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
	readonly datasetReference?: DatasetReference | undefined;
	readonly defaultCollation?: string | undefined;
	readonly defaultEncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly defaultPartitionExpirationMs?: string | undefined;
	readonly defaultTableExpirationMs?: string | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly id?: string | undefined;
	readonly isCaseInsensitive?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly location?: string | undefined;
	readonly maxTimeTravelHours?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly storageBillingModel?: string | undefined;
	readonly tags?: Array<{ tagKey?: string; tagValue?: string }> | undefined;
	readonly type: string;
	readonly name: string;
}
export interface DatasetAccessEntry {
	readonly dataset?: DatasetReference | undefined;
	readonly targetTypes?: string[] | undefined;
}
export interface DatasetReference {
	readonly datasetId?: string | undefined;
	readonly projectId?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string | undefined;
}
export interface RoutineReference {
	readonly datasetId?: string | undefined;
	readonly projectId?: string | undefined;
	readonly routineId?: string | undefined;
}
export interface TableReference {
	readonly datasetId?: string | undefined;
	readonly projectId?: string | undefined;
	readonly tableId?: string | undefined;
}
export default {
	Dataset: Dataset,
};
