import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Policies extends GdmResource<PoliciesComponentInputs> implements PoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: PoliciesComponentInputs) {
		super(entity, options.name, "dns.v1beta2.Policies", options);
	}
	public readonly id?: string;
}
export interface PoliciesComponentOutputs {
	readonly id?: string;
}
export interface PoliciesComponentInputs {
	readonly alternativeNameServerConfig?: PolicyAlternativeNameServerConfig;
	readonly clientOperationId?: string;
	readonly description?: string;
	readonly enableInboundForwarding?: boolean;
	readonly enableLogging?: boolean;
	readonly kind?: string;
	readonly name: string;
	readonly networks?: PolicyNetwork[];
}
export interface Policy {
	readonly alternativeNameServerConfig?: PolicyAlternativeNameServerConfig;
	readonly description?: string;
	readonly enableInboundForwarding?: boolean;
	readonly enableLogging?: boolean;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly networks?: PolicyNetwork[];
}
export interface PolicyAlternativeNameServerConfig {
	readonly kind?: string;
	readonly targetNameServers?: PolicyAlternativeNameServerConfigTargetNameServer[];
}
export interface PolicyAlternativeNameServerConfigTargetNameServer {
	readonly forwardingPath?: string;
	readonly ipv4Address?: string;
	readonly ipv6Address?: string;
	readonly kind?: string;
	readonly port?: number;
}
export interface PolicyNetwork {
	readonly kind?: string;
	readonly networkUrl?: string;
}
export default {
	Policies: Policies,
};
