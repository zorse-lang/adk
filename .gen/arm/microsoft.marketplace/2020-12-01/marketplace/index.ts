import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateStores_adminRequestApprovals
	extends ArmResource<privateStores_adminRequestApprovalsComponentInputs>
	implements privateStores_adminRequestApprovalsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_adminRequestApprovalsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/adminRequestApprovals", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/adminRequestApprovals";
}
export interface privateStores_adminRequestApprovalsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/adminRequestApprovals";
}
export interface privateStores_adminRequestApprovalsComponentInputs {
	readonly name: string;
	readonly properties?: AdminRequestApprovalProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateStores_requestApprovals
	extends ArmResource<privateStores_requestApprovalsComponentInputs>
	implements privateStores_requestApprovalsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_requestApprovalsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/requestApprovals", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/requestApprovals";
}
export interface privateStores_requestApprovalsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/requestApprovals";
}
export interface privateStores_requestApprovalsComponentInputs {
	readonly name: string;
	readonly properties?: RequestApprovalProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AdminRequestApprovalProperties {
	readonly adminAction?: ("Approved" | "Rejected") | undefined;
	readonly administrator?: string | undefined;
	readonly approvedPlans?: string[] | undefined;
	readonly comment?: string | undefined;
	readonly displayName?: string | undefined;
	readonly offerId?: string | undefined;
	readonly plans?: PlanRequesterDetails[] | undefined;
	readonly publisherId?: string | undefined;
}
export interface PlanDetails {
	readonly justification?: string | undefined;
	readonly planId?: string | undefined;
	readonly requestDate?: any | undefined;
	readonly status?: ("Approved" | "None" | "Pending" | "Rejected") | undefined;
}
export interface PlanRequesterDetails {
	readonly planDisplayName?: string | undefined;
	readonly planId?: string | undefined;
	readonly requesters?: UserRequestDetails[] | undefined;
}
export interface RequestApprovalProperties {
	readonly isClosed?: boolean | undefined;
	readonly messageCode?: number | undefined;
	readonly offerDisplayName?: string | undefined;
	readonly offerId?: string | undefined;
	readonly plansDetails?: PlanDetails[] | undefined;
	readonly publisherId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserRequestDetails {
	readonly date?: string | undefined;
	readonly justification?: string | undefined;
	readonly user?: string | undefined;
}
export default {
	"privateStores/adminRequestApprovals": privateStores_adminRequestApprovals,
	"privateStores/requestApprovals": privateStores_requestApprovals,
};
