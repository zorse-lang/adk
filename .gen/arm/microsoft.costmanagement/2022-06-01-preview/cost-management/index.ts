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
	readonly eTag?: string;
	readonly kind?: "Email" | "InsightAlert";
	readonly name: string;
	readonly properties?: ScheduledActionProperties;
	readonly systemData?: SystemData;
}
export interface FileDestination {
	readonly fileFormats?: "Csv"[];
}
export interface NotificationProperties {
	readonly message?: string;
	readonly subject: string;
	readonly to: string[];
}
export interface ScheduledActionProperties {
	readonly displayName: string;
	readonly fileDestination?: FileDestination;
	readonly notification: NotificationProperties;
	readonly schedule: ScheduleProperties;
	readonly scope?: string;
	readonly status: "Disabled" | "Enabled";
	readonly viewId: string;
}
export interface ScheduleProperties {
	readonly dayOfMonth?: number;
	readonly daysOfWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[];
	readonly endDate: string;
	readonly frequency: "Daily" | "Monthly" | "Weekly";
	readonly hourOfDay?: number;
	readonly startDate: string;
	readonly weeksOfMonth?: "First" | "Fourth" | "Last" | "Second" | "Third"[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	scheduledActions: scheduledActions,
};
