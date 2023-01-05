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
	readonly properties?: SupportTicketDetailsProperties;
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
	readonly properties?: CommunicationDetailsProperties;
}
export interface CommunicationDetailsProperties {
	readonly body: string;
	readonly communicationDirection?: "inbound" | "outbound";
	readonly communicationType?: "phone" | "web";
	readonly createdDate?: string;
	readonly sender?: string;
	readonly subject: string;
}
export interface ContactProfile {
	readonly additionalEmailAddresses?: string[];
	readonly country: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly phoneNumber?: string;
	readonly preferredContactMethod: "email" | "phone";
	readonly preferredSupportLanguage: string;
	readonly preferredTimeZone: string;
	readonly primaryEmailAddress: string;
}
export interface QuotaChangeRequest {
	readonly payload?: string;
	readonly region?: string;
}
export interface QuotaTicketDetails {
	readonly quotaChangeRequests?: QuotaChangeRequest[];
	readonly quotaChangeRequestSubType?: string;
	readonly quotaChangeRequestVersion?: string;
}
export interface ServiceLevelAgreement {
	readonly expirationTime?: string;
	readonly slaMinutes?: number;
	readonly startTime?: string;
}
export interface SupportEngineer {
	readonly emailAddress?: string;
}
export interface SupportTicketDetailsProperties {
	readonly contactDetails: ContactProfile;
	readonly createdDate?: string;
	readonly description: string;
	readonly enrollmentId?: string;
	readonly modifiedDate?: string;
	readonly problemClassificationDisplayName?: string;
	readonly problemClassificationId: string;
	readonly problemStartTime?: string;
	readonly productionOutage?: boolean;
	readonly quotaTicketDetails?: QuotaTicketDetails;
	readonly require24X7Response?: boolean;
	readonly serviceDisplayName?: string;
	readonly serviceId: string;
	readonly serviceLevelAgreement?: ServiceLevelAgreement;
	readonly severity: "critical" | "minimal" | "moderate";
	readonly status?: string;
	readonly supportEngineer?: SupportEngineer;
	readonly supportPlanType?: string;
	readonly supportTicketId?: string;
	readonly technicalTicketDetails?: TechnicalTicketDetails;
	readonly title: string;
}
export interface TechnicalTicketDetails {
	readonly resourceId?: string;
}
export default {
	supportTickets: supportTickets,
	"supportTickets/communications": supportTickets_communications,
};
