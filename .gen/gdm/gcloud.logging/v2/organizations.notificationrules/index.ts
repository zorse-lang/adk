import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsNotificationRules
	extends GdmResource<OrganizationsNotificationRulesComponentInputs>
	implements OrganizationsNotificationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsNotificationRulesComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsNotificationRules", options);
	}
	public readonly senderIdentity?: string | undefined;
}
export interface OrganizationsNotificationRulesComponentOutputs {
	readonly senderIdentity?: string | undefined;
}
export interface OrganizationsNotificationRulesComponentInputs {
	readonly alertPolicyDetails?: LogAlertPolicyDetails | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly filter: string;
	readonly includeChildren?: boolean | undefined;
	readonly name: string;
	readonly notificationChannels?: string[] | undefined;
	readonly notificationRuleId: string;
	readonly parent: string;
	readonly resetDuration?: string | undefined;
	readonly resourceNames?: string[] | undefined;
	readonly valueExtractors?: { [P in string]: string } | undefined;
	readonly type: string;
}
export interface LogAlertPolicyDetails {
	readonly condition?: string | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly verbosityLabels?: { [P in string]: string } | undefined;
}
export interface LogNotificationRule {
	readonly alertPolicyDetails?: LogAlertPolicyDetails | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly filter: string;
	readonly includeChildren?: boolean | undefined;
	readonly name?: string | undefined;
	readonly notificationChannels?: string[] | undefined;
	readonly resetDuration?: string | undefined;
	readonly resourceNames?: string[] | undefined;
	readonly senderIdentity?: string | undefined;
	readonly valueExtractors?: { [P in string]: string } | undefined;
}
export default {
	OrganizationsNotificationRules: OrganizationsNotificationRules,
};
