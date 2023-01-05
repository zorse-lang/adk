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
	readonly properties?: AdminRequestApprovalProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: RequestApprovalProperties;
	readonly systemData?: SystemData;
}
export interface AdminRequestApprovalProperties {
	readonly adminAction?: "Approved" | "Rejected";
	readonly administrator?: string;
	readonly approvedPlans?: string[];
	readonly comment?: string;
	readonly displayName?: string;
	readonly offerId?: string;
	readonly plans?: PlanRequesterDetails[];
	readonly publisherId?: string;
}
export interface PlanDetails {
	readonly justification?: string;
	readonly planId?: string;
	readonly requestDate?: any;
	readonly status?: "Approved" | "None" | "Pending" | "Rejected";
}
export interface PlanRequesterDetails {
	readonly planDisplayName?: string;
	readonly planId?: string;
	readonly requesters?: UserRequestDetails[];
}
export interface RequestApprovalProperties {
	readonly isClosed?: boolean;
	readonly messageCode?: number;
	readonly offerDisplayName?: string;
	readonly offerId?: string;
	readonly plansDetails?: PlanDetails[];
	readonly publisherId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserRequestDetails {
	readonly date?: string;
	readonly justification?: string;
	readonly user?: string;
}
export default {
	"privateStores/adminRequestApprovals": privateStores_adminRequestApprovals,
	"privateStores/requestApprovals": privateStores_requestApprovals,
};
