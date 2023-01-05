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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: BackupEngineBase;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectionContainer;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProtectionContainer;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: BackupResourceConfig;
	readonly tags?: ResourceTags;
}
export interface AzureWorkloadContainerExtendedInfo {
	readonly hostServerName?: string;
	readonly inquiryInfo?: InquiryInfo;
	readonly nodesList?: DistributedNodesInfo[];
}
export interface BackupEngineBase {
	readonly azureBackupAgentVersion?: string;
	readonly backupEngineId?: string;
	readonly backupEngineState?: string;
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
	readonly canReRegister?: boolean;
	readonly dpmVersion?: string;
	readonly extendedInfo?: BackupEngineExtendedInfo;
	readonly friendlyName?: string;
	readonly healthStatus?: string;
	readonly isAzureBackupAgentUpgradeAvailable?: boolean;
	readonly isDpmUpgradeAvailable?: boolean;
	readonly registrationStatus?: string;
}
export interface BackupEngineExtendedInfo {
	readonly availableDiskSpace?: number;
	readonly azureProtectedInstances?: number;
	readonly databaseName?: string;
	readonly diskCount?: number;
	readonly protectedItemsCount?: number;
	readonly protectedServersCount?: number;
	readonly refreshedAt?: string;
	readonly usedDiskSpace?: number;
}
export interface BackupResourceConfig {
	readonly storageModelType?: "GeoRedundant" | "Invalid" | "LocallyRedundant";
	readonly storageType?: "GeoRedundant" | "Invalid" | "LocallyRedundant";
	readonly storageTypeState?: "Invalid" | "Locked" | "Unlocked";
}
export interface ContainerIdentityInfo {
	readonly aadTenantId?: string;
	readonly audience?: string;
	readonly servicePrincipalClientId?: string;
	readonly uniqueName?: string;
}
export interface DistributedNodesInfo {
	readonly errorDetail?: ErrorDetail;
	readonly nodeName?: string;
	readonly status?: string;
}
export interface DPMContainerExtendedInfo {
	readonly lastRefreshedAt?: string;
}
export interface ErrorDetail {
	readonly code?: string;
	readonly message?: string;
	readonly recommendations?: string[];
}
export interface GenericContainerExtendedInfo {
	readonly containerIdentityInfo?: ContainerIdentityInfo;
	readonly rawCertData?: string;
	readonly serviceEndpoints?: GenericContainerExtendedInfoServiceEndpoints;
}
export interface GenericContainerExtendedInfoServiceEndpoints {
	readonly [key: string]: string;
}
export interface InquiryInfo {
	readonly errorDetail?: ErrorDetail;
	readonly inquiryDetails?: WorkloadInquiryDetails[];
	readonly status?: string;
}
export interface InquiryValidation {
	readonly additionalDetail?: string;
	readonly errorDetail?: ErrorDetail;
	readonly status?: string;
}
export interface MabContainerExtendedInfo {
	readonly backupItems?: string[];
	readonly backupItemType?:
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
		| "VMwareVM";
	readonly lastBackupStatus?: string;
	readonly lastRefreshedAt?: string;
	readonly policyName?: string;
}
export interface MABContainerHealthDetails {
	readonly code?: number;
	readonly message?: string;
	readonly recommendations?: string[];
	readonly title?: string;
}
export interface ProtectionContainer {
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
	readonly friendlyName?: string;
	readonly healthStatus?: string;
	readonly registrationStatus?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface WorkloadInquiryDetails {
	readonly inquiryValidation?: InquiryValidation;
	readonly itemCount?: number;
	readonly type?: string;
}
export default {
	"vaults/backupEngines": vaults_backupEngines,
	"vaults/backupFabrics/protectionContainers": vaults_backupFabrics_protectionContainers,
	"vaults/backupFabrics/protectionContainers/operationResults":
		vaults_backupFabrics_protectionContainers_operationResults,
	"vaults/backupstorageconfig": vaults_backupstorageconfig,
};
