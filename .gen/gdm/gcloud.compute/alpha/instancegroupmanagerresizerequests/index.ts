import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroupManagerResizeRequests
	extends GdmResource<InstanceGroupManagerResizeRequestsComponentInputs>
	implements InstanceGroupManagerResizeRequestsComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceGroupManagerResizeRequestsComponentInputs) {
		super(entity, options.name, "compute.alpha.InstanceGroupManagerResizeRequests", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly state?: string | undefined;
	public readonly status?: InstanceGroupManagerResizeRequestStatus | undefined;
	public readonly zone?: string | undefined;
}
export interface InstanceGroupManagerResizeRequestsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly state?: string | undefined;
	readonly status?: InstanceGroupManagerResizeRequestStatus | undefined;
	readonly zone?: string | undefined;
}
export interface InstanceGroupManagerResizeRequestsComponentInputs {
	readonly count?: number | undefined;
	readonly description?: string | undefined;
	readonly instanceGroupManager: string;
	readonly name: string;
	readonly queuingPolicy?: QueuingPolicy | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface Duration {
	readonly nanos?: number | undefined;
	readonly seconds?: string | undefined;
}
export interface ErrorInfo {
	readonly domain?: string | undefined;
	readonly metadatas?: { [P in string]: string } | undefined;
	readonly reason?: string | undefined;
}
export interface Help {
	readonly links?: HelpLink[] | undefined;
}
export interface HelpLink {
	readonly description?: string | undefined;
	readonly url?: string | undefined;
}
export interface InstanceGroupManagerResizeRequest {
	readonly count?: number | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly queuingPolicy?: QueuingPolicy | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly state?: string | undefined;
	readonly status?: InstanceGroupManagerResizeRequestStatus | undefined;
	readonly zone?: string | undefined;
}
export interface InstanceGroupManagerResizeRequestStatus {
	readonly error?:
		| {
				errors?: Array<{
					code?: string;
					errorDetails?: Array<{
						errorInfo?: ErrorInfo;
						help?: Help;
						localizedMessage?: LocalizedMessage;
						quotaInfo?: QuotaExceededInfo;
					}>;
					location?: string;
					message?: string;
				}>;
		  }
		| undefined;
	readonly queuingPolicy?: QueuingPolicy | undefined;
}
export interface LocalizedMessage {
	readonly locale?: string | undefined;
	readonly message?: string | undefined;
}
export interface QueuingPolicy {
	readonly validUntilDuration?: Duration | undefined;
	readonly validUntilTime?: string | undefined;
}
export interface QuotaExceededInfo {
	readonly dimensions?: { [P in string]: string } | undefined;
	readonly limit?: number | undefined;
	readonly limitName?: string | undefined;
	readonly metricName?: string | undefined;
}
export default {
	InstanceGroupManagerResizeRequests: InstanceGroupManagerResizeRequests,
};
