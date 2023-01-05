import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Dataset extends GdmResource<DatasetComponentInputs> implements DatasetComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetComponentInputs) {
		super(entity, options.name, "bigquery.v2.dataset", options);
	}
}
export interface DatasetComponentOutputs {}
export interface DatasetComponentInputs {
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
	readonly datasetReference?: DatasetReference;
	readonly defaultCollation?: string;
	readonly defaultEncryptionConfiguration?: EncryptionConfiguration;
	readonly defaultPartitionExpirationMs?: string;
	readonly defaultTableExpirationMs?: string;
	readonly description?: string;
	readonly etag?: string;
	readonly friendlyName?: string;
	readonly id?: string;
	readonly isCaseInsensitive?: boolean;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly lastModifiedTime?: string;
	readonly location?: string;
	readonly maxTimeTravelHours?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly storageBillingModel?: string;
	readonly tags?: Array<{ tagKey?: string; tagValue?: string }>;
	readonly name: string;
}
export interface DatasetAccessEntry {
	readonly dataset?: DatasetReference;
	readonly targetTypes?: string[];
}
export interface DatasetReference {
	readonly datasetId?: string;
	readonly projectId?: string;
}
export interface EncryptionConfiguration {
	readonly kmsKeyName?: string;
}
export interface RoutineReference {
	readonly datasetId?: string;
	readonly projectId?: string;
	readonly routineId?: string;
}
export interface TableReference {
	readonly datasetId?: string;
	readonly projectId?: string;
	readonly tableId?: string;
}
export default {
	Dataset: Dataset,
};
