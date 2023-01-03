import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Firewall extends GdmResource<FirewallComponentInputs> implements FirewallComponentOutputs {
	constructor(entity: ADKEntity, options: FirewallComponentInputs) {
		super(entity, options.name, "compute.v1.firewall", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface FirewallComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface FirewallComponentInputs {
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
	readonly sourceRanges?: string[] | undefined;
	readonly sourceServiceAccounts?: string[] | undefined;
	readonly sourceTags?: string[] | undefined;
	readonly targetServiceAccounts?: string[] | undefined;
	readonly targetTags?: string[] | undefined;
	readonly type: string;
}
export interface FirewallLogConfig {
	readonly enable?: boolean | undefined;
	readonly metadata?: string | undefined;
}
export default {
	Firewall: Firewall,
};
