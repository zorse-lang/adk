import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class PidOrganization
	extends RosResource<PidOrganizationComponentInputs>
	implements PidOrganizationComponentOutputs
{
	constructor(entity: ADKEntity, options: PidOrganizationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::BrainIndustrial::PidOrganization", options);
	}
	public readonly PidOrganizationLevel: any;
	public readonly PidOrganizationId: any;
}
export interface PidOrganizationComponentOutputs {
	readonly PidOrganizationLevel: any;
	readonly PidOrganizationId: any;
}
export interface PidOrganizationComponentInputs {
	readonly PidOrganizationName: any | string;
	readonly ParentPidOrganizationId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class PidProject extends RosResource<PidProjectComponentInputs> implements PidProjectComponentOutputs {
	constructor(entity: ADKEntity, options: PidProjectComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::BrainIndustrial::PidProject", options);
	}
	public readonly PidProjectId: any;
}
export interface PidProjectComponentOutputs {
	readonly PidProjectId: any;
}
export interface PidProjectComponentInputs {
	readonly PidOrganizationId: any | string;
	readonly PidProjectName: any | string;
	readonly PidProjectDesc?: (any | string) | undefined;
	readonly LogicalId: string;
}
export default {
	PidOrganization: PidOrganization,
	PidProject: PidProject,
};
