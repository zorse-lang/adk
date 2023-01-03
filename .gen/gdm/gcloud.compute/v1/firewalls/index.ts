import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Firewalls extends GdmResource<FirewallsComponentInputs> implements FirewallsComponentOutputs {
	constructor(entity: ADKEntity, options: FirewallsComponentInputs) {
		super(entity, options.name, "compute.v1.Firewalls", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface FirewallsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface FirewallsComponentInputs {
	readonly allowed?: Array<{ IPProtocol?: string; ports?: string[] }> | undefined;
	readonly denied?: Array<{ IPProtocol?: string; ports?: string[] }> | undefined;
	readonly description?: string | undefined;
	readonly destinationRanges?: string[] | undefined;
	readonly direction?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly logConfig?: FirewallLogConfig | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly priority?: number | undefined;
	readonly requestId?: string | undefined;
	readonly sourceRanges?: string[] | undefined;
	readonly sourceServiceAccounts?: string[] | undefined;
	readonly sourceTags?: string[] | undefined;
	readonly targetServiceAccounts?: string[] | undefined;
	readonly targetTags?: string[] | undefined;
	readonly type: string;
}
export interface Firewall {
	readonly allowed?: Array<{ IPProtocol?: string; ports?: string[] }> | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly denied?: Array<{ IPProtocol?: string; ports?: string[] }> | undefined;
	readonly description?: string | undefined;
	readonly destinationRanges?: string[] | undefined;
	readonly direction?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly logConfig?: FirewallLogConfig | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly priority?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly sourceRanges?: string[] | undefined;
	readonly sourceServiceAccounts?: string[] | undefined;
	readonly sourceTags?: string[] | undefined;
	readonly targetServiceAccounts?: string[] | undefined;
	readonly targetTags?: string[] | undefined;
}
export interface FirewallLogConfig {
	readonly enable?: boolean | undefined;
	readonly metadata?: string | undefined;
}
export default {
	Firewalls: Firewalls,
};
