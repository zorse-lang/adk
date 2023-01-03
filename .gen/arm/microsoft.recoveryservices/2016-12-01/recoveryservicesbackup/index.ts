import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_backupEngines
	extends ArmResource<vaults_backupEnginesComponentInputs>
	implements vaults_backupEnginesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupEnginesComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupEngines", "2016-12-01", options);
	}
	public readonly apiVersion: "2016-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupEngines";
}
export interface vaults_backupEnginesComponentOutputs {
	readonly apiVersion: "2016-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupEngines";
}
export interface vaults_backupEnginesComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BackupEngineBase | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupFabrics_protectionContainers
	extends ArmResource<vaults_backupFabrics_protectionContainersComponentInputs>
	implements vaults_backupFabrics_protectionContainersComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupFabrics_protectionContainersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers",
			"2016-12-01",
			options,
		);
	}
	public readonly apiVersion: "2016-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers";
}
export interface vaults_backupFabrics_protectionContainersComponentOutputs {
	readonly apiVersion: "2016-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers";
}
export interface vaults_backupFabrics_protectionContainersComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionContainer | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupFabrics_protectionContainers_operationResults
	extends ArmResource<vaults_backupFabrics_protectionContainers_operationResultsComponentInputs>
	implements vaults_backupFabrics_protectionContainers_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupFabrics_protectionContainers_operationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults",
			"2016-12-01",
			options,
		);
	}
	public readonly apiVersion: "2016-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults";
}
export interface vaults_backupFabrics_protectionContainers_operationResultsComponentOutputs {
	readonly apiVersion: "2016-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/operationResults";
}
export interface vaults_backupFabrics_protectionContainers_operationResultsComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProtectionContainer | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_backupstorageconfig
	extends ArmResource<vaults_backupstorageconfigComponentInputs>
	implements vaults_backupstorageconfigComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupstorageconfigComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupstorageconfig", "2016-12-01", options);
	}
	public readonly apiVersion: "2016-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupstorageconfig";
}
export interface vaults_backupstorageconfigComponentOutputs {
	readonly apiVersion: "2016-12-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupstorageconfig";
}
export interface vaults_backupstorageconfigComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BackupResourceConfig | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AzureWorkloadContainerExtendedInfo {
	readonly hostServerName?: string | undefined;
	readonly inquiryInfo?: InquiryInfo | undefined;
	readonly nodesList?: DistributedNodesInfo[] | undefined;
}
export interface BackupEngineBase {
	readonly azureBackupAgentVersion?: string | undefined;
	readonly backupEngineId?: string | undefined;
	readonly backupEngineState?: string | undefined;
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
	readonly canReRegister?: boolean | undefined;
	readonly dpmVersion?: string | undefined;
	readonly extendedInfo?: BackupEngineExtendedInfo | undefined;
	readonly friendlyName?: string | undefined;
	readonly healthStatus?: string | undefined;
	readonly isAzureBackupAgentUpgradeAvailable?: boolean | undefined;
	readonly isDpmUpgradeAvailable?: boolean | undefined;
	readonly registrationStatus?: string | undefined;
}
export interface BackupEngineExtendedInfo {
	readonly availableDiskSpace?: number | undefined;
	readonly azureProtectedInstances?: number | undefined;
	readonly databaseName?: string | undefined;
	readonly diskCount?: number | undefined;
	readonly protectedItemsCount?: number | undefined;
	readonly protectedServersCount?: number | undefined;
	readonly refreshedAt?: string | undefined;
	readonly usedDiskSpace?: number | undefined;
}
export interface BackupResourceConfig {
	readonly storageModelType?: ("GeoRedundant" | "Invalid" | "LocallyRedundant") | undefined;
	readonly storageType?: ("GeoRedundant" | "Invalid" | "LocallyRedundant") | undefined;
	readonly storageTypeState?: ("Invalid" | "Locked" | "Unlocked") | undefined;
}
export interface ContainerIdentityInfo {
	readonly aadTenantId?: string | undefined;
	readonly audience?: string | undefined;
	readonly servicePrincipalClientId?: string | undefined;
	readonly uniqueName?: string | undefined;
}
export interface DistributedNodesInfo {
	readonly errorDetail?: ErrorDetail | undefined;
	readonly nodeName?: string | undefined;
	readonly status?: string | undefined;
}
export interface DPMContainerExtendedInfo {
	readonly lastRefreshedAt?: string | undefined;
}
export interface ErrorDetail {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly recommendations?: string[] | undefined;
}
export interface GenericContainerExtendedInfo {
	readonly containerIdentityInfo?: ContainerIdentityInfo | undefined;
	readonly rawCertData?: string | undefined;
	readonly serviceEndpoints?: GenericContainerExtendedInfoServiceEndpoints | undefined;
}
export interface GenericContainerExtendedInfoServiceEndpoints {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InquiryInfo {
	readonly errorDetail?: ErrorDetail | undefined;
	readonly inquiryDetails?: WorkloadInquiryDetails[] | undefined;
	readonly status?: string | undefined;
}
export interface InquiryValidation {
	readonly additionalDetail?: string | undefined;
	readonly errorDetail?: ErrorDetail | undefined;
	readonly status?: string | undefined;
}
export interface MabContainerExtendedInfo {
	readonly backupItems?: string[] | undefined;
	readonly backupItemType?:
		| (
				| "AzureFileShare"
				| "AzureSqlDb"
				| "Client"
				| "Exchange"
				| "FileFolder"
				| "GenericDataSource"
				| "Invalid"
				| "SAPAseDatabase"
				| "SAPHanaDatabase"
				| "SQLDB"
				| "SQLDataBase"
				| "Sharepoint"
				| "SystemState"
				| "VM"
				| "VMwareVM"
		  )
		| undefined;
	readonly lastBackupStatus?: string | undefined;
	readonly lastRefreshedAt?: string | undefined;
	readonly policyName?: string | undefined;
}
export interface MABContainerHealthDetails {
	readonly code?: number | undefined;
	readonly message?: string | undefined;
	readonly recommendations?: string[] | undefined;
	readonly title?: string | undefined;
}
export interface ProtectionContainer {
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
	readonly friendlyName?: string | undefined;
	readonly healthStatus?: string | undefined;
	readonly registrationStatus?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkloadInquiryDetails {
	readonly inquiryValidation?: InquiryValidation | undefined;
	readonly itemCount?: number | undefined;
	readonly type?: string | undefined;
}
export default {
	"vaults/backupEngines": vaults_backupEngines,
	"vaults/backupFabrics/protectionContainers": vaults_backupFabrics_protectionContainers,
	"vaults/backupFabrics/protectionContainers/operationResults":
		vaults_backupFabrics_protectionContainers_operationResults,
	"vaults/backupstorageconfig": vaults_backupstorageconfig,
};
