import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsFirewallIngressRules
	extends GdmResource<AppsFirewallIngressRulesComponentInputs>
	implements AppsFirewallIngressRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: AppsFirewallIngressRulesComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsFirewallIngressRules", options);
	}
}
export interface AppsFirewallIngressRulesComponentOutputs {}
export interface AppsFirewallIngressRulesComponentInputs {
	readonly action?: string;
	readonly appsId: string;
	readonly description?: string;
	readonly priority?: number;
	readonly sourceRange?: string;
	readonly name: string;
}
export interface FirewallRule {
	readonly action?: string;
	readonly description?: string;
	readonly priority?: number;
	readonly sourceRange?: string;
}
export default {
	AppsFirewallIngressRules: AppsFirewallIngressRules,
};
