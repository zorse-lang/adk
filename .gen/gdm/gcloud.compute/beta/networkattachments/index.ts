import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NetworkAttachments
	extends GdmResource<NetworkAttachmentsComponentInputs>
	implements NetworkAttachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkAttachmentsComponentInputs) {
		super(entity, options.name, "compute.beta.NetworkAttachments", options);
	}
	public readonly connectionEndpoints?: NetworkAttachmentConnectedEndpoint[];
	public readonly creationTimestamp?: string;
	public readonly fingerprint?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly network?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface NetworkAttachmentsComponentOutputs {
	readonly connectionEndpoints?: NetworkAttachmentConnectedEndpoint[];
	readonly creationTimestamp?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly network?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface NetworkAttachmentsComponentInputs {
	readonly connectionPreference?: string;
	readonly description?: string;
	readonly name: string;
	readonly producerAcceptLists?: string[];
	readonly producerRejectLists?: string[];
	readonly requestId?: string;
	readonly subnetworks?: string[];
}
export interface NetworkAttachment {
	readonly connectionEndpoints?: NetworkAttachmentConnectedEndpoint[];
	readonly connectionPreference?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly network?: string;
	readonly producerAcceptLists?: string[];
	readonly producerRejectLists?: string[];
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly subnetworks?: string[];
}
export interface NetworkAttachmentConnectedEndpoint {
	readonly ipAddress?: string;
	readonly projectIdOrNum?: string;
	readonly secondaryIpCidrRanges?: string[];
	readonly status?: string;
	readonly subnetwork?: string;
}
export default {
	NetworkAttachments: NetworkAttachments,
};
