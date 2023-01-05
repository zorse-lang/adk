import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AddressBook extends RosResource<AddressBookComponentInputs> implements AddressBookComponentOutputs {
	constructor(entity: ADKEntity, options: AddressBookComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CLOUDFW::AddressBook", options);
	}
	public readonly GroupUuid: any;
}
export interface AddressBookComponentOutputs {
	readonly GroupUuid: any;
}
export interface AddressBookComponentInputs {
	readonly Description: string;
	readonly GroupName: string;
	readonly GroupType: string;
	readonly AddressList?: string | undefined;
	readonly AutoAddTagEcs?: boolean | undefined;
	readonly RegionId?: string | undefined;
	readonly TagList?: TagList[] | undefined;
	readonly TagRelation?: string | undefined;
	readonly LogicalId: string;
}
export class ControlPolicy extends RosResource<ControlPolicyComponentInputs> implements ControlPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ControlPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CLOUDFW::ControlPolicy", options);
	}
	public readonly AclUuid: any;
}
export interface ControlPolicyComponentOutputs {
	readonly AclUuid: any;
}
export interface ControlPolicyComponentInputs {
	readonly AclAction: string;
	readonly ApplicationName: string;
	readonly Description: string;
	readonly Destination: string;
	readonly DestinationType: string;
	readonly Direction: string;
	readonly NewOrder: number;
	readonly Proto: string;
	readonly Source: string;
	readonly SourceType: string;
	readonly DestPort?: string | undefined;
	readonly DestPortGroup?: string | undefined;
	readonly DestPortType?: string | undefined;
	readonly RegionId?: string | undefined;
	readonly LogicalId: string;
}
export class VpcFirewallControlPolicy
	extends RosResource<VpcFirewallControlPolicyComponentInputs>
	implements VpcFirewallControlPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: VpcFirewallControlPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CLOUDFW::VpcFirewallControlPolicy", options);
	}
	public readonly AclUuid: any;
}
export interface VpcFirewallControlPolicyComponentOutputs {
	readonly AclUuid: any;
}
export interface VpcFirewallControlPolicyComponentInputs {
	readonly AclAction: string;
	readonly ApplicationName: string;
	readonly Description: string;
	readonly Destination: string;
	readonly DestinationType: string;
	readonly NewOrder: string;
	readonly Proto: string;
	readonly Source: string;
	readonly SourceType: string;
	readonly VpcFirewallId: string;
	readonly DestPort?: string | undefined;
	readonly DestPortGroup?: string | undefined;
	readonly DestPortType?: string | undefined;
	readonly Lang?: string | undefined;
	readonly RegionId?: string | undefined;
	readonly LogicalId: string;
}
export interface TagList {
	readonly TagKey?: string | undefined;
	readonly TagValue?: string | undefined;
}
export default {
	AddressBook: AddressBook,
	ControlPolicy: ControlPolicy,
	VpcFirewallControlPolicy: VpcFirewallControlPolicy,
};
