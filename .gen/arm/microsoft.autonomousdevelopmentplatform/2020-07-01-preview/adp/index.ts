import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.AutonomousDevelopmentPlatform/accounts", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AutonomousDevelopmentPlatform/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AutonomousDevelopmentPlatform/accounts";
}
export interface accountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class accounts_dataPools
	extends ArmResource<accounts_dataPoolsComponentInputs>
	implements accounts_dataPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_dataPoolsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools",
			"2020-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools";
}
export interface accounts_dataPoolsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools";
}
export interface accounts_dataPoolsComponentInputs {
	readonly name: string;
	readonly properties?: DataPoolProperties;
}
export interface AccountProperties {
	readonly accountId?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded";
}
export interface DataPoolLocation {
	readonly name: string;
}
export interface DataPoolProperties {
	readonly dataPoolId?: string;
	readonly locations?: DataPoolLocation[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded";
	readonly systemData?: SystemData;
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
	accounts: accounts,
	"accounts/dataPools": accounts_dataPools,
};
