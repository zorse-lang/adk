import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServiceAccount extends GdmResource<ServiceAccountComponentInputs> implements ServiceAccountComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceAccountComponentInputs) {
		super(entity, options.name, "iam.v1.serviceAccount", options);
	}
	public readonly disabled?: boolean;
	public readonly email?: string;
	public readonly oauth2ClientId?: string;
	public readonly projectId?: string;
	public readonly uniqueId?: string;
}
export interface ServiceAccountComponentOutputs {
	readonly disabled?: boolean;
	readonly email?: string;
	readonly oauth2ClientId?: string;
	readonly projectId?: string;
	readonly uniqueId?: string;
}
export interface ServiceAccountComponentInputs {
	readonly description?: string;
	readonly displayName?: string;
	readonly etag?: string;
	readonly name: string;
}
export default {
	ServiceAccount: ServiceAccount,
};
