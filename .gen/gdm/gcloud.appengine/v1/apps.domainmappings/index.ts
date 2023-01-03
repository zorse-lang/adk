import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsDomainMappings
	extends GdmResource<AppsDomainMappingsComponentInputs>
	implements AppsDomainMappingsComponentOutputs
{
	constructor(entity: ADKEntity, options: AppsDomainMappingsComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsDomainMappings", options);
	}
}
export interface AppsDomainMappingsComponentOutputs {}
export interface AppsDomainMappingsComponentInputs {
	readonly appsId: string;
	readonly id?: string | undefined;
	readonly name: string;
	readonly overrideStrategy?: string | undefined;
	readonly resourceRecords?: ResourceRecord[] | undefined;
	readonly sslSettings?: SslSettings | undefined;
	readonly type: string;
}
export interface DomainMapping {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly resourceRecords?: ResourceRecord[] | undefined;
	readonly sslSettings?: SslSettings | undefined;
}
export interface ResourceRecord {
	readonly name?: string | undefined;
	readonly rrdata?: string | undefined;
	readonly type?: string | undefined;
}
export interface SslSettings {
	readonly certificateId?: string | undefined;
	readonly pendingManagedCertificateId?: string | undefined;
	readonly sslManagementType?: string | undefined;
}
export default {
	AppsDomainMappings: AppsDomainMappings,
};
