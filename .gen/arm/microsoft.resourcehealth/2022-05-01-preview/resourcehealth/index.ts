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
	readonly properties?: EventProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: EventImpactedResourceProperties;
	readonly systemData?: SystemData;
}
export interface EventImpactedResourceProperties {
	readonly info?: KeyValueItem[];
	readonly targetRegion?: string;
	readonly targetResourceId?: string;
	readonly targetResourceType?: string;
}
export interface EventProperties {
	readonly additionalInformation?: EventPropertiesAdditionalInformation;
	readonly article?: EventPropertiesArticle;
	readonly description?: string;
	readonly duration?: number;
	readonly enableChatWithUs?: boolean;
	readonly enableMicrosoftSupport?: boolean;
	readonly eventLevel?: "Critical" | "Error" | "Informational" | "Warning";
	readonly eventSource?: "ResourceHealth" | "ServiceHealth";
	readonly eventType?:
		| "EmergingIssues"
		| "HealthAdvisory"
		| "PlannedMaintenance"
		| "RCA"
		| "SecurityAdvisory"
		| "ServiceIssue";
	readonly externalIncidentId?: string;
	readonly faqs?: Faq[];
	readonly header?: string;
	readonly hirStage?: string;
	readonly impact?: Impact[];
	readonly impactMitigationTime?: string;
	readonly impactStartTime?: string;
	readonly impactType?: string;
	readonly isHIR?: boolean;
	readonly lastUpdateTime?: string;
	readonly level?: "Critical" | "Warning";
	readonly links?: Link[];
	readonly platformInitiated?: boolean;
	readonly priority?: number;
	readonly recommendedActions?: EventPropertiesRecommendedActions;
	readonly status?: "Active" | "Resolved";
	readonly summary?: string;
	readonly title?: string;
}
export interface EventPropertiesAdditionalInformation {
	readonly message?: string;
}
export interface EventPropertiesArticle {
	readonly articleContent?: string;
}
export interface EventPropertiesRecommendedActions {
	readonly actions?: EventPropertiesRecommendedActionsItem[];
	readonly localeCode?: string;
	readonly message?: string;
}
export interface EventPropertiesRecommendedActionsItem {
	readonly actionText?: string;
	readonly groupId?: number;
}
export interface Faq {
	readonly answer?: string;
	readonly localeCode?: string;
	readonly question?: string;
}
export interface Impact {
	readonly impactedRegions?: ImpactedServiceRegion[];
	readonly impactedService?: string;
}
export interface ImpactedServiceRegion {
	readonly impactedRegion?: string;
	readonly impactedSubscriptions?: string[];
	readonly impactedTenants?: string[];
	readonly lastUpdateTime?: string;
	readonly status?: "Active" | "Resolved";
	readonly updates?: Update[];
}
export interface KeyValueItem {
	readonly key?: string;
	readonly value?: string;
}
export interface Link {
	readonly bladeName?: string;
	readonly displayText?: LinkDisplayText;
	readonly extensionName?: string;
	readonly parameters?: any;
	readonly type?: "Button" | "Hyperlink";
}
export interface LinkDisplayText {
	readonly localizedValue?: string;
	readonly value?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Update {
	readonly summary?: string;
	readonly updateDateTime?: string;
}
export default {
	events: events,
	"events/impactedResources": events_impactedResources,
};
