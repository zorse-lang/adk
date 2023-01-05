import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vmInsightsOnboardingStatuses
	extends ArmResource<vmInsightsOnboardingStatusesComponentInputs>
	implements vmInsightsOnboardingStatusesComponentOutputs
{
	constructor(entity: ADKEntity, options: vmInsightsOnboardingStatusesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/vmInsightsOnboardingStatuses", "2018-11-27-preview", options);
	}
	public readonly apiVersion: "2018-11-27-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/vmInsightsOnboardingStatuses";
}
export interface vmInsightsOnboardingStatusesComponentOutputs {
	readonly apiVersion: "2018-11-27-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/vmInsightsOnboardingStatuses";
}
export interface vmInsightsOnboardingStatusesComponentInputs {
	readonly name: string;
	readonly properties?: VMInsightsOnboardingStatusProperties;
}
export interface DataContainer {
	readonly workspace: WorkspaceInfo;
}
export interface VMInsightsOnboardingStatusProperties {
	readonly data?: DataContainer[];
	readonly dataStatus: "notPresent" | "present";
	readonly onboardingStatus: "notOnboarded" | "onboarded" | "unknown";
	readonly resourceId: string;
}
export interface WorkspaceInfo {
	readonly id: string;
	readonly location: string;
	readonly properties: WorkspaceInfoProperties;
}
export interface WorkspaceInfoProperties {
	readonly customerId: string;
}
export default {
	vmInsightsOnboardingStatuses: vmInsightsOnboardingStatuses,
};
