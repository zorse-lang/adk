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
	readonly properties?: SoftwareProperties | undefined;
}
export interface SoftwareProperties {
	readonly deviceId?: string | undefined;
	readonly endOfSupportDate?: string | undefined;
	readonly endOfSupportStatus?:
		| (
				| "None"
				| "noLongerSupported"
				| "upcomingNoLongerSupported"
				| "upcomingVersionNoLongerSupported"
				| "versionNoLongerSupported"
		  )
		| undefined;
	readonly firstSeenAt?: string | undefined;
	readonly numberOfKnownVulnerabilities?: number | undefined;
	readonly osPlatform?: string | undefined;
	readonly softwareName?: string | undefined;
	readonly vendor?: string | undefined;
	readonly version?: string | undefined;
}
export default {
	softwareInventories: softwareInventories,
};
