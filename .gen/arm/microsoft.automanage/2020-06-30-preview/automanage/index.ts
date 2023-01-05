import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/accounts", "2020-06-30-preview", options);
	}
	public readonly apiVersion: "2020-06-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2020-06-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: AccountIdentity;
	readonly location: string;
	readonly name: string;
	readonly tags?: TrackedResourceTags;
}
export class configurationProfileAssignments
	extends ArmResource<configurationProfileAssignmentsComponentInputs>
	implements configurationProfileAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfileAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfileAssignments", "2020-06-30-preview", options);
	}
	public readonly apiVersion: "2020-06-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfileAssignments";
}
export interface configurationProfileAssignmentsComponentOutputs {
	readonly apiVersion: "2020-06-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfileAssignments";
}
export interface configurationProfileAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProfileAssignmentProperties;
}
export class configurationProfilePreferences
	extends ArmResource<configurationProfilePreferencesComponentInputs>
	implements configurationProfilePreferencesComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfilePreferencesComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfilePreferences", "2020-06-30-preview", options);
	}
	public readonly apiVersion: "2020-06-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfilePreferences";
}
export interface configurationProfilePreferencesComponentOutputs {
	readonly apiVersion: "2020-06-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfilePreferences";
}
export interface configurationProfilePreferencesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationProfilePreferenceProperties;
	readonly tags?: TrackedResourceTags;
}
export interface AccountIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None";
}
export interface ConfigurationProfileAssignmentCompliance {
	readonly updateStatus?: "Created" | "Failed" | "Succeeded";
}
export interface ConfigurationProfileAssignmentProperties {
	readonly accountId?: string;
	readonly compliance?: ConfigurationProfileAssignmentCompliance;
	readonly configurationProfile?:
		| "Azure virtual machine best practices – Dev/Test"
		| "Azure virtual machine best practices – Production";
	readonly configurationProfilePreferenceId?: string;
	readonly provisioningState?: "Created" | "Failed" | "Succeeded";
	readonly targetId?: string;
}
export interface ConfigurationProfilePreferenceAntiMalware {
	readonly enableRealTimeProtection?: "False" | "True";
	readonly exclusions?: any;
	readonly runScheduledScan?: "False" | "True";
	readonly scanDay?: string;
	readonly scanTimeInMinutes?: string;
	readonly scanType?: "Full" | "Quick";
}
export interface ConfigurationProfilePreferenceProperties {
	readonly antiMalware?: ConfigurationProfilePreferenceAntiMalware;
	readonly vmBackup?: ConfigurationProfilePreferenceVmBackup;
}
export interface ConfigurationProfilePreferenceVmBackup {
	readonly instantRpRetentionRangeInDays?: number;
	readonly retentionPolicy?: string;
	readonly schedulePolicy?: string;
	readonly timeZone?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	accounts: accounts,
	configurationProfileAssignments: configurationProfileAssignments,
	configurationProfilePreferences: configurationProfilePreferences,
};
