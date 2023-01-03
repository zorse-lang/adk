import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Policies extends GdmResource<PoliciesComponentInputs> implements PoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: PoliciesComponentInputs) {
		super(entity, options.name, "dns.v1beta2.Policies", options);
	}
	public readonly id?: string | undefined;
}
export interface PoliciesComponentOutputs {
	readonly id?: string | undefined;
}
export interface PoliciesComponentInputs {
	readonly alternativeNameServerConfig?: PolicyAlternativeNameServerConfig | undefined;
	readonly clientOperationId?: string | undefined;
	readonly description?: string | undefined;
	readonly enableInboundForwarding?: boolean | undefined;
	readonly enableLogging?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly networks?: PolicyNetwork[] | undefined;
	readonly type: string;
}
export interface Policy {
	readonly alternativeNameServerConfig?: PolicyAlternativeNameServerConfig | undefined;
	readonly description?: string | undefined;
	readonly enableInboundForwarding?: boolean | undefined;
	readonly enableLogging?: boolean | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly networks?: PolicyNetwork[] | undefined;
}
export interface PolicyAlternativeNameServerConfig {
	readonly kind?: string | undefined;
	readonly targetNameServers?: PolicyAlternativeNameServerConfigTargetNameServer[] | undefined;
}
export interface PolicyAlternativeNameServerConfigTargetNameServer {
	readonly forwardingPath?: string | undefined;
	readonly ipv4Address?: string | undefined;
	readonly ipv6Address?: string | undefined;
	readonly kind?: string | undefined;
	readonly port?: number | undefined;
}
export interface PolicyNetwork {
	readonly kind?: string | undefined;
	readonly networkUrl?: string | undefined;
}
export default {
	Policies: Policies,
};
