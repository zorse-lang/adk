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
	readonly AirflowConfigurationOptions?: any | undefined;
	readonly AirflowVersion?: string | undefined;
	readonly DagS3Path?: string | undefined;
	readonly EnvironmentClass?: string | undefined;
	readonly ExecutionRoleArn?: string | undefined;
	readonly KmsKey?: string | undefined;
	readonly LoggingConfiguration?: LoggingConfiguration | undefined;
	readonly MaxWorkers?: number | undefined;
	readonly MinWorkers?: number | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly PluginsS3ObjectVersion?: string | undefined;
	readonly PluginsS3Path?: string | undefined;
	readonly RequirementsS3ObjectVersion?: string | undefined;
	readonly RequirementsS3Path?: string | undefined;
	readonly Schedulers?: number | undefined;
	readonly SourceBucketArn?: string | undefined;
	readonly Tags?: any | undefined;
	readonly WebserverAccessMode?: string | undefined;
	readonly WeeklyMaintenanceWindowStart?: string | undefined;
	readonly LogicalId: string;
}
export interface LoggingConfiguration {
	readonly DagProcessingLogs?: ModuleLoggingConfiguration | undefined;
	readonly SchedulerLogs?: ModuleLoggingConfiguration | undefined;
	readonly TaskLogs?: ModuleLoggingConfiguration | undefined;
	readonly WebserverLogs?: ModuleLoggingConfiguration | undefined;
	readonly WorkerLogs?: ModuleLoggingConfiguration | undefined;
}
export interface ModuleLoggingConfiguration {
	readonly CloudWatchLogGroupArn?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly LogLevel?: string | undefined;
}
export interface NetworkConfiguration {
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
}
export default {
	Environment: Environment,
};
