import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class UptimeCheckIps extends GdmResource<UptimeCheckIpsComponentInputs> implements UptimeCheckIpsComponentOutputs {
	constructor(entity: ADKEntity, options: UptimeCheckIpsComponentInputs) {
		super(entity, options.name, "monitoring.v3.UptimeCheckIps", options);
	}
}
export interface UptimeCheckIpsComponentOutputs {}
export interface UptimeCheckIpsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	UptimeCheckIps: UptimeCheckIps,
};
