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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionIntent | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ProtectionIntent {
	readonly backupManagementType?:
		| (
				| "AzureBackupServer"
				| "AzureIaasVM"
				| "AzureSql"
				| "AzureStorage"
				| "AzureWorkload"
				| "DPM"
				| "DefaultBackup"
				| "Invalid"
				| "MAB"
		  )
		| undefined;
	readonly itemId?: string | undefined;
	readonly policyId?: string | undefined;
	readonly protectionState?: ("Invalid" | "NotProtected" | "Protected" | "Protecting" | "ProtectionFailed") | undefined;
	readonly sourceResourceId?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	"vaults/backupFabrics/backupProtectionIntent": vaults_backupFabrics_backupProtectionIntent,
};
