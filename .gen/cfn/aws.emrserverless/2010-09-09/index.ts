import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMRServerless::Application", options);
	}
	public readonly ApplicationId: string;
	public readonly Arn: string;
}
export interface ApplicationComponentOutputs {
	readonly ApplicationId: string;
	readonly Arn: string;
}
export interface ApplicationComponentInputs {
	readonly ReleaseLabel: string;
	readonly Type: string;
	readonly AutoStartConfiguration?: (AutoStartConfiguration | undefined) | undefined;
	readonly AutoStopConfiguration?: (AutoStopConfiguration | undefined) | undefined;
	readonly InitialCapacity?: (InitialCapacityConfigKeyValuePair[] | undefined) | undefined;
	readonly MaximumCapacity?: (MaximumAllowedResources | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AutoStartConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface AutoStopConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly IdleTimeoutMinutes?: (number | undefined) | undefined;
}
export interface InitialCapacityConfig {
	readonly WorkerConfiguration: WorkerConfiguration;
	readonly WorkerCount: number;
}
export interface InitialCapacityConfigKeyValuePair {
	readonly Key: string;
	readonly Value: InitialCapacityConfig;
}
export interface MaximumAllowedResources {
	readonly Cpu: string;
	readonly Disk?: (string | undefined) | undefined;
	readonly Memory: string;
}
export interface NetworkConfiguration {
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export interface WorkerConfiguration {
	readonly Cpu: string;
	readonly Disk?: (string | undefined) | undefined;
	readonly Memory: string;
}
export default {
	Application: Application,
};
