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
	readonly properties?: SqlDatabaseProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlPoolProperties | undefined;
	readonly sku?: SkuV3 | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface SkuV3 {
	readonly name: string;
	readonly tier?: string | undefined;
}
export interface SqlDatabaseDataRetention {
	readonly dropRetentionPeriod?: string | undefined;
	readonly retentionPeriod?: string | undefined;
}
export interface SqlDatabaseProperties {
	readonly collation?: string | undefined;
	readonly databaseGuid?: string | undefined;
	readonly dataRetention?: SqlDatabaseDataRetention | undefined;
	readonly status?:
		| (
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
				| "Suspect"
		  )
		| undefined;
	readonly storageRedundancy?: ("Geo" | "GeoZone" | "Local" | "Zone") | undefined;
}
export interface SqlPoolProperties {
	readonly autoPauseTimer?: number | undefined;
	readonly autoResume?: boolean | undefined;
	readonly currentServiceObjectiveName?: string | undefined;
	readonly maxServiceObjectiveName?: string | undefined;
	readonly requestedServiceObjectiveName?: string | undefined;
	readonly sqlPoolGuid?: string | undefined;
	readonly status?:
		| (
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
				| "Unknown"
		  )
		| undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	"workspaces/sqlDatabases": workspaces_sqlDatabases,
	"workspaces/sqlPools": workspaces_sqlPools,
};
