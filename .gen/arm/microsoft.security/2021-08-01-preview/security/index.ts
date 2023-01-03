import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class assignments extends ArmResource<assignmentsComponentInputs> implements assignmentsComponentOutputs {
	constructor(entity: ADKEntity, options: assignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assignments", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assignments";
}
export interface assignmentsComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/assignments";
}
export interface assignmentsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AssignmentProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export class standards extends ArmResource<standardsComponentInputs> implements standardsComponentOutputs {
	constructor(entity: ADKEntity, options: standardsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/standards", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/standards";
}
export interface standardsComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/standards";
}
export interface standardsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StandardProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export interface AssignedComponentItem {
	readonly key?: string | undefined;
}
export interface AssignedStandardItem {
	readonly id?: string | undefined;
}
export interface AssignmentProperties {
	readonly additionalData?: AssignmentPropertiesAdditionalData | undefined;
	readonly assignedComponent?: AssignedComponentItem | undefined;
	readonly assignedStandard?: AssignedStandardItem | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly effect?: string | undefined;
	readonly expiresOn?: string | undefined;
	readonly metadata?: any | undefined;
	readonly scope?: string | undefined;
}
export interface AssignmentPropertiesAdditionalData {
	readonly exemptionCategory?: string | undefined;
}
export interface StandardComponentProperties {
	readonly key?: string | undefined;
}
export interface StandardProperties {
	readonly category?: string | undefined;
	readonly components?: StandardComponentProperties[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly standardType?: string | undefined;
	readonly supportedClouds?: "AWS"[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	assignments: assignments,
	standards: standards,
};
