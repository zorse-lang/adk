import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applications extends ArmResource<applicationsComponentInputs> implements applicationsComponentOutputs {
	constructor(entity: ADKEntity, options: applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/applications", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/applications";
}
export interface applicationsComponentInputs {
	readonly name: string;
	readonly properties?: ApplicationProperties;
}
export interface ApplicationProperties {
	readonly conditionSets: any[];
	readonly description?: string;
	readonly displayName?: string;
	readonly sourceResourceType: "Assessments";
}
export default {
	applications: applications,
};
