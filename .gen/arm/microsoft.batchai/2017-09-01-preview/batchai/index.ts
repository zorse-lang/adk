import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/clusters", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterBaseProperties;
	readonly tags?: ClusterCreateParametersTags;
}
export class fileServers extends ArmResource<fileServersComponentInputs> implements fileServersComponentOutputs {
	constructor(entity: ADKEntity, options: fileServersComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/fileServers", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/fileServers";
}
export interface fileServersComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/fileServers";
}
export interface fileServersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: FileServerBaseProperties;
	readonly tags?: FileServerCreateParametersTags;
}
export class jobs extends ArmResource<jobsComponentInputs> implements jobsComponentOutputs {
	constructor(entity: ADKEntity, options: jobsComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/jobs", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/jobs";
}
export interface jobsComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/jobs";
}
export interface jobsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: JobBaseProperties;
	readonly tags?: JobCreateParametersTags;
}
export interface ClusterBaseProperties {
	readonly allocationState?: "resizing";
	readonly allocationStateTransitionTime?: string;
	readonly creationTime?: string;
	readonly currentNodeCount?: number;
	readonly errors?: BatchAIError[];
	readonly nodeSetup?: NodeSetup;
	readonly nodeStateCounts?: NodeStateCounts;
	readonly provisioningState?: "creating" | "deleting" | "failed";
	readonly provisioningStateTransitionTime?: string;
	readonly scaleSettings?: ScaleSettings;
	readonly subnet?: ResourceId;
	readonly userAccountSettings: UserAccountSettings;
	readonly virtualMachineConfiguration?: VirtualMachineConfiguration;
	readonly vmPriority?: "dedicated";
	readonly vmSize: string;
}
export interface BatchAIError {
	readonly code?: string;
	readonly details?: NameValuePair[];
	readonly message?: string;
}
export interface NameValuePair {
	readonly name?: string;
	readonly value?: string;
}
export interface NodeSetup {
	readonly mountVolumes?: MountVolumes;
	readonly setupTask?: SetupTask;
}
export interface MountVolumes {
	readonly azureBlobFileSystems?: AzureBlobFileSystemReference[];
	readonly azureFileShares?: AzureFileShareReference[];
	readonly fileServers?: FileServerReference[];
	readonly unmanagedFileSystems?: UnmanagedFileSystemReference[];
}
export interface AzureBlobFileSystemReference {
	readonly accountName: string;
	readonly containerName: string;
	readonly credentials: AzureStorageCredentialsInfo;
	readonly mountOptions?: string;
	readonly relativeMountPath: string;
}
export interface AzureStorageCredentialsInfo {
	readonly accountKey?: string;
	readonly accountKeySecretReference?: KeyVaultSecretReference;
}
export interface KeyVaultSecretReference {
	readonly secretUrl: string;
	readonly sourceVault: ResourceId;
}
export interface ResourceId {
	readonly id: string;
}
export interface AzureFileShareReference {
	readonly accountName: string;
	readonly azureFileUrl: string;
	readonly credentials: AzureStorageCredentialsInfo;
	readonly directoryMode?: string;
	readonly fileMode?: string;
	readonly relativeMountPath: string;
}
export interface FileServerReference {
	readonly fileServer: ResourceId;
	readonly mountOptions?: string;
	readonly relativeMountPath: string;
	readonly sourceDirectory?: string;
}
export interface UnmanagedFileSystemReference {
	readonly mountCommand: string;
	readonly relativeMountPath: string;
}
export interface SetupTask {
	readonly commandLine: string;
	readonly environmentVariables?: EnvironmentSetting[];
	readonly runElevated?: boolean;
	readonly stdOutErrPathPrefix: string;
}
export interface EnvironmentSetting {
	readonly name: string;
	readonly value?: string;
}
export interface NodeStateCounts {
	readonly idleNodeCount?: number;
	readonly leavingNodeCount?: number;
	readonly preparingNodeCount?: number;
	readonly runningNodeCount?: number;
	readonly unusableNodeCount?: number;
}
export interface ScaleSettings {
	readonly autoScale?: AutoScaleSettings;
	readonly manual?: ManualScaleSettings;
}
export interface AutoScaleSettings {
	readonly initialNodeCount?: number;
	readonly maximumNodeCount: number;
	readonly minimumNodeCount: number;
}
export interface ManualScaleSettings {
	readonly nodeDeallocationOption?: "requeue" | "terminate" | "unknown";
	readonly targetNodeCount: number;
}
export interface UserAccountSettings {
	readonly adminUserName: string;
	readonly adminUserPassword?: string;
	readonly adminUserSshPublicKey?: string;
}
export interface VirtualMachineConfiguration {
	readonly imageReference?: ImageReference;
}
export interface ImageReference {
	readonly offer: string;
	readonly publisher: string;
	readonly sku: string;
	readonly version?: string;
}
export interface ClusterCreateParametersTags {
	readonly [key: string]: string;
}
export interface FileServerBaseProperties {
	readonly creationTime?: string;
	readonly dataDisks: DataDisks;
	readonly mountSettings?: MountSettings;
	readonly provisioningState?: "creating" | "deleting" | "failed" | "succeeded";
	readonly provisioningStateTransitionTime?: string;
	readonly sshConfiguration: SshConfiguration;
	readonly subnet?: ResourceId;
	readonly vmSize: string;
}
export interface DataDisks {
	readonly cachingType?: "none" | "readonly";
	readonly diskCount: number;
	readonly diskSizeInGB: number;
	readonly storageAccountType: "Premium_LRS";
}
export interface MountSettings {
	readonly fileServerInternalIP?: string;
	readonly fileServerPublicIP?: string;
	readonly fileServerType?: "glusterfs";
	readonly mountPoint?: string;
}
export interface SshConfiguration {
	readonly publicIPsToAllow?: string[];
	readonly userAccountSettings: UserAccountSettings;
}
export interface FileServerCreateParametersTags {
	readonly [key: string]: string;
}
export interface JobBaseProperties {
	readonly caffe2Settings?: Caffe2Settings;
	readonly caffeSettings?: CaffeSettings;
	readonly chainerSettings?: ChainerSettings;
	readonly cluster: ResourceId;
	readonly cntkSettings?: CNTKsettings;
	readonly constraints?: JobBasePropertiesConstraints;
	readonly containerSettings?: ContainerSettings;
	readonly creationTime?: string;
	readonly customToolkitSettings?: CustomToolkitSettings;
	readonly environmentVariables?: EnvironmentSetting[];
	readonly executionInfo?: JobPropertiesExecutionInfo;
	readonly executionState?: "failed" | "queued" | "running" | "succeeded";
	readonly executionStateTransitionTime?: string;
	readonly experimentName?: string;
	readonly inputDirectories?: InputDirectory[];
	readonly jobPreparation?: JobPreparation;
	readonly nodeCount: number;
	readonly outputDirectories?: OutputDirectory[];
	readonly priority?: number;
	readonly provisioningState?: "creating" | "deleting" | "failed";
	readonly provisioningStateTransitionTime?: string;
	readonly stdOutErrPathPrefix: string;
	readonly tensorFlowSettings?: TensorFlowSettings;
	readonly toolType?: "caffe" | "caffe2" | "chainer" | "cntk" | "custom";
}
export interface Caffe2Settings {
	readonly commandLineArgs?: string;
	readonly pythonInterpreterPath?: string;
	readonly pythonScriptFilePath: string;
}
export interface CaffeSettings {
	readonly commandLineArgs?: string;
	readonly configFilePath?: string;
	readonly processCount?: number;
	readonly pythonInterpreterPath?: string;
	readonly pythonScriptFilePath?: string;
}
export interface ChainerSettings {
	readonly commandLineArgs?: string;
	readonly processCount?: number;
	readonly pythonInterpreterPath?: string;
	readonly pythonScriptFilePath: string;
}
export interface CNTKsettings {
	readonly commandLineArgs?: string;
	readonly configFilePath?: string;
	readonly languageType?: string;
	readonly processCount?: number;
	readonly pythonInterpreterPath?: string;
	readonly pythonScriptFilePath?: string;
}
export interface JobBasePropertiesConstraints {
	readonly maxWallClockTime?: string;
}
export interface ContainerSettings {
	readonly imageSourceRegistry: ImageSourceRegistry;
}
export interface ImageSourceRegistry {
	readonly credentials?: PrivateRegistryCredentials;
	readonly image: string;
	readonly serverUrl?: string;
}
export interface PrivateRegistryCredentials {
	readonly password?: string;
	readonly passwordSecretReference?: KeyVaultSecretReference;
	readonly username: string;
}
export interface CustomToolkitSettings {
	readonly commandLine?: string;
}
export interface JobPropertiesExecutionInfo {
	readonly endTime?: string;
	readonly errors?: BatchAIError[];
	readonly exitCode?: number;
	readonly startTime?: string;
}
export interface InputDirectory {
	readonly id: string;
	readonly path: string;
}
export interface JobPreparation {
	readonly commandLine: string;
}
export interface OutputDirectory {
	readonly createNew?: boolean;
	readonly id: string;
	readonly pathPrefix: string;
	readonly pathSuffix?: string;
	readonly type?: "custom" | "logs" | "model";
}
export interface TensorFlowSettings {
	readonly masterCommandLineArgs: string;
	readonly parameterServerCommandLineArgs?: string;
	readonly parameterServerCount?: number;
	readonly pythonInterpreterPath?: string;
	readonly pythonScriptFilePath: string;
	readonly workerCommandLineArgs?: string;
	readonly workerCount?: number;
}
export interface JobCreateParametersTags {
	readonly [key: string]: string;
}
export default {
	clusters: clusters,
	fileServers: fileServers,
	jobs: jobs,
};
