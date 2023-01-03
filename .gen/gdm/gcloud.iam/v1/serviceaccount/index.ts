import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServiceAccount extends GdmResource<ServiceAccountComponentInputs> implements ServiceAccountComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceAccountComponentInputs) {
		super(entity, options.name, "iam.v1.serviceAccount", options);
	}
	public readonly disabled?: boolean | undefined;
	public readonly email?: string | undefined;
	public readonly oauth2ClientId?: string | undefined;
	public readonly projectId?: string | undefined;
	public readonly uniqueId?: string | undefined;
}
export interface ServiceAccountComponentOutputs {
	readonly disabled?: boolean | undefined;
	readonly email?: string | undefined;
	readonly oauth2ClientId?: string | undefined;
	readonly projectId?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export interface ServiceAccountComponentInputs {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly etag?: string | undefined;
	readonly name: string;
	readonly type: string;
}
export default {
	ServiceAccount: ServiceAccount,
};
