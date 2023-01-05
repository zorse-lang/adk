import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class sqlServerRegistrations
	extends ArmResource<sqlServerRegistrationsComponentInputs>
	implements sqlServerRegistrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlServerRegistrationsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureData/sqlServerRegistrations", "2019-07-24-preview", options);
	}
	public readonly apiVersion: "2019-07-24-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureData/sqlServerRegistrations";
}
export interface sqlServerRegistrationsComponentOutputs {
	readonly apiVersion: "2019-07-24-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureData/sqlServerRegistrations";
}
export interface sqlServerRegistrationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlServerRegistrationProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class sqlServerRegistrations_sqlServers
	extends ArmResource<sqlServerRegistrations_sqlServersComponentInputs>
	implements sqlServerRegistrations_sqlServersComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlServerRegistrations_sqlServersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureData/sqlServerRegistrations/sqlServers", "2019-07-24-preview", options);
	}
	public readonly apiVersion: "2019-07-24-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureData/sqlServerRegistrations/sqlServers";
}
export interface sqlServerRegistrations_sqlServersComponentOutputs {
	readonly apiVersion: "2019-07-24-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureData/sqlServerRegistrations/sqlServers";
}
export interface sqlServerRegistrations_sqlServersComponentInputs {
	readonly name: string;
	readonly properties?: SqlServerProperties;
}
export interface SqlServerProperties {
	readonly cores?: number;
	readonly edition?: string;
	readonly propertyBag?: string;
	readonly registrationID?: string;
	readonly version?: string;
}
export interface SqlServerRegistrationProperties {
	readonly propertyBag?: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "application" | "key" | "managedIdentity" | "user";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "application" | "key" | "managedIdentity" | "user";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	sqlServerRegistrations: sqlServerRegistrations,
	"sqlServerRegistrations/sqlServers": sqlServerRegistrations_sqlServers,
};
