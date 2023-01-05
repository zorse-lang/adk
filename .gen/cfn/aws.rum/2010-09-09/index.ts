import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AppMonitor extends CfnResource<AppMonitorComponentInputs> implements AppMonitorComponentOutputs {
	constructor(entity: ADKEntity, options: AppMonitorComponentInputs) {
		super(entity, options.LogicalId, "AWS::RUM::AppMonitor", options);
	}
}
export interface AppMonitorComponentOutputs {}
export interface AppMonitorComponentInputs {
	readonly Domain: string;
	readonly Name: string;
	readonly AppMonitorConfiguration?: AppMonitorConfiguration | undefined;
	readonly CwLogEnabled?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AppMonitorConfiguration {
	readonly AllowCookies?: boolean | undefined;
	readonly EnableXRay?: boolean | undefined;
	readonly ExcludedPages?: string[] | undefined;
	readonly FavoritePages?: string[] | undefined;
	readonly GuestRoleArn?: string | undefined;
	readonly IdentityPoolId?: string | undefined;
	readonly IncludedPages?: string[] | undefined;
	readonly MetricDestinations?: MetricDestination[] | undefined;
	readonly SessionSampleRate?: number | undefined;
	readonly Telemetries?: string[] | undefined;
}
export interface MetricDefinition {
	readonly DimensionKeys?: { [key: string]: string } | undefined;
	readonly EventPattern?: string | undefined;
	readonly Name: string;
	readonly UnitLabel?: string | undefined;
	readonly ValueKey?: string | undefined;
}
export interface MetricDestination {
	readonly Destination: string;
	readonly DestinationArn?: string | undefined;
	readonly IamRoleArn?: string | undefined;
	readonly MetricDefinitions?: MetricDefinition[] | undefined;
}
export default {
	AppMonitor: AppMonitor,
};
