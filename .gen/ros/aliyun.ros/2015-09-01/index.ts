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
	readonly HttpConfig?: (HttpConfig | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: any } | undefined) | undefined;
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
	readonly CleanUpAlgorithm?: (string | undefined) | undefined;
	readonly CleanUpRetryCount?: (number | undefined) | undefined;
	readonly CleanUpTimeout?: (number | undefined) | undefined;
	readonly DisabledSideEffects?: (string[] | undefined) | undefined;
	readonly ExcludedResources?: (ExcludedResources[] | undefined) | undefined;
	readonly FailureOption?: (string | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
	readonly ResourceFilters?: (ResourceFilters[] | undefined) | undefined;
	readonly Resources?: (Resources[] | undefined) | undefined;
	readonly ResourceTypeOrder?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Sleep extends RosResource<SleepComponentInputs> implements SleepComponentOutputs {
	constructor(entity: ADKEntity, options: SleepComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::Sleep", options);
	}
}
export interface SleepComponentOutputs {}
export interface SleepComponentInputs {
	readonly CreateDuration?: (number | undefined) | undefined;
	readonly DeleteDuration?: (number | undefined) | undefined;
	readonly Triggers?: ({ [key: string]: any } | undefined) | undefined;
	readonly UpdateDuration?: (number | undefined) | undefined;
	readonly UpdateRollbackDuration?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class Stack extends RosResource<StackComponentInputs> implements StackComponentOutputs {
	constructor(entity: ADKEntity, options: StackComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ROS::Stack", options);
	}
}
export interface StackComponentOutputs {}
export interface StackComponentInputs {
	readonly Parameters?: ({ [key: string]: any } | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly TemplateBody?: ({ [key: string]: any } | undefined) | undefined;
	readonly TemplateId?: (string | undefined) | undefined;
	readonly TemplateURL?: (string | undefined) | undefined;
	readonly TemplateVersion?: (string | undefined) | undefined;
	readonly TimeoutMins?: (number | undefined) | undefined;
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
	readonly AdministrationRoleName?: (string | undefined) | undefined;
	readonly AutoDeployment?: (AutoDeployment | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DynamicTemplateBody?: ({ [key: string]: any } | undefined) | undefined;
	readonly ExecutionRoleName?: (string | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: any } | undefined) | undefined;
	readonly PermissionModel?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly TemplateBody?: ({ [key: string]: any } | undefined) | undefined;
	readonly TemplateId?: (string | undefined) | undefined;
	readonly TemplateURL?: (string | undefined) | undefined;
	readonly TemplateVersion?: (string | undefined) | undefined;
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
	readonly AccountIds?: (string[] | undefined) | undefined;
	readonly DeploymentTargets?: (DeploymentTargets | undefined) | undefined;
	readonly DisableRollback?: (boolean | undefined) | undefined;
	readonly OperationDescription?: (string | undefined) | undefined;
	readonly OperationPreferences?: (OperationPreferences | undefined) | undefined;
	readonly ParameterOverrides?: ({ [key: string]: any } | undefined) | undefined;
	readonly RetainStacks?: (boolean | undefined) | undefined;
	readonly TimeoutInMinutes?: (number | undefined) | undefined;
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
	readonly Count?: (number | undefined) | undefined;
	readonly ShowProgressEvent?: (string | undefined) | undefined;
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
	readonly Count?: (number | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface HttpConfig {
	readonly SignKey?: (string | undefined) | undefined;
	readonly ContentType?: (string | undefined) | undefined;
	readonly Headers?: ({ [key: string]: any } | undefined) | undefined;
}
export interface ExcludedResources {
	readonly ResourceId: string;
	readonly ResourceType?: (string | undefined) | undefined;
	readonly RegionId?: (string | undefined) | undefined;
}
export interface ResourceFilters {
	readonly IncludeDeletionProtection?: (boolean | undefined) | undefined;
	readonly ResourceTypePatterns?: (string[] | undefined) | undefined;
	readonly ResourceIds?: (string[] | undefined) | undefined;
	readonly RegionIds?: (string[] | undefined) | undefined;
	readonly ResourceGroupIds?: (string[] | undefined) | undefined;
	readonly Effect?: (string | undefined) | undefined;
	readonly ResourceNamePatterns?: (string[] | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
}
export interface Resources {
	readonly ResourceId: string;
	readonly ResourceType: string;
	readonly RegionId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface AutoDeployment {
	readonly Enabled: boolean;
	readonly RetainStacksOnAccountRemoval?: (boolean | undefined) | undefined;
}
export interface DeploymentTargets {
	readonly RdFolderIds?: (string[] | undefined) | undefined;
}
export interface OperationPreferences {
	readonly MaxConcurrentPercentage?: (number | undefined) | undefined;
	readonly MaxConcurrentCount?: (number | undefined) | undefined;
	readonly FailureTolerancePercentage?: (number | undefined) | undefined;
	readonly FailureToleranceCount?: (number | undefined) | undefined;
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
