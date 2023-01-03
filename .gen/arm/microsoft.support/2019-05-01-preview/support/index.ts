import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class supportTickets extends ArmResource<supportTicketsComponentInputs> implements supportTicketsComponentOutputs {
	constructor(entity: ADKEntity, options: supportTicketsComponentInputs) {
		super(entity, options.name, "Microsoft.Support/supportTickets", "2019-05-01-preview", options);
	}
	public readonly apiVersion: "2019-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Support/supportTickets";
}
export interface supportTicketsComponentOutputs {
	readonly apiVersion: "2019-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Support/supportTickets";
}
export interface supportTicketsComponentInputs {
	readonly name: string;
	readonly properties?: SupportTicketDetailsProperties | undefined;
}
export class supportTickets_communications
	extends ArmResource<supportTickets_communicationsComponentInputs>
	implements supportTickets_communicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: supportTickets_communicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Support/supportTickets/communications", "2019-05-01-preview", options);
	}
	public readonly apiVersion: "2019-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Support/supportTickets/communications";
}
export interface supportTickets_communicationsComponentOutputs {
	readonly apiVersion: "2019-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Support/supportTickets/communications";
}
export interface supportTickets_communicationsComponentInputs {
	readonly name: string;
	readonly properties?: CommunicationDetailsProperties | undefined;
}
export interface CommunicationDetailsProperties {
	readonly body: string;
	readonly communicationDirection?: ("inbound" | "outbound") | undefined;
	readonly communicationType?: ("phone" | "web") | undefined;
	readonly createdDate?: string | undefined;
	readonly sender?: string | undefined;
	readonly subject: string;
}
export interface ContactProfile {
	readonly additionalEmailAddresses?: string[] | undefined;
	readonly country: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly phoneNumber?: string | undefined;
	readonly preferredContactMethod: "email" | "phone";
	readonly preferredSupportLanguage: string;
	readonly preferredTimeZone: string;
	readonly primaryEmailAddress: string;
}
export interface QuotaChangeRequest {
	readonly payload?: string | undefined;
	readonly region?: string | undefined;
}
export interface QuotaTicketDetails {
	readonly quotaChangeRequests?: QuotaChangeRequest[] | undefined;
	readonly quotaChangeRequestSubType?: string | undefined;
	readonly quotaChangeRequestVersion?: string | undefined;
}
export interface ServiceLevelAgreement {
	readonly expirationTime?: string | undefined;
	readonly slaMinutes?: number | undefined;
	readonly startTime?: string | undefined;
}
export interface SupportEngineer {
	readonly emailAddress?: string | undefined;
}
export interface SupportTicketDetailsProperties {
	readonly contactDetails: ContactProfile;
	readonly createdDate?: string | undefined;
	readonly description: string;
	readonly enrollmentId?: string | undefined;
	readonly modifiedDate?: string | undefined;
	readonly problemClassificationDisplayName?: string | undefined;
	readonly problemClassificationId: string;
	readonly problemStartTime?: string | undefined;
	readonly productionOutage?: boolean | undefined;
	readonly quotaTicketDetails?: QuotaTicketDetails | undefined;
	readonly require24X7Response?: boolean | undefined;
	readonly serviceDisplayName?: string | undefined;
	readonly serviceId: string;
	readonly serviceLevelAgreement?: ServiceLevelAgreement | undefined;
	readonly severity: "critical" | "minimal" | "moderate";
	readonly status?: string | undefined;
	readonly supportEngineer?: SupportEngineer | undefined;
	readonly supportPlanType?: string | undefined;
	readonly supportTicketId?: string | undefined;
	readonly technicalTicketDetails?: TechnicalTicketDetails | undefined;
	readonly title: string;
}
export interface TechnicalTicketDetails {
	readonly resourceId?: string | undefined;
}
export default {
	supportTickets: supportTickets,
	"supportTickets/communications": supportTickets_communications,
};
