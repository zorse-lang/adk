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
	readonly AutoStartConfiguration?: AutoStartConfiguration | undefined;
	readonly AutoStopConfiguration?: AutoStopConfiguration | undefined;
	readonly InitialCapacity?: InitialCapacityConfigKeyValuePair[] | undefined;
	readonly MaximumCapacity?: MaximumAllowedResources | undefined;
	readonly Name?: string | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AutoStartConfiguration {
	readonly Enabled?: boolean | undefined;
}
export interface AutoStopConfiguration {
	readonly Enabled?: boolean | undefined;
	readonly IdleTimeoutMinutes?: number | undefined;
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
	readonly Disk?: string | undefined;
	readonly Memory: string;
}
export interface NetworkConfiguration {
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
}
export interface WorkerConfiguration {
	readonly Cpu: string;
	readonly Disk?: string | undefined;
	readonly Memory: string;
}
export default {
	Application: Application,
};
