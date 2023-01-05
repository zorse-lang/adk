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
	readonly etag?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AssignmentProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
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
	readonly etag?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: StandardProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
}
export interface AssignedComponentItem {
	readonly key?: string;
}
export interface AssignedStandardItem {
	readonly id?: string;
}
export interface AssignmentProperties {
	readonly additionalData?: AssignmentPropertiesAdditionalData;
	readonly assignedComponent?: AssignedComponentItem;
	readonly assignedStandard?: AssignedStandardItem;
	readonly description?: string;
	readonly displayName?: string;
	readonly effect?: string;
	readonly expiresOn?: string;
	readonly metadata?: any;
	readonly scope?: string;
}
export interface AssignmentPropertiesAdditionalData {
	readonly exemptionCategory?: string;
}
export interface StandardComponentProperties {
	readonly key?: string;
}
export interface StandardProperties {
	readonly category?: string;
	readonly components?: StandardComponentProperties[];
	readonly description?: string;
	readonly displayName?: string;
	readonly standardType?: string;
	readonly supportedClouds?: "AWS"[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Tags {
	readonly [key: string]: string;
}
export default {
	assignments: assignments,
	standards: standards,
};
