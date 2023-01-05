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
	readonly properties?: WorkspaceProperties;
	readonly tags?: WorkspaceCreateParametersTags;
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
	readonly properties?: ClusterBaseProperties;
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
	readonly properties?: ExperimentProperties;
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
	readonly properties?: JobBaseProperties;
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
	readonly properties?: FileServerBaseProperties;
}
export interface WorkspaceProperties {
	readonly creationTime?: string;
	readonly provisioningState?: "creating" | "deleting" | "failed";
	readonly provisioningStateTransitionTime?: string;
}
export interface WorkspaceCreateParametersTags {
	readonly [key: string]: string;
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
	readonly performanceCountersSettings?: PerformanceCountersSettings;
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
export interface PerformanceCountersSettings {
	readonly appInsightsReference: AppInsightsReference;
}
export interface AppInsightsReference {
	readonly component: ResourceId;
	readonly instrumentationKey?: string;
	readonly instrumentationKeySecretReference?: KeyVaultSecretReference;
}
export interface SetupTask {
	readonly commandLine: string;
	readonly environmentVariables?: EnvironmentVariable[];
	readonly secrets?: EnvironmentVariableWithSecretValue[];
	readonly stdOutErrPathPrefix: string;
	readonly stdOutErrPathSuffix?: string;
}
export interface EnvironmentVariable {
	readonly name: string;
	readonly value: string;
}
export interface EnvironmentVariableWithSecretValue {
	readonly name: string;
	readonly value?: string;
	readonly valueSecretReference?: KeyVaultSecretReference;
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
	readonly nodeDeallocationOption?: "requeue" | "terminate";
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
	readonly virtualMachineImageId?: string;
}
export interface ExperimentProperties {
	readonly creationTime?: string;
	readonly provisioningState?: "creating" | "deleting" | "failed";
	readonly provisioningStateTransitionTime?: string;
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
	readonly customMpiSettings?: CustomMpiSettings;
	readonly customToolkitSettings?: CustomToolkitSettings;
	readonly environmentVariables?: EnvironmentVariable[];
	readonly executionInfo?: JobPropertiesExecutionInfo;
	readonly executionState?: "failed" | "queued" | "running" | "succeeded";
	readonly executionStateTransitionTime?: string;
	readonly horovodSettings?: HorovodSettings;
	readonly inputDirectories?: InputDirectory[];
	readonly jobOutputDirectoryPathSegment?: string;
	readonly jobPreparation?: JobPreparation;
	readonly mountVolumes?: MountVolumes;
	readonly nodeCount: number;
	readonly outputDirectories?: OutputDirectory[];
	readonly provisioningState?: "creating" | "deleting" | "failed";
	readonly provisioningStateTransitionTime?: string;
	readonly pyTorchSettings?: PyTorchSettings;
	readonly schedulingPriority?: "high" | "low";
	readonly secrets?: EnvironmentVariableWithSecretValue[];
	readonly stdOutErrPathPrefix: string;
	readonly tensorFlowSettings?: TensorFlowSettings;
	readonly toolType?: "caffe" | "caffe2" | "chainer" | "cntk" | "custom" | "custommpi" | "horovod";
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
	readonly shmSize?: string;
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
export interface CustomMpiSettings {
	readonly commandLine: string;
	readonly processCount?: number;
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
export interface HorovodSettings {
	readonly commandLineArgs?: string;
	readonly processCount?: number;
	readonly pythonInterpreterPath?: string;
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
	readonly pathSuffix?: string;
}
export interface PyTorchSettings {
	readonly commandLineArgs?: string;
	readonly communicationBackend?: string;
	readonly processCount?: number;
	readonly pythonInterpreterPath?: string;
	readonly pythonScriptFilePath: string;
}
export interface TensorFlowSettings {
	readonly masterCommandLineArgs?: string;
	readonly parameterServerCommandLineArgs?: string;
	readonly parameterServerCount?: number;
	readonly pythonInterpreterPath?: string;
	readonly pythonScriptFilePath: string;
	readonly workerCommandLineArgs?: string;
	readonly workerCount?: number;
}
export interface FileServerBaseProperties {
	readonly dataDisks: DataDisks;
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
export interface SshConfiguration {
	readonly publicIPsToAllow?: string[];
	readonly userAccountSettings: UserAccountSettings;
}
export default {
	workspaces: workspaces,
	"workspaces/clusters": workspaces_clusters,
	"workspaces/experiments": workspaces_experiments,
	"workspaces/experiments/jobs": workspaces_experiments_jobs,
	"workspaces/fileServers": workspaces_fileServers,
};
