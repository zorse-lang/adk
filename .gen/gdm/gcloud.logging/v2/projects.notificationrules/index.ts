import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsNotificationRules
	extends GdmResource<ProjectsNotificationRulesComponentInputs>
	implements ProjectsNotificationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsNotificationRulesComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsNotificationRules", options);
	}
	public readonly senderIdentity?: string;
}
export interface ProjectsNotificationRulesComponentOutputs {
	readonly senderIdentity?: string;
}
export interface ProjectsNotificationRulesComponentInputs {
	readonly alertPolicyDetails?: LogAlertPolicyDetails;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly filter: string;
	readonly includeChildren?: boolean;
	readonly name: string;
	readonly notificationChannels?: string[];
	readonly notificationRuleId: string;
	readonly parent: string;
	readonly resetDuration?: string;
	readonly resourceNames?: string[];
	readonly valueExtractors?: { [P in string]: string };
}
export interface LogAlertPolicyDetails {
	readonly condition?: string;
	readonly userLabels?: { [P in string]: string };
	readonly verbosityLabels?: { [P in string]: string };
}
export interface LogNotificationRule {
	readonly alertPolicyDetails?: LogAlertPolicyDetails;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly filter: string;
	readonly includeChildren?: boolean;
	readonly name?: string;
	readonly notificationChannels?: string[];
	readonly resetDuration?: string;
	readonly resourceNames?: string[];
	readonly senderIdentity?: string;
	readonly valueExtractors?: { [P in string]: string };
}
export default {
	ProjectsNotificationRules: ProjectsNotificationRules,
};
