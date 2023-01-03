import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Execution extends RosResource<ExecutionComponentInputs> implements ExecutionComponentOutputs {
	constructor(entity: ADKEntity, options: ExecutionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OOS::Execution", options);
	}
	public readonly Status: any;
	public readonly CurlCli: any;
	public readonly WindowsCurlCli: any;
	public readonly Outputs: any;
	public readonly Counters: any;
	public readonly PowerShellCurlCli: any;
	public readonly ExecutionId: any;
	public readonly StatusMessage: any;
}
export interface ExecutionComponentOutputs {
	readonly Status: any;
	readonly CurlCli: any;
	readonly WindowsCurlCli: any;
	readonly Outputs: any;
	readonly Counters: any;
	readonly PowerShellCurlCli: any;
	readonly ExecutionId: any;
	readonly StatusMessage: any;
}
export interface ExecutionComponentInputs {
	readonly TemplateName: string;
	readonly Mode?: (string | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: any } | undefined) | undefined;
	readonly ParentExecutionId?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly ResourceOptions?: (ResourceOptions | undefined) | undefined;
	readonly SafetyCheck?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: any } | undefined) | undefined;
	readonly TemplateVersion?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Parameter extends RosResource<ParameterComponentInputs> implements ParameterComponentOutputs {
	constructor(entity: ADKEntity, options: ParameterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OOS::Parameter", options);
	}
}
export interface ParameterComponentOutputs {}
export interface ParameterComponentInputs {
	readonly Name: any | string;
	readonly Type: string;
	readonly Value: any | string;
	readonly Constraints?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Template extends RosResource<TemplateComponentInputs> implements TemplateComponentOutputs {
	constructor(entity: ADKEntity, options: TemplateComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::OOS::Template", options);
	}
	public readonly ExecutionPolicy: any;
	public readonly TemplateId: any;
}
export interface TemplateComponentOutputs {
	readonly ExecutionPolicy: any;
	readonly TemplateId: any;
}
export interface TemplateComponentInputs {
	readonly Content: string;
	readonly TemplateName: any | string;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: any } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ResourceOptions {
	readonly CancelOnDelete?: (boolean | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly SuccessStatuses?: (any[] | undefined) | undefined;
	readonly FailureStatuses?: (any[] | undefined) | undefined;
}
export default {
	Execution: Execution,
	Parameter: Parameter,
	Template: Template,
};
