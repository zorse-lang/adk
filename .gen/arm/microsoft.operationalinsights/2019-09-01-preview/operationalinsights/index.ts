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
	readonly tags?: QueryPacksResourceTags | undefined;
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
	readonly properties?: LogAnalyticsQueryPackQueryProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface LogAnalyticsQueryPackProperties {
	readonly provisioningState?: string | undefined;
	readonly queryPackId?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly timeModified?: string | undefined;
}
export interface LogAnalyticsQueryPackQueryProperties {
	readonly author?: string | undefined;
	readonly body: string;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly id?: string | undefined;
	readonly properties?: any | undefined;
	readonly related?: LogAnalyticsQueryPackQueryPropertiesRelated | undefined;
	readonly tags?: LogAnalyticsQueryPackQueryPropertiesTags | undefined;
	readonly timeCreated?: string | undefined;
	readonly timeModified?: string | undefined;
}
export interface LogAnalyticsQueryPackQueryPropertiesRelated {
	readonly categories?: string[] | undefined;
	readonly resourceTypes?: string[] | undefined;
	readonly solutions?: string[] | undefined;
}
export interface LogAnalyticsQueryPackQueryPropertiesTags {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface QueryPacksResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("application" | "key" | "managedIdentity" | "user") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("application" | "key" | "managedIdentity" | "user") | undefined;
}
export default {
	queryPacks: queryPacks,
	"queryPacks/queries": queryPacks_queries,
};
