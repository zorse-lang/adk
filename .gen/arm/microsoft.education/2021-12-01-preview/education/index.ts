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
	readonly properties?: GrantDetailProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: LabProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: JoinRequestProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: StudentProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: StudentLabProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface Amount {
	readonly currency?: string | undefined;
	readonly value?: number | undefined;
}
export interface GrantDetailProperties {
	readonly allocatedBudget?: Amount | undefined;
	readonly effectiveDate?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly offerCap?: Amount | undefined;
	readonly offerType?: ("Academic" | "Student") | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface JoinRequestProperties {
	readonly email?: string | undefined;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
	readonly status?: ("Denied" | "Pending") | undefined;
}
export interface LabProperties {
	readonly budgetPerStudent: Amount;
	readonly description: string;
	readonly displayName: string;
	readonly effectiveDate?: string | undefined;
	readonly expirationDate: string;
	readonly invitationCode?: string | undefined;
	readonly maxStudentCount?: number | undefined;
	readonly status?: ("Active" | "Deleted" | "Pending") | undefined;
	readonly totalAllocatedBudget?: Amount | undefined;
	readonly totalBudget?: Amount | undefined;
}
export interface StudentLabProperties {
	readonly budget?: Amount | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly effectiveDate?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly labScope?: string | undefined;
	readonly role?: ("Admin" | "Student") | undefined;
	readonly status?: ("Active" | "Deleted" | "Disabled" | "Expired" | "Pending") | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface StudentProperties {
	readonly budget: Amount;
	readonly effectiveDate?: string | undefined;
	readonly email: string;
	readonly expirationDate: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly role: "Admin" | "Student";
	readonly status?: ("Active" | "Deleted" | "Disabled" | "Expired" | "Pending") | undefined;
	readonly subscriptionAlias?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly subscriptionInviteLastSentDate?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	grants: grants,
	labs: labs,
	"labs/joinRequests": labs_joinRequests,
	"labs/students": labs_students,
	studentLabs: studentLabs,
};
