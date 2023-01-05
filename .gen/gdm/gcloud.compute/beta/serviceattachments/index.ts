import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServiceAttachments
	extends GdmResource<ServiceAttachmentsComponentInputs>
	implements ServiceAttachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServiceAttachmentsComponentInputs) {
		super(entity, options.name, "compute.beta.ServiceAttachments", options);
	}
	public readonly connectedEndpoints?: ServiceAttachmentConnectedEndpoint[];
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly pscServiceAttachmentId?: Uint128;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface ServiceAttachmentsComponentOutputs {
	readonly connectedEndpoints?: ServiceAttachmentConnectedEndpoint[];
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly pscServiceAttachmentId?: Uint128;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface ServiceAttachmentsComponentInputs {
	readonly connectionPreference?: string;
	readonly consumerAcceptLists?: ServiceAttachmentConsumerProjectLimit[];
	readonly consumerRejectLists?: string[];
	readonly description?: string;
	readonly domainNames?: string[];
	readonly enableProxyProtocol?: boolean;
	readonly fingerprint?: string;
	readonly name: string;
	readonly natSubnets?: string[];
	readonly producerForwardingRule?: string;
	readonly requestId?: string;
	readonly targetService?: string;
}
export interface ServiceAttachment {
	readonly connectedEndpoints?: ServiceAttachmentConnectedEndpoint[];
	readonly connectionPreference?: string;
	readonly consumerAcceptLists?: ServiceAttachmentConsumerProjectLimit[];
	readonly consumerRejectLists?: string[];
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly domainNames?: string[];
	readonly enableProxyProtocol?: boolean;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly natSubnets?: string[];
	readonly producerForwardingRule?: string;
	readonly pscServiceAttachmentId?: Uint128;
	readonly region?: string;
	readonly selfLink?: string;
	readonly targetService?: string;
}
export interface ServiceAttachmentConnectedEndpoint {
	readonly endpoint?: string;
	readonly pscConnectionId?: string;
	readonly status?: string;
}
export interface ServiceAttachmentConsumerProjectLimit {
	readonly connectionLimit?: number;
	readonly networkUrl?: string;
	readonly projectIdOrNum?: string;
}
export interface Uint128 {
	readonly high?: string;
	readonly low?: string;
}
export default {
	ServiceAttachments: ServiceAttachments,
};
