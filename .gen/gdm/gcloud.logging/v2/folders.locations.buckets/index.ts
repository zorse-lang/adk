import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLocationsBuckets
	extends GdmResource<FoldersLocationsBucketsComponentInputs>
	implements FoldersLocationsBucketsComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersLocationsBucketsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLocationsBuckets", options);
	}
	public readonly analyticsUpgradeTime?: string | undefined;
	public readonly createTime?: string | undefined;
	public readonly lifecycleState?: string | undefined;
	public readonly linkedBigqueryDataset?: string | undefined;
	public readonly unmetAnalyticsUpgradeRequirements?: string[] | undefined;
	public readonly updateTime?: string | undefined;
}
export interface FoldersLocationsBucketsComponentOutputs {
	readonly analyticsUpgradeTime?: string | undefined;
	readonly createTime?: string | undefined;
	readonly lifecycleState?: string | undefined;
	readonly linkedBigqueryDataset?: string | undefined;
	readonly unmetAnalyticsUpgradeRequirements?: string[] | undefined;
	readonly updateTime?: string | undefined;
}
export interface FoldersLocationsBucketsComponentInputs {
	readonly analyticsEnabled?: boolean | undefined;
	readonly bucketId: string;
	readonly cmekSettings?: CmekSettings | undefined;
	readonly description?: string | undefined;
	readonly indexConfigs?: IndexConfig[] | undefined;
	readonly locked?: boolean | undefined;
	readonly logLink?: LogLink | undefined;
	readonly name: string;
	readonly parent: string;
	readonly restrictedFields?: string[] | undefined;
	readonly retentionDays?: number | undefined;
	readonly type: string;
}
export interface CmekSettings {
	readonly kmsKeyName?: string | undefined;
	readonly kmsKeyVersionName?: string | undefined;
	readonly name?: string | undefined;
	readonly serviceAccountId?: string | undefined;
}
export interface IndexConfig {
	readonly createTime?: string | undefined;
	readonly fieldPath: string;
	readonly type: string;
}
export interface LogBucket {
	readonly analyticsEnabled?: boolean | undefined;
	readonly analyticsUpgradeTime?: string | undefined;
	readonly cmekSettings?: CmekSettings | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly indexConfigs?: IndexConfig[] | undefined;
	readonly lifecycleState?: string | undefined;
	readonly linkedBigqueryDataset?: string | undefined;
	readonly locked?: boolean | undefined;
	readonly logLink?: LogLink | undefined;
	readonly name?: string | undefined;
	readonly restrictedFields?: string[] | undefined;
	readonly retentionDays?: number | undefined;
	readonly unmetAnalyticsUpgradeRequirements?: string[] | undefined;
	readonly updateTime?: string | undefined;
}
export interface LogLink {
	readonly enabled?: boolean | undefined;
	readonly loggingServiceAccount?: string | undefined;
}
export default {
	FoldersLocationsBuckets: FoldersLocationsBuckets,
};