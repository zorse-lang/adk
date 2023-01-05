import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsNotificationRules
	extends GdmResource<BillingAccountsNotificationRulesComponentInputs>
	implements BillingAccountsNotificationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsNotificationRulesComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsNotificationRules", options);
	}
	public readonly senderIdentity?: string;
}
export interface BillingAccountsNotificationRulesComponentOutputs {
	readonly senderIdentity?: string;
}
export interface BillingAccountsNotificationRulesComponentInputs {
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
	BillingAccountsNotificationRules: BillingAccountsNotificationRules,
};
