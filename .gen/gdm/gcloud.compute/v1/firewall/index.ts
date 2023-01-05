import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Firewall extends GdmResource<FirewallComponentInputs> implements FirewallComponentOutputs {
	constructor(entity: ADKEntity, options: FirewallComponentInputs) {
		super(entity, options.name, "compute.v1.firewall", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
}
export interface FirewallComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
}
export interface FirewallComponentInputs {
	readonly allowed?: Array<{ IPProtocol?: string; ports?: string[] }>;
	readonly denied?: Array<{ IPProtocol?: string; ports?: string[] }>;
	readonly description?: string;
	readonly destinationRanges?: string[];
	readonly direction?: string;
	readonly disabled?: boolean;
	readonly logConfig?: FirewallLogConfig;
	readonly name: string;
	readonly network?: string;
	readonly priority?: number;
	readonly sourceRanges?: string[];
	readonly sourceServiceAccounts?: string[];
	readonly sourceTags?: string[];
	readonly targetServiceAccounts?: string[];
	readonly targetTags?: string[];
}
export interface FirewallLogConfig {
	readonly enable?: boolean;
	readonly metadata?: string;
}
export default {
	Firewall: Firewall,
};
