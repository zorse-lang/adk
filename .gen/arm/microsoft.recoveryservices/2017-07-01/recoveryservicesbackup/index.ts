import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_backupFabrics_backupProtectionIntent
	extends ArmResource<vaults_backupFabrics_backupProtectionIntentComponentInputs>
	implements vaults_backupFabrics_backupProtectionIntentComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupFabrics_backupProtectionIntentComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent",
			"2017-07-01",
			options,
		);
	}
	public readonly apiVersion: "2017-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent";
}
export interface vaults_backupFabrics_backupProtectionIntentComponentOutputs {
	readonly apiVersion: "2017-07-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent";
}
export interface vaults_backupFabrics_backupProtectionIntentComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectionIntent;
	readonly tags?: ResourceTags;
}
export interface ProtectionIntent {
	readonly backupManagementType?:
		| "AzureBackupServer"
		| "AzureIaasVM"
		| "AzureSql"
		| "AzureStorage"
		| "AzureWorkload"
		| "DPM"
		| "DefaultBackup"
		| "Invalid"
		| "MAB";
	readonly itemId?: string;
	readonly policyId?: string;
	readonly protectionState?: "Invalid" | "NotProtected" | "Protected" | "Protecting" | "ProtectionFailed";
	readonly sourceResourceId?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	"vaults/backupFabrics/backupProtectionIntent": vaults_backupFabrics_backupProtectionIntent,
};
