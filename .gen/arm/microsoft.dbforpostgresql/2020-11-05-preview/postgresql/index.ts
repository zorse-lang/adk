import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class flexibleServers_databases
	extends ArmResource<flexibleServers_databasesComponentInputs>
	implements flexibleServers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DBForPostgreSql/flexibleServers/databases", "2020-11-05-preview", options);
	}
	public readonly apiVersion: "2020-11-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForPostgreSql/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentOutputs {
	readonly apiVersion: "2020-11-05-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForPostgreSql/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
}
export interface DatabaseProperties {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
}
export default {
	"flexibleServers/databases": flexibleServers_databases,
};
