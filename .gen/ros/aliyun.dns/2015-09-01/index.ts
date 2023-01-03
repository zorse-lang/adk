import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends RosResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DNS::Domain", options);
	}
	public readonly GroupName: any;
	public readonly DomainId: any;
	public readonly PunyCode: any;
	public readonly DnsServers: any;
}
export interface DomainComponentOutputs {
	readonly GroupName: any;
	readonly DomainId: any;
	readonly PunyCode: any;
	readonly DnsServers: any;
}
export interface DomainComponentInputs {
	readonly DomainName: any | string;
	readonly GroupId?: (any | string) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DomainGroup extends RosResource<DomainGroupComponentInputs> implements DomainGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DomainGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DNS::DomainGroup", options);
	}
	public readonly GroupId: any;
}
export interface DomainGroupComponentOutputs {
	readonly GroupId: any;
}
export interface DomainGroupComponentInputs {
	readonly GroupName: string;
	readonly LogicalId: string;
}
export class DomainRecord extends RosResource<DomainRecordComponentInputs> implements DomainRecordComponentOutputs {
	constructor(entity: ADKEntity, options: DomainRecordComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DNS::DomainRecord", options);
	}
	public readonly RecordId: any;
}
export interface DomainRecordComponentOutputs {
	readonly RecordId: any;
}
export interface DomainRecordComponentInputs {
	readonly DomainName: string;
	readonly RR: string;
	readonly Type: string;
	readonly Value: string;
	readonly Line?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly TTL?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	Domain: Domain,
	DomainGroup: DomainGroup,
	DomainRecord: DomainRecord,
};
