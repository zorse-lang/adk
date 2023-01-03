import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers_keys extends ArmResource<servers_keysComponentInputs> implements servers_keysComponentOutputs {
	constructor(entity: ADKEntity, options: servers_keysComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/servers/keys", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/servers/keys";
}
export interface servers_keysComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/servers/keys";
}
export interface servers_keysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ServerKeyProperties | undefined;
}
export interface ServerKeyProperties {
	readonly creationDate?: string | undefined;
	readonly serverKeyType: "AzureKeyVault";
	readonly uri?: string | undefined;
}
export default {
	"servers/keys": servers_keys,
};
