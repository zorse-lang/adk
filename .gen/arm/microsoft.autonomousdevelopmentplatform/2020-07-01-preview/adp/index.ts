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
	readonly properties?: AccountProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: DataPoolProperties | undefined;
}
export interface AccountProperties {
	readonly accountId?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded")
		| undefined;
}
export interface DataPoolLocation {
	readonly name: string;
}
export interface DataPoolProperties {
	readonly dataPoolId?: string | undefined;
	readonly locations?: DataPoolLocation[] | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded")
		| undefined;
	readonly systemData?: SystemData | undefined;
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
	accounts: accounts,
	"accounts/dataPools": accounts_dataPools,
};
