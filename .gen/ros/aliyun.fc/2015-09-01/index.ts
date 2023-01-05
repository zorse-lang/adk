import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Alias extends RosResource<AliasComponentInputs> implements AliasComponentOutputs {
	constructor(entity: ADKEntity, options: AliasComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::Alias", options);
	}
}
export interface AliasComponentOutputs {}
export interface AliasComponentInputs {
	readonly AliasName: any | string;
	readonly ServiceName: any | string;
	readonly AdditionalVersion?: string | undefined;
	readonly AdditionalWeight?: number | undefined;
	readonly Description?: string | undefined;
	readonly VersionId?: any | string;
	readonly LogicalId: string;
}
export class CustomDomain extends RosResource<CustomDomainComponentInputs> implements CustomDomainComponentOutputs {
	constructor(entity: ADKEntity, options: CustomDomainComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::CustomDomain", options);
	}
	public readonly Domain: any;
}
export interface CustomDomainComponentOutputs {
	readonly Domain: any;
}
export interface CustomDomainComponentInputs {
	readonly DomainName: any | string;
	readonly Protocol: string;
	readonly ApiVersion?: string | undefined;
	readonly CertConfig?: CertConfig | undefined;
	readonly RouteConfig?: RouteConfig | undefined;
	readonly LogicalId: string;
}
export class FunctionInstance extends RosResource<FunctionComponentInputs> implements FunctionComponentOutputs {
	constructor(entity: ADKEntity, options: FunctionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::Function", options);
	}
	public readonly FunctionId: any;
	public readonly Arn: any;
	public readonly ServiceId: any;
}
export interface FunctionComponentOutputs {
	readonly FunctionId: any;
	readonly Arn: any;
	readonly ServiceId: any;
}
export interface FunctionComponentInputs {
	readonly FunctionName: any | string;
	readonly Handler: string;
	readonly Runtime: string;
	readonly ServiceName: any | string;
	readonly AsyncConfiguration?: AsyncConfiguration | undefined;
	readonly CAPort?: number | undefined;
	readonly Code?: Code | undefined;
	readonly CustomContainerConfig?: CustomContainerConfig | undefined;
	readonly Description?: string | undefined;
	readonly EnvironmentVariables?: { [key: string]: any } | undefined;
	readonly InitializationTimeout?: number | undefined;
	readonly Initializer?: string | undefined;
	readonly InstanceConcurrency?: number | undefined;
	readonly InstanceType?: string | undefined;
	readonly MemorySize?: number | undefined;
	readonly Timeout?: number | undefined;
	readonly LogicalId: string;
}
export class FunctionInvoker
	extends RosResource<FunctionInvokerComponentInputs>
	implements FunctionInvokerComponentOutputs
{
	constructor(entity: ADKEntity, options: FunctionInvokerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::FunctionInvoker", options);
	}
	public readonly ResultType: any;
	public readonly Result: any;
}
export interface FunctionInvokerComponentOutputs {
	readonly ResultType: any;
	readonly Result: any;
}
export interface FunctionInvokerComponentInputs {
	readonly FunctionName: string;
	readonly ServiceName: string;
	readonly Async?: boolean | undefined;
	readonly CheckError?: boolean | undefined;
	readonly Event?: string | undefined;
	readonly ExecuteVersion?: number | undefined;
	readonly Qualifier?: string | undefined;
	readonly ServiceRegionId?: string | undefined;
	readonly LogicalId: string;
}
export class Layer extends RosResource<LayerComponentInputs> implements LayerComponentOutputs {
	constructor(entity: ADKEntity, options: LayerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::Layer", options);
	}
	public readonly Version: any;
	public readonly Arn: any;
}
export interface LayerComponentOutputs {
	readonly Version: any;
	readonly Arn: any;
}
export interface LayerComponentInputs {
	readonly Code: Code;
	readonly CompatibleRuntime: string[];
	readonly LayerName: any | string;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ProvisionConfig
	extends RosResource<ProvisionConfigComponentInputs>
	implements ProvisionConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: ProvisionConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::ProvisionConfig", options);
	}
	public readonly Resource: any;
}
export interface ProvisionConfigComponentOutputs {
	readonly Resource: any;
}
export interface ProvisionConfigComponentInputs {
	readonly FunctionName: any | string;
	readonly Qualifier: any | string;
	readonly ServiceName: any | string;
	readonly Target: any | number;
	readonly LogicalId: string;
}
export class Service extends RosResource<ServiceComponentInputs> implements ServiceComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::Service", options);
	}
	public readonly VpcId: any;
	public readonly Logstore: any;
	public readonly LogProject: any;
	public readonly ServiceId: any;
}
export interface ServiceComponentOutputs {
	readonly VpcId: any;
	readonly Logstore: any;
	readonly LogProject: any;
	readonly ServiceId: any;
}
export interface ServiceComponentInputs {
	readonly ServiceName: any | string;
	readonly DeletionForce?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly InternetAccess?: any | boolean;
	readonly LogConfig?: LogConfig | undefined;
	readonly NasConfig?: NasConfig | undefined;
	readonly Role?: any | string;
	readonly Tags?: Tags[] | any;
	readonly TracingConfig?: TracingConfig | undefined;
	readonly VpcBindings?: string[] | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
	readonly LogicalId: string;
}
export class Trigger extends RosResource<TriggerComponentInputs> implements TriggerComponentOutputs {
	constructor(entity: ADKEntity, options: TriggerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::Trigger", options);
	}
	public readonly TriggerId: any;
}
export interface TriggerComponentOutputs {
	readonly TriggerId: any;
}
export interface TriggerComponentInputs {
	readonly FunctionName: any | string;
	readonly ServiceName: any | string;
	readonly TriggerConfig: { [key: string]: any };
	readonly TriggerName: any | string;
	readonly TriggerType: string;
	readonly InvocationRole?: string | undefined;
	readonly Qualifier?: string | undefined;
	readonly SourceArn?: string | undefined;
	readonly LogicalId: string;
}
export class Version extends RosResource<VersionComponentInputs> implements VersionComponentOutputs {
	constructor(entity: ADKEntity, options: VersionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FC::Version", options);
	}
	public readonly VersionId: any;
}
export interface VersionComponentOutputs {
	readonly VersionId: any;
}
export interface VersionComponentInputs {
	readonly ServiceName: any | string;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export interface CertConfig {
	readonly PrivateKey: string;
	readonly CertName: string;
	readonly Certificate: string;
}
export interface RouteConfig {
	readonly Routes: Routes[];
}
export interface Routes {
	readonly Path: string;
	readonly FunctionName: string;
	readonly ServiceName: string;
	readonly Qualifier?: string | undefined;
}
export interface AsyncConfiguration {
	readonly Destination?: Destination | undefined;
	readonly MaxAsyncEventAgeInSeconds?: number | undefined;
	readonly StatefulInvocation?: boolean | undefined;
	readonly MaxAsyncRetryAttempts?: number | undefined;
}
export interface Code {
	readonly SourceCode?: string | undefined;
	readonly ZipFile?: string | undefined;
	readonly OssObjectName?: string | undefined;
	readonly OssBucketName?: string | undefined;
}
export interface CustomContainerConfig {
	readonly Args?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly Command?: string | undefined;
	readonly AccelerationType?: string | undefined;
	readonly Image: string;
}
export interface Destination {
	readonly OnSuccess?: string | undefined;
	readonly OnFailure?: string | undefined;
}
export interface LogConfig {
	readonly Project?: string | undefined;
	readonly LogBeginRule?: string | undefined;
	readonly Logstore?: string | undefined;
	readonly EnableRequestMetrics?: boolean | undefined;
}
export interface MountPoints {
	readonly ServerAddr: string;
	readonly MountDir: string;
}
export interface NasConfig {
	readonly MountPoints: MountPoints[];
	readonly UserId: number;
	readonly GroupId: number;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface TracingConfig {
	readonly Type?: string | undefined;
	readonly Params?: { [key: string]: any } | undefined;
}
export interface VpcConfig {
	readonly VpcId: string;
	readonly VSwitchIds: any[];
	readonly SecurityGroupId: string;
}
export default {
	Alias: Alias,
	CustomDomain: CustomDomain,
	Function: FunctionInstance,
	FunctionInvoker: FunctionInvoker,
	Layer: Layer,
	ProvisionConfig: ProvisionConfig,
	Service: Service,
	Trigger: Trigger,
	Version: Version,
};
