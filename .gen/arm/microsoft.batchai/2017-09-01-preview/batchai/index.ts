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
	readonly properties?: ClusterBaseProperties | undefined;
	readonly tags?: ClusterCreateParametersTags | undefined;
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
	readonly properties?: FileServerBaseProperties | undefined;
	readonly tags?: FileServerCreateParametersTags | undefined;
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
	readonly properties?: JobBaseProperties | undefined;
	readonly tags?: JobCreateParametersTags | undefined;
}
export interface ClusterBaseProperties {
	readonly allocationState?: "resizing" | undefined;
	readonly allocationStateTransitionTime?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly currentNodeCount?: number | undefined;
	readonly errors?: BatchAIError[] | undefined;
	readonly nodeSetup?: NodeSetup | undefined;
	readonly nodeStateCounts?: NodeStateCounts | undefined;
	readonly provisioningState?: ("creating" | "deleting" | "failed") | undefined;
	readonly provisioningStateTransitionTime?: string | undefined;
	readonly scaleSettings?: ScaleSettings | undefined;
	readonly subnet?: ResourceId | undefined;
	readonly userAccountSettings: UserAccountSettings;
	readonly virtualMachineConfiguration?: VirtualMachineConfiguration | undefined;
	readonly vmPriority?: "dedicated" | undefined;
	readonly vmSize: string;
}
export interface BatchAIError {
	readonly code?: string | undefined;
	readonly details?: NameValuePair[] | undefined;
	readonly message?: string | undefined;
}
export interface NameValuePair {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface NodeSetup {
	readonly mountVolumes?: MountVolumes | undefined;
	readonly setupTask?: SetupTask | undefined;
}
export interface MountVolumes {
	readonly azureBlobFileSystems?: AzureBlobFileSystemReference[] | undefined;
	readonly azureFileShares?: AzureFileShareReference[] | undefined;
	readonly fileServers?: FileServerReference[] | undefined;
	readonly unmanagedFileSystems?: UnmanagedFileSystemReference[] | undefined;
}
export interface AzureBlobFileSystemReference {
	readonly accountName: string;
	readonly containerName: string;
	readonly credentials: AzureStorageCredentialsInfo;
	readonly mountOptions?: string | undefined;
	readonly relativeMountPath: string;
}
export interface AzureStorageCredentialsInfo {
	readonly accountKey?: string | undefined;
	readonly accountKeySecretReference?: KeyVaultSecretReference | undefined;
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
	readonly directoryMode?: string | undefined;
	readonly fileMode?: string | undefined;
	readonly relativeMountPath: string;
}
export interface FileServerReference {
	readonly fileServer: ResourceId;
	readonly mountOptions?: string | undefined;
	readonly relativeMountPath: string;
	readonly sourceDirectory?: string | undefined;
}
export interface UnmanagedFileSystemReference {
	readonly mountCommand: string;
	readonly relativeMountPath: string;
}
export interface SetupTask {
	readonly commandLine: string;
	readonly environmentVariables?: EnvironmentSetting[] | undefined;
	readonly runElevated?: boolean | undefined;
	readonly stdOutErrPathPrefix: string;
}
export interface EnvironmentSetting {
	readonly name: string;
	readonly value?: string | undefined;
}
export interface NodeStateCounts {
	readonly idleNodeCount?: number | undefined;
	readonly leavingNodeCount?: number | undefined;
	readonly preparingNodeCount?: number | undefined;
	readonly runningNodeCount?: number | undefined;
	readonly unusableNodeCount?: number | undefined;
}
export interface ScaleSettings {
	readonly autoScale?: AutoScaleSettings | undefined;
	readonly manual?: ManualScaleSettings | undefined;
}
export interface AutoScaleSettings {
	readonly initialNodeCount?: number | undefined;
	readonly maximumNodeCount: number;
	readonly minimumNodeCount: number;
}
export interface ManualScaleSettings {
	readonly nodeDeallocationOption?: ("requeue" | "terminate" | "unknown") | undefined;
	readonly targetNodeCount: number;
}
export interface UserAccountSettings {
	readonly adminUserName: string;
	readonly adminUserPassword?: string | undefined;
	readonly adminUserSshPublicKey?: string | undefined;
}
export interface VirtualMachineConfiguration {
	readonly imageReference?: ImageReference | undefined;
}
export interface ImageReference {
	readonly offer: string;
	readonly publisher: string;
	readonly sku: string;
	readonly version?: string | undefined;
}
export interface ClusterCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface FileServerBaseProperties {
	readonly creationTime?: string | undefined;
	readonly dataDisks: DataDisks;
	readonly mountSettings?: MountSettings | undefined;
	readonly provisioningState?: ("creating" | "deleting" | "failed" | "succeeded") | undefined;
	readonly provisioningStateTransitionTime?: string | undefined;
	readonly sshConfiguration: SshConfiguration;
	readonly subnet?: ResourceId | undefined;
	readonly vmSize: string;
}
export interface DataDisks {
	readonly cachingType?: ("none" | "readonly") | undefined;
	readonly diskCount: number;
	readonly diskSizeInGB: number;
	readonly storageAccountType: "Premium_LRS";
}
export interface MountSettings {
	readonly fileServerInternalIP?: string | undefined;
	readonly fileServerPublicIP?: string | undefined;
	readonly fileServerType?: "glusterfs" | undefined;
	readonly mountPoint?: string | undefined;
}
export interface SshConfiguration {
	readonly publicIPsToAllow?: string[] | undefined;
	readonly userAccountSettings: UserAccountSettings;
}
export interface FileServerCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobBaseProperties {
	readonly caffe2Settings?: Caffe2Settings | undefined;
	readonly caffeSettings?: CaffeSettings | undefined;
	readonly chainerSettings?: ChainerSettings | undefined;
	readonly cluster: ResourceId;
	readonly cntkSettings?: CNTKsettings | undefined;
	readonly constraints?: JobBasePropertiesConstraints | undefined;
	readonly containerSettings?: ContainerSettings | undefined;
	readonly creationTime?: string | undefined;
	readonly customToolkitSettings?: CustomToolkitSettings | undefined;
	readonly environmentVariables?: EnvironmentSetting[] | undefined;
	readonly executionInfo?: JobPropertiesExecutionInfo | undefined;
	readonly executionState?: ("failed" | "queued" | "running" | "succeeded") | undefined;
	readonly executionStateTransitionTime?: string | undefined;
	readonly experimentName?: string | undefined;
	readonly inputDirectories?: InputDirectory[] | undefined;
	readonly jobPreparation?: JobPreparation | undefined;
	readonly nodeCount: number;
	readonly outputDirectories?: OutputDirectory[] | undefined;
	readonly priority?: number | undefined;
	readonly provisioningState?: ("creating" | "deleting" | "failed") | undefined;
	readonly provisioningStateTransitionTime?: string | undefined;
	readonly stdOutErrPathPrefix: string;
	readonly tensorFlowSettings?: TensorFlowSettings | undefined;
	readonly toolType?: ("caffe" | "caffe2" | "chainer" | "cntk" | "custom") | undefined;
}
export interface Caffe2Settings {
	readonly commandLineArgs?: string | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath: string;
}
export interface CaffeSettings {
	readonly commandLineArgs?: string | undefined;
	readonly configFilePath?: string | undefined;
	readonly processCount?: number | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath?: string | undefined;
}
export interface ChainerSettings {
	readonly commandLineArgs?: string | undefined;
	readonly processCount?: number | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath: string;
}
export interface CNTKsettings {
	readonly commandLineArgs?: string | undefined;
	readonly configFilePath?: string | undefined;
	readonly languageType?: string | undefined;
	readonly processCount?: number | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath?: string | undefined;
}
export interface JobBasePropertiesConstraints {
	readonly maxWallClockTime?: string | undefined;
}
export interface ContainerSettings {
	readonly imageSourceRegistry: ImageSourceRegistry;
}
export interface ImageSourceRegistry {
	readonly credentials?: PrivateRegistryCredentials | undefined;
	readonly image: string;
	readonly serverUrl?: string | undefined;
}
export interface PrivateRegistryCredentials {
	readonly password?: string | undefined;
	readonly passwordSecretReference?: KeyVaultSecretReference | undefined;
	readonly username: string;
}
export interface CustomToolkitSettings {
	readonly commandLine?: string | undefined;
}
export interface JobPropertiesExecutionInfo {
	readonly endTime?: string | undefined;
	readonly errors?: BatchAIError[] | undefined;
	readonly exitCode?: number | undefined;
	readonly startTime?: string | undefined;
}
export interface InputDirectory {
	readonly id: string;
	readonly path: string;
}
export interface JobPreparation {
	readonly commandLine: string;
}
export interface OutputDirectory {
	readonly createNew?: boolean | undefined;
	readonly id: string;
	readonly pathPrefix: string;
	readonly pathSuffix?: string | undefined;
	readonly type?: ("custom" | "logs" | "model") | undefined;
}
export interface TensorFlowSettings {
	readonly masterCommandLineArgs: string;
	readonly parameterServerCommandLineArgs?: string | undefined;
	readonly parameterServerCount?: number | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath: string;
	readonly workerCommandLineArgs?: string | undefined;
	readonly workerCount?: number | undefined;
}
export interface JobCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	clusters: clusters,
	fileServers: fileServers,
	jobs: jobs,
};
