import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroupManagerResizeRequests
	extends GdmResource<InstanceGroupManagerResizeRequestsComponentInputs>
	implements InstanceGroupManagerResizeRequestsComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceGroupManagerResizeRequestsComponentInputs) {
		super(entity, options.name, "compute.alpha.InstanceGroupManagerResizeRequests", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly state?: string;
	public readonly status?: InstanceGroupManagerResizeRequestStatus;
	public readonly zone?: string;
}
export interface InstanceGroupManagerResizeRequestsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
	readonly status?: InstanceGroupManagerResizeRequestStatus;
	readonly zone?: string;
}
export interface InstanceGroupManagerResizeRequestsComponentInputs {
	readonly count?: number;
	readonly description?: string;
	readonly instanceGroupManager: string;
	readonly name: string;
	readonly queuingPolicy?: QueuingPolicy;
	readonly requestId?: string;
}
export interface Duration {
	readonly nanos?: number;
	readonly seconds?: string;
}
export interface ErrorInfo {
	readonly domain?: string;
	readonly metadatas?: { [P in string]: string };
	readonly reason?: string;
}
export interface Help {
	readonly links?: HelpLink[];
}
export interface HelpLink {
	readonly description?: string;
	readonly url?: string;
}
export interface InstanceGroupManagerResizeRequest {
	readonly count?: number;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly queuingPolicy?: QueuingPolicy;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
	readonly status?: InstanceGroupManagerResizeRequestStatus;
	readonly zone?: string;
}
export interface InstanceGroupManagerResizeRequestStatus {
	readonly error?: {
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
	};
	readonly queuingPolicy?: QueuingPolicy;
}
export interface LocalizedMessage {
	readonly locale?: string;
	readonly message?: string;
}
export interface QueuingPolicy {
	readonly validUntilDuration?: Duration;
	readonly validUntilTime?: string;
}
export interface QuotaExceededInfo {
	readonly dimensions?: { [P in string]: string };
	readonly limit?: number;
	readonly limitName?: string;
	readonly metricName?: string;
}
export default {
	InstanceGroupManagerResizeRequests: InstanceGroupManagerResizeRequests,
};
