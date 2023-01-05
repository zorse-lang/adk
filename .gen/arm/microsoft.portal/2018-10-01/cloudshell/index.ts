import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class consoles extends ArmResource<consolesComponentInputs> implements consolesComponentOutputs {
	constructor(entity: ADKEntity, options: consolesComponentInputs) {
		super(entity, options.name, "Microsoft.Portal/consoles", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Portal/consoles";
}
export interface consolesComponentOutputs {
	readonly apiVersion: "2018-10-01";
	readonly id: string;
	readonly type: "Microsoft.Portal/consoles";
}
export interface consolesComponentInputs {
	readonly name: string;
	readonly properties: ConsoleCreatePropertiesOrConsoleProperties;
}
export class locations_consoles
	extends ArmResource<locations_consolesComponentInputs>
	implements locations_consolesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_consolesComponentInputs) {
		super(entity, options.name, "Microsoft.Portal/locations/consoles", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Portal/locations/consoles";
}
export interface locations_consolesComponentOutputs {
	readonly apiVersion: "2018-10-01";
	readonly id: string;
	readonly type: "Microsoft.Portal/locations/consoles";
}
export interface locations_consolesComponentInputs {
	readonly name: string;
	readonly properties?: ConsoleProperties;
}
export class locations_userSettings
	extends ArmResource<locations_userSettingsComponentInputs>
	implements locations_userSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_userSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Portal/locations/userSettings", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Portal/locations/userSettings";
}
export interface locations_userSettingsComponentOutputs {
	readonly apiVersion: "2018-10-01";
	readonly id: string;
	readonly type: "Microsoft.Portal/locations/userSettings";
}
export interface locations_userSettingsComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
}
export class userSettings extends ArmResource<userSettingsComponentInputs> implements userSettingsComponentOutputs {
	constructor(entity: ADKEntity, options: userSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Portal/userSettings", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Portal/userSettings";
}
export interface userSettingsComponentOutputs {
	readonly apiVersion: "2018-10-01";
	readonly id: string;
	readonly type: "Microsoft.Portal/userSettings";
}
export interface userSettingsComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
}
export interface ConsoleCreatePropertiesOrConsoleProperties {
	readonly osType: "Linux" | "Windows";
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Failed"
		| "NotSpecified"
		| "Pending"
		| "Repairing"
		| "Succeeded"
		| "Updating";
	readonly uri?: string;
}
export interface ConsoleProperties {
	readonly osType: "Linux" | "Windows";
	readonly provisioningState:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Failed"
		| "NotSpecified"
		| "Pending"
		| "Repairing"
		| "Succeeded"
		| "Updating";
	readonly uri: string;
}
export interface StorageProfile {
	readonly diskSizeInGB?: number;
	readonly fileShareName?: string;
	readonly storageAccountResourceId?: string;
}
export interface TerminalSettings {
	readonly fontSize?: "Large" | "Medium" | "NotSpecified" | "Small";
	readonly fontStyle?: "Courier" | "Monospace" | "NotSpecified";
}
export interface UserProperties {
	readonly preferredLocation: string;
	readonly preferredOsType: "Linux" | "Windows";
	readonly preferredShellType: "bash" | "powershell" | "pwsh";
	readonly storageProfile: StorageProfile;
	readonly terminalSettings: TerminalSettings;
}
export default {
	consoles: consoles,
	"locations/consoles": locations_consoles,
	"locations/userSettings": locations_userSettings,
	userSettings: userSettings,
};
