import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServiceAttachments
	extends GdmResource<ServiceAttachmentsComponentInputs>
	implements ServiceAttachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServiceAttachmentsComponentInputs) {
		super(entity, options.name, "compute.alpha.ServiceAttachments", options);
	}
	public readonly connectedEndpoints?: ServiceAttachmentConnectedEndpoint[] | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly pscServiceAttachmentId?: Uint128 | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface ServiceAttachmentsComponentOutputs {
	readonly connectedEndpoints?: ServiceAttachmentConnectedEndpoint[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly pscServiceAttachmentId?: Uint128 | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface ServiceAttachmentsComponentInputs {
	readonly connectionPreference?: string | undefined;
	readonly consumerAcceptLists?: ServiceAttachmentConsumerProjectLimit[] | undefined;
	readonly consumerRejectLists?: string[] | undefined;
	readonly description?: string | undefined;
	readonly domainNames?: string[] | undefined;
	readonly enableProxyProtocol?: boolean | undefined;
	readonly fingerprint?: string | undefined;
	readonly name: string;
	readonly natSubnets?: string[] | undefined;
	readonly producerForwardingRule?: string | undefined;
	readonly requestId?: string | undefined;
	readonly targetService?: string | undefined;
	readonly type: string;
}
export interface ServiceAttachment {
	readonly connectedEndpoints?: ServiceAttachmentConnectedEndpoint[] | undefined;
	readonly connectionPreference?: string | undefined;
	readonly consumerAcceptLists?: ServiceAttachmentConsumerProjectLimit[] | undefined;
	readonly consumerRejectLists?: string[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly domainNames?: string[] | undefined;
	readonly enableProxyProtocol?: boolean | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly natSubnets?: string[] | undefined;
	readonly producerForwardingRule?: string | undefined;
	readonly pscServiceAttachmentId?: Uint128 | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly targetService?: string | undefined;
}
export interface ServiceAttachmentConnectedEndpoint {
	readonly endpoint?: string | undefined;
	readonly pscConnectionId?: string | undefined;
	readonly status?: string | undefined;
}
export interface ServiceAttachmentConsumerProjectLimit {
	readonly connectionLimit?: number | undefined;
	readonly networkUrl?: string | undefined;
	readonly projectIdOrNum?: string | undefined;
}
export interface Uint128 {
	readonly high?: string | undefined;
	readonly low?: string | undefined;
}
export default {
	ServiceAttachments: ServiceAttachments,
};
