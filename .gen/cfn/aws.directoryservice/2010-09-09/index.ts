import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class MicrosoftAD extends CfnResource<MicrosoftADComponentInputs> implements MicrosoftADComponentOutputs {
	constructor(entity: ADKEntity, options: MicrosoftADComponentInputs) {
		super(entity, options.LogicalId, "AWS::DirectoryService::MicrosoftAD", options);
	}
	public readonly Alias: string;
	public readonly DnsIpAddresses: string[];
}
export interface MicrosoftADComponentOutputs {
	readonly Alias: string;
	readonly DnsIpAddresses: string[];
}
export interface MicrosoftADComponentInputs {
	readonly Name: string;
	readonly Password: string;
	readonly VpcSettings: VpcSettings;
	readonly CreateAlias?: (boolean | undefined) | undefined;
	readonly Edition?: (string | undefined) | undefined;
	readonly EnableSso?: (boolean | undefined) | undefined;
	readonly ShortName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SimpleAD extends CfnResource<SimpleADComponentInputs> implements SimpleADComponentOutputs {
	constructor(entity: ADKEntity, options: SimpleADComponentInputs) {
		super(entity, options.LogicalId, "AWS::DirectoryService::SimpleAD", options);
	}
	public readonly Alias: string;
	public readonly DnsIpAddresses: string[];
}
export interface SimpleADComponentOutputs {
	readonly Alias: string;
	readonly DnsIpAddresses: string[];
}
export interface SimpleADComponentInputs {
	readonly Name: string;
	readonly Password: string;
	readonly Size: string;
	readonly VpcSettings: VpcSettings;
	readonly CreateAlias?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EnableSso?: (boolean | undefined) | undefined;
	readonly ShortName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface VpcSettings {
	readonly SubnetIds: string[];
	readonly VpcId: string;
}
export default {
	MicrosoftAD: MicrosoftAD,
	SimpleAD: SimpleAD,
};
