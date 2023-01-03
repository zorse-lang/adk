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
	readonly identity?: AccountIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ConfigurationProfileAssignmentProperties | undefined;
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
	readonly properties?: ConfigurationProfilePreferenceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AccountIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "None" | undefined;
}
export interface ConfigurationProfileAssignmentCompliance {
	readonly updateStatus?: ("Created" | "Failed" | "Succeeded") | undefined;
}
export interface ConfigurationProfileAssignmentProperties {
	readonly accountId?: string | undefined;
	readonly compliance?: ConfigurationProfileAssignmentCompliance | undefined;
	readonly configurationProfile?:
		| ("Azure virtual machine best practices – Dev/Test" | "Azure virtual machine best practices – Production")
		| undefined;
	readonly configurationProfilePreferenceId?: string | undefined;
	readonly provisioningState?: ("Created" | "Failed" | "Succeeded") | undefined;
	readonly targetId?: string | undefined;
}
export interface ConfigurationProfilePreferenceAntiMalware {
	readonly enableRealTimeProtection?: ("False" | "True") | undefined;
	readonly exclusions?: any | undefined;
	readonly runScheduledScan?: ("False" | "True") | undefined;
	readonly scanDay?: string | undefined;
	readonly scanTimeInMinutes?: string | undefined;
	readonly scanType?: ("Full" | "Quick") | undefined;
}
export interface ConfigurationProfilePreferenceProperties {
	readonly antiMalware?: ConfigurationProfilePreferenceAntiMalware | undefined;
	readonly vmBackup?: ConfigurationProfilePreferenceVmBackup | undefined;
}
export interface ConfigurationProfilePreferenceVmBackup {
	readonly instantRpRetentionRangeInDays?: number | undefined;
	readonly retentionPolicy?: string | undefined;
	readonly schedulePolicy?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	accounts: accounts,
	configurationProfileAssignments: configurationProfileAssignments,
	configurationProfilePreferences: configurationProfilePreferences,
};
