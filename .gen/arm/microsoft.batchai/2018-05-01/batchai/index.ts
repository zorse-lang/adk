import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/workspaces", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/workspaces";
}
export interface workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly tags?: WorkspaceCreateParametersTags | undefined;
}
export class workspaces_clusters
	extends ArmResource<workspaces_clustersComponentInputs>
	implements workspaces_clustersComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_clustersComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/workspaces/clusters", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/workspaces/clusters";
}
export interface workspaces_clustersComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/workspaces/clusters";
}
export interface workspaces_clustersComponentInputs {
	readonly name: string;
	readonly properties?: ClusterBaseProperties | undefined;
}
export class workspaces_experiments
	extends ArmResource<workspaces_experimentsComponentInputs>
	implements workspaces_experimentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_experimentsComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/workspaces/experiments", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/workspaces/experiments";
}
export interface workspaces_experimentsComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/workspaces/experiments";
}
export interface workspaces_experimentsComponentInputs {
	readonly name: string;
	readonly properties?: ExperimentProperties | undefined;
}
export class workspaces_experiments_jobs
	extends ArmResource<workspaces_experiments_jobsComponentInputs>
	implements workspaces_experiments_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_experiments_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/workspaces/experiments/jobs", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/workspaces/experiments/jobs";
}
export interface workspaces_experiments_jobsComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/workspaces/experiments/jobs";
}
export interface workspaces_experiments_jobsComponentInputs {
	readonly name: string;
	readonly properties?: JobBaseProperties | undefined;
}
export class workspaces_fileServers
	extends ArmResource<workspaces_fileServersComponentInputs>
	implements workspaces_fileServersComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_fileServersComponentInputs) {
		super(entity, options.name, "Microsoft.BatchAI/workspaces/fileServers", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.BatchAI/workspaces/fileServers";
}
export interface workspaces_fileServersComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.BatchAI/workspaces/fileServers";
}
export interface workspaces_fileServersComponentInputs {
	readonly name: string;
	readonly properties?: FileServerBaseProperties | undefined;
}
export interface WorkspaceProperties {
	readonly creationTime?: string | undefined;
	readonly provisioningState?: ("creating" | "deleting" | "failed") | undefined;
	readonly provisioningStateTransitionTime?: string | undefined;
}
export interface WorkspaceCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly performanceCountersSettings?: PerformanceCountersSettings | undefined;
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
export interface PerformanceCountersSettings {
	readonly appInsightsReference: AppInsightsReference;
}
export interface AppInsightsReference {
	readonly component: ResourceId;
	readonly instrumentationKey?: string | undefined;
	readonly instrumentationKeySecretReference?: KeyVaultSecretReference | undefined;
}
export interface SetupTask {
	readonly commandLine: string;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly secrets?: EnvironmentVariableWithSecretValue[] | undefined;
	readonly stdOutErrPathPrefix: string;
	readonly stdOutErrPathSuffix?: string | undefined;
}
export interface EnvironmentVariable {
	readonly name: string;
	readonly value: string;
}
export interface EnvironmentVariableWithSecretValue {
	readonly name: string;
	readonly value?: string | undefined;
	readonly valueSecretReference?: KeyVaultSecretReference | undefined;
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
	readonly nodeDeallocationOption?: ("requeue" | "terminate") | undefined;
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
	readonly virtualMachineImageId?: string | undefined;
}
export interface ExperimentProperties {
	readonly creationTime?: string | undefined;
	readonly provisioningState?: ("creating" | "deleting" | "failed") | undefined;
	readonly provisioningStateTransitionTime?: string | undefined;
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
	readonly customMpiSettings?: CustomMpiSettings | undefined;
	readonly customToolkitSettings?: CustomToolkitSettings | undefined;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly executionInfo?: JobPropertiesExecutionInfo | undefined;
	readonly executionState?: ("failed" | "queued" | "running" | "succeeded") | undefined;
	readonly executionStateTransitionTime?: string | undefined;
	readonly horovodSettings?: HorovodSettings | undefined;
	readonly inputDirectories?: InputDirectory[] | undefined;
	readonly jobOutputDirectoryPathSegment?: string | undefined;
	readonly jobPreparation?: JobPreparation | undefined;
	readonly mountVolumes?: MountVolumes | undefined;
	readonly nodeCount: number;
	readonly outputDirectories?: OutputDirectory[] | undefined;
	readonly provisioningState?: ("creating" | "deleting" | "failed") | undefined;
	readonly provisioningStateTransitionTime?: string | undefined;
	readonly pyTorchSettings?: PyTorchSettings | undefined;
	readonly schedulingPriority?: ("high" | "low") | undefined;
	readonly secrets?: EnvironmentVariableWithSecretValue[] | undefined;
	readonly stdOutErrPathPrefix: string;
	readonly tensorFlowSettings?: TensorFlowSettings | undefined;
	readonly toolType?: ("caffe" | "caffe2" | "chainer" | "cntk" | "custom" | "custommpi" | "horovod") | undefined;
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
	readonly shmSize?: string | undefined;
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
export interface CustomMpiSettings {
	readonly commandLine: string;
	readonly processCount?: number | undefined;
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
export interface HorovodSettings {
	readonly commandLineArgs?: string | undefined;
	readonly processCount?: number | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath: string;
}
export interface InputDirectory {
	readonly id: string;
	readonly path: string;
}
export interface JobPreparation {
	readonly commandLine: string;
}
export interface OutputDirectory {
	readonly id: string;
	readonly pathPrefix: string;
	readonly pathSuffix?: string | undefined;
}
export interface PyTorchSettings {
	readonly commandLineArgs?: string | undefined;
	readonly communicationBackend?: string | undefined;
	readonly processCount?: number | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath: string;
}
export interface TensorFlowSettings {
	readonly masterCommandLineArgs?: string | undefined;
	readonly parameterServerCommandLineArgs?: string | undefined;
	readonly parameterServerCount?: number | undefined;
	readonly pythonInterpreterPath?: string | undefined;
	readonly pythonScriptFilePath: string;
	readonly workerCommandLineArgs?: string | undefined;
	readonly workerCount?: number | undefined;
}
export interface FileServerBaseProperties {
	readonly dataDisks: DataDisks;
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
export interface SshConfiguration {
	readonly publicIPsToAllow?: string[] | undefined;
	readonly userAccountSettings: UserAccountSettings;
}
export default {
	workspaces: workspaces,
	"workspaces/clusters": workspaces_clusters,
	"workspaces/experiments": workspaces_experiments,
	"workspaces/experiments/jobs": workspaces_experiments_jobs,
	"workspaces/fileServers": workspaces_fileServers,
};
