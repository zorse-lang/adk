import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class events extends ArmResource<eventsComponentInputs> implements eventsComponentOutputs {
	constructor(entity: ADKEntity, options: eventsComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceHealth/events", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceHealth/events";
}
export interface eventsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ResourceHealth/events";
}
export interface eventsComponentInputs {
	readonly name: string;
	readonly properties?: EventProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class events_impactedResources
	extends ArmResource<events_impactedResourcesComponentInputs>
	implements events_impactedResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: events_impactedResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceHealth/events/impactedResources", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceHealth/events/impactedResources";
}
export interface events_impactedResourcesComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ResourceHealth/events/impactedResources";
}
export interface events_impactedResourcesComponentInputs {
	readonly name: string;
	readonly properties?: EventImpactedResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface EventImpactedResourceProperties {
	readonly info?: KeyValueItem[] | undefined;
	readonly targetRegion?: string | undefined;
	readonly targetResourceId?: string | undefined;
	readonly targetResourceType?: string | undefined;
}
export interface EventProperties {
	readonly additionalInformation?: EventPropertiesAdditionalInformation | undefined;
	readonly article?: EventPropertiesArticle | undefined;
	readonly description?: string | undefined;
	readonly duration?: number | undefined;
	readonly enableChatWithUs?: boolean | undefined;
	readonly enableMicrosoftSupport?: boolean | undefined;
	readonly eventLevel?: ("Critical" | "Error" | "Informational" | "Warning") | undefined;
	readonly eventSource?: ("ResourceHealth" | "ServiceHealth") | undefined;
	readonly eventType?:
		| ("EmergingIssues" | "HealthAdvisory" | "PlannedMaintenance" | "RCA" | "SecurityAdvisory" | "ServiceIssue")
		| undefined;
	readonly externalIncidentId?: string | undefined;
	readonly faqs?: Faq[] | undefined;
	readonly header?: string | undefined;
	readonly hirStage?: string | undefined;
	readonly impact?: Impact[] | undefined;
	readonly impactMitigationTime?: string | undefined;
	readonly impactStartTime?: string | undefined;
	readonly impactType?: string | undefined;
	readonly isHIR?: boolean | undefined;
	readonly lastUpdateTime?: string | undefined;
	readonly level?: ("Critical" | "Warning") | undefined;
	readonly links?: Link[] | undefined;
	readonly platformInitiated?: boolean | undefined;
	readonly priority?: number | undefined;
	readonly recommendedActions?: EventPropertiesRecommendedActions | undefined;
	readonly status?: ("Active" | "Resolved") | undefined;
	readonly summary?: string | undefined;
	readonly title?: string | undefined;
}
export interface EventPropertiesAdditionalInformation {
	readonly message?: string | undefined;
}
export interface EventPropertiesArticle {
	readonly articleContent?: string | undefined;
}
export interface EventPropertiesRecommendedActions {
	readonly actions?: EventPropertiesRecommendedActionsItem[] | undefined;
	readonly localeCode?: string | undefined;
	readonly message?: string | undefined;
}
export interface EventPropertiesRecommendedActionsItem {
	readonly actionText?: string | undefined;
	readonly groupId?: number | undefined;
}
export interface Faq {
	readonly answer?: string | undefined;
	readonly localeCode?: string | undefined;
	readonly question?: string | undefined;
}
export interface Impact {
	readonly impactedRegions?: ImpactedServiceRegion[] | undefined;
	readonly impactedService?: string | undefined;
}
export interface ImpactedServiceRegion {
	readonly impactedRegion?: string | undefined;
	readonly impactedSubscriptions?: string[] | undefined;
	readonly impactedTenants?: string[] | undefined;
	readonly lastUpdateTime?: string | undefined;
	readonly status?: ("Active" | "Resolved") | undefined;
	readonly updates?: Update[] | undefined;
}
export interface KeyValueItem {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface Link {
	readonly bladeName?: string | undefined;
	readonly displayText?: LinkDisplayText | undefined;
	readonly extensionName?: string | undefined;
	readonly parameters?: any | undefined;
	readonly type?: ("Button" | "Hyperlink") | undefined;
}
export interface LinkDisplayText {
	readonly localizedValue?: string | undefined;
	readonly value?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Update {
	readonly summary?: string | undefined;
	readonly updateDateTime?: string | undefined;
}
export default {
	events: events,
	"events/impactedResources": events_impactedResources,
};
