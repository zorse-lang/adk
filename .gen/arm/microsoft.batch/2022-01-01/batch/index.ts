import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class batchAccounts extends ArmResource<batchAccountsComponentInputs> implements batchAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: batchAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts";
}
export interface batchAccountsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts";
}
export interface batchAccountsComponentInputs {
	readonly identity?: BatchAccountIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: BatchAccountCreatePropertiesOrBatchAccountProperties;
	readonly tags?: BatchAccountCreateParametersTags;
}
export class batchAccounts_applications
	extends ArmResource<batchAccounts_applicationsComponentInputs>
	implements batchAccounts_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/applications", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/applications";
}
export interface batchAccounts_applicationsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/applications";
}
export interface batchAccounts_applicationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ApplicationProperties;
}
export class batchAccounts_applications_versions
	extends ArmResource<batchAccounts_applications_versionsComponentInputs>
	implements batchAccounts_applications_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_applications_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/applications/versions", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/applications/versions";
}
export interface batchAccounts_applications_versionsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/applications/versions";
}
export interface batchAccounts_applications_versionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ApplicationPackageProperties;
}
export class batchAccounts_certificates
	extends ArmResource<batchAccounts_certificatesComponentInputs>
	implements batchAccounts_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/certificates", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/certificates";
}
export interface batchAccounts_certificatesComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/certificates";
}
export interface batchAccounts_certificatesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CertificateCreateOrUpdatePropertiesOrCertificateProperties;
}
export class batchAccounts_detectors
	extends ArmResource<batchAccounts_detectorsComponentInputs>
	implements batchAccounts_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/detectors", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/detectors";
}
export interface batchAccounts_detectorsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/detectors";
}
export interface batchAccounts_detectorsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export class batchAccounts_pools
	extends ArmResource<batchAccounts_poolsComponentInputs>
	implements batchAccounts_poolsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_poolsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/pools", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/pools";
}
export interface batchAccounts_poolsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/pools";
}
export interface batchAccounts_poolsComponentInputs {
	readonly etag?: string;
	readonly identity?: BatchPoolIdentity;
	readonly name: string;
	readonly properties?: PoolProperties;
}
export class batchAccounts_privateEndpointConnections
	extends ArmResource<batchAccounts_privateEndpointConnectionsComponentInputs>
	implements batchAccounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/privateEndpointConnections", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/privateEndpointConnections";
}
export interface batchAccounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/privateEndpointConnections";
}
export interface batchAccounts_privateEndpointConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class batchAccounts_privateLinkResources
	extends ArmResource<batchAccounts_privateLinkResourcesComponentInputs>
	implements batchAccounts_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/privateLinkResources", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/privateLinkResources";
}
export interface batchAccounts_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/privateLinkResources";
}
export interface batchAccounts_privateLinkResourcesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export function listKeys(resource: batchAccounts): BatchAccountKeys {
	if (resource.apiVersion !== "2022-01-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Batch/batchAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplicationPackageProperties {
	readonly format?: string;
	readonly lastActivationTime?: string;
	readonly state?: "Active";
	readonly storageUrl?: string;
	readonly storageUrlExpiry?: string;
}
export interface ApplicationPackageReference {
	readonly id: string;
	readonly version?: string;
}
export interface ApplicationProperties {
	readonly allowUpdates?: boolean;
	readonly defaultVersion?: string;
	readonly displayName?: string;
}
export interface AutoScaleRun {
	readonly error?: AutoScaleRunError;
	readonly evaluationTime: string;
	readonly results?: string;
}
export interface AutoScaleRunError {
	readonly code: string;
	readonly details?: AutoScaleRunError[];
	readonly message: string;
}
export interface AutoScaleSettings {
	readonly evaluationInterval?: string;
	readonly formula: string;
}
export interface AutoStorageBasePropertiesOrAutoStorageProperties {
	readonly authenticationMode?: "BatchAccountManagedIdentity";
	readonly lastKeySync?: string;
	readonly nodeIdentityReference?: ComputeNodeIdentityReference;
	readonly storageAccountId: string;
}
export interface AutoUserSpecification {
	readonly elevationLevel?: "Admin";
	readonly scope?: "Pool";
}
export interface AzureBlobFileSystemConfiguration {
	readonly accountKey?: string;
	readonly accountName: string;
	readonly blobfuseOptions?: string;
	readonly containerName: string;
	readonly identityReference?: ComputeNodeIdentityReference;
	readonly relativeMountPath: string;
	readonly sasKey?: string;
}
export interface AzureFileShareConfiguration {
	readonly accountKey: string;
	readonly accountName: string;
	readonly azureFileUrl: string;
	readonly mountOptions?: string;
	readonly relativeMountPath: string;
}
export interface BatchAccountCreateParametersTags {
	readonly [key: string]: string;
}
export interface BatchAccountCreatePropertiesOrBatchAccountProperties {
	readonly accountEndpoint?: string;
	readonly activeJobAndJobScheduleQuota?: number;
	readonly allowedAuthenticationModes?: "AAD" | "SharedKey"[];
	readonly autoStorage?: AutoStorageBasePropertiesOrAutoStorageProperties;
	readonly dedicatedCoreQuota?: number;
	readonly dedicatedCoreQuotaPerVMFamily?: VirtualMachineFamilyCoreQuota[];
	readonly dedicatedCoreQuotaPerVMFamilyEnforced?: boolean;
	readonly encryption?: EncryptionProperties;
	readonly keyVaultReference?: KeyVaultReference;
	readonly lowPriorityCoreQuota?: number;
	readonly poolAllocationMode?: "BatchService";
	readonly poolQuota?: number;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Invalid";
	readonly publicNetworkAccess?: "Disabled";
}
export interface BatchAccountIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: BatchAccountIdentityUserAssignedIdentities;
}
export interface BatchAccountIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentities;
}
export interface BatchAccountKeys {
	readonly accountName?: string;
	readonly primary?: string;
	readonly secondary?: string;
}
export interface BatchPoolIdentity {
	readonly type: "None";
	readonly userAssignedIdentities?: BatchPoolIdentityUserAssignedIdentities;
}
export interface BatchPoolIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentities;
}
export interface CertificateCreateOrUpdatePropertiesOrCertificateProperties {
	readonly data: string;
	readonly deleteCertificateError?: DeleteCertificateError;
	readonly format?: "Cer";
	readonly password?: string;
	readonly previousProvisioningState?: "Deleting" | "Failed";
	readonly previousProvisioningStateTransitionTime?: string;
	readonly provisioningState?: "Deleting" | "Failed";
	readonly provisioningStateTransitionTime?: string;
	readonly publicData?: string;
	readonly thumbprint?: string;
	readonly thumbprintAlgorithm?: string;
}
export interface CertificateReference {
	readonly id: string;
	readonly storeLocation?: "CurrentUser";
	readonly storeName?: string;
	readonly visibility?: "RemoteUser" | "StartTask"[];
}
export interface CifsMountConfiguration {
	readonly mountOptions?: string;
	readonly password: string;
	readonly relativeMountPath: string;
	readonly source: string;
	readonly username: string;
}
export interface CloudServiceConfiguration {
	readonly osFamily: string;
	readonly osVersion?: string;
}
export interface ComputeNodeIdentityReference {
	readonly resourceId?: string;
}
export interface ContainerConfiguration {
	readonly containerImageNames?: string[];
	readonly containerRegistries?: ContainerRegistry[];
	readonly type: "DockerCompatible";
}
export interface ContainerRegistry {
	readonly identityReference?: ComputeNodeIdentityReference;
	readonly password?: string;
	readonly registryServer?: string;
	readonly username?: string;
}
export interface DataDisk {
	readonly caching?: "None" | "ReadOnly";
}
export interface DeleteCertificateError {
	readonly code: string;
	readonly details?: DeleteCertificateError[];
	readonly message: string;
	readonly target?: string;
}
export interface DeploymentConfiguration {
	readonly cloudServiceConfiguration?: CloudServiceConfiguration;
	readonly virtualMachineConfiguration?: VirtualMachineConfiguration;
}
export interface DetectorResponseProperties {
	readonly value?: string;
}
export interface DiffDiskSettings {
	readonly placement?: "CacheDisk";
}
export interface DiskEncryptionConfiguration {
	readonly targets?: "OsDisk"[];
}
export interface EncryptionProperties {
	readonly keySource?: "Microsoft.Batch";
	readonly keyVaultProperties?: KeyVaultProperties;
}
export interface EnvironmentSetting {
	readonly name: string;
	readonly value?: string;
}
export interface FixedScaleSettings {
	readonly nodeDeallocationOption?: "Requeue" | "RetainedData" | "TaskCompletion";
	readonly resizeTimeout?: string;
	readonly targetDedicatedNodes?: number;
	readonly targetLowPriorityNodes?: number;
}
export interface ImageReference {
	readonly id?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface InboundNatPool {
	readonly backendPort: number;
	readonly frontendPortRangeEnd: number;
	readonly frontendPortRangeStart: number;
	readonly name: string;
	readonly networkSecurityGroupRules?: NetworkSecurityGroupRule[];
	readonly protocol: "TCP";
}
export interface KeyVaultProperties {
	readonly keyIdentifier?: string;
}
export interface KeyVaultReference {
	readonly id: string;
	readonly url: string;
}
export interface LinuxUserConfiguration {
	readonly gid?: number;
	readonly sshPrivateKey?: string;
	readonly uid?: number;
}
export interface MetadataItem {
	readonly name: string;
	readonly value: string;
}
export interface MountConfiguration {
	readonly azureBlobFileSystemConfiguration?: AzureBlobFileSystemConfiguration;
	readonly azureFileShareConfiguration?: AzureFileShareConfiguration;
	readonly cifsMountConfiguration?: CifsMountConfiguration;
	readonly nfsMountConfiguration?: NFSMountConfiguration;
}
export interface NetworkConfiguration {
	readonly dynamicVNetAssignmentScope?: "job";
	readonly endpointConfiguration?: PoolEndpointConfiguration;
	readonly publicIPAddressConfiguration?: PublicIPAddressConfiguration;
	readonly subnetId?: string;
}
export interface NetworkSecurityGroupRule {
	readonly access: "Allow";
	readonly priority: number;
	readonly sourceAddressPrefix: string;
	readonly sourcePortRanges?: string[];
}
export interface NFSMountConfiguration {
	readonly mountOptions?: string;
	readonly relativeMountPath: string;
	readonly source: string;
}
export interface NodePlacementConfiguration {
	readonly policy?: "Regional";
}
export interface OSDisk {
	readonly ephemeralOSDiskSettings?: DiffDiskSettings;
}
export interface PoolEndpointConfiguration {
	readonly inboundNatPools: InboundNatPool[];
}
export interface PoolProperties {
	readonly allocationState?: "Resizing" | "Steady";
	readonly allocationStateTransitionTime?: string;
	readonly applicationLicenses?: string[];
	readonly applicationPackages?: ApplicationPackageReference[];
	readonly autoScaleRun?: AutoScaleRun;
	readonly certificates?: CertificateReference[];
	readonly creationTime?: string;
	readonly currentDedicatedNodes?: number;
	readonly currentLowPriorityNodes?: number;
	readonly deploymentConfiguration?: DeploymentConfiguration;
	readonly displayName?: string;
	readonly interNodeCommunication?: "Disabled";
	readonly lastModified?: string;
	readonly metadata?: MetadataItem[];
	readonly mountConfiguration?: MountConfiguration[];
	readonly networkConfiguration?: NetworkConfiguration;
	readonly provisioningState?: "Deleting";
	readonly provisioningStateTransitionTime?: string;
	readonly resizeOperationStatus?: ResizeOperationStatus;
	readonly scaleSettings?: ScaleSettings;
	readonly startTask?: StartTask;
	readonly taskSchedulingPolicy?: TaskSchedulingPolicy;
	readonly taskSlotsPerNode?: number;
	readonly userAccounts?: UserAccount[];
	readonly vmSize?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string;
	readonly description?: string;
	readonly status: "Approved" | "Disconnected" | "Pending";
}
export interface PublicIPAddressConfiguration {
	readonly ipAddressIds?: string[];
	readonly provision?: "BatchManaged" | "NoPublicIPAddresses";
}
export interface ResizeError {
	readonly code: string;
	readonly details?: ResizeError[];
	readonly message: string;
}
export interface ResizeOperationStatus {
	readonly errors?: ResizeError[];
	readonly nodeDeallocationOption?: "Requeue" | "RetainedData" | "TaskCompletion";
	readonly resizeTimeout?: string;
	readonly startTime?: string;
	readonly targetDedicatedNodes?: number;
	readonly targetLowPriorityNodes?: number;
}
export interface ResourceFile {
	readonly autoStorageContainerName?: string;
	readonly blobPrefix?: string;
	readonly fileMode?: string;
	readonly filePath?: string;
	readonly httpUrl?: string;
	readonly identityReference?: ComputeNodeIdentityReference;
	readonly storageContainerUrl?: string;
}
export interface ScaleSettings {
	readonly autoScale?: AutoScaleSettings;
	readonly fixedScale?: FixedScaleSettings;
}
export interface StartTask {
	readonly commandLine?: string;
	readonly containerSettings?: TaskContainerSettings;
	readonly environmentSettings?: EnvironmentSetting[];
	readonly maxTaskRetryCount?: number;
	readonly resourceFiles?: ResourceFile[];
	readonly userIdentity?: UserIdentity;
	readonly waitForSuccess?: boolean;
}
export interface TaskContainerSettings {
	readonly containerRunOptions?: string;
	readonly imageName: string;
	readonly registry?: ContainerRegistry;
	readonly workingDirectory?: "ContainerImageDefault";
}
export interface TaskSchedulingPolicy {
	readonly nodeFillType: "Pack";
}
export interface UserAccount {
	readonly elevationLevel?: "Admin";
	readonly linuxUserConfiguration?: LinuxUserConfiguration;
	readonly name: string;
	readonly password: string;
	readonly windowsUserConfiguration?: WindowsUserConfiguration;
}
export interface UserAssignedIdentities {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserIdentity {
	readonly autoUser?: AutoUserSpecification;
	readonly userName?: string;
}
export interface VirtualMachineConfiguration {
	readonly containerConfiguration?: ContainerConfiguration;
	readonly dataDisks?: DataDisk[];
	readonly diskEncryptionConfiguration?: DiskEncryptionConfiguration;
	readonly extensions?: VMExtension[];
	readonly imageReference: ImageReference;
	readonly licenseType?: string;
}
export interface VirtualMachineFamilyCoreQuota {
	readonly coreQuota?: number;
	readonly name?: string;
}
export interface VMExtension {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly name: string;
	readonly protectedSettings?: any;
	readonly provisionAfterExtensions?: string[];
	readonly publisher: string;
	readonly settings?: any;
	readonly type: string;
	readonly typeHandlerVersion?: string;
}
export interface WindowsConfiguration {
	readonly enableAutomaticUpdates?: boolean;
}
export interface WindowsUserConfiguration {
	readonly loginMode?: "Batch";
}
export default {
	batchAccounts: batchAccounts,
	"batchAccounts/applications": batchAccounts_applications,
	"batchAccounts/applications/versions": batchAccounts_applications_versions,
	"batchAccounts/certificates": batchAccounts_certificates,
	"batchAccounts/detectors": batchAccounts_detectors,
	"batchAccounts/pools": batchAccounts_pools,
	"batchAccounts/privateEndpointConnections": batchAccounts_privateEndpointConnections,
	"batchAccounts/privateLinkResources": batchAccounts_privateLinkResources,
};
