import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class migrateProjects
	extends ArmResource<migrateProjectsComponentInputs>
	implements migrateProjectsComponentOutputs
{
	constructor(entity: ADKEntity, options: migrateProjectsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/migrateProjects", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/migrateProjects";
}
export interface migrateProjectsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/migrateProjects";
}
export interface migrateProjectsComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MigrateProjectProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class migrateProjects_privateEndpointConnections
	extends ArmResource<migrateProjects_privateEndpointConnectionsComponentInputs>
	implements migrateProjects_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: migrateProjects_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/migrateProjects/privateEndpointConnections", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/migrateProjects/privateEndpointConnections";
}
export interface migrateProjects_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/migrateProjects/privateEndpointConnections";
}
export interface migrateProjects_privateEndpointConnectionsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectionStateRequestBodyPropertiesOrPrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ConnectionStateRequestBodyPropertiesOrPrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Accepted" | "Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface MigrateProjectProperties {
	readonly lastSummaryRefreshedTime?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled" | "NotSpecified") | undefined;
	readonly refreshSummaryState?: ("Completed" | "Failed" | "InProgress" | "Started") | undefined;
	readonly registeredTools?:
		| (
				| "AppServiceMigrationAssistant"
				| "Carbonite"
				| "CloudSphere"
				| "Cloudamize"
				| "CorentTech"
				| "DataMigrationAssistant"
				| "DatabaseMigrationService"
				| "Device42"
				| "Flexera"
				| "JetStream"
				| "Lakeside"
				| "Movere"
				| "RackWare"
				| "ServerAssessment"
				| "ServerAssessmentV1"
				| "ServerDiscovery"
				| "ServerDiscovery_Import"
				| "ServerMigration"
				| "ServerMigration_Replication"
				| "Turbonomic"
				| "UnifyCloud"
				| "Unknown"
				| "Zerto"[]
		  )
		| undefined;
	readonly serviceEndpoint?: string | undefined;
	readonly summary?: MigrateProjectPropertiesSummary | undefined;
	readonly utilityStorageAccountId?: string | undefined;
}
export interface MigrateProjectPropertiesSummary {
	readonly "[ key: string ]"?: ProjectSummary | undefined;
}
export interface PrivateEndpointConnection {
	readonly eTag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Accepted" | "Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ProjectSummary {
	readonly extendedSummary?: ProjectSummaryExtendedSummary | undefined;
	readonly instanceType?: string | undefined;
	readonly lastSummaryRefreshedTime?: string | undefined;
	readonly refreshSummaryState?: ("Completed" | "Failed" | "InProgress" | "Started") | undefined;
}
export interface ProjectSummaryExtendedSummary {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceId {
	readonly id?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	migrateProjects: migrateProjects,
	"migrateProjects/privateEndpointConnections": migrateProjects_privateEndpointConnections,
};
