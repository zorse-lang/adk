import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AutoEnableService
	extends RosResource<AutoEnableServiceComponentInputs>
	implements AutoEnableServiceComponentOutputs
{
	constructor(entity: ADKEntity, options: AutoEnableServiceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::AutoEnableService", options);
	}
}
export interface AutoEnableServiceComponentOutputs {}
export interface AutoEnableServiceComponentInputs {
	readonly ServiceName: string;
	readonly LogicalId: string;
}
export class CustomResource extends RosResource<CustomResourceComponentInputs> implements CustomResourceComponentOutputs {
	constructor(entity: ADKEntity, options: CustomResourceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::CustomResource", options);
	}
	public readonly Outputs: any;
	[key: string]: any;
}
export interface CustomResourceComponentOutputs {
	readonly Outputs: any;
	readonly [key: string]: any;
}
export interface CustomResourceComponentInputs {
	readonly ServiceToken: string;
	readonly Timeout: number;
	readonly HttpConfig?: HttpConfig | undefined;
	readonly Parameters?: { [key: string]: any } | undefined;
	readonly LogicalId: string;
}
export class ResourceCleaner
	extends RosResource<ResourceCleanerComponentInputs>
	implements ResourceCleanerComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceCleanerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::ResourceCleaner", options);
	}
	public readonly ResourceDetails: any;
	public readonly ResourcePartialDetails: any;
	public readonly NoCleanupResourceDetails: any;
	public readonly ScanErrors: any;
	public readonly ResourceSummary: any;
	public readonly NoCleanupResourcePartialDetails: any;
	public readonly CleanResult: any;
}
export interface ResourceCleanerComponentOutputs {
	readonly ResourceDetails: any;
	readonly ResourcePartialDetails: any;
	readonly NoCleanupResourceDetails: any;
	readonly ScanErrors: any;
	readonly ResourceSummary: any;
	readonly NoCleanupResourcePartialDetails: any;
	readonly CleanResult: any;
}
export interface ResourceCleanerComponentInputs {
	readonly Action: string;
	readonly CleanUpAlgorithm?: string | undefined;
	readonly CleanUpRetryCount?: number | undefined;
	readonly CleanUpTimeout?: number | undefined;
	readonly DisabledSideEffects?: string[] | undefined;
	readonly ExcludedResources?: ExcludedResources[] | undefined;
	readonly FailureOption?: string | undefined;
	readonly Mode?: string | undefined;
	readonly ResourceFilters?: ResourceFilters[] | undefined;
	readonly Resources?: Resources[] | undefined;
	readonly ResourceTypeOrder?: string[] | undefined;
	readonly LogicalId: string;
}
export class Sleep extends RosResource<SleepComponentInputs> implements SleepComponentOutputs {
	constructor(entity: ADKEntity, options: SleepComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::Sleep", options);
	}
}
export interface SleepComponentOutputs {}
export interface SleepComponentInputs {
	readonly CreateDuration?: number | undefined;
	readonly DeleteDuration?: number | undefined;
	readonly Triggers?: { [key: string]: any } | undefined;
	readonly UpdateDuration?: number | undefined;
	readonly UpdateRollbackDuration?: number | undefined;
	readonly LogicalId: string;
}
export class Stack extends RosResource<StackComponentInputs> implements StackComponentOutputs {
	constructor(entity: ADKEntity, options: StackComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::Stack", options);
	}
}
export interface StackComponentOutputs {}
export interface StackComponentInputs {
	readonly Parameters?: { [key: string]: any } | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly TemplateBody?: { [key: string]: any } | undefined;
	readonly TemplateId?: string | undefined;
	readonly TemplateURL?: string | undefined;
	readonly TemplateVersion?: string | undefined;
	readonly TimeoutMins?: number | undefined;
	readonly LogicalId: string;
}
export class StackGroup extends RosResource<StackGroupComponentInputs> implements StackGroupComponentOutputs {
	constructor(entity: ADKEntity, options: StackGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::StackGroup", options);
	}
	public readonly StackGroupId: any;
}
export interface StackGroupComponentOutputs {
	readonly StackGroupId: any;
}
export interface StackGroupComponentInputs {
	readonly StackGroupName: string;
	readonly AdministrationRoleName?: string | undefined;
	readonly AutoDeployment?: AutoDeployment | undefined;
	readonly Description?: string | undefined;
	readonly DynamicTemplateBody?: { [key: string]: any } | undefined;
	readonly ExecutionRoleName?: string | undefined;
	readonly Parameters?: { [key: string]: any } | undefined;
	readonly PermissionModel?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly TemplateBody?: { [key: string]: any } | undefined;
	readonly TemplateId?: string | undefined;
	readonly TemplateURL?: string | undefined;
	readonly TemplateVersion?: string | undefined;
	readonly LogicalId: string;
}
export class StackInstances extends RosResource<StackInstancesComponentInputs> implements StackInstancesComponentOutputs {
	constructor(entity: ADKEntity, options: StackInstancesComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::StackInstances", options);
	}
	public readonly LastOperationId: any;
	public readonly Stacks: any;
}
export interface StackInstancesComponentOutputs {
	readonly LastOperationId: any;
	readonly Stacks: any;
}
export interface StackInstancesComponentInputs {
	readonly RegionIds: string[];
	readonly StackGroupName: string;
	readonly AccountIds?: string[] | undefined;
	readonly DeploymentTargets?: DeploymentTargets | undefined;
	readonly DisableRollback?: boolean | undefined;
	readonly OperationDescription?: string | undefined;
	readonly OperationPreferences?: OperationPreferences | undefined;
	readonly ParameterOverrides?: { [key: string]: any } | undefined;
	readonly RetainStacks?: boolean | undefined;
	readonly TimeoutInMinutes?: number | undefined;
	readonly LogicalId: string;
}
export class WaitCondition extends RosResource<WaitConditionComponentInputs> implements WaitConditionComponentOutputs {
	constructor(entity: ADKEntity, options: WaitConditionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::WaitCondition", options);
	}
	public readonly JoinedErrorData: any;
	public readonly Data: any;
	public readonly ErrorData: any;
}
export interface WaitConditionComponentOutputs {
	readonly JoinedErrorData: any;
	readonly Data: any;
	readonly ErrorData: any;
}
export interface WaitConditionComponentInputs {
	readonly Handle: string;
	readonly Timeout: number;
	readonly Count?: number | undefined;
	readonly ShowProgressEvent?: string | undefined;
	readonly LogicalId: string;
}
export class WaitConditionHandle
	extends RosResource<WaitConditionHandleComponentInputs>
	implements WaitConditionHandleComponentOutputs
{
	constructor(entity: ADKEntity, options: WaitConditionHandleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::WaitConditionHandle", options);
	}
	public readonly CurlCli: any;
	public readonly WindowsCurlCli: any;
	public readonly Headers: any;
	public readonly Url: any;
	public readonly PowerShellCurlCli: any;
}
export interface WaitConditionHandleComponentOutputs {
	readonly CurlCli: any;
	readonly WindowsCurlCli: any;
	readonly Headers: any;
	readonly Url: any;
	readonly PowerShellCurlCli: any;
}
export interface WaitConditionHandleComponentInputs {
	readonly Count?: number | undefined;
	readonly Mode?: string | undefined;
	readonly LogicalId: string;
}
export interface HttpConfig {
	readonly SignKey?: string | undefined;
	readonly ContentType?: string | undefined;
	readonly Headers?: { [key: string]: any } | undefined;
}
export interface ExcludedResources {
	readonly ResourceId: string;
	readonly ResourceType?: string | undefined;
	readonly RegionId?: string | undefined;
}
export interface ResourceFilters {
	readonly IncludeDeletionProtection?: boolean | undefined;
	readonly ResourceTypePatterns?: string[] | undefined;
	readonly ResourceIds?: string[] | undefined;
	readonly RegionIds?: string[] | undefined;
	readonly ResourceGroupIds?: string[] | undefined;
	readonly Effect?: string | undefined;
	readonly ResourceNamePatterns?: string[] | undefined;
	readonly Tags?: Tags[] | undefined;
}
export interface Resources {
	readonly ResourceId: string;
	readonly ResourceType: string;
	readonly RegionId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface AutoDeployment {
	readonly Enabled: boolean;
	readonly RetainStacksOnAccountRemoval?: boolean | undefined;
}
export interface DeploymentTargets {
	readonly RdFolderIds?: string[] | undefined;
}
export interface OperationPreferences {
	readonly MaxConcurrentPercentage?: number | undefined;
	readonly MaxConcurrentCount?: number | undefined;
	readonly FailureTolerancePercentage?: number | undefined;
	readonly FailureToleranceCount?: number | undefined;
}
export default {
	AutoEnableService: AutoEnableService,
	CustomResource: CustomResource,
	ResourceCleaner: ResourceCleaner,
	Sleep: Sleep,
	Stack: Stack,
	StackGroup: StackGroup,
	StackInstances: StackInstances,
	WaitCondition: WaitCondition,
	WaitConditionHandle: WaitConditionHandle,
};
