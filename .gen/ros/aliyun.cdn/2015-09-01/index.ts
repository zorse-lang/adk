import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends RosResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CDN::Domain", options);
	}
	public readonly Cname: any;
}
export interface DomainComponentOutputs {
	readonly Cname: any;
}
export interface DomainComponentInputs {
	readonly CdnType: string;
	readonly DomainName: any | string;
	readonly CheckUrl?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Scope?: string | undefined;
	readonly Sources?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly TopLevelDomain?: string | undefined;
	readonly LogicalId: string;
}
export class DomainConfig extends RosResource<DomainConfigComponentInputs> implements DomainConfigComponentOutputs {
	constructor(entity: ADKEntity, options: DomainConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CDN::DomainConfig", options);
	}
}
export interface DomainConfigComponentOutputs {}
export interface DomainConfigComponentInputs {
	readonly DomainNames: string;
	readonly Functions: string;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	Domain: Domain,
	DomainConfig: DomainConfig,
};
