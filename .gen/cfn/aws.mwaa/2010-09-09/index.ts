import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Environment extends CfnResource<EnvironmentComponentInputs> implements EnvironmentComponentOutputs {
	constructor(entity: ADKEntity, options: EnvironmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::MWAA::Environment", options);
	}
	public readonly Arn: string;
	public readonly LoggingConfigurationDagProcessingLogsCloudWatchLogGroupArn: string;
	public readonly LoggingConfigurationSchedulerLogsCloudWatchLogGroupArn: string;
	public readonly LoggingConfigurationTaskLogsCloudWatchLogGroupArn: string;
	public readonly LoggingConfigurationWebserverLogsCloudWatchLogGroupArn: string;
	public readonly LoggingConfigurationWorkerLogsCloudWatchLogGroupArn: string;
	public readonly WebserverUrl: string;
}
export interface EnvironmentComponentOutputs {
	readonly Arn: string;
	readonly LoggingConfigurationDagProcessingLogsCloudWatchLogGroupArn: string;
	readonly LoggingConfigurationSchedulerLogsCloudWatchLogGroupArn: string;
	readonly LoggingConfigurationTaskLogsCloudWatchLogGroupArn: string;
	readonly LoggingConfigurationWebserverLogsCloudWatchLogGroupArn: string;
	readonly LoggingConfigurationWorkerLogsCloudWatchLogGroupArn: string;
	readonly WebserverUrl: string;
}
export interface EnvironmentComponentInputs {
	readonly Name: string;
	readonly AirflowConfigurationOptions?: (any | undefined) | undefined;
	readonly AirflowVersion?: (string | undefined) | undefined;
	readonly DagS3Path?: (string | undefined) | undefined;
	readonly EnvironmentClass?: (string | undefined) | undefined;
	readonly ExecutionRoleArn?: (string | undefined) | undefined;
	readonly KmsKey?: (string | undefined) | undefined;
	readonly LoggingConfiguration?: (LoggingConfiguration | undefined) | undefined;
	readonly MaxWorkers?: (number | undefined) | undefined;
	readonly MinWorkers?: (number | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly PluginsS3ObjectVersion?: (string | undefined) | undefined;
	readonly PluginsS3Path?: (string | undefined) | undefined;
	readonly RequirementsS3ObjectVersion?: (string | undefined) | undefined;
	readonly RequirementsS3Path?: (string | undefined) | undefined;
	readonly Schedulers?: (number | undefined) | undefined;
	readonly SourceBucketArn?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly WebserverAccessMode?: (string | undefined) | undefined;
	readonly WeeklyMaintenanceWindowStart?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface LoggingConfiguration {
	readonly DagProcessingLogs?: (ModuleLoggingConfiguration | undefined) | undefined;
	readonly SchedulerLogs?: (ModuleLoggingConfiguration | undefined) | undefined;
	readonly TaskLogs?: (ModuleLoggingConfiguration | undefined) | undefined;
	readonly WebserverLogs?: (ModuleLoggingConfiguration | undefined) | undefined;
	readonly WorkerLogs?: (ModuleLoggingConfiguration | undefined) | undefined;
}
export interface ModuleLoggingConfiguration {
	readonly CloudWatchLogGroupArn?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LogLevel?: (string | undefined) | undefined;
}
export interface NetworkConfiguration {
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export default {
	Environment: Environment,
};
