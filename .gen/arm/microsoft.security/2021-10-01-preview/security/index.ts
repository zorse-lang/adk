import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class mdeOnboardings extends ArmResource<mdeOnboardingsComponentInputs> implements mdeOnboardingsComponentOutputs {
	constructor(entity: ADKEntity, options: mdeOnboardingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/mdeOnboardings", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/mdeOnboardings";
}
export interface mdeOnboardingsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/mdeOnboardings";
}
export interface mdeOnboardingsComponentInputs {
	readonly name: string;
	readonly properties?: MdeOnboardingDataProperties | undefined;
}
export interface MdeOnboardingDataProperties {
	readonly onboardingPackageLinux?: any | undefined;
	readonly onboardingPackageWindows?: any | undefined;
}
export default {
	mdeOnboardings: mdeOnboardings,
};
