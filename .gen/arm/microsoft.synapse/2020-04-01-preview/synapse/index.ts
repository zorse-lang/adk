import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces_sqlDatabases
	extends ArmResource<workspaces_sqlDatabasesComponentInputs>
	implements workspaces_sqlDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlDatabases", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlDatabases";
}
export interface workspaces_sqlDatabasesComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlDatabases";
}
export interface workspaces_sqlDatabasesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlDatabaseProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_sqlPools
	extends ArmResource<workspaces_sqlPoolsComponentInputs>
	implements workspaces_sqlPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools";
}
export interface workspaces_sqlPoolsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools";
}
export interface workspaces_sqlPoolsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlPoolProperties;
	readonly sku?: SkuV3;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface SkuV3 {
	readonly name: string;
	readonly tier?: string;
}
export interface SqlDatabaseDataRetention {
	readonly dropRetentionPeriod?: string;
	readonly retentionPeriod?: string;
}
export interface SqlDatabaseProperties {
	readonly collation?: string;
	readonly databaseGuid?: string;
	readonly dataRetention?: SqlDatabaseDataRetention;
	readonly status?:
		| "AutoClosed"
		| "Copying"
		| "Creating"
		| "Disabled"
		| "EmergencyMode"
		| "Inaccessible"
		| "Offline"
		| "OfflineChangingDwPerformanceTiers"
		| "OfflineSecondary"
		| "Online"
		| "OnlineChangingDwPerformanceTiers"
		| "Paused"
		| "Pausing"
		| "Recovering"
		| "RecoveryPending"
		| "Restoring"
		| "Resuming"
		| "Scaling"
		| "Shutdown"
		| "Standby"
		| "Suspect";
	readonly storageRedundancy?: "Geo" | "GeoZone" | "Local" | "Zone";
}
export interface SqlPoolProperties {
	readonly autoPauseTimer?: number;
	readonly autoResume?: boolean;
	readonly currentServiceObjectiveName?: string;
	readonly maxServiceObjectiveName?: string;
	readonly requestedServiceObjectiveName?: string;
	readonly sqlPoolGuid?: string;
	readonly status?:
		| "Creating"
		| "Dropping"
		| "Error"
		| "Inaccessible"
		| "Invisible"
		| "Offline"
		| "Online"
		| "Paused"
		| "Pausing"
		| "Resuming"
		| "Scaling"
		| "Unknown";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	"workspaces/sqlDatabases": workspaces_sqlDatabases,
	"workspaces/sqlPools": workspaces_sqlPools,
};
