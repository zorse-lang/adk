import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsAuthorizedDomains
	extends GdmResource<AppsAuthorizedDomainsComponentInputs>
	implements AppsAuthorizedDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: AppsAuthorizedDomainsComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsAuthorizedDomains", options);
	}
}
export interface AppsAuthorizedDomainsComponentOutputs {}
export interface AppsAuthorizedDomainsComponentInputs {
	readonly name: string;
}
export default {
	AppsAuthorizedDomains: AppsAuthorizedDomains,
};
