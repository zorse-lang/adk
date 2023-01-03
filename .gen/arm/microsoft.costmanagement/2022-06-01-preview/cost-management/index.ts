import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class scheduledActions
	extends ArmResource<scheduledActionsComponentInputs>
	implements scheduledActionsComponentOutputs
{
	constructor(entity: ADKEntity, options: scheduledActionsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/scheduledActions", "2022-06-01-preview", options);
	}
	public readonly apiVersion: "2022-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/scheduledActions";
}
export interface scheduledActionsComponentOutputs {
	readonly apiVersion: "2022-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/scheduledActions";
}
export interface scheduledActionsComponentInputs {
	readonly eTag?: string | undefined;
	readonly kind?: ("Email" | "InsightAlert") | undefined;
	readonly name: string;
	readonly properties?: ScheduledActionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface FileDestination {
	readonly fileFormats?: "Csv"[] | undefined;
}
export interface NotificationProperties {
	readonly message?: string | undefined;
	readonly subject: string;
	readonly to: string[];
}
export interface ScheduledActionProperties {
	readonly displayName: string;
	readonly fileDestination?: FileDestination | undefined;
	readonly notification: NotificationProperties;
	readonly schedule: ScheduleProperties;
	readonly scope?: string | undefined;
	readonly status: "Disabled" | "Enabled";
	readonly viewId: string;
}
export interface ScheduleProperties {
	readonly dayOfMonth?: number | undefined;
	readonly daysOfWeek?:
		| ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[])
		| undefined;
	readonly endDate: string;
	readonly frequency: "Daily" | "Monthly" | "Weekly";
	readonly hourOfDay?: number | undefined;
	readonly startDate: string;
	readonly weeksOfMonth?: ("First" | "Fourth" | "Last" | "Second" | "Third"[]) | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	scheduledActions: scheduledActions,
};
