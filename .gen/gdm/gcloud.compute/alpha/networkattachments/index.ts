import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NetworkAttachments
	extends GdmResource<NetworkAttachmentsComponentInputs>
	implements NetworkAttachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkAttachmentsComponentInputs) {
		super(entity, options.name, "compute.alpha.NetworkAttachments", options);
	}
	public readonly connectionEndpoints?: NetworkAttachmentConnectedEndpoint[] | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly fingerprint?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly network?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface NetworkAttachmentsComponentOutputs {
	readonly connectionEndpoints?: NetworkAttachmentConnectedEndpoint[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly network?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface NetworkAttachmentsComponentInputs {
	readonly connectionPreference?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly producerAcceptLists?: string[] | undefined;
	readonly producerRejectLists?: string[] | undefined;
	readonly requestId?: string | undefined;
	readonly subnetworks?: string[] | undefined;
	readonly type: string;
}
export interface NetworkAttachment {
	readonly connectionEndpoints?: NetworkAttachmentConnectedEndpoint[] | undefined;
	readonly connectionPreference?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly producerAcceptLists?: string[] | undefined;
	readonly producerRejectLists?: string[] | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly subnetworks?: string[] | undefined;
}
export interface NetworkAttachmentConnectedEndpoint {
	readonly ipAddress?: string | undefined;
	readonly projectIdOrNum?: string | undefined;
	readonly secondaryIpCidrRanges?: string[] | undefined;
	readonly status?: string | undefined;
	readonly subnetwork?: string | undefined;
}
export default {
	NetworkAttachments: NetworkAttachments,
};
