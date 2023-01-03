import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersNotificationRules
	extends GdmResource<FoldersNotificationRulesComponentInputs>
	implements FoldersNotificationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersNotificationRulesComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersNotificationRules", options);
	}
	public readonly senderIdentity?: string | undefined;
}
export interface FoldersNotificationRulesComponentOutputs {
	readonly senderIdentity?: string | undefined;
}
export interface FoldersNotificationRulesComponentInputs {
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
	FoldersNotificationRules: FoldersNotificationRules,
};
