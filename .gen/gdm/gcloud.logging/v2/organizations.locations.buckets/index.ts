import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLocationsBuckets
	extends GdmResource<OrganizationsLocationsBucketsComponentInputs>
	implements OrganizationsLocationsBucketsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLocationsBucketsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLocationsBuckets", options);
	}
	public readonly analyticsUpgradeTime?: string;
	public readonly createTime?: string;
	public readonly lifecycleState?: string;
	public readonly linkedBigqueryDataset?: string;
	public readonly unmetAnalyticsUpgradeRequirements?: string[];
	public readonly updateTime?: string;
}
export interface OrganizationsLocationsBucketsComponentOutputs {
	readonly analyticsUpgradeTime?: string;
	readonly createTime?: string;
	readonly lifecycleState?: string;
	readonly linkedBigqueryDataset?: string;
	readonly unmetAnalyticsUpgradeRequirements?: string[];
	readonly updateTime?: string;
}
export interface OrganizationsLocationsBucketsComponentInputs {
	readonly analyticsEnabled?: boolean;
	readonly bucketId: string;
	readonly cmekSettings?: CmekSettings;
	readonly description?: string;
	readonly indexConfigs?: IndexConfig[];
	readonly locked?: boolean;
	readonly logLink?: LogLink;
	readonly name: string;
	readonly parent: string;
	readonly restrictedFields?: string[];
	readonly retentionDays?: number;
}
export interface CmekSettings {
	readonly kmsKeyName?: string;
	readonly kmsKeyVersionName?: string;
	readonly name?: string;
	readonly serviceAccountId?: string;
}
export interface IndexConfig {
	readonly createTime?: string;
	readonly fieldPath: string;
	readonly type: string;
}
export interface LogBucket {
	readonly analyticsEnabled?: boolean;
	readonly analyticsUpgradeTime?: string;
	readonly cmekSettings?: CmekSettings;
	readonly createTime?: string;
	readonly description?: string;
	readonly indexConfigs?: IndexConfig[];
	readonly lifecycleState?: string;
	readonly linkedBigqueryDataset?: string;
	readonly locked?: boolean;
	readonly logLink?: LogLink;
	readonly name?: string;
	readonly restrictedFields?: string[];
	readonly retentionDays?: number;
	readonly unmetAnalyticsUpgradeRequirements?: string[];
	readonly updateTime?: string;
}
export interface LogLink {
	readonly enabled?: boolean;
	readonly loggingServiceAccount?: string;
}
export default {
	OrganizationsLocationsBuckets: OrganizationsLocationsBuckets,
};
