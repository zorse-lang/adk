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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: MigrateProjectProperties;
	readonly systemData?: SystemData;
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
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: ConnectionStateRequestBodyPropertiesOrPrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export interface ConnectionStateRequestBodyPropertiesOrPrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Accepted" | "Failed" | "InProgress" | "Succeeded";
}
export interface MigrateProjectProperties {
	readonly lastSummaryRefreshedTime?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled" | "NotSpecified";
	readonly refreshSummaryState?: "Completed" | "Failed" | "InProgress" | "Started";
	readonly registeredTools?:
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
		| "Zerto"[];
	readonly serviceEndpoint?: string;
	readonly summary?: MigrateProjectPropertiesSummary;
	readonly utilityStorageAccountId?: string;
}
export interface MigrateProjectPropertiesSummary {
	readonly [key: string]: ProjectSummary;
}
export interface PrivateEndpointConnection {
	readonly eTag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Accepted" | "Failed" | "InProgress" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ProjectSummary {
	readonly extendedSummary?: ProjectSummaryExtendedSummary;
	readonly instanceType?: string;
	readonly lastSummaryRefreshedTime?: string;
	readonly refreshSummaryState?: "Completed" | "Failed" | "InProgress" | "Started";
}
export interface ProjectSummaryExtendedSummary {
	readonly [key: string]: string;
}
export interface ResourceId {
	readonly id?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	migrateProjects: migrateProjects,
	"migrateProjects/privateEndpointConnections": migrateProjects_privateEndpointConnections,
};
