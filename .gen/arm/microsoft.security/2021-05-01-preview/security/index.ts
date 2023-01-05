import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class softwareInventories
	extends ArmResource<softwareInventoriesComponentInputs>
	implements softwareInventoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: softwareInventoriesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/softwareInventories", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/softwareInventories";
}
export interface softwareInventoriesComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/softwareInventories";
}
export interface softwareInventoriesComponentInputs {
	readonly name: string;
	readonly properties?: SoftwareProperties;
}
export interface SoftwareProperties {
	readonly deviceId?: string;
	readonly endOfSupportDate?: string;
	readonly endOfSupportStatus?:
		| "None"
		| "noLongerSupported"
		| "upcomingNoLongerSupported"
		| "upcomingVersionNoLongerSupported"
		| "versionNoLongerSupported";
	readonly firstSeenAt?: string;
	readonly numberOfKnownVulnerabilities?: number;
	readonly osPlatform?: string;
	readonly softwareName?: string;
	readonly vendor?: string;
	readonly version?: string;
}
export default {
	softwareInventories: softwareInventories,
};
