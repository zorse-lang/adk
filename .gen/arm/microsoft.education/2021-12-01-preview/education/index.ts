import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class grants extends ArmResource<grantsComponentInputs> implements grantsComponentOutputs {
	constructor(entity: ADKEntity, options: grantsComponentInputs) {
		super(entity, options.name, "Microsoft.Education/grants", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Education/grants";
}
export interface grantsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Education/grants";
}
export interface grantsComponentInputs {
	readonly name: string;
	readonly properties?: GrantDetailProperties;
	readonly systemData?: SystemData;
}
export class labs extends ArmResource<labsComponentInputs> implements labsComponentOutputs {
	constructor(entity: ADKEntity, options: labsComponentInputs) {
		super(entity, options.name, "Microsoft.Education/labs", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Education/labs";
}
export interface labsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Education/labs";
}
export interface labsComponentInputs {
	readonly name: string;
	readonly properties?: LabProperties;
	readonly systemData?: SystemData;
}
export class labs_joinRequests
	extends ArmResource<labs_joinRequestsComponentInputs>
	implements labs_joinRequestsComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_joinRequestsComponentInputs) {
		super(entity, options.name, "Microsoft.Education/labs/joinRequests", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Education/labs/joinRequests";
}
export interface labs_joinRequestsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Education/labs/joinRequests";
}
export interface labs_joinRequestsComponentInputs {
	readonly name: string;
	readonly properties?: JoinRequestProperties;
	readonly systemData?: SystemData;
}
export class labs_students extends ArmResource<labs_studentsComponentInputs> implements labs_studentsComponentOutputs {
	constructor(entity: ADKEntity, options: labs_studentsComponentInputs) {
		super(entity, options.name, "Microsoft.Education/labs/students", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Education/labs/students";
}
export interface labs_studentsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Education/labs/students";
}
export interface labs_studentsComponentInputs {
	readonly name: string;
	readonly properties?: StudentProperties;
	readonly systemData?: SystemData;
}
export class studentLabs extends ArmResource<studentLabsComponentInputs> implements studentLabsComponentOutputs {
	constructor(entity: ADKEntity, options: studentLabsComponentInputs) {
		super(entity, options.name, "Microsoft.Education/studentLabs", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Education/studentLabs";
}
export interface studentLabsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Education/studentLabs";
}
export interface studentLabsComponentInputs {
	readonly name: string;
	readonly properties?: StudentLabProperties;
	readonly systemData?: SystemData;
}
export interface Amount {
	readonly currency?: string;
	readonly value?: number;
}
export interface GrantDetailProperties {
	readonly allocatedBudget?: Amount;
	readonly effectiveDate?: string;
	readonly expirationDate?: string;
	readonly offerCap?: Amount;
	readonly offerType?: "Academic" | "Student";
	readonly status?: "Active" | "Inactive";
}
export interface JoinRequestProperties {
	readonly email?: string;
	readonly firstName?: string;
	readonly lastName?: string;
	readonly status?: "Denied" | "Pending";
}
export interface LabProperties {
	readonly budgetPerStudent: Amount;
	readonly description: string;
	readonly displayName: string;
	readonly effectiveDate?: string;
	readonly expirationDate: string;
	readonly invitationCode?: string;
	readonly maxStudentCount?: number;
	readonly status?: "Active" | "Deleted" | "Pending";
	readonly totalAllocatedBudget?: Amount;
	readonly totalBudget?: Amount;
}
export interface StudentLabProperties {
	readonly budget?: Amount;
	readonly description?: string;
	readonly displayName?: string;
	readonly effectiveDate?: string;
	readonly expirationDate?: string;
	readonly labScope?: string;
	readonly role?: "Admin" | "Student";
	readonly status?: "Active" | "Deleted" | "Disabled" | "Expired" | "Pending";
	readonly subscriptionId?: string;
}
export interface StudentProperties {
	readonly budget: Amount;
	readonly effectiveDate?: string;
	readonly email: string;
	readonly expirationDate: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly role: "Admin" | "Student";
	readonly status?: "Active" | "Deleted" | "Disabled" | "Expired" | "Pending";
	readonly subscriptionAlias?: string;
	readonly subscriptionId?: string;
	readonly subscriptionInviteLastSentDate?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	grants: grants,
	labs: labs,
	"labs/joinRequests": labs_joinRequests,
	"labs/students": labs_students,
	studentLabs: studentLabs,
};
