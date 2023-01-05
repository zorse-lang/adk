import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Firewalls extends GdmResource<FirewallsComponentInputs> implements FirewallsComponentOutputs {
	constructor(entity: ADKEntity, options: FirewallsComponentInputs) {
		super(entity, options.name, "compute.alpha.Firewalls", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface FirewallsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface FirewallsComponentInputs {
	readonly allowed?: Array<{ IPProtocol?: string; ports?: string[] }>;
	readonly denied?: Array<{ IPProtocol?: string; ports?: string[] }>;
	readonly description?: string;
	readonly destinationRanges?: string[];
	readonly direction?: string;
	readonly disabled?: boolean;
	readonly enableLogging?: boolean;
	readonly logConfig?: FirewallLogConfig;
	readonly name: string;
	readonly network?: string;
	readonly priority?: number;
	readonly requestId?: string;
	readonly sourceRanges?: string[];
	readonly sourceServiceAccounts?: string[];
	readonly sourceTags?: string[];
	readonly targetServiceAccounts?: string[];
	readonly targetTags?: string[];
}
export interface Firewall {
	readonly allowed?: Array<{ IPProtocol?: string; ports?: string[] }>;
	readonly creationTimestamp?: string;
	readonly denied?: Array<{ IPProtocol?: string; ports?: string[] }>;
	readonly description?: string;
	readonly destinationRanges?: string[];
	readonly direction?: string;
	readonly disabled?: boolean;
	readonly enableLogging?: boolean;
	readonly id?: string;
	readonly kind?: string;
	readonly logConfig?: FirewallLogConfig;
	readonly name?: string;
	readonly network?: string;
	readonly priority?: number;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
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
	Firewalls: Firewalls,
};
