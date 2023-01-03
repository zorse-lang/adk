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
	readonly AppMonitorConfiguration?: (AppMonitorConfiguration | undefined) | undefined;
	readonly CwLogEnabled?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AppMonitorConfiguration {
	readonly AllowCookies?: (boolean | undefined) | undefined;
	readonly EnableXRay?: (boolean | undefined) | undefined;
	readonly ExcludedPages?: (string[] | undefined) | undefined;
	readonly FavoritePages?: (string[] | undefined) | undefined;
	readonly GuestRoleArn?: (string | undefined) | undefined;
	readonly IdentityPoolId?: (string | undefined) | undefined;
	readonly IncludedPages?: (string[] | undefined) | undefined;
	readonly MetricDestinations?: (MetricDestination[] | undefined) | undefined;
	readonly SessionSampleRate?: (number | undefined) | undefined;
	readonly Telemetries?: (string[] | undefined) | undefined;
}
export interface MetricDefinition {
	readonly DimensionKeys?: ({ [key: string]: string } | undefined) | undefined;
	readonly EventPattern?: (string | undefined) | undefined;
	readonly Name: string;
	readonly UnitLabel?: (string | undefined) | undefined;
	readonly ValueKey?: (string | undefined) | undefined;
}
export interface MetricDestination {
	readonly Destination: string;
	readonly DestinationArn?: (string | undefined) | undefined;
	readonly IamRoleArn?: (string | undefined) | undefined;
	readonly MetricDefinitions?: (MetricDefinition[] | undefined) | undefined;
}
export default {
	AppMonitor: AppMonitor,
};
