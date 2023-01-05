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
	readonly id?: string;
	readonly name: string;
	readonly overrideStrategy?: string;
	readonly resourceRecords?: ResourceRecord[];
	readonly sslSettings?: SslSettings;
}
export interface DomainMapping {
	readonly id?: string;
	readonly name?: string;
	readonly resourceRecords?: ResourceRecord[];
	readonly sslSettings?: SslSettings;
}
export interface ResourceRecord {
	readonly name?: string;
	readonly rrdata?: string;
	readonly type?: string;
}
export interface SslSettings {
	readonly certificateId?: string;
	readonly pendingManagedCertificateId?: string;
	readonly sslManagementType?: string;
}
export default {
	AppsDomainMappings: AppsDomainMappings,
};
