import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class queryPacks extends ArmResource<queryPacksComponentInputs> implements queryPacksComponentOutputs {
	constructor(entity: ADKEntity, options: queryPacksComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/queryPacks", "2019-09-01-preview", options);
	}
	public readonly apiVersion: "2019-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/queryPacks";
}
export interface queryPacksComponentOutputs {
	readonly apiVersion: "2019-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/queryPacks";
}
export interface queryPacksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: LogAnalyticsQueryPackProperties;
	readonly tags?: QueryPacksResourceTags;
}
export class queryPacks_queries
	extends ArmResource<queryPacks_queriesComponentInputs>
	implements queryPacks_queriesComponentOutputs
{
	constructor(entity: ADKEntity, options: queryPacks_queriesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/queryPacks/queries", "2019-09-01-preview", options);
	}
	public readonly apiVersion: "2019-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/queryPacks/queries";
}
export interface queryPacks_queriesComponentOutputs {
	readonly apiVersion: "2019-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/queryPacks/queries";
}
export interface queryPacks_queriesComponentInputs {
	readonly name: string;
	readonly properties?: LogAnalyticsQueryPackQueryProperties;
	readonly systemData?: SystemData;
}
export interface LogAnalyticsQueryPackProperties {
	readonly provisioningState?: string;
	readonly queryPackId?: string;
	readonly timeCreated?: string;
	readonly timeModified?: string;
}
export interface LogAnalyticsQueryPackQueryProperties {
	readonly author?: string;
	readonly body: string;
	readonly description?: string;
	readonly displayName: string;
	readonly id?: string;
	readonly properties?: any;
	readonly related?: LogAnalyticsQueryPackQueryPropertiesRelated;
	readonly tags?: LogAnalyticsQueryPackQueryPropertiesTags;
	readonly timeCreated?: string;
	readonly timeModified?: string;
}
export interface LogAnalyticsQueryPackQueryPropertiesRelated {
	readonly categories?: string[];
	readonly resourceTypes?: string[];
	readonly solutions?: string[];
}
export interface LogAnalyticsQueryPackQueryPropertiesTags {
	readonly [key: string]: string[];
}
export interface QueryPacksResourceTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "application" | "key" | "managedIdentity" | "user";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "application" | "key" | "managedIdentity" | "user";
}
export default {
	queryPacks: queryPacks,
	"queryPacks/queries": queryPacks_queries,
};
