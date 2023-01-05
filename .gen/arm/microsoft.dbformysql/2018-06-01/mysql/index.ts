import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers_advisors
	extends ArmResource<servers_advisorsComponentInputs>
	implements servers_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/advisors", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/advisors";
}
export interface servers_advisorsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/advisors";
}
export interface servers_advisorsComponentInputs {
	readonly name: string;
	readonly properties?: any;
}
export class servers_advisors_recommendedActions
	extends ArmResource<servers_advisors_recommendedActionsComponentInputs>
	implements servers_advisors_recommendedActionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advisors_recommendedActionsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/advisors/recommendedActions", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/advisors/recommendedActions";
}
export interface servers_advisors_recommendedActionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/advisors/recommendedActions";
}
export interface servers_advisors_recommendedActionsComponentInputs {
	readonly name: string;
	readonly properties?: RecommendationActionProperties;
}
export class servers_privateEndpointConnections
	extends ArmResource<servers_privateEndpointConnectionsComponentInputs>
	implements servers_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/privateEndpointConnections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/privateEndpointConnections";
}
export interface servers_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/privateEndpointConnections";
}
export interface servers_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class servers_privateLinkResources
	extends ArmResource<servers_privateLinkResourcesComponentInputs>
	implements servers_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/privateLinkResources", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export class servers_queryTexts
	extends ArmResource<servers_queryTextsComponentInputs>
	implements servers_queryTextsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_queryTextsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/queryTexts", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/queryTexts";
}
export interface servers_queryTextsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/queryTexts";
}
export interface servers_queryTextsComponentInputs {
	readonly name: string;
	readonly properties?: QueryTextProperties;
}
export class servers_topQueryStatistics
	extends ArmResource<servers_topQueryStatisticsComponentInputs>
	implements servers_topQueryStatisticsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_topQueryStatisticsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/topQueryStatistics", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/topQueryStatistics";
}
export interface servers_topQueryStatisticsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/topQueryStatistics";
}
export interface servers_topQueryStatisticsComponentInputs {
	readonly name: string;
	readonly properties?: QueryStatisticProperties;
}
export class servers_waitStatistics
	extends ArmResource<servers_waitStatisticsComponentInputs>
	implements servers_waitStatisticsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_waitStatisticsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/waitStatistics", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/waitStatistics";
}
export interface servers_waitStatisticsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/waitStatistics";
}
export interface servers_waitStatisticsComponentInputs {
	readonly name: string;
	readonly properties?: WaitStatisticProperties;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: string;
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: string;
}
export interface QueryStatisticProperties {
	readonly aggregationFunction?: string;
	readonly databaseNames?: string[];
	readonly endTime?: string;
	readonly metricDisplayName?: string;
	readonly metricName?: string;
	readonly metricValue?: number;
	readonly metricValueUnit?: string;
	readonly queryExecutionCount?: number;
	readonly queryId?: string;
	readonly startTime?: string;
}
export interface QueryTextProperties {
	readonly queryId?: string;
	readonly queryText?: string;
}
export interface RecommendationActionProperties {
	readonly actionId?: number;
	readonly advisorName?: string;
	readonly createdTime?: string;
	readonly details?: RecommendationActionPropertiesDetails;
	readonly expirationTime?: string;
	readonly reason?: string;
	readonly recommendationType?: string;
	readonly sessionId?: string;
}
export interface RecommendationActionPropertiesDetails {
	readonly [key: string]: string;
}
export interface WaitStatisticProperties {
	readonly count?: number;
	readonly databaseName?: string;
	readonly endTime?: string;
	readonly eventName?: string;
	readonly eventTypeName?: string;
	readonly queryId?: number;
	readonly startTime?: string;
	readonly totalTimeInMs?: number;
	readonly userId?: number;
}
export default {
	"servers/advisors": servers_advisors,
	"servers/advisors/recommendedActions": servers_advisors_recommendedActions,
	"servers/privateEndpointConnections": servers_privateEndpointConnections,
	"servers/privateLinkResources": servers_privateLinkResources,
	"servers/queryTexts": servers_queryTexts,
	"servers/topQueryStatistics": servers_topQueryStatistics,
	"servers/waitStatistics": servers_waitStatistics,
};
