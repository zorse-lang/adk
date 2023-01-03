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
	readonly properties?: SqlServerRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: SqlServerProperties | undefined;
}
export interface SqlServerProperties {
	readonly cores?: number | undefined;
	readonly edition?: string | undefined;
	readonly propertyBag?: string | undefined;
	readonly registrationID?: string | undefined;
	readonly version?: string | undefined;
}
export interface SqlServerRegistrationProperties {
	readonly propertyBag?: string | undefined;
	readonly resourceGroup?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("application" | "key" | "managedIdentity" | "user") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("application" | "key" | "managedIdentity" | "user") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	sqlServerRegistrations: sqlServerRegistrations,
	"sqlServerRegistrations/sqlServers": sqlServerRegistrations_sqlServers,
};
