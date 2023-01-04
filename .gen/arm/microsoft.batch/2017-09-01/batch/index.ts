import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class batchAccounts extends ArmResource<batchAccountsComponentInputs> implements batchAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: batchAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts", "2017-09-01", options);
	}
	public readonly apiVersion: "2017-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts";
}
export interface batchAccountsComponentOutputs {
	readonly apiVersion: "2017-09-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts";
}
export interface batchAccountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: BatchAccountCreatePropertiesOrBatchAccountProperties | undefined;
	readonly tags?: BatchAccountCreateParametersTags | undefined;
}
export class batchAccounts_applications
	extends ArmResource<batchAccounts_applicationsComponentInputs>
	implements batchAccounts_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/applications", "2017-09-01", options);
	}
	public readonly apiVersion: "2017-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/applications";
}
export interface batchAccounts_applicationsComponentOutputs {
	readonly apiVersion: "2017-09-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/applications";
}
export interface batchAccounts_applicationsComponentInputs {
	readonly allowUpdates?: boolean | undefined;
	readonly defaultVersion?: string | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly packages?: ApplicationPackage[] | undefined;
}
export class batchAccounts_applications_versions
	extends ArmResource<batchAccounts_applications_versionsComponentInputs>
	implements batchAccounts_applications_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_applications_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/applications/versions", "2017-09-01", options);
	}
	public readonly apiVersion: "2017-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/applications/versions";
}
export interface batchAccounts_applications_versionsComponentOutputs {
	readonly apiVersion: "2017-09-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/applications/versions";
}
export interface batchAccounts_applications_versionsComponentInputs {
	readonly format?: string | undefined;
	readonly lastActivationTime?: string | undefined;
	readonly name: string;
	readonly state?: ("Active" | "Pending") | undefined;
	readonly storageUrl?: string | undefined;
	readonly storageUrlExpiry?: string | undefined;
	readonly version?: string | undefined;
}
export class batchAccounts_certificates
	extends ArmResource<batchAccounts_certificatesComponentInputs>
	implements batchAccounts_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/certificates", "2017-09-01", options);
	}
	public readonly apiVersion: "2017-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/certificates";
}
export interface batchAccounts_certificatesComponentOutputs {
	readonly apiVersion: "2017-09-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/certificates";
}
export interface batchAccounts_certificatesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: CertificateCreateOrUpdatePropertiesOrCertificateProperties | undefined;
}
export class batchAccounts_pools
	extends ArmResource<batchAccounts_poolsComponentInputs>
	implements batchAccounts_poolsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_poolsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/pools", "2017-09-01", options);
	}
	public readonly apiVersion: "2017-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/pools";
}
export interface batchAccounts_poolsComponentOutputs {
	readonly apiVersion: "2017-09-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/pools";
}
export interface batchAccounts_poolsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: PoolProperties | undefined;
}
export function listKeys(resource: batchAccounts): BatchAccountKeys {
	if (resource.apiVersion !== "2017-09-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Batch/batchAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplicationPackage {
	readonly format?: string | undefined;
	readonly id?: string | undefined;
	readonly lastActivationTime?: string | undefined;
	readonly state?: ("Active" | "Pending") | undefined;
	readonly storageUrl?: string | undefined;
	readonly storageUrlExpiry?: string | undefined;
	readonly version?: string | undefined;
}
export interface ApplicationPackageReference {
	readonly id: string;
	readonly version?: string | undefined;
}
export interface AutoScaleRun {
	readonly error?: AutoScaleRunError | undefined;
	readonly evaluationTime: string;
	readonly results?: string | undefined;
}
export interface AutoScaleRunError {
	readonly code: string;
	readonly details?: AutoScaleRunError[] | undefined;
	readonly message: string;
}
export interface AutoScaleSettings {
	readonly evaluationInterval?: string | undefined;
	readonly formula: string;
}
export interface AutoStorageBasePropertiesOrAutoStorageProperties {
	readonly lastKeySync?: string | undefined;
	readonly storageAccountId: string;
}
export interface AutoUserSpecification {
	readonly elevationLevel?: "Admin" | undefined;
	readonly scope?: "Pool" | undefined;
}
export interface BatchAccountCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BatchAccountCreatePropertiesOrBatchAccountProperties {
	readonly accountEndpoint?: string | undefined;
	readonly activeJobAndJobScheduleQuota?: number | undefined;
	readonly autoStorage?: AutoStorageBasePropertiesOrAutoStorageProperties | undefined;
	readonly dedicatedCoreQuota?: number | undefined;
	readonly keyVaultReference?: KeyVaultReference | undefined;
	readonly lowPriorityCoreQuota?: number | undefined;
	readonly poolAllocationMode?: "BatchService" | undefined;
	readonly poolQuota?: number | undefined;
	readonly provisioningState?: ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Invalid") | undefined;
}
export interface BatchAccountKeys {
	readonly accountName?: string | undefined;
	readonly primary?: string | undefined;
	readonly secondary?: string | undefined;
}
export interface CertificateCreateOrUpdatePropertiesOrCertificateProperties {
	readonly data: string;
	readonly deleteCertificateError?: DeleteCertificateError | undefined;
	readonly format?: "Cer" | undefined;
	readonly password?: string | undefined;
	readonly previousProvisioningState?: ("Deleting" | "Failed") | undefined;
	readonly previousProvisioningStateTransitionTime?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed") | undefined;
}
export interface CertificateReference {
	readonly id: string;
	readonly storeLocation?: "CurrentUser" | undefined;
	readonly storeName?: string | undefined;
	readonly visibility?: ("RemoteUser" | "StartTask"[]) | undefined;
}
export interface CloudServiceConfiguration {
	readonly currentOSVersion?: string | undefined;
	readonly osFamily: string;
	readonly targetOSVersion?: string | undefined;
}
export interface DataDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
}
export interface DeleteCertificateError {
	readonly code: string;
	readonly details?: DeleteCertificateError[] | undefined;
	readonly message: string;
	readonly target?: string | undefined;
}
export interface DeploymentConfiguration {
	readonly cloudServiceConfiguration?: CloudServiceConfiguration | undefined;
	readonly virtualMachineConfiguration?: VirtualMachineConfiguration | undefined;
}
export interface EnvironmentSetting {
	readonly name: string;
	readonly value?: string | undefined;
}
export interface FixedScaleSettings {
	readonly nodeDeallocationOption?: ("Requeue" | "RetainedData" | "TaskCompletion") | undefined;
	readonly resizeTimeout?: string | undefined;
	readonly targetDedicatedNodes?: number | undefined;
	readonly targetLowPriorityNodes?: number | undefined;
}
export interface ImageReference {
	readonly id?: string | undefined;
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface InboundNatPool {
	readonly backendPort: number;
	readonly frontendPortRangeEnd: number;
	readonly frontendPortRangeStart: number;
	readonly name: string;
	readonly networkSecurityGroupRules?: NetworkSecurityGroupRule[] | undefined;
	readonly protocol: "TCP";
}
export interface KeyVaultReference {
	readonly id: string;
	readonly url: string;
}
export interface LinuxUserConfiguration {
	readonly gid?: number | undefined;
	readonly sshPrivateKey?: string | undefined;
	readonly uid?: number | undefined;
}
export interface MetadataItem {
	readonly name: string;
	readonly value: string;
}
export interface NetworkConfiguration {
	readonly endpointConfiguration?: PoolEndpointConfiguration | undefined;
	readonly subnetId?: string | undefined;
}
export interface NetworkSecurityGroupRule {
	readonly access: "Allow";
	readonly priority: number;
	readonly sourceAddressPrefix: string;
}
export interface OSDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
}
export interface PoolEndpointConfiguration {
	readonly inboundNatPools: InboundNatPool[];
}
export interface PoolProperties {
	readonly allocationState?: ("Resizing" | "Steady") | undefined;
}
export interface ResizeError {
	readonly code: string;
	readonly details?: ResizeError[] | undefined;
	readonly message: string;
}
export interface ResizeOperationStatus {
	readonly errors?: ResizeError[] | undefined;
	readonly nodeDeallocationOption?: ("Requeue" | "RetainedData" | "TaskCompletion") | undefined;
	readonly resizeTimeout?: string | undefined;
	readonly startTime?: string | undefined;
	readonly targetDedicatedNodes?: number | undefined;
	readonly targetLowPriorityNodes?: number | undefined;
}
export interface ResourceFile {
	readonly blobSource: string;
	readonly fileMode?: string | undefined;
	readonly filePath: string;
}
export interface ScaleSettings {
	readonly autoScale?: AutoScaleSettings | undefined;
	readonly fixedScale?: FixedScaleSettings | undefined;
}
export interface StartTask {
	readonly commandLine?: string | undefined;
	readonly environmentSettings?: EnvironmentSetting[] | undefined;
	readonly maxTaskRetryCount?: number | undefined;
	readonly resourceFiles?: ResourceFile[] | undefined;
	readonly userIdentity?: UserIdentity | undefined;
	readonly waitForSuccess?: boolean | undefined;
}
export interface TaskSchedulingPolicy {
	readonly nodeFillType: "Pack";
}
export interface UserAccount {
	readonly elevationLevel?: "Admin" | undefined;
	readonly linuxUserConfiguration?: LinuxUserConfiguration | undefined;
	readonly name: string;
	readonly password: string;
}
export interface UserIdentity {
	readonly autoUser?: AutoUserSpecification | undefined;
	readonly userName?: string | undefined;
}
export interface VirtualMachineConfiguration {
	readonly dataDisks?: DataDisk[] | undefined;
	readonly imageReference: ImageReference;
	readonly licenseType?: string | undefined;
}
export interface WindowsConfiguration {
	readonly enableAutomaticUpdates?: boolean | undefined;
}
export default {
	batchAccounts: batchAccounts,
	"batchAccounts/applications": batchAccounts_applications,
	"batchAccounts/applications/versions": batchAccounts_applications_versions,
	"batchAccounts/certificates": batchAccounts_certificates,
	"batchAccounts/pools": batchAccounts_pools,
};